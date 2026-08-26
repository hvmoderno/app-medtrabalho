#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Calibração do comprimento da alternativa correta.

O problema que este script resolve: depois do reequilíbrio, a correta passou a
ser a MAIS CURTA em quase metade das questões — um viés tão explorável quanto o
original ("a maior é a certa"). O objetivo é que a correta ocupe cada posição de
comprimento (1ª a 5ª) em cerca de 20% das questões.

  --plano   lista as questões que precisam de correta mais longa, com a janela
            de comprimento alvo (mín, máx) para cair na posição desejada.
  --medir   mostra a distribuição atual de posições.

A seleção é determinística (ordenada por id), para ser reproduzível.
"""
import re
import sys
import pathlib
import collections

BANCO = pathlib.Path(__file__).resolve().parent.parent / 'banco'
RE_ALT = r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false),"


def questoes():
    for f in sorted(BANCO.glob('*.js')):
        if f.name == 'indice.js':
            continue
        txt = f.read_text(encoding='utf-8')
        for bloco in re.split(r"(?=\{ id: ')", txt)[1:]:
            m = re.search(r"id: '([^']+)'", bloco)
            if not m:
                continue
            alts = re.findall(RE_ALT, bloco)
            if len(alts) != 5:
                continue
            certas = [i for i in range(5) if alts[i][1] == 'true']
            if len(certas) != 1:
                continue
            yield f.name, m.group(1), alts, certas[0]


def posicao(alts, ic):
    ordem = sorted(range(5), key=lambda i: -len(alts[i][0]))
    return ordem.index(ic) + 1


def medir():
    cont = collections.Counter()
    n = 0
    for _, _, alts, ic in questoes():
        cont[posicao(alts, ic)] += 1
        n += 1
    print(f'questões: {n}')
    for p in range(1, 6):
        print(f'  {p}ª mais longa: {cont[p]:4d} ({100*cont[p]/n:5.1f}%)   [ideal 20%]')
    return cont, n


def plano():
    """Escolhe questões atualmente na 5ª posição e define a posição alvo."""
    cont, n = medir()
    alvo_por_pos = n // 5
    faltam = {p: max(0, alvo_por_pos - cont[p]) for p in range(1, 5)}
    print('\nfaltam por posição:', faltam, '\n')

    candidatas = [(arq, qid, alts, ic)
                  for arq, qid, alts, ic in questoes()
                  if posicao(alts, ic) == 5]

    # distribui as candidatas entre as posições que faltam, intercalando
    # para que arquivos vizinhos não recebam todos o mesmo alvo
    fila = []
    for p in (1, 2, 3, 4):
        fila += [p] * faltam[p]
    fila.sort(key=lambda p: p)
    inter = []
    while fila:
        for p in (1, 2, 3, 4):
            if p in fila:
                fila.remove(p)
                inter.append(p)
    fila = inter

    por_arquivo = collections.defaultdict(list)
    for (arq, qid, alts, ic), p in zip(candidatas, fila):
        errs = sorted((len(a[0]) for i, a in enumerate(alts) if i != ic), reverse=True)
        # para ficar na posição p, o comprimento da correta deve estar entre
        # errs[p-1]+1 (acima da p-ésima errada) e errs[p-2]-1 (abaixo da anterior)
        minimo = errs[p - 1] + 1
        maximo = (errs[p - 2] - 1) if p >= 2 else errs[0] + 14
        if maximo < minimo:
            continue
        por_arquivo[arq].append((qid, p, minimo, maximo, alts[ic][0]))

    total = sum(len(v) for v in por_arquivo.values())
    print(f'questões a alongar: {total}\n')
    for arq in sorted(por_arquivo):
        print(f'===== {arq}')
        for qid, p, mn, mx, txt in por_arquivo[arq]:
            print(f'## {qid}  alvo={p}ª  faixa={mn}-{mx}  atual={len(txt)}')
            print(f'   {txt}')


if __name__ == '__main__':
    if '--plano' in sys.argv:
        plano()
    else:
        medir()
