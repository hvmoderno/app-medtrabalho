/* Lote U — 4.3, 4.5, 4.6, 4.8, 2.3, 2.9, 5.4, 4.4. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.3-070', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a asbestose e as demais alterações pleuropulmonares associadas ao asbesto, é CORRETO afirmar:',
  alts: [
    { t: 'Placas indicam exposição pregressa e costumam não repercutir; asbestose é fibrose.', ok: true,
      why: 'Correta. Placa pleural é marcador de exposição; asbestose é doença do parênquima.' },
    { t: 'Placas pleurais e asbestose são a mesma entidade observada em estágios evolutivos diferentes.', ok: false,
      why: 'Errada. São alterações distintas, com mecanismos e repercussões diferentes.' },
    { t: 'Placas indicam exposição pregressa, afastando sua ausência exposição significativa ao asbesto.', ok: false,
      why: 'Errada. Nem todo exposto desenvolve placas pleurais.' },
    { t: 'Placas indicam exposição, e a asbestose regride com o afastamento definitivo da exposição.', ok: false,
      why: 'Errada. A fibrose instalada não regride; o afastamento evita a progressão adicional.' },
    { t: 'Placas indicam exposição pregressa, dispensando esses trabalhadores acompanhamento posterior.', ok: false,
      why: 'Errada. São expostos comprovados e seguem sob risco de outros desfechos, inclusive neoplasias.' }
  ],
  comentario: 'Placa pleural marca exposição, não doença parenquimatosa. Asbestose é fibrose e não regride. E quem tem placa é exposto comprovado — segue em vigilância pelo risco de mesotelioma e câncer de pulmão.',
  pegadinha: 'Ler placa pleural como asbestose leve confunde marcador de exposição com doença fibrosante.',
  refs: ['Diretrizes de pneumologia ocupacional', 'IARC'] },

{ id: 'q-4.5-070', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a audiometria ocupacional e as condições de sua realização, é CORRETO afirmar:',
  alts: [
    { t: 'Exige repouso auditivo prévio e cabina adequada, sobretudo na audiometria de referência.', ok: true,
      why: 'Correta. Referência mal obtida compromete toda a série de exames futura.' },
    { t: 'Exige cabina adequada, sendo o repouso auditivo dispensável quando a audiometria é de triagem.', ok: false,
      why: 'Errada. Sem repouso, mudança temporária de limiar simula perda permanente.' },
    { t: 'Exige repouso auditivo prévio, podendo ser realizada em sala silenciosa comum, sem cabina acústica.', ok: false,
      why: 'Errada. O ruído ambiental mascara os limiares nas frequências mais baixas.' },
    { t: 'Exige repouso e cabina, podendo a referência ser trocada pela mais recente a qualquer momento.', ok: false,
      why: 'Errada. A troca da referência segue critérios definidos e não é discricionária.' },
    { t: 'Exige repouso e cabina, dispensando as alterações detectadas avaliação otorrinolaringológica.', ok: false,
      why: 'Errada. A avaliação complementar é necessária para o diagnóstico diferencial.' }
  ],
  comentario: 'Repouso auditivo e cabina adequada, com referência obtida em condição ideal — porque toda a série de anos será comparada a ela. Sem repouso, o que se registra é mudança temporária de limiar lida como perda.',
  pegadinha: 'Audiometria feita logo após a jornada, sem repouso, produz "perda" que some no dia seguinte.',
  refs: ['NR-7 — Anexo I', 'Diretrizes de audiologia ocupacional'] },

{ id: 'q-4.6-070', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os modelos teóricos que explicam a relação entre organização do trabalho e adoecimento mental, é CORRETO afirmar:',
  alts: [
    { t: 'Associam o adoecimento à alta exigência combinada a baixa autonomia ou baixo reconhecimento.', ok: true,
      why: 'Correta. É a combinação que adoece, não a exigência em si.' },
    { t: 'Associam o adoecimento à carga de trabalho elevada, isoladamente o principal determinante do quadro.', ok: false,
      why: 'Errada. O que pesa é a combinação com baixa autonomia ou baixo reconhecimento.' },
    { t: 'Associam o adoecimento à combinação de fatores, sem que o apoio social modifique o efeito das demandas.', ok: false,
      why: 'Errada. É reconhecido como fator moderador relevante.' },
    { t: 'Associam o adoecimento a combinações teóricas, sem aplicação prática na avaliação de riscos psicossociais.', ok: false,
      why: 'Errada. Orientam instrumentos de avaliação e o desenho das intervenções.' },
    { t: 'Associam o adoecimento à alta exigência, tendo o reconhecimento valor simbólico sem efeito em saúde.', ok: false,
      why: 'Errada. O desequilíbrio entre esforço e recompensa tem associação documentada.' }
  ],
  comentario: 'Demanda-controle e esforço-recompensa: adoece a alta exigência sem autonomia ou sem reconhecimento, com apoio social moderando o efeito. Intervir na organização passa por devolver margem de decisão e reconhecimento, não só reduzir volume.',
  pegadinha: 'Focar apenas na redução de carga deixa intactos os dois eixos que os modelos apontam como decisivos.',
  refs: ['Karasek & Theorell', 'Siegrist', 'OIT — riscos psicossociais'] },

{ id: 'q-4.8-070', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as leucemias relacionadas a exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A associação com o benzeno é estabelecida, e a exposição pode ter ocorrido anos antes.', ok: true,
      why: 'Correta. História ocupacional restrita ao emprego atual perde a exposição relevante.' },
    { t: 'A associação é estabelecida, manifestando-se a leucemia ocupacional durante o período de exposição.', ok: false,
      why: 'Errada. Pode surgir anos após o término da exposição.' },
    { t: 'A associação é estabelecida, afastando a ausência de exposição atual a origem ocupacional do caso.', ok: false,
      why: 'Errada. Exposições pregressas são as mais relevantes nesses casos.' },
    { t: 'A associação é estabelecida, restrita a exposição relevante aos trabalhadores da indústria petroquímica.', ok: false,
      why: 'Errada. Frentistas, siderurgia e setores que usam solventes também se expõem.' },
    { t: 'A associação é estabelecida, sendo inviável e dispensável a investigação da exposição pregressa.', ok: false,
      why: 'Errada. Registros, documentos previdenciários e a história permitem reconstituí-la.' }
  ],
  comentario: 'Leucemia e benzeno: exposição possivelmente encerrada há anos, em setores que vão muito além da petroquímica. Perguntar só pelo emprego atual é o que faz o nexo desaparecer.',
  pegadinha: 'Restringir a anamnese ocupacional ao emprego atual apaga justamente a exposição que causou o quadro.',
  refs: ['IARC — Grupo 1', 'Ministério da Saúde — benzenismo'] },

{ id: 'q-2.3-070', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a mercúrio, é CORRETO afirmar:',
  alts: [
    { t: 'A forma química e a via determinam o quadro, e há exposição além do garimpo.', ok: true,
      why: 'Correta. O vapor metálico tem tropismo pelo sistema nervoso; odontologia e lâmpadas também expõem.' },
    { t: 'Todas as formas de mercúrio produzem o mesmo quadro clínico, variando apenas a intensidade dele.', ok: false,
      why: 'Errada. Metálico, inorgânico e orgânico têm perfis toxicológicos distintos.' },
    { t: 'A forma química determina o quadro, ocorrendo a exposição ocupacional ao mercúrio apenas no garimpo.', ok: false,
      why: 'Errada. Há exposição em odontologia, indústria elétrica e laboratórios.' },
    { t: 'A forma química determina o quadro, sendo o mercúrio metálico pouco absorvido por via respiratória.', ok: false,
      why: 'Errada. O vapor é bem absorvido pelos pulmões, e essa é a via ocupacional principal.' },
    { t: 'A forma química determina o quadro, podendo derramamentos ser limpos com aspirador comum.', ok: false,
      why: 'Errada. O aspirador dispersa o vapor e agrava a contaminação do ambiente.' }
  ],
  comentario: 'Mercúrio: forma química e via definem o quadro; o vapor metálico é bem absorvido pelo pulmão e tem tropismo pelo sistema nervoso central. Exposição vai além do garimpo — e aspirador em derramamento piora tudo.',
  pegadinha: 'Aspirar mercúrio derramado é reflexo comum e transforma um derramamento localizado em contaminação do ar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Ministério da Saúde — intoxicação por mercúrio'] },

{ id: 'q-2.9-070', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a intoxicação por monóxido de carbono em ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'É gás inodoro com sintomas inespecíficos, e a oximetria convencional pode não detectá-lo.', ok: true,
      why: 'Correta. Ausência de alerta sensorial e oximetria enganosa são as duas armadilhas.' },
    { t: 'É gás cujo odor característico alerta os trabalhadores expostos antes do agravamento do quadro.', ok: false,
      why: 'Errada. É inodoro; não há qualquer aviso sensorial.' },
    { t: 'É gás inodoro com sintomas inespecíficos, detectando a oximetria convencional a intoxicação.', ok: false,
      why: 'Errada. Pode exibir saturação normal apesar da intoxicação significativa.' },
    { t: 'É gás inodoro, sendo a cianose o sinal precoce e confiável dessa intoxicação nos expostos.', ok: false,
      why: 'Errada. A coloração pode não corresponder à gravidade do quadro.' },
    { t: 'É gás inodoro com sintomas inespecíficos, dispensando o afastamento da fonte a oxigenoterapia.', ok: false,
      why: 'Errada. A oxigenoterapia acelera a eliminação e é conduta indicada.' }
  ],
  comentario: 'Monóxido de carbono: inodoro, incolor, sintomas inespecíficos e oximetria convencional que engana. Grupos de trabalhadores com cefaleia no mesmo turno e no mesmo ambiente é o padrão que deve levantar a suspeita.',
  pegadinha: 'Saturação normal na oximetria é justamente o achado que faz o diagnóstico ser descartado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Protocolos de intoxicação por monóxido de carbono'] },

{ id: 'q-5.4-080', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a perícia em pleito de aposentadoria especial por exposição a agentes nocivos, é CORRETO afirmar:',
  alts: [
    { t: 'Recai sobre efetividade e habitualidade da exposição, variando o efeito da proteção por agente.', ok: true,
      why: 'Correta. O efeito da proteção individual sobre o reconhecimento não é uniforme; o ruído tem tratamento próprio.' },
    { t: 'Recai sobre a exposição descrita, descaracterizando-a sempre o fornecimento de proteção individual.', ok: false,
      why: 'Errada. O tratamento varia conforme o agente, e o ruído recebe tratamento próprio.' },
    { t: 'Recai sobre a efetividade da exposição, dispensada a verificação de sua habitualidade e permanência.', ok: false,
      why: 'Errada. Habitualidade e permanência integram os requisitos.' },
    { t: 'Recai sobre a exposição, podendo a perícia desconsiderar os documentos e decidir pelo relato.', ok: false,
      why: 'Errada. Os documentos técnicos são a base da análise, ainda que possam ser questionados.' },
    { t: 'Recai sobre a efetividade, equivalendo a exposição eventual e intermitente à habitual nesse fim.', ok: false,
      why: 'Errada. A eventualidade é justamente o que afasta o enquadramento.' }
  ],
  comentario: 'Aposentadoria especial: efetividade, habitualidade e permanência da exposição, com base nos documentos técnicos. O efeito do equipamento de proteção sobre o reconhecimento varia por agente — o ruído tem tratamento próprio.',
  pegadinha: 'Generalizar que o equipamento sempre descaracteriza o tempo especial ignora a distinção por agente.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999', 'Jurisprudência sobre tempo especial'] },

{ id: 'q-4.4-080', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o afastamento e o retorno em dermatoses ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'O afastamento do contato é a medida principal, e o retorno exige o agente controlado.', ok: true,
      why: 'Correta. Sem mudar a exposição, a dermatose volta assim que o tratamento cessa.' },
    { t: 'O tratamento tópico é a medida principal e permite manter o trabalhador na mesma exposição.', ok: false,
      why: 'Errada. Mantém o quadro em ciclo de melhora e recidiva sem resolução.' },
    { t: 'O afastamento do contato é a medida principal, sem repercussão da dermatose sobre a capacidade.', ok: false,
      why: 'Errada. Formas graves em mãos comprometem funções essenciais em muitas ocupações.' },
    { t: 'O afastamento é a medida principal, sem que a cronificação altere o prognóstico após ele.', ok: false,
      why: 'Errada. Quadros cronificados podem persistir mesmo após a cessação do contato.' },
    { t: 'O afastamento é a medida principal, perdendo-se a sensibilização após alguns meses sem contato.', ok: false,
      why: 'Errada. A sensibilização tende a persistir, e a reexposição reativa o quadro.' }
  ],
  comentario: 'Afastar o contato é o tratamento. Retornar exige que o agente tenha saído ou esteja controlado — sensibilização não se perde com o tempo, e a reexposição reacende o quadro. Cronificar significa não resolver nem depois do afastamento.',
  pegadinha: 'Tratar topicamente e devolver ao mesmo contato produz melhora aparente e cronificação ao longo dos anos.',
  refs: ['Salim — Dermatoses Ocupacionais'] }

);
