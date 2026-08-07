/* =============================================================================
   STORAGE.JS — Camada de persistência à prova de falha
   -----------------------------------------------------------------------------
   Regras de ouro implementadas aqui (Regra B do briefing):
     1. navigator.storage.persist() na abertura.
     2. Gravação SEMPRE em duas camadas: localStorage (síncrono, imediato, SEM
        debounce) + IndexedDB (cópia principal) + backups rotativos datados.
     3. Gravação também em pagehide, beforeunload, visibilitychange e freeze.
     4. Na abertura: se uma das cópias sumiu, restaura sozinho da outra ou do
        backup mais recente e avisa numa faixa visível.
     5. NENHUM catch vazio. Todo erro de gravação vira faixa vermelha na tela.
     6. Backup completo em .json (exportar/restaurar) + lembrete a cada 7 dias.

   Funciona igual no shell e dentro dos iframes (mesma origem => mesmo storage).
   Avisos gerados dentro de um iframe são encaminhados para a faixa do shell.
   ========================================================================== */
(function (root) {
  'use strict';

  var NS = 'mtb:';
  var DB_NAME = 'mtb-db';
  var DB_VER = 1;
  var MAX_BACKUPS = 12;
  var SNAP_LS_LIMITE = 1500000;      // não espelha snapshot no LS acima disso
  var DIAS_LEMBRETE_BACKUP = 7;

  // Todos os módulos que persistem estado. Backup completo cobre esta lista.
  var MODULOS = [
    'questoes',     // progresso, respostas, acertos, "continuar de onde parei"
    'cronograma',   // checklist de blocos cumpridos
    'materiais',    // marcações de leitura
    'simulados',    // provas realizadas e resultados
    'flashcards',   // agendamento SM-2
    'treino',       // XP, vidas, ofensiva, fases concluídas
    'planilha',     // log de erros
    'meta'          // preferências, datas de backup, versão
  ];

  var mem = {};            // cache em memória: modulo -> envelope
  var db = null;
  var pronto = false;
  var filaProntos = [];
  var avisos = [];
  var escutasAviso = [];
  var escritasDesdeSnapshot = 0;

  // ---------------------------------------------------------------- avisos --
  function avisar(nivel, texto, detalhe) {
    var a = { nivel: nivel, texto: texto, detalhe: detalhe || '', ts: Date.now() };
    avisos.push(a);
    // Encaminha para o shell quando estamos dentro de um iframe.
    try {
      if (root.parent && root.parent !== root && root.parent.MTB_AVISO) {
        root.parent.MTB_AVISO(a);
      }
    } catch (e) {
      /* origem diferente — não deve acontecer, mas não pode derrubar a gravação */
      console.warn('[storage] não consegui encaminhar aviso ao shell:', e);
    }
    escutasAviso.forEach(function (fn) {
      try { fn(a); } catch (e) { console.error('[storage] listener de aviso falhou', e); }
    });
    if (nivel === 'erro') { console.error('[storage] ' + texto, detalhe || ''); }
    else { console.warn('[storage] ' + texto, detalhe || ''); }
    return a;
  }

  // ------------------------------------------------------------- envelopes --
  function envelope(dados) { return { _v: 1, _t: Date.now(), d: dados }; }
  function vazio(env) {
    if (!env || !env.d) return true;
    if (Array.isArray(env.d)) return env.d.length === 0;
    if (typeof env.d === 'object') return Object.keys(env.d).length === 0;
    return false;
  }

  // ---------------------------------------------------------- localStorage --
  function lsLer(mod) {
    var bruto;
    try {
      bruto = localStorage.getItem(NS + mod);
    } catch (e) {
      avisar('erro', 'Não consegui LER o armazenamento local (localStorage).',
        'Módulo "' + mod + '": ' + e.message);
      return null;
    }
    if (bruto == null) return null;
    try {
      return JSON.parse(bruto);
    } catch (e) {
      avisar('erro', 'Dados corrompidos no localStorage do módulo "' + mod + '".',
        e.message + ' — vou tentar recuperar do IndexedDB ou do backup.');
      return null;
    }
  }

  function lsGravar(mod, env) {
    try {
      localStorage.setItem(NS + mod, JSON.stringify(env));
      return true;
    } catch (e) {
      if (e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014)) {
        // Tenta liberar espaço descartando o snapshot espelhado e repetindo.
        try { localStorage.removeItem(NS + '__snapshot__'); } catch (e2) {
          console.error('[storage] falha ao remover snapshot do LS', e2);
        }
        try {
          localStorage.setItem(NS + mod, JSON.stringify(env));
          avisar('aviso', 'O armazenamento local encheu. Liberei espaço e salvei, ' +
            'mas faça um BACKUP em arquivo agora.', 'Módulo: ' + mod);
          return true;
        } catch (e3) {
          avisar('erro', 'NÃO CONSEGUI SALVAR: o armazenamento local está cheio.',
            'Módulo "' + mod + '". Exporte o backup .json imediatamente. ' + e3.message);
          return false;
        }
      }
      avisar('erro', 'NÃO CONSEGUI SALVAR no armazenamento local.',
        'Módulo "' + mod + '": ' + e.message);
      return false;
    }
  }

  // ------------------------------------------------------------- IndexedDB --
  function abrirDB() {
    return new Promise(function (resolve) {
      if (!root.indexedDB) {
        avisar('aviso', 'Este navegador não expôs o IndexedDB. Os dados ficam só no ' +
          'localStorage — faça backup em arquivo com mais frequência.');
        return resolve(null);
      }
      var req;
      try {
        req = indexedDB.open(DB_NAME, DB_VER);
      } catch (e) {
        avisar('erro', 'Falha ao abrir o banco IndexedDB.', e.message);
        return resolve(null);
      }
      req.onupgradeneeded = function (ev) {
        var d = ev.target.result;
        if (!d.objectStoreNames.contains('kv')) { d.createObjectStore('kv', { keyPath: 'k' }); }
        if (!d.objectStoreNames.contains('backups')) { d.createObjectStore('backups', { keyPath: 'id' }); }
      };
      req.onsuccess = function () {
        var d = req.result;
        d.onerror = function (ev) {
          avisar('erro', 'Erro no IndexedDB durante uma operação.',
            (ev.target && ev.target.error && ev.target.error.message) || 'sem detalhe');
        };
        resolve(d);
      };
      req.onerror = function () {
        avisar('erro', 'Não consegui abrir o IndexedDB (cópia principal dos dados).',
          (req.error && req.error.message) || 'sem detalhe');
        resolve(null);
      };
      req.onblocked = function () {
        avisar('aviso', 'O IndexedDB está bloqueado por outra aba do app. Feche as ' +
          'outras abas para garantir a gravação.');
      };
    });
  }

  function idbPut(store, valor) {
    return new Promise(function (resolve) {
      if (!db) return resolve(false);
      var tx;
      try {
        tx = db.transaction(store, 'readwrite');
      } catch (e) {
        avisar('erro', 'Falha ao iniciar gravação no IndexedDB.', store + ': ' + e.message);
        return resolve(false);
      }
      tx.objectStore(store).put(valor);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = tx.onabort = function () {
        avisar('erro', 'Falha ao gravar no IndexedDB (cópia principal).',
          store + ': ' + ((tx.error && tx.error.message) || 'sem detalhe'));
        resolve(false);
      };
    });
  }

  function idbGetAll(store) {
    return new Promise(function (resolve) {
      if (!db) return resolve([]);
      var tx, req;
      try {
        tx = db.transaction(store, 'readonly');
        req = tx.objectStore(store).getAll();
      } catch (e) {
        avisar('erro', 'Falha ao ler o IndexedDB.', store + ': ' + e.message);
        return resolve([]);
      }
      req.onsuccess = function () { resolve(req.result || []); };
      req.onerror = function () {
        avisar('erro', 'Falha ao ler o IndexedDB.',
          store + ': ' + ((req.error && req.error.message) || 'sem detalhe'));
        resolve([]);
      };
    });
  }

  function idbDelete(store, chave) {
    return new Promise(function (resolve) {
      if (!db) return resolve(false);
      try {
        var tx = db.transaction(store, 'readwrite');
        tx.objectStore(store).delete(chave);
        tx.oncomplete = function () { resolve(true); };
        tx.onerror = function () { resolve(false); };
      } catch (e) {
        console.error('[storage] falha ao apagar backup antigo', e);
        resolve(false);
      }
    });
  }

  // --------------------------------------------------------------- backups --
  function montarSnapshot() {
    var s = { _app: 'medtrabalho-2026', _formato: 1, _criadoEm: new Date().toISOString(), dados: {} };
    MODULOS.forEach(function (m) { s.dados[m] = mem[m] || envelope(null); });
    return s;
  }

  function gravarBackupRotativo() {
    var snap = montarSnapshot();
    var id = snap._criadoEm;
    // Espelho leve no localStorage (última boa cópia), se couber.
    try {
      var txt = JSON.stringify(snap);
      if (txt.length <= SNAP_LS_LIMITE) {
        localStorage.setItem(NS + '__snapshot__', txt);
      }
    } catch (e) {
      avisar('aviso', 'Não consegui espelhar o snapshot no localStorage.', e.message);
    }
    return idbPut('backups', { id: id, snap: snap }).then(function () {
      return idbGetAll('backups');
    }).then(function (todos) {
      todos.sort(function (a, b) { return a.id < b.id ? 1 : -1; });
      var excedentes = todos.slice(MAX_BACKUPS);
      return Promise.all(excedentes.map(function (b) { return idbDelete('backups', b.id); }));
    }).catch(function (e) {
      avisar('erro', 'Falha ao gravar o backup rotativo.', e.message);
    });
  }

  function ultimoBackupIDB() {
    return idbGetAll('backups').then(function (todos) {
      if (!todos.length) return null;
      todos.sort(function (a, b) { return a.id < b.id ? 1 : -1; });
      return todos[0];
    });
  }

  // --------------------------------------------------------- API principal --
  function get(mod) {
    if (MODULOS.indexOf(mod) === -1) {
      throw new Error('Módulo desconhecido em Store.get: ' + mod);
    }
    var env = mem[mod];
    return env ? env.d : null;
  }

  function set(mod, dados) {
    if (MODULOS.indexOf(mod) === -1) {
      throw new Error('Módulo desconhecido em Store.set: ' + mod);
    }
    var env = envelope(dados);
    mem[mod] = env;

    // 1) localStorage — SÍNCRONO, IMEDIATO, sem debounce.
    var okLS = lsGravar(mod, env);

    // 2) IndexedDB — cópia principal, assíncrona.
    idbPut('kv', { k: mod, env: env }).then(function (okDB) {
      if (!okDB && !okLS) {
        avisar('erro', 'AS DUAS CÓPIAS FALHARAM ao salvar "' + mod + '". ' +
          'Exporte o backup .json agora para não perder os dados.');
      }
    });

    escritasDesdeSnapshot++;
    if (escritasDesdeSnapshot >= 25) { escritasDesdeSnapshot = 0; gravarBackupRotativo(); }

    try {
      root.dispatchEvent(new CustomEvent('mtb:alterado', { detail: { modulo: mod } }));
    } catch (e) { console.warn('[storage] não consegui emitir evento de alteração', e); }

    return okLS;
  }

  function patch(mod, fn) {
    var atual = get(mod);
    var novo = fn(atual);
    set(mod, novo === undefined ? atual : novo);
    return get(mod);
  }

  function flush() {
    escritasDesdeSnapshot = 0;
    // Reescreve tudo em ambas as camadas antes de sair.
    MODULOS.forEach(function (m) {
      if (mem[m]) { lsGravar(m, mem[m]); idbPut('kv', { k: m, env: mem[m] }); }
    });
    return gravarBackupRotativo();
  }

  // ----------------------------------------------------- init e recuperação --
  function pedirPersistencia() {
    if (!navigator.storage || !navigator.storage.persist) {
      avisar('aviso', 'Este navegador não permite marcar o armazenamento como ' +
        'persistente. Faça backup em arquivo com frequência.');
      return Promise.resolve(false);
    }
    return navigator.storage.persisted().then(function (jaE) {
      if (jaE) return true;
      return navigator.storage.persist();
    }).then(function (ok) {
      if (!ok) {
        avisar('aviso', 'O navegador NÃO garantiu armazenamento persistente. ' +
          'No Safari/iOS os dados podem ser apagados sozinhos — exporte o backup .json ' +
          'em arquivo regularmente.');
      }
      return ok;
    }).catch(function (e) {
      avisar('aviso', 'Falha ao solicitar armazenamento persistente.', e.message);
      return false;
    });
  }

  function reconciliar() {
    return idbGetAll('kv').then(function (linhas) {
      var doIDB = {};
      linhas.forEach(function (l) { doIDB[l.k] = l.env; });

      var restauradosDoIDB = [];
      var restauradosDoLS = [];
      var perdidos = [];

      MODULOS.forEach(function (m) {
        var envLS = lsLer(m);
        var envDB = doIDB[m] || null;

        if (envLS && envDB) {
          // Ambas existem — fica com a mais nova.
          mem[m] = (envDB._t || 0) > (envLS._t || 0) ? envDB : envLS;
          if ((envDB._t || 0) > (envLS._t || 0)) { lsGravar(m, envDB); }
        } else if (envDB && !envLS) {
          mem[m] = envDB;
          lsGravar(m, envDB);
          if (!vazio(envDB)) { restauradosDoIDB.push(m); }
        } else if (envLS && !envDB) {
          mem[m] = envLS;
          idbPut('kv', { k: m, env: envLS });
          if (!vazio(envLS)) { restauradosDoLS.push(m); }
        } else {
          mem[m] = null;
          perdidos.push(m);
        }
      });

      if (restauradosDoIDB.length) {
        avisar('info', 'Recuperação automática: o armazenamento local havia sido ' +
          'apagado. Restaurei ' + restauradosDoIDB.length + ' módulo(s) da cópia ' +
          'principal (IndexedDB).', restauradosDoIDB.join(', '));
      }
      if (restauradosDoLS.length) {
        avisar('info', 'Recuperação automática: a cópia principal (IndexedDB) estava ' +
          'incompleta. Reconstruí ' + restauradosDoLS.length + ' módulo(s) a partir do ' +
          'armazenamento local.', restauradosDoLS.join(', '));
      }
      if (!perdidos.length) return null;

      // Nada nas duas camadas para alguns módulos: tenta o backup mais recente.
      return ultimoBackupIDB().then(function (b) {
        var snap = b ? b.snap : null;
        var origem = 'backup rotativo de ' + (b ? new Date(b.id).toLocaleString('pt-BR') : '');
        if (!snap) {
          var txt = null;
          try { txt = localStorage.getItem(NS + '__snapshot__'); } catch (e) {
            avisar('erro', 'Falha ao ler o snapshot de emergência.', e.message);
          }
          if (txt) {
            try { snap = JSON.parse(txt); origem = 'snapshot de emergência'; }
            catch (e) { avisar('erro', 'O snapshot de emergência está corrompido.', e.message); }
          }
        }
        if (!snap || !snap.dados) return null;

        var recuperados = [];
        perdidos.forEach(function (m) {
          var env = snap.dados[m];
          if (env && !vazio(env)) {
            mem[m] = env;
            lsGravar(m, env);
            idbPut('kv', { k: m, env: env });
            recuperados.push(m);
          }
        });
        if (recuperados.length) {
          avisar('info', 'Recuperação automática: os dados haviam sumido das duas ' +
            'camadas. Restaurei ' + recuperados.length + ' módulo(s) do ' + origem + '.',
            recuperados.join(', '));
        }
        return null;
      });
    });
  }

  function checarLembreteBackup() {
    var meta = get('meta') || {};
    var ultimo = meta.ultimoBackupArquivo;
    if (!ultimo) {
      // Só cobra depois que já houver algum uso real.
      var temUso = MODULOS.some(function (m) { return m !== 'meta' && !vazio(mem[m]); });
      if (temUso) {
        avisar('aviso', 'Você ainda não exportou nenhum BACKUP em arquivo. ' +
          'Use o botão "Backup" no topo — é o que sobrevive se o iPad limpar o site.');
      }
      return;
    }
    var dias = (Date.now() - ultimo) / 86400000;
    if (dias >= DIAS_LEMBRETE_BACKUP) {
      avisar('aviso', 'Seu último backup em arquivo foi há ' + Math.floor(dias) +
        ' dias. Exporte um novo pelo botão "Backup".');
    }
  }

  function ligarGanchosDeSaida() {
    var salvarAgora = function () {
      MODULOS.forEach(function (m) { if (mem[m]) { lsGravar(m, mem[m]); } });
      gravarBackupRotativo();
    };
    root.addEventListener('pagehide', salvarAgora);
    root.addEventListener('beforeunload', salvarAgora);
    root.addEventListener('freeze', salvarAgora);
    root.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') { salvarAgora(); }
    });
    // Outra aba/iframe alterou algo: recarrega o cache em memória.
    root.addEventListener('storage', function (ev) {
      if (!ev.key || ev.key.indexOf(NS) !== 0) return;
      var mod = ev.key.slice(NS.length);
      if (MODULOS.indexOf(mod) === -1) return;
      var env = lsLer(mod);
      if (env) {
        mem[mod] = env;
        try {
          root.dispatchEvent(new CustomEvent('mtb:alterado',
            { detail: { modulo: mod, externo: true } }));
        } catch (e) { console.warn('[storage] evento externo falhou', e); }
      }
    });
  }

  function init() {
    if (init._iniciado) { return init._promessa; }
    init._iniciado = true;
    init._promessa = pedirPersistencia()
      .then(abrirDB)
      .then(function (d) { db = d; return reconciliar(); })
      .then(function () {
        MODULOS.forEach(function (m) { if (!mem[m]) { mem[m] = envelope(null); } });
        ligarGanchosDeSaida();
        checarLembreteBackup();
        pronto = true;
        filaProntos.forEach(function (fn) {
          try { fn(); } catch (e) { console.error('[storage] callback de ready falhou', e); }
        });
        filaProntos = [];
        return true;
      })
      .catch(function (e) {
        avisar('erro', 'Falha grave ao iniciar o armazenamento.', e && e.message);
        pronto = true;
        filaProntos.forEach(function (fn) { try { fn(); } catch (e2) { console.error(e2); } });
        filaProntos = [];
        return false;
      });
    return init._promessa;
  }

  function ready(fn) {
    if (pronto) { fn(); } else { filaProntos.push(fn); }
  }

  // ------------------------------------------------- backup manual (.json) --
  function exportarArquivo() {
    var snap = montarSnapshot();
    snap._tipo = 'backup-completo';
    var blob = new Blob([JSON.stringify(snap, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var d = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    a.href = url;
    a.download = 'backup-medtrabalho-' + d.getFullYear() + pad(d.getMonth() + 1) +
      pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);

    patch('meta', function (m) {
      m = m || {};
      m.ultimoBackupArquivo = Date.now();
      return m;
    });
    return a.download;
  }

  function importarArquivo(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = function () { reject(new Error('Não consegui ler o arquivo.')); };
      fr.onload = function () {
        var snap;
        try { snap = JSON.parse(fr.result); }
        catch (e) { return reject(new Error('Arquivo não é um JSON válido: ' + e.message)); }
        if (!snap || snap._app !== 'medtrabalho-2026' || !snap.dados) {
          return reject(new Error('Este arquivo não é um backup deste aplicativo.'));
        }
        var restaurados = [];
        MODULOS.forEach(function (m) {
          var env = snap.dados[m];
          if (env && typeof env === 'object' && 'd' in env) {
            mem[m] = env;
            lsGravar(m, env);
            idbPut('kv', { k: m, env: env });
            if (!vazio(env)) restaurados.push(m);
          }
        });
        gravarBackupRotativo();
        avisar('info', 'Backup restaurado: ' + restaurados.length + ' módulo(s) com dados.',
          restaurados.join(', '));
        resolve(restaurados);
      };
      fr.readAsText(file);
    });
  }

  function status() {
    var meta = get('meta') || {};
    return {
      pronto: pronto,
      temIDB: !!db,
      modulos: MODULOS.map(function (m) {
        return { modulo: m, vazio: vazio(mem[m]), atualizadoEm: mem[m] ? mem[m]._t : null };
      }),
      ultimoBackupArquivo: meta.ultimoBackupArquivo || null,
      avisos: avisos.slice()
    };
  }

  root.Store = {
    MODULOS: MODULOS,
    init: init,
    ready: ready,
    get: get,
    set: set,
    patch: patch,
    flush: flush,
    exportarArquivo: exportarArquivo,
    importarArquivo: importarArquivo,
    listarBackups: function () {
      return idbGetAll('backups').then(function (t) {
        t.sort(function (a, b) { return a.id < b.id ? 1 : -1; });
        return t.map(function (b) { return b.id; });
      });
    },
    restaurarBackup: function (id) {
      return idbGetAll('backups').then(function (todos) {
        var b = todos.filter(function (x) { return x.id === id; })[0];
        if (!b) throw new Error('Backup não encontrado: ' + id);
        var n = 0;
        MODULOS.forEach(function (m) {
          var env = b.snap.dados[m];
          if (env) { mem[m] = env; lsGravar(m, env); idbPut('kv', { k: m, env: env }); n++; }
        });
        avisar('info', 'Restaurei o backup de ' + new Date(id).toLocaleString('pt-BR') + '.');
        return n;
      });
    },
    status: status,
    avisar: avisar,
    onAviso: function (fn) { escutasAviso.push(fn); avisos.forEach(fn); }
  };
})(typeof window !== 'undefined' ? window : globalThis);
