/* Aprofundamento: 5.3, 6.4, 7.1, 7.3, 7.5 e 7.7.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ========================== 5.3 Concausalidade ========================= */
{ id: 'q-5.3-030', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com diabetes mellitus de longa data sofre ferimento em pé durante a jornada, evoluindo com infecção grave e amputação transtibial — desfecho improvável em pessoa sem a doença de base. Sobre a caracterização, é CORRETO afirmar:',
  alts: [
    { t: 'A doença de base atua como concausa preexistente que agrava o resultado do acidente, sem romper o nexo: o evento ocorreu em razão do trabalho e o desfecho, ainda que ampliado pela condição prévia, permanece a ele vinculado.', ok: true,
      why: 'Correta. A concausa preexistente amplia o dano sem descaracterizar o acidente que iniciou a cadeia causal.' },
    { t: 'A existência de doença prévia que explique a gravidade afasta a natureza acidentária do caso.', ok: false,
      why: 'Errada. Seria exigir que o trabalho fosse causa única, requisito que a concausalidade dispensa.' },
    { t: 'A repercussão previdenciária deve ser reduzida proporcionalmente à contribuição da doença de base.', ok: false,
      why: 'Errada. Não há rateio proporcional em razão de concausa.' },
    { t: 'Trata-se de concausa superveniente, por a infecção ter surgido após o ferimento.', ok: false,
      why: 'Errada quanto à classificação da doença de base: o diabetes é preexistente. A infecção é complicação do próprio evento.' },
    { t: 'A empresa poderia ter evitado o desfecho exigindo exame que detectasse a doença antes da admissão.', ok: false,
      why: 'Errada. Rastrear para excluir candidato com doença crônica é prática discriminatória, não medida de prevenção.' }
  ],
  comentario: 'Concausa preexistente é a condição que já existia e amplia o dano — diabetes, doença vascular, obesidade. Ela não rompe o nexo nem gera rateio. E jamais serve de argumento para excluir o candidato na admissão.',
  pegadinha: 'A alternativa sobre exame admissional converte concausa em justificativa para triagem discriminatória.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.3-031', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a classificação temporal das concausas, é CORRETO afirmar:',
  alts: [
    { t: 'Preexistente é a condição anterior ao evento; concomitante é a que atua simultaneamente; superveniente é a que surge depois e se soma ao curso do dano — e todas mantêm o nexo, bastando que o trabalho tenha contribuído.', ok: true,
      why: 'Correta. A classificação é apenas temporal e nenhuma das três rompe o nexo.' },
    { t: 'Concausa superveniente é a que existia antes do evento e predispôs ao agravo.', ok: false,
      why: 'Errada, houve troca: a que existia antes é a preexistente.' },
    { t: 'Apenas a concausa preexistente é reconhecida pela legislação previdenciária.', ok: false,
      why: 'Errada. A lei não distingue por momento: basta a contribuição direta para o resultado.' },
    { t: 'A concausa concomitante rompe o nexo por dividir a causalidade.', ok: false,
      why: 'Errada. Concausa por definição divide a causalidade e ainda assim mantém o nexo.' },
    { t: 'A classificação temporal das concausas altera o percentual do benefício concedido.', ok: false,
      why: 'Errada. Não há graduação do benefício em função do tipo de concausa.' }
  ],
  comentario: 'Três momentos, uma consequência: preexistente (antes), concomitante (junto), superveniente (depois). Todas mantêm o nexo. A classificação organiza o raciocínio pericial, não muda o desfecho previdenciário.',
  pegadinha: 'A troca entre preexistente e superveniente é a inversão mais cobrada; guarde pelo prefixo temporal.',
  refs: ['Lei nº 8.213/1991 — art. 21, I'] },

/* ================ 6.4 Urgências e emergências no trabalho ============== */
{ id: 'q-6.4-030', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre queimadura elétrica por contato com condutor energizado em rede de média tensão, apresentando pequenas lesões de entrada na mão e de saída no pé, consciente e hemodinamicamente estável. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A extensão das lesões cutâneas não reflete o dano interno: há risco de lesão muscular profunda, rabdomiólise, síndrome compartimental e arritmias, exigindo monitorização, avaliação laboratorial e hidratação adequada, ainda que o paciente pareça estável.', ok: true,
      why: 'Correta. Na queimadura elétrica a corrente percorre tecidos profundos e o dano visível subestima gravemente a lesão real.' },
    { t: 'Lesões cutâneas pequenas indicam queimadura de baixa gravidade, permitindo alta após curativo.', ok: false,
      why: 'Errada. É justamente o erro clássico: a superfície engana na queimadura elétrica.' },
    { t: 'O risco de arritmia se restringe ao momento do choque, não havendo necessidade de monitorização posterior.', ok: false,
      why: 'Errada. Há indicação de monitorização por período conforme a gravidade da exposição.' },
    { t: 'A hidratação deve ser restritiva, para evitar sobrecarga volêmica.', ok: false,
      why: 'Errada. Havendo rabdomiólise, a hidratação adequada é medida protetora renal.' },
    { t: 'A regra de superfície corporal queimada estima adequadamente a gravidade nesse tipo de queimadura.', ok: false,
      why: 'Errada. A estimativa por superfície é inadequada na queimadura elétrica, cujo dano é predominantemente profundo.' }
  ],
  comentario: 'Queimadura elétrica: o que se vê não é o que existe. Corrente percorre trajeto interno, causando lesão muscular, rabdomiólise, risco renal, síndrome compartimental e arritmia. Monitorização, laboratório e hidratação — não alta após curativo.',
  pegadinha: 'Estimar gravidade pela superfície queimada transporta a lógica da queimadura térmica para onde ela não se aplica.',
  refs: ['Greenberg — Occupational Emergency Medicine', 'NR-10'] },

{ id: 'q-6.4-031', tema: '6.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante o expediente, trabalhador de 54 anos apresenta colapso súbito, sem resposta e sem respiração normal. Sobre a resposta da empresa, é CORRETO afirmar:',
  alts: [
    { t: 'A sobrevida depende do reconhecimento imediato, do acionamento do socorro, da compressão torácica precoce e da desfibrilação o mais rápido possível — o que torna a disponibilidade de desfibrilador e de pessoal treinado componente concreto do plano de emergência, e não item opcional.', ok: true,
      why: 'Correta. O intervalo até a desfibrilação é o principal determinante modificável de sobrevida, o que justifica o equipamento acessível e a capacitação.' },
    { t: 'Deve-se aguardar a chegada do serviço médico externo antes de iniciar qualquer manobra.', ok: false,
      why: 'Errada. Aguardar é a conduta que mais reduz a sobrevida; as manobras começam imediatamente.' },
    { t: 'A verificação de pulso por leigos é etapa obrigatória antes de iniciar as compressões.', ok: false,
      why: 'Errada. Para o socorrista leigo, ausência de resposta e respiração anormal já indicam iniciar compressões.' },
    { t: 'O desfibrilador externo automático só pode ser operado por profissional de saúde.', ok: false,
      why: 'Errada. O equipamento é projetado para uso por pessoal treinado não médico, com orientação por voz.' },
    { t: 'A capacitação em primeiros socorros pode ser substituída pela afixação de cartazes com instruções.', ok: false,
      why: 'Errada. Instrução escrita não substitui treinamento prático em situação de emergência.' }
  ],
  comentario: 'Parada cardíaca no trabalho é problema de tempo: reconhecer, acionar, comprimir e desfibrilar. O plano de emergência precisa transformar isso em coisas concretas — quem aciona, onde está o desfibrilador, quem foi treinado e quando reciclou.',
  pegadinha: 'A exigência de verificar pulso antes das compressões é ensinamento antigo e atrasa o início da reanimação.',
  refs: ['Greenberg — Occupational Emergency Medicine', 'NR-1'] },

/* ================== 7.1 Legislação trabalhista ========================= */
{ id: 'q-7.1-030', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa pretende contratar aprendizes de 16 anos para o setor de produção, que possui exposição a ruído acima do nível de ação e operação de máquinas. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'É vedado ao menor de 18 anos o trabalho em atividades insalubres, perigosas, noturnas e nas listadas como piores formas de trabalho infantil, de modo que a alocação proposta é incompatível — a condição de aprendiz não afasta as vedações protetivas.', ok: true,
      why: 'Correta. As vedações são etárias e protetivas, e o contrato de aprendizagem não as flexibiliza.' },
    { t: 'A condição de aprendiz permite a alocação, desde que sob supervisão permanente.', ok: false,
      why: 'Errada. Supervisão não afasta vedação legal por idade.' },
    { t: 'A vedação alcança apenas o trabalho noturno, não o insalubre ou perigoso.', ok: false,
      why: 'Errada. As três hipóteses estão vedadas ao menor de 18 anos.' },
    { t: 'A autorização dos pais ou responsáveis supre a vedação legal.', ok: false,
      why: 'Errada. Vedação de ordem pública não é afastada por autorização familiar.' },
    { t: 'A vedação deixa de existir se o adolescente já tiver concluído o ensino médio.', ok: false,
      why: 'Errada. O critério é etário e de natureza da atividade, não de escolaridade.' }
  ],
  comentario: 'Menor de 18 anos: vedado o trabalho insalubre, perigoso e noturno, além das atividades listadas como piores formas de trabalho infantil. Nem aprendizagem, nem supervisão, nem autorização dos pais afastam a vedação.',
  pegadinha: 'A autorização familiar aparece como solução e é irrelevante diante de norma de ordem pública.',
  refs: ['CLT', 'Constituição Federal — art. 7º, XXXIII', 'Lista das piores formas de trabalho infantil'] },

{ id: 'q-7.1-031', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa adota jornada 12x36 em setor com exposição a agente químico. O médico do trabalho é consultado. A orientação CORRETA é:',
  alts: [
    { t: 'A jornada estendida exige revisão dos parâmetros de exposição, pois os valores-limite pressupõem regime de jornada e de recuperação específicos, e o prolongamento aumenta a absorção e reduz o tempo de eliminação entre jornadas.', ok: true,
      why: 'Correta. Validade jurídica da jornada não altera a toxicocinética; a exposição precisa ser reavaliada com fator de ajuste.' },
    { t: 'Sendo a jornada legalmente válida, não há qualquer repercussão sobre a avaliação da exposição química.', ok: false,
      why: 'Errada. Confunde legalidade da jornada com adequação do parâmetro de exposição.' },
    { t: 'A jornada 12x36 reduz a exposição semanal e por isso dispensa ajustes.', ok: false,
      why: 'Errada. Reduzir dias trabalhados não compensa automaticamente o aumento da exposição diária, sobretudo para agentes cumulativos.' },
    { t: 'O ajuste de valores-limite para jornadas atípicas é sempre no sentido de elevar o valor admitido.', ok: false,
      why: 'Errada, e é inversão perigosa: o ajuste é para reduzir o valor admitido.' },
    { t: 'A questão é exclusivamente trabalhista, sem interface com a medicina do trabalho.', ok: false,
      why: 'Errada. Jornada é determinante de exposição e de fadiga, e ambos são objeto da medicina do trabalho.' }
  ],
  comentario: 'Jornada legal e jornada segura são perguntas diferentes. Em exposição química, o prolongamento da jornada exige ajuste do valor-limite para baixo — e em qualquer atividade exige olhar fadiga e recuperação.',
  pegadinha: 'A ideia de que menos dias trabalhados compensam mais horas por dia ignora a cinética dos agentes cumulativos.',
  refs: ['CLT', 'ACGIH — TLVs e BEIs', 'NR-9'] },

/* ==================== 7.3 Legislação sanitária ========================= */
{ id: 'q-7.3-030', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma indústria de alimentos é autuada pela vigilância sanitária por condições que afetam simultaneamente a segurança do produto e a saúde dos trabalhadores. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A mesma condição pode gerar atuação sanitária voltada ao produto e à população consumidora e, ao mesmo tempo, atuação em saúde do trabalhador voltada aos expostos — competências que se somam e podem ser exercidas pelo mesmo órgão ou por órgãos articulados.', ok: true,
      why: 'Correta. Não há exclusividade entre os objetos: o mesmo fato pode comprometer produto e trabalhador, com fundamentos distintos.' },
    { t: 'A autuação relativa ao produto exclui a possibilidade de atuação quanto à saúde do trabalhador.', ok: false,
      why: 'Errada. São objetos distintos e ambos podem ser objeto de exigência.' },
    { t: 'A vigilância sanitária não possui competência sobre condições de trabalho em nenhuma hipótese.', ok: false,
      why: 'Errada. A saúde do trabalhador integra o campo de atuação sanitária por previsão legal.' },
    { t: 'Somente a inspeção do trabalho pode exigir correção de condições que afetem trabalhadores.', ok: false,
      why: 'Errada. A vigilância sanitária também pode exigir e, em risco grave, interditar.' },
    { t: 'A empresa pode escolher a qual órgão responder, por se tratar do mesmo fato.', ok: false,
      why: 'Errada. Deve responder a ambos; as esferas são autônomas.' }
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
    { t: 'Ele veicula informações sobre condições ambientais e agentes nocivos aos quais o trabalhador está exposto, servindo de base para o reconhecimento de tempo especial — e seu conteúdo deve refletir o gerenciamento de riscos, não uma declaração genérica.', ok: true,
      why: 'Correta. É o evento que sustenta o enquadramento de aposentadoria especial, e informação genérica ou inexata gera consequências previdenciárias e trabalhistas.' },
    { t: 'O evento de agentes nocivos é meramente informativo, sem repercussão previdenciária.', ok: false,
      why: 'Errada. Ele é base para o reconhecimento de exposição para fins de aposentadoria especial.' },
    { t: 'A informação pode ser padronizada por setor, sem individualização por trabalhador e função.', ok: false,
      why: 'Errada. A exposição é individualizada conforme a função e as tarefas efetivamente realizadas.' },
    { t: 'O conteúdo técnico é de responsabilidade exclusiva do contador da empresa.', ok: false,
      why: 'Errada. O conteúdo técnico decorre do gerenciamento de riscos e da avaliação de exposição, com responsabilidade dos profissionais habilitados.' },
    { t: 'A ausência de informação nesse evento não prejudica o trabalhador.', ok: false,
      why: 'Errada. A omissão pode inviabilizar o reconhecimento de tempo especial anos depois.' }
  ],
  comentario: 'O evento de agentes nocivos é o que sustenta a aposentadoria especial. Informação genérica, padronizada por setor ou omitida prejudica o trabalhador décadas depois — e a responsabilidade técnica não é do setor administrativo.',
  pegadinha: 'Tratar o evento como formalidade contábil é o que produz omissões que só aparecem na aposentadoria.',
  refs: ['eSocial — eventos de SST', 'Lei nº 8.213/1991', 'NR-1'] },

{ id: 'q-7.5-031', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre prazos e retificações nos eventos de saúde e segurança do sistema de escrituração digital, é CORRETO afirmar:',
  alts: [
    { t: 'Há prazos definidos para transmissão de cada evento e mecanismos próprios de retificação e exclusão, e o descumprimento pode gerar penalidades — o que torna o controle de prazos parte da rotina do serviço de saúde ocupacional, e não apenas do setor administrativo.', ok: true,
      why: 'Correta. O médico depende de rotina para gerar as informações a tempo, e erros são corrigíveis pelos mecanismos previstos.' },
    { t: 'Não há prazos definidos, bastando transmitir os eventos ao final de cada ano.', ok: false,
      why: 'Errada. Cada evento possui prazo próprio de transmissão.' },
    { t: 'Erros transmitidos são definitivos e não podem ser corrigidos.', ok: false,
      why: 'Errada. Há mecanismos de retificação e exclusão previstos.' },
    { t: 'O controle de prazos é matéria exclusivamente administrativa, sem interface com o serviço médico.', ok: false,
      why: 'Errada. A informação clínica que alimenta o evento vem do serviço médico, que precisa produzi-la dentro do prazo.' },
    { t: 'A transmissão fora do prazo não gera qualquer consequência.', ok: false,
      why: 'Errada. Há previsão de penalidades pelo descumprimento.' }
  ],
  comentario: 'Prazos próprios por evento, mecanismos de retificação e penalidade por descumprimento. Para o médico do trabalho isso significa rotina: o exame precisa gerar a informação no tempo em que ela deve ser transmitida.',
  pegadinha: 'Delegar integralmente o controle de prazos ao setor administrativo desconecta a produção da informação do seu envio.',
  refs: ['eSocial — eventos de SST'] },

/* ================== 7.7 Resoluções do CFM ============================== */
{ id: 'q-7.7-030', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa propõe realizar os exames periódicos por telemedicina, com o trabalhador respondendo a questionário em plataforma e o médico emitindo o atestado sem exame presencial. Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação de aptidão exige exame clínico compatível com os riscos da função, e o uso de recursos de telemedicina em medicina do trabalho é limitado por normas específicas — emitir conclusão de aptidão sem avaliação adequada compromete a validade do ato e a responsabilidade do médico.', ok: true,
      why: 'Correta. O ato de concluir sobre aptidão pressupõe avaliação clínica compatível com a exposição; questionário remoto não a substitui.' },
    { t: 'A telemedicina substitui integralmente o exame presencial em qualquer avaliação ocupacional.', ok: false,
      why: 'Errada. Há limites normativos e clínicos para o uso remoto em avaliação de aptidão.' },
    { t: 'O consentimento do trabalhador legitima a emissão de atestado sem exame.', ok: false,
      why: 'Errada. Consentimento não supre a ausência do ato médico que fundamenta a conclusão.' },
    { t: 'A responsabilidade pela conclusão passa a ser da plataforma contratada.', ok: false,
      why: 'Errada. A responsabilidade pelo ato médico permanece do médico que o assina.' },
    { t: 'Recursos remotos não têm nenhuma aplicação possível em saúde ocupacional.', ok: false,
      why: 'Errada. Há aplicações legítimas, como orientação, triagem e acompanhamento, dentro dos limites normativos.' }
  ],
  comentario: 'Telemedicina tem espaço em saúde ocupacional — orientação, triagem, seguimento —, mas a conclusão de aptidão pressupõe avaliação clínica compatível com o risco. E a responsabilidade pelo ato é sempre de quem assina, não da plataforma.',
  pegadinha: 'A alternativa que transfere a responsabilidade à plataforma reproduz o argumento de que terceirizar ferramenta terceiriza dever.',
  refs: ['Resoluções do CFM sobre telemedicina', 'Resolução CFM sobre normas para médicos que atendem o trabalhador', 'NR-7'] },

{ id: 'q-7.7-031', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um médico do trabalho identifica que o serviço contratado pela empresa vem emitindo atestados de saúde ocupacional em série, sem exame clínico efetivo, assinados por colega. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A prática configura falta ética grave e o médico que a identifica deve comunicá-la ao conselho profissional, além de recusar-se a participar — o dever de comunicar infração ética não se confunde com deslealdade profissional.', ok: true,
      why: 'Correta. Emitir documento sem o ato que o fundamenta é falta grave, e há dever de comunicar, que protege os trabalhadores expostos.' },
    { t: 'A conduta do colega não diz respeito ao médico que a identificou, que deve apenas afastar-se.', ok: false,
      why: 'Errada. Afastar-se sem comunicar deixa a prática continuar sobre outros trabalhadores.' },
    { t: 'A comunicação ao conselho configura quebra do dever de solidariedade entre colegas.', ok: false,
      why: 'Errada. Não há solidariedade profissional que ampare a omissão diante de falta grave.' },
    { t: 'A prática é aceitável se os trabalhadores forem de baixo risco ocupacional.', ok: false,
      why: 'Errada. O risco da função não altera a exigência do ato médico que fundamenta o documento.' },
    { t: 'Basta comunicar internamente à empresa contratante.', ok: false,
      why: 'Errada. A comunicação interna não substitui a comunicação ao conselho profissional.' }
  ],
  comentario: 'Atestado sem exame é documento sem fundamento. Quem identifica tem dever de comunicar ao conselho — e o argumento de "solidariedade entre colegas" não ampara omissão diante de falta que expõe trabalhadores.',
  pegadinha: 'Afastar-se sem comunicar parece conduta correta e apenas transfere o problema para o próximo médico.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM'] },

{ id: 'q-7.7-032', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a atuação do médico do trabalho segundo as normas do conselho profissional, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O médico do trabalho pode deixar de comunicar ao trabalhador achados de exames quando a empresa solicitar, para evitar preocupação desnecessária.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. O trabalhador é o paciente e tem direito à informação sobre a própria saúde; omitir a pedido da empresa é falta ética.' },
    { t: 'Cabe ao médico comunicar ao trabalhador os achados e suas repercussões sobre a saúde.', ok: false,
      why: 'Verdadeira, portanto não é a resposta.' },
    { t: 'É vedado revelar ao empregador o diagnóstico do trabalhador sem autorização expressa deste.', ok: false,
      why: 'Verdadeira. À empresa se comunicam aptidão e restrições.' },
    { t: 'O médico deve agir com autonomia técnica na conclusão sobre aptidão.', ok: false,
      why: 'Verdadeira. O vínculo contratual não subordina o juízo clínico.' },
    { t: 'Diante de risco à saúde coletiva no ambiente, o médico deve comunicar e insistir na correção.', ok: false,
      why: 'Verdadeira. O compromisso primeiro é com a saúde dos trabalhadores.' }
  ],
  comentario: 'Quatro pilares: informar o trabalhador, não revelar diagnóstico ao empregador, autonomia técnica na conclusão de aptidão e dever de agir diante de risco coletivo. A falsa viola o primeiro deles a pedido de quem paga.',
  pegadinha: 'Enunciado de "assinale a INCORRETA": a falsa usa "evitar preocupação" como fachada para omitir informação de saúde ao próprio paciente.',
  refs: ['Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] }

);
