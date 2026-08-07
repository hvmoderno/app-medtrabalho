# Formato do banco de questões

## Por que este formato elimina a armadilha do embaralhamento

O briefing alerta: *"se você embaralhar as alternativas depois de escrever o comentário,
o comentário que cita 'alternativa C' fica errado"*.

Aqui isso é **impossível por construção**: a explicação de cada alternativa (`why`) e o
veredito (`ok`) viajam **dentro do objeto da própria alternativa**. Embaralhar o array
`alts` reordena texto, veredito e explicação juntos. Nenhum texto do banco cita letra.

O validador (`tools/validar.mjs`) **rejeita** qualquer questão cujo `comentario`,
`pegadinha` ou `why` contenha "alternativa A/B/C/D/E", "letra X" ou "item C".

## Esquema

```js
{
  id: 'q-4.5-001',        // único; prefixo com o tema do edital
  tema: '4.5',            // OBRIGATÓRIO: código de EDITAL.temas. Nunca rótulo paralelo.
  tipo: 'autoral',        // 'autoral' = escrita no estilo da banca
                          // 'real'    = transcrita de prova real (exige `fonte`)
  fonte: null,            // string obrigatória quando tipo === 'real'
  nivel: 'dificil',       // 'intermediario' | 'dificil'
  enunciado: '...',       // vinheta clínica/ocupacional contextualizada
  alts: [                 // exatamente 5, exatamente 1 com ok:true
    { t: 'texto', ok: true,  why: 'por que está correta' },
    { t: 'texto', ok: false, why: 'por que está errada' }
  ],
  comentario: '...',      // o ponto central que a questão cobra
  pegadinha: '...',       // onde a questão tenta derrubar o candidato
  refs: ['NR-7', 'Lei 8.213/91']   // fontes conceituais
}
```

## Regras de conteúdo

1. **Nunca inventar** número de NR, artigo, prazo ou limite de tolerância do qual não se
   tenha certeza. Na dúvida, cobrar o **conceito** e deixar o número de fora.
2. Enunciado sempre contextualizado (vinheta), 5 alternativas plausíveis.
3. Pegadinhas bem-vindas: "assinale a INCORRETA", "EXCETO", inversões, exceções.
4. `tipo: 'real'` só com fonte verificável. **Questão autoral nunca é apresentada como real** —
   o app mostra o selo "AUTORAL" na tela para toda questão escrita no estilo da banca.

## Arquivos

Um arquivo por seção do edital: `banco/sec1.js` … `banco/sec7.js`.
Cada um faz `window.BANCO.push(...)`. A ordem de carga não importa.
