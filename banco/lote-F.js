/* Lote F — 4.1, 4.7, 4.9, 4.10, 5.3, 5.6. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.1-039', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar se determinada doença pode ser reconhecida como relacionada ao trabalho, o médico consulta as listas do anexo do regulamento previdenciário. Sobre essas listas, é CORRETO afirmar:',
  alts: [
    { t: 'Uma lista vai do agente à doença e outra da doença ao agente, apoiando o raciocínio de nexo causal', ok: true,
      why: 'Correta. São instrumentos de apoio, que não esgotam as possibilidades de reconhecimento.' },
    { t: 'São listas taxativas, de modo que doença não listada não pode ser reconhecida como ocupacional.', ok: false,
      why: 'Errada. O reconhecimento no caso concreto é possível fora delas.' },
    { t: 'Uma vai do agente à doença e outra do inverso, dispensando a presença na lista provar a exposição.', ok: false,
      why: 'Errada. A exposição efetiva precisa ser demonstrada em cada caso.' },
    { t: 'Existe uma única lista de doenças relacionadas ao trabalho, organizada apenas por entidade mórbida.', ok: false,
      why: 'Errada. São duas entradas: por agente e por doença.' },
    { t: 'Uma vai do agente à doença, sendo as listas previdenciária e do Ministério da Saúde o mesmo documento.', ok: false,
      why: 'Errada. São instrumentos distintos, com finalidades próprias.' }
  ],
  comentario: 'Listas de dupla entrada — por agente e por doença — apoiam o raciocínio sem esgotá-lo: doença não listada pode ser reconhecida em caso excepcional, e doença listada ainda exige demonstrar a exposição concreta.',
  pegadinha: 'Tratar a lista como taxativa fecha a porta que a própria norma deixou aberta.',
  refs: ['Decreto nº 3.048/1999 — Anexo II', 'Lei nº 8.213/1991 — art. 20, §2º'] },

{ id: 'q-4.1-040', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os períodos de indução e de latência nas doenças relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Indução é o tempo até o início do processo patológico; latência, até a manifestação clínica.', ok: true,
      why: 'Correta. Conhecer ambos permite julgar a plausibilidade temporal entre exposição e doença.' },
    { t: 'Indução e latência são termos sinônimos, usados para o intervalo entre exposição e doença.', ok: false,
      why: 'Errada. São períodos distintos, com marcos diferentes.' },
    { t: 'Indução antecede a latência, sendo a latência curta característica de toda doença ocupacional.', ok: false,
      why: 'Errada. Há agravos com latência de décadas, como as neoplasias.' },
    { t: 'Indução antecede a latência, sem que esta influencie o raciocínio de nexo com o trabalho.', ok: false,
      why: 'Errada. A compatibilidade temporal é elemento central do nexo.' },
    { t: 'Indução antecede a latência, não podendo ser ocupacional a doença surgida após o fim da exposição.', ok: false,
      why: 'Errada. É justamente o padrão dos agravos de latência longa.' }
  ],
  comentario: 'Indução: exposição até o início do processo. Latência: até a manifestação clínica. Juntas, permitem julgar se a doença apareceu em tempo compatível — e explicam por que câncer décadas depois é esperado, não suspeito.',
  pegadinha: 'Usar a manifestação após o fim da exposição para negar nexo ignora a definição de latência.',
  refs: ['Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.7-040', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador em tratamento de transtorno bipolar, estável, é candidato a função em turno noturno rotativo. Sobre a avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'A privação e a irregularidade do sono desestabilizam transtornos do humor, o que exige discussão.', ok: true,
      why: 'Correta. O diagnóstico não gera inaptidão automática para o turno.' },
    { t: 'O diagnóstico de transtorno bipolar torna o trabalhador inapto para qualquer atividade laboral.', ok: false,
      why: 'Errada. A avaliação é funcional e por função, não pelo rótulo.' },
    { t: 'O sono importa, embora a irregularidade não se relacione à estabilidade dos transtornos do humor.', ok: false,
      why: 'Errada. É fator reconhecido de desestabilização.' },
    { t: 'O sono importa, cabendo a decisão sobre a alocação ao setor de pessoal, informado do diagnóstico.', ok: false,
      why: 'Errada. É decisão técnica médica, e o diagnóstico é sigiloso.' },
    { t: 'O sono importa, devendo o trabalhador ser alocado no noturno sem discussão, para evitar discriminação.', ok: false,
      why: 'Errada. Evitar discriminação não é ignorar risco concreto à saúde.' }
  ],
  comentario: 'Nem inaptidão automática, nem alocação cega em nome da não discriminação. Há razão clínica para discutir turno noturno em transtorno do humor, e a decisão se constrói com o trabalhador e o assistente, preservando o sigilo.',
  pegadinha: 'Alocar sem discutir "para não discriminar" transforma uma preocupação legítima em omissão.',
  refs: ['Camargo — Psiquiatria Ocupacional', 'Couto — Ergonomia', 'Código de Ética Médica'] },

{ id: 'q-4.9-040', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde gestante é alocada em setor com pacientes portadores de doenças transmissíveis. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Considera os agentes presentes, o estado imunitário e os riscos à gestação, com realocação.', ok: true,
      why: 'Correta. É decisão individualizada, e não afastamento genérico do setor.' },
    { t: 'A gestação exige o afastamento automático de qualquer atividade em serviço de saúde assistencial.', ok: false,
      why: 'Errada. A decisão é individualizada, por agente e por atividade.' },
    { t: 'Considera os agentes presentes, sendo irrelevante o estado imunitário da trabalhadora avaliada.', ok: false,
      why: 'Errada. Define o risco concreto diante de cada agente.' },
    { t: 'Considera os agentes e realoca, autorizando a realocação por gestação redução salarial proporcional.', ok: false,
      why: 'Errada. A realocação se dá sem prejuízo da remuneração.' },
    { t: 'Considera os agentes biológicos presentes, únicos riscos relevantes à gestação no ambiente.', ok: false,
      why: 'Errada. Agentes químicos e físicos também trazem risco reprodutivo.' }
  ],
  comentario: 'Gestação em serviço de saúde: avaliar agente por agente, considerar o estado imunitário, afastar das exposições incompatíveis e realocar sem prejuízo salarial. E lembrar que o risco não é só biológico — químicos, radiações e ergonomia entram.',
  pegadinha: 'O afastamento automático de todo o setor parece protetor e é substituto preguiçoso da avaliação individualizada.',
  refs: ['NR-32', 'CLT — proteção à maternidade', 'SBIm'] },

{ id: 'q-4.10-040', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a vacinação de trabalhadores em situação de surto ou de exposição a caso confirmado, é CORRETO afirmar:',
  alts: [
    { t: 'A vacinação de bloqueio pode ser indicada em contatos, com prazos definidos conforme o agente', ok: true,
      why: 'Correta. É medida coletiva articulada com a vigilância, distinta da rotina por risco.' },
    { t: 'A vacinação tem indicação preventiva de rotina, e nunca em situação de exposição já ocorrida.', ok: false,
      why: 'Errada. A vacinação de bloqueio é medida prevista em surtos.' },
    { t: 'A vacinação de bloqueio é indicada, dispensando articulação com a vigilância epidemiológica local.', ok: false,
      why: 'Errada. É medida de controle coletivo, conduzida com a vigilância.' },
    { t: 'A vacinação de bloqueio é indicada, com o mesmo prazo de aplicação para todos os agentes.', ok: false,
      why: 'Errada. Os prazos variam conforme o agente envolvido.' },
    { t: 'A vacinação de bloqueio é indicada, não necessitando os já vacinados de medida alguma no surto.', ok: false,
      why: 'Errada. Pode haver indicação de reforço ou de outras medidas.' }
  ],
  comentario: 'Duas lógicas distintas: rotina por risco da função e bloqueio pós-exposição, este com prazo próprio por agente e articulado com a vigilância. Confundi-las faz perder a janela do bloqueio.',
  pegadinha: 'Supor que a vacinação só tem papel preventivo de rotina elimina a resposta ao surto.',
  refs: ['SBIm', 'Ministério da Saúde — Programa Nacional de Imunizações', 'NR-32'] },

{ id: 'q-5.3-040', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com discopatia degenerativa assintomática documentada em exame anterior à admissão desenvolve lombalgia incapacitante após dois anos em função com levantamento manual de cargas. A empresa apresenta o exame prévio como prova de que a doença é anterior. Sobre o argumento, é CORRETO afirmar:',
  alts: [
    { t: 'O exame prévio mostra a alteração estrutural, não a doença clínica, que era assintomática.', ok: true,
      why: 'Correta. O trabalho pode ter atuado como concausa que desencadeou a manifestação.' },
    { t: 'A documentação prévia da alteração estrutural afasta definitivamente o nexo com o trabalho.', ok: false,
      why: 'Errada. O agravamento de condição preexistente é hipótese de concausa.' },
    { t: 'O exame prévio mostra a alteração, sendo irrelevante a ausência de sintomas antes da admissão.', ok: false,
      why: 'Errada. É o que distingue alteração estrutural de doença instalada.' },
    { t: 'O exame prévio mostra a alteração, o que autoriza a recusa da contratação do candidato.', ok: false,
      why: 'Errada. Recusar por achado sem repercussão funcional é discriminação.' },
    { t: 'O exame prévio mostra a alteração, reduzindo a concausa preexistente a repercussão previdenciária.', ok: false,
      why: 'Errada. Não há previsão de fracionamento dos efeitos.' }
  ],
  comentario: 'Achado estrutural assintomático não é doença. O exame prévio, que a empresa apresenta como defesa, prova exatamente o contrário do pretendido: a pessoa entrou sem sintomas e adoeceu trabalhando.',
  pegadinha: 'O exame admissional usado como escudo é o argumento mais frequente em lombalgia — e ele documenta a ausência de doença clínica na admissão.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

{ id: 'q-5.6-040', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o papel da empresa no processo de reabilitação profissional conduzido pela Previdência, é CORRETO afirmar:',
  alts: [
    { t: 'Participa informando as funções e suas exigências, viabilizando o treinamento e reintegrando depois', ok: true,
      why: 'Correta. Sua omissão compromete o programa e tem repercussões próprias.' },
    { t: 'Não participa do processo, conduzido integralmente pela previdência com seus próprios recursos.', ok: false,
      why: 'Errada. A informação sobre as funções disponíveis é elemento central.' },
    { t: 'Participa do processo, podendo recusar a reintegração alegando ausência de função compatível.', ok: false,
      why: 'Errada. A alegação exige demonstração e providências, não recusa simples.' },
    { t: 'Participa informando as funções, sendo o treinamento responsabilidade exclusiva da previdência.', ok: false,
      why: 'Errada. A empresa viabiliza o treinamento quando necessário.' },
    { t: 'Participa do processo, obrigando o certificado de reabilitação a criar uma função inexistente.', ok: false,
      why: 'Errada. A obrigação é de aproveitamento em função existente e compatível.' }
  ],
  comentario: 'Reabilitação é processo a três: Previdência conduz, trabalhador participa e empresa oferece a função concreta. Sem a terceira ponta, o certificado não vira emprego.',
  pegadinha: 'Alegar "não há função compatível" sem demonstrar a busca é a forma mais comum de esvaziar a reintegração.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.6-041', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o retorno ao trabalho de trabalhador que permaneceu afastado por período muito prolongado, é CORRETO afirmar:',
  alts: [
    { t: 'Exigem atenção à reaclimatação física, à readaptação ao ritmo e à reinserção social na equipe', ok: true,
      why: 'Correta. A retomada abrupta da carga plena é fator de risco para nova falha.' },
    { t: 'Exigem retorno com carga plena desde o primeiro dia, para não gerar tratamento diferenciado.', ok: false,
      why: 'Errada. A retomada progressiva melhora os desfechos de permanência.' },
    { t: 'Exigem reaclimatação física, sendo irrelevante a dimensão social da reinserção na equipe.', ok: false,
      why: 'Errada. É um dos determinantes do sucesso do retorno.' },
    { t: 'Exigem readaptação ao ritmo, sem considerar a perda de condicionamento durante o afastamento.', ok: false,
      why: 'Errada. O descondicionamento é fator relevante e reversível.' },
    { t: 'Exigem atenção, sendo maior a probabilidade de retorno quanto mais prolongado o afastamento.', ok: false,
      why: 'Errada, é o oposto: quanto mais longo, menor a probabilidade de retorno.' }
  ],
  comentario: 'Retorno após longo afastamento tem três dimensões: clínica, física (reaclimatação e ritmo) e social (reinserção na equipe). Retomar carga plena de imediato para "não diferenciar" é o caminho mais curto para a recidiva.',
  pegadinha: 'Confundir gradualidade com privilégio elimina a medida que mais sustenta o retorno.',
  refs: ['Penteado — Perícias em DORT', 'NR-7'] }

);
