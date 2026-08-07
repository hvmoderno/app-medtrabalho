/* Seção 7 — aprofundamento (7.2, 7.4, 7.5, 7.6)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============= 7.2 Legislação Previdenciária ========================== */
{ id: 'q-7.2-020', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com 22 anos de exposição comprovada a agente nocivo requer aposentadoria especial. A empresa alega que o fornecimento de equipamento de proteção individual eficaz descaracteriza o direito. Sobre o tema, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A discussão sobre a eficácia do equipamento não se aplica de forma idêntica a todos os agentes: para o ruído, a jurisprudência consolidou que o equipamento não afasta o direito, e para agentes cancerígenos sem limiar a lógica do controle também não admite neutralização por equipamento individual.', ok: true,
      why: 'Correta. A tese da neutralização por equipamento tem alcance limitado; ruído e cancerígenos sem limiar são as exceções mais firmes, justamente por razões técnicas de eficácia real e de ausência de nível seguro.' },
    { t: 'O fornecimento de equipamento de proteção individual eficaz sempre descaracteriza a exposição para fins de aposentadoria especial.', ok: false,
      why: 'Errada. A generalização não se sustenta: há agentes em relação aos quais a neutralização não é reconhecida.' },
    { t: 'O equipamento de proteção individual nunca tem qualquer efeito sobre a caracterização da exposição.', ok: false,
      why: 'Errada, e é o extremo oposto. Para determinados agentes a comprovação de neutralização eficaz pode ser considerada.' },
    { t: 'A aposentadoria especial exige sempre 25 anos de exposição, independentemente do agente.', ok: false,
      why: 'Errada. O tempo exigido varia conforme o agente e o grau de nocividade.' },
    { t: 'A exposição eventual e intermitente é suficiente para caracterizar o direito.', ok: false,
      why: 'Errada. Exige-se exposição de forma habitual e permanente, não ocasional nem intermitente.' }
  ],
  comentario: 'Três pontos: o tempo exigido varia conforme o agente; a exposição precisa ser habitual e permanente; e a tese de neutralização por equipamento individual tem limites claros — ruído e cancerígenos sem limiar são as exceções que mais caem.',
  pegadinha: 'As duas alternativas absolutas — "sempre descaracteriza" e "nunca tem efeito" — são as mais atraentes e ambas erram por generalizar.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999', 'LINACH'] },

{ id: 'q-7.2-021', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa observa aumento expressivo em sua alíquota de contribuição para o financiamento do benefício acidentário e procura o serviço médico para entender a causa. A explicação CORRETA envolve:',
  alts: [
    { t: 'O fator que multiplica a alíquota conforme o desempenho da empresa em frequência, gravidade e custo dos acidentes e doenças, de modo que o reconhecimento de agravos relacionados ao trabalho tem efeito financeiro direto.', ok: true,
      why: 'Correta. É esse mecanismo que cria o incentivo econômico à prevenção — e também a pressão para contestar o reconhecimento de nexo, o que o médico do trabalho precisa saber identificar.' },
    { t: 'O aumento decorre exclusivamente da mudança da atividade econômica principal da empresa.', ok: false,
      why: 'Errada. A atividade define a alíquota de partida; o desempenho da empresa é que a multiplica para cima ou para baixo.' },
    { t: 'A alíquota é fixa por lei e não varia conforme o histórico da empresa.', ok: false,
      why: 'Errada. A variação conforme o desempenho é justamente a característica central do mecanismo.' },
    { t: 'Apenas acidentes típicos com óbito influenciam o cálculo.', ok: false,
      why: 'Errada. Frequência, gravidade e custo dos benefícios acidentários em geral compõem o cálculo, incluindo doenças ocupacionais.' },
    { t: 'O reconhecimento de nexo epidemiológico não tem qualquer repercussão sobre o custo previdenciário da empresa.', ok: false,
      why: 'Errada. Benefícios concedidos como acidentários por nexo epidemiológico entram no cálculo e elevam o custo.' }
  ],
  comentario: 'A alíquota de partida vem do grau de risco da atividade; o fator de desempenho a multiplica conforme frequência, gravidade e custo. Consequência prática: reconhecer nexo custa dinheiro à empresa — e é isso que explica boa parte da pressão que o médico do trabalho sofre.',
  pegadinha: 'Separar o mecanismo do nexo epidemiológico é o erro que impede entender por que empresas contestam tanto o reconhecimento.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] },

{ id: 'q-7.2-022', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após acidente do trabalho com óbito, apura-se que a empresa descumpria normas de segurança e que essa falha contribuiu para o evento. Sobre as repercussões, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Além das repercussões trabalhistas e criminais eventuais, a Previdência pode ajuizar ação regressiva para reaver os valores despendidos com os benefícios pagos aos dependentes.', ok: true,
      why: 'Correta. A ação regressiva acidentária é o instrumento pelo qual a Previdência cobra da empresa negligente o custo dos benefícios, e é cabível justamente na hipótese de descumprimento de normas de segurança.' },
    { t: 'O pagamento dos benefícios pela Previdência exonera a empresa de qualquer responsabilidade patrimonial.', ok: false,
      why: 'Errada. A cobertura previdenciária não substitui nem exclui a responsabilidade civil da empresa.' },
    { t: 'A ação regressiva só é cabível quando há condenação criminal prévia.', ok: false,
      why: 'Errada. As esferas são independentes; a regressiva não depende de prévia condenação criminal.' },
    { t: 'A comunicação do acidente é dispensável em caso de óbito, por já haver certidão.', ok: false,
      why: 'Errada. O óbito decorrente de acidente do trabalho deve ser comunicado, e com urgência.' },
    { t: 'A responsabilidade civil da empresa depende sempre da comprovação de dolo.', ok: false,
      why: 'Errada. A culpa, em suas modalidades, é suficiente, e há discussão consolidada sobre responsabilidade objetiva em atividade de risco.' }
  ],
  comentario: 'A cobertura previdenciária não é seguro contra a própria negligência: havendo descumprimento de normas de segurança, cabe ação regressiva para reaver o que a Previdência pagou. E as esferas — previdenciária, trabalhista, civil e criminal — são independentes entre si.',
  pegadinha: 'A ideia de que "a Previdência pagou, então a empresa está quitada" é a crença mais difundida e mais errada do tema.',
  refs: ['Lei nº 8.213/1991 — art. 120', 'Decreto nº 3.048/1999'] },

/* ============= 7.4 Normas Regulamentadoras ============================ */
{ id: 'q-7.4-020', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa questiona o dimensionamento de seu serviço especializado em segurança e medicina do trabalho e da comissão interna de prevenção de acidentes. Sobre esses dois institutos, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O serviço especializado é composto por profissionais contratados e dimensionado pelo grau de risco e pelo número de empregados; a comissão interna é integrada por representantes do empregador e por representantes dos empregados eleitos, com finalidade de prevenção e caráter paritário.', ok: true,
      why: 'Correta. Um é serviço técnico contratado, o outro é comissão com representação eleita dos trabalhadores — naturezas distintas, dimensionamentos próprios e finalidades complementares.' },
    { t: 'Ambos são compostos por profissionais técnicos contratados pela empresa.', ok: false,
      why: 'Errada. Os representantes dos empregados na comissão interna são eleitos por eles, não contratados para a função.' },
    { t: 'O dimensionamento de ambos depende apenas do número de empregados.', ok: false,
      why: 'Errada. O grau de risco da atividade é determinante em ambos os dimensionamentos.' },
    { t: 'Os representantes eleitos dos empregados na comissão não possuem qualquer garantia de emprego.', ok: false,
      why: 'Errada. Há garantia de emprego para o representante eleito, com período definido a partir do registro da candidatura, justamente para protegê-lo de retaliação.' },
    { t: 'A existência do serviço especializado dispensa a constituição da comissão interna.', ok: false,
      why: 'Errada. São institutos complementares e a existência de um não afasta a obrigação relativa ao outro.' }
  ],
  comentario: 'Serviço especializado: profissionais contratados, dimensionado por grau de risco e número de empregados. Comissão interna: paritária, com representantes dos empregados ELEITOS e com garantia de emprego. Coexistem e se complementam — nenhum substitui o outro.',
  pegadinha: 'Confundir os dois é o erro clássico. O atalho: comissão se ELEGE, serviço se CONTRATA.',
  refs: ['NR-4', 'NR-5'] },

{ id: 'q-7.4-021', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma construtora precisa organizar atividades de manutenção em silos e em plataformas elevadas. Sobre as exigências normativas dessas atividades, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Trabalho em espaço confinado exige permissão de entrada, avaliação prévia da atmosfera, vigia permanente do lado de fora e plano de resgate; trabalho em altura exige análise de risco e autorização, além de avaliação da aptidão do trabalhador.', ok: true,
      why: 'Correta. São regimes de autorização prévia distintos, cada um com seus controles próprios, e ambos envolvem avaliação de aptidão do trabalhador.' },
    { t: 'A permissão de entrada em espaço confinado é dispensável quando o serviço dura menos de trinta minutos.', ok: false,
      why: 'Errada. A duração curta não afasta o risco nem a exigência de permissão de entrada.' },
    { t: 'O vigia de espaço confinado deve acompanhar o trabalhador em seu interior, para socorro imediato.', ok: false,
      why: 'Errada, e é perigosa: o vigia permanece do lado de fora, justamente para acionar o resgate sem se tornar a segunda vítima.' },
    { t: 'A avaliação da atmosfera do espaço confinado pode ser feita após a entrada, desde que com equipamento portátil.', ok: false,
      why: 'Errada. A avaliação é PRÉVIA à entrada; medir depois de entrar é medir com a vítima dentro.' },
    { t: 'A aptidão para trabalho em altura se restringe à avaliação de acuidade visual.', ok: false,
      why: 'Errada. A avaliação considera condições que possam gerar perda de consciência, alterações de equilíbrio, uso de medicamentos e condições cardiovasculares, entre outras.' }
  ],
  comentario: 'Espaço confinado: permissão de entrada, atmosfera avaliada ANTES, vigia sempre FORA, plano de resgate. Altura: análise de risco, autorização e avaliação de aptidão ampla — não apenas visão. As duas atividades exigem autorização prévia por escrito.',
  pegadinha: 'O vigia que entra para socorrer é a causa da segunda morte no cenário clássico de espaço confinado.',
  refs: ['NR-33', 'NR-35', 'NR-7'] },

{ id: 'q-7.4-022', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o equipamento de proteção individual, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A empresa cumpre sua obrigação ao fornecer o equipamento, não lhe cabendo fiscalizar o uso.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. A obrigação da empresa vai além do fornecimento: inclui orientar, treinar, exigir e fiscalizar o uso, além de substituir quando danificado.' },
    { t: 'O equipamento deve possuir certificado de aprovação para ser comercializado e utilizado.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. O certificado é condição para a comercialização e o uso.' },
    { t: 'O fornecimento deve ser gratuito, adequado ao risco e em perfeito estado de conservação.', ok: false,
      why: 'Verdadeira. Gratuidade, adequação ao risco e conservação são exigências cumulativas.' },
    { t: 'Cabe ao empregado usar o equipamento apenas para a finalidade a que se destina e comunicar alterações que o tornem impróprio.', ok: false,
      why: 'Verdadeira. São obrigações expressas do empregado.' },
    { t: 'O equipamento de proteção individual deve ser adotado quando as medidas de proteção coletiva forem inviáveis ou insuficientes.', ok: false,
      why: 'Verdadeira. É a posição do equipamento individual na hierarquia de controles.' }
  ],
  comentario: 'A obrigação da empresa quanto ao equipamento é uma cadeia: adquirir o adequado ao risco, fornecer gratuitamente, orientar e treinar, EXIGIR e FISCALIZAR o uso, higienizar e substituir quando danificado. Parar no fornecimento é descumprir a norma.',
  pegadinha: 'A falsa é a defesa mais comum em processo trabalhista: "eu forneci, ele não usou". Fornecer sem fiscalizar não exonera.',
  refs: ['NR-6', 'CLT — Capítulo V do Título II'] },

/* ============================ 7.5 eSocial ============================== */
{ id: 'q-7.5-020', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pergunta ao médico do trabalho o que deve constar do evento de monitoramento da saúde do trabalhador no sistema de escrituração digital. A orientação CORRETA é:',
  alts: [
    { t: 'O evento informa a realização dos exames ocupacionais e a conclusão sobre a aptidão, com identificação do médico responsável, sem revelar o diagnóstico do trabalhador.', ok: true,
      why: 'Correta. O sistema é meio de transmissão de informação de SST e não suspende o sigilo: transmite-se o que foi feito e a conclusão de aptidão, não a condição de saúde.' },
    { t: 'Deve constar o diagnóstico codificado de todas as condições identificadas no exame.', ok: false,
      why: 'Errada. O diagnóstico permanece protegido pelo sigilo e não integra a informação transmitida à empresa nem por meio do sistema.' },
    { t: 'A responsabilidade pelo conteúdo técnico do evento é do contador da empresa.', ok: false,
      why: 'Errada. O conteúdo técnico-médico é de responsabilidade do médico; o setor administrativo apenas opera a transmissão.' },
    { t: 'O envio do evento substitui a emissão e a entrega do atestado de saúde ocupacional ao trabalhador.', ok: false,
      why: 'Errada. O documento continua sendo emitido e entregue; a transmissão digital não o substitui.' },
    { t: 'O evento deve ser enviado apenas quando houver alteração na aptidão do trabalhador.', ok: false,
      why: 'Errada. Os exames ocupacionais realizados são informados independentemente do resultado.' }
  ],
  comentario: 'Regra de ouro do eSocial em SST: o sistema é canal de transmissão, não exceção ao sigilo. Vão a realização do exame e a conclusão de aptidão, com o médico responsável identificado; não vai diagnóstico. E o atestado de saúde ocupacional continua existindo em documento.',
  pegadinha: 'A ideia de que o sistema digital "exige" o diagnóstico codificado circula bastante e é falsa.',
  refs: ['eSocial — eventos de SST', 'NR-7', 'Código de Ética Médica', 'LGPD'] },

{ id: 'q-7.5-021', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a comunicação de acidente do trabalho por meio do sistema de escrituração digital, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A comunicação é devida ainda que não haja afastamento, e o evento digital não altera as hipóteses legais de cabimento nem os legitimados subsidiários previstos em lei.', ok: true,
      why: 'Correta. O meio mudou, o direito material não: cabimento, prazos e legitimados subsidiários seguem a lei previdenciária.' },
    { t: 'O sistema digital restringiu a comunicação aos casos com afastamento superior a quinze dias.', ok: false,
      why: 'Errada. O meio de transmissão não altera as hipóteses de cabimento.' },
    { t: 'Com a transmissão digital, o trabalhador e o sindicato perderam a legitimidade para comunicar o acidente.', ok: false,
      why: 'Errada. Os legitimados subsidiários continuam previstos na lei previdenciária.' },
    { t: 'A comunicação por meio digital dispensa a notificação do agravo ao sistema de vigilância em saúde.', ok: false,
      why: 'Errada. São fluxos distintos, com finalidades distintas, e um não dispensa o outro.' },
    { t: 'Erros no evento transmitido não podem ser corrigidos após o envio.', ok: false,
      why: 'Errada. Há mecanismos de retificação previstos no próprio sistema.' }
  ],
  comentario: 'O sistema digital mudou o COMO, não o QUE: cabimento, prazos, legitimados e a coexistência com a notificação sanitária permanecem regidos pela legislação previdenciária e sanitária. E existe retificação para erros.',
  pegadinha: 'Supor que a informatização restringiu direitos — legitimados, hipóteses de cabimento — é o erro recorrente.',
  refs: ['eSocial — eventos de SST', 'Lei nº 8.213/1991 — art. 22'] },

/* ====================== 7.6 Código de Ética Médica ===================== */
{ id: 'q-7.6-020', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante exame periódico, o médico do trabalho identifica condição de saúde grave, ainda não diagnosticada, sem relação com o trabalho e sem repercussão sobre a aptidão para a função. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve informar o trabalhador do achado, orientá-lo e encaminhá-lo para investigação e tratamento, mantendo o sigilo perante a empresa, à qual comunica apenas a conclusão de aptidão.', ok: true,
      why: 'Correta. O trabalhador é o paciente e tem direito de conhecer o achado; a ausência de relação com o trabalho não elimina o dever de cuidado, e a empresa recebe apenas a conclusão de aptidão.' },
    { t: 'Deve omitir o achado, pois o exame ocupacional tem finalidade restrita à avaliação de aptidão.', ok: false,
      why: 'Errada. A finalidade ocupacional não autoriza o médico a calar diante de achado relevante para a saúde do paciente.' },
    { t: 'Deve comunicar o achado à empresa, para que ela ofereça apoio ao trabalhador.', ok: false,
      why: 'Errada. Ainda que bem-intencionada, a comunicação viola o sigilo e expõe o trabalhador.' },
    { t: 'Deve iniciar o tratamento da condição identificada no próprio serviço ocupacional.', ok: false,
      why: 'Errada. A conduta é orientar e encaminhar; assumir o tratamento confunde os papéis e fragiliza o cuidado longitudinal.' },
    { t: 'Deve declarar o trabalhador inapto até que a condição esteja controlada.', ok: false,
      why: 'Errada. O enunciado é expresso: não há repercussão sobre a aptidão para a função, e a inaptidão sem fundamento é abusiva.' }
  ],
  comentario: 'Achado incidental sem relação com o trabalho: informa-se o TRABALHADOR, orienta-se e encaminha-se; à empresa vai apenas a conclusão de aptidão. Não se omite do paciente, não se conta à empresa, não se declara inaptidão sem fundamento e não se assume o tratamento.',
  pegadinha: 'A alternativa de comunicar à empresa "para oferecer apoio" é a violação de sigilo mais bem-intencionada e mais frequente da especialidade.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

{ id: 'q-7.6-021', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'O médico do trabalho identifica situação de risco grave em um setor e comunica formalmente à direção da empresa, que se recusa a adotar medidas. Sobre a conduta ética subsequente, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O médico deve registrar formalmente a comunicação e a recusa, insistir na correção e, persistindo o risco, comunicar às autoridades competentes, pois seu compromisso primeiro é com a saúde dos trabalhadores.', ok: true,
      why: 'Correta. O vínculo contratual com a empresa não subordina o dever de proteção da saúde; documentar e escalar é a conduta exigível quando a via interna se esgota.' },
    { t: 'Comunicada a direção, esgota-se a responsabilidade do médico, que deve acatar a decisão empresarial.', ok: false,
      why: 'Errada. A responsabilidade profissional não se transfere para quem decide ignorar o alerta.' },
    { t: 'O médico deve pedir demissão imediatamente, sem qualquer outra providência.', ok: false,
      why: 'Errada. Sair sem comunicar deixa os trabalhadores expostos ao mesmo risco; a saída pode ser legítima, mas não substitui a comunicação.' },
    { t: 'A comunicação a autoridades externas viola o dever de lealdade contratual com a empresa.', ok: false,
      why: 'Errada. Não há dever de lealdade que se sobreponha à proteção da vida e da saúde de terceiros.' },
    { t: 'O médico deve comunicar apenas se houver ocorrido acidente com vítima.', ok: false,
      why: 'Errada. Esperar a vítima para agir contraria o próprio sentido da prevenção.' }
  ],
  comentario: 'O compromisso do médico do trabalho é com a saúde dos trabalhadores, não com a conveniência de quem o contrata. Diante de risco grave e recusa da empresa: documente a comunicação e a recusa, insista, e escale às autoridades. O código internacional de ética da área é explícito nesse ponto.',
  pegadinha: 'A alternativa da "lealdade contratual" formula bem o conflito real da especialidade — e a resposta ética não é ambígua.',
  refs: ['Código de Ética Médica', 'ICOH — Código internacional de ética para profissionais de saúde ocupacional'] },

{ id: 'q-7.6-022', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o sigilo médico na prática da medicina do trabalho, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O sigilo pode ser dispensado quando o trabalhador é examinado por determinação e às custas do empregador.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Quem custeia o exame não adquire direito à informação clínica; o sigilo protege o trabalhador e independe de quem paga.' },
    { t: 'A notificação compulsória de agravos configura exceção legal ao sigilo.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. É exceção prevista em lei, exercida em ambiente sanitário protegido.' },
    { t: 'O prontuário ocupacional está sob guarda médica, com sigilo preservado.', ok: false,
      why: 'Verdadeira. A guarda é responsabilidade médica e o acesso é restrito.' },
    { t: 'À empresa comunicam-se a aptidão e as restrições necessárias, não o diagnóstico.', ok: false,
      why: 'Verdadeira. É a regra estruturante da comunicação em saúde ocupacional.' },
    { t: 'O sigilo persiste após o encerramento do vínculo empregatício do trabalhador.', ok: false,
      why: 'Verdadeira. O sigilo não se extingue com o fim do contrato nem com a morte do paciente.' }
  ],
  comentario: 'A frase que resolve quase toda questão de ética da especialidade: quem paga o exame não compra a informação clínica. À empresa vão aptidão e restrições; o diagnóstico fica com o trabalhador e com o prontuário, sob guarda médica, para sempre.',
  pegadinha: 'É "assinale a INCORRETA", e a falsa formula exatamente o argumento que empresas usam na prática para pedir dados clínicos.',
  refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] }

);
