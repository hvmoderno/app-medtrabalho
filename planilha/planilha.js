/* =============================================================================
   PLANILHA.JS — log de erros em formato de planilha editável
   -----------------------------------------------------------------------------
   • Listas suspensas: tema (taxonomia do edital), fonte, motivo, revisei
   • "Fórmulas" que recalculam sozinhas: resumo por tema e por motivo, com
     destaque para onde há mais erros PENDENTES
   • Exportação para .xlsx de verdade (core/xlsx.js, sem biblioteca externa)
     com duas abas: os lançamentos e o resumo por tema
   • Gravação imediata a cada edição, nas duas camadas do Store
   ========================================================================== */
(function () {
  'use strict';

  var FONTES = ['Questões do app', 'Simulado', 'Flashcards', 'Treino',
    'Prova anterior', 'Livro / diretriz', 'Aula', 'Outro'];
  var MOTIVOS = ['Não sabia o conteúdo', 'Sabia, mas errei o raciocínio',
    'Caí na pegadinha', 'Interpretei mal o enunciado', 'Desatenção',
    'Chutei', 'Conteúdo desatualizado na minha cabeça', 'Falta de tempo'];

  var corpo = document.getElementById('corpo');
  var filtro = 'todos';

  function dados() {
    var p = Store.get('planilha') || {};
    if (!p.linhas) p.linhas = [];
    return p;
  }
  function salvar(p) { Store.set('planilha', p); }

  /* Linhas que o usuário enxerga: as lápides de remoção continuam no array
   * para viajar até os outros aparelhos, mas nunca aparecem nem contam. */
  function vivas(p) {
    return (p || dados()).linhas.filter(function (l) { return !l.removido; });
  }

  function hojeISO() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
      '-' + String(d.getDate()).padStart(2, '0');
  }

  function novaLinha() {
    var p = dados();
    p.linhas.push({
      id: 'l' + Date.now() + Math.random().toString(36).slice(2, 6),
      data: hojeISO(), tema: '', fonte: 'Questões do app', descricao: '',
      motivo: '', revisei: 'Não', dataRevisao: '', em: Date.now()
    });
    salvar(p);
    render();
    // foca a descrição da linha recém-criada
    var ts = corpo.querySelectorAll('textarea');
    if (ts.length) { ts[ts.length - 1].focus(); }
  }

  function editar(id, campo, valor) {
    var p = dados();
    var l = p.linhas.filter(function (x) { return x.id === id; })[0];
    if (!l) return;
    l[campo] = valor;
    l.em = Date.now();
    if (campo === 'motivo') { delete l.auto; }
    if (campo === 'revisei') {
      if (valor === 'Sim' && !l.dataRevisao) { l.dataRevisao = hojeISO(); }
      if (valor === 'Não') { l.dataRevisao = ''; }
    }
    salvar(p);                 // gravação imediata, sem debounce
    recalcular();
    var tr = document.querySelector('tr[data-id="' + id + '"]');
    if (tr) {
      tr.className = l.revisei === 'Sim' ? 'revisado' : (l.tema ? 'pendente' : '');
      if (campo === 'revisei') {
        var inp = tr.querySelector('[data-campo="dataRevisao"]');
        if (inp) inp.value = l.dataRevisao;
      }
      if (campo === 'motivo') {   // confirmado pelo usuário: a marca sai na hora
        var marca = tr.querySelector('.marcaPalpite');
        if (marca) marca.remove();
        var sel = tr.querySelector('[data-campo="motivo"]');
        if (sel) sel.classList.remove('palpite');
      }
    }
  }

  /* Remover marca uma lápide em vez de tirar a linha do array.
   * Some da tela e das contas na hora; o registro de QUE foi removida viaja
   * na próxima sincronização e apaga a linha nos outros aparelhos também.
   * Sem isso, a linha voltava sozinha no dia seguinte. */
  function remover(id) {
    if (!confirm('Apagar esta linha do log?')) return;
    var p = dados();
    var l = p.linhas.filter(function (x) { return x.id === id; })[0];
    if (!l) return;
    l.removido = Date.now();
    l.em = l.removido;
    salvar(p);
    render();
  }

  /* ------------------------------------------------------------- montagem -- */
  function selectTemas(valor) {
    var s = document.createElement('select');
    s.dataset.campo = 'tema';
    var vazio = document.createElement('option');
    vazio.value = ''; vazio.textContent = '— escolha —';
    s.appendChild(vazio);
    EDITAL.secoes.forEach(function (sec) {
      var g = document.createElement('optgroup');
      g.label = sec.id + '. ' + sec.nome;
      EDITAL.daSecao(sec.id).forEach(function (t) {
        var o = document.createElement('option');
        o.value = t.id;
        o.textContent = t.id + ' ' + t.nome;
        g.appendChild(o);
      });
      s.appendChild(g);
    });
    s.value = valor || '';
    return s;
  }

  function selectSimples(campo, lista, valor, comVazio) {
    var s = document.createElement('select');
    s.dataset.campo = campo;
    if (comVazio) {
      var v = document.createElement('option');
      v.value = ''; v.textContent = '— escolha —';
      s.appendChild(v);
    }
    lista.forEach(function (x) {
      var o = document.createElement('option');
      o.value = x; o.textContent = x;
      s.appendChild(o);
    });
    s.value = valor || '';
    return s;
  }

  function render() {
    var p = dados();
    corpo.innerHTML = '';
    var visiveis = vivas(p).filter(function (l) {
      if (filtro === 'pendentes') return l.revisei !== 'Sim';
      if (filtro === 'revisadas') return l.revisei === 'Sim';
      return true;
    });

    if (!visiveis.length) {
      var tr0 = document.createElement('tr');
      tr0.innerHTML = '<td colspan="9" style="padding:26px;text-align:center;color:var(--texto-fraco)">' +
        (vivas(p).length ? 'Nenhuma linha neste filtro.' :
          'Log vazio. Toque em "+ Nova linha" e registre o primeiro erro.') + '</td>';
      corpo.appendChild(tr0);
      recalcular();
      return;
    }

    visiveis.forEach(function (l, i) {
      var tr = document.createElement('tr');
      tr.dataset.id = l.id;
      tr.className = l.revisei === 'Sim' ? 'revisado' : (l.tema ? 'pendente' : '');

      var tdN = document.createElement('td');
      tdN.className = 'num';
      tdN.textContent = i + 1;
      if (l.reincidencias > 1) {
        var rc = document.createElement('span');
        rc.className = 'reincid';
        rc.textContent = l.reincidencias + 'x';
        rc.title = 'Você errou esta questão ' + l.reincidencias + ' vezes.';
        tdN.appendChild(rc);
      }
      tr.appendChild(tdN);

      function cel(el) { var td = document.createElement('td'); td.appendChild(el); tr.appendChild(td); return td; }

      var data = document.createElement('input');
      data.type = 'date'; data.dataset.campo = 'data'; data.value = l.data || '';
      cel(data);

      cel(selectTemas(l.tema));
      cel(selectSimples('fonte', FONTES, l.fonte, false));

      var desc = document.createElement('textarea');
      desc.dataset.campo = 'descricao'; desc.rows = 1;
      desc.value = l.descricao || '';
      desc.placeholder = 'o que a questão cobrava e onde eu errei';
      var tdD = cel(desc); tdD.style.minWidth = '260px';

      // Motivo vindo de palpite fica sinalizado até o usuário confirmar: um
      // palpite silencioso distorceria o resumo "por motivo", que é o que
      // orienta o que estudar em seguida.
      var tdM = cel(selectSimples('motivo', MOTIVOS, l.motivo, true));
      if (l.auto) {
        tdM.querySelector('select').classList.add('palpite');
        var dica = document.createElement('span');
        dica.className = 'marcaPalpite';
        dica.textContent = 'palpite';
        dica.title = 'Motivo sugerido pelo app. Confirme ou troque — ao mexer, a marca sai.';
        tdM.appendChild(dica);
      }
      cel(selectSimples('revisei', ['Não', 'Sim'], l.revisei || 'Não', false));

      var dr = document.createElement('input');
      dr.type = 'date'; dr.dataset.campo = 'dataRevisao'; dr.value = l.dataRevisao || '';
      cel(dr);

      var tdA = document.createElement('td');
      tdA.className = 'acao';
      var bx = document.createElement('button');
      bx.textContent = '×'; bx.title = 'Apagar linha';
      bx.onclick = function () { remover(l.id); };
      tdA.appendChild(bx);
      tr.appendChild(tdA);

      tr.querySelectorAll('[data-campo]').forEach(function (el) {
        var ev = (el.tagName === 'SELECT' || el.type === 'date') ? 'change' : 'input';
        el.addEventListener(ev, function () { editar(l.id, el.dataset.campo, el.value); });
        if (ev === 'input') { el.addEventListener('blur', function () { editar(l.id, el.dataset.campo, el.value); }); }
      });

      corpo.appendChild(tr);
    });
    recalcular();
  }

  /* ------------------------------------------------------------ "fórmulas" */
  function recalcular() {
    var p = dados();
    var linhas = vivas(p);
    var total = linhas.length;
    var pend = linhas.filter(function (l) { return l.revisei !== 'Sim'; }).length;

    var cont = document.getElementById('contadores');
    cont.innerHTML = '';
    [['lançamentos', total], ['pendentes de revisão', pend],
     ['revisados', total - pend],
     ['temas atingidos', new Set(linhas.map(function (l) { return l.tema; })
       .filter(Boolean)).size]
    ].forEach(function (x) {
      var s = document.createElement('span');
      s.className = 'rotulo cinza';
      s.style.marginRight = '4px';
      s.innerHTML = x[0] + ': <b>' + x[1] + '</b>';
      cont.appendChild(s);
    });

    // resumo por tema
    var porTema = {};
    linhas.forEach(function (l) {
      if (!l.tema) return;
      var t = porTema[l.tema] = porTema[l.tema] || { n: 0, p: 0 };
      t.n++;
      if (l.revisei !== 'Sim') t.p++;
    });
    var chaves = Object.keys(porTema).sort(function (a, b) {
      var d = porTema[b].p - porTema[a].p;
      return d !== 0 ? d : porTema[b].n - porTema[a].n;
    });
    var maxP = chaves.length ? porTema[chaves[0]].p : 0;
    var alvo = document.getElementById('resumoTema');
    alvo.innerHTML = chaves.length ? '' :
      '<tr><td colspan="6" class="fraco" style="padding:14px">sem lançamentos com tema ainda</td></tr>';
    chaves.forEach(function (k) {
      var t = porTema[k];
      var pc = Math.round(t.p / t.n * 100);
      var tr = document.createElement('tr');
      tr.innerHTML = '<td><b>' + k + '</b></td><td>' + EDITAL.nome(k) + '</td>' +
        '<td class="n">' + t.n + '</td>' +
        '<td class="n"><span class="rotulo ' + (t.p ? 'erro' : 'ok') + '">' + t.p + '</span></td>' +
        '<td class="n">' + pc + '%</td>' +
        '<td><span class="resumo-bar"><i style="width:' +
        (maxP ? t.p / maxP * 100 : 0) + '%"></i></span></td>';
      alvo.appendChild(tr);
    });

    // resumo por motivo
    var porMotivo = {};
    linhas.forEach(function (l) {
      var k = l.motivo || '(sem motivo)';
      var m = porMotivo[k] = porMotivo[k] || { n: 0, p: 0 };
      m.n++;
      if (l.revisei !== 'Sim') m.p++;
    });
    var alvoM = document.getElementById('resumoMotivo');
    var ks = Object.keys(porMotivo).sort(function (a, b) { return porMotivo[b].n - porMotivo[a].n; });
    alvoM.innerHTML = ks.length ? '' :
      '<tr><td colspan="4" class="fraco" style="padding:14px">sem lançamentos ainda</td></tr>';
    ks.forEach(function (k) {
      var m = porMotivo[k];
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + k + '</td><td class="n">' + m.n + '</td>' +
        '<td class="n">' + m.p + '</td>' +
        '<td class="n">' + Math.round(m.n / total * 100) + '%</td>';
      alvoM.appendChild(tr);
    });
  }

  /* ----------------------------------------------------------- exportação -- */
  function matrizLancamentos() {
    var p = dados();
    var m = [['Data', 'Código do tema', 'Tema do edital', 'Seção', 'Fonte',
      'Descrição do erro', 'Motivo', 'Revisei?', 'Data da revisão']];
    vivas(p).forEach(function (l) {
      var t = EDITAL.tema(l.tema);
      m.push([l.data || '', l.tema || '', t ? t.nome : '', t ? String(t.sec) : '',
        l.fonte || '', l.descricao || '', l.motivo || '', l.revisei || 'Não', l.dataRevisao || '']);
    });
    return m;
  }

  function matrizResumo() {
    var p = dados();
    var porTema = {};
    vivas(p).forEach(function (l) {
      if (!l.tema) return;
      var t = porTema[l.tema] = porTema[l.tema] || { n: 0, p: 0 };
      t.n++; if (l.revisei !== 'Sim') t.p++;
    });
    var m = [['Código', 'Tema do edital', 'Seção', 'Erros', 'Pendentes', '% pendente']];
    Object.keys(porTema).sort(function (a, b) { return porTema[b].p - porTema[a].p; })
      .forEach(function (k) {
        var t = EDITAL.tema(k), x = porTema[k];
        m.push([k, t ? t.nome : '', t ? t.sec : '', x.n, x.p, Math.round(x.p / x.n * 100)]);
      });
    return m;
  }

  function nomeArquivo(ext) {
    var d = new Date(), z = function (n) { return String(n).padStart(2, '0'); };
    return 'log-de-erros-medtrabalho-' + d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate()) + ext;
  }

  document.getElementById('btXlsx').onclick = function () {
    var p = dados();
    if (!vivas(p).length) { Store.avisar('aviso', 'O log está vazio — nada a exportar.'); return; }
    try {
      XLSX.gerar([
        { nome: 'Log de erros', larguras: [11, 9, 34, 7, 17, 60, 27, 9, 13], linhas: matrizLancamentos() },
        { nome: 'Resumo por tema', larguras: [9, 40, 7, 8, 10, 11], linhas: matrizResumo() }
      ], nomeArquivo('.xlsx'));
      Store.avisar('info', 'Planilha .xlsx exportada com ' + vivas(p).length + ' lançamento(s).');
    } catch (e) {
      Store.avisar('erro', 'Falha ao gerar o arquivo .xlsx.', e.message);
    }
  };

  document.getElementById('btCsv').onclick = function () {
    var m = matrizLancamentos();
    var csv = m.map(function (linha) {
      return linha.map(function (c) {
        var s = String(c == null ? '' : c);
        return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(';');
    }).join('\r\n');
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = nomeArquivo('.csv');
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  };

  document.getElementById('btNova').onclick = novaLinha;
  document.getElementById('fFiltro').onchange = function () {
    filtro = this.value; render();
  };

  Store.init().then(render);
})();
