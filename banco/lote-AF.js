/* Lote AF — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-100', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o ruído de impacto e sua avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'Caracteriza-se por picos curtos de alta amplitude, e a média em resposta lenta subestima o potencial lesivo.', ok: true,
      why: 'Correta. Instrumento com resposta inadequada simplesmente não enxerga o pico.' },
    { t: 'Caracteriza-se por picos de curta duração, podendo ser avaliado com os mesmos parâmetros do ruído contínuo.', ok: false,
      why: 'Errada. Exige procedimento e instrumentação específicos para eventos rápidos.' },
    { t: 'Caracteriza-se por picos de curta duração e alta amplitude, que não causam dano auditivo relevante.', ok: false,
      why: 'Errada. Podem produzir trauma acústico agudo, inclusive em exposição única.' },
    { t: 'Caracteriza-se por picos curtos, e a proteção auditiva convencional atenua igualmente impacto e ruído contínuo.', ok: false,
      why: 'Errada. O desempenho frente a impacto difere, e a seleção deve considerar isso.' },
    { t: 'Caracteriza-se por picos de alta amplitude, não ocorrendo em atividades de manutenção e montagem industrial.', ok: false,
      why: 'Errada. Martelamento, prensagem e ferramentas de impacto são fontes típicas.' }
  ],
  comentario: 'Impacto: pico curto e alto, medido com instrumentação própria — resposta lenta não capta. Pode causar trauma acústico agudo em evento único, e a seleção do protetor precisa considerar o desempenho frente a impacto.',
  pegadinha: 'Medir impacto em resposta lenta produz número tranquilizador sobre uma exposição que pode lesar de uma vez.',
  refs: ['NHO 01 — Fundacentro', 'NR-15 — Anexo 2'] },

{ id: 'q-2.3-100', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o manuseio de medicamentos antineoplásicos por trabalhadores de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição a agentes carcinogênicos e reprotóxicos, exigindo cabine adequada e sistema fechado.', ok: true,
      why: 'Correta. A exposição não termina no preparo: alcança administração, limpeza e excretas.' },
    { t: 'Há exposição a agentes carcinogênicos, limitada ao momento do preparo do medicamento na farmácia hospitalar.', ok: false,
      why: 'Errada. Administração, limpeza, transporte e manejo de excretas também expõem.' },
    { t: 'Há exposição a agentes carcinogênicos, sendo a cabine de exaustão química convencional adequada ao preparo.', ok: false,
      why: 'Errada. É necessária cabine de segurança apropriada ao risco desses fármacos.' },
    { t: 'Há exposição a agentes carcinogênicos, não integrando os trabalhadores da limpeza os grupos expostos.', ok: false,
      why: 'Errada. Manuseiam resíduos e excretas e estão entre os expostos.' },
    { t: 'Há exposição a agentes carcinogênicos, sendo a luva de procedimento comum suficiente para o manuseio.', ok: false,
      why: 'Errada. Exige-se luva com especificação própria e dupla luva em determinadas etapas.' }
  ],
  comentario: 'Antineoplásicos expõem toda a cadeia — preparo, administração, limpeza, excretas — a agentes carcinogênicos e de toxicidade reprodutiva. Cabine específica, sistema fechado, luva especificada e protocolo de derramamento.',
  pegadinha: 'Restringir a exposição à farmácia deixa desprotegidos a enfermagem e o pessoal da limpeza.',
  refs: ['NR-32', 'Diretrizes de manipulação de antineoplásicos'] },

{ id: 'q-2.4-100', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o risco biológico em atividades de abate e processamento de carnes, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição a zoonoses por tecidos e aerossóis, agravada por ferimentos com facas e umidade constante.', ok: true,
      why: 'Correta. É o corte na mão que transforma a exposição em infecção.' },
    { t: 'Há exposição a zoonoses nesse setor, risco desprezível quando comparado ao risco ergonômico predominante.', ok: false,
      why: 'Errada. Ambos são relevantes e coexistem nessas atividades.' },
    { t: 'Há exposição a zoonoses por contato com tecidos, ocorrendo a transmissão exclusivamente por via digestiva.', ok: false,
      why: 'Errada. Pele lesada, mucosas e aerossóis são vias relevantes.' },
    { t: 'Há exposição a zoonoses agravada por ferimentos, não exigindo os cortes superficiais afastamento do contato.', ok: false,
      why: 'Errada. São porta de entrada e exigem avaliação e proteção adequada.' },
    { t: 'Há exposição a zoonoses por tecidos e aerossóis, cobrindo a vacinação disponível as principais delas.', ok: false,
      why: 'Errada. Para várias não há vacina, o que reforça as barreiras e a prevenção de cortes.' }
  ],
  comentario: 'Abate: zoonoses por tecidos, secreções e aerossóis, com corte de faca como porta de entrada e umidade constante macerando a pele. Sem vacina para a maioria — a prevenção é barreira mais prevenção de ferimento.',
  pegadinha: 'Priorizar apenas o risco ergonômico no frigorífico deixa a via biológica sem tratamento.',
  refs: ['NR-36', 'NR-32', 'Ministério da Saúde — zoonoses ocupacionais'] },

{ id: 'q-2.6-100', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a diferença entre limites de exposição e valores de referência para indicadores biológicos, é CORRETO afirmar:',
  alts: [
    { t: 'Um mede o ar e o outro o organismo, de modo que resultados discordantes são possíveis e informativos.', ok: true,
      why: 'Correta. A discordância aponta absorção cutânea ou falha na proteção respiratória.' },
    { t: 'Um mede o ar e o outro o organismo, indicando resultados discordantes erro de medição em uma das avaliações.', ok: false,
      why: 'Errada. Frequentemente indicam via de absorção não considerada ou falha de proteção.' },
    { t: 'Ambos medem a mesma grandeza expressa em unidades diferentes, o que permite convertê-las entre si.', ok: false,
      why: 'Errada. Um mede a concentração no ar, o outro mede o agente no organismo.' },
    { t: 'Um mede o ar e o outro o organismo, garantindo o indicador biológico normal exposição ambiental controlada.', ok: false,
      why: 'Errada. Pode refletir uso eficaz de proteção sem que o ambiente esteja controlado.' },
    { t: 'Um mede o ar e o outro o organismo, sendo a avaliação ambiental dispensável havendo monitoramento biológico.', ok: false,
      why: 'Errada. Só a avaliação ambiental indica onde e como intervir na fonte.' }
  ],
  comentario: 'Ambiental mede o ar; biológico mede a pessoa. Discordar entre eles é informação: ar alto com biológico baixo sugere proteção funcionando; ar baixo com biológico alto sugere via cutânea ou exposição fora do previsto.',
  pegadinha: 'Indicador biológico normal com ambiente descontrolado significa proteção individual funcionando, não risco eliminado.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-7', 'NR-9'] },

{ id: 'q-2.6-101', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a atualização periódica das listas de limites de exposição, é CORRETO afirmar:',
  alts: [
    { t: 'As revisões podem introduzir novos agentes, alterar valores e acrescentar notações conforme a evidência', ok: true,
      why: 'Correta. A edição usada precisa ser declarada e mantida atualizada, sob pena de critério superado.' },
    { t: 'As listas são estáveis ao longo do tempo, não sendo necessário declarar nos laudos a edição utilizada.', ok: false,
      why: 'Errada. A edição deve constar, pois valores mudam entre versões.' },
    { t: 'As revisões alteram valores e notações, sem incorporar novos agentes após a publicação inicial da lista.', ok: false,
      why: 'Errada. A incorporação de novos agentes é rotina das revisões.' },
    { t: 'As revisões alteram valores, sem modificar notações como absorção cutânea e potencial de sensibilização.', ok: false,
      why: 'Errada. São acrescentadas ou revistas conforme a evidência disponível.' },
    { t: 'As revisões alteram valores, sendo irrelevante na prática a defasagem entre norma nacional e referência técnica.', ok: false,
      why: 'Errada. Pode significar cumprir a norma e permanecer acima do critério técnico atual.' }
  ],
  comentario: 'Listas de limites são revisadas: entram agentes, mudam valores, aparecem notações. Declarar a edição usada é parte do laudo — e a defasagem entre norma nacional e referência técnica é real e relevante.',
  pegadinha: 'Laudo que não declara a edição da lista impede saber contra que critério a exposição foi julgada.',
  refs: ['ACGIH — TLVs, revisões anuais', 'NR-15', 'NHO — Fundacentro'] },

{ id: 'q-2.7-080', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da exposição a vibração conforme as normas de higiene ocupacional de referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'Distinguem mãos e braços de corpo inteiro, com pontos e eixos próprios, e dependem do tempo de exposição.', ok: true,
      why: 'Correta. Não basta medir a ferramenta: o tempo de uso compõe a dose.' },
    { t: 'Distinguem os dois tipos de vibração quanto ao efeito, seguindo ambos o mesmo procedimento de medição.', ok: false,
      why: 'Errada. Pontos de medição, eixos e parâmetros diferem entre eles.' },
    { t: 'Distinguem mãos e braços de corpo inteiro, não integrando o tempo de exposição diário a caracterização.', ok: false,
      why: 'Errada. A dose depende do nível medido e do tempo de uso.' },
    { t: 'Distinguem mãos e braços de corpo inteiro, representando a medição de uma ferramenta quem usa várias.', ok: false,
      why: 'Errada. É preciso compor a exposição das diferentes ferramentas usadas na jornada.' },
    { t: 'Distinguem mãos e braços de corpo inteiro, sem que o estado de conservação da ferramenta altere o resultado.', ok: false,
      why: 'Errada. Desgaste e falta de manutenção aumentam significativamente a vibração emitida.' }
  ],
  comentario: 'Vibração: procedimentos distintos para mãos e braços e para corpo inteiro, com composição do tempo de uso de cada ferramenta. Ferramenta desgastada vibra mais — manutenção é medida de controle da exposição.',
  pegadinha: 'Medir a ferramenta sem compor o tempo de uso na jornada não caracteriza a exposição.',
  refs: ['NHO 09 e NHO 10 — Fundacentro', 'ISO 5349', 'ISO 2631'] },

{ id: 'q-2.9-100', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a toxicocinética aplicada à interpretação de exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A meia-vida define se o agente se acumula entre as jornadas, o que altera o momento adequado da coleta', ok: true,
      why: 'Correta. O acúmulo semanal é invisível se a coleta ignora a cinética do agente.' },
    { t: 'A meia-vida descreve a eliminação do agente, sem influenciar a estratégia de monitoramento biológico adotada.', ok: false,
      why: 'Errada. Determina o momento de coleta e a possibilidade de acúmulo.' },
    { t: 'A meia-vida define o momento da coleta, devendo os agentes de eliminação rápida ser colhidos no início da semana.', ok: false,
      why: 'Errada. Para eles a coleta costuma ser ao fim da jornada, refletindo exposição recente.' },
    { t: 'A meia-vida define o acúmulo entre jornadas, e a biotransformação sempre reduz a toxicidade do agente.', ok: false,
      why: 'Errada. Há agentes cujos metabólitos são mais tóxicos que a substância original.' },
    { t: 'A meia-vida define o acúmulo, e a distribuição no organismo independe das propriedades físico-químicas.', ok: false,
      why: 'Errada. Lipossolubilidade e ligação a proteínas determinam distribuição e depósito.' }
  ],
  comentario: 'Cinética decide tudo no monitoramento: meia-vida define acúmulo e momento da coleta; lipossolubilidade define depósito; e biotransformação nem sempre desintoxica — às vezes produz o metabólito mais tóxico.',
  pegadinha: 'Supor que metabolizar é sempre destoxificar ignora agentes cuja toxicidade está no metabólito.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs'] },

{ id: 'q-2.9-101', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional a chumbo em atividades de reforma e demolição, é CORRETO afirmar:',
  alts: [
    { t: 'Tintas antigas contêm chumbo, e lixamento, raspagem e aquecimento geram poeira e fumos absorvíveis.', ok: true,
      why: 'Correta. Ninguém espera exposição a chumbo em obra de reforma, e é onde ela ocorre.' },
    { t: 'A exposição a chumbo se restringe a indústrias de baterias e fundições, onde o metal é processado em massa.', ok: false,
      why: 'Errada. Reforma de estruturas antigas é fonte relevante e subestimada.' },
    { t: 'Tintas antigas contêm chumbo, sendo o lixamento a seco seguro por não envolver produto químico novo.', ok: false,
      why: 'Errada. É justamente o procedimento que gera maior concentração de poeira com chumbo.' },
    { t: 'Tintas antigas contêm chumbo, não ocorrendo contaminação domiciliar por roupas nesse tipo de exposição.', ok: false,
      why: 'Errada. É via reconhecida de exposição de crianças no domicílio do trabalhador.' },
    { t: 'Tintas antigas contêm chumbo, afastando a ausência de sintomas a necessidade de monitoramento biológico.', ok: false,
      why: 'Errada. O monitoramento existe para detectar absorção antes do sintoma.' }
  ],
  comentario: 'Chumbo em obra de reforma: tinta antiga lixada ou aquecida gera poeira e fumo de alta absorção. E a roupa de trabalho leva chumbo para casa, onde as crianças são as mais suscetíveis.',
  pegadinha: 'Não reconhecer a reforma como atividade com agente químico deixa a exposição inteira fora do programa.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-7', 'NR-18'] }

);
