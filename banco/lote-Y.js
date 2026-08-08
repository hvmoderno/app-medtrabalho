/* Lote Y — 4.4, 4.5, 4.6, 4.8, 5.4, 5.5, 4.10, 2.7. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-090', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a urticária de contato ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Pode ser imunológica, com risco de reação sistêmica e até anafilaxia — como ocorre na sensibilização ao látex de borracha natural —, o que a distingue das dermatites de contato pelo potencial de gravidade imediata.', ok: true,
      why: 'Correta. É a dermatose ocupacional com risco de evento agudo grave.' },
    { t: 'A urticária de contato tem sempre mecanismo irritativo e curso benigno.', ok: false,
      why: 'Errada. A forma imunológica pode evoluir com manifestação sistêmica.' },
    { t: 'Não há risco de reação sistêmica em sensibilização por contato cutâneo.', ok: false,
      why: 'Errada. A sensibilização ao látex é exemplo consagrado de risco sistêmico.' },
    { t: 'O uso de luvas com pó reduz o risco de sensibilização ao látex.', ok: false,
      why: 'Errada. O pó veicula a proteína alergênica e favorece a sensibilização, inclusive por via aérea.' },
    { t: 'A substituição do material da luva não é medida eficaz após a sensibilização.', ok: false,
      why: 'Errada. A substituição por material alternativo é a medida central de manejo.' }
  ],
  comentario: 'Urticária de contato imunológica pode chegar à anafilaxia — o látex é o exemplo clássico. Luva com pó piora, porque o pó carrega a proteína e a dispersa no ar; substituir o material é o manejo.',
  pegadinha: 'Tratar toda dermatose ocupacional como quadro de evolução lenta ignora a que pode matar no mesmo dia.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-32'] },

{ id: 'q-4.5-080', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a repercussão funcional da perda auditiva induzida por ruído, é CORRETO afirmar:',
  alts: [
    { t: 'A dificuldade de compreensão de fala em ambiente ruidoso costuma preceder a queixa de "ouvir pouco", porque a perda em frequências agudas compromete a discriminação de consoantes — e é essa queixa que deve levantar suspeita antes da audiometria alterada nas frequências da fala.', ok: true,
      why: 'Correta. A perda começa onde estão as consoantes, não o volume.' },
    { t: 'A primeira queixa é sempre a redução do volume percebido dos sons.', ok: false,
      why: 'Errada. A dificuldade de discriminação em ambiente ruidoso costuma vir antes.' },
    { t: 'A perda em frequências agudas não afeta a compreensão da fala.', ok: false,
      why: 'Errada. É justamente onde se distinguem as consoantes.' },
    { t: 'A repercussão social e familiar da perda auditiva não é objeto da avaliação ocupacional.', ok: false,
      why: 'Errada. Isolamento e conflitos familiares são repercussões reconhecidas e relevantes.' },
    { t: 'O uso de prótese auditiva restaura integralmente a discriminação perdida.', ok: false,
      why: 'Errada. A amplificação melhora a audibilidade, mas não recupera integralmente a discriminação.' }
  ],
  comentario: 'A perda por ruído rouba consoantes antes de roubar volume: a pessoa ouve que falaram, mas não entende o que disseram — sobretudo com ruído de fundo. Prótese amplifica; não devolve discriminação.',
  pegadinha: 'Esperar a queixa de "ouço pouco" adia a suspeita para depois de a perda alcançar as frequências da fala.',
  refs: ['Diretrizes de audiologia ocupacional', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-080', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o suicídio e a tentativa de suicídio relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Há situações em que fatores ocupacionais atuam como determinantes ou contribuintes relevantes, e o evento é objeto de notificação e de investigação — que deve alcançar as condições de trabalho, e não apenas a história pessoal.', ok: true,
      why: 'Correta. Investigar só a história pessoal reproduz a omissão que permitiu o desfecho.' },
    { t: 'O suicídio é sempre evento de determinação exclusivamente individual.', ok: false,
      why: 'Errada. Fatores ocupacionais podem ser determinantes ou contribuintes.' },
    { t: 'A notificação de tentativa de suicídio não tem relação com saúde do trabalhador.', ok: false,
      why: 'Errada. É agravo de notificação e a dimensão ocupacional deve ser investigada.' },
    { t: 'A investigação deve se restringir ao histórico psiquiátrico do trabalhador.', ok: false,
      why: 'Errada. Precisa alcançar assédio, sobrecarga, humilhação pública e outras condições do trabalho.' },
    { t: 'A comunicação sobre o caso à equipe deve incluir detalhes do método e do histórico clínico.', ok: false,
      why: 'Errada. Há recomendações específicas de comunicação responsável para evitar efeito de imitação.' }
  ],
  comentario: 'Suicídio pode ter determinação ocupacional e é objeto de notificação e investigação — que precisa olhar assédio, sobrecarga e humilhação, não só o histórico psiquiátrico. E a comunicação à equipe segue diretrizes próprias, sem detalhes de método.',
  pegadinha: 'Investigar apenas a história pessoal preserva intactas as condições que contribuíram.',
  refs: ['Ministério da Saúde — notificação de violência autoprovocada', 'OMS — comunicação responsável'] },

{ id: 'q-4.8-080', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o câncer de bexiga relacionado a exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Aminas aromáticas usadas historicamente em corantes, borracha e outros setores estão associadas ao desfecho, com latência longa — o que faz da história ocupacional pregressa elemento decisivo diante de hematúria em trabalhador ou ex-trabalhador desses setores.', ok: true,
      why: 'Correta. A exposição pode ter cessado décadas antes do diagnóstico.' },
    { t: 'Não há associação reconhecida entre exposições ocupacionais e câncer de bexiga.', ok: false,
      why: 'Errada. É um dos cânceres ocupacionais historicamente mais bem documentados.' },
    { t: 'A latência curta permite associar o diagnóstico à exposição atual.', ok: false,
      why: 'Errada. A latência é longa e a exposição relevante costuma ser pregressa.' },
    { t: 'O tabagismo afasta a contribuição ocupacional nesses casos.', ok: false,
      why: 'Errada. É fator concorrente, e a contribuição ocupacional permanece possível.' },
    { t: 'A exposição a aminas aromáticas ficou restrita à indústria de corantes.', ok: false,
      why: 'Errada. Alcançou também borracha, produtos químicos e outros setores.' }
  ],
  comentario: 'Bexiga e aminas aromáticas: associação histórica bem estabelecida, latência longa, exposição frequentemente encerrada há décadas e em setores além dos corantes. Tabagismo é concorrente, não excludente.',
  pegadinha: 'Perguntar só pela ocupação atual em caso de hematúria perde a exposição que importa.',
  refs: ['IARC', 'INCA — câncer relacionado ao trabalho'] },

{ id: 'q-5.4-090', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a diferença entre incapacidade temporária e permanente na avaliação pericial, é CORRETO afirmar:',
  alts: [
    { t: 'A distinção depende da expectativa de recuperação com o tratamento disponível, e a permanência não exige irreversibilidade absoluta — bastando que não se espere recuperação funcional relevante no horizonte previsível, o que precisa ser fundamentado e não presumido pelo tempo decorrido.', ok: true,
      why: 'Correta. Tempo de afastamento por si não converte temporária em permanente.' },
    { t: 'A incapacidade se torna permanente automaticamente após determinado tempo de afastamento.', ok: false,
      why: 'Errada. A conversão depende de avaliação clínica, não de prazo decorrido.' },
    { t: 'A incapacidade permanente exige irreversibilidade absoluta do quadro.', ok: false,
      why: 'Errada. Basta a ausência de expectativa de recuperação funcional relevante.' },
    { t: 'A possibilidade de reabilitação profissional não integra a análise.', ok: false,
      why: 'Errada. É elemento central antes de se concluir por incapacidade permanente para todo trabalho.' },
    { t: 'A incapacidade permanente para uma função implica incapacidade para qualquer atividade.', ok: false,
      why: 'Errada. São graus distintos, e a capacidade residual costuma permitir outras atividades.' }
  ],
  comentario: 'Temporária ou permanente decide-se pela expectativa de recuperação, não pelo calendário. Permanente para a função não é permanente para tudo — e a reabilitação entra na análise antes dessa conclusão.',
  pegadinha: 'Converter por decurso de prazo dispensa a avaliação que fundamenta a conclusão.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-080', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de capacidade em trabalhador com múltiplas comorbidades, é CORRETO afirmar:',
  alts: [
    { t: 'O efeito das condições sobre a funcionalidade pode ser maior que a soma isolada de cada uma, e a avaliação deve considerar o conjunto frente às exigências da atividade — descrevendo a limitação resultante, e não listando diagnósticos.', ok: true,
      why: 'Correta. Comorbidades interagem e a limitação resultante é o que importa.' },
    { t: 'A avaliação deve considerar apenas a condição de maior gravidade isolada.', ok: false,
      why: 'Errada. O conjunto define a funcionalidade resultante.' },
    { t: 'A soma dos percentuais de cada condição fornece o grau de incapacidade.', ok: false,
      why: 'Errada. Somar percentuais não descreve a funcionalidade real.' },
    { t: 'A listagem de diagnósticos substitui a descrição funcional na conclusão.', ok: false,
      why: 'Errada. Diagnóstico não descreve o que a pessoa consegue ou não consegue fazer.' },
    { t: 'Comorbidades não ocupacionais devem ser excluídas da avaliação de capacidade.', ok: false,
      why: 'Errada. A capacidade é avaliada no trabalhador inteiro; a origem importa para o nexo, não para a funcionalidade.' }
  ],
  comentario: 'Comorbidades interagem e a limitação resultante não é a soma das partes. Avalia-se o trabalhador inteiro — a origem de cada condição importa para o nexo, não para medir o que ele consegue fazer.',
  pegadinha: 'Somar percentuais de tabela por condição produz número sem correspondência com a funcionalidade.',
  refs: ['CIF — OMS', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-4.10-070', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a vacinação antitetânica de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'A conduta diante de ferimento depende do estado vacinal e das características da lesão, podendo exigir dose de reforço e, em situações específicas, imunização passiva — e a avaliação do histórico vacinal deve ser feita antes do acidente, não durante o atendimento.', ok: true,
      why: 'Correta. Checar carteira vacinal no atendimento de urgência costuma ser tarde e impreciso.' },
    { t: 'A conduta independe do tipo e da contaminação do ferimento.', ok: false,
      why: 'Errada. Ferimentos com maior risco alteram a indicação.' },
    { t: 'O reforço é indicado apenas em trabalhadores da construção civil.', ok: false,
      why: 'Errada. A indicação decorre do estado vacinal e do risco de ferimentos em qualquer atividade.' },
    { t: 'A imunização passiva substitui o esquema vacinal completo.', ok: false,
      why: 'Errada. É medida complementar em situações específicas, não substitutiva.' },
    { t: 'O registro do estado vacinal no prontuário ocupacional é dispensável.', ok: false,
      why: 'Errada. É o registro que permite decidir corretamente no momento do acidente.' }
  ],
  comentario: 'Tétano: a decisão depende do estado vacinal e do tipo de ferimento — e por isso o histórico deve estar registrado antes, no prontuário ocupacional. Imunização passiva complementa em situações específicas, não substitui esquema.',
  pegadinha: 'Descobrir o estado vacinal só no pronto-socorro leva a reforço desnecessário ou a proteção insuficiente.',
  refs: ['Programa Nacional de Imunizações', 'NR-7'] },

{ id: 'q-2.7-070', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da exposição ocupacional ao calor conforme as normas de higiene ocupacional de referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'O procedimento considera o índice de sobrecarga térmica combinado à taxa metabólica estimada da atividade, com regime de trabalho e descanso definido a partir do resultado — e a estimativa incorreta do metabolismo distorce toda a conclusão.', ok: true,
      why: 'Correta. O metabolismo da tarefa é metade da conta e a parte mais frequentemente mal estimada.' },
    { t: 'A avaliação considera apenas as variáveis ambientais medidas.', ok: false,
      why: 'Errada. A taxa metabólica da atividade integra o procedimento.' },
    { t: 'A taxa metabólica pode ser desconsiderada quando o ambiente é muito quente.', ok: false,
      why: 'Errada. Quanto maior o esforço, maior a produção interna de calor a dissipar.' },
    { t: 'O regime de trabalho e descanso não decorre do resultado da avaliação.', ok: false,
      why: 'Errada. É justamente um dos produtos da avaliação.' },
    { t: 'A medição deve ser feita em ponto único, independentemente do deslocamento do trabalhador.', ok: false,
      why: 'Errada. Trabalhadores que circulam entre ambientes exigem avaliação que represente o conjunto da jornada.' }
  ],
  comentario: 'Calor: ambiente medido mais metabolismo da tarefa, com regime de trabalho e descanso saindo do resultado. Errar a estimativa do esforço compromete tudo — e quem circula entre ambientes precisa de avaliação que represente a jornada inteira.',
  pegadinha: 'Medir só o ambiente ignora que metade da carga térmica é produzida pelo próprio trabalhador.',
  refs: ['NHO 06 — Fundacentro', 'ISO 7243', 'NR-15 — Anexo 3'] }

);
