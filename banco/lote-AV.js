/* Lote AV — últimas 9 questões para fechar todas as metas por tema. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.4-160', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição a agentes biológicos em atividades de manipulação e preparo de alimentos, é CORRETO afirmar:',
  alts: [
    { t: 'O trabalhador é exposto e ao mesmo tempo fonte potencial, e o afastamento do sintomático não pode depender da disposição dele em relatar.', ok: true,
      why: 'Correta. Sem política que não penalize quem relata, o sintomático segue manipulando alimento.' },
    { t: 'O trabalhador é fonte potencial de contaminação, e por isso as medidas de higiene dessas atividades se voltam à proteção dos consumidores.', ok: false,
      why: 'Errada. Protegem também o trabalhador, exposto aos agentes presentes nos alimentos que manipula.' },
    { t: 'O trabalhador é exposto e fonte potencial, cabendo a ele comunicar sintomas gastrointestinais para que o afastamento seja providenciado.', ok: false,
      why: 'Errada. Depende de política que estimule o relato sem penalizar quem o faz, não da iniciativa isolada.' },
    { t: 'O trabalhador é exposto e fonte potencial, e lesões cutâneas nas mãos permitem a manipulação desde que cobertas por curativo e luva.', ok: false,
      why: 'Errada. Lesão infectada exige afastamento da manipulação até a resolução do quadro.' },
    { t: 'O trabalhador é fonte potencial, e a capacitação em boas práticas volta-se à segurança do alimento, sem reflexo sobre a saúde dele.', ok: false,
      why: 'Errada. As mesmas práticas reduzem a exposição dele aos agentes que manipula.' }
  ],
  comentario: 'Manipulador de alimentos é exposto e fonte ao mesmo tempo. Afastar o sintomático exige política que não puniu quem relata — caso contrário, ninguém relata e todo mundo continua manipulando.',
  pegadinha: 'Descontar a falta de quem se afasta por quadro gastrointestinal garante que o próximo não avise.',
  refs: ['RDC sobre boas práticas em serviços de alimentação', 'NR-32', 'Ministério da Saúde'] },

{ id: 'q-2.6-160', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso de limites de exposição na priorização de investimentos em controle, é CORRETO afirmar:',
  alts: [
    { t: 'A distância até o limite é só um dos critérios, ao lado do número de expostos, da gravidade do efeito e da viabilidade técnica da medida.', ok: true,
      why: 'Correta. Exposição pouco acima do limite atingindo muitos pode ter prioridade sobre muito acima atingindo poucos.' },
    { t: 'A prioridade decorre da razão entre exposição medida e limite, ordenando as intervenções da maior para a menor ultrapassagem verificada.', ok: false,
      why: 'Errada. Ignora número de expostos, gravidade do efeito e viabilidade da intervenção.' },
    { t: 'A distância até o limite é um dos critérios, ao lado da gravidade e da viabilidade, sendo o número de expostos questão de custo, não de prioridade.', ok: false,
      why: 'Errada. O número de expostos determina o impacto populacional da intervenção.' },
    { t: 'A distância até o limite e o número de expostos definem a prioridade, ficando gravidade e reversibilidade do efeito fora da decisão técnica.', ok: false,
      why: 'Errada. Efeito grave e irreversível eleva a prioridade mesmo com poucos expostos.' },
    { t: 'A distância até o limite é um dos critérios, e exposições abaixo dele não devem consumir investimento, por já estarem em conformidade.', ok: false,
      why: 'Errada. Havendo medida viável de redução, ela permanece indicada mesmo abaixo do limite.' }
  ],
  comentario: 'Priorizar não é ordenar pela razão exposição sobre limite: entra o número de expostos, a gravidade e a reversibilidade do efeito e a viabilidade técnica. Pouco acima do limite atingindo cem pessoas pode vir antes.',
  pegadinha: 'Ordenar a fila pela ultrapassagem percentual do limite ignora quantas pessoas cada exposição atinge.',
  refs: ['AIHA — estratégia de avaliação e decisão', 'NR-1', 'ACGIH'] },

{ id: 'q-4.4-160', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o impacto das dermatoses ocupacionais sobre a vida do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Além do desconforto e da limitação funcional, quadros visíveis em mãos e face têm repercussão social e psicológica documentada, com impacto sobre autoestima e relações — dimensão frequentemente desconsiderada por se tratar de doença que raramente incapacita de forma evidente.', ok: true,
      why: 'Correta. Doença visível e crônica pesa muito além da lesão em si.' },
    { t: 'Dermatoses ocupacionais têm impacto restrito ao aspecto físico da lesão.', ok: false,
      why: 'Errada. Há repercussão social e psicológica documentada.' },
    { t: 'A visibilidade da lesão não influencia o impacto sobre o trabalhador.', ok: false,
      why: 'Errada. Lesões em mãos e face têm repercussão social específica.' },
    { t: 'A cronicidade do quadro não altera a repercussão sobre a qualidade de vida.', ok: false,
      why: 'Errada. A cronificação amplia substancialmente o impacto.' },
    { t: 'Quadros que não geram afastamento não requerem atenção do serviço de saúde ocupacional.', ok: false,
      why: 'Errada. A ausência de afastamento não indica ausência de impacto nem de necessidade de intervenção.' }
  ],
  comentario: 'Dermatose não costuma afastar, e por isso é subvalorizada — mas lesão visível e crônica em mãos e face tem repercussão social e psicológica real. Não gerar afastamento não é o mesmo que não gerar dano.',
  pegadinha: 'Medir a relevância pelo afastamento gerado subestima justamente as doenças que o trabalhador leva para casa todo dia.',
  refs: ['Salim — Dermatoses Ocupacionais', 'Literatura sobre qualidade de vida em dermatoses'] },

{ id: 'q-4.5-150', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a reabilitação auditiva de trabalhadores com perda induzida por ruído, é CORRETO afirmar:',
  alts: [
    { t: 'A indicação considera grau e repercussão funcional, a adaptação exige acompanhamento, e o benefício em ambiente ruidoso é limitado.', ok: true,
      why: 'Correta. Amplificar não devolve discriminação nem autoriza voltar à exposição que causou a perda.' },
    { t: 'A indicação considera grau e repercussão funcional, e o uso da prótese permite o retorno do trabalhador à exposição a ruído elevado.', ok: false,
      why: 'Errada. A prótese não protege da progressão e ainda amplifica o próprio ruído ambiente.' },
    { t: 'A indicação considera grau e repercussão, e a prótese restaura integralmente a compreensão da fala mesmo em ambiente com ruído de fundo.', ok: false,
      why: 'Errada. O benefício em ambiente ruidoso é limitado; amplificação não devolve discriminação.' },
    { t: 'A indicação considera grau e repercussão funcional, e uma vez concluída a adaptação inicial o acompanhamento posterior torna-se dispensável.', ok: false,
      why: 'Errada. O acompanhamento é o que sustenta a adesão e permite os ajustes necessários.' },
    { t: 'A indicação decorre exclusivamente do resultado audiométrico, que traduz de forma objetiva a necessidade de amplificação do trabalhador.', ok: false,
      why: 'Errada. A repercussão na comunicação e na vida diária compõe a indicação.' }
  ],
  comentario: 'Prótese amplifica, não restaura discriminação — e em ambiente ruidoso rende pouco. Sobretudo, não autoriza voltar à exposição que causou a perda: ela amplifica o ruído também.',
  pegadinha: 'Tratar a prótese como solução que viabiliza o retorno ao setor ruidoso confunde reabilitação com proteção.',
  refs: ['Diretrizes de audiologia ocupacional', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-150', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a confidencialidade em avaliações coletivas de fatores psicossociais, é CORRETO afirmar:',
  alts: [
    { t: 'Os resultados vão em nível de agregação que impeça identificar respondentes, e a devolutiva aos trabalhadores é parte do processo.', ok: true,
      why: 'Correta. Sem devolutiva, a avaliação vira coleta unilateral e a adesão cai na rodada seguinte.' },
    { t: 'Os resultados podem ser apresentados por equipe, recorte que preserva o anonimato por não nomear individualmente nenhum respondente.', ok: false,
      why: 'Errada. Em equipe pequena, o resultado por equipe identifica as pessoas na prática.' },
    { t: 'Os resultados vão em nível agregado, e a devolutiva aos trabalhadores é dispensável quando o relatório já foi entregue à direção.', ok: false,
      why: 'Errada. É parte do processo e é o que sustenta a participação nas rodadas seguintes.' },
    { t: 'Os resultados vão em nível agregado, mas a identificação dos respondentes é necessária para permitir acompanhamento individual dos casos.', ok: false,
      why: 'Errada. A identificação inibe a resposta e desvirtua o objetivo coletivo do instrumento.' },
    { t: 'Os resultados vão em nível agregado, e os desfavoráveis devem ser reservados à direção, para não gerar desconforto entre as equipes.', ok: false,
      why: 'Errada. A devolutiva aos trabalhadores é o que legitima o processo e mobiliza mudanças.' }
  ],
  comentario: 'Avaliação psicossocial exige agregação que proteja o respondente — cuidado especial em equipe pequena — e devolutiva aos trabalhadores. Coletar e só reportar à direção esvazia a próxima rodada.',
  pegadinha: 'Apresentar resultado por equipe de cinco pessoas identifica todo mundo, mesmo sem nomes.',
  refs: ['NR-1 — fatores psicossociais', 'LGPD', 'OIT'] },

{ id: 'q-4.8-150', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o acompanhamento de ex-trabalhadores expostos a agentes cancerígenos, é CORRETO afirmar:',
  alts: [
    { t: 'Ela depende de o trabalhador saber a que foi exposto, o que torna a entrega dessa informação no desligamento medida concreta.', ok: true,
      why: 'Correta. Quem não sabe a que se expôs não consegue informar isso ao médico daqui a vinte anos.' },
    { t: 'Ela depende da preservação dos registros e é atribuição exclusiva da empresa de origem, que detém a informação sobre as exposições.', ok: false,
      why: 'Errada. Envolve o sistema de saúde, e por isso a informação precisa acompanhar o trabalhador.' },
    { t: 'Ela depende da preservação dos registros pela empresa, sem necessidade de informar o próprio trabalhador no momento do desligamento.', ok: false,
      why: 'Errada. É justamente essa informação que viabiliza o acompanhamento posterior em outro serviço.' },
    { t: 'Ela depende do quadro clínico ao desligamento, de modo que a ausência de sintomas nesse momento dispensa acompanhamento futuro.', ok: false,
      why: 'Errada. A latência longa desses agravos é exatamente a razão do acompanhamento posterior.' },
    { t: 'Ela depende da preservação dos registros, e o sistema público de saúde não tem papel definido no acompanhamento de ex-expostos.', ok: false,
      why: 'Errada. É onde a maior parte desses trabalhadores será atendida depois do desligamento.' }
  ],
  comentario: 'Vigilância pós-ocupacional só funciona se o trabalhador souber a que foi exposto e o registro sobreviver. Entregar essa informação no desligamento é o gesto concreto que viabiliza o cuidado daqui a duas décadas.',
  pegadinha: 'Desligar sem informar a exposição deixa o trabalhador sem a única pista que faria o médico futuro suspeitar.',
  refs: ['NR-7', 'IARC', 'PNSTT'] },

{ id: 'q-5.5-150', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação de capacidade laborativa em trabalhador próximo à idade de aposentadoria, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação segue os mesmos critérios técnicos aplicáveis a qualquer trabalhador, e a proximidade da aposentadoria não é fundamento para concluir por incapacidade nem para negá-la — ainda que possa integrar a análise de viabilidade de reabilitação.', ok: true,
      why: 'Correta. Idade entra na viabilidade da reabilitação, não na conclusão sobre capacidade.' },
    { t: 'A proximidade da aposentadoria justifica conclusão por incapacidade permanente.', ok: false,
      why: 'Errada. A conclusão decorre da avaliação funcional, não do tempo restante de contribuição.' },
    { t: 'A idade avançada é critério suficiente para afastar a viabilidade de reabilitação.', ok: false,
      why: 'Errada. É fator a considerar, e não critério isolado de exclusão.' },
    { t: 'Os critérios de avaliação devem ser mais rigorosos para trabalhadores mais velhos.', ok: false,
      why: 'Errada. Aplicar critérios distintos por idade é discriminação.' },
    { t: 'A capacidade funcional se deduz da idade cronológica do avaliado.', ok: false,
      why: 'Errada. A variabilidade interindividual é ampla e a avaliação é individual.' }
  ],
  comentario: 'Mesmos critérios para todos: idade não conclui por incapacidade nem a afasta. Ela entra na análise de viabilidade da reabilitação — e capacidade funcional nunca se deduz de idade cronológica.',
  pegadinha: 'Facilitar a conclusão por incapacidade "porque falta pouco para aposentar" aplica critério que não é técnico.',
  refs: ['Resoluções do CFM sobre perícia médica', 'CIF — OMS', 'Estatuto da Pessoa Idosa'] },

{ id: 'q-7.3-150', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a atuação sanitária diante de estabelecimento que opera sem as condições exigidas, é CORRETO afirmar:',
  alts: [
    { t: 'Podem incluir exigência com prazo, interdição parcial e, havendo risco iminente, interdição total, em gradação proporcional ao risco.', ok: true,
      why: 'Correta. A escolha da medida se vincula ao risco verificado, não à preferência de quem fiscaliza.' },
    { t: 'Restringem-se à interdição total do estabelecimento, medida única prevista para quem opera fora das condições sanitárias exigidas.', ok: false,
      why: 'Errada. Há gradação, que inclui exigência com prazo e interdição apenas do setor envolvido.' },
    { t: 'Podem incluir exigência com prazo ou interdição, sendo a escolha entre elas discricionária e independente do grau de risco verificado.', ok: false,
      why: 'Errada. A proporcionalidade ao risco é justamente o critério da escolha.' },
    { t: 'Podem incluir exigência com prazo e interdição total, não havendo previsão de interdição restrita a um setor ou equipamento específico.', ok: false,
      why: 'Errada. A interdição parcial é medida usual, restrita ao setor ou equipamento em questão.' },
    { t: 'Podem incluir exigência de adequação com prazo definido, cujo cumprimento se presume ao término do prazo, sem verificação posterior.', ok: false,
      why: 'Errada. Sem verificação, o prazo concedido não produz efeito algum.' }
  ],
  comentario: 'A gradação — exigência com prazo, interdição parcial, interdição total — se define pelo risco, não pela preferência. E prazo concedido sem verificação posterior é prazo que não muda nada.',
  pegadinha: 'Conceder prazo e não voltar transforma a exigência em documento arquivado.',
  refs: ['Lei nº 8.080/1990', 'Legislação sanitária', 'CLT — art. 161'] },

{ id: 'q-7.4-150', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a documentação exigida pelas normas regulamentadoras e sua função, é CORRETO afirmar:',
  alts: [
    { t: 'Os documentos existem para organizar e demonstrar o gerenciamento efetivo dos riscos, de modo que documentação completa acompanhada de práticas divergentes não caracteriza cumprimento — e essa divergência é o achado mais recorrente em investigações de acidentes graves.', ok: true,
      why: 'Correta. O acidente costuma ocorrer em empresa com documentação impecável.' },
    { t: 'A existência da documentação exigida caracteriza o cumprimento das obrigações.', ok: false,
      why: 'Errada. O cumprimento se demonstra na prática, não no arquivo.' },
    { t: 'A divergência entre documento e prática é achado raro em investigações de acidentes.', ok: false,
      why: 'Errada. É um dos achados mais recorrentes.' },
    { t: 'Documentos exigidos por norma não precisam refletir o processo real da empresa.', ok: false,
      why: 'Errada. Documento que não descreve o processo real não organiza nem demonstra coisa alguma.' },
    { t: 'A atualização dos documentos é exigida apenas na periodicidade máxima prevista.', ok: false,
      why: 'Errada. Mudanças no processo exigem atualização antecipada.' }
  ],
  comentario: 'Documento existe para organizar e demonstrar o gerenciamento real. Pasta completa com prática divergente é o retrato mais comum das empresas onde o acidente grave acontece.',
  pegadinha: 'Auditar a existência dos documentos em vez da correspondência com a prática certifica exatamente o que falha.',
  refs: ['NR-1', 'NR-9', 'NR-7'] }

);
