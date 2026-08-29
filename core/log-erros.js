/* =============================================================================
   LOG-ERROS.JS — registro automático de questões erradas no log de erros
   -----------------------------------------------------------------------------
   Quem estuda para prova não volta para preencher planilha. O erro só vira
   aprendizado se o registro nascer no instante em que ele acontece — daí este
   módulo: a questão errada entra sozinha no log, já com tema, enunciado, a
   alternativa marcada e a correta.

   O campo "motivo" vem com um PALPITE, nunca com uma certeza. A linha nasce
   marcada como `auto`, a interface mostra isso, e o palpite desaparece assim
   que o usuário confirma ou troca. Um motivo errado escondido no meio de
   lançamentos revisados envenenaria justamente o resumo que orienta o estudo.

   Duas regras que evitam estragos:

   1. Uma linha por questão. Errar de novo a mesma questão atualiza a linha
      existente em vez de empilhar duplicatas.
   2. Lápide manda. Se o usuário apagou a linha daquela questão, errá-la de
      novo NÃO a ressuscita — apagar é uma decisão, e o app não a desfaz.
   ========================================================================== */
(function (root) {
  'use strict';

  var MOTIVO_PEGADINHA = 'Caí na pegadinha';
  var MOTIVO_RACIOCINIO = 'Sabia, mas errei o raciocínio';
  var MOTIVO_CONTEUDO = 'Não sabia o conteúdo';

  // Palavras que aparecem em qualquer frase e não distinguem nada.
  var VAZIAS = ('a o e de da do das dos que em no na nos nas um uma uns umas ' +
    'para por com sem sob sobre entre ao aos as os se ou como mais menos ' +
    'ser estar tem ter há é são foi era pode deve seu sua seus suas este esta ' +
    'esse essa isso aquilo qual quais quando onde porque pois já não sim ' +
    'apenas somente também ainda mesmo muito pouco todo toda todos todas').split(' ');

  function palavras(txt) {
    return String(txt || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // tira acentos
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(function (p) { return p.length > 3 && VAZIAS.indexOf(p) < 0; });
  }

  /* Quanto o texto da alternativa conversa com a descrição da pegadinha.
   * Medida grosseira de propósito: serve para escolher entre alternativas da
   * MESMA questão, não para afirmar nada sobre uma isolada. */
  function afinidade(textoAlt, textoPegadinha) {
    var a = palavras(textoAlt), b = palavras(textoPegadinha);
    if (!a.length || !b.length) return 0;
    var setB = {};
    b.forEach(function (p) { setB[p] = 1; });
    var comuns = 0, vistas = {};
    a.forEach(function (p) {
      if (setB[p] && !vistas[p]) { vistas[p] = 1; comuns++; }
    });
    return comuns / Math.sqrt(a.length);
  }

  /* Palpite de motivo. A ordem importa: acertar antes e errar agora diz mais
   * sobre o raciocínio do que qualquer semelhança de texto. */
  function palpitarMotivo(q, altMarcada, acertouAntes) {
    if (acertouAntes) return MOTIVO_RACIOCINIO;
    if (!q || !q.pegadinha || !q.alts || !altMarcada) return MOTIVO_CONTEUDO;

    var erradas = q.alts.filter(function (a) { return !a.ok; });
    if (erradas.length < 2) return MOTIVO_CONTEUDO;

    var scores = erradas.map(function (a) { return afinidade(a.t, q.pegadinha); });
    var melhor = Math.max.apply(null, scores);
    var minha = afinidade(altMarcada.t, q.pegadinha);

    // Só chama de pegadinha quando a marcada é a campeã E se destaca das
    // demais. Empate técnico significa que o texto não distinguiu nada.
    var segunda = scores.slice().sort(function (x, y) { return y - x; })[1] || 0;
    if (minha >= melhor && minha > 0.35 && minha > segunda * 1.3) {
      return MOTIVO_PEGADINHA;
    }
    return MOTIVO_CONTEUDO;
  }

  function hojeISO() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
      '-' + String(d.getDate()).padStart(2, '0');
  }

  function encurtar(txt, max) {
    txt = String(txt || '').replace(/\s+/g, ' ').trim();
    if (txt.length <= max) return txt;
    var corte = txt.slice(0, max);
    var esp = corte.lastIndexOf(' ');
    return (esp > max * 0.6 ? corte.slice(0, esp) : corte) + '…';
  }

  function descrever(q, altMarcada) {
    var correta = (q.alts || []).filter(function (a) { return a.ok; })[0];
    var partes = [encurtar(q.enunciado, 200)];
    if (altMarcada) partes.push('Marquei: ' + encurtar(altMarcada.t, 130));
    if (correta) partes.push('Correta: ' + encurtar(correta.t, 130));
    return partes.join('\n');
  }

  /* ------------------------------------------------------------------------
   * registrar(q, altMarcada, acertouAntes, fonte)
   *
   * Devolve 'nova' | 'atualizada' | 'apagada' | 'erro'. Chamar de novo para a
   * mesma questão é seguro: nunca duplica e nunca desfaz uma remoção.
   * ---------------------------------------------------------------------- */
  function registrar(q, altMarcada, acertouAntes, fonte) {
    if (!q || !q.id) return 'erro';
    try {
      var p = Store.get('planilha') || {};
      if (!p.linhas) p.linhas = [];

      var existente = p.linhas.filter(function (l) { return l.origem === q.id; })[0];

      // Apagada de propósito: respeitar a decisão é mais importante que registrar.
      if (existente && existente.removido) return 'apagada';

      var agora = Date.now();
      if (existente) {
        // A questão foi errada de novo. O que muda é a data e a alternativa
        // marcada; o motivo já revisado pelo usuário fica intocado.
        existente.data = hojeISO();
        existente.descricao = descrever(q, altMarcada);
        existente.revisei = 'Não';
        existente.dataRevisao = '';
        existente.reincidencias = (existente.reincidencias || 1) + 1;
        if (existente.auto) {
          existente.motivo = palpitarMotivo(q, altMarcada, acertouAntes);
        }
        existente.em = agora;
        Store.set('planilha', p);
        return 'atualizada';
      }

      p.linhas.push({
        id: 'l' + agora + Math.random().toString(36).slice(2, 6),
        origem: q.id,
        data: hojeISO(),
        tema: q.tema || '',
        fonte: fonte || 'Questões do app',
        descricao: descrever(q, altMarcada),
        motivo: palpitarMotivo(q, altMarcada, acertouAntes),
        revisei: 'Não',
        dataRevisao: '',
        auto: true,          // motivo é palpite; a interface avisa
        em: agora
      });
      Store.set('planilha', p);
      return 'nova';
    } catch (e) {
      // Nunca engolir em silêncio: se o registro falhou, o usuário precisa
      // saber para anotar à mão.
      if (root.Store && Store.avisar) {
        Store.avisar('erro', 'Não consegui registrar esta questão no log de erros.',
          e.message + ' — anote manualmente na aba Erros.');
      }
      return 'erro';
    }
  }

  function ligado() {
    var m = (Store.get('meta') || {});
    return m.autoLog !== false;      // ligado por padrão
  }

  function definirLigado(v) {
    var m = Store.get('meta') || {};
    m.autoLog = !!v;
    Store.set('meta', m);
  }

  root.LogErros = {
    registrar: registrar,
    ligado: ligado,
    definirLigado: definirLigado,
    palpitarMotivo: palpitarMotivo    // exposto para teste
  };
})(typeof window !== 'undefined' ? window : globalThis);
