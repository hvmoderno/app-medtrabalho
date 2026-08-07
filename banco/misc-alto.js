/* Fecha os últimos temas rasos: 1.3, 1.8, 1.9, 6.2, 6.3, 7.8
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============ 1.3 Epidemiologia Clínica e Bioestatística =============== */
{ id: 'q-1.3-020', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo comparou trabalhadores de uma indústria com a população geral e encontrou menor mortalidade entre os trabalhadores. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O achado provavelmente reflete o efeito do trabalhador sadio, viés de seleção pelo qual pessoas empregadas tendem a ser mais saudáveis que a população geral, o que pode mascarar efeitos nocivos da exposição.', ok: true,
      why: 'Correta. Quem está empregado precisou estar saudável para ser admitido e para permanecer, o que torna a população geral um comparador inadequado e pode esconder o dano ocupacional.' },
    { t: 'O achado demonstra que a exposição ocupacional daquela indústria é protetora.', ok: false,
      why: 'Errada. Concluir efeito protetor a partir desse desenho é justamente a armadilha que o viés produz.' },
    { t: 'Trata-se de confundimento residual por idade, corrigível apenas com aumento da amostra.', ok: false,
      why: 'Errada. Aumentar a amostra reduz erro aleatório, não corrige viés de seleção nem confundimento.' },
    { t: 'O comparador adequado seria sempre a população geral, por ser mais representativa.', ok: false,
      why: 'Errada, e é o cerne do problema: o comparador adequado costuma ser outro grupo de trabalhadores, não exposto ao agente em questão.' },
    { t: 'O efeito descrito só ocorre em estudos de caso-controle.', ok: false,
      why: 'Errada. É viés característico de estudos de mortalidade ocupacional, tipicamente coortes.' }
  ],
  comentario: 'Efeito do trabalhador sadio: estar empregado já seleciona os mais saudáveis, de modo que comparar trabalhadores com a população geral subestima o dano ocupacional. A correção é escolher comparador interno — trabalhadores não expostos ao agente.',
  pegadinha: 'A alternativa que conclui "exposição protetora" é o desfecho que o viés produz, e é exatamente o que a questão testa se você reconhece.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-021', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar a relação entre uma exposição ocupacional e uma doença, o pesquisador observa que a associação desaparece após ajuste por tabagismo. Sobre esse achado, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O tabagismo atuou como fator de confundimento, por estar associado tanto à exposição quanto ao desfecho sem ser etapa intermediária da cadeia causal.', ok: true,
      why: 'Correta. Confundimento exige as três condições: associação com a exposição, associação independente com o desfecho e não ser elo intermediário entre elas.' },
    { t: 'O tabagismo é modificador de efeito, pois alterou a magnitude da associação.', ok: false,
      why: 'Errada. Modificação de efeito significa que a associação difere ENTRE os estratos, e não que ela desaparece após o ajuste global.' },
    { t: 'O achado indica viés de aferição na medida da exposição.', ok: false,
      why: 'Errada. Viés de aferição decorre de erro na mensuração, e não do efeito de uma terceira variável.' },
    { t: 'Ajustar por confundidores é desnecessário quando a amostra é grande.', ok: false,
      why: 'Errada. Tamanho de amostra não resolve confundimento — apenas reduz erro aleatório.' },
    { t: 'Se o tabagismo fosse etapa intermediária entre exposição e doença, o ajuste por ele seria igualmente correto.', ok: false,
      why: 'Errada. Ajustar por variável intermediária da cadeia causal remove parte do próprio efeito que se quer medir.' }
  ],
  comentario: 'Confundimento: a terceira variável se associa à exposição, se associa independentemente ao desfecho e NÃO é elo intermediário. Modificação de efeito é outra coisa: a associação difere entre estratos e por isso deve ser relatada por estrato, não ajustada.',
  pegadinha: 'Confundimento e modificação de efeito são o par mais confundido do tema. Confundimento se ajusta; modificação de efeito se descreve.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-022', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um estudo relata risco relativo de 1,8 com intervalo de confiança de 95% entre 0,9 e 3,4. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O resultado não é estatisticamente significativo ao nível adotado, pois o intervalo inclui o valor 1, mas isso não equivale a demonstrar ausência de associação.', ok: true,
      why: 'Correta. Intervalo que cruza a unidade indica que a hipótese nula não pode ser rejeitada; ausência de significância não é o mesmo que evidência de ausência de efeito.' },
    { t: 'O resultado demonstra que não existe associação entre exposição e desfecho.', ok: false,
      why: 'Errada. Ausência de evidência não é evidência de ausência; o intervalo largo sugere imprecisão, possivelmente por amostra pequena.' },
    { t: 'O intervalo amplo indica que o estudo tem alto poder estatístico.', ok: false,
      why: 'Errada, é o inverso: intervalo amplo indica imprecisão e sugere baixo poder.' },
    { t: 'Como o ponto estimado é maior que 1, a associação está comprovada.', ok: false,
      why: 'Errada. A estimativa pontual isolada não sustenta conclusão sem considerar a precisão.' },
    { t: 'O valor de p correspondente seria necessariamente menor que 0,05.', ok: false,
      why: 'Errada. Intervalo de 95% que inclui a unidade corresponde a valor de p maior que 0,05.' }
  ],
  comentario: 'Leia o intervalo, não só o ponto: se cruza a unidade, não há significância ao nível adotado. E guarde a distinção que a banca cobra — não significativo não é sinônimo de ausência de efeito, sobretudo com intervalo largo, que denuncia imprecisão.',
  pegadinha: 'Converter "não significativo" em "não há associação" é o erro de interpretação mais comum em leitura de artigo.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

/* ============= 1.8 Vigilância em Saúde do Trabalhador ================== */
{ id: 'q-1.8-020', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao investigar um acidente de trabalho fatal em uma obra, a equipe de vigilância opta por analisar as decisões de planejamento, o cronograma e a pressão de prazo, além das condições do posto. Sobre essa abordagem, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A investigação de acidentes deve buscar causas em diferentes níveis — técnico, organizacional e gerencial —, pois limitar-se ao comportamento da vítima impede identificar e corrigir os determinantes do evento.', ok: true,
      why: 'Correta. Acidentes graves quase sempre resultam de falhas em cadeia; a análise que para na vítima não produz medida preventiva eficaz.' },
    { t: 'A investigação deve concentrar-se em identificar o erro do trabalhador acidentado.', ok: false,
      why: 'Errada. Essa abordagem encerra a análise no elo final e deixa intactos os determinantes que tornaram o erro possível.' },
    { t: 'Decisões gerenciais e de planejamento não integram o escopo da investigação de acidentes.', ok: false,
      why: 'Errada. São justamente as decisões distantes no tempo e no espaço que frequentemente criam as condições do acidente.' },
    { t: 'A investigação deve aguardar o encerramento do inquérito policial.', ok: false,
      why: 'Errada. A investigação sanitária tem finalidade preventiva e é independente das demais esferas.' },
    { t: 'Concluída a investigação, não cabe à vigilância exigir medidas, apenas recomendar.', ok: false,
      why: 'Errada. A vigilância pode formular exigências e, diante de risco grave e iminente, adotar medidas como a interdição.' }
  ],
  comentario: 'Investigação de acidente grave e fatal olha em camadas: o evento imediato, as condições do posto, a organização do trabalho e as decisões gerenciais. Ela é sanitária, independente das outras esferas, e pode gerar exigências — não só recomendações.',
  pegadinha: 'Aguardar o inquérito policial é a demora que mais compromete a prevenção, e soa prudente.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.8-021', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os instrumentos da vigilância em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A vigilância combina a análise de dados de morbimortalidade com a inspeção dos ambientes e processos de trabalho, articulando a informação epidemiológica à intervenção sobre a fonte do risco.', ok: true,
      why: 'Correta. É a articulação entre o dado e o território que caracteriza a vigilância: o número aponta onde olhar, a inspeção descobre o porquê e permite intervir.' },
    { t: 'A vigilância se restringe à análise de bancos de dados, sem atuação em campo.', ok: false,
      why: 'Errada. A ida ao ambiente de trabalho é componente essencial e distintivo.' },
    { t: 'A vigilância atua apenas após a ocorrência de agravos notificados.', ok: false,
      why: 'Errada. Ela também atua de forma antecipatória, sobre riscos identificados antes do adoecimento.' },
    { t: 'A participação dos trabalhadores e de seus representantes é vedada nas ações de vigilância.', ok: false,
      why: 'Errada. O controle social e a participação dos trabalhadores integram a concepção da vigilância em saúde do trabalhador.' },
    { t: 'A vigilância não pode atuar em empresas que já possuem serviço especializado de segurança e medicina do trabalho.', ok: false,
      why: 'Errada. A existência de serviço interno não afasta a atuação do poder público.' }
  ],
  comentario: 'Vigilância em saúde do trabalhador = dado epidemiológico + ida ao ambiente + intervenção sobre a fonte, com participação dos trabalhadores. Atua antes e depois do agravo, e independe de a empresa ter serviço próprio.',
  pegadinha: 'Reduzi-la a análise de banco de dados é o erro que a esvazia — sem campo não há intervenção sobre o processo de trabalho.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ======================= 1.9 SINAN e notificação ======================= */
{ id: 'q-1.9-020', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um serviço de saúde ocupacional privado atende trabalhador com dermatose de provável origem ocupacional. Sobre a notificação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A notificação é obrigatória para serviços públicos e privados, decorre da suspeita e alimenta a vigilância epidemiológica, não substituindo a comunicação de acidente do trabalho.', ok: true,
      why: 'Correta. Alcance público e privado, notificação por suspeita e coexistência com a comunicação previdenciária são os três pontos que a banca cobra neste tema.' },
    { t: 'Serviços privados contratados por empresas estão dispensados de notificar.', ok: false,
      why: 'Errada. A obrigação alcança todos os serviços de saúde, independentemente da natureza jurídica.' },
    { t: 'A notificação exige confirmação diagnóstica por exame complementar.', ok: false,
      why: 'Errada. Exigir confirmação atrasa a vigilância; a suspeita basta nas hipóteses previstas.' },
    { t: 'A notificação substitui a comunicação de acidente do trabalho para fins previdenciários.', ok: false,
      why: 'Errada. São instrumentos com finalidades e destinatários distintos; um não dispensa o outro.' },
    { t: 'A subnotificação é fenômeno pouco relevante em agravos relacionados ao trabalho no Brasil.', ok: false,
      why: 'Errada. A subnotificação é reconhecidamente elevada e é uma das razões da criação de mecanismos como o nexo epidemiológico.' }
  ],
  comentario: 'Notificar: por suspeita, em serviço público ou privado, alimentando a vigilância. Comunicar acidente: instrumento previdenciário que garante direitos. Convivem. E a subnotificação é o problema estrutural do campo — foi ela que motivou o nexo epidemiológico.',
  pegadinha: 'A alternativa que dispensa o serviço privado é a prática mais comum na realidade e está errada.',
  refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] },

{ id: 'q-1.9-021', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os sistemas de informação em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Diferentes sistemas capturam recortes distintos da mesma realidade — agravos notificados, benefícios concedidos, mortalidade e informações de SST prestadas pelas empresas —, e a leitura conjunta oferece um panorama mais completo do que qualquer um isoladamente.', ok: true,
      why: 'Correta. Cada base tem cobertura e viés próprios; cruzar as fontes é o que reduz a cegueira produzida por olhar uma só.' },
    { t: 'Um único sistema de informação cobre integralmente os agravos relacionados ao trabalho no país.', ok: false,
      why: 'Errada. Não há base única com cobertura integral, e cada uma tem lacunas conhecidas.' },
    { t: 'Dados de benefícios previdenciários cobrem também os trabalhadores informais.', ok: false,
      why: 'Errada. A base previdenciária alcança quem tem cobertura contributiva, deixando de fora informais e autônomos sem contribuição.' },
    { t: 'A qualidade do preenchimento da ficha de notificação não influencia a utilidade do dado.', ok: false,
      why: 'Errada. Campo em branco ou preenchido de forma inespecífica inutiliza o registro para a análise.' },
    { t: 'A ocupação do paciente é informação dispensável nos sistemas de informação em saúde.', ok: false,
      why: 'Errada. É justamente a ocupação que permite identificar padrões e relacionar adoecimento e trabalho.' }
  ],
  comentario: 'Nenhuma base sozinha enxerga tudo: notificação de agravos, benefícios previdenciários, mortalidade e informações prestadas pelas empresas se complementam. E o campo "ocupação" é o que torna qualquer sistema de saúde utilizável para saúde do trabalhador.',
  pegadinha: 'A base previdenciária parece completa e exclui de saída todos os trabalhadores informais — recorte enorme no Brasil.',
  refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ============ 6.2 Inclusão da Pessoa com Deficiência =================== */
{ id: 'q-6.2-020', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa solicita laudo caracterizador de deficiência para fins de enquadramento na cota legal. Sobre esse documento, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O laudo deve caracterizar a deficiência de forma fundamentada, descrevendo a condição e suas repercussões funcionais, e a avaliação segue o modelo biopsicossocial, considerando também as barreiras do ambiente.', ok: true,
      why: 'Correta. O documento precisa demonstrar o enquadramento e suas repercussões, sob a perspectiva que integra condição de saúde e barreiras — e não apenas o dado anatômico.' },
    { t: 'Basta a indicação do código diagnóstico para caracterizar a deficiência.', ok: false,
      why: 'Errada. O código isolado não descreve repercussão funcional nem permite verificar o enquadramento.' },
    { t: 'A pessoa com deficiência deve ser alocada preferencialmente em funções sem qualquer exigência física ou cognitiva.', ok: false,
      why: 'Errada, e é discriminatório. A alocação segue as competências da pessoa e as adaptações razoáveis cabíveis, não a presunção de incapacidade.' },
    { t: 'A caracterização da deficiência equivale à declaração de incapacidade laborativa.', ok: false,
      why: 'Errada. Deficiência e incapacidade laborativa são conceitos distintos: a maioria das pessoas com deficiência é plenamente capaz para o trabalho.' },
    { t: 'Uma vez emitido o laudo, não cabe reavaliação da condição.', ok: false,
      why: 'Errada. Condições podem evoluir e as necessidades de adaptação podem mudar.' }
  ],
  comentario: 'A confusão central do tema: deficiência ≠ incapacidade. Deficiência é impedimento de longo prazo que, em interação com barreiras, pode obstruir a participação; incapacidade laborativa é outra avaliação. O laudo descreve a condição e as repercussões, sob modelo biopsicossocial.',
  pegadinha: 'Equiparar deficiência a incapacidade é o erro que sustenta a discriminação na contratação.',
  refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE'] },

{ id: 'q-6.2-021', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre acessibilidade e adaptação razoável no ambiente de trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A adaptação razoável consiste em modificações necessárias e adequadas que não imponham ônus desproporcional, e sua ausência pode configurar discriminação.', ok: true,
      why: 'Correta. É conceito jurídico com dois elementos: necessidade da adaptação e proporcionalidade do ônus. Negar adaptação viável é forma reconhecida de discriminação.' },
    { t: 'A acessibilidade se limita à eliminação de barreiras arquitetônicas.', ok: false,
      why: 'Errada. Abrange também barreiras comunicacionais, atitudinais, tecnológicas e de transporte.' },
    { t: 'A adaptação do posto é faculdade da empresa, sem repercussão jurídica se não realizada.', ok: false,
      why: 'Errada. A recusa de adaptação viável tem repercussão jurídica.' },
    { t: 'A pessoa com deficiência deve custear as adaptações de que necessita no posto de trabalho.', ok: false,
      why: 'Errada. Custos de adequação do ambiente de trabalho são do empregador, como qualquer outra medida de saúde e segurança.' },
    { t: 'Adaptações concedidas a um trabalhador criam precedente que obriga a empresa a concedê-las a todos.', ok: false,
      why: 'Errada. A adaptação é individualizada, conforme a necessidade concreta de cada pessoa.' }
  ],
  comentario: 'Adaptação razoável tem dois elementos: ser necessária e não impor ônus desproporcional. Acessibilidade vai além do arquitetônico — inclui comunicação, tecnologia, transporte e atitudes. E o custo é do empregador, nunca do trabalhador.',
  pegadinha: 'A alternativa do "precedente" reproduz um argumento de gestão comum e juridicamente irrelevante: adaptação é individual.',
  refs: ['Lei nº 13.146/2015', 'Decreto nº 5.296/2004', 'ANAMT — A inclusão de pessoas com deficiência'] },

/* ====== 6.3 Clínica aplicada à aptidão laboral e rastreamento ========== */
{ id: 'q-6.3-020', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 45 anos, operador de ponte rolante, relata episódio único de crise convulsiva tônico-clônica há dois meses, em investigação neurológica. Sobre a conduta do médico do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Cabe restrição temporária para atividades de risco enquanto a investigação não conclui e o controle não é demonstrado, com reavaliação posterior e decisão individualizada em articulação com o neurologista.', ok: true,
      why: 'Correta. O risco para si e para terceiros em atividade de elevação de cargas justifica a restrição temporária, sem que isso signifique inaptidão definitiva: a decisão se revisa conforme a evolução.' },
    { t: 'O trabalhador deve ser declarado definitivamente inapto para qualquer atividade laboral.', ok: false,
      why: 'Errada. Inaptidão definitiva e ampla a partir de episódio único em investigação é desproporcional e sem fundamento.' },
    { t: 'Nenhuma restrição é necessária, pois se trata de episódio único e ainda sem diagnóstico fechado.', ok: false,
      why: 'Errada. A ausência de diagnóstico fechado não elimina o risco atual em atividade que expõe terceiros.' },
    { t: 'A decisão cabe ao gestor, a quem o médico deve informar o diagnóstico para que avalie a permanência.', ok: false,
      why: 'Errada em dois pontos: a conclusão de aptidão é ato médico, e o diagnóstico não é informado ao gestor.' },
    { t: 'A restrição deve ser mantida indefinidamente, independentemente da evolução clínica.', ok: false,
      why: 'Errada. Restrição sem reavaliação transforma medida temporária em exclusão permanente injustificada.' }
  ],
  comentario: 'Aptidão em condição neurológica de risco: pese o risco concreto da tarefa — sobretudo para terceiros —, restrinja o necessário, defina prazo de reavaliação e articule com o especialista. Nem inaptidão ampla e definitiva, nem negação do risco.',
  pegadinha: 'Os dois extremos aparecem juntos, e o distrator mais perigoso é o que transfere a decisão ao gestor junto com o diagnóstico.',
  refs: ['Diretriz AMB — Epilepsia e Rastreamento', 'Código de Ética Médica'] },

{ id: 'q-6.3-021', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Motorista profissional relata sonolência diurna excessiva, ronco intenso e pausas respiratórias observadas pela companheira, com índice de massa corporal elevado. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A suspeita de apneia obstrutiva do sono deve ser investigada com prioridade, dado o risco de acidente na condução profissional, com restrição enquanto não houver diagnóstico e tratamento com adesão demonstrada.', ok: true,
      why: 'Correta. A associação entre apneia não tratada e risco de acidente em condutores profissionais é bem estabelecida, e a decisão de aptidão depende do tratamento com adesão comprovada, não apenas da prescrição.' },
    { t: 'A sonolência diurna em motoristas é achado esperado e não requer investigação.', ok: false,
      why: 'Errada. Normalizar a sonolência em quem dirige profissionalmente ignora um dos fatores de risco de acidente mais bem documentados.' },
    { t: 'O diagnóstico se firma exclusivamente pelo relato de ronco, dispensando exame específico.', ok: false,
      why: 'Errada. Ronco é sinal frequente e inespecífico; o diagnóstico exige exame apropriado.' },
    { t: 'Uma vez prescrito o tratamento, o trabalhador pode retornar imediatamente, independentemente da adesão.', ok: false,
      why: 'Errada. O que reduz o risco é o tratamento efetivamente utilizado, e a adesão precisa ser demonstrada.' },
    { t: 'A obesidade, por si, é critério suficiente para inaptidão em direção profissional.', ok: false,
      why: 'Errada. Avalia-se a repercussão funcional e o risco concreto, não o índice isoladamente.' }
  ],
  comentario: 'Em condutor profissional, sonolência excessiva é sinal de alerta que exige investigação prioritária. A aptidão depois depende de tratamento com ADESÃO DEMONSTRADA — prescrição sem uso não reduz risco. E nenhum índice antropométrico isolado decide aptidão.',
  pegadinha: 'A alternativa do retorno imediato após a prescrição confunde tratar com estar tratado.',
  refs: ['Ferreira Junior — Rastreamento de doenças', 'Greenberg — Occupational Emergency Medicine'] },

/* ================== 7.8 Lei Geral de Proteção de Dados ================= */
{ id: 'q-7.8-020', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma clínica de medicina ocupacional sofre incidente de segurança com possível exposição de dados de saúde de trabalhadores. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O incidente deve ser avaliado quanto ao risco e comunicado à autoridade competente e aos titulares quando puder acarretar risco ou dano relevante, além de exigir medidas de contenção e revisão dos controles.', ok: true,
      why: 'Correta. A lei prevê comunicação do incidente conforme o risco, e o dado de saúde, por ser sensível, eleva a gravidade da avaliação.' },
    { t: 'Por serem dados protegidos por sigilo médico, o incidente não precisa ser comunicado.', ok: false,
      why: 'Errada, e é inversão: o caráter sensível reforça, e não elimina, o dever de comunicar.' },
    { t: 'A comunicação aos titulares é sempre dispensável quando o incidente é contido rapidamente.', ok: false,
      why: 'Errada. A rapidez da contenção é fator na avaliação do risco, mas não dispensa automaticamente a comunicação.' },
    { t: 'A responsabilidade recai exclusivamente sobre o prestador de tecnologia contratado.', ok: false,
      why: 'Errada. Controlador e operador têm responsabilidades próprias, e o controlador não se exime por ter terceirizado a infraestrutura.' },
    { t: 'Dados de saúde de trabalhadores não se enquadram como dados pessoais sensíveis quando coletados em contexto ocupacional.', ok: false,
      why: 'Errada. O contexto de coleta não altera a natureza sensível do dado de saúde.' }
  ],
  comentario: 'Dado de saúde é sensível em qualquer contexto, inclusive ocupacional. Incidente de segurança exige avaliação de risco, contenção, revisão de controles e comunicação à autoridade e aos titulares conforme o risco. Terceirizar infraestrutura não transfere a responsabilidade do controlador.',
  pegadinha: 'Usar o sigilo médico como argumento para NÃO comunicar incidente inverte a lógica das duas normas.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-7.8-021', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o tratamento de dados de saúde no atestado de saúde ocupacional à luz da proteção de dados, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O documento deve conter apenas os dados necessários à sua finalidade — a conclusão sobre a aptidão e os riscos avaliados —, em aplicação do princípio da necessidade, sem incluir diagnóstico.', ok: true,
      why: 'Correta. O princípio da necessidade limita o tratamento ao mínimo indispensável à finalidade, o que converge exatamente com a regra ética de não revelar diagnóstico ao empregador.' },
    { t: 'O documento deve conter o histórico clínico completo, para maior transparência.', ok: false,
      why: 'Errada. Transparência não significa exposição: mais dado do que o necessário viola o princípio da necessidade e o sigilo.' },
    { t: 'A empresa, como controladora, pode determinar livremente quais dados de saúde constarão do documento.', ok: false,
      why: 'Errada. Nem o controlador pode ampliar o tratamento além da finalidade e das bases legais aplicáveis.' },
    { t: 'O trabalhador não tem direito de acessar os próprios dados de saúde mantidos pelo serviço.', ok: false,
      why: 'Errada. O acesso aos próprios dados é direito do titular, além de direito do paciente ao seu prontuário.' },
    { t: 'A guarda prolongada dos documentos é vedada pela legislação de proteção de dados.', ok: false,
      why: 'Errada. Há prazos legais de guarda a observar, e a obrigação legal é base para a conservação.' }
  ],
  comentario: 'Proteção de dados e ética médica apontam para o mesmo lugar no atestado ocupacional: só o necessário à finalidade — aptidão e riscos avaliados —, sem diagnóstico. O trabalhador tem direito de acessar os próprios dados, e a guarda prolongada é obrigação legal, não violação.',
  pegadinha: 'A alternativa do "histórico completo por transparência" usa um valor legítimo para justificar exatamente o excesso que as duas normas proíbem.',
  refs: ['LGPD — Lei nº 13.709/2018', 'NR-7', 'Código de Ética Médica'] }

);
