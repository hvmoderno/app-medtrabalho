#!/usr/bin/env python3
"""Substitui o bloco `alts` de questões, a partir de um JSON no stdin.

Existe para o reequilíbrio das alternativas não virar centenas de edições
manuais frágeis. Formato esperado:

  {"arquivo": "banco/lote-X.js",
   "questoes": {
     "q-1.1-001": [
        {"t": "...", "ok": true,  "why": "..."},
        {"t": "...", "ok": false, "why": "..."}, ...
     ]
   }}

Valida antes de gravar: exatamente 5 alternativas, exatamente 1 correta, e
recusa se a correta continuar sendo a mais longa — que é justamente o defeito
que este reequilíbrio existe para corrigir.
"""
import json, re, sys, pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent


def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")


def bloco_alts(alts):
    linhas = []
    for a in alts:
        linhas.append("    { t: '%s', ok: %s,\n      why: '%s' }"
                      % (esc(a['t']), 'true' if a['ok'] else 'false', esc(a['why'])))
    return '  alts: [\n' + ',\n'.join(linhas) + '\n  ],'


def main():
    spec = json.load(sys.stdin)
    p = RAIZ / spec['arquivo']
    txt = p.read_text(encoding='utf-8')
    feitos, avisos = [], []

    for qid, alts in spec['questoes'].items():
        if len(alts) != 5:
            avisos.append(f'{qid}: {len(alts)} alternativas (esperado 5)'); continue
        if sum(1 for a in alts if a['ok']) != 1:
            avisos.append(f'{qid}: número de corretas != 1'); continue
        c = len(next(a['t'] for a in alts if a['ok']))
        e = [len(a['t']) for a in alts if not a['ok']]
        if c > max(e):
            avisos.append(f'{qid}: a correta ainda é a mais longa ({c} vs {max(e)})'); continue

        # localiza o bloco alts desta questão
        i = txt.find("id: '%s'" % qid)
        if i < 0:
            avisos.append(f'{qid}: não encontrado'); continue
        ini = txt.find('  alts: [', i)
        fim = txt.find('\n  ],', ini)
        if ini < 0 or fim < 0:
            avisos.append(f'{qid}: bloco alts não localizado'); continue
        txt = txt[:ini] + bloco_alts(alts) + txt[fim + len('\n  ],'):]
        feitos.append(qid)

    if feitos:
        p.write_text(txt, encoding='utf-8')
    print(f'reescritas: {len(feitos)}')
    for a in avisos:
        print('  AVISO', a)


if __name__ == '__main__':
    main()
