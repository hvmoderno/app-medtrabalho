/* Lote AV — últimas 9 questões para fechar todas as metas por tema. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.4-160', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição a agentes biológicos em atividades de manipulação e preparo de alimentos, é CORRETO afirmar:',
  alts: [
    { t: 'O trabalhador é simultaneamente exposto e potencial fonte de transmissão, de modo que as medidas protegem os dois lados — e o afastamento do manipulador com quadro gastrointestinal ou lesão cutânea infectada não pode depender da disposição dele em relatar o sintoma.', ok: true,
      why: 'Correta. Sem política que não penalize o relato, o sintomático permanece manipulando alimento.' },
    { t: 'As medidas de higiene nessas atividades protegem apenas os consumidores.', ok: false,
      why: 'Errada. Protegem também o trabalhador, exposto a agentes dos alimentos manipulados.' },
    { t: 'O afastamento do manipulador sintomático deve depender de sua iniciativa em comunicar.', ok: false,
      why: 'Errada. Depende de política que estimule o relato sem penalizar quem o faz.' },
    { t: 'Lesões cutâneas em mãos não impedem a manipulação quando cobertas por luva.', ok: false,
      why: 'Errada. Lesão infectada exige afastamento da manipulação até a resolução.' },
    { t: 'A capacitação em boas práticas não tem relação com a saúde do próprio trabalhador.', ok: false,
      why: 'Errada. As mesmas práticas reduzem a exposição dele aos agentes manipulados.' }
  ],
  comentario: 'Manipulador de alimentos é exposto e fonte ao mesmo tempo. Afastar o sintomático exige política que não puniu quem relata — caso contrário, ninguém relata e todo mundo continua manipulando.',
  pegadinha: 'Descontar a falta de quem se afasta por quadro gastrointestinal garante que o próximo não avise.',
  refs: ['RDC sobre boas práticas em serviços de alimentação', 'NR-32', 'Ministério da Saúde'] },

{ id: 'q-2.6-160', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso de limites de exposição na priorização de investimentos em controle, é CORRETO afirmar:',
  alts: [
    { t: 'A distância entre a exposição medida e o limite é apenas um dos critérios, ao lado do número de expostos, da gravidade do efeito e da viabilidade técnica — de modo que uma exposição pouco acima do limite atingindo muitos trabalhadores pode ter prioridade sobre outra muito acima atingindo poucos.', ok: true,
      why: 'Correta. Prioridade combina intensidade com número de expostos e gravidade.' },
    { t: 'A prioridade deve seguir estritamente a razão entre exposição medida e limite.', ok: false,
      why: 'Errada. Ignora número de expostos, gravidade e viabilidade.' },
    { t: 'O número de trabalhadores expostos não influencia a priorização.', ok: false,
      why: 'Errada. É determinante do impacto populacional da intervenção.' },
    { t: 'A gravidade e a reversibilidade do efeito não integram a decisão.', ok: false,
      why: 'Errada. Efeito grave e irreversível eleva a prioridade.' },
    { t: 'Exposições abaixo do limite nunca devem receber investimento em controle.', ok: false,
      why: 'Errada. Havendo medida viável de redução, ela permanece indicada.' }
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
    { t: 'A indicação de prótese auditiva considera o grau da perda e a repercussão funcional, e a adaptação exige acompanhamento — e o benefício em ambiente ruidoso é limitado, o que reforça que a prótese não permite o retorno à exposição que causou a perda.', ok: true,
      why: 'Correta. Amplificar não devolve discriminação nem autoriza reexposição.' },
    { t: 'O uso de prótese auditiva permite o retorno à exposição a ruído elevado.', ok: false,
      why: 'Errada. A prótese não protege da progressão e amplifica também o ruído.' },
    { t: 'A prótese restaura integralmente a compreensão da fala em ambiente ruidoso.', ok: false,
      why: 'Errada. O benefício em ambiente ruidoso é limitado.' },
    { t: 'A adaptação da prótese dispensa acompanhamento posterior.', ok: false,
      why: 'Errada. O acompanhamento é o que sustenta a adesão e o ajuste.' },
    { t: 'A indicação depende apenas do resultado audiométrico, sem considerar a repercussão funcional.', ok: false,
      why: 'Errada. A repercussão na comunicação e na vida diária compõe a indicação.' }
  ],
  comentario: 'Prótese amplifica, não restaura discriminação — e em ambiente ruidoso rende pouco. Sobretudo, não autoriza voltar à exposição que causou a perda: ela amplifica o ruído também.',
  pegadinha: 'Tratar a prótese como solução que viabiliza o retorno ao setor ruidoso confunde reabilitação com proteção.',
  refs: ['Diretrizes de audiologia ocupacional', 'NR-7 — Anexo I'] },

{ id: 'q-4.6-150', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a confidencialidade em avaliações coletivas de fatores psicossociais, é CORRETO afirmar:',
  alts: [
    { t: 'Os resultados devem ser apresentados em nível de agregação que impeça a identificação de respondentes, o que exige cautela em setores pequenos — e a devolutiva aos trabalhadores é parte do processo, não apenas o relatório à direção.', ok: true,
      why: 'Correta. Sem devolutiva, a avaliação vira coleta unilateral e a adesão cai na rodada seguinte.' },
    { t: 'Resultados podem ser apresentados por equipe, independentemente do número de respondentes.', ok: false,
      why: 'Errada. Em equipes pequenas, o resultado por equipe identifica as pessoas.' },
    { t: 'A devolutiva dos resultados aos trabalhadores é dispensável.', ok: false,
      why: 'Errada. É parte do processo e sustenta a participação nas rodadas seguintes.' },
    { t: 'A avaliação deve identificar os respondentes para permitir acompanhamento individual.', ok: false,
      why: 'Errada. A identificação inibe a resposta e desvirtua o objetivo coletivo do instrumento.' },
    { t: 'Resultados desfavoráveis devem ser apresentados apenas à direção.', ok: false,
      why: 'Errada. A devolutiva aos trabalhadores é o que legitima o processo e mobiliza mudanças.' }
  ],
  comentario: 'Avaliação psicossocial exige agregação que proteja o respondente — cuidado especial em equipe pequena — e devolutiva aos trabalhadores. Coletar e só reportar à direção esvazia a próxima rodada.',
  pegadinha: 'Apresentar resultado por equipe de cinco pessoas identifica todo mundo, mesmo sem nomes.',
  refs: ['NR-1 — fatores psicossociais', 'LGPD', 'OIT'] },

{ id: 'q-4.8-150', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o acompanhamento de ex-trabalhadores expostos a agentes cancerígenos, é CORRETO afirmar:',
  alts: [
    { t: 'A vigilância pós-ocupacional depende de o trabalhador saber a que foi exposto e de o registro estar preservado — motivo pelo qual a entrega de informação sobre as exposições no desligamento é medida concreta que viabiliza o acompanhamento futuro no sistema de saúde.', ok: true,
      why: 'Correta. Quem não sabe a que se expôs não consegue informar isso ao médico daqui a vinte anos.' },
    { t: 'A vigilância pós-ocupacional é atribuição exclusiva da empresa de origem.', ok: false,
      why: 'Errada. Envolve o sistema de saúde, e por isso a informação precisa acompanhar o trabalhador.' },
    { t: 'O trabalhador não precisa ser informado das exposições a que esteve submetido no desligamento.', ok: false,
      why: 'Errada. É a informação que viabiliza o acompanhamento posterior.' },
    { t: 'A ausência de sintomas ao desligamento dispensa qualquer acompanhamento futuro.', ok: false,
      why: 'Errada. A latência longa é a razão do acompanhamento.' },
    { t: 'O sistema público de saúde não tem papel no acompanhamento de ex-expostos.', ok: false,
      why: 'Errada. É onde a maior parte desses trabalhadores será atendida depois.' }
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
    { t: 'As medidas podem incluir exigência de adequação com prazo, interdição parcial e, em casos de risco iminente, interdição total — sendo a gradação proporcional ao risco, e não uma escolha discricionária entre notificar e fechar.', ok: true,
      why: 'Correta. A escolha da medida se vincula ao risco, não à preferência do fiscal.' },
    { t: 'A única medida disponível é a interdição total do estabelecimento.', ok: false,
      why: 'Errada. Há gradação, incluindo exigência com prazo e interdição parcial.' },
    { t: 'A escolha da medida é discricionária e independe do grau de risco.', ok: false,
      why: 'Errada. A proporcionalidade ao risco é o critério.' },
    { t: 'A interdição parcial não é medida prevista.', ok: false,
      why: 'Errada. É medida usual, restrita ao setor ou equipamento em questão.' },
    { t: 'Prazos de adequação não devem ser acompanhados de verificação posterior.', ok: false,
      why: 'Errada. Sem verificação, o prazo concedido não produz efeito.' }
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
