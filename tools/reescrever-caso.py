#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Reescreve o bloco de alternativas de uma questão dentro de um caso clínico.

Os casos não têm id por questão: a chave é 'caso-XXX#N', em que N é a posição
da questão dentro do array questoes daquele caso, começando em 1.

Entrada em JSON pelo stdin:
  {"arquivo": "banco/casos.js",
   "questoes": {"caso-001#1": [{"t": "...", "ok": true, "why": "..."}, ...]}}

Mantém enunciado, comentário, pegadinha e referências intactos: troca apenas o
conteúdo de alts.
"""
import json
import re
import sys
import pathlib

RE_ALT = re.compile(r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false),")


def bloco_alts(alts, ind='        '):
    linhas = ['      alts: [']
    for a in alts:
        linhas.append("%s{ t: '%s', ok: %s," % (ind, a['t'], 'true' if a['ok'] else 'false'))
        linhas.append("%s  why: '%s' }," % (ind, a['why']))
    linhas[-1] = linhas[-1].rstrip(',')
    linhas.append('      ],')
    return '\n'.join(linhas)


def main():
    spec = json.load(sys.stdin)
    caminho = pathlib.Path(spec['arquivo'])
    txt = caminho.read_text(encoding='utf-8')
    feitos, avisos = [], []

    for chave, alts in spec['questoes'].items():
        caso, _, idx = chave.partition('#')
        idx = int(idx)
        if len(alts) != 5:
            avisos.append(f'{chave}: {len(alts)} alternativas'); continue
        if sum(1 for a in alts if a['ok']) != 1:
            avisos.append(f'{chave}: número de corretas != 1'); continue
        if any("'" in a['t'] or "'" in a['why'] for a in alts):
            avisos.append(f'{chave}: aspa simples no texto'); continue

        i = txt.find("id: '%s'" % caso)
        if i < 0:
            avisos.append(f'{chave}: caso não encontrado'); continue
        # limite do caso: próximo "{ id: 'caso-" ou fim
        j = txt.find("{ id: 'caso-", i + 5)
        if j < 0:
            j = len(txt)
        trecho = txt[i:j]

        # localiza o idx-ésimo bloco alts dentro do caso
        pos = -1
        for _ in range(idx):
            pos = trecho.find('      alts: [', pos + 1)
            if pos < 0:
                break
        if pos < 0:
            avisos.append(f'{chave}: questão {idx} não localizada'); continue
        fim = trecho.find('\n      ],', pos)
        if fim < 0:
            avisos.append(f'{chave}: fim do bloco alts não localizado'); continue
        fim += len('\n      ],')

        novo = bloco_alts(alts)
        trecho = trecho[:pos] + novo + trecho[fim:]
        txt = txt[:i] + trecho + txt[j:]

        c = len(next(a['t'] for a in alts if a['ok']))
        e = sorted((len(a['t']) for a in alts if not a['ok']), reverse=True)
        feitos.append((chave, 1 + sum(1 for x in e if x > c)))

    if feitos:
        caminho.write_text(txt, encoding='utf-8')
    print(f'questões reescritas: {len(feitos)}')
    pos_alta = [k for k, p in feitos if p == 1]
    if pos_alta:
        print('  correta é a mais longa em:', ', '.join(pos_alta))
    for a in avisos:
        print('  AVISO', a)


if __name__ == '__main__':
    main()
