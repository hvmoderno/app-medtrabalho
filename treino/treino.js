/* =============================================================================
   TREINO.JS — trilha de fases por tema do edital, no estilo Duolingo
   -----------------------------------------------------------------------------
   Cada fase tem 6 exercícios sorteados entre quatro tipos, todos DERIVADOS do
   banco de questões (o treino cresce junto com o banco):
     • quiz               — a questão com as 5 alternativas
     • verdadeiro ou falso— uma afirmação isolada: está correta?
     • completar a frase  — lacuna na conduta correta, com opções plausíveis
     • jogo da memória    — parear a afirmação com a razão dela

   Abre e fecha cada fase com o MNEMÔNICO do guia de revisão daquele tema
   (extraído de materiais/guias/<tema>.html), quando o guia existir.

   XP, vidas e ofensiva persistidos como todo o resto.
   ========================================================================== */
(function () {
  'use strict';

  var BANCO = [];
  var raiz = document.getElementById('raiz');
  var POR_FASE = 6, VIDAS = 3, XP_ACERTO = 10, XP_FASE = 25;
  var QUESTOES_POR_FASE = 6;

  var jogo = null;   // fase em andamento

  /* --------------------------------------------------------------- estado -- */
  function dados() {
    var t = Store.get('treino') || {};
    if (!t.fases) t.fases = {};         // 'tema:idx' -> { xp, em }
    if (!t.xp) t.xp = 0;
    if (!t.ofensiva) t.ofensiva = { dias: [], atual: 0, recorde: 0 };
    return t;
  }
  function salvar(t) { Store.set('treino', t); }

  function registrarOfensiva() {
    var t = dados();
    var hoje = new Date().toISOString().slice(0, 10);
    var o = t.ofensiva;
    if (o.dias.indexOf(hoje) !== -1) return;
    var ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    o.atual = (o.dias.indexOf(ontem) !== -1) ? o.atual + 1 : 1;
    if (o.atual > o.recorde) o.recorde = o.atual;
    o.dias.push(hoje);
    if (o.dias.length > 400) o.dias = o.dias.slice(-400);
    salvar(t);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* --------------------------------------------------------- temas e fases -- */
  function questoesDo(tema) {
    return BANCO.filter(function (q) { return q.tema === tema; });
  }
  function totalFases(tema) {
    return Math.ceil(questoesDo(tema).length / QUESTOES_POR_FASE);
  }
  function faseFeita(tema, i) { return !!dados().fases[tema + ':' + i]; }

  /* ------------------------------------------------------------- mnemônico -- */
  var cacheMnemo = {};
  function mnemonico(tema) {
    if (cacheMnemo[tema] !== undefined) return Promise.resolve(cacheMnemo[tema]);
    return fetch('../materiais/guias/' + tema + '.html').then(function (r) {
      if (!r.ok) throw new Error('sem guia');
      return r.text();
    }).then(function (html) {
      var d = document.createElement('div');
      d.innerHTML = html;
      var m = d.querySelector('.caixa.mnemonico');
      cacheMnemo[tema] = m ? m.innerHTML : null;
      return cacheMnemo[tema];
    }).catch(function () { cacheMnemo[tema] = null; return null; });
  }

  /* ------------------------------------------------- geradores de exercício -- */
  var STOP = ('para pela pelo como que com uma este esta esse essa aquele aquela quando ' +
    'onde qual quais ainda mais menos entre sobre pelos pelas dos das nos nas seus suas ' +
    'deve devem pode podem ser sendo tem term todos todas outro outra apenas somente').split(' ');

  function palavrasConteudo(txt) {
    return (txt.match(/[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]{5,}/g) || [])
      .filter(function (w) { return STOP.indexOf(w.toLowerCase()) === -1; });
  }

  function gerarQuiz(q) {
    return {
      tipo: 'quiz', rotulo: 'Quiz', tema: q.tema,
      pergunta: q.enunciado,
      opcoes: GABARITO.ordenar(q, BANCO).map(function (a) {
        return { t: a.t, ok: a.ok, why: a.why };
      }),
      comentario: q.comentario
    };
  }

  function gerarVF(q, semente) {
    var alts = q.alts;
    var i = GABARITO.hash(q.id + 'vf' + semente) % alts.length;
    var a = alts[i];
    return {
      tipo: 'vf', rotulo: 'Verdadeiro ou falso', tema: q.tema,
      contexto: q.enunciado,
      pergunta: a.t,
      opcoes: [
        { t: 'Correta', ok: !!a.ok, why: a.why },
        { t: 'Incorreta', ok: !a.ok, why: a.why }
      ],
      comentario: q.comentario
    };
  }

  function gerarLacuna(q, pool) {
    var certa = q.alts.filter(function (x) { return x.ok; })[0];
    if (!certa) return null;
    var palavras = palavrasConteudo(certa.t);
    if (!palavras.length) return null;
    var alvo = palavras[GABARITO.hash(q.id + 'lac') % palavras.length];

    // distratores: palavras de conteúdo de outras questões do mesmo tema
    var outras = [];
    pool.forEach(function (o) {
      if (o.id === q.id) return;
      var c = o.alts.filter(function (x) { return x.ok; })[0];
      if (c) { outras = outras.concat(palavrasConteudo(c.t)); }
    });
    outras = outras.filter(function (w) {
      return w.toLowerCase() !== alvo.toLowerCase();
    });
    if (outras.length < 3) return null;

    var escolhidas = [];
    for (var k = 0; k < 40 && escolhidas.length < 3; k++) {
      var w = outras[GABARITO.hash(q.id + 'd' + k) % outras.length];
      if (escolhidas.indexOf(w) === -1) escolhidas.push(w);
    }
    if (escolhidas.length < 3) return null;

    var opcoes = escolhidas.map(function (w) {
      return { t: w, ok: false, why: 'Não é o termo que completa corretamente a afirmação.' };
    });
    opcoes.splice(GABARITO.hash(q.id + 'pos') % 4, 0,
      { t: alvo, ok: true, why: certa.why });

    var frase = certa.t.replace(new RegExp('\\b' + alvo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b'),
      '_______');
    return {
      tipo: 'lacuna', rotulo: 'Complete a frase', tema: q.tema,
      contexto: q.enunciado, pergunta: frase, opcoes: opcoes, comentario: q.comentario
    };
  }

  function corta(s, n) {
    s = String(s || '').trim();
    return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
  }

  function gerarMemoria(qs) {
    var pares = [];
    qs.slice(0, 4).forEach(function (q, i) {
      var certa = q.alts.filter(function (x) { return x.ok; })[0];
      if (!certa) return;
      var texto = (q.comentario || certa.why || '');
      // primeira frase, sem lookbehind (Safari antigo do iPad não suporta)
      var pt = texto.indexOf('. ');
      var razao = pt > 20 ? texto.slice(0, pt + 1) : texto;
      if (!razao) return;
      pares.push({ id: 'p' + i, a: corta(certa.t, 105), b: corta(razao, 105) });
    });
    if (pares.length < 3) return null;
    pares = pares.slice(0, 4);

    var cartas = [];
    pares.forEach(function (p) {
      cartas.push({ par: p.id, txt: p.a, lado: 'a' });
      cartas.push({ par: p.id, txt: p.b, lado: 'b' });
    });
    cartas.sort(function (x, y) {
      return GABARITO.hash(x.par + x.lado) - GABARITO.hash(y.par + y.lado);
    });
    return { tipo: 'memoria', rotulo: 'Jogo da memória', tema: qs[0].tema, cartas: cartas };
  }

  function montarFase(tema, idx) {
    var todas = questoesDo(tema).slice().sort(function (a, b) {
      return GABARITO.hash(a.id) - GABARITO.hash(b.id);
    });
    var lote = todas.slice(idx * QUESTOES_POR_FASE, (idx + 1) * QUESTOES_POR_FASE);
    if (!lote.length) return null;

    var ex = [];
    lote.forEach(function (q, i) {
      var tipo = (GABARITO.hash(q.id + 'tipo') + i) % 3;
      if (tipo === 0) { ex.push(gerarQuiz(q)); }
      else if (tipo === 1) { ex.push(gerarVF(q, idx)); }
      else {
        var l = gerarLacuna(q, todas);
        ex.push(l || gerarQuiz(q));
      }
    });
    var mem = gerarMemoria(lote);
    if (mem) { ex.splice(Math.min(3, ex.length), 0, mem); }
    return ex.slice(0, POR_FASE + 1);
  }

  /* ---------------------------------------------------------------- telas -- */
  function hud() {
    var t = dados();
    var v = jogo ? jogo.vidas : VIDAS;
    var corac = '';
    for (var i = 0; i < VIDAS; i++) {
      corac += '<span class="' + (i < v ? 'cheia' : 'vazia') + '">♥</span>';
    }
    return '<div class="cartao"><div class="hud">' +
      '<span>XP: <b>' + t.xp + '</b></span>' +
      '<span>ofensiva: <b>' + t.ofensiva.atual + '</b> dia(s)</span>' +
      '<span>recorde: <b>' + t.ofensiva.recorde + '</b></span>' +
      (jogo ? '<span class="vidas">' + corac + '</span>' : '') +
      '<span style="flex:1"></span>' +
      '<span>fases: <b>' + Object.keys(t.fases).length + '</b></span>' +
      '</div></div>';
  }

  function telaTrilha() {
    jogo = null;
    var h = hud();
    h += '<div class="cartao"><h1 style="margin:0 0 4px">Trilha de treino</h1>' +
      '<p class="pequeno fraco" style="margin:0">Uma trilha por tema do edital. Cada fase ' +
      'mistura quiz, verdadeiro ou falso, completar a frase e jogo da memória, e abre e ' +
      'fecha com o mnemônico do tema. Você tem ' + VIDAS + ' vidas por fase.</p></div>';

    h += '<div class="trilha">';
    EDITAL.secoes.forEach(function (sec) {
      var temas = EDITAL.daSecao(sec.id).filter(function (t) { return questoesDo(t.id).length; });
      if (!temas.length) return;
      h += '<div class="sec">Seção ' + sec.id + ' — ' + esc(sec.nome) + '</div>';
      temas.forEach(function (t) {
        var n = totalFases(t.id);
        var feitas = 0;
        for (var i = 0; i < n; i++) { if (faseFeita(t.id, i)) feitas++; }
        h += '<div class="tema-linha"><div class="cab"><span class="cod">' + t.id + '</span>' +
          '<span class="nome">' + esc(t.nome) + '</span>' +
          '<span class="rotulo ' + (feitas === n ? 'ok' : 'cinza') + '">' + feitas + '/' + n + '</span></div>' +
          '<div class="fases">';
        for (var j = 0; j < n; j++) {
          var feita = faseFeita(t.id, j);
          var liberada = j === 0 || faseFeita(t.id, j - 1);
          h += '<button data-tema="' + t.id + '" data-fase="' + j + '"' +
            (liberada ? '' : ' disabled') +
            ' class="' + (feita ? 'feita' : (liberada ? 'atual' : '')) + '">' +
            (feita ? '✓' : (j + 1)) + '</button>';
        }
        h += '</div></div>';
      });
    });
    h += '</div>';

    if (!BANCO.length) {
      h = hud() + '<div class="faixa alerta">O banco de questões está vazio — a trilha ' +
        'aparece assim que houver questões.</div>';
    }
    raiz.innerHTML = h;
    raiz.querySelectorAll('[data-tema]').forEach(function (b) {
      b.onclick = function () { iniciarFase(b.dataset.tema, Number(b.dataset.fase)); };
    });
  }

  function iniciarFase(tema, idx) {
    var ex = montarFase(tema, idx);
    if (!ex) { Store.avisar('aviso', 'Não há questões suficientes para montar esta fase.'); return; }
    jogo = { tema: tema, idx: idx, ex: ex, i: 0, vidas: VIDAS, acertos: 0, xp: 0, fase: 'abertura' };
    mnemonico(tema).then(function (m) { jogo.mnemo = m; telaAbertura(); });
  }

  function telaAbertura() {
    var h = hud();
    h += '<div class="cartao"><div class="linha" style="margin-bottom:10px">' +
      '<span class="rotulo">' + jogo.tema + ' ' + esc(EDITAL.nome(jogo.tema)) + '</span>' +
      '<span class="rotulo cinza">fase ' + (jogo.idx + 1) + '</span></div>';
    if (jogo.mnemo) {
      h += '<div class="mnemo"><span class="tit">Antes de começar — guarde isto</span>' +
        jogo.mnemo.replace(/<span class="tit">[^<]*<\/span>/, '') + '</div>';
    } else {
      h += '<p class="fraco pequeno">Este tema ainda não tem guia escrito, então a fase ' +
        'começa direto nos exercícios.</p>';
    }
    h += '<div class="linha"><button id="btVoltar">← Trilha</button><span style="flex:1"></span>' +
      '<button class="primario" id="btComecar">Começar a fase</button></div></div>';
    raiz.innerHTML = h;
    document.getElementById('btVoltar').onclick = telaTrilha;
    document.getElementById('btComecar').onclick = function () {
      jogo.fase = 'jogando'; jogo.i = 0; telaExercicio();
    };
  }

  function telaExercicio() {
    if (jogo.i >= jogo.ex.length) { return telaFim(true); }
    var e = jogo.ex[jogo.i];
    var prog = jogo.i / jogo.ex.length * 100;

    var h = hud();
    h += '<div class="cartao"><div class="barra-fase"><i style="width:' + prog + '%"></i></div>';
    h += '<div class="linha" style="margin-bottom:10px">' +
      '<span class="rotulo">' + esc(e.rotulo) + '</span>' +
      '<span class="rotulo cinza">' + (jogo.i + 1) + ' de ' + jogo.ex.length + '</span>' +
      '<span style="flex:1"></span><button id="btSair" style="min-height:30px;padding:3px 9px">Sair</button></div>';

    if (e.tipo === 'memoria') {
      h += '<p class="pequeno fraco">Toque em duas cartas para parear a afirmação com a razão dela.</p>';
      h += '<div class="memoria" id="mem"></div>';
    } else {
      if (e.contexto) {
        h += '<p class="pequeno fraco" style="border-left:3px solid var(--borda);padding-left:9px">' +
          esc(corta(e.contexto, 260)) + '</p>';
      }
      h += '<div class="exerc">' + esc(e.pergunta) + '</div>';
      h += '<div class="opcoes' + (e.tipo === 'vf' || e.tipo === 'lacuna' ? ' duplas' : '') + '" id="ops"></div>';
    }
    h += '<div id="fb"></div></div>';
    raiz.innerHTML = h;
    document.getElementById('btSair').onclick = function () {
      if (confirm('Sair da fase? O progresso desta fase é perdido.')) telaTrilha();
    };

    if (e.tipo === 'memoria') { montarMemoria(e); return; }

    var ops = document.getElementById('ops');
    e.opcoes.forEach(function (o) {
      var b = document.createElement('button');
      b.textContent = o.t;
      b.onclick = function () { responder(e, o, ops); };
      ops.appendChild(b);
    });
  }

  function responder(e, escolhida, ops) {
    ops.querySelectorAll('button').forEach(function (b) {
      b.disabled = true;
      var txt = b.textContent;
      var o = e.opcoes.filter(function (x) { return x.t === txt; })[0];
      if (o && o.ok) b.classList.add('certa');
      else if (txt === escolhida.t) b.classList.add('errada');
    });

    var acertou = !!escolhida.ok;
    if (acertou) { jogo.acertos++; jogo.xp += XP_ACERTO; }
    else { jogo.vidas--; }

    var fb = document.getElementById('fb');
    fb.innerHTML = '<div class="feedback ' + (acertou ? 'ok' : 'nao') + '">' +
      '<b>' + (acertou ? 'Acertou · +' + XP_ACERTO + ' XP' : 'Errou · perdeu uma vida') + '</b>' +
      esc(escolhida.why || '') +
      (e.comentario ? '<div style="margin-top:6px" class="pequeno">' + esc(e.comentario) + '</div>' : '') +
      '</div><div class="linha" style="margin-top:12px"><span style="flex:1"></span>' +
      '<button class="primario" id="btSeguir">Continuar</button></div>';
    document.getElementById('btSeguir').onclick = function () {
      if (jogo.vidas <= 0) { return telaFim(false); }
      jogo.i++; telaExercicio(); window.scrollTo(0, 0);
    };
  }

  function montarMemoria(e) {
    var alvo = document.getElementById('mem');
    var virada = null, pares = 0, travado = false;
    e.cartas.forEach(function (c, i) {
      var b = document.createElement('button');
      b.dataset.par = c.par;
      b.dataset.i = i;
      b.textContent = '?';
      b.onclick = function () {
        if (travado || b.classList.contains('par') || b.classList.contains('virada')) return;
        b.textContent = c.txt;
        b.classList.add('virada');
        if (!virada) { virada = b; return; }
        if (virada.dataset.par === b.dataset.par) {
          virada.classList.remove('virada'); b.classList.remove('virada');
          virada.classList.add('par'); b.classList.add('par');
          virada = null; pares++;
          jogo.xp += XP_ACERTO;
          if (pares === e.cartas.length / 2) {
            jogo.acertos++;
            document.getElementById('fb').innerHTML =
              '<div class="feedback ok"><b>Todos os pares fechados · +' +
              (XP_ACERTO * pares) + ' XP</b>Você ligou cada afirmação à razão dela.</div>' +
              '<div class="linha" style="margin-top:12px"><span style="flex:1"></span>' +
              '<button class="primario" id="btSeguir">Continuar</button></div>';
            document.getElementById('btSeguir').onclick = function () {
              jogo.i++; telaExercicio(); window.scrollTo(0, 0);
            };
          }
        } else {
          travado = true;
          var a = virada; virada = null;
          setTimeout(function () {
            a.textContent = '?'; b.textContent = '?';
            a.classList.remove('virada'); b.classList.remove('virada');
            travado = false;
          }, 900);
        }
      };
      alvo.appendChild(b);
    });
  }

  function telaFim(completou) {
    var t = dados();
    var ganho = jogo.xp + (completou ? XP_FASE : 0);
    if (completou) {
      t.fases[jogo.tema + ':' + jogo.idx] = { xp: ganho, em: Date.now() };
    }
    t.xp += ganho;
    salvar(t);
    if (completou) registrarOfensiva();

    var h = hud();
    h += '<div class="cartao" style="text-align:center">' +
      '<h2 style="margin-top:0">' + (completou ? 'Fase concluída' : 'Você ficou sem vidas') + '</h2>' +
      '<p class="fraco">' + jogo.acertos + ' acerto(s) · <b>+' + ganho + ' XP</b>' +
      (completou ? ' (inclui ' + XP_FASE + ' de bônus de fase)' : '') + '</p>';
    if (jogo.mnemo) {
      h += '<div class="mnemo" style="text-align:left"><span class="tit">Fecha com o mnemônico</span>' +
        jogo.mnemo.replace(/<span class="tit">[^<]*<\/span>/, '') + '</div>';
    }
    h += '<div class="linha"><button id="btTrilha" style="flex:1">← Trilha</button>' +
      (completou && jogo.idx + 1 < totalFases(jogo.tema)
        ? '<button class="primario" id="btProxima" style="flex:1">Próxima fase</button>'
        : '<button class="primario" id="btRefazer" style="flex:1">Refazer</button>') +
      '</div></div>';
    raiz.innerHTML = h;
    document.getElementById('btTrilha').onclick = telaTrilha;
    var bp = document.getElementById('btProxima');
    if (bp) { bp.onclick = function () { iniciarFase(jogo.tema, jogo.idx + 1); }; }
    var br = document.getElementById('btRefazer');
    if (br) { br.onclick = function () { iniciarFase(jogo.tema, jogo.idx); }; }
  }

  Promise.all([Store.init(), BancoLoader.carregar('../banco/')]).then(function (r) {
    BANCO = r[1] || [];
    telaTrilha();
  });
})();
