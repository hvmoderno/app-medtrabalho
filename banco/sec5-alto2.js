/* Aprofundamento de alto rendimento: 5.4, 5.5, 2.6, 1.3 e 3.2.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 5.4 Perícia ============================== */
{ id: 'q-5.4-030', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante perícia administrativa, o periciando relata sintomas incapacitantes, mas o perito identifica achado grave e não diagnosticado, sem relação com o objeto da perícia, que exige investigação urgente. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Orientar o periciando sobre o achado e a necessidade de atendimento, registrando a orientação.', ok: true,
      why: 'Correta. O dever de cuidado não desaparece na perícia, mesmo sem vínculo terapêutico.' },
    { t: 'Silenciar, pois o objeto da perícia é restrito e informar caracterizaria exercício de assistência.', ok: false,
      why: 'Errada. Informar o achado não configura assistência e integra o dever de cuidado.' },
    { t: 'Orientar sobre o achado e iniciar o tratamento da condição no próprio ato pericial realizado.', ok: false,
      why: 'Errada. Tratar no ato pericial confunde as funções de perito e assistente.' },
    { t: 'Orientar sobre o achado e comunicá-lo diretamente ao empregador do periciando avaliado.', ok: false,
      why: 'Errada. É informação de saúde protegida por sigilo.' },
    { t: 'Orientar o periciando e incluir o achado detalhado no laudo, ainda que estranho aos quesitos.', ok: false,
      why: 'Errada. O laudo se restringe ao objeto e aos quesitos formulados.' }
  ],
  comentario: 'Perito não trata e não prescreve, mas também não se cala diante de achado grave: orienta o periciando, registra a orientação e mantém o laudo restrito ao objeto. Três limites que convivem.',
  pegadinha: 'Incluir o achado no laudo "por transparência" expõe dado clínico alheio ao objeto da perícia.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-031', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia judicial, o assistente técnico de uma das partes solicita ao perito acesso prévio ao laudo antes de sua entrega ao juízo, alegando que assim poderá "alinhar" as conclusões e evitar controvérsia. A conduta CORRETA é:',
  alts: [
    { t: 'Recusar: o laudo vai ao juízo e o assistente se manifesta em momento próprio.', ok: true,
      why: 'Correta. Alinhar conclusões previamente comprometeria a imparcialidade e o contraditório.' },
    { t: 'Aceitar, pois a convergência prévia entre perito e assistentes agiliza a tramitação do processo.', ok: false,
      why: 'Errada. Compromete a imparcialidade e esvazia o contraditório técnico.' },
    { t: 'Aceitar, desde que o mesmo acesso prévio seja oferecido ao assistente técnico da outra parte.', ok: false,
      why: 'Errada. A paridade não corrige o vício: o laudo se entrega ao juízo.' },
    { t: 'Aceitar apenas se o juízo autorizar expressamente essa comunicação prévia entre os profissionais.', ok: false,
      why: 'Errada. A manifestação do assistente tem momento processual próprio.' },
    { t: 'Recusar a antecipação e, por esse motivo, declarar-se impedido de continuar atuando na perícia.', ok: false,
      why: 'Errada. O pedido recusado não gera impedimento do perito.' }
  ],
  comentario: 'Perito trabalha para o juízo e entrega ao juízo. O assistente técnico manifesta-se em momento próprio e a divergência é legítima e útil. Alinhamento prévio de conclusões descaracteriza os dois papéis.',
  pegadinha: 'A alternativa de "dar acesso a ambos" desloca a discussão para a isonomia e ignora o vício de fundo.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-032', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a perícia em ambiente de trabalho para caracterização de exposição, é CORRETO afirmar:',
  alts: [
    { t: 'A vistoria agrega elementos decisivos, e sua impossibilidade deve ser registrada e suprida.', ok: true,
      why: 'Correta. Documentos, testemunhos e literatura suprem quando o local mudou ou não existe.' },
    { t: 'A vistoria é essencial, e sem o exame do local atual nada se conclui sobre exposição pretérita.', ok: false,
      why: 'Errada. Outras fontes permitem reconstituir as condições da época.' },
    { t: 'A vistoria agrega elementos, refletindo o local atual as condições existentes à época da exposição.', ok: false,
      why: 'Errada. Processos e instalações mudam, frequentemente após o início do litígio.' },
    { t: 'A vistoria agrega elementos, devendo os documentos da empresa ser aceitos por serem técnicos.', ok: false,
      why: 'Errada. Documento técnico também se analisa criticamente.' },
    { t: 'A vistoria agrega elementos, sem valor probatório o relato do trabalhador sobre a atividade.', ok: false,
      why: 'Errada. É frequentemente a única fonte sobre condições de décadas atrás.' }
  ],
  comentario: 'Reconstruir exposição pretérita é rotina em perícia ocupacional. A vistoria atual ajuda mas não retrata o passado; documentos precisam de análise crítica; e o relato do trabalhador é fonte legítima sobre a atividade real.',
  pegadinha: 'Tratar a vistoria atual como retrato do passado é erro metodológico comum em doenças de latência longa.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

/* ================= 5.5 Incapacidade e dano corporal =================== */
{ id: 'q-5.5-030', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 55 anos, com ensino fundamental incompleto, ex-ajudante de carga e descarga, apresenta sequela definitiva que o impede de realizar esforços físicos moderados a intensos. Sobre a avaliação da incapacidade, é CORRETO afirmar:',
  alts: [
    { t: 'Considera, além da repercussão funcional, idade, escolaridade e possibilidade real de reabilitação.', ok: true,
      why: 'Correta. Podem aproximar o caso de incapacidade ampla mesmo com capacidade residual teórica.' },
    { t: 'Restringe-se à limitação física apurada, sendo idade e escolaridade alheias ao juízo médico.', ok: false,
      why: 'Errada. Compõem a viabilidade concreta da reabilitação.' },
    { t: 'Considera a repercussão funcional, afastando qualquer capacidade residual teórica a incapacidade ampla.', ok: false,
      why: 'Errada. Capacidade residual teórica sem reabilitação viável não recoloca ninguém.' },
    { t: 'Considera vários fatores, caracterizando a idade avançada por si só incapacidade omniprofissional.', ok: false,
      why: 'Errada. É fator a considerar, não critério isolado.' },
    { t: 'Considera a repercussão funcional, sendo dispensável a avaliação de reabilitação com sequela definitiva.', ok: false,
      why: 'Errada. É justamente aí que a análise de reabilitação se torna decisiva.' }
  ],
  comentario: 'Incapacidade não é só medida de função: é juízo sobre reinserção concreta. Idade, escolaridade, histórico laboral e viabilidade de reabilitação entram na conta — e "capacidade residual teórica" não basta.',
  pegadinha: 'Reduzir a avaliação à limitação física ignora a metade do juízo que a prática pericial exige.',
  refs: ['Lei nº 8.213/1991', 'Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-031', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a consolidação das lesões na avaliação do dano corporal, é CORRETO afirmar:',
  alts: [
    { t: 'É o momento em que as lesões estabilizam e não se espera melhora com o tratamento disponível.', ok: true,
      why: 'Correta. Antes dela a incapacidade é temporária; a partir dela avalia-se a sequela definitiva.' },
    { t: 'É o momento que se alcança automaticamente após determinado número de meses de afastamento.', ok: false,
      why: 'Errada. Depende da evolução clínica, não do prazo decorrido.' },
    { t: 'É o momento de estabilização, sendo possível quantificar o dano definitivo já antes de alcançá-lo.', ok: false,
      why: 'Errada. A quantificação definitiva pressupõe a consolidação.' },
    { t: 'É o momento de estabilização das lesões, o que equivale à cura completa do quadro apresentado.', ok: false,
      why: 'Errada. Pode haver consolidação com sequela permanente.' },
    { t: 'É o momento de estabilização, após o qual a lesão não admite qualquer reavaliação futura.', ok: false,
      why: 'Errada. Agravamento posterior justifica nova avaliação.' }
  ],
  comentario: 'Consolidação = estabilização, não cura. Antes dela: incapacidade temporária. Depois: avalia-se sequela e dano definitivo. E ela não tem prazo fixo — é juízo clínico sobre a evolução.',
  pegadinha: 'Fixar a consolidação em um número de meses é atalho administrativo sem base clínica.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-032', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre incapacidade e deficiência, é CORRETO afirmar:',
  alts: [
    { t: 'Deficiência é impedimento que, com barreiras, obstrui participação; incapacidade é não poder exercer.', ok: true,
      why: 'Correta. A maioria das pessoas com deficiência é plenamente capaz para o trabalho.' },
    { t: 'Deficiência e incapacidade laborativa são termos sinônimos, aplicados em contextos legais distintos.', ok: false,
      why: 'Errada. São conceitos com objetos e finalidades diferentes.' },
    { t: 'Deficiência é impedimento de longo prazo, e toda pessoa com deficiência tem alguma incapacidade.', ok: false,
      why: 'Errada. A maioria é plenamente capaz para o trabalho.' },
    { t: 'Deficiência é impedimento, gerando seu reconhecimento direito automático a benefício por incapacidade.', ok: false,
      why: 'Errada. São enquadramentos distintos, com requisitos próprios.' },
    { t: 'Deficiência é impedimento, avaliado apenas pelo dado anatômico ou funcional apresentado.', ok: false,
      why: 'Errada. A avaliação é biopsicossocial e inclui as barreiras do ambiente.' }
  ],
  comentario: 'Deficiência: impedimento de longo prazo + barreiras = restrição de participação. Incapacidade laborativa: impossibilidade de exercer atividade. Uma não implica a outra, e é essa confusão que sustenta a discriminação na admissão.',
  pegadinha: 'Equiparar deficiência a incapacidade atravessa os temas 5.5 e 6.2 e é dos erros mais cobrados.',
  refs: ['Lei nº 13.146/2015', 'CIF — Classificação Internacional de Funcionalidade'] },

/* ================ 2.6 Limites de exposição ocupacional ================= */
{ id: 'q-2.6-030', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador está exposto simultaneamente a três solventes que atuam sobre o mesmo órgão-alvo, cada um deles em concentração inferior ao respectivo limite. Sobre a avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'Havendo efeito aditivo sobre o mesmo órgão-alvo, avalia-se o efeito combinado, não cada agente.', ok: true,
      why: 'Correta. A soma das frações pode ser inaceitável sem nenhum agente exceder seu limite.' },
    { t: 'Estando cada agente abaixo do seu limite individual, a exposição da mistura está controlada.', ok: false,
      why: 'Errada. Efeitos aditivos sobre o mesmo alvo somam-se e podem ultrapassar o aceitável.' },
    { t: 'Avalia-se o efeito combinado, considerando sempre potencialização, e nunca simples efeito aditivo.', ok: false,
      why: 'Errada. O modelo usual é o aditivo; a potencialização é situação específica.' },
    { t: 'Avalia-se o efeito combinado apenas quando os agentes pertencem à mesma família química.', ok: false,
      why: 'Errada. O critério é o órgão-alvo comum, não a família química.' },
    { t: 'Avalia-se o efeito combinado, bastando considerar o agente de maior toxicidade da mistura.', ok: false,
      why: 'Errada. Desprezar os demais subestima a exposição combinada.' }
  ],
  comentario: 'Exposição a múltiplos agentes com mesmo órgão-alvo e efeito aditivo exige somar as frações do limite. Cada um "dentro do limite" não significa conjunto seguro — e é um dos pontos em que laudos costumam errar.',
  pegadinha: 'A conclusão de que "todos abaixo do limite = controlado" é o desfecho mais comum de laudos de mistura.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.6-031', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os indicadores biológicos de exposição e seus valores de referência, é CORRETO afirmar:',
  alts: [
    { t: 'Representam a concentração esperada do indicador em trabalhadores expostos ao valor-limite ambiental correspondente, servindo para verificar a absorção real — e não constituem fronteira entre saúde e doença.', ok: true,
      why: 'Correta. São valores de referência para exposição, e não limiares clínicos; ultrapassá-los indica absorção excessiva, não diagnóstico.' },
    { t: 'Correspondem ao nível a partir do qual há doença estabelecida.', ok: false,
      why: 'Errada. Não são limiares diagnósticos; indicam exposição.' },
    { t: 'Substituem integralmente a avaliação ambiental da exposição.', ok: false,
      why: 'Errada. Ambiental e biológico se complementam: um caracteriza o ambiente, o outro a absorção individual.' },
    { t: 'São aplicáveis independentemente do momento da coleta.', ok: false,
      why: 'Errada. O momento de coleta é definido pela cinética do agente e é determinante do resultado.' },
    { t: 'Valores abaixo da referência garantem ausência de risco individual.', ok: false,
      why: 'Errada. Suscetibilidades individuais e exposições combinadas podem gerar efeito mesmo abaixo da referência.' }
  ],
  comentario: 'Indicador biológico mede EXPOSIÇÃO, não doença. Complementa a avaliação ambiental — não a substitui. E o momento da coleta, definido pela cinética, decide a validade do resultado.',
  pegadinha: 'Ler o valor de referência como limiar de doença transforma um dado de exposição em diagnóstico.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

/* =============== 1.3 Epidemiologia clínica e bioestatística ============ */
{ id: 'q-1.3-030', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo de caso-controle avaliou a associação entre exposição a um solvente e uma neoplasia rara, encontrando razão de chances de 3,2 (intervalo de confiança de 95%: 1,4 a 7,3). Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'O resultado é estatisticamente significativo ao nível adotado e, tratando-se de doença rara, a razão de chances aproxima razoavelmente o risco relativo — mas o desenho é vulnerável a viés de memória na aferição da exposição.', ok: true,
      why: 'Correta. Intervalo que não cruza a unidade indica significância; em doença rara a razão de chances aproxima o risco relativo; e caso-controle é classicamente vulnerável a viés de memória.' },
    { t: 'A razão de chances equivale ao risco relativo em qualquer situação.', ok: false,
      why: 'Errada. A aproximação vale quando a doença é rara; em doença frequente a razão de chances superestima o risco relativo.' },
    { t: 'O desenho de caso-controle permite calcular a incidência da doença nos expostos.', ok: false,
      why: 'Errada. Caso-controle não mede incidência, pois parte da doença e seleciona controles.' },
    { t: 'O intervalo de confiança apresentado indica ausência de significância estatística.', ok: false,
      why: 'Errada. O intervalo não inclui a unidade, portanto há significância ao nível adotado.' },
    { t: 'Caso-controle é o desenho de escolha para estimar prevalência.', ok: false,
      why: 'Errada. Prevalência se estima em estudo transversal.' }
  ],
  comentario: 'Caso-controle: eficiente para doença rara, calcula razão de chances, não mede incidência, e sofre com viés de memória e de seleção de controles. A aproximação com o risco relativo depende da raridade da doença.',
  pegadinha: 'Generalizar a equivalência entre razão de chances e risco relativo para qualquer prevalência é erro frequente.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Hulley — Delineando a pesquisa clínica'] },

{ id: 'q-1.3-031', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um serviço de saúde ocupacional pretende adotar um teste de triagem e discute o ponto de corte. Sobre as consequências dessa escolha, é CORRETO afirmar:',
  alts: [
    { t: 'Aumentar a sensibilidade reduz a especificidade e amplia os falsos-positivos do teste.', ok: true,
      why: 'Correta. A escolha se orienta pelas consequências de cada tipo de erro.' },
    { t: 'É possível ajustar o ponto de corte para aumentar simultaneamente sensibilidade e especificidade.', ok: false,
      why: 'Errada. O ganho em uma implica perda na outra.' },
    { t: 'Aumentar a sensibilidade reduz a especificidade, sem que o corte afete os valores preditivos.', ok: false,
      why: 'Errada. Os valores preditivos mudam com o corte e com a prevalência.' },
    { t: 'Aumentar a sensibilidade reduz a especificidade, devendo a triagem priorizar a especificidade máxima.', ok: false,
      why: 'Errada. Em triagem, costuma-se privilegiar sensibilidade, conforme a consequência.' },
    { t: 'Aumentar a sensibilidade reduz a especificidade, variando a razão de verossimilhança com a prevalência.', ok: false,
      why: 'Errada. A razão de verossimilhança não depende da prevalência.' }
  ],
  comentario: 'Ponto de corte é decisão de valores, não só técnica: define quantos falsos-positivos e falsos-negativos você aceita. E o que muda com a prevalência são os valores preditivos, nunca sensibilidade, especificidade ou razão de verossimilhança.',
  pegadinha: 'A ideia de melhorar as duas propriedades ao mesmo tempo só é possível trocando de teste, não de ponto de corte.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Ferreira Junior — Rastreamento de doenças'] },

/* ============================ 3.2 Ergonomia =========================== */
{ id: 'q-3.2-030', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa implanta teletrabalho permanente para parte do quadro administrativo. Sobre as obrigações e cuidados ergonômicos, é CORRETO afirmar:',
  alts: [
    { t: 'As obrigações permanecem: orientar sobre o posto e avaliar riscos, inclusive psicossociais.', ok: true,
      why: 'Correta. Isolamento, jornada indefinida e sobreposição com a vida pessoal são fatores de risco.' },
    { t: 'As obrigações deixam de existir por ser o domicílio do trabalhador o local onde o trabalho ocorre.', ok: false,
      why: 'Errada. As obrigações de saúde e segurança permanecem.' },
    { t: 'As obrigações permanecem, sendo dispensável a avaliação ergonômica, pois ele organiza o posto.', ok: false,
      why: 'Errada. A orientação e a avaliação do posto continuam devidas.' },
    { t: 'As obrigações permanecem, não se aplicando riscos psicossociais por não haver convívio presencial.', ok: false,
      why: 'Errada. Isolamento e conexão prolongada são riscos psicossociais próprios.' },
    { t: 'As obrigações permanecem, não podendo acidentes no teletrabalho ser caracterizados como do trabalho.', ok: false,
      why: 'Errada. Podem ser, quando decorrentes da atividade laboral.' }
  ],
  comentario: 'Teletrabalho não é isenção: as obrigações seguem, com orientação sobre o posto e avaliação de riscos. E ele traz riscos próprios — isolamento, jornada sem fronteira, monitoramento remoto — que são psicossociais e precisam entrar no inventário.',
  pegadinha: 'Supor que a ausência de convívio elimina risco psicossocial ignora o isolamento como fator de risco.',
  refs: ['NR-17', 'NR-1', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-3.2-031', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre pausas no trabalho repetitivo, é CORRETO afirmar:',
  alts: [
    { t: 'Pausas curtas e frequentes recuperam melhor, e devem ser previstas na organização do trabalho.', ok: true,
      why: 'Correta. Não podem depender da iniciativa individual de desacelerar.' },
    { t: 'Poucas pausas longas são sempre preferíveis a pausas curtas e frequentes ao longo da jornada.', ok: false,
      why: 'Errada. Pausas curtas e frequentes recuperam melhor no trabalho repetitivo.' },
    { t: 'Pausas são necessárias, cumprindo a de refeição integralmente a função de recuperação.', ok: false,
      why: 'Errada. Não substitui as pausas de recuperação ao longo do turno.' },
    { t: 'Pausas curtas e frequentes recuperam melhor, independendo a eficácia de poder usá-las de fato.', ok: false,
      why: 'Errada. Pausa prevista mas inviável na prática não produz recuperação.' },
    { t: 'Pausas curtas e frequentes recuperam melhor, sendo medida de conforto, sem efeito no adoecimento.', ok: false,
      why: 'Errada. Compõem o controle do risco no trabalho repetitivo.' }
  ],
  comentario: 'Tempo de recuperação é fator de risco, não conforto. Pausas curtas e frequentes, previstas na organização e efetivamente utilizáveis — pausa que a meta impede de usar não existe.',
  pegadinha: 'Contar o intervalo de refeição como pausa de recuperação é o artifício mais comum para dizer que há pausas.',
  refs: ['NR-17', 'Couto — Ergonomia'] }

);
