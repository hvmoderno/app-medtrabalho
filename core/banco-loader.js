/* =============================================================================
   BANCO-LOADER.JS — carrega os arquivos do banco de questões sob demanda.
   -----------------------------------------------------------------------------
   Os arquivos do banco são listados em banco/indice.js (gerado por
   tools/atualizar-sw.py a partir dos arquivos reais). Assim dá para acrescentar
   lotes de questões sem editar nenhum HTML.
   Cada arquivo do banco apenas faz window.BANCO.push(...).
   ========================================================================== */
(function (root) {
  'use strict';

  var promessa = null;

  function carregarScript(url) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = url;
      s.async = false;                 // preserva a ordem de execução
      s.onload = function () { resolve(true); };
      s.onerror = function () {
        console.error('[banco] falhou ao carregar', url);
        if (root.Store) {
          Store.avisar('erro', 'Falha ao carregar um arquivo do banco de questões.', url);
        }
        resolve(false);
      };
      document.head.appendChild(s);
    });
  }

  function carregar(base) {
    if (promessa) return promessa;
    base = base || '../banco/';
    root.BANCO = root.BANCO || [];

    promessa = carregarScript(base + 'indice.js').then(function () {
      var lista = root.BANCO_ARQUIVOS || [];
      if (!lista.length) {
        console.warn('[banco] índice vazio — nenhum arquivo de questões listado');
      }
      // sequencial: mantém a ordem e evita pico de memória em iPad
      return lista.reduce(function (p, arq) {
        return p.then(function () { return carregarScript(base + arq); });
      }, Promise.resolve());
    }).then(function () {
      return root.BANCO;
    });

    return promessa;
  }

  root.BancoLoader = { carregar: carregar };
})(typeof window !== 'undefined' ? window : globalThis);
