/* =============================================================================
   SIMULADOS.JS — provas completas no formato da banca
   -----------------------------------------------------------------------------
   Formato fiel ao item 9.7 do Edital nº 2512:
     • Prova Objetiva Teórica: 50 questões × 0,9 = 45 pontos
     • Prova Objetiva Prática: 5 casos clínicos × 5 questões × 1,8 = 45 pontos
     • Duração: 5 horas · aprovação: 70,0 de 100,0 (com até 10 do currículo)
   Durante a prova NÃO se vê gabarito. Ao final, nota e revisão comentada
   questão a questão — clicando na questão da grade de resultado abre a revisão.
   ========================================================================== */
(function () {
  'use strict';

  var BANCO = [], CASOS = [];
  var raiz = document.getElementById('raiz');
  var P = EDITAL.prova;
  var relogio = null;

  /* ------------------------------------------------------------- persistência */
  function dados() {
    var s = Store.get('simulados') || {};
    if (!s.provas) s.provas = [];
    return s;
  }
  function salvar(s) { Store.set('simulados', s); }
  function provaAtual() {
    var s = dados();
    if (!s.atual) return null;
    return s.provas.filter(function (p) { return p.id === s.atual; })[0] || null;
  }
  function gravarProva(p) {
    var s = dados();
    var i = s.provas.findIndex(function (x) { return x.id === p.id; });
    if (i === -1) { s.provas.push(p); } else { s.provas[i] = p; }
    salvar(s);
  }

  /* ------------------------------------------------------------------ sorteio */
  function embaralhar(lista, semente) {
    return lista.slice().sort(function (a, b) {
      return GABARITO.hash(a.id + semente) - GABARITO.hash(b.id + semente);
    });
  }

  // Sorteia as 50 objetivas distribuídas entre as seções, proporcional ao peso.
  function sortearObjetivas(semente, usados) {
    var porSecao = {};
    BANCO.forEach(function (q) {
      var t = EDITAL.tema(q.tema);
      if (!t) return;
      (porSecao[t.sec] = porSecao[t.sec] || []).push(q);
    });

    var pesos = EDITAL.secoes.map(function (sec) {
      var metas = EDITAL.daSecao(sec.id).reduce(function (a, t) { return a + t.meta; }, 0);
      return { sec: sec.id, peso: metas };
    });
    var somaPeso = pesos.reduce(function (a, p) { return a + p.peso; }, 0);

    var escolhidas = [];
    pesos.forEach(function (p) {
      var alvo = Math.round(P.objetivas * p.peso / somaPeso);
      var pool = embaralhar(porSecao[p.sec] || [], semente);
      // primeiro as que ainda não caíram em simulado anterior
      var novas = pool.filter(function (q) { return usados.indexOf(q.id) === -1; });
      var resto = pool.filter(function (q) { return usados.indexOf(q.id) !== -1; });
      escolhidas = escolhidas.concat(novas.concat(resto).slice(0, alvo));
    });

    // completa ou apara para exatamente 50, se houver banco suficiente
    if (escolhidas.length < P.objetivas) {
      var ids = escolhidas.map(function (q) { return q.id; });
      var sobra = embaralhar(BANCO.filter(function (q) { return ids.indexOf(q.id) === -1; }), semente);
      escolhidas = escolhidas.concat(sobra.slice(0, P.objetivas - escolhidas.length));
    }
    return embaralhar(escolhidas, semente + 'x').slice(0, P.objetivas);
  }

  function sortearCasos(semente, usados) {
    var pool = embaralhar(CASOS, semente);
    var novos = pool.filter(function (c) { return usados.indexOf(c.id) === -1; });
    var resto = pool.filter(function (c) { return usados.indexOf(c.id) !== -1; });
    return novos.concat(resto).slice(0, P.casos);
  }

  function criarProva() {
    var s = dados();
    var usadosQ = [], usadosC = [];
    s.provas.forEach(function (p) {
      usadosQ = usadosQ.concat(p.objetivas || []);
      usadosC = usadosC.concat(p.casos || []);
    });
    var semente = 's' + Date.now();
    var objetivas = sortearObjetivas(semente, usadosQ);
    var casos = sortearCasos(semente, usadosC);

    var p = {
      id: semente,
      criadoEm: Date.now(),
      iniciadoEm: Date.now(),
      duracaoMs: P.duracaoMin * 60000,
      objetivas: objetivas.map(function (q) { return q.id; }),
      casos: casos.map(function (c) { return c.id; }),
      respostas: {},          // chave -> índice marcado (na ordem exibida)
      finalizadoEm: null,
      numero: s.provas.length + 1
    };
    gravarProva(p);
    var s2 = dados(); s2.atual = p.id; salvar(s2);
    return p;
  }

  /* --------------------------------------------------------------- itens ---- */
  // Lista unificada de itens da prova: 50 objetivas + casos × 5 questões
  function itensDe(p) {
    var itens = [];
    p.objetivas.forEach(function (qid, i) {
      var q = BANCO.filter(function (x) { return x.id === qid; })[0];
      if (!q) return;
      itens.push({
        chave: 'o:' + qid, tipo: 'objetiva', n: itens.length + 1, peso: P.pesoObjetiva,
        tema: q.tema, enunciado: q.enunciado, vinheta: null,
        alts: GABARITO.ordenar(q, BANCO),
        comentario: q.comentario, pegadinha: q.pegadinha, refs: q.refs, tipoQ: q.tipo
      });
    });
    p.casos.forEach(function (cid, ic) {
      var c = CASOS.filter(function (x) { return x.id === cid; })[0];
      if (!c) return;
      c.questoes.forEach(function (q, iq) {
        var chave = 'c:' + cid + ':' + iq;
        itens.push({
          chave: chave, tipo: 'caso', n: itens.length + 1, peso: P.pesoPratica,
          tema: (c.temas || [])[0] || '', enunciado: q.enunciado,
          vinheta: iq === 0 ? c.vinheta : null,
          vinhetaSempre: c.vinheta, casoTitulo: c.titulo, casoN: ic + 1, qN: iq + 1,
          alts: GABARITO.ordenarPorChave(q.alts, chave),
          comentario: q.comentario, pegadinha: q.pegadinha, refs: q.refs, tipoQ: 'autoral'
        });
      });
    });
    return itens;
  }

  function corrigir(p) {
    var itens = itensDe(p);
    var acertosO = 0, acertosC = 0, totalO = 0, totalC = 0;
    itens.forEach(function (it) {
      var marcada = p.respostas[it.chave];
      var certo = marcada !== undefined && it.alts[marcada] && it.alts[marcada].ok;
      if (it.tipo === 'objetiva') { totalO++; if (certo) acertosO++; }
      else { totalC++; if (certo) acertosC++; }
    });
    var notaO = acertosO * P.pesoObjetiva;
    var notaC = acertosC * P.pesoPratica;
    return {
      itens: itens, acertosO: acertosO, acertosC: acertosC, totalO: totalO, totalC: totalC,
      notaO: notaO, notaC: notaC, nota: notaO + notaC,
      respondidas: Object.keys(p.respostas).length, total: itens.length
    };
  }

  /* ----------------------------------------------------------------- tempo -- */
  function restanteMs(p) {
    if (p.finalizadoEm) return 0;
    return Math.max(0, p.iniciadoEm + p.duracaoMs - Date.now());
  }
  function hms(ms) {
    var s = Math.floor(ms / 1000);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(x).padStart(2, '0');
  }

  /* ---------------------------------------------------------------- telas --- */
  var estado = { idx: 0, revisandoIdx: null };

  function limparRelogio() { if (relogio) { clearInterval(relogio); relogio = null; } }

  function telaInicial() {
    limparRelogio();
    var s = dados();
    var faltamCasos = Math.max(0, P.casos - CASOS.length);
    var faltamQ = Math.max(0, P.objetivas - BANCO.length);

    var h = '<div class="cartao"><h1 style="margin:0 0 4px">Simulados</h1>' +
      '<p class="pequeno fraco" style="margin:0">Formato do Edital nº 2512: <b>' + P.objetivas +
      ' questões objetivas</b> (0,9 cada) mais <b>' + P.casos + ' casos clínicos com ' +
      P.questoesPorCaso + ' questões</b> (1,8 cada), em <b>' + (P.duracaoMin / 60) +
      ' horas</b>. Máximo de ' + P.maxProvas + ' pontos nas provas; a aprovação é ' +
      P.notaCorte + ',0 de 100,0 contando até ' + P.maxCurriculo + ' pontos de currículo.</p></div>';

    if (faltamQ || faltamCasos) {
      h += '<div class="faixa alerta"><b>Banco ainda incompleto.</b> ' +
        (faltamQ ? 'Há ' + BANCO.length + ' questões objetivas no banco (o simulado usa ' +
          P.objetivas + '). ' : '') +
        (faltamCasos ? 'Há ' + CASOS.length + ' casos clínicos (o simulado usa ' + P.casos + '). ' : '') +
        'O simulado roda com o que existe e a nota é calculada sobre os itens realmente aplicados.</div>';
    }

    h += '<div class="cartao"><button class="primario" id="btNovo" style="width:100%">' +
      'Iniciar novo simulado cronometrado</button>' +
      '<p class="pequeno fraco" style="margin:10px 0 0">Sem gabarito à vista. O cronômetro ' +
      'continua correndo se você fechar o app — do mesmo jeito que na prova.</p></div>';

    if (s.provas.length) {
      h += '<div class="cartao"><h2>Provas realizadas</h2><div class="tabela-rolagem"><table>' +
        '<thead><tr><th>#</th><th>Data</th><th>Nota</th><th>Objetiva</th><th>Prática</th><th></th></tr></thead><tbody>';
      s.provas.slice().reverse().forEach(function (p) {
        var r = corrigir(p);
        var pct = r.total ? (r.nota / (r.totalO * P.pesoObjetiva + r.totalC * P.pesoPratica) * 100) : 0;
        h += '<tr><td>' + p.numero + '</td><td>' + new Date(p.criadoEm).toLocaleDateString('pt-BR') + '</td>' +
          '<td><b>' + (p.finalizadoEm ? r.nota.toFixed(1) : '—') + '</b>' +
          (p.finalizadoEm ? ' <span class="pequeno fraco">(' + pct.toFixed(0) + '%)</span>' : '') + '</td>' +
          '<td>' + r.acertosO + '/' + r.totalO + '</td><td>' + r.acertosC + '/' + r.totalC + '</td>' +
          '<td><button data-abrir="' + p.id + '" style="min-height:30px;padding:3px 9px">' +
          (p.finalizadoEm ? 'Revisão' : 'Continuar') + '</button></td></tr>';
      });
      h += '</tbody></table></div></div>';
    }
    raiz.innerHTML = h;

    document.getElementById('btNovo').onclick = function () {
      if (!BANCO.length) { Store.avisar('erro', 'O banco de questões está vazio.'); return; }
      criarProva(); estado.idx = 0; telaProva();
    };
    raiz.querySelectorAll('[data-abrir]').forEach(function (b) {
      b.onclick = function () {
        var s2 = dados(); s2.atual = b.dataset.abrir; salvar(s2);
        estado.idx = 0;
        var p = provaAtual();
        if (p.finalizadoEm) { telaResultado(); } else { telaProva(); }
      };
    });
  }

  function telaProva() {
    var p = provaAtual();
    if (!p) return telaInicial();
    if (restanteMs(p) <= 0 && !p.finalizadoEm) { finalizar(true); return; }

    var itens = itensDe(p);
    if (!itens.length) { Store.avisar('erro', 'Não foi possível montar a prova.'); return telaInicial(); }
    if (estado.idx >= itens.length) estado.idx = itens.length - 1;
    var it = itens[estado.idx];

    var h = '<div class="cronometro"><span class="tempo" id="tempo">--:--:--</span>' +
      '<span class="pos">questão ' + (estado.idx + 1) + ' de ' + itens.length +
      ' · respondidas ' + Object.keys(p.respostas).length + '</span>' +
      '<span style="flex:1"></span>' +
      '<button id="btEntregar" style="min-height:32px;padding:4px 10px">Entregar</button></div>';

    h += '<div class="cartao">';
    h += '<div class="linha" style="margin-bottom:10px">' +
      '<span class="rotulo">' + (it.tipo === 'caso'
        ? 'CASO ' + it.casoN + ' · questão ' + it.qN + ' de ' + P.questoesPorCaso
        : 'OBJETIVA ' + it.n) + '</span>' +
      '<span class="rotulo cinza">' + it.peso.toFixed(1).replace('.', ',') + ' pt</span></div>';

    if (it.vinhetaSempre) {
      h += '<div class="vinheta"><span class="rot">Caso ' + it.casoN + ' — ' +
        (it.casoTitulo || '') + '</span>' + escapar(it.vinhetaSempre) + '</div>';
    }
    h += '<div class="enunciado">' + escapar(it.enunciado) + '</div><ul class="alts">';
    it.alts.forEach(function (a, i) {
      var marc = p.respostas[it.chave] === i ? ' marcada' : '';
      h += '<li><button class="alt' + marc + '" data-alt="' + i + '">' +
        '<span class="letra">' + 'ABCDE'[i] + '</span><span class="txt">' + escapar(a.t) + '</span></button></li>';
    });
    h += '</ul>';
    h += '<div class="linha" style="margin-top:14px">' +
      '<button id="btAnt"' + (estado.idx === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '<button id="btLimpar">Limpar</button><span style="flex:1"></span>' +
      '<button class="primario" id="btProx"' +
      (estado.idx >= itens.length - 1 ? ' disabled' : '') + '>Próxima →</button></div>';
    h += '</div>';

    h += '<div class="cartao"><h3 style="margin-top:0">Folha de respostas</h3><div class="grade" id="grade"></div></div>';
    raiz.innerHTML = h;

    var grade = document.getElementById('grade');
    itens.forEach(function (x, i) {
      var b = document.createElement('button');
      b.textContent = (i + 1);
      if (p.respostas[x.chave] !== undefined) b.classList.add('resp');
      if (i === estado.idx) b.classList.add('atual');
      b.onclick = function () { estado.idx = i; telaProva(); window.scrollTo(0, 0); };
      grade.appendChild(b);
    });

    raiz.querySelectorAll('[data-alt]').forEach(function (b) {
      b.onclick = function () {
        var pp = provaAtual();
        pp.respostas[it.chave] = Number(b.dataset.alt);
        gravarProva(pp);                       // gravação imediata a cada clique
        if (estado.idx < itens.length - 1) { estado.idx++; }
        telaProva();
        window.scrollTo(0, 0);
      };
    });
    document.getElementById('btLimpar').onclick = function () {
      var pp = provaAtual(); delete pp.respostas[it.chave]; gravarProva(pp); telaProva();
    };
    document.getElementById('btAnt').onclick = function () { estado.idx--; telaProva(); window.scrollTo(0, 0); };
    document.getElementById('btProx').onclick = function () { estado.idx++; telaProva(); window.scrollTo(0, 0); };
    document.getElementById('btEntregar').onclick = function () {
      var falta = itens.length - Object.keys(provaAtual().respostas).length;
      if (!confirm('Entregar a prova?' + (falta ? '\n\nFaltam ' + falta + ' questões sem resposta.' : '') +
        '\n\nDepois de entregar você não pode mais alterar respostas.')) return;
      finalizar(false);
    };

    limparRelogio();
    var tick = function () {
      var pp = provaAtual();
      if (!pp || pp.finalizadoEm) { limparRelogio(); return; }
      var r = restanteMs(pp);
      var el = document.getElementById('tempo');
      if (!el) { limparRelogio(); return; }
      el.textContent = hms(r);
      el.classList.toggle('baixo', r < 15 * 60000);
      if (r <= 0) { limparRelogio(); finalizar(true); }
    };
    tick();
    relogio = setInterval(tick, 1000);
  }

  function finalizar(porTempo) {
    limparRelogio();
    var p = provaAtual();
    p.finalizadoEm = Date.now();
    p.encerradoPorTempo = !!porTempo;
    gravarProva(p);
    Store.flush();
    estado.idx = 0;
    telaResultado();
  }

  function telaResultado() {
    limparRelogio();
    var p = provaAtual();
    if (!p) return telaInicial();
    var r = corrigir(p);
    var maxPossivel = r.totalO * P.pesoObjetiva + r.totalC * P.pesoPratica;
    var pct = maxPossivel ? r.nota / maxPossivel * 100 : 0;
    var aprovado = pct >= P.notaCorte;

    var h = '<div class="cartao"><div class="linha"><button id="btVoltar">← Simulados</button>' +
      '<span style="flex:1"></span><span class="rotulo cinza">simulado ' + p.numero + '</span></div>';
    if (p.encerradoPorTempo) {
      h += '<div class="faixa alerta" style="margin-top:10px">A prova foi encerrada pelo fim do tempo.</div>';
    }
    h += '<div class="nota"><div class="val ' + (aprovado ? 'ok' : 'erro') + '">' +
      r.nota.toFixed(1).replace('.', ',') + '</div>' +
      '<div class="de">de ' + maxPossivel.toFixed(1).replace('.', ',') + ' pontos possíveis · ' +
      pct.toFixed(1).replace('.', ',') + '% de aproveitamento</div></div>';
    h += '<div class="tabela-rolagem"><table><tbody>' +
      '<tr><th>Objetiva teórica</th><td>' + r.acertosO + ' de ' + r.totalO + ' · ' +
      r.notaO.toFixed(1).replace('.', ',') + ' pts</td></tr>' +
      '<tr><th>Objetiva prática (casos)</th><td>' + r.acertosC + ' de ' + r.totalC + ' · ' +
      r.notaC.toFixed(1).replace('.', ',') + ' pts</td></tr>' +
      '</tbody></table></div>';
    h += '<p class="pequeno fraco" style="margin:10px 0 0">Na prova real a aprovação é <b>' +
      P.notaCorte + ',0 de 100,0</b>, somando até ' + P.maxCurriculo +
      ' pontos da avaliação curricular. Aqui o corte de ' + P.notaCorte +
      '% é aplicado só sobre a parte de provas.</p></div>';

    // desempenho por tema
    var porTema = {};
    r.itens.forEach(function (it) {
      if (!it.tema) return;
      var t = porTema[it.tema] = porTema[it.tema] || { n: 0, c: 0 };
      t.n++;
      var m = p.respostas[it.chave];
      if (m !== undefined && it.alts[m] && it.alts[m].ok) t.c++;
    });
    var linhas = Object.keys(porTema).sort().map(function (k) {
      var t = porTema[k];
      var pc = Math.round(t.c / t.n * 100);
      return '<tr><td>' + k + '</td><td>' + EDITAL.nome(k) + '</td><td>' + t.c + '/' + t.n +
        '</td><td><span class="rotulo ' + (pc >= 70 ? 'ok' : pc >= 50 ? 'alerta' : 'erro') + '">' +
        pc + '%</span></td></tr>';
    }).join('');
    h += '<div class="cartao"><h2>Desempenho por tema do edital</h2>' +
      '<div class="tabela-rolagem"><table><thead><tr><th>Cód.</th><th>Tema</th>' +
      '<th>Acertos</th><th>%</th></tr></thead><tbody>' + linhas + '</tbody></table></div></div>';

    h += '<div class="cartao"><h2>Revisão comentada</h2>' +
      '<p class="pequeno fraco">Clique em qualquer questão para abrir a revisão dela.</p>' +
      '<div class="grade" id="gradeR"></div></div>';
    h += '<div id="revisao"></div>';
    raiz.innerHTML = h;

    document.getElementById('btVoltar').onclick = function () {
      var s = dados(); delete s.atual; salvar(s); telaInicial();
    };

    var gradeR = document.getElementById('gradeR');
    r.itens.forEach(function (it, i) {
      var b = document.createElement('button');
      b.textContent = (i + 1);
      var m = p.respostas[it.chave];
      var certo = m !== undefined && it.alts[m] && it.alts[m].ok;
      b.classList.add(certo ? 'certa' : 'errada');
      b.onclick = function () { mostrarRevisao(p, r, i); };
      gradeR.appendChild(b);
    });
    if (r.itens.length) { mostrarRevisao(p, r, 0); }
  }

  function mostrarRevisao(p, r, i) {
    var it = r.itens[i];
    var marcada = p.respostas[it.chave];
    var alvo = document.getElementById('revisao');

    var h = '<div class="cartao">';
    h += '<div class="linha" style="margin-bottom:10px">' +
      '<span class="rotulo">' + (it.tipo === 'caso'
        ? 'CASO ' + it.casoN + ' · questão ' + it.qN : 'OBJETIVA ' + it.n) + '</span>' +
      (it.tema ? '<span class="rotulo cinza">' + it.tema + ' ' + EDITAL.nome(it.tema) + '</span>' : '') +
      '<span class="rotulo ' + (marcada !== undefined && it.alts[marcada] && it.alts[marcada].ok
        ? 'ok">acertou' : 'erro">' + (marcada === undefined ? 'em branco' : 'errou')) + '</span></div>';
    if (it.vinhetaSempre) {
      h += '<div class="vinheta"><span class="rot">Caso ' + it.casoN + '</span>' +
        escapar(it.vinhetaSempre) + '</div>';
    }
    h += '<div class="enunciado">' + escapar(it.enunciado) + '</div><ul class="alts">';
    it.alts.forEach(function (a, j) {
      var cls = a.ok ? ' certa' : (marcada === j ? ' errada' : '');
      h += '<li><button class="alt' + cls + '" disabled><span class="letra">' + 'ABCDE'[j] +
        '</span><span class="txt">' + escapar(a.t) +
        (marcada === j ? ' <b>(sua resposta)</b>' : '') +
        '<span class="why">' + escapar(a.why) + '</span></span></button></li>';
    });
    h += '</ul><div class="explic">';
    if (it.comentario) { h += '<div class="bloco"><h4>Comentário</h4><div>' + escapar(it.comentario) + '</div></div>'; }
    if (it.pegadinha) { h += '<div class="bloco"><h4>Pegadinha</h4><div>' + escapar(it.pegadinha) + '</div></div>'; }
    if (it.refs && it.refs.length) {
      h += '<div class="pequeno fraco">Referências conceituais: ' + escapar(it.refs.join(' · ')) + '</div>';
    }
    h += '<div class="pequeno fraco" style="margin-top:6px">Questão autoral, escrita no estilo da ' +
      'banca — não é transcrição de prova anterior.</div>';
    h += '</div>';
    h += '<div class="linha" style="margin-top:12px">' +
      '<button id="rAnt"' + (i === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '<span style="flex:1"></span>' +
      '<button id="rProx"' + (i >= r.itens.length - 1 ? ' disabled' : '') + '>Próxima →</button></div>';
    h += '</div>';
    alvo.innerHTML = h;
    document.getElementById('rAnt').onclick = function () { mostrarRevisao(p, r, i - 1); };
    document.getElementById('rProx').onclick = function () { mostrarRevisao(p, r, i + 1); };
    alvo.scrollIntoView({ block: 'start' });
  }

  function escapar(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ------------------------------------------------------------------ init -- */
  window.addEventListener('pagehide', function () {
    var p = provaAtual();
    if (p && !p.finalizadoEm) { gravarProva(p); }
  });

  Promise.all([Store.init(), BancoLoader.carregar('../banco/')]).then(function (r) {
    BANCO = r[1] || [];
    CASOS = window.CASOS || [];
    var p = provaAtual();
    if (p && !p.finalizadoEm && restanteMs(p) > 0) { telaProva(); }
    else if (p && p.finalizadoEm) { telaResultado(); }
    else { telaInicial(); }
  });
})();
