/* Lote AF — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-100', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o ruído de impacto e sua avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'Ele se caracteriza por picos de curta duração e alta amplitude, exige instrumentação com resposta adequada a eventos rápidos, e a média medida em resposta lenta subestima seu potencial lesivo — o que faz de sua avaliação um procedimento distinto do ruído contínuo.', ok: true,
      why: 'Correta. Instrumento com resposta inadequada simplesmente não enxerga o pico.' },
    { t: 'O ruído de impacto pode ser avaliado com os mesmos parâmetros do ruído contínuo.', ok: false,
      why: 'Errada. Exige procedimento e instrumentação específicos.' },
    { t: 'Picos de curta duração não causam dano auditivo relevante.', ok: false,
      why: 'Errada. Podem produzir trauma acústico agudo, inclusive em exposição única.' },
    { t: 'A proteção auditiva convencional atenua igualmente ruído contínuo e de impacto.', ok: false,
      why: 'Errada. O desempenho frente a impacto difere, e a seleção deve considerar isso.' },
    { t: 'O ruído de impacto não ocorre em atividades de manutenção e montagem.', ok: false,
      why: 'Errada. Martelamento, prensagem e uso de ferramentas de impacto são fontes típicas.' }
  ],
  comentario: 'Impacto: pico curto e alto, medido com instrumentação própria — resposta lenta não capta. Pode causar trauma acústico agudo em evento único, e a seleção do protetor precisa considerar o desempenho frente a impacto.',
  pegadinha: 'Medir impacto em resposta lenta produz número tranquilizador sobre uma exposição que pode lesar de uma vez.',
  refs: ['NHO 01 — Fundacentro', 'NR-15 — Anexo 2'] },

{ id: 'q-2.3-100', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o manuseio de medicamentos antineoplásicos por trabalhadores de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição ocupacional a agentes com potencial carcinogênico e de toxicidade reprodutiva, exigindo preparo em cabine de segurança adequada, sistema fechado, capacitação e procedimentos definidos para derramamento e para o manejo de excretas dos pacientes tratados.', ok: true,
      why: 'Correta. A exposição não termina no preparo: alcança administração, limpeza e excretas.' },
    { t: 'A exposição se limita ao momento do preparo do medicamento.', ok: false,
      why: 'Errada. Administração, limpeza, transporte e manejo de excretas também expõem.' },
    { t: 'A cabine de exaustão química convencional é adequada para o preparo.', ok: false,
      why: 'Errada. É necessária cabine de segurança apropriada ao risco desses fármacos.' },
    { t: 'Trabalhadores da limpeza não integram os grupos expostos.', ok: false,
      why: 'Errada. Manuseiam resíduos e excretas e estão entre os expostos.' },
    { t: 'A luva de procedimento comum é suficiente para o manuseio desses agentes.', ok: false,
      why: 'Errada. Exige-se luva com especificação própria e prática de dupla luva em determinadas etapas.' }
  ],
  comentario: 'Antineoplásicos expõem toda a cadeia — preparo, administração, limpeza, excretas — a agentes carcinogênicos e de toxicidade reprodutiva. Cabine específica, sistema fechado, luva especificada e protocolo de derramamento.',
  pegadinha: 'Restringir a exposição à farmácia deixa desprotegidos a enfermagem e o pessoal da limpeza.',
  refs: ['NR-32', 'Diretrizes de manipulação de antineoplásicos'] },

{ id: 'q-2.4-100', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o risco biológico em atividades de abate e processamento de carnes, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição a zoonoses por contato com tecidos, secreções e aerossóis, agravada pela alta frequência de ferimentos com facas e pela umidade constante — de modo que a prevenção combina proteção biológica, prevenção de cortes e cuidado com lesões cutâneas.', ok: true,
      why: 'Correta. É o corte na mão que transforma a exposição em infecção.' },
    { t: 'O risco biológico nesse setor é desprezível diante do risco ergonômico.', ok: false,
      why: 'Errada. Ambos são relevantes e coexistem.' },
    { t: 'A transmissão nesse ambiente ocorre exclusivamente por via digestiva.', ok: false,
      why: 'Errada. Pele lesada, mucosas e aerossóis são vias relevantes.' },
    { t: 'Ferimentos superficiais em mãos não requerem afastamento temporário do contato.', ok: false,
      why: 'Errada. São porta de entrada e exigem avaliação e proteção adequada.' },
    { t: 'A vacinação disponível cobre as principais zoonoses do setor.', ok: false,
      why: 'Errada. Para várias delas não há vacina, o que reforça as barreiras e a prevenção de cortes.' }
  ],
  comentario: 'Abate: zoonoses por tecidos, secreções e aerossóis, com corte de faca como porta de entrada e umidade constante macerando a pele. Sem vacina para a maioria — a prevenção é barreira mais prevenção de ferimento.',
  pegadinha: 'Priorizar apenas o risco ergonômico no frigorífico deixa a via biológica sem tratamento.',
  refs: ['NR-36', 'NR-32', 'Ministério da Saúde — zoonoses ocupacionais'] },

{ id: 'q-2.6-100', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a diferença entre limites de exposição e valores de referência para indicadores biológicos, é CORRETO afirmar:',
  alts: [
    { t: 'Os primeiros se referem à concentração no ar e os segundos à quantidade do agente ou de seu metabólito no organismo, de modo que resultados discordantes entre os dois são possíveis e informativos — apontando, por exemplo, absorção por via cutânea ou falha na proteção respiratória.', ok: true,
      why: 'Correta. A discordância entre ambiental e biológico é achado que orienta a investigação.' },
    { t: 'Resultados discordantes entre avaliação ambiental e biológica indicam erro em uma delas.', ok: false,
      why: 'Errada. Frequentemente indicam via de absorção não considerada ou falha de proteção.' },
    { t: 'Os dois conjuntos de valores medem a mesma grandeza em unidades diferentes.', ok: false,
      why: 'Errada. Um mede o ar, o outro mede o organismo.' },
    { t: 'O indicador biológico normal garante que a exposição ambiental está controlada.', ok: false,
      why: 'Errada. Pode refletir uso eficaz de proteção sem que o ambiente esteja controlado.' },
    { t: 'A avaliação ambiental é dispensável quando há monitoramento biológico implantado.', ok: false,
      why: 'Errada. Só a avaliação ambiental indica onde e como intervir na fonte.' }
  ],
  comentario: 'Ambiental mede o ar; biológico mede a pessoa. Discordar entre eles é informação: ar alto com biológico baixo sugere proteção funcionando; ar baixo com biológico alto sugere via cutânea ou exposição fora do previsto.',
  pegadinha: 'Indicador biológico normal com ambiente descontrolado significa proteção individual funcionando, não risco eliminado.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-7', 'NR-9'] },

{ id: 'q-2.6-101', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a atualização periódica das listas de limites de exposição, é CORRETO afirmar:',
  alts: [
    { t: 'As revisões acompanham o acúmulo de evidência e podem introduzir novos agentes, alterar valores e acrescentar notações — de modo que trabalhar com edição desatualizada pode significar avaliar contra critério já superado.', ok: true,
      why: 'Correta. A edição usada precisa ser declarada e mantida atualizada.' },
    { t: 'As listas são estáveis e sua edição não precisa ser declarada nos laudos.', ok: false,
      why: 'Errada. A edição utilizada deve constar, pois valores mudam entre versões.' },
    { t: 'Novos agentes não são incorporados às listas após sua publicação inicial.', ok: false,
      why: 'Errada. A incorporação de novos agentes é rotina das revisões.' },
    { t: 'Notações como absorção cutânea e sensibilização não sofrem alteração nas revisões.', ok: false,
      why: 'Errada. São acrescentadas ou revistas conforme a evidência disponível.' },
    { t: 'A defasagem entre a norma nacional e a referência técnica internacional é irrelevante na prática.', ok: false,
      why: 'Errada. Pode significar cumprir a norma e permanecer acima do critério técnico atual.' }
  ],
  comentario: 'Listas de limites são revisadas: entram agentes, mudam valores, aparecem notações. Declarar a edição usada é parte do laudo — e a defasagem entre norma nacional e referência técnica é real e relevante.',
  pegadinha: 'Laudo que não declara a edição da lista impede saber contra que critério a exposição foi julgada.',
  refs: ['ACGIH — TLVs, revisões anuais', 'NR-15', 'NHO — Fundacentro'] },

{ id: 'q-2.7-080', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação da exposição a vibração conforme as normas de higiene ocupacional de referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'Os procedimentos distinguem vibração de mãos e braços de vibração de corpo inteiro, com pontos de medição, eixos e parâmetros próprios — e a caracterização depende também do tempo de exposição diário a cada ferramenta ou equipamento.', ok: true,
      why: 'Correta. Não basta medir a ferramenta: o tempo de uso compõe a dose.' },
    { t: 'Os dois tipos de vibração seguem o mesmo procedimento de medição.', ok: false,
      why: 'Errada. Pontos, eixos e parâmetros diferem entre eles.' },
    { t: 'O tempo de exposição diário não integra a caracterização.', ok: false,
      why: 'Errada. A dose depende do nível medido e do tempo de uso.' },
    { t: 'A medição em uma única ferramenta representa a exposição de quem usa várias.', ok: false,
      why: 'Errada. É preciso compor a exposição das diferentes ferramentas usadas na jornada.' },
    { t: 'O estado de conservação da ferramenta não influencia o resultado.', ok: false,
      why: 'Errada. Desgaste e falta de manutenção aumentam significativamente a vibração emitida.' }
  ],
  comentario: 'Vibração: procedimentos distintos para mãos e braços e para corpo inteiro, com composição do tempo de uso de cada ferramenta. Ferramenta desgastada vibra mais — manutenção é medida de controle da exposição.',
  pegadinha: 'Medir a ferramenta sem compor o tempo de uso na jornada não caracteriza a exposição.',
  refs: ['NHO 09 e NHO 10 — Fundacentro', 'ISO 5349', 'ISO 2631'] },

{ id: 'q-2.9-100', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a toxicocinética aplicada à interpretação de exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A meia-vida do agente determina se ele se acumula entre jornadas sucessivas, e agentes de eliminação lenta podem elevar a carga corporal ao longo da semana mesmo com exposições diárias abaixo do limite — o que altera o momento adequado da coleta e a interpretação do resultado.', ok: true,
      why: 'Correta. Acúmulo semanal é invisível se a coleta ignora a cinética.' },
    { t: 'A meia-vida do agente não influencia a estratégia de monitoramento biológico.', ok: false,
      why: 'Errada. Determina o momento de coleta e a possibilidade de acúmulo.' },
    { t: 'Agentes de eliminação rápida exigem coleta no início da semana de trabalho.', ok: false,
      why: 'Errada. Para eles a coleta costuma ser ao fim da jornada, refletindo a exposição recente.' },
    { t: 'A biotransformação sempre reduz a toxicidade do agente.', ok: false,
      why: 'Errada. Há agentes cujos metabólitos são mais tóxicos que a substância original.' },
    { t: 'A distribuição do agente no organismo não depende de suas propriedades físico-químicas.', ok: false,
      why: 'Errada. Lipossolubilidade e ligação a proteínas determinam a distribuição e o depósito.' }
  ],
  comentario: 'Cinética decide tudo no monitoramento: meia-vida define acúmulo e momento da coleta; lipossolubilidade define depósito; e biotransformação nem sempre desintoxica — às vezes produz o metabólito mais tóxico.',
  pegadinha: 'Supor que metabolizar é sempre destoxificar ignora agentes cuja toxicidade está no metabólito.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs'] },

{ id: 'q-2.9-101', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional a chumbo em atividades de reforma e demolição, é CORRETO afirmar:',
  alts: [
    { t: 'Tintas antigas podem conter chumbo, e operações de lixamento, raspagem e aquecimento geram poeira e fumos com alto potencial de absorção — situação frequentemente não reconhecida por não ser percebida como atividade com agente químico.', ok: true,
      why: 'Correta. Ninguém espera exposição a chumbo em obra de reforma, e é onde ela ocorre.' },
    { t: 'A exposição a chumbo se restringe a indústrias de baterias e fundições.', ok: false,
      why: 'Errada. Reforma de estruturas antigas é fonte relevante e subestimada.' },
    { t: 'O lixamento a seco de tinta antiga é procedimento seguro por não envolver produto químico novo.', ok: false,
      why: 'Errada. É justamente o procedimento que gera maior concentração de poeira contendo chumbo.' },
    { t: 'A contaminação domiciliar por roupas de trabalho não ocorre nesse tipo de exposição.', ok: false,
      why: 'Errada. É via reconhecida de exposição de crianças no domicílio do trabalhador.' },
    { t: 'A ausência de sintomas afasta a necessidade de monitoramento biológico dos expostos.', ok: false,
      why: 'Errada. O monitoramento existe para detectar absorção antes do sintoma.' }
  ],
  comentario: 'Chumbo em obra de reforma: tinta antiga lixada ou aquecida gera poeira e fumo de alta absorção. E a roupa de trabalho leva chumbo para casa, onde as crianças são as mais suscetíveis.',
  pegadinha: 'Não reconhecer a reforma como atividade com agente químico deixa a exposição inteira fora do programa.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-7', 'NR-18'] }

);
