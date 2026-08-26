/* Lote AA — 4.7, 4.9, 5.3, 5.6, 6.1, 6.2, 6.3, 6.4, 5.2. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.7-080', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o transtorno de estresse pós-traumático em contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Pode decorrer de testemunho ou exposição repetida a relatos e cenas, como em socorristas e profissionais de segurança.', ok: true,
      why: 'Correta. Exposição indireta e repetida é forma reconhecida em determinadas ocupações.' },
    { t: 'Decorre de evento traumático no trabalho, exigindo que o trabalhador tenha sido a vítima direta do evento vivenciado.', ok: false,
      why: 'Errada. Testemunhar e a exposição repetida a detalhes também são formas reconhecidas.' },
    { t: 'Pode decorrer de testemunho ou exposição repetida, instalando-se sempre nos dias imediatamente seguintes ao evento.', ok: false,
      why: 'Errada. Há formas de manifestação tardia, meses após o evento.' },
    { t: 'Pode decorrer de testemunho ou exposição repetida, sendo o suporte oferecido após o evento irrelevante para a evolução.', ok: false,
      why: 'Errada. A resposta organizacional pós-evento é fator relevante no desfecho.' },
    { t: 'Pode decorrer de testemunho ou exposição repetida, sendo o retorno imediato à mesma função a conduta indicada em todos os casos.', ok: false,
      why: 'Errada. A conduta é individualizada e o retorno precisa ser planejado.' }
  ],
  comentario: 'No trabalho, o trauma alcança quem viveu, quem viu e quem ouve repetidamente — socorrista, segurança, quem atende emergência. Manifestação pode ser tardia, e a resposta da organização depois do evento muda o desfecho.',
  pegadinha: 'Restringir o quadro à vítima direta deixa fora as ocupações de maior incidência.',
  refs: ['Ministério da Saúde — transtornos mentais relacionados ao trabalho', 'CID-11'] },

{ id: 'q-4.9-070', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre doenças transmissíveis em ambientes de trabalho com aglomeração, é CORRETO afirmar:',
  alts: [
    { t: 'Alojamentos, transporte coletivo e refeitórios são pontos críticos, e a intervenção precisa alcançar toda a jornada do trabalhador', ok: true,
      why: 'Correta. O ônibus e o alojamento costumam transmitir mais que a própria linha de produção.' },
    { t: 'O risco se concentra no posto de trabalho, onde a permanência é maior e o contato entre trabalhadores é mais prolongado.', ok: false,
      why: 'Errada. Alojamento, transporte e refeitório são pontos críticos frequentemente esquecidos.' },
    { t: 'Alojamentos e refeitórios são pontos críticos, mas o transporte fornecido pela empresa não integra o escopo da prevenção.', ok: false,
      why: 'Errada. É ambiente sob responsabilidade da empresa e ponto de transmissão relevante.' },
    { t: 'Alojamentos e transporte são pontos críticos, mas trabalhadores migrantes alojados não requerem abordagem específica.', ok: false,
      why: 'Errada. Condições de alojamento e barreiras de acesso à saúde exigem abordagem própria.' },
    { t: 'Alojamentos e transporte são pontos críticos, e a vigilância de sintomáticos dispensa medidas ambientais nesses espaços.', ok: false,
      why: 'Errada. Ventilação e ocupação dos espaços coletivos são determinantes da transmissão.' }
  ],
  comentario: 'Em surto ocupacional, olhe o ônibus, o alojamento e o refeitório antes da linha de produção. A prevenção alcança a jornada inteira, incluindo ventilação e ocupação dos espaços coletivos.',
  pegadinha: 'Concentrar a investigação no posto de trabalho deixa intactos os três ambientes de maior contato.',
  refs: ['NR-24', 'NR-31', 'Protocolos de controle de surtos ocupacionais'] },

{ id: 'q-5.3-070', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a distinção entre concausa e causa exclusiva não ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A concausa exige contribuição efetiva da exposição para o resultado; a coincidência temporal com o trabalho não basta', ok: true,
      why: 'Correta. Concausa exige contribuição demonstrável, não apenas simultaneidade.' },
    { t: 'A concausa se caracteriza pela ocorrência da doença durante o vínculo, período em que o trabalhador esteve sob exposição.', ok: false,
      why: 'Errada. É preciso demonstrar contribuição efetiva da exposição para o resultado.' },
    { t: 'A concausa exige exposição ocupacional, de modo que qualquer doença em trabalhador exposto configura nexo por essa via.', ok: false,
      why: 'Errada. A exposição precisa ter relação plausível com aquele agravo específico.' },
    { t: 'A concausa admite reconhecimento mesmo sem contribuição do trabalho, bastando que a exposição tenha de fato ocorrido.', ok: false,
      why: 'Errada. Sem contribuição para o desencadeamento ou agravamento não há concausa.' },
    { t: 'A concausa exige contribuição efetiva, dispensada a análise da magnitude e do tempo de exposição do trabalhador.', ok: false,
      why: 'Errada. São elementos que sustentam ou afastam a plausibilidade da contribuição.' }
  ],
  comentario: 'Concausa exige contribuição efetiva, com magnitude e tempo de exposição compatíveis. Reconhecer nexo em tudo o que aparece durante o vínculo desqualifica o próprio instituto e prejudica quem tem nexo real.',
  pegadinha: 'Coincidência temporal não é contribuição causal — e ampliar demais o conceito enfraquece os casos legítimos.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.6-070', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os fatores que influenciam o retorno ao trabalho após afastamento prolongado, é CORRETO afirmar:',
  alts: [
    { t: 'Fatores não clínicos pesam tanto quanto o quadro clínico, e o afastamento prolongado por si reduz a chance de retorno', ok: true,
      why: 'Correta. É o achado mais consistente da literatura sobre retorno ao trabalho.' },
    { t: 'O desfecho é determinado principalmente pela gravidade clínica, que define a extensão da limitação funcional residual.', ok: false,
      why: 'Errada. Fatores organizacionais e psicossociais pesam de forma comparável ao quadro clínico.' },
    { t: 'Fatores não clínicos pesam tanto quanto o quadro, mas o tempo de afastamento em si não altera a probabilidade de retorno.', ok: false,
      why: 'Errada. Quanto mais longo, menor a probabilidade, independentemente do quadro inicial.' },
    { t: 'Fatores não clínicos pesam tanto quanto o quadro, exceto o conflito prévio com a empresa, alheio ao processo de retorno.', ok: false,
      why: 'Errada. É um dos preditores negativos mais consistentes do desfecho.' },
    { t: 'Fatores não clínicos pesam tanto quanto o quadro, mas a intervenção precoce não altera o desfecho do retorno.', ok: false,
      why: 'Errada. A intervenção precoce e coordenada é o que mais melhora o desfecho.' }
  ],
  comentario: 'Retorno ao trabalho depende menos do diagnóstico do que se supõe: expectativa, apoio da chefia, conflito prévio e tempo de afastamento pesam muito. E o próprio tempo afastado reduz a chance de voltar — por isso a intervenção precoce importa tanto.',
  pegadinha: 'Esperar a recuperação clínica completa antes de qualquer articulação de retorno consome a janela em que a intervenção funciona.',
  refs: ['Literatura sobre retorno ao trabalho', 'CIF — OMS'] },

{ id: 'q-6.1-080', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame de mudança de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser realizado antes da mudança efetiva de função, servindo de linha de base para o acompanhamento no novo risco', ok: true,
      why: 'Correta. Feito depois, perde a função de linha de base.' },
    { t: 'Pode ser realizado nos primeiros meses após a mudança, sem prejuízo, já que a exposição ainda é recente nesse período.', ok: false,
      why: 'Errada. A realização prévia é justamente o que estabelece a linha de base do novo risco.' },
    { t: 'Deve ser realizado antes da mudança, sendo dispensável quando o trabalhador permanece no mesmo setor da empresa.', ok: false,
      why: 'Errada. O fato gerador é a mudança de risco, não a mudança de setor.' },
    { t: 'Deve ser realizado antes da mudança, com conteúdo idêntico ao do exame periódico anterior do mesmo trabalhador.', ok: false,
      why: 'Errada. É dirigido ao novo risco a que o trabalhador passará a se expor.' },
    { t: 'Deve ser realizado antes da mudança, salvo quando ela se dá para função de menor exposição que a atual.', ok: false,
      why: 'Errada. A mudança de risco, em qualquer direção, é o fato gerador do exame.' }
  ],
  comentario: 'Mudança de risco: exame antes da mudança, dirigido ao novo risco, servindo de linha de base. O gatilho é a alteração da exposição, não a troca de setor nem a direção da mudança.',
  pegadinha: 'Realizar depois transforma a linha de base do novo risco em registro já contaminado por ele.',
  refs: ['NR-7'] },

{ id: 'q-6.2-080', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a definição legal de deficiência auditiva para fins de enquadramento, é CORRETO afirmar:',
  alts: [
    { t: 'Segue critério normativo de grau e de bilateralidade e não se confunde com a perda auditiva induzida por ruído ocupacional', ok: true,
      why: 'Correta. São enquadramentos com finalidades diferentes e não se equivalem.' },
    { t: 'Segue critério audiológico amplo, de modo que qualquer perda auditiva documentada caracteriza deficiência para fins de cota.', ok: false,
      why: 'Errada. Há critério normativo específico de grau e de bilateralidade.' },
    { t: 'Segue critério normativo de grau, sendo a perda unilateral suficiente para caracterizar deficiência para esse fim.', ok: false,
      why: 'Errada. O critério normativo se refere à perda bilateral.' },
    { t: 'Segue critério normativo, e o reconhecimento de perda auditiva ocupacional gera automaticamente esse enquadramento.', ok: false,
      why: 'Errada. São reconhecimentos com critérios e finalidades distintos.' },
    { t: 'Segue critério normativo de grau e bilateralidade, sendo a audiometria isolada suficiente para o laudo caracterizador.', ok: false,
      why: 'Errada. O laudo exige avaliação que considere também a funcionalidade e as barreiras.' }
  ],
  comentario: 'Deficiência auditiva para cota tem critério normativo próprio de grau e bilateralidade; perda induzida por ruído é doença ocupacional. Reconhecer uma não produz automaticamente a outra.',
  pegadinha: 'Tratar todo trabalhador com perda auditiva ocupacional como enquadrável na cota confunde dois institutos.',
  refs: ['Decreto sobre critérios de deficiência', 'Lei nº 13.146/2015', 'NR-7 — Anexo I'] },

{ id: 'q-6.3-080', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 38 anos, operador de empilhadeira, apresenta hipertensão arterial de difícil controle e cefaleia frequente. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Considera o controle atual, a lesão de órgão-alvo e o risco de evento agudo, podendo indicar restrição temporária.', ok: true,
      why: 'Correta. Restrição temporária com retomada após controle é diferente de inaptidão definitiva.' },
    { t: 'Considera o risco de evento agudo durante a operação, e a hipertensão arterial implica inaptidão definitiva para essas funções.', ok: false,
      why: 'Errada. Controlada, a maioria dos hipertensos exerce essas funções normalmente.' },
    { t: 'Considera a lesão de órgão-alvo, sendo o grau de controle pressórico irrelevante para a operação de máquina.', ok: false,
      why: 'Errada. O risco de evento agudo durante a operação é justamente o que se avalia.' },
    { t: 'Considera o controle atual e o risco de evento agudo, dispensada a investigação de lesão de órgão-alvo nessa avaliação.', ok: false,
      why: 'Errada. É elemento relevante da estratificação de risco do trabalhador.' },
    { t: 'Considera o controle atual e a lesão de órgão-alvo, devendo a restrição ser comunicada à chefia com o diagnóstico.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional; dados clínicos permanecem sob sigilo.' }
  ],
  comentario: 'Hipertensão não inabilita; hipertensão descontrolada em função de risco pede restrição temporária até estabilizar. Avalia-se controle e lesão de órgão-alvo — e à chefia vai a restrição, nunca o número da pressão.',
  pegadinha: 'Transformar restrição temporária em inaptidão definitiva penaliza uma condição tratável e muito prevalente.',
  refs: ['Diretrizes brasileiras de hipertensão', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-6.4-080', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o atendimento inicial a trabalhador com exposição maciça a agente químico, é CORRETO afirmar:',
  alts: [
    { t: 'A descontaminação precede o atendimento definitivo e protege também a equipe, e a ficha de segurança orienta a conduta', ok: true,
      why: 'Correta. Descontaminar cedo protege a vítima e evita contaminação secundária da equipe.' },
    { t: 'O atendimento clínico definitivo precede a descontaminação, por ser a estabilização a prioridade em exposição maciça.', ok: false,
      why: 'Errada. A descontaminação inicial é prioritária e reduz a dose absorvida.' },
    { t: 'A descontaminação precede o atendimento, sendo a remoção de roupas contaminadas medida secundária nesse conjunto.', ok: false,
      why: 'Errada. A roupa mantém o agente em contato com a pele e continua a expor.' },
    { t: 'A descontaminação precede o atendimento, e a ficha de informações de segurança não é útil no atendimento de urgência.', ok: false,
      why: 'Errada. Traz orientações específicas de primeiros socorros e de risco para a equipe.' },
    { t: 'A descontaminação precede o atendimento e protege a vítima, sendo desprezível o risco de contaminação da equipe.', ok: false,
      why: 'Errada. É risco real e documentado em atendimentos de exposição química.' }
  ],
  comentario: 'Exposição química maciça: descontaminar primeiro — tirar roupa, lavar em abundância — depois tratar. A ficha de segurança do produto orienta a conduta, e a contaminação secundária da equipe é risco real.',
  pegadinha: 'Levar a vítima vestida e contaminada para dentro do serviço de saúde expõe a equipe e mantém a absorção.',
  refs: ['Fichas de Informações de Segurança de Produtos Químicos', 'Protocolos de atendimento a emergências químicas'] },

{ id: 'q-5.2-080', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso da lista de doenças relacionadas ao trabalho do anexo previdenciário, é CORRETO afirmar:',
  alts: [
    { t: 'Relaciona agentes a entidades mórbidas como referência, sem esgotar as possibilidades de reconhecimento no caso concreto.', ok: true,
      why: 'Correta. A lista é exemplificativa e orientadora, não exaustiva.' },
    { t: 'Relaciona agentes a entidades mórbidas de forma exaustiva, limitando o reconhecimento às associações nela previstas.', ok: false,
      why: 'Errada. O reconhecimento no caso concreto é possível mesmo fora da lista.' },
    { t: 'Relaciona agentes a entidades mórbidas, e a presença da associação dispensa demonstrar a exposição naquele caso.', ok: false,
      why: 'Errada. A exposição efetiva precisa ser demonstrada em cada caso.' },
    { t: 'Relaciona entidades mórbidas como referência, organizando-se apenas por doença, sem entrada correspondente por agente.', ok: false,
      why: 'Errada. É organizada em duas entradas, por agente e por doença.' },
    { t: 'Relaciona agentes a entidades mórbidas, substituindo a análise individual do caso pelo enquadramento na associação prevista.', ok: false,
      why: 'Errada. Orienta a análise, mas não a substitui.' }
  ],
  comentario: 'A lista é referência de dupla entrada — por agente e por doença — orientadora e não exaustiva. Estar nela não dispensa demonstrar exposição; não estar não impede o reconhecimento.',
  pegadinha: 'Usar a lista como limite fechado nega reconhecimento a associações demonstráveis no caso concreto.',
  refs: ['Decreto nº 3.048/1999 — Anexo II', 'Ministério da Saúde — doenças relacionadas ao trabalho'] }

);
