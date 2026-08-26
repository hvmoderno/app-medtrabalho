#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Substitui APENAS o texto da alternativa correta de cada questão indicada,
mantendo as erradas e todos os comentários intactos.

Entrada em JSON pelo stdin:
  {"arquivo": "banco/x.js", "questoes": {"q-1.1-001": "novo texto da correta"}}

Recusa a gravação quando o novo texto deixaria a correta como a mais longa por
margem grande, ou quando a questão não tem exatamente uma alternativa correta.
"""
import json
import re
import sys
import pathlib

RE_ALT = re.compile(r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false),")


def main():
    spec = json.load(sys.stdin)
    caminho = pathlib.Path(spec['arquivo'])
    txt = caminho.read_text(encoding='utf-8')
    feitos, avisos = [], []

    for qid, novo in spec['questoes'].items():
        i = txt.find("id: '%s'" % qid)
        if i < 0:
            avisos.append(f'{qid}: não encontrado'); continue
        ini = txt.find('  alts: [', i)
        fim = txt.find('\n  ],', ini)
        if ini < 0 or fim < 0:
            avisos.append(f'{qid}: bloco alts não localizado'); continue
        bloco = txt[ini:fim]

        achados = list(RE_ALT.finditer(bloco))
        certas = [m for m in achados if m.group(2) == 'true']
        if len(certas) != 1:
            avisos.append(f'{qid}: {len(certas)} alternativas corretas'); continue
        if "'" in novo or '\\' in novo:
            avisos.append(f'{qid}: texto com aspa simples ou barra'); continue

        m = certas[0]
        erradas = [len(x.group(1)) for x in achados if x.group(2) == 'false']
        if len(novo) > max(erradas) + 16:
            avisos.append(f'{qid}: nova correta longa demais ({len(novo)} vs {max(erradas)})'); continue

        novo_bloco = bloco[:m.start(1)] + novo + bloco[m.end(1):]
        txt = txt[:ini] + novo_bloco + txt[fim:]
        feitos.append(qid)

    if feitos:
        caminho.write_text(txt, encoding='utf-8')
    print(f'corretas ajustadas: {len(feitos)}')
    for a in avisos:
        print('  AVISO', a)


if __name__ == '__main__':
    main()
