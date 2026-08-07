/* =============================================================================
   VALIDADOR.JS — lógica de auditoria do banco de questões (fonte única).
   Usada por tools/validar.html (navegador) e por tools/validar.mjs (node).
   ========================================================================== */
(function (root) {
  'use strict';

  var CITA_LETRA = /\b(alternativa|assertiva|item|letra|opção|opcao)\s+[a-eA-E]\b/;

  // Mesmo hash de questoes.js — precisa ser idêntico para prever a posição real
  // em que a alternativa correta aparece na tela.
  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 16777619) >>> 0; }
    return h >>> 0;
  }

  function normaliza(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function validar(EDITAL, BANCO) {
    var erros = [], vistosId = {}, vistosEnun = {};
    var porTema = {}, porLetra = { A: 0, B: 0, C: 0, D: 0, E: 0 }, porTipo = {};
    // posições reais atribuídas pelo mesmo módulo que o app usa em tela
    var posMapa = (root.GABARITO ? root.GABARITO.posicoes(BANCO) : {});

    BANCO.forEach(function (q) {
      var onde = q.id || '(sem id)';

      if (!q.id) { erros.push('questão sem id (tema ' + q.tema + ')'); }
      else if (vistosId[q.id]) { erros.push(onde + ': id duplicado'); }
      else { vistosId[q.id] = true; }

      if (!EDITAL.valido(q.tema)) {
        erros.push(onde + ': tema "' + q.tema + '" não existe na taxonomia do edital');
      }

      if (!Array.isArray(q.alts) || q.alts.length !== 5) {
        erros.push(onde + ': tem ' + (q.alts ? q.alts.length : 0) + ' alternativas (esperado 5)');
      } else {
        var certas = q.alts.filter(function (a) { return a.ok; }).length;
        if (certas !== 1) {
          erros.push(onde + ': ' + certas + ' alternativas marcadas como corretas (esperado 1)');
        }
        q.alts.forEach(function (a, i) {
          if (!a.t || !String(a.t).trim()) { erros.push(onde + ': alternativa ' + i + ' sem texto'); }
          if (!a.why || !String(a.why).trim()) { erros.push(onde + ': alternativa ' + i + ' sem explicação "why"'); }
          else if (CITA_LETRA.test(a.why)) {
            erros.push(onde + ': explicação da alternativa ' + i + ' cita letra — "' +
              a.why.match(CITA_LETRA)[0] + '"');
          }
        });
        var pos = posMapa[q.id];
        if (pos == null) { pos = hash(q.id) % 5; }
        porLetra['ABCDE'[pos]]++;
      }

      if (!q.comentario || !String(q.comentario).trim()) {
        erros.push(onde + ': sem comentário explicativo');
      }
      ['comentario', 'pegadinha'].forEach(function (campo) {
        if (q[campo] && CITA_LETRA.test(q[campo])) {
          erros.push(onde + ': ' + campo + ' cita alternativa por letra — "' +
            q[campo].match(CITA_LETRA)[0] + '"');
        }
      });

      if (q.tipo !== 'real' && q.tipo !== 'autoral') { erros.push(onde + ': tipo inválido "' + q.tipo + '"'); }
      if (q.tipo === 'real' && !q.fonte) { erros.push(onde + ': tipo "real" sem fonte informada'); }
      porTipo[q.tipo] = (porTipo[q.tipo] || 0) + 1;

      var chave = normaliza(q.enunciado || '');
      if (chave) {
        if (vistosEnun[chave]) { erros.push(onde + ': enunciado duplicado de ' + vistosEnun[chave]); }
        else { vistosEnun[chave] = q.id; }
      }

      porTema[q.tema] = (porTema[q.tema] || 0) + 1;
    });

    var somaL = 0;
    'ABCDE'.split('').forEach(function (l) { somaL += porLetra[l]; });
    var desvio = 0;
    if (somaL) {
      'ABCDE'.split('').forEach(function (l) {
        desvio = Math.max(desvio, Math.abs(porLetra[l] / somaL - 0.2));
      });
    }

    return {
      total: BANCO.length,
      erros: erros,
      porTema: porTema,
      porLetra: porLetra,
      porTipo: porTipo,
      desvioGabarito: desvio
    };
  }

  root.validarBanco = validar;
  if (typeof module !== 'undefined' && module.exports) { module.exports = validar; }
})(typeof window !== 'undefined' ? window : globalThis);
