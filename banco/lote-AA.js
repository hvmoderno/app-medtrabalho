/* Lote AA — 4.7, 4.9, 5.3, 5.6, 6.1, 6.2, 6.3, 6.4, 5.2. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.7-080', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o transtorno de estresse pós-traumático em contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Pode decorrer de exposição a evento traumático no trabalho, inclusive por testemunho ou por exposição repetida a relatos e cenas, como ocorre em socorristas e profissionais de segurança — e o suporte organizacional pós-evento influencia o desfecho.', ok: true,
      why: 'Correta. Exposição indireta e repetida é forma reconhecida em determinadas ocupações.' },
    { t: 'Só a vítima direta do evento pode desenvolver o quadro.', ok: false,
      why: 'Errada. Testemunhar e a exposição repetida a detalhes também são formas reconhecidas.' },
    { t: 'O quadro se instala sempre imediatamente após o evento.', ok: false,
      why: 'Errada. Há formas de manifestação tardia.' },
    { t: 'O suporte oferecido após o evento não influencia a evolução.', ok: false,
      why: 'Errada. A resposta organizacional é fator relevante no desfecho.' },
    { t: 'O retorno imediato à mesma função é a conduta indicada em todos os casos.', ok: false,
      why: 'Errada. A conduta é individualizada e o retorno precisa ser planejado.' }
  ],
  comentario: 'No trabalho, o trauma alcança quem viveu, quem viu e quem ouve repetidamente — socorrista, segurança, quem atende emergência. Manifestação pode ser tardia, e a resposta da organização depois do evento muda o desfecho.',
  pegadinha: 'Restringir o quadro à vítima direta deixa fora as ocupações de maior incidência.',
  refs: ['Ministério da Saúde — transtornos mentais relacionados ao trabalho', 'CID-11'] },

{ id: 'q-4.9-070', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre doenças transmissíveis em ambientes de trabalho com aglomeração, é CORRETO afirmar:',
  alts: [
    { t: 'Alojamentos, transporte coletivo de trabalhadores e refeitórios são pontos críticos de transmissão frequentemente esquecidos porque a atenção se concentra no posto de trabalho — e a intervenção precisa alcançar toda a jornada, não apenas a atividade produtiva.', ok: true,
      why: 'Correta. O ônibus e o alojamento costumam transmitir mais que a linha de produção.' },
    { t: 'O risco de transmissão se concentra exclusivamente no posto de trabalho.', ok: false,
      why: 'Errada. Alojamento, transporte e refeitório são pontos críticos.' },
    { t: 'O transporte fornecido pela empresa não integra o escopo da prevenção.', ok: false,
      why: 'Errada. É ambiente sob responsabilidade da empresa e ponto de transmissão relevante.' },
    { t: 'Trabalhadores migrantes alojados não requerem abordagem específica.', ok: false,
      why: 'Errada. Condições de alojamento e barreiras de acesso à saúde exigem abordagem própria.' },
    { t: 'A vigilância de sintomáticos dispensa medidas ambientais nos espaços coletivos.', ok: false,
      why: 'Errada. Ventilação e ocupação dos espaços coletivos são determinantes da transmissão.' }
  ],
  comentario: 'Em surto ocupacional, olhe o ônibus, o alojamento e o refeitório antes da linha de produção. A prevenção alcança a jornada inteira, incluindo ventilação e ocupação dos espaços coletivos.',
  pegadinha: 'Concentrar a investigação no posto de trabalho deixa intactos os três ambientes de maior contato.',
  refs: ['NR-24', 'NR-31', 'Protocolos de controle de surtos ocupacionais'] },

{ id: 'q-5.3-070', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a distinção entre concausa e causa exclusiva não ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A concausa exige que a exposição ocupacional tenha contribuído efetivamente para o resultado; quando o trabalho não teve qualquer participação no desencadeamento ou agravamento, não há nexo — de modo que a mera coincidência temporal entre trabalho e doença não basta.', ok: true,
      why: 'Correta. Concausa exige contribuição demonstrável, não apenas simultaneidade.' },
    { t: 'A simples ocorrência da doença durante o vínculo caracteriza concausa.', ok: false,
      why: 'Errada. É preciso demonstrar contribuição efetiva da exposição.' },
    { t: 'Qualquer doença em trabalhador exposto configura nexo por concausa.', ok: false,
      why: 'Errada. A exposição precisa ter relação plausível com o agravo específico.' },
    { t: 'A ausência de contribuição do trabalho não impede o reconhecimento de concausa.', ok: false,
      why: 'Errada. Sem contribuição não há concausa.' },
    { t: 'A concausa dispensa a análise da magnitude e do tempo de exposição.', ok: false,
      why: 'Errada. São elementos que sustentam ou afastam a plausibilidade da contribuição.' }
  ],
  comentario: 'Concausa exige contribuição efetiva, com magnitude e tempo de exposição compatíveis. Reconhecer nexo em tudo o que aparece durante o vínculo desqualifica o próprio instituto e prejudica quem tem nexo real.',
  pegadinha: 'Coincidência temporal não é contribuição causal — e ampliar demais o conceito enfraquece os casos legítimos.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.6-070', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os fatores que influenciam o retorno ao trabalho após afastamento prolongado, é CORRETO afirmar:',
  alts: [
    { t: 'Fatores não clínicos — expectativa do trabalhador, apoio da chefia, conflito com a empresa, características da função e tempo de afastamento — pesam tanto quanto o quadro clínico no desfecho, e o afastamento prolongado por si reduz a probabilidade de retorno.', ok: true,
      why: 'Correta. É o achado mais consistente da literatura sobre retorno ao trabalho.' },
    { t: 'O desfecho do retorno é determinado principalmente pela gravidade clínica.', ok: false,
      why: 'Errada. Fatores organizacionais e psicossociais pesam de forma comparável.' },
    { t: 'O tempo de afastamento não influencia a probabilidade de retorno.', ok: false,
      why: 'Errada. Quanto mais longo, menor a probabilidade, independentemente do quadro inicial.' },
    { t: 'O conflito prévio com a empresa não interfere no processo de retorno.', ok: false,
      why: 'Errada. É um dos preditores negativos mais consistentes.' },
    { t: 'A intervenção precoce não altera o desfecho do retorno ao trabalho.', ok: false,
      why: 'Errada. A intervenção precoce e coordenada é o que mais melhora o desfecho.' }
  ],
  comentario: 'Retorno ao trabalho depende menos do diagnóstico do que se supõe: expectativa, apoio da chefia, conflito prévio e tempo de afastamento pesam muito. E o próprio tempo afastado reduz a chance de voltar — por isso a intervenção precoce importa tanto.',
  pegadinha: 'Esperar a recuperação clínica completa antes de qualquer articulação de retorno consome a janela em que a intervenção funciona.',
  refs: ['Literatura sobre retorno ao trabalho', 'CIF — OMS'] },

{ id: 'q-6.1-080', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame de mudança de riscos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser realizado antes da mudança efetiva de função ou de exposição, para documentar o estado de saúde no início do novo risco e verificar a compatibilidade — servindo de linha de base para o acompanhamento posterior naquele risco.', ok: true,
      why: 'Correta. Feito depois, perde a função de linha de base.' },
    { t: 'Pode ser realizado nos primeiros meses após a mudança sem prejuízo.', ok: false,
      why: 'Errada. A realização prévia é o que estabelece a linha de base do novo risco.' },
    { t: 'É dispensável quando o trabalhador permanece no mesmo setor.', ok: false,
      why: 'Errada. O critério é a mudança de risco, não a de setor.' },
    { t: 'Seu conteúdo é idêntico ao do exame periódico anterior.', ok: false,
      why: 'Errada. É dirigido ao novo risco a que o trabalhador passará a se expor.' },
    { t: 'A mudança para função com menor exposição dispensa o exame.', ok: false,
      why: 'Errada. A mudança de risco, em qualquer direção, é o fato gerador.' }
  ],
  comentario: 'Mudança de risco: exame antes da mudança, dirigido ao novo risco, servindo de linha de base. O gatilho é a alteração da exposição, não a troca de setor nem a direção da mudança.',
  pegadinha: 'Realizar depois transforma a linha de base do novo risco em registro já contaminado por ele.',
  refs: ['NR-7'] },

{ id: 'q-6.2-080', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a definição legal de deficiência auditiva para fins de enquadramento, é CORRETO afirmar:',
  alts: [
    { t: 'A caracterização segue critério normativo definido em termos de perda em frequências determinadas e bilateralidade, e não se confunde com a perda auditiva induzida por ruído reconhecida como doença ocupacional — que segue lógica e finalidade distintas.', ok: true,
      why: 'Correta. São enquadramentos com finalidades diferentes e não se equivalem.' },
    { t: 'Qualquer perda auditiva caracteriza deficiência para fins de cota.', ok: false,
      why: 'Errada. Há critério normativo específico de grau e bilateralidade.' },
    { t: 'Perda auditiva unilateral sempre caracteriza deficiência para esse fim.', ok: false,
      why: 'Errada. O critério normativo se refere à perda bilateral.' },
    { t: 'O reconhecimento de perda auditiva ocupacional gera automaticamente o enquadramento como pessoa com deficiência.', ok: false,
      why: 'Errada. São reconhecimentos com critérios e finalidades distintos.' },
    { t: 'A audiometria isolada é suficiente para o laudo caracterizador.', ok: false,
      why: 'Errada. O laudo exige avaliação que considere também a funcionalidade e as barreiras.' }
  ],
  comentario: 'Deficiência auditiva para cota tem critério normativo próprio de grau e bilateralidade; perda induzida por ruído é doença ocupacional. Reconhecer uma não produz automaticamente a outra.',
  pegadinha: 'Tratar todo trabalhador com perda auditiva ocupacional como enquadrável na cota confunde dois institutos.',
  refs: ['Decreto sobre critérios de deficiência', 'Lei nº 13.146/2015', 'NR-7 — Anexo I'] },

{ id: 'q-6.3-080', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 38 anos, operador de empilhadeira, apresenta hipertensão arterial de difícil controle e cefaleia frequente. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação de aptidão para a função de risco deve considerar o controle atual, a presença de lesão de órgão-alvo e o risco de evento agudo durante a operação — podendo indicar restrição temporária até a estabilização, com retomada após controle demonstrado.', ok: true,
      why: 'Correta. Restrição temporária com retomada é diferente de inaptidão definitiva.' },
    { t: 'A hipertensão arterial implica inaptidão definitiva para funções de risco.', ok: false,
      why: 'Errada. Controlada, a maioria dos hipertensos exerce essas funções normalmente.' },
    { t: 'O controle inadequado não interfere na avaliação de aptidão para operação de máquina.', ok: false,
      why: 'Errada. O risco de evento agudo durante a operação é justamente o que se avalia.' },
    { t: 'A investigação de lesão de órgão-alvo é dispensável nessa avaliação.', ok: false,
      why: 'Errada. É elemento relevante da estratificação de risco.' },
    { t: 'A restrição deve ser comunicada à chefia com o diagnóstico e os valores pressóricos.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional; dados clínicos permanecem sob sigilo.' }
  ],
  comentario: 'Hipertensão não inabilita; hipertensão descontrolada em função de risco pede restrição temporária até estabilizar. Avalia-se controle e lesão de órgão-alvo — e à chefia vai a restrição, nunca o número da pressão.',
  pegadinha: 'Transformar restrição temporária em inaptidão definitiva penaliza uma condição tratável e muito prevalente.',
  refs: ['Diretrizes brasileiras de hipertensão', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-6.4-080', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o atendimento inicial a trabalhador com exposição maciça a agente químico, é CORRETO afirmar:',
  alts: [
    { t: 'A descontaminação precede o atendimento clínico definitivo e protege também a equipe, incluindo remoção de roupas contaminadas e lavagem abundante — e a identificação do agente pela ficha de informações de segurança orienta a conduta específica.', ok: true,
      why: 'Correta. Descontaminar cedo protege a vítima e evita contaminação secundária da equipe.' },
    { t: 'O atendimento clínico deve preceder qualquer descontaminação.', ok: false,
      why: 'Errada. A descontaminação inicial é prioritária e reduz a dose absorvida.' },
    { t: 'A remoção de roupas contaminadas é medida secundária.', ok: false,
      why: 'Errada. A roupa mantém o agente em contato e continua a expor.' },
    { t: 'A ficha de informações de segurança do produto não é útil no atendimento de urgência.', ok: false,
      why: 'Errada. Traz orientações específicas de primeiros socorros e de risco para a equipe.' },
    { t: 'A contaminação secundária da equipe de atendimento é risco desprezível.', ok: false,
      why: 'Errada. É risco real e documentado em atendimentos de exposição química.' }
  ],
  comentario: 'Exposição química maciça: descontaminar primeiro — tirar roupa, lavar em abundância — depois tratar. A ficha de segurança do produto orienta a conduta, e a contaminação secundária da equipe é risco real.',
  pegadinha: 'Levar a vítima vestida e contaminada para dentro do serviço de saúde expõe a equipe e mantém a absorção.',
  refs: ['Fichas de Informações de Segurança de Produtos Químicos', 'Protocolos de atendimento a emergências químicas'] },

{ id: 'q-5.2-080', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso da lista de doenças relacionadas ao trabalho do anexo previdenciário, é CORRETO afirmar:',
  alts: [
    { t: 'Ela relaciona agentes ou fatores de risco a entidades mórbidas e serve de referência para o reconhecimento, sem esgotar as possibilidades — de modo que a ausência de determinada associação na lista não impede o reconhecimento demonstrado no caso concreto.', ok: true,
      why: 'Correta. A lista é exemplificativa e orientadora, não exaustiva.' },
    { t: 'A lista é exaustiva e limita o reconhecimento às associações nela previstas.', ok: false,
      why: 'Errada. O reconhecimento no caso concreto é possível fora dela.' },
    { t: 'A presença da associação na lista dispensa a demonstração da exposição no caso.', ok: false,
      why: 'Errada. A exposição efetiva precisa ser demonstrada.' },
    { t: 'A lista se organiza apenas por entidade mórbida, sem referência aos agentes.', ok: false,
      why: 'Errada. É organizada em duas entradas, por agente e por doença.' },
    { t: 'A lista substitui a análise individual do caso.', ok: false,
      why: 'Errada. Orienta a análise, mas não a substitui.' }
  ],
  comentario: 'A lista é referência de dupla entrada — por agente e por doença — orientadora e não exaustiva. Estar nela não dispensa demonstrar exposição; não estar não impede o reconhecimento.',
  pegadinha: 'Usar a lista como limite fechado nega reconhecimento a associações demonstráveis no caso concreto.',
  refs: ['Decreto nº 3.048/1999 — Anexo II', 'Ministério da Saúde — doenças relacionadas ao trabalho'] }

);
