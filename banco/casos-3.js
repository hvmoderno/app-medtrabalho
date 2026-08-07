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
        { t: 'A avaliação limitou-se à dimensão física do posto e não examinou a organização do trabalho — cadência imposta pela esteira, meta elevada, regime de pausas e rodízio ineficaz —, que são determinantes centrais nesse tipo de atividade.', ok: true,
          why: 'Correta. Conformidade dimensional é condição necessária e jamais suficiente: em trabalho repetitivo em linha, a carga decisiva é organizacional.' },
        { t: 'A conclusão é adequada, pois medições dimensionais em conformidade demonstram ausência de risco ergonômico.', ok: false,
          why: 'Errada. Risco ergonômico inclui organização do trabalho e fatores psicossociais, não avaliados no laudo.' },
        { t: 'O laudo falhou apenas por não ter medido a temperatura do ambiente refrigerado.', ok: false,
          why: 'Errada. O frio é fator relevante e agravante, mas a lacuna central é a ausência de análise da organização do trabalho.' },
        { t: 'A análise deveria ter sido substituída por avaliação médica individual de cada trabalhador do setor.', ok: false,
          why: 'Errada. Substituir análise do trabalho por exame individual devolve ao trabalhador um problema coletivo e não altera a fonte.' },
        { t: 'A crítica não procede, pois a análise ergonômica do trabalho tem por objeto exclusivo os aspectos biomecânicos.', ok: false,
          why: 'Errada. A análise ergonômica do trabalho parte da atividade real e alcança os determinantes organizacionais e cognitivos.' }
      ],
      comentario: 'A distinção que a prova cobra: avaliar o posto é medir; analisar o trabalho é partir da atividade real e alcançar ritmo, metas, pausas e autonomia. Em linha de produção com cadência imposta, é aí que o risco mora.',
      pegadinha: 'A altura fixa e igual de mesa para todos já é falha antropométrica — o laudo mediu e não percebeu que "conforme" para quem?',
      refs: ['NR-17', 'Couto — Ergonomia'] },

    { enunciado: 'Quanto aos fatores biomecânicos presentes na atividade descrita, é CORRETO afirmar:',
      alts: [
        { t: 'Postura, força, repetitividade e tempo de recuperação interagem, e a elevação da meta com manutenção do regime de pausas reduziu justamente o tempo de recuperação, fator frequentemente ignorado e determinante para o adoecimento.', ok: true,
          why: 'Correta. Aumentar a meta sem aumentar as pausas comprime o tempo de recuperação entre esforços, alterando o balanço dos quatro fatores.' },
        { t: 'Sendo a carga manuseada leve, não há risco biomecânico relevante na atividade.', ok: false,
          why: 'Errada. Carga leve com alta repetitividade e recuperação insuficiente produz risco elevado — a força é apenas um dos quatro fatores.' },
        { t: 'O rodízio entre duas posições semelhantes elimina o risco de sobrecarga localizada.', ok: false,
          why: 'Errada. Rodízio só reduz risco quando alterna grupos musculares e padrões de movimento efetivamente diferentes.' },
        { t: 'O ambiente refrigerado não influencia o risco musculoesquelético.', ok: false,
          why: 'Errada. O frio aumenta a rigidez tecidual e a força de preensão necessária, agravando o risco.' },
        { t: 'A altura fixa de bancada é adequada porque padroniza as condições para todos.', ok: false,
          why: 'Errada. Padronizar em altura única desconsidera a variabilidade antropométrica e obriga posturas extremas nos extremos da distribuição.' }
      ],
      comentario: 'Os quatro fatores — postura, força, repetitividade e tempo de recuperação — não se avaliam isoladamente. Elevar meta sem rever pausas é a alteração mais comum e a que mais desequilibra o conjunto. Frio e bancada de altura única agravam.',
      pegadinha: '"A carga é leve" é o argumento mais usado para negar risco em atividade repetitiva — e ignora três dos quatro fatores.',
      refs: ['Couto — Ergonomia', 'NR-17'] },

    { enunciado: 'Sobre o nexo entre o quadro da trabalhadora e o trabalho, é CORRETO afirmar:',
      alts: [
        { t: 'A associação entre a atividade e o agravo é reforçada pelo agrupamento de casos no setor, pela compatibilidade entre a exigência da tarefa e o segmento acometido e pela recidiva após o retorno à mesma posição, sem que a ausência de trauma ou a idade jovem afastem o nexo.', ok: true,
          why: 'Correta. Agrupamento, compatibilidade anatômica com a exigência e recidiva ao retornar à mesma exposição são elementos convergentes.' },
        { t: 'A ausência de rotura na ultrassonografia afasta a existência de doença e de incapacidade.', ok: false,
          why: 'Errada. A correlação entre achado de imagem e sintoma é fraca em distúrbios musculoesqueléticos relacionados ao trabalho.' },
        { t: 'A idade jovem torna improvável a origem ocupacional, sugerindo predisposição individual.', ok: false,
          why: 'Errada. Em atividades de alta repetitividade o adoecimento precoce é justamente o esperado.' },
        { t: 'Sem trauma agudo identificável não há como caracterizar agravo relacionado ao trabalho.', ok: false,
          why: 'Errada. Doença relacionada ao trabalho é equiparada a acidente do trabalho e não exige evento traumático.' },
        { t: 'A recidiva após o retorno indica falta de adesão ao tratamento pela trabalhadora.', ok: false,
          why: 'Errada. Recidiva ao retornar à mesma exposição aponta para persistência do fator causal, não para falha da paciente.' }
      ],
      comentario: 'Nexo em distúrbio musculoesquelético se constrói por convergência: exposição compatível com o segmento acometido, temporalidade, agrupamento de casos e comportamento do quadro frente ao afastamento e ao retorno. Imagem normal não afasta nada.',
      pegadinha: 'Atribuir a recidiva à adesão da trabalhadora inverte causa e efeito — ela voltou à mesma posição.',
      refs: ['Penteado — Perícias em DORT', 'Mendes, R. — Patologia do Trabalho'] },

    { enunciado: 'Sobre a conduta em relação ao retorno ao trabalho desta trabalhadora, a alternativa CORRETA é:',
      alts: [
        { t: 'O retorno deve ser precedido de exame de retorno ao trabalho, com definição de restrições em linguagem de tarefa e exposição, prazo de reavaliação e alocação em posição efetivamente distinta — devolvê-la à mesma posição sem mudanças reproduz o quadro.', ok: true,
          why: 'Correta. O exame de retorno é prévio, as restrições se escrevem por tarefa e exposição, e a realocação precisa ser real, não nominal.' },
        { t: 'Bastava o retorno à mesma função, pois o afastamento de 20 dias foi suficiente para a recuperação tecidual.', ok: false,
          why: 'Errada. Foi exatamente o que se fez, e houve recidiva em duas semanas.' },
        { t: 'As restrições devem ser comunicadas ao gestor acompanhadas do diagnóstico, para melhor dimensionamento.', ok: false,
          why: 'Errada. A chefia precisa saber o que a trabalhadora não pode fazer, não do que ela sofre.' },
        { t: 'Restrições devem ser evitadas, pois estigmatizam a trabalhadora perante a equipe.', ok: false,
          why: 'Errada. Restrições claras são o que viabiliza o retorno seguro; o estigma se combate com sigilo e cultura.' },
        { t: 'A trabalhadora deve permanecer afastada indefinidamente, já que o setor não oferece função compatível.', ok: false,
          why: 'Errada. A ausência de função compatível é problema a resolver com readaptação e mudança do posto, não com afastamento indefinido.' }
      ],
      comentario: 'Retorno seguro exige: exame prévio, restrição escrita por tarefa e exposição, prazo de reavaliação, realocação efetiva e — quando o determinante está no posto — mudança do posto. Sigilo do diagnóstico o tempo todo.',
      pegadinha: 'Comunicar o diagnóstico "para ajudar o gestor" é a violação de sigilo mais bem-intencionada da especialidade.',
      refs: ['NR-7', 'Código de Ética Médica'] },

    { enunciado: 'Sobre as recomendações coletivas ao setor, a conduta mais adequada é:',
      alts: [
        { t: 'Propor análise ergonômica do trabalho com observação da atividade real e participação dos trabalhadores, revisão da cadência e das metas, do regime de pausas e do rodízio, além de bancadas com regulagem de altura — com plano de ação, prazos e reavaliação dos indicadores.', ok: true,
          why: 'Correta. A intervenção precisa alcançar o determinante organizacional e ser verificada por reavaliação, e não apenas registrada em documento.' },
        { t: 'Implantar ginástica laboral diária de dez minutos, mantendo cadência, metas e pausas inalteradas.', ok: false,
          why: 'Errada. Sem alterar ritmo, repetitividade e recuperação, o efeito preventivo é limitado.' },
        { t: 'Aumentar a frequência dos exames médicos periódicos do setor, sem outras medidas.', ok: false,
          why: 'Errada. Examinar mais detecta mais cedo, mas não reduz a exposição que produz o dano.' },
        { t: 'Contratar mais trabalhadores para o setor sem revisar a meta individual por trabalhador.', ok: false,
          why: 'Errada. Se a meta individual permanece, a carga por trabalhador não muda.' },
        { t: 'Aguardar a estabilização dos indicadores antes de qualquer intervenção, para avaliar se a alta foi sazonal.', ok: false,
          why: 'Errada. Trinta e quatro afastamentos contra seis é sinal claro; aguardar é omissão diante de risco identificado.' }
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
        { t: 'Recusar a inclusão, por se tratar de exames sem relação com os riscos ocupacionais da função e com caráter discriminatório, sem que sigilo ou consentimento do candidato legitimem a exigência.', ok: true,
          why: 'Correta. Exames ocupacionais devem guardar relação com os riscos da função; esses dois são exemplos consagrados de exigência discriminatória vedada, e a assimetria de poder na admissão torna o consentimento inválido como salvaguarda.' },
        { t: 'Aceitar, desde que os resultados sejam mantidos em sigilo e não repassados à empresa.', ok: false,
          why: 'Errada. O sigilo é devido de todo modo e não transforma exame sem finalidade ocupacional em exame legítimo.' },
        { t: 'Aceitar, desde que o candidato assine termo de consentimento livre e esclarecido.', ok: false,
          why: 'Errada. Em situação de candidatura a emprego, o consentimento não é livre.' },
        { t: 'Aceitar apenas o teste de gravidez, como forma de proteger a gestante de exposições de risco.', ok: false,
          why: 'Errada. A proteção da gestante se faz por avaliação do posto e afastamento de exposições quando comunicada a gestação, não por triagem admissional.' },
        { t: 'Encaminhar a decisão ao setor jurídico da empresa, por se tratar de matéria contratual.', ok: false,
          why: 'Errada. A definição dos exames do programa é responsabilidade técnica do médico coordenador.' }
      ],
      comentario: 'A regra é a pertinência ao risco. Sorologia para HIV e teste de gravidez em admissão não avaliam aptidão frente a risco algum e servem à seleção discriminatória. Nem sigilo nem consentimento os legitimam.',
      pegadinha: 'As duas alternativas que "resolvem" com sigilo ou consentimento invocam princípios verdadeiros em contexto onde não se aplicam.',
      refs: ['NR-7', 'Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador'] },

    { enunciado: 'Quanto ao pedido de recebimento mensal da relação de empregados em uso de medicamento controlado, é CORRETO afirmar:',
      alts: [
        { t: 'Deve ser recusado, pois informar quem faz uso de medicamento controlado revela dado sensível de saúde e expõe o trabalhador a discriminação, ainda que os diagnósticos não sejam citados.', ok: true,
          why: 'Correta. A informação sobre uso de medicamento controlado é, ela própria, dado sensível — omitir o diagnóstico não descaracteriza a revelação.' },
        { t: 'Pode ser atendido, desde que a lista contenha apenas os nomes, sem os medicamentos.', ok: false,
          why: 'Errada. A lista já identifica quem está sob tratamento, o que basta para gerar estigma e discriminação.' },
        { t: 'Deve ser atendido porque o empregador tem direito de conhecer condições que afetem a segurança.', ok: false,
          why: 'Errada. Quando há repercussão na segurança, o instrumento é a restrição operacional — não a lista de tratamentos.' },
        { t: 'Pode ser atendido se o RH assinar termo de confidencialidade.', ok: false,
          why: 'Errada. Transferir dado sensível a setor administrativo é a própria quebra do sigilo.' },
        { t: 'Deve ser atendido apenas em relação a trabalhadores de funções de risco.', ok: false,
          why: 'Errada. Também nessas funções o que se comunica é a restrição, não a condição de saúde ou o tratamento.' }
      ],
      comentario: 'Sempre que a empresa pedir informação clínica, a resposta é traduzir a necessidade legítima em restrição operacional. "Não pode operar empilhadeira" atende a segurança; "está em uso de medicamento controlado" apenas expõe.',
      pegadinha: 'Retirar o nome do medicamento e manter a lista de pessoas parece um meio-termo razoável e continua sendo quebra de sigilo.',
      refs: ['Código de Ética Médica', 'LGPD — Lei nº 13.709/2018'] },

    { enunciado: 'Sobre a exigência de não emitir atestado de saúde ocupacional com restrição, a alternativa CORRETA é:',
      alts: [
        { t: 'A conclusão sobre aptidão é ato médico com autonomia técnica, e a aptidão com restrição é instrumento legítimo e frequentemente necessário — atender à exigência configuraria falsidade do documento e omissão de proteção ao trabalhador.', ok: true,
          why: 'Correta. O vínculo contratual não subordina o juízo técnico do médico, e suprimir restrição necessária compromete a segurança do trabalhador e a veracidade do documento.' },
        { t: 'A exigência é legítima porque a empresa contrata e custeia o serviço médico.', ok: false,
          why: 'Errada. Custear o serviço não confere poder de direção sobre a conclusão clínica.' },
        { t: 'O médico deve emitir o documento sem restrição e registrar a divergência apenas em prontuário.', ok: false,
          why: 'Errada. O documento passaria a não refletir a avaliação real, e o trabalhador seria exposto ao risco.' },
        { t: 'A alternativa correta é declarar o trabalhador inapto sempre que houver qualquer limitação, evitando a discussão.', ok: false,
          why: 'Errada. Inaptidão desproporcional prejudica o trabalhador tanto quanto a supressão da restrição.' },
        { t: 'A decisão sobre restrições cabe ao gestor da área, que conhece melhor as tarefas.', ok: false,
          why: 'Errada. O gestor informa as exigências da função; a conclusão sobre aptidão e restrição é médica.' }
      ],
      comentario: 'Quem paga não manda no juízo técnico. A aptidão com restrição existe justamente para permitir que o trabalhador permaneça trabalhando com segurança — suprimi-la não é simplificação administrativa, é falsidade.',
      pegadinha: 'A saída de "declarar inapto para evitar discussão" é o extremo oposto e também prejudica o trabalhador.',
      refs: ['NR-7', 'Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] },

    { enunciado: 'Sobre a guarda dos prontuários ocupacionais no setor de pessoal, é CORRETO afirmar:',
      alts: [
        { t: 'Os prontuários devem permanecer sob guarda médica, com sigilo preservado e prazo de guarda observado, cabendo transferência apenas a outro médico responsável — nunca a setor administrativo, ainda que com controle de acesso.', ok: true,
          why: 'Correta. A guarda do prontuário é responsabilidade médica e a sucessão se dá entre médicos; o setor de pessoal não é depositário legítimo de dado clínico.' },
        { t: 'Como a empresa custeia o serviço, os prontuários são patrimônio dela e podem ser arquivados onde ela decidir.', ok: false,
          why: 'Errada. O conteúdo clínico não está à livre disposição do empregador.' },
        { t: 'É aceitável desde que os prontuários fiquem lacrados e o setor assine termo de responsabilidade.', ok: false,
          why: 'Errada. Lacre e termo não transformam setor administrativo em guardião legítimo.' },
        { t: 'Os prontuários podem ser digitalizados e destruídos imediatamente após a digitalização, sem outros cuidados.', ok: false,
          why: 'Errada. Há requisitos de guarda e de segurança da informação a observar; a digitalização não dispensa controles.' },
        { t: 'Encerrado o contrato de trabalho do empregado, o prontuário pode ser descartado de imediato.', ok: false,
          why: 'Errada. Há prazo de guarda a observar, e o descarte prematuro elimina prova essencial para reconhecimento futuro de nexo.' }
      ],
      comentario: 'Prontuário ocupacional é documento médico: guarda por médico, prazo observado, sucessão entre médicos e sigilo que não se extingue com o fim do contrato. Em doenças de latência longa, esse arquivo é o que sustentará o nexo décadas depois.',
      pegadinha: 'A alternativa do lacre oferece solução de logística para um problema de titularidade.',
      refs: ['Código de Ética Médica', 'Resoluções do CFM sobre prontuário', 'LGPD'] },

    { enunciado: 'Quanto ao envio automático de códigos diagnósticos ao sistema de escrituração digital, a conduta CORRETA é:',
      alts: [
        { t: 'Alertar formalmente que o evento de monitoramento da saúde informa a realização dos exames e a conclusão sobre a aptidão, sem diagnóstico, e que o envio automático de códigos diagnósticos viola o sigilo e o princípio da necessidade no tratamento de dados sensíveis, devendo o sistema ser reconfigurado.', ok: true,
          why: 'Correta. O sistema digital é meio de transmissão e não suspende o sigilo; e a proteção de dados limita o tratamento ao mínimo necessário à finalidade.' },
        { t: 'Acatar a decisão da diretoria, pois a configuração do sistema é matéria de tecnologia da informação.', ok: false,
          why: 'Errada. O conteúdo técnico-médico transmitido é de responsabilidade do médico, que responde por ele.' },
        { t: 'Aceitar o envio dos diagnósticos, já que o sistema é governamental e, portanto, seguro.', ok: false,
          why: 'Errada. Segurança do canal não legitima transmitir dado que não deveria ser transmitido.' },
        { t: 'Aceitar, desde que o trabalhador seja informado de que seus diagnósticos serão enviados.', ok: false,
          why: 'Errada. Informar não transforma em legítimo o tratamento de dado excessivo à finalidade.' },
        { t: 'Solicitar que o setor de pessoal assuma formalmente a responsabilidade pelos envios, isentando o médico.', ok: false,
          why: 'Errada. A responsabilidade técnica pelo conteúdo clínico não se transfere por documento interno.' }
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
        { t: 'Informar o juízo e recusar a nomeação, pois a relação prévia médico-paciente com uma das partes compromete a imparcialidade exigida do perito, ainda que o atendimento tenha sido único, antigo e por motivo diverso.', ok: true,
          why: 'Correta. O impedimento decorre da relação prévia com a parte e não se relativiza pelo tempo decorrido, pela unicidade do atendimento ou pelo motivo diverso.' },
        { t: 'Pode atuar normalmente, pois o atendimento tratou de queixa sem relação com o objeto da perícia.', ok: false,
          why: 'Errada. O que gera o impedimento é a relação com a parte, não a coincidência de assunto.' },
        { t: 'Pode atuar desde que informe o fato às partes e obtenha concordância de ambas.', ok: false,
          why: 'Errada. Impedimento não se sana por consentimento das partes.' },
        { t: 'Deve atuar e utilizar as informações do atendimento anterior para enriquecer o laudo.', ok: false,
          why: 'Errada e duplamente grave: além do impedimento, usar dados obtidos sob sigilo assistencial em perícia viola o sigilo médico.' },
        { t: 'Deve aguardar que alguma das partes suscite o impedimento antes de tomar qualquer providência.', ok: false,
          why: 'Errada. O dever de informar é do próprio médico; a omissão é que configura a falta.' }
      ],
      comentario: 'Um caso, um papel. Quem foi assistente da parte não é perito no mesmo caso, e o dever de revelar a relação prévia é do médico — não se espera que a parte descubra.',
      pegadinha: 'Tempo decorrido, atendimento único e motivo diverso são atenuantes aparentes que não sanam impedimento.',
      refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

    { enunciado: 'Supondo que o impedimento não existisse, sobre a tese de "doença degenerativa própria da idade", a análise CORRETA é:',
      alts: [
        { t: 'A existência de alterações degenerativas não afasta o nexo: o trabalho pode ter atuado como concausa, agravando ou desencadeando a manifestação clínica de condição até então silenciosa, bastando que tenha contribuído para o resultado.', ok: true,
          why: 'Correta. A concausa preexistente não rompe o nexo; a lei não exige que o trabalho seja causa única nem principal.' },
        { t: 'Comprovada a natureza degenerativa das alterações, o nexo com o trabalho está automaticamente excluído.', ok: false,
          why: 'Errada. É exatamente o raciocínio que a figura da concausa existe para afastar.' },
        { t: 'O nexo só se sustenta se a contribuição do trabalho for demonstrada como superior a cinquenta por cento.', ok: false,
          why: 'Errada. Não há exigência de percentual mínimo de contribuição.' },
        { t: 'Reconhecida a concausa, o reconhecimento deve ser proporcional à contribuição do trabalho.', ok: false,
          why: 'Errada. Não há rateio proporcional: caracterizada a contribuição, o agravo é tratado como relacionado ao trabalho.' },
        { t: 'A idade do autor, superior a 45 anos, é elemento suficiente para atribuir o quadro ao envelhecimento.', ok: false,
          why: 'Errada. Idade é fator a considerar, jamais critério que dispense a análise da exposição.' }
      ],
      comentario: 'Concausa é contribuição, não exclusividade. Preexistente, concomitante ou superveniente — em qualquer delas, se o trabalho contribuiu, há nexo. A tese da "degeneração própria da idade" é a defesa mais comum em lombalgia e não se sustenta sozinha.',
      pegadinha: 'A exigência de "mais de cinquenta por cento" soa razoável e não existe na lógica da concausalidade.',
      refs: ['Lei nº 8.213/1991 — art. 21, I', 'Penteado — Perícias em DORT'] },

    { enunciado: 'Sobre a alegação de simulação baseada na variabilidade dos achados ao exame, é CORRETO afirmar:',
      alts: [
        { t: 'Variabilidade entre manobras é frequente em dor crônica, por flutuação dos sintomas, sensibilização central, medo do movimento e ansiedade na própria perícia, não bastando para afirmar simulação, que exige demonstração de intencionalidade e de ganho.', ok: true,
          why: 'Correta. Simulação é diagnóstico de exceção; inconsistências isoladas ocorrem também em quadros genuínos.' },
        { t: 'Qualquer inconsistência entre manobras autoriza concluir por simulação.', ok: false,
          why: 'Errada. É atalho técnico insustentável.' },
        { t: 'Levantada a suspeita, o perito deve encerrar a avaliação e concluir pela plena capacidade.', ok: false,
          why: 'Errada. A suspeita exige aprofundar a avaliação, não encerrá-la.' },
        { t: 'A ausência de compressão radicular significativa na imagem comprova que não há dor nem incapacidade.', ok: false,
          why: 'Errada. A correlação entre imagem e sintoma é fraca em dor lombar crônica.' },
        { t: 'A alegação do assistente técnico vincula o perito, que deve incorporá-la à conclusão.', ok: false,
          why: 'Errada. O perito é auxiliar imparcial do juízo e não se vincula à tese de nenhuma das partes.' }
      ],
      comentario: 'Guarde a distinção: simulação inventa ou exagera por ganho externo; dissimulação esconde; sobressimulação amplifica sintoma real. Nenhuma se afirma por inconsistência isolada, e a variabilidade é característica da dor crônica.',
      pegadinha: 'A imagem sem compressão radicular aparece como prova de ausência de dor — e não é.',
      refs: ['Penteado — Perícias em DORT', 'Camargo — Psiquiatria Ocupacional'] },

    { enunciado: 'Sobre a avaliação da capacidade laborativa neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'A avaliação deve confrontar a repercussão funcional com as exigências da atividade de pedreiro, considerando que o autor exerce atualmente função de menor demanda física — o que sugere incapacidade para a atividade habitual com capacidade residual preservada.', ok: true,
          why: 'Correta. Incapacidade é relacional: o fato de exercer função de menor exigência indica capacidade residual, compatível com incapacidade uniprofissional.' },
        { t: 'Como o autor está trabalhando, não há incapacidade a ser reconhecida em nenhum grau.', ok: false,
          why: 'Errada. Trabalhar em função de menor exigência não equivale a ter capacidade para a função habitual.' },
        { t: 'Trata-se de incapacidade omniprofissional, pois há doença crônica irreversível.', ok: false,
          why: 'Errada. Irreversibilidade não é sinônimo de incapacidade para toda e qualquer atividade — ele está trabalhando.' },
        { t: 'Incapacidade parcial e incapacidade temporária são expressões equivalentes neste contexto.', ok: false,
          why: 'Errada. Extensão e duração são eixos distintos.' },
        { t: 'A avaliação deve considerar apenas o percentual de perda anatômica demonstrado na imagem.', ok: false,
          why: 'Errada. A repercussão sobre a capacidade depende das exigências da atividade, não apenas do achado estrutural.' }
      ],
      comentario: 'Dois eixos — extensão e duração — e a escala uni, multi e omniprofissional. Trabalhar em atividade de menor exigência é dado a favor de capacidade residual, o que aponta para incapacidade para a atividade habitual, e não para incapacidade total.',
      pegadinha: '"Está trabalhando, logo é capaz" apaga a pergunta central: capaz para qual atividade?',
      refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre a elaboração do laudo pericial, a conduta CORRETA é:',
      alts: [
        { t: 'Descrever a metodologia empregada, os achados e o raciocínio que liga achados a conclusões, respondendo objetivamente aos quesitos deferidos de todas as partes, de modo que um terceiro possa acompanhar como se chegou àquela conclusão.', ok: true,
          why: 'Correta. Rastreabilidade do raciocínio é o que distingue laudo técnico de opinião, e o perito responde ao juízo, não a uma das partes.' },
        { t: 'Responder apenas aos quesitos da parte que apresentou a maior quantidade de documentos.', ok: false,
          why: 'Errada. O perito responde aos quesitos deferidos, de todas as partes.' },
        { t: 'Apresentar somente a conclusão, pois a fundamentação é matéria interna do perito.', ok: false,
          why: 'Errada. Sem fundamentação a conclusão não é verificável nem contestável.' },
        { t: 'Omitir a análise da atividade laboral, por ser matéria de ergonomia e não de medicina.', ok: false,
          why: 'Errada. Conhecer as exigências reais da atividade é essencial ao nexo e ao juízo de capacidade.' },
        { t: 'Alterar a conclusão caso o assistente técnico da parte contrária apresente parecer divergente.', ok: false,
          why: 'Errada. Divergência é legítima e faz parte do processo; alterar por conveniência compromete a integridade do trabalho.' }
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
        { t: 'A avaliação deve verificar a possibilidade de desempenho da função com as adaptações razoáveis cabíveis, e não a equivalência de desempenho ao trabalhador sem deficiência, sendo a análise individualizada e baseada no modelo biopsicossocial.', ok: true,
          why: 'Correta. A pergunta correta não é "consegue igual aos outros?" e sim "consegue, com os apoios devidos?" — e a avaliação considera a interação entre a condição de saúde e as barreiras do ambiente.' },
        { t: 'A avaliação deve basear-se exclusivamente no grau de perda auditiva medido em audiometria.', ok: false,
          why: 'Errada. O dado audiométrico é parte da avaliação; a decisão considera função, apoios disponíveis e barreiras do ambiente.' },
        { t: 'A presença de deficiência configura, por si, restrição para funções que envolvam qualquer risco ocupacional.', ok: false,
          why: 'Errada, e é presunção discriminatória. A avaliação é individualizada, por função e por risco concreto.' },
        { t: 'O médico deve atender à orientação do gerente, pois a definição de critérios de contratação é prerrogativa do empregador.', ok: false,
          why: 'Errada. A conclusão de aptidão é ato médico com responsabilidade técnica e ética própria.' },
        { t: 'A experiência prévia do candidato em função semelhante é irrelevante para a avaliação.', ok: false,
          why: 'Errada. Seis anos em função semelhante sem intercorrências é evidência direta de capacidade de desempenho.' }
      ],
      comentario: 'Deficiência não é incapacidade. A avaliação é biopsicossocial e individualizada, e a pergunta é sobre desempenho com adaptação razoável — não sobre equivalência com quem não tem deficiência.',
      pegadinha: 'Tratar deficiência como restrição automática para qualquer função de risco é a prática discriminatória mais comum na admissão.',
      refs: ['Lei nº 13.146/2015', 'ANAMT — A inclusão de pessoas com deficiência'] },

    { enunciado: 'Sobre as barreiras identificadas no setor, a conduta CORRETA é:',
      alts: [
        { t: 'Apontar formalmente que a sinalização exclusivamente sonora de empilhadeira e o alarme de evacuação apenas sonoro são barreiras que geram risco concreto, e que a adaptação razoável — sinalização visual e vibratória — é obrigação da empresa e condição para o trabalho seguro.', ok: true,
          why: 'Correta. As barreiras estão no ambiente, não na pessoa; identificá-las e exigir a adaptação é exatamente o papel do médico do trabalho na inclusão.' },
        { t: 'Concluir pela inaptidão, uma vez que o trabalhador não ouvirá os alarmes existentes.', ok: false,
          why: 'Errada. A conclusão transfere ao candidato uma limitação que é do ambiente e que tem solução técnica conhecida.' },
        { t: 'Considerar que o uso do aparelho de amplificação resolve integralmente a questão dos alarmes.', ok: false,
          why: 'Errada. Em ambiente de ruído elevado o aparelho pode não assegurar a percepção do alarme, e a proteção auditiva pode interferir no seu uso.' },
        { t: 'Recomendar que o trabalhador seja acompanhado permanentemente por um colega que o avise dos alarmes.', ok: false,
          why: 'Errada. Transferir a segurança de um trabalhador para a vigilância informal de outro não é medida de controle aceitável.' },
        { t: 'Entender que a adaptação só é exigível após a contratação e a comprovação de dificuldade concreta.', ok: false,
          why: 'Errada. A barreira já é conhecida; esperar o incidente para adaptar contraria a lógica preventiva.' }
      ],
      comentario: 'O modelo biopsicossocial desloca o problema: não é o trabalhador que "não ouve o alarme", é o alarme que não é acessível. Sinalização visual e vibratória é adaptação razoável, tecnicamente simples, e resolve o risco.',
      pegadinha: 'Delegar a segurança ao colega aparece como solução prática e é a informalização de uma medida de proteção.',
      refs: ['Lei nº 13.146/2015', 'Decreto nº 5.296/2004', 'NR-1'] },

    { enunciado: 'Quanto à proposta de alocar o candidato em função de arquivo "só para contar na cota", é CORRETO afirmar:',
      alts: [
        { t: 'A alocação deve corresponder às competências da pessoa e a uma função real, com as adaptações necessárias; destinar a pessoa com deficiência a função esvaziada apenas para cumprimento formal da cota é prática discriminatória.', ok: true,
          why: 'Correta. Inclusão significa trabalho real com adaptação, e não ocupação simbólica de vaga para fins de contagem.' },
        { t: 'A proposta é adequada, pois protege o trabalhador de qualquer risco ocupacional.', ok: false,
          why: 'Errada. "Proteger" retirando a pessoa do trabalho real é forma de exclusão travestida de cuidado.' },
        { t: 'A escolha da função é matéria exclusivamente administrativa, sem interface com o médico do trabalho.', ok: false,
          why: 'Errada. O médico avalia aptidão frente a funções concretas e deve apontar quando a alocação é inadequada.' },
        { t: 'A proposta é aceitável desde que o salário seja mantido no mesmo patamar.', ok: false,
          why: 'Errada. A questão não é salarial: é o esvaziamento do trabalho e a discriminação que ele expressa.' },
        { t: 'Pessoas com deficiência auditiva não podem exercer funções em setores com ruído elevado em nenhuma hipótese.', ok: false,
          why: 'Errada. A decisão é individualizada; ademais, o setor com ruído exige proteção auditiva para todos os trabalhadores.' }
      ],
      comentario: 'Cumprimento formal de cota com função esvaziada é discriminação. A inclusão se mede pelo trabalho real desempenhado com as adaptações devidas — e o médico do trabalho tem papel em apontar a inadequação da alocação.',
      pegadinha: 'A alternativa que "protege de qualquer risco" usa vocabulário de cuidado para justificar exclusão.',
      refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE'] },

    { enunciado: 'Sobre o laudo caracterizador de deficiência, a alternativa CORRETA é:',
      alts: [
        { t: 'Deve caracterizar a deficiência de forma fundamentada, descrevendo a condição e suas repercussões funcionais sob o modelo biopsicossocial, não se confundindo com declaração de incapacidade laborativa.', ok: true,
          why: 'Correta. O documento demonstra o enquadramento e as repercussões; deficiência e incapacidade laborativa são conceitos distintos.' },
        { t: 'Basta a indicação do código diagnóstico para caracterizar a deficiência.', ok: false,
          why: 'Errada. O código isolado não descreve repercussão funcional nem permite verificar o enquadramento.' },
        { t: 'A caracterização da deficiência equivale à declaração de incapacidade para o trabalho.', ok: false,
          why: 'Errada. A maioria das pessoas com deficiência é plenamente capaz para o trabalho.' },
        { t: 'Emitido o laudo, não cabe qualquer reavaliação posterior da condição.', ok: false,
          why: 'Errada. Condições evoluem e as necessidades de adaptação podem mudar.' },
        { t: 'O laudo deve ser arquivado no setor de pessoal com acesso irrestrito da gestão.', ok: false,
          why: 'Errada. Trata-se de documento com dado sensível, sujeito a sigilo e a acesso restrito.' }
      ],
      comentario: 'Deficiência ≠ incapacidade. O laudo descreve condição e repercussões funcionais sob o modelo biopsicossocial, é revisável e continua sujeito a sigilo — o enquadramento para cota não abre o conteúdo clínico à gestão.',
      pegadinha: 'Equiparar deficiência a incapacidade é o erro conceitual que sustenta a discriminação na contratação.',
      refs: ['Lei nº 13.146/2015', 'Manual de laudos caracterizadores de deficiência — MTE', 'LGPD'] },

    { enunciado: 'Sobre o acompanhamento do trabalhador após a admissão, a conduta CORRETA é:',
      alts: [
        { t: 'Incluí-lo no programa de controle médico conforme os riscos da função, com atenção ao monitoramento audiométrico e à compatibilidade entre proteção auditiva e aparelho de amplificação, e reavaliar periodicamente a eficácia das adaptações implantadas.', ok: true,
          why: 'Correta. O trabalhador com deficiência é exposto aos mesmos riscos do setor e precisa do mesmo acompanhamento, acrescido da verificação de que as adaptações funcionam na prática.' },
        { t: 'Dispensá-lo do monitoramento audiométrico, já que a perda auditiva é preexistente.', ok: false,
          why: 'Errada. A perda preexistente não impede agravamento pela exposição ocupacional; o monitoramento é ainda mais relevante.' },
        { t: 'Dispensá-lo do uso de proteção auditiva, por já possuir deficiência auditiva.', ok: false,
          why: 'Errada. Há audição residual a proteger, e a exposição ao ruído tem efeitos que vão além da audição.' },
        { t: 'Considerar as adaptações definitivas, sem necessidade de verificar sua eficácia.', ok: false,
          why: 'Errada. Adaptação implantada não é adaptação eficaz; a verificação faz parte do processo.' },
        { t: 'Restringir seu acesso às áreas de circulação de empilhadeiras de forma permanente.', ok: false,
          why: 'Errada. A solução é tornar a sinalização acessível, não segregar o trabalhador do ambiente.' }
      ],
      comentario: 'Inclusão não termina na contratação: o trabalhador entra no programa de controle médico como qualquer outro exposto, com atenção à audição residual e à compatibilidade entre protetor e aparelho — e as adaptações precisam ser verificadas na prática.',
      pegadinha: 'Dispensar proteção auditiva "porque já tem deficiência" ignora a audição residual e os efeitos extra-auditivos do ruído.',
      refs: ['NR-7', 'Lei nº 13.146/2015', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] }
  ] }

);
