/* CASOS-3.JS — casos clínicos 013 a 016. AUTORAIS. */
window.CASOS = window.CASOS || [];
window.CASOS.push(

{ id: 'caso-013',
  titulo: 'Surto de queixas osteomusculares em frigorífico',
  temas: ['3.2', '3.1', '4.2', '5.2'],
  nivel: 'dificil',
  vinheta: 'Frigorífico de aves com 1.200 trabalhadores. O setor de cortes especiais registrou, nos últimos doze meses, 34 afastamentos por transtornos de ombro e punho, contra 6 no ano anterior. O setor opera em linha com cadência definida pela esteira, meta de peças por hora elevada em 15% há oito meses, ambiente refrigerado, pausas de dez minutos concentradas no meio de cada meio-turno e rodízio limitado a duas posições semelhantes entre si. A altura das mesas é fixa e igual para todos. Uma trabalhadora de 27 anos, dois anos na função, apresenta dor em ombro direito com limitação para elevação acima de 90 graus, iniciada há cinco meses, sem trauma. A ultrassonografia mostra tendinopatia do supraespinhal sem rotura. Ela foi afastada por 20 dias, retornou à mesma posição e recidivou em duas semanas. A empresa apresenta um laudo de consultoria com medições de altura de bancada, luminância e ruído, concluindo que "o posto está conforme".',
  questoes: [
    { enunciado: 'Sobre a conclusão do laudo apresentado pela empresa, a crítica tecnicamente CORRETA é:',
      alts: [
        { t: 'A avaliação limitou-se à dimensão física do posto e não examinou a organização do trabalho, determinante central nesse tipo de atividade.', ok: true,
          why: 'Correta. Cadência imposta pela esteira, meta elevada, regime de pausas e rodízio ineficaz são fatores organizacionais decisivos, e nenhum deles aparece em medições dimensionais.' },
        { t: 'A conclusão do laudo é tecnicamente adequada, pois medições dimensionais em conformidade com os parâmetros recomendados demonstram a ausência de risco ergonômico no posto de trabalho avaliado.', ok: false,
          why: 'Incorreta. Conformidade dimensional é condição necessária e insuficiente. Um posto com medidas corretas pode adoecer por ritmo, meta e ausência de recuperação.' },
        { t: 'O laudo falhou apenas por não ter medido a temperatura do ambiente refrigerado, item que deveria constar de qualquer avaliação em setor de desossa.', ok: false,
          why: 'Incorreta. O frio agrava o risco musculoesquelético e deveria constar, mas apontá-lo como falha única deixa intocada a omissão principal, que é a organização do trabalho.' },
        { t: 'A análise deveria ter sido substituída por avaliação médica individual de cada trabalhador do setor, que identificaria com precisão os casos existentes.', ok: false,
          why: 'Incorreta. Avaliação clínica identifica quem adoeceu, não por que adoeceu. Ela complementa, mas não substitui a análise do trabalho.' },
        { t: 'A crítica não procede, pois a análise ergonômica do trabalho tem por objeto exclusivo os aspectos biomecânicos e dimensionais do posto.', ok: false,
          why: 'Incorreta. A análise ergonômica abrange também os aspectos cognitivos e organizacionais do trabalho.' }
      ],
      comentario: 'A distinção que a prova cobra: avaliar o posto é medir; analisar o trabalho é partir da atividade real e alcançar ritmo, metas, pausas e autonomia. Em linha de produção com cadência imposta, é aí que o risco mora.',
      pegadinha: 'A altura fixa e igual de mesa para todos já é falha antropométrica — o laudo mediu e não percebeu que "conforme" para quem?',
      refs: ['NR-17', 'Couto — Ergonomia'] },

    { enunciado: 'Quanto aos fatores biomecânicos presentes na atividade descrita, é CORRETO afirmar:',
      alts: [
        { t: 'Postura, força, repetitividade e tempo de recuperação interagem, e a elevação da meta com pausas inalteradas reduziu o tempo de recuperação.', ok: true,
          why: 'Correta. O tempo de recuperação é o fator mais frequentemente ignorado. Aumentar a meta sem aumentar a pausa encurta o intervalo entre esforços e é determinante para o adoecimento.' },
        { t: 'Sendo leve a carga manuseada em cada peça, não existe risco biomecânico relevante na atividade, uma vez que o risco de lesão depende essencialmente da magnitude da força aplicada.', ok: false,
          why: 'Incorreta. Cargas leves em alta repetitividade e sem recuperação adequada produzem sobrecarga acumulada. O risco não se define só pela força.' },
        { t: 'O rodízio entre duas posições biomecanicamente semelhantes elimina o risco de sobrecarga localizada, pois qualquer alternância de posto redistribui o esforço entre grupos musculares.', ok: false,
          why: 'Incorreta. Rodízio só é eficaz quando alterna grupos musculares e padrões de movimento diferentes. Entre posições semelhantes, a sobrecarga permanece na mesma estrutura.' },
        { t: 'O ambiente refrigerado não influencia o risco musculoesquelético, limitando-se a causar desconforto térmico nos trabalhadores.', ok: false,
          why: 'Incorreta. O frio reduz a destreza, aumenta a força de preensão necessária e diminui a perfusão tecidual, tudo isso ampliando o risco.' },
        { t: 'A altura fixa de bancada é adequada porque padroniza as condições de trabalho para todos os trabalhadores.', ok: false,
          why: 'Incorreta. Altura fixa obriga os extremos antropométricos a posturas forçadas. A adequação exige regulagem.' }
      ],
      comentario: 'Os quatro fatores — postura, força, repetitividade e tempo de recuperação — não se avaliam isoladamente. Elevar meta sem rever pausas é a alteração mais comum e a que mais desequilibra o conjunto. Frio e bancada de altura única agravam.',
      pegadinha: '"A carga é leve" é o argumento mais usado para negar risco em atividade repetitiva — e ignora três dos quatro fatores.',
      refs: ['Couto — Ergonomia', 'NR-17'] },

    { enunciado: 'Sobre o nexo entre o quadro da trabalhadora e o trabalho, é CORRETO afirmar:',
      alts: [
        { t: 'A associação é reforçada pelo agrupamento de casos no setor, pela compatibilidade entre a tarefa e o segmento acometido e pela recidiva após o retorno ao mesmo posto.', ok: true,
          why: 'Correta. Nem a ausência de trauma agudo nem a idade jovem afastam o nexo: as lesões por sobrecarga se instalam de forma cumulativa e insidiosa.' },
        { t: 'A ausência de rotura tendínea na ultrassonografia afasta a existência de doença e, consequentemente, de incapacidade para o trabalho, restando apenas queixa subjetiva de dor.', ok: false,
          why: 'Incorreta. Tendinopatia sem rotura é diagnóstico próprio e pode incapacitar. A imagem não é o árbitro da existência do quadro.' },
        { t: 'A idade jovem torna improvável a origem ocupacional do quadro e sugere predisposição individual ou doença reumatológica de base a ser investigada.', ok: false,
          why: 'Incorreta. Em trabalho de alta repetitividade os casos ocorrem justamente em trabalhadores jovens, pela intensidade da exposição.' },
        { t: 'Sem trauma agudo identificável não há como caracterizar agravo relacionado ao trabalho, pois falta o evento que estabelece a relação de causa.', ok: false,
          why: 'Incorreta. Doença ocupacional se equipara a acidente do trabalho e dispensa evento único: a exposição cumulativa basta.' },
        { t: 'A recidiva após o retorno indica falta de adesão ao tratamento pela trabalhadora.', ok: false,
          why: 'Incorreta. A recidiva ao voltar ao mesmo posto aponta persistência da exposição, e não falha da paciente.' }
      ],
      comentario: 'Nexo em distúrbio musculoesquelético se constrói por convergência: exposição compatível com o segmento acometido, temporalidade, agrupamento de casos e comportamento do quadro frente ao afastamento e ao retorno. Imagem normal não afasta nada.',
      pegadinha: 'Atribuir a recidiva à adesão da trabalhadora inverte causa e efeito — ela voltou à mesma posição.',
      refs: ['Penteado — Perícias em DORT', 'Mendes, R. — Patologia do Trabalho'] },

    { enunciado: 'Sobre a conduta em relação ao retorno ao trabalho desta trabalhadora, a alternativa CORRETA é:',
      alts: [
        { t: 'O retorno deve ser precedido de exame de retorno ao trabalho, com restrições definidas e alocação em posição efetivamente distinta.', ok: true,
          why: 'Correta. Devolvê-la à mesma posição sem qualquer mudança reproduz o quadro. A restrição precisa dizer o que ela não pode fazer, não qual é o seu diagnóstico.' },
        { t: 'Bastava o retorno à mesma função sem restrições, pois o afastamento de vinte dias foi tempo suficiente para a recuperação tecidual completa da tendinopatia diagnosticada.', ok: false,
          why: 'Incorreta. Vinte dias não recuperam tendinopatia, e mesmo que recuperassem, a exposição que a causou permanece intacta no posto.' },
        { t: 'As restrições devem ser comunicadas ao gestor acompanhadas do diagnóstico da trabalhadora, para que ele possa dimensionar melhor a distribuição de tarefas na equipe.', ok: false,
          why: 'Incorreta. O gestor precisa da restrição, nunca do diagnóstico, protegido por sigilo médico.' },
        { t: 'As restrições devem ser evitadas sempre que possível, pois estigmatizam a trabalhadora perante a equipe e a expõem a constrangimento.', ok: false,
          why: 'Incorreta. O estigma se combate com a organização do trabalho, não omitindo a proteção devida à trabalhadora.' },
        { t: 'A trabalhadora deve permanecer afastada indefinidamente, já que o setor não oferece função compatível com as limitações.', ok: false,
          why: 'Incorreta. Cabe adequar o posto ou realocar. O afastamento indefinido sem tentativa de adequação não é conduta técnica.' }
      ],
      comentario: 'Retorno seguro exige: exame prévio, restrição escrita por tarefa e exposição, prazo de reavaliação, realocação efetiva e — quando o determinante está no posto — mudança do posto. Sigilo do diagnóstico o tempo todo.',
      pegadinha: 'Comunicar o diagnóstico "para ajudar o gestor" é a violação de sigilo mais bem-intencionada da especialidade.',
      refs: ['NR-7', 'Código de Ética Médica'] },

    { enunciado: 'Sobre as recomendações coletivas ao setor, a conduta mais adequada é:',
      alts: [
        { t: 'Propor análise ergonômica com observação da atividade real, revisão da cadência, das metas, das pausas e do rodízio, com plano de ação, prazos e reavaliação.', ok: true,
          why: 'Correta. Somam-se as bancadas com regulagem de altura. O que caracteriza uma intervenção séria é o plano com responsáveis, prazos e verificação posterior do efeito.' },
        { t: 'Implantar ginástica laboral diária de dez minutos por turno, mantendo inalteradas a cadência da esteira, as metas de produção e o regime de pausas atualmente praticado.', ok: false,
          why: 'Incorreta. Ginástica laboral é complementar e não corrige ritmo, repetitividade nem falta de recuperação, que são os determinantes do surto.' },
        { t: 'Aumentar a frequência dos exames médicos periódicos do setor, sem outras medidas, de modo a detectar precocemente os novos casos que venham a surgir.', ok: false,
          why: 'Incorreta. Detectar mais cedo não reduz a exposição. É vigilância sem prevenção primária.' },
        { t: 'Contratar mais trabalhadores para o setor sem revisar a meta individual de peças por hora.', ok: false,
          why: 'Incorreta. Mais pessoas com a mesma meta individual não alteram a sobrecarga de cada um.' },
        { t: 'Aguardar a estabilização dos indicadores antes de qualquer intervenção, para avaliar se a alta foi sazonal.', ok: false,
          why: 'Incorreta. O aumento coincide com a elevação da meta, o que já indica a causa. Esperar é adiar a prevenção.' }
      ],
      comentario: 'Um aumento de quase seis vezes nos afastamentos do mesmo setor é evento sentinela coletivo. A resposta é análise ergonômica do trabalho com participação, intervenção sobre cadência, metas, pausas e rodízio, e verificação por reavaliação dos indicadores.',
      pegadinha: 'Contratar mais gente sem mexer na meta individual soa como solução e não altera a exposição de ninguém.',
      refs: ['NR-17', 'NR-1', 'Couto — Ergonomia'] }
  ] },

{ id: 'caso-014',
  titulo: 'Pressões sobre o programa de controle médico',
  temas: ['6.1', '7.6', '7.7', '7.8'],
  nivel: 'dificil',
  vinheta: 'Médico do trabalho assume a coordenação do programa de controle médico de uma rede de lojas com 900 empregados. Na primeira reunião, o diretor de recursos humanos apresenta uma lista de pedidos: incluir sorologia para HIV e teste de gravidez no exame admissional "para reduzir passivo"; receber mensalmente a relação de empregados em uso de medicamento controlado; que o médico "não emita ASO com restrição, porque restrição atrapalha a operação"; que os prontuários ocupacionais fiquem arquivados no setor de pessoal, "que tem mais espaço"; e que o relatório anual do programa traga os diagnósticos por empregado, "para o RH poder agir". Informa ainda que a empresa contratou um sistema que enviará automaticamente ao eSocial os dados dos exames, incluindo os códigos diagnósticos, e que a decisão já foi tomada pela diretoria.',
  questoes: [
    { enunciado: 'Sobre a inclusão de sorologia para HIV e teste de gravidez no exame admissional, a conduta CORRETA é:',
      alts: [
        { t: 'Recusar a inclusão, por serem exames sem relação com os riscos ocupacionais da função e de caráter discriminatório.', ok: true,
          why: 'Correta. Nem o sigilo do resultado nem o consentimento do candidato legitimam a exigência: o problema está na própria coleta de dado sensível sem finalidade ocupacional.' },
        { t: 'Aceitar a inclusão dos dois exames no protocolo admissional, desde que os resultados sejam mantidos sob sigilo no prontuário médico e em nenhuma hipótese repassados à empresa contratante.', ok: false,
          why: 'Incorreta. O sigilo não corrige a ilegitimidade da coleta. Além disso, o resultado acabaria influenciando a conclusão sobre aptidão e, por essa via, a contratação.' },
        { t: 'Aceitar a inclusão, desde que o candidato assine termo de consentimento livre e esclarecido autorizando expressamente a realização dos dois exames no processo admissional.', ok: false,
          why: 'Incorreta. Não há liberdade real de recusa em quem depende da vaga. Consentimento obtido nessa assimetria não valida a exigência.' },
        { t: 'Aceitar apenas o teste de gravidez, como forma de proteger a eventual gestante de exposições de risco existentes na função pretendida.', ok: false,
          why: 'Incorreta. A proteção da gestante se faz pela informação sobre os riscos e pela adequação do posto, nunca por triagem que barra a contratação.' },
        { t: 'Encaminhar a decisão ao setor jurídico da empresa, por se tratar de matéria de natureza contratual.', ok: false,
          why: 'Incorreta. A definição do protocolo de exames é ato médico e cabe ao coordenador do programa, não ao jurídico.' }
      ],
      comentario: 'A regra é a pertinência ao risco. Sorologia para HIV e teste de gravidez em admissão não avaliam aptidão frente a risco algum e servem à seleção discriminatória. Nem sigilo nem consentimento os legitimam.',
      pegadinha: 'As duas alternativas que "resolvem" com sigilo ou consentimento invocam princípios verdadeiros em contexto onde não se aplicam.',
      refs: ['NR-7', 'Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

    { enunciado: 'Quanto ao pedido de recebimento mensal da relação de empregados em uso de medicamento controlado, é CORRETO afirmar:',
      alts: [
        { t: 'Deve ser recusado, pois informar quem usa medicamento controlado revela dado sensível de saúde e expõe o trabalhador a discriminação.', ok: true,
          why: 'Correta. Ainda que os diagnósticos não sejam citados, a classe do medicamento permite inferir a condição, e a lista serve a rastreamento sem finalidade ocupacional legítima.' },
        { t: 'Pode ser atendido, desde que a relação encaminhada mensalmente contenha apenas os nomes dos empregados, sem indicação dos medicamentos que cada um utiliza.', ok: false,
          why: 'Incorreta. A própria inclusão na lista já revela que a pessoa faz uso de medicamento controlado, o que é dado sensível.' },
        { t: 'Deve ser atendido, porque o empregador tem o direito de conhecer condições de saúde que possam afetar a segurança do trabalho e de terceiros na operação.', ok: false,
          why: 'Incorreta. Esse interesse legítimo se satisfaz com a conclusão sobre aptidão e restrições, sem acesso a dados clínicos.' },
        { t: 'Pode ser atendido se o setor de recursos humanos assinar termo de confidencialidade responsabilizando-se pela guarda das informações recebidas.', ok: false,
          why: 'Incorreta. Sigilo médico não se transfere por termo, e o compartilhamento em si já é a violação.' },
        { t: 'Deve ser atendido apenas em relação aos trabalhadores que ocupam funções de risco na empresa.', ok: false,
          why: 'Incorreta. Mesmo em função de risco, o que se comunica é a restrição, não a medicação em uso.' }
      ],
      comentario: 'Sempre que a empresa pedir informação clínica, a resposta é traduzir a necessidade legítima em restrição operacional. "Não pode operar empilhadeira" atende a segurança; "está em uso de medicamento controlado" apenas expõe.',
      pegadinha: 'Retirar o nome do medicamento e manter a lista de pessoas parece um meio-termo razoável e continua sendo quebra de sigilo.',
      refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

    { enunciado: 'Sobre a exigência de não emitir atestado de saúde ocupacional com restrição, a alternativa CORRETA é:',
      alts: [
        { t: 'A conclusão sobre aptidão é ato médico com autonomia técnica, e a aptidão com restrição é instrumento legítimo e muitas vezes necessário.', ok: true,
          why: 'Correta. Atender à exigência configuraria falsidade do documento e omissão de proteção ao trabalhador, com responsabilidade ética e legal do médico.' },
        { t: 'A exigência é legítima, porque a empresa contrata e custeia o serviço médico e, portanto, define o formato e o conteúdo dos documentos que ele emite.', ok: false,
          why: 'Incorreta. O custeio não cria subordinação técnica. A autonomia do médico quanto à conclusão diagnóstica e de aptidão é irrenunciável.' },
        { t: 'O médico deve emitir o atestado sem a restrição, para preservar a relação com a empresa, e registrar a divergência apenas no prontuário do trabalhador.', ok: false,
          why: 'Incorreta. Registrar em prontuário não corrige um documento falso já entregue e que o trabalhador levará consigo, desprotegido.' },
        { t: 'A alternativa correta é declarar o trabalhador inapto sempre que houver qualquer limitação, evitando assim a discussão sobre restrições parciais.', ok: false,
          why: 'Incorreta. Inaptidão genérica é desproporcional e produz exclusão do trabalho onde bastaria adequar a tarefa.' },
        { t: 'A decisão sobre a existência e o conteúdo das restrições cabe ao gestor da área, que conhece melhor as tarefas.', ok: false,
          why: 'Incorreta. O gestor informa as exigências da tarefa. A conclusão sobre a restrição é do médico.' }
      ],
      comentario: 'Quem paga não manda no juízo técnico. A aptidão com restrição existe justamente para permitir que o trabalhador permaneça trabalhando com segurança — suprimi-la não é simplificação administrativa, é falsidade.',
      pegadinha: 'A saída de "declarar inapto para evitar discussão" é o extremo oposto e também prejudica o trabalhador.',
      refs: ['NR-7', 'Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] },

    { enunciado: 'Sobre a guarda dos prontuários ocupacionais no setor de pessoal, é CORRETO afirmar:',
      alts: [
        { t: 'Os prontuários devem permanecer sob guarda médica, com sigilo preservado e prazo de guarda observado, cabendo transferência apenas a outro médico responsável.', ok: true,
          why: 'Correta. A transferência para setor administrativo é inadmissível, ainda que com controle de acesso e com termo assinado: a guarda é atribuição indelegável do médico.' },
        { t: 'Como a empresa custeia o serviço médico e é a titular do contrato, os prontuários constituem patrimônio dela e podem ser arquivados no setor que ela decidir, inclusive no de pessoal.', ok: false,
          why: 'Incorreta. O prontuário pertence ao paciente, cabendo a guarda ao médico ou à instituição de saúde. Custeio não confere propriedade sobre dado clínico.' },
        { t: 'É aceitável a guarda no setor de pessoal, desde que os prontuários permaneçam em armário lacrado e o setor assine termo de responsabilidade pelo sigilo das informações.', ok: false,
          why: 'Incorreta. Lacre e termo não transformam setor administrativo em guardião legítimo de dado clínico sigiloso.' },
        { t: 'Os prontuários podem ser digitalizados e os originais destruídos imediatamente após a digitalização, sem outros cuidados.', ok: false,
          why: 'Incorreta. A digitalização exige requisitos de autenticidade, integridade e certificação, e a eliminação dos originais tem regras próprias.' },
        { t: 'Encerrado o contrato de trabalho do empregado, o prontuário ocupacional pode ser descartado de imediato.', ok: false,
          why: 'Incorreta. Há prazo mínimo de guarda que se estende por anos após o desligamento, justamente pela latência de muitas doenças ocupacionais.' }
      ],
      comentario: 'Prontuário ocupacional é documento médico: guarda por médico, prazo observado, sucessão entre médicos e sigilo que não se extingue com o fim do contrato. Em doenças de latência longa, esse arquivo é o que sustentará o nexo décadas depois.',
      pegadinha: 'A alternativa do lacre oferece solução de logística para um problema de titularidade.',
      refs: ['Código de Ética Médica', 'Resoluções do CFM sobre prontuário', 'LGPD'] },

    { enunciado: 'Quanto ao envio automático de códigos diagnósticos ao sistema de escrituração digital, a conduta CORRETA é:',
      alts: [
        { t: 'Alertar formalmente que o evento de monitoramento da saúde informa a realização dos exames e a conclusão sobre aptidão, sem diagnóstico, e pedir a reconfiguração do sistema.', ok: true,
          why: 'Correta. O envio automático de códigos diagnósticos viola o sigilo profissional e o princípio da necessidade no tratamento de dados sensíveis, que limita a coleta ao mínimo indispensável.' },
        { t: 'Acatar a decisão da diretoria quanto à configuração do envio, pois a parametrização do sistema é matéria de tecnologia da informação e foge à competência do médico coordenador.', ok: false,
          why: 'Incorreta. O que trafega é dado clínico sob responsabilidade do médico. A decisão técnica sobre o conteúdo enviado não é do setor de tecnologia.' },
        { t: 'Aceitar o envio dos códigos diagnósticos, já que o sistema é governamental e, por isso, oferece garantias suficientes de segurança e de proteção da informação.', ok: false,
          why: 'Incorreta. Segurança do repositório não legitima a coleta de dado desnecessário à finalidade, e o dado transita antes pela própria empresa.' },
        { t: 'Aceitar o envio, desde que cada trabalhador seja previamente informado de que seus diagnósticos serão transmitidos ao sistema.', ok: false,
          why: 'Incorreta. Informar não torna lícita a transmissão de dado que a norma não exige e que o trabalhador não pode recusar sem risco.' },
        { t: 'Solicitar que o setor de pessoal assuma formalmente a responsabilidade pelos envios, isentando o médico coordenador.', ok: false,
          why: 'Incorreta. A responsabilidade pelo sigilo do dado clínico não se transfere por declaração formal a terceiro.' }
      ],
      comentario: 'Regra do eSocial em saúde e segurança: transmite-se a realização do exame e a conclusão de aptidão, com o médico responsável identificado — nunca o diagnóstico. Sigilo médico e princípio da necessidade apontam para o mesmo lugar.',
      pegadinha: 'Delegar a configuração à área de tecnologia é a forma mais comum de o médico perder o controle sobre o que sai em seu nome.',
      refs: ['eSocial — eventos de SST', 'LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] }
  ] },

{ id: 'caso-015',
  titulo: 'Perícia judicial em pedreiro com lombalgia',
  temas: ['5.4', '5.5', '5.3', '4.2'],
  nivel: 'dificil',
  vinheta: 'Médico do trabalho é nomeado perito em ação trabalhista movida por pedreiro de 49 anos, 22 anos na construção civil, que alega doença ocupacional da coluna lombar. O autor relata lombalgia crônica há seis anos, com irradiação para membro inferior esquerdo, e afastamentos previdenciários intermitentes. A ressonância mostra espondilodiscartrose multissegmentar e protrusão discal em L4-L5, sem compressão radicular significativa. O exame físico revela limitação de flexão de tronco e manobra de elevação do membro inferior estendido positiva à esquerda, com achados variáveis entre as manobras. A atividade envolvia levantamento manual frequente de sacos e blocos, sem auxílio mecânico. O autor está atualmente trabalhando como porteiro. O assistente técnico da reclamada sustenta que se trata de "doença degenerativa própria da idade, sem qualquer relação com o trabalho", e que a variabilidade dos achados indica simulação. O perito verifica, ao revisar os autos, que atendeu o autor uma única vez em pronto-socorro há sete anos, por quadro respiratório.',
  questoes: [
    { enunciado: 'Diante da constatação do atendimento prévio ao autor, a conduta CORRETA é:',
      alts: [
        { t: 'Informar o juízo e recusar a nomeação, pois a relação prévia entre médico e paciente com uma das partes compromete a imparcialidade exigida do perito, ainda que o atendimento tenha sido único, antigo e por motivo inteiramente diverso.', ok: true,
          why: 'Correta. O impedimento é objetivo e não depende de o perito sentir-se capaz de ser imparcial. Cabe a ele declará-lo de ofício, sem esperar provocação das partes.' },
        { t: 'Pode atuar normalmente, pois o atendimento anterior tratou de queixa sem qualquer relação com o objeto da perícia.', ok: false,
          why: 'Incorreta. O impedimento decorre da existência do vínculo prévio, e não do assunto tratado naquele atendimento.' },
        { t: 'Pode atuar desde que informe o fato às partes e obtenha a concordância expressa de ambas quanto à sua permanência no encargo.', ok: false,
          why: 'Incorreta. A concordância das partes não afasta impedimento de ordem objetiva.' },
        { t: 'Deve atuar e utilizar as informações obtidas no atendimento anterior para enriquecer o laudo com dados clínicos de que as partes não dispõem.', ok: false,
          why: 'Incorreta. Além de manter o impedimento, usaria no processo informação obtida sob sigilo em relação assistencial, o que é falta ética grave.' },
        { t: 'Deve aguardar que alguma das partes suscite o impedimento antes de tomar qualquer providência.', ok: false,
          why: 'Incorreta. O dever de declarar o impedimento é do próprio perito e independe de arguição.' }
      ],
      comentario: 'Um caso, um papel. Quem foi assistente da parte não é perito no mesmo caso, e o dever de revelar a relação prévia é do médico — não se espera que a parte descubra.',
      pegadinha: 'Tempo decorrido, atendimento único e motivo diverso são atenuantes aparentes que não sanam impedimento.',
      refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

    { enunciado: 'Supondo que o impedimento não existisse, sobre a tese de "doença degenerativa própria da idade", a análise CORRETA é:',
      alts: [
        { t: 'A existência de alterações degenerativas não afasta o nexo, pois o trabalho pode ter atuado como concausa, agravando ou desencadeando condição até então silenciosa.', ok: true,
          why: 'Correta. Basta que o trabalho tenha contribuído para o resultado. A concausa está expressamente prevista na legislação previdenciária como suficiente para o reconhecimento.' },
        { t: 'Comprovada por exame de imagem a natureza degenerativa das alterações da coluna, o nexo com o trabalho fica automaticamente excluído, restando afastada a natureza acidentária do benefício.', ok: false,
          why: 'Incorreta. Degeneração é achado quase universal a partir de certa idade e não explica sozinha a instalação do quadro clínico incapacitante.' },
        { t: 'O nexo só se sustenta se a contribuição do trabalho para o resultado for demonstrada como superior a cinquenta por cento do conjunto das causas envolvidas.', ok: false,
          why: 'Incorreta. Não existe esse patamar quantitativo. A concausa não precisa ser preponderante para gerar reconhecimento.' },
        { t: 'Reconhecida a concausa, o reconhecimento deve ser proporcional à parcela de contribuição do trabalho para o quadro.', ok: false,
          why: 'Incorreta. Não há reconhecimento fracionado: o benefício é acidentário ou comum, sem rateio.' },
        { t: 'A idade do autor, superior a quarenta e cinco anos, é elemento suficiente para atribuir o quadro ao processo natural de envelhecimento.', ok: false,
          why: 'Incorreta. Idade é fator de suscetibilidade, não causa que exclua a exposição de vinte e dois anos de trabalho pesado.' }
      ],
      comentario: 'Concausa é contribuição, não exclusividade. Preexistente, concomitante ou superveniente — em qualquer delas, se o trabalho contribuiu, há nexo. A tese da "degeneração própria da idade" é a defesa mais comum em lombalgia e não se sustenta sozinha.',
      pegadinha: 'A exigência de "mais de cinquenta por cento" soa razoável e não existe na lógica da concausalidade.',
      refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

    { enunciado: 'Sobre a alegação de simulação baseada na variabilidade dos achados ao exame, é CORRETO afirmar:',
      alts: [
        { t: 'Variabilidade entre manobras é frequente na dor crônica e não basta para afirmar simulação.', ok: true,
          why: 'Correta. Flutuação dos sintomas, sensibilização central, medo do movimento e ansiedade na própria perícia explicam inconsistências. Simulação exige demonstrar intencionalidade e ganho pretendido.' },
        { t: 'Qualquer inconsistência observada entre manobras semiológicas equivalentes autoriza o perito a concluir por simulação e a registrar essa conclusão no laudo.', ok: false,
          why: 'Incorreta. Inconsistência é achado a ser interpretado, não prova de intenção. Concluir por simulação a partir dela é salto lógico grave.' },
        { t: 'Levantada a suspeita de simulação pelo assistente técnico, o perito deve encerrar a avaliação e concluir de imediato pela plena capacidade laborativa do autor.', ok: false,
          why: 'Incorreta. Suspeita não encerra investigação: ela obriga a aprofundá-la, com exame cuidadoso e análise de todo o conjunto documental.' },
        { t: 'A ausência de compressão radicular significativa nos exames de imagem comprova que não existe dor nem incapacidade a ser reconhecida.', ok: false,
          why: 'Incorreta. Dor lombar crônica incapacitante ocorre com frequência sem correlato de compressão em imagem.' },
        { t: 'A alegação do assistente técnico da parte vincula o perito, que deve incorporá-la à sua conclusão.', ok: false,
          why: 'Incorreta. O parecer do assistente é peça da parte. O perito o considera, mas conclui com independência.' }
      ],
      comentario: 'Guarde a distinção: simulação inventa ou exagera por ganho externo; dissimulação esconde; sobressimulação amplifica sintoma real. Nenhuma se afirma por inconsistência isolada, e a variabilidade é característica da dor crônica.',
      pegadinha: 'A imagem sem compressão radicular aparece como prova de ausência de dor — e não é.',
      refs: ['Penteado — Perícias em DORT', 'Camargo — Psiquiatria Ocupacional'] },

    { enunciado: 'Sobre a avaliação da capacidade laborativa neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'A avaliação deve confrontar a repercussão funcional com as exigências da atividade de pedreiro, considerando que ele exerce hoje função de menor demanda física.', ok: true,
          why: 'Correta. O conjunto sugere incapacidade para a atividade habitual com capacidade residual preservada, situação distinta tanto da plena capacidade quanto da incapacidade total.' },
        { t: 'Como o autor está atualmente trabalhando e recebendo remuneração como porteiro, não há incapacidade a ser reconhecida em nenhum grau, seja parcial, seja para a atividade habitual.', ok: false,
          why: 'Incorreta. Exercer atividade menos exigente é justamente a expressão da capacidade residual e não afasta a incapacidade para a função anterior.' },
        { t: 'Trata-se de incapacidade omniprofissional, uma vez que existe doença crônica de caráter irreversível documentada em exames de imagem.', ok: false,
          why: 'Incorreta. Omniprofissional é a incapacidade para toda e qualquer atividade, o que a própria função atual desmente.' },
        { t: 'Incapacidade parcial e incapacidade temporária são expressões equivalentes neste contexto pericial.', ok: false,
          why: 'Incorreta. Uma se refere à extensão, quanto do universo de atividades está comprometido, e a outra à duração.' },
        { t: 'A avaliação deve considerar apenas o percentual de perda anatômica demonstrado nos exames de imagem da coluna lombar.', ok: false,
          why: 'Incorreta. Perícia mede repercussão funcional diante das exigências da atividade, não percentual anatômico.' }
      ],
      comentario: 'Dois eixos — extensão e duração — e a escala uni, multi e omniprofissional. Trabalhar em atividade de menor exigência é dado a favor de capacidade residual, o que aponta para incapacidade para a atividade habitual, e não para incapacidade total.',
      pegadinha: '"Está trabalhando, logo é capaz" apaga a pergunta central: capaz para qual atividade?',
      refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre a elaboração do laudo pericial, a conduta CORRETA é:',
      alts: [
        { t: 'Descrever a metodologia empregada, os achados e o raciocínio que liga achados a conclusões, respondendo objetivamente aos quesitos deferidos de todas as partes.', ok: true,
          why: 'Correta. O laudo deve permitir que um terceiro acompanhe como se chegou àquela conclusão. Essa rastreabilidade é o que o distingue de mera opinião.' },
        { t: 'Responder apenas aos quesitos formulados pela parte que apresentou a maior quantidade de documentos e de exames complementares ao processo.', ok: false,
          why: 'Incorreta. O perito responde a todos os quesitos deferidos pelo juízo, independentemente de qual parte os formulou.' },
        { t: 'Apresentar somente a conclusão final, pois a fundamentação técnica é matéria interna do raciocínio do perito.', ok: false,
          why: 'Incorreta. Laudo sem fundamentação não é laudo: impede o contraditório e a valoração pelo juízo.' },
        { t: 'Omitir a análise da atividade laboral efetivamente exercida, por ser matéria de ergonomia e não de medicina do trabalho.', ok: false,
          why: 'Incorreta. Sem descrever as exigências da atividade não há como avaliar capacidade nem nexo.' },
        { t: 'Alterar a conclusão do laudo caso o assistente técnico da parte contrária apresente parecer divergente.', ok: false,
          why: 'Incorreta. A conclusão só muda diante de novo elemento técnico, e a mudança deve ser fundamentada em esclarecimentos.' }
      ],
      comentario: 'Laudo é metodologia + achados + raciocínio + resposta objetiva aos quesitos. E lembre da distinção que a prova adora: perito responde ao juízo; quem responde a uma parte é o assistente técnico.',
      pegadinha: 'Excluir a análise da atividade "por ser de ergonomia" retira do laudo justamente o elemento que sustenta o nexo.',
      refs: ['Resoluções do CFM sobre perícia médica', 'Penteado — Perícias em DORT'] }
  ] },

{ id: 'caso-016',
  titulo: 'Admissão de candidato com deficiência auditiva',
  temas: ['6.2', '6.1', '7.1', '5.6'],
  nivel: 'dificil',
  vinheta: 'Indústria de embalagens precisa preencher a cota legal de pessoas com deficiência. Um candidato de 31 anos, com deficiência auditiva bilateral de longa data, usuário de aparelho de amplificação sonora, é encaminhado ao exame admissional para a função de auxiliar de produção em setor com ruído elevado e circulação de empilhadeiras. O gerente orienta o médico a "reprovar quem não conseguir desempenhar exatamente como os demais" e questiona se pode "colocá-lo em uma função sem risco nenhum, tipo arquivo, só para contar na cota". O candidato relata que trabalhou por seis anos em função semelhante em outra empresa, sem intercorrências, e que se comunica bem por leitura labial e por escrito. O setor possui sinalização sonora de aproximação de empilhadeira e alarme de evacuação exclusivamente sonoro. O médico verifica que a empresa não possui laudo caracterizador de deficiência para o candidato e que a avaliação de riscos do setor não contempla trabalhadores com deficiência.',
  questoes: [
    { enunciado: 'Sobre o critério a ser adotado na avaliação de aptidão do candidato, é CORRETO afirmar:',
      alts: [
        { t: 'A avaliação deve verificar a possibilidade de desempenho da função com as adaptações razoáveis cabíveis, e não a equivalência de desempenho ao trabalhador sem deficiência.', ok: true,
          why: 'Correta. A análise é individualizada e se apoia no modelo biopsicossocial, que considera a interação entre a condição da pessoa e as barreiras do ambiente, e não apenas o déficit.' },
        { t: 'A avaliação deve basear-se exclusivamente no grau de perda auditiva medido em audiometria tonal, que é o parâmetro objetivo capaz de definir se o candidato tem ou não condições de exercer a função.', ok: false,
          why: 'Incorreta. O limiar audiométrico mede o déficit, não a funcionalidade. Duas pessoas com a mesma perda podem ter desempenhos muito diferentes conforme adaptação, apoio e barreiras.' },
        { t: 'A presença de deficiência configura, por si só, restrição para o exercício de funções que envolvam qualquer grau de risco ocupacional no ambiente de trabalho.', ok: false,
          why: 'Incorreta. Isso equivaleria a excluir pessoas com deficiência de quase toda atividade produtiva. O que se avalia é o risco concreto e a adaptação possível.' },
        { t: 'O médico deve atender à orientação do gerente, pois a definição dos critérios de contratação é prerrogativa exclusiva do empregador.', ok: false,
          why: 'Incorreta. A conclusão sobre aptidão é ato médico com autonomia técnica e não se subordina a orientação de gestor.' },
        { t: 'A experiência prévia do candidato em função semelhante é irrelevante para a avaliação de aptidão.', ok: false,
          why: 'Incorreta. Desempenho anterior comprovado em atividade equivalente é evidência direta de capacidade funcional.' }
      ],
      comentario: 'Deficiência não é incapacidade. A avaliação é biopsicossocial e individualizada, e a pergunta é sobre desempenho com adaptação razoável — não sobre equivalência com quem não tem deficiência.',
      pegadinha: 'Tratar deficiência como restrição automática para qualquer função de risco é a prática discriminatória mais comum na admissão.',
      refs: ['Lei nº 13.146/2015', 'ANAMT — A inclusão de pessoas com deficiência'] },

    { enunciado: 'Sobre as barreiras identificadas no setor, a conduta CORRETA é:',
      alts: [
        { t: 'Apontar formalmente que a sinalização apenas sonora da empilhadeira e o alarme de evacuação exclusivamente sonoro são barreiras que geram risco concreto e devem ser adaptadas.', ok: true,
          why: 'Correta. Sinalização visual e vibratória é adaptação razoável, obrigação da empresa e condição para o trabalho seguro. A barreira está no ambiente, não na pessoa.' },
        { t: 'Concluir pela inaptidão do candidato para a função pretendida, uma vez que ele não conseguirá ouvir os alarmes sonoros hoje existentes no setor de expedição da empresa.', ok: false,
          why: 'Incorreta. Isso transfere à pessoa o ônus de uma barreira ambiental que a empresa tem o dever de remover.' },
        { t: 'Considerar que o uso do aparelho de amplificação sonora individual resolve integralmente a questão da percepção dos alarmes no ambiente ruidoso do setor.', ok: false,
          why: 'Incorreta. O aparelho melhora a audição, mas não garante a percepção de alarme em ambiente ruidoso, e pode inclusive ser retirado sob protetor auditivo.' },
        { t: 'Recomendar que o trabalhador seja acompanhado permanentemente por um colega encarregado de avisá-lo quando houver alarme.', ok: false,
          why: 'Incorreta. Solução dependente de terceiro é frágil, falha na emergência e cria constrangimento e dependência.' },
        { t: 'Entender que a adaptação só se torna exigível depois da contratação e da comprovação de dificuldade concreta.', ok: false,
          why: 'Incorreta. A adaptação deve estar assegurada antes da exposição ao risco, e não depois de um incidente.' }
      ],
      comentario: 'O modelo biopsicossocial desloca o problema: não é o trabalhador que "não ouve o alarme", é o alarme que não é acessível. Sinalização visual e vibratória é adaptação razoável, tecnicamente simples, e resolve o risco.',
      pegadinha: 'Delegar a segurança ao colega aparece como solução prática e é a informalização de uma medida de proteção.',
      refs: ['Lei nº 13.146/2015', 'Decreto nº 5.296/2004', 'NR-1'] },

    { enunciado: 'Quanto à proposta de alocar o candidato em função de arquivo "só para contar na cota", é CORRETO afirmar:',
      alts: [
        { t: 'A alocação deve corresponder às competências da pessoa e a uma função real, com as adaptações necessárias ao seu exercício.', ok: true,
          why: 'Correta. Destinar a pessoa com deficiência a função esvaziada, apenas para cumprimento formal da cota, é prática discriminatória e contraria a finalidade da inclusão.' },
        { t: 'A proposta é adequada, pois aloca o candidato em ambiente sem risco ocupacional relevante e assim o protege de qualquer possibilidade de agravamento da sua condição auditiva.', ok: false,
          why: 'Incorreta. Proteção não se faz por exclusão do trabalho significativo. O risco se controla no ambiente, não afastando a pessoa da atividade para a qual foi contratada.' },
        { t: 'A escolha da função a ser ocupada é matéria exclusivamente administrativa, sem qualquer interface com a atuação do médico do trabalho na empresa.', ok: false,
          why: 'Incorreta. Cabe ao médico apontar a compatibilidade entre a condição de saúde e as exigências da função, e sinalizar práticas discriminatórias.' },
        { t: 'A proposta é aceitável desde que o salário do trabalhador seja mantido no mesmo patamar da função originalmente pretendida.', ok: false,
          why: 'Incorreta. Manter o salário não repara o esvaziamento do trabalho, que atinge dignidade, desenvolvimento e carreira.' },
        { t: 'Pessoas com deficiência auditiva não podem exercer funções em setores com ruído elevado em nenhuma hipótese.', ok: false,
          why: 'Incorreta. Não há vedação absoluta: a avaliação é individual e considera as adaptações e o monitoramento possíveis.' }
      ],
      comentario: 'Cumprimento formal de cota com função esvaziada é discriminação. A inclusão se mede pelo trabalho real desempenhado com as adaptações devidas — e o médico do trabalho tem papel em apontar a inadequação da alocação.',
      pegadinha: 'A alternativa que "protege de qualquer risco" usa vocabulário de cuidado para justificar exclusão.',
      refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE'] },

    { enunciado: 'Sobre o laudo caracterizador de deficiência, a alternativa CORRETA é:',
      alts: [
        { t: 'Deve caracterizar a deficiência de forma fundamentada, descrevendo a condição e suas repercussões funcionais sob o modelo biopsicossocial.', ok: true,
          why: 'Correta. O laudo caracterizador não se confunde com declaração de incapacidade laborativa: descrever deficiência é descrever funcionalidade e barreiras, não incapacidade para o trabalho.' },
        { t: 'Basta a indicação do código diagnóstico correspondente à condição do trabalhador para caracterizar a deficiência para todos os fins legais, inclusive o cumprimento da cota.', ok: false,
          why: 'Incorreta. O código identifica a doença, não a deficiência. A caracterização exige descrição das repercussões funcionais e das barreiras enfrentadas.' },
        { t: 'A caracterização da deficiência equivale à declaração de incapacidade para o trabalho, razão pela qual o laudo deve indicar as atividades que a pessoa não poderá exercer.', ok: false,
          why: 'Incorreta. São conceitos distintos e frequentemente confundidos. A pessoa com deficiência é, em regra, plenamente capaz para o trabalho.' },
        { t: 'Emitido o laudo caracterizador, não cabe qualquer reavaliação posterior da condição do trabalhador.', ok: false,
          why: 'Incorreta. Funcionalidade e barreiras mudam com o tempo, o que justifica reavaliações periódicas.' },
        { t: 'O laudo deve ser arquivado no setor de pessoal, com acesso irrestrito da gestão da empresa.', ok: false,
          why: 'Incorreta. É documento de saúde, com guarda médica e acesso restrito ao estritamente necessário.' }
      ],
      comentario: 'Deficiência ≠ incapacidade. O laudo descreve condição e repercussões funcionais sob o modelo biopsicossocial, é revisável e continua sujeito a sigilo — o enquadramento para cota não abre o conteúdo clínico à gestão.',
      pegadinha: 'Equiparar deficiência a incapacidade é o erro conceitual que sustenta a discriminação na contratação.',
      refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE', 'LGPD'] },

    { enunciado: 'Sobre o acompanhamento do trabalhador após a admissão, a conduta CORRETA é:',
      alts: [
        { t: 'Incluí-lo no programa de controle médico conforme os riscos da função, com atenção ao monitoramento audiométrico e à reavaliação periódica das adaptações.', ok: true,
          why: 'Correta. É preciso ainda verificar a compatibilidade entre o protetor auditivo e o aparelho de amplificação, que muitas vezes não podem ser usados juntos de forma eficaz.' },
        { t: 'Dispensá-lo do monitoramento audiométrico periódico, uma vez que a perda auditiva já é preexistente à admissão e, portanto, não poderá ser atribuída à exposição ocupacional.', ok: false,
          why: 'Incorreta. Justamente quem já tem perda precisa de monitoramento, para detectar agravamento atribuível à exposição atual.' },
        { t: 'Dispensá-lo do uso de proteção auditiva no setor, por já apresentar deficiência auditiva e não haver, portanto, audição a preservar naquele trabalhador.', ok: false,
          why: 'Incorreta. Há audição residual a proteger, e a proteção é obrigatória para todos os expostos.' },
        { t: 'Considerar as adaptações implantadas como definitivas, sem necessidade de verificar periodicamente sua eficácia.', ok: false,
          why: 'Incorreta. Adaptação sem verificação de eficácia costuma degradar-se com o tempo e com as mudanças de processo.' },
        { t: 'Restringir de forma permanente o acesso do trabalhador às áreas de circulação de empilhadeiras.', ok: false,
          why: 'Incorreta. A solução é sinalizar e organizar o tráfego para todos, não confinar o trabalhador.' }
      ],
      comentario: 'Inclusão não termina na contratação: o trabalhador entra no programa de controle médico como qualquer outro exposto, com atenção à audição residual e à compatibilidade entre protetor e aparelho — e as adaptações precisam ser verificadas na prática.',
      pegadinha: 'Dispensar proteção auditiva "porque já tem deficiência" ignora a audição residual e os efeitos extra-auditivos do ruído.',
      refs: ['NR-7', 'Lei nº 13.146/2015', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] }
  ] }

);
