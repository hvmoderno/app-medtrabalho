/* Seção 4 — Patologia do Trabalho e Doenças Relacionadas ao Trabalho
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.1-001', tema: '4.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador de mineração desenvolve tuberculose pulmonar após anos de exposição a poeira de sílica, com silicose já diagnosticada. Um segundo trabalhador, motorista de ônibus urbano, desenvolve hipertensão arterial, agravada pelo estresse e pelo trabalho em turnos. Segundo a classificação de Schilling, esses casos correspondem, respectivamente, a:',
  alts: [
    { t: 'Grupo II e Grupo II, com o trabalho como fator contributivo nos dois quadros descritos.', ok: false,
      why: 'Errada. A silicose tem o trabalho como causa necessária, do Grupo I.' },
    { t: 'Grupo I e Grupo III: causa necessária na silicose e doença comum agravada no segundo caso.', ok: true,
      why: 'Correta. A silicose condiciona a tuberculose; o segundo quadro é agravado pelo trabalho.' },
    { t: 'Grupo I e Grupo II, com o trabalho como causa necessária e depois como fator contributivo.', ok: false,
      why: 'Errada. O segundo caso é de doença comum agravada, do Grupo III.' },
    { t: 'Grupo III e Grupo I, na ordem inversa à que os dois quadros apresentados efetivamente exigem.', ok: false,
      why: 'Errada. A ordem está trocada em relação aos casos descritos.' },
    { t: 'Grupo II e Grupo III, tratando a silicose como doença de causalidade múltipla e contributiva.', ok: false,
      why: 'Errada. Sem exposição à sílica não há silicose: é causa necessária.' }
  ],
  comentario: 'Schilling I: o trabalho é causa necessária — sem exposição, não existe a doença (silicose, saturnismo, PAIR). Schilling II: o trabalho é fator de risco contributivo entre outros (hipertensão em certas exposições, câncer com múltiplas causas). Schilling III: doença comum agravada ou desencadeada pelas condições de trabalho. A prova costuma dar um par de casos e pedir os grupos.',
  pegadinha: 'A alternativa invertida (III e I) existe justamente para punir quem memorizou os grupos sem o critério de "causa necessária".',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Lista de Doenças Relacionadas ao Trabalho — Ministério da Saúde'] },

{ id: 'q-4.3-001', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de jateamento de areia por 15 anos, 48 anos, dispneia progressiva. Radiografia com pequenas opacidades arredondadas em campos superiores e adenopatia hilar com calcificação periférica. Assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere silicose, com calcificação periférica de linfonodos hilares como achado característico.', ok: true,
      why: 'Correta. Deve-se investigar tuberculose, pelo risco aumentado nessa pneumoconiose.' },
    { t: 'Sugere asbestose, cujo achado radiológico típico são opacidades arredondadas em campos superiores.', ok: false,
      why: 'Errada. A asbestose cursa com opacidades irregulares em bases.' },
    { t: 'Sugere pneumoconiose, cujo diagnóstico seria afastado pela ausência de alteração espirométrica.', ok: false,
      why: 'Errada. A espirometria pode estar normal em fases iniciais.' },
    { t: 'Sugere silicose, esperando-se regressão radiológica das opacidades meses após o afastamento.', ok: false,
      why: 'Errada. A fibrose instalada não regride e pode progredir.' },
    { t: 'Sugere silicose, doença sem tratamento específico, o que dispensa notificação e comunicação.', ok: false,
      why: 'Errada. Notificação e comunicação de acidente são devidas.' }
  ],
  comentario: 'Silicose: opacidades arredondadas, predomínio em campos superiores, adenopatia hilar com calcificação periférica, irreversível, pode progredir após cessar a exposição e aumenta o risco de tuberculose. Asbestose: opacidades irregulares, predomínio inferior, com placas pleurais como marcador de exposição.',
  pegadinha: 'A troca entre padrão de silicose e de asbestose é a inversão mais explorada em pneumologia ocupacional. Guarde por zona pulmonar e formato da opacidade.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'Classificação radiológica OIT'] },

{ id: 'q-4.5-001', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador exposto a ruído por 12 anos apresenta audiometria com entalhe em 4.000 Hz bilateral, recuperação parcial em 8.000 Hz, sem gap aéreo-ósseo. Sobre a perda auditiva induzida por ruído, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Cessada a exposição, a perda tende a continuar progredindo pelo dano coclear instalado.', ok: true,
      why: 'É a INCORRETA. A perda por ruído tende a estabilizar após o afastamento.' },
    { t: 'Trata-se de perda neurossensorial, em geral bilateral e de caráter irreversível uma vez instalada.', ok: false,
      why: 'Correta, portanto não é a resposta. É a descrição do quadro.' },
    { t: 'A exposição concomitante a solventes pode potencializar o dano auditivo causado pelo ruído.', ok: false,
      why: 'Correta, portanto não é a resposta. Há ototoxicidade química reconhecida.' },
    { t: 'A audiometria ocupacional exige repouso auditivo prévio, para não confundir mudança temporária.', ok: false,
      why: 'Correta, portanto não é a resposta. Sem repouso o exame não é válido.' },
    { t: 'A perda induzida por ruído habitualmente não evolui para perdas profundas nem para anacusia.', ok: false,
      why: 'Correta, portanto não é a resposta. Ela tende a estabilizar em níveis moderados.' }
  ],
  comentario: 'Cinco marcas da PAIR caem sempre: neurossensorial, bilateral, irreversível, não progride após cessar a exposição e não leva a anacusia. Some a isso o entalhe em torno de 3.000 a 6.000 Hz com recuperação em 8.000 Hz, a necessidade de repouso auditivo e a interação com ototóxicos químicos.',
  pegadinha: 'É "assinale a INCORRETA" e a falsa é justamente a afirmação que soa mais intuitiva: "dano irreversível, logo continua piorando". Irreversível não significa progressivo.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7 — Anexo de audiometria'] },

{ id: 'q-4.4-001', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Auxiliar de limpeza hospitalar, 34 anos, com lesões eczematosas em dorso das mãos que melhoram nas férias e recidivam no retorno. O teste de contato foi positivo para um componente presente nas luvas utilizadas. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É dermatite de contato alérgica, de hipersensibilidade tardia, com leitura diferida do teste.', ok: true,
      why: 'Correta. O padrão de melhora nas férias reforça a suspeita ocupacional.' },
    { t: 'A melhora nas férias e a recidiva no retorno afastam a origem ocupacional, indicando atopia.', ok: false,
      why: 'Errada. É justamente o padrão que sugere origem ocupacional.' },
    { t: 'É dermatite alérgica, confirmando o teste positivo isoladamente o nexo, sem análise da exposição.', ok: false,
      why: 'Errada. É preciso demonstrar exposição relevante e correlação clínica.' },
    { t: 'É dermatite irritativa, que exige sensibilização prévia e acomete apenas indivíduos predispostos.', ok: false,
      why: 'Errada. A irritativa não depende de sensibilização e atinge qualquer um.' },
    { t: 'É dermatite alérgica, cabendo afastamento definitivo do trabalho por não haver controle eficaz.', ok: false,
      why: 'Errada. Afasta-se do agente, não necessariamente do trabalho.' }
  ],
  comentario: 'Alérgica: hipersensibilidade tardia, exige sensibilização prévia, atinge os sensibilizados, teste de contato com leituras diferidas. Irritativa: dano direto, dose-dependente, atinge qualquer um, é a mais frequente. A relação temporal com o afastamento reforça o nexo, não o afasta.',
  pegadinha: 'A alternativa que inverte "irritativa exige sensibilização" é o erro mais comum na prática clínica e por isso a banca insiste nela.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.6-001', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Analista de central de atendimento é encaminhada por exaustão, distanciamento afetivo do trabalho e sensação de ineficácia profissional, com quadro que remite parcialmente nas férias. Sobre burnout no contexto ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É fenômeno de estresse crônico não gerenciado, com exaustão, distanciamento e menor eficácia.', ok: true,
      why: 'Correta. A abordagem exige intervenção também sobre a organização do trabalho.' },
    { t: 'É transtorno de personalidade, de tratamento psicoterápico e independente de mudanças no ambiente.', ok: false,
      why: 'Errada. Não é transtorno de personalidade nem traço individual.' },
    { t: 'É quadro de exaustão diagnosticável em qualquer contexto de vida, sem especificidade ocupacional.', ok: false,
      why: 'Errada. A conceituação é restrita ao contexto do trabalho.' },
    { t: 'É fenômeno ocupacional cuja presença afasta a possibilidade de depressão concomitante no caso.', ok: false,
      why: 'Errada. A coexistência é frequente e exige avaliação cuidadosa.' },
    { t: 'É fenômeno subjetivo e, por isso, sem repercussão previdenciária ou de reconhecimento de nexo.', ok: false,
      why: 'Errada. Pode ser reconhecido como relacionado ao trabalho.' }
  ],
  comentario: 'Três dimensões: exaustão, distanciamento mental (ou cinismo) e redução da eficácia profissional. O conceito é ocupacional por definição. Consequência prática: tratar só o indivíduo e devolvê-lo ao mesmo ambiente reproduz o adoecimento.',
  pegadinha: 'A alternativa que separa burnout de depressão como excludentes é atraente para quem estudou os critérios isoladamente. Na clínica, a sobreposição é regra e precisa ser investigada.',
  refs: ['Mendanha — O que ninguém te contou sobre burnout', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.8-001', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao discutir a exposição de trabalhadores a um agente químico, a empresa alega que "a classificação internacional coloca o agente apenas no Grupo 2A, então não há risco comprovado em humanos". Sobre carcinogenicidade ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O grupo indica agente provavelmente carcinogênico, com evidência limitada em humanos.', ok: true,
      why: 'Correta. Impõe medidas de controle e não autoriza tratar a exposição como isenta de risco.' },
    { t: 'A classificação expressa a potência do agente, sendo os do grupo mais alto sempre mais potentes.', ok: false,
      why: 'Errada. Expressa a força da evidência, não a potência.' },
    { t: 'A existência de lista nacional de cancerígenos torna dispensável consultar as classificações internacionais.', ok: false,
      why: 'Errada. São fontes complementares e frequentemente mais atualizadas.' },
    { t: 'Para cancerígenos, o controle adequado é manter a exposição exatamente no valor do limite de tolerância.', ok: false,
      why: 'Errada. Prioriza-se substituição e redução ao menor nível exequível.' },
    { t: 'O longo período de latência impede que se estabeleça nexo causal individual em qualquer hipótese.', ok: false,
      why: 'Errada. Dificulta a prova, mas não impede o reconhecimento.' }
  ],
  comentario: 'Ponto central e mal compreendido: a classificação de carcinogenicidade mede FORÇA DA EVIDÊNCIA, não potência nem risco. Grupo 1 = carcinogênico para humanos; 2A = provavelmente; 2B = possivelmente; 3 = não classificável. Para carcinogênicos, a meta é a menor exposição tecnicamente possível.',
  pegadinha: 'Confundir "grau de evidência" com "potência" é o erro que a questão persegue — e é o argumento que empresas usam para relativizar exposições.',
  refs: ['IARC Monographs', 'LINACH — Lista Nacional de Cancerígenos', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.9-001', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnica de enfermagem sofre acidente com agulha oca contendo sangue de paciente-fonte com sorologias desconhecidas. Ela é vacinada para hepatite B com anti-HBs prévio reagente documentado. Sobre a conduta imediata, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Lavar com água e sabão, testar a fonte e avaliar profilaxia antirretroviral com urgência.', ok: true,
      why: 'Correta. A resposta vacinal documentada dispensa medidas adicionais para hepatite B.' },
    { t: 'Espremer o local e aplicar hipoclorito, de modo a reduzir a carga viral inoculada no ferimento.', ok: false,
      why: 'Errada. Espremer e usar cáustico aumentam a lesão sem reduzir o risco.' },
    { t: 'Lavar e testar a fonte, podendo a profilaxia ser iniciada em até uma semana, sem perda de eficácia.', ok: false,
      why: 'Errada. A eficácia depende do início nas primeiras horas.' },
    { t: 'Lavar e iniciar profilaxia antirretroviral sempre, qualquer que seja a sorologia do paciente-fonte.', ok: false,
      why: 'Errada. A indicação depende da avaliação da fonte e do tipo de exposição.' },
    { t: 'Lavar e observar, sem necessidade de registro nem de comunicação, por não haver doença instalada.', ok: false,
      why: 'Errada. O acidente com material biológico é notificável e comunicável.' }
  ],
  comentario: 'Roteiro do acidente biológico: cuidado local sem espremer e sem cáustico; avaliar fonte com teste rápido; profilaxia antirretroviral é urgência com janela curta; hepatite B depende de status vacinal e resposta sorológica; e o acidente sempre gera registro, notificação e comunicação — mesmo sem doença.',
  pegadinha: 'A alternativa "profilaxia sempre indicada" parece a mais protetora e por isso engana. Conduta depende de fonte e tipo de exposição.',
  refs: ['PCDT — Profilaxia Pós-Exposição (PEP) — Ministério da Saúde', 'NR-32'] }

);
