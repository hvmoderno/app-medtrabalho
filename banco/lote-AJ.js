/* Lote AJ — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 1.3. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-110', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atenuação obtida na prática por protetores auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'Depende do ajuste, do uso contínuo e da compatibilidade com outros equipamentos da cabeça.', ok: true,
      why: 'Correta. Poucos minutos sem o protetor derrubam a proteção média da jornada.' },
    { t: 'Depende do modelo escolhido, correspondendo a atenuação declarada no certificado à obtida em campo.', ok: false,
      why: 'Errada. A atenuação de campo é sistematicamente menor que a declarada.' },
    { t: 'Depende do ajuste e do modelo, sem que retiradas breves afetem a proteção média da jornada.', ok: false,
      why: 'Errada. Poucos minutos sem proteção em nível alto derrubam a atenuação média.' },
    { t: 'Depende do ajuste e do uso contínuo, sem interferência de capacete e óculos na vedação da concha.', ok: false,
      why: 'Errada. A haste do óculos rompe a vedação da almofada e reduz a atenuação.' },
    { t: 'Depende do uso contínuo, mantendo o protetor de inserção mal colocado desempenho equivalente.', ok: false,
      why: 'Errada. A colocação incorreta é a principal causa de perda de atenuação nesse tipo.' }
  ],
  comentario: 'Atenuação de campo é bem menor que a de catálogo, cai com retiradas breves e é rompida pela haste do óculos sob a concha. Treinar a colocação vale mais que escolher o protetor de maior número.',
  pegadinha: 'A haste do óculos de segurança sob a concha é a falha de vedação mais comum e menos percebida.',
  refs: ['NR-6', 'NIOSH — atenuação de campo de protetores auditivos'] },

{ id: 'q-2.3-110', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a formaldeído, é CORRETO afirmar:',
  alts: [
    { t: 'É irritante, sensibilizante cutâneo e cancerígeno, com exposição em setores bem distintos.', ok: true,
      why: 'Correta. Anatomia patológica, necrotérios, resinas e alisamento capilar expõem a ele.' },
    { t: 'É irritante de vias aéreas e olhos e sensibilizante cutâneo, sem potencial carcinogênico reconhecido.', ok: false,
      why: 'Errada. É classificado como cancerígeno para humanos.' },
    { t: 'É irritante e cancerígeno, com exposição restrita aos laboratórios de anatomia patológica.', ok: false,
      why: 'Errada. Alcança indústria de resinas, necrotérios e estética capilar.' },
    { t: 'É irritante e cancerígeno, servindo seu odor de alerta confiável para concentrações perigosas.', ok: false,
      why: 'Errada. Há adaptação olfativa, o que torna o odor alerta pouco confiável.' },
    { t: 'É irritante e cancerígeno, sendo a ventilação geral do ambiente a medida preferencial de controle.', ok: false,
      why: 'Errada. A prioridade é a captação na fonte, com sistema local exaustor.' }
  ],
  comentario: 'Formaldeído: irrita, sensibiliza e é cancerígeno — em setores que vão do necrotério ao salão de beleza. Odor não protege, porque há adaptação olfativa; a medida é captar na fonte.',
  pegadinha: 'Confiar no odor como alerta ignora que quem trabalha ali para de sentir o cheiro em pouco tempo.',
  refs: ['IARC — Grupo 1', 'ACGIH', 'NR-15'] },

{ id: 'q-2.4-110', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a bioaerossóis em ambientes climatizados de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Sistemas mal mantidos disseminam fungos e bactérias, de rinite a pneumonite e legionelose.', ok: true,
      why: 'Correta. O ar-condicionado vira fonte quando não recebe manutenção.' },
    { t: 'A climatização filtra o ar e elimina o risco biológico do ambiente interno onde é instalada.', ok: false,
      why: 'Errada. Sem manutenção, ela se torna fonte de disseminação.' },
    { t: 'Sistemas podem disseminar agentes, sem relação das queixas inespecíficas com a qualidade do ar.', ok: false,
      why: 'Errada. Compõem quadro reconhecido associado a ambientes fechados e climatizados.' },
    { t: 'Sistemas podem disseminar agentes, sendo a troca de filtros medida de conforto, sem efeito em saúde.', ok: false,
      why: 'Errada. Filtro saturado e bandeja com água parada são fontes de contaminação.' },
    { t: 'Sistemas podem disseminar agentes, sem que a renovação de ar externo influencie o ar interno.', ok: false,
      why: 'Errada. É determinante da diluição de contaminantes e de dióxido de carbono.' }
  ],
  comentario: 'Climatização sem manutenção vira fonte: filtro saturado, bandeja com água parada, torre de resfriamento. Do desconforto à pneumonite de hipersensibilidade e à legionelose — e a renovação de ar externo é o que dilui tudo.',
  pegadinha: 'Tratar a manutenção do sistema como item de conforto tira do escopo de saúde uma fonte real de agravos.',
  refs: ['RE nº 9/2003 — qualidade do ar interior', 'NR-32', 'Ministério da Saúde — legionelose'] },

{ id: 'q-2.6-110', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o conceito de exposição aceitável e a decisão de intervir, é CORRETO afirmar:',
  alts: [
    { t: 'Considera a incerteza da avaliação, a gravidade do efeito esperado e a reversibilidade do dano.', ok: true,
      why: 'Correta. Efeito grave e irreversível justifica intervir mesmo perto ou abaixo do limite.' },
    { t: 'Depende da comparação numérica entre o resultado obtido e o limite de exposição aplicável ao agente.', ok: false,
      why: 'Errada. Incerteza, gravidade e reversibilidade compõem a decisão.' },
    { t: 'Considera gravidade e reversibilidade, sem que a incerteza da avaliação influencie a decisão.', ok: false,
      why: 'Errada. Maior incerteza recomenda margem maior de segurança.' },
    { t: 'Considera a incerteza e a gravidade, com igual peso para efeitos reversíveis e irreversíveis.', ok: false,
      why: 'Errada. A irreversibilidade eleva a exigência de proteção.' },
    { t: 'Considera a incerteza e a gravidade, dispensando o resultado abaixo do limite qualquer registro.', ok: false,
      why: 'Errada. Registro e reavaliação periódica permanecem necessários.' }
  ],
  comentario: 'Decidir não é só comparar número com limite: incerteza da medida, gravidade do efeito e irreversibilidade do dano deslocam o ponto de ação. Para agente que causa dano irreversível, a margem tem de ser maior.',
  pegadinha: 'A decisão puramente numérica trata igual o que causa irritação passageira e o que causa câncer.',
  refs: ['AIHA — estratégia de avaliação e decisão', 'ACGIH'] },

{ id: 'q-2.7-090', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o relatório de avaliação de exposição ocupacional elaborado segundo procedimento técnico padronizado, é CORRETO afirmar:',
  alts: [
    { t: 'Deve descrever grupo, estratégia, equipamentos, calibração, tarefas e critério de comparação.', ok: true,
      why: 'Correta. Reprodutibilidade é o que distingue laudo técnico de número solto.' },
    { t: 'Deve apresentar os resultados numéricos obtidos, suficientes para compor o relatório da avaliação.', ok: false,
      why: 'Errada. Sem método e condições, o número não se interpreta.' },
    { t: 'Deve descrever grupo e estratégia, não precisando documentar a calibração dos equipamentos usados.', ok: false,
      why: 'Errada. É elemento essencial da confiabilidade da medição.' },
    { t: 'Deve descrever grupo e equipamentos, sendo dispensáveis as tarefas realizadas durante a medição.', ok: false,
      why: 'Errada. Elas definem o que a medição representa.' },
    { t: 'Deve descrever a estratégia, podendo omitir o critério de comparação quando é o mais usual.', ok: false,
      why: 'Errada. Deve ser explicitado, pois critérios diferentes dão resultados distintos.' }
  ],
  comentario: 'Laudo de higiene se sustenta em: grupo avaliado, estratégia, equipamento calibrado, condições e tarefas do período, e critério de comparação declarado. Sem isso, o número não é verificável por ninguém.',
  pegadinha: 'Relatório que só apresenta resultados impede saber o que foi medido e contra qual critério.',
  refs: ['NHO — Fundacentro', 'AIHA'] },

{ id: 'q-2.9-110', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a manganês, é CORRETO afirmar:',
  alts: [
    { t: 'Fumos de soldagem e metalurgia associam-se a quadro extrapiramidal e de comportamento.', ok: true,
      why: 'Correta. As primeiras manifestações são comportamentais e passam despercebidas.' },
    { t: 'Fumos de soldagem irritam as vias aéreas, sem neurotoxicidade relevante nas exposições ocupacionais.', ok: false,
      why: 'Errada. A neurotoxicidade é o efeito característico dessa exposição.' },
    { t: 'O manganês é neurotóxico, não constituindo a soldagem fonte de exposição a esse metal.', ok: false,
      why: 'Errada. É uma das principais fontes ocupacionais, pelos fumos gerados.' },
    { t: 'O manganês é neurotóxico, sendo o quadro integralmente reversível com o afastamento da fonte.', ok: false,
      why: 'Errada. Alterações instaladas podem persistir após a cessação da exposição.' },
    { t: 'O manganês é neurotóxico, bastando a ventilação geral do galpão para controlar a exposição.', ok: false,
      why: 'Errada. É necessária captação de fumos junto à fonte.' }
  ],
  comentario: 'Manganês em soldagem e metalurgia: neurotoxicidade extrapiramidal e comportamental, de início sutil e nem sempre reversível. Ventilação geral não resolve — a captação é junto ao ponto de soldagem.',
  pegadinha: 'Alterações iniciais de comportamento em soldador raramente são associadas à exposição, e é aí que a intervenção ainda valeria.',
  refs: ['ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-1.3-110', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a matriz de exposição ocupacional como instrumento em estudos epidemiológicos, é CORRETO afirmar:',
  alts: [
    { t: 'Atribui exposições prováveis pela ocupação e período, ao custo de classificação errônea.', ok: true,
      why: 'Correta. Viabiliza o estudo e dilui a associação em direção ao valor nulo.' },
    { t: 'Atribui exposições pela ocupação e pelo período, eliminando a classificação errônea da exposição.', ok: false,
      why: 'Errada. Ela a reduz em relação ao autorrelato, mas não a elimina.' },
    { t: 'Atribui exposições prováveis, inflando a classificação errônea daí decorrente a associação observada.', ok: false,
      why: 'Errada. Sendo não diferencial, tende a diluir a associação.' },
    { t: 'Atribui exposições pela ocupação, dispensando a consideração do período histórico da exposição.', ok: false,
      why: 'Errada. Processos e agentes mudaram ao longo do tempo; o período é essencial.' },
    { t: 'Atribui exposições prováveis, podendo matrizes de outros países ser aplicadas sem adaptação.', ok: false,
      why: 'Errada. Processos produtivos e agentes utilizados variam entre contextos.' }
  ],
  comentario: 'Matriz de exposição atribui exposição por ocupação e período — viabiliza estudos históricos sem medição individual, com o custo da classificação errônea, que dilui em direção ao nulo. E precisa de adaptação ao contexto local.',
  pegadinha: 'Importar matriz estrangeira sem adaptação atribui exposições a processos que aqui eram outros.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology'] },

{ id: 'q-2.3-111', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a ficha de informações de segurança de produtos químicos, é CORRETO afirmar:',
  alts: [
    { t: 'Deve estar acessível no local de uso, em português, e orienta a seleção de equipamentos.', ok: true,
      why: 'Correta. Ficha guardada em armário trancado não cumpre função alguma.' },
    { t: 'É documento de arquivo do setor de segurança, destinado a apresentação em caso de fiscalização.', ok: false,
      why: 'Errada. É documento de consulta pelos trabalhadores no local de uso.' },
    { t: 'Deve estar acessível no local de uso, cumprindo a exigência em idioma estrangeiro se importado.', ok: false,
      why: 'Errada. Deve estar em português para ser efetivamente compreensível.' },
    { t: 'Deve estar acessível no local de uso, substituindo a capacitação dos trabalhadores sobre o produto.', ok: false,
      why: 'Errada. É insumo da capacitação, não substituto.' },
    { t: 'Deve estar acessível, sem utilidade prática as informações de primeiros socorros que ela traz.', ok: false,
      why: 'Errada. Orientam a conduta imediata, inclusive a proteção de quem socorre.' }
  ],
  comentario: 'A ficha é ferramenta operacional: em português, acessível no local de uso, com controles de exposição e primeiros socorros que orientam conduta. Guardada e nunca lida, é documento para auditoria e nada mais.',
  pegadinha: 'Manter a ficha arquivada no setor administrativo cumpre a formalidade e não protege ninguém no chão de fábrica.',
  refs: ['NR-26', 'ABNT NBR 14725'] }

);
