/* Lote O — 4.4, 2.3, 7.4, 7.2, 5.4, 4.8 (segunda rodada). AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-060', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Cabeleireira apresenta eczema em mãos que melhora nas férias e recidiva no retorno. Sobre a investigação, é CORRETO afirmar:',
  alts: [
    { t: 'A investigação deve distinguir dermatite de contato irritativa, ligada ao trabalho úmido e ao contato repetido com detergentes, de dermatite alérgica por substâncias de tinturas e alisantes — e o teste de contato só faz sentido interpretado junto da história de exposição.', ok: true,
      why: 'Correta. Trabalho úmido e sensibilizantes coexistem nessa ocupação, e o teste sozinho não define nexo.' },
    { t: 'O padrão de melhora nas férias afasta a origem ocupacional.', ok: false,
      why: 'Errada. É justamente o padrão que sugere origem ocupacional.' },
    { t: 'Teste de contato positivo estabelece isoladamente o nexo ocupacional.', ok: false,
      why: 'Errada. É preciso demonstrar exposição relevante à substância na atividade e correlação clínica.' },
    { t: 'Teste de contato negativo exclui dermatose ocupacional.', ok: false,
      why: 'Errada. A dermatite irritativa não depende de sensibilização e não é detectada pelo teste.' },
    { t: 'O uso de luvas resolve o quadro em qualquer das hipóteses.', ok: false,
      why: 'Errada. Oclusão prolongada por luva agrava a dermatite irritativa por trabalho úmido.' }
  ],
  comentario: 'Cabeleireira reúne trabalho úmido, detergentes e sensibilizantes de tintura. Melhora nas férias sugere origem ocupacional; teste positivo sem exposição relevante não fecha nexo; teste negativo não exclui irritativa. E luva oclusiva pode piorar.',
  pegadinha: 'Usar o teste de contato como árbitro único ignora que a irritativa não passa por sensibilização.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-2.3-060', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a solventes orgânicos, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição crônica pode produzir encefalopatia com alterações de memória, atenção e humor, de instalação insidiosa e frequentemente atribuída a outras causas — o que exige história ocupacional detalhada diante de queixas cognitivas em trabalhadores expostos.', ok: true,
      why: 'Correta. A encefalopatia por solventes é subdiagnosticada porque seus sintomas são inespecíficos.' },
    { t: 'O efeito dos solventes sobre o sistema nervoso é apenas agudo e reversível.', ok: false,
      why: 'Errada. Há quadros crônicos com repercussão persistente.' },
    { t: 'Alterações cognitivas em trabalhador exposto devem ser atribuídas prioritariamente a fatores pessoais.', ok: false,
      why: 'Errada. A exposição precisa ser investigada como hipótese, e não descartada de saída.' },
    { t: 'Exames de imagem normais afastam a encefalopatia por solventes.', ok: false,
      why: 'Errada. O diagnóstico é clínico e neuropsicológico, com imagem frequentemente sem alterações.' },
    { t: 'A hepatotoxicidade dos solventes não guarda relação com o consumo de álcool.', ok: false,
      why: 'Errada. A interação entre solventes e álcool é conhecida e potencializa o dano.' }
  ],
  comentario: 'Solvente crônico dá quadro cognitivo insidioso, com imagem normal e diagnóstico clínico-neuropsicológico. Queixa de memória em exposto merece história ocupacional detalhada antes de virar estresse ou idade. E álcool potencializa a hepatotoxicidade.',
  pegadinha: 'Imagem normal usada para descartar encefalopatia por solventes descarta o diagnóstico pelo exame errado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.3-061', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o benzeno no ambiente ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Trata-se de agente reconhecidamente cancerígeno para humanos, com toxicidade hematológica, para o qual a política adotada é de prevenção da exposição com busca do menor nível exequível, e não de tolerância a um patamar considerado seguro.', ok: true,
      why: 'Correta. Para o benzeno não se assume nível seguro de exposição.' },
    { t: 'Existe nível de exposição ao benzeno reconhecido como seguro.', ok: false,
      why: 'Errada. A abordagem parte da inexistência de nível seguro presumido.' },
    { t: 'A vigilância dos expostos dispensa hemograma periódico.', ok: false,
      why: 'Errada. O acompanhamento hematológico periódico é elemento central da vigilância.' },
    { t: 'Alteração hematológica isolada em trabalhador exposto dispensa investigação adicional.', ok: false,
      why: 'Errada. Exige confirmação, investigação e avaliação da exposição.' },
    { t: 'A substituição do benzeno em produtos e processos não é prioridade quando há controle de engenharia.', ok: false,
      why: 'Errada. A substituição permanece prioritária na hierarquia de medidas.' }
  ],
  comentario: 'Benzeno: cancerígeno reconhecido, toxicidade hematológica, sem nível seguro presumido. Vigilância hematológica periódica, alteração confirmada e investigada, substituição sempre no topo da hierarquia.',
  pegadinha: 'A existência de valor de referência técnico não equivale a nível seguro de exposição.',
  refs: ['IARC — Grupo 1', 'Legislação e acordos sobre benzeno', 'NR-15 — Anexo 13-A'] },

{ id: 'q-7.4-060', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o direito de recusa do trabalhador diante de risco grave e iminente, é CORRETO afirmar:',
  alts: [
    { t: 'O trabalhador pode interromper suas atividades comunicando imediatamente ao superior hierárquico, e a norma veda que a empresa adote medida punitiva em razão dessa interrupção quando o risco grave e iminente é constatado.', ok: true,
      why: 'Correta. A previsão do direito de recusa vem acompanhada da vedação a represália.' },
    { t: 'O trabalhador deve manter a atividade até a chegada da fiscalização.', ok: false,
      why: 'Errada. A interrupção é imediata; esperar a fiscalização anularia a proteção.' },
    { t: 'A interrupção autoriza desconto salarial pelo período parado.', ok: false,
      why: 'Errada. A interrupção legítima não gera prejuízo remuneratório ao trabalhador.' },
    { t: 'O direito de recusa se aplica apenas a atividades expressamente listadas em norma.', ok: false,
      why: 'Errada. Aplica-se diante de risco grave e iminente, qualquer que seja a atividade.' },
    { t: 'A comunicação ao superior hierárquico é dispensável.', ok: false,
      why: 'Errada. A comunicação imediata é parte do procedimento previsto.' }
  ],
  comentario: 'Risco grave e iminente: interrompe, comunica de imediato ao superior, e a empresa não pode punir por isso. Sem lista de atividades e sem desconto pelo período parado.',
  pegadinha: 'Condicionar a interrupção à chegada da fiscalização esvazia o direito no exato momento em que ele serve.',
  refs: ['NR-1', 'NR-3'] },

{ id: 'q-7.2-060', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o auxílio-acidente, é CORRETO afirmar:',
  alts: [
    { t: 'Tem natureza indenizatória e é devido quando, após a consolidação das lesões de acidente de qualquer natureza, restam sequelas que impliquem redução da capacidade para o trabalho habitualmente exercido — sendo compatível com o retorno ao trabalho e com a remuneração.', ok: true,
      why: 'Correta. Indeniza a redução de capacidade e não impede trabalhar.' },
    { t: 'Ele exige incapacidade total para o trabalho.', ok: false,
      why: 'Errada. Pressupõe justamente capacidade residual com redução.' },
    { t: 'Ele é incompatível com o exercício de atividade remunerada.', ok: false,
      why: 'Errada. É compatível, por ter natureza indenizatória.' },
    { t: 'Ele é devido apenas em acidentes do trabalho típicos.', ok: false,
      why: 'Errada. Alcança acidentes de qualquer natureza.' },
    { t: 'Ele é concedido antes da consolidação das lesões.', ok: false,
      why: 'Errada. Depende da consolidação, quando se avalia a sequela definitiva.' }
  ],
  comentario: 'Auxílio-acidente: indenizatório, após consolidação, por sequela que reduz a capacidade para o trabalho habitual, em acidente de qualquer natureza, e compatível com trabalho e salário.',
  pegadinha: 'Exigir incapacidade total inverte o pressuposto — o benefício existe para quem trabalha com capacidade reduzida.',
  refs: ['Lei nº 8.213/1991 — art. 86', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.4-060', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação pericial de quadros com componente subjetivo predominante, como dor crônica e transtornos mentais, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve buscar coerência entre relato, achados de exame, história de tratamento, adesão, repercussões documentadas e funcionalidade observada — sem presumir simulação pela ausência de exame de imagem alterado.', ok: true,
      why: 'Correta. Coerência do conjunto substitui a busca por um marcador objetivo que não existe.' },
    { t: 'A ausência de exame complementar alterado indica simulação.', ok: false,
      why: 'Errada. Dor crônica e transtornos mentais frequentemente não têm marcador de imagem ou laboratório.' },
    { t: 'A simulação deve ser presumida em benefícios de longa duração.', ok: false,
      why: 'Errada. Presunção de má-fé não é método pericial; a conclusão precisa de fundamentação.' },
    { t: 'O relato do periciando não deve ser considerado por ser subjetivo.', ok: false,
      why: 'Errada. É elemento central, avaliado criticamente junto dos demais.' },
    { t: 'A funcionalidade observada não integra a avaliação nesses quadros.', ok: false,
      why: 'Errada. É justamente um dos elementos que dão consistência ao conjunto.' }
  ],
  comentario: 'Sem marcador objetivo, avalia-se coerência: relato, exame, tratamento, adesão, repercussão documentada, funcionalidade. Ausência de imagem alterada não é indício de simulação, e presumir má-fé não é método.',
  pegadinha: 'Exigir substrato de imagem em dor crônica aplica um critério que a própria condição não preenche.',
  refs: ['Resoluções do CFM sobre perícia médica', 'CIF — OMS'] },

{ id: 'q-4.8-060', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o mesotelioma e a exposição ao asbesto, é CORRETO afirmar:',
  alts: [
    { t: 'Pode decorrer de exposições de baixa intensidade e curta duração, com latência que costuma ultrapassar trinta anos, e sua ocorrência guarda relação com a exposição cumulativa sem que se reconheça um limiar seguro.', ok: true,
      why: 'Correta. É o tumor que melhor ilustra a ausência de limiar e a latência muito longa.' },
    { t: 'Exige exposição intensa e prolongada para ocorrer.', ok: false,
      why: 'Errada. Há casos documentados após exposições curtas e de baixa intensidade, inclusive domiciliares.' },
    { t: 'A latência típica é de poucos anos após o início da exposição.', ok: false,
      why: 'Errada. Costuma superar três décadas.' },
    { t: 'O tabagismo é o principal fator de risco para o mesotelioma.', ok: false,
      why: 'Errada. O tabagismo potencializa o câncer de pulmão em expostos, mas não é o fator determinante do mesotelioma.' },
    { t: 'A ausência de asbestose afasta o diagnóstico de mesotelioma relacionado ao asbesto.', ok: false,
      why: 'Errada. O mesotelioma ocorre sem asbestose associada.' }
  ],
  comentario: 'Mesotelioma: latência acima de trinta anos, sem limiar seguro, possível após exposição curta e de baixa intensidade — inclusive doméstica, pela roupa de trabalho. Não depende de asbestose prévia, e o tabagismo não é seu determinante.',
  pegadinha: 'Exigir asbestose ou exposição intensa para admitir mesotelioma nega nexo em casos que são a regra da doença.',
  refs: ['IARC — Grupo 1', 'INCA', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.8-061', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional à sílica e o risco de câncer, é CORRETO afirmar:',
  alts: [
    { t: 'A sílica cristalina respirável é classificada como cancerígena para humanos, além de causar silicose, e a associação com tuberculose torna a vigilância dos expostos necessariamente mais ampla que a busca isolada de alteração radiológica.', ok: true,
      why: 'Correta. Silicose, câncer e tuberculose compõem o quadro completo do risco da sílica.' },
    { t: 'A sílica cristalina causa apenas doença pulmonar fibrosante, sem potencial cancerígeno.', ok: false,
      why: 'Errada. É classificada como cancerígena para humanos.' },
    { t: 'A silicose é condição necessária para o reconhecimento do câncer relacionado à sílica.', ok: false,
      why: 'Errada. A associação com câncer não depende da presença de silicose.' },
    { t: 'A relação entre silicose e tuberculose não tem relevância clínica.', ok: false,
      why: 'Errada. É associação bem estabelecida e determina conduta na vigilância dos expostos.' },
    { t: 'A exposição à sílica ocorre apenas em mineração.', ok: false,
      why: 'Errada. Ocorre em construção, jateamento, marmorarias, cerâmica e beneficiamento de rochas ornamentais.' }
  ],
  comentario: 'Sílica: silicose, câncer e tuberculose. Câncer não exige silicose prévia. E a exposição vai muito além da mineração — marmoraria e beneficiamento de rochas ornamentais concentram casos graves e precoces.',
  pegadinha: 'Restringir a exposição à mineração deixa fora justamente os setores onde os casos agudos têm aparecido.',
  refs: ['IARC — Grupo 1', 'Ministério da Saúde — silicose', 'NR-15'] }

);
