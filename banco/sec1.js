/* Seção 1 — Fundamentos, Epidemiologia e Gestão em Saúde do Trabalhador
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.1-001', tema: '1.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um médico recém-contratado como coordenador do serviço de saúde ocupacional de uma metalúrgica é questionado pelo diretor de RH sobre "por que precisamos de um médico se já temos técnicos de segurança". Ao explicar a evolução histórica do campo, o médico cita Bernardino Ramazzini. A contribuição central atribuída a Ramazzini para a prática atual é:',
  alts: [
    { t: 'Introduzir na anamnese a pergunta sobre a ocupação, ligando o adoecimento ao trabalho exercido', ok: true,
      why: 'Correta. É a contribuição fundadora da medicina do trabalho como campo.' },
    { t: 'Criar os primeiros limites de tolerância quantitativos para agentes químicos no ambiente fabril.', ok: false,
      why: 'Errada. Os limites quantitativos são muito posteriores.' },
    { t: 'Fundar o modelo de serviço especializado em segurança e medicina do trabalho dentro das empresas.', ok: false,
      why: 'Errada. Esse modelo é do século vinte.' },
    { t: 'Estabelecer a distinção entre doença profissional e doença do trabalho para fins previdenciários.', ok: false,
      why: 'Errada. É construção jurídica bem posterior.' },
    { t: 'Demonstrar experimentalmente a relação dose-resposta entre poeiras minerais e fibrose pulmonar.', ok: false,
      why: 'Errada. A toxicologia experimental é posterior.' }
  ],
  comentario: 'Ramazzini é cobrado quase sempre pelo mesmo ponto: a incorporação da pergunta sobre a ocupação à anamnese. Toda a lógica moderna de nexo causal começa aí — sem história ocupacional não há suspeita, e sem suspeita não há diagnóstico de doença relacionada ao trabalho.',
  pegadinha: 'As demais alternativas descrevem marcos reais da especialidade, mas de épocas erradas. A banca aposta no candidato que reconhece o conteúdo e não confere a cronologia.',
  refs: ['Ramazzini — As doenças dos trabalhadores', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-1.2-001', tema: '1.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma reunião de um CEREST, discute-se o adoecimento de trabalhadores terceirizados de uma transportadora. Um participante afirma que a abordagem deve ser "de Saúde do Trabalhador, e não de Medicina do Trabalho clássica". Assinale a alternativa que descreve CORRETAMENTE o que diferencia o campo da Saúde do Trabalhador do modelo da Medicina do Trabalho clássica:',
  alts: [
    { t: 'A primeira toma o processo de trabalho como objeto, com participação dos próprios trabalhadores', ok: true,
      why: 'Correta. O modelo clássico centra-se no indivíduo doente e na adaptação ao trabalho.' },
    { t: 'A primeira se restringe aos com vínculo formal, e a clássica alcança informais e autônomos.', ok: false,
      why: 'Errada, é o inverso: a saúde do trabalhador é que alcança todos.' },
    { t: 'A primeira é executada por serviços privados, e a clássica é atribuição do poder público.', ok: false,
      why: 'Errada. A saúde do trabalhador é campo do sistema público de saúde.' },
    { t: 'A diferença é apenas terminológica: os dois termos designam a mesma prática, com outro nome.', ok: false,
      why: 'Errada. Diferem em objeto, método e sujeito da ação.' },
    { t: 'A primeira abandona a investigação de nexo individual, por incompatível com a determinação social.', ok: false,
      why: 'Errada. O nexo individual permanece parte do campo.' }
  ],
  comentario: 'O eixo da resposta é o deslocamento do objeto: do corpo do trabalhador para o processo de trabalho, com o trabalhador como sujeito. Medicina do Trabalho clássica = adaptar o homem ao trabalho; Saúde Ocupacional = equipe multiprofissional e higiene; Saúde do Trabalhador = processo de trabalho, determinação social e participação.',
  pegadinha: 'Duas alternativas trazem inversões exatas da resposta certa — trocar quem alcança informais e quem é público. Ler rápido derruba.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

{ id: 'q-1.3-001', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo de coorte acompanhou 800 trabalhadores expostos a um solvente e 800 não expostos durante 10 anos. Ocorreram 48 casos de neuropatia periférica entre os expostos e 12 entre os não expostos. Considerando os dados, o risco relativo e a interpretação corretos são:',
  alts: [
    { t: 'Risco relativo de quatro: a incidência entre os expostos foi quatro vezes a dos não expostos', ok: true,
      why: 'Correta. É a razão entre as incidências dos dois grupos.' },
    { t: 'Risco relativo de quatro, indicando que quatro por cento dos casos são atribuíveis ao solvente.', ok: false,
      why: 'Errada. Confunde risco relativo com fração atribuível.' },
    { t: 'Risco relativo de quatro e meio, correspondente à diferença absoluta entre as duas incidências.', ok: false,
      why: 'Errada. Diferença absoluta é outra medida, não o risco relativo.' },
    { t: 'Risco relativo de vinte e cinco centésimos: os expostos tiveram um quarto do risco dos demais.', ok: false,
      why: 'Errada. Inverte numerador e denominador.' },
    { t: 'Não é possível calcular o risco relativo com esse desenho; apenas a razão de chances é estimável.', ok: false,
      why: 'Errada. Em coorte o risco relativo é diretamente calculável.' }
  ],
  comentario: 'A questão cobra duas coisas ao mesmo tempo: o cálculo e a interpretação. RR = incidência nos expostos ÷ incidência nos não expostos. Diferença de risco é subtração, fração atribuível é derivada, e razão de chances é a medida do caso-controle.',
  pegadinha: 'Há uma alternativa com o número certo e a leitura errada. Acertar a conta e não ler a interpretação é o erro mais comum aqui.',
  refs: ['Fletcher — Epidemiologia Clínica'] },

{ id: 'q-1.3-002', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um programa de saúde ocupacional pretende adotar um teste de triagem para uma doença de baixa prevalência na população de trabalhadores examinados. O teste tem sensibilidade de 95% e especificidade de 90%. Sobre o desempenho esperado, é CORRETO afirmar:',
  alts: [
    { t: 'O valor preditivo positivo será baixo: em baixa prevalência predominam os resultados falso-positivos', ok: true,
      why: 'Correta. Por isso a triagem exige exame confirmatório.' },
    { t: 'O valor preditivo positivo será alto, pois a sensibilidade elevada garante positivos verdadeiros.', ok: false,
      why: 'Errada. Sensibilidade alta não garante valor preditivo positivo alto.' },
    { t: 'A sensibilidade do teste cairá quando ele for aplicado a uma população de baixa prevalência.', ok: false,
      why: 'Errada. Sensibilidade é propriedade do teste, não da prevalência.' },
    { t: 'O valor preditivo negativo será baixo, o que torna o teste inadequado para descartar a doença.', ok: false,
      why: 'Errada. Em baixa prevalência o valor preditivo negativo é alto.' },
    { t: 'Aumentar o ponto de corte do teste elevará simultaneamente a sensibilidade e a especificidade.', ok: false,
      why: 'Errada. O ganho em uma implica perda na outra.' }
  ],
  comentario: 'É o clássico da triagem ocupacional: sensibilidade e especificidade não mudam com a prevalência, mas os valores preditivos mudam. Rastrear doença rara com teste bom gera muitos falsos-positivos — daí a necessidade de teste confirmatório e o cuidado com o dano do rastreamento.',
  pegadinha: 'A banca oferece uma alternativa que troca VPP por VPN. Em baixa prevalência, o que despenca é o VPP, não o VPN.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Ferreira Junior — Rastreamento de doenças'] },

{ id: 'q-1.8-001', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Após um acidente com amputação de dedos em uma prensa, a equipe de vigilância em saúde do trabalhador do município comparece à empresa. Sobre a atuação da VISAT nesse caso, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A atuação depende de autorização prévia do empregador para ingressar e para acessar documentos', ok: true,
      why: 'É a INCORRETA. A vigilância tem competência própria de acesso e inspeção.' },
    { t: 'Pode analisar o processo de trabalho e o posto envolvido, e não apenas o trabalhador acidentado.', ok: false,
      why: 'Correta, portanto não é a resposta. O objeto é o processo de trabalho.' },
    { t: 'A investigação pode gerar recomendações, exigências e, conforme o risco, medida de interdição.', ok: false,
      why: 'Correta, portanto não é a resposta. São instrumentos previstos.' },
    { t: 'O caso deve ser notificado no sistema de agravos, independentemente da comunicação de acidente.', ok: false,
      why: 'Correta, portanto não é a resposta. São registros distintos e ambos devidos.' },
    { t: 'A vigilância pode articular-se com a inspeção do trabalho e com o ministério público no caso.', ok: false,
      why: 'Correta, portanto não é a resposta. A intersetorialidade é característica do campo.' }
  ],
  comentario: 'Duas ideias sustentam a questão: a VISAT tem como objeto o ambiente e o processo de trabalho (não o indivíduo), e ela é exercício de poder sanitário do Estado — logo não depende de consentimento do empregador. Notificação ao sistema de agravos e comunicação de acidente convivem; uma não substitui a outra.',
  pegadinha: 'É uma questão de "assinale a INCORRETA". Quatro afirmações verdadeiras e plausíveis fazem o candidato apressado marcar a primeira que reconhece como certa.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.9-001', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um trabalhador de frigorífico recebe diagnóstico de tendinopatia de ombro com nexo ocupacional estabelecido pelo médico assistente. O médico do trabalho da empresa é consultado sobre as providências de registro. A conduta CORRETA é:',
  alts: [
    { t: 'Notificar o agravo no sistema de agravos e assegurar a comunicação de acidente do trabalho devida', ok: true,
      why: 'Correta. Os dois registros têm finalidades diferentes e ambos são devidos.' },
    { t: 'Emitir apenas a comunicação de acidente, pois a notificação cabe exclusivamente à rede pública.', ok: false,
      why: 'Errada. A notificação alcança serviços públicos e privados.' },
    { t: 'Notificar apenas no sistema de agravos, pois a comunicação só cabe em acidente típico com lesão.', ok: false,
      why: 'Errada. Doença ocupacional é equiparada e a comunicação é devida.' },
    { t: 'Aguardar a conclusão da perícia previdenciária antes de qualquer registro, para não antecipar nexo.', ok: false,
      why: 'Errada. A notificação se faz por suspeita e não espera a perícia.' },
    { t: 'Registrar somente no prontuário ocupacional, pois a divulgação externa violaria o sigilo médico.', ok: false,
      why: 'Errada. A notificação compulsória é exceção legal ao sigilo.' }
  ],
  comentario: 'A questão testa se o candidato distingue os dois fluxos: notificação (vigilância, saúde) e comunicação de acidente do trabalho (previdência, direitos). Eles coexistem, têm bases legais distintas e nenhum depende do resultado da perícia.',
  pegadinha: 'A alternativa do sigilo médico é sedutora porque invoca um princípio verdadeiro em contexto errado: notificação compulsória é exceção legal ao sigilo.',
  refs: ['SINAN — Ministério da Saúde', 'Lei nº 8.213/1991'] }

);
