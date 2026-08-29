/* =============================================================================
   SYNC.JS — sincronização entre aparelhos por gist privado do GitHub
   -----------------------------------------------------------------------------
   Por que gist e não um servidor: o app não tem back-end, e criar um traria
   conta, custo e uma dependência que hoje não existe. O gist é um arquivo
   privado na conta que o usuário já tem, alcançável dos três aparelhos.

   Decisões que protegem o usuário:

   1. O token NUNCA entra no backup .json. Ele mora numa chave própria, fora da
      lista de MODULOS — se fosse um módulo, exportar o backup vazaria a
      credencial para qualquer um que recebesse o arquivo.
   2. A vinda de dados SEMPRE mescla, nunca substitui. Dois aparelhos usados no
      mesmo dia somam progresso em vez de um apagar o outro.
   3. Antes de aplicar qualquer coisa vinda da rede, o storage grava um backup
      rotativo — a mesma rede de segurança da importação por arquivo.
   4. Nenhum erro é engolido: falha de rede, token inválido ou gist apagado
      viram aviso visível, e o app continua funcionando offline como sempre.
   ========================================================================== */
(function (root) {
  'use strict';

  var CHAVE = 'mtb:sync';          // fora de MODULOS: não vai para o backup
  var ARQ = 'medtrabalho.json';    // nome do arquivo dentro do gist
  var API = 'https://api.github.com';

  function cfg() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE) || '{}');
    } catch (e) {
      console.warn('[sync] configuração ilegível, recomeçando', e);
      return {};
    }
  }

  function salvarCfg(c) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(c));
    } catch (e) {
      Store.avisar('erro', 'Não consegui guardar a configuração de sincronização.', e.message);
    }
  }

  function configurado() {
    var c = cfg();
    return !!(c.token && c.token.length > 10);
  }

  function cabecalhos() {
    return {
      'Authorization': 'Bearer ' + cfg().token,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };
  }

  function erroLegivel(resp) {
    if (resp.status === 401) return 'Token recusado. Confira se copiou inteiro e se não expirou.';
    if (resp.status === 403) return 'Sem permissão. O token precisa do escopo "gist".';
    if (resp.status === 404) return 'Gist não encontrado. Ele pode ter sido apagado.';
    if (resp.status === 422) return 'O GitHub recusou o conteúdo enviado.';
    return 'GitHub respondeu ' + resp.status + '.';
  }

  /* Procura na conta um gist já criado por este app.
   *
   * Sem esta busca, cada aparelho que ligava a sincronização criava o SEU
   * próprio gist — porque o identificador mora no localStorage, que não
   * atravessa aparelhos. O resultado era cada aparelho conversando consigo
   * mesmo, sem nunca encontrar os outros. Foi exatamente o que aconteceu
   * entre o notebook e o celular.
   *
   * Regra de convergência: adotar sempre o MAIS ANTIGO. É a única escolha que
   * todos os aparelhos fazem igual, sem combinar nada entre si.
   */
  function descobrirGist() {
    return fetch(API + '/gists?per_page=100', { headers: cabecalhos() })
      .then(function (r) {
        if (!r.ok) throw new Error(erroLegivel(r));
        return r.json();
      }).then(function (lista) {
        var meus = (lista || []).filter(function (g) {
          return g && g.files && g.files[ARQ];
        });
        if (!meus.length) return null;
        meus.sort(function (a, b) {
          return String(a.created_at || '').localeCompare(String(b.created_at || ''));
        });
        return meus[0].id;
      });
  }

  /* Garante que este aparelho aponte para o mesmo gist que os outros.
   *
   * Se ele já vinha usando um gist diferente do original, o conteúdo daquele
   * é lido e mesclado ANTES da troca — trocar de arquivo não pode custar o
   * progresso que ficou no antigo.
   */
  function reconciliarGist() {
    return descobrirGist().then(function (original) {
      var c = cfg();
      if (!original) return c.gistId || null;      // nenhum ainda: será criado
      if (c.gistId === original) return original;  // já está certo

      var antigo = c.gistId;
      if (!antigo) {                               // aparelho novo: só adota
        c.gistId = original; salvarCfg(c);
        return original;
      }

      // Estava num gist órfão: recolhe o que havia lá antes de mudar.
      return lerGist().then(function (dadosAntigos) {
        if (dadosAntigos && dadosAntigos.dados) {
          Store.aplicarSnapshot(dadosAntigos, 'mesclar');
        }
      }).catch(function (e) {
        Store.avisar('aviso', 'Não consegui ler o arquivo de sincronização antigo.',
          'Nada foi perdido neste aparelho. Detalhe: ' + e.message);
      }).then(function () {
        var x = cfg(); x.gistId = original; salvarCfg(x);
        Store.avisar('info',
          'Este aparelho estava sincronizando num arquivo separado dos outros. Já corrigi.',
          'O progresso que estava lá foi mesclado. O arquivo antigo (' +
          String(antigo).slice(0, 8) + ') ficou sem uso e pode ser apagado em gist.github.com.');
        return original;
      });
    }).catch(function (e) {
      // Descoberta é otimização, não requisito: se o GitHub falhar aqui,
      // segue com o que este aparelho já conhecia.
      console.warn('[sync] não consegui procurar o gist original', e);
      return cfg().gistId || null;
    });
  }

  /* Cria o gist privado na primeira sincronização. */
  function criarGist(corpo) {
    return fetch(API + '/gists', {
      method: 'POST',
      headers: cabecalhos(),
      body: JSON.stringify({
        description: 'Progresso do app de estudo — Medicina do Trabalho 2026 (privado)',
        public: false,
        files: (function () { var f = {}; f[ARQ] = { content: corpo }; return f; })()
      })
    }).then(function (r) {
      if (!r.ok) throw new Error(erroLegivel(r));
      return r.json();
    }).then(function (g) {
      var c = cfg(); c.gistId = g.id; salvarCfg(c);
      return g.id;
    });
  }

  function lerGist() {
    var c = cfg();
    if (!c.gistId) return Promise.resolve(null);
    // cache-buster: o GitHub serve gist em CDN e pode devolver versão velha.
    return fetch(API + '/gists/' + c.gistId + '?t=' + Date.now(), { headers: cabecalhos() })
      .then(function (r) {
        if (r.status === 404) { var x = cfg(); delete x.gistId; salvarCfg(x); return null; }
        if (!r.ok) throw new Error(erroLegivel(r));
        return r.json();
      }).then(function (g) {
        if (!g || !g.files || !g.files[ARQ]) return null;
        var f = g.files[ARQ];
        // Arquivo grande vem truncado; nesse caso busca o conteúdo bruto.
        if (f.truncated && f.raw_url) {
          return fetch(f.raw_url).then(function (r) { return r.text(); });
        }
        return f.content;
      }).then(function (txt) {
        if (!txt) return null;
        try { return JSON.parse(txt); }
        catch (e) { throw new Error('O conteúdo do gist não é um backup válido.'); }
      });
  }

  function escreverGist(corpo) {
    var c = cfg();
    if (!c.gistId) return criarGist(corpo);
    return fetch(API + '/gists/' + c.gistId, {
      method: 'PATCH',
      headers: cabecalhos(),
      body: JSON.stringify({
        files: (function () { var f = {}; f[ARQ] = { content: corpo }; return f; })()
      })
    }).then(function (r) {
      if (r.status === 404) {           // gist apagado: procura outro, senão recria
        var x = cfg(); delete x.gistId; salvarCfg(x);
        return descobrirGist().then(function (id) {
          if (!id) return criarGist(corpo);
          var y = cfg(); y.gistId = id; salvarCfg(y);
          return escreverGist(corpo);   // uma única retentativa: o id é recém-listado
        });
      }
      if (!r.ok) throw new Error(erroLegivel(r));
      return c.gistId;
    });
  }

  /* Sincroniza: traz o que está na nuvem, mescla com o local, devolve o
   * resultado unificado. Assim os três aparelhos convergem para a soma. */
  function sincronizar(silencioso) {
    if (!configurado()) return Promise.resolve({ feito: false, motivo: 'não configurado' });
    if (!navigator.onLine) {
      if (!silencioso) {
        Store.avisar('aviso', 'Sem internet: sincronizo assim que a conexão voltar.');
      }
      return Promise.resolve({ feito: false, motivo: 'offline' });
    }

    // Antes de qualquer coisa: garantir que este aparelho olha para o mesmo
    // arquivo que os demais. É o que faz os aparelhos se encontrarem.
    return reconciliarGist().then(function () {
      return lerGist();
    }).then(function (remoto) {
      if (remoto && remoto.dados) {
        // Mescla o que veio da nuvem com o que existe aqui.
        Store.aplicarSnapshot(remoto, 'mesclar');
      }
      // Envia o estado já unificado.
      var meu = Store.montarSnapshot();
      meu._tipo = 'sync';
      return escreverGist(JSON.stringify(meu, null, 1));
    }).then(function () {
      var c = cfg(); c.ultimo = Date.now(); salvarCfg(c);
      if (!silencioso) {
        Store.avisar('info', 'Sincronizado com seus outros aparelhos.');
      }
      return { feito: true, em: Date.now() };
    }).catch(function (e) {
      Store.avisar('erro', 'Falha ao sincronizar: ' + e.message,
        'Seus dados locais estão intactos. O app segue funcionando offline.');
      return { feito: false, erro: e.message };
    });
  }

  function estado() {
    var c = cfg();
    return {
      configurado: configurado(),
      temGist: !!c.gistId,
      gistId: c.gistId || null,
      ultimo: c.ultimo || null
    };
  }

  function configurar(token) {
    token = (token || '').trim();
    if (!token) return Promise.reject(new Error('Token vazio.'));
    // Valida antes de guardar: token errado guardado silenciosamente daria
    // erro só na próxima sincronização, longe da causa.
    return fetch(API + '/user', {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/vnd.github+json'
      }
    }).then(function (r) {
      if (!r.ok) throw new Error(erroLegivel(r));
      return r.json();
    }).then(function (u) {
      var c = cfg(); c.token = token; c.usuario = u.login; salvarCfg(c);
      return u.login;
    });
  }

  function desligar() {
    try { localStorage.removeItem(CHAVE); } catch (e) {
      Store.avisar('erro', 'Não consegui remover a configuração.', e.message);
    }
  }

  root.SYNC = {
    estado: estado,
    configurar: configurar,
    sincronizar: sincronizar,
    desligar: desligar,
    configurado: configurado
  };
})(typeof window !== 'undefined' ? window : globalThis);
