/* Lote B — 4.4, 4.5, 4.6, 4.8. Questões AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-040', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Cabeleireira de 31 anos apresenta eczema em polpas digitais e dorso das mãos, com piora após início do uso de produtos para alisamento. Sobre a investigação, é CORRETO afirmar:',
  alts: [
    { t: 'A profissão concentra exposição a múltiplos sensibilizantes e irritantes — corantes, persulfatos, conservantes, aldeídos —, e a investigação exige levantar a composição dos produtos usados e testar bateria que contemple os alérgenos da atividade, além de considerar o trabalho úmido como fator irritativo.', ok: true,
      why: 'Correta. Cabeleireiros somam sensibilizantes potentes e trabalho úmido contínuo, o que produz quadros mistos de difícil resolução sem afastar o agente.' },
    { t: 'O trabalho úmido não contribui para dermatose em cabeleireiros.', ok: false,
      why: 'Errada. Lavagem frequente e oclusão por luvas rompem a barreira cutânea e favorecem irritação e sensibilização.' },
    { t: 'Bateria padrão de teste de contato é sempre suficiente, sem necessidade de alérgenos ocupacionais específicos.', ok: false,
      why: 'Errada. Séries complementares específicas da profissão aumentam substancialmente o rendimento diagnóstico.' },
    { t: 'A localização em polpas digitais afasta origem ocupacional.', ok: false,
      why: 'Errada. As polpas são áreas de contato direto na manipulação de produtos e mechas.' },
    { t: 'O uso de luvas resolve o quadro independentemente do material escolhido.', ok: false,
      why: 'Errada. Material inadequado permite permeação, e a oclusão prolongada agrava o componente irritativo.' }
  ],
  comentario: 'Cabeleireiro é caso-modelo de dermatose ocupacional: múltiplos sensibilizantes, trabalho úmido, oclusão por luva. Investigar exige a composição dos produtos e séries de teste específicas da profissão.',
  pegadinha: 'Confiar apenas na bateria padrão deixa passar exatamente os alérgenos da atividade.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.4-041', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o retorno ao trabalho de trabalhador com dermatose ocupacional já diagnosticada, é CORRETO afirmar:',
  alts: [
    { t: 'Havendo sensibilização a agente presente na atividade, o afastamento daquele agente específico é a medida decisiva, podendo o trabalhador permanecer na empresa em função sem contato — a manutenção da exposição perpetua o quadro mesmo com tratamento.', ok: true,
      why: 'Correta. Em dermatite alérgica, tratar sem afastar o alérgeno é enxugar gelo; e afastar do agente não significa necessariamente afastar do trabalho.' },
    { t: 'O tratamento tópico permite a manutenção do trabalhador na mesma exposição.', ok: false,
      why: 'Errada. Corticoide controla a inflamação e não impede a recidiva enquanto houver contato.' },
    { t: 'O diagnóstico de dermatose ocupacional implica inaptidão para qualquer atividade.', ok: false,
      why: 'Errada. A restrição é ao agente sensibilizante, não ao trabalho em geral.' },
    { t: 'Uma vez sensibilizado, o trabalhador tolera pequenas exposições sem recidiva.', ok: false,
      why: 'Errada. No sensibilizado, quantidades muito pequenas bastam para desencadear o quadro.' },
    { t: 'O uso de creme de barreira permite o retorno à mesma exposição.', ok: false,
      why: 'Errada. Creme de barreira tem eficácia limitada e não substitui o afastamento do sensibilizante.' }
  ],
  comentario: 'A frase que resolve: no sensibilizado, pouco basta. Por isso a conduta é afastar do AGENTE — o que em geral permite manter o trabalhador na empresa, em função sem contato — e não afastar do trabalho.',
  pegadinha: 'A ideia de que pequenas exposições são toleráveis após a sensibilização inverte a característica central do mecanismo alérgico.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-7'] },

{ id: 'q-4.5-050', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 44 anos, exposto a ruído, apresenta piora audiométrica assimétrica, com perda significativamente maior à esquerda. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'Assimetria relevante exige investigação de outras causas — schwannoma vestibular, trauma acústico prévio, exposição extraocupacional lateralizada ou doença de orelha média —, pois a perda induzida por ruído ocupacional tende a ser simétrica.', ok: true,
      why: 'Correta. A simetria é característica esperada, e a assimetria significativa é sinal de alerta que obriga a ampliar a investigação.' },
    { t: 'A assimetria é achado comum e esperado na perda induzida por ruído ocupacional.', ok: false,
      why: 'Errada. A exposição ocupacional em geral atinge ambas as orelhas de modo semelhante.' },
    { t: 'A assimetria confirma origem ocupacional, por indicar posicionamento junto à fonte.', ok: false,
      why: 'Errada. Posicionamento pode gerar pequena diferença, mas assimetria significativa exige excluir outras causas.' },
    { t: 'Não há necessidade de investigação adicional se o trabalhador for assintomático.', ok: false,
      why: 'Errada. Schwannoma vestibular pode cursar com assimetria audiométrica antes de outros sintomas.' },
    { t: 'Exposição extraocupacional a ruído nunca produz padrão lateralizado.', ok: false,
      why: 'Errada. Atividades como tiro esportivo produzem padrão lateralizado característico.' }
  ],
  comentario: 'Assimetria significativa é bandeira vermelha em audiometria ocupacional: investigue schwannoma, trauma acústico prévio, exposição extraocupacional lateralizada e doença de orelha média antes de atribuir ao ruído do trabalho.',
  pegadinha: 'Tratar a assimetria como confirmação de origem ocupacional inverte o significado do achado.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-051', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o zumbido em trabalhadores expostos a ruído, é CORRETO afirmar:',
  alts: [
    { t: 'É queixa frequente e pode preceder ou acompanhar a perda auditiva, com repercussão sobre sono, concentração e humor — devendo ser ativamente investigado no exame ocupacional, e não tratado como queixa menor.', ok: true,
      why: 'Correta. O zumbido tem impacto funcional relevante e é frequentemente subvalorizado por não aparecer no traçado audiométrico.' },
    { t: 'Zumbido sem alteração audiométrica afasta relação com exposição a ruído.', ok: false,
      why: 'Errada. Pode preceder a alteração detectável nas frequências avaliadas na rotina.' },
    { t: 'O zumbido não tem repercussão sobre a capacidade de trabalho.', ok: false,
      why: 'Errada. Prejuízo de sono e de concentração tem repercussão funcional documentada.' },
    { t: 'Por ser subjetivo, o zumbido não deve constar do registro clínico ocupacional.', ok: false,
      why: 'Errada. É sintoma relevante e deve ser registrado e acompanhado.' },
    { t: 'O tratamento do zumbido dispensa qualquer medida sobre a exposição ao ruído.', ok: false,
      why: 'Errada. Controlar a exposição é parte da conduta, sob pena de manutenção e agravamento.' }
  ],
  comentario: 'Zumbido é o sintoma que não aparece no traçado e por isso é subvalorizado. Pode preceder a perda detectável, prejudica sono e concentração e exige tanto conduta clínica quanto controle da exposição.',
  pegadinha: 'Exigir alteração audiométrica para valorizar o zumbido descarta justamente a fase em que a intervenção preventiva ainda faz diferença.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.6-050', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após suicídio de um trabalhador, colegas do setor procuram o serviço médico manifestando sofrimento intenso. A empresa pede orientação. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A posvenção — acolhimento estruturado dos expostos ao evento, com identificação de pessoas em maior risco e cuidado na comunicação interna — é conduta indicada, e a investigação de eventuais determinantes organizacionais deve ocorrer sem transformar o caso em objeto de exposição pública.', ok: true,
      why: 'Correta. O acolhimento dos sobreviventes reduz risco secundário, e a comunicação inadequada pode ter efeito contrário ao pretendido.' },
    { t: 'A empresa deve realizar comunicação detalhada do método e das circunstâncias, para conscientizar a equipe.', ok: false,
      why: 'Errada. A divulgação detalhada de método e circunstâncias é contraindicada por seu potencial de efeito imitativo.' },
    { t: 'Não cabe qualquer ação, pois se trata de evento da vida privada do trabalhador.', ok: false,
      why: 'Errada. Há impacto coletivo sobre os colegas e possível relação com determinantes do trabalho a investigar.' },
    { t: 'A investigação de fatores organizacionais é inadequada por poder gerar responsabilização da empresa.', ok: false,
      why: 'Errada. O receio de responsabilização não justifica deixar de investigar determinantes que podem atingir outros trabalhadores.' },
    { t: 'O acolhimento deve limitar-se aos familiares, sem ação junto aos colegas de trabalho.', ok: false,
      why: 'Errada. Colegas expostos ao evento estão entre os grupos de maior risco secundário.' }
  ],
  comentario: 'Posvenção: acolher os expostos, identificar quem está em maior risco, cuidar da comunicação — sem detalhar método e circunstâncias — e investigar determinantes organizacionais. As três coisas ao mesmo tempo.',
  pegadinha: 'A comunicação detalhada "para conscientizar" é a conduta que a literatura de prevenção desaconselha expressamente.',
  refs: ['Murta et al. — Prevenção e promoção em saúde mental', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.6-051', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o presenteísmo associado a sofrimento mental no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Trabalhadores em sofrimento mental frequentemente comparecem com desempenho reduzido, e políticas que dificultam o afastamento aumentam esse fenômeno — de modo que a queda do absenteísmo pode coexistir com agravamento do quadro coletivo.', ok: true,
      why: 'Correta. É o efeito espelho: apertar o afastamento não cura ninguém, apenas move o custo para dentro da jornada.' },
    { t: 'O presenteísmo indica boa adesão ao trabalho e não representa problema de saúde.', ok: false,
      why: 'Errada. Representa adoecimento não resolvido e desempenho comprometido.' },
    { t: 'A redução do absenteísmo é sempre indicador de melhora da saúde coletiva.', ok: false,
      why: 'Errada. Pode indicar apenas maior dificuldade de se afastar.' },
    { t: 'Presenteísmo é fenômeno mensurável diretamente pelo registro de ponto.', ok: false,
      why: 'Errada. O ponto registra presença física; a queda de desempenho exige instrumentos próprios.' },
    { t: 'O presenteísmo não guarda relação com a política de gestão de afastamentos.', ok: false,
      why: 'Errada. É diretamente influenciado por ela.' }
  ],
  comentario: 'O par absenteísmo e presenteísmo precisa ser lido junto. Queda de um com alta do outro não é melhora: é deslocamento do problema para dentro da jornada, onde ele fica invisível nos indicadores.',
  pegadinha: 'Ler a queda do absenteísmo isoladamente como sucesso é o erro de gestão mais premiado nas empresas.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.8-050', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de borracha por 20 anos desenvolve carcinoma urotelial de bexiga. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'Aminas aromáticas usadas historicamente na indústria da borracha têm associação reconhecida com câncer de bexiga, e a investigação deve caracterizar os produtos utilizados ao longo do tempo, considerando a latência prolongada e o tabagismo como concausa.', ok: true,
      why: 'Correta. A associação é clássica, a exposição histórica pode diferir da atual, e o tabagismo entra como concausa, não como excludente.' },
    { t: 'Câncer de bexiga não tem etiologia ocupacional reconhecida.', ok: false,
      why: 'Errada. É um dos cânceres com associação ocupacional mais bem estabelecida.' },
    { t: 'A presença de tabagismo afasta o nexo ocupacional.', ok: false,
      why: 'Errada. Tabagismo é concausa e pode inclusive interagir com a exposição ocupacional.' },
    { t: 'Basta caracterizar os produtos usados atualmente na empresa.', ok: false,
      why: 'Errada. A exposição relevante é a histórica, dada a latência de décadas; produtos foram substituídos ao longo do tempo.' },
    { t: 'A ausência de sintomas urinários durante a exposição afasta a relação com o trabalho.', ok: false,
      why: 'Errada. O tumor se manifesta décadas depois, sem sintomas durante o período de exposição.' }
  ],
  comentario: 'Aminas aromáticas e bexiga é par clássico. Dois cuidados metodológicos: caracterizar a exposição HISTÓRICA, não a atual, e tratar o tabagismo como concausa — inclusive porque a interação pode ser mais que aditiva.',
  pegadinha: 'Caracterizar apenas os produtos atuais é o atalho que apaga a exposição que causou o tumor.',
  refs: ['IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho', 'LINACH'] },

{ id: 'q-4.8-051', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa questiona a necessidade de manter registro de exposição a cancerígenos de trabalhadores já desligados. Sobre a obrigação, é CORRETO afirmar:',
  alts: [
    { t: 'O registro deve ser mantido por prazo prolongado justamente porque a latência dos cânceres ocupacionais é de décadas — sem ele, o trabalhador perde a possibilidade de demonstrar a exposição quando a doença se manifestar, muito depois do fim do vínculo.', ok: true,
      why: 'Correta. O registro é a única prova que sobrevive ao vínculo e é o que sustenta o nexo décadas depois.' },
    { t: 'Encerrado o vínculo, o registro pode ser descartado.', ok: false,
      why: 'Errada. É precisamente após o vínculo que o registro se torna essencial.' },
    { t: 'O registro só é necessário enquanto houver exposição em curso.', ok: false,
      why: 'Errada. A finalidade do registro é futura, não presente.' },
    { t: 'A digitalização do registro autoriza o descarte imediato do original sem outros cuidados.', ok: false,
      why: 'Errada. A guarda digital exige controles de integridade, autenticidade e segurança.' },
    { t: 'A responsabilidade pela guarda passa ao trabalhador após o desligamento.', ok: false,
      why: 'Errada. A guarda é da empresa e do serviço médico, não do trabalhador.' }
  ],
  comentario: 'Registro de exposição a cancerígeno é documento de longo prazo por definição: ele existe para ser usado décadas depois, quando o trabalhador já saiu e a empresa talvez nem exista mais. Descartá-lo cedo apaga a história.',
  pegadinha: 'A lógica de "acabou o vínculo, acabou a obrigação" é exatamente o oposto do que a latência exige.',
  refs: ['LINACH', 'NR-7', 'NR-9', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-052', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a comunicação a trabalhadores expostos a agentes cancerígenos, é CORRETO afirmar:',
  alts: [
    { t: 'Os trabalhadores têm direito de ser informados sobre os agentes a que estão expostos, seus efeitos potenciais e as medidas de controle adotadas — informação que integra o direito à saúde e é condição para a participação nas medidas preventivas.', ok: true,
      why: 'Correta. Informar é obrigação e é o que permite ao trabalhador participar da prevenção e reconhecer o próprio histórico de exposição no futuro.' },
    { t: 'A informação sobre carcinogenicidade deve ser omitida para não gerar ansiedade.', ok: false,
      why: 'Errada. Omitir informação sobre risco à própria saúde é eticamente insustentável e retira do trabalhador a chance de se proteger.' },
    { t: 'Basta informar a chefia, que repassará conforme julgar conveniente.', ok: false,
      why: 'Errada. A informação é dirigida aos expostos e não pode ficar sujeita a filtro gerencial.' },
    { t: 'A informação sobre riscos é dispensável quando há controle de engenharia implantado.', ok: false,
      why: 'Errada. Controle implantado não dispensa informação, inclusive porque ele pode falhar.' },
    { t: 'A comunicação deve limitar-se ao nome comercial dos produtos utilizados.', ok: false,
      why: 'Errada. Nome comercial não informa o agente nem o risco; a informação precisa ser compreensível e substantiva.' }
  ],
  comentario: 'Informar o exposto é obrigação e é preventivo: quem sabe a que está exposto participa das medidas, cobra manutenção do controle e guarda o próprio histórico — que fará falta décadas depois.',
  pegadinha: '"Não informar para não gerar ansiedade" é paternalismo que retira do trabalhador a possibilidade de se proteger.',
  refs: ['Lei nº 8.080/1990', 'NR-1', 'ICOH — Código internacional de ética'] }

);
