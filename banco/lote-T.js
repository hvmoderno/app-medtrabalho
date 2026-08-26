/* Lote T — 6.1, 3.2, 5.1, 5.5, 7.6, 7.7, 6.4. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-070', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame periódico e sua periodicidade, é CORRETO afirmar:',
  alts: [
    { t: 'A periodicidade decorre do risco, da idade e da existência de condições que exijam acompanhamento', ok: true,
      why: 'Correta. Periodicidade e conteúdo derivam do risco, não de uma rotina única para todos.' },
    { t: 'A periodicidade é anual para todos os trabalhadores, o que uniformiza o acompanhamento na empresa.', ok: false,
      why: 'Errada. Há situações com periodicidade menor, definidas pelo risco e pela idade.' },
    { t: 'A periodicidade decorre do risco, independendo o conteúdo do exame do agente a que o trabalhador se expõe.', ok: false,
      why: 'Errada. É dirigido aos efeitos esperados daquela exposição específica.' },
    { t: 'A periodicidade decorre do risco, substituindo o exame periódico a avaliação ambiental daquele posto.', ok: false,
      why: 'Errada. São ações complementares, e a vigilância da saúde não mede exposição.' },
    { t: 'A periodicidade decorre do risco, permitindo o resultado normal reduzir as medidas de controle no ambiente.', ok: false,
      why: 'Errada. A ausência de efeito detectável não autoriza afrouxar o controle da exposição.' }
  ],
  comentario: 'Periodicidade e conteúdo saem do risco. Exame normal significa que ainda não há efeito detectável — nunca que se pode reduzir o controle ambiental.',
  pegadinha: 'Usar resultado normal como justificativa para afrouxar controles inverte a lógica da vigilância.',
  refs: ['NR-7', 'NR-1'] },

{ id: 'q-3.2-060', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise ergonômica do trabalho e o conceito de trabalho prescrito e trabalho real, é CORRETO afirmar:',
  alts: [
    { t: 'A distância entre prescrito e executado revela as regulações criadas, e nela estão riscos e pistas.', ok: true,
      why: 'Correta. É o núcleo do método: analisar a atividade real, não o procedimento escrito.' },
    { t: 'A análise deve partir do procedimento formalmente descrito pela empresa, que define a tarefa a executar.', ok: false,
      why: 'Errada. O procedimento descreve o prescrito, que raramente coincide com o executado.' },
    { t: 'A distância entre prescrito e executado é relevante e indica indisciplina por parte do trabalhador.', ok: false,
      why: 'Errada. Indica que o prescrito não dá conta das variabilidades da situação real.' },
    { t: 'A distância entre prescrito e executado revela regulações, apuráveis sem a participação dos trabalhadores.', ok: false,
      why: 'Errada. A participação é constitutiva do método.' },
    { t: 'A distância entre prescrito e executado revela riscos, encerrando-se a análise no diagnóstico obtido.', ok: false,
      why: 'Errada. A finalidade do método é transformar a situação de trabalho.' }
  ],
  comentario: 'Prescrito é o que se manda fazer; real é o que se faz para dar conta. A diferença não é indisciplina — é regulação diante da variabilidade, e é onde estão os riscos e as soluções.',
  pegadinha: 'Ler o desvio do procedimento como falha do trabalhador encerra a análise antes de ela começar.',
  refs: ['NR-17', 'Guérin et al. — Compreender o trabalho para transformá-lo'] },

{ id: 'q-5.1-055', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o preenchimento e a emissão da comunicação de acidente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'É obrigação da empresa até o primeiro dia útil seguinte, mas a lei prevê outros legitimados na omissão.', ok: true,
      why: 'Correta. A legitimidade concorrente existe justamente para vencer a omissão da empresa.' },
    { t: 'É obrigação da empresa até o primeiro dia útil seguinte, sendo ela a única legitimada a emitir a comunicação.', ok: false,
      why: 'Errada. Acidentado, dependentes, sindicato, médico e autoridade pública também podem.' },
    { t: 'É obrigação da empresa, dependendo a emissão do reconhecimento prévio do nexo pela perícia médica.', ok: false,
      why: 'Errada. A comunicação é registro do evento; o nexo é analisado depois.' },
    { t: 'É obrigação da empresa até o primeiro dia útil, implicando a emissão assunção de culpa pelo evento.', ok: false,
      why: 'Errada. É registro obrigatório do evento, sem relação com apuração de culpa.' },
    { t: 'É obrigação da empresa nos casos com afastamento, dispensando-a os acidentes sem afastamento do trabalho.', ok: false,
      why: 'Errada. A comunicação é devida também nesses casos.' }
  ],
  comentario: 'Comunicação de acidente: da empresa até o primeiro dia útil, mas emitível também por trabalhador, dependentes, sindicato, médico e autoridade pública. Independe de nexo reconhecido, de afastamento e não significa admissão de culpa.',
  pegadinha: 'Tratar a comunicação como confissão de culpa é a crença que sustenta a subnotificação empresarial.',
  refs: ['Lei nº 8.213/1991 — art. 22', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.5-070', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação do dano corporal e a quantificação de sequelas, é CORRETO afirmar:',
  alts: [
    { t: 'As tabelas padronizam o dano anatômico, mas não substituem a análise da repercussão na atividade', ok: true,
      why: 'Correta. A mesma sequela tem impacto laborativo muito distinto conforme a ocupação.' },
    { t: 'As tabelas padronizam a estimativa do dano e determinam diretamente o grau de incapacidade laborativa.', ok: false,
      why: 'Errada. Dano corporal e incapacidade para o trabalho são conceitos distintos.' },
    { t: 'As tabelas padronizam o dano anatômico, dispensando a avaliação a descrição das atividades exercidas.', ok: false,
      why: 'Errada. Sem ela não se avalia a repercussão funcional no trabalho.' },
    { t: 'As tabelas padronizam o dano, ficando o dano estético fora da avaliação por não gerar limitação funcional.', ok: false,
      why: 'Errada. É categoria própria de dano, com repercussões reconhecidas.' },
    { t: 'As tabelas padronizam o dano, devendo as sequelas ser avaliadas antes da consolidação para agilizar.', ok: false,
      why: 'Errada. A avaliação definitiva pressupõe a consolidação do quadro.' }
  ],
  comentario: 'Dano corporal e incapacidade laborativa não são a mesma coisa: a perda de uma falange pesa diferente para um pianista e para um vigilante. A tabela padroniza o dano; a atividade define a repercussão.',
  pegadinha: 'Converter percentual de tabela em grau de incapacidade laborativa pula a etapa que mais importa.',
  refs: ['Resoluções do CFM sobre perícia médica', 'CIF — OMS'] },

{ id: 'q-7.6-032', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do médico do trabalho diante de pressão da empresa para alterar conclusão de aptidão, é CORRETO afirmar:',
  alts: [
    { t: 'A conclusão é ato médico com autonomia assegurada, e alterá-la por pressão configura infração ética.', ok: true,
      why: 'Correta. Autonomia técnica não é negociável com quem remunera o serviço.' },
    { t: 'A conclusão é ato médico, autorizando a relação contratual sua revisão a pedido da empresa contratante.', ok: false,
      why: 'Errada. A conclusão técnica não se subordina ao contratante.' },
    { t: 'A conclusão é ato médico com autonomia assegurada, sendo sua revisão admissível só por ordem judicial.', ok: false,
      why: 'Errada. É admissível diante de novo elemento técnico, o que é diferente de pressão.' },
    { t: 'A conclusão é ato médico, devendo o médico evitar registrar a fundamentação para não gerar conflito.', ok: false,
      why: 'Errada. O registro fundamentado é justamente sua proteção e a do trabalhador.' },
    { t: 'A conclusão é ato médico, sendo a comunicação ao conselho medida desproporcional em qualquer caso.', ok: false,
      why: 'Errada. Diante de pressão persistente sobre ato médico, é medida legítima.' }
  ],
  comentario: 'Aptidão é ato médico com autonomia técnica. Rever diante de novo elemento técnico, sim; rever por pressão, não. O registro fundamentado protege o trabalhador e o próprio médico.',
  pegadinha: 'A relação contratual com a empresa é o argumento mais usado para tentar dobrar a conclusão técnica.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre medicina do trabalho'] },

{ id: 'q-7.7-033', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a emissão de atestados médicos por médico do trabalho e sua aceitação pela empresa, é CORRETO afirmar:',
  alts: [
    { t: 'Deve trazer identificação, data e tempo de afastamento, e o código diagnóstico só com autorização', ok: true,
      why: 'Correta. E a recusa sistemática de atestados de assistentes externos não se sustenta.' },
    { t: 'Deve trazer identificação e tempo de afastamento, constando o código diagnóstico obrigatoriamente em todos.', ok: false,
      why: 'Errada. Depende de autorização expressa do paciente.' },
    { t: 'Deve trazer identificação e data, podendo a empresa aceitar apenas atestados de seus próprios serviços.', ok: false,
      why: 'Errada. A recusa sistemática de atestados de assistentes é prática indevida.' },
    { t: 'Deve trazer identificação e data, podendo o médico do trabalho desconsiderar atestado de assistente sem avaliação.', ok: false,
      why: 'Errada. A divergência exige avaliação e fundamentação.' },
    { t: 'Deve trazer identificação e data, dispensando registro a homologação pelo serviço médico da empresa.', ok: false,
      why: 'Errada. O ato deve ser registrado, como qualquer ato médico.' }
  ],
  comentario: 'Atestado: identificação, data, tempo de afastamento e código diagnóstico apenas com autorização do paciente. Divergir exige avaliação fundamentada — recusar por origem, como política, não se sustenta.',
  pegadinha: 'Exigir código diagnóstico em todo atestado inverte a regra: é o paciente quem autoriza.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atestado médico'] },

{ id: 'q-6.4-061', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o atendimento inicial a trabalhador vítima de acidente grave no local de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Começa pela segurança da cena, seguida do suporte às funções vitais e do acionamento da emergência.', ok: true,
      why: 'Correta. Cena segura primeiro; preservação do local depois, sem prejudicar o atendimento.' },
    { t: 'Começa pela remoção da vítima do local o mais rápido possível, em qualquer situação de acidente grave.', ok: false,
      why: 'Errada. Remoção sem avaliação e sem cena segura agrava lesões e cria novas vítimas.' },
    { t: 'Começa pela preservação do local para a investigação, que prevalece sobre o atendimento à vítima.', ok: false,
      why: 'Errada. O socorro tem prioridade; preserva-se o que for possível.' },
    { t: 'Começa pela avaliação da vítima, devendo o socorrista entrar de imediato em espaço confinado para resgatá-la.', ok: false,
      why: 'Errada. É a sequência que mais mata socorristas; o resgate exige equipamento próprio.' },
    { t: 'Começa pela segurança da cena, podendo a comunicação do acidente aguardar a investigação interna.', ok: false,
      why: 'Errada. Há prazos próprios de comunicação, independentes da investigação.' }
  ],
  comentario: 'Cena segura, suporte às funções vitais, acionamento da emergência, preservação possível do local. Em espaço confinado, entrar sem equipamento é a decisão que transforma uma vítima em várias.',
  pegadinha: 'O impulso de entrar imediatamente para socorrer é humano e é a causa clássica de morte de socorristas em espaço confinado.',
  refs: ['NR-33', 'Protocolos de suporte básico de vida', 'NR-1'] },

{ id: 'q-6.4-062', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a organização do atendimento de urgência em empresas, é CORRETO afirmar:',
  alts: [
    { t: 'Exige recursos compatíveis com os riscos e com o tempo de resposta externo, com treinamento periódico.', ok: true,
      why: 'Correta. O dimensionamento depende do risco e da distância do socorro externo.' },
    { t: 'Exige recursos compatíveis com os riscos, satisfazendo a existência de caixa de primeiros socorros a exigência.', ok: false,
      why: 'Errada. Sem pessoal treinado e fluxo definido, o material isolado não produz atendimento.' },
    { t: 'Exige pessoal treinado e materiais adequados, dispensando o treinamento inicial as reciclagens periódicas.', ok: false,
      why: 'Errada. Habilidades de emergência se perdem sem prática periódica.' },
    { t: 'Exige recursos compatíveis com os riscos, independendo o dimensionamento da distância do serviço externo.', ok: false,
      why: 'Errada. O tempo de resposta externo é determinante do que a empresa precisa manter.' },
    { t: 'Exige recursos compatíveis com os riscos, seguindo as áreas remotas o mesmo padrão das áreas urbanas.', ok: false,
      why: 'Errada. Quanto maior o isolamento, maior a capacidade própria exigida.' }
  ],
  comentario: 'O que a empresa precisa manter depende do risco e do tempo até o socorro externo. Caixa de primeiros socorros sem gente treinada e fluxo definido não é atendimento — e treinamento sem reciclagem não se sustenta.',
  pegadinha: 'Aplicar o mesmo padrão urbano em frente de trabalho remota deixa a equipe sem recurso na hora em que ele é insubstituível.',
  refs: ['NR-1', 'NR-31', 'Protocolos de urgência'] }

);
