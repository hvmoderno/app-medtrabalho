/* Lote P — 4.3, 4.5, 4.6, 5.5, 5.2, 5.6, 4.7. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.3-060', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a pneumonite de hipersensibilidade de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Resulta de resposta imunológica a antígenos inalados, com formas aguda, subaguda e crônica, e a apresentação aguda pode ser confundida com quadro infeccioso — sendo a relação temporal com o ambiente de trabalho a pista que mais frequentemente escapa.', ok: true,
      why: 'Correta. O quadro agudo febril recorrente sugere infecção repetida se não se pergunta pelo ambiente.' },
    { t: 'Trata-se de doença de mecanismo puramente irritativo.', ok: false,
      why: 'Errada. O mecanismo é imunológico, por hipersensibilidade a antígeno inalado.' },
    { t: 'A forma crônica é sempre reversível com o afastamento.', ok: false,
      why: 'Errada. A fibrose já instalada pode não regredir; a reversibilidade é maior nas formas iniciais.' },
    { t: 'A presença de anticorpos específicos confirma o diagnóstico isoladamente.', ok: false,
      why: 'Errada. Indica exposição e sensibilização, não doença; o diagnóstico é composto.' },
    { t: 'O afastamento do antígeno é medida secundária no tratamento.', ok: false,
      why: 'Errada. É a medida central; sem ela o quadro progride.' }
  ],
  comentario: 'Mecanismo imunológico, três formas, e o agudo imita infecção. Anticorpo indica exposição, não doença. Afastar o antígeno é a intervenção principal — e quanto mais precoce, maior a chance de reversão.',
  pegadinha: 'Quadros febris recorrentes tratados como infecção de repetição adiam o diagnóstico até a fase fibrótica.',
  refs: ['Diretrizes de pneumologia ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.3-061', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a leitura radiológica padronizada em pneumoconioses, é CORRETO afirmar:',
  alts: [
    { t: 'A classificação internacional padroniza a descrição das opacidades por forma, tamanho e profusão mediante comparação com radiografias padrão, o que aumenta a reprodutibilidade entre leitores — mas descreve a imagem, sem estabelecer isoladamente diagnóstico nem nexo.', ok: true,
      why: 'Correta. Padroniza a descrição; o diagnóstico exige história de exposição.' },
    { t: 'A classificação estabelece o diagnóstico independentemente da história ocupacional.', ok: false,
      why: 'Errada. Sem exposição compatível, o achado radiológico não fecha pneumoconiose.' },
    { t: 'A leitura padronizada dispensa qualidade técnica adequada do exame.', ok: false,
      why: 'Errada. A qualidade do filme condiciona a leitura e integra a própria classificação.' },
    { t: 'A profusão descreve a extensão da limitação funcional do trabalhador.', ok: false,
      why: 'Errada. Profusão descreve densidade de opacidades; função se avalia por prova funcional.' },
    { t: 'A leitura pode ser feita sem treinamento específico do observador.', ok: false,
      why: 'Errada. A reprodutibilidade depende de leitores treinados e calibrados.' }
  ],
  comentario: 'A classificação padroniza a descrição da imagem: forma, tamanho, profusão, comparada a padrões, por leitor treinado, em filme de qualidade adequada. Não é diagnóstico e não mede função — correlação radiológico-funcional em pneumoconiose é fraca.',
  pegadinha: 'Ler profusão como medida de gravidade funcional confunde imagem com capacidade respiratória.',
  refs: ['OIT — classificação radiológica de pneumoconioses', 'Diretrizes de pneumologia ocupacional'] },

{ id: 'q-4.5-060', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o programa de conservação auditiva, é CORRETO afirmar:',
  alts: [
    { t: 'Ele não se resume à audiometria periódica e à entrega de protetores: exige medição e controle do ruído na fonte e na trajetória, capacitação, avaliação da atenuação real obtida e análise dos resultados audiométricos em série para desencadear ação.', ok: true,
      why: 'Correta. Monitorar sem intervir no ruído não conserva audição.' },
    { t: 'A entrega de protetores auriculares com certificado dispensa a medição do ruído.', ok: false,
      why: 'Errada. Sem conhecer o nível não se seleciona a atenuação necessária nem se avalia a eficácia.' },
    { t: 'A atenuação declarada pelo fabricante corresponde à obtida na prática.', ok: false,
      why: 'Errada. A atenuação real costuma ser bem menor, por ajuste e uso descontínuo.' },
    { t: 'Superproteção auditiva não traz prejuízo ao trabalhador.', ok: false,
      why: 'Errada. Atenuação excessiva prejudica a comunicação e a percepção de sinais de alerta, criando risco de acidente.' },
    { t: 'Audiometrias devem ser avaliadas isoladamente, sem comparação com as anteriores.', ok: false,
      why: 'Errada. A comparação em série é o que identifica o desencadeamento da perda.' }
  ],
  comentario: 'Conservação auditiva é programa: medir, controlar na fonte, selecionar atenuação adequada, treinar, verificar atenuação real e comparar audiometrias em série. Superproteção também é problema — quem não ouve o alarme corre outro risco.',
  pegadinha: 'A atenuação de catálogo raramente se reproduz no campo, e planejar por ela superestima a proteção.',
  refs: ['NR-7 — Anexo I', 'NR-6', 'NHO 01 — Fundacentro'] },

{ id: 'q-4.6-060', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o assédio moral no trabalho e suas repercussões em saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Caracteriza-se por condutas abusivas repetidas e prolongadas que degradam o ambiente e a dignidade do trabalhador, com repercussões documentadas em saúde mental e física — e sua abordagem exige intervenção organizacional, não apenas encaminhamento clínico da vítima.', ok: true,
      why: 'Correta. Repetição e prolongamento definem o fenômeno, e a resposta precisa alcançar a organização.' },
    { t: 'Um episódio isolado de conflito caracteriza assédio moral.', ok: false,
      why: 'Errada. A repetição e o prolongamento no tempo são elementos característicos.' },
    { t: 'Exigência de metas e cobrança de resultados configuram assédio por si mesmas.', ok: false,
      why: 'Errada. Cobrança dentro do poder diretivo não é assédio; o que caracteriza é a conduta abusiva e humilhante.' },
    { t: 'O assédio moral não guarda relação com a organização do trabalho.', ok: false,
      why: 'Errada. Estilos de gestão e pressão organizacional são fatores facilitadores reconhecidos.' },
    { t: 'A abordagem se esgota no encaminhamento da vítima para tratamento.', ok: false,
      why: 'Errada. Sem intervenção no ambiente, o padrão persiste e atinge outras pessoas.' }
  ],
  comentario: 'Assédio moral: conduta abusiva repetida e prolongada, degradando dignidade e ambiente. Conflito isolado não é; cobrança legítima não é. E tratar só a vítima deixa o padrão intacto para o próximo.',
  pegadinha: 'Os dois extremos erram: chamar qualquer conflito de assédio e negar o fenômeno chamando tudo de cobrança normal.',
  refs: ['OIT — Convenção 190', 'Literatura sobre assédio moral no trabalho'] },

{ id: 'q-5.5-060', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a emissão de restrições e recomendações no atestado de saúde ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A restrição deve ser funcional, específica e verificável — descrevendo o que não pode ser feito e em que magnitude —, porque restrição genérica é inaplicável na prática e frequentemente se converte em exclusão do trabalhador.', ok: true,
      why: 'Correta. Restrição vaga não orienta ninguém e vira motivo para não aproveitar o trabalhador.' },
    { t: 'A restrição deve indicar o diagnóstico que a motivou para justificar sua adoção.', ok: false,
      why: 'Errada. Diagnóstico permanece sob sigilo; comunica-se a limitação funcional.' },
    { t: 'Restrições genéricas oferecem proteção mais ampla ao trabalhador.', ok: false,
      why: 'Errada. Genéricas costumam inviabilizar a alocação e prejudicar quem se pretendia proteger.' },
    { t: 'Emitida a restrição, encerra-se a atuação do serviço de saúde ocupacional.', ok: false,
      why: 'Errada. É preciso acompanhar a implementação e reavaliar periodicamente.' },
    { t: 'A restrição definitiva deve ser preferida à temporária para evitar reavaliações.', ok: false,
      why: 'Errada. A definitiva se reserva a situações consolidadas; adotá-la por conveniência fecha portas indevidamente.' }
  ],
  comentario: 'Restrição útil é funcional, específica, mensurável e temporária quando cabível — com acompanhamento e reavaliação. "Evitar esforços" não orienta ninguém e costuma virar demissão.',
  pegadinha: 'Restrição ampla parece proteger mais e na prática é o caminho mais curto para a exclusão do trabalhador.',
  refs: ['NR-7', 'Código de Ética Médica', 'CIF — OMS'] },

{ id: 'q-5.2-060', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a classificação de Schilling aplicada às doenças relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Ela distingue o trabalho como causa necessária, como fator contributivo entre outros e como agravante de doença preexistente — e as três categorias configuram relação com o trabalho, variando o modo de participação e não a existência do vínculo.', ok: true,
      why: 'Correta. As três categorias estabelecem relação com o trabalho.' },
    { t: 'Apenas a categoria em que o trabalho é causa necessária configura doença relacionada ao trabalho.', ok: false,
      why: 'Errada. As três categorias configuram relação com o trabalho.' },
    { t: 'A classificação estabelece o grau de incapacidade do trabalhador.', ok: false,
      why: 'Errada. Trata do modo de participação do trabalho na causa, não de incapacidade.' },
    { t: 'Doenças comuns agravadas pelo trabalho ficam fora da classificação.', ok: false,
      why: 'Errada. Constituem justamente uma das categorias.' },
    { t: 'A classificação substitui a investigação individual de nexo.', ok: false,
      why: 'Errada. É um referencial conceitual que organiza a análise, não a dispensa.' }
  ],
  comentario: 'Schilling: causa necessária, fator contributivo e agravante. Três modos de participação do trabalho, três relações com o trabalho — o que muda é o modo, não a existência do vínculo. Não mede incapacidade nem dispensa a análise do caso.',
  pegadinha: 'Reservar o reconhecimento à primeira categoria exclui a maior parte das doenças relacionadas ao trabalho.',
  refs: ['Schilling — classificação', 'Ministério da Saúde — doenças relacionadas ao trabalho'] },

{ id: 'q-5.6-060', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a readaptação funcional dentro da empresa após afastamento por doença relacionada ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A readaptação deve partir da análise das exigências das funções disponíveis confrontadas com as limitações residuais, com acompanhamento do período de adaptação — e a função de destino não pode ser usada como forma velada de constrangimento ou rebaixamento.', ok: true,
      why: 'Correta. Readaptação punitiva é forma reconhecida de pressão para o desligamento.' },
    { t: 'A readaptação pode ser feita para qualquer função com menor exigência física, sem outra análise.', ok: false,
      why: 'Errada. É preciso confrontar limitações específicas com exigências específicas.' },
    { t: 'A recusa do trabalhador à função proposta caracteriza automaticamente insubordinação.', ok: false,
      why: 'Errada. A recusa pode ser legítima se a função é incompatível ou constrangedora.' },
    { t: 'A readaptação dispensa acompanhamento após a mudança de função.', ok: false,
      why: 'Errada. O acompanhamento verifica a adequação real e permite ajuste.' },
    { t: 'A readaptação implica necessariamente redução salarial correspondente à nova função.', ok: false,
      why: 'Errada. A alteração prejudicial ao trabalhador encontra limites na proteção contratual.' }
  ],
  comentario: 'Readaptar é casar limitação residual com exigência real da função de destino, e acompanhar. Função de menor exigência escolhida sem análise, ou usada para constranger, é o que a literatura descreve como readaptação punitiva.',
  pegadinha: 'Assumir que "função mais leve" resolve ignora limitações que não são de carga física.',
  refs: ['Lei nº 8.213/1991', 'CLT — alteração contratual', 'CIF — OMS'] },

{ id: 'q-4.7-060', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso de álcool e outras drogas entre trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'A abordagem adequada é de saúde, com acolhimento, sigilo e encaminhamento para tratamento, considerando também fatores do trabalho que contribuem para o uso — e testagem, quando existir, exige finalidade legítima, procedimento definido e não pode servir a punição sumária.', ok: true,
      why: 'Correta. É problema de saúde, com determinantes que incluem o próprio trabalho.' },
    { t: 'A constatação de uso autoriza a dispensa imediata por justa causa em qualquer situação.', ok: false,
      why: 'Errada. A dependência é condição de saúde e a resposta primeira é o encaminhamento a tratamento.' },
    { t: 'Testagem aleatória pode ser aplicada livremente em qualquer função.', ok: false,
      why: 'Errada. Exige finalidade legítima ligada à segurança, procedimento definido e limites de privacidade.' },
    { t: 'Fatores organizacionais não têm relação com o uso de substâncias por trabalhadores.', ok: false,
      why: 'Errada. Turnos, sobrecarga, isolamento e disponibilidade no ambiente são fatores reconhecidos.' },
    { t: 'O resultado de teste positivo pode ser comunicado à chefia com o detalhamento clínico.', ok: false,
      why: 'Errada. O sigilo se aplica; comunica-se aptidão e restrição.' }
  ],
  comentario: 'Álcool e drogas no trabalho: abordagem de saúde, sigilo, tratamento, e olhar para os fatores organizacionais que contribuem. Testagem só com finalidade legítima de segurança e procedimento definido — nunca como via de punição sumária.',
  pegadinha: 'Tratar o achado como falta disciplinar converte um problema de saúde em desligamento e não resolve o risco.',
  refs: ['Código de Ética Médica', 'OIT — álcool e drogas no local de trabalho'] }

);
