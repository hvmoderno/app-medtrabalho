/* Lote S — 5.4, 5.3, 2.9, 4.9, 4.7, 6.2, 1.2, 7.1, 7.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-5.4-070', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os quesitos formulados às partes em perícia judicial trabalhista, é CORRETO afirmar:',
  alts: [
    { t: 'Responde ao que é técnico, podendo apontar quesito jurídico ou fora do objeto da perícia', ok: true,
      why: 'Correta. Responder a questão de direito extrapola a função e enfraquece o laudo.' },
    { t: 'Responde a todos os quesitos formulados pelas partes, inclusive os de natureza jurídica.', ok: false,
      why: 'Errada. Questão de direito não é objeto da perícia médica.' },
    { t: 'Responde ao que é técnico, invalidando automaticamente o laudo os quesitos não respondidos.', ok: false,
      why: 'Errada. Cabe declarar por que não são de sua competência.' },
    { t: 'Responde ao que é técnico, podendo deixar de fundamentar as respostas a quesitos objetivos.', ok: false,
      why: 'Errada. Toda resposta pericial exige fundamentação.' },
    { t: 'Responde ao que é técnico e deve concluir sobre a existência de culpa do empregador no evento.', ok: false,
      why: 'Errada. Culpa é juízo jurídico, não pericial.' }
  ],
  comentario: 'O perito responde o que é técnico e diz claramente quando o quesito é jurídico. Concluir sobre culpa é o desvio mais frequente — descreve-se condição, exposição e nexo; a culpa é do juiz.',
  pegadinha: 'Responder a tudo para parecer completo é o que faz o laudo invadir competência que não é sua.',
  refs: ['Código de Processo Civil', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.3-060', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre acidente de trajeto e, durante a internação, adquire infecção hospitalar que prolonga o afastamento. Sobre a análise do caso, é CORRETO afirmar:',
  alts: [
    { t: 'A infecção adquirida no tratamento é concausa superveniente e segue vinculada ao acidente.', ok: true,
      why: 'Correta. Responde pelo prolongamento do afastamento sem romper o nexo.' },
    { t: 'A infecção adquirida no tratamento é evento novo e rompe o nexo com o acidente original.', ok: false,
      why: 'Errada. É concausa superveniente e mantém o vínculo.' },
    { t: 'A infecção é concausa superveniente, não guardando o acidente de trajeto relação com o trabalho.', ok: false,
      why: 'Errada. O acidente de trajeto é equiparado para fins legais.' },
    { t: 'A infecção é concausa, devendo o prolongamento por complicação ser tratado como doença comum.', ok: false,
      why: 'Errada. Segue vinculado ao evento original.' },
    { t: 'A infecção é concausa superveniente, reduzindo proporcionalmente os efeitos do reconhecimento.', ok: false,
      why: 'Errada. Não há previsão de fracionamento dos efeitos.' }
  ],
  comentario: 'Complicação surgida no tratamento é concausa superveniente e mantém o vínculo com o evento original. Acidente de trajeto é equiparado — e não há rateio proporcional por concausa.',
  pegadinha: 'A intuição de que um evento novo "quebra a cadeia" é exatamente o que a concausa superveniente contraria.',
  refs: ['Lei nº 8.213/1991 — arts. 21 e 21-A'] },

{ id: 'q-2.9-060', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a intoxicação por organofosforados em trabalhadores rurais, é CORRETO afirmar:',
  alts: [
    { t: 'Decorre da inibição de colinesterases, e a conduta na intoxicação aguda é sempre clínica', ok: true,
      why: 'Correta. A dosagem serve à vigilância, mas o tratamento não espera o laboratório.' },
    { t: 'Decorre da inibição de colinesterases, devendo o tratamento aguardar a confirmação laboratorial.', ok: false,
      why: 'Errada. A conduta é clínica e não pode esperar o resultado.' },
    { t: 'Decorre da inibição de colinesterases, ocorrendo a absorção apenas por via respiratória.', ok: false,
      why: 'Errada. A absorção cutânea é via importante nesses agentes.' },
    { t: 'Decorre da inibição de colinesterases, não sendo descritas síndrome intermediária nem neuropatia tardia.', ok: false,
      why: 'Errada. Ambas são descritas nesse tipo de intoxicação.' },
    { t: 'Decorre da inibição de colinesterases, sendo a troca de roupas contaminadas medida secundária.', ok: false,
      why: 'Errada. A descontaminação é prioritária e reduz a absorção continuada.' }
  ],
  comentario: 'Organofosforado: inibição de colinesterase, quadro muscarínico, nicotínico e central, com absorção também cutânea. Descontaminar cedo, tratar sem esperar exame, e lembrar da síndrome intermediária e da neuropatia tardia depois da fase aguda.',
  pegadinha: 'Esperar a colinesterase para iniciar tratamento troca a urgência clínica por uma confirmação que chega tarde.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Ministério da Saúde — intoxicações por agrotóxicos'] },

{ id: 'q-4.9-060', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as zoonoses de interesse ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Rurais, abatedouros e veterinários se expõem a brucelose, leptospirose, raiva e febre maculosa.', ok: true,
      why: 'Correta. A suspeita depende de perguntar sobre contato com animais, o que raramente se faz.' },
    { t: 'As zoonoses ocupacionais são raras a ponto de não justificarem suspeita clínica de rotina.', ok: false,
      why: 'Errada. São subdiagnosticadas justamente porque a pergunta não é feita.' },
    { t: 'Vários grupos se expõem, transmitindo-se a brucelose ocupacional apenas pela ingestão de laticínios.', ok: false,
      why: 'Errada. Contato com tecidos e aerossóis são vias ocupacionais relevantes.' },
    { t: 'Vários grupos se expõem, sem indicação ocupacional para a profilaxia antirrábica pré-exposição.', ok: false,
      why: 'Errada. Veterinários e tratadores têm indicação expressa.' },
    { t: 'Vários grupos se expõem, sendo dispensável a notificação quando o trabalhador é informal.', ok: false,
      why: 'Errada. A notificação independe do vínculo.' }
  ],
  comentario: 'Brucelose, leptospirose, raiva, febre maculosa: subdiagnosticadas porque quase ninguém pergunta pelo contato com animais. Há profilaxia pré-exposição para grupos de risco, e a notificação não depende de vínculo formal.',
  pegadinha: 'Chamar de rara o que é subdiagnosticado consolida o próprio subdiagnóstico.',
  refs: ['Ministério da Saúde — zoonoses', 'NR-31', 'PNSTT'] },

{ id: 'q-4.7-070', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação psiquiátrica em contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Deve considerar o contexto de trabalho como determinante ou agravante possível daquele quadro', ok: true,
      why: 'Correta. Sem atribuir tudo à personalidade nem tratar insatisfação como adoecimento.' },
    { t: 'Deve interpretar o sofrimento prioritariamente como característica de personalidade do trabalhador.', ok: false,
      why: 'Errada. O contexto de trabalho pode ser determinante ou agravante.' },
    { t: 'Deve considerar o contexto, configurando toda insatisfação relatada com o trabalho transtorno mental.', ok: false,
      why: 'Errada. Insatisfação não é diagnóstico.' },
    { t: 'Deve considerar o contexto, comunicando o diagnóstico ao empregador para viabilizar os ajustes.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional; o diagnóstico é sigiloso.' },
    { t: 'Deve considerar o contexto, implicando o uso de medicação psiquiátrica restrição de função.', ok: false,
      why: 'Errada. A restrição decorre do efeito funcional, não do uso em si.' }
  ],
  comentario: 'Dois erros simétricos: reduzir tudo à personalidade do trabalhador e transformar toda insatisfação em diagnóstico. Restrição decorre de repercussão funcional, nunca do simples uso de medicação — e o diagnóstico não sai do consultório.',
  pegadinha: 'Restringir função por uso de psicotrópico confunde tratamento com incapacidade.',
  refs: ['Código de Ética Médica', 'Ministério da Saúde — transtornos mentais relacionados ao trabalho'] },

{ id: 'q-6.2-060', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a inclusão de pessoas com deficiência no trabalho e o papel do médico do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O foco é a compatibilidade entre capacidades e exigências, com as adaptações razoáveis disponíveis.', ok: true,
      why: 'Correta. O admissional não pode inviabilizar a contratação para vaga reservada.' },
    { t: 'O foco é a condição do candidato, justificando a deficiência, por si, a conclusão de inaptidão.', ok: false,
      why: 'Errada. É preciso demonstrar incompatibilidade insuperável por adaptação.' },
    { t: 'O foco é a compatibilidade, devendo a avaliação desconsiderar adaptações possíveis do posto.', ok: false,
      why: 'Errada. As adaptações razoáveis integram a análise.' },
    { t: 'O foco é a compatibilidade, dispensando a reserva legal de vagas a avaliação com a função.', ok: false,
      why: 'Errada. A avaliação de compatibilidade continua devida, com adaptações.' },
    { t: 'O foco é a compatibilidade, sendo desnecessário o acompanhamento quando o exame conclui pela aptidão.', ok: false,
      why: 'Errada. O acompanhamento verifica se as adaptações foram implementadas.' }
  ],
  comentario: 'Inclusão: compara-se capacidade e exigência considerando as adaptações razoáveis, e acompanha-se depois se elas existem de fato. O admissional não pode virar o mecanismo que esvazia a reserva de vagas.',
  pegadinha: 'Avaliar o posto sem adaptações produz inaptidão para praticamente toda deficiência.',
  refs: ['Lei nº 13.146/2015 — Estatuto da Pessoa com Deficiência', 'Lei nº 8.213/1991 — art. 93'] },

{ id: 'q-1.2-032', tema: '1.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a saúde da trabalhadora e as especificidades de gênero no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Dupla jornada, segregação ocupacional e maior exposição a assédio são determinantes específicos.', ok: true,
      why: 'Correta. Postos desenhados por antropometria masculina somam sobrecarga nas mesmas tarefas.' },
    { t: 'As exposições ocupacionais afetam homens e mulheres de forma idêntica em todos os aspectos.', ok: false,
      why: 'Errada. Há determinantes específicos e diferenças de exposição e de resposta.' },
    { t: 'Há determinantes específicos, sem que a antropometria influencie a carga quando a tarefa é a mesma.', ok: false,
      why: 'Errada. Posto dimensionado para outra estatura aumenta o esforço exigido.' },
    { t: 'Há determinantes específicos, sendo a dupla jornada assunto pessoal sem repercussão ocupacional.', ok: false,
      why: 'Errada. Reduz recuperação e é determinante reconhecido de adoecimento.' },
    { t: 'Há determinantes específicos, sendo a resposta restringir o acesso das mulheres a certas funções.', ok: false,
      why: 'Errada. A resposta é adequar os postos, não excluir pessoas.' }
  ],
  comentario: 'Gênero no trabalho: dupla jornada reduzindo recuperação, segregação ocupacional, assédio e postos desenhados para outro corpo. A resposta é adequar o posto — restringir acesso é o oposto da solução.',
  pegadinha: 'Supor exposição idêntica na mesma tarefa ignora que o posto foi dimensionado para outro percentil antropométrico.',
  refs: ['OIT — gênero e trabalho', 'NR-17', 'PNSTT'] },

{ id: 'q-7.1-054', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o trabalho de adolescentes e sua proteção, é CORRETO afirmar:',
  alts: [
    { t: 'Há vedação de trabalho noturno, perigoso ou insalubre aos menores de dezoito anos de idade', ok: true,
      why: 'Correta. A lista de piores formas orienta a identificação das atividades proibidas.' },
    { t: 'Há vedações etárias, sendo o trabalho insalubre permitido aos dezesseis com pagamento de adicional.', ok: false,
      why: 'Errada. A vedação alcança todos os menores de dezoito anos.' },
    { t: 'Há vedações etárias, tornando a autorização dos responsáveis lícito o trabalho perigoso.', ok: false,
      why: 'Errada. A vedação é legal e não se afasta por autorização.' },
    { t: 'Há vedações etárias, sendo o trabalho noturno permitido ao aprendiz maior de dezesseis anos.', ok: false,
      why: 'Errada. A vedação de trabalho noturno alcança os menores de dezoito.' },
    { t: 'Há vedações etárias, não requerendo adolescentes adequação ergonômica específica dos postos.', ok: false,
      why: 'Errada. O desenvolvimento em curso exige adequação própria.' }
  ],
  comentario: 'Menor de dezoito: nada de noturno, perigoso ou insalubre — sem exceção por adicional, por autorização dos pais ou por condição de aprendiz. E o posto precisa de adequação ergonômica própria.',
  pegadinha: 'O adicional de insalubridade compra tempo de exposição de adulto e não torna lícito nada em relação a menores.',
  refs: ['CLT — arts. 402 a 441', 'ECA', 'Decreto sobre piores formas de trabalho infantil'] },

{ id: 'q-7.8-033', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a proteção de dados de saúde de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'São categoria sensível, com exigência de finalidade específica, minimização e controle de acesso', ok: true,
      why: 'Correta. Prontuários ocupacionais não podem ser acessados por setores administrativos.' },
    { t: 'São categoria sensível, podendo o prontuário ser mantido junto ao arquivo funcional do trabalhador.', ok: false,
      why: 'Errada. A guarda deve ser separada e sob responsabilidade médica.' },
    { t: 'São categoria sensível, sendo o consentimento do trabalhador base suficiente para tratá-los.', ok: false,
      why: 'Errada. A assimetria da relação de emprego fragiliza essa base.' },
    { t: 'São categoria sensível, podendo os prazos de guarda ser reduzidos por conveniência da empresa.', ok: false,
      why: 'Errada. Os prazos são legais e longos, pela latência dos agravos.' },
    { t: 'São categoria sensível, dispensando a digitalização de prontuários controles de acesso próprios.', ok: false,
      why: 'Errada. O meio eletrônico exige controle de acesso e registro.' }
  ],
  comentario: 'Dado de saúde é sensível: finalidade específica, mínimo necessário, guarda separada do arquivo funcional, controle de acesso e prazos longos — que existem porque doença ocupacional aparece décadas depois.',
  pegadinha: 'Consentimento assinado na admissão não legitima o que a relação assimétrica de emprego já compromete.',
  refs: ['LGPD — dados sensíveis', 'Código de Ética Médica', 'NR-7'] }

);
