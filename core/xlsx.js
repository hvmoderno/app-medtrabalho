/* =============================================================================
   XLSX.JS — gera arquivo .xlsx DE VERDADE, sem nenhuma dependência externa.
   -----------------------------------------------------------------------------
   Um .xlsx é um ZIP com XMLs dentro. Como não pode haver biblioteca em runtime
   (o app funciona offline), aqui está implementado:
     • CRC-32 (exigido pelo formato ZIP)
     • escrita de ZIP com método "stored" (sem compressão) — válido e aceito
       pelo Excel, Numbers, LibreOffice e Google Sheets
     • a planilha mínima do OOXML: workbook, worksheets, styles e sharedStrings

   Suporta várias abas, cabeçalho em negrito, largura de coluna, números e texto.
   ========================================================================== */
(function (root) {
  'use strict';

  /* ------------------------------------------------------------------ CRC32 */
  var TABELA_CRC = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) { c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); }
      t[n] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) {
      c = TABELA_CRC[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  var enc = new TextEncoder();

  /* -------------------------------------------------------------------- ZIP */
  function zipar(arquivos) {
    // arquivos: [{ nome, texto }]
    var partes = [], central = [], deslocamento = 0;

    function u16(v) { return [v & 0xFF, (v >>> 8) & 0xFF]; }
    function u32(v) { return [v & 0xFF, (v >>> 8) & 0xFF, (v >>> 16) & 0xFF, (v >>> 24) & 0xFF]; }

    arquivos.forEach(function (a) {
      var nome = enc.encode(a.nome);
      var dados = enc.encode(a.texto);
      var crc = crc32(dados);

      var local = [].concat(
        u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(dados.length), u32(dados.length),
        u16(nome.length), u16(0)
      );
      partes.push(new Uint8Array(local), nome, dados);

      central.push([].concat(
        u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
        u32(crc), u32(dados.length), u32(dados.length),
        u16(nome.length), u16(0), u16(0), u16(0), u16(0), u32(0),
        u32(deslocamento)
      ), nome);

      deslocamento += local.length + nome.length + dados.length;
    });

    var inicioCentral = deslocamento, tamCentral = 0;
    var blocosCentral = [];
    for (var i = 0; i < central.length; i += 2) {
      var cab = new Uint8Array(central[i]);
      blocosCentral.push(cab, central[i + 1]);
      tamCentral += cab.length + central[i + 1].length;
    }

    var fim = new Uint8Array([].concat(
      u32(0x06054b50), u16(0), u16(0),
      u16(arquivos.length), u16(arquivos.length),
      u32(tamCentral), u32(inicioCentral), u16(0)
    ));

    var todos = partes.concat(blocosCentral, [fim]);
    var total = todos.reduce(function (a, p) { return a + p.length; }, 0);
    var saida = new Uint8Array(total), pos = 0;
    todos.forEach(function (p) { saida.set(p, pos); pos += p.length; });
    return saida;
  }

  /* ------------------------------------------------------------------- XML */
  function esc(s) {
    return String(s == null ? '' : s)
      // caracteres de controle são inválidos em XML e corrompem o arquivo
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function coluna(n) {           // 0 -> A, 26 -> AA
    var s = '';
    n = n + 1;
    while (n > 0) { var r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = ((n - r) / 26) | 0; }
    return s;
  }

  function ehNumero(v) {
    return typeof v === 'number' && isFinite(v);
  }

  /* ------------------------------------------------------------- planilha */
  function gerar(abas, nomeArquivo) {
    // abas: [{ nome, larguras:[..], linhas:[[celula,...], ...] }]
    // a primeira linha de cada aba é tratada como cabeçalho (negrito)

    // tabela de strings compartilhadas
    var strs = [], mapaStr = {};
    function idStr(s) {
      if (mapaStr[s] === undefined) { mapaStr[s] = strs.length; strs.push(s); }
      return mapaStr[s];
    }
    abas.forEach(function (aba) {
      aba.linhas.forEach(function (linha) {
        linha.forEach(function (c) { if (!ehNumero(c)) { idStr(c == null ? '' : String(c)); } });
      });
    });

    var folhas = abas.map(function (aba, iAba) {
      var cols = '';
      if (aba.larguras && aba.larguras.length) {
        cols = '<cols>' + aba.larguras.map(function (w, i) {
          return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>';
        }).join('') + '</cols>';
      }
      var linhas = aba.linhas.map(function (linha, r) {
        var celulas = linha.map(function (v, c) {
          var ref = coluna(c) + (r + 1);
          var estilo = r === 0 ? ' s="1"' : '';
          if (ehNumero(v)) { return '<c r="' + ref + '"' + estilo + '><v>' + v + '</v></c>'; }
          return '<c r="' + ref + '"' + estilo + ' t="s"><v>' + idStr(v == null ? '' : String(v)) + '</v></c>';
        }).join('');
        return '<row r="' + (r + 1) + '">' + celulas + '</row>';
      }).join('');

      var congelar = '<sheetViews><sheetView' + (iAba === 0 ? ' tabSelected="1"' : '') +
        ' workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>' +
        '</sheetView></sheetViews>';

      return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
        congelar + cols + '<sheetData>' + linhas + '</sheetData></worksheet>';
    });

    var sst = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' +
      strs.length + '" uniqueCount="' + strs.length + '">' +
      strs.map(function (s) { return '<si><t xml:space="preserve">' + esc(s) + '</t></si>'; }).join('') +
      '</sst>';

    var workbook = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' +
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>' +
      abas.map(function (a, i) {
        return '<sheet name="' + esc(a.nome) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>';
      }).join('') + '</sheets></workbook>';

    var relsWb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      abas.map(function (a, i) {
        return '<Relationship Id="rId' + (i + 1) + '" Type="http://schemas.openxmlformats.org/' +
          'officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>';
      }).join('') +
      '<Relationship Id="rId' + (abas.length + 1) + '" Type="http://schemas.openxmlformats.org/' +
      'officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
      '<Relationship Id="rId' + (abas.length + 2) + '" Type="http://schemas.openxmlformats.org/' +
      'officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>' +
      '</Relationships>';

    var styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
      '<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font>' +
      '<font><b/><sz val="11"/><name val="Calibri"/></font></fonts>' +
      '<fills count="2"><fill><patternFill patternType="none"/></fill>' +
      '<fill><patternFill patternType="gray125"/></fill></fills>' +
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>' +
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
      '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' +
      '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>' +
      '</styleSheet>';

    var contentTypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-' +
      'officedocument.spreadsheetml.sheet.main+xml"/>' +
      abas.map(function (a, i) {
        return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType=' +
          '"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>';
      }).join('') +
      '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-' +
      'officedocument.spreadsheetml.styles+xml"/>' +
      '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-' +
      'officedocument.spreadsheetml.sharedStrings+xml"/></Types>';

    var relsRaiz = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/' +
      'relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>';

    var arquivos = [
      { nome: '[Content_Types].xml', texto: contentTypes },
      { nome: '_rels/.rels', texto: relsRaiz },
      { nome: 'xl/workbook.xml', texto: workbook },
      { nome: 'xl/_rels/workbook.xml.rels', texto: relsWb },
      { nome: 'xl/styles.xml', texto: styles },
      { nome: 'xl/sharedStrings.xml', texto: sst }
    ].concat(folhas.map(function (f, i) {
      return { nome: 'xl/worksheets/sheet' + (i + 1) + '.xml', texto: f };
    }));

    var bytes = zipar(arquivos);
    var blob = new Blob([bytes], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    if (nomeArquivo) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = nomeArquivo;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
    }
    return blob;
  }

  root.XLSX = { gerar: gerar, crc32: crc32, zipar: zipar };
})(typeof window !== 'undefined' ? window : globalThis);
