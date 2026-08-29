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
    'audio',        // faixas ouvidas, posição de escuta e velocidade
    'meta'          // preferências, datas de backup, versão
  ];

  var mem = {};            // cache em memória: modulo -> envelope
  var db = null;
  var pronto = false;
  var filaProntos = [];
  var avisos = [];
  var escutasAviso = [];
  var escritasDesdeSnapshot = 0;
  // Guardado para reforçar o texto do lembrete de backup, em vez de virar um
  // segundo aviso na tela dizendo a mesma coisa.
  var persistenciaNegada = false;

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
        // Não vira faixa na tela: o único conselho útil daqui é "faça backup",
        // e quem cobra isso é o lembrete de backup, com texto mais direto.
        // Dois avisos dizendo o mesmo comiam 228 px do celular.
        persistenciaNegada = true;
        console.warn('[storage] armazenamento persistente não garantido pelo navegador');
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
        avisar('aviso', 'Exporte um backup: toque em "Backup" no topo.' +
          (persistenciaNegada
            ? ' Este navegador não garantiu guardar seus dados, e o arquivo é a única cópia que sobrevive.'
            : ' É a única cópia que sobrevive se o navegador limpar o site.'));
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

  /* ------------------------------------------------------------- mesclagem ---
   * Quem estuda em dois aparelhos (por exemplo Mac e iPhone) precisa somar o
   * progresso, não trocar um pelo outro. Substituir apagaria o que foi feito no
   * aparelho que recebe o arquivo — por isso a mesclagem é o padrão.
   *
   * Regra geral: na dúvida, preserva. Uma questão respondida em qualquer um dos
   * lados continua respondida; um bloco cumprido continua cumprido.
   *
   * A exceção é a REMOÇÃO. "Preservar na dúvida" ressuscitava tudo que o usuário
   * apagava: a linha some daqui, mas continua no aparelho vizinho e volta na
   * sincronização seguinte. Apagar não é a ausência de um dado — é um fato, com
   * hora, que precisa viajar junto. Daí as duas convenções abaixo:
   *
   *   • listas  — o item ganha o campo `removido` (timestamp) e continua no
   *               array como lápide. Quem lê filtra; a mesclagem compara.
   *   • mapas   — o valor vira NEGATIVO (-timestamp) em vez de a chave sumir.
   *               Vence o maior valor absoluto, isto é, a ação mais recente.
   *
   * As lápides são varridas depois de PRAZO_LAPIDE, quando já não há aparelho
   * plausível segurando a versão antiga do dado.
   */
  var PRAZO_LAPIDE = 180 * 24 * 60 * 60 * 1000;   // 180 dias

  function maisRecente(a, b, campo) {
    var ta = (a && a[campo]) || 0, tb = (b && b[campo]) || 0;
    return tb > ta ? b : a;
  }

  /* Última ação sobre o item: edição ou remoção, o que for mais recente. */
  function carimbo(x, campoTempo) {
    if (!x) return 0;
    return Math.max((campoTempo && x[campoTempo]) || 0, x.removido || 0);
  }

  /* Mapa de marcações (lidos, feitos): positivo = marcado, negativo = desmarcado. */
  function marcaMaisRecente(a, b) {
    return Math.abs(b || 0) > Math.abs(a || 0) ? b : a;
  }

  function unirMapa(destino, origem, resolver) {
    destino = destino || {}; origem = origem || {};
    Object.keys(origem).forEach(function (k) {
      destino[k] = (k in destino && resolver) ? resolver(destino[k], origem[k]) : (
        (k in destino) ? destino[k] : origem[k]
      );
    });
    return destino;
  }

  function unirListaPorId(destino, origem, campoTempo) {
    destino = destino || []; origem = origem || [];
    var idx = {};
    destino.forEach(function (x, i) { if (x && x.id != null) idx[x.id] = i; });
    origem.forEach(function (x) {
      if (!x || x.id == null) return;
      if (!(x.id in idx)) { destino.push(x); return; }
      var atual = destino[idx[x.id]];
      // Vence quem agiu por último — e remover É agir. Sem isto, a linha
      // apagada aqui voltava do aparelho que ainda não sabia da remoção.
      destino[idx[x.id]] = carimbo(x, campoTempo) > carimbo(atual, campoTempo) ? x : atual;
    });
    // Varre lápides antigas: passado o prazo, nenhum aparelho ainda carrega a
    // versão viva do item, e guardá-las para sempre incharia o arquivo.
    var limite = Date.now() - PRAZO_LAPIDE;
    return destino.filter(function (x) {
      return !(x && x.removido && x.removido < limite);
    });
  }

  function mesclarModulo(mod, meu, dele) {
    meu = meu || {}; dele = dele || {};
    switch (mod) {
      case 'questoes':
        meu.respostas = unirMapa(meu.respostas, dele.respostas, function (a, b) {
          return maisRecente(a, b, 'ts');
        });
        if (!meu.ultimo) meu.ultimo = dele.ultimo;
        return meu;

      case 'cronograma':
        // Vence a marcação mais recente: marcar E desmarcar viajam entre
        // aparelhos. Antes, desmarcar aqui voltava marcado do outro lado.
        meu.feitos = unirMapa(meu.feitos, dele.feitos, marcaMaisRecente);
        if (!meu.inicio) meu.inicio = dele.inicio;
        return meu;

      case 'materiais':
        meu.lidos = unirMapa(meu.lidos, dele.lidos, marcaMaisRecente);
        return meu;

      case 'simulados':
        meu.provas = unirListaPorId(meu.provas, dele.provas, 'terminadoEm');
        if (!meu.atual) meu.atual = dele.atual;
        return meu;

      case 'flashcards':
        // Vale a revisão mais recente: é ela que reflete o estado real da memória.
        meu.cartoes = unirMapa(meu.cartoes, dele.cartoes, function (a, b) {
          return maisRecente(a, b, 'ultimo');
        });
        return meu;

      case 'treino':
        meu.fases = unirMapa(meu.fases, dele.fases, function (a, b) {
          return ((b && b.xp) || 0) > ((a && a.xp) || 0) ? b : a;
        });
        meu.xp = Math.max(meu.xp || 0, dele.xp || 0);
        var oa = meu.ofensiva || { dias: [], atual: 0, recorde: 0 };
        var ob = dele.ofensiva || { dias: [], atual: 0, recorde: 0 };
        var dias = {};
        (oa.dias || []).concat(ob.dias || []).forEach(function (d) { dias[d] = 1; });
        meu.ofensiva = {
          dias: Object.keys(dias).sort(),
          atual: Math.max(oa.atual || 0, ob.atual || 0),
          recorde: Math.max(oa.recorde || 0, ob.recorde || 0)
        };
        return meu;

      case 'audio':
        // Sem regra própria, este módulo caía no `default`, que é RASO: como a
        // chave 'posicao' já existia dos dois lados, o mapa inteiro de um
        // aparelho vencia e apagava as marcas do outro. Um aparelho com uma
        // faixa começada zerava sete faixas em andamento do outro.
        meu.ouvidas = unirMapa(meu.ouvidas, dele.ouvidas, marcaMaisRecente);
        // Posição de escuta: vale a mais adiantada. Retomar um pouco antes é
        // um contratempo; retomar do zero uma faixa quase inteira, não.
        meu.posicao = unirMapa(meu.posicao, dele.posicao, function (a, b) {
          return Math.max(a || 0, b || 0);
        });
        // Velocidade é preferência DE APARELHO, não progresso: 1,5× no celular
        // e 1× no notebook é uma escolha legítima. Só herda quando este
        // aparelho ainda não tem nenhuma — nunca sobrescreve a que já existe.
        if (!meu.velocidade) meu.velocidade = dele.velocidade;
        return meu;

      case 'planilha':
        // 'em' é o carimbo da última edição da linha, gravado a cada alteração.
        // Sem ele a comparação era entre dois indefinidos e a edição mais nova
        // podia perder para a antiga.
        meu.linhas = unirListaPorId(meu.linhas, dele.linhas, 'em');
        return meu;

      default:
        // meta e futuros módulos: preserva o que já existe, completa o que falta.
        Object.keys(dele).forEach(function (k) { if (!(k in meu)) meu[k] = dele[k]; });
        return meu;
    }
  }

  /* Aplica um snapshot ao estado local. Usada pela importação de arquivo e
   * pela sincronização — as duas precisam da MESMA regra de mesclagem, e
   * duplicá-la seria a forma mais fácil de elas divergirem com o tempo. */
  function aplicarSnapshot(snap, modo) {
    modo = modo === 'substituir' ? 'substituir' : 'mesclar';

    // Antes de tocar em qualquer coisa, guarda o estado atual: se a mesclagem
    // estiver errada, o usuário ainda tem para onde voltar.
    try { gravarBackupRotativo(); } catch (e) {
      avisar('erro', 'Não consegui guardar um backup antes de aplicar os dados.', String(e));
    }

    var restaurados = [];
    try {
      MODULOS.forEach(function (m) {
        var env = snap.dados[m];
        if (!env || typeof env !== 'object' || !('d' in env)) return;
        var nv;
        if (modo === 'substituir') {
          nv = env;
        } else {
          var atual = mem[m] && mem[m].d ? JSON.parse(JSON.stringify(mem[m].d)) : {};
          nv = { _v: env._v || '1', _t: String(Date.now()),
                 d: mesclarModulo(m, atual, env.d) };
        }
        mem[m] = nv;
        lsGravar(m, nv);
        idbPut('kv', { k: m, env: nv });
        if (!vazio(nv)) restaurados.push(m);
      });
    } catch (e) {
      avisar('erro', 'Falha ao aplicar os dados. Nada foi perdido: ' +
        'seu estado anterior está nos backups automáticos.', String(e));
      throw e;
    }

    gravarBackupRotativo();
    return restaurados;
  }

  /* modo: 'mesclar' (padrão) ou 'substituir'. */
  function importarArquivo(file, modo) {
    modo = modo === 'substituir' ? 'substituir' : 'mesclar';
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

        var restaurados;
        try {
          restaurados = aplicarSnapshot(snap, modo);
        } catch (e) {
          return reject(e);
        }
        avisar('info',
          (modo === 'mesclar' ? 'Backup mesclado com o que já havia aqui: '
                              : 'Backup restaurado por substituição: ') +
          restaurados.length + ' módulo(s) com dados.',
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
    // Usados pela sincronização (core/sync.js), para ela reaproveitar o mesmo
    // formato de snapshot e a mesma regra de mesclagem da importação.
    montarSnapshot: montarSnapshot,
    aplicarSnapshot: aplicarSnapshot,
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
