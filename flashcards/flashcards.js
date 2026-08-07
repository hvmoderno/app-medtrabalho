/* =============================================================================
   FLASHCARDS.JS — memorização ativa com repetição espaçada (SM-2)
   -----------------------------------------------------------------------------
   Ciclo: pergunta → penso → revelo → me autoavalio (Errei / Quase / Sabia).
   O que eu erro volta mais vezes: o SM-2 zera a repetição e reduz a facilidade,
   então o cartão reaparece no mesmo dia e com intervalos curtos até engatar.

   Os cartões são DERIVADOS do banco de questões (frente = a situação; verso =
   a conduta correta + o comentário + a pegadinha). Assim o baralho cresce
   junto com o banco, sem conteúdo duplicado para manter.
   ========================================================================== */
(function () {
  'use strict';

  var BANCO = [];
  var elTema = document.getElementById('fTema');
  var elPlacar = document.getElementById('placar');
  var elArea = document.getElementById('area');
  var estado = { tema: 'todos', carta: null, revelado: false, ultimoId: null };

  var UMDIA = 86400000;
  function hoje0() { var d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }

  /* --------------------------------------------------------------- estado -- */
  function dados() {
    var f = Store.get('flashcards') || {};
    if (!f.cartoes) f.cartoes = {};      // id -> { ef, rep, intervalo, prox, ultimo, erros, acertos }
    if (!f.sessao) f.sessao = {};        // estatística do dia
    return f;
  }

  function estadoCarta(id) {
    var f = dados();
    return f.cartoes[id] || { ef: 2.5, rep: 0, intervalo: 0, prox: 0, erros: 0, acertos: 0 };
  }

  /* ------------------------------------------------------------------ SM-2 -- */
  // nota: 0 = Errei, 3 = Quase, 5 = Sabia
  function agendar(id, nota) {
    var f = dados();
    var c = f.cartoes[id] || { ef: 2.5, rep: 0, intervalo: 0, prox: 0, erros: 0, acertos: 0 };

    if (nota < 3) {
      // Errou: recomeça a sequência e volta ainda HOJE.
      c.rep = 0;
      c.intervalo = 0;
      c.prox = Date.now();               // reentra na fila da própria sessão
      c.erros = (c.erros || 0) + 1;
    } else {
      c.rep = (c.rep || 0) + 1;
      if (c.rep === 1) { c.intervalo = 1; }
      else if (c.rep === 2) { c.intervalo = 6; }
      else { c.intervalo = Math.round((c.intervalo || 1) * c.ef); }
      c.prox = hoje0() + c.intervalo * UMDIA;
      c.acertos = (c.acertos || 0) + 1;
    }

    // fator de facilidade do SM-2
    c.ef = (c.ef || 2.5) + (0.1 - (5 - nota) * (0.08 + (5 - nota) * 0.02));
    if (c.ef < 1.3) c.ef = 1.3;
    c.ultimo = Date.now();
    c.ultimaNota = nota;

    f.cartoes[id] = c;

    var dia = new Date().toISOString().slice(0, 10);
    if (f.sessao.dia !== dia) { f.sessao = { dia: dia, vistos: 0, errei: 0, quase: 0, sabia: 0 }; }
    f.sessao.vistos++;
    f.sessao[nota < 3 ? 'errei' : nota < 5 ? 'quase' : 'sabia']++;

    Store.set('flashcards', f);
  }

  /* --------------------------------------------------------------- baralho -- */
  function cartasDo(tema) {
    return BANCO.filter(function (q) {
      if (tema === 'todos') return true;
      if (tema.indexOf('sec:') === 0) {
        var t = EDITAL.tema(q.tema);
        return t && String(t.sec) === tema.slice(4);
      }
      return q.tema === tema;
    });
  }

  function fila() {
    var agora = Date.now();
    var pool = cartasDo(estado.tema);
    var novos = [], devidos = [];
    pool.forEach(function (q) {
      var c = estadoCarta(q.id);
      if (!c.ultimo) { novos.push(q); }
      else if (c.prox <= agora) { devidos.push(q); }
    });
    // vencidos primeiro (o que eu errei volta antes), depois cartões novos
    devidos.sort(function (a, b) { return estadoCarta(a.id).prox - estadoCarta(b.id).prox; });
    novos.sort(function (a, b) { return GABARITO.hash(a.id) - GABARITO.hash(b.id); });
    var f = devidos.concat(novos.slice(0, 20));

    // O cartão que acabei de errar volta hoje, mas não na hora: empurra algumas
    // posições para trás, para não ficar repetindo o mesmo cartão em sequência.
    if (f.length > 1 && estado.ultimoId && f[0].id === estado.ultimoId) {
      var c0 = f.shift();
      f.splice(Math.min(3, f.length), 0, c0);
    }
    return f;
  }

  /* -------------------------------------------------------------- montagem -- */
  function montarSelect() {
    var cont = {};
    BANCO.forEach(function (q) { cont[q.tema] = (cont[q.tema] || 0) + 1; });
    elTema.innerHTML = '';
    var o = document.createElement('option');
    o.value = 'todos'; o.textContent = 'Todos os temas (' + BANCO.length + ' cartões)';
    elTema.appendChild(o);
    EDITAL.secoes.forEach(function (sec) {
      var g = document.createElement('optgroup');
      var temas = EDITAL.daSecao(sec.id);
      var tot = temas.reduce(function (a, t) { return a + (cont[t.id] || 0); }, 0);
      g.label = sec.id + '. ' + sec.nome + '  [' + tot + ']';
      var os = document.createElement('option');
      os.value = 'sec:' + sec.id;
      os.textContent = '▸ toda a seção ' + sec.id + ' (' + tot + ')';
      g.appendChild(os);
      temas.forEach(function (t) {
        var x = document.createElement('option');
        x.value = t.id;
        x.textContent = t.id + ' ' + t.nome + ' (' + (cont[t.id] || 0) + ')';
        g.appendChild(x);
      });
      elTema.appendChild(g);
    });
  }

  function atualizarPlacar() {
    var f = dados();
    var pool = cartasDo(estado.tema);
    var agora = Date.now();
    var novos = 0, devidos = 0, emDia = 0, dominados = 0;
    pool.forEach(function (q) {
      var c = estadoCarta(q.id);
      if (!c.ultimo) novos++;
      else if (c.prox <= agora) devidos++;
      else { emDia++; if (c.rep >= 3) dominados++; }
    });
    var s = f.sessao && f.sessao.dia === new Date().toISOString().slice(0, 10) ? f.sessao : null;

    elPlacar.innerHTML = '';
    [['para revisar hoje', devidos], ['novos', novos], ['agendados', emDia],
     ['dominados', dominados],
     ['hoje você viu', s ? s.vistos + ' (' + s.errei + ' errei · ' + s.quase + ' quase · ' + s.sabia + ' sabia)' : '0']
    ].forEach(function (p) {
      var el = document.createElement('span');
      el.innerHTML = p[0] + ': <b>' + p[1] + '</b>';
      elPlacar.appendChild(el);
    });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render() {
    atualizarPlacar();
    var f = fila();
    if (!f.length) {
      elArea.innerHTML = '<div class="vazio">Nada vencido neste baralho agora.<br>' +
        '<span class="pequeno">Volte depois — ou troque de tema no seletor acima.</span></div>';
      estado.carta = null;
      return;
    }
    estado.carta = f[0];
    estado.revelado = false;
    desenhar();
  }

  function desenhar() {
    var q = estado.carta;
    var c = estadoCarta(q.id);
    var certa = q.alts.filter(function (a) { return a.ok; })[0] || { t: '', why: '' };

    var h = '<div class="cartao carta">';
    h += '<div class="linha" style="margin-bottom:10px">' +
      '<span class="rotulo">' + q.tema + ' ' + esc(EDITAL.nome(q.tema)) + '</span>' +
      (c.ultimo ? '<span class="rotulo cinza">visto ' + (c.acertos + c.erros) + '× · ' +
        'facilidade ' + c.ef.toFixed(2) + '</span>'
       : '<span class="rotulo alerta">cartão novo</span>') + '</div>';
    h += '<div class="frente">' + esc(q.enunciado) + '</div>';

    if (!estado.revelado) {
      h += '<div class="linha" style="margin-top:18px">' +
        '<button class="primario" id="btRevelar" style="flex:1">Pensei — revelar resposta</button></div>';
    } else {
      h += '<div class="verso">' +
        '<h4>Resposta</h4><div class="resp">' + esc(certa.t) + '</div>';
      if (certa.why) { h += '<div class="bloco"><h4>Por quê</h4>' + esc(certa.why) + '</div>'; }
      if (q.comentario) { h += '<div class="bloco"><h4>Comentário</h4>' + esc(q.comentario) + '</div>'; }
      if (q.pegadinha) { h += '<div class="bloco"><h4>Pegadinha</h4>' + esc(q.pegadinha) + '</div>'; }
      h += '<div class="avaliar">' +
        '<button class="errei" data-nota="0">Errei<small>volta hoje</small></button>' +
        '<button class="quase" data-nota="3">Quase<small>volta em breve</small></button>' +
        '<button class="sabia" data-nota="5">Sabia<small>volta mais tarde</small></button>' +
        '</div></div>';
    }
    h += '</div>';
    elArea.innerHTML = h;

    if (!estado.revelado) {
      document.getElementById('btRevelar').onclick = function () {
        estado.revelado = true; desenhar();
      };
    } else {
      elArea.querySelectorAll('[data-nota]').forEach(function (b) {
        b.onclick = function () {
          estado.ultimoId = estado.carta.id;
          agendar(estado.carta.id, Number(b.dataset.nota));
          render();
          window.scrollTo(0, 0);
        };
      });
    }
  }

  elTema.onchange = function () {
    estado.tema = elTema.value;
    Store.patch('flashcards', function (f) { f = f || {}; f.ultimoTema = estado.tema; return f; });
    render();
  };

  Promise.all([Store.init(), BancoLoader.carregar('../banco/')]).then(function (r) {
    BANCO = r[1] || [];
    montarSelect();
    var f = dados();
    if (f.ultimoTema) {
      estado.tema = f.ultimoTema;
      elTema.value = f.ultimoTema;
      if (elTema.value !== f.ultimoTema) { estado.tema = 'todos'; elTema.value = 'todos'; }
    }
    render();
  });
})();
