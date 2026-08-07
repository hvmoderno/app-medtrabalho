/* Aprofundamento de alto rendimento: 5.4, 5.5, 2.6, 1.3 e 3.2.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 5.4 Perícia ============================== */
{ id: 'q-5.4-030', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante perícia administrativa, o periciando relata sintomas incapacitantes, mas o perito identifica achado grave e não diagnosticado, sem relação com o objeto da perícia, que exige investigação urgente. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'O perito deve orientar o periciando sobre o achado e a necessidade de procurar atendimento, registrando a orientação, pois o dever de cuidado não desaparece na atividade pericial, ainda que não haja vínculo terapêutico.', ok: true,
      why: 'Correta. A ausência de vínculo terapêutico não autoriza silenciar diante de achado grave; orientar e registrar é o que a ética exige.' },
    { t: 'Deve silenciar, pois o objeto da perícia é restrito e informar caracterizaria exercício de assistência.', ok: false,
      why: 'Errada. Informar e orientar não é assumir o tratamento; é dever ético elementar.' },
    { t: 'Deve iniciar o tratamento do achado no próprio ato pericial.', ok: false,
      why: 'Errada. Prescrever no ato pericial confunde os papéis; a conduta é orientar e encaminhar.' },
    { t: 'Deve comunicar o achado diretamente ao empregador do periciando.', ok: false,
      why: 'Errada. Violaria o sigilo e não tem qualquer justificativa no contexto.' },
    { t: 'Deve incluir o achado detalhado no laudo, ainda que estranho ao objeto e aos quesitos.', ok: false,
      why: 'Errada. O laudo se restringe ao necessário ao objeto; informação alheia ao objeto expõe o periciando sem finalidade.' }
  ],
  comentario: 'Perito não trata e não prescreve, mas também não se cala diante de achado grave: orienta o periciando, registra a orientação e mantém o laudo restrito ao objeto. Três limites que convivem.',
  pegadinha: 'Incluir o achado no laudo "por transparência" expõe dado clínico alheio ao objeto da perícia.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-031', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia judicial, o assistente técnico de uma das partes solicita ao perito acesso prévio ao laudo antes de sua entrega ao juízo, alegando que assim poderá "alinhar" as conclusões e evitar controvérsia. A conduta CORRETA é:',
  alts: [
    { t: 'Recusar, pois o laudo é entregue ao juízo e a manifestação do assistente técnico ocorre em momento próprio; alinhar conclusões previamente comprometeria a imparcialidade e a própria função do contraditório técnico.', ok: true,
      why: 'Correta. O contraditório técnico existe justamente para que a divergência apareça; suprimi-la por acordo prévio descaracteriza o processo.' },
    { t: 'Aceitar, pois a convergência entre perito e assistentes agiliza o processo.', ok: false,
      why: 'Errada. Agilidade obtida às custas da imparcialidade não é ganho processual legítimo.' },
    { t: 'Aceitar, desde que o mesmo acesso seja dado ao assistente da outra parte.', ok: false,
      why: 'Errada. O problema não é a desigualdade de acesso, e sim o alinhamento prévio de conclusões.' },
    { t: 'Aceitar apenas se o juízo autorizar expressamente.', ok: false,
      why: 'Errada. Autorização não transforma em adequado um procedimento que compromete a independência do trabalho pericial.' },
    { t: 'Recusar e, por isso, declarar-se impedido de continuar na perícia.', ok: false,
      why: 'Errada. Recusar um pedido inadequado não gera impedimento; o perito segue normalmente.' }
  ],
  comentario: 'Perito trabalha para o juízo e entrega ao juízo. O assistente técnico manifesta-se em momento próprio e a divergência é legítima e útil. Alinhamento prévio de conclusões descaracteriza os dois papéis.',
  pegadinha: 'A alternativa de "dar acesso a ambos" desloca a discussão para a isonomia e ignora o vício de fundo.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.4-032', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a perícia em ambiente de trabalho para caracterização de exposição, é CORRETO afirmar:',
  alts: [
    { t: 'A vistoria do local, quando possível, agrega elementos decisivos sobre a atividade real, e a impossibilidade de realizá-la — por encerramento da empresa ou mudança do processo — deve ser registrada e suprida por outras fontes, como documentos, testemunhos e literatura sobre a atividade.', ok: true,
      why: 'Correta. A vistoria é valiosa mas nem sempre possível; o laudo deve explicitar a limitação e demonstrar como a exposição foi reconstruída.' },
    { t: 'Sem vistoria do local atual não é possível concluir nada sobre exposição pretérita.', ok: false,
      why: 'Errada. Exposições antigas se reconstroem por documentação, descrição da atividade, similaridade de processos e literatura.' },
    { t: 'A vistoria do local atual reflete necessariamente as condições existentes à época da exposição.', ok: false,
      why: 'Errada. Processos e controles mudam; o perito deve considerar essa diferença explicitamente.' },
    { t: 'Documentos fornecidos pela empresa devem ser aceitos sem análise crítica, por serem técnicos.', ok: false,
      why: 'Errada. Laudos e documentos são fontes a serem avaliadas criticamente, inclusive quanto à data e à metodologia.' },
    { t: 'O relato do trabalhador sobre a atividade não tem valor probatório e deve ser desconsiderado.', ok: false,
      why: 'Errada. O relato de quem executava a atividade é fonte relevante sobre o trabalho real, a ser confrontada com as demais.' }
  ],
  comentario: 'Reconstruir exposição pretérita é rotina em perícia ocupacional. A vistoria atual ajuda mas não retrata o passado; documentos precisam de análise crítica; e o relato do trabalhador é fonte legítima sobre a atividade real.',
  pegadinha: 'Tratar a vistoria atual como retrato do passado é erro metodológico comum em doenças de latência longa.',
  refs: ['Penteado — Perícias em DORT', 'Resoluções do CFM sobre perícia médica'] },

/* ================= 5.5 Incapacidade e dano corporal =================== */
{ id: 'q-5.5-030', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 55 anos, com ensino fundamental incompleto, ex-ajudante de carga e descarga, apresenta sequela definitiva que o impede de realizar esforços físicos moderados a intensos. Sobre a avaliação da incapacidade, é CORRETO afirmar:',
  alts: [
    { t: 'A análise deve considerar, além da repercussão funcional, a idade, a escolaridade e a possibilidade concreta de reabilitação para outra atividade, elementos que podem aproximar o caso de incapacidade de maior abrangência ainda que haja capacidade residual teórica.', ok: true,
      why: 'Correta. Capacidade residual teórica sem possibilidade concreta de reinserção é insuficiente; idade, escolaridade e viabilidade de reabilitação integram o juízo.' },
    { t: 'A avaliação deve restringir-se à limitação física, sendo idade e escolaridade elementos alheios ao juízo médico.', ok: false,
      why: 'Errada. São elementos reconhecidamente considerados na avaliação da possibilidade de reinserção.' },
    { t: 'Havendo qualquer capacidade residual teórica, está afastada a incapacidade de maior abrangência.', ok: false,
      why: 'Errada. A capacidade precisa ser concretamente exercitável, não apenas teórica.' },
    { t: 'A idade avançada por si só caracteriza incapacidade omniprofissional.', ok: false,
      why: 'Errada. Idade é elemento do juízo, não critério autônomo de incapacidade.' },
    { t: 'A avaliação de reabilitação profissional é etapa dispensável quando há sequela definitiva.', ok: false,
      why: 'Errada. Sequela definitiva com capacidade residual é justamente a hipótese de reabilitação.' }
  ],
  comentario: 'Incapacidade não é só medida de função: é juízo sobre reinserção concreta. Idade, escolaridade, histórico laboral e viabilidade de reabilitação entram na conta — e "capacidade residual teórica" não basta.',
  pegadinha: 'Reduzir a avaliação à limitação física ignora a metade do juízo que a prática pericial exige.',
  refs: ['Lei nº 8.213/1991', 'Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-031', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a consolidação das lesões na avaliação do dano corporal, é CORRETO afirmar:',
  alts: [
    { t: 'A consolidação corresponde ao momento em que as lesões atingem estabilidade e não se espera melhora significativa com o tratamento disponível; antes dela a incapacidade é temporária, e é a partir dela que se avalia a sequela definitiva.', ok: true,
      why: 'Correta. Consolidação é o marco que separa incapacidade temporária de avaliação de sequela permanente.' },
    { t: 'A consolidação ocorre automaticamente após determinado número de meses de afastamento.', ok: false,
      why: 'Errada. Não é marco temporal fixo: depende da evolução clínica e das opções terapêuticas.' },
    { t: 'Antes da consolidação já é possível quantificar definitivamente o dano corporal.', ok: false,
      why: 'Errada. Quantificar antes da estabilização produz avaliação prematura e frequentemente injusta.' },
    { t: 'A consolidação equivale à cura da lesão.', ok: false,
      why: 'Errada. Consolidar é estabilizar, com ou sem sequela; não é sinônimo de cura.' },
    { t: 'Uma vez consolidada, a lesão não admite qualquer reavaliação futura.', ok: false,
      why: 'Errada. Agravamentos e novas opções terapêuticas podem justificar reavaliação.' }
  ],
  comentario: 'Consolidação = estabilização, não cura. Antes dela: incapacidade temporária. Depois: avalia-se sequela e dano definitivo. E ela não tem prazo fixo — é juízo clínico sobre a evolução.',
  pegadinha: 'Fixar a consolidação em um número de meses é atalho administrativo sem base clínica.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

{ id: 'q-5.5-032', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre incapacidade e deficiência, é CORRETO afirmar:',
  alts: [
    { t: 'Deficiência é impedimento de longo prazo que, em interação com barreiras, pode obstruir a participação plena, enquanto incapacidade laborativa é a impossibilidade de exercer atividade — a maioria das pessoas com deficiência é plenamente capaz para o trabalho.', ok: true,
      why: 'Correta. São conceitos distintos, com avaliações e finalidades próprias, e confundi-los é a base de práticas discriminatórias.' },
    { t: 'Deficiência e incapacidade laborativa são sinônimos.', ok: false,
      why: 'Errada. São conceitos distintos com consequências jurídicas próprias.' },
    { t: 'Toda pessoa com deficiência tem alguma incapacidade laborativa a ser reconhecida.', ok: false,
      why: 'Errada. A maioria é plenamente capaz, sobretudo com adaptação razoável.' },
    { t: 'O reconhecimento de deficiência gera automaticamente direito a benefício por incapacidade.', ok: false,
      why: 'Errada. São avaliações e requisitos distintos.' },
    { t: 'A avaliação da deficiência considera apenas o dado anatômico ou funcional.', ok: false,
      why: 'Errada. O modelo vigente é biopsicossocial, incluindo as barreiras do ambiente.' }
  ],
  comentario: 'Deficiência: impedimento de longo prazo + barreiras = restrição de participação. Incapacidade laborativa: impossibilidade de exercer atividade. Uma não implica a outra, e é essa confusão que sustenta a discriminação na admissão.',
  pegadinha: 'Equiparar deficiência a incapacidade atravessa os temas 5.5 e 6.2 e é dos erros mais cobrados.',
  refs: ['Lei nº 13.146/2015', 'CIF — Classificação Internacional de Funcionalidade'] },

/* ================ 2.6 Limites de exposição ocupacional ================= */
{ id: 'q-2.6-030', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um trabalhador está exposto simultaneamente a três solventes que atuam sobre o mesmo órgão-alvo, cada um deles em concentração inferior ao respectivo limite. Sobre a avaliação, é CORRETO afirmar:',
  alts: [
    { t: 'Quando os agentes têm efeitos aditivos sobre o mesmo órgão-alvo, a avaliação deve considerar o efeito combinado, e não cada agente isoladamente — a soma das frações pode indicar exposição inaceitável ainda que nenhum agente ultrapasse seu limite individual.', ok: true,
      why: 'Correta. Avaliar agente por agente em mistura com efeito aditivo subestima sistematicamente o risco.' },
    { t: 'Estando cada agente abaixo do seu limite, a exposição está necessariamente controlada.', ok: false,
      why: 'Errada. É exatamente a conclusão que a regra de efeito combinado existe para evitar.' },
    { t: 'A avaliação de misturas exige sempre considerar efeito potencializador, nunca aditivo.', ok: false,
      why: 'Errada. O tratamento depende do comportamento toxicológico: pode ser independente, aditivo ou potencializador.' },
    { t: 'A regra do efeito combinado se aplica apenas quando os agentes pertencem à mesma família química.', ok: false,
      why: 'Errada. O critério é o órgão-alvo e o mecanismo de ação, não a família química.' },
    { t: 'Para misturas, basta avaliar o agente de maior toxicidade e desprezar os demais.', ok: false,
      why: 'Errada. Desprezar os demais anula justamente a razão de avaliar a mistura.' }
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
    { t: 'Deslocar o ponto de corte para aumentar a sensibilidade reduz a especificidade e amplia os falsos-positivos, sendo a escolha orientada pelas consequências de cada tipo de erro — perder um caso grave ou submeter saudáveis a investigação desnecessária.', ok: true,
      why: 'Correta. É sempre troca, e o critério de decisão é a gravidade relativa dos dois erros no contexto concreto.' },
    { t: 'É possível ajustar o ponto de corte para aumentar simultaneamente sensibilidade e especificidade.', ok: false,
      why: 'Errada. Para um mesmo teste, o deslocamento do corte troca uma pela outra.' },
    { t: 'A escolha do ponto de corte não afeta os valores preditivos.', ok: false,
      why: 'Errada. Alterar sensibilidade e especificidade altera os valores preditivos naquela população.' },
    { t: 'Em triagem ocupacional deve-se sempre priorizar a especificidade máxima.', ok: false,
      why: 'Errada. A prioridade depende do agravo: em doença grave com tratamento eficaz, privilegia-se não perder casos.' },
    { t: 'A razão de verossimilhança varia com a prevalência da doença na população examinada.', ok: false,
      why: 'Errada. A razão de verossimilhança é propriedade do teste e não depende da prevalência.' }
  ],
  comentario: 'Ponto de corte é decisão de valores, não só técnica: define quantos falsos-positivos e falsos-negativos você aceita. E o que muda com a prevalência são os valores preditivos, nunca sensibilidade, especificidade ou razão de verossimilhança.',
  pegadinha: 'A ideia de melhorar as duas propriedades ao mesmo tempo só é possível trocando de teste, não de ponto de corte.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Ferreira Junior — Rastreamento de doenças'] },

/* ============================ 3.2 Ergonomia =========================== */
{ id: 'q-3.2-030', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa implanta teletrabalho permanente para parte do quadro administrativo. Sobre as obrigações e cuidados ergonômicos, é CORRETO afirmar:',
  alts: [
    { t: 'As obrigações de saúde e segurança permanecem, cabendo à empresa orientar sobre a adequação do posto, avaliar os riscos da atividade — inclusive ergonômicos e psicossociais — e considerar o isolamento, a indefinição de jornada e a sobreposição entre vida pessoal e trabalho como fatores de risco.', ok: true,
      why: 'Correta. Mudar o local não extingue as obrigações; e o teletrabalho acrescenta riscos próprios de organização do trabalho e de saúde mental.' },
    { t: 'No teletrabalho as obrigações de saúde e segurança deixam de existir, por ser domicílio do trabalhador.', ok: false,
      why: 'Errada. O local muda, as obrigações permanecem, com formas próprias de cumprimento.' },
    { t: 'A avaliação ergonômica é dispensável, pois o trabalhador organiza livremente seu posto.', ok: false,
      why: 'Errada. A liberdade de organizar não substitui orientação técnica nem fornecimento de condições adequadas.' },
    { t: 'Riscos psicossociais não se aplicam ao teletrabalho, por não haver convívio com chefia e colegas.', ok: false,
      why: 'Errada, e inverte: isolamento, indefinição de jornada e monitoramento remoto são riscos psicossociais próprios da modalidade.' },
    { t: 'Acidentes ocorridos durante o teletrabalho nunca podem ser caracterizados como acidente do trabalho.', ok: false,
      why: 'Errada. Ocorrendo no exercício do trabalho, a caracterização é possível.' }
  ],
  comentario: 'Teletrabalho não é isenção: as obrigações seguem, com orientação sobre o posto e avaliação de riscos. E ele traz riscos próprios — isolamento, jornada sem fronteira, monitoramento remoto — que são psicossociais e precisam entrar no inventário.',
  pegadinha: 'Supor que a ausência de convívio elimina risco psicossocial ignora o isolamento como fator de risco.',
  refs: ['NR-17', 'NR-1', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-3.2-031', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre pausas no trabalho repetitivo, é CORRETO afirmar:',
  alts: [
    { t: 'Pausas curtas e frequentes tendem a ser mais eficazes na recuperação do que poucas pausas longas, e devem ser previstas na organização do trabalho, não dependendo da iniciativa individual do trabalhador em desacelerar.', ok: true,
      why: 'Correta. A recuperação depende da distribuição das pausas ao longo do ciclo, e pausas que dependem de o trabalhador "achar um tempo" não existem na prática.' },
    { t: 'Poucas pausas longas são sempre preferíveis a pausas curtas e frequentes.', ok: false,
      why: 'Errada. Em trabalho repetitivo, a distribuição frequente favorece a recuperação tecidual.' },
    { t: 'A pausa para refeição já cumpre integralmente a função de recuperação no trabalho repetitivo.', ok: false,
      why: 'Errada. O intervalo de refeição não substitui as pausas de recuperação ao longo do ciclo de trabalho.' },
    { t: 'A eficácia da pausa independe de o trabalhador poder efetivamente utilizá-la.', ok: false,
      why: 'Errada. Pausa prevista mas inviabilizada por meta ou ritmo não produz recuperação.' },
    { t: 'Pausas são medida de conforto, sem repercussão sobre o risco de adoecimento.', ok: false,
      why: 'Errada. Tempo de recuperação é um dos quatro fatores do risco biomecânico.' }
  ],
  comentario: 'Tempo de recuperação é fator de risco, não conforto. Pausas curtas e frequentes, previstas na organização e efetivamente utilizáveis — pausa que a meta impede de usar não existe.',
  pegadinha: 'Contar o intervalo de refeição como pausa de recuperação é o artifício mais comum para dizer que há pausas.',
  refs: ['NR-17', 'Couto — Ergonomia'] }

);
