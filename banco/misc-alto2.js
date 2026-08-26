/* Aprofundamento: 1.5, 1.8, 1.9, 6.2, 6.3 e 7.8.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ================= 1.5 Sistemas de gestão em SST ======================= */
{ id: 'q-1.5-030', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contrata terceirizadas para manutenção industrial e sofre acidente grave com trabalhador terceirizado. A direção alega que a responsabilidade pela segurança era exclusivamente da contratada. Sobre a gestão de contratadas, é CORRETO afirmar:',
  alts: [
    { t: 'Deve integrá-los ao seu gerenciamento de riscos, informando riscos, harmonizando e verificando em campo', ok: true,
      why: 'Correta. Terceirizar a execução não terceiriza a responsabilidade pelo ambiente que controla.' },
    { t: 'Deve exigir documentos, cabendo à contratada, com exclusividade, a segurança do trabalhador terceirizado.', ok: false,
      why: 'Errada. As condições do ambiente que a contratante controla são responsabilidade dela.' },
    { t: 'Deve integrá-los ao gerenciamento, sem que os terceirizados componham seus indicadores de acidentalidade.', ok: false,
      why: 'Errada. Excluí-los distorce o retrato do risco real da operação.' },
    { t: 'Deve informar os riscos, sendo a integração ao gerenciamento boa prática facultativa, sem base normativa.', ok: false,
      why: 'Errada. Há previsão expressa de harmonização e informação recíproca.' },
    { t: 'Deve exigir da contratada os documentos de saúde e segurança, sem necessidade de verificação em campo.', ok: false,
      why: 'Errada. Verificar documento sem verificar a execução precede acidentes com terceirizados.' }
  ],
  comentario: 'Terceirizar execução não terceiriza responsabilidade sobre o ambiente. A contratante informa riscos, harmoniza procedimentos, verifica condições em campo e inclui os terceirizados nos seus indicadores — excluí-los é maquiar o próprio retrato de risco.',
  pegadinha: 'A defesa de "responsabilidade exclusiva da contratada" é a mais comum após acidente com terceirizado.',
  refs: ['NR-1', 'OIT — Sistema de Gestão da SST'] },

{ id: 'q-1.5-031', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre auditoria de sistemas de gestão em segurança e saúde no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Verifica se o sistema está implantado e é eficaz, com campo e entrevistas, não só documentos.', ok: true,
      why: 'Correta. Seus resultados alimentam a análise crítica pela direção.' },
    { t: 'Restringe-se à verificação da existência e da atualização dos documentos que compõem o sistema.', ok: false,
      why: 'Errada. Documento conforme convive com prática divergente.' },
    { t: 'Verifica a implantação, sendo as auditorias internas dispensáveis havendo certificação externa vigente.', ok: false,
      why: 'Errada. Cumprem função própria e continuada de verificação.' },
    { t: 'Verifica a implantação e a eficácia, sem necessidade de levar os resultados à alta direção.', ok: false,
      why: 'Errada. É na análise crítica que se decidem recursos e prioridades.' },
    { t: 'Verifica a implantação, comprometendo entrevistar trabalhadores a objetividade da auditoria realizada.', ok: false,
      why: 'Errada. É método reconhecido e frequentemente o mais revelador.' }
  ],
  comentario: 'Auditoria boa vai a campo e ouve quem executa. O objetivo é medir a distância entre o trabalho prescrito nos documentos e o trabalho real — e levar isso à direção, que é quem decide sobre recursos e processos.',
  pegadinha: 'Reduzir auditoria a conferência documental é o que explica empresas certificadas com desempenho ruim.',
  refs: ['OIT — Sistema de Gestão da SST', 'ISO 45001'] },

{ id: 'q-1.5-032', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a hierarquia de medidas de prevenção no gerenciamento de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Prioriza eliminar, depois substituir e engenharia, então administrativos e, por fim, o individual.', ok: true,
      why: 'Correta. Essa ordem é exigível, e não apenas recomendável.' },
    { t: 'Permite escolher livremente entre as medidas disponíveis, desde que o risco fique controlado ao final.', ok: false,
      why: 'Errada. A ordem da hierarquia é exigível.' },
    { t: 'Prioriza eliminar e substituir, vindo os controles administrativos antes dos controles de engenharia.', ok: false,
      why: 'Errada. A engenharia precede os controles administrativos.' },
    { t: 'Prioriza eliminar, sendo o equipamento individual preferível por ser de implantação mais rápida.', ok: false,
      why: 'Errada. É o último degrau, justamente por depender do uso correto.' },
    { t: 'Prioriza eliminar, dispensando os demais degraus quando há equipamento de proteção individual eficaz.', ok: false,
      why: 'Errada. Os degraus superiores permanecem exigíveis quando viáveis.' }
  ],
  comentario: 'Eliminar → substituir → engenharia → administrativo e organizacional → equipamento individual. Não é sugestão: descer degraus exige justificar a inviabilidade dos superiores. E rapidez ou custo não são justificativas técnicas.',
  pegadinha: 'Inverter engenharia e controles administrativos é o erro mais frequente na ordenação.',
  refs: ['NR-1', 'NR-9'] },

/* ================= 1.8 Vigilância em saúde do trabalhador ============== */
{ id: 'q-1.8-030', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A vigilância de um município identifica, pelo cruzamento de bases, concentração de afastamentos por transtornos mentais em trabalhadores de um mesmo ramo de atividade. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'O achado justifica investigação de campo nos estabelecimentos do ramo, com análise da organização', ok: true,
      why: 'Correta. É uso adequado da vigilância epidemiológica como disparador de ação.' },
    { t: 'Os dados de afastamento descrevem a demanda previdenciária e não orientam ações de vigilância.', ok: false,
      why: 'Errada. São fonte reconhecida para direcionar a vigilância.' },
    { t: 'O achado justifica ação, que deve limitar-se a orientar individualmente os trabalhadores afastados.', ok: false,
      why: 'Errada. O objeto é a organização do trabalho no ramo identificado.' },
    { t: 'O achado é relevante, embora transtornos mentais não sejam objeto da vigilância em saúde do trabalhador.', ok: false,
      why: 'Errada. Integram expressamente os agravos de notificação e vigilância.' },
    { t: 'O achado justifica ação, podendo a vigilância agir apenas mediante denúncia formal de sindicato.', ok: false,
      why: 'Errada. A vigilância age também a partir de análise de dados.' }
  ],
  comentario: 'Vigilância é dado somado a campo. Concentração de afastamentos em um ramo é sinal para investigar a organização do trabalho nos estabelecimentos — não para orientar um a um os afastados.',
  pegadinha: 'Condicionar a ação à denúncia formal restringe a vigilância a um papel reativo que ela não tem.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.8-031', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a interface entre vigilância em saúde do trabalhador e vigilância ambiental, é CORRETO afirmar:',
  alts: [
    { t: 'Um mesmo processo pode atingir trabalhadores e o entorno, o que justifica uma atuação articulada', ok: true,
      why: 'Correta. A exposição da comunidade costuma revelar a magnitude da exposição interna.' },
    { t: 'São fenômenos independentes, sem interface entre os riscos ocupacionais e os riscos ambientais.', ok: false,
      why: 'Errada. Compartilham frequentemente a mesma fonte.' },
    { t: 'Um processo atinge os dois grupos, não podendo a vigilância ocupacional usar dados ambientais.', ok: false,
      why: 'Errada. São fontes complementares e legítimas.' },
    { t: 'Um processo atinge os dois grupos, ficando a exposição paraocupacional fora das duas vigilâncias.', ok: false,
      why: 'Errada. É objeto reconhecido, sobretudo em chumbo e agrotóxicos.' },
    { t: 'Um processo atinge os dois grupos, dependendo a articulação entre as vigilâncias de autorização judicial.', ok: false,
      why: 'Errada. É articulação administrativa entre órgãos com competências próprias.' }
  ],
  comentario: 'A mesma fonte adoece dentro e fora do muro. Articular vigilância ocupacional e ambiental amplia o alcance e frequentemente é o caminho para intervir quando a via trabalhista encontra resistência.',
  pegadinha: 'Tratar exposição paraocupacional como terra de ninguém deixa sem proteção justamente a família do trabalhador.',
  refs: ['Lei nº 8.080/1990', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ============================ 1.9 SINAN ================================ */
{ id: 'q-1.9-030', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao analisar as fichas de notificação de acidente com material biológico de um hospital, a vigilância observa alto percentual de campos "ignorado" em ocupação e em circunstância do acidente. Sobre o impacto, é CORRETO afirmar:',
  alts: [
    { t: 'O preenchimento incompleto inutiliza o registro e impede identificar categorias de maior risco.', ok: true,
      why: 'Correta. A qualidade do dado é condição para a notificação cumprir sua finalidade.' },
    { t: 'O que importa é o número total de notificações, sendo secundário o preenchimento dos campos.', ok: false,
      why: 'Errada. Volume sem completitude não orienta nenhuma ação.' },
    { t: 'O preenchimento importa, sendo os campos ignorados preenchidos automaticamente pelo sistema.', ok: false,
      why: 'Errada. Refletem informação não coletada pelo notificador.' },
    { t: 'O preenchimento importa, sendo a ocupação campo dispensável na notificação de agravo do trabalho.', ok: false,
      why: 'Errada. É o campo que dá sentido à notificação em saúde do trabalhador.' },
    { t: 'O preenchimento importa, sendo sua melhoria responsabilidade exclusiva da vigilância municipal.', ok: false,
      why: 'Errada. Começa em quem preenche, no serviço que atende o caso.' }
  ],
  comentario: 'Notificação mal preenchida é notificação perdida. Ocupação e circunstância são os campos que transformam um evento em informação capaz de orientar prevenção — sem eles resta apenas a contagem.',
  pegadinha: 'Focar no número total de notificações ignora que o dado precisa ser analisável para gerar ação.',
  refs: ['SINAN — Ministério da Saúde'] },

{ id: 'q-1.9-031', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o fluxo da notificação de agravos relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'É feita por quem identifica o caso e alimenta a vigilância municipal, que investiga e articula.', ok: true,
      why: 'Correta. O retorno da informação aos notificadores é parte do ciclo.' },
    { t: 'É feita por quem identifica o caso, encerrando ali a responsabilidade do serviço notificador.', ok: false,
      why: 'Errada. É o disparador de investigação e de ação sobre o ambiente.' },
    { t: 'É feita por quem identifica, cabendo ao próprio serviço notificador investigar o caso notificado.', ok: false,
      why: 'Errada. A investigação cabe à vigilância, com apoio do serviço.' },
    { t: 'É feita por quem identifica e alimenta a vigilância, sendo dispensável o retorno da informação.', ok: false,
      why: 'Errada. É determinante da adesão e da qualidade da notificação.' },
    { t: 'É feita por quem identifica, seguindo os casos da rede privada fluxo separado da vigilância.', ok: false,
      why: 'Errada. A notificação é obrigação também dos serviços privados.' }
  ],
  comentario: 'O ciclo: identificar → notificar → investigar → intervir → devolver a informação. A última etapa é a mais esquecida e a que mais afeta a adesão de quem notifica.',
  pegadinha: 'Atribuir a investigação ao serviço notificador confunde assistência com vigilância.',
  refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ==================== 6.2 Inclusão da pessoa com deficiência =========== */
{ id: 'q-6.2-030', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pretende demitir trabalhador com deficiência contratado na cota, alegando reestruturação. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A dispensa exige contratação prévia de substituto em condição semelhante nos casos previstos.', ok: true,
      why: 'Correta. Alcança o fim de contrato determinado superior a noventa dias e a dispensa imotivada.' },
    { t: 'Trabalhadores com deficiência têm estabilidade absoluta e não podem ser dispensados em hipótese alguma.', ok: false,
      why: 'Errada. A dispensa é possível, condicionada à contratação de substituto.' },
    { t: 'A dispensa é livre, pois a cota se refere ao número de vagas e não a pessoas determinadas.', ok: false,
      why: 'Errada. A lei condiciona a dispensa à substituição em condição semelhante.' },
    { t: 'A dispensa exige substituto apenas se o trabalhador tiver sido admitido para a vaga da cota.', ok: false,
      why: 'Errada. A condição decorre do enquadramento, não da origem da vaga.' },
    { t: 'A dispensa exige substituto, afastando a reestruturação empresarial esse condicionamento legal.', ok: false,
      why: 'Errada. A reestruturação não afasta a exigência.' }
  ],
  comentario: 'A proteção não é estabilidade absoluta: é condicionamento da dispensa à contratação de substituto em condição semelhante, para que o percentual da cota não caia. É o ponto mais cobrado do tema no plano jurídico.',
  pegadinha: 'Os dois extremos aparecem: "estabilidade absoluta" e "dispensa livre". A resposta é o condicionamento.',
  refs: ['Lei nº 8.213/1991 — art. 93', 'Lei nº 13.146/2015'] },

{ id: 'q-6.2-031', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador com deficiência intelectual leve é admitido para função operacional. O gestor solicita ao médico do trabalho orientação sobre acompanhamento. A conduta CORRETA é:',
  alts: [
    { t: 'Avaliar exigências e competências, definir os apoios necessários e acompanhar a eficácia deles', ok: true,
      why: 'Correta. São condições de trabalho, não concessão.' },
    { t: 'Recomendar que o trabalhador seja mantido nas tarefas mais simples, sem possibilidade de progressão.', ok: false,
      why: 'Errada. Congela a carreira e contraria a finalidade inclusiva.' },
    { t: 'Solicitar avaliação psicológica periódica para monitorar o comportamento do trabalhador na equipe.', ok: false,
      why: 'Errada. Vigilância diferenciada sem critério técnico é discriminação.' },
    { t: 'Considerar que a deficiência intelectual implica incapacidade laborativa parcial do trabalhador.', ok: false,
      why: 'Errada. Deficiência não é sinônimo de incapacidade laborativa.' },
    { t: 'Informar o diagnóstico ao gestor para que ele calibre as cobranças e as metas do trabalhador.', ok: false,
      why: 'Errada. Comunicam-se apoios e restrições, não o diagnóstico.' }
  ],
  comentario: 'Em deficiência intelectual, a adaptação razoável costuma ser de comunicação e método: instrução simplificada, demonstração, tutoria, tempo de aprendizagem. É condição de trabalho, não favor — e o diagnóstico continua protegido.',
  pegadinha: 'Limitar de antemão a progressão do trabalhador é discriminação disfarçada de proteção.',
  refs: ['Lei nº 13.146/2015', 'ANAMT — A inclusão de pessoas com deficiência'] },

/* ============ 6.3 Clínica aplicada à aptidão e rastreamento ============ */
{ id: 'q-6.3-030', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 50 anos, operador de caldeira, apresenta no exame periódico pressão arterial elevada em duas aferições, assintomático, sem diagnóstico prévio. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Confirmar o diagnóstico, orientar, encaminhar e avaliar a repercussão sobre a segurança da função', ok: true,
      why: 'Correta. A hipertensão, por si, não gera inaptidão nessa atividade.' },
    { t: 'A hipertensão arterial contraindica de forma absoluta as atividades de operação de equipamentos.', ok: false,
      why: 'Errada. Controlada, a maioria dos hipertensos exerce essas funções.' },
    { t: 'Registrar o achado, que não deve ser comunicado ao trabalhador por não se relacionar ao trabalho.', ok: false,
      why: 'Errada. O trabalhador tem direito de conhecer sua condição de saúde.' },
    { t: 'Confirmar o diagnóstico e iniciar o tratamento, acompanhando o caso longitudinalmente no serviço.', ok: false,
      why: 'Errada. Cabe orientar e encaminhar; o cuidado longitudinal é do assistente.' },
    { t: 'Confirmar o diagnóstico e comunicá-lo ao gestor para adequação das tarefas do trabalhador.', ok: false,
      why: 'Errada. Comunica-se restrição funcional, não diagnóstico.' }
  ],
  comentario: 'Achado incidental no periódico: informar o trabalhador, orientar, encaminhar e avaliar repercussão sobre a segurança da função. Não tratar, não contar à empresa, não declarar inaptidão sem fundamento.',
  pegadinha: 'A inaptidão automática por hipertensão é desproporcional e a omissão do achado ao trabalhador é falta ética.',
  refs: ['Diretriz Brasileira de Hipertensão Arterial', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-6.3-031', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe incluir teste ergométrico anual para todos os trabalhadores acima de 40 anos, "para prevenir morte súbita no trabalho". Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'Rastrear com ergometria em assintomáticos de baixo risco não tem benefício e gera falso-positivos.', ok: true,
      why: 'Correta. É exemplo de dano por excesso; a indicação deve ser individualizada.' },
    { t: 'Quanto mais exames cardiológicos o programa oferece, maior a prevenção de eventos, sem inconvenientes.', ok: false,
      why: 'Errada. Exame sem indicação gera achado incidental e investigação invasiva.' },
    { t: 'Rastrear exige indicação, sendo a idade acima de quarenta anos suficiente para rastreio anual.', ok: false,
      why: 'Errada. A indicação decorre do risco individual, não da idade isolada.' },
    { t: 'Rastrear exige indicação, não se aplicando a prevenção quaternária aos exames cardiológicos.', ok: false,
      why: 'Errada. Aplica-se plenamente, e este é um exemplo clássico.' },
    { t: 'Rastrear exige indicação, não tendo lugar em medicina do trabalho a avaliação cardiológica dirigida.', ok: false,
      why: 'Errada. Tem lugar quando a função exige, como nas de alta exigência.' }
  ],
  comentario: 'A pergunta não é "esse exame é bom?", e sim "esse exame, nesta população, muda desfecho?". Em assintomáticos de baixo risco, o teste gera cascata diagnóstica sem ganho. Indicação por risco e por exigência da função, sempre.',
  pegadinha: 'O apelo de "prevenir morte súbita" é emocionalmente forte e tecnicamente insuficiente para justificar rastreamento universal.',
  refs: ['Ferreira Junior — Rastreamento de doenças', 'Dantas — Trabalho e Coração Saudáveis'] },

/* ============================== 7.8 LGPD =============================== */
{ id: 'q-7.8-030', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contrata plataforma digital para gestão dos exames ocupacionais, com armazenamento em nuvem por fornecedor terceiro. Sobre o tratamento de dados, é CORRETO afirmar:',
  alts: [
    { t: 'Permanece responsável pelas escolhas, devendo assegurar proteção, restrição de acesso e segregação.', ok: true,
      why: 'Correta. A informação clínica não se mistura à informação administrativa de aptidão.' },
    { t: 'A contratação de fornecedor especializado transfere integralmente a responsabilidade pelo tratamento.', ok: false,
      why: 'Errada. A contratante mantém responsabilidades próprias.' },
    { t: 'Permanece responsável, deixando os dados de saúde em nuvem de ser considerados sensíveis.', ok: false,
      why: 'Errada. A categoria do dado não muda com o meio de armazenamento.' },
    { t: 'Permanece responsável, sendo aceitável o acesso do pessoal ao clínico se os acessos forem registrados.', ok: false,
      why: 'Errada. O registro não legitima o acesso ao conteúdo clínico.' },
    { t: 'Permanece responsável, podendo os dados digitalizados ser mantidos indefinidamente, sem critério.', ok: false,
      why: 'Errada. Prazos de guarda e políticas de retenção se aplicam.' }
  ],
  comentario: 'No ambiente digital o sigilo se implementa por arquitetura: perfis de acesso segregados, campo clínico separado do campo de aptidão, registro de acessos e contrato com o operador. E a responsabilidade do controlador não se terceiriza.',
  pegadinha: 'Achar que o log de acesso legitima o acesso confunde rastreabilidade com autorização.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-7.8-031', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os direitos do trabalhador como titular de dados no contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Tem direito de acessar os seus dados, saber com quem foram compartilhados e pedir correção', ok: true,
      why: 'Correta. Convivem com o direito de acesso ao próprio prontuário.' },
    { t: 'Tem direitos limitados, não podendo acessar os próprios dados de saúde no serviço ocupacional.', ok: false,
      why: 'Errada. O acesso do titular é direito reconhecido.' },
    { t: 'Tem direito de acesso e pode exigir a exclusão de todos os seus dados a qualquer tempo, sem exceção.', ok: false,
      why: 'Errada. Prazos legais de guarda limitam a exclusão.' },
    { t: 'Tem direito de acesso e de correção, dependendo seu exercício de autorização do empregador.', ok: false,
      why: 'Errada. São direitos exercidos diretamente pelo titular.' },
    { t: 'Tem direito de acesso, sendo a correção de dados possível apenas mediante decisão judicial.', ok: false,
      why: 'Errada. É direito exercido diretamente perante o controlador.' }
  ],
  comentario: 'Direitos do titular: acessar, saber com quem se compartilhou, corrigir. E um limite importante: a exclusão não é irrestrita — prazos legais de guarda dos registros ocupacionais prevalecem, e isso protege também o trabalhador em nexo futuro.',
  pegadinha: 'A alternativa da exclusão irrestrita parece favorável ao trabalhador e o prejudicaria em eventual reconhecimento de doença de latência longa.',
  refs: ['LGPD — Lei nº 13.709/2018', 'NR-7', 'Código de Ética Médica'] }

);
