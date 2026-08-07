/* Seção 5 — aprofundamento (5.3, 5.4, 5.5) e seção 4 (4.9)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ======================== 5.4 Perícia Médica =========================== */
{ id: 'q-5.4-020', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em ação trabalhista sobre doença ocupacional, o perito judicial conclui pela existência de nexo com o trabalho, mas registra que o autor está atualmente sem incapacidade laborativa. O advogado alega contradição. Sobre a conclusão, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Não há contradição: nexo e incapacidade são juízos independentes, sendo perfeitamente possível haver doença relacionada ao trabalho sem incapacidade atual, e também incapacidade sem relação com o trabalho.', ok: true,
      why: 'Correta. São duas perguntas distintas — "a doença tem relação com o trabalho?" e "há incapacidade?" — e a resposta a uma não determina a resposta à outra.' },
    { t: 'Reconhecido o nexo, a incapacidade é presumida e deve ser declarada.', ok: false,
      why: 'Errada. Presumir incapacidade a partir do nexo confunde origem da doença com repercussão funcional atual.' },
    { t: 'A ausência de incapacidade atual afasta necessariamente o nexo.', ok: false,
      why: 'Errada, e é a inversão da anterior. Uma doença ocupacional pode estar controlada, em remissão ou ser de repercussão leve.' },
    { t: 'O perito deve escolher uma das duas conclusões, pois o laudo não pode conter respostas aparentemente opostas.', ok: false,
      why: 'Errada. O laudo responde aos quesitos formulados, e responder com precisão a perguntas distintas não é contradição.' },
    { t: 'A existência de sequela sem incapacidade não gera qualquer repercussão jurídica.', ok: false,
      why: 'Errada. Sequela que reduz a capacidade sem incapacitar pode gerar repercussão indenizatória própria.' }
  ],
  comentario: 'Separe sempre as três perguntas da perícia: existe doença? ela tem relação com o trabalho (nexo)? há repercussão sobre a capacidade (incapacidade), e de que tipo? As respostas são independentes, e é justamente essa independência que a banca cobra.',
  pegadinha: 'As duas alternativas erradas mais fortes são inversas entre si — presumir incapacidade pelo nexo e afastar nexo pela ausência de incapacidade. As duas cometem o mesmo erro.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-021', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um médico é nomeado perito e verifica que já havia atendido o autor como médico assistente há três anos, em outro contexto clínico. Sobre a conduta ética, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve informar o juízo e recusar a nomeação, pois ter sido médico assistente da parte compromete a imparcialidade exigida do perito, ainda que o atendimento tenha sido antigo e por outro motivo.', ok: true,
      why: 'Correta. A vedação de acumular as funções de assistente e de perito no mesmo caso protege a imparcialidade e não se relativiza pelo tempo decorrido ou pelo motivo do atendimento anterior.' },
    { t: 'Pode atuar normalmente, já que o atendimento anterior tratava de outra queixa.', ok: false,
      why: 'Errada. A relação prévia médico-paciente com a parte é o que gera o impedimento, independentemente do motivo do atendimento.' },
    { t: 'Pode atuar desde que utilize no laudo apenas os dados obtidos na perícia.', ok: false,
      why: 'Errada. O problema é a relação prévia com a parte, e não a origem dos dados usados no laudo.' },
    { t: 'Deve atuar e utilizar as informações do atendimento anterior para enriquecer o laudo.', ok: false,
      why: 'Errada e duplamente grave: além do impedimento, usar informações obtidas sob sigilo assistencial em perícia viola o sigilo médico.' },
    { t: 'A decisão cabe exclusivamente ao juiz, sem obrigação de o médico informar a relação prévia.', ok: false,
      why: 'Errada. Informar o fato é dever do médico; a omissão é que configura a falta.' }
  ],
  comentario: 'Três papéis, três lógicas: assistente cuida do paciente, assistente técnico defende o interesse de quem o contratou, perito auxilia o juízo com imparcialidade. Quem já ocupou um papel no caso não ocupa outro — e o dever de informar o impedimento é do próprio médico.',
  pegadinha: 'O tempo decorrido e a "outra queixa" são atenuantes aparentes que não sanam o impedimento.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-022', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a estrutura e o conteúdo do laudo pericial em medicina do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O laudo deve descrever a metodologia empregada, os achados e o raciocínio que liga os achados às conclusões, respondendo objetivamente aos quesitos, de modo que um terceiro possa acompanhar como se chegou àquela conclusão.', ok: true,
      why: 'Correta. O valor do laudo está na rastreabilidade do raciocínio: conclusão sem demonstração do caminho não é peça técnica, é opinião.' },
    { t: 'Basta apresentar a conclusão, pois a fundamentação é matéria interna do perito.', ok: false,
      why: 'Errada. Sem fundamentação explícita a conclusão não é verificável nem contestável, o que descaracteriza a peça técnica.' },
    { t: 'O perito deve responder apenas aos quesitos da parte que o indicou.', ok: false,
      why: 'Errada. O perito é auxiliar do juízo e responde aos quesitos deferidos, de todas as partes; quem é indicado por uma parte é o assistente técnico.' },
    { t: 'O laudo deve evitar mencionar exames e documentos apresentados, para não induzir o juízo.', ok: false,
      why: 'Errada. Descrever os elementos analisados é parte essencial da fundamentação.' },
    { t: 'Havendo divergência com o assistente técnico, o perito deve alterar sua conclusão para evitar controvérsia.', ok: false,
      why: 'Errada. A divergência é legítima e faz parte do processo; alterar a conclusão por conveniência compromete a integridade do trabalho pericial.' }
  ],
  comentario: 'Um laudo se sustenta por três elementos: metodologia declarada, achados descritos e raciocínio explícito ligando achados a conclusões, com resposta objetiva aos quesitos. E lembre da distinção: o perito responde ao juízo; quem responde a uma parte é o assistente técnico.',
  pegadinha: 'A alternativa sobre responder só aos quesitos de quem indicou confunde deliberadamente perito com assistente técnico.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Penteado — Perícias em DORT'] },

{ id: 'q-5.4-023', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia de trabalhador com queixa de dor crônica em membros superiores, os exames de imagem são normais e o exame físico mostra achados inconsistentes entre manobras. Sobre a conduta pericial, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A normalidade dos exames de imagem não exclui o quadro doloroso nem a incapacidade, pois em distúrbios musculoesqueléticos relacionados ao trabalho a correlação entre imagem e sintoma é frequentemente fraca; a avaliação deve integrar história, exame, resposta terapêutica e análise da atividade.', ok: true,
      why: 'Correta. Exigir substrato de imagem para reconhecer dor e incapacidade em distúrbios musculoesqueléticos ignora o que se conhece sobre a fraca correlação entre achado estrutural e sintoma.' },
    { t: 'Exames normais autorizam concluir pela inexistência de doença e pela plena capacidade.', ok: false,
      why: 'Errada. É o raciocínio que mais produz injustiça neste tema, por exigir prova estrutural de um fenômeno predominantemente funcional.' },
    { t: 'Inconsistências entre manobras comprovam simulação.', ok: false,
      why: 'Errada. Dor crônica cursa com variabilidade, sensibilização central e influência do contexto; inconsistência isolada não comprova intenção de enganar.' },
    { t: 'A análise da atividade de trabalho é irrelevante para a perícia, por ser matéria de ergonomia.', ok: false,
      why: 'Errada. Conhecer as exigências reais da atividade é essencial tanto para o nexo quanto para o juízo de capacidade.' },
    { t: 'A queixa de dor, por ser subjetiva, não pode fundamentar conclusão pericial.', ok: false,
      why: 'Errada. A dor é sintoma avaliável clinicamente e fundamenta conclusões, desde que integrada aos demais elementos.' }
  ],
  comentario: 'Em distúrbios musculoesqueléticos relacionados ao trabalho a imagem explica pouco. A conclusão se constrói integrando história ocupacional, exame físico, evolução, resposta ao tratamento e exigências reais da atividade. Exame normal não é sinônimo de ausência de doença nem de capacidade preservada.',
  pegadinha: 'Tratar inconsistência entre manobras como prova de simulação é atalho frequente e tecnicamente insustentável.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

/* ======= 5.5 Incapacidade Laborativa e Dano Corporal =================== */
{ id: 'q-5.5-020', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao classificar a incapacidade de um trabalhador, o perito precisa indicar sua abrangência. A associação CORRETA entre o conceito e sua definição é:',
  alts: [
    { t: 'Incapacidade omniprofissional é aquela que impede o exercício de toda e qualquer atividade laborativa.', ok: true,
      why: 'Correta. É o grau máximo de abrangência: nenhuma atividade remunerada é possível, e é o que fundamenta a aposentadoria por incapacidade permanente.' },
    { t: 'Incapacidade uniprofissional impede o exercício de todas as profissões afins àquela exercida.', ok: false,
      why: 'Errada. A uniprofissional impede apenas a atividade específica que o trabalhador exercia, preservando outras.' },
    { t: 'Incapacidade multiprofissional é sinônimo de incapacidade total e permanente.', ok: false,
      why: 'Errada. A multiprofissional impede um conjunto de atividades afins, mas não necessariamente todas; e abrangência não se confunde com duração.' },
    { t: 'Incapacidade parcial e incapacidade temporária são expressões equivalentes.', ok: false,
      why: 'Errada. São eixos diferentes: parcial x total é extensão; temporária x permanente é duração. Existem as quatro combinações.' },
    { t: 'A classificação da abrangência independe das exigências da atividade exercida.', ok: false,
      why: 'Errada. É justamente o confronto entre a limitação e as exigências das atividades que define a abrangência.' }
  ],
  comentario: 'Dois eixos e uma escala. Eixos: extensão (parcial/total) e duração (temporária/permanente). Escala de abrangência: uniprofissional (a atividade exercida), multiprofissional (um conjunto de atividades afins) e omniprofissional (toda e qualquer atividade). A última é a que sustenta a aposentadoria por incapacidade permanente.',
  pegadinha: 'Misturar os eixos — tratar "parcial" e "temporária" como sinônimos — é o erro mais frequente do tema.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-021', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar as repercussões de uma sequela, o perito utiliza o referencial da Classificação Internacional de Funcionalidade. Sobre esse modelo, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O modelo articula deficiência (estrutura e função), limitação de atividade e restrição de participação, considerando fatores ambientais e pessoais — de modo que a mesma lesão pode gerar repercussões diferentes conforme o contexto.', ok: true,
      why: 'Correta. É o eixo biopsicossocial: a funcionalidade resulta da interação entre a condição de saúde e o contexto, e não apenas do dano anatômico.' },
    { t: 'O modelo classifica a incapacidade exclusivamente pela perda anatômica mensurada.', ok: false,
      why: 'Errada. A perda anatômica é apenas o componente de estrutura corporal; a classificação avança para atividade, participação e contexto.' },
    { t: 'Fatores ambientais são irrelevantes na avaliação da funcionalidade.', ok: false,
      why: 'Errada. Barreiras e facilitadores do ambiente são componentes explícitos do modelo e podem transformar uma limitação em restrição de participação, ou evitá-la.' },
    { t: 'Deficiência, limitação de atividade e restrição de participação são termos equivalentes.', ok: false,
      why: 'Errada. São níveis distintos: o corpo, a execução de tarefas e o envolvimento em situações de vida.' },
    { t: 'O modelo é aplicável apenas à avaliação de pessoas com deficiência para fins de cotas.', ok: false,
      why: 'Errada. É referencial geral de funcionalidade, aplicável à avaliação de incapacidade laborativa e à reabilitação.' }
  ],
  comentario: 'O modelo biopsicossocial separa três níveis — corpo (deficiência), execução de tarefas (limitação de atividade) e vida social e laboral (restrição de participação) — e acrescenta os fatores ambientais. A consequência prática: adaptar o ambiente pode eliminar a restrição sem mudar a lesão.',
  pegadinha: 'Reduzir a avaliação à perda anatômica é o modelo antigo, e continua sendo a alternativa mais escolhida por quem não estudou o tema.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 13.146/2015'] },

{ id: 'q-5.5-022', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofreu queimadura facial extensa em acidente do trabalho, com cicatrizes visíveis e retração, sem limitação funcional demonstrável. Sobre a avaliação do dano, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Cabe avaliar o dano estético de forma autônoma em relação ao dano funcional, pois a repercussão sobre a imagem e a vida de relação existe independentemente de haver limitação de função.', ok: true,
      why: 'Correta. Dano estético e dano funcional são categorias distintas e podem ocorrer isoladamente ou em conjunto, com repercussões próprias.' },
    { t: 'Sem limitação funcional não há dano indenizável.', ok: false,
      why: 'Errada. O dano estético tem existência e repercussão próprias, reconhecidas de forma autônoma.' },
    { t: 'Dano estético e dano moral são a mesma categoria.', ok: false,
      why: 'Errada. São categorias distintas, ainda que possam coexistir e cumular-se no mesmo caso.' },
    { t: 'A avaliação do dano estético cabe exclusivamente ao cirurgião plástico.', ok: false,
      why: 'Errada. A avaliação é pericial e considera visibilidade, permanência, extensão e repercussão sobre a vida de relação.' },
    { t: 'A possibilidade de correção cirúrgica futura afasta desde logo a caracterização do dano.', ok: false,
      why: 'Errada. Avalia-se o dano existente; a perspectiva de tratamento não o apaga, ainda que possa ser considerada.' }
  ],
  comentario: 'Dano funcional (perda de função), dano estético (alteração permanente e visível da harmonia física) e dano moral são categorias autônomas e cumuláveis. A ausência de limitação funcional não elimina o dano estético — e o dano estético se avalia por visibilidade, permanência e repercussão na vida de relação.',
  pegadinha: 'Condicionar a existência de dano à perda de função é a redução mais comum e a que mais prejudica o trabalhador.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-023', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação da incapacidade laborativa, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A gravidade do diagnóstico determina, por si só, o grau de incapacidade laborativa.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Diagnóstico não define incapacidade: o que define é o confronto entre a repercussão funcional e as exigências concretas da atividade exercida.' },
    { t: 'Duas pessoas com o mesmo diagnóstico podem ter graus diferentes de incapacidade conforme a atividade que exercem.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. É a consequência direta de a incapacidade ser relacional.' },
    { t: 'A idade, a escolaridade e a possibilidade de reabilitação são elementos considerados na avaliação.', ok: false,
      why: 'Verdadeira. Compõem o juízo sobre a possibilidade concreta de reinserção em outra atividade.' },
    { t: 'A incapacidade deve ser reavaliada periodicamente quando classificada como temporária.', ok: false,
      why: 'Verdadeira. É a própria natureza da classificação temporária.' },
    { t: 'A capacidade residual preservada aponta para reabilitação profissional em vez de aposentadoria por incapacidade permanente.', ok: false,
      why: 'Verdadeira. Havendo capacidade residual, o caminho é a reabilitação.' }
  ],
  comentario: 'Incapacidade é sempre relacional: depende da repercussão funcional confrontada com as exigências da atividade, moduladas por idade, escolaridade e possibilidade de reabilitação. O mesmo diagnóstico incapacita um trabalhador e não incapacita outro.',
  pegadinha: 'É "assinale a INCORRETA": a falsa é a que trata o diagnóstico como determinante — exatamente o raciocínio que a perícia moderna abandona.',
  refs: ['Lei nº 8.213/1991', 'Tabela brasileira para apuração do dano corporal — ABMLPM'] },

/* ======================== 5.3 Concausalidade ============================ */
{ id: 'q-5.3-020', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre acidente do trabalho com fratura de tornozelo. Durante a internação, adquire infecção hospitalar que prolonga o tratamento e deixa sequela funcional maior do que a esperada pela fratura isolada. Sobre a caracterização, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A infecção configura concausa superveniente, que se soma ao acidente e agrava seu resultado, mantendo a caracterização do conjunto como decorrente do acidente do trabalho.', ok: true,
      why: 'Correta. A concausa superveniente surge depois do evento e amplia o dano; o resultado final permanece vinculado ao acidente que desencadeou toda a cadeia.' },
    { t: 'A infecção rompe o nexo, devendo o agravamento ser tratado como doença comum autônoma.', ok: false,
      why: 'Errada. A complicação decorrente do tratamento do acidente integra a cadeia causal iniciada por ele.' },
    { t: 'Trata-se de concausa preexistente, por envolver a suscetibilidade individual do trabalhador.', ok: false,
      why: 'Errada. Preexistente é a condição que já existia antes do evento; a infecção surgiu depois, no curso do tratamento.' },
    { t: 'A responsabilidade transfere-se integralmente ao serviço de saúde, afastando a natureza acidentária.', ok: false,
      why: 'Errada. Eventual responsabilidade de terceiro é discussão distinta e não descaracteriza a natureza acidentária do conjunto.' },
    { t: 'Como o agravamento não ocorreu no ambiente de trabalho, não há repercussão previdenciária.', ok: false,
      why: 'Errada. O que importa é a cadeia causal iniciada pelo acidente do trabalho, não o local onde a complicação se instalou.' }
  ],
  comentario: 'Concausa superveniente: surge DEPOIS do evento e agrava o resultado, sem romper o nexo. Complicações do tratamento — infecção, reação a medicamento, acidente no transporte para atendimento — integram a cadeia iniciada pelo acidente do trabalho.',
  pegadinha: 'A ideia de que a complicação "rompe" o nexo é a defesa mais comum e contraria a lógica da concausa.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.3-021', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contesta o reconhecimento de doença ocupacional alegando que o trabalhador pratica atividade esportiva intensa nos fins de semana, o que também sobrecarrega a região acometida. Sobre a alegação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A existência de fator extraocupacional concorrente não afasta o nexo, pois basta que o trabalho tenha contribuído para o resultado; caberia à defesa demonstrar que o trabalho não teve qualquer participação.', ok: true,
      why: 'Correta. A lógica da concausa dispensa exclusividade: contribuição já basta. Apontar outra causa concorrente não elimina a participação do trabalho.' },
    { t: 'A existência de qualquer atividade extraocupacional sobre a mesma região afasta automaticamente o nexo.', ok: false,
      why: 'Errada. Seria exigir causa única, requisito que a concausalidade justamente dispensa.' },
    { t: 'O nexo só se mantém se a contribuição do trabalho for demonstrada como superior a cinquenta por cento.', ok: false,
      why: 'Errada. Não há exigência de percentual mínimo de contribuição para o reconhecimento.' },
    { t: 'Comprovada a concausa extraocupacional, o benefício deve ser reduzido proporcionalmente.', ok: false,
      why: 'Errada. Não há rateio proporcional do reconhecimento previdenciário em razão de concausa.' },
    { t: 'A prática esportiva do trabalhador deve ser proibida pela empresa como condição para manutenção do vínculo.', ok: false,
      why: 'Errada. A empresa não dispõe da vida privada do trabalhador; a obrigação dela é sobre as condições de trabalho.' }
  ],
  comentario: 'Concausa não divide culpa nem exige maioria: se o trabalho contribuiu, há nexo. A alegação de "outra causa" é a defesa mais comum em distúrbios musculoesqueléticos e não se sustenta por si — ela precisaria demonstrar que o trabalho não participou em nada.',
  pegadinha: 'A exigência de "mais de cinquenta por cento" soa razoável e não existe na lógica da concausalidade.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

/* ========= 4.9 Doenças Infectocontagiosas de Interesse Ocupacional ====== */
{ id: 'q-4.9-020', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde assintomático, em avaliação periódica, apresenta prova tuberculínica com viragem em relação ao exame anterior, com radiografia de tórax normal. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O achado sugere infecção latente pelo bacilo da tuberculose, e a conduta é excluir doença ativa e avaliar a indicação de tratamento da infecção latente, além de investigar a fonte de exposição no serviço.', ok: true,
      why: 'Correta. Viragem tuberculínica com imagem normal e ausência de sintomas caracteriza infecção latente; excluída a doença ativa, discute-se o tratamento da forma latente e investiga-se a exposição ocupacional.' },
    { t: 'A viragem indica doença ativa e o tratamento com esquema completo deve ser iniciado imediatamente.', ok: false,
      why: 'Errada. Infecção latente não é doença ativa e não recebe o mesmo esquema terapêutico; iniciar tratamento de doença sem ela é erro grave.' },
    { t: 'Sendo assintomático, nenhuma conduta é necessária além de repetir o exame no próximo periódico.', ok: false,
      why: 'Errada. A viragem indica infecção recente, com risco de adoecimento, e é justamente a situação em que o tratamento da infecção latente mais se justifica.' },
    { t: 'O achado configura falso-positivo em razão da vacinação prévia, dispensando qualquer avaliação.', ok: false,
      why: 'Errada. A viragem em relação a exame anterior sugere infecção recente e não deve ser atribuída sem investigação a efeito vacinal.' },
    { t: 'A investigação da fonte no ambiente de trabalho é dispensável quando o profissional está assintomático.', ok: false,
      why: 'Errada. A viragem é indicador de transmissão no serviço e obriga a investigar controles ambientais e casos-fonte.' }
  ],
  comentario: 'Viragem tuberculínica em profissional de saúde é evento sentinela: indica transmissão recente. Conduta em três passos — excluir doença ativa, avaliar tratamento da infecção latente e investigar a exposição no serviço. Infecção latente e doença ativa são coisas distintas, com condutas distintas.',
  pegadinha: 'Tratar viragem como doença ativa e tratar como "nada a fazer" são os dois extremos oferecidos, e ambos erram.',
  refs: ['Protocolo de vigilância da infecção latente pelo M. tuberculosis — Ministério da Saúde', 'NR-32'] },

{ id: 'q-4.9-021', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de zona rural, que atua em desmatamento e manejo de mata, procura o serviço médico antes de iniciar as atividades. Sobre a prevenção de doenças infecciosas de interesse ocupacional nesse contexto, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A avaliação deve considerar as doenças endêmicas da região e as exposições próprias da atividade, incluindo risco de ferimentos, contato com animais e vetores, com orientação e imunização conforme o mapa de risco local.', ok: true,
      why: 'Correta. O raciocínio combina a epidemiologia do território com as exposições concretas da atividade — é isso que define quais medidas se aplicam.' },
    { t: 'As doenças endêmicas da região nunca podem ser reconhecidas como relacionadas ao trabalho.', ok: false,
      why: 'Errada. A exclusão legal das doenças endêmicas tem ressalva expressa: quando resultam de exposição determinada pela natureza do trabalho, são reconhecidas.' },
    { t: 'A prevenção se resume ao fornecimento de repelente aos trabalhadores.', ok: false,
      why: 'Errada. Envolve organização do trabalho, vestimenta adequada, controle ambiental, imunização quando cabível e vigilância dos casos.' },
    { t: 'A imunização é desnecessária quando o trabalhador é natural da região endêmica.', ok: false,
      why: 'Errada. Ser natural da região não confere proteção contra os agentes envolvidos nem dispensa a avaliação do esquema vacinal.' },
    { t: 'Casos de doença endêmica em trabalhadores não devem ser notificados quando já são frequentes na região.', ok: false,
      why: 'Errada. A frequência não dispensa a notificação — é ela que permite dimensionar e intervir.' }
  ],
  comentario: 'A ressalva da doença endêmica é o ponto crítico: se a exposição decorre da natureza do trabalho, há nexo. Combine sempre o mapa epidemiológico do território com as exposições concretas da atividade, e lembre que a notificação não depende de a doença ser rara.',
  pegadinha: 'A exclusão das doenças endêmicas é citada sem a ressalva com muita frequência — e a ressalva é justamente o que a prova cobra.',
  refs: ['Lei nº 8.213/1991 — art. 20, §1º', 'Ministério da Saúde — notas técnicas de agravos'] },

{ id: 'q-4.9-022', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre hepatites virais no contexto ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A hepatite B dispõe de imunização eficaz e de conduta pós-exposição definida, enquanto para a hepatite C não há vacina disponível, o que torna as medidas de barreira e o manejo do acidente ainda mais críticos.', ok: true,
      why: 'Correta. A diferença de disponibilidade de vacina entre as duas é o ponto que orienta a estratégia preventiva e a conduta após acidente com material biológico.' },
    { t: 'Existe vacina eficaz contra a hepatite C, indicada a todos os profissionais de saúde.', ok: false,
      why: 'Errada. Não há vacina disponível contra a hepatite C.' },
    { t: 'A vacinação contra hepatite B dispensa a verificação de resposta sorológica em profissionais expostos.', ok: false,
      why: 'Errada. A verificação identifica não respondedores, cuja conduta após exposição é diferente.' },
    { t: 'A ausência de sintomas após exposição a material biológico dispensa o seguimento sorológico.', ok: false,
      why: 'Errada. A infecção pode ser assintomática por longo período; o seguimento é justamente o que permite detectá-la.' },
    { t: 'A hepatite B relacionada a acidente ocupacional não é reconhecida como doença relacionada ao trabalho.', ok: false,
      why: 'Errada. Havendo exposição ocupacional documentada e soroconversão compatível, o reconhecimento é cabível.' }
  ],
  comentario: 'Guarde a assimetria: hepatite B tem vacina e conduta pós-exposição definida, com a resposta sorológica importando para a decisão; hepatite C não tem vacina, o que desloca todo o peso para as barreiras e o seguimento. E o seguimento sorológico independe de sintoma.',
  pegadinha: 'A alternativa que inventa vacina para hepatite C é grosseira, mas passa despercebida por quem lê rápido em prova longa.',
  refs: ['PCDT — Profilaxia Pós-Exposição — Ministério da Saúde', 'NR-32'] }

);
