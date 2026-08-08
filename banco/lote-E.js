/* Lote E — 2.1, 2.5, 2.7, 2.8, 3.1. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.1-039', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma fundição instala sistema de ventilação local exaustora em um posto de trabalho. Seis meses depois, os trabalhadores relatam que o sistema "não puxa como antes". Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'Sistemas de ventilação perdem eficiência com o tempo por obstrução de dutos, desgaste de correias e saturação de filtros, o que exige rotina de manutenção e verificação periódica de desempenho — controle implantado não é sinônimo de controle eficaz.', ok: true,
      why: 'Correta. A medida de engenharia precisa de manutenção e verificação; sem elas, o controle existe no papel e não no ar.' },
    { t: 'Uma vez dimensionado corretamente, o sistema mantém o desempenho indefinidamente.', ok: false,
      why: 'Errada. Desempenho decai com uso, sujeira e desgaste de componentes.' },
    { t: 'A percepção dos trabalhadores é subjetiva e não deve orientar a verificação.', ok: false,
      why: 'Errada. Quem opera o posto percebe a queda antes de qualquer medição de rotina; é insumo valioso.' },
    { t: 'A verificação de desempenho só é necessária quando houver caso de doença ocupacional.', ok: false,
      why: 'Errada. Esperar o adoecimento para verificar o controle inverte a lógica preventiva.' },
    { t: 'A ventilação local exaustora é medida de proteção individual.', ok: false,
      why: 'Errada. É medida de proteção coletiva, atuando próximo à fonte de geração.' }
  ],
  comentario: 'Ventilação local exaustora capta o contaminante na fonte, antes que ele atinja a zona respiratória — mas só enquanto funciona. Manutenção e verificação periódica de desempenho são parte da medida, não acessório.',
  pegadinha: 'Descartar a percepção do trabalhador elimina o primeiro sinal de falha do sistema.',
  refs: ['NR-9', 'Higiene ocupacional — antecipação, reconhecimento, avaliação e controle'] },

{ id: 'q-2.1-040', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as etapas da higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A antecipação atua antes da existência do risco, na concepção de projetos e processos, sendo a etapa de maior potencial preventivo e a mais barata — enquanto o reconhecimento, a avaliação e o controle lidam com riscos já instalados.', ok: true,
      why: 'Correta. Intervir no projeto evita a exposição em vez de controlá-la, e o custo de mudar no papel é incomparavelmente menor.' },
    { t: 'A antecipação e o reconhecimento são etapas equivalentes.', ok: false,
      why: 'Errada. Antecipar é agir antes de o risco existir; reconhecer é identificar o que já existe.' },
    { t: 'A avaliação quantitativa é obrigatória em todas as situações antes de qualquer controle.', ok: false,
      why: 'Errada. Riscos evidentes admitem controle imediato sem esperar quantificação.' },
    { t: 'O controle é sempre a última etapa, aplicada apenas após avaliação completa.', ok: false,
      why: 'Errada. Diante de risco evidente, o controle não aguarda a conclusão da avaliação.' },
    { t: 'A antecipação é atribuição exclusiva do engenheiro de segurança, sem participação do médico.', ok: false,
      why: 'Errada. O médico contribui com o conhecimento sobre efeitos à saúde na concepção de processos.' }
  ],
  comentario: 'Antecipação → reconhecimento → avaliação → controle. A primeira é a mais poderosa e a menos usada: mudar o projeto antes de existir a exposição. Depois disso, tudo é remediação.',
  pegadinha: 'Exigir quantificação antes de qualquer controle atrasa medidas óbvias e é usado para postergar investimento.',
  refs: ['Higiene ocupacional — ABHO', 'NR-9'] },

{ id: 'q-2.5-040', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a periodicidade da reavaliação das exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A reavaliação decorre de periodicidade definida e também de eventos — mudança de processo, de produto, de layout, de organização do trabalho, ocorrência de doença ocupacional ou identificação de falha no controle —, sendo o evento gatilho mais importante que o calendário.', ok: true,
      why: 'Correta. Esperar o calendário depois de mudar o processo mantém a avaliação descrevendo algo que não existe mais.' },
    { t: 'A reavaliação segue exclusivamente a periodicidade anual, independentemente de mudanças.', ok: false,
      why: 'Errada. Mudanças relevantes disparam reavaliação imediata.' },
    { t: 'Mudança de layout não justifica reavaliação, por não alterar os agentes presentes.', ok: false,
      why: 'Errada. Layout altera dispersão, distância da fonte e tempo de exposição.' },
    { t: 'A ocorrência de doença ocupacional não exige revisão da avaliação de exposição.', ok: false,
      why: 'Errada. É um dos gatilhos mais importantes: indica que o controle falhou.' },
    { t: 'A reavaliação é dispensável quando os resultados anteriores estavam abaixo do limite.', ok: false,
      why: 'Errada. Resultado anterior favorável não garante a manutenção das condições.' }
  ],
  comentario: 'Calendário é o piso; evento é o gatilho real. Mudou processo, produto, layout ou organização do trabalho — reavalie. Apareceu doença ocupacional — reavalie, porque o controle falhou.',
  pegadinha: 'Amarrar a reavaliação exclusivamente ao calendário deixa a empresa com laudo que descreve um processo que já não existe.',
  refs: ['NR-9', 'NR-1', 'Jahn, Bullock & Ignacio — ABHO'] },

{ id: 'q-2.7-040', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um perito compara dois laudos de ruído da mesma empresa, com resultados divergentes, feitos por profissionais distintos. Sobre as possíveis causas, é CORRETO afirmar:',
  alts: [
    { t: 'Divergências podem decorrer de diferenças no critério adotado, no posicionamento do equipamento, na duração e representatividade da amostragem, na inclusão ou não de tarefas específicas e na calibração — o que torna a descrição da metodologia elemento essencial de qualquer laudo.', ok: true,
      why: 'Correta. Sem metodologia descrita não é possível comparar dois laudos nem avaliar qual representa melhor a exposição.' },
    { t: 'Divergência entre laudos indica necessariamente fraude em um deles.', ok: false,
      why: 'Errada. Diferenças metodológicas legítimas produzem resultados distintos.' },
    { t: 'O laudo mais recente prevalece automaticamente sobre o anterior.', ok: false,
      why: 'Errada. Prevalece o que melhor representa a exposição, o que se avalia pela metodologia.' },
    { t: 'A calibração do equipamento não influencia o resultado obtido.', ok: false,
      why: 'Errada. Calibração antes e após a medição é requisito de validade.' },
    { t: 'Um laudo sem descrição de metodologia tem o mesmo valor de um laudo metodologicamente detalhado.', ok: false,
      why: 'Errada. Sem metodologia o resultado não é verificável nem contestável.' }
  ],
  comentario: 'Dois laudos divergentes não significam fraude: significam metodologias diferentes. Por isso a descrição do método — critério, posicionamento, duração, tarefas cobertas, calibração — é o que dá valor probatório ao documento.',
  pegadinha: 'A regra de que "o mais recente prevalece" é atalho administrativo sem base técnica.',
  refs: ['NHO 01 — Fundacentro', 'NR-15'] },

{ id: 'q-2.8-040', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa fornece respiradores purificadores de ar em setor onde há também deficiência intermitente de oxigênio por uso de gás inerte em processo de purga. Sobre a adequação, é CORRETO afirmar:',
  alts: [
    { t: 'A possibilidade de deficiência de oxigênio, ainda que intermitente, torna inadequado o respirador purificador de ar, exigindo equipamento de adução de ar e monitoramento contínuo da atmosfera no setor.', ok: true,
      why: 'Correta. Intermitência não reduz o risco: basta um episódio para incapacitar, e o purificador não protege contra falta de oxigênio.' },
    { t: 'O purificador de ar é adequado desde que a deficiência de oxigênio seja intermitente e de curta duração.', ok: false,
      why: 'Errada. A incapacitação por falta de oxigênio ocorre em instantes.' },
    { t: 'Basta treinar os trabalhadores a sair do setor quando perceberem falta de ar.', ok: false,
      why: 'Errada. A deficiência de oxigênio não produz sinal de alerta perceptível antes da incapacitação.' },
    { t: 'O monitoramento da atmosfera é dispensável quando há equipamento de proteção respiratória.', ok: false,
      why: 'Errada. É o monitoramento que informa se o equipamento escolhido é adequado à condição do momento.' },
    { t: 'Gases inertes não representam risco por não serem tóxicos.', ok: false,
      why: 'Errada. São asfixiantes simples: deslocam o oxigênio do ambiente.' }
  ],
  comentario: 'Gás inerte é asfixiante simples e não avisa. Onde há possibilidade de deficiência de oxigênio, purificador de ar está fora de questão — a proteção é adução de ar somada a monitoramento contínuo da atmosfera.',
  pegadinha: 'Confiar na percepção do trabalhador para sair do setor é a mesma ilusão que mata em espaço confinado.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-33', 'NR-6'] },

{ id: 'q-2.8-041', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a guarda, higienização e manutenção dos respiradores, é CORRETO afirmar:',
  alts: [
    { t: 'São componentes do programa de proteção respiratória, com procedimentos definidos e registro — guarda em local limpo e protegido, higienização com periodicidade estabelecida e inspeção antes de cada uso pelo próprio usuário.', ok: true,
      why: 'Correta. Respirador mal guardado e sem manutenção deixa de proteger, e a inspeção pelo usuário antes do uso é a última barreira.' },
    { t: 'O respirador pode ser guardado no próprio posto de trabalho, exposto ao ambiente contaminado.', ok: false,
      why: 'Errada. A guarda em ambiente contaminado contamina a face interna da peça.' },
    { t: 'A higienização é responsabilidade exclusiva do trabalhador, sem procedimento definido pela empresa.', ok: false,
      why: 'Errada. A empresa define o procedimento e assegura os meios.' },
    { t: 'A inspeção antes do uso é dispensável em equipamentos novos.', ok: false,
      why: 'Errada. A inspeção verifica integridade de válvulas, tirantes e vedação a cada uso.' },
    { t: 'O compartilhamento de respiradores entre trabalhadores é aceitável desde que higienizados semanalmente.', ok: false,
      why: 'Errada. O compartilhamento é problemático por questões de higiene e, sobretudo, porque o ensaio de vedação é individual.' }
  ],
  comentario: 'O programa não termina na entrega: guarda protegida, higienização com procedimento e periodicidade, manutenção de componentes e inspeção pelo usuário antes de cada uso. E o respirador é individual — o ensaio de vedação também é.',
  pegadinha: 'Guardar o respirador no posto parece prático e contamina exatamente a face que toca o rosto.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

{ id: 'q-3.1-039', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar uma atividade de levantamento manual de cargas, o ergonomista observa que a carga é levantada do chão, com torção de tronco e a 40 vezes por hora. Sobre a análise, é CORRETO afirmar:',
  alts: [
    { t: 'O risco não se define apenas pelo peso: altura de origem e destino, distância horizontal da carga ao corpo, torção de tronco, frequência, duração e qualidade da pega compõem a avaliação, e a torção associada à alta frequência agrava substancialmente.', ok: true,
      why: 'Correta. Peso isolado informa pouco; são os multiplicadores geométricos e de frequência que determinam o risco real.' },
    { t: 'Se o peso está abaixo do limite recomendado, não há risco a considerar.', ok: false,
      why: 'Errada. Carga leve com torção e alta frequência produz risco elevado.' },
    { t: 'A torção de tronco é irrelevante quando a carga é leve.', ok: false,
      why: 'Errada. A torção reduz a capacidade de suporte da coluna independentemente do peso.' },
    { t: 'A frequência de levantamento não integra a avaliação do risco.', ok: false,
      why: 'Errada. É um dos fatores mais determinantes, junto com o tempo de recuperação.' },
    { t: 'A qualidade da pega não influencia o esforço necessário.', ok: false,
      why: 'Errada. Pega inadequada aumenta a força de preensão e o esforço total.' }
  ],
  comentario: 'Levantamento de carga não se avalia pelo peso: altura de origem e destino, distância ao corpo, torção, frequência, duração e pega entram todos na conta. Carga leve mal levantada, muitas vezes por hora, adoece.',
  pegadinha: 'A pergunta "quantos quilos pode levantar?" é a formulação errada — e é a que a empresa sempre faz.',
  refs: ['Equação do NIOSH', 'Couto — Ergonomia', 'NR-17'] },

{ id: 'q-3.1-040', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o mobiliário do posto de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A regulagem deve permitir adequação à variabilidade antropométrica dos usuários, e o simples fornecimento de mobiliário regulável não basta — é preciso orientar sobre o ajuste e verificar se ele está sendo efetivamente utilizado.', ok: true,
      why: 'Correta. Mobiliário regulável não ajustado é mobiliário fixo na posição errada, situação extremamente comum.' },
    { t: 'Mobiliário regulável dispensa orientação ao trabalhador.', ok: false,
      why: 'Errada. Sem orientação, a maioria permanece no ajuste de fábrica.' },
    { t: 'Um único dimensionamento serve adequadamente a toda a população trabalhadora.', ok: false,
      why: 'Errada. A variabilidade antropométrica exige regulagem ou dimensionamento por faixas.' },
    { t: 'O apoio para os pés é acessório dispensável em qualquer situação.', ok: false,
      why: 'Errada. Para trabalhadores de menor estatura, com a altura da bancada fixa, o apoio é o que permite postura adequada.' },
    { t: 'A altura da superfície de trabalho independe do tipo de tarefa realizada.', ok: false,
      why: 'Errada. Tarefas de precisão, leves e pesadas exigem alturas diferentes em relação ao cotovelo.' }
  ],
  comentario: 'Regulável e não ajustado é o mesmo que fixo na posição errada. E a altura da superfície depende da tarefa: precisão pede mais alto, esforço pede mais baixo, tomando o cotovelo como referência.',
  pegadinha: 'Fornecer mobiliário regulável e não orientar o ajuste é o cumprimento formal que não produz nenhum efeito.',
  refs: ['NR-17', 'Couto — Ergonomia'] }

);
