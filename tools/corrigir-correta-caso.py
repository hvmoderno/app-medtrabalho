#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Substitui apenas o texto da alternativa correta de uma questão de caso clínico,
mantendo as erradas e todos os comentários intactos.

Entrada JSON pelo stdin:
  {"arquivo": "banco/casos-3.js", "questoes": {"caso-013#3": "novo texto"}}

Com --faixa, em vez de gravar, mostra o comprimento da correta e das erradas de
cada questão indicada, para escolher o alvo.
"""
import json, re, sys, pathlib

RE_ALT = re.compile(r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false),")


def localiza(txt, chave):
    caso, _, idx = chave.partition('#')
    idx = int(idx)
    i = txt.find("id: '%s'" % caso)
    if i < 0:
        return None
    j = txt.find("{ id: 'caso-", i + 5)
    if j < 0:
        j = len(txt)
    pos = -1
    for _ in range(idx):
        pos = txt.find('      alts: [', pos + 1, j)
        if pos < 0:
            return None
    fim = txt.find('\n      ],', pos)
    if fim < 0 or fim > j:
        return None
    return pos, fim


def main():
    spec = json.load(sys.stdin)
    caminho = pathlib.Path(spec['arquivo'])
    txt = caminho.read_text(encoding='utf-8')
    faixa = '--faixa' in sys.argv
    feitos, avisos = [], []

    for chave, novo in spec['questoes'].items():
        loc = localiza(txt, chave)
        if not loc:
            avisos.append(f'{chave}: não localizada'); continue
        ini, fim = loc
        bloco = txt[ini:fim]
        achados = list(RE_ALT.finditer(bloco))
        certas = [m for m in achados if m.group(2) == 'true']
        erradas = sorted((len(m.group(1)) for m in achados if m.group(2) == 'false'), reverse=True)
        if len(certas) != 1 or len(achados) != 5:
            avisos.append(f'{chave}: {len(certas)} corretas de {len(achados)}'); continue
        m = certas[0]
        if faixa:
            print(f'{chave}: correta={len(m.group(1))} erradas={erradas}')
            continue
        if "'" in novo or '\\' in novo:
            avisos.append(f'{chave}: aspa simples ou barra no texto'); continue
        p = 1 + sum(1 for e in erradas if e > len(novo))
        txt = txt[:ini] + bloco[:m.start(1)] + novo + bloco[m.end(1):] + txt[fim:]
        feitos.append((chave, len(novo), p))

    if feitos:
        caminho.write_text(txt, encoding='utf-8')
        print(f'corretas ajustadas: {len(feitos)}')
        for k, n, p in feitos:
            print(f'  {k}  {n} car  posição {p}ª')
    for a in avisos:
        print('  AVISO', a)


if __name__ == '__main__':
    main()
