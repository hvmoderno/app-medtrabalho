/* =============================================================================
   DUVIDA.JS — monta a pergunta para levar ao Claude, com o contexto que falta
   -----------------------------------------------------------------------------
   Quem digita a dúvida do zero perde o contexto no caminho: "não entendi essa
   parte" vira uma aula genérica. Aqui a pergunta nasce com tema do edital, o
   material em questão e o que estava na tela — e a resposta volta no ponto.

   Este módulo guarda o que é COMUM às duas telas (guias e questões):
   o cabeçalho, o rodapé de instrução e a cópia para a área de transferência.
   O miolo — qual contexto anexar — cada tela monta do seu jeito.

   Sobre a cópia: o Safari no iPad recusa a área de transferência fora de certos
   gestos. Falhar calado ali seria péssimo, porque o usuário só descobriria ao
   colar e não achar nada. Então o plano B seleciona o texto e avisa em vermelho.
   ========================================================================== */
(function (root) {
  'use strict';

  var CABECALHO = 'Estou estudando para a prova de título de Medicina do ' +
    'Trabalho (ANAMT/AMB, 01/11/2026).';

  var RODAPE = 'Responda no nível da prova de título: direto, sem rodeio, e ' +
    'diga explicitamente se algum ponto é controverso ou se costuma cair como ' +
    'pegadinha. Se citar norma, prefira o conceito a número de artigo.';

  /* Monta o texto final. `contexto` são as linhas do meio, específicas da tela. */
  function montar(contexto, duvida) {
    var linhas = [CABECALHO, ''];
    linhas = linhas.concat(contexto || []);
    linhas.push('', 'Minha dúvida:', String(duvida || '').trim(), '', RODAPE);
    return linhas.join('\n');
  }

  /* Bloco delimitado, para o material citado não se confundir com a pergunta. */
  function bloco(titulo, texto) {
    if (!texto) return [];
    return ['', titulo, '---', String(texto).trim(), '---'];
  }

  function encurtar(txt, max) {
    txt = String(txt || '').replace(/\s+/g, ' ').trim();
    if (txt.length <= max) return txt;
    var corte = txt.slice(0, max), esp = corte.lastIndexOf(' ');
    return (esp > max * 0.6 ? corte.slice(0, esp) : corte) + '…';
  }

  /* copiar(texto, campoFallback, aviso)
   *   campoFallback — textarea onde o texto fica selecionado se a cópia falhar
   *   aviso(msg, ehErro) — como a tela mostra o resultado                     */
  function copiar(texto, campoFallback, aviso) {
    function manual() {
      if (campoFallback) {
        campoFallback.value = texto;
        campoFallback.select();
        aviso('Não consegui copiar sozinho — está selecionado, use Copiar.', true);
      } else {
        aviso('Não consegui copiar. Tente de novo.', true);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto)
        .then(function () { aviso('Copiado. Cole no Claude.'); })
        .catch(manual);
    } else {
      manual();
    }
  }

  root.Duvida = {
    montar: montar,
    bloco: bloco,
    encurtar: encurtar,
    copiar: copiar,
    CABECALHO: CABECALHO,
    RODAPE: RODAPE
  };
})(typeof window !== 'undefined' ? window : globalThis);
