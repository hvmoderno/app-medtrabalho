#!/usr/bin/env python3
"""Regenera a lista de precache do service worker a partir dos arquivos reais,
regenera o índice de guias de materiais e SOBE a versão do cache.

OBRIGATÓRIO a cada publicação: sem subir a versão, o iPad continua servindo a
versão antiga a partir do cache. Uso:  python3 tools/atualizar-sw.py
"""
import re
import pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
IGNORAR_DIRS = {'.git', '.claude', 'tools', '__pycache__'}
IGNORAR_EXT = {'.md', '.mjs', '.py'}

# ---------------------------------------------------------------- índice de guias
guias = sorted(
    p.stem for p in (RAIZ / 'materiais' / 'guias').glob('*.html')
)
indice = RAIZ / 'materiais' / 'guias' / 'indice.js'
indice.write_text(
    '/* GERADO por tools/atualizar-sw.py — não edite à mão.\n'
    '   Lista dos temas do edital que já possuem guia de revisão escrito. */\n'
    'window.GUIAS = ' + repr(guias).replace("'", '"') + ';\n'
)
print(f'materiais/guias/indice.js: {len(guias)} guias')

# ------------------------------------------------------------- índice do banco
bancos = sorted(
    x.name for x in (RAIZ / 'banco').glob('*.js') if x.name != 'indice.js'
)
(RAIZ / 'banco' / 'indice.js').write_text(
    '/* GERADO por tools/atualizar-sw.py — não edite à mão.\n'
    '   Arquivos de questões carregados por core/banco-loader.js. */\n'
    'window.BANCO_ARQUIVOS = ' + repr(bancos).replace("'", '"') + ';\n'
)
print(f'banco/indice.js: {len(bancos)} arquivos de questões')

# ------------------------------------------------------------------- precache
arquivos = ['./', './index.html']
pulados_audio = 0
for p in sorted(RAIZ.rglob('*')):
    if not p.is_file():
        continue
    rel = p.relative_to(RAIZ)
    if rel.parts[0] in IGNORAR_DIRS or p.suffix in IGNORAR_EXT:
        continue
    if p.name == 'sw.js' or rel.as_posix() == 'index.html':
        continue
    # Arquivos ocultos (.DS_Store, .gitignore, .nojekyll) não são do app.
    if any(parte.startswith('.') for parte in rel.parts):
        continue
    # As faixas de áudio somam dezenas de MB. No precache, instalar o app
    # baixaria tudo de uma vez, no 4G, sem o usuário pedir. Elas ficam de fora
    # e são guardadas sob demanda, conforme ele ouve (ver sw.js).
    if rel.as_posix().startswith('audio/faixas/'):
        pulados_audio += 1
        continue
    arquivos.append('./' + rel.as_posix())

lista = ',\n'.join(f"  '{a}'" for a in arquivos)

sw = RAIZ / 'sw.js'
txt = sw.read_text()

m = re.search(r"const VERSAO = 'v(\d+)';", txt)
if not m:
    raise SystemExit('não encontrei a linha de VERSAO em sw.js')
atual, novo = int(m.group(1)), int(m.group(1)) + 1
txt = txt.replace(f"const VERSAO = 'v{atual}';", f"const VERSAO = 'v{novo}';", 1)

txt = re.sub(r'const ARQUIVOS = \[.*?\n\];',
             'const ARQUIVOS = [\n' + lista + '\n];', txt, flags=re.S)
sw.write_text(txt)
print(f'sw.js: {len(arquivos)} arquivos no precache · versão v{atual} -> v{novo}')
if pulados_audio:
    print(f'         {pulados_audio} faixas de áudio fora do precache (cache sob demanda)')
