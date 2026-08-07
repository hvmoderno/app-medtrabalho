/* Seção 6 — Prática Clínica Ocupacional
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-001', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa solicita ao médico coordenador do programa de controle médico de saúde ocupacional que inclua sorologia para HIV e teste de gravidez na bateria do exame admissional, "para melhor conhecer o estado de saúde dos candidatos". A conduta CORRETA é:',
  alts: [
    { t: 'Recusar a inclusão, por se tratar de exames sem relação com os riscos ocupacionais da função e com potencial discriminatório, o que é vedado.', ok: true,
      why: 'Correta. Exames ocupacionais devem guardar relação com os riscos da função. Sorologia para HIV e teste de gravidez em admissão são exemplos consagrados de exigência discriminatória vedada.' },
    { t: 'Aceitar, desde que os resultados sejam mantidos em sigilo e não repassados ao empregador.', ok: false,
      why: 'Errada. O sigilo é obrigatório de todo modo, mas não legitima a realização de exame sem finalidade ocupacional e com potencial discriminatório.' },
    { t: 'Aceitar, desde que o candidato assine termo de consentimento livre e esclarecido.', ok: false,
      why: 'Errada. Em situação de assimetria de poder — candidato a emprego —, o consentimento não afasta o caráter discriminatório da exigência.' },
    { t: 'Aceitar apenas o teste de gravidez, para proteção da gestante contra exposições de risco.', ok: false,
      why: 'Errada. A proteção da gestante se faz por avaliação de risco do posto e por afastamento de exposições quando comunicada a gestação, não por triagem admissional.' },
    { t: 'Encaminhar a decisão ao departamento jurídico da empresa, por se tratar de matéria alheia à competência médica.', ok: false,
      why: 'Errada. A definição dos exames do programa é responsabilidade técnica do médico coordenador, que responde eticamente por ela.' }
  ],
  comentario: 'A regra é a pertinência: exame ocupacional existe para avaliar aptidão frente aos riscos da função e monitorar a saúde do exposto. Exames sem essa finalidade — sorologia para HIV, teste de gravidez em admissão — são vedados por caráter discriminatório, e nem sigilo nem consentimento os legitimam.',
  pegadinha: 'As duas alternativas que "resolvem" com sigilo ou consentimento são as mais atraentes justamente por invocarem princípios verdadeiros em contexto onde eles não se aplicam.',
  refs: ['NR-7 — PCMSO', 'Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

{ id: 'q-6.1-002', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador retorna após 45 dias de afastamento por cirurgia de hérnia discal lombar. Ele exercia função com levantamento manual de cargas. Sobre a conduta do médico do trabalho no retorno, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A conclusão do exame de retorno ao trabalho deve limitar-se a "apto" ou "inapto", não sendo cabível emitir aptidão com restrições.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. A conclusão pode registrar aptidão com restrições ou recomendações, que é justamente o instrumento que viabiliza o retorno seguro e a readaptação.' },
    { t: 'O exame de retorno ao trabalho deve ser realizado antes que o trabalhador reassuma suas atividades.', ok: false,
      why: 'Verdadeira. A finalidade do exame é justamente avaliar a condição antes do reinício da exposição.' },
    { t: 'O médico do trabalho deve considerar as exigências reais da função e as condições do posto, e não apenas o diagnóstico.', ok: false,
      why: 'Verdadeira. Aptidão é sempre relação entre condição de saúde e exigências concretas do trabalho.' },
    { t: 'A empresa deve receber a informação sobre aptidão e eventuais restrições, sem acesso ao diagnóstico.', ok: false,
      why: 'Verdadeira. O sigilo diagnóstico é preservado; à empresa cabe conhecer a conclusão sobre aptidão e as restrições necessárias.' },
    { t: 'A necessidade de restrição prolongada pode indicar avaliação para readaptação ou reabilitação profissional.', ok: false,
      why: 'Verdadeira. Restrição que se prolonga sinaliza que a função original pode ser incompatível, abrindo caminho para readaptação.' }
  ],
  comentario: 'O exame de retorno é anterior à retomada da atividade, considera as exigências reais do posto, admite conclusão de aptidão com restrição e nunca revela diagnóstico à empresa — apenas aptidão e restrições. Restrição que não se resolve leva à discussão de readaptação.',
  pegadinha: 'Enunciado de "assinale a INCORRETA" com quatro verdades bem construídas. A falsa nega a existência da aptidão com restrição, que é ferramenta cotidiana da especialidade.',
  refs: ['NR-7 — PCMSO', 'Código de Ética Médica'] },

{ id: 'q-6.2-001', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa precisa preencher a cota legal de pessoas com deficiência e solicita ao médico do trabalho que "reprove no exame admissional os candidatos com deficiência que não consigam desempenhar a função exatamente como os demais". Sobre a conduta correta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A avaliação deve verificar a possibilidade de desempenho da função com as adaptações razoáveis cabíveis, e não a equivalência de desempenho ao trabalhador sem deficiência.', ok: true,
      why: 'Correta. O paradigma é o da adaptação razoável e da avaliação biopsicossocial: a pergunta é se a pessoa desempenha a função com os apoios necessários, não se desempenha do mesmo modo que os demais.' },
    { t: 'A avaliação deve basear-se exclusivamente no diagnóstico e no grau de perda anatômica, conforme laudo especializado.', ok: false,
      why: 'Errada. O modelo vigente é biopsicossocial: considera a interação entre a condição de saúde e as barreiras do ambiente, não apenas o dado anatômico.' },
    { t: 'A presença de deficiência configura, por si só, restrição para funções que envolvam qualquer risco ocupacional.', ok: false,
      why: 'Errada, e é presunção discriminatória. A avaliação é individualizada, por função e por risco concreto.' },
    { t: 'O médico do trabalho deve atender à solicitação da empresa, pois a definição de critérios de contratação é prerrogativa do empregador.', ok: false,
      why: 'Errada. A conclusão de aptidão é ato médico com responsabilidade técnica e ética própria; atender à solicitação seria fraudar a avaliação.' },
    { t: 'Uma vez contratada a pessoa com deficiência, a empresa está desobrigada de promover adaptações no posto de trabalho.', ok: false,
      why: 'Errada. A adaptação razoável e a acessibilidade são deveres que acompanham a inclusão, não se esgotam na contratação.' }
  ],
  comentario: 'Dois conceitos organizam o tema: avaliação biopsicossocial (condição de saúde × barreiras do ambiente) e adaptação razoável. A pergunta correta não é "consegue igual aos outros?", e sim "consegue, com os apoios devidos?". A conclusão de aptidão é ato médico e não se submete a instrução do empregador.',
  pegadinha: 'A alternativa que trata a deficiência como restrição automática para funções com risco é a que mais reproduz prática discriminatória real.',
  refs: ['Lei nº 13.146/2015 — Estatuto da Pessoa com Deficiência', 'Manual de laudos caracterizadores de deficiência — MTE', 'ANAMT — A inclusão de pessoas com deficiência'] },

{ id: 'q-6.3-001', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Motorista profissional de transporte de cargas, 52 anos, com diabetes mellitus tipo 2 em uso de sulfonilureia, relata dois episódios de sudorese, tremor e confusão no fim da manhã, revertidos com ingestão de alimento. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere hipoglicemia sintomática, o que representa risco em atividade de direção profissional e exige avaliação com o médico assistente para revisão do esquema terapêutico antes de manter o trabalhador na função.', ok: true,
      why: 'Correta. Hipoglicemia sintomática em condutor profissional é risco para si e para terceiros; a conduta é articular com o assistente a revisão do tratamento, e não simplesmente manter ou excluir o trabalhador.' },
    { t: 'A presença de diabetes contraindica de forma absoluta a atividade de direção profissional.', ok: false,
      why: 'Errada. Diabetes bem controlado, sem hipoglicemias e sem complicações limitantes, não impede a direção profissional; a decisão é individualizada.' },
    { t: 'Basta orientar o trabalhador a portar alimentos açucarados, sem necessidade de revisão terapêutica.', ok: false,
      why: 'Errada. Portar carboidrato é medida de segurança, mas não corrige a causa do episódio, que é o esquema terapêutico inadequado para a atividade.' },
    { t: 'O médico do trabalho deve alterar diretamente a prescrição do hipoglicemiante, por conhecer melhor as exigências da função.', ok: false,
      why: 'Errada. A conduta é articular com o médico assistente, informando as exigências da função; assumir a prescrição rompe o cuidado longitudinal.' },
    { t: 'O achado deve ser comunicado à empresa com o diagnóstico completo, para que ela decida sobre a manutenção na função.', ok: false,
      why: 'Errada. À empresa cabe a conclusão sobre aptidão e restrições; o diagnóstico permanece protegido pelo sigilo.' }
  ],
  comentario: 'Aptidão em condições crônicas raramente é "sim ou não". O eixo é o risco concreto para a função: em direção profissional, hipoglicemia sintomática é o que pesa — mais do que o valor isolado de glicemia ou hemoglobina glicada. E a conduta correta articula com o assistente sem assumir a prescrição nem quebrar o sigilo.',
  pegadinha: 'A alternativa que contraindica o diabetes de forma absoluta é o extremo fácil; a que manda o médico do trabalho represcrever é o extremo oposto. A resposta está na articulação.',
  refs: ['Diretriz da Sociedade Brasileira de Diabetes', 'Ferreira Junior — Rastreamento de doenças'] }

);
