/* Lote AG — 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.1. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-7.2-090', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a cessação de benefício por incapacidade e o retorno ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A alta previdenciária conclui sobre a capacidade para o trabalho, mas a empresa mantém o dever de avaliar a compatibilidade com a função específica no exame de retorno — e a divergência entre as duas conclusões é possível e precisa ser tratada tecnicamente, não ignorada.', ok: true,
      why: 'Correta. Os dois exames avaliam coisas distintas e podem divergir legitimamente.' },
    { t: 'A alta previdenciária vincula a conclusão do exame de retorno ao trabalho.', ok: false,
      why: 'Errada. A avaliação de compatibilidade com a função é autônoma.' },
    { t: 'A divergência entre alta e exame de retorno é sempre erro de um dos avaliadores.', ok: false,
      why: 'Errada. Decorre da diferença de objeto entre as duas avaliações.' },
    { t: 'Constatada incompatibilidade no retorno, cabe à empresa apenas registrar e liberar o trabalhador.', ok: false,
      why: 'Errada. Cabem restrições, readaptação e, quando necessário, novo encaminhamento.' },
    { t: 'O trabalhador não pode contestar administrativamente a cessação do benefício.', ok: false,
      why: 'Errada. Há vias administrativas e judiciais de contestação.' }
  ],
  comentario: 'Alta previdenciária avalia capacidade laborativa em geral; o retorno avalia compatibilidade com aquela função. Divergir é possível e legítimo — e a resposta é restrição ou readaptação, não liberação automática.',
  pegadinha: 'Tratar a alta como decisão final sobre a função específica ignora que os objetos das avaliações são distintos.',
  refs: ['Lei nº 8.213/1991', 'NR-7'] },

{ id: 'q-7.3-090', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a notificação compulsória à luz da legislação sanitária, é CORRETO afirmar:',
  alts: [
    { t: 'Ela é obrigação legal de profissionais e serviços de saúde, públicos e privados, e sua omissão pode gerar responsabilização — não sendo faculdade sujeita a juízo de conveniência sobre as consequências para a empresa ou para o trabalhador.', ok: true,
      why: 'Correta. É dever legal, e a omissão tem consequência.' },
    { t: 'A notificação é obrigatória apenas para serviços públicos de saúde.', ok: false,
      why: 'Errada. Alcança também os serviços privados.' },
    { t: 'A omissão de notificação não gera responsabilização do profissional.', ok: false,
      why: 'Errada. Há previsão de responsabilização.' },
    { t: 'O profissional pode deixar de notificar quando julga que isso prejudicará o trabalhador.', ok: false,
      why: 'Errada. A notificação alimenta a vigilância, e sua omissão retira o caso de qualquer proteção coletiva.' },
    { t: 'A notificação depende de autorização do serviço médico da empresa.', ok: false,
      why: 'Errada. É dever do profissional que identifica o caso.' }
  ],
  comentario: 'Notificação é dever legal de profissionais e serviços públicos e privados, com responsabilização pela omissão. Não é faculdade sujeita a juízo de conveniência, nem depende de autorização de quem quer que seja.',
  pegadinha: 'Deixar de notificar "para proteger o trabalhador" o retira da única estatística que pode gerar ação coletiva.',
  refs: ['Lei nº 6.259/1975', 'Portaria de Consolidação nº 4/2017', 'Código de Ética Médica'] },

{ id: 'q-7.4-090', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a norma regulamentadora de ergonomia e sua aplicação, é CORRETO afirmar:',
  alts: [
    { t: 'Abrange de mobiliário à organização do trabalho, com ritmo, metas e pausas e participação dos trabalhadores.', ok: true,
      why: 'Correta. A organização do trabalho é o componente mais omitido nas avaliações realizadas.' },
    { t: 'Abrange requisitos de mobiliário e posto de trabalho, matéria própria da adequação física do ambiente.', ok: false,
      why: 'Errada. Alcança expressamente a organização do trabalho.' },
    { t: 'Abrange mobiliário e ambiente, sendo a adequação do mobiliário suficiente para cumprir seus requisitos.', ok: false,
      why: 'Errada. Ritmo, metas e pausas integram o objeto da norma.' },
    { t: 'Abrange a organização do trabalho, sendo opcional a participação dos trabalhadores na avaliação ergonômica.', ok: false,
      why: 'Errada. É prevista e essencial para captar o trabalho real.' },
    { t: 'Abrange a organização do trabalho, aplicando-se as pausas para recuperação apenas às atividades de digitação.', ok: false,
      why: 'Errada. Aplicam-se conforme a exigência da atividade, em diferentes contextos.' }
  ],
  comentario: 'A norma de ergonomia vai do mobiliário à organização do trabalho — ritmo, metas, pausas — com participação dos trabalhadores. Avaliação que troca cadeira e não discute meta cumpre a parte fácil.',
  pegadinha: 'Entregar cadeiras novas como resposta ergonômica ignora o componente que mais adoece.',
  refs: ['NR-17'] },

{ id: 'q-7.5-060', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os eventos de condições ambientais do trabalho no eSocial, é CORRETO afirmar:',
  alts: [
    { t: 'Informam os fatores de risco por período e alimentam a análise do direito a aposentadoria especial.', ok: true,
      why: 'Correta. A informação incorreta de ausência de exposição prejudica o trabalhador décadas depois.' },
    { t: 'Informam dados administrativos do vínculo, sem relação com a análise do direito a aposentadoria especial.', ok: false,
      why: 'Errada. São a base do reconhecimento de tempo especial.' },
    { t: 'Informam os fatores de risco do ambiente, podendo a informação de exposição ser genérica por setor.', ok: false,
      why: 'Errada. É individualizada por trabalhador e por período.' },
    { t: 'Informam os fatores de risco por período, sem necessidade de informar alterações ocorridas durante o vínculo.', ok: false,
      why: 'Errada. Mudanças de exposição geram novos eventos.' },
    { t: 'Informam os fatores de risco, sendo a responsabilidade técnica pela informação do setor de pessoal.', ok: false,
      why: 'Errada. Decorre de avaliação técnica de quem responde pelo reconhecimento dos riscos.' }
  ],
  comentario: 'Os eventos de condições ambientais registram exposição por trabalhador e por período, e é deles que sai a aposentadoria especial. Informar ausência de exposição onde ela existe é um dano que se revela trinta anos depois.',
  pegadinha: 'Preencher por setor em vez de por trabalhador destrói a individualização que sustenta o direito.',
  refs: ['eSocial — evento de condições ambientais do trabalho', 'Lei nº 8.213/1991'] },

{ id: 'q-7.6-060', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a publicidade e a divulgação de informações pelo médico do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'É vedada a divulgação de informações que permitam identificar trabalhadores atendidos, inclusive em materiais institucionais, apresentações ou publicações — e a autorização do empregador não supre a necessidade de consentimento do titular.', ok: true,
      why: 'Correta. Quem autoriza o uso da própria informação de saúde é o titular.' },
    { t: 'A autorização do empregador é suficiente para divulgar casos atendidos no serviço.', ok: false,
      why: 'Errada. O empregador não é titular da informação de saúde do trabalhador.' },
    { t: 'A apresentação de casos em eventos científicos dispensa qualquer cuidado com identificação.', ok: false,
      why: 'Errada. Exige anonimização e, quando cabível, autorização.' },
    { t: 'Imagens clínicas podem ser usadas livremente desde que sem o nome do trabalhador.', ok: false,
      why: 'Errada. Imagens podem identificar e exigem autorização específica.' },
    { t: 'A divulgação de dados agregados exige autorização individual dos trabalhadores.', ok: false,
      why: 'Errada. Dados agregados e não identificáveis não exigem autorização individual.' }
  ],
  comentario: 'Divulgação de caso atendido exige anonimização e autorização do titular — o empregador não autoriza no lugar dele. Imagem identifica mesmo sem nome. Agregado não identificável não precisa de autorização individual.',
  pegadinha: 'Retirar o nome e manter a imagem ou a descrição do posto não anonimiza nada em empresa pequena.',
  refs: ['Código de Ética Médica', 'LGPD'] },

{ id: 'q-7.7-060', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do médico como assistente técnico em processo judicial, é CORRETO afirmar:',
  alts: [
    { t: 'Atua a serviço da parte, com liberdade técnica, sem se desobrigar da veracidade e da fundamentação.', ok: true,
      why: 'Correta. Defender uma posição não autoriza afirmar o que não se sustenta tecnicamente.' },
    { t: 'Atua a serviço da parte que o indicou, vinculação que autoriza sustentar tese ainda que sem lastro técnico.', ok: false,
      why: 'Errada. A veracidade e a fundamentação continuam exigíveis.' },
    { t: 'Atua a serviço da parte que o indicou, com os mesmos deveres de imparcialidade atribuídos ao perito.', ok: false,
      why: 'Errada. Ele assiste a parte, figura processual distinta da do perito.' },
    { t: 'Atua a serviço da parte, podendo o mesmo médico ser perito e assistente técnico no mesmo processo.', ok: false,
      why: 'Errada. As funções são incompatíveis entre si no mesmo feito.' },
    { t: 'Atua a serviço da parte, dispensando fundamentação o seu parecer, por ser peça produzida pela parte.', ok: false,
      why: 'Errada. Sem fundamentação, o parecer não tem valor técnico algum.' }
  ],
  comentario: 'Assistente técnico assiste a parte — não é perito e não finge imparcialidade —, mas responde por veracidade e fundamentação. Acumular as duas funções no mesmo processo é incompatível.',
  pegadinha: 'Confundir liberdade de sustentar uma tese com liberdade de afirmar o que não se demonstra.',
  refs: ['Código de Processo Civil', 'Resoluções do CFM sobre perícia e assistência técnica'] },

{ id: 'q-7.8-060', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os direitos do titular de dados aplicados ao trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Incluem confirmação, acesso, correção e informação sobre compartilhamentos, sem anuência do empregador.', ok: true,
      why: 'Correta. O titular exerce seus direitos sem intermediação, inclusive quanto aos dados de saúde.' },
    { t: 'Incluem confirmação e acesso, não podendo o trabalhador solicitar correção de dados de saúde registrados.', ok: false,
      why: 'Errada. A correção de dados incompletos ou desatualizados é direito do titular.' },
    { t: 'Incluem confirmação, acesso e correção, dependendo o seu exercício de autorização do empregador.', ok: false,
      why: 'Errada. São direitos exercidos diretamente pelo titular.' },
    { t: 'Incluem confirmação, acesso e correção, sem direito de saber com quem os dados foram compartilhados.', ok: false,
      why: 'Errada. A informação sobre compartilhamento é direito expresso.' },
    { t: 'Incluem confirmação, acesso e correção, excluídos desse alcance os dados de saúde ocupacional.', ok: false,
      why: 'Errada. São dados pessoais sensíveis, plenamente alcançados.' }
  ],
  comentario: 'O trabalhador é titular: confirma o tratamento, acessa, corrige o que está incompleto ou desatualizado e sabe com quem seus dados foram compartilhados — tudo sem passar pelo empregador.',
  pegadinha: 'Condicionar o acesso do trabalhador aos próprios dados à anuência da empresa inverte quem é titular.',
  refs: ['LGPD — art. 18', 'Código de Ética Médica'] },

{ id: 'q-7.1-080', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a fiscalização do trabalho e a atuação do médico do trabalho da empresa durante uma inspeção, é CORRETO afirmar:',
  alts: [
    { t: 'Deve prestar as informações de sua competência e os documentos exigíveis, preservado o sigilo clínico.', ok: true,
      why: 'Correta. Colaborar com a fiscalização não implica entregar dado clínico individual.' },
    { t: 'Deve colaborar com a fiscalização, entregando os prontuários individuais ao auditor fiscal do trabalho.', ok: false,
      why: 'Errada. O sigilo clínico permanece; apresentam-se os documentos do programa.' },
    { t: 'Deve preservar o sigilo clínico, podendo recusar-se a prestar qualquer informação durante a fiscalização.', ok: false,
      why: 'Errada. Deve prestar as informações técnicas de sua competência.' },
    { t: 'Deve prestar informações, tendo o documento com informação inverídica consequência apenas para a empresa.', ok: false,
      why: 'Errada. Há também consequência ética e pessoal para quem o assina.' },
    { t: 'Deve prestar informações de sua competência, não sendo os documentos do programa objeto de fiscalização.', ok: false,
      why: 'Errada. São documentos exigíveis e regularmente verificados.' }
  ],
  comentario: 'Na fiscalização: colaborar com informação técnica e documentos do programa, sem entregar prontuário individual. E quem assina documento inverídico responde pessoalmente, não só a empresa.',
  pegadinha: 'Entregar prontuários "para colaborar com a fiscalização" quebra sigilo sem que a norma exija isso.',
  refs: ['CLT — fiscalização do trabalho', 'NR-7', 'Código de Ética Médica'] }

);
