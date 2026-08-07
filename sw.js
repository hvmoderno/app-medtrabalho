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

const VERSAO = 'v26';
const CACHE = 'medtrabalho-' + VERSAO;

const ARQUIVOS = [
  './',
  './index.html',
  './.DS_Store',
  './.gitignore',
  './.nojekyll',
  './assets/app.css',
  './assets/icone-180.png',
  './assets/icone-192.png',
  './assets/icone-512.png',
  './banco/casos-2.js',
  './banco/casos-3.js',
  './banco/casos-4.js',
  './banco/casos.js',
  './banco/indice.js',
  './banco/misc-alto.js',
  './banco/sec1-lacunas.js',
  './banco/sec1-lote.js',
  './banco/sec1.js',
  './banco/sec2-alto.js',
  './banco/sec2-lacunas.js',
  './banco/sec2.js',
  './banco/sec2a-lote.js',
  './banco/sec3.js',
  './banco/sec36-lote.js',
  './banco/sec4-alto.js',
  './banco/sec4-alto2.js',
  './banco/sec4.js',
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
  './core/edital.js',
  './core/gabarito.js',
  './core/storage.js',
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
        if (n !== CACHE) { return caches.delete(n); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (ev) {
  if (ev.data && ev.data.tipo === 'ATIVAR_AGORA') { self.skipWaiting(); }
});

self.addEventListener('fetch', function (ev) {
  var req = ev.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

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
