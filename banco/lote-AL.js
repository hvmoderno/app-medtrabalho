/* Lote AL — 4.4, 4.5, 4.6, 4.8, 5.4, 5.5, 4.10, 6.2, 6.3. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-120', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o teste de contato aplicado à investigação de dermatoses ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Ele identifica sensibilização a substâncias testadas, mas a bateria padrão pode não conter o agente presente no trabalho — o que exige testar também substâncias do ambiente laboral, em concentrações e veículos adequados, sob risco de sensibilizar o próprio paciente se aplicado sem critério.', ok: true,
      why: 'Correta. Testar material bruto do trabalho sem preparo adequado pode causar sensibilização ativa.' },
    { t: 'A bateria padrão cobre os principais agentes ocupacionais de qualquer atividade.', ok: false,
      why: 'Errada. Muitos agentes ocupacionais específicos não constam da bateria padrão.' },
    { t: 'Substâncias trazidas pelo trabalhador podem ser aplicadas na forma bruta, sem diluição.', ok: false,
      why: 'Errada. Concentração e veículo inadequados produzem reação irritativa ou sensibilização ativa.' },
    { t: 'A leitura em tempo único é suficiente para a interpretação.', ok: false,
      why: 'Errada. Leituras em tempos distintos permitem diferenciar reação irritativa de alérgica.' },
    { t: 'Resultado positivo dispensa a análise de relevância clínica e ocupacional.', ok: false,
      why: 'Errada. É preciso demonstrar exposição real àquele agente e correlação com o quadro.' }
  ],
  comentario: 'Teste de contato: bateria padrão pode não ter o agente do trabalho, testar material bruto sensibiliza, leitura em tempos distintos separa irritativa de alérgica e todo positivo pede análise de relevância clínica.',
  pegadinha: 'Aplicar o produto que o trabalhador trouxe, puro, é um procedimento que pode criar a alergia que se investigava.',
  refs: ['Salim — Dermatoses Ocupacionais', 'Diretrizes de dermatologia ocupacional'] },

{ id: 'q-4.5-110', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o trauma acústico agudo, é CORRETO afirmar:',
  alts: [
    { t: 'Decorre de exposição única a evento sonoro de altíssima intensidade, com instalação imediata e possível perda permanente, sendo situação de avaliação urgente — o que o distingue da perda induzida por ruído, de instalação lenta e progressiva.', ok: true,
      why: 'Correta. Evento único, dano imediato, avaliação com urgência.' },
    { t: 'O trauma acústico agudo tem a mesma evolução da perda induzida por ruído.', ok: false,
      why: 'Errada. Um é evento único e imediato; o outro é lento e cumulativo.' },
    { t: 'A perda decorrente do trauma acústico é sempre reversível.', ok: false,
      why: 'Errada. Pode ser permanente, sobretudo quando a avaliação é tardia.' },
    { t: 'A avaliação pode aguardar o próximo exame periódico.', ok: false,
      why: 'Errada. É situação de avaliação urgente.' },
    { t: 'Explosões e disparos não são causas ocupacionais relevantes de trauma acústico.', ok: false,
      why: 'Errada. São causas típicas, em mineração, demolição e atividades de segurança.' }
  ],
  comentario: 'Trauma acústico agudo é evento único de altíssima intensidade — explosão, disparo — com dano imediato e possivelmente permanente. Avaliação urgente, não no próximo periódico.',
  pegadinha: 'Tratar o trauma agudo com a lógica temporal da perda cumulativa perde a janela de avaliação.',
  refs: ['NR-7 — Anexo I', 'Diretrizes de audiologia ocupacional'] },

{ id: 'q-4.6-110', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a violência no trabalho como fator de risco ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Ela abrange agressões físicas, verbais e ameaças, inclusive por terceiros como clientes e usuários, com repercussões documentadas em saúde mental — e a exposição a violência de terceiros é risco a inventariar e a controlar por medidas de organização e ambiente.', ok: true,
      why: 'Correta. Violência de terceiros é risco ocupacional, não fatalidade do atendimento ao público.' },
    { t: 'A violência praticada por clientes e usuários não constitui risco ocupacional.', ok: false,
      why: 'Errada. É risco reconhecido e gerenciável, típico de atendimento ao público e saúde.' },
    { t: 'Apenas a agressão física com lesão é relevante para a saúde do trabalhador.', ok: false,
      why: 'Errada. Ameaças e agressões verbais repetidas têm repercussão documentada.' },
    { t: 'A prevenção se resume ao treinamento do trabalhador para lidar com situações de conflito.', ok: false,
      why: 'Errada. Layout, dimensionamento de equipe, tempo de espera e protocolos são medidas de maior alcance.' },
    { t: 'A ocorrência de violência no trabalho não é objeto de registro nem de notificação.', ok: false,
      why: 'Errada. Deve ser registrada, e há notificação de violência em saúde.' }
  ],
  comentario: 'Violência de terceiros é risco ocupacional em atendimento ao público e saúde — inclusive ameaça e agressão verbal. Prevenir passa por fila, layout, dimensionamento e protocolo, não só por treinar quem apanha.',
  pegadinha: 'Reduzir a prevenção ao treinamento do atendente transfere ao trabalhador a gestão de um risco organizacional.',
  refs: ['OIT — Convenção 190', 'NR-1', 'Ministério da Saúde — notificação de violência'] },

{ id: 'q-4.8-110', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o registro de trabalhadores expostos a agentes cancerígenos, é CORRETO afirmar:',
  alts: [
    { t: 'A manutenção de registro nominal com período, agente e intensidade estimada de exposição é o que viabiliza o reconhecimento futuro e a vigilância pós-ocupacional — e sua ausência inviabiliza, décadas depois, qualquer reconstituição confiável.', ok: true,
      why: 'Correta. Sem registro, a exposição de trinta anos atrás vira palavra do trabalhador contra a empresa.' },
    { t: 'O registro nominal de expostos é dispensável quando há avaliação ambiental documentada.', ok: false,
      why: 'Errada. A avaliação descreve o ambiente; o registro vincula o trabalhador ao período de exposição.' },
    { t: 'O registro pode ser descartado após o encerramento das atividades com o agente.', ok: false,
      why: 'Errada. A latência exige guarda prolongada, muito além do fim da atividade.' },
    { t: 'A vigilância pós-ocupacional não tem previsão nem justificativa técnica.', ok: false,
      why: 'Errada. É justificada pela latência longa desses agravos.' },
    { t: 'O trabalhador não tem direito de receber informação sobre suas exposições registradas.', ok: false,
      why: 'Errada. Tem direito de conhecer a que foi exposto e por quanto tempo.' }
  ],
  comentario: 'Registro nominal com agente, período e intensidade é o que sustenta o nexo décadas depois — e o trabalhador tem direito de conhecê-lo. Avaliação ambiental descreve o lugar; o registro liga a pessoa ao tempo.',
  pegadinha: 'Confiar apenas na avaliação ambiental deixa sem prova quem passou por lá e por quanto tempo.',
  refs: ['NR-7', 'NR-9', 'IARC'] },

{ id: 'q-5.4-120', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a perícia de trabalhador com queixa de doença osteomuscular relacionada ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve confrontar o quadro clínico com a descrição concreta da atividade — gesto, força, repetitividade, postura e tempo de recuperação —, sendo insuficiente concluir apenas pela existência ou não de achado em exame de imagem.', ok: true,
      why: 'Correta. Sem descrever a atividade não há como julgar plausibilidade nem nexo.' },
    { t: 'A ausência de alteração em exame de imagem afasta o diagnóstico.', ok: false,
      why: 'Errada. Vários quadros osteomusculares relacionados ao trabalho não têm tradução em imagem.' },
    { t: 'A presença de alteração degenerativa em imagem afasta o nexo ocupacional.', ok: false,
      why: 'Errada. Alterações degenerativas são prevalentes e podem coexistir como concausa.' },
    { t: 'A descrição da atividade pode ser substituída pela denominação do cargo.', ok: false,
      why: 'Errada. O cargo não descreve gesto, força, repetitividade nem pausa.' },
    { t: 'O exame físico é dispensável quando há exames de imagem disponíveis.', ok: false,
      why: 'Errada. O exame físico é elemento central e insubstituível.' }
  ],
  comentario: 'Osteomuscular ocupacional se julga confrontando clínica e atividade concreta — gesto, força, repetição, postura, recuperação. Imagem normal não afasta e imagem degenerativa não exclui: ambas são coadjuvantes.',
  pegadinha: 'Decidir pela imagem é o atalho que produz tanto falso negativo quanto negativa de nexo mal fundamentada.',
  refs: ['Ministério da Saúde — LER/DORT', 'NR-17', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-110', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de capacidade laborativa e a possibilidade de reabilitação, é CORRETO afirmar:',
  alts: [
    { t: 'A conclusão por incapacidade permanente para todo e qualquer trabalho pressupõe que a reabilitação profissional tenha sido considerada e afastada — e concluir por ela sem essa análise antecipa uma exclusão definitiva que pode não corresponder à capacidade residual real.', ok: true,
      why: 'Correta. É a conclusão de maior consequência e a que mais exige fundamentação.' },
    { t: 'A incapacidade para a função habitual equivale a incapacidade para todo trabalho.', ok: false,
      why: 'Errada. São graus distintos, e a capacidade residual costuma permitir outras atividades.' },
    { t: 'A idade avançada, isoladamente, justifica a conclusão por incapacidade total.', ok: false,
      why: 'Errada. É fator a considerar na viabilidade da reabilitação, não critério isolado.' },
    { t: 'A escolaridade e a experiência prévia não influenciam a análise de reabilitação.', ok: false,
      why: 'Errada. São elementos que compõem a viabilidade concreta da requalificação.' },
    { t: 'A avaliação de reabilitação é etapa posterior e independente da conclusão pericial.', ok: false,
      why: 'Errada. A viabilidade de reabilitação integra a fundamentação da conclusão.' }
  ],
  comentario: 'Incapacidade para a função não é incapacidade para tudo. Antes de concluir por incapacidade total, considera-se a reabilitação — com idade, escolaridade e experiência entrando como fatores de viabilidade, não como critérios isolados.',
  pegadinha: 'Saltar da incapacidade para a função habitual à incapacidade total exclui definitivamente quem tinha capacidade residual aproveitável.',
  refs: ['Lei nº 8.213/1991', 'CIF — OMS', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-4.10-100', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação da situação vacinal na admissão e nos exames periódicos, é CORRETO afirmar:',
  alts: [
    { t: 'O levantamento da situação vacinal deve ser dirigido ao risco da função, com registro no prontuário e orientação ao trabalhador — e a recusa, além de registrada, deve ser reavaliada periodicamente, pois a decisão pode mudar com informação adequada.', ok: true,
      why: 'Correta. Recusa registrada não encerra o assunto; reabordar com informação muda decisões.' },
    { t: 'A avaliação vacinal deve ser idêntica para todas as funções da empresa.', ok: false,
      why: 'Errada. É dirigida ao risco específico de cada função.' },
    { t: 'A recusa registrada encerra definitivamente a abordagem do tema.', ok: false,
      why: 'Errada. A reabordagem periódica com informação adequada é conduta apropriada.' },
    { t: 'A comprovação documental da vacinação é dispensável, bastando o relato do trabalhador.', ok: false,
      why: 'Errada. A comprovação documental é o que permite decidir corretamente em uma exposição.' },
    { t: 'O registro da situação vacinal não integra o prontuário ocupacional.', ok: false,
      why: 'Errada. É informação essencial para a conduta em acidentes e exposições.' }
  ],
  comentario: 'Situação vacinal por risco de função, com comprovação documental registrada no prontuário — é ela que orienta a conduta no acidente. E recusa se registra e se reaborda, porque decisões mudam.',
  pegadinha: 'Aceitar o relato sem comprovação deixa a decisão do pós-acidente apoiada em memória.',
  refs: ['NR-7', 'NR-32', 'Programa Nacional de Imunizações'] },

{ id: 'q-6.2-110', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o acompanhamento de trabalhadores com deficiência após a admissão, é CORRETO afirmar:',
  alts: [
    { t: 'O acompanhamento deve verificar se as adaptações foram efetivamente implementadas, se a alocação corresponde ao acordado e se há barreiras atitudinais na equipe — sendo essas últimas frequentemente o obstáculo mais persistente à inclusão efetiva.', ok: true,
      why: 'Correta. Rampa se constrói; barreira atitudinal exige trabalho contínuo com a equipe.' },
    { t: 'Implementadas as adaptações físicas, a inclusão está assegurada.', ok: false,
      why: 'Errada. Barreiras atitudinais persistem e comprometem a permanência.' },
    { t: 'Barreiras atitudinais não integram o conceito legal de barreira.', ok: false,
      why: 'Errada. São expressamente previstas entre os tipos de barreira.' },
    { t: 'O acompanhamento é atribuição exclusiva da área de recursos humanos.', ok: false,
      why: 'Errada. O serviço de saúde ocupacional participa da verificação de compatibilidade e adaptações.' },
    { t: 'A rotatividade de trabalhadores com deficiência é indicador sem relevância para a gestão.', ok: false,
      why: 'Errada. Rotatividade elevada nesse grupo sinaliza falha nas adaptações ou no ambiente.' }
  ],
  comentario: 'Contratar não é incluir: verifica-se se a adaptação existe de fato, se a alocação corresponde ao combinado e se há barreira atitudinal. Rotatividade alta nesse grupo é o indicador que denuncia inclusão apenas formal.',
  pegadinha: 'Considerar a inclusão concluída na admissão ignora a barreira que não se resolve com obra.',
  refs: ['Lei nº 13.146/2015', 'Lei nº 8.213/1991 — art. 93'] },

{ id: 'q-6.3-110', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre obesidade, síndrome metabólica e trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O índice de massa corporal isolado não é critério de aptidão, devendo a avaliação considerar capacidade funcional, comorbidades e exigências reais da função — e condições de trabalho como turnos, sedentarismo imposto e oferta alimentar no local integram a determinação do quadro.', ok: true,
      why: 'Correta. O trabalho é parte do problema, não apenas o hábito do trabalhador.' },
    { t: 'O índice de massa corporal elevado justifica isoladamente a conclusão de inaptidão.', ok: false,
      why: 'Errada. A avaliação é funcional e considera a exigência real da função.' },
    { t: 'As condições de trabalho não influenciam o desenvolvimento de obesidade e síndrome metabólica.', ok: false,
      why: 'Errada. Turnos, sedentarismo imposto e oferta alimentar no local têm influência documentada.' },
    { t: 'Programas de emagrecimento com metas individuais são a resposta adequada da empresa.', ok: false,
      why: 'Errada. Meta corporal individual gera pressão e discriminação sem alterar os determinantes.' },
    { t: 'A avaliação de capacidade funcional é dispensável quando o índice de massa corporal é elevado.', ok: false,
      why: 'Errada. É justamente ela que determina a compatibilidade com a função.' }
  ],
  comentario: 'Índice de massa corporal não decide aptidão — capacidade funcional e exigência da função decidem. E o trabalho participa da determinação do quadro: turno, sedentarismo imposto e o que a cantina oferece.',
  pegadinha: 'Meta individual de emagrecimento parece cuidado e é pressão sobre o indivíduo por determinantes que a empresa controla.',
  refs: ['NR-7', 'Diretrizes brasileiras de obesidade', 'OMS'] }

);
