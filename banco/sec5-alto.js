/* Seção 5 — aprofundamento (5.3, 5.4, 5.5) e seção 4 (4.9)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ======================== 5.4 Perícia Médica =========================== */
{ id: 'q-5.4-020', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em ação trabalhista sobre doença ocupacional, o perito judicial conclui pela existência de nexo com o trabalho, mas registra que o autor está atualmente sem incapacidade laborativa. O advogado alega contradição. Sobre a conclusão, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Não há contradição: nexo e incapacidade são juízos independentes entre si.', ok: true,
      why: 'Correta. Cabe doença relacionada ao trabalho sem incapacidade, e o inverso também.' },
    { t: 'Há contradição, pois reconhecido o nexo a incapacidade é presumida e deve ser declarada.', ok: false,
      why: 'Errada. São juízos independentes.' },
    { t: 'Há contradição, pois a ausência de incapacidade atual afasta necessariamente o nexo com o trabalho.', ok: false,
      why: 'Errada. Doença relacionada ao trabalho pode não incapacitar.' },
    { t: 'Há contradição, devendo o perito escolher uma das conclusões, pois o laudo não pode ser oposto.', ok: false,
      why: 'Errada. As respostas coexistem porque as perguntas são distintas.' },
    { t: 'Não há contradição, e a sequela sem incapacidade não gera qualquer repercussão jurídica.', ok: false,
      why: 'Errada. Pode gerar auxílio-acidente e estabilidade.' }
  ],
  comentario: 'Separe sempre as três perguntas da perícia: existe doença? ela tem relação com o trabalho (nexo)? há repercussão sobre a capacidade (incapacidade), e de que tipo? As respostas são independentes, e é justamente essa independência que a banca cobra.',
  pegadinha: 'As duas alternativas erradas mais fortes são inversas entre si — presumir incapacidade pelo nexo e afastar nexo pela ausência de incapacidade. As duas cometem o mesmo erro.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-021', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um médico é nomeado perito e verifica que já havia atendido o autor como médico assistente há três anos, em outro contexto clínico. Sobre a conduta ética, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve informar o juízo e recusar: ter sido assistente da parte compromete a imparcialidade.', ok: true,
      why: 'Correta. Vale mesmo que o atendimento tenha sido antigo e por outro motivo.' },
    { t: 'Pode atuar normalmente, já que o atendimento anterior tratava de queixa diversa da discutida.', ok: false,
      why: 'Errada. O impedimento decorre da relação prévia, não do motivo.' },
    { t: 'Pode atuar desde que utilize no laudo apenas os dados obtidos durante o exame pericial atual.', ok: false,
      why: 'Errada. O impedimento persiste independentemente da fonte dos dados.' },
    { t: 'Deve atuar e usar as informações do atendimento anterior para enriquecer a fundamentação do laudo.', ok: false,
      why: 'Errada. Isso agrava a situação: soma impedimento e quebra de sigilo.' },
    { t: 'A decisão cabe ao juiz, sem obrigação de o médico informar a relação prévia com a parte.', ok: false,
      why: 'Errada. Informar o impedimento é dever do próprio perito.' }
  ],
  comentario: 'Três papéis, três lógicas: assistente cuida do paciente, assistente técnico defende o interesse de quem o contratou, perito auxilia o juízo com imparcialidade. Quem já ocupou um papel no caso não ocupa outro — e o dever de informar o impedimento é do próprio médico.',
  pegadinha: 'O tempo decorrido e a "outra queixa" são atenuantes aparentes que não sanam o impedimento.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-022', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a estrutura e o conteúdo do laudo pericial em medicina do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve descrever metodologia, achados e o raciocínio que liga os achados às conclusões.', ok: true,
      why: 'Correta. Um terceiro precisa poder acompanhar como se chegou àquela conclusão.' },
    { t: 'Basta apresentar a conclusão alcançada, pois a fundamentação é matéria interna do perito nomeado.', ok: false,
      why: 'Errada. Sem fundamentação o laudo não permite contraditório.' },
    { t: 'Deve responder apenas aos quesitos formulados pela parte que indicou o profissional para o caso.', ok: false,
      why: 'Errada. O perito é do juízo e responde a todos os quesitos pertinentes.' },
    { t: 'Deve evitar mencionar exames e documentos apresentados, para não induzir o convencimento do juízo.', ok: false,
      why: 'Errada. Devem ser analisados e comentados na fundamentação.' },
    { t: 'Deve descrever o raciocínio e, havendo divergência com o assistente, alterar a conclusão.', ok: false,
      why: 'Errada. Altera-se pelo mérito técnico, não para evitar controvérsia.' }
  ],
  comentario: 'Um laudo se sustenta por três elementos: metodologia declarada, achados descritos e raciocínio explícito ligando achados a conclusões, com resposta objetiva aos quesitos. E lembre da distinção: o perito responde ao juízo; quem responde a uma parte é o assistente técnico.',
  pegadinha: 'A alternativa sobre responder só aos quesitos de quem indicou confunde deliberadamente perito com assistente técnico.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Penteado — Perícias em DORT'] },

{ id: 'q-5.4-023', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia de trabalhador com queixa de dor crônica em membros superiores, os exames de imagem são normais e o exame físico mostra achados inconsistentes entre manobras. Sobre a conduta pericial, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Imagem normal não exclui dor nem incapacidade: a correlação com sintoma é fraca.', ok: true,
      why: 'Correta. A avaliação integra história, exame, resposta terapêutica e análise da atividade.' },
    { t: 'Exames normais autorizam concluir pela inexistência de doença e pela plena capacidade laborativa.', ok: false,
      why: 'Errada. Vários quadros não têm tradução em imagem.' },
    { t: 'Imagem normal não exclui o quadro, mas inconsistências entre manobras comprovam simulação.', ok: false,
      why: 'Errada. Ocorrem em quadros legítimos de dor crônica.' },
    { t: 'Imagem normal não exclui o quadro, sendo a análise da atividade irrelevante por ser de ergonomia.', ok: false,
      why: 'Errada. É elemento central do raciocínio de nexo.' },
    { t: 'Imagem normal não exclui o quadro, mas a dor, por subjetiva, não fundamenta conclusão pericial.', ok: false,
      why: 'Errada. É elemento a avaliar criticamente, não a descartar.' }
  ],
  comentario: 'Em distúrbios musculoesqueléticos relacionados ao trabalho a imagem explica pouco. A conclusão se constrói integrando história ocupacional, exame físico, evolução, resposta ao tratamento e exigências reais da atividade. Exame normal não é sinônimo de ausência de doença nem de capacidade preservada.',
  pegadinha: 'Tratar inconsistência entre manobras como prova de simulação é atalho frequente e tecnicamente insustentável.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

/* ======= 5.5 Incapacidade Laborativa e Dano Corporal =================== */
{ id: 'q-5.5-020', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao classificar a incapacidade de um trabalhador, o perito precisa indicar sua abrangência. A associação CORRETA entre o conceito e sua definição é:',
  alts: [
    { t: 'Omniprofissional é a que impede o exercício de toda e qualquer atividade laborativa.', ok: true,
      why: 'Correta. É o grau máximo de abrangência da incapacidade.' },
    { t: 'Uniprofissional é a que impede o exercício de todas as profissões afins àquela exercida hoje.', ok: false,
      why: 'Errada. A uniprofissional atinge apenas a profissão específica.' },
    { t: 'Multiprofissional é sinônimo de incapacidade total e permanente para o exercício de atividade.', ok: false,
      why: 'Errada. Abrangência e duração são dimensões distintas.' },
    { t: 'Incapacidade parcial e incapacidade temporária são expressões equivalentes na avaliação pericial.', ok: false,
      why: 'Errada. Uma trata de grau; a outra, de duração.' },
    { t: 'A classificação da abrangência independe das exigências concretas da atividade que é exercida.', ok: false,
      why: 'Errada. A capacidade é sempre relacional à exigência.' }
  ],
  comentario: 'Dois eixos e uma escala. Eixos: extensão (parcial/total) e duração (temporária/permanente). Escala de abrangência: uniprofissional (a atividade exercida), multiprofissional (um conjunto de atividades afins) e omniprofissional (toda e qualquer atividade). A última é a que sustenta a aposentadoria por incapacidade permanente.',
  pegadinha: 'Misturar os eixos — tratar "parcial" e "temporária" como sinônimos — é o erro mais frequente do tema.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-021', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar as repercussões de uma sequela, o perito utiliza o referencial da Classificação Internacional de Funcionalidade. Sobre esse modelo, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Articula estrutura e função, limitação de atividade e restrição de participação, com contexto.', ok: true,
      why: 'Correta. A mesma lesão gera repercussões diferentes conforme o contexto.' },
    { t: 'Classifica a incapacidade exclusivamente pela perda anatômica mensurada em cada segmento corporal.', ok: false,
      why: 'Errada. O modelo é biopsicossocial e vai além da estrutura.' },
    { t: 'Articula os três níveis, sendo os fatores ambientais irrelevantes na avaliação da funcionalidade.', ok: false,
      why: 'Errada. São componente explícito da classificação.' },
    { t: 'Deficiência, limitação de atividade e restrição de participação são termos equivalentes no modelo.', ok: false,
      why: 'Errada. São níveis distintos e não intercambiáveis.' },
    { t: 'Articula os três níveis, com aplicação restrita à avaliação de pessoas com deficiência para cotas.', ok: false,
      why: 'Errada. É amplamente aplicável à avaliação de capacidade.' }
  ],
  comentario: 'O modelo biopsicossocial separa três níveis — corpo (deficiência), execução de tarefas (limitação de atividade) e vida social e laboral (restrição de participação) — e acrescenta os fatores ambientais. A consequência prática: adaptar o ambiente pode eliminar a restrição sem mudar a lesão.',
  pegadinha: 'Reduzir a avaliação à perda anatômica é o modelo antigo, e continua sendo a alternativa mais escolhida por quem não estudou o tema.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 13.146/2015'] },

{ id: 'q-5.5-022', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofreu queimadura facial extensa em acidente do trabalho, com cicatrizes visíveis e retração, sem limitação funcional demonstrável. Sobre a avaliação do dano, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Cabe avaliar o dano estético de forma autônoma em relação ao dano funcional.', ok: true,
      why: 'Correta. A repercussão sobre imagem e vida de relação independe da função.' },
    { t: 'Não há dano indenizável quando não se demonstra limitação funcional decorrente da sequela.', ok: false,
      why: 'Errada. O dano estético é categoria própria e autônoma.' },
    { t: 'Cabe avaliar o dano estético, categoria que se confunde com o dano moral na reparação civil.', ok: false,
      why: 'Errada. São categorias distintas e cumuláveis.' },
    { t: 'Cabe avaliar o dano estético, atribuição que compete exclusivamente ao cirurgião plástico.', ok: false,
      why: 'Errada. É avaliação pericial, não de especialidade única.' },
    { t: 'Cabe avaliar o dano estético, afastado desde logo pela possibilidade de correção cirúrgica futura.', ok: false,
      why: 'Errada. A correção futura e incerta não afasta o dano atual.' }
  ],
  comentario: 'Dano funcional (perda de função), dano estético (alteração permanente e visível da harmonia física) e dano moral são categorias autônomas e cumuláveis. A ausência de limitação funcional não elimina o dano estético — e o dano estético se avalia por visibilidade, permanência e repercussão na vida de relação.',
  pegadinha: 'Condicionar a existência de dano à perda de função é a redução mais comum e a que mais prejudica o trabalhador.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-023', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação da incapacidade laborativa, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A gravidade do diagnóstico determina, por si só, o grau de incapacidade laborativa.', ok: true,
      why: 'É a INCORRETA. A incapacidade depende da exigência da atividade exercida.' },
    { t: 'Duas pessoas com o mesmo diagnóstico podem ter graus diferentes de incapacidade conforme a atividade.', ok: false,
      why: 'Correta, portanto não é a resposta. A capacidade é relacional.' },
    { t: 'A idade, a escolaridade e a possibilidade de reabilitação são elementos considerados na avaliação.', ok: false,
      why: 'Correta, portanto não é a resposta. Compõem a viabilidade concreta.' },
    { t: 'A incapacidade deve ser reavaliada periodicamente quando classificada como de caráter temporário.', ok: false,
      why: 'Correta, portanto não é a resposta. A reavaliação é prevista.' },
    { t: 'A capacidade residual preservada aponta para reabilitação em vez de aposentadoria por incapacidade.', ok: false,
      why: 'Correta, portanto não é a resposta. A reabilitação precede a conclusão máxima.' }
  ],
  comentario: 'Incapacidade é sempre relacional: depende da repercussão funcional confrontada com as exigências da atividade, moduladas por idade, escolaridade e possibilidade de reabilitação. O mesmo diagnóstico incapacita um trabalhador e não incapacita outro.',
  pegadinha: 'É "assinale a INCORRETA": a falsa é a que trata o diagnóstico como determinante — exatamente o raciocínio que a perícia moderna abandona.',
  refs: ['Lei nº 8.213/1991', 'Tabela brasileira para apuração do dano corporal — ABMLPM'] },

/* ======================== 5.3 Concausalidade ============================ */
{ id: 'q-5.3-020', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre acidente do trabalho com fratura de tornozelo. Durante a internação, adquire infecção hospitalar que prolonga o tratamento e deixa sequela funcional maior do que a esperada pela fratura isolada. Sobre a caracterização, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A infecção é concausa superveniente, que se soma ao acidente e agrava seu resultado.', ok: true,
      why: 'Correta. O conjunto permanece caracterizado como decorrente do acidente do trabalho.' },
    { t: 'A infecção rompe o nexo, devendo o agravamento ser tratado como doença comum autônoma.', ok: false,
      why: 'Errada. É concausa superveniente e mantém o vínculo com o evento.' },
    { t: 'A infecção é concausa preexistente, por envolver a suscetibilidade individual do trabalhador.', ok: false,
      why: 'Errada. Surgiu depois do evento: é superveniente.' },
    { t: 'A responsabilidade transfere-se ao serviço de saúde, afastando a natureza acidentária do caso.', ok: false,
      why: 'Errada. A natureza acidentária do conjunto permanece.' },
    { t: 'Como o agravamento não ocorreu no ambiente de trabalho, não há repercussão previdenciária.', ok: false,
      why: 'Errada. O agravamento segue vinculado ao acidente original.' }
  ],
  comentario: 'Concausa superveniente: surge DEPOIS do evento e agrava o resultado, sem romper o nexo. Complicações do tratamento — infecção, reação a medicamento, acidente no transporte para atendimento — integram a cadeia iniciada pelo acidente do trabalho.',
  pegadinha: 'A ideia de que a complicação "rompe" o nexo é a defesa mais comum e contraria a lógica da concausa.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.3-021', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa contesta o reconhecimento de doença ocupacional alegando que o trabalhador pratica atividade esportiva intensa nos fins de semana, o que também sobrecarrega a região acometida. Sobre a alegação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O fator extraocupacional concorrente não afasta o nexo: basta o trabalho ter contribuído.', ok: true,
      why: 'Correta. Caberia demonstrar que o trabalho não teve participação alguma.' },
    { t: 'Qualquer atividade extraocupacional sobre a mesma região afasta automaticamente o nexo com o trabalho.', ok: false,
      why: 'Errada. É concausa, e concausa não rompe o nexo.' },
    { t: 'O nexo só se mantém se a contribuição do trabalho for demonstrada como superior à metade.', ok: false,
      why: 'Errada. Contribuição relevante basta, sem exigência de predominância.' },
    { t: 'Comprovada a concausa extraocupacional, o benefício deve ser reduzido proporcionalmente a ela.', ok: false,
      why: 'Errada. Não há previsão de fracionamento.' },
    { t: 'A prática esportiva do trabalhador deve ser proibida pela empresa como condição do vínculo.', ok: false,
      why: 'Errada. Interfere na vida privada e não é medida legítima.' }
  ],
  comentario: 'Concausa não divide culpa nem exige maioria: se o trabalho contribuiu, há nexo. A alegação de "outra causa" é a defesa mais comum em distúrbios musculoesqueléticos e não se sustenta por si — ela precisaria demonstrar que o trabalho não participou em nada.',
  pegadinha: 'A exigência de "mais de cinquenta por cento" soa razoável e não existe na lógica da concausalidade.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

/* ========= 4.9 Doenças Infectocontagiosas de Interesse Ocupacional ====== */
{ id: 'q-4.9-020', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde assintomático, em avaliação periódica, apresenta prova tuberculínica com viragem em relação ao exame anterior, com radiografia de tórax normal. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere infecção latente: excluir doença ativa, avaliar tratamento e investigar a fonte.', ok: true,
      why: 'Correta. A investigação da fonte no serviço é parte da conduta.' },
    { t: 'A viragem indica doença ativa, devendo o esquema completo de tratamento ser iniciado de imediato.', ok: false,
      why: 'Errada. É preciso excluir doença ativa antes de tratar.' },
    { t: 'Sendo assintomático, nenhuma conduta é necessária além de repetir o exame no próximo periódico.', ok: false,
      why: 'Errada. A viragem recente indica infecção e exige avaliação.' },
    { t: 'O achado é falso-positivo em razão da vacinação prévia, o que dispensa qualquer avaliação adicional.', ok: false,
      why: 'Errada. A viragem documentada não se explica pela vacina antiga.' },
    { t: 'Sugere infecção latente, sendo dispensável investigar a fonte quando o profissional está assintomático.', ok: false,
      why: 'Errada. A fonte pode estar expondo outros trabalhadores.' }
  ],
  comentario: 'Viragem tuberculínica em profissional de saúde é evento sentinela: indica transmissão recente. Conduta em três passos — excluir doença ativa, avaliar tratamento da infecção latente e investigar a exposição no serviço. Infecção latente e doença ativa são coisas distintas, com condutas distintas.',
  pegadinha: 'Tratar viragem como doença ativa e tratar como "nada a fazer" são os dois extremos oferecidos, e ambos erram.',
  refs: ['Protocolo de vigilância da infecção latente pelo M. tuberculosis — Ministério da Saúde', 'NR-32'] },

{ id: 'q-4.9-021', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de zona rural, que atua em desmatamento e manejo de mata, procura o serviço médico antes de iniciar as atividades. Sobre a prevenção de doenças infecciosas de interesse ocupacional nesse contexto, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve considerar as endemias da região e as exposições próprias da atividade exercida.', ok: true,
      why: 'Correta. Orientação e imunização seguem o mapa de risco local.' },
    { t: 'As doenças endêmicas da região nunca podem ser reconhecidas como relacionadas ao trabalho exercido.', ok: false,
      why: 'Errada. Podem ser, quando a atividade determina a exposição.' },
    { t: 'Deve considerar as endemias, resumindo-se a prevenção ao fornecimento de repelente aos trabalhadores.', ok: false,
      why: 'Errada. Envolve imunização, vestimenta, manejo ambiental e orientação.' },
    { t: 'Deve considerar as endemias, sendo a imunização desnecessária ao trabalhador natural da região.', ok: false,
      why: 'Errada. Naturalidade não garante imunidade.' },
    { t: 'Deve considerar as endemias, dispensando notificação os casos já frequentes naquela região.', ok: false,
      why: 'Errada. A notificação independe da frequência local.' }
  ],
  comentario: 'A ressalva da doença endêmica é o ponto crítico: se a exposição decorre da natureza do trabalho, há nexo. Combine sempre o mapa epidemiológico do território com as exposições concretas da atividade, e lembre que a notificação não depende de a doença ser rara.',
  pegadinha: 'A exclusão das doenças endêmicas é citada sem a ressalva com muita frequência — e a ressalva é justamente o que a prova cobra.',
  refs: ['Lei nº 8.213/1991 — art. 20, §1º', 'Ministério da Saúde — notas técnicas de agravos'] },

{ id: 'q-4.9-022', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre hepatites virais no contexto ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A hepatite B tem vacina e conduta pós-exposição definida; para a hepatite C não há vacina.', ok: true,
      why: 'Correta. Isso torna barreiras e manejo do acidente ainda mais críticos.' },
    { t: 'Existe vacina eficaz contra a hepatite C, indicada a todos os profissionais de saúde expostos.', ok: false,
      why: 'Errada. Não há vacina disponível contra a hepatite C.' },
    { t: 'A hepatite B tem vacina, cuja aplicação dispensa a verificação de resposta sorológica nos expostos.', ok: false,
      why: 'Errada. A verificação identifica os não respondedores.' },
    { t: 'A hepatite B tem vacina, e a ausência de sintomas após a exposição dispensa o seguimento sorológico.', ok: false,
      why: 'Errada. O seguimento é definido por protocolo, não por sintomas.' },
    { t: 'A hepatite B tem vacina, mas a decorrente de acidente ocupacional não é doença relacionada ao trabalho.', ok: false,
      why: 'Errada. É reconhecida e notificável.' }
  ],
  comentario: 'Guarde a assimetria: hepatite B tem vacina e conduta pós-exposição definida, com a resposta sorológica importando para a decisão; hepatite C não tem vacina, o que desloca todo o peso para as barreiras e o seguimento. E o seguimento sorológico independe de sintoma.',
  pegadinha: 'A alternativa que inventa vacina para hepatite C é grosseira, mas passa despercebida por quem lê rápido em prova longa.',
  refs: ['PCDT — Profilaxia Pós-Exposição — Ministério da Saúde', 'NR-32'] }

);
