/* Aprofundamento: 5.3, 6.4, 7.1, 7.3, 7.5 e 7.7.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ========================== 5.3 Concausalidade ========================= */
{ id: 'q-5.3-030', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com diabetes mellitus de longa data sofre ferimento em pé durante a jornada, evoluindo com infecção grave e amputação transtibial — desfecho improvável em pessoa sem a doença de base. Sobre a caracterização, é CORRETO afirmar:',
  alts: [
    { t: 'A doença de base é concausa preexistente que agrava o resultado, sem romper o nexo.', ok: true,
      why: 'Correta. O evento ocorreu em razão do trabalho e o desfecho permanece a ele vinculado.' },
    { t: 'A doença prévia que explica a gravidade do desfecho afasta a natureza acidentária do caso.', ok: false,
      why: 'Errada. Concausa preexistente não rompe o nexo.' },
    { t: 'A doença de base é concausa, devendo a repercussão ser reduzida proporcionalmente à contribuição dela.', ok: false,
      why: 'Errada. Não há previsão de fracionamento dos efeitos.' },
    { t: 'A doença de base é concausa superveniente, por ter a infecção surgido após o ferimento inicial.', ok: false,
      why: 'Errada. A doença já existia; superveniente seria a complicação surgida depois.' },
    { t: 'A doença é concausa, e a empresa evitaria o desfecho exigindo exame que a detectasse na admissão.', ok: false,
      why: 'Errada. Rastrear para excluir candidatos é prática discriminatória.' }
  ],
  comentario: 'Concausa preexistente é a condição que já existia e amplia o dano — diabetes, doença vascular, obesidade. Ela não rompe o nexo nem gera rateio. E jamais serve de argumento para excluir o candidato na admissão.',
  pegadinha: 'A alternativa sobre exame admissional converte concausa em justificativa para triagem discriminatória.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.3-031', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a classificação temporal das concausas, é CORRETO afirmar:',
  alts: [
    { t: 'Preexistente é anterior; concomitante atua junto; superveniente surge depois e se soma.', ok: true,
      why: 'Correta. Todas mantêm o nexo, bastando que o trabalho tenha contribuído.' },
    { t: 'Concausa superveniente é a que existia antes do evento e predispôs o trabalhador ao agravo.', ok: false,
      why: 'Errada. Essa é a preexistente; a superveniente surge depois.' },
    { t: 'São três modalidades, reconhecendo a legislação previdenciária apenas a concausa preexistente.', ok: false,
      why: 'Errada. As três são reconhecidas.' },
    { t: 'São três modalidades, rompendo a concausa concomitante o nexo por dividir a causalidade.', ok: false,
      why: 'Errada. Contribuição relevante basta; não se exige causa única.' },
    { t: 'São três modalidades, alterando a classificação temporal o percentual do benefício concedido.', ok: false,
      why: 'Errada. Não há graduação do benefício por tipo de concausa.' }
  ],
  comentario: 'Três momentos, uma consequência: preexistente (antes), concomitante (junto), superveniente (depois). Todas mantêm o nexo. A classificação organiza o raciocínio pericial, não muda o desfecho previdenciário.',
  pegadinha: 'A troca entre preexistente e superveniente é a inversão mais cobrada; guarde pelo prefixo temporal.',
  refs: ['Lei nº 8.213/1991 — art. 21, I'] },

/* ================ 6.4 Urgências e emergências no trabalho ============== */
{ id: 'q-6.4-030', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre queimadura elétrica por contato com condutor energizado em rede de média tensão, apresentando pequenas lesões de entrada na mão e de saída no pé, consciente e hemodinamicamente estável. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A lesão cutânea não reflete o dano interno: há risco de rabdomiólise e de arritmias.', ok: true,
      why: 'Correta. Exige monitorização, avaliação laboratorial e hidratação, mesmo se parecer estável.' },
    { t: 'As lesões cutâneas pequenas indicam queimadura leve, permitindo alta após o curativo local.', ok: false,
      why: 'Errada. O dano profundo ao longo do trajeto da corrente costuma ser maior.' },
    { t: 'A lesão cutânea não reflete o dano, mas o risco de arritmia se restringe ao momento do choque.', ok: false,
      why: 'Errada. Arritmias podem ocorrer depois, o que justifica a monitorização.' },
    { t: 'A lesão cutânea não reflete o dano, devendo a hidratação ser restritiva por sobrecarga volêmica.', ok: false,
      why: 'Errada. A hidratação adequada previne a lesão renal pela rabdomiólise.' },
    { t: 'A lesão cutânea estima a gravidade pela regra de superfície corporal queimada, como nas térmicas.', ok: false,
      why: 'Errada. Na elétrica a superfície visível subestima gravemente o dano.' }
  ],
  comentario: 'Queimadura elétrica: o que se vê não é o que existe. Corrente percorre trajeto interno, causando lesão muscular, rabdomiólise, risco renal, síndrome compartimental e arritmia. Monitorização, laboratório e hidratação — não alta após curativo.',
  pegadinha: 'Estimar gravidade pela superfície queimada transporta a lógica da queimadura térmica para onde ela não se aplica.',
  refs: ['Greenberg — Occupational Emergency Medicine', 'NR-10'] },

{ id: 'q-6.4-031', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante o expediente, trabalhador de 54 anos apresenta colapso súbito, sem resposta e sem respiração normal. Sobre a resposta da empresa, é CORRETO afirmar:',
  alts: [
    { t: 'Depende de reconhecimento imediato, acionamento, compressão precoce e desfibrilação rápida.', ok: true,
      why: 'Correta. Desfibrilador e pessoal treinado são componentes concretos do plano de emergência.' },
    { t: 'Depende do atendimento especializado, cabendo aguardar o serviço externo antes de qualquer manobra.', ok: false,
      why: 'Errada. Cada minuto sem compressão reduz substancialmente a sobrevida.' },
    { t: 'Depende da compressão precoce, sendo a verificação de pulso por leigos etapa obrigatória antes dela.', ok: false,
      why: 'Errada. Leigos não devem perder tempo verificando pulso.' },
    { t: 'Depende da desfibrilação rápida, podendo o aparelho ser operado apenas por profissional de saúde.', ok: false,
      why: 'Errada. É projetado para uso por leigos treinados.' },
    { t: 'Depende do treino, podendo a capacitação ser substituída por cartazes afixados com as instruções.', ok: false,
      why: 'Errada. A habilidade prática não se adquire por cartaz.' }
  ],
  comentario: 'Parada cardíaca no trabalho é problema de tempo: reconhecer, acionar, comprimir e desfibrilar. O plano de emergência precisa transformar isso em coisas concretas — quem aciona, onde está o desfibrilador, quem foi treinado e quando reciclou.',
  pegadinha: 'A exigência de verificar pulso antes das compressões é ensinamento antigo e atrasa o início da reanimação.',
  refs: ['Greenberg — Occupational Emergency Medicine', 'NR-1'] },

/* ================== 7.1 Legislação trabalhista ========================= */
{ id: 'q-7.1-030', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pretende contratar aprendizes de 16 anos para o setor de produção, que possui exposição a ruído acima do nível de ação e operação de máquinas. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'É vedado ao menor de dezoito anos o trabalho insalubre, perigoso e noturno.', ok: true,
      why: 'Correta. A condição de aprendiz não afasta as vedações protetivas.' },
    { t: 'É vedado em regra, mas a condição de aprendiz permite a alocação sob supervisão permanente.', ok: false,
      why: 'Errada. A vedação não se afasta pela condição de aprendiz.' },
    { t: 'É vedado o trabalho noturno ao menor de dezoito anos, mas não o insalubre nem o perigoso.', ok: false,
      why: 'Errada. As três vedações se aplicam.' },
    { t: 'É vedado em regra, suprindo a autorização dos pais ou responsáveis a vedação legal existente.', ok: false,
      why: 'Errada. A vedação é legal e não se afasta por autorização.' },
    { t: 'É vedado em regra, deixando a vedação de existir se o adolescente concluiu o ensino médio.', ok: false,
      why: 'Errada. O critério é etário, não a escolaridade.' }
  ],
  comentario: 'Menor de 18 anos: vedado o trabalho insalubre, perigoso e noturno, além das atividades listadas como piores formas de trabalho infantil. Nem aprendizagem, nem supervisão, nem autorização dos pais afastam a vedação.',
  pegadinha: 'A autorização familiar aparece como solução e é irrelevante diante de norma de ordem pública.',
  refs: ['CLT', 'Constituição Federal — art. 7º, XXXIII', 'Lista das piores formas de trabalho infantil'] },

{ id: 'q-7.1-031', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa adota jornada 12x36 em setor com exposição a agente químico. O médico do trabalho é consultado. A orientação CORRETA é:',
  alts: [
    { t: 'A jornada estendida exige rever os parâmetros, pois os limites pressupõem regime específico.', ok: true,
      why: 'Correta. O prolongamento aumenta a absorção e reduz o tempo de eliminação.' },
    { t: 'Sendo a jornada legalmente válida, não há repercussão sobre a avaliação da exposição química.', ok: false,
      why: 'Errada. Os valores-limite pressupõem regime de jornada e recuperação específicos.' },
    { t: 'A jornada estendida exige atenção, mas a escala reduz a exposição semanal e dispensa ajuste.', ok: false,
      why: 'Errada. A dose diária e a recuperação entre jornadas é que importam.' },
    { t: 'A jornada estendida exige ajuste, sempre no sentido de elevar o valor-limite admitido no período.', ok: false,
      why: 'Errada. O ajuste é para baixo em agentes cumulativos.' },
    { t: 'A jornada estendida é questão exclusivamente trabalhista, sem interface com a medicina do trabalho.', ok: false,
      why: 'Errada. Altera diretamente a dose absorvida pelo trabalhador.' }
  ],
  comentario: 'Jornada legal e jornada segura são perguntas diferentes. Em exposição química, o prolongamento da jornada exige ajuste do valor-limite para baixo — e em qualquer atividade exige olhar fadiga e recuperação.',
  pegadinha: 'A ideia de que menos dias trabalhados compensam mais horas por dia ignora a cinética dos agentes cumulativos.',
  refs: ['CLT', 'ACGIH — TLVs e BEIs', 'NR-9'] },

/* ==================== 7.3 Legislação sanitária ========================= */
{ id: 'q-7.3-030', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma indústria de alimentos é autuada pela vigilância sanitária por condições que afetam simultaneamente a segurança do produto e a saúde dos trabalhadores. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A mesma condição gera atuação sanitária sobre o produto e sobre a saúde dos expostos.', ok: true,
      why: 'Correta. As competências se somam e podem ser exercidas por órgãos articulados.' },
    { t: 'A autuação sobre o produto exclui a possibilidade de atuação quanto à saúde dos trabalhadores.', ok: false,
      why: 'Errada. As competências se somam.' },
    { t: 'A atuação é possível, não tendo a vigilância sanitária competência sobre condições de trabalho.', ok: false,
      why: 'Errada. A competência decorre da lei orgânica da saúde.' },
    { t: 'A atuação é possível, podendo apenas a inspeção do trabalho exigir correção que afete trabalhadores.', ok: false,
      why: 'Errada. A vigilância sanitária também pode exigir e interditar.' },
    { t: 'A atuação é possível, podendo a empresa escolher a qual órgão responder, por ser o mesmo fato.', ok: false,
      why: 'Errada. Cada órgão exerce competência própria e cumulativa.' }
  ],
  comentario: 'O mesmo fato pode ter dois objetos jurídicos: o produto e o trabalhador. As competências se somam, e responder a uma esfera não dispensa a outra. É a mesma lógica que vale entre sanitária, trabalhista e previdenciária.',
  pegadinha: 'A ideia de "escolher a qual órgão responder" transforma autonomia de esferas em faculdade do fiscalizado.',
  refs: ['Lei nº 8.080/1990', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

{ id: 'q-7.3-031', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a ficha com informações de segurança de produtos químicos no contexto sanitário e ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'É documento técnico obrigatório que descreve perigos, medidas de controle, equipamentos indicados e condutas em caso de exposição ou emergência, devendo estar acessível aos trabalhadores e ao serviço médico — e não apenas ao setor de compras.', ok: true,
      why: 'Correta. Sem ela não há como avaliar risco, orientar conduta clínica nem responder a emergência.' },
    { t: 'Trata-se de documento comercial, de interesse exclusivo do fornecedor e do comprador.', ok: false,
      why: 'Errada. É documento técnico de segurança com destinatários definidos, incluindo o trabalhador.' },
    { t: 'Sua guarda no almoxarifado é suficiente para cumprir a finalidade.', ok: false,
      why: 'Errada. Precisa estar acessível onde o produto é manipulado e ao serviço médico.' },
    { t: 'A informação sobre primeiros socorros nela contida dispensa protocolo próprio da empresa.', ok: false,
      why: 'Errada. Ela subsidia o protocolo, mas a empresa precisa organizar sua própria resposta a emergências.' },
    { t: 'Produtos com rótulo completo dispensam a ficha.', ok: false,
      why: 'Errada. Rótulo e ficha têm conteúdos e funções distintas e complementares.' }
  ],
  comentario: 'A ficha de informações de segurança é instrumento clínico, não papel de almoxarifado. Ela responde: o que é, como me protejo, o que faço se houver contato, e o que fazer numa emergência. Precisa estar onde o produto está e com quem atende.',
  pegadinha: 'Tratá-la como documento comercial é o que faz ela sumir justamente quando alguém se intoxica.',
  refs: ['NR-26', 'NR-9', 'Buschinelli — Toxicologia Ocupacional'] },

/* ============================== 7.5 eSocial ============================ */
{ id: 'q-7.5-030', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa consulta o médico do trabalho sobre o evento que informa a exposição dos trabalhadores a agentes nocivos no sistema de escrituração digital. Sobre esse evento, é CORRETO afirmar:',
  alts: [
    { t: 'Veicula as condições ambientais e agentes nocivos e é base do reconhecimento de tempo especial.', ok: true,
      why: 'Correta. Deve refletir o gerenciamento de riscos, não uma declaração genérica.' },
    { t: 'Veicula informações do ambiente, com caráter informativo e sem repercussão previdenciária direta.', ok: false,
      why: 'Errada. É a base do reconhecimento de tempo especial.' },
    { t: 'Veicula agentes nocivos, podendo a informação ser padronizada por setor, sem individualização.', ok: false,
      why: 'Errada. É individualizada por trabalhador, função e período.' },
    { t: 'Veicula agentes nocivos, sendo o conteúdo técnico responsabilidade exclusiva do contador da empresa.', ok: false,
      why: 'Errada. Decorre de avaliação técnica de quem responde pelos riscos.' },
    { t: 'Veicula agentes nocivos, sem que a ausência dessa informação prejudique o trabalhador exposto.', ok: false,
      why: 'Errada. Sem ela, o tempo especial não é reconhecido depois.' }
  ],
  comentario: 'O evento de agentes nocivos é o que sustenta a aposentadoria especial. Informação genérica, padronizada por setor ou omitida prejudica o trabalhador décadas depois — e a responsabilidade técnica não é do setor administrativo.',
  pegadinha: 'Tratar o evento como formalidade contábil é o que produz omissões que só aparecem na aposentadoria.',
  refs: ['eSocial — eventos de SST', 'Lei nº 8.213/1991', 'NR-1'] },

{ id: 'q-7.5-031', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre prazos e retificações nos eventos de saúde e segurança do sistema de escrituração digital, é CORRETO afirmar:',
  alts: [
    { t: 'Há prazos para cada evento e mecanismos de retificação, e o descumprimento gera penalidades.', ok: true,
      why: 'Correta. O controle de prazos é rotina do serviço de saúde ocupacional, não só do administrativo.' },
    { t: 'Não há prazos definidos, bastando transmitir o conjunto dos eventos ao final de cada exercício.', ok: false,
      why: 'Errada. Há prazos próprios para cada tipo de evento.' },
    { t: 'Há prazos definidos, sendo os erros transmitidos definitivos e insuscetíveis de correção posterior.', ok: false,
      why: 'Errada. Há retificação e exclusão previstas.' },
    { t: 'Há prazos definidos, sendo seu controle matéria exclusivamente administrativa, sem o serviço médico.', ok: false,
      why: 'Errada. O conteúdo é técnico e a responsabilidade acompanha quem o produz.' },
    { t: 'Há prazos definidos, não gerando a transmissão fora do prazo qualquer consequência à empresa.', ok: false,
      why: 'Errada. Há previsão de penalidades pela intempestividade.' }
  ],
  comentario: 'Prazos próprios por evento, mecanismos de retificação e penalidade por descumprimento. Para o médico do trabalho isso significa rotina: o exame precisa gerar a informação no tempo em que ela deve ser transmitida.',
  pegadinha: 'Delegar integralmente o controle de prazos ao setor administrativo desconecta a produção da informação do seu envio.',
  refs: ['eSocial — eventos de SST'] },

/* ================== 7.7 Resoluções do CFM ============================== */
{ id: 'q-7.7-030', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe realizar os exames periódicos por telemedicina, com o trabalhador respondendo a questionário em plataforma e o médico emitindo o atestado sem exame presencial. Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'A aptidão exige exame compatível com os riscos, e a telemedicina tem uso limitado por norma.', ok: true,
      why: 'Correta. Concluir sem avaliação adequada compromete o ato e a responsabilidade do médico.' },
    { t: 'A telemedicina substitui integralmente o exame presencial em qualquer avaliação ocupacional realizada.', ok: false,
      why: 'Errada. Seu uso em medicina do trabalho é limitado por normas específicas.' },
    { t: 'A aptidão exige exame, legitimando o consentimento do trabalhador a emissão de atestado sem ele.', ok: false,
      why: 'Errada. Atestar sem examinar é vedado, com ou sem consentimento.' },
    { t: 'A aptidão exige exame, passando a responsabilidade pela conclusão à plataforma contratada.', ok: false,
      why: 'Errada. A responsabilidade pelo ato é pessoal de quem assina.' },
    { t: 'A aptidão exige exame, não tendo os recursos remotos nenhuma aplicação em saúde ocupacional.', ok: false,
      why: 'Errada. Há aplicações admitidas, dentro dos limites normativos.' }
  ],
  comentario: 'Telemedicina tem espaço em saúde ocupacional — orientação, triagem, seguimento —, mas a conclusão de aptidão pressupõe avaliação clínica compatível com o risco. E a responsabilidade pelo ato é sempre de quem assina, não da plataforma.',
  pegadinha: 'A alternativa que transfere a responsabilidade à plataforma reproduz o argumento de que terceirizar ferramenta terceiriza dever.',
  refs: ['Resoluções do CFM sobre telemedicina', 'Resolução CFM sobre normas para médicos que atendem o trabalhador', 'NR-7'] },

{ id: 'q-7.7-031', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um médico do trabalho identifica que o serviço contratado pela empresa vem emitindo atestados de saúde ocupacional em série, sem exame clínico efetivo, assinados por colega. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'É falta ética grave: cabe recusar-se a participar e comunicar ao conselho profissional.', ok: true,
      why: 'Correta. Comunicar infração ética não se confunde com deslealdade entre colegas.' },
    { t: 'É conduta do colega que não diz respeito a quem a identificou, cabendo apenas afastar-se dela.', ok: false,
      why: 'Errada. Há dever de comunicar a infração ao conselho.' },
    { t: 'É falta ética, configurando a comunicação ao conselho quebra do dever de solidariedade entre colegas.', ok: false,
      why: 'Errada. O dever de comunicar prevalece sobre a solidariedade corporativa.' },
    { t: 'É prática aceitável quando os trabalhadores avaliados são de baixo risco ocupacional na empresa.', ok: false,
      why: 'Errada. Atestar sem examinar é vedado em qualquer situação.' },
    { t: 'É falta ética grave, bastando comunicá-la internamente à empresa contratante do serviço médico.', ok: false,
      why: 'Errada. A comunicação devida é ao conselho profissional.' }
  ],
  comentario: 'Atestado sem exame é documento sem fundamento. Quem identifica tem dever de comunicar ao conselho — e o argumento de "solidariedade entre colegas" não ampara omissão diante de falta que expõe trabalhadores.',
  pegadinha: 'Afastar-se sem comunicar parece conduta correta e apenas transfere o problema para o próximo médico.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM'] },

{ id: 'q-7.7-032', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a atuação do médico do trabalho segundo as normas do conselho profissional, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O médico pode deixar de comunicar achados ao trabalhador quando a empresa assim solicitar.', ok: true,
      why: 'É a INCORRETA. O trabalhador tem direito de conhecer sua condição de saúde.' },
    { t: 'Cabe ao médico comunicar ao trabalhador os achados e suas repercussões sobre a saúde dele.', ok: false,
      why: 'Correta, portanto não é a resposta. É dever do médico informar o paciente.' },
    { t: 'É vedado revelar ao empregador o diagnóstico do trabalhador sem autorização expressa dele.', ok: false,
      why: 'Correta, portanto não é a resposta. O sigilo protege o dado clínico.' },
    { t: 'O médico deve agir com autonomia técnica ao concluir sobre a aptidão do trabalhador avaliado.', ok: false,
      why: 'Correta, portanto não é a resposta. A autonomia técnica é assegurada.' },
    { t: 'Diante de risco à saúde coletiva no ambiente, cabe comunicar e insistir na correção da condição.', ok: false,
      why: 'Correta, portanto não é a resposta. É dever de comunicação de riscos.' }
  ],
  comentario: 'Quatro pilares: informar o trabalhador, não revelar diagnóstico ao empregador, autonomia técnica na conclusão de aptidão e dever de agir diante de risco coletivo. A falsa viola o primeiro deles a pedido de quem paga.',
  pegadinha: 'Enunciado de "assinale a INCORRETA": a falsa usa "evitar preocupação" como fachada para omitir informação de saúde ao próprio paciente.',
  refs: ['Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] }

);
