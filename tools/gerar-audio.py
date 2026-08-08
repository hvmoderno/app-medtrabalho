#!/usr/bin/env python3
"""Gera os resumos em áudio, um por tema do edital, para ouvir no carro.

Usa a síntese de voz do próprio macOS — nada sai do computador, não há serviço
externo nem custo. Roda assim:

    python3 tools/gerar-audio.py            # todos os 49 temas
    python3 tools/gerar-audio.py 4.3 5.1    # só os temas indicados
    python3 tools/gerar-audio.py --voz Reed # escolhe a voz

O texto de cada faixa sai das pegadinhas e dos comentários das questões, que já
são curtos e ditos em voz de quem explica. Guias com tabela e fluxograma não
entram: tabela não se escuta.

Cada faixa é montada para quem está dirigindo e não pode olhar a tela:
anuncia o tema, dá o essencial, repete as pegadinhas no fim.
"""

import json
import os
import re
import subprocess
import sys
import unicodedata

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SAIDA = os.path.join(RAIZ, 'audio')
VOZ_PADRAO = 'Luciana'
PALAVRAS_MIN = 60          # abaixo disso a faixa não se sustenta sozinha
MAX_PEGADINHAS = 12        # além disso a faixa fica longa demais para um trecho


# --------------------------------------------------------------- leitura ---
def carregar_edital():
    txt = open(os.path.join(RAIZ, 'core', 'edital.js'), encoding='utf-8').read()
    temas = {}
    for m in re.finditer(
            r"id: '([\d.]+)', sec: (\d+), origem: '\w', peso: '(\w+)',\s*\n\s*nome: '([^']+)'",
            txt):
        temas[m.group(1)] = {
            'id': m.group(1), 'sec': int(m.group(2)),
            'peso': m.group(3), 'nome': m.group(4),
        }
    secoes = {}
    for m in re.finditer(r"\{ id: (\d+), nome: '([^']+)'", txt):
        secoes[int(m.group(1))] = m.group(2)
    return temas, secoes


def carregar_questoes():
    """Lê os arquivos do banco sem executar JavaScript: extrai por regex os
    campos que interessam ao áudio."""
    porTema = {}
    pasta = os.path.join(RAIZ, 'banco')
    for nome in sorted(os.listdir(pasta)):
        if not nome.endswith('.js') or nome == 'indice.js':
            continue
        txt = open(os.path.join(pasta, nome), encoding='utf-8').read()
        for bloco in re.split(r"(?=\{ id: ')", txt):
            mt = re.search(r"tema: '([\d.]+)'", bloco)
            if not mt:
                continue
            mc = re.search(r"comentario: '((?:[^'\\]|\\.)*)'", bloco)
            mp = re.search(r"pegadinha: '((?:[^'\\]|\\.)*)'", bloco)
            if not (mc or mp):
                continue
            porTema.setdefault(mt.group(1), []).append({
                'comentario': destravar(mc.group(1)) if mc else '',
                'pegadinha': destravar(mp.group(1)) if mp else '',
            })
    return porTema


def destravar(s):
    return s.replace("\\'", "'").replace('\\\\', '\\').replace('\\n', ' ')


# ----------------------------------------------------------- texto falado ---
def falavel(s):
    """Ajusta o texto escrito para o que soa bem lido em voz alta."""
    s = s.replace('—', ',').replace('–', ',').replace('·', '.')
    s = s.replace('"', '').replace('“', '').replace('”', '')
    # O travessão vira vírgula e deixa " , ", que faz a voz pausar no lugar
    # errado. Cola a pontuação na palavra anterior.
    s = re.sub(r'\s+([,.;:])', r'\1', s)
    s = re.sub(r'([,.;:])(?=\S)', r'\1 ', s)
    # Números de norma: "NR-15" lido como "ene erre quinze" fica ruim.
    s = re.sub(r'\bNR[- ]?(\d+)\b', r'norma regulamentadora \1', s)
    s = re.sub(r'\bnº\s*', 'número ', s)
    s = re.sub(r'\bart\.\s*', 'artigo ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    if s and s[-1] not in '.!?':
        s += '.'
    return s


def montar_roteiro(tema, secao_nome, itens):
    """Monta o roteiro da faixa: abertura, conceitos, pegadinhas, fecho."""
    pegs, coments, vistos = [], [], set()
    for q in itens:
        for campo, destino in (('pegadinha', pegs), ('comentario', coments)):
            t = q.get(campo, '').strip()
            if not t:
                continue
            chave = t[:60].lower()
            if chave in vistos:
                continue
            vistos.add(chave)
            destino.append(falavel(t))

    pegs = pegs[:MAX_PEGADINHAS]
    coments = coments[:MAX_PEGADINHAS]

    p = []
    p.append(f"Tema {tema['id'].replace('.', ' ponto ')}. {tema['nome']}.")
    p.append(f"Seção: {secao_nome}.")
    if tema['peso'] == 'alto':
        p.append("Tema de peso alto no edital.")
    p.append("")

    if coments:
        p.append("O essencial.")
        p.append("")
        for c in coments:
            p.append(c)
            p.append("")

    if pegs:
        p.append("Agora, as pegadinhas de prova.")
        p.append("")
        for i, pg in enumerate(pegs, 1):
            p.append(f"{i}. {pg}")
            p.append("")

    if pegs:
        p.append("Para fechar, as três que mais derrubam candidato neste tema.")
        p.append("")
        for pg in pegs[:3]:
            p.append(pg)
            p.append("")

    p.append(f"Fim do tema {tema['id'].replace('.', ' ponto ')}.")
    return '\n'.join(p)


def contar_palavras(s):
    return len(s.split())


# ---------------------------------------------------------------- geração ---
def arquivo_seguro(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'[^A-Za-z0-9]+', '-', s).strip('-').lower()


def gerar(tema, secao_nome, itens, voz, taxa):
    roteiro = montar_roteiro(tema, secao_nome, itens)
    if contar_palavras(roteiro) < PALAVRAS_MIN:
        return None, 'material insuficiente'

    base = f"{tema['id']}-{arquivo_seguro(tema['nome'])}"
    cam_txt = os.path.join(SAIDA, base + '.txt')
    cam_aif = os.path.join(SAIDA, base + '.aiff')
    cam_m4a = os.path.join(SAIDA, base + '.m4a')

    open(cam_txt, 'w', encoding='utf-8').write(roteiro)

    r = subprocess.run(['say', '-v', voz, '-r', str(taxa), '-o', cam_aif, '-f', cam_txt],
                       capture_output=True, text=True)
    if r.returncode != 0:
        return None, 'say falhou: ' + (r.stderr or '').strip()

    r = subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '64000',
                        cam_aif, cam_m4a], capture_output=True, text=True)
    os.path.exists(cam_aif) and os.remove(cam_aif)
    if r.returncode != 0:
        return None, 'afconvert falhou: ' + (r.stderr or '').strip()

    return cam_m4a, None


def main():
    args = sys.argv[1:]
    voz, taxa = VOZ_PADRAO, 175
    filtros = []
    i = 0
    while i < len(args):
        if args[i] == '--voz':
            voz = args[i + 1]; i += 2
        elif args[i] == '--taxa':
            taxa = int(args[i + 1]); i += 2
        else:
            filtros.append(args[i]); i += 1

    temas, secoes = carregar_edital()
    questoes = carregar_questoes()
    os.makedirs(SAIDA, exist_ok=True)

    alvos = [t for t in sorted(temas, key=lambda x: [int(n) for n in x.split('.')])
             if not filtros or t in filtros]

    feitos, pulados = [], []
    for tid in alvos:
        itens = questoes.get(tid, [])
        cam, erro = gerar(temas[tid], secoes.get(temas[tid]['sec'], ''), itens, voz, taxa)
        if erro:
            pulados.append((tid, erro))
            print(f'  {tid}: PULADO — {erro}')
        else:
            mb = os.path.getsize(cam) / 1048576
            feitos.append(cam)
            print(f'  {tid}: {os.path.basename(cam)} ({mb:.1f} MB)')

    print(f'\n{len(feitos)} faixas geradas em {SAIDA}')
    if pulados:
        print(f'{len(pulados)} puladas: ' + ', '.join(t for t, _ in pulados))


if __name__ == '__main__':
    main()
