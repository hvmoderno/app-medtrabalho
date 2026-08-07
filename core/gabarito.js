/* =============================================================================
   GABARITO.JS — posicionamento das alternativas
   -----------------------------------------------------------------------------
   Objetivo (Regra C do briefing): distribuir a alternativa correta entre A/B/C/D/E
   de forma homogênea, SEM nunca contradizer o comentário.

   Como a contradição é impossível aqui: o veredito (`ok`) e a explicação (`why`)
   ficam DENTRO do objeto da alternativa e viajam com ela. Nenhum texto do banco
   cita alternativa por letra — o validador rejeita se alguém tentar.

   Distribuição: as questões são ordenadas por um hash estável do id e recebem
   posições em rodízio (0,1,2,3,4,0,1,...). O resultado é uniforme por construção,
   não por sorteio — o desvio máximo em relação a 20% é sempre < 1 questão.

   IMPORTANTE: `ok: true` significa "esta é a alternativa que deve ser marcada".
   Em questões do tipo "assinale a INCORRETA", a alternativa a marcar é a
   afirmação FALSA — é ela que leva `ok: true`.
   ========================================================================== */
(function (root) {
  'use strict';

  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 16777619) >>> 0; }
    return h >>> 0;
  }

  var cachePos = null, cacheChave = null;

  // Mapa id -> posição (0..4) da alternativa correta, uniforme por construção.
  function posicoes(banco) {
    var chave = banco.length + ':' + (banco[0] && banco[0].id) + ':' +
      (banco[banco.length - 1] && banco[banco.length - 1].id);
    if (cachePos && cacheChave === chave) { return cachePos; }

    var ids = banco.map(function (q) { return q.id; });
    ids.sort(function (a, b) {
      var ha = hash(a), hb = hash(b);
      return ha === hb ? (a < b ? -1 : 1) : (ha - hb);
    });
    var mapa = {};
    ids.forEach(function (id, i) { mapa[id] = i % 5; });

    cachePos = mapa; cacheChave = chave;
    return mapa;
  }

  // Devolve as alternativas na ordem de exibição, com a correta na posição alvo.
  function ordenar(q, banco) {
    var alvo = posicoes(banco)[q.id];
    if (alvo == null) { alvo = hash(q.id) % q.alts.length; }
    var certa = null, outras = [];
    q.alts.forEach(function (a) {
      if (a.ok && !certa) { certa = a; } else { outras.push(a); }
    });
    if (!certa) { return q.alts.slice(); }   // banco inválido: o validador acusa
    var saida = outras.slice();
    saida.splice(Math.min(alvo, saida.length), 0, certa);
    return saida;
  }

  // Ordenação estável para alternativas que não pertencem ao banco principal
  // (questões dos casos clínicos). Mesma garantia: `ok` e `why` viajam com a
  // alternativa, então reposicionar nunca contradiz o comentário.
  function ordenarPorChave(alts, chave) {
    var certa = null, outras = [];
    alts.forEach(function (a) { if (a.ok && !certa) { certa = a; } else { outras.push(a); } });
    if (!certa) { return alts.slice(); }
    var saida = outras.slice();
    saida.splice(hash(String(chave)) % alts.length, 0, certa);
    return saida;
  }

  root.GABARITO = {
    hash: hash, posicoes: posicoes, ordenar: ordenar, ordenarPorChave: ordenarPorChave
  };
  if (typeof module !== 'undefined' && module.exports) { module.exports = root.GABARITO; }
})(typeof window !== 'undefined' ? window : globalThis);
