/* Lote B — 4.4, 4.5, 4.6, 4.8. Questões AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.4-040', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Cabeleireira de 31 anos apresenta eczema em polpas digitais e dorso das mãos, com piora após início do uso de produtos para alisamento. Sobre a investigação, é CORRETO afirmar:',
  alts: [
    { t: 'É preciso levantar a composição dos produtos usados e testar bateria que contemple os alérgenos da atividade', ok: true,
      why: 'Correta. Cabeleireiros somam sensibilizantes potentes e trabalho úmido, produzindo quadros mistos.' },
    { t: 'É preciso testar os alérgenos da profissão, embora o trabalho úmido não contribua para dermatose nesse grupo.', ok: false,
      why: 'Errada. Lavagem frequente e oclusão por luvas rompem a barreira e favorecem irritação.' },
    { t: 'É preciso aplicar a bateria padrão de teste de contato, suficiente sem alérgenos ocupacionais específicos.', ok: false,
      why: 'Errada. Séries complementares da profissão aumentam muito o rendimento diagnóstico.' },
    { t: 'É preciso levantar os produtos usados, embora a localização em polpas digitais afaste a origem ocupacional.', ok: false,
      why: 'Errada. As polpas são áreas de contato direto na manipulação de produtos e mechas.' },
    { t: 'É preciso levantar os produtos, resolvendo o uso de luvas o quadro independentemente do material escolhido.', ok: false,
      why: 'Errada. Material inadequado permite permeação e a oclusão agrava o componente irritativo.' }
  ],
  comentario: 'Cabeleireiro é caso-modelo de dermatose ocupacional: múltiplos sensibilizantes, trabalho úmido, oclusão por luva. Investigar exige a composição dos produtos e séries de teste específicas da profissão.',
  pegadinha: 'Confiar apenas na bateria padrão deixa passar exatamente os alérgenos da atividade.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.4-041', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o retorno ao trabalho de trabalhador com dermatose ocupacional já diagnosticada, é CORRETO afirmar:',
  alts: [
    { t: 'Havendo sensibilização, afastar aquele agente é decisivo, podendo permanecer em função sem contato.', ok: true,
      why: 'Correta. Tratar sem afastar o alérgeno é enxugar gelo; e afastar do agente não é afastar do trabalho.' },
    { t: 'Havendo sensibilização, o tratamento tópico permite manter o trabalhador na mesma exposição da função.', ok: false,
      why: 'Errada. Corticoide controla a inflamação e não impede a recidiva enquanto houver contato.' },
    { t: 'Havendo sensibilização, o diagnóstico de dermatose ocupacional implica inaptidão para qualquer atividade.', ok: false,
      why: 'Errada. A restrição é ao agente sensibilizante, não ao trabalho em geral.' },
    { t: 'Havendo sensibilização, o trabalhador passa a tolerar pequenas exposições ao agente sem recidiva do quadro.', ok: false,
      why: 'Errada. No sensibilizado, quantidades muito pequenas bastam para desencadear o quadro.' },
    { t: 'Havendo sensibilização, o uso de creme de barreira permite o retorno à mesma exposição anterior.', ok: false,
      why: 'Errada. Tem eficácia limitada e não substitui o afastamento do sensibilizante.' }
  ],
  comentario: 'A frase que resolve: no sensibilizado, pouco basta. Por isso a conduta é afastar do AGENTE — o que em geral permite manter o trabalhador na empresa, em função sem contato — e não afastar do trabalho.',
  pegadinha: 'A ideia de que pequenas exposições são toleráveis após a sensibilização inverte a característica central do mecanismo alérgico.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-7'] },

{ id: 'q-4.5-050', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 44 anos, exposto a ruído, apresenta piora audiométrica assimétrica, com perda significativamente maior à esquerda. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'A assimetria exige investigar schwannoma, trauma prévio ou exposição extraocupacional lateralizada.', ok: true,
      why: 'Correta. A perda induzida por ruído ocupacional tende a ser simétrica; assimetria é sinal de alerta.' },
    { t: 'A assimetria audiométrica é achado comum e esperado na perda induzida por ruído de origem ocupacional.', ok: false,
      why: 'Errada. A exposição ocupacional em geral atinge ambas as orelhas de modo semelhante.' },
    { t: 'A assimetria confirma a origem ocupacional, por indicar o posicionamento do trabalhador junto à fonte.', ok: false,
      why: 'Errada. O posicionamento gera pequena diferença; assimetria significativa exige excluir outras causas.' },
    { t: 'A assimetria exige investigação apenas quando o trabalhador apresenta sintomas associados ao achado.', ok: false,
      why: 'Errada. Schwannoma vestibular pode cursar com assimetria antes de outros sintomas.' },
    { t: 'A assimetria exige investigação, pois exposição extraocupacional nunca produz padrão lateralizado.', ok: false,
      why: 'Errada. Atividades como tiro esportivo produzem padrão lateralizado característico.' }
  ],
  comentario: 'Assimetria significativa é bandeira vermelha em audiometria ocupacional: investigue schwannoma, trauma acústico prévio, exposição extraocupacional lateralizada e doença de orelha média antes de atribuir ao ruído do trabalho.',
  pegadinha: 'Tratar a assimetria como confirmação de origem ocupacional inverte o significado do achado.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-051', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o zumbido em trabalhadores expostos a ruído, é CORRETO afirmar:',
  alts: [
    { t: 'É queixa frequente que pode preceder a perda, com repercussão em sono, concentração e humor.', ok: true,
      why: 'Correta. Tem impacto funcional relevante e é subvalorizado por não aparecer no traçado.' },
    { t: 'É queixa frequente, afastando o zumbido sem alteração audiométrica a relação com exposição a ruído.', ok: false,
      why: 'Errada. Pode preceder a alteração detectável nas frequências avaliadas na rotina.' },
    { t: 'É queixa frequente e pode preceder a perda, sem repercussão sobre a capacidade de trabalho.', ok: false,
      why: 'Errada. Prejuízo de sono e de concentração tem repercussão funcional documentada.' },
    { t: 'É queixa frequente e subjetiva, razão pela qual não deve constar do registro clínico ocupacional.', ok: false,
      why: 'Errada. É sintoma relevante e deve ser registrado e acompanhado.' },
    { t: 'É queixa frequente com repercussão funcional, dispensando o tratamento medidas sobre a exposição.', ok: false,
      why: 'Errada. Controlar a exposição é parte da conduta, sob pena de agravamento.' }
  ],
  comentario: 'Zumbido é o sintoma que não aparece no traçado e por isso é subvalorizado. Pode preceder a perda detectável, prejudica sono e concentração e exige tanto conduta clínica quanto controle da exposição.',
  pegadinha: 'Exigir alteração audiométrica para valorizar o zumbido descarta justamente a fase em que a intervenção preventiva ainda faz diferença.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.6-050', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após suicídio de um trabalhador, colegas do setor procuram o serviço médico manifestando sofrimento intenso. A empresa pede orientação. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A posvenção é indicada, e a investigação de determinantes deve ocorrer sem exposição pública do caso.', ok: true,
      why: 'Correta. Acolher os sobreviventes reduz risco secundário; comunicação inadequada faz o contrário.' },
    { t: 'A empresa deve comunicar em detalhe o método e as circunstâncias do ocorrido, para conscientizar a equipe.', ok: false,
      why: 'Errada. A divulgação detalhada é contraindicada por seu potencial de efeito imitativo.' },
    { t: 'Não cabe ação do serviço, por se tratar de evento pertencente à vida privada do trabalhador falecido.', ok: false,
      why: 'Errada. Há impacto coletivo e possível relação com determinantes do trabalho a investigar.' },
    { t: 'A posvenção é indicada, sendo inadequada a investigação de fatores organizacionais por gerar responsabilização.', ok: false,
      why: 'Errada. O receio de responsabilização não justifica deixar de investigar.' },
    { t: 'A posvenção é indicada, devendo o acolhimento limitar-se aos familiares, sem ação junto aos colegas.', ok: false,
      why: 'Errada. Colegas expostos ao evento estão entre os grupos de maior risco secundário.' }
  ],
  comentario: 'Posvenção: acolher os expostos, identificar quem está em maior risco, cuidar da comunicação — sem detalhar método e circunstâncias — e investigar determinantes organizacionais. As três coisas ao mesmo tempo.',
  pegadinha: 'A comunicação detalhada "para conscientizar" é a conduta que a literatura de prevenção desaconselha expressamente.',
  refs: ['Murta et al. — Prevenção e promoção em saúde mental', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.6-051', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o presenteísmo associado a sofrimento mental no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O trabalhador em sofrimento comparece com desempenho reduzido, e dificultar o afastamento agrava isso.', ok: true,
      why: 'Correta. Apertar o afastamento não cura ninguém, apenas move o custo para dentro da jornada.' },
    { t: 'O presenteísmo indica boa adesão do trabalhador à empresa e não representa problema de saúde a tratar.', ok: false,
      why: 'Errada. Representa adoecimento não resolvido e desempenho comprometido.' },
    { t: 'O presenteísmo existe, sendo a redução do absenteísmo sempre indicador de melhora da saúde coletiva.', ok: false,
      why: 'Errada. Pode indicar apenas maior dificuldade de se afastar.' },
    { t: 'O presenteísmo é fenômeno relevante e mensurável diretamente pelo registro de ponto da empresa.', ok: false,
      why: 'Errada. O ponto registra presença física; a queda de desempenho exige instrumentos próprios.' },
    { t: 'O presenteísmo decorre de fatores individuais, sem relação com a política de gestão de afastamentos.', ok: false,
      why: 'Errada. É diretamente influenciado por ela.' }
  ],
  comentario: 'O par absenteísmo e presenteísmo precisa ser lido junto. Queda de um com alta do outro não é melhora: é deslocamento do problema para dentro da jornada, onde ele fica invisível nos indicadores.',
  pegadinha: 'Ler a queda do absenteísmo isoladamente como sucesso é o erro de gestão mais premiado nas empresas.',
  refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

{ id: 'q-4.8-050', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de borracha por 20 anos desenvolve carcinoma urotelial de bexiga. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'As aminas aromáticas têm associação reconhecida, exigindo caracterizar os produtos usados ao longo do tempo', ok: true,
      why: 'Correta. A latência é longa e o tabagismo entra como concausa, não como excludente.' },
    { t: 'O câncer de bexiga decorre de fatores individuais e do tabagismo, sem etiologia ocupacional reconhecida.', ok: false,
      why: 'Errada. É um dos cânceres com associação ocupacional mais bem estabelecida.' },
    { t: 'Aminas aromáticas têm associação reconhecida, mas a presença de tabagismo afasta o nexo ocupacional.', ok: false,
      why: 'Errada. Tabagismo é concausa e pode inclusive interagir com a exposição ocupacional.' },
    { t: 'Aminas aromáticas têm associação reconhecida, bastando caracterizar os produtos usados atualmente.', ok: false,
      why: 'Errada. A exposição relevante é a histórica; produtos foram substituídos ao longo do tempo.' },
    { t: 'Aminas aromáticas têm associação, afastando o nexo a ausência de sintomas urinários durante a exposição.', ok: false,
      why: 'Errada. O tumor se manifesta décadas depois, sem sintomas no período de exposição.' }
  ],
  comentario: 'Aminas aromáticas e bexiga é par clássico. Dois cuidados metodológicos: caracterizar a exposição HISTÓRICA, não a atual, e tratar o tabagismo como concausa — inclusive porque a interação pode ser mais que aditiva.',
  pegadinha: 'Caracterizar apenas os produtos atuais é o atalho que apaga a exposição que causou o tumor.',
  refs: ['IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho', 'LINACH'] },

{ id: 'q-4.8-051', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa questiona a necessidade de manter registro de exposição a cancerígenos de trabalhadores já desligados. Sobre a obrigação, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser mantido por prazo prolongado porque a latência desses cânceres costuma alcançar décadas', ok: true,
      why: 'Correta. Sem ele, o trabalhador não consegue demonstrar a exposição quando a doença aparecer.' },
    { t: 'Deve ser mantido durante o vínculo, podendo o registro ser descartado quando o contrato se encerra.', ok: false,
      why: 'Errada. É precisamente após o vínculo que o registro se torna essencial.' },
    { t: 'Deve ser mantido enquanto houver exposição em curso, cessando a exigência quando ela é eliminada.', ok: false,
      why: 'Errada. A finalidade do registro é futura, não presente.' },
    { t: 'Deve ser mantido por prazo prolongado, autorizando a digitalização o descarte imediato do original.', ok: false,
      why: 'Errada. A guarda digital exige controles de integridade, autenticidade e segurança.' },
    { t: 'Deve ser mantido por prazo prolongado, passando a guarda ao trabalhador após o seu desligamento.', ok: false,
      why: 'Errada. A guarda é da empresa e do serviço médico, não do trabalhador.' }
  ],
  comentario: 'Registro de exposição a cancerígeno é documento de longo prazo por definição: ele existe para ser usado décadas depois, quando o trabalhador já saiu e a empresa talvez nem exista mais. Descartá-lo cedo apaga a história.',
  pegadinha: 'A lógica de "acabou o vínculo, acabou a obrigação" é exatamente o oposto do que a latência exige.',
  refs: ['LINACH', 'NR-7', 'NR-9', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-052', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a comunicação a trabalhadores expostos a agentes cancerígenos, é CORRETO afirmar:',
  alts: [
    { t: 'Têm direito de saber os agentes, os efeitos potenciais e as medidas de controle que foram adotadas', ok: true,
      why: 'Correta. Informar é condição para participar da prevenção e reconhecer o próprio histórico depois.' },
    { t: 'Têm direito à informação, que deve omitir a carcinogenicidade para não gerar ansiedade desnecessária.', ok: false,
      why: 'Errada. Omitir risco à própria saúde é insustentável e retira a chance de se proteger.' },
    { t: 'Têm direito à informação, bastando informar a chefia, que a repassará conforme julgar conveniente.', ok: false,
      why: 'Errada. A informação é dirigida aos expostos e não pode ficar sujeita a filtro gerencial.' },
    { t: 'Têm direito à informação, dispensável quando há controle de engenharia implantado e verificado.', ok: false,
      why: 'Errada. Controle implantado não dispensa informação, inclusive porque ele pode falhar.' },
    { t: 'Têm direito à informação, que pode limitar-se ao nome comercial dos produtos utilizados na atividade.', ok: false,
      why: 'Errada. Nome comercial não informa o agente nem o risco.' }
  ],
  comentario: 'Informar o exposto é obrigação e é preventivo: quem sabe a que está exposto participa das medidas, cobra manutenção do controle e guarda o próprio histórico — que fará falta décadas depois.',
  pegadinha: '"Não informar para não gerar ansiedade" é paternalismo que retira do trabalhador a possibilidade de se proteger.',
  refs: ['Lei nº 8.080/1990', 'NR-1', 'ICOH — Código internacional de ética'] }

);
