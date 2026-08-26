/* Lote O — 4.4, 2.3, 7.4, 7.2, 5.4, 4.8 (segunda rodada). AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-060', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Cabeleireira apresenta eczema em mãos que melhora nas férias e recidiva no retorno. Sobre a investigação, é CORRETO afirmar:',
  alts: [
    { t: 'É preciso distinguir a irritativa por trabalho úmido da alérgica por tinturas e por alisantes', ok: true,
      why: 'Correta. As duas coexistem nessa ocupação, e o teste sozinho não define nexo.' },
    { t: 'É preciso distinguir as formas, embora a melhora nas férias afaste a origem ocupacional do quadro.', ok: false,
      why: 'Errada. É justamente o padrão que sugere origem ocupacional.' },
    { t: 'É preciso aplicar o teste de contato, cujo resultado positivo estabelece isoladamente o nexo ocupacional.', ok: false,
      why: 'Errada. É preciso demonstrar exposição relevante à substância e correlação clínica.' },
    { t: 'É preciso aplicar o teste de contato, cujo resultado negativo exclui a dermatose de origem ocupacional.', ok: false,
      why: 'Errada. A irritativa não depende de sensibilização e não é detectada pelo teste.' },
    { t: 'É preciso distinguir as formas, resolvendo o uso de luvas o quadro em qualquer das duas hipóteses.', ok: false,
      why: 'Errada. A oclusão prolongada agrava a dermatite irritativa por trabalho úmido.' }
  ],
  comentario: 'Cabeleireira reúne trabalho úmido, detergentes e sensibilizantes de tintura. Melhora nas férias sugere origem ocupacional; teste positivo sem exposição relevante não fecha nexo; teste negativo não exclui irritativa. E luva oclusiva pode piorar.',
  pegadinha: 'Usar o teste de contato como árbitro único ignora que a irritativa não passa por sensibilização.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-2.3-060', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a solventes orgânicos, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição crônica pode produzir encefalopatia insidiosa, com alterações de memória e humor.', ok: true,
      why: 'Correta. É subdiagnosticada porque seus sintomas são inespecíficos.' },
    { t: 'O efeito dos solventes sobre o sistema nervoso é agudo e reversível com o fim de cada exposição.', ok: false,
      why: 'Errada. Há quadros crônicos com repercussão persistente.' },
    { t: 'A exposição crônica pode gerar encefalopatia, atribuindo-se as alterações cognitivas a fatores pessoais.', ok: false,
      why: 'Errada. A exposição precisa ser investigada como hipótese, não descartada de saída.' },
    { t: 'A exposição crônica pode gerar encefalopatia, afastada por exames de imagem sem alterações.', ok: false,
      why: 'Errada. O diagnóstico é clínico e neuropsicológico, com imagem frequentemente normal.' },
    { t: 'A exposição crônica gera efeitos neurológicos, sem relação da hepatotoxicidade com o consumo de álcool.', ok: false,
      why: 'Errada. A interação entre solventes e álcool é conhecida e potencializa o dano.' }
  ],
  comentario: 'Solvente crônico dá quadro cognitivo insidioso, com imagem normal e diagnóstico clínico-neuropsicológico. Queixa de memória em exposto merece história ocupacional detalhada antes de virar estresse ou idade. E álcool potencializa a hepatotoxicidade.',
  pegadinha: 'Imagem normal usada para descartar encefalopatia por solventes descarta o diagnóstico pelo exame errado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.3-061', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o benzeno no ambiente ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'É cancerígeno reconhecido, com toxicidade hematológica, adotada a busca do menor nível exequível.', ok: true,
      why: 'Correta. Para o benzeno não se assume nível seguro de exposição.' },
    { t: 'É cancerígeno reconhecido, havendo nível de exposição ao benzeno tido como seguro para o trabalhador.', ok: false,
      why: 'Errada. A abordagem parte da inexistência de nível seguro presumido.' },
    { t: 'É cancerígeno com toxicidade hematológica, dispensando a vigilância dos expostos hemograma periódico.', ok: false,
      why: 'Errada. O acompanhamento hematológico periódico é elemento central da vigilância.' },
    { t: 'É cancerígeno reconhecido, dispensando alteração hematológica isolada qualquer investigação adicional.', ok: false,
      why: 'Errada. Exige confirmação, investigação e avaliação da exposição.' },
    { t: 'É cancerígeno reconhecido, deixando a substituição de ser prioridade quando há controle de engenharia.', ok: false,
      why: 'Errada. A substituição permanece prioritária na hierarquia de medidas.' }
  ],
  comentario: 'Benzeno: cancerígeno reconhecido, toxicidade hematológica, sem nível seguro presumido. Vigilância hematológica periódica, alteração confirmada e investigada, substituição sempre no topo da hierarquia.',
  pegadinha: 'A existência de valor de referência técnico não equivale a nível seguro de exposição.',
  refs: ['IARC — Grupo 1', 'Legislação e acordos sobre benzeno', 'NR-15 — Anexo 13-A'] },

{ id: 'q-7.4-060', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o direito de recusa do trabalhador diante de risco grave e iminente, é CORRETO afirmar:',
  alts: [
    { t: 'Pode interromper as atividades comunicando ao superior, sendo vedada qualquer medida punitiva', ok: true,
      why: 'Correta. A previsão do direito de recusa vem acompanhada da vedação a represália.' },
    { t: 'Pode comunicar o risco ao superior, mantendo a atividade até a chegada da fiscalização ao local.', ok: false,
      why: 'Errada. A interrupção é imediata; esperar a fiscalização anularia a proteção.' },
    { t: 'Pode interromper as atividades comunicando ao superior, autorizando-se desconto pelo período parado.', ok: false,
      why: 'Errada. A interrupção legítima não gera prejuízo remuneratório.' },
    { t: 'Pode interromper as atividades, aplicando-se o direito apenas às atividades expressamente listadas.', ok: false,
      why: 'Errada. Aplica-se diante de risco grave e iminente, qualquer que seja a atividade.' },
    { t: 'Pode interromper as atividades imediatamente, sendo dispensável a comunicação ao superior hierárquico.', ok: false,
      why: 'Errada. A comunicação imediata é parte do procedimento previsto.' }
  ],
  comentario: 'Risco grave e iminente: interrompe, comunica de imediato ao superior, e a empresa não pode punir por isso. Sem lista de atividades e sem desconto pelo período parado.',
  pegadinha: 'Condicionar a interrupção à chegada da fiscalização esvazia o direito no exato momento em que ele serve.',
  refs: ['NR-1', 'NR-3'] },

{ id: 'q-7.2-060', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o auxílio-acidente, é CORRETO afirmar:',
  alts: [
    { t: 'É indenizatório, devido quando restam sequelas que reduzam a capacidade para o trabalho habitual.', ok: true,
      why: 'Correta. Indeniza a redução de capacidade e é compatível com trabalhar e receber salário.' },
    { t: 'É indenizatório e devido após a consolidação, exigindo incapacidade total do segurado para o trabalho.', ok: false,
      why: 'Errada. Pressupõe justamente capacidade residual com redução.' },
    { t: 'É devido após a consolidação das lesões, sendo incompatível com o exercício de atividade remunerada.', ok: false,
      why: 'Errada. É compatível, por ter natureza indenizatória.' },
    { t: 'É indenizatório e devido após a consolidação, apenas nos acidentes do trabalho típicos ocorridos.', ok: false,
      why: 'Errada. Alcança acidentes de qualquer natureza.' },
    { t: 'É indenizatório, concedido antes da consolidação das lesões para não retardar a reparação devida.', ok: false,
      why: 'Errada. Depende da consolidação, quando se avalia a sequela definitiva.' }
  ],
  comentario: 'Auxílio-acidente: indenizatório, após consolidação, por sequela que reduz a capacidade para o trabalho habitual, em acidente de qualquer natureza, e compatível com trabalho e salário.',
  pegadinha: 'Exigir incapacidade total inverte o pressuposto — o benefício existe para quem trabalha com capacidade reduzida.',
  refs: ['Lei nº 8.213/1991 — art. 86', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.4-060', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação pericial de quadros com componente subjetivo predominante, como dor crônica e transtornos mentais, é CORRETO afirmar:',
  alts: [
    { t: 'Deve buscar coerência entre relato, exame, tratamento, adesão e a funcionalidade observada', ok: true,
      why: 'Correta. A coerência do conjunto substitui o marcador objetivo que não existe.' },
    { t: 'Deve buscar achados objetivos, indicando simulação a ausência de exame complementar alterado.', ok: false,
      why: 'Errada. Dor crônica e transtornos mentais frequentemente não têm marcador.' },
    { t: 'Deve buscar coerência do conjunto, presumindo-se simulação nos benefícios de longa duração.', ok: false,
      why: 'Errada. Presunção de má-fé não é método pericial; a conclusão precisa de fundamentação.' },
    { t: 'Deve buscar coerência entre os achados, sem considerar o relato do periciando, por ser subjetivo.', ok: false,
      why: 'Errada. É elemento central, avaliado criticamente junto dos demais.' },
    { t: 'Deve buscar coerência entre relato e exame, não integrando a funcionalidade observada essa análise.', ok: false,
      why: 'Errada. É justamente um dos elementos que dão consistência ao conjunto.' }
  ],
  comentario: 'Sem marcador objetivo, avalia-se coerência: relato, exame, tratamento, adesão, repercussão documentada, funcionalidade. Ausência de imagem alterada não é indício de simulação, e presumir má-fé não é método.',
  pegadinha: 'Exigir substrato de imagem em dor crônica aplica um critério que a própria condição não preenche.',
  refs: ['Resoluções do CFM sobre perícia médica', 'CIF — OMS'] },

{ id: 'q-4.8-060', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o mesotelioma e a exposição ao asbesto, é CORRETO afirmar:',
  alts: [
    { t: 'Pode decorrer de exposição baixa e curta, com latência que costuma ultrapassar trinta anos.', ok: true,
      why: 'Correta. É o tumor que melhor ilustra a ausência de limiar e a latência muito longa.' },
    { t: 'Exige exposição intensa e prolongada ao asbesto para que o tumor venha a se desenvolver.', ok: false,
      why: 'Errada. Há casos após exposições curtas e de baixa intensidade, inclusive domiciliares.' },
    { t: 'Pode decorrer de exposições baixas, com latência típica de poucos anos após o início da exposição.', ok: false,
      why: 'Errada. Costuma superar três décadas.' },
    { t: 'Pode decorrer de exposições baixas, sendo o tabagismo o principal fator de risco para o mesotelioma.', ok: false,
      why: 'Errada. O tabagismo potencializa o câncer de pulmão, não o mesotelioma.' },
    { t: 'Pode decorrer de exposições baixas, afastando a ausência de asbestose o diagnóstico relacionado.', ok: false,
      why: 'Errada. O mesotelioma ocorre sem asbestose associada.' }
  ],
  comentario: 'Mesotelioma: latência acima de trinta anos, sem limiar seguro, possível após exposição curta e de baixa intensidade — inclusive doméstica, pela roupa de trabalho. Não depende de asbestose prévia, e o tabagismo não é seu determinante.',
  pegadinha: 'Exigir asbestose ou exposição intensa para admitir mesotelioma nega nexo em casos que são a regra da doença.',
  refs: ['IARC — Grupo 1', 'INCA', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.8-061', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional à sílica e o risco de câncer, é CORRETO afirmar:',
  alts: [
    { t: 'É cancerígena para humanos além de causar silicose, e associa-se também à tuberculose.', ok: true,
      why: 'Correta. Silicose, câncer e tuberculose compõem o quadro completo do risco da sílica.' },
    { t: 'Causa doença pulmonar fibrosante nos expostos, sem potencial cancerígeno reconhecido para humanos.', ok: false,
      why: 'Errada. É classificada como cancerígena para humanos.' },
    { t: 'É cancerígena para humanos, sendo a silicose condição necessária ao reconhecimento desse câncer.', ok: false,
      why: 'Errada. A associação com câncer não depende da presença de silicose.' },
    { t: 'É cancerígena e causa silicose, sem relevância clínica a relação entre silicose e tuberculose.', ok: false,
      why: 'Errada. É associação bem estabelecida e determina conduta na vigilância.' },
    { t: 'É cancerígena e causa silicose, ocorrendo a exposição à sílica apenas na atividade de mineração.', ok: false,
      why: 'Errada. Ocorre em construção, jateamento, marmorarias, cerâmica e rochas ornamentais.' }
  ],
  comentario: 'Sílica: silicose, câncer e tuberculose. Câncer não exige silicose prévia. E a exposição vai muito além da mineração — marmoraria e beneficiamento de rochas ornamentais concentram casos graves e precoces.',
  pegadinha: 'Restringir a exposição à mineração deixa fora justamente os setores onde os casos agudos têm aparecido.',
  refs: ['IARC — Grupo 1', 'Ministério da Saúde — silicose', 'NR-15'] }

);
