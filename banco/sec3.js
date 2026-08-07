/* Seção 3 — Ergonomia
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-3.1-001', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Ao dimensionar bancadas de uma linha de montagem, a engenharia pergunta ao médico do trabalho qual medida antropométrica deve orientar o projeto. Sobre aplicação da antropometria ao posto de trabalho, a orientação CORRETA é:',
  alts: [
    { t: 'Alcances devem ser dimensionados por percentis baixos da população e espaços livres por percentis altos, de modo que o posto sirva à maior parte dos trabalhadores.', ok: true,
      why: 'Correta. É o princípio do dimensionamento: quem alcança é o menor (por isso alcance segue percentil inferior) e quem precisa de espaço é o maior (por isso folgas seguem percentil superior).' },
    { t: 'Todo o posto deve ser dimensionado pela média aritmética das medidas da população trabalhadora.', ok: false,
      why: 'Errada. Projetar para o "homem médio" é erro clássico: exclui simultaneamente os extremos inferior e superior da distribuição.' },
    { t: 'Alcances devem seguir percentis altos e espaços livres, percentis baixos.', ok: false,
      why: 'Errada, é a inversão exata do princípio. Dimensionar alcance pelo maior trabalhador deixa o menor sem conseguir alcançar.' },
    { t: 'A antropometria é dispensável quando o posto possui regulagem de altura, pois a regulagem resolve qualquer diferença individual.', ok: false,
      why: 'Errada. A regulagem é excelente solução, mas a própria faixa de regulagem precisa ser definida com base antropométrica para cobrir a população.' },
    { t: 'Devem ser usadas tabelas antropométricas internacionais, por serem mais robustas que dados da população brasileira.', ok: false,
      why: 'Errada. Populações diferem em dimensões corporais; usar referência estrangeira sem adequação pode produzir postos mal dimensionados.' }
  ],
  comentario: 'A regra prática é curta: alcance pelo pequeno, folga pelo grande, regulagem sempre que possível — e nunca projetar para a média. A média não descreve ninguém em particular.',
  pegadinha: 'A inversão "alcance por percentil alto" é a distratora mais forte, porque soa como "atender ao maior".',
  refs: ['Couto — Ergonomia', 'NR-17'] },

{ id: 'q-3.2-001', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma central de teleatendimento registra aumento de afastamentos por transtornos musculoesqueléticos e mentais. A empresa contrata uma consultoria que entrega um relatório com medições de altura de cadeira, ângulo de tela e luminância, concluindo que "o posto está conforme". Assinale a alternativa que melhor traduz a crítica técnica a essa abordagem:',
  alts: [
    { t: 'A análise limitou-se à dimensão física do posto e não examinou a organização do trabalho — metas, ritmo, tempo de atendimento, pausas, controle sobre a tarefa —, que é determinante nesse tipo de atividade.', ok: true,
      why: 'Correta. Em teleatendimento a carga decisiva costuma ser organizacional e cognitiva. Uma avaliação que só mede mobiliário responde à pergunta errada.' },
    { t: 'A análise falhou por não ter medido os níveis de ruído do ambiente, único fator capaz de explicar adoecimento mental em teleatendimento.', ok: false,
      why: 'Errada. Ruído importa em teleatendimento, mas afirmar que é o único fator capaz de explicar adoecimento mental é redução indefensável.' },
    { t: 'A análise é adequada, pois a conformidade dimensional do posto é suficiente para caracterizar ausência de risco ergonômico.', ok: false,
      why: 'Errada. Conformidade dimensional é condição necessária, jamais suficiente: risco ergonômico inclui organização do trabalho e fatores psicossociais.' },
    { t: 'A análise deveria ter sido substituída por avaliação médica individual de cada trabalhador, dispensando o estudo do posto.', ok: false,
      why: 'Errada. Substituir análise do trabalho por exame individual devolve o problema ao trabalhador e não modifica a situação geradora.' },
    { t: 'A crítica não procede, pois a análise ergonômica do trabalho tem por objeto exclusivo os aspectos biomecânicos da tarefa.', ok: false,
      why: 'Errada. A análise ergonômica do trabalho abrange a atividade real, incluindo os determinantes organizacionais e cognitivos, não apenas a biomecânica.' }
  ],
  comentario: 'A distinção que a questão cobra é entre "avaliação do posto" e "análise ergonômica do trabalho". A segunda parte da atividade real, ouve o trabalhador e alcança a organização do trabalho — ritmo, metas, pausas, autonomia, controle. Em atividades cognitivas repetitivas, é aí que o risco mora.',
  pegadinha: 'A alternativa que troca análise do trabalho por exame individual dos trabalhadores reproduz exatamente o erro que a Saúde do Trabalhador critica: individualizar um problema coletivo.',
  refs: ['NR-17', 'Couto — Ergonomia', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-3.2-002', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma indústria adota escala de turnos alternantes de rotação rápida. O médico do trabalho é consultado sobre os efeitos à saúde. Assinale a alternativa CORRETA sobre trabalho em turnos e noturno:',
  alts: [
    { t: 'O trabalho noturno associa-se a distúrbios do sono, alterações metabólicas e cardiovasculares, e o trabalho em turnos é classificado como provável carcinógeno por agência internacional de referência.', ok: true,
      why: 'Correta. Além do impacto sobre sono e ritmo circadiano, com repercussões metabólicas e cardiovasculares, o trabalho em turnos com desregulação circadiana recebeu classificação de provável carcinógeno humano em avaliação internacional.' },
    { t: 'A rotação anti-horária (noite → tarde → manhã) é fisiologicamente preferível à rotação horária.', ok: false,
      why: 'Errada. A recomendação predominante é a rotação em sentido horário (manhã → tarde → noite), por acompanhar melhor a tendência natural de atraso de fase.' },
    { t: 'O trabalhador noturno permanece com o ritmo circadiano completamente adaptado após duas a três noites de trabalho.', ok: false,
      why: 'Errada. A adaptação circadiana completa é rara em turnos alternantes, porque o trabalhador retorna ao padrão diurno nos dias de folga e sofre ressincronizações repetidas.' },
    { t: 'Cochilos programados durante o turno noturno estão contraindicados por prolongarem a inércia do sono e piorarem o desempenho.', ok: false,
      why: 'Errada. Cochilos curtos e planejados são medida reconhecida de mitigação de sonolência; a inércia do sono é gerenciável com duração e horário adequados.' },
    { t: 'A idade não influencia a tolerância ao trabalho em turnos, sendo determinada apenas por preferência individual.', ok: false,
      why: 'Errada. A tolerância tende a diminuir com a idade, e há ainda influência de cronotipo, condições de saúde e carga doméstica.' }
  ],
  comentario: 'Os pontos mais cobrados: sentido horário de rotação é preferível; a adaptação circadiana completa não ocorre em quem alterna; tolerância cai com a idade; e há classificação internacional de trabalho em turnos com desregulação circadiana como provável carcinógeno.',
  pegadinha: 'A inversão do sentido da rotação é o distrator mais eficaz — muitos candidatos lembram que "o sentido importa" mas não qual.',
  refs: ['IARC Monographs', 'Couto — Ergonomia', 'NR-17'] }

);
