/* Lote Y — 4.4, 4.5, 4.6, 4.8, 5.4, 5.5, 4.10, 2.7. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-090', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a urticária de contato ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Pode ser imunológica, com risco de reação sistêmica e anafilaxia, como no látex de borracha natural.', ok: true,
      why: 'Correta. É a dermatose ocupacional com risco de evento agudo grave.' },
    { t: 'Tem sempre mecanismo irritativo e curso benigno, limitado à área de contato com a substância.', ok: false,
      why: 'Errada. A forma imunológica pode evoluir com manifestação sistêmica.' },
    { t: 'Pode ser imunológica ou irritativa, sem risco de reação sistêmica por sensibilização a contato cutâneo.', ok: false,
      why: 'Errada. A sensibilização ao látex é exemplo consagrado de risco sistêmico.' },
    { t: 'Pode ser imunológica, reduzindo o uso de luvas com pó o risco de sensibilização ao látex natural.', ok: false,
      why: 'Errada. O pó veicula a proteína alergênica e favorece a sensibilização, inclusive por via aérea.' },
    { t: 'Pode ser imunológica com risco sistêmico, não sendo eficaz a substituição do material após a sensibilização.', ok: false,
      why: 'Errada. A substituição por material alternativo é a medida central de manejo.' }
  ],
  comentario: 'Urticária de contato imunológica pode chegar à anafilaxia — o látex é o exemplo clássico. Luva com pó piora, porque o pó carrega a proteína e a dispersa no ar; substituir o material é o manejo.',
  pegadinha: 'Tratar toda dermatose ocupacional como quadro de evolução lenta ignora a que pode matar no mesmo dia.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-32'] },

{ id: 'q-4.5-080', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a repercussão funcional da perda auditiva induzida por ruído, é CORRETO afirmar:',
  alts: [
    { t: 'A dificuldade de fala em ruído precede a queixa de ouvir pouco, pois as agudas levam as consoantes.', ok: true,
      why: 'Correta. A perda começa onde estão as consoantes, não no volume percebido.' },
    { t: 'A primeira queixa é a redução do volume percebido dos sons ambientes ao longo da jornada de trabalho.', ok: false,
      why: 'Errada. A dificuldade de discriminação em ambiente ruidoso costuma vir antes.' },
    { t: 'A queixa de fala em ruído é frequente, embora a perda em frequências agudas não afete a compreensão.', ok: false,
      why: 'Errada. É justamente ali que se distinguem as consoantes.' },
    { t: 'A dificuldade de fala em ruído precede outras queixas, não sendo a repercussão familiar objeto da avaliação.', ok: false,
      why: 'Errada. Isolamento e conflitos familiares são repercussões reconhecidas e relevantes.' },
    { t: 'A dificuldade de fala em ruído precede outras queixas, restaurando a prótese integralmente a discriminação.', ok: false,
      why: 'Errada. A amplificação melhora a audibilidade, mas não recupera a discriminação.' }
  ],
  comentario: 'A perda por ruído rouba consoantes antes de roubar volume: a pessoa ouve que falaram, mas não entende o que disseram — sobretudo com ruído de fundo. Prótese amplifica; não devolve discriminação.',
  pegadinha: 'Esperar a queixa de "ouço pouco" adia a suspeita para depois de a perda alcançar as frequências da fala.',
  refs: ['Diretrizes de audiologia ocupacional', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-080', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o suicídio e a tentativa de suicídio relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Há situações em que fatores ocupacionais são determinantes, e a investigação deve alcançá-los.', ok: true,
      why: 'Correta. Investigar só a história pessoal reproduz a omissão que permitiu o desfecho.' },
    { t: 'O suicídio é evento de determinação exclusivamente individual, ligado à história pessoal de cada um.', ok: false,
      why: 'Errada. Fatores ocupacionais podem ser determinantes ou contribuintes relevantes.' },
    { t: 'Fatores ocupacionais podem contribuir, sem que a notificação de tentativa se relacione à saúde do trabalhador.', ok: false,
      why: 'Errada. É agravo de notificação e a dimensão ocupacional deve ser investigada.' },
    { t: 'Fatores ocupacionais podem contribuir, devendo a investigação restringir-se ao histórico psiquiátrico.', ok: false,
      why: 'Errada. Precisa alcançar assédio, sobrecarga, humilhação pública e outras condições.' },
    { t: 'Fatores ocupacionais podem contribuir, devendo a comunicação à equipe incluir método e histórico clínico.', ok: false,
      why: 'Errada. Há recomendações de comunicação responsável para evitar efeito de imitação.' }
  ],
  comentario: 'Suicídio pode ter determinação ocupacional e é objeto de notificação e investigação — que precisa olhar assédio, sobrecarga e humilhação, não só o histórico psiquiátrico. E a comunicação à equipe segue diretrizes próprias, sem detalhes de método.',
  pegadinha: 'Investigar apenas a história pessoal preserva intactas as condições que contribuíram.',
  refs: ['Ministério da Saúde — notificação de violência autoprovocada', 'OMS — comunicação responsável'] },

{ id: 'q-4.8-080', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o câncer de bexiga relacionado a exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Aminas aromáticas de corantes e borracha têm associação com o desfecho, e a latência é longa.', ok: true,
      why: 'Correta. A exposição pode ter cessado décadas antes do diagnóstico.' },
    { t: 'Não há associação reconhecida entre exposições ocupacionais e câncer de bexiga na literatura atual.', ok: false,
      why: 'Errada. É um dos cânceres ocupacionais historicamente mais bem documentados.' },
    { t: 'Aminas aromáticas têm associação com o desfecho, e a latência curta permite associá-lo à exposição atual.', ok: false,
      why: 'Errada. A latência é longa e a exposição relevante costuma ser pregressa.' },
    { t: 'Aminas aromáticas têm associação com o desfecho, afastando o tabagismo a contribuição ocupacional.', ok: false,
      why: 'Errada. É fator concorrente, e a contribuição ocupacional permanece possível.' },
    { t: 'Aminas aromáticas têm associação com o desfecho, restrita a exposição à indústria de corantes.', ok: false,
      why: 'Errada. Alcançou também borracha, produtos químicos e outros setores.' }
  ],
  comentario: 'Bexiga e aminas aromáticas: associação histórica bem estabelecida, latência longa, exposição frequentemente encerrada há décadas e em setores além dos corantes. Tabagismo é concorrente, não excludente.',
  pegadinha: 'Perguntar só pela ocupação atual em caso de hematúria perde a exposição que importa.',
  refs: ['IARC', 'INCA — câncer relacionado ao trabalho'] },

{ id: 'q-5.4-090', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a diferença entre incapacidade temporária e permanente na avaliação pericial, é CORRETO afirmar:',
  alts: [
    { t: 'Depende da expectativa de recuperação, e a permanência não exige irreversibilidade absoluta.', ok: true,
      why: 'Correta. Tempo de afastamento por si não converte temporária em permanente.' },
    { t: 'Depende do tempo decorrido, tornando-se a incapacidade permanente após certo período de afastamento.', ok: false,
      why: 'Errada. A conversão depende de avaliação clínica, não de prazo decorrido.' },
    { t: 'Depende da expectativa de recuperação, exigindo a permanente a irreversibilidade absoluta do quadro.', ok: false,
      why: 'Errada. Basta a ausência de expectativa de recuperação funcional relevante.' },
    { t: 'Depende da expectativa de recuperação, não integrando a análise a possibilidade de reabilitação profissional.', ok: false,
      why: 'Errada. É elemento central antes de concluir por incapacidade permanente para todo trabalho.' },
    { t: 'Depende da expectativa de recuperação, implicando a permanente para uma função incapacidade para qualquer.', ok: false,
      why: 'Errada. São graus distintos, e a capacidade residual costuma permitir outras atividades.' }
  ],
  comentario: 'Temporária ou permanente decide-se pela expectativa de recuperação, não pelo calendário. Permanente para a função não é permanente para tudo — e a reabilitação entra na análise antes dessa conclusão.',
  pegadinha: 'Converter por decurso de prazo dispensa a avaliação que fundamenta a conclusão.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-080', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de capacidade em trabalhador com múltiplas comorbidades, é CORRETO afirmar:',
  alts: [
    { t: 'O efeito conjunto pode superar a soma isolada, devendo descrever a limitação resultante.', ok: true,
      why: 'Correta. Comorbidades interagem, e o que importa é a limitação resultante, não a lista.' },
    { t: 'A avaliação deve considerar a condição de maior gravidade isolada, que determina a limitação predominante.', ok: false,
      why: 'Errada. O conjunto define a funcionalidade resultante.' },
    { t: 'O efeito conjunto se obtém somando os percentuais atribuídos a cada condição avaliada isoladamente.', ok: false,
      why: 'Errada. Somar percentuais não descreve a funcionalidade real.' },
    { t: 'O efeito conjunto importa, podendo a listagem de diagnósticos substituir a descrição funcional na conclusão.', ok: false,
      why: 'Errada. Diagnóstico não descreve o que a pessoa consegue ou não consegue fazer.' },
    { t: 'O efeito conjunto importa, devendo as comorbidades não ocupacionais ser excluídas dessa avaliação.', ok: false,
      why: 'Errada. A capacidade se avalia no trabalhador inteiro; a origem importa para o nexo.' }
  ],
  comentario: 'Comorbidades interagem e a limitação resultante não é a soma das partes. Avalia-se o trabalhador inteiro — a origem de cada condição importa para o nexo, não para medir o que ele consegue fazer.',
  pegadinha: 'Somar percentuais de tabela por condição produz número sem correspondência com a funcionalidade.',
  refs: ['CIF — OMS', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-4.10-070', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a vacinação antitetânica de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'A conduta depende do estado vacinal e da lesão, e o histórico deve ser conhecido antes do acidente.', ok: true,
      why: 'Correta. Checar carteira vacinal no atendimento de urgência costuma ser tarde e impreciso.' },
    { t: 'A conduta depende do estado vacinal, independendo do tipo e do grau de contaminação do ferimento.', ok: false,
      why: 'Errada. Ferimentos com maior risco alteram a indicação.' },
    { t: 'A conduta depende do estado vacinal, sendo o reforço indicado apenas na construção civil.', ok: false,
      why: 'Errada. A indicação decorre do estado vacinal e do risco de ferimentos em qualquer atividade.' },
    { t: 'A conduta depende do estado vacinal e da lesão, substituindo a imunização passiva o esquema completo.', ok: false,
      why: 'Errada. É medida complementar em situações específicas, não substitutiva.' },
    { t: 'A conduta depende do estado vacinal, sendo dispensável seu registro no prontuário ocupacional.', ok: false,
      why: 'Errada. É o registro que permite decidir corretamente no momento do acidente.' }
  ],
  comentario: 'Tétano: a decisão depende do estado vacinal e do tipo de ferimento — e por isso o histórico deve estar registrado antes, no prontuário ocupacional. Imunização passiva complementa em situações específicas, não substitui esquema.',
  pegadinha: 'Descobrir o estado vacinal só no pronto-socorro leva a reforço desnecessário ou a proteção insuficiente.',
  refs: ['Programa Nacional de Imunizações', 'NR-7'] },

{ id: 'q-2.7-070', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da exposição ocupacional ao calor conforme as normas de higiene ocupacional de referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'Combina o índice de sobrecarga térmica com a taxa metabólica estimada da atividade executada.', ok: true,
      why: 'Correta. O metabolismo da tarefa é metade da conta e a parte mais mal estimada.' },
    { t: 'Considera as variáveis ambientais medidas no posto, que expressam integralmente a sobrecarga térmica.', ok: false,
      why: 'Errada. A taxa metabólica da atividade integra o procedimento.' },
    { t: 'Combina ambiente e metabolismo, podendo este ser desconsiderado quando o ambiente é muito quente.', ok: false,
      why: 'Errada. Quanto maior o esforço, maior a produção interna de calor a dissipar.' },
    { t: 'Combina ambiente e metabolismo, não decorrendo o regime de trabalho e descanso desse resultado.', ok: false,
      why: 'Errada. É justamente um dos produtos da avaliação.' },
    { t: 'Combina ambiente e metabolismo, medindo-se em ponto único ainda que o trabalhador se desloque.', ok: false,
      why: 'Errada. Quem circula entre ambientes exige avaliação que represente o conjunto da jornada.' }
  ],
  comentario: 'Calor: ambiente medido mais metabolismo da tarefa, com regime de trabalho e descanso saindo do resultado. Errar a estimativa do esforço compromete tudo — e quem circula entre ambientes precisa de avaliação que represente a jornada inteira.',
  pegadinha: 'Medir só o ambiente ignora que metade da carga térmica é produzida pelo próprio trabalhador.',
  refs: ['NHO 06 — Fundacentro', 'ISO 7243', 'NR-15 — Anexo 3'] }

);
