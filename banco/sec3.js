/* Seção 3 — Ergonomia
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-3.1-001', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Ao dimensionar bancadas de uma linha de montagem, a engenharia pergunta ao médico do trabalho qual medida antropométrica deve orientar o projeto. Sobre aplicação da antropometria ao posto de trabalho, a orientação CORRETA é:',
  alts: [
    { t: 'Alcances por percentis baixos e espaços livres por percentis altos da população.', ok: true,
      why: 'Correta. Assim o posto serve à maior parte dos trabalhadores.' },
    { t: 'Todo o posto deve ser dimensionado pela média aritmética das medidas da população trabalhadora.', ok: false,
      why: 'Errada. A média não serve a quase ninguém nos extremos.' },
    { t: 'Alcances devem seguir percentis altos e os espaços livres devem seguir percentis baixos da população.', ok: false,
      why: 'Errada, é o inverso: alcance pelo menor, espaço pelo maior.' },
    { t: 'A antropometria é dispensável quando há regulagem de altura, que resolve qualquer diferença individual.', ok: false,
      why: 'Errada. A faixa de regulagem precisa cobrir a variabilidade real.' },
    { t: 'Devem ser usadas tabelas internacionais, mais robustas que os dados da população brasileira.', ok: false,
      why: 'Errada. Dados de outra população não representam a daqui.' }
  ],
  comentario: 'A regra prática é curta: alcance pelo pequeno, folga pelo grande, regulagem sempre que possível — e nunca projetar para a média. A média não descreve ninguém em particular.',
  pegadinha: 'A inversão "alcance por percentil alto" é a distratora mais forte, porque soa como "atender ao maior".',
  refs: ['Couto — Ergonomia', 'NR-17'] },

{ id: 'q-3.2-001', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma central de teleatendimento registra aumento de afastamentos por transtornos musculoesqueléticos e mentais. A empresa contrata uma consultoria que entrega um relatório com medições de altura de cadeira, ângulo de tela e luminância, concluindo que "o posto está conforme". Assinale a alternativa que melhor traduz a crítica técnica a essa abordagem:',
  alts: [
    { t: 'Limitou-se ao posto físico e não examinou metas, ritmo, tempo de atendimento e pausas.', ok: true,
      why: 'Correta. A organização do trabalho é determinante nesse tipo de atividade.' },
    { t: 'Falhou por não medir os níveis de ruído, único fator capaz de explicar adoecimento em teleatendimento.', ok: false,
      why: 'Errada. A organização do trabalho é o fator predominante.' },
    { t: 'É adequada, pois a conformidade dimensional do posto basta para afastar risco ergonômico na atividade.', ok: false,
      why: 'Errada. A norma alcança expressamente a organização do trabalho.' },
    { t: 'Deveria ser substituída por avaliação médica individual de cada trabalhador, dispensando o posto.', ok: false,
      why: 'Errada. O objeto é a situação de trabalho, não o indivíduo.' },
    { t: 'A crítica não procede, pois a análise ergonômica tem por objeto exclusivo os aspectos biomecânicos.', ok: false,
      why: 'Errada. Abrange também cognição e organização do trabalho.' }
  ],
  comentario: 'A distinção que a questão cobra é entre "avaliação do posto" e "análise ergonômica do trabalho". A segunda parte da atividade real, ouve o trabalhador e alcança a organização do trabalho — ritmo, metas, pausas, autonomia, controle. Em atividades cognitivas repetitivas, é aí que o risco mora.',
  pegadinha: 'A alternativa que troca análise do trabalho por exame individual dos trabalhadores reproduz exatamente o erro que a Saúde do Trabalhador critica: individualizar um problema coletivo.',
  refs: ['NR-17', 'Couto — Ergonomia', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-3.2-002', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma indústria adota escala de turnos alternantes de rotação rápida. O médico do trabalho é consultado sobre os efeitos à saúde. Assinale a alternativa CORRETA sobre trabalho em turnos e noturno:',
  alts: [
    { t: 'Associa-se a distúrbios do sono e alterações metabólicas, e é classificado como provável carcinógeno.', ok: true,
      why: 'Correta. A classificação é de agência internacional de referência.' },
    { t: 'Associa-se a distúrbios do sono, sendo a rotação anti-horária fisiologicamente preferível à horária.', ok: false,
      why: 'Errada. A rotação horária é mais bem tolerada.' },
    { t: 'Associa-se a distúrbios, ficando o ritmo circadiano adaptado após duas a três noites de trabalho.', ok: false,
      why: 'Errada. A adaptação completa é exceção, não regra.' },
    { t: 'Associa-se a distúrbios, sendo contraindicados os cochilos programados por prolongar a inércia do sono.', ok: false,
      why: 'Errada. Há evidência de redução de sonolência e de erros.' },
    { t: 'Associa-se a distúrbios, sem que a idade influencie a tolerância ao trabalho em turnos alternados.', ok: false,
      why: 'Errada. A tolerância tende a diminuir com a idade.' }
  ],
  comentario: 'Os pontos mais cobrados: sentido horário de rotação é preferível; a adaptação circadiana completa não ocorre em quem alterna; tolerância cai com a idade; e há classificação internacional de trabalho em turnos com desregulação circadiana como provável carcinógeno.',
  pegadinha: 'A inversão do sentido da rotação é o distrator mais eficaz — muitos candidatos lembram que "o sentido importa" mas não qual.',
  refs: ['IARC Monographs', 'Couto — Ergonomia', 'NR-17'] }

);
