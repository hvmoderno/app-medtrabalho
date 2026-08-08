/* Lote T — 6.1, 3.2, 5.1, 5.5, 7.6, 7.7, 6.4. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-070', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame periódico e sua periodicidade, é CORRETO afirmar:',
  alts: [
    { t: 'A periodicidade decorre do risco a que o trabalhador está exposto, da idade e da existência de condições que exijam acompanhamento mais próximo — podendo ser menor que a anual quando o risco justifica, e o exame deve ser dirigido aos efeitos esperados daquela exposição.', ok: true,
      why: 'Correta. Periodicidade e conteúdo derivam do risco, não de rotina única.' },
    { t: 'O exame periódico é sempre anual para todos os trabalhadores.', ok: false,
      why: 'Errada. Há situações com periodicidade menor definidas pelo risco e pela idade.' },
    { t: 'O conteúdo do exame independe do agente a que o trabalhador se expõe.', ok: false,
      why: 'Errada. É dirigido aos efeitos esperados daquela exposição específica.' },
    { t: 'O exame periódico substitui a avaliação ambiental do posto.', ok: false,
      why: 'Errada. São ações complementares, e a vigilância da saúde não mede exposição.' },
    { t: 'Resultado normal no periódico permite reduzir as medidas de controle no ambiente.', ok: false,
      why: 'Errada. A ausência de efeito detectável não autoriza afrouxar o controle da exposição.' }
  ],
  comentario: 'Periodicidade e conteúdo saem do risco. Exame normal significa que ainda não há efeito detectável — nunca que se pode reduzir o controle ambiental.',
  pegadinha: 'Usar resultado normal como justificativa para afrouxar controles inverte a lógica da vigilância.',
  refs: ['NR-7', 'NR-1'] },

{ id: 'q-3.2-060', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise ergonômica do trabalho e o conceito de trabalho prescrito e trabalho real, é CORRETO afirmar:',
  alts: [
    { t: 'A diferença entre o que é prescrito e o que é efetivamente executado revela as regulações que o trabalhador cria para dar conta das exigências, e é nessa distância que se encontram tanto os riscos quanto as pistas para a transformação da situação.', ok: true,
      why: 'Correta. É o núcleo do método: analisar a atividade real, não o procedimento escrito.' },
    { t: 'A análise deve se basear no procedimento formalmente descrito pela empresa.', ok: false,
      why: 'Errada. O procedimento descreve o prescrito, que raramente coincide com o executado.' },
    { t: 'A diferença entre prescrito e real indica indisciplina do trabalhador.', ok: false,
      why: 'Errada. Indica que o prescrito não dá conta das variabilidades da situação real.' },
    { t: 'A análise ergonômica dispensa a participação dos trabalhadores.', ok: false,
      why: 'Errada. A participação é constitutiva do método.' },
    { t: 'A conclusão da análise se encerra no diagnóstico, sem proposta de transformação.', ok: false,
      why: 'Errada. A finalidade do método é transformar a situação de trabalho.' }
  ],
  comentario: 'Prescrito é o que se manda fazer; real é o que se faz para dar conta. A diferença não é indisciplina — é regulação diante da variabilidade, e é onde estão os riscos e as soluções.',
  pegadinha: 'Ler o desvio do procedimento como falha do trabalhador encerra a análise antes de ela começar.',
  refs: ['NR-17', 'Guérin et al. — Compreender o trabalho para transformá-lo'] },

{ id: 'q-5.1-055', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o preenchimento e a emissão da comunicação de acidente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A emissão é obrigação da empresa até o primeiro dia útil seguinte ao evento, mas a lei prevê emissão por outros legitimados — inclusive o próprio acidentado, seus dependentes, o sindicato, o médico assistente e a autoridade pública — na omissão da empresa.', ok: true,
      why: 'Correta. A legitimidade concorrente existe justamente para vencer a omissão.' },
    { t: 'Somente a empresa pode emitir a comunicação de acidente.', ok: false,
      why: 'Errada. Há legitimados concorrentes previstos em lei.' },
    { t: 'A emissão depende do reconhecimento prévio do nexo pela perícia.', ok: false,
      why: 'Errada. A comunicação é registro do evento; o nexo é analisado depois.' },
    { t: 'A emissão da comunicação implica assunção de culpa pela empresa.', ok: false,
      why: 'Errada. É registro obrigatório do evento, sem relação com apuração de culpa.' },
    { t: 'Acidentes sem afastamento dispensam a comunicação.', ok: false,
      why: 'Errada. A comunicação é devida também nesses casos.' }
  ],
  comentario: 'Comunicação de acidente: da empresa até o primeiro dia útil, mas emitível também por trabalhador, dependentes, sindicato, médico e autoridade pública. Independe de nexo reconhecido, de afastamento e não significa admissão de culpa.',
  pegadinha: 'Tratar a comunicação como confissão de culpa é a crença que sustenta a subnotificação empresarial.',
  refs: ['Lei nº 8.213/1991 — art. 22', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.5-070', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação do dano corporal e a quantificação de sequelas, é CORRETO afirmar:',
  alts: [
    { t: 'Tabelas de quantificação padronizam a estimativa do dano anatômico ou funcional, mas não substituem a análise da repercussão sobre a atividade concreta do avaliado — de modo que a mesma sequela pode ter impacto laborativo muito distinto conforme a ocupação.', ok: true,
      why: 'Correta. A tabela quantifica o dano; a repercussão laborativa depende da atividade.' },
    { t: 'A tabela de quantificação determina diretamente o grau de incapacidade laborativa.', ok: false,
      why: 'Errada. Dano corporal e incapacidade para o trabalho são conceitos distintos.' },
    { t: 'A avaliação de dano corporal dispensa a descrição das atividades exercidas.', ok: false,
      why: 'Errada. Sem ela não se avalia a repercussão funcional no trabalho.' },
    { t: 'Dano estético não integra a avaliação por não gerar limitação funcional.', ok: false,
      why: 'Errada. É categoria própria de dano, com repercussões reconhecidas.' },
    { t: 'Sequelas devem ser avaliadas antes da consolidação para agilizar o processo.', ok: false,
      why: 'Errada. A avaliação definitiva pressupõe a consolidação do quadro.' }
  ],
  comentario: 'Dano corporal e incapacidade laborativa não são a mesma coisa: a perda de uma falange pesa diferente para um pianista e para um vigilante. A tabela padroniza o dano; a atividade define a repercussão.',
  pegadinha: 'Converter percentual de tabela em grau de incapacidade laborativa pula a etapa que mais importa.',
  refs: ['Resoluções do CFM sobre perícia médica', 'CIF — OMS'] },

{ id: 'q-7.6-032', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do médico do trabalho diante de pressão da empresa para alterar conclusão de aptidão, é CORRETO afirmar:',
  alts: [
    { t: 'A conclusão é ato médico com autonomia técnica assegurada, e a alteração por pressão configura infração ética — cabendo ao médico registrar a fundamentação e, persistindo a pressão, comunicar ao conselho profissional.', ok: true,
      why: 'Correta. Autonomia técnica não é negociável com quem remunera o serviço.' },
    { t: 'A relação contratual com a empresa autoriza revisão da conclusão a pedido do contratante.', ok: false,
      why: 'Errada. A conclusão técnica não se subordina ao contratante.' },
    { t: 'A revisão só é admissível mediante ordem judicial.', ok: false,
      why: 'Errada. É admissível diante de novo elemento técnico, o que é diferente de pressão.' },
    { t: 'O médico deve evitar registrar a fundamentação para não gerar conflito.', ok: false,
      why: 'Errada. O registro fundamentado é justamente sua proteção e a do trabalhador.' },
    { t: 'A comunicação ao conselho profissional é medida desproporcional em qualquer caso.', ok: false,
      why: 'Errada. Diante de pressão persistente sobre ato médico, é medida legítima.' }
  ],
  comentario: 'Aptidão é ato médico com autonomia técnica. Rever diante de novo elemento técnico, sim; rever por pressão, não. O registro fundamentado protege o trabalhador e o próprio médico.',
  pegadinha: 'A relação contratual com a empresa é o argumento mais usado para tentar dobrar a conclusão técnica.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre medicina do trabalho'] },

{ id: 'q-7.7-033', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a emissão de atestados médicos por médico do trabalho e sua aceitação pela empresa, é CORRETO afirmar:',
  alts: [
    { t: 'O atestado deve conter identificação do paciente e do médico, data, tempo de afastamento e, mediante autorização expressa do paciente, o código diagnóstico — sendo indevida a recusa sistemática de atestados de assistentes externos como política da empresa.', ok: true,
      why: 'Correta. O código diagnóstico depende de autorização do paciente e a recusa sistemática não se sustenta.' },
    { t: 'O código diagnóstico deve constar obrigatoriamente em todo atestado.', ok: false,
      why: 'Errada. Depende de autorização expressa do paciente.' },
    { t: 'A empresa pode estabelecer que só aceita atestados de seus próprios serviços médicos.', ok: false,
      why: 'Errada. A recusa sistemática de atestados de assistentes é prática indevida.' },
    { t: 'O médico do trabalho pode desconsiderar atestado de assistente sem qualquer avaliação.', ok: false,
      why: 'Errada. A divergência exige avaliação e fundamentação.' },
    { t: 'A homologação de atestados pelo serviço médico da empresa dispensa registro.', ok: false,
      why: 'Errada. O ato deve ser registrado, como qualquer ato médico.' }
  ],
  comentario: 'Atestado: identificação, data, tempo de afastamento e código diagnóstico apenas com autorização do paciente. Divergir exige avaliação fundamentada — recusar por origem, como política, não se sustenta.',
  pegadinha: 'Exigir código diagnóstico em todo atestado inverte a regra: é o paciente quem autoriza.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atestado médico'] },

{ id: 'q-6.4-061', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o atendimento inicial a trabalhador vítima de acidente grave no local de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A sequência começa pela segurança da cena, para não gerar novas vítimas, seguida da avaliação e do suporte às funções vitais e do acionamento do serviço de emergência — e o local deve ser preservado para a investigação, salvo o necessário ao socorro.', ok: true,
      why: 'Correta. Cena segura primeiro; preservação do local depois, sem prejudicar o atendimento.' },
    { t: 'A prioridade é remover a vítima do local o mais rápido possível em qualquer situação.', ok: false,
      why: 'Errada. Remoção sem avaliação e sem cena segura pode agravar lesões e criar novas vítimas.' },
    { t: 'A preservação do local prevalece sobre o atendimento à vítima.', ok: false,
      why: 'Errada. O socorro tem prioridade; preserva-se o que for possível.' },
    { t: 'Em espaço confinado, o socorrista deve entrar imediatamente para resgatar a vítima.', ok: false,
      why: 'Errada. É a sequência que mais mata socorristas; o resgate exige equipamento e procedimento próprios.' },
    { t: 'A comunicação do acidente pode aguardar a conclusão da investigação interna.', ok: false,
      why: 'Errada. Há prazos próprios de comunicação, independentes da investigação.' }
  ],
  comentario: 'Cena segura, suporte às funções vitais, acionamento da emergência, preservação possível do local. Em espaço confinado, entrar sem equipamento é a decisão que transforma uma vítima em várias.',
  pegadinha: 'O impulso de entrar imediatamente para socorrer é humano e é a causa clássica de morte de socorristas em espaço confinado.',
  refs: ['NR-33', 'Protocolos de suporte básico de vida', 'NR-1'] },

{ id: 'q-6.4-062', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a organização do atendimento de urgência em empresas, é CORRETO afirmar:',
  alts: [
    { t: 'A empresa deve dispor de recursos compatíveis com os riscos e com o tempo de resposta do serviço externo, incluindo pessoal treinado, materiais adequados e fluxo definido de acionamento e transporte — com treinamento periódico e não apenas na implantação.', ok: true,
      why: 'Correta. O dimensionamento depende do risco e da distância do socorro externo.' },
    { t: 'A existência de caixa de primeiros socorros satisfaz a exigência.', ok: false,
      why: 'Errada. Sem pessoal treinado e fluxo definido, o material isolado não produz atendimento.' },
    { t: 'O treinamento inicial dispensa reciclagens periódicas.', ok: false,
      why: 'Errada. Habilidades de emergência se perdem sem prática periódica.' },
    { t: 'O dimensionamento independe da distância do serviço de emergência mais próximo.', ok: false,
      why: 'Errada. Tempo de resposta externo é determinante do que a empresa precisa manter.' },
    { t: 'Atividades em áreas remotas seguem o mesmo padrão das áreas urbanas.', ok: false,
      why: 'Errada. Quanto maior o isolamento, maior a capacidade própria exigida.' }
  ],
  comentario: 'O que a empresa precisa manter depende do risco e do tempo até o socorro externo. Caixa de primeiros socorros sem gente treinada e fluxo definido não é atendimento — e treinamento sem reciclagem não se sustenta.',
  pegadinha: 'Aplicar o mesmo padrão urbano em frente de trabalho remota deixa a equipe sem recurso na hora em que ele é insubstituível.',
  refs: ['NR-1', 'NR-31', 'Protocolos de urgência'] }

);
