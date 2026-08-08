#!/bin/bash
# Publica o app no GitHub Pages, de ponta a ponta.
#
# Rode este script no Terminal do macOS:
#
#     bash ~/Downloads/app-medtrabalho/tools/publicar-github.sh
#
# Ele baixa o GitHub CLI oficial (se necessário), abre o login no seu navegador,
# cria o repositório, envia os commits, liga o GitHub Pages e imprime o endereço.
#
# O login acontece no site do GitHub, no seu navegador: o token fica guardado
# pelo próprio GitHub CLI e não passa por este script nem aparece na tela.

set -euo pipefail

REPO_NOME="app-medtrabalho"
PROJ="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$HOME/.local/bin"
GH="$BIN_DIR/gh"

echo "==> Projeto: $PROJ"
cd "$PROJ"

# ---------------------------------------------------------------- GitHub CLI
if command -v gh >/dev/null 2>&1; then
  GH="$(command -v gh)"
  echo "==> GitHub CLI já instalado: $GH"
elif [ -x "$GH" ]; then
  echo "==> GitHub CLI já baixado: $GH"
else
  echo "==> Baixando o GitHub CLI oficial (cerca de 13 MB)..."
  VER="$(curl -fsSL https://api.github.com/repos/cli/cli/releases/latest \
        | grep -m1 '"tag_name"' | sed 's/.*"v\([^"]*\)".*/\1/')"
  case "$(uname -m)" in
    arm64) ARQ=arm64 ;;
    *)     ARQ=amd64 ;;
  esac
  TMP="$(mktemp -d)"
  curl -fsSL -o "$TMP/gh.zip" \
    "https://github.com/cli/cli/releases/download/v${VER}/gh_${VER}_macOS_${ARQ}.zip"
  unzip -q "$TMP/gh.zip" -d "$TMP"
  mkdir -p "$BIN_DIR"
  cp "$(find "$TMP" -type f -name gh | head -1)" "$GH"
  chmod +x "$GH"
  xattr -d com.apple.quarantine "$GH" 2>/dev/null || true
  rm -rf "$TMP"
  echo "==> Instalado em $GH (versão $VER)"
fi

# ---------------------------------------------------------------------- login
if "$GH" auth status >/dev/null 2>&1; then
  echo "==> Já autenticado no GitHub."
else
  echo
  echo "==> Vou abrir o login do GitHub."
  echo "    O CLI mostra um código; copie, o navegador abre e você cola lá."
  echo
  "$GH" auth login --hostname github.com --git-protocol https --web
fi

USUARIO="$("$GH" api user --jq .login)"
echo "==> Autenticado como: $USUARIO"

# ------------------------------------------------------------------ repositório
if "$GH" repo view "$USUARIO/$REPO_NOME" >/dev/null 2>&1; then
  echo "==> Repositório $USUARIO/$REPO_NOME já existe."
else
  echo "==> Criando o repositório público $USUARIO/$REPO_NOME..."
  "$GH" repo create "$REPO_NOME" --public \
    --description "Aplicativo de estudo para o Exame de Suficiência em Medicina do Trabalho 2026"
fi

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$USUARIO/$REPO_NOME.git"

# ------------------------------------------------------------------------ push
RAMO="$(git rev-parse --abbrev-ref HEAD)"
echo "==> Enviando o ramo $RAMO ($(git rev-list --count HEAD) commits)..."
git push -u origin "$RAMO"

# ----------------------------------------------------------------------- Pages
echo "==> Ligando o GitHub Pages na raiz do ramo $RAMO..."
if "$GH" api "repos/$USUARIO/$REPO_NOME/pages" >/dev/null 2>&1; then
  "$GH" api -X PUT "repos/$USUARIO/$REPO_NOME/pages" \
    -f "source[branch]=$RAMO" -f "source[path]=/" >/dev/null
  echo "==> Pages já existia; origem atualizada."
else
  "$GH" api -X POST "repos/$USUARIO/$REPO_NOME/pages" \
    -f "source[branch]=$RAMO" -f "source[path]=/" >/dev/null
  echo "==> Pages criado."
fi

URL="https://$USUARIO.github.io/$REPO_NOME/"

# ------------------------------------------------------------------- conferir
echo "==> Aguardando a primeira publicação (pode levar alguns minutos)..."
for i in $(seq 1 40); do
  COD="$(curl -s -o /dev/null -w '%{http_code}' -m 10 "$URL" || echo 000)"
  if [ "$COD" = "200" ]; then
    echo
    echo "===================================================================="
    echo " PUBLICADO: $URL"
    echo "===================================================================="
    echo
    echo "Abra no iPad pelo Safari e use Compartilhar > Adicionar à Tela de Início"
    echo "para instalar como aplicativo."
    open "$URL" 2>/dev/null || true
    exit 0
  fi
  printf '    tentativa %d/40 (HTTP %s)\r' "$i" "$COD"
  sleep 15
done

echo
echo "O endereço ainda não respondeu 200, mas a configuração foi concluída."
echo "A primeira publicação do Pages costuma levar de 1 a 10 minutos."
echo "Endereço: $URL"
echo "Acompanhe em: https://github.com/$USUARIO/$REPO_NOME/actions"
