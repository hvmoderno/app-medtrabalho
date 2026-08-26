/* Lote AN — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 1.3, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-120', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a iluminação como fator ambiental no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Além do iluminamento, importam ofuscamento, contraste, uniformidade e reprodução de cores, e a fadiga aparece antes de qualquer queixa formal.', ok: true,
      why: 'Correta. Iluminação não se resume ao número de lux medido no plano de trabalho.' },
    { t: 'O iluminamento medido em lux no plano de trabalho é o parâmetro que resume a adequação da iluminação, tornando os demais aspectos secundários.', ok: false,
      why: 'Errada. Ofuscamento e contraste comprometem a tarefa mesmo com iluminamento dentro do recomendado.' },
    { t: 'Além do iluminamento importam contraste e uniformidade, mas o ofuscamento é questão de conforto e não interfere no desempenho nem na segurança.', ok: false,
      why: 'Errada. Ofuscamento é causa reconhecida de erro e de acidente, não apenas de desconforto.' },
    { t: 'Além do iluminamento importam vários aspectos, e a medição em ponto único e representativo do ambiente basta para caracterizar a condição do posto.', ok: false,
      why: 'Errada. Avalia-se no campo de trabalho, considerando como a luz se distribui pelo ambiente.' },
    { t: 'Além do iluminamento importam ofuscamento e contraste, mas a reprodução de cores só tem relevância em atividades artísticas ou gráficas.', ok: false,
      why: 'Errada. É determinante em inspeção visual, controle de qualidade e sinalização codificada por cor.' }
  ],
  comentario: 'Iluminação: nível, ofuscamento, contraste, uniformidade e reprodução de cores — medidos no campo de trabalho, não num ponto do teto. Fadiga visual e erro aparecem antes da queixa formal.',
  pegadinha: 'Medir lux no centro do galpão diz pouco sobre a iluminação onde a tarefa acontece.',
  refs: ['NR-17', 'NHO 11 — Fundacentro', 'ABNT NBR ISO/CIE 8995'] },

{ id: 'q-2.3-120', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a isocianatos, é CORRETO afirmar:',
  alts: [
    { t: 'São sensibilizantes respiratórios potentes e, instalada a sensibilização, reexposições a concentrações muito baixas já desencadeiam crise.', ok: true,
      why: 'Correta. Para o trabalhador sensibilizado, o limite deixa de proteger; a conduta é afastar do agente.' },
    { t: 'São agentes de ação irritativa local sobre vias aéreas e olhos, cujo efeito cessa com o fim da exposição, sem componente de sensibilização.', ok: false,
      why: 'Errada. São sensibilizantes respiratórios de alto potencial e causa reconhecida de asma ocupacional.' },
    { t: 'São sensibilizantes respiratórios potentes, mas instalada a sensibilização basta manter a exposição abaixo do limite estabelecido para o agente.', ok: false,
      why: 'Errada. No sensibilizado, concentrações muito abaixo do limite já desencadeiam crise.' },
    { t: 'São sensibilizantes respiratórios potentes, presentes apenas na síntese industrial do polímero, não na pintura nem na aplicação de espumas.', ok: false,
      why: 'Errada. Pintura automotiva e produção de espumas de poliuretano são fontes típicas de exposição.' },
    { t: 'São sensibilizantes respiratórios potentes, e a proteção respiratória adequada é medida suficiente para o controle nessas atividades.', ok: false,
      why: 'Errada. Exige-se cabine de pintura, sistema fechado e demais controles de engenharia.' }
  ],
  comentario: 'Isocianato sensibiliza: instalada a asma ocupacional, doses ínfimas desencadeiam crise e o limite deixa de proteger aquela pessoa. Pintura automotiva e espumas de poliuretano são as fontes clássicas.',
  pegadinha: 'Manter o sensibilizado no setor "dentro do limite" é a conduta que mantém as crises.',
  refs: ['ACGIH', 'Diretrizes de asma ocupacional', 'NR-15'] },

{ id: 'q-2.4-120', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a agentes biológicos em atividades de campo e trabalho rural, é CORRETO afirmar:',
  alts: [
    { t: 'Além das zoonoses há acidentes com animais peçonhentos, o que exige fluxo definido e articulação prévia com a rede que dispõe de soro.', ok: true,
      why: 'Correta. Saber de antemão onde há soro é o que economiza tempo no acidente, sobretudo em frente distante.' },
    { t: 'Há exposição a zoonoses por contato com tecidos e secreções, ficando os acidentes com animais peçonhentos fora do escopo da saúde ocupacional rural.', ok: false,
      why: 'Errada. São agravos ocupacionais frequentes nessas atividades e entram no planejamento.' },
    { t: 'Além das zoonoses há acidentes com animais peçonhentos, e a soroterapia está disponível em qualquer unidade básica de saúde do território.', ok: false,
      why: 'Errada. A distribuição é restrita a unidades de referência, o que obriga a mapear antes.' },
    { t: 'Além das zoonoses há acidentes com peçonhentos, sendo o torniquete acima da picada a conduta inicial para retardar a absorção do veneno.', ok: false,
      why: 'Errada. O torniquete é contraindicado: agrava a lesão local sem impedir a absorção sistêmica.' },
    { t: 'Além das zoonoses há acidentes com peçonhentos, e a identificação do animal é irrelevante, já que a soroterapia disponível é sempre polivalente.', ok: false,
      why: 'Errada. A identificação orienta a escolha do soro específico sempre que possível.' }
  ],
  comentario: 'Trabalho rural: zoonoses e animais peçonhentos. O que faz diferença é mapear antes onde há soro na região — e não usar torniquete, que piora a lesão local sem impedir a absorção sistêmica.',
  pegadinha: 'Supor soro disponível em qualquer unidade faz a frente de trabalho descobrir o contrário durante o acidente.',
  refs: ['NR-31', 'Ministério da Saúde — acidentes por animais peçonhentos'] },

{ id: 'q-2.6-120', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a aplicação de limites de exposição a populações específicas de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'Foram derivados para a população trabalhadora adulta em geral e não trazem proteção específica a gestantes, adolescentes ou pessoas mais suscetíveis.', ok: true,
      why: 'Correta. A resposta a isso é reduzir a exposição, nunca excluir a pessoa do trabalho.' },
    { t: 'Foram derivados para a população trabalhadora adulta e já incorporam margem de segurança específica para a proteção da gestação e do feto.', ok: false,
      why: 'Errada. Salvo notações específicas, essa proteção não está embutida no valor tabelado.' },
    { t: 'Foram derivados para a população trabalhadora em geral, de modo que o trabalhador de maior suscetibilidade deve ser realocado para função sem exposição.', ok: false,
      why: 'Errada. A resposta é reduzir a exposição; excluir por suscetibilidade é discriminação.' },
    { t: 'Foram derivados para a população trabalhadora adulta, e as notações de risco reprodutivo têm caráter informativo, sem efeito sobre a aplicação do limite.', ok: false,
      why: 'Errada. A notação sinaliza que o limite pode não proteger quanto àquele desfecho específico.' },
    { t: 'Foram derivados considerando exposição contínua ao longo das vinte e quatro horas do dia, o que já embute margem para jornadas prolongadas.', ok: false,
      why: 'Errada. Pressupõem jornada de trabalho com período de recuperação entre as exposições.' }
  ],
  comentario: 'Limites valem para a população trabalhadora adulta em geral, com jornada e recuperação típicas. Não incorporam proteção específica para gestante, adolescente ou suscetível — e a resposta a isso é reduzir exposição, jamais excluir a pessoa.',
  pegadinha: 'Usar a suscetibilidade individual como critério de exclusão é discriminação vestida de proteção.',
  refs: ['ACGIH — TLVs, documentação', 'CLT — art. 394-A', 'Lei nº 9.029/1995'] },

{ id: 'q-2.7-100', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a estratégia de amostragem definida em procedimentos técnicos padronizados de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Define quantas amostras, em quem e em que condições coletar, para representar a exposição do grupo com nível de confiança conhecido.', ok: true,
      why: 'Correta. É a estratégia que transforma medições isoladas em caracterização do grupo.' },
    { t: 'Define as condições da coleta, sendo uma amostra por grupo homogêneo suficiente para caracterizar a exposição de todos os seus integrantes.', ok: false,
      why: 'Errada. Uma amostra não permite avaliar a variabilidade nem sustentar conclusão sobre o grupo.' },
    { t: 'Define quantas amostras coletar, podendo os trabalhadores amostrados ser escolhidos por disponibilidade, já que pertencem ao mesmo grupo homogêneo.', ok: false,
      why: 'Errada. A seleção deve representar o grupo; escolher quem está disponível introduz viés.' },
    { t: 'Define as condições da coleta, devendo a amostragem recair preferencialmente sobre dias de produção atípica, para revelar a exposição real.', ok: false,
      why: 'Errada. Salvo quando o objetivo é o pior cenário, a amostragem representa as condições habituais.' },
    { t: 'Define quantas amostras coletar, dispensando a cobertura da jornada inteira quando o processo é contínuo e a exposição se mantém constante.', ok: false,
      why: 'Errada. A constância precisa ser demonstrada, e isso exige amostragem representativa da jornada.' }
  ],
  comentario: 'Estratégia de amostragem: quantas, em quem, em que condições — para representar o grupo com confiança conhecida. Escolher quem está disponível é conveniência que vira viés.',
  pegadinha: 'Amostrar o trabalhador mais acessível costuma produzir o retrato mais confortável.',
  refs: ['NHO — Fundacentro', 'AIHA — estratégia de avaliação de exposições'] },

{ id: 'q-2.9-120', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a arsênio, é CORRETO afirmar:',
  alts: [
    { t: 'É cancerígeno reconhecido, com fontes ocupacionais e ambientais, e a exposição crônica cursa com hiperceratose palmoplantar e melanose.', ok: true,
      why: 'Correta. A pele é a janela onde a exposição crônica se manifesta, e olhar palmas e plantas é barato.' },
    { t: 'É agente de toxicidade aguda relevante, mas sem potencial carcinogênico reconhecido para humanos em exposições de origem ocupacional.', ok: false,
      why: 'Errada. É classificado como cancerígeno para humanos.' },
    { t: 'É cancerígeno reconhecido, com quadro crônico restrito a manifestações neurológicas e digestivas, sem repercussão cutânea característica.', ok: false,
      why: 'Errada. Hiperceratose palmoplantar e melanose são achados característicos da exposição crônica.' },
    { t: 'É cancerígeno reconhecido, com exposição restrita a metalurgia, ligas e vidros, sem fontes ambientais relevantes fora do ambiente de trabalho.', ok: false,
      why: 'Errada. A contaminação da água é fonte ambiental relevante em algumas regiões.' },
    { t: 'É cancerígeno reconhecido, e as alterações cutâneas encontradas indicam exposição recente, servindo para datar o início do contato.', ok: false,
      why: 'Errada. Traduzem exposição crônica, com evolução ao longo de anos.' }
  ],
  comentario: 'Arsênio: cancerígeno reconhecido, com hiperceratose palmoplantar e melanose marcando a exposição crônica. Fontes ocupacionais e ambientais coexistem — e a pele é onde a suspeita costuma nascer.',
  pegadinha: 'Não examinar palmas e plantas em exposto ao arsênio dispensa o achado mais acessível do quadro.',
  refs: ['IARC — Grupo 1', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-1.3-120', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a razão de mortalidade padronizada em estudos de coortes ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Compara a mortalidade observada com a esperada na população geral, e valor abaixo da unidade pode refletir o efeito do trabalhador sadio.', ok: true,
      why: 'Correta. Comparar trabalhadores com a população geral embute a seleção de quem está apto a trabalhar.' },
    { t: 'Compara a mortalidade observada com a esperada na população geral, e valor abaixo da unidade demonstra efeito protetor da ocupação estudada.', ok: false,
      why: 'Errada. Reflete tipicamente a seleção da população trabalhadora, não proteção conferida pelo trabalho.' },
    { t: 'Compara a mortalidade observada com a da população geral, e é justamente essa referência externa que elimina o efeito do trabalhador sadio.', ok: false,
      why: 'Errada. É essa comparação que introduz o efeito, porque quem trabalha é mais saudável que a média.' },
    { t: 'Compara a mortalidade observada com a esperada, dispensando a padronização por idade quando a coorte é grande o bastante para diluir diferenças.', ok: false,
      why: 'Errada. Composição etária distinta invalida a comparação por mais numerosa que seja a coorte.' },
    { t: 'Compara a mortalidade observada com a da população geral, e trocar essa referência por outro grupo de trabalhadores não reduz o viés.', ok: false,
      why: 'Errada. Comparar expostos com não expostos da mesma população reduz substancialmente o efeito.' }
  ],
  comentario: 'Razão de mortalidade padronizada comparada à população geral embute o efeito do trabalhador sadio — valor baixo não é proteção. A saída é comparar expostos com não expostos dentro da mesma população trabalhadora.',
  pegadinha: 'Ler mortalidade abaixo da esperada como benefício da ocupação é o erro clássico dessa medida.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology', 'Rothman'] },

{ id: 'q-2.5-100', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a hierarquia de medidas de controle de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A ordem é eliminar, substituir, engenharia, administrativo e, por último, proteção individual, e invertê-la transfere o risco ao trabalhador.', ok: true,
      why: 'Correta. Começar pelo equipamento individual é a inversão mais comum e a menos eficaz.' },
    { t: 'A ordem prevê medidas coletivas e individuais como alternativas equivalentes, cabendo à empresa escolher a que melhor se ajuste à operação.', ok: false,
      why: 'Errada. A individual depende de uso correto e contínuo, o que a torna a menos confiável de todas.' },
    { t: 'A ordem começa pela eliminação, e os controles administrativos, como o rodízio de trabalhadores, eliminam o risco ao reduzir a dose de cada um.', ok: false,
      why: 'Errada. Rodízio distribui a exposição por mais pessoas; o perigo continua exatamente onde estava.' },
    { t: 'A ordem começa pela eliminação, e a substituição do agente só deve ser cogitada depois de esgotadas as possibilidades de controle de engenharia.', ok: false,
      why: 'Errada. A substituição vem antes dos controles de engenharia na hierarquia.' },
    { t: 'A ordem é eliminar, substituir, engenharia, administrativo e individual, e se aplica aos riscos químicos, físicos e biológicos do ambiente.', ok: false,
      why: 'Errada. Aplica-se a todos os riscos, inclusive os ergonômicos e os psicossociais.' }
  ],
  comentario: 'Eliminar, substituir, engenharia, administrativo, individual — nessa ordem, para todo tipo de risco. Rodízio distribui e não elimina; começar pelo equipamento individual é o atalho mais frequente e o menos eficaz.',
  pegadinha: 'Entregar equipamento antes de tentar eliminar ou substituir inverte a hierarquia inteira.',
  refs: ['NR-1', 'NR-9', 'ISO 45001'] },

{ id: 'q-2.8-100', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o fator de proteção atribuído aos respiradores e sua aplicação prática, é CORRETO afirmar:',
  alts: [
    { t: 'Expressa a redução de concentração esperada de um tipo de respirador sob programa adequado, e não dispensa os controles na fonte.', ok: true,
      why: 'Correta. O fator pressupõe o programa funcionando; sem ele é número de catálogo, não proteção.' },
    { t: 'Expressa a redução de concentração que cada usuário obtém individualmente, sendo garantida pelo certificado de aprovação do equipamento.', ok: false,
      why: 'Errada. É valor esperado em condições adequadas, com variação individual significativa.' },
    { t: 'Expressa a redução de concentração esperada, de modo que a seleção pode partir do conforto do usuário, sem depender da concentração do agente.', ok: false,
      why: 'Errada. A relação entre concentração esperada e limite é o que define a classe necessária.' },
    { t: 'Expressa a redução de concentração esperada, e um fator suficientemente elevado permite dispensar os controles de engenharia na fonte.', ok: false,
      why: 'Errada. A proteção individual é a última linha; não substitui o controle na fonte.' },
    { t: 'Expressa a redução de concentração inerente ao equipamento, obtida independentemente de ensaio de vedação, treinamento ou manutenção.', ok: false,
      why: 'Errada. Sem esses três, o fator não se realiza na prática e a proteção real é bem menor.' }
  ],
  comentario: 'Fator de proteção é expectativa sob programa adequado, não garantia individual. Seleciona-se pela concentração esperada, e nenhum fator alto dispensa controle na fonte.',
  pegadinha: 'Usar fator de proteção elevado como argumento para não investir em engenharia é a inversão da hierarquia com aparência técnica.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
