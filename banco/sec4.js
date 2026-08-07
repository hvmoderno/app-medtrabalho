/* Seção 4 — Patologia do Trabalho e Doenças Relacionadas ao Trabalho
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.1-001', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador de mineração desenvolve tuberculose pulmonar após anos de exposição a poeira de sílica, com silicose já diagnosticada. Um segundo trabalhador, motorista de ônibus urbano, desenvolve hipertensão arterial, agravada pelo estresse e pelo trabalho em turnos. Segundo a classificação de Schilling, esses casos correspondem, respectivamente, a:',
  alts: [
    { t: 'Grupo II e Grupo II.', ok: false,
      why: 'Errada. Nenhum dos dois é típico do Grupo II puro: no primeiro caso o trabalho é condição necessária para a silicose subjacente, que por sua vez predispõe à tuberculose.' },
    { t: 'Grupo I e Grupo III.', ok: false,
      why: 'Errada quanto ao segundo caso. Hipertensão agravada pelo trabalho corresponde a doença comum agravada por condições de trabalho, que é o Grupo III, mas o primeiro caso não é Grupo I puro se lido como tuberculose isolada — a chave está em qual doença se avalia.' },
    { t: 'Grupo I e Grupo II.', ok: false,
      why: 'Errada. Hipertensão em motorista com turnos e estresse não é doença em que o trabalho seja fator de risco contributivo entre vários de forma típica de Grupo II; a leitura consagrada é de agravamento de doença comum.' },
    { t: 'Grupo I (silicose como doença em que o trabalho é causa necessária, condicionando a tuberculose) e Grupo III (doença comum agravada pelas condições de trabalho).', ok: true,
      why: 'Correta. A silicose só existe com exposição ocupacional à sílica — trabalho como causa necessária, Grupo I — e a tuberculose surge como complicação dessa condição. A hipertensão é doença de alta prevalência geral, aqui agravada pelas condições de trabalho, o que caracteriza o Grupo III.' },
    { t: 'Grupo III e Grupo I.', ok: false,
      why: 'Errada, é a inversão exata da resposta. Silicose não é doença comum agravada, e hipertensão não tem o trabalho como causa necessária.' }
  ],
  comentario: 'Schilling I: o trabalho é causa necessária — sem exposição, não existe a doença (silicose, saturnismo, PAIR). Schilling II: o trabalho é fator de risco contributivo entre outros (hipertensão em certas exposições, câncer com múltiplas causas). Schilling III: doença comum agravada ou desencadeada pelas condições de trabalho. A prova costuma dar um par de casos e pedir os grupos.',
  pegadinha: 'A alternativa invertida (III e I) existe justamente para punir quem memorizou os grupos sem o critério de "causa necessária".',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Lista de Doenças Relacionadas ao Trabalho — Ministério da Saúde'] },

{ id: 'q-4.3-001', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de jateamento de areia por 15 anos, 48 anos, dispneia progressiva. Radiografia com pequenas opacidades arredondadas em campos superiores e adenopatia hilar com calcificação periférica. Assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere silicose, e o achado de calcificação periférica de linfonodos hilares é característico; o paciente deve ser investigado para tuberculose, dado o risco aumentado nessa pneumoconiose.', ok: true,
      why: 'Correta. Opacidades arredondadas em zonas superiores com adenopatia hilar de calcificação periférica compõem quadro clássico de silicose, e o silicótico tem risco aumentado de tuberculose, o que torna a investigação obrigatória.' },
    { t: 'O quadro sugere asbestose, cujo achado radiológico típico são opacidades arredondadas em campos superiores.', ok: false,
      why: 'Errada. A asbestose produz opacidades irregulares predominantes em campos inferiores, e o achado pleural característico do asbesto são as placas pleurais.' },
    { t: 'A ausência de alteração espirométrica afastaria o diagnóstico de pneumoconiose.', ok: false,
      why: 'Errada. A espirometria pode estar normal em fases iniciais; o diagnóstico de pneumoconiose se apoia em história de exposição e imagem, não na função pulmonar isolada.' },
    { t: 'Afastada a exposição, espera-se regressão radiológica das opacidades em alguns meses.', ok: false,
      why: 'Errada. A silicose é irreversível e pode progredir mesmo após cessada a exposição — inclusive para fibrose maciça progressiva.' },
    { t: 'Por ser doença sem tratamento específico, não há indicação de notificação nem de emissão de comunicação de acidente do trabalho.', ok: false,
      why: 'Errada. Ausência de tratamento específico não retira as obrigações de notificação e de comunicação; pelo contrário, trata-se de doença de causa necessariamente ocupacional.' }
  ],
  comentario: 'Silicose: opacidades arredondadas, predomínio em campos superiores, adenopatia hilar com calcificação periférica, irreversível, pode progredir após cessar a exposição e aumenta o risco de tuberculose. Asbestose: opacidades irregulares, predomínio inferior, com placas pleurais como marcador de exposição.',
  pegadinha: 'A troca entre padrão de silicose e de asbestose é a inversão mais explorada em pneumologia ocupacional. Guarde por zona pulmonar e formato da opacidade.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'Classificação radiológica OIT'] },

{ id: 'q-4.5-001', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador exposto a ruído por 12 anos apresenta audiometria com entalhe em 4.000 Hz bilateral, recuperação parcial em 8.000 Hz, sem gap aéreo-ósseo. Sobre a perda auditiva induzida por ruído, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Uma vez cessada a exposição ao ruído ocupacional, a perda tende a continuar progredindo em razão do dano coclear já instalado.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Característica marcante da PAIR é justamente não progredir depois de cessada a exposição — se houver progressão, deve-se investigar outra causa ou exposição persistente.' },
    { t: 'Trata-se de perda neurossensorial, em geral bilateral e irreversível.', ok: false,
      why: 'Verdadeira. A lesão é de células ciliadas da cóclea, produzindo perda neurossensorial irreversível e habitualmente bilateral.' },
    { t: 'A exposição concomitante a solventes pode potencializar o dano auditivo.', ok: false,
      why: 'Verdadeira. A interação entre ruído e agentes ototóxicos, como alguns solventes, é reconhecida e deve constar da avaliação de risco.' },
    { t: 'A audiometria ocupacional exige repouso auditivo prévio para evitar confundir mudança temporária de limiar com perda permanente.', ok: false,
      why: 'Verdadeira. Sem repouso auditivo adequado, a mudança temporária de limiar é interpretada erroneamente como perda definitiva.' },
    { t: 'A PAIR ocupacional habitualmente não evolui para perdas profundas ou anacusia.', ok: false,
      why: 'Verdadeira. A perda tende a estabilizar-se em graus leve a moderado; anacusia deve fazer pensar em outra etiologia.' }
  ],
  comentario: 'Cinco marcas da PAIR caem sempre: neurossensorial, bilateral, irreversível, não progride após cessar a exposição e não leva a anacusia. Some a isso o entalhe em torno de 3.000 a 6.000 Hz com recuperação em 8.000 Hz, a necessidade de repouso auditivo e a interação com ototóxicos químicos.',
  pegadinha: 'É "assinale a INCORRETA" e a falsa é justamente a afirmação que soa mais intuitiva: "dano irreversível, logo continua piorando". Irreversível não significa progressivo.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7 — Anexo de audiometria'] },

{ id: 'q-4.4-001', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Auxiliar de limpeza hospitalar, 34 anos, com lesões eczematosas em dorso das mãos que melhoram nas férias e recidivam no retorno. O teste de contato foi positivo para um componente presente nas luvas utilizadas. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro é compatível com dermatite de contato alérgica, mediada por hipersensibilidade tardia, e a leitura do teste de contato é feita em tempos diferidos após a aplicação.', ok: true,
      why: 'Correta. A dermatite de contato alérgica é reação de hipersensibilidade tardia, mediada por células, e o teste de contato exige leituras diferidas — não imediata.' },
    { t: 'A melhora nas férias e a recidiva no retorno afastam a origem ocupacional, indicando dermatite atópica.', ok: false,
      why: 'Errada, e é uma inversão. Melhora no afastamento e recidiva no retorno é justamente um dos critérios que reforçam a origem ocupacional.' },
    { t: 'O teste de contato positivo confirma isoladamente o nexo ocupacional, dispensando a análise da exposição no posto de trabalho.', ok: false,
      why: 'Errada. Positividade indica sensibilização; o nexo exige demonstrar que o alérgeno está presente na atividade e que a exposição é relevante.' },
    { t: 'A dermatite de contato irritativa exige sensibilização prévia e acomete apenas indivíduos predispostos.', ok: false,
      why: 'Errada. A que exige sensibilização prévia é a alérgica; a irritativa decorre de dano direto e pode ocorrer em qualquer pessoa suficientemente exposta.' },
    { t: 'A conduta indicada é o afastamento definitivo do trabalho, pois não há medida de controle eficaz para dermatoses ocupacionais.', ok: false,
      why: 'Errada. Substituição do agente, mudança de material de luva, barreiras e adequação de processo costumam permitir a permanência no trabalho.' }
  ],
  comentario: 'Alérgica: hipersensibilidade tardia, exige sensibilização prévia, atinge os sensibilizados, teste de contato com leituras diferidas. Irritativa: dano direto, dose-dependente, atinge qualquer um, é a mais frequente. A relação temporal com o afastamento reforça o nexo, não o afasta.',
  pegadinha: 'A alternativa que inverte "irritativa exige sensibilização" é o erro mais comum na prática clínica e por isso a banca insiste nela.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.6-001', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Analista de central de atendimento é encaminhada por exaustão, distanciamento afetivo do trabalho e sensação de ineficácia profissional, com quadro que remite parcialmente nas férias. Sobre burnout no contexto ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O burnout é conceituado como fenômeno resultante de estresse crônico no trabalho não gerenciado com sucesso, com dimensões de exaustão, distanciamento mental e redução da eficácia profissional, e sua abordagem exige intervenção também sobre a organização do trabalho.', ok: true,
      why: 'Correta. A conceituação contemporânea é ocupacional e tridimensional, e por isso a resposta não pode se limitar ao tratamento individual: exige agir sobre os determinantes organizacionais.' },
    { t: 'Trata-se de transtorno de personalidade, cujo tratamento é exclusivamente psicoterápico e independe de mudanças no ambiente laboral.', ok: false,
      why: 'Errada em duas frentes: não é transtorno de personalidade e a intervenção organizacional é parte essencial da conduta.' },
    { t: 'O diagnóstico deve ser feito em qualquer contexto de vida, não sendo específico do ambiente de trabalho.', ok: false,
      why: 'Errada. A conceituação atual é expressamente circunscrita ao contexto ocupacional, o que a distingue de outros quadros de sofrimento.' },
    { t: 'A presença de burnout afasta a possibilidade de depressão concomitante, por serem quadros mutuamente excludentes.', ok: false,
      why: 'Errada. Há sobreposição frequente, e a coexistência precisa ser avaliada — inclusive porque muda a conduta terapêutica e pericial.' },
    { t: 'Por ser fenômeno subjetivo, o burnout não tem qualquer repercussão previdenciária ou de reconhecimento de nexo.', ok: false,
      why: 'Errada. Havendo incapacidade laborativa e nexo com o trabalho, há repercussão previdenciária como em qualquer outro agravo relacionado ao trabalho.' }
  ],
  comentario: 'Três dimensões: exaustão, distanciamento mental (ou cinismo) e redução da eficácia profissional. O conceito é ocupacional por definição. Consequência prática: tratar só o indivíduo e devolvê-lo ao mesmo ambiente reproduz o adoecimento.',
  pegadinha: 'A alternativa que separa burnout de depressão como excludentes é atraente para quem estudou os critérios isoladamente. Na clínica, a sobreposição é regra e precisa ser investigada.',
  refs: ['Mendanha — O que ninguém te contou sobre burnout', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.8-001', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao discutir a exposição de trabalhadores a um agente químico, a empresa alega que "a classificação internacional coloca o agente apenas no Grupo 2A, então não há risco comprovado em humanos". Sobre carcinogenicidade ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O Grupo 2A indica agente provavelmente carcinogênico para humanos, com evidência limitada em humanos e suficiente em animais, o que impõe medidas de controle e não autoriza tratar a exposição como isenta de risco.', ok: true,
      why: 'Correta. A classificação expressa o grau de evidência científica de carcinogenicidade, e "provavelmente carcinogênico" é razão para agir preventivamente, não para relativizar.' },
    { t: 'A classificação internacional expressa a potência do agente, de modo que agentes do Grupo 1 são sempre mais potentes que os do Grupo 2A.', ok: false,
      why: 'Errada. A classificação mede a força da evidência de que o agente causa câncer, não sua potência ou o risco em determinada exposição.' },
    { t: 'A existência de lista nacional de agentes cancerígenos torna dispensável a consulta a classificações internacionais.', ok: false,
      why: 'Errada. As listas se complementam; a nacional inclusive se apoia na avaliação internacional de evidência.' },
    { t: 'Para agentes carcinogênicos, o controle adequado consiste em manter a exposição exatamente no valor do limite de tolerância.', ok: false,
      why: 'Errada. Para carcinogênicos a orientação é reduzir a exposição ao menor nível tecnicamente viável, e não "chegar ao limite".' },
    { t: 'O longo período de latência do câncer ocupacional impede que se estabeleça nexo causal individual em qualquer hipótese.', ok: false,
      why: 'Errada. A latência dificulta, mas não impede: o raciocínio de nexo considera exposição documentada, latência compatível, plausibilidade e exclusão de outras causas.' }
  ],
  comentario: 'Ponto central e mal compreendido: a classificação de carcinogenicidade mede FORÇA DA EVIDÊNCIA, não potência nem risco. Grupo 1 = carcinogênico para humanos; 2A = provavelmente; 2B = possivelmente; 3 = não classificável. Para carcinogênicos, a meta é a menor exposição tecnicamente possível.',
  pegadinha: 'Confundir "grau de evidência" com "potência" é o erro que a questão persegue — e é o argumento que empresas usam para relativizar exposições.',
  refs: ['IARC Monographs', 'LINACH — Lista Nacional de Cancerígenos', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.9-001', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnica de enfermagem sofre acidente com agulha oca contendo sangue de paciente-fonte com sorologias desconhecidas. Ela é vacinada para hepatite B com anti-HBs prévio reagente documentado. Sobre a conduta imediata, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve-se lavar o local com água e sabão, testar rapidamente o paciente-fonte, avaliar a indicação de profilaxia pós-exposição ao HIV em caráter de urgência e dispensar medidas adicionais para hepatite B em razão da resposta vacinal documentada.', ok: true,
      why: 'Correta. Higiene local sem substâncias cáusticas, teste rápido da fonte, avaliação urgente de profilaxia antirretroviral e, para hepatite B, resposta vacinal previamente documentada como adequada dispensa medida adicional.' },
    { t: 'Deve-se espremer o local e aplicar hipoclorito para reduzir a carga viral inoculada.', ok: false,
      why: 'Errada. Espremer e usar substâncias cáusticas são condutas contraindicadas: aumentam a lesão tecidual sem qualquer benefício comprovado.' },
    { t: 'A profilaxia pós-exposição ao HIV pode ser iniciada com tranquilidade em até uma semana, sem prejuízo da eficácia.', ok: false,
      why: 'Errada. A profilaxia é urgência: quanto mais precoce o início, maior a eficácia, e há janela limitada para indicação.' },
    { t: 'Independentemente da sorologia da fonte, a profilaxia antirretroviral está sempre indicada em qualquer exposição percutânea.', ok: false,
      why: 'Errada. A indicação depende do tipo de exposição e do estado sorológico da fonte; fonte comprovadamente negativa afasta a indicação.' },
    { t: 'Não há necessidade de registro do acidente nem de emissão de comunicação de acidente do trabalho, por se tratar de exposição sem doença instalada.', ok: false,
      why: 'Errada. O acidente com material biológico é acidente do trabalho e deve ser registrado, notificado e comunicado, independentemente de soroconversão.' }
  ],
  comentario: 'Roteiro do acidente biológico: cuidado local sem espremer e sem cáustico; avaliar fonte com teste rápido; profilaxia antirretroviral é urgência com janela curta; hepatite B depende de status vacinal e resposta sorológica; e o acidente sempre gera registro, notificação e comunicação — mesmo sem doença.',
  pegadinha: 'A alternativa "profilaxia sempre indicada" parece a mais protetora e por isso engana. Conduta depende de fonte e tipo de exposição.',
  refs: ['PCDT — Profilaxia Pós-Exposição (PEP) — Ministério da Saúde', 'NR-32'] }

);
