/* CASOS-2.JS — casos clínicos 009 a 012 (simulado 2 e parte do 3).
   AUTORAIS. Nenhum texto cita alternativa por letra. */
window.CASOS = window.CASOS || [];
window.CASOS.push(

{ id: 'caso-009',
  titulo: 'Dermatose em auxiliar de produção de resinas',
  temas: ['4.4', '2.3', '6.1', '5.2'],
  nivel: 'dificil',
  vinheta: 'Auxiliar de produção, 29 anos, há dois anos em setor de formulação de resinas epóxi, procura o serviço médico da empresa com lesões eczematosas, eritêmato-descamativas e fissuradas em dorso das mãos e punhos, com prurido intenso. Refere que o quadro começou há sete meses, de forma leve, e vem piorando. Melhorou completamente durante quinze dias de férias e recidivou em cerca de uma semana após o retorno. Usa luvas de látex fornecidas pela empresa, trocadas semanalmente, e refere que as mãos ficam úmidas dentro delas durante toda a jornada. Nega dermatoses prévias, mas relata rinite alérgica na infância. Outros dois colegas do mesmo setor apresentam queixas semelhantes, ainda não avaliadas. O exame mostra lesões bem delimitadas no dorso das mãos, com extensão para punhos e antebraços distais, poupando as palmas. O programa de controle médico da empresa não prevê nenhum exame complementar específico para o setor, e a ficha de informações de segurança dos produtos não está disponível no ambulatório.',
  questoes: [
    { enunciado: 'Sobre a hipótese diagnóstica e o raciocínio inicial, a alternativa CORRETA é:',
      alts: [
        { t: 'O quadro é compatível com dermatose ocupacional, e a melhora completa no afastamento com recidiva após o retorno é um dos critérios que reforçam a origem ocupacional.', ok: true,
          why: 'Correta. A relação temporal com a exposição é critério clássico de nexo em dermatoses. Confirmada a hipótese, é preciso investigar tanto o mecanismo irritativo quanto o alérgico, que costumam coexistir.' },
        { t: 'A melhora completa durante as férias afasta a origem ocupacional do quadro e sugere dermatite atópica descompensada por estresse, que também remite em períodos de repouso prolongado.', ok: false,
          why: 'Incorreta. O raciocínio está invertido: a remissão fora do trabalho com recidiva no retorno é justamente o achado que sustenta o nexo ocupacional.' },
        { t: 'A história de rinite alérgica na infância torna o quadro necessariamente atópico e explica as lesões nas mãos independentemente da exposição às resinas no posto de trabalho.', ok: false,
          why: 'Incorreta. Atopia é fator de suscetibilidade que aumenta o risco de dermatite de contato irritativa. Ela não substitui nem exclui a causa ocupacional.' },
        { t: 'A ocorrência de casos semelhantes em colegas do mesmo setor é irrelevante para o raciocínio diagnóstico individual.', ok: false,
          why: 'Incorreta. Casos agrupados no mesmo setor são evidência epidemiológica que reforça a exposição compartilhada como causa.' },
        { t: 'O acometimento que poupa as palmas exclui causa exógena e indica dermatose de origem endógena.', ok: false,
          why: 'Incorreta. A pele palmar é espessa e frequentemente poupada nas dermatoses de contato, que predominam em dorso das mãos e espaços interdigitais.' }
      ],
      comentario: 'Três dados convergem: topografia compatível com contato, relação temporal com o trabalho e agrupamento de casos no setor. Nenhum deles isolado fecha o diagnóstico, mas os três juntos tornam a hipótese ocupacional a mais provável.',
      pegadinha: 'A banca oferece a melhora nas férias como se afastasse o nexo. É exatamente o contrário.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Quanto à diferenciação entre dermatite de contato irritativa e alérgica neste caso, é CORRETO afirmar:',
      alts: [
        { t: 'Os dois mecanismos podem coexistir: a oclusão sob a luva favorece o componente irritativo, que rompe a barreira cutânea e facilita a sensibilização à resina.', ok: true,
          why: 'Correta. A dermatite irritativa e a alérgica não são excludentes. A quebra da barreira pelo irritante aumenta a penetração do alérgeno e a chance de sensibilização.' },
        { t: 'A dermatite de contato irritativa exige sensibilização prévia ao agente e acomete apenas indivíduos geneticamente predispostos, o que a distingue da forma alérgica, que atinge qualquer exposto.', ok: false,
          why: 'Incorreta. Está trocado: a irritativa é dose-dependente e pode ocorrer em qualquer pessoa exposta o bastante; é a alérgica que depende de sensibilização prévia.' },
        { t: 'A dermatite de contato alérgica é mais frequente que a irritativa no ambiente ocupacional, e por isso o teste de contato deve ser a primeira investigação em toda dermatose do trabalho.', ok: false,
          why: 'Incorreta. A forma irritativa responde pela maior parte das dermatoses de contato ocupacionais, algo em torno de quatro quintos dos casos.' },
        { t: 'A extensão das lesões para além da área de contato direto com o produto indica necessariamente mecanismo irritativo.', ok: false,
          why: 'Incorreta. A disseminação para além do sítio de contato é mais característica da forma alérgica, por resposta imunológica sistêmica.' },
        { t: 'Sendo alérgica, a dermatite regride mesmo com a manutenção da exposição, desde que se use corticoide tópico.', ok: false,
          why: 'Incorreta. Sem afastamento do alérgeno o quadro recidiva e tende a cronificar, ainda que haja alívio temporário com corticoide.' }
      ],
      comentario: 'Irritativa: dano direto, dose-dependente, atinge qualquer um, respeita a área de contato, mais frequente. Alérgica: hipersensibilidade tardia, exige sensibilização, atinge os sensibilizados, pode extrapolar a área. Na prática ocupacional as duas coexistem com frequência.',
      pegadinha: 'A troca dos requisitos entre irritativa e alérgica é o distrator preferido do tema.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Sobre a investigação complementar indicada, a alternativa CORRETA é:',
      alts: [
        { t: 'Está indicado o teste de contato com bateria apropriada, incluindo os agentes da atividade, com leituras diferidas em mais de um momento; resultado positivo indica sensibilização e deve ser confrontado com a exposição real.', ok: true,
          why: 'Correta. O teste demonstra sensibilização, não nexo. É o cruzamento entre a sensibilização e a exposição documentada no posto que sustenta o reconhecimento ocupacional.' },
        { t: 'O teste de contato deve ser lido imediatamente após a aplicação dos adesivos, pois a reação relevante nesse tipo de dermatite é a de hipersensibilidade imediata, mediada por imunoglobulina E.', ok: false,
          why: 'Incorreta. A dermatite de contato alérgica é hipersensibilidade tardia, mediada por células, e a leitura se faz em dois ou três momentos após a aplicação.' },
        { t: 'Teste de contato positivo comprova por si só o nexo ocupacional, dispensando a análise da exposição efetiva no posto de trabalho.', ok: false,
          why: 'Incorreta. Existe sensibilização sem relevância clínica ou de origem extralaboral. O positivo precisa ser confrontado com a exposição real.' },
        { t: 'A dosagem sérica de imunoglobulina E específica é o exame de escolha para confirmar a dermatite de contato alérgica ocupacional.', ok: false,
          why: 'Incorreta. A imunoglobulina E se aplica à hipersensibilidade imediata, como a urticária de contato, e não à dermatite de contato alérgica.' },
        { t: 'A biópsia de pele é obrigatória antes de qualquer outra investigação em dermatose ocupacional.', ok: false,
          why: 'Incorreta. A biópsia é reservada a casos atípicos ou a dúvida diagnóstica, e a histologia não distingue a forma irritativa da alérgica.' }
      ],
      comentario: 'O teste de contato é o exame central, com leituras diferidas. Ele responde "houve sensibilização?", não "o nexo existe?" — a segunda pergunta exige cruzar o resultado com a composição dos produtos manipulados, o que torna a ficha de informações de segurança um documento clínico.',
      pegadinha: 'Tratar a positividade do teste como prova do nexo ignora as exposições extraocupacionais.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Quanto à conduta em relação ao equipamento de proteção e às medidas de controle, é CORRETO afirmar:',
      alts: [
        { t: 'A luva de látex pode ser inadequada por permeação ao agente e por ser ela própria sensibilizante, e a seleção do material deve seguir o agente manipulado.', ok: true,
          why: 'Correta. Luva não é genérica: cada material resiste a agentes diferentes. Além disso, a oclusão prolongada, com calor e suor, por si só causa dermatite irritativa.' },
        { t: 'Qualquer luva serve para a proteção da pele, desde que esteja íntegra, seja trocada semanalmente e o trabalhador seja orientado a lavar as mãos ao final de cada turno de trabalho.', ok: false,
          why: 'Incorreta. A escolha depende da compatibilidade química com o agente e do tempo de permeação. Luva errada dá falsa sensação de proteção.' },
        { t: 'A prescrição de creme de barreira para uso antes do turno substitui a necessidade de rever o tipo de luva e o próprio processo de trabalho no setor.', ok: false,
          why: 'Incorreta. O creme de barreira é medida complementar de eficácia limitada e jamais substitui a seleção correta do equipamento nem a intervenção no processo.' },
        { t: 'Como se trata de risco à pele, a hierarquia de controles não se aplica, bastando o fornecimento de equipamento de proteção individual adequado.', ok: false,
          why: 'Incorreta. A hierarquia vale para todo risco: substituição do agente, sistema fechado e controle na fonte vêm antes da proteção individual.' },
        { t: 'A oclusão prolongada pela luva é irrelevante, pois ela protege a pele do contato com o produto.', ok: false,
          why: 'Incorreta. A oclusão gera maceração, calor e retenção de suor, causando dermatite irritativa mesmo sem contato com o produto.' }
      ],
      comentario: 'Ordem correta: substituir o agente quando viável, isolar o processo, escolher o material da luva pelo agente, cuidar da integridade da pele e, por último, creme de barreira. E lembre que a própria luva pode ser causa — por permeação, por oclusão ou por sensibilização ao material.',
      pegadinha: 'A luva aparece no caso como solução e é, ao mesmo tempo, parte provável do problema.',
      refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

    { enunciado: 'Sobre as providências institucionais e o programa de controle médico, a conduta CORRETA é:',
      alts: [
        { t: 'Investigar os demais trabalhadores do setor, incluir avaliação dermatológica dirigida no programa de controle médico e obter as fichas de informações de segurança dos produtos.', ok: true,
          why: 'Correta. Completam a conduta a articulação com o gerenciamento de riscos para revisão do processo, a notificação do agravo e a comunicação à Previdência quando caracterizado.' },
        { t: 'Basta afastar o trabalhador do setor e acompanhar a evolução do quadro individualmente, sem estender a investigação aos demais expostos enquanto não houver novas queixas espontâneas.', ok: false,
          why: 'Incorreta. Um caso de dermatose ocupacional é evento sentinela e indica falha de controle que atinge todo o grupo exposto.' },
        { t: 'A ficha de informações de segurança de produtos químicos é documento de interesse exclusivo do setor de compras e da área de meio ambiente, sem utilidade para a avaliação clínica.', ok: false,
          why: 'Incorreta. A ficha traz composição, perigos à saúde, medidas de proteção e primeiros socorros: é instrumento de trabalho do médico do trabalho.' },
        { t: 'A notificação do agravo relacionado ao trabalho cabe apenas à rede pública de saúde, e não a serviço médico contratado pela empresa.', ok: false,
          why: 'Incorreta. A notificação compulsória obriga todo serviço de saúde, público ou privado, que identifique o agravo.' },
        { t: 'Como não houve afastamento do trabalho, não há necessidade de qualquer registro previdenciário do caso.', ok: false,
          why: 'Incorreta. A comunicação de acidente do trabalho por doença ocupacional independe de afastamento.' }
      ],
      comentario: 'Um caso índice de dermatose ocupacional é evento sentinela: obriga a olhar o setor inteiro, revisar o programa médico à luz do risco real, buscar as fichas de segurança e realimentar o gerenciamento de riscos. Registro e notificação independem de afastamento.',
      pegadinha: 'Tratar o caso apenas no plano individual é a conduta mais comum e a que perpetua o problema.',
      refs: ['NR-7', 'NR-9', 'SINAN — Ministério da Saúde'] }
  ] },

{ id: 'caso-010',
  titulo: 'Esgotamento em analista de central de atendimento',
  temas: ['4.6', '4.7', '5.2', '7.6'],
  nivel: 'dificil',
  vinheta: 'Analista de central de atendimento, 33 anos, quatro anos na função, é encaminhada ao serviço médico após o terceiro episódio de choro no posto de trabalho em um mês. Relata exaustão que não melhora com o descanso do fim de semana, insônia inicial, irritabilidade, distanciamento afetivo em relação aos clientes — que passou a descrever como "números" — e sensação persistente de incompetência, apesar de bom desempenho registrado. O setor opera com metas individuais de tempo médio de atendimento, monitoramento eletrônico contínuo das ligações, escala com pausas de horário fixo e ranking semanal afixado no mural. Nos últimos seis meses a meta foi elevada duas vezes e três colegas do mesmo time se afastaram por transtornos mentais. A trabalhadora nega uso de substâncias, tem duas filhas pequenas e relata que a chefia imediata "cobra de forma humilhante na frente do time". O gerente do setor procura o médico do trabalho pedindo o diagnóstico "para saber se pode confiar nela em atendimentos difíceis".',
  questoes: [
    { enunciado: 'Sobre a caracterização do quadro apresentado, a alternativa CORRETA é:',
      alts: [
        { t: 'O quadro é compatível com burnout, definido por exaustão, distanciamento mental do trabalho e redução da eficácia profissional.', ok: true,
          why: 'Correta. O burnout é fenômeno ocupacional, e não doença de origem individual: decorre de estresse crônico no trabalho que não foi gerenciado com sucesso.' },
        { t: 'Trata-se de transtorno de personalidade, cujo manejo é exclusivamente psicoterápico e independe de qualquer mudança nas condições e na organização do trabalho.', ok: false,
          why: 'Incorreta. Nada no caso sugere transtorno de personalidade, e a intervenção sobre a organização do trabalho é parte essencial do manejo do burnout.' },
        { t: 'O bom desempenho registrado nas avaliações afasta o diagnóstico, pois o burnout implica necessariamente queda objetiva e mensurável de produtividade.', ok: false,
          why: 'Incorreta. A redução da eficácia é vivência subjetiva e frequentemente o desempenho é mantido às custas de esforço crescente, até o colapso.' },
        { t: 'A presença de filhas pequenas indica que a sobrecarga é essencialmente doméstica, o que afasta a relação do quadro com o trabalho.', ok: false,
          why: 'Incorreta. A sobrecarga extralaboral pode somar-se como concausa, mas não desloca a determinação organizacional descrita no caso.' },
        { t: 'Burnout e depressão são condições mutuamente excludentes, de modo que a presença de uma afasta o diagnóstico da outra.', ok: false,
          why: 'Incorreta. As duas coexistem com frequência, e o burnout prolongado é fator de risco para episódio depressivo.' }
      ],
      comentario: 'Três dimensões: exaustão, distanciamento mental e redução da eficácia profissional. O conceito é ocupacional por definição, o que já orienta a conduta: tratar o indivíduo e devolvê-lo ao mesmo ambiente reproduz o adoecimento.',
      pegadinha: 'Usar a carga doméstica para afastar o nexo ignora a lógica da concausalidade.',
      refs: ['Mendanha — O que ninguém te contou sobre burnout', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

    { enunciado: 'Analisando a organização do trabalho descrita à luz dos modelos teóricos de estresse ocupacional, é CORRETO afirmar:',
      alts: [
        { t: 'A combinação de alta demanda com baixo controle caracteriza situação de alta exigência, agravada pela falta de apoio da chefia.', ok: true,
          why: 'Correta. É o modelo demanda-controle-apoio. O desequilíbrio entre o esforço despendido e o reconhecimento recebido acrescenta um segundo eixo de risco, o do modelo esforço-recompensa.' },
        { t: 'O risco decorre exclusivamente do volume de ligações atendidas por turno, sendo a autonomia sobre o próprio ritmo de trabalho irrelevante nesse tipo de atividade padronizada.', ok: false,
          why: 'Incorreta. A demanda alta só se torna nociva quando combinada a baixo controle. É a margem de decisão que diferencia trabalho ativo de trabalho em alta exigência.' },
        { t: 'Ranking público de desempenho e monitoramento eletrônico das chamadas são práticas neutras do ponto de vista da saúde mental, por serem apenas instrumentos de medição objetiva.', ok: false,
          why: 'Incorreta. Exposição pública do desempenho e vigilância contínua são fatores psicossociais de risco reconhecidos, que aumentam pressão e reduzem controle.' },
        { t: 'Pausas em horário fixo, ainda que curtas, eliminam tanto o risco ergonômico quanto o risco psicossocial dessa atividade.', ok: false,
          why: 'Incorreta. Pausas rígidas ajudam pouco quando a pressão de meta e a falta de controle permanecem, e não eliminam risco psicossocial.' },
        { t: 'O modelo esforço-recompensa considera apenas a remuneração como recompensa relevante.', ok: false,
          why: 'Incorreta. O modelo inclui salário, estima e reconhecimento, além de segurança no emprego e perspectiva de carreira.' }
      ],
      comentario: 'Demanda-controle: risco na alta demanda com baixa autonomia, modulado pelo apoio social. Esforço-recompensa: risco no desequilíbrio entre o que se investe e o que se recebe — incluindo estima e segurança. Em teleatendimento os dois modelos se aplicam simultaneamente.',
      pegadinha: 'Reduzir o risco ao volume de trabalho apaga o conceito de controle, que é o núcleo do modelo.',
      refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-17'] },

    { enunciado: 'Diante do pedido do gerente para conhecer o diagnóstico, a conduta ética CORRETA é:',
      alts: [
        { t: 'Recusar o fornecimento do diagnóstico e informar ao gestor apenas a conclusão sobre aptidão e as restrições necessárias.', ok: true,
          why: 'Correta. O sigilo protege a trabalhadora e não é afastado pelo fato de a empresa custear o serviço médico. O gestor precisa saber o que adequar, não o que ela tem.' },
        { t: 'Fornecer o diagnóstico ao gestor, pois ele precisa da informação clínica para redistribuir tarefas e ajustar as metas da trabalhadora de forma adequada.', ok: false,
          why: 'Incorreta. A adequação de tarefas se faz com base em restrições descritas pelo médico, que não exigem revelar o diagnóstico.' },
        { t: 'Informar ao gestor apenas que a trabalhadora está em acompanhamento psiquiátrico, sem citar o diagnóstico específico nem os medicamentos em uso.', ok: false,
          why: 'Incorreta. Revelar a natureza psiquiátrica do acompanhamento já é quebra de sigilo e expõe a trabalhadora a estigma.' },
        { t: 'Fornecer o diagnóstico mediante assinatura de termo de confidencialidade pelo gestor, que passa a responder pelo sigilo da informação recebida.', ok: false,
          why: 'Incorreta. O sigilo médico não é transferível por termo. Só a autorização expressa da paciente, e por justo motivo, poderia autorizar a revelação.' },
        { t: 'Encaminhar o gestor diretamente à trabalhadora para que ela decida se conta ou não sobre seu quadro, durante a jornada de trabalho.', ok: false,
          why: 'Incorreta. Isso cria constrangimento e coerção implícita pela relação hierárquica, e transfere ao gestor uma pressão que o médico deveria bloquear.' }
      ],
      comentario: 'Regra de ouro: à empresa vão APTIDÃO e RESTRIÇÕES; nunca diagnóstico. Nem custeio do serviço, nem termo de confidencialidade, nem "só dizer que está em tratamento" legitimam a revelação — a própria condição de estar em acompanhamento é dado sensível.',
      pegadinha: 'As quatro alternativas erradas oferecem quatro formas diferentes de racionalizar a mesma quebra de sigilo.',
      refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

    { enunciado: 'Quanto ao reconhecimento da relação com o trabalho e às providências de registro, é CORRETO afirmar:',
      alts: [
        { t: 'Transtornos mentais podem ser reconhecidos como relacionados ao trabalho, e o agrupamento de afastamentos no mesmo time reforça a hipótese de determinantes organizacionais.', ok: true,
          why: 'Correta. Cabe notificação do agravo à vigilância em saúde e comunicação de acidente do trabalho quando caracterizada a relação com o trabalho.' },
        { t: 'Transtornos mentais não podem ser reconhecidos como relacionados ao trabalho, uma vez que dependem de vulnerabilidade individual e de fatores da história de vida anteriores ao vínculo.', ok: false,
          why: 'Incorreta. A vulnerabilidade individual é concausa, e a legislação e a lista de doenças relacionadas ao trabalho contemplam expressamente transtornos mentais.' },
        { t: 'Como não houve acidente típico nem lesão física identificável, não há qualquer registro a ser feito, nem previdenciário nem de vigilância em saúde.', ok: false,
          why: 'Incorreta. Doença ocupacional se equipara a acidente do trabalho, e transtornos mentais relacionados ao trabalho são de notificação compulsória.' },
        { t: 'O reconhecimento depende exclusivamente da conclusão da perícia previdenciária, nada cabendo ao médico do trabalho quanto ao registro ou à investigação do caso.', ok: false,
          why: 'Incorreta. A perícia decide o benefício, mas o reconhecimento clínico, a notificação e a investigação do setor são atribuições do serviço de saúde ocupacional.' },
        { t: 'A notificação de agravo relacionado ao trabalho exige confirmação diagnóstica por médico especialista antes de ser realizada.', ok: false,
          why: 'Incorreta. A notificação se faz por suspeita, exatamente para não retardar a vigilância.' }
      ],
      comentario: 'Três afastamentos por transtorno mental no mesmo time é sinal epidemiológico, não coincidência. Transtorno mental relacionado ao trabalho gera notificação e, caracterizado o nexo, comunicação do acidente — mesmo sem lesão física e sem aguardar a perícia.',
      pegadinha: 'Condicionar tudo à perícia previdenciária é a prática mais comum e a principal causa de subnotificação em saúde mental.',
      refs: ['Lei nº 8.213/1991 — art. 19 e 20', 'SINAN — Ministério da Saúde'] },

    { enunciado: 'Sobre o plano de intervenção a ser proposto pelo serviço médico, a conduta mais adequada é:',
      alts: [
        { t: 'Combinar o cuidado individual, com encaminhamento, tratamento e eventual afastamento, com recomendações formais de intervenção sobre a organização do trabalho, registrando a comunicação feita à empresa.', ok: true,
          why: 'Correta. As recomendações devem alcançar metas, monitoramento, regime de pausas e conduta da chefia. Tratar apenas a pessoa e devolvê-la ao mesmo ambiente reproduz o adoecimento.' },
        { t: 'Encaminhar para psicoterapia e devolver a trabalhadora à mesma função, às mesmas metas e ao mesmo regime de monitoramento assim que houver melhora sintomática do quadro clínico.', ok: false,
          why: 'Incorreta. O retorno ao ambiente inalterado é o principal fator de recidiva. O tratamento individual não neutraliza a exposição organizacional.' },
        { t: 'Propor um programa de resiliência e de práticas de atenção plena para o time, mantendo inalteradas as metas, o ranking público e o monitoramento eletrônico das chamadas.', ok: false,
          why: 'Incorreta. Programas centrados no indivíduo, sem mexer na organização, deslocam para o trabalhador a responsabilidade por um risco que é do processo.' },
        { t: 'Recomendar a demissão da trabalhadora por incompatibilidade entre suas características pessoais e o perfil exigido pela função.', ok: false,
          why: 'Incorreta. É conduta discriminatória, contrária ao papel do serviço médico, e mantém intacto o risco para os demais.' },
        { t: 'Aguardar o surgimento de novos casos para caracterizar um padrão antes de fazer qualquer recomendação à empresa.', ok: false,
          why: 'Incorreta. Já existem quatro afastamentos por transtorno mental no mesmo time em um ano: o padrão está caracterizado.' }
      ],
      comentario: 'A conduta tem dois braços inseparáveis: cuidar da pessoa e agir sobre o determinante. E há um terceiro elemento que a prova valoriza: registrar formalmente a comunicação à empresa — é o que documenta a atuação do médico caso a recomendação seja ignorada.',
      pegadinha: 'Programas de resiliência sem mudança organizacional aparecem como solução moderna e são a forma sofisticada de culpar a vítima.',
      refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-1', 'NR-17', 'ICOH — Código internacional de ética'] }
  ] },

{ id: 'caso-011',
  titulo: 'Mesotelioma em ex-trabalhador de fibrocimento',
  temas: ['4.8', '2.3', '5.2', '1.9'],
  nivel: 'dificil',
  vinheta: 'Homem de 68 anos, aposentado há doze anos, procura atendimento por dispneia progressiva há quatro meses e dor torácica em hemitórax direito, contínua e mal localizada. A radiografia mostra derrame pleural volumoso à direita; a tomografia revela espessamento pleural nodular circunferencial com retração do hemitórax, além de placas pleurais calcificadas bilaterais. A toracoscopia com biópsia confirma mesotelioma pleural maligno. Na anamnese ocupacional, relata ter trabalhado dos 19 aos 43 anos em fábrica de telhas e caixas d\'água de fibrocimento, no setor de mistura e corte, sem proteção respiratória nos primeiros anos. Após a saída da empresa, trabalhou como comerciante. Nunca fumou. A esposa relata que ele voltava para casa "branco de pó" e que ela sacudia e lavava o uniforme em casa. O filho pergunta se há algo a fazer do ponto de vista de direitos, já que "faz mais de vinte anos que ele saiu de lá".',
  questoes: [
    { enunciado: 'Sobre a relação entre o quadro e a exposição ocupacional relatada, é CORRETO afirmar:',
      alts: [
        { t: 'A latência prolongada é característica do mesotelioma relacionado ao asbesto e reforça o nexo, e as placas pleurais bilaterais são marcadores de exposição prévia.', ok: true,
          why: 'Correta. O mesotelioma tem período de latência que costuma passar de duas a quatro décadas. Longe de afastar a relação causal, o intervalo longo é o esperado.' },
        { t: 'O intervalo superior a vinte anos entre o fim da exposição e o aparecimento da doença afasta a relação causal com o trabalho, por romper o critério de temporalidade exigido no raciocínio de nexo.', ok: false,
          why: 'Incorreta. O critério de temporalidade exige que a exposição anteceda a doença, e não que o intervalo seja curto. Para o mesotelioma, o intervalo longo é a regra.' },
        { t: 'A ausência de asbestose nos exames de imagem exclui exposição significativa ao asbesto e obriga a buscar outra explicação para o derrame pleural apresentado pelo paciente.', ok: false,
          why: 'Incorreta. O mesotelioma ocorre sem asbestose associada. São doenças distintas, com limiares de exposição diferentes.' },
        { t: 'Por ser não fumante ao longo de toda a vida, o paciente não poderia desenvolver neoplasia relacionada a exposição ocupacional.', ok: false,
          why: 'Incorreta. O tabagismo não tem relação com o mesotelioma, cujo determinante é a exposição ao asbesto.' },
        { t: 'O mesotelioma exige exposição intensa e contínua ao asbesto, não ocorrendo em exposições de baixa intensidade.', ok: false,
          why: 'Incorreta. Há casos após exposições curtas ou de baixa intensidade, inclusive paraocupacionais e ambientais.' }
      ],
      comentario: 'Mesotelioma e asbesto: latência de décadas, ausência de relação com tabagismo, ocorrência mesmo em baixa intensidade e independência em relação à presença de asbestose. Todos esses elementos, no caso, sustentam o nexo.',
      pegadinha: 'Usar a latência longa como argumento contra o nexo é o raciocínio invertido mais frequente em câncer ocupacional.',
      refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs', 'Santos, U.P. — Pneumologia Ocupacional'] },

    { enunciado: 'A informação de que a esposa sacudia e lavava o uniforme em casa é relevante porque:',
      alts: [
        { t: 'Caracteriza exposição paraocupacional, reconhecida como forma de exposição capaz de gerar doença em familiares, o que indica avaliar também a esposa e revela a magnitude da contaminação do processo produtivo.', ok: true,
          why: 'Correta. A fibra levada para casa na roupa é via clássica de exposição doméstica, com casos de mesotelioma descritos em cônjuges e filhos de trabalhadores.' },
        { t: 'É informação irrelevante para o caso, pois a exposição ocorrida fora do ambiente de trabalho não guarda qualquer relação com o asbesto manipulado na fábrica de fibrocimento.', ok: false,
          why: 'Incorreta. A fibra transportada no uniforme é a mesma do processo produtivo, e a exposição doméstica está bem documentada na literatura.' },
        { t: 'Indica que a doença do trabalhador tem origem doméstica, e não ocupacional, o que descaracteriza o nexo com o vínculo empregatício.', ok: false,
          why: 'Incorreta. A contaminação domiciliar é consequência da exposição ocupacional dele, e não uma fonte independente que a substitua.' },
        { t: 'Sugere que a empresa cumpria adequadamente as medidas de controle, já que fornecia uniforme completo aos trabalhadores do setor.', ok: false,
          why: 'Incorreta. É o oposto: uniforme levado para casa demonstra ausência de vestiário com barreira e de higienização institucional das roupas.' },
        { t: 'Só teria relevância se a esposa também tivesse mantido vínculo de trabalho na mesma empresa.', ok: false,
          why: 'Incorreta. A exposição paraocupacional se define justamente pela ausência de vínculo com a fonte.' }
      ],
      comentario: 'A exposição paraocupacional é um clássico do asbesto: fibras transportadas em roupas e calçados atingem familiares. Do ponto de vista prático, indica avaliar a família e evidencia falha grave de controle — ausência de vestiário duplo e de higienização institucional dos uniformes.',
      pegadinha: 'A alternativa que lê o fornecimento de uniforme como cumprimento de obrigação inverte o significado do achado.',
      refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs'] },

    { enunciado: 'Sobre as providências de registro e notificação neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'Cabe notificar o câncer relacionado ao trabalho e orientar quanto à comunicação para fins previdenciários.', ok: true,
          why: 'Correta. O reconhecimento independe de o trabalhador estar aposentado e de a empresa ainda existir: o que se registra é a doença ocupacional e sua origem.' },
        { t: 'Como o paciente já está aposentado por tempo de contribuição, não há providência de registro a ser adotada, uma vez que não haverá repercussão sobre benefício por incapacidade.', ok: false,
          why: 'Incorreta. A aposentadoria não apaga a origem ocupacional da doença, que pode gerar efeitos previdenciários e civis, além de importar à vigilância.' },
        { t: 'A notificação do agravo em saúde só é cabível se a empresa responsável pela exposição ainda estiver em funcionamento e puder ser fiscalizada pelo órgão competente.', ok: false,
          why: 'Incorreta. A notificação é epidemiológica e independe da existência atual da empresa. Muitos casos surgem décadas após o encerramento.' },
        { t: 'A notificação ao sistema de agravos substitui a comunicação de acidente do trabalho, pois ambas registram o mesmo evento.', ok: false,
          why: 'Incorreta. São instrumentos distintos, com finalidades distintas, e nenhum dispensa o outro.' },
        { t: 'Cabe apenas o registro em prontuário, sem comunicação a qualquer sistema externo, por se tratar de paciente já desligado da empresa.', ok: false,
          why: 'Incorreta. Câncer relacionado ao trabalho é agravo de notificação compulsória, independentemente do vínculo atual.' }
      ],
      comentario: 'Aposentadoria não apaga o nexo. Câncer relacionado ao trabalho é agravo notificável, e a comunicação previdenciária permanece cabível — inclusive para efeitos sobre dependentes. Registrar é o que transforma um caso individual em dado de vigilância.',
      pegadinha: 'A ideia de que "não há mais o que fazer porque ele já se aposentou" é a omissão mais frequente nesses casos.',
      refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre o acompanhamento de trabalhadores expostos ao asbesto em geral, é CORRETO afirmar:',
      alts: [
        { t: 'O acompanhamento deve considerar a latência prolongada e pode ser necessário mesmo após o fim da exposição e do vínculo.', ok: true,
          why: 'Correta. Isso exige registro duradouro da história ocupacional e sua transferência entre serviços, para que o dado de exposição não se perca com a troca de emprego.' },
        { t: 'Encerrada a exposição ao asbesto, cessa a necessidade de acompanhamento específico, pois o risco de adoecimento decai rapidamente após a saída do ambiente contaminado.', ok: false,
          why: 'Incorreta. O risco persiste por décadas após o fim da exposição, e é justamente nesse período tardio que aparecem os casos.' },
        { t: 'A tomografia de tórax anual está indicada para todos os expostos ao asbesto, independentemente de evidência de benefício, por sua maior sensibilidade em relação à radiografia.', ok: false,
          why: 'Incorreta. Não há evidência de benefício de rastreamento tomográfico universal em expostos ao asbesto, e a conduta acarreta dose e achados incidentais.' },
        { t: 'A presença de placas pleurais impõe o afastamento imediato do trabalhador de qualquer atividade laboral, dado o risco de evolução para mesotelioma.', ok: false,
          why: 'Incorreta. Placas pleurais são marcador de exposição, em geral sem repercussão funcional, e não indicam por si inaptidão para o trabalho.' },
        { t: 'Trabalhadores expostos ao asbesto não necessitam de registro específico de exposição no prontuário ocupacional.', ok: false,
          why: 'Incorreta. O registro da exposição é essencial e deve ser mantido por prazo prolongado, dada a latência das doenças associadas.' }
      ],
      comentario: 'Duas consequências práticas da latência longa: o acompanhamento se estende além do vínculo e o registro precisa ser duradouro. Rastreamento, porém, só com método de desempenho comprovado — do contrário se aplica a lógica da prevenção quaternária.',
      pegadinha: 'Confundir placa pleural (marcador de exposição) com doença incapacitante leva a afastamentos indevidos.',
      refs: ['Santos, U.P. — Pneumologia Ocupacional', 'Ferreira Junior — Rastreamento de doenças'] },

    { enunciado: 'Quanto à classificação de carcinogenicidade e ao controle da exposição ao asbesto, é CORRETO afirmar:',
      alts: [
        { t: 'O asbesto é carcinogênico para humanos e, para agentes assim classificados sem limiar demonstrado, a orientação é substituir o agente e, na impossibilidade, reduzir a exposição ao menor nível tecnicamente viável.', ok: true,
          why: 'Correta. Para carcinógenos sem limiar não existe concentração que possa ser tida como segura, o que desloca o objetivo do cumprimento de limite para a minimização da exposição.' },
        { t: 'Mantida a concentração de fibras no ar em valor igual ao limite de tolerância adotado, a exposição está adequadamente controlada e não há risco residual relevante a considerar.', ok: false,
          why: 'Incorreta. O limite de tolerância para carcinógeno sem limiar não define segurança: apenas reduz, sem eliminar, a probabilidade de dano.' },
        { t: 'A classificação internacional de carcinogenicidade expressa a potência do agente, e não o grau de evidência científica disponível sobre sua capacidade de causar câncer.', ok: false,
          why: 'Incorreta. A classificação expressa força de evidência, não potência. Dois agentes do mesmo grupo podem ter riscos muito diferentes.' },
        { t: 'O uso de proteção respiratória adequada dispensa as medidas de engenharia e a substituição do agente cancerígeno no processo.', ok: false,
          why: 'Incorreta. Inverte a hierarquia de controle. Para carcinógenos, substituição e controle na fonte são prioritários.' },
        { t: 'A existência de lista nacional de agentes cancerígenos torna dispensável a consulta às avaliações internacionais.', ok: false,
          why: 'Incorreta. As listas se complementam, e as avaliações internacionais são atualizadas com frequência.' }
      ],
      comentario: 'Guarde a frase que resolve o tema: a classificação mede EVIDÊNCIA, não potência. E para carcinogênico sem limiar, a meta nunca é "chegar ao limite" — é substituir, e não sendo possível, reduzir ao mínimo tecnicamente viável.',
      pegadinha: 'A alternativa do limite de tolerância como prova de controle é o argumento técnico mais usado para relativizar exposições a cancerígenos.',
      refs: ['IARC Monographs', 'LINACH', 'ACGIH — TLVs e BEIs'] }
  ] },

{ id: 'caso-012',
  titulo: 'Alteração em monitoramento biológico em reforma de baterias',
  temas: ['2.9', '2.6', '6.1', '5.2'],
  nivel: 'dificil',
  vinheta: 'Empresa de reforma e reciclagem de baterias chumbo-ácido, com 40 trabalhadores, realiza exame periódico. Trabalhador de 41 anos, três anos no setor de fundição de grades, encontra-se assintomático, mas apresenta indicador biológico de exposição ao chumbo bem acima do valor de referência, com queda discreta de hemoglobina em relação ao exame anterior. Outros seis trabalhadores do mesmo setor apresentam indicadores elevados, em graus variados. A avaliação ambiental mais recente é de dois anos atrás e concluiu por "exposição dentro do limite". O setor possui sistema de exaustão instalado há cinco anos, sem registro de manutenção. Os trabalhadores fazem refeições em área contígua ao setor produtivo e não há vestiário com barreira entre roupa de trabalho e roupa comum. A empresa pergunta se pode simplesmente prescrever "medicação para eliminar o chumbo" e manter a produção, pois a demanda está alta.',
  questoes: [
    { enunciado: 'Sobre o significado do indicador biológico alterado em trabalhador assintomático, é CORRETO afirmar:',
      alts: [
        { t: 'Indica absorção excessiva do agente e exige investigar a exposição, as medidas de controle e o próprio trabalhador, mas não constitui, por si, diagnóstico de doença.', ok: true,
          why: 'Correta. O indicador biológico de exposição mede absorção, não doença. Alteração em assintomático é sinal de alerta sobre o controle, e não caracteriza incapacidade laborativa.' },
        { t: 'Como o trabalhador permanece assintomático e mantém desempenho normal na função, o resultado deve ser apenas anotado no prontuário e repetido na data do próximo exame periódico programado.', ok: false,
          why: 'Incorreta. O indicador alterado é justamente o achado precoce que permite agir antes da doença. Esperar o periódico seguinte desperdiça essa janela.' },
        { t: 'O resultado confirma o diagnóstico de intoxicação pelo agente e caracteriza incapacidade laborativa, com indicação de afastamento previdenciário imediato.', ok: false,
          why: 'Incorreta. Absorção excessiva não é intoxicação, que exige quadro clínico ou laboratorial de dano. Nem toda alteração gera incapacidade.' },
        { t: 'A alteração aponta suscetibilidade individual ao agente e recomenda o desligamento do trabalhador da empresa.', ok: false,
          why: 'Incorreta. A resposta é controlar a exposição, e não excluir o exposto. Desligar por resultado de exame é conduta discriminatória.' },
        { t: 'A queda de hemoglobina afasta a relação com o chumbo e sugere causa nutricional a ser investigada.', ok: false,
          why: 'Incorreta. O chumbo interfere na síntese do heme e a anemia é achado esperado na absorção excessiva, o que reforça a relação.' }
      ],
      comentario: 'Indicador biológico alterado = absorção excessiva. Dispara três ações: investigar a exposição, reavaliar o trabalhador e afastar da exposição conforme o protocolo aplicável. Nunca é, isoladamente, diagnóstico de doença ou de incapacidade.',
      pegadinha: 'Os dois extremos aparecem juntos: não fazer nada por ausência de sintoma e desligar o trabalhador por "suscetibilidade".',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-7'] },

    { enunciado: 'Diante da proposta da empresa de prescrever quelante e manter a produção, a conduta CORRETA é:',
      alts: [
        { t: 'Recusar a proposta, pois a terapia quelante tem indicação clínica precisa e não é medida preventiva coletiva.', ok: true,
          why: 'Correta. Usar quelante para viabilizar a continuidade de exposição não controlada inverte a lógica da prevenção, expõe a efeitos adversos e pode até aumentar a absorção do agente.' },
        { t: 'Aceitar a proposta, desde que o quelante seja administrado de forma profilática a todos os trabalhadores do setor, e não apenas aos que apresentaram alteração no monitoramento biológico.', ok: false,
          why: 'Incorreta. Estender a medicação a todos agrava o erro: medica-se um grupo saudável para não corrigir a fonte do risco.' },
        { t: 'Aceitar a proposta, desde que os trabalhadores assinem termo de consentimento informado sobre os riscos e benefícios da medicação proposta pela empresa.', ok: false,
          why: 'Incorreta. Consentimento não legitima conduta tecnicamente errada, e a relação de subordinação compromete a liberdade da escolha.' },
        { t: 'Aceitar temporariamente a medida, até que a demanda de produção do período diminua e permita parar a linha para manutenção.', ok: false,
          why: 'Incorreta. A produção não pode se sobrepor ao controle de exposição a agente comprovadamente tóxico.' },
        { t: 'Encaminhar a decisão ao setor jurídico da empresa, por se tratar de matéria de natureza contratual.', ok: false,
          why: 'Incorreta. A indicação de terapêutica é decisão médica, indelegável, e não questão contratual.' }
      ],
      comentario: 'Este é um dos poucos pontos em que a resposta é simplesmente "não". Quelação é tratamento, não medida de proteção. Empregar tratamento para sustentar exposição descontrolada é inaceitável técnica e eticamente.',
      pegadinha: 'A alternativa do termo de consentimento reaparece como falsa saída — consentimento não substitui proteção.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'Código de Ética Médica'] },

    { enunciado: 'Sobre a avaliação ambiental que concluiu por "exposição dentro do limite", a crítica CORRETA é:',
      alts: [
        { t: 'A avaliação está desatualizada e é contrariada pelos achados biológicos; estar abaixo do limite não garante ausência de risco.', ok: true,
          why: 'Correta. O monitoramento biológico integra todas as vias de absorção, inclusive a digestiva por higiene inadequada e a dérmica, que a medição do ar não capta.' },
        { t: 'A avaliação ambiental prevalece sobre o monitoramento biológico, que deve ser desconsiderado quando houver discrepância entre os dois métodos de avaliação da exposição.', ok: false,
          why: 'Incorreta. Os métodos são complementares, e o indicador biológico reflete a dose efetivamente absorvida pelo organismo.' },
        { t: 'A discrepância entre os dois métodos indica necessariamente erro laboratorial no monitoramento biológico, o que exige repetir as coletas em laboratório de referência antes de qualquer providência.', ok: false,
          why: 'Incorreta. Sete trabalhadores alterados não se explicam por erro laboratorial. A discrepância aponta vias de absorção não avaliadas.' },
        { t: 'Como há sistema de exaustão instalado no setor, a exposição pode ser considerada controlada por presunção.', ok: false,
          why: 'Incorreta. Sistema instalado não é sistema eficaz. Sem manutenção e medição de desempenho, não há controle demonstrado.' },
        { t: 'Hábitos de higiene e de alimentação no setor não influenciam a absorção de agentes químicos.', ok: false,
          why: 'Incorreta. Comer no setor e não higienizar as mãos são vias diretas de absorção digestiva do chumbo.' }
      ],
      comentario: 'Quando o ambiental diz "ok" e o biológico diz "não", suspeite de vias não avaliadas — ingestão por mãos contaminadas, refeição no setor, roupa contaminada — e de perda de eficácia do controle por falta de manutenção. O dado biológico ganha, porque mede o que efetivamente entrou no organismo.',
      pegadinha: 'Atribuir a discrepância a erro de laboratório é o atalho que evita rever o processo produtivo.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-9'] },

    { enunciado: 'Sobre as medidas de controle a serem recomendadas, a alternativa CORRETA é:',
      alts: [
        { t: 'Restabelecer a eficácia da exaustão com manutenção e medição posterior, proibir alimentação no setor produtivo e implantar vestiário com barreira entre roupa de trabalho e roupa comum.', ok: true,
          why: 'Correta. Somam-se a higienização institucional dos uniformes, que evita a exposição paraocupacional, e o programa de higiene das mãos antes das refeições, que corta a via digestiva.' },
        { t: 'Fornecer respiradores com filtro adequado a todos os trabalhadores do setor e manter as demais condições de trabalho inalteradas, por serem os respiradores a proteção mais direta contra a inalação.', ok: false,
          why: 'Incorreta. A proteção individual é a última linha da hierarquia e não atua sobre a via digestiva, que é decisiva nesse caso.' },
        { t: 'Aumentar a frequência do monitoramento biológico para acompanhar mais de perto a evolução dos indicadores, sem alterar as condições de trabalho do setor.', ok: false,
          why: 'Incorreta. Monitorar mais não reduz exposição: apenas documenta com mais detalhe o adoecimento em curso.' },
        { t: 'Realizar rodízio dos trabalhadores entre os setores da fábrica, de modo a diluir a exposição individual ao agente.', ok: false,
          why: 'Incorreta. O rodízio distribui o risco por mais pessoas em vez de eliminá-lo, e é inaceitável como medida de controle.' },
        { t: 'Suspender o monitoramento biológico enquanto as medidas de engenharia estiverem sendo implantadas.', ok: false,
          why: 'Incorreta. É exatamente durante a transição que o acompanhamento se torna mais necessário.' }
      ],
      comentario: 'Para o chumbo, controlar significa agir em duas vias: respiratória (exaustão eficaz, com manutenção e verificação) e digestiva (proibição de comer no setor, higiene das mãos, vestiário com barreira e lavagem institucional dos uniformes). Esta última protege também a família.',
      pegadinha: 'O rodízio aparece como medida engenhosa e apenas amplia o número de expostos.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-9', 'NR-6'] },

    { enunciado: 'Quanto ao programa de controle médico e às providências para o conjunto dos trabalhadores, é CORRETO afirmar:',
      alts: [
        { t: 'O achado em sete trabalhadores caracteriza evento sentinela coletivo, com avaliação de todos os expostos e notificação do agravo.', ok: true,
          why: 'Correta. Impõem-se ainda o afastamento da exposição dos alterados conforme protocolo e a revisão do programa de controle médico e do gerenciamento de riscos do setor.' },
        { t: 'Basta acompanhar individualmente cada trabalhador com indicador alterado, com repetição dos exames e orientação pessoal, sem necessidade de medidas dirigidas ao conjunto dos expostos do setor.', ok: false,
          why: 'Incorreta. Sete casos no mesmo setor indicam falha de controle que atinge todo o grupo, e não um problema individual multiplicado.' },
        { t: 'A notificação do agravo à vigilância em saúde só é devida se algum dos trabalhadores apresentar sintomas clínicos de intoxicação pelo agente químico.', ok: false,
          why: 'Incorreta. A exposição excessiva a agente químico já é agravo notificável, e a notificação por suspeita é o que permite a ação oportuna.' },
        { t: 'O relatório anual do programa de controle médico não precisa mencionar os achados alterados, por conterem dados de saúde protegidos por sigilo.', ok: false,
          why: 'Incorreta. O relatório apresenta dados agregados e sem identificação, e a omissão dos achados descaracteriza sua função de planejamento.' },
        { t: 'A empresa pode substituir os trabalhadores alterados por novos contratados, resolvendo o problema.', ok: false,
          why: 'Incorreta. É rotatividade como forma de burlar o controle: mantém a exposição e apenas troca quem adoece.' }
      ],
      comentario: 'Sete alterações no mesmo setor é evento sentinela coletivo. O relatório analítico do programa médico é justamente o documento que deve traduzir esses achados em exigência de mudança no controle de risco — sempre agregado, nunca com identificação nominal.',
      pegadinha: 'Substituir os trabalhadores alterados é a "solução" que mais aparece na prática real e a mais indefensável.',
      refs: ['NR-7', 'NR-9', 'SINAN — Ministério da Saúde'] }
  ] }

);
