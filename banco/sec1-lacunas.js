/* Seção 1 — temas que estavam sem questão nenhuma (1.4, 1.5, 1.6, 1.7, 1.10)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ================== 1.4 Gestão em Saúde do Trabalhador ================== */
{ id: 'q-1.4-010', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A diretoria de uma indústria cobra do serviço médico a redução do absenteísmo, que subiu no último ano. O médico coordenador é convidado a apresentar um plano. A abordagem tecnicamente CORRETA é:',
  alts: [
    { t: 'Analisar o absenteísmo por causa, setor e duração antes de propor qualquer medida, porque afastamentos por adoecimento relacionado ao trabalho, por doença comum e por desmotivação exigem intervenções distintas.', ok: true,
      why: 'Correta. Absenteísmo é indicador agregado e sem estratificação não informa nada acionável: reduzir o número sem entender a causa leva a medidas que apenas dificultam o afastamento.' },
    { t: 'Endurecer a aceitação de atestados médicos, exigindo perícia interna para qualquer afastamento.', ok: false,
      why: 'Errada. Isso ataca o registro, não a causa; reduz o número às custas do presenteísmo e do agravamento dos quadros.' },
    { t: 'Instituir premiação por assiduidade, que é a medida de maior efetividade demonstrada.', ok: false,
      why: 'Errada. Premiar assiduidade tende a estimular a presença do trabalhador doente e a subnotificação, sem tocar nos determinantes.' },
    { t: 'Concentrar a análise nos trabalhadores com maior número de faltas, por serem os responsáveis pelo indicador.', ok: false,
      why: 'Errada. Individualizar um indicador coletivo desloca o problema para o trabalhador e ignora fatores de posto, setor e organização do trabalho.' },
    { t: 'Adotar como meta a redução percentual do índice, independentemente da composição das causas.', ok: false,
      why: 'Errada. Meta sobre indicador agregado sem olhar a composição induz exatamente as distorções descritas nas demais alternativas.' }
  ],
  comentario: 'Absenteísmo é ponto de partida, não diagnóstico. Estratifique por causa (relacionada ao trabalho, doença comum, saúde mental), por setor, por duração e por recorrência. Só então a intervenção faz sentido. E cuidado com o efeito espelho: reduzir absenteísmo pode significar aumentar presenteísmo.',
  pegadinha: 'Todas as alternativas erradas "funcionam" para baixar o número. A questão cobra se você percebe que baixar o número não é o objetivo.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'Teixeira — Gestão da Saúde no Trabalho'] },

{ id: 'q-1.4-011', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre indicadores em saúde e segurança do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Indicadores reativos medem o que já aconteceu, como acidentes e afastamentos, enquanto indicadores proativos medem ações preventivas, como inspeções realizadas e desvios corrigidos — e um bom programa acompanha os dois.', ok: true,
      why: 'Correta. Indicadores reativos chegam tarde por definição; os proativos permitem agir antes do evento. Programas maduros combinam as duas famílias.' },
    { t: 'A ausência de acidentes em um período demonstra, por si só, que o sistema de gestão é eficaz.', ok: false,
      why: 'Errada. Ausência de evento pode refletir subnotificação, acaso ou baixa exposição no período; é dos indicadores mais enganosos quando usado isolado.' },
    { t: 'Taxa de frequência e taxa de gravidade medem a mesma dimensão, sendo redundantes.', ok: false,
      why: 'Errada. Frequência mede quantos acidentes ocorrem em relação às horas trabalhadas; gravidade mede a repercussão, em dias perdidos ou debitados. Muitos acidentes leves e poucos graves produzem perfis distintos.' },
    { t: 'Indicadores de saúde ocupacional devem ser mantidos em sigilo absoluto, sem divulgação interna.', ok: false,
      why: 'Errada. O sigilo protege o dado clínico individual, não o indicador agregado, cuja divulgação é parte da gestão participativa.' },
    { t: 'Metas de "acidente zero" atreladas a bônus são a forma mais confiável de conduzir o programa.', ok: false,
      why: 'Errada. Premiação atrelada a não ocorrência é indutor conhecido de subnotificação, o que corrompe justamente o dado que se quer melhorar.' }
  ],
  comentario: 'Duas famílias: reativos (frequência, gravidade, afastamentos) e proativos (inspeções, quase-acidentes reportados, ações corrigidas). Frequência ≠ gravidade. E indicador agregado não é dado sigiloso — o que é sigiloso é o diagnóstico individual.',
  pegadinha: 'A meta de "acidente zero" com bônus soa como o auge do compromisso com a segurança e é, na prática, um incentivo a esconder acidente.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

{ id: 'q-1.4-012', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma microempresa de dez empregados, de grau de risco baixo, questiona o médico do trabalho sobre suas obrigações de gestão em saúde ocupacional. A orientação CORRETA é:',
  alts: [
    { t: 'Há tratamento diferenciado e simplificado conforme porte e grau de risco, mas não há dispensa das obrigações de identificar riscos e de acompanhar a saúde dos trabalhadores expostos.', ok: true,
      why: 'Correta. A legislação prevê simplificação proporcional ao porte e ao risco, e não isenção: o dever de conhecer os riscos e de acompanhar os expostos permanece.' },
    { t: 'Microempresas estão integralmente dispensadas de programa de controle médico e de gerenciamento de riscos.', ok: false,
      why: 'Errada. A simplificação não chega a dispensa integral das obrigações de saúde e segurança.' },
    { t: 'A obrigação de gestão só nasce a partir de determinado número de empregados, independentemente do grau de risco.', ok: false,
      why: 'Errada. Porte e grau de risco atuam juntos; o risco da atividade é determinante e não pode ser ignorado.' },
    { t: 'A contratação de um serviço externo transfere integralmente a responsabilidade da empresa.', ok: false,
      why: 'Errada. A terceirização da execução não transfere a responsabilidade do empregador pelo ambiente e pela saúde dos seus trabalhadores.' },
    { t: 'Empresa de grau de risco baixo não precisa avaliar riscos ergonômicos nem psicossociais.', ok: false,
      why: 'Errada. Grau de risco baixo diz respeito à classificação da atividade econômica e não elimina riscos ergonômicos e psicossociais, presentes inclusive em escritórios.' }
  ],
  comentario: 'Porte pequeno e risco baixo geram simplificação, nunca isenção. E dois riscos costumam ser esquecidos justamente nas empresas de grau de risco baixo: o ergonômico e o psicossocial, que independem da classificação econômica.',
  pegadinha: 'A ideia de que contratar serviço externo "transfere a responsabilidade" é crença comum entre empregadores e sempre falsa.',
  refs: ['NR-1', 'NR-7', 'Teixeira — Gestão da Saúde no Trabalho: PCMSO da microempresa à indústria 5.0'] },

{ id: 'q-1.4-013', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao apresentar o relatório anual do programa de controle médico, o coordenador é questionado sobre o valor gerencial do documento. Sobre esse relatório, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Ele deve analisar a ocorrência dos agravos e a evolução dos indicadores, apontando a necessidade de mudança nas medidas de controle — ou seja, é instrumento de gestão que realimenta o gerenciamento de riscos, e não mera prestação de contas.', ok: true,
      why: 'Correta. O relatório fecha o ciclo: os achados de saúde apontam falhas do controle de risco e disparam a revisão do plano de ação.' },
    { t: 'Serve apenas para comprovar à fiscalização que os exames foram realizados.', ok: false,
      why: 'Errada. Reduzi-lo a comprovação documental desperdiça sua função técnica de identificar padrões e disparar correção.' },
    { t: 'Deve conter os diagnósticos individuais nominais, para permitir a análise gerencial adequada.', ok: false,
      why: 'Errada. A análise é agregada e preserva o sigilo; identificar nominalmente diagnósticos viola o sigilo médico e a proteção de dados.' },
    { t: 'É facultativo quando não houve nenhum caso de doença ocupacional no período.', ok: false,
      why: 'Errada. A ausência de casos é ela própria um resultado a ser analisado e registrado, não um motivo de dispensa.' },
    { t: 'Sua elaboração cabe ao setor de recursos humanos, por se tratar de documento administrativo.', ok: false,
      why: 'Errada. É documento técnico de responsabilidade do médico coordenador do programa.' }
  ],
  comentario: 'O relatório analítico é o elo entre o que a saúde detecta e o que o gerenciamento de riscos precisa corrigir. Sempre agregado, sempre sob responsabilidade médica, e sempre com conclusão sobre a necessidade de mudar as medidas de controle.',
  pegadinha: 'A alternativa que pede diagnósticos nominais "para a gestão" é a armadilha ética do tema — dado agregado sim, identificação nominal nunca.',
  refs: ['NR-7', 'Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

{ id: 'q-1.4-014', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a distinção entre absenteísmo e presenteísmo na gestão em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Presenteísmo é a presença do trabalhador em condições de saúde que reduzem seu desempenho, e pode aumentar quando políticas restringem o afastamento — motivo pelo qual os dois indicadores devem ser lidos em conjunto.', ok: true,
      why: 'Correta. Os dois se comunicam: apertar o afastamento empurra o trabalhador doente para dentro da empresa, e o custo migra em vez de desaparecer.' },
    { t: 'Presenteísmo é sinônimo de assiduidade e representa desfecho desejável.', ok: false,
      why: 'Errada. Assiduidade é comparecer estando apto; presenteísmo é comparecer sem condições, com prejuízo de desempenho e de recuperação.' },
    { t: 'O presenteísmo tem impacto econômico desprezível quando comparado ao absenteísmo.', ok: false,
      why: 'Errada. Estimativas consistentes apontam impacto econômico relevante, frequentemente subestimado por ser menos visível.' },
    { t: 'O presenteísmo é mensurável diretamente pelos registros de ponto.', ok: false,
      why: 'Errada. O ponto registra presença física; o presenteísmo exige instrumentos específicos de avaliação de desempenho e sintomas.' },
    { t: 'Ambos os fenômenos são exclusivamente atribuíveis a características individuais dos trabalhadores.', ok: false,
      why: 'Errada. Organização do trabalho, cultura da empresa e políticas de afastamento são determinantes centrais dos dois.' }
  ],
  comentario: 'Absenteísmo é a ausência visível; presenteísmo é o custo invisível. Políticas que só perseguem o primeiro tendem a inflar o segundo. Nenhum dos dois é atributo individual do trabalhador — ambos respondem à organização do trabalho.',
  pegadinha: 'Tratar presenteísmo como coisa boa, por soar como "estar presente", é o erro que a questão persegue.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

/* ============ 1.5 Sistemas de Gestão em Segurança e Saúde ============== */
{ id: 'q-1.5-010', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa implanta um sistema de gestão de segurança e saúde no trabalho. Sobre a estrutura desses sistemas, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Organizam-se em um ciclo de melhoria contínua — planejar, executar, verificar e agir —, com política, planejamento, implementação, avaliação e ação para melhoria, e dependem de comprometimento da alta direção e de participação dos trabalhadores.', ok: true,
      why: 'Correta. É a estrutura consagrada nas diretrizes internacionais: ciclo de melhoria contínua, com liderança da direção e participação dos trabalhadores como elementos estruturantes, não acessórios.' },
    { t: 'São conjuntos de procedimentos documentados cuja eficácia se mede pelo volume de registros produzidos.', ok: false,
      why: 'Errada. Volume documental não é medida de eficácia; sistema que só gera papel é justamente a falha mais comum de implantação.' },
    { t: 'A participação dos trabalhadores é desejável, mas não integra os elementos estruturantes do sistema.', ok: false,
      why: 'Errada. A participação é elemento estruturante nas diretrizes de referência, e não um adorno.' },
    { t: 'A certificação por norma internacional garante, por si só, ambiente de trabalho seguro.', ok: false,
      why: 'Errada. Certificação atesta conformidade do sistema em um momento; não garante desempenho real nem substitui a verificação de resultados.' },
    { t: 'A responsabilidade pela condução do sistema recai sobre o serviço especializado, sem envolvimento da alta direção.', ok: false,
      why: 'Errada. Sem comprometimento da alta direção o sistema não sustenta decisões que custem dinheiro ou alterem processos — e por isso ela é requisito explícito.' }
  ],
  comentario: 'Guarde os elementos: política, organização, planejamento e implementação, avaliação, e ação para melhoria — tudo dentro do ciclo de melhoria contínua. Dois requisitos não negociáveis: liderança da alta direção e participação dos trabalhadores.',
  pegadinha: 'A alternativa da certificação é sedutora porque certificação é real e verificável — mas conformidade documental e segurança efetiva são coisas diferentes.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho', 'ISO 45001'] },

{ id: 'q-1.5-011', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após um acidente grave, a investigação da empresa conclui que a causa foi "ato inseguro do trabalhador, que não usou o equipamento de proteção". Sobre essa conclusão, no contexto de um sistema de gestão, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A conclusão é insuficiente porque encerra a análise no comportamento individual, sem investigar por que o equipamento não foi usado — disponibilidade, adequação, treinamento, pressão de tempo e supervisão — que são falhas do sistema.', ok: true,
      why: 'Correta. Parar no "ato inseguro" impede a identificação das causas organizacionais e, por isso, impede a correção efetiva: o mesmo acidente volta com outro trabalhador.' },
    { t: 'A conclusão é adequada, pois o uso de equipamento de proteção é obrigação do empregado.', ok: false,
      why: 'Errada. A obrigação existe, mas identificar a obrigação descumprida não é o mesmo que identificar a causa do descumprimento.' },
    { t: 'A investigação deveria ter sido conduzida apenas após a conclusão do processo trabalhista, para evitar prejuízo à defesa.', ok: false,
      why: 'Errada. A investigação tem finalidade preventiva e é imediata; subordiná-la a estratégia jurídica desvirtua sua função.' },
    { t: 'Acidentes com causa comportamental não geram obrigação de medida corretiva.', ok: false,
      why: 'Errada. Toda investigação deve gerar plano de ação, e a atribuição a comportamento não é passe livre.' },
    { t: 'A análise de causas deve buscar sempre um único responsável, para permitir responsabilização.', ok: false,
      why: 'Errada. Buscar culpado e buscar causa são objetivos distintos; o primeiro atrapalha o segundo, porque inibe o relato.' }
  ],
  comentario: 'Investigação madura procura causas sistêmicas, não culpados. "Ato inseguro" é onde a análise começa, jamais onde termina: pergunte por que o comportamento inseguro era possível, tolerado ou necessário para dar conta da tarefa.',
  pegadinha: 'A busca de "um único responsável" soa como rigor gerencial e é o que mais destrói a qualidade da informação sobre acidentes.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho', 'NR-1'] },

{ id: 'q-1.5-012', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre cultura de segurança nas organizações, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Uma cultura de segurança madura se reconhece pelo baixo número de relatos de quase-acidentes, sinal de que há poucos desvios.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Em cultura madura o número de relatos de quase-acidentes tende a AUMENTAR, porque as pessoas confiam e relatam; poucos relatos costumam indicar medo ou desinteresse, não segurança.' },
    { t: 'A confiança dos trabalhadores de que o relato não gerará punição é condição para que a informação flua.', ok: false,
      why: 'Verdadeira. Sem ambiente justo, o relato desaparece e a organização perde a informação de que precisa para prevenir.' },
    { t: 'O comportamento observável da liderança tem mais efeito sobre a cultura do que os documentos de política.', ok: false,
      why: 'Verdadeira. O que a liderança faz quando segurança e produção entram em conflito é o que ensina de verdade.' },
    { t: 'Cultura de segurança e sistema de gestão se reforçam, mas não são a mesma coisa.', ok: false,
      why: 'Verdadeira. O sistema é a estrutura formal; a cultura é o modo como as pessoas agem quando ninguém está verificando.' },
    { t: 'Programas centrados apenas em mudança de comportamento individual tendem a produzir resultados limitados.', ok: false,
      why: 'Verdadeira. Sem alterar condições, processos e pressões de produção, a mudança comportamental não se sustenta.' }
  ],
  comentario: 'Contraintuitivo e muito cobrado: aumento no número de relatos de quase-acidentes é sinal de amadurecimento, não de piora. O que se espera cair são as consequências — acidentes com lesão —, não os relatos.',
  pegadinha: 'A falsa usa a leitura intuitiva de que "menos relato = menos problema", que é exatamente o oposto do esperado.',
  refs: ['OIT — Sistema de Gestão da Segurança e Saúde no Trabalho'] },

/* =========== 1.6 Políticas Públicas de Saúde do Trabalhador ============ */
{ id: 'q-1.6-010', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um município estrutura sua atenção à saúde dos trabalhadores. Sobre a Política Nacional de Saúde do Trabalhador e da Trabalhadora, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Ela alcança todos os trabalhadores, urbanos e rurais, com ou sem vínculo formal, incluindo autônomos e informais, e tem a vigilância em saúde e a atenção integral como eixos.', ok: true,
      why: 'Correta. A universalidade da cobertura é traço definidor da política: ela não se limita ao trabalhador com carteira assinada, justamente para alcançar quem está fora do sistema previdenciário.' },
    { t: 'Aplica-se apenas aos trabalhadores com vínculo formal, por serem os cobertos pelo seguro de acidentes.', ok: false,
      why: 'Errada, e é a inversão central. A cobertura previdenciária delimita benefícios, não o alcance da política de saúde.' },
    { t: 'Sua execução cabe exclusivamente ao Ministério do Trabalho, sem participação da rede de saúde.', ok: false,
      why: 'Errada. A política é do campo da saúde e se executa pelo sistema público de saúde, em articulação intersetorial.' },
    { t: 'Restringe-se à assistência médica curativa aos trabalhadores acidentados.', ok: false,
      why: 'Errada. Ela abrange promoção, vigilância, assistência e reabilitação, com ênfase na intervenção sobre os ambientes e processos de trabalho.' },
    { t: 'Exclui expressamente os trabalhadores do serviço público de seu escopo.', ok: false,
      why: 'Errada. Servidores públicos estão entre os trabalhadores alcançados.' }
  ],
  comentario: 'O traço que a banca cobra é a universalidade: a política alcança todo trabalhador, independentemente da forma de inserção. Eixos: promoção, vigilância dos ambientes e processos, assistência integral e reabilitação, com atuação intersetorial.',
  pegadinha: 'Restringir a política ao trabalhador formal confunde o alcance da POLÍTICA DE SAÚDE com o alcance da COBERTURA PREVIDENCIÁRIA.',
  refs: ['Portaria nº 1.823/2012 — Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

{ id: 'q-1.6-011', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a Rede Nacional de Atenção Integral à Saúde do Trabalhador e os centros de referência em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Os centros de referência têm papel de suporte técnico, matriciamento e apoio à vigilância, não substituindo a rede assistencial na atenção aos trabalhadores.', ok: true,
      why: 'Correta. A função é de retaguarda técnica e articulação: capacitar, apoiar a investigação e qualificar a rede — e não concentrar em si o atendimento de todos os trabalhadores.' },
    { t: 'São unidades de pronto atendimento exclusivas para trabalhadores acidentados.', ok: false,
      why: 'Errada. Não são porta de urgência; o atendimento de urgência se dá na rede assistencial comum.' },
    { t: 'Substituem a atenção primária no cuidado ao trabalhador, que deve ser encaminhado diretamente a eles.', ok: false,
      why: 'Errada, e inverte a lógica de rede: a atenção primária é porta de entrada e deve identificar a relação do adoecimento com o trabalho.' },
    { t: 'Sua atuação é restrita a empresas com mais de determinado número de empregados.', ok: false,
      why: 'Errada. A atuação alcança os trabalhadores do território, independentemente do porte da empresa e do tipo de vínculo.' },
    { t: 'Não participam da investigação de acidentes de trabalho graves e fatais.', ok: false,
      why: 'Errada. A participação nessas investigações está entre suas atribuições típicas.' }
  ],
  comentario: 'Centro de referência é retaguarda, não porta de entrada: matricia a rede, apoia a vigilância, investiga acidentes graves e fatais e qualifica o reconhecimento da relação entre adoecimento e trabalho. Quem atende no dia a dia é a rede, com a atenção primária à frente.',
  pegadinha: 'Tratar o centro de referência como ambulatório de trabalhadores é o erro conceitual mais comum do tema.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.6-012', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um caso de intoxicação por agrotóxico em trabalhador rural informal chega a uma unidade básica de saúde. Sobre a atuação das políticas públicas nesse caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O caso deve ser notificado, e a identificação da relação com o trabalho é obrigação do serviço de saúde independentemente de o trabalhador ter vínculo formal ou cobertura previdenciária.', ok: true,
      why: 'Correta. O reconhecimento da relação com o trabalho é atribuição sanitária e não depende de vínculo; sem esse reconhecimento a vigilância não enxerga o problema e a exposição continua.' },
    { t: 'Por ser trabalhador informal, o caso não integra o escopo da saúde do trabalhador.', ok: false,
      why: 'Errada. O alcance da política independe da forma de inserção no mercado.' },
    { t: 'A notificação só é devida se houver afastamento do trabalho.', ok: false,
      why: 'Errada. A notificação decorre da ocorrência do agravo, não do afastamento.' },
    { t: 'A conduta se esgota no tratamento clínico da intoxicação.', ok: false,
      why: 'Errada. O tratamento é a parte imediata; sem intervenção sobre a exposição e sem notificação, o caso se repete.' },
    { t: 'A investigação do local de trabalho é vedada quando não há empregador formalmente constituído.', ok: false,
      why: 'Errada. A vigilância atua sobre ambientes e processos de trabalho, inclusive em atividades informais e familiares.' }
  ],
  comentario: 'Este é o caso que separa quem entendeu o campo: trabalhador informal, sem CAT possível e sem benefício previdenciário, continua sendo objeto integral da política de saúde do trabalhador — com notificação, investigação do ambiente e intervenção sobre a exposição.',
  pegadinha: 'Condicionar a notificação ao afastamento importa uma lógica previdenciária para dentro da vigilância sanitária.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'SINAN — Ministério da Saúde'] },

/* ==================== 1.7 Sistema Único de Saúde ======================= */
{ id: 'q-1.7-010', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'A lei orgânica da saúde atribui expressamente ao sistema público de saúde competências em saúde do trabalhador. Entre elas está:',
  alts: [
    { t: 'A execução de ações de vigilância dos ambientes e processos de trabalho, com participação no estudo, controle e avaliação dos riscos e agravos decorrentes do trabalho.', ok: true,
      why: 'Correta. A lei orgânica insere a saúde do trabalhador no campo de atuação do sistema público de saúde, incluindo a vigilância dos ambientes e processos de trabalho.' },
    { t: 'A fixação dos limites de tolerância para agentes químicos em substituição à norma trabalhista.', ok: false,
      why: 'Errada. Os limites para fins trabalhistas seguem a norma própria; a competência sanitária não a substitui.' },
    { t: 'A concessão de benefícios por incapacidade aos trabalhadores acidentados.', ok: false,
      why: 'Errada. A concessão de benefícios é competência previdenciária, não do sistema de saúde.' },
    { t: 'A homologação dos programas de saúde ocupacional das empresas antes de sua implantação.', ok: false,
      why: 'Errada. Não há homologação prévia dos programas das empresas pelo sistema de saúde.' },
    { t: 'A realização exclusiva dos exames médicos ocupacionais dos trabalhadores formais.', ok: false,
      why: 'Errada. Os exames ocupacionais são obrigação do empregador, executados por serviço próprio ou contratado.' }
  ],
  comentario: 'A saúde do trabalhador é competência legal do sistema público de saúde, com destaque para a vigilância dos ambientes e processos de trabalho. Não se confunde com a competência previdenciária (benefícios) nem com a obrigação do empregador (exames e programas).',
  pegadinha: 'As alternativas erradas descrevem atribuições reais — só que de outros atores. A questão testa se você sabe quem faz o quê.',
  refs: ['Lei nº 8.080/1990'] },

{ id: 'q-1.7-011', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os princípios do sistema público de saúde aplicados à saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A equidade orienta a alocação de mais recursos a grupos mais expostos e vulneráveis, o que justifica priorizar categorias com maior carga de risco ocupacional.', ok: true,
      why: 'Correta. Equidade é tratar desigualmente os desiguais na medida de sua desigualdade — e é o princípio que fundamenta priorizar quem está mais exposto.' },
    { t: 'A universalidade significa que apenas os contribuintes da previdência têm direito à atenção à saúde.', ok: false,
      why: 'Errada, e inverte o conceito: universalidade é acesso independentemente de contribuição, e é justamente o que distingue o sistema de saúde do previdenciário.' },
    { t: 'A integralidade se limita à oferta de assistência médica curativa em todos os níveis.', ok: false,
      why: 'Errada. Integralidade abrange promoção, prevenção, assistência e reabilitação, articuladas.' },
    { t: 'A equidade determina que todos recebam exatamente a mesma quantidade de serviços.', ok: false,
      why: 'Errada. Isso descreve igualdade formal; equidade admite e exige tratamento diferenciado conforme a necessidade.' },
    { t: 'A descentralização retira dos municípios qualquer competência em vigilância em saúde do trabalhador.', ok: false,
      why: 'Errada, e inverte: a descentralização com direção única em cada esfera aproxima a execução do nível municipal.' }
  ],
  comentario: 'Universalidade (todos, sem contribuição prévia), integralidade (promoção a reabilitação) e equidade (mais para quem mais precisa). Em saúde do trabalhador, a equidade é o princípio que sustenta priorizar as categorias mais expostas.',
  pegadinha: 'Confundir equidade com igualdade aritmética é o erro clássico. Equidade admite desigualdade de tratamento em favor de quem tem mais necessidade.',
  refs: ['Lei nº 8.080/1990'] },

{ id: 'q-1.7-012', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma equipe de saúde da família atende repetidos casos de dorsalgia em moradores que trabalham em uma mesma cerâmica do território. Sobre o papel da atenção primária, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A repetição de casos com uma mesma inserção ocupacional deve disparar a suspeita de relação com o trabalho e o acionamento da vigilância, além do cuidado individual.', ok: true,
      why: 'Correta. Perceber o padrão coletivo por trás de queixas individuais é justamente o que transforma a atenção primária em porta de entrada da saúde do trabalhador.' },
    { t: 'A atenção primária deve limitar-se ao tratamento sintomático, encaminhando a discussão de nexo apenas à perícia previdenciária.', ok: false,
      why: 'Errada. O reconhecimento da relação com o trabalho começa na assistência; deixar tudo para a perícia perpetua a subnotificação.' },
    { t: 'A ocupação do paciente não integra a anamnese na atenção primária, por ser dado de interesse exclusivamente trabalhista.', ok: false,
      why: 'Errada. A história ocupacional é parte da anamnese clínica desde Ramazzini e é o que permite suspeitar do nexo.' },
    { t: 'Casos de dorsalgia são inespecíficos e por isso nunca configuram agravo relacionado ao trabalho.', ok: false,
      why: 'Errada. Inespecificidade clínica não afasta a relação com o trabalho; o padrão de ocorrência e a exposição é que orientam.' },
    { t: 'A notificação de agravo relacionado ao trabalho é atribuição exclusiva de serviços especializados.', ok: false,
      why: 'Errada. A notificação é obrigação de todo serviço de saúde que identifica o agravo, público ou privado.' }
  ],
  comentario: 'O ganho de olhar a ocupação na atenção primária é epidemiológico: casos isolados viram um padrão quando se pergunta onde a pessoa trabalha. Daí saem notificação, acionamento da vigilância e intervenção sobre a fonte.',
  pegadinha: 'Delegar todo o raciocínio de nexo à perícia previdenciária é a prática mais comum e a principal causa de subnotificação.',
  refs: ['Lei nº 8.080/1990', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ======================== 1.10 Promoção da Saúde ======================== */
{ id: 'q-1.10-010', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa lança um programa de qualidade de vida com aulas de ginástica laboral, palestras sobre alimentação e desafio de passos, mantendo inalterados o ritmo de produção e as metas. O médico do trabalho é consultado. A avaliação CORRETA é:',
  alts: [
    { t: 'Ações de promoção têm valor, mas não substituem a intervenção sobre os determinantes do adoecimento no trabalho; mantidos ritmo e metas, o programa tende a produzir efeito limitado e a transferir ao trabalhador a responsabilidade pela própria saúde.', ok: true,
      why: 'Correta. Promoção da saúde no trabalho só se sustenta se acompanhada de mudança nas condições e na organização do trabalho; sem isso vira responsabilização individual.' },
    { t: 'O programa é suficiente, pois atua sobre os principais fatores de risco, que são comportamentais.', ok: false,
      why: 'Errada. Atribuir o adoecimento predominantemente ao comportamento individual ignora a exposição ocupacional e a organização do trabalho.' },
    { t: 'Ginástica laboral, isoladamente, é medida suficiente para prevenir distúrbios osteomusculares relacionados ao trabalho.', ok: false,
      why: 'Errada. Sem alteração de posto, ritmo, repetitividade e pausas, a ginástica isolada tem efeito preventivo limitado.' },
    { t: 'Programas de promoção não devem ser adotados por empresas, por serem atribuição exclusiva do sistema público de saúde.', ok: false,
      why: 'Errada. O ambiente de trabalho é espaço legítimo e valioso de promoção da saúde — o problema é usá-lo como substituto do controle de risco.' },
    { t: 'A adesão ao programa pode ser tornada obrigatória e vinculada à avaliação de desempenho.', ok: false,
      why: 'Errada. Vincular hábitos de vida à avaliação de desempenho é coercitivo e eticamente insustentável.' }
  ],
  comentario: 'Promoção da saúde no trabalho é legítima e desejável — desde que não substitua o controle dos riscos. O modelo de referência da OMS combina ambiente físico, ambiente psicossocial, recursos de saúde pessoal e envolvimento com a comunidade. Programa que só mexe no comportamento individual é a metade fácil do problema.',
  pegadinha: 'A alternativa que trata os fatores de risco como "principalmente comportamentais" é a tese que sustenta o wellness sem prevenção.',
  refs: ['OMS — Ambientes de trabalho saudáveis', 'Política Nacional de Promoção da Saúde'] },

{ id: 'q-1.10-011', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe incluir na bateria periódica um painel amplo de exames laboratoriais e de imagem "para detectar tudo precocemente" em todos os trabalhadores. Sobre os níveis de prevenção, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A proposta desconsidera a prevenção quaternária, que é evitar o dano causado pelo excesso de intervenção — exames sem indicação geram achados incidentais, investigações desnecessárias e ansiedade.', ok: true,
      why: 'Correta. Prevenção quaternária é a proteção contra a iatrogenia e a medicalização; rastrear tudo em todos produz mais dano que benefício.' },
    { t: 'Trata-se de prevenção primária, pois evita o aparecimento das doenças.', ok: false,
      why: 'Errada. Rastreamento não evita o aparecimento da doença; ele busca detectá-la precocemente, o que é prevenção secundária.' },
    { t: 'Quanto mais exames, maior a prevenção, pois a detecção precoce é sempre benéfica.', ok: false,
      why: 'Errada. Detecção precoce só é benéfica quando existe tratamento que mude o desfecho e o teste tem desempenho adequado naquela população.' },
    { t: 'Prevenção terciária é sinônimo de rastreamento populacional.', ok: false,
      why: 'Errada. Terciária é reduzir sequelas e incapacidade em quem já tem a doença, com reabilitação — não é rastreamento.' },
    { t: 'A prevenção quaternária aplica-se apenas à assistência hospitalar, não à medicina ocupacional.', ok: false,
      why: 'Errada. É especialmente pertinente na medicina ocupacional, onde se examinam grandes populações assintomáticas.' }
  ],
  comentario: 'Primária: evitar que a doença apareça (controlar a exposição, vacinar). Secundária: detectar cedo (rastreamento). Terciária: reduzir sequelas (reabilitação). Quaternária: proteger o paciente do excesso de medicina. No exame ocupacional, o exame sem indicação de risco é o exemplo perfeito de dano quaternário.',
  pegadinha: 'O apelo de "detectar tudo precocemente" é intuitivo e clinicamente insustentável em população assintomática.',
  refs: ['Ferreira Junior — Rastreamento de doenças: inovando o check-up', 'NR-7'] },

{ id: 'q-1.10-012', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre programas de prevenção do uso de álcool e outras drogas no ambiente de trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Devem ter caráter educativo e de cuidado, com sigilo e encaminhamento ao tratamento, evitando abordagem exclusivamente punitiva, que afasta o trabalhador da ajuda.', ok: true,
      why: 'Correta. A abordagem punitiva isolada leva à ocultação do problema e retarda o cuidado; programas eficazes combinam prevenção, acolhimento, sigilo e caminho de tratamento.' },
    { t: 'A testagem toxicológica generalizada e sem indicação é a base de qualquer programa eficaz.', ok: false,
      why: 'Errada. Testagem tem indicações específicas, definidas em norma para certas atividades, e não constitui por si um programa de prevenção.' },
    { t: 'Resultado positivo em teste deve levar à demissão imediata, como medida de segurança.', ok: false,
      why: 'Errada. A conduta é avaliação clínica e encaminhamento; dependência química é condição de saúde e a resposta automática punitiva é indefensável.' },
    { t: 'O diagnóstico de dependência deve ser comunicado ao gestor imediato para adequação das tarefas.', ok: false,
      why: 'Errada. Ao gestor cabem aptidão e restrições; o diagnóstico permanece protegido pelo sigilo.' },
    { t: 'A adesão ao tratamento pode ser condicionada à manutenção do emprego, como forma de motivar o trabalhador.', ok: false,
      why: 'Errada. Coagir adesão vincula cuidado a ameaça e compromete tanto a ética quanto a eficácia do tratamento.' }
  ],
  comentario: 'A linha divisória é clara: o programa cuida, a empresa gerencia risco. À empresa cabem aptidão e restrição; ao serviço médico, o diagnóstico, o sigilo e o encaminhamento. Punição isolada empurra o problema para a clandestinidade.',
  pegadinha: 'A demissão "por segurança" e a comunicação do diagnóstico ao gestor são os dois erros que aparecem juntos na prática — e as duas alternativas estão ali de propósito.',
  refs: ['Código de Ética Médica', 'Política Nacional de Promoção da Saúde'] }

);
