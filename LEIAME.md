# App de estudo — Título de Especialista em Medicina do Trabalho 2026

Aplicativo web (PWA instalável, funciona offline) para a prova da ANAMT/AMB,
Edital nº 2512, em **01/11/2026**.

HTML, CSS e JavaScript puros. **Nenhuma dependência externa em runtime** — nem
para gerar o arquivo .xlsx, que é montado do zero (ZIP + CRC-32 + OOXML) em
`core/xlsx.js`.

---

## Rodar localmente

```bash
python3 ~/Downloads/app-medtrabalho/tools/servir.py 8732
```

Depois abra `http://127.0.0.1:8732`. O servidor de desenvolvimento envia
`Cache-Control: no-store` para você nunca ver versão velha enquanto edita.

## Auditar o banco de questões

Abra `http://127.0.0.1:8732/tools/validar.html`. Mostra a distribuição por tema,
a distribuição do gabarito em A–E e a lista de problemas. Roda inteiramente no
navegador (não há Node instalado nesta máquina). Se um dia houver Node:
`node tools/validar.mjs` usa exatamente a mesma lógica.

O validador **rejeita**: tema fora da taxonomia, número de alternativas diferente
de 5, gabarito não único, alternativa sem explicação, questão sem comentário,
enunciado duplicado, id duplicado, tipo `real` sem fonte e — o mais importante —
qualquer texto que cite alternativa **por letra**, o que quebraria o gabarito ao
reposicionar as alternativas.

## Acrescentar questões

1. Crie um arquivo novo em `banco/`, por exemplo `banco/sec3-lote2.js`:

```js
window.BANCO = window.BANCO || [];
window.BANCO.push(
  { id: 'q-3.1-100', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
    enunciado: '...',
    alts: [ { t: '...', ok: true, why: '...' }, /* mais 4 */ ],
    comentario: '...', pegadinha: '...', refs: ['...'] }
);
```

2. Rode `python3 tools/atualizar-sw.py`.

Isso regenera `banco/indice.js`, regenera a lista de precache do service worker e
**sobe a versão do cache** — nenhum HTML precisa ser editado. O formato completo
está em `banco/README-formato.md`.

`ok: true` significa **"esta é a alternativa que deve ser marcada"**. Em questões
do tipo "assinale a INCORRETA", quem leva `ok: true` é a afirmação **falsa**.

## Acrescentar guias de revisão

Crie `materiais/guias/<codigo>.html` (fragmento HTML, sem `<html>`/`<head>`/`<body>`),
seguindo o padrão de `materiais/guias/5.1.html`, e rode `tools/atualizar-sw.py`.
As classes disponíveis estão em `materiais/guia.css`.

## Publicar

**Toda publicação exige** `python3 tools/atualizar-sw.py` antes do commit. Sem
subir a versão do cache, o iPad continua servindo a versão antiga. O shell já faz
auto-atualização (`controllerchange` → reload), mas isso só dispara se `sw.js` mudar.

---

## Estrutura

```
index.html              shell: abas, iframes com lazy-load, faixa de avisos, backup
core/edital.js          TAXONOMIA OFICIAL — fonte da verdade de todo o app
core/storage.js         persistência em duas camadas + backups + recuperação
core/gabarito.js        posicionamento uniforme da alternativa correta
core/banco-loader.js    carrega os arquivos do banco a partir do índice
core/xlsx.js            gerador de .xlsx sem biblioteca (ZIP + CRC-32 + OOXML)
questoes/               banco com filtro por tema, feedback e comentários
cronograma/             plano até a prova, gerado da taxonomia + datas
materiais/              guias de revisão, um arquivo por tema
simulados/              provas no formato da banca, cronometradas
flashcards/             repetição espaçada SM-2
treino/                 trilha gamificada por tema
planilha/               log de erros com resumos e exportação
tools/                  servidor local, validador e regenerador do service worker
```

## Persistência

Tudo grava em **duas camadas simultâneas**: `localStorage` (síncrono, imediato,
sem debounce) e **IndexedDB** (cópia principal), mais **backups rotativos datados**
(últimos 12) e um snapshot de emergência. Grava também em `pagehide`,
`beforeunload`, `visibilitychange` e `freeze`.

Na abertura, se uma das camadas sumiu, o app **restaura sozinho** da outra — ou do
backup mais recente, se as duas sumirem — e avisa numa faixa visível. Nenhum erro
de gravação é engolido: todo erro vira faixa vermelha na tela.

**O backup em arquivo `.json` (botão "Backup", no topo) é a única cópia que
sobrevive se o Safari/iOS limpar o armazenamento do site.** O app cobra um novo
backup a cada 7 dias.

## Publicar no GitHub Pages

Rode uma vez, no Terminal:

```
bash ~/Downloads/app-medtrabalho/tools/publicar-github.sh
```

O script cuida de tudo: login no GitHub (pelo navegador, no site do próprio
GitHub), criação do repositório público, envio dos commits, ativação do Pages e
conferência do endereço final. O token fica guardado pelo GitHub CLI; não passa
pelo script nem aparece na tela.

Ao final ele imprime o endereço, no formato
`https://SEU-USUARIO.github.io/app-medtrabalho/`.
Para instalar no iPad: abra pelo Safari e use Compartilhar > Adicionar à Tela de
Início.
