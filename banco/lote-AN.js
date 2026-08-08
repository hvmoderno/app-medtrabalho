/* Lote AN — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 1.3, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-120', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a iluminação como fator ambiental no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Além do nível de iluminamento, importam o ofuscamento, o contraste, a uniformidade e a reprodução de cores — e a fadiga visual e os erros decorrentes de iluminação inadequada aparecem antes de qualquer queixa oftalmológica formal.', ok: true,
      why: 'Correta. Iluminação não se resume ao número de lux medido no plano de trabalho.' },
    { t: 'O nível de iluminamento medido é o único parâmetro relevante.', ok: false,
      why: 'Errada. Ofuscamento e contraste comprometem a tarefa mesmo com iluminamento adequado.' },
    { t: 'O ofuscamento não interfere no desempenho e na segurança da tarefa.', ok: false,
      why: 'Errada. É causa reconhecida de erro e de acidente.' },
    { t: 'A medição deve ser feita em ponto único do ambiente.', ok: false,
      why: 'Errada. Avalia-se no campo de trabalho, considerando a uniformidade da distribuição.' },
    { t: 'A reprodução de cores é irrelevante em qualquer atividade industrial.', ok: false,
      why: 'Errada. É determinante em inspeção visual, controle de qualidade e leitura de sinalização codificada por cor.' }
  ],
  comentario: 'Iluminação: nível, ofuscamento, contraste, uniformidade e reprodução de cores — medidos no campo de trabalho, não num ponto do teto. Fadiga visual e erro aparecem antes da queixa formal.',
  pegadinha: 'Medir lux no centro do galpão diz pouco sobre a iluminação onde a tarefa acontece.',
  refs: ['NR-17', 'NHO 11 — Fundacentro', 'ABNT NBR ISO/CIE 8995'] },

{ id: 'q-2.3-120', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a isocianatos, é CORRETO afirmar:',
  alts: [
    { t: 'São sensibilizantes respiratórios potentes, causa reconhecida de asma ocupacional, e uma vez instalada a sensibilização, reexposições mesmo a concentrações muito baixas podem desencadear crise — o que torna o afastamento do agente a conduta central.', ok: true,
      why: 'Correta. Após a sensibilização, o limite deixa de proteger aquele trabalhador.' },
    { t: 'A exposição a isocianatos produz apenas efeito irritativo local.', ok: false,
      why: 'Errada. São sensibilizantes respiratórios de alto potencial.' },
    { t: 'Após a sensibilização, manter a exposição abaixo do limite é conduta suficiente.', ok: false,
      why: 'Errada. Concentrações muito baixas podem desencadear crise no sensibilizado.' },
    { t: 'A aplicação de tintas e espumas de poliuretano não constitui fonte de exposição.', ok: false,
      why: 'Errada. São fontes típicas, em pintura automotiva e produção de espumas.' },
    { t: 'A proteção respiratória isolada é medida suficiente nessas atividades.', ok: false,
      why: 'Errada. Exige-se cabine de pintura, sistema fechado e controles de engenharia.' }
  ],
  comentario: 'Isocianato sensibiliza: instalada a asma ocupacional, doses ínfimas desencadeiam crise e o limite deixa de proteger aquela pessoa. Pintura automotiva e espumas de poliuretano são as fontes clássicas.',
  pegadinha: 'Manter o sensibilizado no setor "dentro do limite" é a conduta que mantém as crises.',
  refs: ['ACGIH', 'Diretrizes de asma ocupacional', 'NR-15'] },

{ id: 'q-2.4-120', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a agentes biológicos em atividades de campo e trabalho rural, é CORRETO afirmar:',
  alts: [
    { t: 'Além das zoonoses, há exposição a acidentes com animais peçonhentos, com necessidade de fluxo definido de atendimento e acesso a soroterapia — o que exige articulação prévia com a rede de saúde da região, sobretudo em frentes de trabalho distantes.', ok: true,
      why: 'Correta. Saber de antemão onde há soro disponível é o que salva tempo no acidente.' },
    { t: 'Acidentes com animais peçonhentos não integram o escopo da saúde ocupacional rural.', ok: false,
      why: 'Errada. São agravos ocupacionais frequentes nessas atividades.' },
    { t: 'A soroterapia está disponível em qualquer unidade de saúde.', ok: false,
      why: 'Errada. A distribuição é restrita a unidades de referência, o que exige mapeamento prévio.' },
    { t: 'O uso de torniquete é conduta indicada em acidentes ofídicos.', ok: false,
      why: 'Errada. É contraindicado e agrava a lesão local.' },
    { t: 'A identificação do animal é irrelevante para a conduta.', ok: false,
      why: 'Errada. Orienta a escolha do soro específico quando possível.' }
  ],
  comentario: 'Trabalho rural: zoonoses e animais peçonhentos. O que faz diferença é mapear antes onde há soro na região — e não usar torniquete, que piora a lesão local sem impedir a absorção sistêmica.',
  pegadinha: 'Supor soro disponível em qualquer unidade faz a frente de trabalho descobrir o contrário durante o acidente.',
  refs: ['NR-31', 'Ministério da Saúde — acidentes por animais peçonhentos'] },

{ id: 'q-2.6-120', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a aplicação de limites de exposição a populações específicas de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'Os limites são derivados para a população trabalhadora adulta em geral e não incorporam proteção específica para gestantes, adolescentes ou pessoas com condições que aumentem a suscetibilidade — o que exige avaliação adicional nesses casos, e nunca a exclusão dessas pessoas do trabalho.', ok: true,
      why: 'Correta. O limite não foi construído pensando nesses grupos, e a resposta é reduzir exposição.' },
    { t: 'Os limites incorporam margem específica de proteção a gestantes.', ok: false,
      why: 'Errada. Salvo notações específicas, não incorporam essa proteção.' },
    { t: 'Trabalhadores com maior suscetibilidade devem ser excluídos das funções expostas.', ok: false,
      why: 'Errada. A resposta é reduzir a exposição, não excluir pessoas.' },
    { t: 'A existência de notação de risco reprodutivo é irrelevante na aplicação do limite.', ok: false,
      why: 'Errada. Ela sinaliza que o limite pode não proteger quanto a esse desfecho.' },
    { t: 'Os limites foram derivados considerando exposição contínua de vinte e quatro horas.', ok: false,
      why: 'Errada. Pressupõem jornada de trabalho com período de recuperação entre exposições.' }
  ],
  comentario: 'Limites valem para a população trabalhadora adulta em geral, com jornada e recuperação típicas. Não incorporam proteção específica para gestante, adolescente ou suscetível — e a resposta a isso é reduzir exposição, jamais excluir a pessoa.',
  pegadinha: 'Usar a suscetibilidade individual como critério de exclusão é discriminação vestida de proteção.',
  refs: ['ACGIH — TLVs, documentação', 'CLT — art. 394-A', 'Lei nº 9.029/1995'] },

{ id: 'q-2.7-100', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a estratégia de amostragem definida em procedimentos técnicos padronizados de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Ela define quantas amostras, em quem e em que condições coletar, de modo a representar a exposição do grupo com nível de confiança conhecido — e amostragem sem estratégia definida produz números que não sustentam conclusão sobre o grupo.', ok: true,
      why: 'Correta. É a estratégia que transforma medições isoladas em caracterização do grupo.' },
    { t: 'Uma amostra por grupo é suficiente para caracterizar a exposição.', ok: false,
      why: 'Errada. Não permite avaliar a variabilidade nem sustentar conclusão estatística.' },
    { t: 'A escolha dos trabalhadores amostrados pode ser feita por conveniência operacional.', ok: false,
      why: 'Errada. A seleção deve representar o grupo, e a conveniência introduz viés.' },
    { t: 'Condições atípicas de produção devem ser preferidas para a amostragem.', ok: false,
      why: 'Errada. Salvo quando o objetivo é justamente caracterizar o pior cenário, a amostragem representa condições habituais.' },
    { t: 'A duração da amostragem não precisa cobrir a jornada quando a exposição é constante.', ok: false,
      why: 'Errada. É preciso demonstrar a constância, o que exige amostragem representativa da jornada.' }
  ],
  comentario: 'Estratégia de amostragem: quantas, em quem, em que condições — para representar o grupo com confiança conhecida. Escolher quem está disponível é conveniência que vira viés.',
  pegadinha: 'Amostrar o trabalhador mais acessível costuma produzir o retrato mais confortável.',
  refs: ['NHO — Fundacentro', 'AIHA — estratégia de avaliação de exposições'] },

{ id: 'q-2.9-120', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a arsênio, é CORRETO afirmar:',
  alts: [
    { t: 'É agente reconhecidamente cancerígeno, com exposição em metalurgia, produção de ligas, vidros e em contaminação de água em algumas regiões — e a exposição crônica cursa com alterações cutâneas características, como hiperceratose palmoplantar e melanose.', ok: true,
      why: 'Correta. A pele é a janela onde a exposição crônica se manifesta primeiro.' },
    { t: 'O arsênio não apresenta potencial carcinogênico reconhecido.', ok: false,
      why: 'Errada. É classificado como cancerígeno para humanos.' },
    { t: 'A exposição crônica não produz manifestações cutâneas.', ok: false,
      why: 'Errada. Hiperceratose palmoplantar e melanose são achados característicos.' },
    { t: 'A exposição ocorre apenas por via ocupacional, sem fontes ambientais.', ok: false,
      why: 'Errada. A contaminação de água é fonte ambiental relevante em algumas regiões.' },
    { t: 'As alterações cutâneas indicam apenas exposição recente.', ok: false,
      why: 'Errada. Traduzem exposição crônica, com evolução ao longo de anos.' }
  ],
  comentario: 'Arsênio: cancerígeno reconhecido, com hiperceratose palmoplantar e melanose marcando a exposição crônica. Fontes ocupacionais e ambientais coexistem — e a pele é onde a suspeita costuma nascer.',
  pegadinha: 'Não examinar palmas e plantas em exposto ao arsênio dispensa o achado mais acessível do quadro.',
  refs: ['IARC — Grupo 1', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-1.3-120', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a razão de mortalidade padronizada em estudos de coortes ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Compara a mortalidade observada na coorte com a esperada na população geral, ajustada por idade e período — e valores próximos ou abaixo da unidade podem refletir o efeito do trabalhador sadio, e não necessariamente ausência de risco ocupacional.', ok: true,
      why: 'Correta. Comparar trabalhadores com a população geral embute a seleção de quem está apto a trabalhar.' },
    { t: 'Valor abaixo da unidade demonstra efeito protetor da ocupação.', ok: false,
      why: 'Errada. Reflete tipicamente a seleção da população trabalhadora.' },
    { t: 'A comparação com a população geral elimina o efeito do trabalhador sadio.', ok: false,
      why: 'Errada. É justamente essa comparação que o introduz.' },
    { t: 'A padronização por idade é dispensável em coortes ocupacionais.', ok: false,
      why: 'Errada. Composição etária distinta invalida a comparação sem ajuste.' },
    { t: 'A comparação com outro grupo de trabalhadores não reduz esse viés.', ok: false,
      why: 'Errada. Comparar expostos com não expostos da mesma população reduz substancialmente o efeito.' }
  ],
  comentario: 'Razão de mortalidade padronizada comparada à população geral embute o efeito do trabalhador sadio — valor baixo não é proteção. A saída é comparar expostos com não expostos dentro da mesma população trabalhadora.',
  pegadinha: 'Ler mortalidade abaixo da esperada como benefício da ocupação é o erro clássico dessa medida.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology', 'Rothman'] },

{ id: 'q-2.5-100', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a hierarquia de medidas de controle de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A ordem é eliminar, substituir, adotar controles de engenharia, adotar controles administrativos e, por último, a proteção individual — e a inversão dessa ordem, comum na prática, transfere ao trabalhador a responsabilidade por um risco que deveria ser eliminado na fonte.', ok: true,
      why: 'Correta. Começar pelo equipamento individual é a inversão mais comum e a menos eficaz.' },
    { t: 'A proteção individual é medida equivalente aos controles de engenharia.', ok: false,
      why: 'Errada. Depende de uso correto e contínuo, o que a torna a menos confiável.' },
    { t: 'Controles administrativos, como rodízio, eliminam o risco.', ok: false,
      why: 'Errada. Distribuem a exposição por mais pessoas sem eliminar o perigo.' },
    { t: 'A substituição só deve ser considerada após esgotados os controles de engenharia.', ok: false,
      why: 'Errada. Vem antes deles na hierarquia.' },
    { t: 'A hierarquia se aplica apenas a riscos químicos.', ok: false,
      why: 'Errada. Aplica-se a todos os riscos, inclusive ergonômicos e psicossociais.' }
  ],
  comentario: 'Eliminar, substituir, engenharia, administrativo, individual — nessa ordem, para todo tipo de risco. Rodízio distribui e não elimina; começar pelo equipamento individual é o atalho mais frequente e o menos eficaz.',
  pegadinha: 'Entregar equipamento antes de tentar eliminar ou substituir inverte a hierarquia inteira.',
  refs: ['NR-1', 'NR-9', 'ISO 45001'] },

{ id: 'q-2.8-100', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o fator de proteção atribuído aos respiradores e sua aplicação prática, é CORRETO afirmar:',
  alts: [
    { t: 'Ele expressa a redução de concentração que se pode esperar de um tipo de respirador em condições de programa adequado — e não pode ser usado para justificar exposição em concentrações que exijam equipamento de classe superior nem para dispensar controles na fonte.', ok: true,
      why: 'Correta. O fator pressupõe programa funcionando; sem ele, é número teórico.' },
    { t: 'O fator de proteção é garantido individualmente para cada usuário.', ok: false,
      why: 'Errada. É valor esperado em condições adequadas, com variação individual significativa.' },
    { t: 'A seleção do respirador pode ignorar a concentração esperada do agente.', ok: false,
      why: 'Errada. A relação entre concentração e limite define a classe necessária.' },
    { t: 'O uso de respirador de fator elevado dispensa controles de engenharia.', ok: false,
      why: 'Errada. A proteção individual é a última linha, não substituta dos controles na fonte.' },
    { t: 'O fator de proteção independe da existência de programa de proteção respiratória.', ok: false,
      why: 'Errada. Sem ensaio de vedação, treinamento e manutenção, o fator não se realiza.' }
  ],
  comentario: 'Fator de proteção é expectativa sob programa adequado, não garantia individual. Seleciona-se pela concentração esperada, e nenhum fator alto dispensa controle na fonte.',
  pegadinha: 'Usar fator de proteção elevado como argumento para não investir em engenharia é a inversão da hierarquia com aparência técnica.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
