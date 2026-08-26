/* Seção 1 — temas que estavam sem questão nenhuma (1.4, 1.5, 1.6, 1.7, 1.10)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ================== 1.4 Gestão em Saúde do Trabalhador ================== */
{ id: 'q-1.4-010', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A diretoria de uma indústria cobra do serviço médico a redução do absenteísmo, que subiu no último ano. O médico coordenador é convidado a apresentar um plano. A abordagem tecnicamente CORRETA é:',
  alts: [
    { t: 'Analisar o absenteísmo por causa, por setor e por duração antes de propor qualquer medida', ok: true,
      why: 'Correta. Adoecimento ocupacional, doença comum e desmotivação exigem intervenções distintas.' },
    { t: 'Endurecer a aceitação de atestados, exigindo perícia interna para qualquer afastamento solicitado.', ok: false,
      why: 'Errada. Aumenta o presenteísmo sem resolver a causa dos afastamentos.' },
    { t: 'Instituir premiação por assiduidade, medida de maior efetividade demonstrada nesse tipo de problema.', ok: false,
      why: 'Errada. Induz subnotificação e presenteísmo.' },
    { t: 'Concentrar a análise nos trabalhadores com mais faltas, responsáveis diretos pelo indicador elevado.', ok: false,
      why: 'Errada. Individualiza um problema que pode ser do setor ou do processo.' },
    { t: 'Adotar como meta a redução percentual do índice, seja qual for a composição das causas apuradas.', ok: false,
      why: 'Errada. Meta sobre indicador não compreendido gera manipulação do número.' }
  ],
  comentario: 'Absenteísmo é ponto de partida, não diagnóstico. Estratifique por causa (relacionada ao trabalho, doença comum, saúde mental), por setor, por duração e por recorrência. Só então a intervenção faz sentido. E cuidado com o efeito espelho: reduzir absenteísmo pode significar aumentar presenteísmo.',
  pegadinha: 'Todas as alternativas erradas "funcionam" para baixar o número. A questão cobra se você percebe que baixar o número não é o objetivo.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'Teixeira — Gestão da Saúde no Trabalho'] },

{ id: 'q-1.4-011', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre indicadores em saúde e segurança do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Os reativos medem o ocorrido; os proativos medem ações preventivas, e o programa acompanha ambos.', ok: true,
      why: 'Correta. Só reativos significa aprender apenas depois do dano.' },
    { t: 'A ausência de acidentes no período demonstra, por si só, que o sistema de gestão é eficaz.', ok: false,
      why: 'Errada. Pode refletir acaso, subnotificação ou baixa exposição.' },
    { t: 'Os reativos medem o ocorrido, sendo taxa de frequência e de gravidade dimensões redundantes.', ok: false,
      why: 'Errada. Uma mede quantidade de eventos; a outra, a severidade.' },
    { t: 'Os dois tipos importam, devendo os indicadores de saúde ser mantidos em sigilo absoluto na empresa.', ok: false,
      why: 'Errada. Dados agregados devem circular para orientar a gestão.' },
    { t: 'Os dois tipos importam, sendo metas de acidente zero atreladas a bônus a forma mais confiável.', ok: false,
      why: 'Errada. Induzem subnotificação e escondem o que o sistema precisa ver.' }
  ],
  comentario: 'Duas famílias: reativos (frequência, gravidade, afastamentos) e proativos (inspeções, quase-acidentes reportados, ações corrigidas). Frequência ≠ gravidade. E indicador agregado não é dado sigiloso — o que é sigiloso é o diagnóstico individual.',
  pegadinha: 'A meta de "acidente zero" com bônus soa como o auge do compromisso com a segurança e é, na prática, um incentivo a esconder acidente.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

{ id: 'q-1.4-012', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma microempresa de dez empregados, de grau de risco baixo, questiona o médico do trabalho sobre suas obrigações de gestão em saúde ocupacional. A orientação CORRETA é:',
  alts: [
    { t: 'Há tratamento diferenciado por porte e por grau de risco, mas não dispensa das obrigações', ok: true,
      why: 'Correta. Identificar riscos e acompanhar a saúde dos expostos permanece devido.' },
    { t: 'As microempresas estão integralmente dispensadas de programa médico e de gerenciamento de riscos.', ok: false,
      why: 'Errada. Há simplificação, não dispensa integral.' },
    { t: 'A obrigação nasce a partir de certo número de empregados, seja qual for o grau de risco da atividade.', ok: false,
      why: 'Errada. O grau de risco compõe o critério.' },
    { t: 'Há tratamento diferenciado, transferindo a contratação de serviço externo a responsabilidade da empresa.', ok: false,
      why: 'Errada. A responsabilidade permanece com o empregador.' },
    { t: 'Há tratamento diferenciado, dispensando o grau de risco baixo a avaliação ergonômica e psicossocial.', ok: false,
      why: 'Errada. São justamente os riscos predominantes no administrativo.' }
  ],
  comentario: 'Porte pequeno e risco baixo geram simplificação, nunca isenção. E dois riscos costumam ser esquecidos justamente nas empresas de grau de risco baixo: o ergonômico e o psicossocial, que independem da classificação econômica.',
  pegadinha: 'A ideia de que contratar serviço externo "transfere a responsabilidade" é crença comum entre empregadores e sempre falsa.',
  refs: ['NR-1', 'NR-7', 'Teixeira — Gestão da Saúde no Trabalho: PCMSO da microempresa à indústria 5.0'] },

{ id: 'q-1.4-013', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao apresentar o relatório anual do programa de controle médico, o coordenador é questionado sobre o valor gerencial do documento. Sobre esse relatório, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve analisar os agravos e a evolução dos indicadores, apontando mudanças nas medidas de controle', ok: true,
      why: 'Correta. É instrumento de gestão que realimenta o gerenciamento de riscos.' },
    { t: 'Serve para comprovar à fiscalização que os exames previstos foram realizados no período avaliado.', ok: false,
      why: 'Errada. É documento de análise, não de prestação de contas.' },
    { t: 'Deve analisar os agravos e conter os diagnósticos individuais nominais para a análise gerencial.', ok: false,
      why: 'Errada. É consolidado, sem identificação individual.' },
    { t: 'Deve analisar os agravos, sendo facultativo quando não houve caso de doença ocupacional no período.', ok: false,
      why: 'Errada. A ausência de casos também é resultado a analisar.' },
    { t: 'Deve analisar os agravos, cabendo sua elaboração ao setor de pessoal, por ser documento administrativo.', ok: false,
      why: 'Errada. É de responsabilidade técnica do médico coordenador.' }
  ],
  comentario: 'O relatório analítico é o elo entre o que a saúde detecta e o que o gerenciamento de riscos precisa corrigir. Sempre agregado, sempre sob responsabilidade médica, e sempre com conclusão sobre a necessidade de mudar as medidas de controle.',
  pegadinha: 'A alternativa que pede diagnósticos nominais "para a gestão" é a armadilha ética do tema — dado agregado sim, identificação nominal nunca.',
  refs: ['NR-7', 'Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

{ id: 'q-1.4-014', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a distinção entre absenteísmo e presenteísmo na gestão em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É a presença em condições que reduzem o desempenho, e cresce quando se restringe o afastamento.', ok: true,
      why: 'Correta. Por isso os dois indicadores devem ser lidos em conjunto.' },
    { t: 'É sinônimo de assiduidade do trabalhador e representa desfecho desejável para a gestão da empresa.', ok: false,
      why: 'Errada. Representa adoecimento não resolvido e desempenho comprometido.' },
    { t: 'É a presença com desempenho reduzido, de impacto econômico desprezível frente ao absenteísmo.', ok: false,
      why: 'Errada. Pode superar o absenteísmo em custo total.' },
    { t: 'É a presença com desempenho reduzido, mensurável diretamente pelos registros de ponto da empresa.', ok: false,
      why: 'Errada. O ponto registra presença física, não desempenho.' },
    { t: 'É a presença com desempenho reduzido, atribuível exclusivamente a características individuais.', ok: false,
      why: 'Errada. A política de gestão de afastamentos o influencia diretamente.' }
  ],
  comentario: 'Absenteísmo é a ausência visível; presenteísmo é o custo invisível. Políticas que só perseguem o primeiro tendem a inflar o segundo. Nenhum dos dois é atributo individual do trabalhador — ambos respondem à organização do trabalho.',
  pegadinha: 'Tratar presenteísmo como coisa boa, por soar como "estar presente", é o erro que a questão persegue.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

/* ============ 1.5 Sistemas de Gestão em Segurança e Saúde ============== */
{ id: 'q-1.5-010', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa implanta um sistema de gestão de segurança e saúde no trabalho. Sobre a estrutura desses sistemas, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Organizam-se em ciclo de planejar, executar, verificar e agir, com política, avaliação e melhoria', ok: true,
      why: 'Correta. Dependem do comprometimento da direção e da participação dos trabalhadores.' },
    { t: 'São conjuntos de procedimentos documentados, medindo-se a eficácia pelo volume de registros gerados.', ok: false,
      why: 'Errada. A eficácia se mede pelo desempenho, não pelo volume documental.' },
    { t: 'Organizam-se em ciclo, sendo a participação dos trabalhadores desejável, mas não estruturante.', ok: false,
      why: 'Errada. É elemento estruturante do sistema.' },
    { t: 'Organizam-se em ciclo, garantindo a certificação por norma internacional ambiente de trabalho seguro.', ok: false,
      why: 'Errada. Certifica o sistema descrito, não a prática.' },
    { t: 'Organizam-se em ciclo, recaindo a condução sobre o serviço especializado, sem a alta direção.', ok: false,
      why: 'Errada. O comprometimento da direção é condição do sistema.' }
  ],
  comentario: 'Guarde os elementos: política, organização, planejamento e implementação, avaliação, e ação para melhoria — tudo dentro do ciclo de melhoria contínua. Dois requisitos não negociáveis: liderança da alta direção e participação dos trabalhadores.',
  pegadinha: 'A alternativa da certificação é sedutora porque certificação é real e verificável — mas conformidade documental e segurança efetiva são coisas diferentes.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho', 'ISO 45001'] },

{ id: 'q-1.5-011', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após um acidente grave, a investigação da empresa conclui que a causa foi "ato inseguro do trabalhador, que não usou o equipamento de proteção". Sobre essa conclusão, no contexto de um sistema de gestão, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É insuficiente: encerra a análise no comportamento sem investigar por que o equipamento faltou.', ok: true,
      why: 'Correta. Disponibilidade, adequação, treinamento, pressão e supervisão são falhas do sistema.' },
    { t: 'É adequada, pois o uso do equipamento de proteção fornecido é obrigação do próprio empregado.', ok: false,
      why: 'Errada. Cabe investigar por que a proteção não foi usada.' },
    { t: 'É insuficiente, e a investigação deveria aguardar o processo trabalhista para não prejudicar a defesa.', ok: false,
      why: 'Errada. A investigação técnica é imediata e independente.' },
    { t: 'É insuficiente, embora acidentes de causa comportamental não gerem obrigação de medida corretiva.', ok: false,
      why: 'Errada. Toda investigação deve gerar ação corretiva proporcional.' },
    { t: 'É insuficiente, devendo a análise buscar sempre um único responsável, para permitir responsabilização.', ok: false,
      why: 'Errada. O acidente resulta de múltiplas falhas de barreira.' }
  ],
  comentario: 'Investigação madura procura causas sistêmicas, não culpados. "Ato inseguro" é onde a análise começa, jamais onde termina: pergunte por que o comportamento inseguro era possível, tolerado ou necessário para dar conta da tarefa.',
  pegadinha: 'A busca de "um único responsável" soa como rigor gerencial e é o que mais destrói a qualidade da informação sobre acidentes.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho', 'NR-1'] },

{ id: 'q-1.5-012', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre cultura de segurança nas organizações, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Uma cultura de segurança madura se reconhece pelo baixo número de relatos de quase-acidentes', ok: true,
      why: 'É a INCORRETA. Cultura madura aumenta os relatos, porque eles não geram punição.' },
    { t: 'A confiança de que o relato não gerará punição é condição para que a informação flua na empresa.', ok: false,
      why: 'Correta, portanto não é a resposta. Punição seca o fluxo de informação.' },
    { t: 'O comportamento observável da liderança tem mais efeito sobre a cultura que os documentos de política.', ok: false,
      why: 'Correta, portanto não é a resposta. A decisão concreta ensina mais que o cartaz.' },
    { t: 'Cultura de segurança e sistema de gestão se reforçam mutuamente, mas não são a mesma coisa.', ok: false,
      why: 'Correta, portanto não é a resposta. São dimensões distintas e complementares.' },
    { t: 'Programas centrados apenas em mudança de comportamento individual tendem a produzir efeito limitado.', ok: false,
      why: 'Correta, portanto não é a resposta. Sem tocar as condições, o efeito não se sustenta.' }
  ],
  comentario: 'Contraintuitivo e muito cobrado: aumento no número de relatos de quase-acidentes é sinal de amadurecimento, não de piora. O que se espera cair são as consequências — acidentes com lesão —, não os relatos.',
  pegadinha: 'A falsa usa a leitura intuitiva de que "menos relato = menos problema", que é exatamente o oposto do esperado.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho'] },

/* =========== 1.6 Políticas Públicas de Saúde do Trabalhador ============ */
{ id: 'q-1.6-010', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um município estrutura sua atenção à saúde dos trabalhadores. Sobre a Política Nacional de Saúde do Trabalhador e da Trabalhadora, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Alcança todos os trabalhadores, urbanos e rurais, com ou sem qualquer vínculo formal', ok: true,
      why: 'Correta. Tem a vigilância em saúde e a atenção integral como eixos.' },
    { t: 'Aplica-se aos trabalhadores com vínculo formal, cobertos pelo seguro de acidentes do trabalho.', ok: false,
      why: 'Errada. O princípio é a universalidade, independentemente do vínculo.' },
    { t: 'Alcança todos os trabalhadores, cabendo sua execução exclusivamente ao órgão do trabalho.', ok: false,
      why: 'Errada. É política do sistema de saúde, com execução descentralizada.' },
    { t: 'Alcança todos os trabalhadores, restringindo-se à assistência curativa aos que sofrem acidentes.', ok: false,
      why: 'Errada. Integra assistência, vigilância e promoção.' },
    { t: 'Alcança os trabalhadores da iniciativa privada, excluindo expressamente os do serviço público.', ok: false,
      why: 'Errada. Alcança também os servidores públicos.' }
  ],
  comentario: 'O traço que a banca cobra é a universalidade: a política alcança todo trabalhador, independentemente da forma de inserção. Eixos: promoção, vigilância dos ambientes e processos, assistência integral e reabilitação, com atuação intersetorial.',
  pegadinha: 'Restringir a política ao trabalhador formal confunde o alcance da POLÍTICA DE SAÚDE com o alcance da COBERTURA PREVIDENCIÁRIA.',
  refs: ['Portaria nº 1.823/2012 — Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

{ id: 'q-1.6-011', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a Rede Nacional de Atenção Integral à Saúde do Trabalhador e os centros de referência em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Têm papel de suporte técnico, matriciamento e apoio à vigilância, sem substituir a rede assistencial', ok: true,
      why: 'Correta. Não são porta de entrada substitutiva da atenção ao trabalhador.' },
    { t: 'São unidades de pronto atendimento exclusivas para os trabalhadores vítimas de acidente do trabalho.', ok: false,
      why: 'Errada. Não são unidades de urgência.' },
    { t: 'Substituem a atenção primária no cuidado ao trabalhador, que deve ser encaminhado direto a eles.', ok: false,
      why: 'Errada. São retaguarda técnica, não porta de entrada.' },
    { t: 'Têm papel de suporte técnico, restrito a empresas acima de determinado número de empregados.', ok: false,
      why: 'Errada. Sua atuação é territorial e não depende do porte da empresa.' },
    { t: 'Têm papel de suporte, não participando da investigação de acidentes de trabalho graves e fatais.', ok: false,
      why: 'Errada. A investigação desses eventos é uma de suas funções.' }
  ],
  comentario: 'Centro de referência é retaguarda, não porta de entrada: matricia a rede, apoia a vigilância, investiga acidentes graves e fatais e qualifica o reconhecimento da relação entre adoecimento e trabalho. Quem atende no dia a dia é a rede, com a atenção primária à frente.',
  pegadinha: 'Tratar o centro de referência como ambulatório de trabalhadores é o erro conceitual mais comum do tema.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.6-012', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um caso de intoxicação por agrotóxico em trabalhador rural informal chega a uma unidade básica de saúde. Sobre a atuação das políticas públicas nesse caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O caso deve ser notificado, e identificar a relação com o trabalho independe do vínculo formal', ok: true,
      why: 'Correta. É obrigação do serviço de saúde, com ou sem cobertura previdenciária.' },
    { t: 'Por ser trabalhador informal, o caso não integra o escopo da saúde do trabalhador no sistema.', ok: false,
      why: 'Errada. O campo alcança todas as formas de inserção no trabalho.' },
    { t: 'O caso deve ser notificado, sendo a notificação devida apenas se houver afastamento do trabalho.', ok: false,
      why: 'Errada. A notificação decorre do agravo identificado.' },
    { t: 'O caso deve ser tratado, esgotando-se a conduta no tratamento clínico da intoxicação apresentada.', ok: false,
      why: 'Errada. Notificação e investigação do local também são devidas.' },
    { t: 'O caso deve ser notificado, sendo vedada a investigação do local sem empregador constituído.', ok: false,
      why: 'Errada. A vigilância atua sobre o processo de trabalho, com ou sem empregador.' }
  ],
  comentario: 'Este é o caso que separa quem entendeu o campo: trabalhador informal, sem CAT possível e sem benefício previdenciário, continua sendo objeto integral da política de saúde do trabalhador — com notificação, investigação do ambiente e intervenção sobre a exposição.',
  pegadinha: 'Condicionar a notificação ao afastamento importa uma lógica previdenciária para dentro da vigilância sanitária.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'SINAN — Ministério da Saúde'] },

/* ==================== 1.7 Sistema Único de Saúde ======================= */
{ id: 'q-1.7-010', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A lei orgânica da saúde atribui expressamente ao sistema público de saúde competências em saúde do trabalhador. Entre elas está:',
  alts: [
    { t: 'Executar ações de vigilância dos ambientes e processos, avaliando riscos e agravos do trabalho.', ok: true,
      why: 'Correta. É competência expressa do sistema de saúde na lei orgânica.' },
    { t: 'Fixar os limites de tolerância para agentes químicos, em substituição à norma trabalhista vigente.', ok: false,
      why: 'Errada. Os limites são fixados na esfera do trabalho.' },
    { t: 'Conceder os benefícios por incapacidade aos trabalhadores acidentados no exercício da atividade.', ok: false,
      why: 'Errada. A concessão é da previdência social.' },
    { t: 'Homologar os programas de saúde ocupacional das empresas antes de sua implantação no ambiente.', ok: false,
      why: 'Errada. Não há homologação prévia desses programas.' },
    { t: 'Realizar com exclusividade os exames médicos ocupacionais dos trabalhadores com vínculo formal.', ok: false,
      why: 'Errada. Os exames são obrigação do empregador.' }
  ],
  comentario: 'A saúde do trabalhador é competência legal do sistema público de saúde, com destaque para a vigilância dos ambientes e processos de trabalho. Não se confunde com a competência previdenciária (benefícios) nem com a obrigação do empregador (exames e programas).',
  pegadinha: 'As alternativas erradas descrevem atribuições reais — só que de outros atores. A questão testa se você sabe quem faz o quê.',
  refs: ['Lei nº 8.080/1990'] },

{ id: 'q-1.7-011', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os princípios do sistema público de saúde aplicados à saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A equidade orienta alocar mais recursos aos grupos mais expostos e mais vulneráveis', ok: true,
      why: 'Correta. Justifica priorizar categorias com maior carga de risco ocupacional.' },
    { t: 'A universalidade significa que os contribuintes da previdência têm direito à atenção à saúde.', ok: false,
      why: 'Errada. O direito é de todos, independentemente de contribuição.' },
    { t: 'A integralidade se limita à oferta de assistência médica curativa em todos os níveis do sistema.', ok: false,
      why: 'Errada. Abrange também prevenção, vigilância e promoção.' },
    { t: 'A equidade determina que todos os trabalhadores recebam exatamente a mesma quantidade de serviços.', ok: false,
      why: 'Errada. Equidade é tratar desigualmente os desiguais conforme a necessidade.' },
    { t: 'A descentralização retira dos municípios qualquer competência em vigilância em saúde do trabalhador.', ok: false,
      why: 'Errada, é o oposto: aproxima a execução do território municipal.' }
  ],
  comentario: 'Universalidade (todos, sem contribuição prévia), integralidade (promoção a reabilitação) e equidade (mais para quem mais precisa). Em saúde do trabalhador, a equidade é o princípio que sustenta priorizar as categorias mais expostas.',
  pegadinha: 'Confundir equidade com igualdade aritmética é o erro clássico. Equidade admite desigualdade de tratamento em favor de quem tem mais necessidade.',
  refs: ['Lei nº 8.080/1990'] },

{ id: 'q-1.7-012', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma equipe de saúde da família atende repetidos casos de dorsalgia em moradores que trabalham em uma mesma cerâmica do território. Sobre o papel da atenção primária, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A repetição de casos com a mesma inserção ocupacional deve disparar a suspeita e a vigilância', ok: true,
      why: 'Correta. Além do cuidado individual, o caso vira ação coletiva.' },
    { t: 'A atenção primária deve tratar os sintomas, deixando a discussão de nexo à perícia previdenciária.', ok: false,
      why: 'Errada. Suspeitar e notificar é atribuição de qualquer serviço de saúde.' },
    { t: 'A ocupação não integra a anamnese na atenção primária, por ser dado de interesse trabalhista.', ok: false,
      why: 'Errada. É dado clínico que orienta a suspeita diagnóstica.' },
    { t: 'A repetição chama atenção, mas dorsalgias são inespecíficas e nunca configuram agravo do trabalho.', ok: false,
      why: 'Errada. Integram os agravos relacionados ao trabalho reconhecidos.' },
    { t: 'A repetição deve disparar suspeita, sendo a notificação atribuição exclusiva de serviços especializados.', ok: false,
      why: 'Errada. É obrigação de todo serviço que identifica o caso.' }
  ],
  comentario: 'O ganho de olhar a ocupação na atenção primária é epidemiológico: casos isolados viram um padrão quando se pergunta onde a pessoa trabalha. Daí saem notificação, acionamento da vigilância e intervenção sobre a fonte.',
  pegadinha: 'Delegar todo o raciocínio de nexo à perícia previdenciária é a prática mais comum e a principal causa de subnotificação.',
  refs: ['Lei nº 8.080/1990', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ======================== 1.10 Promoção da Saúde ======================== */
{ id: 'q-1.10-010', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa lança um programa de qualidade de vida com aulas de ginástica laboral, palestras sobre alimentação e desafio de passos, mantendo inalterados o ritmo de produção e as metas. O médico do trabalho é consultado. A avaliação CORRETA é:',
  alts: [
    { t: 'A promoção tem valor, mas não substitui a intervenção sobre os determinantes do adoecimento no trabalho', ok: true,
      why: 'Correta. Mantidos ritmo e metas, transfere-se ao trabalhador a responsabilidade.' },
    { t: 'O programa é suficiente, pois atua sobre os principais fatores de risco, que são comportamentais.', ok: false,
      why: 'Errada. Ritmo, metas e organização do trabalho pesam mais.' },
    { t: 'A promoção tem valor, sendo a ginástica laboral isoladamente suficiente contra os osteomusculares.', ok: false,
      why: 'Errada. Não corrige posto, ritmo nem repetitividade.' },
    { t: 'A promoção não deve ser adotada por empresas, por ser atribuição exclusiva do sistema público.', ok: false,
      why: 'Errada. O ambiente de trabalho é espaço favorável a essas ações.' },
    { t: 'A promoção tem valor, podendo a adesão ser obrigatória e vinculada à avaliação de desempenho.', ok: false,
      why: 'Errada. Vincular a desempenho converte promoção em coação.' }
  ],
  comentario: 'Promoção da saúde no trabalho é legítima e desejável — desde que não substitua o controle dos riscos. O modelo de referência da OMS combina ambiente físico, ambiente psicossocial, recursos de saúde pessoal e envolvimento com a comunidade. Programa que só mexe no comportamento individual é a metade fácil do problema.',
  pegadinha: 'A alternativa que trata os fatores de risco como "principalmente comportamentais" é a tese que sustenta o wellness sem prevenção.',
  refs: ['OMS — Ambientes de trabalho saudáveis', 'Política Nacional de Promoção da Saúde'] },

{ id: 'q-1.10-011', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe incluir na bateria periódica um painel amplo de exames laboratoriais e de imagem "para detectar tudo precocemente" em todos os trabalhadores. Sobre os níveis de prevenção, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Desconsidera a prevenção quaternária, que é evitar o dano causado pelo excesso de intervenção', ok: true,
      why: 'Correta. Exames sem indicação geram achados incidentais e investigações desnecessárias.' },
    { t: 'Trata-se de prevenção primária, pois a ampliação da bateria evita o aparecimento das doenças.', ok: false,
      why: 'Errada. Exame detecta; não evita o aparecimento.' },
    { t: 'Desconsidera o custo, mas quanto mais exames maior a prevenção, sendo a detecção sempre benéfica.', ok: false,
      why: 'Errada. Detecção sem indicação produz dano próprio.' },
    { t: 'Desconsidera a prevenção terciária, que é sinônimo de rastreamento populacional de doenças.', ok: false,
      why: 'Errada. Terciária é reduzir sequelas em doença já instalada.' },
    { t: 'Desconsidera a quaternária, aplicável apenas à assistência hospitalar, e não à medicina ocupacional.', ok: false,
      why: 'Errada. Aplica-se plenamente à saúde ocupacional.' }
  ],
  comentario: 'Primária: evitar que a doença apareça (controlar a exposição, vacinar). Secundária: detectar cedo (rastreamento). Terciária: reduzir sequelas (reabilitação). Quaternária: proteger o paciente do excesso de medicina. No exame ocupacional, o exame sem indicação de risco é o exemplo perfeito de dano quaternário.',
  pegadinha: 'O apelo de "detectar tudo precocemente" é intuitivo e clinicamente insustentável em população assintomática.',
  refs: ['Ferreira Junior — Rastreamento de doenças: inovando o check-up', 'NR-7'] },

{ id: 'q-1.10-012', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre programas de prevenção do uso de álcool e outras drogas no ambiente de trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Devem ter caráter educativo e de cuidado, com sigilo e com encaminhamento ao tratamento', ok: true,
      why: 'Correta. Abordagem punitiva afasta o trabalhador da ajuda de que precisa.' },
    { t: 'Devem basear-se em testagem toxicológica generalizada e sem indicação de todos os empregados.', ok: false,
      why: 'Errada. Exige finalidade legítima ligada à segurança da atividade.' },
    { t: 'Devem ser educativos, levando o resultado positivo à demissão imediata, como medida de segurança.', ok: false,
      why: 'Errada. A dependência é condição de saúde e exige encaminhamento.' },
    { t: 'Devem ter caráter de cuidado, com o diagnóstico comunicado ao gestor para adequar as tarefas.', ok: false,
      why: 'Errada. Comunica-se restrição funcional, não diagnóstico.' },
    { t: 'Devem ter caráter de cuidado, podendo a adesão ao tratamento condicionar a manutenção do emprego.', ok: false,
      why: 'Errada. Condicionar o emprego converte cuidado em coação.' }
  ],
  comentario: 'A linha divisória é clara: o programa cuida, a empresa gerencia risco. À empresa cabem aptidão e restrição; ao serviço médico, o diagnóstico, o sigilo e o encaminhamento. Punição isolada empurra o problema para a clandestinidade.',
  pegadinha: 'A demissão "por segurança" e a comunicação do diagnóstico ao gestor são os dois erros que aparecem juntos na prática — e as duas alternativas estão ali de propósito.',
  refs: ['Código de Ética Médica', 'Política Nacional de Promoção da Saúde'] }

);
