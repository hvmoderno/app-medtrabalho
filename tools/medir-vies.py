#!/usr/bin/env python3
"""Mede o viés de comprimento das alternativas.

Se a correta é sistematicamente a mais longa, dá para acertar sem saber o
conteúdo — e o candidato chega na prova com um reflexo que não funciona.
Por acaso, a correta seria a mais longa em 20% das questões.

    python3 tools/medir-vies.py            # resumo geral
    python3 tools/medir-vies.py --por-arquivo
"""
import re, sys, pathlib, statistics

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ALT = re.compile(r"\{ t: '((?:[^'\\]|\\.)*)', ok: (true|false)")


def questoes(caminho):
    txt = caminho.read_text(encoding='utf-8')
    for b in re.split(r"(?=\{ id: ')", txt):
        alts = ALT.findall(b)
        if len(alts) != 5:
            continue
        c = [len(t) for t, ok in alts if ok == 'true']
        e = [len(t) for t, ok in alts if ok == 'false']
        if len(c) == 1 and len(e) == 4:
            mid = re.search(r"id: '([^']+)'", b)
            yield (mid.group(1) if mid else '?'), c[0], e


def analisar(arquivos):
    total = maior = 0
    difs, tc, te = [], [], []
    piores = []
    for p in arquivos:
        for qid, c, e in questoes(p):
            total += 1
            if c > max(e):
                maior += 1
                piores.append((c - statistics.mean(e), qid, p.name))
            difs.append(c - statistics.mean(e))
            tc.append(c); te.extend(e)
    return total, maior, difs, tc, te, piores


def main():
    arquivos = sorted(x for x in (RAIZ / 'banco').glob('*.js') if x.name != 'indice.js')

    if '--por-arquivo' in sys.argv:
        linhas = []
        for p in arquivos:
            t, m, d, _, _, _ = analisar([p])
            if t:
                linhas.append((m / t * 100, statistics.mean(d), t, p.name))
        linhas.sort(reverse=True)
        print(f"{'%maior':>7} {'dif':>7} {'n':>4}  arquivo")
        for pct, dm, n, nome in linhas:
            print(f'{pct:6.0f}% {dm:+7.0f} {n:4}  {nome}')
        return

    total, maior, difs, tc, te, piores = analisar(arquivos)
    if not total:
        print('nenhuma questão encontrada'); return
    pct = maior / total * 100
    print(f'questões: {total}')
    print(f'correta é a mais longa: {maior} ({pct:.1f}%)   [acaso = 20%]')
    print(f'média correta: {statistics.mean(tc):.0f} car · erradas: {statistics.mean(te):.0f} car')
    print(f'diferença média: {statistics.mean(difs):+.0f} car')
    alvo = '  META: chegar perto de 20% e diferença próxima de zero.'
    print(alvo)
    if pct <= 30:
        print('  situação: BOA — a pista de comprimento praticamente sumiu.')
    elif pct <= 60:
        print('  situação: MELHORANDO — ainda dá para chutar em parte das questões.')
    else:
        print('  situação: RUIM — dá para acertar sem ler o conteúdo.')


if __name__ == '__main__':
    main()
