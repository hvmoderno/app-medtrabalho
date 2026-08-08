/* Lote R — 6.1, 4.4, 2.2, 2.4, 2.6, 1.3. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-060', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame de retorno ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'É obrigatório após afastamento por período igual ou superior ao previsto em norma por doença ou acidente, e sua função vai além da liberação: verifica se as condições que produziram o afastamento foram corrigidas e se a função é compatível com o estado atual.', ok: true,
      why: 'Correta. Retorno sem verificar o que causou o afastamento é liberação para recidivar.' },
    { t: 'Sua função se limita a confirmar a alta do médico assistente.', ok: false,
      why: 'Errada. O objeto é a compatibilidade entre estado atual e exigências da função.' },
    { t: 'A alta previdenciária vincula a conclusão do exame de retorno.', ok: false,
      why: 'Errada. São avaliações com objetos distintos e a conclusão ocupacional é autônoma.' },
    { t: 'O exame de retorno é dispensável em afastamentos por acidente de trabalho.', ok: false,
      why: 'Errada. É justamente onde a verificação do posto é mais necessária.' },
    { t: 'Constatada incompatibilidade, cabe ao médico apenas registrar e liberar.', ok: false,
      why: 'Errada. Cabe indicar restrições, propor readaptação e apontar as correções necessárias no posto.' }
  ],
  comentario: 'O retorno ao trabalho verifica duas coisas: o trabalhador e o posto. Alta previdenciária não vincula a conclusão ocupacional, e constatada incompatibilidade o médico indica restrição e correção — não só assina.',
  pegadinha: 'Tratar o exame de retorno como homologação da alta abandona a metade que olha para o ambiente.',
  refs: ['NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-6.1-061', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a conclusão de inaptidão em exame admissional, é CORRETO afirmar:',
  alts: [
    { t: 'Ela só se justifica quando a condição de saúde é incompatível com as exigências específicas da função pretendida ou expõe o candidato a risco aumentado naquele posto — nunca como triagem de candidatos com maior probabilidade futura de adoecimento.', ok: true,
      why: 'Correta. O exame avalia compatibilidade com a função, não risco futuro genérico de custo.' },
    { t: 'Condições crônicas controladas justificam a inaptidão por risco futuro de afastamento.', ok: false,
      why: 'Errada. É discriminação: a avaliação é sobre a compatibilidade atual com a função.' },
    { t: 'A inaptidão pode ser fundamentada em resultado de exame não relacionado à função.', ok: false,
      why: 'Errada. Exame sem pertinência ao risco da função não deve sequer ser exigido.' },
    { t: 'O candidato não precisa ser informado do motivo da inaptidão.', ok: false,
      why: 'Errada. Ele deve ser informado de sua condição de saúde e orientado.' },
    { t: 'A inaptidão para uma função implica inaptidão para o trabalho em geral.', ok: false,
      why: 'Errada. A conclusão é sempre relativa à função avaliada.' }
  ],
  comentario: 'Inaptidão admissional é relativa à função e ao risco daquele posto. Doença crônica controlada não é motivo, exame impertinente não é fundamento, e o candidato tem direito de ser informado e orientado sobre sua saúde.',
  pegadinha: 'Usar o admissional para filtrar quem pode adoecer no futuro é a forma mais comum de discriminação na área.',
  refs: ['NR-7', 'Lei nº 9.029/1995', 'Código de Ética Médica'] },

{ id: 'q-4.4-070', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a prevenção de dermatoses ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'A prioridade é eliminar ou substituir o agente e reduzir o trabalho úmido e o contato; cremes de barreira têm papel limitado e não substituem luvas adequadas ao agente, cuja escolha depende da compatibilidade química do material.', ok: true,
      why: 'Correta. Luva errada permeia e mantém o agente em contato com a pele.' },
    { t: 'O creme de barreira é a medida preventiva de primeira linha.', ok: false,
      why: 'Errada. Tem eficácia limitada e não substitui a eliminação do contato ou a luva adequada.' },
    { t: 'Qualquer luva impermeável serve para qualquer agente químico.', ok: false,
      why: 'Errada. A compatibilidade química define permeação e tempo de proteção do material.' },
    { t: 'O uso contínuo de luvas não traz risco à pele.', ok: false,
      why: 'Errada. A oclusão prolongada macera a pele e favorece a dermatite irritativa.' },
    { t: 'A hidratação da pele não tem papel na prevenção.', ok: false,
      why: 'Errada. A restauração da barreira cutânea é medida complementar reconhecida.' }
  ],
  comentario: 'Eliminar o contato primeiro; luva compatível com o agente depois; creme de barreira como complemento limitado. E atenção à oclusão: luva usada continuamente macera e produz dermatite por si.',
  pegadinha: 'Escolher luva por ser impermeável, sem checar compatibilidade química, deixa passar o agente sem o usuário perceber.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

{ id: 'q-4.4-071', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as neoplasias cutâneas de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição solar crônica em trabalho a céu aberto é o principal fator ocupacional, havendo também agentes químicos com potencial carcinogênico cutâneo — e a proteção envolve organização das tarefas por horário, sombreamento, vestimenta e protetor solar fornecido pelo empregador.', ok: true,
      why: 'Correta. A medida organizacional vem antes do protetor solar, que é o último recurso.' },
    { t: 'O câncer de pele não tem relação com exposições ocupacionais.', ok: false,
      why: 'Errada. Exposição solar ocupacional e agentes químicos são fatores reconhecidos.' },
    { t: 'O protetor solar é medida suficiente para trabalhadores expostos ao sol.', ok: false,
      why: 'Errada. Depende de reaplicação e cobertura; sombreamento e organização das tarefas vêm antes.' },
    { t: 'O fornecimento de protetor solar não é obrigação do empregador.', ok: false,
      why: 'Errada. Sendo medida de proteção necessária ao risco da atividade, é custeada pelo empregador.' },
    { t: 'Trabalhadores de pele mais escura não requerem medidas de proteção solar ocupacional.', ok: false,
      why: 'Errada. O risco é menor, não ausente, e as medidas permanecem indicadas.' }
  ],
  comentario: 'Sol é exposição ocupacional para quem trabalha a céu aberto: organiza-se horário e sombra primeiro, depois vestimenta, e o protetor solar por último — fornecido pelo empregador, como qualquer medida de proteção.',
  pegadinha: 'Entregar protetor solar e considerar o risco resolvido pula as duas medidas que realmente reduzem a dose.',
  refs: ['IARC — radiação solar', 'INCA', 'NR-6'] },

{ id: 'q-2.2-070', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a campos eletromagnéticos e radiações não ionizantes, é CORRETO afirmar:',
  alts: [
    { t: 'Diferentemente das ionizantes, não produzem ionização de moléculas, e seus efeitos reconhecidos dependem da faixa de frequência — térmicos e de estimulação em radiofrequência e baixas frequências, e efeitos oculares e cutâneos na faixa ultravioleta.', ok: true,
      why: 'Correta. O efeito depende da faixa; não existe um efeito único das não ionizantes.' },
    { t: 'Radiações não ionizantes não produzem qualquer efeito biológico relevante.', ok: false,
      why: 'Errada. Há efeitos reconhecidos, variáveis conforme a faixa de frequência.' },
    { t: 'O ultravioleta ocupacional afeta apenas a pele.', ok: false,
      why: 'Errada. A ceratoconjuntivite actínica, típica da soldagem, é efeito ocular reconhecido.' },
    { t: 'A proteção contra ultravioleta em soldagem se limita ao próprio soldador.', ok: false,
      why: 'Errada. Trabalhadores próximos também são atingidos, o que justifica biombos e barreiras.' },
    { t: 'A intensidade da exposição independe da distância da fonte.', ok: false,
      why: 'Errada. A distância é um dos principais determinantes da intensidade recebida.' }
  ],
  comentario: 'Não ionizantes: efeito depende da faixa. Na soldagem, o ultravioleta atinge olhos e pele — do soldador e de quem passa perto, o que é a razão dos biombos. Distância continua sendo medida de proteção.',
  pegadinha: 'Proteger apenas o soldador deixa o ajudante ao lado com a mesma queimadura ocular.',
  refs: ['ICNIRP', 'NR-15', 'ACGIH'] },

{ id: 'q-2.4-070', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a tuberculose como risco ocupacional em profissionais de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'O risco se concentra em ambientes com pacientes bacilíferos não diagnosticados, e o controle depende de medidas administrativas — identificação e isolamento precoces —, de engenharia com ventilação e pressão negativa, e só então de proteção respiratória adequada.', ok: true,
      why: 'Correta. A medida administrativa de detecção precoce é a de maior impacto.' },
    { t: 'A proteção respiratória é a medida de maior impacto no controle da transmissão.', ok: false,
      why: 'Errada. Vem depois das medidas administrativas e de engenharia na hierarquia.' },
    { t: 'A vacinação com BCG protege adequadamente o profissional adulto contra a forma pulmonar.', ok: false,
      why: 'Errada. Sua proteção no adulto contra a forma pulmonar é limitada.' },
    { t: 'O risco é irrelevante quando os pacientes com diagnóstico confirmado estão isolados.', ok: false,
      why: 'Errada. O risco maior vem justamente dos casos ainda não diagnosticados.' },
    { t: 'A investigação de infecção latente em profissionais expostos não tem indicação.', ok: false,
      why: 'Errada. É parte da vigilância desse grupo, com conduta definida conforme o resultado.' }
  ],
  comentario: 'Tuberculose ocupacional: quem transmite é o bacilífero ainda não identificado. Por isso a detecção precoce vale mais que o respirador. BCG no adulto protege pouco contra a forma pulmonar, e a vigilância de infecção latente tem indicação.',
  pegadinha: 'Sentir-se protegido porque os casos confirmados estão isolados ignora a fonte real de transmissão.',
  refs: ['NR-32', 'Ministério da Saúde — controle da tuberculose', 'Protocolos de biossegurança'] },

{ id: 'q-2.6-070', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a origem e a natureza dos limites de exposição ocupacional adotados como referência técnica, é CORRETO afirmar:',
  alts: [
    { t: 'São valores derivados de estudos em populações trabalhadoras, experimentação animal e analogia entre substâncias, revisados periodicamente à luz de novas evidências — e sua revisão para baixo ao longo do tempo é a regra, não a exceção.', ok: true,
      why: 'Correta. O histórico dos limites é de sucessivas reduções conforme a evidência se acumula.' },
    { t: 'São valores fixos, definidos uma vez e não sujeitos a revisão.', ok: false,
      why: 'Errada. São revisados periodicamente, e a tendência histórica é de redução.' },
    { t: 'Derivam exclusivamente de estudos experimentais em animais.', ok: false,
      why: 'Errada. Combinam evidência humana, experimental e analogia estrutural.' },
    { t: 'Um limite adotado por norma nacional acompanha automaticamente as revisões internacionais.', ok: false,
      why: 'Errada. A atualização normativa depende de processo próprio e pode ficar defasada em relação à referência técnica.' },
    { t: 'A adoção de limite mais rigoroso que o normativo é irregular.', ok: false,
      why: 'Errada. Adotar critério mais protetor é sempre admissível.' }
  ],
  comentario: 'Limites nascem de evidência humana, animal e analogia, e são revisados — quase sempre para baixo. O limite normativo pode estar defasado em relação à referência técnica atual, e nada impede a empresa de adotar o critério mais protetor.',
  pegadinha: 'Tratar o número tabelado como fronteira estável entre seguro e inseguro ignora que ele já foi maior e provavelmente será menor.',
  refs: ['ACGIH — TLVs, documentação', 'NR-15', 'NHO — Fundacentro'] },

{ id: 'q-1.3-070', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o viés de informação em estudos de saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O viés de memória tende a ser diferencial quando os doentes recordam a exposição com mais detalhe que os não doentes, o que pode superestimar a associação — problema atenuado pelo uso de registros de exposição em vez de relato retrospectivo.', ok: true,
      why: 'Correta. Recordação diferencial entre casos e controles distorce a medida de associação.' },
    { t: 'O viés de memória sempre atenua a associação observada.', ok: false,
      why: 'Errada. Quando diferencial, costuma inflar a associação.' },
    { t: 'A classificação incorreta da exposição não afeta os resultados se ocorrer igualmente nos dois grupos.', ok: false,
      why: 'Errada. A classificação errônea não diferencial tende a aproximar a estimativa do valor nulo.' },
    { t: 'Aumentar o tamanho da amostra corrige o viés de informação.', ok: false,
      why: 'Errada. Amostra maior reduz erro aleatório, não erro sistemático.' },
    { t: 'O uso de registros históricos de exposição não reduz o viés de memória.', ok: false,
      why: 'Errada. É uma das principais estratégias de mitigação.' }
  ],
  comentario: 'Viés de informação tem duas faces: diferencial, que costuma inflar; e não diferencial, que costuma diluir em direção ao nulo. Nenhuma das duas se corrige aumentando a amostra — só o delineamento e registros melhores resolvem.',
  pegadinha: '"Aumentar a amostra resolve" só vale para erro aleatório, e viés é erro sistemático.',
  refs: ['Rothman — Epidemiologia Moderna'] },

{ id: 'q-1.3-071', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre risco relativo e risco atribuível, é CORRETO afirmar:',
  alts: [
    { t: 'O risco relativo expressa a força da associação e serve à discussão de causalidade, enquanto o risco atribuível expressa o impacto absoluto e orienta a priorização de intervenções — de modo que um risco relativo alto sobre doença rara pode ter impacto populacional pequeno.', ok: true,
      why: 'Correta. Força de associação e impacto populacional são coisas distintas.' },
    { t: 'Risco relativo alto implica necessariamente grande impacto populacional.', ok: false,
      why: 'Errada. Depende da frequência da doença e da prevalência da exposição.' },
    { t: 'O risco atribuível mede a força da associação causal.', ok: false,
      why: 'Errada. Quem mede força de associação é o risco relativo.' },
    { t: 'As duas medidas são intercambiáveis na priorização de ações.', ok: false,
      why: 'Errada. A priorização de ações se apoia no impacto absoluto.' },
    { t: 'A fração atribuível populacional independe da prevalência da exposição.', ok: false,
      why: 'Errada. Depende diretamente dela.' }
  ],
  comentario: 'Relativo para causalidade, atribuível para prioridade. Risco relativo alto sobre doença rara move pouco o total de casos; exposição frequente com risco relativo modesto pode mover muito.',
  pegadinha: 'Priorizar pela maior razão de risco desloca recursos para o problema de menor impacto populacional.',
  refs: ['Rothman — Epidemiologia Moderna', 'Fletcher — Epidemiologia Clínica'] }

);
