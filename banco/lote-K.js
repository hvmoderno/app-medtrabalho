/* Lote K — 4.5, 4.6, 5.5, 5.2. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.5-052', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Operador de prensa com 15 anos de exposição a ruído apresenta audiometria com entalhe em frequências agudas bilateral e simétrico. Ele refere piora súbita da audição em um dos ouvidos no último mês. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A assimetria recente destoa do padrão e exige investigar outra causa, sem apagar a perda prévia.', ok: true,
      why: 'Correta. Coexistem a perda ocupacional crônica e um evento novo com diagnóstico próprio.' },
    { t: 'A assimetria recente deve ser atribuída à progressão da perda induzida por ruído já documentada.', ok: false,
      why: 'Errada. A perda por ruído é lentamente progressiva e simétrica; piora súbita unilateral não é seu padrão.' },
    { t: 'A assimetria recente exige investigação e invalida o diagnóstico anterior de perda ocupacional.', ok: false,
      why: 'Errada. Uma condição nova não apaga a perda crônica já documentada.' },
    { t: 'A assimetria recente exige acompanhamento, bastando repetir a audiometria dentro de seis meses.', ok: false,
      why: 'Errada. Perda súbita é situação em que a demora reduz a chance de recuperação.' },
    { t: 'A assimetria é esperada, pois a perda por ruído ultrapassa níveis profundos e evolui para anacusia.', ok: false,
      why: 'Errada. Ela tende a estabilizar e não costuma produzir anacusia isoladamente.' }
  ],
  comentario: 'Perda por ruído: lenta, bilateral, simétrica, com entalhe em agudos, e estabiliza — não chega a anacusia. Piora súbita e assimétrica é outra história e tem urgência própria. Reconhecer a nova não apaga a antiga.',
  pegadinha: 'Atribuir tudo à exposição conhecida retarda o diagnóstico do que é agudo e tratável.',
  refs: ['NR-7 — Anexo I', 'Diretrizes de audiologia ocupacional'] },

{ id: 'q-4.5-053', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição combinada a ruído e a agentes químicos ototóxicos no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Solventes e alguns metais são ototóxicos e podem agravar a perda em quem também se expõe a ruído.', ok: true,
      why: 'Correta. A avaliação centrada apenas no ruído subestima o risco em ambientes com solventes.' },
    { t: 'A perda auditiva ocupacional decorre da exposição a ruído, único agente com efeito coclear reconhecido.', ok: false,
      why: 'Errada. Há agentes químicos com potencial ototóxico reconhecido.' },
    { t: 'Solventes são neurotóxicos, interessando sua exposição à avaliação neurológica e hepática apenas.', ok: false,
      why: 'Errada. O comprometimento auditivo é desfecho documentado de várias dessas exposições.' },
    { t: 'Solventes são ototóxicos, neutralizando a proteção auditiva adequada também o efeito deles.', ok: false,
      why: 'Errada. O protetor atua sobre o ruído; a via química é sistêmica e permanece.' },
    { t: 'Solventes são ototóxicos, mas ruído dentro do limite exclui risco auditivo mesmo com eles.', ok: false,
      why: 'Errada. A combinação pode produzir efeito acima do esperado para o ruído isolado.' }
  ],
  comentario: 'Ototoxicidade ocupacional: solventes e alguns metais agravam ou antecipam a perda induzida por ruído. Protetor auricular não bloqueia a via química — e ruído dentro do limite não garante ausência de risco quando há coexposição.',
  pegadinha: 'Contar apenas com o protetor auricular deixa a via sistêmica inteiramente descoberta.',
  refs: ['ACGIH — ototoxicantes', 'NIOSH — ruído e ototoxicantes', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-052', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma equipe de atendimento a clientes apresenta, em seis meses, três afastamentos por transtorno de ansiedade e elevação de queixas de esgotamento. Sobre a abordagem do caso, é CORRETO afirmar:',
  alts: [
    { t: 'O agrupamento na mesma equipe sinaliza fator organizacional e demanda avaliação coletiva.', ok: true,
      why: 'Correta. Vários casos no mesmo ponto apontam a causa comum: o desenho do trabalho.' },
    { t: 'O agrupamento na mesma equipe reflete predisposição individual coincidente entre esses trabalhadores.', ok: false,
      why: 'Errada. Concentração de casos é achado de causa comum, não coincidência.' },
    { t: 'O agrupamento sinaliza fator organizacional, esgotando-se a conduta no encaminhamento dos casos.', ok: false,
      why: 'Errada. Tratar sem intervir no fator gera novos casos na mesma equipe.' },
    { t: 'O agrupamento sinaliza fator organizacional, que não integra os riscos do programa de gerenciamento.', ok: false,
      why: 'Errada. Fatores psicossociais integram expressamente o inventário de riscos.' },
    { t: 'O agrupamento demanda avaliação coletiva, com identificação nominal dos afastados perante a equipe.', ok: false,
      why: 'Errada. A avaliação é de condições e não pode expor diagnósticos individuais.' }
  ],
  comentario: 'Cluster em uma equipe é sinal de causa organizacional. Tratar os três e devolvê-los ao mesmo desenho de trabalho produz o quarto. Fatores psicossociais são risco a inventariar — e a avaliação coletiva nunca expõe diagnóstico individual.',
  pegadinha: 'Explicar o agrupamento por predisposição individual é a leitura que preserva o fator causal.',
  refs: ['NR-1 — gerenciamento de riscos, fatores psicossociais', 'OIT — riscos psicossociais'] },

{ id: 'q-4.6-053', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a síndrome de burnout, é CORRETO afirmar:',
  alts: [
    { t: 'É fenômeno ocupacional por estresse crônico não gerenciado, com exaustão e distanciamento.', ok: true,
      why: 'Correta. A própria definição vincula o quadro à organização do trabalho.' },
    { t: 'É um transtorno de personalidade de manifestação tardia, que se revela sob exigência profissional.', ok: false,
      why: 'Errada. Não é transtorno de personalidade nem característica do indivíduo.' },
    { t: 'É fenômeno de exaustão que se aplica a qualquer esfera da vida, sem especificidade ocupacional.', ok: false,
      why: 'Errada. A conceituação é expressamente restrita ao contexto do trabalho.' },
    { t: 'É fenômeno ocupacional, resolvendo-se com afastamento e retorno ao mesmo posto sem mudanças.', ok: false,
      why: 'Errada. Retorno ao mesmo contexto sem alteração reproduz o quadro.' },
    { t: 'É fenômeno ocupacional por estresse crônico, cuja presença exclui a coexistência de depressão.', ok: false,
      why: 'Errada. A coexistência é frequente e exige avaliação diagnóstica cuidadosa.' }
  ],
  comentario: 'Burnout: três dimensões — exaustão, distanciamento e queda de eficácia — e origem no estresse ocupacional crônico não gerenciado. Afastar sem mudar o trabalho é adiar a recidiva.',
  pegadinha: 'Estender o conceito a outras esferas da vida dilui exatamente o que o torna ocupacional.',
  refs: ['CID-11 — burnout como fenômeno ocupacional', 'OMS'] },

{ id: 'q-5.5-052', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da capacidade laborativa em trabalhador com sequela estabilizada, é CORRETO afirmar:',
  alts: [
    { t: 'Confronta limitações residuais com as exigências reais da atividade, descritas concretamente.', ok: true,
      why: 'Correta. Capacidade é relacional: pode haver aptidão para uma função e não para outra.' },
    { t: 'Toma a capacidade como atributo do trabalhador, independente da atividade concretamente avaliada.', ok: false,
      why: 'Errada. Não existe capacidade em abstrato: ela se define frente a exigências específicas.' },
    { t: 'Confronta limitações com exigências, descritas suficientemente pelo nome do cargo em carteira.', ok: false,
      why: 'Errada. Cargos de mesmo nome têm exigências muito distintas entre empresas.' },
    { t: 'Confronta limitações com exigências, implicando sequela estabilizada incapacidade permanente.', ok: false,
      why: 'Errada. Estabilização informa sobre a evolução, não sobre a repercussão funcional.' },
    { t: 'Confronta o diagnóstico com a atividade, dispensando a descrição funcional do trabalhador.', ok: false,
      why: 'Errada. O diagnóstico não determina a repercussão funcional, que varia amplamente.' }
  ],
  comentario: 'Capacidade é relacional: limitações residuais versus exigências reais da atividade, descritas concretamente. O mesmo diagnóstico incapacita para uma função e não para outra — por isso a descrição funcional vale mais que o rótulo diagnóstico.',
  pegadinha: 'Confiar no nome do cargo em vez das exigências reais produz conclusões erradas nos dois sentidos.',
  refs: ['CIF — Classificação Internacional de Funcionalidade', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-053', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a distinção entre deficiência, limitação de atividade e restrição de participação na avaliação funcional, é CORRETO afirmar:',
  alts: [
    { t: 'São níveis distintos: estrutura ou função, execução de tarefas e envolvimento em situações de vida.', ok: true,
      why: 'Correta. A mesma deficiência produz restrições diferentes conforme contexto e barreiras.' },
    { t: 'São três designações do mesmo fenômeno, em graus crescentes de gravidade do comprometimento.', ok: false,
      why: 'Errada. São dimensões distintas, não uma escala de gravidade.' },
    { t: 'São níveis distintos, decorrendo a restrição de participação exclusivamente da deficiência corporal.', ok: false,
      why: 'Errada. Depende de fatores contextuais e das barreiras do ambiente.' },
    { t: 'São níveis distintos, não integrando os fatores ambientais a avaliação da funcionalidade.', ok: false,
      why: 'Errada. Integram e podem atuar como barreira ou como facilitador.' },
    { t: 'São níveis distintos, dispensando a avaliação funcional a consideração dos fatores pessoais.', ok: false,
      why: 'Errada. Fatores pessoais compõem o contexto e influenciam o desempenho.' }
  ],
  comentario: 'Três níveis: estrutura e função, atividade, participação. A mesma deficiência dá restrições diferentes conforme as barreiras do ambiente — e é isso que torna a adaptação do posto uma intervenção sobre a incapacidade, não sobre a doença.',
  pegadinha: 'Ler os três termos como escala de gravidade perde justamente o papel do ambiente.',
  refs: ['CIF — OMS'] },

{ id: 'q-5.2-050', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o nexo técnico epidemiológico previdenciário, é CORRETO afirmar:',
  alts: [
    { t: 'Decorre do cruzamento entre atividade econômica e entidade mórbida, gerando presunção relativa.', ok: true,
      why: 'Correta. É presunção baseada em associação estatística, afastável por demonstração técnica.' },
    { t: 'Decorre do cruzamento entre atividade e agravo, estabelecendo presunção absoluta e incontestável.', ok: false,
      why: 'Errada. Há via própria para o empregador demonstrar a inexistência de nexo.' },
    { t: 'Decorre da análise individual do posto de trabalho do segurado feita pela perícia previdenciária.', ok: false,
      why: 'Errada. Baseia-se em cruzamento estatístico entre atividade econômica e agravo.' },
    { t: 'Decorre de cruzamento estatístico, afastando sua ausência o reconhecimento de doença ocupacional.', ok: false,
      why: 'Errada. O nexo pode ser reconhecido por outras vias, inclusive individual.' },
    { t: 'Decorre do cruzamento entre atividade e agravo e se aplica também aos acidentes típicos ocorridos.', ok: false,
      why: 'Errada. Volta-se ao adoecimento; o nexo do acidente típico se estabelece pelo evento.' }
  ],
  comentario: 'Nexo epidemiológico: estatística de setor cruzada com agravo, presunção relativa, contestável por demonstração técnica. A ausência dele não fecha a porta — o nexo individual continua disponível.',
  pegadinha: 'Tomar a ausência do nexo epidemiológico como negativa de doença ocupacional é o erro que mais prejudica trabalhador de setor com estatística baixa.',
  refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.2-051', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise de nexo em doença de causa múltipla, como as musculoesqueléticas, é CORRETO afirmar:',
  alts: [
    { t: 'A multicausalidade não impede: basta contribuição relevante da exposição ocupacional.', ok: true,
      why: 'Correta. Exigir causa única eliminaria quase todas as doenças relacionadas ao trabalho.' },
    { t: 'A multicausalidade do quadro impede o reconhecimento do nexo ocupacional nessas doenças.', ok: false,
      why: 'Errada. A maioria das doenças relacionadas ao trabalho é multicausal.' },
    { t: 'A multicausalidade não impede, mas atividade doméstica ou esportiva semelhante afasta o nexo.', ok: false,
      why: 'Errada. É preciso comparar magnitude, duração e frequência, não apenas o gesto.' },
    { t: 'A multicausalidade não impede, exigindo-se comprovar que o trabalho é a causa predominante.', ok: false,
      why: 'Errada. Contribuição relevante basta, sem exigência de predominância.' },
    { t: 'A multicausalidade não impede, embora a idade isolada explique o quadro e afaste o trabalho.', ok: false,
      why: 'Errada. Idade é fator concorrente e não afasta a contribuição ocupacional.' }
  ],
  comentario: 'Doença multicausal: contribuição relevante basta, sem exigência de predominância nem de exclusividade. Idade e atividades extralaborais são concorrentes — e comparar gesto sem comparar carga, duração e frequência não sustenta a negativa.',
  pegadinha: '"Ela também faz isso em casa" só teria peso se a magnitude da exposição doméstica fosse comparável.',
  refs: ['Lei nº 8.213/1991 — art. 20 e 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.2-052', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os elementos que compõem a investigação de nexo entre doença e trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Combina história ocupacional, magnitude, plausibilidade, temporalidade e exclusão de outras causas.', ok: true,
      why: 'Correta. É um conjunto convergente, e nenhum elemento isolado decide.' },
    { t: 'Combina história e plausibilidade, sendo indispensável a confirmação laboratorial da exposição.', ok: false,
      why: 'Errada. Frequentemente indisponível, sobretudo em exposições antigas.' },
    { t: 'Combina plausibilidade e temporalidade, descartada a história relatada pelo trabalhador por subjetiva.', ok: false,
      why: 'Errada. Muitas vezes é a única fonte sobre condições pretéritas.' },
    { t: 'Combina vários elementos, sendo a compatibilidade temporal isolada suficiente para o nexo.', ok: false,
      why: 'Errada. É necessária, mas não suficiente.' },
    { t: 'Combina vários elementos, afastando a ausência de casos semelhantes na empresa o nexo individual.', ok: false,
      why: 'Errada. Suscetibilidade e exposições específicas produzem casos isolados legítimos.' }
  ],
  comentario: 'Nexo se constrói por convergência: história ocupacional, magnitude e tempo de exposição, plausibilidade, temporalidade, epidemiologia e exclusão de alternativas. Temporalidade é necessária e não suficiente — e caso isolado na empresa não é argumento contra.',
  pegadinha: 'Descartar a história ocupacional por "subjetiva" elimina a única fonte sobre exposições de vinte anos atrás.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Ministério da Saúde — doenças relacionadas ao trabalho'] }

);
