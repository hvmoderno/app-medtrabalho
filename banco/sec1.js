/* Seção 1 — Fundamentos, Epidemiologia e Gestão em Saúde do Trabalhador
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.1-001', tema: '1.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um médico recém-contratado como coordenador do serviço de saúde ocupacional de uma metalúrgica é questionado pelo diretor de RH sobre "por que precisamos de um médico se já temos técnicos de segurança". Ao explicar a evolução histórica do campo, o médico cita Bernardino Ramazzini. A contribuição central atribuída a Ramazzini para a prática atual é:',
  alts: [
    { t: 'Introduzir na anamnese a pergunta sobre a ocupação do paciente, ligando o adoecimento ao trabalho exercido.', ok: true,
      why: 'Correta. A "De Morbis Artificum Diatriba" descreve doenças por ofício e propõe que o médico acrescente ao interrogatório clássico a pergunta sobre qual ofício o doente exerce — a origem da história ocupacional.' },
    { t: 'Criar os primeiros limites de tolerância quantitativos para agentes químicos no ambiente fabril.', ok: false,
      why: 'Errada. Limites de tolerância quantitativos são produto do século XX, ligados ao desenvolvimento da higiene ocupacional e de entidades como a ACGIH, não a Ramazzini.' },
    { t: 'Fundar o modelo de serviço especializado em segurança e medicina do trabalho dentro das empresas.', ok: false,
      why: 'Errada. O serviço especializado interno é construção normativa muito posterior, ligada à regulamentação trabalhista do século XX.' },
    { t: 'Estabelecer a distinção entre doença profissional e doença do trabalho para fins previdenciários.', ok: false,
      why: 'Errada. Essa distinção é jurídico-previdenciária e nasce com os sistemas de seguro social, não com a obra de Ramazzini.' },
    { t: 'Demonstrar experimentalmente a relação dose-resposta entre poeiras minerais e fibrose pulmonar.', ok: false,
      why: 'Errada. A demonstração experimental da relação dose-resposta em pneumoconioses é do século XX; Ramazzini fez observação clínica descritiva por ofício.' }
  ],
  comentario: 'Ramazzini é cobrado quase sempre pelo mesmo ponto: a incorporação da pergunta sobre a ocupação à anamnese. Toda a lógica moderna de nexo causal começa aí — sem história ocupacional não há suspeita, e sem suspeita não há diagnóstico de doença relacionada ao trabalho.',
  pegadinha: 'As demais alternativas descrevem marcos reais da especialidade, mas de épocas erradas. A banca aposta no candidato que reconhece o conteúdo e não confere a cronologia.',
  refs: ['Ramazzini — As doenças dos trabalhadores', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-1.2-001', tema: '1.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma reunião de um CEREST, discute-se o adoecimento de trabalhadores terceirizados de uma transportadora. Um participante afirma que a abordagem deve ser "de Saúde do Trabalhador, e não de Medicina do Trabalho clássica". Assinale a alternativa que descreve CORRETAMENTE o que diferencia o campo da Saúde do Trabalhador do modelo da Medicina do Trabalho clássica:',
  alts: [
    { t: 'A Saúde do Trabalhador toma o processo de trabalho como objeto de análise e transformação, com participação dos trabalhadores, enquanto o modelo clássico centra-se no indivíduo doente e na adaptação do homem ao trabalho.', ok: true,
      why: 'Correta. O campo da Saúde do Trabalhador desloca o objeto do indivíduo para o processo de trabalho e incorpora o trabalhador como sujeito do conhecimento e da ação, não apenas como objeto de exame.' },
    { t: 'A Saúde do Trabalhador restringe-se aos trabalhadores com vínculo formal, enquanto a Medicina do Trabalho clássica alcança também informais e autônomos.', ok: false,
      why: 'Errada, e é uma inversão. O campo da Saúde do Trabalhador é justamente o que se propõe a alcançar todos os trabalhadores, independentemente da forma de inserção, inclusive informais.' },
    { t: 'A Saúde do Trabalhador é executada exclusivamente por serviços privados contratados pelas empresas, ao contrário da Medicina do Trabalho, que é atribuição do poder público.', ok: false,
      why: 'Errada, e novamente invertida. O campo da Saúde do Trabalhador está estruturado dentro do sistema público de saúde; o serviço interno à empresa é a marca do modelo clássico.' },
    { t: 'A diferença é apenas terminológica: os dois termos designam a mesma prática, mudando somente a nomenclatura adotada após a Constituição de 1988.', ok: false,
      why: 'Errada. Há diferença conceitual de objeto, de sujeito e de inserção institucional; a mudança de nome acompanha uma mudança de paradigma, não a substitui.' },
    { t: 'A Saúde do Trabalhador abandona a investigação de nexo causal individual, por considerá-la incompatível com a determinação social do adoecimento.', ok: false,
      why: 'Errada. O reconhecimento do nexo individual continua sendo instrumento essencial — inclusive para acesso a direitos. O campo amplia a análise, não descarta o nexo.' }
  ],
  comentario: 'O eixo da resposta é o deslocamento do objeto: do corpo do trabalhador para o processo de trabalho, com o trabalhador como sujeito. Medicina do Trabalho clássica = adaptar o homem ao trabalho; Saúde Ocupacional = equipe multiprofissional e higiene; Saúde do Trabalhador = processo de trabalho, determinação social e participação.',
  pegadinha: 'Duas alternativas trazem inversões exatas da resposta certa — trocar quem alcança informais e quem é público. Ler rápido derruba.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

{ id: 'q-1.3-001', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo de coorte acompanhou 800 trabalhadores expostos a um solvente e 800 não expostos durante 10 anos. Ocorreram 48 casos de neuropatia periférica entre os expostos e 12 entre os não expostos. Considerando os dados, o risco relativo e a interpretação corretos são:',
  alts: [
    { t: 'RR = 4,0 — a incidência de neuropatia entre os expostos foi quatro vezes a dos não expostos.', ok: true,
      why: 'Correta. Incidência nos expostos = 48/800 = 6%; nos não expostos = 12/800 = 1,5%. RR = 6/1,5 = 4,0, e o RR compara incidências entre expostos e não expostos.' },
    { t: 'RR = 4,0 — quatro por cento dos casos de neuropatia são atribuíveis ao solvente.', ok: false,
      why: 'Errada. O valor do RR está certo, mas a leitura não: RR não é percentual de casos atribuíveis. Fração atribuível é outro cálculo, derivado do RR.' },
    { t: 'RR = 4,5 — a diferença absoluta de incidência entre os grupos é de 4,5 pontos percentuais.', ok: false,
      why: 'Errada. 4,5 pontos percentuais é a diferença de risco (6% − 1,5%), medida de impacto absoluto, e não o risco relativo.' },
    { t: 'RR = 0,25 — os expostos apresentaram um quarto do risco dos não expostos.', ok: false,
      why: 'Errada. É a razão invertida. Como os expostos adoeceram mais, o RR tem de ser maior que 1.' },
    { t: 'Não é possível calcular o risco relativo com esse desenho; apenas a razão de chances é estimável.', ok: false,
      why: 'Errada. É exatamente na coorte que a incidência é medida diretamente e o RR pode ser calculado. A limitação de só estimar razão de chances é do estudo de caso-controle.' }
  ],
  comentario: 'A questão cobra duas coisas ao mesmo tempo: o cálculo e a interpretação. RR = incidência nos expostos ÷ incidência nos não expostos. Diferença de risco é subtração, fração atribuível é derivada, e razão de chances é a medida do caso-controle.',
  pegadinha: 'Há uma alternativa com o número certo e a leitura errada. Acertar a conta e não ler a interpretação é o erro mais comum aqui.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-002', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um programa de saúde ocupacional pretende adotar um teste de triagem para uma doença de baixa prevalência na população de trabalhadores examinados. O teste tem sensibilidade de 95% e especificidade de 90%. Sobre o desempenho esperado, é CORRETO afirmar:',
  alts: [
    { t: 'O valor preditivo positivo será baixo, porque em baixa prevalência a maior parte dos resultados positivos será de falsos-positivos.', ok: true,
      why: 'Correta. Sensibilidade e especificidade são propriedades do teste, mas o valor preditivo positivo depende da prevalência: quanto menor a prevalência, maior a proporção de positivos que são falsos.' },
    { t: 'O valor preditivo positivo será alto, pois a sensibilidade elevada garante que os positivos sejam verdadeiros.', ok: false,
      why: 'Errada. Sensibilidade alta garante poucos falsos-negativos, não poucos falsos-positivos. Quem controla falso-positivo é a especificidade — e ainda assim o VPP depende da prevalência.' },
    { t: 'A sensibilidade do teste cairá quando aplicado a essa população de baixa prevalência.', ok: false,
      why: 'Errada. Sensibilidade não varia com a prevalência; ela é medida entre os doentes. Pode variar com o espectro de gravidade da doença, o que é outro fenômeno.' },
    { t: 'O valor preditivo negativo será baixo, o que torna o teste inadequado para descartar a doença.', ok: false,
      why: 'Errada, e é o oposto. Em baixa prevalência o valor preditivo negativo tende a ser muito alto — o teste é bom justamente para descartar.' },
    { t: 'Aumentar o ponto de corte do teste elevará simultaneamente a sensibilidade e a especificidade.', ok: false,
      why: 'Errada. Deslocar o ponto de corte troca uma pela outra: ganha-se especificidade e perde-se sensibilidade, ou o inverso.' }
  ],
  comentario: 'É o clássico da triagem ocupacional: sensibilidade e especificidade não mudam com a prevalência, mas os valores preditivos mudam. Rastrear doença rara com teste bom gera muitos falsos-positivos — daí a necessidade de teste confirmatório e o cuidado com o dano do rastreamento.',
  pegadinha: 'A banca oferece uma alternativa que troca VPP por VPN. Em baixa prevalência, o que despenca é o VPP, não o VPN.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Ferreira Junior — Rastreamento de doenças'] },

{ id: 'q-1.8-001', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Após um acidente com amputação de dedos em uma prensa, a equipe de vigilância em saúde do trabalhador do município comparece à empresa. Sobre a atuação da VISAT nesse caso, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A atuação da VISAT depende de autorização prévia do empregador para o ingresso no estabelecimento e para o acesso aos documentos de saúde e segurança.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. A vigilância em saúde do trabalhador é atividade de poder de polícia sanitária e tem prerrogativa de ingresso e de acesso a informações, não ficando condicionada à autorização do empregador.' },
    { t: 'A VISAT pode analisar o processo de trabalho e o posto envolvido, e não apenas o trabalhador acidentado.', ok: false,
      why: 'Verdadeira. O objeto da VISAT são os ambientes e processos de trabalho — é essa a diferença em relação a uma perícia individual.' },
    { t: 'A investigação pode resultar em recomendações, exigências e, conforme o risco identificado, em medida de interdição.', ok: false,
      why: 'Verdadeira. A interdição de máquina, setor ou estabelecimento diante de risco grave e iminente é instrumento previsto para a autoridade competente.' },
    { t: 'O caso deve ser notificado no sistema de informação de agravos de notificação, independentemente da emissão da comunicação de acidente do trabalho.', ok: false,
      why: 'Verdadeira. São fluxos distintos e não excludentes: a notificação alimenta a vigilância em saúde; a comunicação de acidente do trabalho tem finalidade previdenciária.' },
    { t: 'A vigilância pode articular-se com a inspeção do trabalho e com o Ministério Público, dado o caráter intersetorial da ação.', ok: false,
      why: 'Verdadeira. A intersetorialidade é característica estruturante da VISAT, prevista na política nacional da área.' }
  ],
  comentario: 'Duas ideias sustentam a questão: a VISAT tem como objeto o ambiente e o processo de trabalho (não o indivíduo), e ela é exercício de poder sanitário do Estado — logo não depende de consentimento do empregador. Notificação ao sistema de agravos e comunicação de acidente convivem; uma não substitui a outra.',
  pegadinha: 'É uma questão de "assinale a INCORRETA". Quatro afirmações verdadeiras e plausíveis fazem o candidato apressado marcar a primeira que reconhece como certa.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.9-001', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um trabalhador de frigorífico recebe diagnóstico de tendinopatia de ombro com nexo ocupacional estabelecido pelo médico assistente. O médico do trabalho da empresa é consultado sobre as providências de registro. A conduta CORRETA é:',
  alts: [
    { t: 'Providenciar a notificação do agravo relacionado ao trabalho no sistema de informação de agravos de notificação e assegurar a emissão da comunicação de acidente do trabalho, pois os dois registros têm finalidades diferentes.', ok: true,
      why: 'Correta. A notificação alimenta a vigilância epidemiológica em saúde do trabalhador; a comunicação de acidente do trabalho tem finalidade previdenciária e assegura direitos. Um registro não dispensa o outro.' },
    { t: 'Emitir apenas a comunicação de acidente do trabalho, já que a notificação em sistema de agravos cabe exclusivamente à rede pública de saúde.', ok: false,
      why: 'Errada. A notificação de agravos relacionados ao trabalho é obrigação de serviços de saúde públicos e privados, incluindo os que atendem trabalhadores por meio das empresas.' },
    { t: 'Realizar apenas a notificação no sistema de agravos, pois a comunicação de acidente do trabalho só é cabível em acidente típico com lesão imediata.', ok: false,
      why: 'Errada. Doença relacionada ao trabalho é equiparada a acidente do trabalho para fins de comunicação — não é exclusividade do acidente típico.' },
    { t: 'Aguardar a conclusão da perícia médica previdenciária antes de qualquer registro, para não caracterizar nexo prematuramente.', ok: false,
      why: 'Errada. O registro não depende do reconhecimento pericial; a perícia é etapa posterior e independente. Aguardar apenas retarda o acesso a direitos e à vigilância.' },
    { t: 'Registrar somente no prontuário ocupacional, pois a divulgação externa de diagnóstico violaria o sigilo médico.', ok: false,
      why: 'Errada. A notificação compulsória é dever legal e não configura quebra de sigilo; ela ocorre em ambiente sanitário protegido.' }
  ],
  comentario: 'A questão testa se o candidato distingue os dois fluxos: notificação (vigilância, saúde) e comunicação de acidente do trabalho (previdência, direitos). Eles coexistem, têm bases legais distintas e nenhum depende do resultado da perícia.',
  pegadinha: 'A alternativa do sigilo médico é sedutora porque invoca um princípio verdadeiro em contexto errado: notificação compulsória é exceção legal ao sigilo.',
  refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] }

);
