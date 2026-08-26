/* Fecha os últimos temas rasos: 1.3, 1.8, 1.9, 6.2, 6.3, 7.8
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============ 1.3 Epidemiologia Clínica e Bioestatística =============== */
{ id: 'q-1.3-020', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo comparou trabalhadores de uma indústria com a população geral e encontrou menor mortalidade entre os trabalhadores. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Reflete o efeito do trabalhador sadio, viés pelo qual quem trabalha é mais saudável.', ok: true,
      why: 'Correta. Pode mascarar efeitos nocivos reais da exposição estudada.' },
    { t: 'Demonstra que a exposição ocupacional daquela indústria tem efeito protetor sobre a mortalidade.', ok: false,
      why: 'Errada. O achado decorre do viés de seleção, não de proteção.' },
    { t: 'É confundimento residual por idade, corrigível apenas com o aumento do tamanho da amostra.', ok: false,
      why: 'Errada. Aumentar a amostra não corrige viés de seleção.' },
    { t: 'Reflete o trabalhador sadio, sendo a população geral sempre o comparador mais representativo.', ok: false,
      why: 'Errada. O comparador adequado é outro grupo de trabalhadores.' },
    { t: 'Reflete o trabalhador sadio, efeito que só ocorre em estudos de delineamento caso-controle.', ok: false,
      why: 'Errada. É típico de coortes ocupacionais comparadas à população geral.' }
  ],
  comentario: 'Efeito do trabalhador sadio: estar empregado já seleciona os mais saudáveis, de modo que comparar trabalhadores com a população geral subestima o dano ocupacional. A correção é escolher comparador interno — trabalhadores não expostos ao agente.',
  pegadinha: 'A alternativa que conclui "exposição protetora" é o desfecho que o viés produz, e é exatamente o que a questão testa se você reconhece.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-021', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar a relação entre uma exposição ocupacional e uma doença, o pesquisador observa que a associação desaparece após ajuste por tabagismo. Sobre esse achado, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O tabagismo atuou como confundidor: associa-se à exposição e ao desfecho sem ser intermediário.', ok: true,
      why: 'Correta. É a definição clássica de fator de confundimento.' },
    { t: 'O tabagismo é modificador de efeito, pois alterou a magnitude da associação após o ajuste feito.', ok: false,
      why: 'Errada. Modificação de efeito se avalia por estratificação, não por ajuste.' },
    { t: 'O achado indica viés de aferição na medida da exposição declarada pelos participantes do estudo.', ok: false,
      why: 'Errada. A mudança após ajuste caracteriza confundimento.' },
    { t: 'O tabagismo é confundidor, sendo o ajuste desnecessário quando a amostra do estudo é grande.', ok: false,
      why: 'Errada. Amostra grande não corrige confundimento.' },
    { t: 'O tabagismo é confundidor, e o ajuste seria igualmente correto se ele fosse etapa intermediária.', ok: false,
      why: 'Errada. Ajustar por mediador remove parte do próprio efeito.' }
  ],
  comentario: 'Confundimento: a terceira variável se associa à exposição, se associa independentemente ao desfecho e NÃO é elo intermediário. Modificação de efeito é outra coisa: a associação difere entre estratos e por isso deve ser relatada por estrato, não ajustada.',
  pegadinha: 'Confundimento e modificação de efeito são o par mais confundido do tema. Confundimento se ajusta; modificação de efeito se descreve.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-022', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um estudo relata risco relativo de 1,8 com intervalo de confiança de 95% entre 0,9 e 3,4. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Não é significativo ao nível adotado, pois o intervalo inclui o valor um.', ok: true,
      why: 'Correta. Isso não equivale a demonstrar ausência de associação.' },
    { t: 'O resultado demonstra que não existe associação entre a exposição e o desfecho investigado.', ok: false,
      why: 'Errada. Ausência de significância não é evidência de ausência de efeito.' },
    { t: 'Não é significativo, indicando o intervalo amplo que o estudo tem alto poder estatístico.', ok: false,
      why: 'Errada. Intervalo amplo indica imprecisão e baixo poder.' },
    { t: 'É significativo, pois o ponto estimado maior que um comprova a associação entre os fatores.', ok: false,
      why: 'Errada. O intervalo inclui o valor nulo.' },
    { t: 'Não é significativo, sendo o valor de p correspondente necessariamente menor que cinco centésimos.', ok: false,
      why: 'Errada. Seria maior, coerente com o intervalo que inclui o nulo.' }
  ],
  comentario: 'Leia o intervalo, não só o ponto: se cruza a unidade, não há significância ao nível adotado. E guarde a distinção que a banca cobra — não significativo não é sinônimo de ausência de efeito, sobretudo com intervalo largo, que denuncia imprecisão.',
  pegadinha: 'Converter "não significativo" em "não há associação" é o erro de interpretação mais comum em leitura de artigo.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

/* ============= 1.8 Vigilância em Saúde do Trabalhador ================== */
{ id: 'q-1.8-020', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao investigar um acidente de trabalho fatal em uma obra, a equipe de vigilância opta por analisar as decisões de planejamento, o cronograma e a pressão de prazo, além das condições do posto. Sobre essa abordagem, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve buscar causas técnicas, organizacionais e gerenciais, e não só o comportamento da vítima.', ok: true,
      why: 'Correta. Limitar-se à vítima impede corrigir os determinantes do evento.' },
    { t: 'Deve concentrar-se em identificar o erro cometido pelo trabalhador acidentado durante a tarefa.', ok: false,
      why: 'Errada. É onde a investigação deve continuar, não parar.' },
    { t: 'Deve buscar causas técnicas, não integrando decisões gerenciais e de planejamento o seu escopo.', ok: false,
      why: 'Errada. São as condições latentes que tornaram o evento provável.' },
    { t: 'Deve buscar causas em vários níveis, aguardando o encerramento do inquérito policial para iniciar.', ok: false,
      why: 'Errada. A investigação técnica é imediata e independente.' },
    { t: 'Deve buscar causas, não cabendo à vigilância exigir medidas ao final, mas apenas recomendá-las.', ok: false,
      why: 'Errada. A vigilância tem poder de exigência no âmbito de sua competência.' }
  ],
  comentario: 'Investigação de acidente grave e fatal olha em camadas: o evento imediato, as condições do posto, a organização do trabalho e as decisões gerenciais. Ela é sanitária, independente das outras esferas, e pode gerar exigências — não só recomendações.',
  pegadinha: 'Aguardar o inquérito policial é a demora que mais compromete a prevenção, e soa prudente.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.8-021', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os instrumentos da vigilância em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Combina análise de morbimortalidade com inspeção dos ambientes e processos de trabalho.', ok: true,
      why: 'Correta. Articula a informação epidemiológica à intervenção sobre a fonte.' },
    { t: 'Restringe-se à análise dos bancos de dados disponíveis, sem atuação em campo nos estabelecimentos.', ok: false,
      why: 'Errada. A inspeção dos ambientes é parte constitutiva da ação.' },
    { t: 'Combina dados e inspeção, atuando apenas após a ocorrência de agravos efetivamente notificados.', ok: false,
      why: 'Errada. Atua também de forma antecipatória sobre os riscos.' },
    { t: 'Combina dados e inspeção, sendo vedada a participação de trabalhadores e seus representantes.', ok: false,
      why: 'Errada. A participação é elemento estruturante das ações.' },
    { t: 'Combina dados e inspeção, não podendo atuar em empresas que já possuem serviço especializado.', ok: false,
      why: 'Errada. A existência do serviço não afasta a vigilância pública.' }
  ],
  comentario: 'Vigilância em saúde do trabalhador = dado epidemiológico + ida ao ambiente + intervenção sobre a fonte, com participação dos trabalhadores. Atua antes e depois do agravo, e independe de a empresa ter serviço próprio.',
  pegadinha: 'Reduzi-la a análise de banco de dados é o erro que a esvazia — sem campo não há intervenção sobre o processo de trabalho.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ======================= 1.9 SINAN e notificação ======================= */
{ id: 'q-1.9-020', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um serviço de saúde ocupacional privado atende trabalhador com dermatose de provável origem ocupacional. Sobre a notificação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É obrigatória para serviços públicos e privados, decorre da suspeita e alimenta a vigilância.', ok: true,
      why: 'Correta. Não substitui a comunicação de acidente do trabalho.' },
    { t: 'É obrigatória, ficando dispensados os serviços privados contratados por empresas empregadoras.', ok: false,
      why: 'Errada. Alcança também os serviços privados.' },
    { t: 'É obrigatória, exigindo confirmação diagnóstica por exame complementar antes de ser realizada.', ok: false,
      why: 'Errada. A notificação se faz por suspeita.' },
    { t: 'É obrigatória e substitui a comunicação de acidente do trabalho para fins previdenciários.', ok: false,
      why: 'Errada. São documentos distintos, com finalidades próprias.' },
    { t: 'É obrigatória, sendo a subnotificação fenômeno pouco relevante nesses agravos no país.', ok: false,
      why: 'Errada. É reconhecida e substancial.' }
  ],
  comentario: 'Notificar: por suspeita, em serviço público ou privado, alimentando a vigilância. Comunicar acidente: instrumento previdenciário que garante direitos. Convivem. E a subnotificação é o problema estrutural do campo — foi ela que motivou o nexo epidemiológico.',
  pegadinha: 'A alternativa que dispensa o serviço privado é a prática mais comum na realidade e está errada.',
  refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] },

{ id: 'q-1.9-021', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os sistemas de informação em saúde do trabalhador, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Cada sistema captura um recorte, e a leitura conjunta oferece panorama mais completo.', ok: true,
      why: 'Correta. Notificação, benefícios, mortalidade e informações de SST se complementam.' },
    { t: 'Um único sistema de informação cobre integralmente os agravos relacionados ao trabalho no país.', ok: false,
      why: 'Errada. Cada base captura um recorte distinto da realidade.' },
    { t: 'Cada sistema captura um recorte, cobrindo os dados de benefícios também os trabalhadores informais.', ok: false,
      why: 'Errada. Alcançam apenas os segurados contribuintes.' },
    { t: 'Cada sistema captura um recorte, sem que a qualidade do preenchimento afete a utilidade do dado.', ok: false,
      why: 'Errada. Campos em branco inutilizam o registro para a análise.' },
    { t: 'Cada sistema captura um recorte, sendo a ocupação informação dispensável nesses sistemas.', ok: false,
      why: 'Errada. É o campo que permite a análise em saúde do trabalhador.' }
  ],
  comentario: 'Nenhuma base sozinha enxerga tudo: notificação de agravos, benefícios previdenciários, mortalidade e informações prestadas pelas empresas se complementam. E o campo "ocupação" é o que torna qualquer sistema de saúde utilizável para saúde do trabalhador.',
  pegadinha: 'A base previdenciária parece completa e exclui de saída todos os trabalhadores informais — recorte enorme no Brasil.',
  refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

/* ============ 6.2 Inclusão da Pessoa com Deficiência =================== */
{ id: 'q-6.2-020', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa solicita laudo caracterizador de deficiência para fins de enquadramento na cota legal. Sobre esse documento, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve caracterizar a deficiência de forma fundamentada, com repercussões funcionais descritas.', ok: true,
      why: 'Correta. A avaliação é biopsicossocial e considera as barreiras do ambiente.' },
    { t: 'Basta a indicação do código diagnóstico do trabalhador para caracterizar a deficiência no laudo.', ok: false,
      why: 'Errada. Exige descrever impedimento e repercussão funcional.' },
    { t: 'Deve caracterizar a deficiência e indicar alocação em funções sem exigência física ou cognitiva.', ok: false,
      why: 'Errada. A alocação decorre da compatibilidade, não de exclusão a priori.' },
    { t: 'Deve caracterizar a deficiência, o que equivale à declaração de incapacidade laborativa do avaliado.', ok: false,
      why: 'Errada. São conceitos distintos e não se equivalem.' },
    { t: 'Deve caracterizar a deficiência, não cabendo reavaliação da condição uma vez emitido o laudo.', ok: false,
      why: 'Errada. Condições e barreiras mudam e comportam reavaliação.' }
  ],
  comentario: 'A confusão central do tema: deficiência ≠ incapacidade. Deficiência é impedimento de longo prazo que, em interação com barreiras, pode obstruir a participação; incapacidade laborativa é outra avaliação. O laudo descreve a condição e as repercussões, sob modelo biopsicossocial.',
  pegadinha: 'Equiparar deficiência a incapacidade é o erro que sustenta a discriminação na contratação.',
  refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE'] },

{ id: 'q-6.2-021', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre acessibilidade e adaptação razoável no ambiente de trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'São modificações necessárias e adequadas que não imponham ônus desproporcional à empresa.', ok: true,
      why: 'Correta. Sua ausência injustificada pode configurar discriminação.' },
    { t: 'São medidas de acessibilidade, limitadas à eliminação das barreiras arquitetônicas do local.', ok: false,
      why: 'Errada. Abrangem comunicação, tecnologia assistiva e organização do trabalho.' },
    { t: 'São modificações necessárias, mas faculdade da empresa, sem repercussão jurídica se não feitas.', ok: false,
      why: 'Errada. A recusa injustificada configura discriminação.' },
    { t: 'São modificações necessárias, devendo a pessoa com deficiência custear as que necessita no posto.', ok: false,
      why: 'Errada. O custo cabe ao empregador, dentro do limite da proporcionalidade.' },
    { t: 'São modificações necessárias, criando precedente que obriga a estendê-las a todos os empregados.', ok: false,
      why: 'Errada. A adaptação é individualizada conforme a necessidade.' }
  ],
  comentario: 'Adaptação razoável tem dois elementos: ser necessária e não impor ônus desproporcional. Acessibilidade vai além do arquitetônico — inclui comunicação, tecnologia, transporte e atitudes. E o custo é do empregador, nunca do trabalhador.',
  pegadinha: 'A alternativa do "precedente" reproduz um argumento de gestão comum e juridicamente irrelevante: adaptação é individual.',
  refs: ['Lei nº 13.146/2015', 'Decreto nº 5.296/2004', 'ANAMT — A inclusão de pessoas com deficiência'] },

/* ====== 6.3 Clínica aplicada à aptidão laboral e rastreamento ========== */
{ id: 'q-6.3-020', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 45 anos, operador de ponte rolante, relata episódio único de crise convulsiva tônico-clônica há dois meses, em investigação neurológica. Sobre a conduta do médico do trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Cabe restrição temporária às atividades de risco enquanto não há investigação e controle.', ok: true,
      why: 'Correta. Com reavaliação e decisão individualizada junto ao neurologista.' },
    { t: 'O trabalhador deve ser declarado definitivamente inapto para qualquer atividade laboral exercida.', ok: false,
      why: 'Errada. A maioria das funções não apresenta risco incompatível.' },
    { t: 'Nenhuma restrição é necessária, por se tratar de episódio único e sem diagnóstico fechado ainda.', ok: false,
      why: 'Errada. Em atividade de risco, a restrição temporária é prudente.' },
    { t: 'A decisão cabe ao gestor, a quem o médico deve informar o diagnóstico para avaliar a permanência.', ok: false,
      why: 'Errada. É decisão técnica médica, e o diagnóstico é sigiloso.' },
    { t: 'Cabe restrição, que deve ser mantida indefinidamente, seja qual for a evolução clínica do caso.', ok: false,
      why: 'Errada. A restrição é temporária e sujeita a reavaliação.' }
  ],
  comentario: 'Aptidão em condição neurológica de risco: pese o risco concreto da tarefa — sobretudo para terceiros —, restrinja o necessário, defina prazo de reavaliação e articule com o especialista. Nem inaptidão ampla e definitiva, nem negação do risco.',
  pegadinha: 'Os dois extremos aparecem juntos, e o distrator mais perigoso é o que transfere a decisão ao gestor junto com o diagnóstico.',
  refs: ['Diretriz AMB — Epilepsia e Rastreamento', 'Código de Ética Médica'] },

{ id: 'q-6.3-021', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Motorista profissional relata sonolência diurna excessiva, ronco intenso e pausas respiratórias observadas pela companheira, com índice de massa corporal elevado. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A suspeita de apneia deve ser investigada com prioridade, pelo risco de acidente na condução.', ok: true,
      why: 'Correta. Com restrição até diagnóstico e tratamento com adesão demonstrada.' },
    { t: 'A sonolência diurna em motoristas é achado esperado da atividade e não requer investigação.', ok: false,
      why: 'Errada. É um dos preditores mais relevantes de acidente.' },
    { t: 'A suspeita deve ser investigada, firmando-se o diagnóstico pelo relato de ronco, sem exame.', ok: false,
      why: 'Errada. O diagnóstico exige exame específico do sono.' },
    { t: 'A suspeita deve ser investigada, podendo o trabalhador retornar assim que o tratamento é prescrito.', ok: false,
      why: 'Errada. É a adesão demonstrada que sustenta a aptidão.' },
    { t: 'A suspeita deve ser investigada, sendo a obesidade, por si, critério de inaptidão para a direção.', ok: false,
      why: 'Errada. É fator de risco, não critério de inaptidão.' }
  ],
  comentario: 'Em condutor profissional, sonolência excessiva é sinal de alerta que exige investigação prioritária. A aptidão depois depende de tratamento com ADESÃO DEMONSTRADA — prescrição sem uso não reduz risco. E nenhum índice antropométrico isolado decide aptidão.',
  pegadinha: 'A alternativa do retorno imediato após a prescrição confunde tratar com estar tratado.',
  refs: ['Ferreira Junior — Rastreamento de doenças', 'Greenberg — Occupational Emergency Medicine'] },

/* ================== 7.8 Lei Geral de Proteção de Dados ================= */
{ id: 'q-7.8-020', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma clínica de medicina ocupacional sofre incidente de segurança com possível exposição de dados de saúde de trabalhadores. Sobre a conduta, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve ser avaliado quanto ao risco e comunicado à autoridade e aos titulares quando houver risco.', ok: true,
      why: 'Correta. Exige ainda contenção e revisão dos controles adotados.' },
    { t: 'Por serem dados protegidos por sigilo médico, o incidente não precisa ser comunicado a ninguém.', ok: false,
      why: 'Errada. O sigilo não afasta o dever de comunicar o incidente.' },
    { t: 'Deve ser avaliado, sendo dispensável comunicar aos titulares quando o incidente é contido rápido.', ok: false,
      why: 'Errada. A comunicação depende do risco, não da rapidez da contenção.' },
    { t: 'Deve ser avaliado, recaindo a responsabilidade exclusivamente sobre o prestador de tecnologia.', ok: false,
      why: 'Errada. A empresa controladora mantém responsabilidades próprias.' },
    { t: 'Deve ser avaliado, não sendo sensíveis os dados de saúde coletados em contexto ocupacional.', ok: false,
      why: 'Errada. São dados sensíveis, qualquer que seja o contexto.' }
  ],
  comentario: 'Dado de saúde é sensível em qualquer contexto, inclusive ocupacional. Incidente de segurança exige avaliação de risco, contenção, revisão de controles e comunicação à autoridade e aos titulares conforme o risco. Terceirizar infraestrutura não transfere a responsabilidade do controlador.',
  pegadinha: 'Usar o sigilo médico como argumento para NÃO comunicar incidente inverte a lógica das duas normas.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-7.8-021', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o tratamento de dados de saúde no atestado de saúde ocupacional à luz da proteção de dados, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve conter apenas o necessário à finalidade: conclusão de aptidão e riscos avaliados.', ok: true,
      why: 'Correta. É a aplicação do princípio da necessidade, sem incluir diagnóstico.' },
    { t: 'Deve conter o histórico clínico completo do trabalhador, para maior transparência do documento.', ok: false,
      why: 'Errada. Viola a minimização e o sigilo do dado clínico.' },
    { t: 'Deve conter o necessário, podendo a empresa determinar livremente quais dados de saúde constarão.', ok: false,
      why: 'Errada. O conteúdo é definido tecnicamente e limitado pelo sigilo.' },
    { t: 'Deve conter o necessário, não tendo o trabalhador direito de acessar os próprios dados de saúde.', ok: false,
      why: 'Errada. O acesso do titular é direito reconhecido.' },
    { t: 'Deve conter o necessário, sendo a guarda prolongada dos documentos vedada pela lei de dados.', ok: false,
      why: 'Errada. Prazos legais de guarda prevalecem e são longos nesse campo.' }
  ],
  comentario: 'Proteção de dados e ética médica apontam para o mesmo lugar no atestado ocupacional: só o necessário à finalidade — aptidão e riscos avaliados —, sem diagnóstico. O trabalhador tem direito de acessar os próprios dados, e a guarda prolongada é obrigação legal, não violação.',
  pegadinha: 'A alternativa do "histórico completo por transparência" usa um valor legítimo para justificar exatamente o excesso que as duas normas proíbem.',
  refs: ['LGPD — Lei nº 13.709/2018', 'NR-7', 'Código de Ética Médica'] }

);
