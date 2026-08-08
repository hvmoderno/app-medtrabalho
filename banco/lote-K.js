/* Lote K — 4.5, 4.6, 5.5, 5.2. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.5-052', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Operador de prensa com 15 anos de exposição a ruído apresenta audiometria com entalhe em frequências agudas bilateral e simétrico. Ele refere piora súbita da audição em um dos ouvidos no último mês. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A assimetria de instalação recente destoa do padrão da perda induzida por ruído e exige investigação otorrinolaringológica de outra causa, sem que isso descarte a perda ocupacional preexistente que a audiometria já documentava.', ok: true,
      why: 'Correta. Duas coisas coexistem: a perda ocupacional crônica e um evento novo que precisa de diagnóstico próprio.' },
    { t: 'A piora deve ser atribuída à progressão da perda induzida por ruído.', ok: false,
      why: 'Errada. A perda por ruído é lentamente progressiva e simétrica; piora súbita unilateral não é seu padrão.' },
    { t: 'O achado novo invalida o diagnóstico anterior de perda ocupacional.', ok: false,
      why: 'Errada. Uma condição nova não apaga a perda crônica já documentada.' },
    { t: 'A conduta é apenas repetir a audiometria em seis meses.', ok: false,
      why: 'Errada. Perda súbita é situação em que a demora reduz a chance de recuperação.' },
    { t: 'A perda induzida por ruído tipicamente ultrapassa níveis profundos e evolui para anacusia.', ok: false,
      why: 'Errada. Ela tende a estabilizar e não costuma produzir anacusia isoladamente.' }
  ],
  comentario: 'Perda por ruído: lenta, bilateral, simétrica, com entalhe em agudos, e estabiliza — não chega a anacusia. Piora súbita e assimétrica é outra história e tem urgência própria. Reconhecer a nova não apaga a antiga.',
  pegadinha: 'Atribuir tudo à exposição conhecida retarda o diagnóstico do que é agudo e tratável.',
  refs: ['NR-7 — Anexo I', 'Diretrizes de audiologia ocupacional'] },

{ id: 'q-4.5-053', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição combinada a ruído e a agentes químicos ototóxicos no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Solventes e alguns metais têm potencial ototóxico e podem agravar ou antecipar a perda auditiva em trabalhadores também expostos a ruído — o que exige considerar a exposição química na avaliação audiológica, e não apenas o nível de pressão sonora.', ok: true,
      why: 'Correta. A avaliação centrada apenas no ruído subestima o risco em ambientes com solventes.' },
    { t: 'A perda auditiva ocupacional decorre exclusivamente da exposição a ruído.', ok: false,
      why: 'Errada. Há agentes químicos com potencial ototóxico reconhecido.' },
    { t: 'A exposição a solventes só interessa à avaliação neurológica e hepática.', ok: false,
      why: 'Errada. O comprometimento auditivo é desfecho documentado de várias dessas exposições.' },
    { t: 'A proteção auditiva adequada neutraliza também o efeito dos agentes ototóxicos.', ok: false,
      why: 'Errada. O protetor atua sobre o ruído; a via química é sistêmica e permanece.' },
    { t: 'Ruído dentro do limite de tolerância exclui risco auditivo em ambiente com solventes.', ok: false,
      why: 'Errada. A combinação pode produzir efeito acima do esperado para o ruído isolado.' }
  ],
  comentario: 'Ototoxicidade ocupacional: solventes e alguns metais agravam ou antecipam a perda induzida por ruído. Protetor auricular não bloqueia a via química — e ruído dentro do limite não garante ausência de risco quando há coexposição.',
  pegadinha: 'Contar apenas com o protetor auricular deixa a via sistêmica inteiramente descoberta.',
  refs: ['ACGIH — ototoxicantes', 'NIOSH — ruído e ototoxicantes', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-052', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma equipe de atendimento a clientes apresenta, em seis meses, três afastamentos por transtorno de ansiedade e elevação de queixas de esgotamento. Sobre a abordagem do caso, é CORRETO afirmar:',
  alts: [
    { t: 'O agrupamento de casos em uma mesma equipe é sinal de fator organizacional e demanda avaliação coletiva — metas, ritmo, controle sobre o trabalho, exposição a agressividade de clientes, suporte da chefia —, e não apenas encaminhamento individual dos afetados.', ok: true,
      why: 'Correta. Vários casos no mesmo ponto apontam para a causa comum: o desenho do trabalho.' },
    { t: 'O agrupamento reflete predisposição individual coincidente dos trabalhadores.', ok: false,
      why: 'Errada. Concentração de casos em uma equipe é achado de causa comum, não coincidência.' },
    { t: 'A conduta adequada se esgota no encaminhamento dos três casos para tratamento.', ok: false,
      why: 'Errada. Tratar sem intervir no fator gera novos casos na mesma equipe.' },
    { t: 'Fatores psicossociais não integram os riscos a serem identificados no programa de gerenciamento.', ok: false,
      why: 'Errada. Passaram a integrar expressamente o inventário de riscos ocupacionais.' },
    { t: 'A avaliação coletiva exige identificação nominal dos afastados perante a equipe.', ok: false,
      why: 'Errada. A avaliação é de condições de trabalho e não pode expor diagnósticos individuais.' }
  ],
  comentario: 'Cluster em uma equipe é sinal de causa organizacional. Tratar os três e devolvê-los ao mesmo desenho de trabalho produz o quarto. Fatores psicossociais são risco a inventariar — e a avaliação coletiva nunca expõe diagnóstico individual.',
  pegadinha: 'Explicar o agrupamento por predisposição individual é a leitura que preserva o fator causal.',
  refs: ['NR-1 — gerenciamento de riscos, fatores psicossociais', 'OIT — riscos psicossociais'] },

{ id: 'q-4.6-053', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a síndrome de burnout, é CORRETO afirmar:',
  alts: [
    { t: 'É caracterizada como fenômeno ocupacional resultante de estresse crônico no trabalho não gerenciado, com exaustão, distanciamento mental do trabalho e redução da eficácia profissional — descrição que aponta a origem para a organização do trabalho, e não para fragilidade do indivíduo.', ok: true,
      why: 'Correta. A própria definição vincula o quadro ao contexto ocupacional.' },
    { t: 'É um transtorno de personalidade de manifestação tardia.', ok: false,
      why: 'Errada. Não é transtorno de personalidade nem característica do indivíduo.' },
    { t: 'Aplica-se igualmente a qualquer esfera da vida, sem especificidade ocupacional.', ok: false,
      why: 'Errada. A conceituação é expressamente restrita ao contexto do trabalho.' },
    { t: 'Seu manejo se resolve com afastamento e retorno ao mesmo posto sem mudanças.', ok: false,
      why: 'Errada. Retorno ao mesmo contexto sem alteração reproduz o quadro.' },
    { t: 'A presença de burnout exclui a coexistência de depressão.', ok: false,
      why: 'Errada. A coexistência é frequente e exige avaliação diagnóstica cuidadosa.' }
  ],
  comentario: 'Burnout: três dimensões — exaustão, distanciamento e queda de eficácia — e origem no estresse ocupacional crônico não gerenciado. Afastar sem mudar o trabalho é adiar a recidiva.',
  pegadinha: 'Estender o conceito a outras esferas da vida dilui exatamente o que o torna ocupacional.',
  refs: ['CID-11 — burnout como fenômeno ocupacional', 'OMS'] },

{ id: 'q-5.5-052', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da capacidade laborativa em trabalhador com sequela estabilizada, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação confronta as limitações funcionais residuais com as exigências reais da atividade — descritas concretamente, e não pelo nome do cargo —, podendo resultar em capacidade para uma função e incapacidade para outra no mesmo trabalhador.', ok: true,
      why: 'Correta. Capacidade é sempre relacional: depende do que a atividade exige.' },
    { t: 'A capacidade é atributo do trabalhador, independente da atividade avaliada.', ok: false,
      why: 'Errada. Não existe capacidade em abstrato: ela se define frente a exigências específicas.' },
    { t: 'O nome do cargo registrado em carteira descreve suficientemente as exigências.', ok: false,
      why: 'Errada. Cargos de mesmo nome têm exigências muito distintas entre empresas.' },
    { t: 'Sequela estabilizada implica necessariamente incapacidade permanente.', ok: false,
      why: 'Errada. Estabilização informa sobre a evolução, não sobre o grau de repercussão funcional.' },
    { t: 'A avaliação deve considerar apenas o diagnóstico, sem descrição funcional.', ok: false,
      why: 'Errada. O diagnóstico não determina a repercussão funcional, que varia amplamente.' }
  ],
  comentario: 'Capacidade é relacional: limitações residuais versus exigências reais da atividade, descritas concretamente. O mesmo diagnóstico incapacita para uma função e não para outra — por isso a descrição funcional vale mais que o rótulo diagnóstico.',
  pegadinha: 'Confiar no nome do cargo em vez das exigências reais produz conclusões erradas nos dois sentidos.',
  refs: ['CIF — Classificação Internacional de Funcionalidade', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-053', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a distinção entre deficiência, limitação de atividade e restrição de participação na avaliação funcional, é CORRETO afirmar:',
  alts: [
    { t: 'São níveis distintos — alteração de estrutura ou função corporal, dificuldade na execução de tarefas e problema no envolvimento em situações de vida —, e a mesma deficiência produz restrições diferentes conforme o contexto e as barreiras existentes.', ok: true,
      why: 'Correta. É o núcleo do modelo biopsicossocial de funcionalidade.' },
    { t: 'Os três termos designam o mesmo fenômeno em graus crescentes de gravidade.', ok: false,
      why: 'Errada. São dimensões distintas, não uma escala de gravidade.' },
    { t: 'A restrição de participação decorre exclusivamente da deficiência corporal.', ok: false,
      why: 'Errada. Depende de fatores contextuais e das barreiras do ambiente.' },
    { t: 'Os fatores ambientais não integram a avaliação da funcionalidade.', ok: false,
      why: 'Errada. Integram e podem atuar como barreira ou como facilitador.' },
    { t: 'A avaliação funcional dispensa a consideração de fatores pessoais.', ok: false,
      why: 'Errada. Fatores pessoais compõem o contexto e influenciam o desempenho.' }
  ],
  comentario: 'Três níveis: estrutura e função, atividade, participação. A mesma deficiência dá restrições diferentes conforme as barreiras do ambiente — e é isso que torna a adaptação do posto uma intervenção sobre a incapacidade, não sobre a doença.',
  pegadinha: 'Ler os três termos como escala de gravidade perde justamente o papel do ambiente.',
  refs: ['CIF — OMS'] },

{ id: 'q-5.2-050', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o nexo técnico epidemiológico previdenciário, é CORRETO afirmar:',
  alts: [
    { t: 'Ele decorre do cruzamento estatístico entre a atividade econômica do empregador e a entidade mórbida do trabalhador, gerando presunção relativa de origem ocupacional que pode ser afastada mediante demonstração técnica em contrário.', ok: true,
      why: 'Correta. É presunção relativa, baseada em associação estatística entre setor e agravo.' },
    { t: 'Ele estabelece presunção absoluta, insuscetível de contestação.', ok: false,
      why: 'Errada. Há via própria para o empregador demonstrar a inexistência de nexo.' },
    { t: 'Ele decorre da análise individual do posto de trabalho do segurado.', ok: false,
      why: 'Errada. Baseia-se em cruzamento estatístico entre atividade econômica e agravo, não em análise individual.' },
    { t: 'Sua ausência no caso concreto afasta a possibilidade de reconhecimento de doença ocupacional.', ok: false,
      why: 'Errada. O nexo pode ser reconhecido por outras vias, inclusive individual.' },
    { t: 'Ele se aplica a acidentes típicos.', ok: false,
      why: 'Errada. Volta-se ao adoecimento, não ao acidente típico, cujo nexo se estabelece pelo evento.' }
  ],
  comentario: 'Nexo epidemiológico: estatística de setor cruzada com agravo, presunção relativa, contestável por demonstração técnica. A ausência dele não fecha a porta — o nexo individual continua disponível.',
  pegadinha: 'Tomar a ausência do nexo epidemiológico como negativa de doença ocupacional é o erro que mais prejudica trabalhador de setor com estatística baixa.',
  refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.2-051', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise de nexo em doença de causa múltipla, como as musculoesqueléticas, é CORRETO afirmar:',
  alts: [
    { t: 'A multicausalidade não impede o reconhecimento: basta que a exposição ocupacional tenha contribuído de modo relevante para o surgimento ou o agravamento, e a existência de fatores não ocupacionais concorrentes é a regra, não a exceção.', ok: true,
      why: 'Correta. Exigir causa única eliminaria de saída quase todas as doenças relacionadas ao trabalho.' },
    { t: 'A multicausalidade impede o reconhecimento de nexo ocupacional.', ok: false,
      why: 'Errada. A maioria das doenças relacionadas ao trabalho é multicausal.' },
    { t: 'A presença de atividade doméstica ou esportiva semelhante afasta o nexo.', ok: false,
      why: 'Errada. É preciso comparar magnitude, duração e frequência da exposição, não apenas a semelhança do gesto.' },
    { t: 'O nexo em doença multicausal exige comprovação de que o trabalho é a causa predominante.', ok: false,
      why: 'Errada. Contribuição relevante basta, sem exigência de predominância.' },
    { t: 'A idade do trabalhador, isoladamente, explica o quadro degenerativo e afasta o trabalho.', ok: false,
      why: 'Errada. Idade é fator concorrente e não afasta a contribuição ocupacional.' }
  ],
  comentario: 'Doença multicausal: contribuição relevante basta, sem exigência de predominância nem de exclusividade. Idade e atividades extralaborais são concorrentes — e comparar gesto sem comparar carga, duração e frequência não sustenta a negativa.',
  pegadinha: '"Ela também faz isso em casa" só teria peso se a magnitude da exposição doméstica fosse comparável.',
  refs: ['Lei nº 8.213/1991 — art. 20 e 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.2-052', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os elementos que compõem a investigação de nexo entre doença e trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A investigação combina história ocupacional detalhada com magnitude e duração da exposição, plausibilidade biológica, compatibilidade temporal, evidência epidemiológica e exclusão razoável de outras causas — nenhum elemento isolado decide.', ok: true,
      why: 'Correta. É um conjunto convergente, não um teste único.' },
    { t: 'A confirmação laboratorial da exposição é indispensável em todos os casos.', ok: false,
      why: 'Errada. Frequentemente indisponível, sobretudo em exposições antigas.' },
    { t: 'A história ocupacional relatada pelo trabalhador não deve ser considerada por ser subjetiva.', ok: false,
      why: 'Errada. Muitas vezes é a única fonte sobre condições pretéritas e deve ser valorizada criticamente.' },
    { t: 'A compatibilidade temporal isolada é suficiente para estabelecer nexo.', ok: false,
      why: 'Errada. É necessária, mas não suficiente.' },
    { t: 'A ausência de casos semelhantes na empresa afasta o nexo individual.', ok: false,
      why: 'Errada. Suscetibilidade individual e exposições específicas produzem casos isolados legítimos.' }
  ],
  comentario: 'Nexo se constrói por convergência: história ocupacional, magnitude e tempo de exposição, plausibilidade, temporalidade, epidemiologia e exclusão de alternativas. Temporalidade é necessária e não suficiente — e caso isolado na empresa não é argumento contra.',
  pegadinha: 'Descartar a história ocupacional por "subjetiva" elimina a única fonte sobre exposições de vinte anos atrás.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Ministério da Saúde — doenças relacionadas ao trabalho'] }

);
