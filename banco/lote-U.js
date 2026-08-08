/* Lote U — 4.3, 4.5, 4.6, 4.8, 2.3, 2.9, 5.4, 4.4. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.3-070', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a asbestose e as demais alterações pleuropulmonares associadas ao asbesto, é CORRETO afirmar:',
  alts: [
    { t: 'Placas pleurais indicam exposição pregressa e frequentemente cursam sem repercussão funcional significativa, enquanto a asbestose é doença intersticial fibrosante com repercussão funcional — de modo que a presença de placas não equivale ao diagnóstico de asbestose.', ok: true,
      why: 'Correta. Placa pleural é marcador de exposição; asbestose é doença do parênquima.' },
    { t: 'Placas pleurais e asbestose são a mesma entidade em estágios diferentes.', ok: false,
      why: 'Errada. São alterações distintas, com mecanismos e repercussões diferentes.' },
    { t: 'A ausência de placas pleurais afasta exposição significativa ao asbesto.', ok: false,
      why: 'Errada. Nem todo exposto desenvolve placas.' },
    { t: 'A asbestose regride com o afastamento da exposição.', ok: false,
      why: 'Errada. A fibrose instalada não regride; o afastamento evita a progressão adicional.' },
    { t: 'Trabalhadores com placas pleurais dispensam acompanhamento posterior.', ok: false,
      why: 'Errada. São expostos comprovados e permanecem sob risco de outros desfechos, incluindo neoplasias.' }
  ],
  comentario: 'Placa pleural marca exposição, não doença parenquimatosa. Asbestose é fibrose e não regride. E quem tem placa é exposto comprovado — segue em vigilância pelo risco de mesotelioma e câncer de pulmão.',
  pegadinha: 'Ler placa pleural como asbestose leve confunde marcador de exposição com doença fibrosante.',
  refs: ['Diretrizes de pneumologia ocupacional', 'IARC'] },

{ id: 'q-4.5-070', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a audiometria ocupacional e as condições de sua realização, é CORRETO afirmar:',
  alts: [
    { t: 'Exige repouso auditivo prévio adequado e cabina com atenuação apropriada, e a audiometria de referência deve ser obtida em condições ideais — pois é contra ela que todas as sequenciais serão comparadas ao longo dos anos.', ok: true,
      why: 'Correta. Referência mal obtida compromete toda a série futura.' },
    { t: 'O repouso auditivo prévio é dispensável quando a audiometria é apenas de triagem.', ok: false,
      why: 'Errada. Sem repouso, mudança temporária de limiar simula perda permanente.' },
    { t: 'A audiometria pode ser realizada em sala silenciosa comum, sem cabina.', ok: false,
      why: 'Errada. O ruído ambiental mascara os limiares nas frequências mais baixas.' },
    { t: 'A audiometria de referência pode ser substituída pela mais recente disponível a qualquer momento.', ok: false,
      why: 'Errada. A troca da referência segue critérios definidos e não é discricionária.' },
    { t: 'Alterações detectadas dispensam avaliação otorrinolaringológica complementar.', ok: false,
      why: 'Errada. A avaliação complementar é necessária para o diagnóstico diferencial.' }
  ],
  comentario: 'Repouso auditivo e cabina adequada, com referência obtida em condição ideal — porque toda a série de anos será comparada a ela. Sem repouso, o que se registra é mudança temporária de limiar lida como perda.',
  pegadinha: 'Audiometria feita logo após a jornada, sem repouso, produz "perda" que some no dia seguinte.',
  refs: ['NR-7 — Anexo I', 'Diretrizes de audiologia ocupacional'] },

{ id: 'q-4.6-070', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os modelos teóricos que explicam a relação entre organização do trabalho e adoecimento mental, é CORRETO afirmar:',
  alts: [
    { t: 'Modelos como o de demanda e controle e o de desequilíbrio entre esforço e recompensa apontam que o adoecimento se associa à combinação de alta exigência com baixa autonomia ou baixo reconhecimento — e não à exigência em si.', ok: true,
      why: 'Correta. A combinação é que adoece; exigência com autonomia e reconhecimento tem outro perfil de risco.' },
    { t: 'A carga de trabalho elevada é, isoladamente, o principal determinante do adoecimento.', ok: false,
      why: 'Errada. O que pesa é a combinação com baixa autonomia ou baixo reconhecimento.' },
    { t: 'O apoio social no trabalho não modifica o efeito das demandas.', ok: false,
      why: 'Errada. É reconhecido como fator moderador relevante.' },
    { t: 'Os modelos teóricos não têm aplicação prática na avaliação de riscos psicossociais.', ok: false,
      why: 'Errada. Orientam instrumentos de avaliação e o desenho das intervenções.' },
    { t: 'O reconhecimento no trabalho tem valor apenas simbólico, sem repercussão em saúde.', ok: false,
      why: 'Errada. O desequilíbrio entre esforço e recompensa tem associação documentada com desfechos de saúde.' }
  ],
  comentario: 'Demanda-controle e esforço-recompensa: adoece a alta exigência sem autonomia ou sem reconhecimento, com apoio social moderando o efeito. Intervir na organização passa por devolver margem de decisão e reconhecimento, não só reduzir volume.',
  pegadinha: 'Focar apenas na redução de carga deixa intactos os dois eixos que os modelos apontam como decisivos.',
  refs: ['Karasek & Theorell', 'Siegrist', 'OIT — riscos psicossociais'] },

{ id: 'q-4.8-070', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as leucemias relacionadas a exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A associação com o benzeno é bem estabelecida, e a exposição pode ter ocorrido anos antes do diagnóstico — de modo que a investigação exige história ocupacional completa e retrospectiva, e não apenas a atividade atual do paciente.', ok: true,
      why: 'Correta. História ocupacional restrita ao emprego atual perde a exposição relevante.' },
    { t: 'A leucemia ocupacional se manifesta durante o período de exposição.', ok: false,
      why: 'Errada. Pode surgir anos após o término da exposição.' },
    { t: 'A ausência de exposição na atividade atual afasta a origem ocupacional.', ok: false,
      why: 'Errada. Exposições pregressas são as mais relevantes nesses casos.' },
    { t: 'Apenas trabalhadores da indústria petroquímica apresentam exposição relevante ao benzeno.', ok: false,
      why: 'Errada. Frentistas, trabalhadores de siderurgia e de setores que usam solventes também se expõem.' },
    { t: 'A investigação da exposição pregressa é inviável e deve ser dispensada.', ok: false,
      why: 'Errada. Registros, documentos previdenciários e a própria história do trabalhador permitem reconstituí-la.' }
  ],
  comentario: 'Leucemia e benzeno: exposição possivelmente encerrada há anos, em setores que vão muito além da petroquímica. Perguntar só pelo emprego atual é o que faz o nexo desaparecer.',
  pegadinha: 'Restringir a anamnese ocupacional ao emprego atual apaga justamente a exposição que causou o quadro.',
  refs: ['IARC — Grupo 1', 'Ministério da Saúde — benzenismo'] },

{ id: 'q-2.3-070', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a mercúrio, é CORRETO afirmar:',
  alts: [
    { t: 'As formas química e a via de exposição determinam o quadro clínico — o vapor metálico tem tropismo pelo sistema nervoso central, enquanto compostos orgânicos e inorgânicos têm perfis distintos —, e há setores de exposição além do garimpo, como odontologia e indústria de lâmpadas e instrumentos.', ok: true,
      why: 'Correta. Forma química e via mudam completamente a apresentação.' },
    { t: 'Todas as formas de mercúrio produzem o mesmo quadro clínico.', ok: false,
      why: 'Errada. Metálico, inorgânico e orgânico têm perfis toxicológicos distintos.' },
    { t: 'A exposição ocupacional ao mercúrio ocorre apenas no garimpo.', ok: false,
      why: 'Errada. Há exposição em odontologia, indústria elétrica e laboratórios.' },
    { t: 'O mercúrio metálico é pouco absorvido por via respiratória.', ok: false,
      why: 'Errada. O vapor é bem absorvido pelos pulmões, e essa é a via ocupacional principal.' },
    { t: 'Derramamentos de mercúrio metálico podem ser limpos com aspirador comum.', ok: false,
      why: 'Errada. O aspirador dispersa o vapor e agrava a contaminação do ambiente.' }
  ],
  comentario: 'Mercúrio: forma química e via definem o quadro; o vapor metálico é bem absorvido pelo pulmão e tem tropismo pelo sistema nervoso central. Exposição vai além do garimpo — e aspirador em derramamento piora tudo.',
  pegadinha: 'Aspirar mercúrio derramado é reflexo comum e transforma um derramamento localizado em contaminação do ar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Ministério da Saúde — intoxicação por mercúrio'] },

{ id: 'q-2.9-070', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a intoxicação por monóxido de carbono em ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Trata-se de gás inodoro e incolor que produz sintomas inespecíficos — cefaleia, náusea, tontura —, frequentemente atribuídos a outras causas, e a oximetria de pulso convencional pode não detectar a alteração, exigindo dosagem específica.', ok: true,
      why: 'Correta. Ausência de alerta sensorial e oximetria enganosa são as duas armadilhas do quadro.' },
    { t: 'O odor característico do gás alerta os trabalhadores expostos.', ok: false,
      why: 'Errada. É inodoro; não há qualquer aviso sensorial.' },
    { t: 'A oximetria de pulso convencional detecta confiavelmente a intoxicação.', ok: false,
      why: 'Errada. Pode exibir saturação normal apesar da intoxicação significativa.' },
    { t: 'A cianose é sinal precoce e confiável da intoxicação.', ok: false,
      why: 'Errada. A coloração pode não corresponder à gravidade do quadro.' },
    { t: 'O afastamento da fonte dispensa oxigenoterapia nos casos sintomáticos.', ok: false,
      why: 'Errada. A oxigenoterapia acelera a eliminação e é conduta indicada.' }
  ],
  comentario: 'Monóxido de carbono: inodoro, incolor, sintomas inespecíficos e oximetria convencional que engana. Grupos de trabalhadores com cefaleia no mesmo turno e no mesmo ambiente é o padrão que deve levantar a suspeita.',
  pegadinha: 'Saturação normal na oximetria é justamente o achado que faz o diagnóstico ser descartado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Protocolos de intoxicação por monóxido de carbono'] },

{ id: 'q-5.4-080', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a perícia em pleito de aposentadoria especial por exposição a agentes nocivos, é CORRETO afirmar:',
  alts: [
    { t: 'A análise recai sobre a efetividade e a habitualidade da exposição descrita nos documentos técnicos, e a discussão sobre o efeito de equipamentos de proteção sobre o reconhecimento do tempo especial depende do agente — com tratamento distinto conferido ao ruído.', ok: true,
      why: 'Correta. O efeito da proteção individual sobre o reconhecimento não é uniforme entre agentes.' },
    { t: 'O fornecimento de equipamento de proteção individual sempre descaracteriza a exposição para fins de tempo especial.', ok: false,
      why: 'Errada. O tratamento varia conforme o agente, e o ruído recebe tratamento próprio.' },
    { t: 'A análise dispensa a verificação da habitualidade da exposição.', ok: false,
      why: 'Errada. Habitualidade e permanência integram os requisitos.' },
    { t: 'A perícia pode desconsiderar os documentos técnicos e decidir apenas pelo relato do segurado.', ok: false,
      why: 'Errada. Os documentos técnicos são a base da análise, ainda que possam ser questionados.' },
    { t: 'Exposição eventual e intermitente equivale a exposição habitual para esse fim.', ok: false,
      why: 'Errada. A eventualidade é justamente o que afasta o enquadramento.' }
  ],
  comentario: 'Aposentadoria especial: efetividade, habitualidade e permanência da exposição, com base nos documentos técnicos. O efeito do equipamento de proteção sobre o reconhecimento varia por agente — o ruído tem tratamento próprio.',
  pegadinha: 'Generalizar que o equipamento sempre descaracteriza o tempo especial ignora a distinção por agente.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999', 'Jurisprudência sobre tempo especial'] },

{ id: 'q-4.4-080', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o afastamento e o retorno em dermatoses ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'O afastamento do contato é a medida terapêutica principal, e o retorno exige que o agente tenha sido eliminado, substituído ou efetivamente controlado — retorno ao mesmo contato com tratamento tópico apenas mantém o ciclo de recidiva.', ok: true,
      why: 'Correta. Sem mudar a exposição, a dermatose volta assim que o tratamento cessa.' },
    { t: 'O tratamento tópico permite manter o trabalhador na mesma exposição.', ok: false,
      why: 'Errada. Mantém o quadro em ciclo de melhora e recidiva sem resolução.' },
    { t: 'A dermatose ocupacional não gera repercussão sobre a capacidade laborativa.', ok: false,
      why: 'Errada. Formas graves em mãos comprometem funções essenciais em muitas ocupações.' },
    { t: 'A cronificação não altera o prognóstico após o afastamento.', ok: false,
      why: 'Errada. Quadros cronificados podem persistir mesmo após a cessação do contato.' },
    { t: 'A sensibilização adquirida se perde após alguns meses de afastamento.', ok: false,
      why: 'Errada. A sensibilização tende a persistir, e a reexposição reativa o quadro.' }
  ],
  comentario: 'Afastar o contato é o tratamento. Retornar exige que o agente tenha saído ou esteja controlado — sensibilização não se perde com o tempo, e a reexposição reacende o quadro. Cronificar significa não resolver nem depois do afastamento.',
  pegadinha: 'Tratar topicamente e devolver ao mesmo contato produz melhora aparente e cronificação ao longo dos anos.',
  refs: ['Salim — Dermatoses Ocupacionais'] }

);
