/* Lote P — 4.3, 4.5, 4.6, 5.5, 5.2, 5.6, 4.7. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.3-060', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a pneumonite de hipersensibilidade de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Resulta de resposta imunológica a antígeno inalado, e a forma aguda pode ser confundida com quadro infeccioso febril', ok: true,
      why: 'Correta. O quadro agudo febril recorrente sugere infecção repetida se não se pergunta pelo ambiente.' },
    { t: 'Resulta da ação irritativa direta de poeiras orgânicas sobre o epitélio alveolar, sem participação de mecanismo imunológico.', ok: false,
      why: 'Errada. O mecanismo é imunológico, por hipersensibilidade ao antígeno inalado.' },
    { t: 'Resulta de resposta imunológica a antígeno inalado, sendo a forma crônica integralmente reversível com o afastamento.', ok: false,
      why: 'Errada. A fibrose já instalada pode não regredir; a reversibilidade é maior nas formas iniciais.' },
    { t: 'Resulta de resposta imunológica, e a presença de anticorpos específicos séricos confirma o diagnóstico isoladamente.', ok: false,
      why: 'Errada. Indica exposição e sensibilização, não doença; o diagnóstico é composto.' },
    { t: 'Resulta de resposta imunológica a antígeno inalado, sendo o afastamento do antígeno medida secundária no tratamento.', ok: false,
      why: 'Errada. É a medida central; sem ela o quadro progride apesar do tratamento.' }
  ],
  comentario: 'Mecanismo imunológico, três formas, e o agudo imita infecção. Anticorpo indica exposição, não doença. Afastar o antígeno é a intervenção principal — e quanto mais precoce, maior a chance de reversão.',
  pegadinha: 'Quadros febris recorrentes tratados como infecção de repetição adiam o diagnóstico até a fase fibrótica.',
  refs: ['Diretrizes de pneumologia ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.3-061', tema: '4.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a leitura radiológica padronizada em pneumoconioses, é CORRETO afirmar:',
  alts: [
    { t: 'Padroniza a descrição das opacidades por comparação com radiografias padrão, sem estabelecer diagnóstico nem nexo.', ok: true,
      why: 'Correta. Padroniza a descrição; o diagnóstico exige história de exposição compatível.' },
    { t: 'Padroniza a descrição das opacidades e estabelece o diagnóstico de pneumoconiose independentemente da história ocupacional.', ok: false,
      why: 'Errada. Sem exposição compatível, o achado radiológico não fecha pneumoconiose.' },
    { t: 'Padroniza a descrição por comparação com radiografias padrão, o que dispensa exigência de qualidade técnica do exame.', ok: false,
      why: 'Errada. A qualidade do filme condiciona a leitura e integra a própria classificação.' },
    { t: 'Padroniza a descrição das opacidades, sendo a profusão o parâmetro que expressa a limitação funcional do trabalhador.', ok: false,
      why: 'Errada. Profusão descreve densidade de opacidades; função se avalia por prova funcional.' },
    { t: 'Padroniza a descrição por comparação com radiografias padrão, o que torna dispensável o treinamento do observador.', ok: false,
      why: 'Errada. A reprodutibilidade depende de leitores treinados e calibrados.' }
  ],
  comentario: 'A classificação padroniza a descrição da imagem: forma, tamanho, profusão, comparada a padrões, por leitor treinado, em filme de qualidade adequada. Não é diagnóstico e não mede função — correlação radiológico-funcional em pneumoconiose é fraca.',
  pegadinha: 'Ler profusão como medida de gravidade funcional confunde imagem com capacidade respiratória.',
  refs: ['OIT — classificação radiológica de pneumoconioses', 'Diretrizes de pneumologia ocupacional'] },

{ id: 'q-4.5-060', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o programa de conservação auditiva, é CORRETO afirmar:',
  alts: [
    { t: 'Exige medição e controle do ruído na fonte, avaliação da atenuação real e análise das audiometrias em série.', ok: true,
      why: 'Correta. Monitorar sem intervir no ruído não conserva audição.' },
    { t: 'Exige entrega de protetores com certificado de aprovação, o que torna dispensável a medição dos níveis de ruído.', ok: false,
      why: 'Errada. Sem conhecer o nível não se seleciona a atenuação necessária nem se avalia a eficácia.' },
    { t: 'Exige medição do ruído e seleção do protetor pela atenuação declarada, que corresponde à obtida na prática pelo usuário.', ok: false,
      why: 'Errada. A atenuação real costuma ser bem menor, por ajuste imperfeito e uso descontínuo.' },
    { t: 'Exige medição e controle do ruído, e a superproteção auditiva não traz prejuízo ao trabalhador protegido.', ok: false,
      why: 'Errada. Atenuação excessiva prejudica a comunicação e a percepção de alarmes, criando risco de acidente.' },
    { t: 'Exige medição e controle do ruído, devendo as audiometrias ser avaliadas isoladamente a cada exame periódico.', ok: false,
      why: 'Errada. A comparação em série é o que identifica o desencadeamento da perda.' }
  ],
  comentario: 'Conservação auditiva é programa: medir, controlar na fonte, selecionar atenuação adequada, treinar, verificar atenuação real e comparar audiometrias em série. Superproteção também é problema — quem não ouve o alarme corre outro risco.',
  pegadinha: 'A atenuação de catálogo raramente se reproduz no campo, e planejar por ela superestima a proteção.',
  refs: ['NR-7 — Anexo I', 'NR-6', 'NHO 01 — Fundacentro'] },

{ id: 'q-4.6-060', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o assédio moral no trabalho e suas repercussões em saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Caracteriza-se por condutas abusivas repetidas e prolongadas, e sua abordagem exige intervenção organizacional', ok: true,
      why: 'Correta. Repetição e prolongamento definem o fenômeno, e a resposta precisa alcançar a organização.' },
    { t: 'Caracteriza-se por conduta abusiva que degrada a dignidade, bastando um episódio isolado de conflito para configurá-lo.', ok: false,
      why: 'Errada. A repetição e o prolongamento no tempo são elementos característicos.' },
    { t: 'Caracteriza-se por condutas repetidas, entre as quais a exigência de metas e a cobrança de resultados por si mesmas.', ok: false,
      why: 'Errada. Cobrança dentro do poder diretivo não é assédio; caracteriza-o a conduta abusiva e humilhante.' },
    { t: 'Caracteriza-se por condutas abusivas repetidas, fenômeno interpessoal sem relação com a organização do trabalho.', ok: false,
      why: 'Errada. Estilos de gestão e pressão organizacional são fatores facilitadores reconhecidos.' },
    { t: 'Caracteriza-se por condutas abusivas repetidas, esgotando-se a abordagem no encaminhamento da vítima a tratamento.', ok: false,
      why: 'Errada. Sem intervenção no ambiente, o padrão persiste e atinge outras pessoas.' }
  ],
  comentario: 'Assédio moral: conduta abusiva repetida e prolongada, degradando dignidade e ambiente. Conflito isolado não é; cobrança legítima não é. E tratar só a vítima deixa o padrão intacto para o próximo.',
  pegadinha: 'Os dois extremos erram: chamar qualquer conflito de assédio e negar o fenômeno chamando tudo de cobrança normal.',
  refs: ['OIT — Convenção 190', 'Literatura sobre assédio moral no trabalho'] },

{ id: 'q-5.5-060', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a emissão de restrições e recomendações no atestado de saúde ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A restrição deve ser funcional, específica e verificável, porque a genérica é inaplicável e acaba virando exclusão', ok: true,
      why: 'Correta. Restrição vaga não orienta ninguém e vira motivo para não aproveitar o trabalhador.' },
    { t: 'A restrição deve ser específica e indicar o diagnóstico que a motivou, para justificar sua adoção perante a chefia.', ok: false,
      why: 'Errada. Diagnóstico permanece sob sigilo; comunica-se a limitação funcional.' },
    { t: 'A restrição deve ser redigida em termos genéricos, formulação que oferece proteção mais ampla ao trabalhador.', ok: false,
      why: 'Errada. Genéricas costumam inviabilizar a alocação e prejudicar quem se pretendia proteger.' },
    { t: 'A restrição deve ser funcional e específica, encerrando-se com sua emissão a atuação do serviço de saúde ocupacional.', ok: false,
      why: 'Errada. É preciso acompanhar a implementação e reavaliar periodicamente.' },
    { t: 'A restrição deve ser funcional e específica, preferindo-se a definitiva à temporária para evitar reavaliações sucessivas.', ok: false,
      why: 'Errada. A definitiva se reserva a situações consolidadas; adotá-la por conveniência fecha portas indevidamente.' }
  ],
  comentario: 'Restrição útil é funcional, específica, mensurável e temporária quando cabível — com acompanhamento e reavaliação. "Evitar esforços" não orienta ninguém e costuma virar demissão.',
  pegadinha: 'Restrição ampla parece proteger mais e na prática é o caminho mais curto para a exclusão do trabalhador.',
  refs: ['NR-7', 'Código de Ética Médica', 'CIF — OMS'] },

{ id: 'q-5.2-060', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a classificação de Schilling aplicada às doenças relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Distingue o trabalho como causa necessária, contributiva ou agravante, e as três configuram relação com o trabalho', ok: true,
      why: 'Correta. Varia o modo de participação, não a existência do vínculo.' },
    { t: 'Distingue três modos de participação, configurando doença relacionada ao trabalho apenas aquele em que ele é causa necessária.', ok: false,
      why: 'Errada. As três categorias configuram relação com o trabalho.' },
    { t: 'Distingue o trabalho como causa necessária, contributiva ou agravante, estabelecendo o grau de incapacidade resultante.', ok: false,
      why: 'Errada. Trata do modo de participação do trabalho na causa, não de incapacidade.' },
    { t: 'Distingue o trabalho como causa necessária ou contributiva, ficando fora dela as doenças comuns agravadas pelo trabalho.', ok: false,
      why: 'Errada. Constituem justamente uma das categorias da classificação.' },
    { t: 'Distingue o trabalho como causa necessária, contributiva ou agravante, substituindo a investigação individual de nexo.', ok: false,
      why: 'Errada. É referencial conceitual que organiza a análise, não a dispensa.' }
  ],
  comentario: 'Schilling: causa necessária, fator contributivo e agravante. Três modos de participação do trabalho, três relações com o trabalho — o que muda é o modo, não a existência do vínculo. Não mede incapacidade nem dispensa a análise do caso.',
  pegadinha: 'Reservar o reconhecimento à primeira categoria exclui a maior parte das doenças relacionadas ao trabalho.',
  refs: ['Schilling — classificação', 'Ministério da Saúde — doenças relacionadas ao trabalho'] },

{ id: 'q-5.6-060', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a readaptação funcional dentro da empresa após afastamento por doença relacionada ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Parte do confronto entre exigências das funções e limitações residuais, e não pode servir de rebaixamento velado.', ok: true,
      why: 'Correta. Readaptação punitiva é forma reconhecida de pressão para o desligamento.' },
    { t: 'Parte da identificação de função com menor exigência física, alocação que dispensa análise adicional das limitações.', ok: false,
      why: 'Errada. É preciso confrontar limitações específicas com exigências específicas da função.' },
    { t: 'Parte do confronto entre exigências e limitações, caracterizando insubordinação a recusa do trabalhador à função proposta.', ok: false,
      why: 'Errada. A recusa pode ser legítima se a função é incompatível ou constrangedora.' },
    { t: 'Parte do confronto entre exigências e limitações residuais, dispensando acompanhamento após a mudança de função.', ok: false,
      why: 'Errada. O acompanhamento verifica a adequação real e permite ajuste.' },
    { t: 'Parte do confronto entre exigências e limitações, implicando redução salarial correspondente à nova função ocupada.', ok: false,
      why: 'Errada. A alteração prejudicial ao trabalhador encontra limites na proteção contratual.' }
  ],
  comentario: 'Readaptar é casar limitação residual com exigência real da função de destino, e acompanhar. Função de menor exigência escolhida sem análise, ou usada para constranger, é o que a literatura descreve como readaptação punitiva.',
  pegadinha: 'Assumir que "função mais leve" resolve ignora limitações que não são de carga física.',
  refs: ['Lei nº 8.213/1991', 'CLT — alteração contratual', 'CIF — OMS'] },

{ id: 'q-4.7-060', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso de álcool e outras drogas entre trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'A abordagem é de saúde, com acolhimento e sigilo, e a testagem exige finalidade legítima e procedimento definido.', ok: true,
      why: 'Correta. É problema de saúde, com determinantes que incluem o próprio trabalho.' },
    { t: 'A abordagem é disciplinar, autorizando a constatação de uso a dispensa imediata por justa causa em qualquer situação.', ok: false,
      why: 'Errada. A dependência é condição de saúde e a resposta primeira é o encaminhamento a tratamento.' },
    { t: 'A abordagem é de saúde, com acolhimento e sigilo, podendo a testagem aleatória ser aplicada livremente em qualquer função.', ok: false,
      why: 'Errada. Exige finalidade legítima ligada à segurança, procedimento definido e limites de privacidade.' },
    { t: 'A abordagem é de saúde e individual, já que fatores organizacionais não guardam relação com o uso de substâncias.', ok: false,
      why: 'Errada. Turnos, sobrecarga, isolamento e disponibilidade no ambiente são fatores reconhecidos.' },
    { t: 'A abordagem é de saúde, podendo o resultado positivo ser comunicado à chefia com o detalhamento clínico do caso.', ok: false,
      why: 'Errada. O sigilo se aplica; comunica-se aptidão e restrição.' }
  ],
  comentario: 'Álcool e drogas no trabalho: abordagem de saúde, sigilo, tratamento, e olhar para os fatores organizacionais que contribuem. Testagem só com finalidade legítima de segurança e procedimento definido — nunca como via de punição sumária.',
  pegadinha: 'Tratar o achado como falta disciplinar converte um problema de saúde em desligamento e não resolve o risco.',
  refs: ['Código de Ética Médica', 'OIT — álcool e drogas no local de trabalho'] }

);
