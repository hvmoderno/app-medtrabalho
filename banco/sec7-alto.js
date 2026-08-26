/* Seção 7 — aprofundamento (7.2, 7.4, 7.5, 7.6)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============= 7.2 Legislação Previdenciária ========================== */
{ id: 'q-7.2-020', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com 22 anos de exposição comprovada a agente nocivo requer aposentadoria especial. A empresa alega que o fornecimento de equipamento de proteção individual eficaz descaracteriza o direito. Sobre o tema, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O efeito do equipamento varia por agente: no ruído não afasta o direito; sem limiar, tampouco.', ok: true,
      why: 'Correta. A neutralização por proteção individual não se aplica de forma uniforme.' },
    { t: 'O fornecimento de equipamento eficaz sempre descaracteriza a exposição para a aposentadoria especial.', ok: false,
      why: 'Errada. Para ruído e cancerígenos o entendimento é outro.' },
    { t: 'O equipamento de proteção individual nunca tem efeito algum sobre a caracterização da exposição.', ok: false,
      why: 'Errada. Para alguns agentes a neutralização é admitida.' },
    { t: 'A aposentadoria especial exige sempre vinte e cinco anos de exposição, qualquer que seja o agente.', ok: false,
      why: 'Errada. O período varia conforme o agente nocivo.' },
    { t: 'A exposição eventual e intermitente ao agente é suficiente para caracterizar o direito ao benefício.', ok: false,
      why: 'Errada. Exige-se exposição habitual e permanente.' }
  ],
  comentario: 'Três pontos: o tempo exigido varia conforme o agente; a exposição precisa ser habitual e permanente; e a tese de neutralização por equipamento individual tem limites claros — ruído e cancerígenos sem limiar são as exceções que mais caem.',
  pegadinha: 'As duas alternativas absolutas — "sempre descaracteriza" e "nunca tem efeito" — são as mais atraentes e ambas erram por generalizar.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999', 'LINACH'] },

{ id: 'q-7.2-021', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa observa aumento expressivo em sua alíquota de contribuição para o financiamento do benefício acidentário e procura o serviço médico para entender a causa. A explicação CORRETA envolve:',
  alts: [
    { t: 'É o fator que multiplica a alíquota conforme frequência, gravidade e custo dos agravos.', ok: true,
      why: 'Correta. O reconhecimento de agravos tem efeito financeiro direto.' },
    { t: 'O aumento decorre exclusivamente da mudança da atividade econômica principal declarada pela empresa.', ok: false,
      why: 'Errada. O desempenho em acidentalidade é o determinante.' },
    { t: 'A alíquota é fixa por lei e não varia conforme o histórico de acidentalidade da empresa.', ok: false,
      why: 'Errada. Há fator de variação por desempenho.' },
    { t: 'É fator de variação, influenciado apenas pelos acidentes típicos que resultaram em óbito do trabalhador.', ok: false,
      why: 'Errada. Frequência, gravidade e custo dos agravos em geral compõem.' },
    { t: 'É fator de variação, não repercutindo o nexo epidemiológico sobre o custo previdenciário da empresa.', ok: false,
      why: 'Errada. Os agravos reconhecidos entram no cálculo.' }
  ],
  comentario: 'A alíquota de partida vem do grau de risco da atividade; o fator de desempenho a multiplica conforme frequência, gravidade e custo. Consequência prática: reconhecer nexo custa dinheiro à empresa — e é isso que explica boa parte da pressão que o médico do trabalho sofre.',
  pegadinha: 'Separar o mecanismo do nexo epidemiológico é o erro que impede entender por que empresas contestam tanto o reconhecimento.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] },

{ id: 'q-7.2-022', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após acidente do trabalho com óbito, apura-se que a empresa descumpria normas de segurança e que essa falha contribuiu para o evento. Sobre as repercussões, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Além das repercussões trabalhistas e criminais, cabe ação regressiva da previdência.', ok: true,
      why: 'Correta. Ela reaverá os valores despendidos com os benefícios aos dependentes.' },
    { t: 'O pagamento dos benefícios pela previdência exonera a empresa de qualquer responsabilidade patrimonial.', ok: false,
      why: 'Errada. A ação regressiva existe justamente para reaver esses valores.' },
    { t: 'Cabe ação regressiva, admissível apenas quando houver condenação criminal prévia dos responsáveis.', ok: false,
      why: 'Errada. Independe de condenação criminal.' },
    { t: 'Cabe ação regressiva, sendo dispensável a comunicação do acidente em caso de óbito com certidão.', ok: false,
      why: 'Errada. A comunicação permanece devida.' },
    { t: 'Cabe ação regressiva, dependendo a responsabilidade civil da empresa da comprovação de dolo.', ok: false,
      why: 'Errada. A culpa basta, e em atividade de risco admite-se a objetiva.' }
  ],
  comentario: 'A cobertura previdenciária não é seguro contra a própria negligência: havendo descumprimento de normas de segurança, cabe ação regressiva para reaver o que a Previdência pagou. E as esferas — previdenciária, trabalhista, civil e criminal — são independentes entre si.',
  pegadinha: 'A ideia de que "a Previdência pagou, então a empresa está quitada" é a crença mais difundida e mais errada do tema.',
  refs: ['Lei nº 8.213/1991 — art. 120', 'Decreto nº 3.048/1999'] },

/* ============= 7.4 Normas Regulamentadoras ============================ */
{ id: 'q-7.4-020', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa questiona o dimensionamento de seu serviço especializado em segurança e medicina do trabalho e da comissão interna de prevenção de acidentes. Sobre esses dois institutos, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O serviço tem profissionais contratados; a comissão é paritária, com representantes eleitos.', ok: true,
      why: 'Correta. O dimensionamento do serviço segue grau de risco e número de empregados.' },
    { t: 'Ambos são compostos por profissionais técnicos contratados diretamente pela empresa empregadora.', ok: false,
      why: 'Errada. A comissão tem representantes eleitos pelos empregados.' },
    { t: 'O dimensionamento de ambos depende apenas do número de empregados do estabelecimento avaliado.', ok: false,
      why: 'Errada. O grau de risco também compõe o dimensionamento.' },
    { t: 'O serviço é técnico e a comissão é paritária, sem qualquer garantia de emprego aos eleitos.', ok: false,
      why: 'Errada. Os representantes eleitos têm garantia de emprego.' },
    { t: 'O serviço é técnico e a comissão é paritária, dispensando aquele a constituição desta na empresa.', ok: false,
      why: 'Errada. São estruturas distintas e ambas exigidas.' }
  ],
  comentario: 'Serviço especializado: profissionais contratados, dimensionado por grau de risco e número de empregados. Comissão interna: paritária, com representantes dos empregados ELEITOS e com garantia de emprego. Coexistem e se complementam — nenhum substitui o outro.',
  pegadinha: 'Confundir os dois é o erro clássico. O atalho: comissão se ELEGE, serviço se CONTRATA.',
  refs: ['NR-4', 'NR-5'] },

{ id: 'q-7.4-021', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma construtora precisa organizar atividades de manutenção em silos e em plataformas elevadas. Sobre as exigências normativas dessas atividades, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Confinado exige permissão, avaliação prévia, vigia externo e plano de resgate; altura exige análise.', ok: true,
      why: 'Correta. O trabalho em altura exige ainda autorização e avaliação de aptidão.' },
    { t: 'A permissão de entrada em espaço confinado é dispensável quando o serviço dura menos de meia hora.', ok: false,
      why: 'Errada. A brevidade não dispensa a permissão nem a avaliação.' },
    { t: 'O vigia de espaço confinado deve acompanhar o trabalhador em seu interior, para socorro imediato.', ok: false,
      why: 'Errada. O vigia permanece do lado de fora, sem entrar.' },
    { t: 'A avaliação da atmosfera pode ser feita após a entrada, desde que com equipamento portátil adequado.', ok: false,
      why: 'Errada. A avaliação é prévia e contínua.' },
    { t: 'A aptidão para trabalho em altura se restringe à avaliação da acuidade visual do trabalhador.', ok: false,
      why: 'Errada. Envolve equilíbrio, condições cardiovasculares e neurológicas.' }
  ],
  comentario: 'Espaço confinado: permissão de entrada, atmosfera avaliada ANTES, vigia sempre FORA, plano de resgate. Altura: análise de risco, autorização e avaliação de aptidão ampla — não apenas visão. As duas atividades exigem autorização prévia por escrito.',
  pegadinha: 'O vigia que entra para socorrer é a causa da segunda morte no cenário clássico de espaço confinado.',
  refs: ['NR-33', 'NR-35', 'NR-7'] },

{ id: 'q-7.4-022', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o equipamento de proteção individual, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A empresa cumpre a obrigação ao fornecer o equipamento, sem lhe caber fiscalizar o uso.', ok: true,
      why: 'É a INCORRETA. Fiscalizar o uso integra a obrigação do empregador.' },
    { t: 'O equipamento deve possuir certificado de aprovação para ser comercializado e utilizado no trabalho.', ok: false,
      why: 'Correta, portanto não é a resposta. É exigência normativa.' },
    { t: 'O fornecimento deve ser gratuito, adequado ao risco e em perfeito estado de conservação e uso.', ok: false,
      why: 'Correta, portanto não é a resposta. São requisitos expressos.' },
    { t: 'Cabe ao empregado usá-lo apenas para a finalidade a que se destina e comunicar o que o torne impróprio.', ok: false,
      why: 'Correta, portanto não é a resposta. São deveres previstos ao empregado.' },
    { t: 'O equipamento deve ser adotado quando as medidas de proteção coletiva forem inviáveis ou insuficientes.', ok: false,
      why: 'Correta, portanto não é a resposta. É a hierarquia de controle.' }
  ],
  comentario: 'A obrigação da empresa quanto ao equipamento é uma cadeia: adquirir o adequado ao risco, fornecer gratuitamente, orientar e treinar, EXIGIR e FISCALIZAR o uso, higienizar e substituir quando danificado. Parar no fornecimento é descumprir a norma.',
  pegadinha: 'A falsa é a defesa mais comum em processo trabalhista: "eu forneci, ele não usou". Fornecer sem fiscalizar não exonera.',
  refs: ['NR-6', 'CLT — Capítulo V do Título II'] },

/* ============================ 7.5 eSocial ============================== */
{ id: 'q-7.5-020', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pergunta ao médico do trabalho o que deve constar do evento de monitoramento da saúde do trabalhador no sistema de escrituração digital. A orientação CORRETA é:',
  alts: [
    { t: 'Informa os exames realizados e a conclusão de aptidão, com o médico responsável identificado.', ok: true,
      why: 'Correta. Não revela o diagnóstico do trabalhador.' },
    { t: 'Deve constar o diagnóstico codificado de todas as condições identificadas durante o exame ocupacional.', ok: false,
      why: 'Errada. O diagnóstico permanece no prontuário, sob sigilo.' },
    { t: 'Informa exames e aptidão, sendo o conteúdo técnico de responsabilidade do contador da empresa.', ok: false,
      why: 'Errada. O médico responde pela veracidade do que atesta.' },
    { t: 'Informa exames e aptidão, substituindo seu envio a emissão e entrega do atestado ao trabalhador.', ok: false,
      why: 'Errada. O atestado permanece devido, com via ao trabalhador.' },
    { t: 'Informa exames e aptidão, devendo ser enviado apenas quando houver alteração na aptidão do trabalhador.', ok: false,
      why: 'Errada. É devido a cada exame ocupacional realizado.' }
  ],
  comentario: 'Regra de ouro do eSocial em SST: o sistema é canal de transmissão, não exceção ao sigilo. Vão a realização do exame e a conclusão de aptidão, com o médico responsável identificado; não vai diagnóstico. E o atestado de saúde ocupacional continua existindo em documento.',
  pegadinha: 'A ideia de que o sistema digital "exige" o diagnóstico codificado circula bastante e é falsa.',
  refs: ['eSocial — eventos de SST', 'NR-7', 'Código de Ética Médica', 'LGPD'] },

{ id: 'q-7.5-021', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a comunicação de acidente do trabalho por meio do sistema de escrituração digital, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É devida mesmo sem afastamento, e o evento digital não altera hipóteses nem legitimados.', ok: true,
      why: 'Correta. Muda o meio de transmissão, não a obrigação legal.' },
    { t: 'O sistema digital restringiu a comunicação aos casos com afastamento superior a quinze dias.', ok: false,
      why: 'Errada. É devida também nos casos sem afastamento.' },
    { t: 'Com a transmissão digital, o trabalhador e o sindicato perderam a legitimidade para comunicar.', ok: false,
      why: 'Errada. Os legitimados subsidiários permanecem.' },
    { t: 'A comunicação digital dispensa a notificação do agravo ao sistema de vigilância em saúde.', ok: false,
      why: 'Errada. São registros distintos, com finalidades próprias.' },
    { t: 'É devida mesmo sem afastamento, não podendo erros no evento ser corrigidos após o envio.', ok: false,
      why: 'Errada. Há procedimento de retificação previsto.' }
  ],
  comentario: 'O sistema digital mudou o COMO, não o QUE: cabimento, prazos, legitimados e a coexistência com a notificação sanitária permanecem regidos pela legislação previdenciária e sanitária. E existe retificação para erros.',
  pegadinha: 'Supor que a informatização restringiu direitos — legitimados, hipóteses de cabimento — é o erro recorrente.',
  refs: ['eSocial — eventos de SST', 'Lei nº 8.213/1991 — art. 22'] },

/* ====================== 7.6 Código de Ética Médica ===================== */
{ id: 'q-7.6-020', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante exame periódico, o médico do trabalho identifica condição de saúde grave, ainda não diagnosticada, sem relação com o trabalho e sem repercussão sobre a aptidão para a função. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Informar o achado, orientar e encaminhar, mantendo o sigilo perante a empresa.', ok: true,
      why: 'Correta. À empresa comunica-se apenas a conclusão de aptidão.' },
    { t: 'Omitir o achado, pois o exame ocupacional tem finalidade restrita à avaliação de aptidão do trabalhador.', ok: false,
      why: 'Errada. O trabalhador tem direito de conhecer sua condição de saúde.' },
    { t: 'Informar o achado e comunicá-lo à empresa, para que ela ofereça apoio ao trabalhador identificado.', ok: false,
      why: 'Errada. É informação clínica protegida por sigilo.' },
    { t: 'Informar o achado e iniciar o tratamento da condição identificada no próprio serviço ocupacional.', ok: false,
      why: 'Errada. Cabe orientar e encaminhar ao assistente.' },
    { t: 'Informar o achado e declarar o trabalhador inapto até que a condição esteja plenamente controlada.', ok: false,
      why: 'Errada. A aptidão depende da repercussão sobre a função.' }
  ],
  comentario: 'Achado incidental sem relação com o trabalho: informa-se o TRABALHADOR, orienta-se e encaminha-se; à empresa vai apenas a conclusão de aptidão. Não se omite do paciente, não se conta à empresa, não se declara inaptidão sem fundamento e não se assume o tratamento.',
  pegadinha: 'A alternativa de comunicar à empresa "para oferecer apoio" é a violação de sigilo mais bem-intencionada e mais frequente da especialidade.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

{ id: 'q-7.6-021', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'O médico do trabalho identifica situação de risco grave em um setor e comunica formalmente à direção da empresa, que se recusa a adotar medidas. Sobre a conduta ética subsequente, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Registrar a comunicação e a recusa, insistir na correção e, persistindo, acionar as autoridades.', ok: true,
      why: 'Correta. O compromisso primeiro do médico é com a saúde dos trabalhadores.' },
    { t: 'Comunicada a direção, esgota-se a responsabilidade do médico, que deve acatar a decisão empresarial.', ok: false,
      why: 'Errada. A persistência do risco motiva o acionamento das autoridades.' },
    { t: 'Pedir demissão imediatamente do serviço, sem adotar qualquer outra providência quanto ao risco.', ok: false,
      why: 'Errada. Sair sem comunicar deixa os trabalhadores expostos.' },
    { t: 'Registrar a comunicação, pois acionar autoridades externas viola o dever de lealdade contratual.', ok: false,
      why: 'Errada. É conduta legítima e prevista diante de risco não corrigido.' },
    { t: 'Registrar a comunicação e comunicar às autoridades apenas se houver ocorrido acidente com vítima.', ok: false,
      why: 'Errada. A comunicação antecede o dano; é isso que a torna útil.' }
  ],
  comentario: 'O compromisso do médico do trabalho é com a saúde dos trabalhadores, não com a conveniência de quem o contrata. Diante de risco grave e recusa da empresa: documente a comunicação e a recusa, insista, e escale às autoridades. O código internacional de ética da área é explícito nesse ponto.',
  pegadinha: 'A alternativa da "lealdade contratual" formula bem o conflito real da especialidade — e a resposta ética não é ambígua.',
  refs: ['Código de Ética Médica', 'ICOH — Código internacional de ética para profissionais de saúde ocupacional'] },

{ id: 'q-7.6-022', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o sigilo médico na prática da medicina do trabalho, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O sigilo pode ser dispensado quando o exame é feito por determinação e às custas do empregador.', ok: true,
      why: 'É a INCORRETA. Quem custeia o exame não adquire direito ao conteúdo clínico.' },
    { t: 'A notificação compulsória de agravos configura exceção legal ao dever de sigilo profissional.', ok: false,
      why: 'Correta, portanto não é a resposta. É exceção prevista em lei.' },
    { t: 'O prontuário ocupacional permanece sob guarda médica, com o sigilo devidamente preservado.', ok: false,
      why: 'Correta, portanto não é a resposta. A guarda é responsabilidade médica.' },
    { t: 'À empresa comunicam-se a aptidão e as restrições necessárias, e nunca o diagnóstico do trabalhador.', ok: false,
      why: 'Correta, portanto não é a resposta. É o limite do que circula.' },
    { t: 'O sigilo persiste após o encerramento do vínculo empregatício mantido com aquele trabalhador.', ok: false,
      why: 'Correta, portanto não é a resposta. Persiste inclusive após a morte.' }
  ],
  comentario: 'A frase que resolve quase toda questão de ética da especialidade: quem paga o exame não compra a informação clínica. À empresa vão aptidão e restrições; o diagnóstico fica com o trabalhador e com o prontuário, sob guarda médica, para sempre.',
  pegadinha: 'É "assinale a INCORRETA", e a falsa formula exatamente o argumento que empresas usam na prática para pedir dados clínicos.',
  refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] }

);
