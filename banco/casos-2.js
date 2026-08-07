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
        { t: 'O quadro é compatível com dermatose ocupacional, e a relação temporal — melhora completa no afastamento e recidiva após o retorno — é um dos critérios que reforçam a origem ocupacional, exigindo investigar tanto o mecanismo irritativo quanto o alérgico.', ok: true,
          why: 'Correta. Melhora no afastamento e recidiva no retorno é critério clássico a favor do nexo, e a coexistência de agente sensibilizante (resina epóxi) com fator irritativo (oclusão e umidade sob a luva) exige avaliar os dois mecanismos.' },
        { t: 'A melhora nas férias afasta a origem ocupacional e sugere dermatite atópica descompensada por estresse.', ok: false,
          why: 'Errada, e é a inversão central do tema: a relação temporal com o afastamento reforça o nexo, não o afasta.' },
        { t: 'A história de rinite na infância torna o quadro necessariamente atópico, sem relação com o trabalho.', ok: false,
          why: 'Errada. Atopia é fator predisponente e, quando muito, concausa — não afasta a contribuição da exposição ocupacional.' },
        { t: 'A ocorrência de casos semelhantes em colegas do mesmo setor é irrelevante para o raciocínio diagnóstico individual.', ok: false,
          why: 'Errada. O agrupamento de casos com mesma inserção ocupacional é um dos dados mais fortes a favor de causa ocupacional comum.' },
        { t: 'O acometimento poupando as palmas exclui causa exógena, indicando dermatose endógena.', ok: false,
          why: 'Errada. O dorso das mãos tem estrato córneo mais fino e é o sítio mais acometido nas dermatoses de contato; a palma, mais espessa, costuma ser poupada.' }
      ],
      comentario: 'Três dados convergem: topografia compatível com contato, relação temporal com o trabalho e agrupamento de casos no setor. Nenhum deles isolado fecha o diagnóstico, mas os três juntos tornam a hipótese ocupacional a mais provável.',
      pegadinha: 'A banca oferece a melhora nas férias como se afastasse o nexo. É exatamente o contrário.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Quanto à diferenciação entre dermatite de contato irritativa e alérgica neste caso, é CORRETO afirmar:',
      alts: [
        { t: 'Ambos os mecanismos podem coexistir: a oclusão e a umidade sob a luva favorecem o componente irritativo, que rompe a barreira cutânea e facilita a sensibilização à resina, responsável pelo componente alérgico.', ok: true,
          why: 'Correta. A irritação prévia compromete a barreira e aumenta a penetração do sensibilizante — a associação dos dois mecanismos é frequente e clinicamente relevante.' },
        { t: 'A dermatite irritativa exige sensibilização prévia e acomete apenas indivíduos geneticamente predispostos.', ok: false,
          why: 'Errada. Quem exige sensibilização prévia é a alérgica; a irritativa decorre de dano direto e pode acometer qualquer pessoa suficientemente exposta.' },
        { t: 'A dermatite alérgica é mais frequente que a irritativa no ambiente ocupacional.', ok: false,
          why: 'Errada. A irritativa é a forma mais frequente das dermatoses de contato ocupacionais.' },
        { t: 'A extensão das lesões para além da área de contato direto indica necessariamente mecanismo irritativo.', ok: false,
          why: 'Errada, e inverte: é a alérgica que pode extrapolar a área de contato; a irritativa tende a respeitar os limites da exposição.' },
        { t: 'Sendo alérgica, a dermatite regride mesmo com a manutenção da exposição, desde que se use corticoide tópico.', ok: false,
          why: 'Errada. Sem afastar o alérgeno, o quadro recidiva; corticoide controla sintoma e não substitui a remoção da exposição.' }
      ],
      comentario: 'Irritativa: dano direto, dose-dependente, atinge qualquer um, respeita a área de contato, mais frequente. Alérgica: hipersensibilidade tardia, exige sensibilização, atinge os sensibilizados, pode extrapolar a área. Na prática ocupacional as duas coexistem com frequência.',
      pegadinha: 'A troca dos requisitos entre irritativa e alérgica é o distrator preferido do tema.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Sobre a investigação complementar indicada, a alternativa CORRETA é:',
      alts: [
        { t: 'Está indicado o teste de contato com bateria apropriada, incluindo os agentes presentes na atividade, com leituras diferidas em mais de um momento — resultado positivo indica sensibilização e deve ser confrontado com a exposição real para sustentar o nexo.', ok: true,
          why: 'Correta. O teste investiga hipersensibilidade tardia e exige leituras diferidas; positividade demonstra sensibilização, e o nexo se completa demonstrando que o alérgeno está presente na atividade.' },
        { t: 'O teste de contato deve ser lido imediatamente após a aplicação, pois a reação relevante é do tipo imediato.', ok: false,
          why: 'Errada. Leitura imediata avalia reações do tipo imediato, mecanismo diferente do investigado no eczema de contato.' },
        { t: 'Teste de contato positivo comprova por si o nexo ocupacional, dispensando a análise da exposição no posto.', ok: false,
          why: 'Errada. Positividade indica sensibilização, que pode ter origem extraocupacional; o nexo exige demonstrar a presença do agente na atividade.' },
        { t: 'A dosagem sérica de imunoglobulina E é o exame de escolha para confirmar dermatite de contato alérgica.', ok: false,
          why: 'Errada. Não é o exame indicado para hipersensibilidade tardia mediada por células.' },
        { t: 'Biópsia de pele é obrigatória antes de qualquer outra investigação em dermatose ocupacional.', ok: false,
          why: 'Errada. A biópsia tem indicações específicas e não é etapa obrigatória inicial; a histologia raramente distingue os mecanismos de contato.' }
      ],
      comentario: 'O teste de contato é o exame central, com leituras diferidas. Ele responde "houve sensibilização?", não "o nexo existe?" — a segunda pergunta exige cruzar o resultado com a composição dos produtos manipulados, o que torna a ficha de informações de segurança um documento clínico.',
      pegadinha: 'Tratar a positividade do teste como prova do nexo ignora as exposições extraocupacionais.',
      refs: ['Salim — Dermatoses Ocupacionais'] },

    { enunciado: 'Quanto à conduta em relação ao equipamento de proteção e às medidas de controle, é CORRETO afirmar:',
      alts: [
        { t: 'A luva de látex pode ser inadequada tanto por permeação ao agente quanto por ser ela própria sensibilizante, e a seleção do material deve ser feita conforme o agente manipulado, com atenção à oclusão prolongada, que por si causa dermatite irritativa.', ok: true,
          why: 'Correta. Material da luva é decisão técnica: resistência à permeação do agente específico, tempo de uso e manejo da umidade sob a luva.' },
        { t: 'Qualquer luva serve desde que íntegra e trocada semanalmente.', ok: false,
          why: 'Errada. Materiais diferentes têm resistências diferentes; luva inadequada permite permeação e mantém o agente em contato prolongado com a pele.' },
        { t: 'A prescrição de creme de barreira substitui a necessidade de rever a luva e o processo.', ok: false,
          why: 'Errada. Creme de barreira é medida complementar de eficácia limitada e não substitui proteção adequada nem controle na fonte.' },
        { t: 'Como se trata de risco à pele, a hierarquia de controles não se aplica, bastando o equipamento individual.', ok: false,
          why: 'Errada. A hierarquia é transversal: substituição do agente e medidas de engenharia precedem o equipamento individual também nas dermatoses.' },
        { t: 'A oclusão prolongada pela luva é irrelevante, pois protege a pele do contato com o produto.', ok: false,
          why: 'Errada. Calor, umidade e oclusão sob a luva são causa reconhecida de dermatite irritativa.' }
      ],
      comentario: 'Ordem correta: substituir o agente quando viável, isolar o processo, escolher o material da luva pelo agente, cuidar da integridade da pele e, por último, creme de barreira. E lembre que a própria luva pode ser causa — por permeação, por oclusão ou por sensibilização ao material.',
      pegadinha: 'A luva aparece no caso como solução e é, ao mesmo tempo, parte provável do problema.',
      refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

    { enunciado: 'Sobre as providências institucionais e o programa de controle médico, a conduta CORRETA é:',
      alts: [
        { t: 'Investigar os demais trabalhadores do setor, incluir a avaliação dermatológica dirigida no programa de controle médico para os expostos, obter as fichas de informações de segurança dos produtos e articular a revisão do gerenciamento de riscos, além de notificar e assegurar a comunicação do agravo.', ok: true,
          why: 'Correta. O caso índice dispara investigação coletiva, adequação do programa médico ao risco real, obtenção das informações de segurança e realimentação do gerenciamento de riscos — além dos registros devidos.' },
        { t: 'Basta afastar o trabalhador do setor e acompanhar sua evolução individualmente.', ok: false,
          why: 'Errada. Resolver o caso e deixar a exposição intacta garante novos casos entre os colegas.' },
        { t: 'A ficha de informações de segurança é documento de interesse exclusivo do setor de compras.', ok: false,
          why: 'Errada. É documento técnico essencial para a avaliação de risco, para a conduta clínica e para a resposta a emergências.' },
        { t: 'A notificação do agravo cabe apenas à rede pública, não a serviço médico contratado pela empresa.', ok: false,
          why: 'Errada. A notificação é obrigação de serviços de saúde públicos e privados.' },
        { t: 'Como não houve afastamento do trabalho, não há necessidade de qualquer registro previdenciário.', ok: false,
          why: 'Errada. A comunicação do agravo relacionado ao trabalho é devida independentemente de afastamento.' }
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
        { t: 'O quadro é compatível com burnout, fenômeno ocupacional definido por exaustão, distanciamento mental do trabalho e redução da eficácia profissional, resultante de estresse crônico no trabalho não gerenciado com sucesso.', ok: true,
          why: 'Correta. As três dimensões estão presentes no relato e a conceituação vigente é expressamente circunscrita ao contexto ocupacional.' },
        { t: 'Trata-se de transtorno de personalidade, cujo manejo é exclusivamente psicoterápico e independe de mudanças no ambiente.', ok: false,
          why: 'Errada em ambos os pontos: não é transtorno de personalidade, e a intervenção organizacional é parte essencial da conduta.' },
        { t: 'O bom desempenho registrado afasta o diagnóstico, pois burnout implica queda objetiva de produtividade.', ok: false,
          why: 'Errada. A dimensão de redução da eficácia é vivenciada subjetivamente e pode preceder qualquer queda mensurável de desempenho.' },
        { t: 'A presença de filhas pequenas indica que a sobrecarga é doméstica, afastando a relação com o trabalho.', ok: false,
          why: 'Errada. Sobrecarga extralaboral pode ser concausa, e concausa não rompe o nexo.' },
        { t: 'Burnout e depressão são mutuamente excludentes, de modo que a presença de um afasta o outro.', ok: false,
          why: 'Errada. A sobreposição é frequente e precisa ser ativamente avaliada, porque muda a conduta terapêutica.' }
      ],
      comentario: 'Três dimensões: exaustão, distanciamento mental e redução da eficácia profissional. O conceito é ocupacional por definição, o que já orienta a conduta: tratar o indivíduo e devolvê-lo ao mesmo ambiente reproduz o adoecimento.',
      pegadinha: 'Usar a carga doméstica para afastar o nexo ignora a lógica da concausalidade.',
      refs: ['Mendanha — O que ninguém te contou sobre burnout', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

    { enunciado: 'Analisando a organização do trabalho descrita à luz dos modelos teóricos de estresse ocupacional, é CORRETO afirmar:',
      alts: [
        { t: 'A combinação de alta demanda com baixo controle sobre a própria atividade caracteriza situação de alta exigência, agravada pela ausência de apoio da chefia, e o desequilíbrio entre o esforço despendido e o reconhecimento recebido acrescenta um segundo eixo de risco.', ok: true,
          why: 'Correta. Metas crescentes, monitoramento contínuo e pausas rígidas configuram alta demanda com baixa autonomia; a cobrança humilhante retira o apoio social e a estima, que integram a recompensa.' },
        { t: 'O risco decorre exclusivamente do volume de ligações, sendo a autonomia irrelevante nesse tipo de atividade.', ok: false,
          why: 'Errada. O ponto central do modelo demanda-controle é que a demanda alta é tolerável quando há controle; o que adoece é a combinação.' },
        { t: 'Ranking público e monitoramento eletrônico são práticas neutras do ponto de vista da saúde mental.', ok: false,
          why: 'Errada. Exposição pública do desempenho e vigilância contínua são fatores de risco psicossocial reconhecidos.' },
        { t: 'Pausas de horário fixo eliminam o risco ergonômico e psicossocial da atividade.', ok: false,
          why: 'Errada. Pausas rígidas, sem possibilidade de regulação pelo trabalhador, podem inclusive reduzir a autonomia.' },
        { t: 'O modelo esforço-recompensa considera apenas a remuneração como recompensa relevante.', ok: false,
          why: 'Errada. A recompensa inclui estima, perspectiva de carreira e segurança no emprego.' }
      ],
      comentario: 'Demanda-controle: risco na alta demanda com baixa autonomia, modulado pelo apoio social. Esforço-recompensa: risco no desequilíbrio entre o que se investe e o que se recebe — incluindo estima e segurança. Em teleatendimento os dois modelos se aplicam simultaneamente.',
      pegadinha: 'Reduzir o risco ao volume de trabalho apaga o conceito de controle, que é o núcleo do modelo.',
      refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-17'] },

    { enunciado: 'Diante do pedido do gerente para conhecer o diagnóstico, a conduta ética CORRETA é:',
      alts: [
        { t: 'Recusar o fornecimento do diagnóstico, informando ao gestor apenas a conclusão sobre aptidão e as restrições necessárias, e esclarecer que o sigilo protege a trabalhadora e não é afastado pelo fato de a empresa custear o serviço.', ok: true,
          why: 'Correta. À empresa comunicam-se aptidão e restrições; o diagnóstico é protegido pelo sigilo, que independe de quem contrata ou custeia o atendimento.' },
        { t: 'Fornecer o diagnóstico, pois o gestor precisa da informação para adequar a distribuição de tarefas.', ok: false,
          why: 'Errada. A necessidade gerencial se satisfaz com restrições operacionais, não com a revelação da condição de saúde.' },
        { t: 'Informar apenas que a trabalhadora está em acompanhamento psiquiátrico, sem citar o diagnóstico.', ok: false,
          why: 'Errada. Revelar que há acompanhamento psiquiátrico já expõe dado sensível e a submete a estigma.' },
        { t: 'Fornecer o diagnóstico mediante termo de confidencialidade assinado pelo gestor.', ok: false,
          why: 'Errada. Termo assinado não legitima a transferência de dado sensível a setor não assistencial.' },
        { t: 'Encaminhar o gestor diretamente à trabalhadora para que ela decida se conta ou não, durante a jornada.', ok: false,
          why: 'Errada. Colocar a trabalhadora nessa posição perante a chefia é constrangedor e desloca para ela o ônus de proteger o próprio sigilo.' }
      ],
      comentario: 'Regra de ouro: à empresa vão APTIDÃO e RESTRIÇÕES; nunca diagnóstico. Nem custeio do serviço, nem termo de confidencialidade, nem "só dizer que está em tratamento" legitimam a revelação — a própria condição de estar em acompanhamento é dado sensível.',
      pegadinha: 'As quatro alternativas erradas oferecem quatro formas diferentes de racionalizar a mesma quebra de sigilo.',
      refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

    { enunciado: 'Quanto ao reconhecimento da relação com o trabalho e às providências de registro, é CORRETO afirmar:',
      alts: [
        { t: 'Transtornos mentais podem ser reconhecidos como relacionados ao trabalho, e o agrupamento de afastamentos no mesmo time reforça a hipótese de determinantes organizacionais, cabendo notificação do agravo e comunicação do acidente quando caracterizados.', ok: true,
          why: 'Correta. Transtornos mentais integram os agravos relacionados ao trabalho, o agrupamento é dado epidemiológico relevante, e os registros sanitário e previdenciário são devidos e coexistentes.' },
        { t: 'Transtornos mentais não podem ser reconhecidos como relacionados ao trabalho por dependerem de vulnerabilidade individual.', ok: false,
          why: 'Errada. Vulnerabilidade individual é, quando muito, concausa — e concausa não rompe o nexo.' },
        { t: 'Como não houve acidente típico nem lesão física, não há qualquer registro a ser feito.', ok: false,
          why: 'Errada. Perturbação funcional decorrente do trabalho é equiparada a acidente do trabalho, independentemente de lesão física.' },
        { t: 'O reconhecimento depende exclusivamente da conclusão da perícia previdenciária, nada cabendo ao médico do trabalho.', ok: false,
          why: 'Errada. O reconhecimento começa na assistência e no serviço ocupacional; aguardar a perícia perpetua a subnotificação.' },
        { t: 'A notificação de agravo relacionado ao trabalho exige confirmação diagnóstica por especialista antes de ser feita.', ok: false,
          why: 'Errada. A notificação decorre da suspeita, nas hipóteses previstas.' }
      ],
      comentario: 'Três afastamentos por transtorno mental no mesmo time é sinal epidemiológico, não coincidência. Transtorno mental relacionado ao trabalho gera notificação e, caracterizado o nexo, comunicação do acidente — mesmo sem lesão física e sem aguardar a perícia.',
      pegadinha: 'Condicionar tudo à perícia previdenciária é a prática mais comum e a principal causa de subnotificação em saúde mental.',
      refs: ['Lei nº 8.213/1991 — art. 19 e 20', 'SINAN — Ministério da Saúde'] },

    { enunciado: 'Sobre o plano de intervenção a ser proposto pelo serviço médico, a conduta mais adequada é:',
      alts: [
        { t: 'Combinar o cuidado individual — encaminhamento, tratamento e eventual afastamento — com recomendações formais de intervenção sobre a organização do trabalho, incluindo revisão de metas, do monitoramento, do regime de pausas e da conduta da chefia, com registro da comunicação à empresa.', ok: true,
          why: 'Correta. Sem intervenção nos determinantes organizacionais, o tratamento individual apenas devolve a trabalhadora ao ambiente que a adoeceu — e os colegas seguem expostos.' },
        { t: 'Encaminhar para psicoterapia e retornar a trabalhadora à mesma função e às mesmas metas assim que houver melhora sintomática.', ok: false,
          why: 'Errada. É a receita conhecida de recidiva.' },
        { t: 'Propor um programa de resiliência e mindfulness para o time, mantendo metas e monitoramento inalterados.', ok: false,
          why: 'Errada. Transfere ao trabalhador a responsabilidade por suportar um ambiente adoecedor.' },
        { t: 'Recomendar a demissão da trabalhadora por incompatibilidade com o perfil da função.', ok: false,
          why: 'Errada e discriminatória: a resposta a adoecimento relacionado ao trabalho não é eliminar o adoecido.' },
        { t: 'Aguardar novos casos para caracterizar padrão antes de qualquer recomendação à empresa.', ok: false,
          why: 'Errada. Já há três afastamentos no mesmo time; aguardar mais casos é omissão diante de risco identificado.' }
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
        { t: 'A latência prolongada entre a exposição e o diagnóstico é característica do mesotelioma relacionado ao asbesto e reforça o nexo, em vez de afastá-lo, e as placas pleurais bilaterais funcionam como marcadores de exposição prévia.', ok: true,
          why: 'Correta. A latência de décadas é traço definidor da doença, e as placas pleurais são marcadores biológicos de exposição pregressa ao asbesto.' },
        { t: 'O intervalo superior a vinte anos desde o fim da exposição afasta a relação causal com o trabalho.', ok: false,
          why: 'Errada, e inverte o raciocínio: latência curta é que seria incompatível com o que se conhece da doença.' },
        { t: 'A ausência de asbestose no exame de imagem exclui exposição significativa ao asbesto.', ok: false,
          why: 'Errada. Mesotelioma ocorre sem asbestose associada; são desfechos distintos da mesma exposição.' },
        { t: 'Por ser não fumante, o paciente não poderia desenvolver neoplasia relacionada a exposição ocupacional.', ok: false,
          why: 'Errada. O mesotelioma não guarda relação causal com o tabagismo — que, aliás, aqui está ausente, reforçando a exposição ocupacional como explicação.' },
        { t: 'O mesotelioma exige exposição intensa e contínua, não ocorrendo em exposições de menor intensidade.', ok: false,
          why: 'Errada. Há casos associados a exposições de baixa intensidade, inclusive ambientais e domésticas.' }
      ],
      comentario: 'Mesotelioma e asbesto: latência de décadas, ausência de relação com tabagismo, ocorrência mesmo em baixa intensidade e independência em relação à presença de asbestose. Todos esses elementos, no caso, sustentam o nexo.',
      pegadinha: 'Usar a latência longa como argumento contra o nexo é o raciocínio invertido mais frequente em câncer ocupacional.',
      refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs', 'Santos, U.P. — Pneumologia Ocupacional'] },

    { enunciado: 'A informação de que a esposa sacudia e lavava o uniforme em casa é relevante porque:',
      alts: [
        { t: 'Caracteriza exposição paraocupacional (doméstica), reconhecida como forma de exposição ao asbesto capaz de gerar doença em familiares, o que indica avaliar também a esposa e reforça a magnitude da contaminação do processo produtivo.', ok: true,
          why: 'Correta. A exposição de familiares por fibras trazidas nas roupas é documentada e representa uma das provas mais eloquentes de falha no controle da fonte.' },
        { t: 'É irrelevante, pois exposição fora do ambiente de trabalho não guarda relação com o asbesto.', ok: false,
          why: 'Errada. Exposição doméstica e ambiental ao asbesto está associada a casos de mesotelioma.' },
        { t: 'Indica que a doença do trabalhador tem origem doméstica, e não ocupacional.', ok: false,
          why: 'Errada. A fonte é a mesma — o processo produtivo; a via doméstica é adicional, não alternativa.' },
        { t: 'Sugere que a empresa cumpria adequadamente as medidas de controle, já que fornecia uniforme.', ok: false,
          why: 'Errada. Uniforme levado para casa contaminado demonstra ausência de higienização e de vestiário adequado — falha de controle.' },
        { t: 'Só teria relevância se a esposa também tivesse trabalhado na mesma empresa.', ok: false,
          why: 'Errada. A exposição paraocupacional se define justamente por atingir quem não trabalha no local.' }
      ],
      comentario: 'A exposição paraocupacional é um clássico do asbesto: fibras transportadas em roupas e calçados atingem familiares. Do ponto de vista prático, indica avaliar a família e evidencia falha grave de controle — ausência de vestiário duplo e de higienização institucional dos uniformes.',
      pegadinha: 'A alternativa que lê o fornecimento de uniforme como cumprimento de obrigação inverte o significado do achado.',
      refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs'] },

    { enunciado: 'Sobre as providências de registro e notificação neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'Cabe notificar o câncer relacionado ao trabalho no sistema de agravos e orientar quanto à comunicação do acidente para fins previdenciários, pois o reconhecimento independe de o trabalhador estar aposentado e de a empresa ainda existir.', ok: true,
          why: 'Correta. Notificação e comunicação são devidas independentemente da situação contratual atual; a aposentadoria não extingue o direito ao reconhecimento do agravo relacionado ao trabalho.' },
        { t: 'Como o paciente está aposentado, não há providência de registro a ser adotada.', ok: false,
          why: 'Errada. O registro é devido e é justamente o que permite reconhecimento de direitos e vigilância do agravo.' },
        { t: 'A notificação só é cabível se a empresa ainda estiver em funcionamento.', ok: false,
          why: 'Errada. A existência atual da empresa não é condição para a notificação sanitária.' },
        { t: 'A notificação substitui a comunicação de acidente do trabalho.', ok: false,
          why: 'Errada. São instrumentos com finalidades distintas e coexistentes.' },
        { t: 'Cabe apenas registro em prontuário, sem comunicação a qualquer sistema externo.', ok: false,
          why: 'Errada. Câncer relacionado ao trabalho integra a lista de agravos de notificação.' }
      ],
      comentario: 'Aposentadoria não apaga o nexo. Câncer relacionado ao trabalho é agravo notificável, e a comunicação previdenciária permanece cabível — inclusive para efeitos sobre dependentes. Registrar é o que transforma um caso individual em dado de vigilância.',
      pegadinha: 'A ideia de que "não há mais o que fazer porque ele já se aposentou" é a omissão mais frequente nesses casos.',
      refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre o acompanhamento de trabalhadores expostos ao asbesto em geral, é CORRETO afirmar:',
      alts: [
        { t: 'O acompanhamento deve considerar a latência prolongada e pode ser necessário mesmo após o encerramento da exposição e do vínculo, o que exige registro duradouro da história ocupacional e sua transferência entre serviços.', ok: true,
          why: 'Correta. Com latências de décadas, a informação sobre a exposição precisa sobreviver ao vínculo, sob pena de o caso futuro perder o nexo por falta de registro.' },
        { t: 'Encerrada a exposição, cessa a necessidade de acompanhamento.', ok: false,
          why: 'Errada. É após o fim da exposição que a maior parte dos casos se manifesta.' },
        { t: 'A tomografia de tórax anual está indicada para todos os expostos, independentemente de evidência de benefício.', ok: false,
          why: 'Errada. Rastreamento exige método com desempenho comprovado e benefício demonstrado; rastrear sem isso gera dano.' },
        { t: 'A presença de placas pleurais indica necessidade de afastamento imediato de qualquer atividade laboral.', ok: false,
          why: 'Errada. Placas pleurais são marcadores de exposição, frequentemente assintomáticas e sem, por si, gerar incapacidade.' },
        { t: 'Trabalhadores expostos ao asbesto não necessitam de registro específico de exposição no prontuário.', ok: false,
          why: 'Errada. É justamente esse registro que sustentará o nexo décadas depois.' }
      ],
      comentario: 'Duas consequências práticas da latência longa: o acompanhamento se estende além do vínculo e o registro precisa ser duradouro. Rastreamento, porém, só com método de desempenho comprovado — do contrário se aplica a lógica da prevenção quaternária.',
      pegadinha: 'Confundir placa pleural (marcador de exposição) com doença incapacitante leva a afastamentos indevidos.',
      refs: ['Santos, U.P. — Pneumologia Ocupacional', 'Ferreira Junior — Rastreamento de doenças'] },

    { enunciado: 'Quanto à classificação de carcinogenicidade e ao controle da exposição ao asbesto, é CORRETO afirmar:',
      alts: [
        { t: 'O asbesto é reconhecido como carcinogênico para humanos, e para agentes assim classificados sem limiar demonstrado a orientação é substituir o agente e, na impossibilidade, reduzir a exposição ao menor nível tecnicamente viável — não existindo concentração que possa ser considerada segura.', ok: true,
          why: 'Correta. Reconhecimento de carcinogenicidade em humanos, ausência de limiar seguro e prioridade da substituição são os três eixos do controle.' },
        { t: 'Mantida a concentração no valor do limite de tolerância, a exposição está adequadamente controlada.', ok: false,
          why: 'Errada. Para carcinogênicos sem limiar, o limite não representa fronteira de segurança.' },
        { t: 'A classificação internacional de carcinogenicidade expressa a potência do agente, e não o grau de evidência.', ok: false,
          why: 'Errada. A classificação mede a força da evidência de que o agente causa câncer, não sua potência.' },
        { t: 'O uso de proteção respiratória adequada dispensa medidas de engenharia e de substituição.', ok: false,
          why: 'Errada. O equipamento individual é o último degrau da hierarquia de controles.' },
        { t: 'A existência de lista nacional de agentes cancerígenos torna dispensável a consulta às avaliações internacionais.', ok: false,
          why: 'Errada. As fontes são complementares e a lista nacional se apoia na avaliação internacional de evidência.' }
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
        { t: 'Indica absorção excessiva do agente e exige investigação da exposição e das medidas de controle, além de reavaliação do trabalhador — não constitui, por si, diagnóstico de doença nem caracteriza incapacidade laborativa.', ok: true,
          why: 'Correta. O monitoramento biológico existe para detectar absorção antes do dano clínico; o achado é gatilho de investigação e intervenção, não diagnóstico.' },
        { t: 'Como o trabalhador está assintomático, o resultado deve ser apenas anotado e repetido no próximo periódico.', ok: false,
          why: 'Errada. Aguardar o sintoma anula a única vantagem do monitoramento biológico, que é a detecção precoce.' },
        { t: 'O resultado confirma o diagnóstico de intoxicação e caracteriza incapacidade laborativa.', ok: false,
          why: 'Errada. Indicador de exposição não é diagnóstico de doença nem, por si, define incapacidade.' },
        { t: 'A alteração indica suscetibilidade individual e recomenda o desligamento do trabalhador.', ok: false,
          why: 'Errada e discriminatória: a alteração indica exposição excessiva, e a resposta é controlar a exposição, não eliminar o exposto.' },
        { t: 'A queda de hemoglobina afasta a relação com o chumbo, sugerindo causa nutricional.', ok: false,
          why: 'Errada. A anemia é um dos efeitos conhecidos da exposição ao chumbo e, no contexto, reforça a preocupação.' }
      ],
      comentario: 'Indicador biológico alterado = absorção excessiva. Dispara três ações: investigar a exposição, reavaliar o trabalhador e afastar da exposição conforme o protocolo aplicável. Nunca é, isoladamente, diagnóstico de doença ou de incapacidade.',
      pegadinha: 'Os dois extremos aparecem juntos: não fazer nada por ausência de sintoma e desligar o trabalhador por "suscetibilidade".',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-7'] },

    { enunciado: 'Diante da proposta da empresa de prescrever quelante e manter a produção, a conduta CORRETA é:',
      alts: [
        { t: 'Recusar a proposta: a terapia quelante tem indicação clínica precisa, não é medida preventiva coletiva e jamais pode ser utilizada para viabilizar a continuidade de uma exposição não controlada.', ok: true,
          why: 'Correta. Usar tratamento para permitir que a exposição continue inverte a lógica da prevenção e expõe o trabalhador ao risco do próprio tratamento.' },
        { t: 'Aceitar, desde que o quelante seja administrado a todos os trabalhadores do setor de forma profilática.', ok: false,
          why: 'Errada. Quelação profilática coletiva não tem respaldo e apresenta riscos próprios relevantes.' },
        { t: 'Aceitar, desde que os trabalhadores assinem termo de consentimento.', ok: false,
          why: 'Errada. Consentimento não legitima conduta tecnicamente inadequada nem transfere ao trabalhador o risco da omissão da empresa.' },
        { t: 'Aceitar temporariamente, até que a demanda de produção diminua.', ok: false,
          why: 'Errada. Demanda produtiva não é critério para postergar controle de exposição a agente tóxico.' },
        { t: 'Encaminhar a decisão ao setor jurídico, por se tratar de matéria contratual.', ok: false,
          why: 'Errada. A decisão é técnica e de responsabilidade médica.' }
      ],
      comentario: 'Este é um dos poucos pontos em que a resposta é simplesmente "não". Quelação é tratamento, não medida de proteção. Empregar tratamento para sustentar exposição descontrolada é inaceitável técnica e eticamente.',
      pegadinha: 'A alternativa do termo de consentimento reaparece como falsa saída — consentimento não substitui proteção.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'Código de Ética Médica'] },

    { enunciado: 'Sobre a avaliação ambiental que concluiu por "exposição dentro do limite", a crítica CORRETA é:',
      alts: [
        { t: 'A avaliação está desatualizada e é contrariada pelos achados biológicos; além disso, estar abaixo do limite não garante ausência de risco, e o monitoramento biológico integra as várias vias de absorção, inclusive a digestiva por hábitos de higiene inadequados, que a avaliação do ar não capta.', ok: true,
          why: 'Correta. Discrepância entre avaliação ambiental favorável e monitoramento biológico alterado costuma indicar vias não respiratórias — mãos contaminadas, alimentação no setor, roupa levada para casa — além de possível desatualização e falha de manutenção do controle.' },
        { t: 'A avaliação ambiental prevalece sobre o monitoramento biológico, que deve ser desconsiderado.', ok: false,
          why: 'Errada. O dado biológico reflete a absorção real do trabalhador e, quando discrepante, obriga a rever a avaliação ambiental.' },
        { t: 'A discrepância indica necessariamente erro laboratorial no monitoramento biológico.', ok: false,
          why: 'Errada. Antes de atribuir a erro analítico, é preciso investigar vias de exposição não avaliadas e falhas de controle.' },
        { t: 'Como há sistema de exaustão instalado, a exposição está controlada por presunção.', ok: false,
          why: 'Errada. Sistema instalado sem manutenção e sem verificação de eficácia não é sinônimo de controle.' },
        { t: 'Hábitos de higiene e alimentação no setor não influenciam a absorção de agentes químicos.', ok: false,
          why: 'Errada. Para agentes como o chumbo a via digestiva por contaminação de mãos e alimentos é relevante.' }
      ],
      comentario: 'Quando o ambiental diz "ok" e o biológico diz "não", suspeite de vias não avaliadas — ingestão por mãos contaminadas, refeição no setor, roupa contaminada — e de perda de eficácia do controle por falta de manutenção. O dado biológico ganha, porque mede o que efetivamente entrou no organismo.',
      pegadinha: 'Atribuir a discrepância a erro de laboratório é o atalho que evita rever o processo produtivo.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-9'] },

    { enunciado: 'Sobre as medidas de controle a serem recomendadas, a alternativa CORRETA é:',
      alts: [
        { t: 'Verificar e restabelecer a eficácia da exaustão com manutenção e medição posterior, proibir alimentação e armazenamento de alimentos no setor produtivo, implantar vestiário com separação entre roupa de trabalho e roupa comum, higienização institucional dos uniformes e programa de higiene das mãos antes das refeições.', ok: true,
          why: 'Correta. O conjunto ataca as vias respiratória e digestiva e impede a exposição paraocupacional dos familiares por meio das roupas.' },
        { t: 'Fornecer respiradores a todos e manter as demais condições inalteradas.', ok: false,
          why: 'Errada. O equipamento individual é o último degrau da hierarquia e não resolve a via digestiva nem a contaminação domiciliar.' },
        { t: 'Aumentar a frequência do monitoramento biológico, sem alterar as condições do setor.', ok: false,
          why: 'Errada. Medir mais não reduz exposição; transforma o trabalhador em sensor do próprio adoecimento.' },
        { t: 'Realizar rodízio dos trabalhadores entre setores, de modo a diluir a exposição individual.', ok: false,
          why: 'Errada. Rodízio como medida isolada distribui a exposição a mais pessoas em vez de reduzi-la na fonte.' },
        { t: 'Suspender o monitoramento biológico enquanto as medidas de engenharia estiverem sendo implantadas.', ok: false,
          why: 'Errada. É durante a intervenção que o acompanhamento mais importa.' }
      ],
      comentario: 'Para o chumbo, controlar significa agir em duas vias: respiratória (exaustão eficaz, com manutenção e verificação) e digestiva (proibição de comer no setor, higiene das mãos, vestiário com barreira e lavagem institucional dos uniformes). Esta última protege também a família.',
      pegadinha: 'O rodízio aparece como medida engenhosa e apenas amplia o número de expostos.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-9', 'NR-6'] },

    { enunciado: 'Quanto ao programa de controle médico e às providências para o conjunto dos trabalhadores, é CORRETO afirmar:',
      alts: [
        { t: 'O achado em sete trabalhadores caracteriza evento sentinela coletivo, exigindo avaliação de todos os expostos, afastamento da exposição dos alterados conforme protocolo, revisão do programa de controle médico e do gerenciamento de riscos, além de notificação do agravo.', ok: true,
          why: 'Correta. Alterações em vários trabalhadores do mesmo setor deslocam o problema do plano individual para o coletivo, com intervenção sobre a fonte e registros devidos.' },
        { t: 'Basta acompanhar individualmente cada trabalhador alterado, sem medidas coletivas.', ok: false,
          why: 'Errada. Sete casos no mesmo setor indicam falha sistêmica de controle.' },
        { t: 'A notificação só é devida se algum trabalhador apresentar sintomas de intoxicação.', ok: false,
          why: 'Errada. A notificação decorre da identificação do agravo ou da exposição excessiva, nas hipóteses previstas, e não do surgimento de sintomas.' },
        { t: 'O relatório do programa de controle médico não precisa mencionar os achados, por conterem dados de saúde.', ok: false,
          why: 'Errada. O relatório é agregado e deve justamente apontar a necessidade de mudança nas medidas de controle, sem identificar nominalmente.' },
        { t: 'A empresa pode substituir os trabalhadores alterados por novos contratados, resolvendo o problema.', ok: false,
          why: 'Errada e grave: mantém a fonte intacta e transfere a exposição a novos trabalhadores.' }
      ],
      comentario: 'Sete alterações no mesmo setor é evento sentinela coletivo. O relatório analítico do programa médico é justamente o documento que deve traduzir esses achados em exigência de mudança no controle de risco — sempre agregado, nunca com identificação nominal.',
      pegadinha: 'Substituir os trabalhadores alterados é a "solução" que mais aparece na prática real e a mais indefensável.',
      refs: ['NR-7', 'NR-9', 'SINAN — Ministério da Saúde'] }
  ] }

);
