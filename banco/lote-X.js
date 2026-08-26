/* Lote X — 2.2, 2.4, 2.6, 2.3, 1.3, 2.9. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-080', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a vibração de corpo inteiro em operadores de máquinas móveis, é CORRETO afirmar:',
  alts: [
    { t: 'Associa-se a lombalgia e depende do assento, da suspensão, do piso e da postura mantida.', ok: true,
      why: 'Correta. Assento, suspensão e piso são as variáveis que reduzem a dose, mais que o rodízio.' },
    { t: 'Associa-se a alterações osteomusculares, afetando principalmente as mãos e os punhos do operador.', ok: false,
      why: 'Errada. Esse é o perfil da vibração localizada de mãos e braços.' },
    { t: 'Associa-se a lombalgia e depende do piso e da postura, sem influência do estado do assento.', ok: false,
      why: 'Errada. O assento com suspensão adequada é um dos principais atenuadores.' },
    { t: 'Associa-se a lombalgia e depende do assento e do piso, sendo a postura irrelevante ao efeito.', ok: false,
      why: 'Errada. Postura em torção associada à vibração agrava o efeito lombar.' },
    { t: 'Associa-se a lombalgia, dispensando a avaliação a medição, bastando o relato do operador.', ok: false,
      why: 'Errada. A caracterização requer medição conforme procedimento padronizado.' }
  ],
  comentario: 'Corpo inteiro atinge a coluna; mãos e braços é a outra síndrome. O que reduz a dose é assento com suspensão, manutenção da máquina e da via — rodízio apenas distribui a exposição por mais gente.',
  pegadinha: 'Trocar as duas síndromes de vibração é a confusão mais cobrada do tema.',
  refs: ['NHO 09 — Fundacentro', 'ISO 2631', 'NR-15 — Anexo 8'] },

{ id: 'q-2.2-081', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional a condições hiperbáricas, é CORRETO afirmar:',
  alts: [
    { t: 'O risco principal está na descompressão inadequada, exigindo tabelas e recompressão disponível.', ok: true,
      why: 'Correta. A descompressão é a etapa crítica, e a menor pressão no voo agrava.' },
    { t: 'O risco principal se concentra na fase de compressão inicial, quando a pressão sobe rapidamente.', ok: false,
      why: 'Errada. A fase crítica é a descompressão.' },
    { t: 'O risco está na descompressão, não havendo restrição para viagem aérea após a exposição.', ok: false,
      why: 'Errada. A menor pressão em cabine favorece bolhas; há intervalo mínimo recomendado.' },
    { t: 'O risco está na descompressão, manifestando-se a doença exclusivamente durante essa fase.', ok: false,
      why: 'Errada. Pode se manifestar horas após o retorno à pressão ambiente.' },
    { t: 'O risco está na descompressão, dispensando os trabalhos em ar comprimido registro das exposições.', ok: false,
      why: 'Errada. O registro é exigência e permite reconstituir o histórico.' }
  ],
  comentario: 'Hiperbárico: o perigo está na descompressão e nas horas seguintes, não na compressão. Tabelas, tempo controlado, câmara de recompressão disponível e restrição de voo após a jornada.',
  pegadinha: 'Liberar viagem aérea logo após turno hiperbárico soma duas quedas de pressão.',
  refs: ['NR-15 — Anexo 6', 'Medicina hiperbárica — literatura de referência'] },

{ id: 'q-2.4-080', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a classificação de agentes biológicos por classe de risco, é CORRETO afirmar:',
  alts: [
    { t: 'Considera patogenicidade, existência de profilaxia e tratamento e risco de disseminação.', ok: true,
      why: 'Correta. São os critérios que compõem a classificação e definem a contenção.' },
    { t: 'Considera a gravidade da doença que o agente causa no ser humano exposto a ele.', ok: false,
      why: 'Errada. Disponibilidade de profilaxia e risco de disseminação também compõem o critério.' },
    { t: 'Considera a patogenicidade, definindo-se o nível de contenção pelo tipo de instituição.', ok: false,
      why: 'Errada. É determinado pelo agente e pelo procedimento realizado.' },
    { t: 'Considera patogenicidade e disseminação, sem que procedimentos com aerossol alterem a contenção.', ok: false,
      why: 'Errada. Elevam a exigência de contenção em relação à manipulação convencional.' },
    { t: 'Considera patogenicidade e disseminação, sem que a existência de vacina eficaz influencie.', ok: false,
      why: 'Errada. A disponibilidade de profilaxia eficaz é um dos critérios.' }
  ],
  comentario: 'Classe de risco combina patogenicidade, existência de profilaxia e tratamento, e risco de disseminação. O nível de contenção sai do agente somado ao procedimento — aerossol eleva a exigência.',
  pegadinha: 'Reduzir a classificação à gravidade da doença ignora dois dos três critérios.',
  refs: ['NR-32', 'Classificação de risco de agentes biológicos — Ministério da Saúde'] },

{ id: 'q-2.4-081', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o manejo de resíduos de serviços de saúde e a proteção dos trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'A segregação na origem é o que mais reduz o risco, e o perfurocortante tem limite de enchimento.', ok: true,
      why: 'Correta. Quem se acidenta por má segregação costuma ser quem coleta, não quem descartou.' },
    { t: 'A segregação pode ser feita no ponto de destinação final, sem prejuízo aos que manuseiam antes.', ok: false,
      why: 'Errada. Segregação tardia expõe todos os que manuseiam o resíduo no percurso.' },
    { t: 'A segregação na origem reduz o risco, podendo os recipientes ser preenchidos até a borda superior.', ok: false,
      why: 'Errada. Há limite de preenchimento, e ultrapassá-lo causa acidentes na coleta.' },
    { t: 'A segregação na origem reduz o risco, não integrando a limpeza os grupos de risco biológico.', ok: false,
      why: 'Errada. Estão entre os mais expostos a acidentes com perfurocortantes.' },
    { t: 'A segregação é exigida, sem interface do plano de gerenciamento de resíduos com saúde ocupacional.', ok: false,
      why: 'Errada. A interface é direta, pois define fluxos e proteções de quem manuseia.' }
  ],
  comentario: 'Segregar na origem protege quem vem depois — e quem vem depois costuma ser o trabalhador da limpeza. Recipiente de perfurocortante tem limite de preenchimento por um motivo concreto.',
  pegadinha: 'Excluir a equipe de limpeza dos grupos de risco biológico deixa desprotegido quem mais se acidenta.',
  refs: ['NR-32', 'RDC sobre gerenciamento de resíduos de serviços de saúde'] },

{ id: 'q-2.6-080', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a relação entre limites de exposição e medidas de controle, é CORRETO afirmar:',
  alts: [
    { t: 'O limite é referência de avaliação, não meta: cabe buscar a menor exposição exequível.', ok: true,
      why: 'Correta. Conformidade não é sinônimo de otimização.' },
    { t: 'O limite é referência, encerrando o valor abaixo dele a obrigação de adotar medidas adicionais.', ok: false,
      why: 'Errada. Havendo medida viável de redução, ela permanece exigível.' },
    { t: 'O limite é referência de avaliação e deve ser usado como meta de projeto de novas instalações.', ok: false,
      why: 'Errada. Projetar para o limite deixa a instalação sem margem para variação e degradação.' },
    { t: 'O limite é referência, não precisando a variabilidade das exposições ser considerada na comparação.', ok: false,
      why: 'Errada. É preciso considerar a dispersão dos resultados, não apenas a média.' },
    { t: 'O limite é referência, dispensando a eficácia dos controles instalados reavaliação periódica.', ok: false,
      why: 'Errada. Sistemas se degradam e exigem verificação periódica de desempenho.' }
  ],
  comentario: 'Limite é régua de avaliação, não meta de projeto. Projetar no limite significa ultrapassá-lo assim que algo variar ou se degradar — e conformidade medida hoje exige reavaliação amanhã.',
  pegadinha: 'Dimensionar exaustão para "ficar abaixo do limite" entrega instalação sem margem alguma.',
  refs: ['ACGIH — TLVs', 'AIHA', 'NR-9'] },

{ id: 'q-2.3-080', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a poeiras minerais e sua avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'A fração relevante é a respirável, o que exige amostragem seletiva por tamanho de partícula.', ok: true,
      why: 'Correta. O que se vê é a fração grossa; o que adoece é a que não se vê.' },
    { t: 'A quantidade de poeira visível suspensa no ar indica adequadamente o risco respiratório presente.', ok: false,
      why: 'Errada. A fração respirável não é visível a olho nu.' },
    { t: 'A fração respirável importa, depositando-se todas as frações igualmente nos alvéolos pulmonares.', ok: false,
      why: 'Errada. A deposição depende do diâmetro aerodinâmico das partículas.' },
    { t: 'A fração respirável importa, não reduzindo a umidificação do processo a geração dessa fração.', ok: false,
      why: 'Errada. É medida de controle reconhecida e eficaz quando bem aplicada.' },
    { t: 'A fração respirável importa, sem que o teor de sílica do material influencie o limite aplicável.', ok: false,
      why: 'Errada. O limite para poeira contendo sílica depende do teor do mineral presente.' }
  ],
  comentario: 'O risco está na fração respirável, que é invisível — e por isso a amostragem é seletiva por tamanho. Umidificação reduz geração, e o teor de sílica muda o limite aplicável.',
  pegadinha: 'Avaliar risco pela poeira visível subestima justamente a fração que chega ao alvéolo.',
  refs: ['NHO 08 — Fundacentro', 'ACGIH — frações inalável, torácica e respirável', 'NR-15'] },

{ id: 'q-1.3-080', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre estudos de coorte em saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Estimam incidência e temporalidade, mas são vulneráveis à perda diferencial de seguimento.', ok: true,
      why: 'Correta. Perda diferencial é a principal ameaça à validade em coortes ocupacionais longas.' },
    { t: 'Estimam a associação entre exposição e desfecho, sem permitir estimar incidência na população.', ok: false,
      why: 'Errada. É justamente o delineamento adequado para isso.' },
    { t: 'Estimam incidência, não comprometendo as perdas de seguimento os resultados se forem pequenas.', ok: false,
      why: 'Errada. O que importa é se a perda é diferencial, não apenas o seu tamanho.' },
    { t: 'Estimam incidência e temporalidade, não sendo a coorte histórica aplicável a estudos ocupacionais.', ok: false,
      why: 'Errada. É delineamento muito usado, apoiado em registros de exposição pretéritos.' },
    { t: 'Estimam incidência e temporalidade, eliminando o delineamento o efeito do trabalhador sadio.', ok: false,
      why: 'Errada. O efeito persiste, sobretudo na comparação com a população geral.' }
  ],
  comentario: 'Coorte dá incidência e temporalidade, e a coorte histórica é o cavalo de batalha da epidemiologia ocupacional. Duas ameaças: perda diferencial de seguimento e efeito do trabalhador sadio na comparação com a população geral.',
  pegadinha: 'Avaliar perdas apenas pelo percentual ignora que a direção da perda é o que produz o viés.',
  refs: ['Rothman — Epidemiologia Moderna', 'Checkoway — Research Methods in Occupational Epidemiology'] },

{ id: 'q-1.3-081', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o conceito de confundimento em estudos de saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O confundidor se associa a exposição e desfecho sem ser etapa do mecanismo causal.', ok: true,
      why: 'Correta. Ajustar por mediador remove parte do próprio efeito que se quer estimar.' },
    { t: 'Toda variável associada ao desfecho deve ser incluída como ajuste no modelo estatístico usado.', ok: false,
      why: 'Errada. Incluir mediadores ou colisores introduz viés em vez de removê-lo.' },
    { t: 'O confundidor se associa aos dois, podendo ser eliminado apenas na fase de análise dos dados.', ok: false,
      why: 'Errada. Também se controla no desenho, por restrição, pareamento ou aleatorização.' },
    { t: 'O confundidor se associa aos dois, sem que a randomização atue sobre variáveis não medidas.', ok: false,
      why: 'Errada. É justamente sua principal vantagem, ainda que pouco viável no campo ocupacional.' },
    { t: 'O confundidor se associa aos dois, nunca atuando o tabagismo como confundidor nesses estudos.', ok: false,
      why: 'Errada. É confundidor clássico quando se associa à ocupação e ao desfecho.' }
  ],
  comentario: 'Confundidor se associa à exposição e ao desfecho sem estar no caminho causal. Ajustar por mediador apaga parte do efeito real — o "ajuste por tudo que dá significância" produz mais viés do que corrige.',
  pegadinha: 'Incluir toda variável associada ao desfecho é a receita que transforma análise em produção de viés.',
  refs: ['Rothman — Epidemiologia Moderna'] },

{ id: 'q-2.9-080', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o conceito de dose interna e sua relação com a exposição externa, é CORRETO afirmar:',
  alts: [
    { t: 'A dose interna integra todas as vias e reflete esforço, ventilação e proteção efetiva.', ok: true,
      why: 'Correta. É por isso que dois trabalhadores no mesmo ambiente têm indicadores distintos.' },
    { t: 'A concentração ambiental medida determina de forma unívoca a dose interna do trabalhador exposto.', ok: false,
      why: 'Errada. Esforço, ventilação, via cutânea e proteção efetiva modificam a relação.' },
    { t: 'A dose interna integra as vias, sem que a carga de trabalho influencie a absorção respiratória.', ok: false,
      why: 'Errada. Maior esforço aumenta o volume-minuto e, portanto, a absorção.' },
    { t: 'A dose interna integra as vias, substituindo o monitoramento biológico a avaliação ambiental.', ok: false,
      why: 'Errada. São complementares: um mede a pessoa, o outro identifica onde intervir.' },
    { t: 'A dose interna varia, indicando as diferenças entre trabalhadores do setor erro analítico.', ok: false,
      why: 'Errada. Refletem diferenças reais de tarefa, esforço, proteção e metabolismo.' }
  ],
  comentario: 'Dose interna integra todas as vias e depende do esforço, da ventilação e da proteção efetiva. Por isso o mesmo ambiente produz indicadores diferentes — e por isso ambiental e biológico se complementam em vez de competir.',
  pegadinha: 'Ler diferenças entre trabalhadores como erro de laboratório descarta a informação mais útil do monitoramento biológico.',
  refs: ['ACGIH — BEIs', 'Buschinelli — Toxicologia Ocupacional'] }

);
