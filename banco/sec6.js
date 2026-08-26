/* Seção 6 — Prática Clínica Ocupacional
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-001', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa solicita ao médico coordenador do programa de controle médico de saúde ocupacional que inclua sorologia para HIV e teste de gravidez na bateria do exame admissional, "para melhor conhecer o estado de saúde dos candidatos". A conduta CORRETA é:',
  alts: [
    { t: 'Recusar: são exames sem relação com os riscos da função e de potencial discriminatório.', ok: true,
      why: 'Correta. A exigência é vedada, com ou sem consentimento do candidato.' },
    { t: 'Aceitar, desde que os resultados sejam mantidos em sigilo e não repassados ao empregador contratante.', ok: false,
      why: 'Errada. O sigilo não legitima exame sem indicação ocupacional.' },
    { t: 'Aceitar, desde que o candidato assine termo de consentimento livre e esclarecido antes do exame.', ok: false,
      why: 'Errada. A assimetria da seleção fragiliza esse consentimento.' },
    { t: 'Aceitar apenas o teste de gravidez, para proteção da gestante contra exposições de risco no posto.', ok: false,
      why: 'Errada. A resposta é controlar a exposição, não testar e selecionar.' },
    { t: 'Encaminhar a decisão ao departamento jurídico, por ser matéria alheia à competência médica.', ok: false,
      why: 'Errada. A indicação de exames é decisão técnica do médico.' }
  ],
  comentario: 'A regra é a pertinência: exame ocupacional existe para avaliar aptidão frente aos riscos da função e monitorar a saúde do exposto. Exames sem essa finalidade — sorologia para HIV, teste de gravidez em admissão — são vedados por caráter discriminatório, e nem sigilo nem consentimento os legitimam.',
  pegadinha: 'As duas alternativas que "resolvem" com sigilo ou consentimento são as mais atraentes justamente por invocarem princípios verdadeiros em contexto onde eles não se aplicam.',
  refs: ['NR-7 — PCMSO', 'Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

{ id: 'q-6.1-002', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador retorna após 45 dias de afastamento por cirurgia de hérnia discal lombar. Ele exercia função com levantamento manual de cargas. Sobre a conduta do médico do trabalho no retorno, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A conclusão do exame de retorno deve limitar-se a apto ou inapto, sem restrições.', ok: true,
      why: 'É a INCORRETA. A aptidão com restrição é conclusão prevista e frequente.' },
    { t: 'O exame de retorno ao trabalho deve ser realizado antes que o trabalhador reassuma suas atividades.', ok: false,
      why: 'Correta, portanto não é a resposta. Deve preceder a retomada.' },
    { t: 'O médico deve considerar as exigências reais da função e as condições do posto, não só o diagnóstico.', ok: false,
      why: 'Correta, portanto não é a resposta. A capacidade é sempre relacional.' },
    { t: 'A empresa deve receber a informação sobre aptidão e restrições, sem acesso ao diagnóstico do caso.', ok: false,
      why: 'Correta, portanto não é a resposta. O diagnóstico é sigiloso.' },
    { t: 'A necessidade de restrição prolongada pode indicar avaliação para readaptação ou reabilitação.', ok: false,
      why: 'Correta, portanto não é a resposta. É o encaminhamento adequado.' }
  ],
  comentario: 'O exame de retorno é anterior à retomada da atividade, considera as exigências reais do posto, admite conclusão de aptidão com restrição e nunca revela diagnóstico à empresa — apenas aptidão e restrições. Restrição que não se resolve leva à discussão de readaptação.',
  pegadinha: 'Enunciado de "assinale a INCORRETA" com quatro verdades bem construídas. A falsa nega a existência da aptidão com restrição, que é ferramenta cotidiana da especialidade.',
  refs: ['NR-7 — PCMSO', 'Código de Ética Médica'] },

{ id: 'q-6.2-001', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa precisa preencher a cota legal de pessoas com deficiência e solicita ao médico do trabalho que "reprove no exame admissional os candidatos com deficiência que não consigam desempenhar a função exatamente como os demais". Sobre a conduta correta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve verificar o desempenho da função com as adaptações razoáveis cabíveis ao caso.', ok: true,
      why: 'Correta. Não se exige equivalência de desempenho ao trabalhador sem deficiência.' },
    { t: 'Deve basear-se exclusivamente no diagnóstico e no grau de perda anatômica, conforme laudo especializado.', ok: false,
      why: 'Errada. A avaliação é funcional e considera as barreiras do posto.' },
    { t: 'Deve reconhecer que a deficiência configura, por si, restrição para funções com qualquer risco ocupacional.', ok: false,
      why: 'Errada. É preciso demonstrar incompatibilidade concreta.' },
    { t: 'Deve atender à solicitação da empresa, pois definir critérios de contratação é prerrogativa do empregador.', ok: false,
      why: 'Errada. A conclusão é técnica e não se subordina ao contratante.' },
    { t: 'Deve verificar o desempenho, ficando a empresa desobrigada de adaptar o posto após a contratação.', ok: false,
      why: 'Errada. A adaptação razoável permanece exigível.' }
  ],
  comentario: 'Dois conceitos organizam o tema: avaliação biopsicossocial (condição de saúde × barreiras do ambiente) e adaptação razoável. A pergunta correta não é "consegue igual aos outros?", e sim "consegue, com os apoios devidos?". A conclusão de aptidão é ato médico e não se submete a instrução do empregador.',
  pegadinha: 'A alternativa que trata a deficiência como restrição automática para funções com risco é a que mais reproduz prática discriminatória real.',
  refs: ['Lei nº 13.146/2015 — Estatuto da Pessoa com Deficiência', 'Manual de laudos caracterizadores de deficiência — MTE', 'ANAMT — A inclusão de pessoas com deficiência'] },

{ id: 'q-6.3-001', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Motorista profissional de transporte de cargas, 52 anos, com diabetes mellitus tipo 2 em uso de sulfonilureia, relata dois episódios de sudorese, tremor e confusão no fim da manhã, revertidos com ingestão de alimento. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere hipoglicemia sintomática, risco na direção profissional: rever a terapêutica com o assistente.', ok: true,
      why: 'Correta. A revisão precede a manutenção do trabalhador na função.' },
    { t: 'O diagnóstico de diabetes contraindica de forma absoluta a atividade de direção profissional exercida.', ok: false,
      why: 'Errada. Controlado, o trabalhador exerce a função normalmente.' },
    { t: 'Basta orientar o trabalhador a portar alimentos açucarados, sem necessidade de revisão terapêutica.', ok: false,
      why: 'Errada. A hipoglicemia recorrente exige ajuste do tratamento.' },
    { t: 'O médico do trabalho deve alterar diretamente a prescrição, por conhecer as exigências da função.', ok: false,
      why: 'Errada. A conduta terapêutica é do assistente; cabe articular com ele.' },
    { t: 'O achado deve ser comunicado à empresa com o diagnóstico, para que ela decida sobre a função.', ok: false,
      why: 'Errada. Comunica-se aptidão e restrição; o diagnóstico é sigiloso.' }
  ],
  comentario: 'Aptidão em condições crônicas raramente é "sim ou não". O eixo é o risco concreto para a função: em direção profissional, hipoglicemia sintomática é o que pesa — mais do que o valor isolado de glicemia ou hemoglobina glicada. E a conduta correta articula com o assistente sem assumir a prescrição nem quebrar o sigilo.',
  pegadinha: 'A alternativa que contraindica o diabetes de forma absoluta é o extremo fácil; a que manda o médico do trabalho represcrever é o extremo oposto. A resposta está na articulação.',
  refs: ['Diretriz da Sociedade Brasileira de Diabetes', 'Ferreira Junior — Rastreamento de doenças'] }

);
