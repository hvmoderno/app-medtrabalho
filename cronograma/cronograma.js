/* =============================================================================
   CRONOGRAMA.JS — plano de estudo até a prova (01/11/2026)
   -----------------------------------------------------------------------------
   Gerado a partir da taxonomia do edital (core/edital.js). Rotina informada:
   30 min de manhã + 30 min à noite = 2 blocos por dia.

   Estrutura de cada tema:
     • temas de ALTO rendimento: 1 bloco de teoria + 2 de questões
     • temas de rendimento MÉDIO: 1 bloco de teoria + 1 de questões
   Depois, cada tema volta em revisão espaçada em D+7 e D+21 (bloco de revisão
   agrupa 2 a 3 temas, no formato "só questões erradas + flashcards").

   Ordem de estudo: NÃO é a ordem numérica do edital. É deliberada — primeiro a
   espinha dorsal da especialidade (patologia, nexo, acidente, PCMSO, NR,
   previdenciária), porque tudo o mais se pendura nela e são os temas de maior
   rendimento, que assim ganham o maior número de ciclos de revisão.
   ========================================================================== */
(function (root) {
  'use strict';

  // ---- ordem pedagógica de estudo (todos os 49 temas, sem exceção) ----------
  var ORDEM = [
    // Bloco A — espinha dorsal: o que faz o resto fazer sentido
    '4.1', '5.2', '5.3', '5.1', '6.1', '7.4', '7.2', '7.1',
    // Bloco B — perícia, incapacidade e retorno ao trabalho
    '5.4', '5.5', '5.6',
    // Bloco C — riscos e higiene ocupacional
    '2.1', '2.2', '2.3', '2.4', '2.6', '2.5', '2.7', '2.8', '2.9',
    // Bloco D — as grandes doenças relacionadas ao trabalho
    '4.2', '4.3', '4.5', '4.4', '4.8', '4.9', '4.10',
    // Bloco E — ergonomia e saúde mental (alto rendimento, muito cobrados)
    '3.2', '3.1', '4.6', '4.7',
    // Bloco F — gestão, vigilância e políticas públicas
    '1.8', '1.9', '1.6', '1.7', '1.4', '1.5', '1.10',
    // Bloco G — ética, dados e sistemas
    '7.6', '7.7', '7.8', '7.5', '7.3',
    // Bloco H — fundamentos, epidemiologia e clínica ocupacional
    '1.3', '1.1', '1.2', '6.2', '6.3', '6.4'
  ];

  var UMDIA = 86400000;

  function iso(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
      '-' + String(d.getDate()).padStart(2, '0');
  }
  function br(d) {
    return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0');
  }
  var DIAS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

  /* ------------------------------------------------------------- gerador --- */
  function gerar(hojeISO) {
    var hoje = new Date((hojeISO || iso(new Date())) + 'T00:00:00');
    var prova = new Date(EDITAL.prova.data + 'T00:00:00');

    // Confere que a ordem cobre exatamente a taxonomia — falha alto se divergir.
    var faltando = EDITAL.temas.filter(function (t) { return ORDEM.indexOf(t.id) === -1; });
    if (faltando.length) {
      throw new Error('Cronograma não cobre os temas: ' +
        faltando.map(function (t) { return t.id; }).join(', '));
    }

    // --- 1. monta a linha do tempo de blocos vazios
    var dias = [];
    for (var d = new Date(hoje); d < prova; d = new Date(d.getTime() + UMDIA)) {
      dias.push({
        data: iso(d), br: br(d), dow: d.getDay(), semana: 0,
        blocos: [
          { periodo: 'manhã', id: iso(d) + ':m', tipo: null },
          { periodo: 'noite', id: iso(d) + ':n', tipo: null }
        ]
      });
    }
    if (!dias.length) { return { dias: [], semanas: [], prova: prova }; }

    // numeração de semanas (semana 1 começa hoje)
    dias.forEach(function (dia, i) { dia.semana = Math.floor(i / 7) + 1; });
    var totalSemanas = dias[dias.length - 1].semana;

    // --- 2. reservas: reta final e simulados completos
    var RETA_FINAL = 7;                       // últimos 7 dias: só revisão dirigida
    var inicioReta = dias.length - RETA_FINAL;

    // domingos para simulado completo: 4 melhores domingos antes da reta final
    var domingos = [];
    dias.forEach(function (dia, i) { if (dia.dow === 0 && i < inicioReta && i > 13) { domingos.push(i); } });
    var simulados = [];
    if (domingos.length >= 4) {
      var passo = (domingos.length - 1) / 3;
      for (var k = 0; k < 4; k++) { simulados.push(domingos[Math.round(k * passo)]); }
    } else { simulados = domingos.slice(); }

    simulados.forEach(function (i, n) {
      dias[i].blocos[0].tipo = 'simulado';
      dias[i].blocos[0].titulo = 'SIMULADO COMPLETO ' + (n + 1) + ' de ' + simulados.length;
      dias[i].blocos[0].detalhe = '50 questões objetivas + 5 casos clínicos com 5 questões, ' +
        'cronometrado em 5 horas, no formato da banca. Este bloco NÃO cabe em 30 minutos — ' +
        'reserve a manhã inteira deste domingo.';
      dias[i].blocos[0].longo = true;
      dias[i].blocos[1].tipo = 'revisao-simulado';
      dias[i].blocos[1].titulo = 'Revisão comentada do simulado ' + (n + 1);
      dias[i].blocos[1].detalhe = 'Abra cada questão errada na revisão comentada e registre ' +
        'todas no Log de erros, com tema do edital e motivo.';
      dias[i].blocos[1].longo = true;
    });

    // --- 3. distribui teoria e questões dos 49 temas nos blocos livres
    var livres = [];
    dias.forEach(function (dia, i) {
      if (i >= inicioReta) return;
      dia.blocos.forEach(function (b) { if (!b.tipo) { livres.push({ dia: i, bloco: b }); } });
    });

    // agenda de revisão espaçada: tema -> dias em que deve voltar
    var revisoes = {};   // índice do dia -> [temas]
    function agendarRevisao(idxEstudo, temaId, offset) {
      var alvo = idxEstudo + offset;
      if (alvo >= inicioReta || alvo >= dias.length) return;
      if (!revisoes[alvo]) revisoes[alvo] = [];
      revisoes[alvo].push(temaId);
    }

    var fila = [];
    ORDEM.forEach(function (id) {
      var t = EDITAL.tema(id);
      fila.push({ tema: id, tipo: 'teoria' });
      fila.push({ tema: id, tipo: 'questoes' });
      if (t.peso === 'alto') { fila.push({ tema: id, tipo: 'questoes' }); }
    });

    // Os blocos de revisão espaçada NÃO podem espremer o conteúdo: primeiro
    // garantimos um bloco para cada item da fila (todos os 49 temas entram),
    // e só o que sobrar vira revisão, distribuído por igual ao longo do período.
    if (fila.length > livres.length) {
      throw new Error('Não há blocos suficientes até a prova para cobrir os ' +
        EDITAL.temas.length + ' temas: precisa de ' + fila.length +
        ' blocos e só existem ' + livres.length + '.');
    }
    var sobra = livres.length - fila.length;
    var passoRev = sobra > 0 ? livres.length / sobra : Infinity;

    var iFila = 0, primeiroEstudo = {}, proximaRev = passoRev, usadasRev = 0;
    livres.forEach(function (slot, n) {
      if (usadasRev < sobra && n + 1 >= proximaRev) {
        slot.bloco.tipo = 'reservado-revisao';
        usadasRev++; proximaRev += passoRev;
        return;
      }
      var item = fila[iFila++];
      if (!item) { slot.bloco.tipo = 'reservado-revisao'; return; }
      var t = EDITAL.tema(item.tema);
      slot.bloco.tipo = item.tipo;
      slot.bloco.tema = item.tema;
      if (item.tipo === 'teoria') {
        slot.bloco.titulo = 'Teoria — ' + item.tema + ' ' + t.nome;
        slot.bloco.detalhe = 'Guia de revisão do tema na aba Materiais. Foque nas tabelas, ' +
          'nas pegadinhas de prova e nos mnemônicos.';
        if (primeiroEstudo[item.tema] === undefined) {
          primeiroEstudo[item.tema] = slot.dia;
          agendarRevisao(slot.dia, item.tema, 7);
          agendarRevisao(slot.dia, item.tema, 21);
        }
      } else {
        slot.bloco.titulo = 'Questões — ' + item.tema + ' ' + t.nome;
        slot.bloco.detalhe = 'Aba Questões, filtro no tema ' + item.tema +
          '. Registre no Log de erros tudo o que errar.';
      }
    });

    // --- 4. preenche os blocos reservados com as revisões espaçadas devidas
    var pendentes = [];
    Object.keys(revisoes).sort(function (a, b) { return a - b; }).forEach(function (k) {
      revisoes[k].forEach(function (t) { pendentes.push({ apartirDe: Number(k), tema: t }); });
    });

    livres.forEach(function (slot) {
      if (slot.bloco.tipo !== 'reservado-revisao') return;
      var lote = [];
      for (var i = 0; i < pendentes.length && lote.length < 3; i++) {
        if (pendentes[i].apartirDe <= slot.dia) { lote.push(pendentes.splice(i, 1)[0].tema); i--; }
      }
      if (lote.length) {
        slot.bloco.tipo = 'revisao';
        slot.bloco.temas = lote;
        slot.bloco.titulo = 'Revisão espaçada — ' + lote.join(', ');
        slot.bloco.detalhe = 'Aba Questões no modo "só as que eu errei" para ' +
          lote.map(function (x) { return x; }).join(', ') +
          ', mais os flashcards vencidos destes temas.';
      } else {
        slot.bloco.tipo = 'flashcards';
        slot.bloco.titulo = 'Flashcards vencidos + Treino';
        slot.bloco.detalhe = 'Limpe a fila de flashcards do dia e faça uma fase da trilha ' +
          'do Treino no tema em que você tem mais erros pendentes.';
      }
    });

    // --- 5. reta final
    var altoRend = EDITAL.temas.filter(function (t) { return t.peso === 'alto'; });
    var roteiroFinal = [
      ['Revisão dirigida pelo Log de erros',
       'Abra a planilha, ordene pelos temas com mais erros pendentes e refaça só essas questões.'],
      ['Alto rendimento — parte 1: ' + altoRend.slice(0, 7).map(function (t) { return t.id; }).join(', '),
       'Só os guias de revisão e as pegadinhas de prova destes temas. Nada de conteúdo novo.'],
      ['Flashcards — fila completa',
       'Zere a fila. O que você errar aqui vai para a revisão de véspera.'],
      ['Alto rendimento — parte 2: ' + altoRend.slice(7, 14).map(function (t) { return t.id; }).join(', '),
       'Mesma coisa: tabelas, fluxogramas, mnemônicos e pegadinhas.'],
      ['Questões erradas de todos os temas',
       'Aba Questões, modo "só as que eu errei", sem filtro de tema.'],
      ['Alto rendimento — parte 3: ' + altoRend.slice(14).map(function (t) { return t.id; }).join(', '),
       'Fecha o ciclo dos temas de maior peso.'],
      ['Legislação e prazos',
       'Passe rápido em 7.1, 7.2, 7.4, 7.5 e 6.1 — é onde a banca cobra detalhe seco.'],
      ['Ética e LGPD',
       'Sigilo, aptidão versus diagnóstico, impedimento pericial, bases legais de dado sensível.'],
      ['Nexo, concausa e acidente',
       'Refaça as questões de 5.1, 5.2 e 5.3. É o coração da prova prática.'],
      ['Casos clínicos',
       'Refaça os casos dos simulados — a prova prática vale metade da nota.'],
      ['Revisão livre do que você marcou como fraco',
       'Use a taxa de acerto por tema na aba Questões para escolher.'],
      ['Véspera — leitura leve',
       'Só mnemônicos e pegadinhas. Sem questão nova. Separe documento com foto e chegue às 08:00.']
    ];
    var iRot = 0;
    for (var j = inicioReta; j < dias.length; j++) {
      dias[j].blocos.forEach(function (b) {
        var r = roteiroFinal[iRot++ % roteiroFinal.length];
        b.tipo = 'reta-final';
        b.titulo = r[0];
        b.detalhe = r[1];
      });
    }

    // --- 6. agrupa por semana
    var semanas = [];
    dias.forEach(function (dia) {
      var s = semanas[dia.semana - 1];
      if (!s) { s = semanas[dia.semana - 1] = { n: dia.semana, dias: [] }; }
      s.dias.push(dia);
    });
    semanas.forEach(function (s) {
      s.de = s.dias[0].br;
      s.ate = s.dias[s.dias.length - 1].br;
      s.blocos = s.dias.reduce(function (a, d) { return a + d.blocos.length; }, 0);
      var temas = {};
      s.dias.forEach(function (d) {
        d.blocos.forEach(function (b) {
          if (b.tema) temas[b.tema] = 1;
          (b.temas || []).forEach(function (t) { temas[t] = 1; });
        });
      });
      s.temas = Object.keys(temas);
      s.temSimulado = s.dias.some(function (d) {
        return d.blocos.some(function (b) { return b.tipo === 'simulado'; });
      });
      s.retaFinal = s.dias.some(function (d) {
        return d.blocos.some(function (b) { return b.tipo === 'reta-final'; });
      });
    });

    return { dias: dias, semanas: semanas, prova: prova, totalSemanas: totalSemanas,
             totalBlocos: dias.length * 2, simulados: simulados.length };
  }

  root.PLANO = { gerar: gerar, ORDEM: ORDEM, DIAS: DIAS };
})(typeof window !== 'undefined' ? window : globalThis);
