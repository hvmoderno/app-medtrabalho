/* Desempenho por tema do edital.
 *
 * Serve para transformar as listas de temas em mapa de calor: em vez de 49
 * linhas idênticas, cada tema mostra como você está nele. A cor aqui carrega
 * informação — nunca é enfeite —, e vem sempre acompanhada do número, porque
 * cor sozinha não é acessível a quem não a distingue.
 *
 * Faixas: até 59% frágil · 60 a 79% em construção · 80% ou mais firme.
 * Abaixo de 5 questões respondidas o tema fica "amostra pequena": mostrar
 * "100%" com duas questões respondidas seria informação enganosa.
 */
(function (glob) {
  'use strict';

  var MINIMO = 5;

  function porTema() {
    var out = {};
    try {
      var p = (glob.Store && Store.get('questoes')) || {};
      var resp = p.respostas || {};
      Object.keys(resp).forEach(function (id) {
        var r = resp[id];
        if (!r || !r.tema) return;
        if (!out[r.tema]) out[r.tema] = { total: 0, certas: 0 };
        out[r.tema].total++;
        if (r.ok) out[r.tema].certas++;
      });
    } catch (e) {
      if (glob.Store && Store.avisar) {
        Store.avisar('erro', 'Não consegui ler seu desempenho por tema.', String(e));
      }
    }
    Object.keys(out).forEach(function (t) {
      var d = out[t];
      d.pct = d.total ? Math.round(d.certas / d.total * 100) : null;
      d.suficiente = d.total >= MINIMO;
    });
    return out;
  }

  /* Classe de faixa; 'neutro' quando não há base para julgar. */
  function faixa(d) {
    if (!d || !d.total) return 'neutro';
    if (!d.suficiente) return 'pouco';
    if (d.pct >= 80) return 'firme';
    if (d.pct >= 60) return 'construcao';
    return 'fragil';
  }

  function rotulo(d) {
    if (!d || !d.total) return 'sem questões respondidas';
    if (!d.suficiente) return d.certas + '/' + d.total + ' — amostra pequena';
    return d.pct + '% de acerto em ' + d.total;
  }

  /* Marca um elemento com a faixa do tema e devolve o texto curto do selo. */
  function aplicar(el, temaId, mapa) {
    var d = mapa[temaId];
    var f = faixa(d);
    el.classList.add('faixa-' + f);
    el.setAttribute('title', EDITAL.nome(temaId) + ' — ' + rotulo(d));
    return {
      faixa: f,
      curto: (d && d.total) ? (d.suficiente ? d.pct + '%' : d.total + 'q') : '—',
      titulo: rotulo(d),
      total: d ? d.total : 0
    };
  }

  glob.DESEMPENHO = {
    porTema: porTema,
    faixa: faixa,
    rotulo: rotulo,
    aplicar: aplicar,
    MINIMO: MINIMO
  };
})(window);
