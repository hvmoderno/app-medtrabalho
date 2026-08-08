/* Lote AJ — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 1.3. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-110', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atenuação obtida na prática por protetores auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'A atenuação real depende do ajuste, do uso contínuo durante toda a exposição e da compatibilidade com outros equipamentos usados na cabeça — e uma retirada breve durante a jornada reduz drasticamente a proteção média obtida no período.', ok: true,
      why: 'Correta. A proteção média cai muito com poucos minutos sem o protetor em ambiente ruidoso.' },
    { t: 'A atenuação declarada no certificado corresponde à obtida no campo.', ok: false,
      why: 'Errada. A atenuação de campo é sistematicamente menor.' },
    { t: 'Retiradas breves do protetor não afetam a proteção média da jornada.', ok: false,
      why: 'Errada. Poucos minutos sem proteção em nível alto derrubam a atenuação média.' },
    { t: 'O uso simultâneo de capacete e óculos não interfere na vedação do protetor tipo concha.', ok: false,
      why: 'Errada. A haste do óculos rompe a vedação da almofada e reduz a atenuação.' },
    { t: 'Protetor de inserção mal colocado mantém desempenho equivalente ao bem colocado.', ok: false,
      why: 'Errada. A colocação incorreta é a principal causa de perda de atenuação nesse tipo.' }
  ],
  comentario: 'Atenuação de campo é bem menor que a de catálogo, cai com retiradas breves e é rompida pela haste do óculos sob a concha. Treinar a colocação vale mais que escolher o protetor de maior número.',
  pegadinha: 'A haste do óculos de segurança sob a concha é a falha de vedação mais comum e menos percebida.',
  refs: ['NR-6', 'NIOSH — atenuação de campo de protetores auditivos'] },

{ id: 'q-2.3-110', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a formaldeído, é CORRETO afirmar:',
  alts: [
    { t: 'É agente irritante de vias aéreas e olhos, sensibilizante cutâneo e classificado como cancerígeno para humanos, com exposição em laboratórios de anatomia patológica, necrotérios, indústria de resinas e serviços de alisamento capilar.', ok: true,
      why: 'Correta. Reúne irritação, sensibilização e carcinogenicidade, em setores bastante distintos.' },
    { t: 'O formaldeído tem apenas efeito irritante, sem potencial carcinogênico.', ok: false,
      why: 'Errada. É classificado como cancerígeno para humanos.' },
    { t: 'A exposição ocupacional se restringe a laboratórios de anatomia patológica.', ok: false,
      why: 'Errada. Alcança indústria de resinas, necrotérios e serviços de estética capilar.' },
    { t: 'O odor característico serve como alerta confiável de concentrações perigosas.', ok: false,
      why: 'Errada. Há adaptação olfativa, o que torna o odor um alerta pouco confiável ao longo da jornada.' },
    { t: 'A ventilação geral do ambiente é a medida preferencial de controle.', ok: false,
      why: 'Errada. A prioridade é a captação na fonte, com sistema local exaustor.' }
  ],
  comentario: 'Formaldeído: irrita, sensibiliza e é cancerígeno — em setores que vão do necrotério ao salão de beleza. Odor não protege, porque há adaptação olfativa; a medida é captar na fonte.',
  pegadinha: 'Confiar no odor como alerta ignora que quem trabalha ali para de sentir o cheiro em pouco tempo.',
  refs: ['IARC — Grupo 1', 'ACGIH', 'NR-15'] },

{ id: 'q-2.4-110', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a bioaerossóis em ambientes climatizados de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Sistemas de climatização mal mantidos podem disseminar fungos e bactérias, com quadros que vão de irritação e rinite a pneumonite de hipersensibilidade e legionelose — o que faz da manutenção e do controle de qualidade do ar interno uma medida de saúde, não apenas de conforto.', ok: true,
      why: 'Correta. O sistema de ar-condicionado é fonte quando não mantido.' },
    { t: 'A climatização elimina o risco biológico do ambiente interno.', ok: false,
      why: 'Errada. Sem manutenção, ela se torna fonte de disseminação.' },
    { t: 'Queixas inespecíficas em ambientes climatizados não têm relação com a qualidade do ar interno.', ok: false,
      why: 'Errada. Compõem quadro reconhecido associado a ambientes fechados e climatizados.' },
    { t: 'A troca de filtros é medida de conforto, sem repercussão em saúde.', ok: false,
      why: 'Errada. Filtro saturado e bandeja com água parada são fontes de contaminação.' },
    { t: 'A renovação de ar externo não influencia a qualidade do ar interno.', ok: false,
      why: 'Errada. É determinante da diluição de contaminantes e de dióxido de carbono.' }
  ],
  comentario: 'Climatização sem manutenção vira fonte: filtro saturado, bandeja com água parada, torre de resfriamento. Do desconforto à pneumonite de hipersensibilidade e à legionelose — e a renovação de ar externo é o que dilui tudo.',
  pegadinha: 'Tratar a manutenção do sistema como item de conforto tira do escopo de saúde uma fonte real de agravos.',
  refs: ['RE nº 9/2003 — qualidade do ar interior', 'NR-32', 'Ministério da Saúde — legionelose'] },

{ id: 'q-2.6-110', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o conceito de exposição aceitável e a decisão de intervir, é CORRETO afirmar:',
  alts: [
    { t: 'A decisão considera a incerteza da avaliação, a gravidade do efeito esperado e a reversibilidade do dano — de modo que agentes com efeito grave e irreversível justificam intervenção mesmo com estimativas de exposição próximas ou abaixo do limite.', ok: true,
      why: 'Correta. Gravidade e irreversibilidade deslocam o ponto de decisão.' },
    { t: 'A decisão de intervir depende exclusivamente da comparação numérica com o limite.', ok: false,
      why: 'Errada. Incerteza, gravidade e reversibilidade compõem a decisão.' },
    { t: 'A incerteza da avaliação não deve influenciar a decisão.', ok: false,
      why: 'Errada. Maior incerteza recomenda margem maior de segurança.' },
    { t: 'Efeitos reversíveis e irreversíveis devem receber o mesmo peso na decisão.', ok: false,
      why: 'Errada. A irreversibilidade eleva a exigência de proteção.' },
    { t: 'Resultado abaixo do limite dispensa qualquer registro ou acompanhamento.', ok: false,
      why: 'Errada. Registro e reavaliação periódica permanecem necessários.' }
  ],
  comentario: 'Decidir não é só comparar número com limite: incerteza da medida, gravidade do efeito e irreversibilidade do dano deslocam o ponto de ação. Para agente que causa dano irreversível, a margem tem de ser maior.',
  pegadinha: 'A decisão puramente numérica trata igual o que causa irritação passageira e o que causa câncer.',
  refs: ['AIHA — estratégia de avaliação e decisão', 'ACGIH'] },

{ id: 'q-2.7-090', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o relatório de avaliação de exposição ocupacional elaborado segundo procedimento técnico padronizado, é CORRETO afirmar:',
  alts: [
    { t: 'Deve descrever o grupo avaliado, a estratégia de amostragem, os equipamentos e sua calibração, as condições e tarefas do período medido e o critério de comparação adotado — sem esses elementos, o resultado não é reprodutível nem verificável.', ok: true,
      why: 'Correta. Reprodutibilidade é o que distingue laudo técnico de número solto.' },
    { t: 'A apresentação dos resultados numéricos é suficiente para o relatório.', ok: false,
      why: 'Errada. Sem método e condições, o número não se interpreta.' },
    { t: 'A calibração dos equipamentos não precisa ser documentada.', ok: false,
      why: 'Errada. É elemento essencial da confiabilidade da medição.' },
    { t: 'As tarefas realizadas durante a medição são informação dispensável.', ok: false,
      why: 'Errada. Elas definem o que a medição representa.' },
    { t: 'O critério de comparação adotado pode ser omitido quando é o mais usual.', ok: false,
      why: 'Errada. Deve ser explicitado, pois há critérios diferentes com resultados distintos.' }
  ],
  comentario: 'Laudo de higiene se sustenta em: grupo avaliado, estratégia, equipamento calibrado, condições e tarefas do período, e critério de comparação declarado. Sem isso, o número não é verificável por ninguém.',
  pegadinha: 'Relatório que só apresenta resultados impede saber o que foi medido e contra qual critério.',
  refs: ['NHO — Fundacentro', 'AIHA'] },

{ id: 'q-2.9-110', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a manganês, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição a fumos e poeiras, especialmente em soldagem e metalurgia, associa-se a quadro neurológico com alterações extrapiramidais e de comportamento, cujas manifestações iniciais são sutis e frequentemente atribuídas a outras causas.', ok: true,
      why: 'Correta. As primeiras manifestações são comportamentais e passam despercebidas.' },
    { t: 'O manganês não apresenta neurotoxicidade relevante em exposições ocupacionais.', ok: false,
      why: 'Errada. A neurotoxicidade é o efeito característico dessa exposição.' },
    { t: 'A soldagem não constitui fonte de exposição a manganês.', ok: false,
      why: 'Errada. É uma das principais fontes ocupacionais, pelos fumos gerados.' },
    { t: 'O quadro neurológico é integralmente reversível com o afastamento.', ok: false,
      why: 'Errada. Alterações instaladas podem persistir após a cessação da exposição.' },
    { t: 'A ventilação geral do galpão é medida suficiente para controle da exposição em soldagem.', ok: false,
      why: 'Errada. É necessária captação de fumos junto à fonte.' }
  ],
  comentario: 'Manganês em soldagem e metalurgia: neurotoxicidade extrapiramidal e comportamental, de início sutil e nem sempre reversível. Ventilação geral não resolve — a captação é junto ao ponto de soldagem.',
  pegadinha: 'Alterações iniciais de comportamento em soldador raramente são associadas à exposição, e é aí que a intervenção ainda valeria.',
  refs: ['ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-1.3-110', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a matriz de exposição ocupacional como instrumento em estudos epidemiológicos, é CORRETO afirmar:',
  alts: [
    { t: 'Ela atribui exposições prováveis a partir da ocupação e do período, permitindo estudar populações sem medições individuais — ao custo de classificação errônea, que tende a diluir a associação observada em direção ao valor nulo.', ok: true,
      why: 'Correta. Viabiliza o estudo e cobra o preço da imprecisão da atribuição.' },
    { t: 'A matriz elimina a classificação errônea da exposição.', ok: false,
      why: 'Errada. Ela a reduz em relação ao autorrelato, mas não a elimina.' },
    { t: 'A classificação errônea introduzida pela matriz tende a inflar a associação observada.', ok: false,
      why: 'Errada. Sendo não diferencial, tende a diluir a associação.' },
    { t: 'A matriz dispensa a consideração do período histórico da exposição.', ok: false,
      why: 'Errada. Processos e agentes mudaram ao longo do tempo, e o período é dimensão essencial.' },
    { t: 'Matrizes construídas em outros países podem ser aplicadas sem adaptação.', ok: false,
      why: 'Errada. Processos produtivos e agentes utilizados variam entre contextos.' }
  ],
  comentario: 'Matriz de exposição atribui exposição por ocupação e período — viabiliza estudos históricos sem medição individual, com o custo da classificação errônea, que dilui em direção ao nulo. E precisa de adaptação ao contexto local.',
  pegadinha: 'Importar matriz estrangeira sem adaptação atribui exposições a processos que aqui eram outros.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology'] },

{ id: 'q-2.3-111', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a ficha de informações de segurança de produtos químicos, é CORRETO afirmar:',
  alts: [
    { t: 'Deve estar disponível e acessível aos trabalhadores no local de uso, em português, e sua seção sobre controles de exposição orienta a seleção de equipamentos — sendo documento de consulta operacional, e não peça de arquivo.', ok: true,
      why: 'Correta. Ficha guardada em armário trancado não cumpre função alguma.' },
    { t: 'A ficha é documento de arquivo, destinado à fiscalização.', ok: false,
      why: 'Errada. É documento de consulta pelos trabalhadores no local de uso.' },
    { t: 'A ficha em idioma estrangeiro cumpre a exigência quando o produto é importado.', ok: false,
      why: 'Errada. Deve estar em português para ser efetivamente compreensível.' },
    { t: 'A ficha substitui a capacitação dos trabalhadores sobre o produto.', ok: false,
      why: 'Errada. É insumo da capacitação, não substituto.' },
    { t: 'As informações de primeiros socorros da ficha não têm utilidade prática.', ok: false,
      why: 'Errada. Orientam a conduta imediata, inclusive a proteção de quem socorre.' }
  ],
  comentario: 'A ficha é ferramenta operacional: em português, acessível no local de uso, com controles de exposição e primeiros socorros que orientam conduta. Guardada e nunca lida, é documento para auditoria e nada mais.',
  pegadinha: 'Manter a ficha arquivada no setor administrativo cumpre a formalidade e não protege ninguém no chão de fábrica.',
  refs: ['NR-26', 'ABNT NBR 14725'] }

);
