/* =============================================================================
   QUESTOES.JS — banco de questões com filtro por tema do edital
   - feedback imediato + comentário em TODAS as questões
   - taxa de acerto por tema e geral
   - "continuar de onde parei" (tema, modo e posição)
   - posição da alternativa correta distribuída de forma homogênea em A–E,
     de modo determinístico e SEM risco de contradizer o comentário: o veredito
     e a explicação viajam dentro do objeto da alternativa.
   ========================================================================== */
(function () {
  'use strict';

  var BANCO = [];
  var elTema = document.getElementById('fTema');
  var elModo = document.getElementById('fModo');
  var elPlacar = document.getElementById('placar');
  var elArea = document.getElementById('area');

  var estado = { tema: 'todos', modo: 'todas', idx: 0, lista: [], embaralhado: null };

  /* --------------------------------------------------------------- utils --- */
  var hash = GABARITO.hash;

  // Posição da alternativa correta: uniforme por construção (core/gabarito.js).
  // Veredito e explicação viajam dentro da alternativa, então reposicionar nunca
  // pode contradizer o comentário.
  function ordenar(q) { return GABARITO.ordenar(q, BANCO); }

  function prog() {
    var p = Store.get('questoes') || {};
    if (!p.respostas) p.respostas = {};
    return p;
  }
  function salvar(p) { Store.set('questoes', p); }

  /* ------------------------------------------------------------- filtros --- */
  function montarSelectTemas() {
    var contagem = {};
    BANCO.forEach(function (q) { contagem[q.tema] = (contagem[q.tema] || 0) + 1; });
    var desemp = DESEMPENHO.porTema();

    elTema.innerHTML = '';
    var optAll = document.createElement('option');
    optAll.value = 'todos';
    optAll.textContent = 'Todos os temas (' + BANCO.length + ')';
    elTema.appendChild(optAll);

    EDITAL.secoes.forEach(function (sec) {
      var grupo = document.createElement('optgroup');
      var temasSec = EDITAL.daSecao(sec.id);
      var totalSec = temasSec.reduce(function (a, t) { return a + (contagem[t.id] || 0); }, 0);
      grupo.label = sec.id + '. ' + sec.nome + '  [' + totalSec + ']';

      var optSec = document.createElement('option');
      optSec.value = 'sec:' + sec.id;
      optSec.textContent = '▸ toda a seção ' + sec.id + ' (' + totalSec + ')';
      grupo.appendChild(optSec);

      temasSec.forEach(function (t) {
        var n = contagem[t.id] || 0;
        var o = document.createElement('option');
        o.value = t.id;
        o.textContent = t.id + ' ' + t.nome + ' (' + n + ')';
        if (n === 0) {
          o.textContent += ' — sem questões';
        } else {
          // Taxa de acerto no próprio rótulo: em <select> o Safari/iOS ignora
          // cor, então a informação tem de vir como texto.
          var d = desemp[t.id];
          if (d && d.total) {
            o.textContent += d.suficiente
              ? ' · ' + d.pct + '%'
              : ' · ' + d.total + 'q';
          }
        }
        grupo.appendChild(o);
      });
      elTema.appendChild(grupo);
    });
  }

  function filtrar() {
    var p = prog();
    var lista = BANCO.filter(function (q) {
      if (estado.tema === 'todos') return true;
      if (estado.tema.indexOf('sec:') === 0) {
        var t = EDITAL.tema(q.tema);
        return t && String(t.sec) === estado.tema.slice(4);
      }
      return q.tema === estado.tema;
    });
    if (estado.modo === 'naoRespondidas') {
      lista = lista.filter(function (q) { return !p.respostas[q.id]; });
    } else if (estado.modo === 'erradas') {
      lista = lista.filter(function (q) { return p.respostas[q.id] && !p.respostas[q.id].ok; });
    }
    if (estado.embaralhado) {
      var ordem = estado.embaralhado;
      lista.sort(function (a, b) {
        return hash(a.id + ordem) - hash(b.id + ordem);
      });
    }
    return lista;
  }

  /* -------------------------------------------------------------- placar --- */
  function atualizarPlacar() {
    var p = prog();
    var alvo = estado.tema === 'todos' ? BANCO : BANCO.filter(function (q) {
      if (estado.tema.indexOf('sec:') === 0) {
        var t = EDITAL.tema(q.tema);
        return t && String(t.sec) === estado.tema.slice(4);
      }
      return q.tema === estado.tema;
    });
    var resp = 0, certas = 0;
    alvo.forEach(function (q) {
      var r = p.respostas[q.id];
      if (r) { resp++; if (r.ok) certas++; }
    });
    var taxa = resp ? Math.round(certas / resp * 100) : 0;
    var totGeral = Object.keys(p.respostas).length;
    var certGeral = 0;
    Object.keys(p.respostas).forEach(function (k) { if (p.respostas[k].ok) certGeral++; });

    elPlacar.innerHTML = '';
    [
      ['neste filtro', resp + '/' + alvo.length + ' respondidas'],
      ['acerto aqui', resp ? taxa + '%' : '—'],
      ['acerto geral', totGeral ? Math.round(certGeral / totGeral * 100) + '% (' + totGeral + ')' : '—']
    ].forEach(function (par) {
      var s = document.createElement('span');
      s.innerHTML = par[0] + ': <b>' + par[1] + '</b>';
      elPlacar.appendChild(s);
    });

    atualizarFracos();
  }

  /* Painel dos temas mais frágeis: leva direto ao treino do ponto fraco.
   * Só considera temas com amostra suficiente — apontar "0%" por causa de uma
   * única questão errada mandaria você estudar o tema errado. */
  function atualizarFracos() {
    var caixa = document.getElementById('cartaoFracos');
    var lista = document.getElementById('listaFracos');
    if (!caixa || !lista) return;

    var d = DESEMPENHO.porTema();
    var fracos = Object.keys(d)
      .filter(function (t) { return d[t].suficiente && d[t].pct < 80 && EDITAL.valido(t); })
      .sort(function (a, b) { return d[a].pct - d[b].pct; })
      .slice(0, 6);

    if (!fracos.length) { caixa.hidden = true; return; }
    caixa.hidden = false;
    lista.innerHTML = '';
    fracos.forEach(function (t) {
      var b = document.createElement('button');
      b.className = 'selo-desemp ' + DESEMPENHO.faixa(d[t]);
      b.style.cursor = 'pointer';
      b.style.minWidth = 'auto';
      b.textContent = t + ' · ' + d[t].pct + '%';
      b.title = EDITAL.nome(t) + ' — ' + DESEMPENHO.rotulo(d[t]);
      b.onclick = function () {
        elTema.value = t;
        estado.tema = t;
        estado.idx = 0;
        salvarFiltro();
        render();
      };
      lista.appendChild(b);
    });
  }

  /* ------------------------------------------------------------- render --- */
  function render() {
    estado.lista = filtrar();
    atualizarPlacar();
    elArea.innerHTML = '';

    if (!estado.lista.length) {
      var v = document.createElement('div');
      v.className = 'vazio';
      v.textContent = estado.modo === 'erradas'
        ? 'Nenhuma questão errada neste filtro — ou você ainda não respondeu nada aqui.'
        : estado.modo === 'naoRespondidas'
        ? 'Você já respondeu todas as questões deste filtro.'
        : 'Ainda não há questões cadastradas para este tema. O volume entra na Fase 4.';
      elArea.appendChild(v);
      return;
    }
    if (estado.idx >= estado.lista.length) { estado.idx = 0; }
    desenharQuestao(estado.lista[estado.idx]);
  }

  function desenharQuestao(q) {
    var p = prog();
    var jaResp = p.respostas[q.id] || null;
    var alts = ordenar(q);

    var card = document.createElement('div');
    card.className = 'cartao';

    // ---- cabeçalho
    var cab = document.createElement('div');
    cab.className = 'cabQ';
    var rTema = document.createElement('span');
    rTema.className = 'rotulo';
    rTema.textContent = q.tema + ' · ' + EDITAL.nome(q.tema);
    cab.appendChild(rTema);

    var rTipo = document.createElement('span');
    rTipo.className = 'rotulo ' + (q.tipo === 'real' ? 'ok' : 'cinza');
    rTipo.textContent = q.tipo === 'real' ? 'QUESTÃO REAL' : 'AUTORAL';
    rTipo.title = q.tipo === 'real'
      ? 'Transcrita de prova real. Fonte: ' + (q.fonte || 'não informada')
      : 'Escrita no estilo da banca — não é questão de prova anterior.';
    cab.appendChild(rTipo);

    var rNivel = document.createElement('span');
    rNivel.className = 'rotulo cinza';
    rNivel.textContent = q.nivel;
    cab.appendChild(rNivel);
    card.appendChild(cab);

    // ---- enunciado
    var en = document.createElement('div');
    en.className = 'enunciado';
    en.textContent = q.enunciado;
    card.appendChild(en);

    // ---- alternativas
    var ul = document.createElement('ul');
    ul.className = 'alts';
    var travado = !!jaResp;

    alts.forEach(function (a, i) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.className = 'alt';
      b.type = 'button';

      var letra = document.createElement('span');
      letra.className = 'letra';
      letra.textContent = 'ABCDE'[i];
      var txt = document.createElement('span');
      txt.className = 'txt';
      txt.textContent = a.t;
      b.appendChild(letra);
      b.appendChild(txt);

      b.onclick = function () {
        if (b.disabled) return;
        registrar(q, a.ok);
        revelar(ul, alts, q);
      };
      li.appendChild(b);
      ul.appendChild(li);
    });
    card.appendChild(ul);

    // ---- explicação (área preenchida ao responder ou já revelada)
    var expl = document.createElement('div');
    expl.className = 'explic oculto';
    expl.id = 'explic';
    card.appendChild(expl);

    // ---- navegação
    var nav = document.createElement('div');
    nav.className = 'navq';
    var bAnt = document.createElement('button');
    bAnt.textContent = '← Anterior';
    bAnt.disabled = estado.idx === 0;
    bAnt.onclick = function () { irPara(estado.idx - 1); };
    var pos = document.createElement('span');
    pos.className = 'pos';
    pos.textContent = (estado.idx + 1) + ' de ' + estado.lista.length;
    var esp = document.createElement('span');
    esp.style.flex = '1';
    var bProx = document.createElement('button');
    bProx.className = 'primario';
    bProx.textContent = 'Próxima →';
    bProx.disabled = estado.idx >= estado.lista.length - 1;
    bProx.onclick = function () { irPara(estado.idx + 1); };
    nav.appendChild(bAnt); nav.appendChild(pos); nav.appendChild(esp); nav.appendChild(bProx);
    card.appendChild(nav);

    elArea.appendChild(card);

    if (travado) { revelar(ul, alts, q, jaResp); }
  }

  function revelar(ul, alts, q, respAnterior) {
    var botoes = ul.querySelectorAll('button.alt');
    alts.forEach(function (a, i) {
      var b = botoes[i];
      b.disabled = true;
      b.classList.add(a.ok ? 'certa' : 'errada');
      if (!b.querySelector('.why')) {
        var w = document.createElement('span');
        w.className = 'why';
        w.textContent = a.why;
        b.querySelector('.txt').appendChild(w);
      }
    });

    var expl = document.getElementById('explic');
    if (!expl) return;
    expl.className = 'explic';
    expl.innerHTML = '';

    var p = prog();
    var r = respAnterior || p.respostas[q.id];
    var veredito = document.createElement('div');
    veredito.className = 'faixa ' + (r && r.ok ? 'info' : 'erro');
    veredito.style.marginBottom = '12px';
    veredito.textContent = r && r.ok ? 'Você acertou.' : 'Você errou.';
    expl.appendChild(veredito);

    [['Comentário', q.comentario], ['Pegadinha', q.pegadinha]].forEach(function (par) {
      if (!par[1]) return;
      var bloco = document.createElement('div');
      bloco.className = 'bloco';
      var h = document.createElement('h4');
      h.textContent = par[0];
      var pTxt = document.createElement('div');
      pTxt.textContent = par[1];
      bloco.appendChild(h); bloco.appendChild(pTxt);
      expl.appendChild(bloco);
    });

    if (q.refs && q.refs.length) {
      var refs = document.createElement('div');
      refs.className = 'refs';
      refs.textContent = 'Referências conceituais: ' + q.refs.join(' · ');
      expl.appendChild(refs);
    }
    if (q.tipo === 'autoral') {
      var nota = document.createElement('div');
      nota.className = 'refs';
      nota.style.marginTop = '6px';
      nota.textContent = 'Questão autoral, escrita no estilo da banca — não é transcrição de prova anterior.';
      expl.appendChild(nota);
    }
    atualizarPlacar();
  }

  function registrar(q, acertou) {
    var p = prog();
    if (!p.respostas[q.id]) {
      p.respostas[q.id] = { ok: acertou, ts: Date.now(), tema: q.tema };
    } else {
      p.respostas[q.id].ok = acertou;
      p.respostas[q.id].ts = Date.now();
      p.respostas[q.id].revisoes = (p.respostas[q.id].revisoes || 0) + 1;
    }
    p.ultimo = { tema: estado.tema, modo: estado.modo, idx: estado.idx, id: q.id };
    salvar(p);   // gravação imediata em localStorage + IndexedDB
  }

  function irPara(i) {
    estado.idx = Math.max(0, Math.min(i, estado.lista.length - 1));
    var p = prog();
    p.ultimo = { tema: estado.tema, modo: estado.modo, idx: estado.idx };
    salvar(p);
    render();
    window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------------- init --- */
  elTema.onchange = function () { estado.tema = elTema.value; estado.idx = 0; salvarFiltro(); render(); };
  elModo.onchange = function () { estado.modo = elModo.value; estado.idx = 0; salvarFiltro(); render(); };
  document.getElementById('btEmbaralhar').onclick = function () {
    estado.embaralhado = String(Date.now());
    estado.idx = 0;
    render();
  };
  function salvarFiltro() {
    var p = prog();
    p.ultimo = { tema: estado.tema, modo: estado.modo, idx: estado.idx };
    salvar(p);
  }

  Promise.all([Store.init(), BancoLoader.carregar('../banco/')]).then(function (r) {
    BANCO = r[1] || [];
    montarSelectTemas();
    var p = prog();
    if (p.ultimo) {
      if (p.ultimo.tema) { estado.tema = p.ultimo.tema; elTema.value = p.ultimo.tema; }
      if (elTema.value !== estado.tema) { estado.tema = 'todos'; elTema.value = 'todos'; }
      if (p.ultimo.modo) { estado.modo = p.ultimo.modo; elModo.value = p.ultimo.modo; }
      estado.idx = p.ultimo.idx || 0;
    }
    render();
  });
})();
