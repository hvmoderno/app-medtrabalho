#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Distribuição de posição de comprimento da correta nas questões dos casos clínicos."""
import re, pathlib, collections, sys

BANCO = pathlib.Path(__file__).resolve().parent.parent / 'banco'
RE = r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false),"

def questoes():
    for f in sorted(BANCO.glob('casos*.js')):
        txt = f.read_text(encoding='utf-8')
        for caso in re.split(r"(?=\{ id: 'caso-)", txt)[1:]:
            cid = re.search(r"id: '([^']+)'", caso).group(1)
            for k, b in enumerate(re.split(r"(?=\{ enunciado: ')", caso)[1:], 1):
                alts = re.findall(RE, b)
                if len(alts) != 5:
                    continue
                cert = [i for i in range(5) if alts[i][1] == 'true']
                if len(cert) != 1:
                    continue
                yield f.name, f'{cid}#{k}', alts, cert[0]

def pos(alts, ic):
    return sorted(range(5), key=lambda i: -len(alts[i][0])).index(ic) + 1

cont = collections.Counter(); n = 0; dc = []; de = []
detalhe = collections.defaultdict(list)
for arq, qid, alts, ic in questoes():
    p = pos(alts, ic); cont[p] += 1; n += 1
    dc.append(len(alts[ic][0])); de += [len(a[0]) for i, a in enumerate(alts) if i != ic]
    detalhe[arq].append((qid, p))
print(f'questões de caso: {n}')
for p in range(1, 6):
    print(f'  {p}ª mais longa: {cont[p]:3d} ({100*cont[p]/n:5.1f}%)   [ideal 20%]')
print(f'  média correta: {sum(dc)//len(dc)} car · erradas: {sum(de)//len(de)} car')
if '--detalhe' in sys.argv:
    for arq in sorted(detalhe):
        print(f'\n=== {arq}')
        for qid, p in detalhe[arq]:
            print(f'  {qid}  {p}ª')
