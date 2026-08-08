/* Lote F — 4.1, 4.7, 4.9, 4.10, 5.3, 5.6. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.1-039', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar se determinada doença pode ser reconhecida como relacionada ao trabalho, o médico consulta as listas do anexo do regulamento previdenciário. Sobre essas listas, é CORRETO afirmar:',
  alts: [
    { t: 'Uma lista relaciona agentes ou fatores de risco às doenças que podem provocar, e outra relaciona doenças aos agentes que as causam — sendo instrumentos de apoio ao raciocínio de nexo, que não esgotam as possibilidades de reconhecimento.', ok: true,
      why: 'Correta. As listas são de dupla entrada e servem de apoio; há previsão de reconhecimento excepcional de doença não listada.' },
    { t: 'As listas são taxativas: doença não listada nunca pode ser reconhecida.', ok: false,
      why: 'Errada. Há previsão expressa de reconhecimento em caso excepcional, quando comprovadas as condições especiais de trabalho.' },
    { t: 'A presença da doença na lista dispensa a demonstração da exposição no caso concreto.', ok: false,
      why: 'Errada. A lista relaciona possibilidade; o caso concreto exige demonstrar a exposição.' },
    { t: 'Existe uma única lista, organizada apenas por doença.', ok: false,
      why: 'Errada. São listas de dupla entrada, por agente e por doença.' },
    { t: 'As listas do regulamento previdenciário e a lista do Ministério da Saúde são o mesmo documento.', ok: false,
      why: 'Errada. São instrumentos distintos, com finalidades previdenciária e sanitária.' }
  ],
  comentario: 'Listas de dupla entrada — por agente e por doença — apoiam o raciocínio sem esgotá-lo: doença não listada pode ser reconhecida em caso excepcional, e doença listada ainda exige demonstrar a exposição concreta.',
  pegadinha: 'Tratar a lista como taxativa fecha a porta que a própria norma deixou aberta.',
  refs: ['Decreto nº 3.048/1999 — Anexo II', 'Lei nº 8.213/1991 — art. 20, §2º'] },

{ id: 'q-4.1-040', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os períodos de indução e de latência nas doenças relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O período de indução é o tempo entre o início da exposição e o início do processo patológico, e o de latência é o tempo até a manifestação clínica — conhecer ambos permite julgar a plausibilidade temporal entre exposição e doença.', ok: true,
      why: 'Correta. É essa noção que permite dizer se a doença apareceu cedo demais ou tarde demais para ser explicada por aquela exposição.' },
    { t: 'Indução e latência são sinônimos.', ok: false,
      why: 'Errada. São períodos distintos e sucessivos.' },
    { t: 'Latência curta é característica de todas as doenças ocupacionais.', ok: false,
      why: 'Errada. Varia muito: intoxicações agudas têm latência de horas; cânceres, de décadas.' },
    { t: 'A latência não influencia o raciocínio de nexo.', ok: false,
      why: 'Errada. Compatibilidade temporal é um dos elementos centrais do nexo.' },
    { t: 'Doença que se manifesta após o fim da exposição não pode ser ocupacional.', ok: false,
      why: 'Errada. É justamente o padrão das doenças de latência longa.' }
  ],
  comentario: 'Indução: exposição até o início do processo. Latência: até a manifestação clínica. Juntas, permitem julgar se a doença apareceu em tempo compatível — e explicam por que câncer décadas depois é esperado, não suspeito.',
  pegadinha: 'Usar a manifestação após o fim da exposição para negar nexo ignora a definição de latência.',
  refs: ['Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.7-040', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador em tratamento de transtorno bipolar, estável, é candidato a função em turno noturno rotativo. Sobre a avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'A privação e a irregularidade do sono são fatores conhecidos de desestabilização em transtornos do humor, o que torna a alocação em turno noturno rotativo uma questão a discutir com o trabalhador e com o assistente — sem que o diagnóstico gere inaptidão automática.', ok: true,
      why: 'Correta. Há razão clínica concreta para a preocupação, mas a decisão é individualizada e construída com o trabalhador e o assistente.' },
    { t: 'O diagnóstico de transtorno bipolar torna o trabalhador inapto para qualquer atividade laboral.', ok: false,
      why: 'Errada. Estabilidade clínica com tratamento permite ampla atividade laboral.' },
    { t: 'A irregularidade do sono não guarda relação com a estabilidade de transtornos do humor.', ok: false,
      why: 'Errada. A relação entre ritmo de sono e estabilidade é bem estabelecida.' },
    { t: 'A decisão sobre a alocação cabe ao setor de pessoal, informado do diagnóstico.', ok: false,
      why: 'Errada. A conclusão de aptidão é ato médico e o diagnóstico não é informado ao setor de pessoal.' },
    { t: 'O trabalhador deve ser alocado no turno noturno sem qualquer discussão, para evitar discriminação.', ok: false,
      why: 'Errada. Ignorar risco clínico concreto não é antidiscriminação; é omissão.' }
  ],
  comentario: 'Nem inaptidão automática, nem alocação cega em nome da não discriminação. Há razão clínica para discutir turno noturno em transtorno do humor, e a decisão se constrói com o trabalhador e o assistente, preservando o sigilo.',
  pegadinha: 'Alocar sem discutir "para não discriminar" transforma uma preocupação legítima em omissão.',
  refs: ['Camargo — Psiquiatria Ocupacional', 'Couto — Ergonomia', 'Código de Ética Médica'] },

{ id: 'q-4.9-040', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde gestante é alocada em setor com pacientes portadores de doenças transmissíveis. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve considerar os agentes específicos presentes, o estado imunitário da trabalhadora e os riscos particulares à gestação, com afastamento de exposições incompatíveis e realocação sem prejuízo salarial — decisão individualizada, não afastamento genérico do setor.', ok: true,
      why: 'Correta. Nem exposição indiscriminada nem afastamento automático: avalia-se agente por agente e o estado imunitário.' },
    { t: 'A gestação exige afastamento automático de qualquer atividade em serviço de saúde.', ok: false,
      why: 'Errada. O afastamento é das exposições incompatíveis, identificadas caso a caso.' },
    { t: 'O estado imunitário da trabalhadora é irrelevante na avaliação.', ok: false,
      why: 'Errada. Imunidade prévia a determinados agentes muda substancialmente a avaliação.' },
    { t: 'A realocação por motivo de gestação autoriza redução salarial proporcional.', ok: false,
      why: 'Errada. A transferência deve ocorrer sem prejuízo da remuneração.' },
    { t: 'Riscos à gestação se restringem a agentes biológicos, não abrangendo químicos e físicos.', ok: false,
      why: 'Errada. Agentes químicos, radiações e fatores ergonômicos também exigem avaliação na gestação.' }
  ],
  comentario: 'Gestação em serviço de saúde: avaliar agente por agente, considerar o estado imunitário, afastar das exposições incompatíveis e realocar sem prejuízo salarial. E lembrar que o risco não é só biológico — químicos, radiações e ergonomia entram.',
  pegadinha: 'O afastamento automático de todo o setor parece protetor e é substituto preguiçoso da avaliação individualizada.',
  refs: ['NR-32', 'CLT — proteção à maternidade', 'SBIm'] },

{ id: 'q-4.10-040', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a vacinação de trabalhadores em situação de surto ou de exposição a caso confirmado, é CORRETO afirmar:',
  alts: [
    { t: 'A vacinação de bloqueio pode estar indicada em contatos, com prazos definidos conforme o agente, sendo medida de controle coletivo articulada com a vigilância — distinta da imunização de rotina prevista no programa por risco ocupacional.', ok: true,
      why: 'Correta. São duas lógicas: a rotina por risco da função e o bloqueio diante de exposição concreta, com prazos próprios.' },
    { t: 'A vacinação só tem indicação preventiva de rotina, nunca em situação de exposição.', ok: false,
      why: 'Errada. Há indicações de bloqueio pós-exposição para determinados agentes.' },
    { t: 'A vacinação de bloqueio dispensa articulação com a vigilância epidemiológica.', ok: false,
      why: 'Errada. É medida de controle coletivo e integra a resposta da vigilância.' },
    { t: 'O prazo para vacinação de bloqueio é o mesmo para todos os agentes.', ok: false,
      why: 'Errada. Varia conforme o agente e o mecanismo de proteção.' },
    { t: 'Trabalhadores já vacinados nunca necessitam de qualquer medida em situação de surto.', ok: false,
      why: 'Errada. A conduta depende do agente, do esquema e da resposta prévia documentada.' }
  ],
  comentario: 'Duas lógicas distintas: rotina por risco da função e bloqueio pós-exposição, este com prazo próprio por agente e articulado com a vigilância. Confundi-las faz perder a janela do bloqueio.',
  pegadinha: 'Supor que a vacinação só tem papel preventivo de rotina elimina a resposta ao surto.',
  refs: ['SBIm', 'Ministério da Saúde — Programa Nacional de Imunizações', 'NR-32'] },

{ id: 'q-5.3-040', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com discopatia degenerativa assintomática documentada em exame anterior à admissão desenvolve lombalgia incapacitante após dois anos em função com levantamento manual de cargas. A empresa apresenta o exame prévio como prova de que a doença é anterior. Sobre o argumento, é CORRETO afirmar:',
  alts: [
    { t: 'O exame prévio demonstra a existência da alteração estrutural, não a existência da doença clínica: a condição era assintomática, e o trabalho pode ter atuado como concausa que desencadeou a manifestação — o que mantém o nexo.', ok: true,
      why: 'Correta. Alteração estrutural assintomática não é doença; foi o trabalho que a transformou em quadro clínico incapacitante.' },
    { t: 'A documentação prévia da alteração estrutural afasta definitivamente o nexo.', ok: false,
      why: 'Errada. É o caso típico de concausa preexistente, que não rompe o nexo.' },
    { t: 'A ausência de sintomas antes da admissão é irrelevante para a análise.', ok: false,
      why: 'Errada. É justamente o dado central: a doença clínica surgiu no curso do trabalho.' },
    { t: 'Exame admissional que detecta alteração estrutural autoriza a recusa da contratação.', ok: false,
      why: 'Errada. Recusar por achado assintomático sem repercussão na função é prática discriminatória.' },
    { t: 'A concausa preexistente reduz proporcionalmente a repercussão previdenciária.', ok: false,
      why: 'Errada. Não há rateio proporcional em razão de concausa.' }
  ],
  comentario: 'Achado estrutural assintomático não é doença. O exame prévio, que a empresa apresenta como defesa, prova exatamente o contrário do pretendido: a pessoa entrou sem sintomas e adoeceu trabalhando.',
  pegadinha: 'O exame admissional usado como escudo é o argumento mais frequente em lombalgia — e ele documenta a ausência de doença clínica na admissão.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

{ id: 'q-5.6-040', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o papel da empresa no processo de reabilitação profissional conduzido pela Previdência, é CORRETO afirmar:',
  alts: [
    { t: 'A empresa participa fornecendo informações sobre funções disponíveis e suas exigências, viabilizando treinamento quando necessário e reintegrando o trabalhador reabilitado — sua omissão compromete o programa e tem repercussões próprias.', ok: true,
      why: 'Correta. Reabilitação sem função concreta para a qual reabilitar não se completa, e a empresa é quem conhece e oferece essas funções.' },
    { t: 'A empresa não participa do processo, que é integralmente conduzido pela Previdência.', ok: false,
      why: 'Errada. A reintegração e a identificação de função compatível dependem dela.' },
    { t: 'A empresa pode recusar a reintegração alegando ausência de função compatível, sem qualquer providência.', ok: false,
      why: 'Errada. Há dever de buscar função compatível e a dispensa permanece condicionada.' },
    { t: 'O treinamento do trabalhador reabilitado é sempre responsabilidade exclusiva da Previdência.', ok: false,
      why: 'Errada. A empresa pode e deve viabilizar treinamento para a função na qual será reintegrado.' },
    { t: 'O certificado de reabilitação obriga a empresa a criar uma função inexistente.', ok: false,
      why: 'Errada. O dever é de buscar função compatível entre as existentes e adaptáveis, não de criar cargo.' }
  ],
  comentario: 'Reabilitação é processo a três: Previdência conduz, trabalhador participa e empresa oferece a função concreta. Sem a terceira ponta, o certificado não vira emprego.',
  pegadinha: 'Alegar "não há função compatível" sem demonstrar a busca é a forma mais comum de esvaziar a reintegração.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.6-041', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o retorno ao trabalho de trabalhador que permaneceu afastado por período muito prolongado, é CORRETO afirmar:',
  alts: [
    { t: 'Afastamentos prolongados exigem atenção à reaclimatação física, à readaptação ao ritmo e à reinserção social na equipe, além da avaliação clínica — a retomada abrupta da carga plena após longo afastamento é fator de risco para nova falha.', ok: true,
      why: 'Correta. O corpo e a rotina se desadaptam, e a reinserção social na equipe é dimensão frequentemente ignorada.' },
    { t: 'Após longo afastamento, o retorno deve ser sempre com carga plena, para evitar tratamento diferenciado.', ok: false,
      why: 'Errada. Gradualidade reduz o risco de nova falha e não constitui privilégio.' },
    { t: 'A dimensão social da reinserção na equipe é irrelevante para o sucesso do retorno.', ok: false,
      why: 'Errada. Acolhimento pela equipe é fator que influencia diretamente a permanência.' },
    { t: 'A perda de condicionamento físico durante o afastamento não é fator a considerar.', ok: false,
      why: 'Errada. Especialmente em atividades com demanda física, a desadaptação é relevante.' },
    { t: 'Quanto mais prolongado o afastamento, maior a probabilidade de retorno bem-sucedido.', ok: false,
      why: 'Errada, e é o inverso: a probabilidade de retorno efetivo cai com a duração do afastamento.' }
  ],
  comentario: 'Retorno após longo afastamento tem três dimensões: clínica, física (reaclimatação e ritmo) e social (reinserção na equipe). Retomar carga plena de imediato para "não diferenciar" é o caminho mais curto para a recidiva.',
  pegadinha: 'Confundir gradualidade com privilégio elimina a medida que mais sustenta o retorno.',
  refs: ['Penteado — Perícias em DORT', 'NR-7'] }

);
