/* =============================================================================
   SW.JS — service worker
   -----------------------------------------------------------------------------
   ATENÇÃO (regra do briefing): a CADA publicação é OBRIGATÓRIO subir o número em
   VERSAO. Sem isso o iPad continua servindo a versão antiga do cache.
   Rode `python3 tools/versao-sw.py` para incrementar.

   Estratégia: precache na instalação + "network-first com fallback ao cache"
   para navegação e "cache-first com revalidação" para os assets. Assim o app
   abre offline, mas pega a versão nova assim que houver rede.
   ========================================================================== */

const VERSAO = 'v110';
const CACHE = 'medtrabalho-' + VERSAO;

const ARQUIVOS = [
  './',
  './index.html',
  './assets/app.css',
  './assets/icone-180.png',
  './assets/icone-192.png',
  './assets/icone-512.png',
  './audio/index.html',
  './audio/indice.js',
  './audio/roteiros/01.01-medicina-do-trabalho.txt',
  './audio/roteiros/01.02-saude-do-trabalhador.txt',
  './audio/roteiros/01.03-epidemiologia-clinica-e-bioestatistica.txt',
  './audio/roteiros/01.04-gestao-em-saude-do-trabalhador.txt',
  './audio/roteiros/01.05-sistemas-de-gestao-em-seguranca-e-saude-no-trabalho.txt',
  './audio/roteiros/01.06-politicas-publicas-de-saude-do-trabalhador.txt',
  './audio/roteiros/01.07-sistema-unico-de-saude-sus.txt',
  './audio/roteiros/01.08-vigilancia-em-saude-do-trabalhador.txt',
  './audio/roteiros/01.09-sistema-de-informacao-de-agravos-de-notificacao-sinan.txt',
  './audio/roteiros/01.10-promocao-da-saude.txt',
  './audio/roteiros/02.01-higiene-ocupacional.txt',
  './audio/roteiros/02.02-exposicao-ocupacional-aos-agentes-fisicos.txt',
  './audio/roteiros/02.03-exposicao-ocupacional-aos-agentes-quimicos.txt',
  './audio/roteiros/02.04-exposicao-ocupacional-aos-agentes-biologicos.txt',
  './audio/roteiros/02.05-avaliacao-e-gerenciamento-das-exposicoes-ocupacionais.txt',
  './audio/roteiros/02.06-limites-de-exposicao-ocupacional.txt',
  './audio/roteiros/02.07-normas-de-higiene-ocupacional-nho.txt',
  './audio/roteiros/02.08-protecao-respiratoria.txt',
  './audio/roteiros/02.09-toxicologia-ocupacional.txt',
  './audio/roteiros/03.01-ergonomia-fundamentos-antropometria-e-biomecanica.txt',
  './audio/roteiros/03.02-ergonomia-organizacao-do-trabalho-e-analise-ergonomica.txt',
  './audio/roteiros/04.01-patologia-do-trabalho.txt',
  './audio/roteiros/04.02-doencas-relacionadas-ao-trabalho.txt',
  './audio/roteiros/04.03-pneumologia-ocupacional.txt',
  './audio/roteiros/04.04-dermatoses-ocupacionais.txt',
  './audio/roteiros/04.05-otorrinolaringologia-ocupacional.txt',
  './audio/roteiros/04.06-saude-mental-e-fatores-psicossociais-relacionados-ao-trabalho.txt',
  './audio/roteiros/04.07-psiquiatria-ocupacional.txt',
  './audio/roteiros/04.08-cancer-relacionado-ao-trabalho.txt',
  './audio/roteiros/04.09-doencas-infectocontagiosas-de-interesse-ocupacional.txt',
  './audio/roteiros/04.10-imunizacoes-do-trabalhador.txt',
  './audio/roteiros/05.01-acidentes-do-trabalho.txt',
  './audio/roteiros/05.02-nexo-causal.txt',
  './audio/roteiros/05.03-concausalidade.txt',
  './audio/roteiros/05.04-pericia-medica.txt',
  './audio/roteiros/05.05-avaliacao-da-incapacidade-laborativa-e-do-dano-corporal.txt',
  './audio/roteiros/05.06-reabilitacao-profissional.txt',
  './audio/roteiros/06.01-exames-medicos-ocupacionais.txt',
  './audio/roteiros/06.02-inclusao-da-pessoa-com-deficiencia-legislacao-e-acessibilidade.txt',
  './audio/roteiros/06.03-clinica-medica-aplicada-a-aptidao-laboral-e-ao-rastreamento.txt',
  './audio/roteiros/06.04-urgencias-e-emergencias-no-ambiente-de-trabalho.txt',
  './audio/roteiros/07.01-legislacao-trabalhista-aplicavel-a-medicina-do-trabalho.txt',
  './audio/roteiros/07.02-legislacao-previdenciaria-aplicavel-a-medicina-do-trabalho.txt',
  './audio/roteiros/07.03-legislacao-sanitaria-aplicavel-a-medicina-do-trabalho.txt',
  './audio/roteiros/07.04-normas-regulamentadoras.txt',
  './audio/roteiros/07.05-esocial.txt',
  './audio/roteiros/07.06-codigo-de-etica-medica.txt',
  './audio/roteiros/07.07-resolucoes-do-conselho-federal-de-medicina.txt',
  './audio/roteiros/07.08-lei-geral-de-protecao-de-dados-lgpd.txt',
  './audio/roteiros/LEIA-ME.txt',
  './banco/casos-2.js',
  './banco/casos-3.js',
  './banco/casos-4.js',
  './banco/casos.js',
  './banco/indice.js',
  './banco/lote-A.js',
  './banco/lote-AA.js',
  './banco/lote-AB.js',
  './banco/lote-AC.js',
  './banco/lote-AD.js',
  './banco/lote-AE.js',
  './banco/lote-AF.js',
  './banco/lote-AG.js',
  './banco/lote-AH.js',
  './banco/lote-AI.js',
  './banco/lote-AJ.js',
  './banco/lote-AK.js',
  './banco/lote-AL.js',
  './banco/lote-AM.js',
  './banco/lote-AN.js',
  './banco/lote-AO.js',
  './banco/lote-AP.js',
  './banco/lote-AQ.js',
  './banco/lote-AR.js',
  './banco/lote-AS.js',
  './banco/lote-AT.js',
  './banco/lote-AU.js',
  './banco/lote-AV.js',
  './banco/lote-B.js',
  './banco/lote-C.js',
  './banco/lote-D.js',
  './banco/lote-E.js',
  './banco/lote-F.js',
  './banco/lote-G.js',
  './banco/lote-H.js',
  './banco/lote-I.js',
  './banco/lote-J.js',
  './banco/lote-K.js',
  './banco/lote-L.js',
  './banco/lote-M.js',
  './banco/lote-N.js',
  './banco/lote-O.js',
  './banco/lote-P.js',
  './banco/lote-Q.js',
  './banco/lote-R.js',
  './banco/lote-S.js',
  './banco/lote-T.js',
  './banco/lote-U.js',
  './banco/lote-V.js',
  './banco/lote-W.js',
  './banco/lote-X.js',
  './banco/lote-Y.js',
  './banco/lote-Z.js',
  './banco/misc-alto.js',
  './banco/misc-alto2.js',
  './banco/misc-alto3.js',
  './banco/misc-alto4.js',
  './banco/misc-alto5.js',
  './banco/sec1-lacunas.js',
  './banco/sec1-lote.js',
  './banco/sec1.js',
  './banco/sec2-alto.js',
  './banco/sec2-alto2.js',
  './banco/sec2-lacunas.js',
  './banco/sec2.js',
  './banco/sec2a-lote.js',
  './banco/sec3.js',
  './banco/sec36-lote.js',
  './banco/sec4-alto.js',
  './banco/sec4-alto2.js',
  './banco/sec4.js',
  './banco/sec45-alto3.js',
  './banco/sec4567-lacunas.js',
  './banco/sec4a-lote.js',
  './banco/sec5-alto.js',
  './banco/sec5-alto2.js',
  './banco/sec5-lote.js',
  './banco/sec5.js',
  './banco/sec6-pcmso.js',
  './banco/sec6.js',
  './banco/sec7-alto.js',
  './banco/sec7-nr-prev.js',
  './banco/sec7.js',
  './core/banco-loader.js',
  './core/desempenho.js',
  './core/edital.js',
  './core/gabarito.js',
  './core/storage.js',
  './core/sync.js',
  './core/xlsx.js',
  './cronograma/cronograma.js',
  './cronograma/index.html',
  './flashcards/flashcards.js',
  './flashcards/index.html',
  './manifest.webmanifest',
  './materiais/guia.css',
  './materiais/guias/1.1.html',
  './materiais/guias/1.10.html',
  './materiais/guias/1.2.html',
  './materiais/guias/1.3.html',
  './materiais/guias/1.4.html',
  './materiais/guias/1.5.html',
  './materiais/guias/1.6.html',
  './materiais/guias/1.7.html',
  './materiais/guias/1.8.html',
  './materiais/guias/1.9.html',
  './materiais/guias/2.1.html',
  './materiais/guias/2.2.html',
  './materiais/guias/2.3.html',
  './materiais/guias/2.4.html',
  './materiais/guias/2.5.html',
  './materiais/guias/2.6.html',
  './materiais/guias/2.7.html',
  './materiais/guias/2.8.html',
  './materiais/guias/2.9.html',
  './materiais/guias/3.1.html',
  './materiais/guias/3.2.html',
  './materiais/guias/4.1.html',
  './materiais/guias/4.10.html',
  './materiais/guias/4.2.html',
  './materiais/guias/4.3.html',
  './materiais/guias/4.4.html',
  './materiais/guias/4.5.html',
  './materiais/guias/4.6.html',
  './materiais/guias/4.7.html',
  './materiais/guias/4.8.html',
  './materiais/guias/4.9.html',
  './materiais/guias/5.1.html',
  './materiais/guias/5.2.html',
  './materiais/guias/5.3.html',
  './materiais/guias/5.4.html',
  './materiais/guias/5.5.html',
  './materiais/guias/5.6.html',
  './materiais/guias/6.1.html',
  './materiais/guias/6.2.html',
  './materiais/guias/6.3.html',
  './materiais/guias/6.4.html',
  './materiais/guias/7.1.html',
  './materiais/guias/7.2.html',
  './materiais/guias/7.3.html',
  './materiais/guias/7.4.html',
  './materiais/guias/7.5.html',
  './materiais/guias/7.6.html',
  './materiais/guias/7.7.html',
  './materiais/guias/7.8.html',
  './materiais/guias/indice.js',
  './materiais/index.html',
  './planilha/index.html',
  './planilha/planilha.js',
  './questoes/index.html',
  './questoes/questoes.js',
  './resumos-audio-medtrabalho.zip',
  './simulados/index.html',
  './simulados/simulados.js',
  './treino/index.html',
  './treino/treino.js'
];

self.addEventListener('install', function (ev) {
  ev.waitUntil(
    caches.open(CACHE).then(function (c) {
      // addAll falha por inteiro se um arquivo faltar; aqui cada um é
      // independente para que um 404 isolado não impeça a instalação.
      return Promise.all(ARQUIVOS.map(function (u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function (e) {
          console.warn('[sw] não consegui pré-cachear', u, e.message);
        });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (ev) {
  ev.waitUntil(
    caches.keys().then(function (nomes) {
      return Promise.all(nomes.map(function (n) {
        // O cache de áudio sobrevive às publicações: as faixas não mudam, e
        // apagá-las obrigaria a rebaixar dezenas de MB a cada atualização.
        if (n !== CACHE && n !== 'mtb-audio-v1') { return caches.delete(n); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (ev) {
  if (ev.data && ev.data.tipo === 'ATIVAR_AGORA') { self.skipWaiting(); }
});

/* Cache separado para as faixas de áudio.
 *
 * Motivo de ser separado: são dezenas de MB e não mudam entre versões. Se
 * ficassem no cache principal, cada publicação nova apagaria tudo e obrigaria
 * a baixar de novo — no 4G, sem o usuário pedir.
 *
 * O player pede trechos (requisições Range), que voltam 206 e não servem como
 * cópia. Por isso o cache é preenchido pelo botão "baixar para ouvir offline",
 * que busca o arquivo inteiro de uma vez.
 */
var CACHE_AUDIO = 'mtb-audio-v1';

function ehFaixa(url) {
  return url.pathname.indexOf('/audio/faixas/') >= 0;
}

/* Serve um trecho a partir da cópia inteira guardada no cache.
 *
 * Ao arrastar a barra, o player pede `Range: bytes=inicio-fim`. Devolver a
 * cópia inteira com status 200 e sem Content-Range faz o Safari engasgar e
 * parar a reprodução depois de alguns segundos — e, como o áudio PARA em vez
 * de TERMINAR, o evento 'ended' nunca dispara e a faixa seguinte não entra.
 * Era a causa de "para depois de um tempo" e de "o título não muda sozinho".
 */
function trechoDoCache(respCheia, cabecalhoRange) {
  return respCheia.arrayBuffer().then(function (buf) {
    var total = buf.byteLength;
    var m = /bytes=(\d*)-(\d*)/.exec(cabecalhoRange || '');
    if (!m) return respCheia;

    var ini = m[1] ? parseInt(m[1], 10) : 0;
    var fim = m[2] ? parseInt(m[2], 10) : total - 1;
    if (isNaN(ini) || ini < 0) ini = 0;
    if (isNaN(fim) || fim >= total) fim = total - 1;

    if (ini > fim || ini >= total) {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': 'bytes */' + total }
      });
    }

    var pedaco = buf.slice(ini, fim + 1);
    return new Response(pedaco, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': respCheia.headers.get('Content-Type') || 'audio/mp4',
        'Content-Length': String(pedaco.byteLength),
        'Content-Range': 'bytes ' + ini + '-' + fim + '/' + total,
        'Accept-Ranges': 'bytes'
      }
    });
  });
}

function responderFaixa(req, url) {
  var range = req.headers.get('range');
  return caches.open(CACHE_AUDIO).then(function (c) {
    return c.match(req, { ignoreVary: true, ignoreSearch: true }).then(function (hit) {
      if (hit) {
        // Com cópia local: monta o trecho pedido, ou entrega inteira se não
        // houver Range.
        return range ? trechoDoCache(hit, range) : hit;
      }
      // Sem cópia: vai à rede. A resposta parcial (206) é repassada ao player,
      // mas não serve de cópia — quem guarda é o botão de baixar, que busca o
      // arquivo inteiro.
      return fetch(req).then(function (resp) {
        if (resp && resp.status === 200) {
          c.put(req, resp.clone()).catch(function (e) {
            console.warn('[sw] não guardei a faixa', url.pathname, e.message);
          });
        }
        return resp;
      }).catch(function () {
        return new Response('Faixa indisponível offline. Baixe-a quando tiver rede.', {
          status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    });
  });
}

self.addEventListener('fetch', function (ev) {
  var req = ev.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Faixas: cache primeiro. Se já foi baixada, toca sem rede e sem gastar dados.
  if (ehFaixa(url)) {
    ev.respondWith(responderFaixa(req, url));
    return;
  }

  ev.respondWith(
    fetch(req).then(function (resp) {
      if (resp && resp.status === 200 && resp.type === 'basic') {
        var copia = resp.clone();
        caches.open(CACHE).then(function (c) {
          c.put(req, copia).catch(function (e) {
            console.warn('[sw] falha ao atualizar o cache de', req.url, e.message);
          });
        });
      }
      return resp;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        if (req.mode === 'navigate') { return caches.match('./index.html'); }
        return new Response('Offline e sem cópia em cache.', {
          status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});
