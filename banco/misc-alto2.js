/* Aprofundamento: 1.5, 1.8, 1.9, 6.2, 6.3 e 7.8.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ================= 1.5 Sistemas de gestão em SST ======================= */
{ id: 'q-1.5-030', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contrata terceirizadas para manutenção industrial e sofre acidente grave com trabalhador terceirizado. A direção alega que a responsabilidade pela segurança era exclusivamente da contratada. Sobre a gestão de contratadas, é CORRETO afirmar:',
  alts: [
    { t: 'A empresa contratante deve integrar os trabalhadores terceirizados ao seu gerenciamento de riscos, informando os riscos do ambiente, harmonizando procedimentos e verificando as condições de trabalho — a terceirização da execução não terceiriza a responsabilidade pelo ambiente que ela controla.', ok: true,
      why: 'Correta. Quem detém o ambiente e o processo tem obrigação de informar os riscos e de assegurar condições, ainda que a mão de obra seja de terceiro.' },
    { t: 'A responsabilidade pela segurança do terceirizado é integralmente da empresa contratada, sem qualquer dever da contratante.', ok: false,
      why: 'Errada. A contratante tem deveres próprios de informação, harmonização e verificação sobre o ambiente que controla.' },
    { t: 'Terceirizados não integram os indicadores de acidentalidade da contratante em nenhuma hipótese.', ok: false,
      why: 'Errada. Excluí-los distorce o retrato do risco e é prática que mascara a acidentalidade real do estabelecimento.' },
    { t: 'A integração dos terceirizados ao gerenciamento de riscos é boa prática facultativa, sem base normativa.', ok: false,
      why: 'Errada. Há previsão expressa de harmonização e de informação de riscos entre contratante e contratada.' },
    { t: 'Basta exigir da contratada os documentos de saúde e segurança, sem qualquer verificação em campo.', ok: false,
      why: 'Errada. Conferir papel sem verificar a execução é justamente a falha que precede acidentes com terceirizados.' }
  ],
  comentario: 'Terceirizar execução não terceiriza responsabilidade sobre o ambiente. A contratante informa riscos, harmoniza procedimentos, verifica condições em campo e inclui os terceirizados nos seus indicadores — excluí-los é maquiar o próprio retrato de risco.',
  pegadinha: 'A defesa de "responsabilidade exclusiva da contratada" é a mais comum após acidente com terceirizado.',
  refs: ['NR-1', 'OIT — Sistema de Gestão da SST'] },

{ id: 'q-1.5-031', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre auditoria de sistemas de gestão em segurança e saúde no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A auditoria verifica se o sistema está implantado e é eficaz, devendo incluir verificação em campo e entrevistas com trabalhadores — não se limitando à conferência documental —, e seus resultados alimentam a análise crítica pela direção.', ok: true,
      why: 'Correta. Auditoria que só confere documento não detecta a diferença entre o sistema descrito e o sistema praticado, que é justamente onde os acidentes acontecem.' },
    { t: 'A auditoria se restringe à verificação da existência e da atualização dos documentos do sistema.', ok: false,
      why: 'Errada. Conformidade documental não é sinônimo de sistema funcionando.' },
    { t: 'Auditorias internas são dispensáveis quando há certificação externa vigente.', ok: false,
      why: 'Errada. As auditorias internas são parte do ciclo de melhoria contínua e têm periodicidade própria.' },
    { t: 'Os resultados da auditoria não precisam ser levados à alta direção.', ok: false,
      why: 'Errada. A análise crítica pela direção é etapa do ciclo e depende dos resultados da auditoria.' },
    { t: 'Entrevistar trabalhadores compromete a objetividade da auditoria.', ok: false,
      why: 'Errada. É por meio deles que se conhece o trabalho real, que a documentação não descreve.' }
  ],
  comentario: 'Auditoria boa vai a campo e ouve quem executa. O objetivo é medir a distância entre o trabalho prescrito nos documentos e o trabalho real — e levar isso à direção, que é quem decide sobre recursos e processos.',
  pegadinha: 'Reduzir auditoria a conferência documental é o que explica empresas certificadas com desempenho ruim.',
  refs: ['OIT — Sistema de Gestão da SST', 'ISO 45001'] },

{ id: 'q-1.5-032', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a hierarquia de medidas de prevenção no gerenciamento de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A ordem prioriza eliminar os riscos, depois reduzi-los por substituição ou controles de engenharia, em seguida controles administrativos e de organização do trabalho e, por último, o equipamento de proteção individual — sendo essa ordem exigível e não apenas recomendável.', ok: true,
      why: 'Correta. A hierarquia é normativa e a adoção de medida de degrau inferior exige demonstrar a inviabilidade das superiores.' },
    { t: 'A empresa pode escolher livremente entre as medidas, desde que o risco seja controlado.', ok: false,
      why: 'Errada. A escolha é vinculada à hierarquia; adotar equipamento individual sem justificar a inviabilidade das medidas superiores é irregular.' },
    { t: 'Controles administrativos precedem os controles de engenharia na hierarquia.', ok: false,
      why: 'Errada. Engenharia vem antes: atua na fonte e não depende do comportamento das pessoas.' },
    { t: 'O equipamento de proteção individual é preferível por ser de implantação mais rápida.', ok: false,
      why: 'Errada. Rapidez de implantação não altera a hierarquia; o equipamento individual depende de uso correto e contínuo.' },
    { t: 'Havendo equipamento de proteção individual eficaz, dispensam-se os demais degraus.', ok: false,
      why: 'Errada. O equipamento não elimina a fonte e é a última medida, não substituto das anteriores.' }
  ],
  comentario: 'Eliminar → substituir → engenharia → administrativo e organizacional → equipamento individual. Não é sugestão: descer degraus exige justificar a inviabilidade dos superiores. E rapidez ou custo não são justificativas técnicas.',
  pegadinha: 'Inverter engenharia e controles administrativos é o erro mais frequente na ordenação.',
  refs: ['NR-1', 'NR-9'] },

/* ================= 1.8 Vigilância em saúde do trabalhador ============== */
{ id: 'q-1.8-030', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A vigilância de um município identifica, pelo cruzamento de bases, concentração de afastamentos por transtornos mentais em trabalhadores de um mesmo ramo de atividade. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'O achado justifica investigação de campo nos estabelecimentos do ramo, com análise da organização do trabalho, e caracteriza uso adequado da vigilância epidemiológica como disparador de ação sobre ambientes e processos.', ok: true,
      why: 'Correta. É exatamente o ciclo esperado: o dado aponta onde olhar e a inspeção descobre o determinante para intervir.' },
    { t: 'Dados de afastamento não servem para orientar ações de vigilância em saúde do trabalhador.', ok: false,
      why: 'Errada. São uma das principais fontes para identificar padrões e priorizar territórios e ramos.' },
    { t: 'A investigação deve limitar-se a orientar individualmente os trabalhadores afastados.', ok: false,
      why: 'Errada. Orientar indivíduos não altera o determinante comum que produziu o padrão.' },
    { t: 'Transtornos mentais não são objeto da vigilância em saúde do trabalhador.', ok: false,
      why: 'Errada. Estão entre os agravos relacionados ao trabalho sob vigilância.' },
    { t: 'A vigilância só pode agir mediante denúncia formal de trabalhador ou sindicato.', ok: false,
      why: 'Errada. A atuação pode ser disparada por dado epidemiológico, independentemente de denúncia.' }
  ],
  comentario: 'Vigilância é dado somado a campo. Concentração de afastamentos em um ramo é sinal para investigar a organização do trabalho nos estabelecimentos — não para orientar um a um os afastados.',
  pegadinha: 'Condicionar a ação à denúncia formal restringe a vigilância a um papel reativo que ela não tem.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.8-031', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a interface entre vigilância em saúde do trabalhador e vigilância ambiental, é CORRETO afirmar:',
  alts: [
    { t: 'Os riscos gerados por um processo produtivo podem atingir tanto os trabalhadores quanto a população do entorno, o que justifica atuação articulada — e a exposição da comunidade frequentemente é o sinal que revela a magnitude da exposição interna.', ok: true,
      why: 'Correta. Contaminação ambiental e exposição ocupacional compartilham a fonte, e a articulação amplia a capacidade de intervenção.' },
    { t: 'Riscos ocupacionais e ambientais são fenômenos independentes, sem interface.', ok: false,
      why: 'Errada. A fonte costuma ser a mesma e as exposições se comunicam.' },
    { t: 'A vigilância em saúde do trabalhador não pode considerar dados de contaminação ambiental.', ok: false,
      why: 'Errada. Esses dados são insumo relevante para caracterizar a exposição.' },
    { t: 'A exposição paraocupacional de familiares não é objeto de nenhuma das duas vigilâncias.', ok: false,
      why: 'Errada. A exposição de familiares por contaminação levada do trabalho é objeto reconhecido de atenção.' },
    { t: 'A articulação entre as vigilâncias depende de autorização judicial.', ok: false,
      why: 'Errada. Trata-se de articulação administrativa entre áreas do mesmo sistema.' }
  ],
  comentario: 'A mesma fonte adoece dentro e fora do muro. Articular vigilância ocupacional e ambiental amplia o alcance e frequentemente é o caminho para intervir quando a via trabalhista encontra resistência.',
  pegadinha: 'Tratar exposição paraocupacional como terra de ninguém deixa sem proteção justamente a família do trabalhador.',
  refs: ['Lei nº 8.080/1990', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ============================ 1.9 SINAN ================================ */
{ id: 'q-1.9-030', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao analisar as fichas de notificação de acidente com material biológico de um hospital, a vigilância observa alto percentual de campos "ignorado" em ocupação e em circunstância do acidente. Sobre o impacto, é CORRETO afirmar:',
  alts: [
    { t: 'O preenchimento incompleto inutiliza o registro para a análise, impedindo identificar categorias e circunstâncias de maior risco e, portanto, direcionar a intervenção — a qualidade do dado é condição para que a notificação cumpra sua finalidade.', ok: true,
      why: 'Correta. Notificar sem preencher os campos que permitem análise transforma o sistema em contagem sem utilidade preventiva.' },
    { t: 'O importante é o número total de notificações, sendo o preenchimento dos campos secundário.', ok: false,
      why: 'Errada. Volume sem qualidade não orienta ação.' },
    { t: 'Campos "ignorado" são preenchidos automaticamente pelo sistema e não dependem do notificador.', ok: false,
      why: 'Errada. Refletem falha de coleta ou de registro pelo profissional.' },
    { t: 'A ocupação é campo dispensável em notificação de agravo relacionado ao trabalho.', ok: false,
      why: 'Errada. É justamente o campo que permite relacionar o agravo ao trabalho e identificar categorias de risco.' },
    { t: 'A melhoria do preenchimento é responsabilidade exclusiva da vigilância municipal.', ok: false,
      why: 'Errada. Depende primariamente dos serviços notificadores, com apoio e capacitação da vigilância.' }
  ],
  comentario: 'Notificação mal preenchida é notificação perdida. Ocupação e circunstância são os campos que transformam um evento em informação capaz de orientar prevenção — sem eles resta apenas a contagem.',
  pegadinha: 'Focar no número total de notificações ignora que o dado precisa ser analisável para gerar ação.',
  refs: ['SINAN — Ministério da Saúde'] },

{ id: 'q-1.9-031', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o fluxo da notificação de agravos relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A notificação é feita pelo serviço que identifica o caso e alimenta a vigilância municipal, que investiga e articula a intervenção — cabendo retorno da informação aos serviços notificadores como parte do ciclo.', ok: true,
      why: 'Correta. O ciclo se fecha com o retorno da informação, que é o que sustenta o engajamento dos notificadores.' },
    { t: 'A notificação encerra a responsabilidade do serviço notificador, sem qualquer desdobramento.', ok: false,
      why: 'Errada. O serviço segue responsável pelo cuidado e pode ser acionado na investigação.' },
    { t: 'A investigação do caso notificado cabe ao próprio serviço notificador.', ok: false,
      why: 'Errada. A investigação de ambiente e processo é atribuição da vigilância, com apoio do serviço.' },
    { t: 'O retorno da informação aos notificadores é etapa dispensável.', ok: false,
      why: 'Errada. Sem retorno, o notificador percebe a notificação como burocracia e a adesão cai.' },
    { t: 'Casos atendidos na rede privada seguem fluxo separado e não integram a vigilância municipal.', ok: false,
      why: 'Errada. Público e privado alimentam o mesmo sistema de vigilância.' }
  ],
  comentario: 'O ciclo: identificar → notificar → investigar → intervir → devolver a informação. A última etapa é a mais esquecida e a que mais afeta a adesão de quem notifica.',
  pegadinha: 'Atribuir a investigação ao serviço notificador confunde assistência com vigilância.',
  refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ==================== 6.2 Inclusão da pessoa com deficiência =========== */
{ id: 'q-6.2-030', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pretende demitir trabalhador com deficiência contratado na cota, alegando reestruturação. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A dispensa de trabalhador com deficiência contratado ao final de contrato por prazo determinado superior a noventa dias, ou a dispensa imotivada em contrato por prazo indeterminado, só pode ocorrer após a contratação de substituto em condição semelhante.', ok: true,
      why: 'Correta. A garantia protege a manutenção do percentual da cota e condiciona a dispensa à substituição por outro trabalhador em condição semelhante.' },
    { t: 'Trabalhadores com deficiência possuem estabilidade absoluta, não podendo ser dispensados em nenhuma hipótese.', ok: false,
      why: 'Errada. Não há estabilidade absoluta; há condicionamento da dispensa à contratação de substituto.' },
    { t: 'A dispensa é livre, pois a cota se refere ao número de vagas e não a pessoas específicas.', ok: false,
      why: 'Errada. A norma condiciona expressamente a dispensa à substituição.' },
    { t: 'A garantia só se aplica se o trabalhador tiver sido admitido especificamente para a vaga da cota.', ok: false,
      why: 'Errada. A proteção alcança o trabalhador com deficiência, independentemente do rótulo dado à vaga na admissão.' },
    { t: 'Reestruturação empresarial afasta automaticamente qualquer condicionamento à dispensa.', ok: false,
      why: 'Errada. A necessidade de substituição permanece.' }
  ],
  comentario: 'A proteção não é estabilidade absoluta: é condicionamento da dispensa à contratação de substituto em condição semelhante, para que o percentual da cota não caia. É o ponto mais cobrado do tema no plano jurídico.',
  pegadinha: 'Os dois extremos aparecem: "estabilidade absoluta" e "dispensa livre". A resposta é o condicionamento.',
  refs: ['Lei nº 8.213/1991 — art. 93', 'Lei nº 13.146/2015'] },

{ id: 'q-6.2-031', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador com deficiência intelectual leve é admitido para função operacional. O gestor solicita ao médico do trabalho orientação sobre acompanhamento. A conduta CORRETA é:',
  alts: [
    { t: 'Avaliar as exigências reais da função e as competências do trabalhador, definir apoios necessários — instruções simplificadas, treinamento adaptado, tutoria inicial — e acompanhar a eficácia dessas adaptações, tratando-as como condições de trabalho e não como concessão.', ok: true,
      why: 'Correta. Adaptação razoável em deficiência intelectual costuma ser de método e comunicação, não de estrutura física, e integra as condições de trabalho.' },
    { t: 'Recomendar que o trabalhador seja mantido sempre nas tarefas mais simples, sem possibilidade de progressão.', ok: false,
      why: 'Errada. Limitar preventivamente a progressão é discriminação; a avaliação é individualizada e revisável.' },
    { t: 'Solicitar avaliação psicológica periódica para "monitorar o comportamento" do trabalhador.', ok: false,
      why: 'Errada. Monitoramento sem indicação de risco é vigilância indevida sobre trabalhador com deficiência.' },
    { t: 'Considerar que deficiência intelectual implica incapacidade laborativa parcial.', ok: false,
      why: 'Errada. Deficiência não equivale a incapacidade; a maioria desempenha plenamente com os apoios adequados.' },
    { t: 'Informar o diagnóstico ao gestor para que ele calibre as cobranças.', ok: false,
      why: 'Errada. Ao gestor cabem as necessidades de apoio e as restrições, não o diagnóstico.' }
  ],
  comentario: 'Em deficiência intelectual, a adaptação razoável costuma ser de comunicação e método: instrução simplificada, demonstração, tutoria, tempo de aprendizagem. É condição de trabalho, não favor — e o diagnóstico continua protegido.',
  pegadinha: 'Limitar de antemão a progressão do trabalhador é discriminação disfarçada de proteção.',
  refs: ['Lei nº 13.146/2015', 'ANAMT — A inclusão de pessoas com deficiência'] },

/* ============ 6.3 Clínica aplicada à aptidão e rastreamento ============ */
{ id: 'q-6.3-030', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 50 anos, operador de caldeira, apresenta no exame periódico pressão arterial elevada em duas aferições, assintomático, sem diagnóstico prévio. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Cabe confirmar o diagnóstico conforme critérios estabelecidos, orientar e encaminhar para acompanhamento, avaliando a repercussão sobre a segurança da função — sem que a hipertensão, por si, gere inaptidão em atividade dessa natureza.', ok: true,
      why: 'Correta. Hipertensão controlada e sem lesão de órgão-alvo limitante não impede a atividade; o que se avalia é a repercussão funcional e o risco concreto.' },
    { t: 'A hipertensão arterial contraindica de forma absoluta atividades de operação de equipamentos.', ok: false,
      why: 'Errada. A decisão é individualizada e considera controle, comorbidades e repercussão.' },
    { t: 'O achado no exame ocupacional não deve ser comunicado ao trabalhador, por não se relacionar ao trabalho.', ok: false,
      why: 'Errada. O trabalhador é o paciente e tem direito de conhecer achados relevantes para sua saúde.' },
    { t: 'O médico do trabalho deve iniciar o tratamento anti-hipertensivo e acompanhar longitudinalmente o caso.', ok: false,
      why: 'Errada. A conduta é orientar e encaminhar; assumir o tratamento confunde papéis e fragmenta o cuidado.' },
    { t: 'O achado deve ser comunicado ao gestor para adequação das tarefas.', ok: false,
      why: 'Errada. Ao gestor cabem aptidão e restrições, não o achado clínico.' }
  ],
  comentario: 'Achado incidental no periódico: informar o trabalhador, orientar, encaminhar e avaliar repercussão sobre a segurança da função. Não tratar, não contar à empresa, não declarar inaptidão sem fundamento.',
  pegadinha: 'A inaptidão automática por hipertensão é desproporcional e a omissão do achado ao trabalhador é falta ética.',
  refs: ['Diretriz Brasileira de Hipertensão Arterial', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-6.3-031', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe incluir teste ergométrico anual para todos os trabalhadores acima de 40 anos, "para prevenir morte súbita no trabalho". Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'Rastreamento com teste ergométrico em população assintomática e de baixo risco não tem benefício demonstrado e gera falsos-positivos com investigações invasivas, sendo exemplo de dano por excesso de intervenção — a indicação deve ser individualizada e por risco.', ok: true,
      why: 'Correta. Em baixa prevalência de doença o valor preditivo positivo despenca, e a cascata diagnóstica produz mais dano que benefício.' },
    { t: 'Quanto mais exames cardiológicos, maior a prevenção de eventos, sem inconvenientes.', ok: false,
      why: 'Errada. Ignora falsos-positivos, ansiedade, custo e risco dos procedimentos subsequentes.' },
    { t: 'A idade acima de 40 anos é, por si, indicação suficiente para rastreamento cardiológico anual.', ok: false,
      why: 'Errada. A indicação depende do perfil de risco individual e das exigências da função.' },
    { t: 'A prevenção quaternária não se aplica a exames cardiológicos.', ok: false,
      why: 'Errada. Aplica-se a qualquer intervenção sem indicação, e o rastreamento cardiológico é exemplo frequente.' },
    { t: 'Avaliação cardiológica dirigida nunca tem lugar em medicina do trabalho.', ok: false,
      why: 'Errada. Há funções de risco em que a avaliação dirigida é justificada — o que não se justifica é o rastreamento universal por idade.' }
  ],
  comentario: 'A pergunta não é "esse exame é bom?", e sim "esse exame, nesta população, muda desfecho?". Em assintomáticos de baixo risco, o teste gera cascata diagnóstica sem ganho. Indicação por risco e por exigência da função, sempre.',
  pegadinha: 'O apelo de "prevenir morte súbita" é emocionalmente forte e tecnicamente insuficiente para justificar rastreamento universal.',
  refs: ['Ferreira Junior — Rastreamento de doenças', 'Dantas — Trabalho e Coração Saudáveis'] },

/* ============================== 7.8 LGPD =============================== */
{ id: 'q-7.8-030', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contrata plataforma digital para gestão dos exames ocupacionais, com armazenamento em nuvem por fornecedor terceiro. Sobre o tratamento de dados, é CORRETO afirmar:',
  alts: [
    { t: 'A empresa permanece responsável pelas escolhas de tratamento, devendo assegurar contratualmente e tecnicamente a proteção dos dados sensíveis, a restrição de acesso e a segregação entre a informação clínica e a informação administrativa de aptidão.', ok: true,
      why: 'Correta. Contratar fornecedor não transfere a responsabilidade, e a segregação de acesso é o controle que operacionaliza o sigilo no ambiente digital.' },
    { t: 'A contratação de fornecedor especializado transfere integralmente a responsabilidade pelo tratamento.', ok: false,
      why: 'Errada. Controlador e operador têm responsabilidades próprias e o controlador não se exime.' },
    { t: 'Dados de saúde armazenados em nuvem deixam de ser considerados sensíveis.', ok: false,
      why: 'Errada. O meio de armazenamento não altera a natureza do dado.' },
    { t: 'O acesso do setor de pessoal ao conteúdo clínico é aceitável desde que o sistema registre os acessos.', ok: false,
      why: 'Errada. Registro de acesso é controle complementar; não legitima acesso indevido ao conteúdo clínico.' },
    { t: 'Uma vez digitalizados, os dados podem ser mantidos indefinidamente sem critério.', ok: false,
      why: 'Errada. Há prazos de guarda a observar e o princípio da necessidade também alcança a retenção.' }
  ],
  comentario: 'No ambiente digital o sigilo se implementa por arquitetura: perfis de acesso segregados, campo clínico separado do campo de aptidão, registro de acessos e contrato com o operador. E a responsabilidade do controlador não se terceiriza.',
  pegadinha: 'Achar que o log de acesso legitima o acesso confunde rastreabilidade com autorização.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-7.8-031', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os direitos do trabalhador como titular de dados no contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Ele tem direito de acessar os próprios dados, obter informação sobre com quem foram compartilhados e solicitar correção de dados incompletos ou desatualizados — direitos que convivem com o direito de acesso ao próprio prontuário.', ok: true,
      why: 'Correta. Acesso, informação sobre compartilhamento e correção são direitos do titular, e reforçam o direito do paciente ao próprio prontuário.' },
    { t: 'O trabalhador não pode acessar os próprios dados de saúde mantidos pelo serviço ocupacional.', ok: false,
      why: 'Errada. O acesso aos próprios dados é direito do titular e do paciente.' },
    { t: 'O trabalhador pode exigir a exclusão de todos os seus dados a qualquer tempo, sem exceção.', ok: false,
      why: 'Errada. Há hipóteses de conservação por obrigação legal, como os prazos de guarda dos registros ocupacionais.' },
    { t: 'O direito de acesso depende de autorização do empregador.', ok: false,
      why: 'Errada. O titular é o trabalhador; o empregador não intermedeia esse direito.' },
    { t: 'A correção de dados só é possível mediante decisão judicial.', ok: false,
      why: 'Errada. A solicitação é administrativa e direta ao controlador.' }
  ],
  comentario: 'Direitos do titular: acessar, saber com quem se compartilhou, corrigir. E um limite importante: a exclusão não é irrestrita — prazos legais de guarda dos registros ocupacionais prevalecem, e isso protege também o trabalhador em nexo futuro.',
  pegadinha: 'A alternativa da exclusão irrestrita parece favorável ao trabalhador e o prejudicaria em eventual reconhecimento de doença de latência longa.',
  refs: ['LGPD — Lei nº 13.709/2018', 'NR-7', 'Código de Ética Médica'] }

);
