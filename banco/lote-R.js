/* Lote R — 6.1, 4.4, 2.2, 2.4, 2.6, 1.3. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-060', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame de retorno ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Além de liberar o trabalhador, verifica se as condições que produziram o afastamento foram corrigidas e se a função é compatível com o estado atual.', ok: true,
      why: 'Correta. Devolver ao mesmo posto sem verificar o que causou o afastamento é liberar para recidivar.' },
    { t: 'É obrigatório após afastamento prolongado e tem por objeto confirmar a alta dada pelo médico assistente, homologando-a para efeitos contratuais.', ok: false,
      why: 'Errada. O objeto é a compatibilidade entre o estado atual e as exigências daquela função.' },
    { t: 'É obrigatório após afastamento prolongado, e a alta previdenciária vincula sua conclusão, por ser decisão de autoridade em matéria de capacidade.', ok: false,
      why: 'Errada. São avaliações com objetos distintos; a conclusão ocupacional é autônoma e pode divergir.' },
    { t: 'É obrigatório após afastamento por doença comum, sendo dispensável quando o afastamento decorreu de acidente de trabalho já investigado pela empresa.', ok: false,
      why: 'Errada. É justamente no acidente que a verificação das condições do posto mais importa.' },
    { t: 'É obrigatório após afastamento prolongado, e constatada incompatibilidade cabe ao médico registrar o achado no prontuário e liberar o retorno.', ok: false,
      why: 'Errada. Cabe indicar restrições, propor readaptação e apontar as correções necessárias no posto.' }
  ],
  comentario: 'O retorno ao trabalho verifica duas coisas: o trabalhador e o posto. Alta previdenciária não vincula a conclusão ocupacional, e constatada incompatibilidade o médico indica restrição e correção — não só assina.',
  pegadinha: 'Tratar o exame de retorno como homologação da alta abandona a metade que olha para o ambiente.',
  refs: ['NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-6.1-061', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a conclusão de inaptidão em exame admissional, é CORRETO afirmar:',
  alts: [
    { t: 'Só se justifica quando a condição é incompatível com as exigências daquela função ou expõe o candidato a risco aumentado naquele posto de trabalho', ok: true,
      why: 'Correta. Avalia-se compatibilidade atual com a função, nunca probabilidade futura de adoecer.' },
    { t: 'Justifica-se quando a condição é incompatível com a função ou quando doença crônica, ainda que controlada, indique risco futuro de afastamento.', ok: false,
      why: 'Errada. Isso é discriminação: a avaliação é sobre a compatibilidade atual, não sobre custo futuro.' },
    { t: 'Justifica-se quando a condição é incompatível com a função ou quando qualquer exame do processo admissional apresentar resultado fora da referência.', ok: false,
      why: 'Errada. Exame sem pertinência ao risco da função não deveria sequer ter sido exigido.' },
    { t: 'Justifica-se quando há incompatibilidade com a função, e o motivo pode ser reservado ao candidato, por envolver informação clínica sensível.', ok: false,
      why: 'Errada. O candidato tem direito de conhecer sua condição de saúde e ser orientado sobre ela.' },
    { t: 'Justifica-se quando a condição é incompatível com as exigências da função, e essa conclusão vale para o conjunto das atividades laborais.', ok: false,
      why: 'Errada. A conclusão é sempre relativa à função avaliada; inapto para uma não é inapto para todas.' }
  ],
  comentario: 'Inaptidão admissional é relativa à função e ao risco daquele posto. Doença crônica controlada não é motivo, exame impertinente não é fundamento, e o candidato tem direito de ser informado e orientado sobre sua saúde.',
  pegadinha: 'Usar o admissional para filtrar quem pode adoecer no futuro é a forma mais comum de discriminação na área.',
  refs: ['NR-7', 'Lei nº 9.029/1995', 'Código de Ética Médica'] },

{ id: 'q-4.4-070', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a prevenção de dermatoses ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A prioridade é eliminar o contato; o creme de barreira tem papel limitado e a luva precisa ser quimicamente compatível com o agente.', ok: true,
      why: 'Correta. Luva escolhida só por ser impermeável permeia e mantém o agente contra a pele.' },
    { t: 'A prioridade é proteger a pele com creme de barreira antes do turno, medida de primeira linha por atuar diretamente na superfície exposta.', ok: false,
      why: 'Errada. Tem eficácia limitada e não substitui a eliminação do contato nem a luva adequada.' },
    { t: 'A prioridade é eliminar o contato, e qualquer luva impermeável cumpre a proteção, já que a barreira física impede o contato com o produto.', ok: false,
      why: 'Errada. A compatibilidade química define permeação e tempo de proteção do material.' },
    { t: 'A prioridade é eliminar o contato, e o uso contínuo de luvas ao longo de toda a jornada é a forma mais segura de manter a pele protegida.', ok: false,
      why: 'Errada. A oclusão prolongada macera a pele e favorece justamente a dermatite irritativa.' },
    { t: 'A prioridade é eliminar o contato e usar luva compatível, sendo a hidratação da pele medida cosmética, sem papel real na prevenção.', ok: false,
      why: 'Errada. A restauração da barreira cutânea é medida complementar reconhecida.' }
  ],
  comentario: 'Eliminar o contato primeiro; luva compatível com o agente depois; creme de barreira como complemento limitado. E atenção à oclusão: luva usada continuamente macera e produz dermatite por si.',
  pegadinha: 'Escolher luva por ser impermeável, sem checar compatibilidade química, deixa passar o agente sem o usuário perceber.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

{ id: 'q-4.4-071', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as neoplasias cutâneas de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição solar em trabalho a céu aberto é o principal fator, e a proteção começa por horário e sombreamento, com protetor solar por último.', ok: true,
      why: 'Correta. A medida organizacional reduz a dose; o protetor é o último recurso, e é custeado pelo empregador.' },
    { t: 'O câncer de pele decorre de predisposição individual e exposição recreativa, sem relação demonstrada com atividades ocupacionais a céu aberto.', ok: false,
      why: 'Errada. A radiação solar é agente cancerígeno reconhecido e a dose ocupacional é bem maior.' },
    { t: 'A exposição solar é o principal fator ocupacional, e o fornecimento de protetor solar de fator adequado é medida suficiente para o controle.', ok: false,
      why: 'Errada. Depende de reaplicação e cobertura; sombra e organização das tarefas vêm antes.' },
    { t: 'A exposição solar é o principal fator ocupacional, mas o protetor solar é item de uso pessoal, cuja aquisição cabe ao próprio trabalhador.', ok: false,
      why: 'Errada. Sendo medida de proteção necessária ao risco da atividade, é custeada pelo empregador.' },
    { t: 'A exposição solar é o principal fator ocupacional, e trabalhadores de pele mais escura dispensam as medidas por não desenvolverem a doença.', ok: false,
      why: 'Errada. O risco é menor, não ausente, e as medidas permanecem indicadas.' }
  ],
  comentario: 'Sol é exposição ocupacional para quem trabalha a céu aberto: organiza-se horário e sombra primeiro, depois vestimenta, e o protetor solar por último — fornecido pelo empregador, como qualquer medida de proteção.',
  pegadinha: 'Entregar protetor solar e considerar o risco resolvido pula as duas medidas que realmente reduzem a dose.',
  refs: ['IARC — radiação solar', 'INCA', 'NR-6'] },

{ id: 'q-2.2-070', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a campos eletromagnéticos e radiações não ionizantes, é CORRETO afirmar:',
  alts: [
    { t: 'Não ionizam moléculas, e o efeito depende da faixa de frequência: térmico na radiofrequência, ocular e cutâneo no caso do ultravioleta', ok: true,
      why: 'Correta. Não existe um efeito único das não ionizantes; a faixa de frequência define o que acontece.' },
    { t: 'Não ionizam moléculas e, por não carregarem energia suficiente para romper ligações químicas, não produzem efeito biológico relevante.', ok: false,
      why: 'Errada. Há efeitos reconhecidos, variáveis conforme a faixa de frequência.' },
    { t: 'Não ionizam moléculas, e o ultravioleta de origem ocupacional produz efeitos restritos à pele, poupando as estruturas oculares.', ok: false,
      why: 'Errada. A ceratoconjuntivite actínica, típica da soldagem, é efeito ocular reconhecido.' },
    { t: 'Não ionizam moléculas, e na soldagem o ultravioleta atinge apenas o próprio soldador, que mantém contato direto com o arco elétrico.', ok: false,
      why: 'Errada. Quem passa perto também é atingido, e é por isso que existem biombos e barreiras.' },
    { t: 'Não ionizam moléculas, e a intensidade recebida depende apenas da potência da fonte, sendo indiferente a distância do trabalhador.', ok: false,
      why: 'Errada. A distância é um dos principais determinantes da intensidade recebida.' }
  ],
  comentario: 'Não ionizantes: efeito depende da faixa. Na soldagem, o ultravioleta atinge olhos e pele — do soldador e de quem passa perto, o que é a razão dos biombos. Distância continua sendo medida de proteção.',
  pegadinha: 'Proteger apenas o soldador deixa o ajudante ao lado com a mesma queimadura ocular.',
  refs: ['ICNIRP', 'NR-15', 'ACGIH'] },

{ id: 'q-2.4-070', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a tuberculose como risco ocupacional em profissionais de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'O risco vem sobretudo do bacilífero ainda não diagnosticado, e o controle começa pelas medidas administrativas de identificação precoce', ok: true,
      why: 'Correta. Detecção precoce tem mais impacto que qualquer respirador; este vem por último.' },
    { t: 'O risco vem do contato com pacientes bacilíferos, e a proteção respiratória é a medida de maior impacto sobre a transmissão no serviço.', ok: false,
      why: 'Errada. Vem depois das medidas administrativas e de engenharia na hierarquia de controle.' },
    { t: 'O risco vem do contato com bacilíferos, e a vacinação com BCG confere ao profissional adulto proteção adequada contra a forma pulmonar.', ok: false,
      why: 'Errada. A proteção do BCG no adulto contra a forma pulmonar é limitada.' },
    { t: 'O risco vem do contato com bacilíferos e torna-se pouco relevante quando os casos de diagnóstico confirmado estão devidamente isolados.', ok: false,
      why: 'Errada. O risco maior está justamente nos casos ainda não diagnosticados, que circulam livremente.' },
    { t: 'O risco vem do bacilífero não diagnosticado, e a investigação de infecção latente nos profissionais expostos não tem indicação estabelecida.', ok: false,
      why: 'Errada. É parte da vigilância desse grupo, com conduta definida conforme o resultado.' }
  ],
  comentario: 'Tuberculose ocupacional: quem transmite é o bacilífero ainda não identificado. Por isso a detecção precoce vale mais que o respirador. BCG no adulto protege pouco contra a forma pulmonar, e a vigilância de infecção latente tem indicação.',
  pegadinha: 'Sentir-se protegido porque os casos confirmados estão isolados ignora a fonte real de transmissão.',
  refs: ['NR-32', 'Ministério da Saúde — controle da tuberculose', 'Protocolos de biossegurança'] },

{ id: 'q-2.6-070', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a origem e a natureza dos limites de exposição ocupacional adotados como referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'Derivam de evidência humana, experimentação animal e analogia entre substâncias, e são revistos periodicamente, quase sempre para baixo.', ok: true,
      why: 'Correta. O histórico é de reduções sucessivas conforme a evidência se acumula.' },
    { t: 'Derivam de evidência humana e experimental e, uma vez estabelecidos por consenso técnico, permanecem fixos como referência estável.', ok: false,
      why: 'Errada. São revisados periodicamente, e a tendência histórica é de redução dos valores.' },
    { t: 'Derivam exclusivamente de experimentação animal, com fatores de segurança aplicados para extrapolar o resultado ao ser humano.', ok: false,
      why: 'Errada. Combinam evidência humana, experimental e analogia estrutural entre substâncias.' },
    { t: 'Derivam de várias fontes de evidência, e o limite adotado por norma nacional acompanha automaticamente as revisões da referência internacional.', ok: false,
      why: 'Errada. A atualização normativa tem processo próprio e pode ficar defasada em relação à técnica.' },
    { t: 'Derivam de várias fontes de evidência, e adotar internamente critério mais rigoroso que o normativo caracteriza irregularidade técnica.', ok: false,
      why: 'Errada. Adotar critério mais protetor é sempre admissível e desejável.' }
  ],
  comentario: 'Limites nascem de evidência humana, animal e analogia, e são revisados — quase sempre para baixo. O limite normativo pode estar defasado em relação à referência técnica atual, e nada impede a empresa de adotar o critério mais protetor.',
  pegadinha: 'Tratar o número tabelado como fronteira estável entre seguro e inseguro ignora que ele já foi maior e provavelmente será menor.',
  refs: ['ACGIH — TLVs, documentação', 'NR-15', 'NHO — Fundacentro'] },

{ id: 'q-1.3-070', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o viés de informação em estudos de saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O viés de memória costuma ser diferencial, com o doente recordando melhor a exposição, o que tende a inflar a associação observada.', ok: true,
      why: 'Correta. Usar registros de exposição em vez de relato retrospectivo é a principal forma de atenuar.' },
    { t: 'O viés de memória decorre da imprecisão do relato e sempre atenua a associação, aproximando a estimativa do valor de nulidade.', ok: false,
      why: 'Errada. Quando é diferencial entre casos e controles, costuma inflar, não atenuar.' },
    { t: 'O viés de memória infla a associação, e a classificação errônea que ocorre igualmente nos dois grupos não afeta a estimativa obtida.', ok: false,
      why: 'Errada. A classificação errônea não diferencial tende a aproximar a estimativa do valor nulo.' },
    { t: 'O viés de memória infla a associação, problema que se corrige aumentando o tamanho da amostra até estabilizar a estimativa.', ok: false,
      why: 'Errada. Amostra maior reduz erro aleatório; viés é erro sistemático e não se corrige assim.' },
    { t: 'O viés de memória infla a associação, e recorrer a registros históricos de exposição não o reduz, por serem também incompletos.', ok: false,
      why: 'Errada. É uma das principais estratégias de mitigação, justamente por não depender da lembrança.' }
  ],
  comentario: 'Viés de informação tem duas faces: diferencial, que costuma inflar; e não diferencial, que costuma diluir em direção ao nulo. Nenhuma das duas se corrige aumentando a amostra — só o delineamento e registros melhores resolvem.',
  pegadinha: '"Aumentar a amostra resolve" só vale para erro aleatório, e viés é erro sistemático.',
  refs: ['Rothman — Epidemiologia Moderna'] },

{ id: 'q-1.3-071', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre risco relativo e risco atribuível, é CORRETO afirmar:',
  alts: [
    { t: 'O relativo mede força de associação e serve à causalidade; o atribuível mede impacto absoluto e orienta a prioridade das intervenções.', ok: true,
      why: 'Correta. Relativo alto sobre doença rara move pouco o total de casos na população.' },
    { t: 'O relativo mede a força da associação, e um valor elevado implica necessariamente grande impacto sobre o número de casos na população.', ok: false,
      why: 'Errada. Depende também da frequência da doença e da prevalência da exposição.' },
    { t: 'O relativo expressa o impacto absoluto da exposição, enquanto o atribuível é a medida que quantifica a força da associação causal.', ok: false,
      why: 'Errada. Está invertido: força de associação é o relativo; impacto absoluto é o atribuível.' },
    { t: 'O relativo mede força e o atribuível mede impacto, sendo as duas medidas intercambiáveis quando se trata de priorizar intervenções.', ok: false,
      why: 'Errada. A priorização se apoia no impacto absoluto, não na razão entre riscos.' },
    { t: 'O relativo mede força e o atribuível mede impacto, e a fração atribuível populacional independe de quão prevalente é a exposição.', ok: false,
      why: 'Errada. Depende diretamente da prevalência da exposição na população.' }
  ],
  comentario: 'Relativo para causalidade, atribuível para prioridade. Risco relativo alto sobre doença rara move pouco o total de casos; exposição frequente com risco relativo modesto pode mover muito.',
  pegadinha: 'Priorizar pela maior razão de risco desloca recursos para o problema de menor impacto populacional.',
  refs: ['Rothman — Epidemiologia Moderna', 'Fletcher — Epidemiologia Clínica'] }

);
