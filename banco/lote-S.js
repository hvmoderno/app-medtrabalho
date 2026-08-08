/* Lote S — 5.4, 5.3, 2.9, 4.9, 4.7, 6.2, 1.2, 7.1, 7.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-5.4-070', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os quesitos formulados às partes em perícia judicial trabalhista, é CORRETO afirmar:',
  alts: [
    { t: 'O perito responde ao que é técnico e de sua competência, podendo declarar que determinado quesito é jurídico ou está fora de seu objeto — responder a questão de direito extrapola a função pericial e enfraquece o laudo.', ok: true,
      why: 'Correta. Delimitar a competência técnica é parte da correção do laudo.' },
    { t: 'O perito deve responder a todos os quesitos, inclusive os de natureza jurídica.', ok: false,
      why: 'Errada. Questão de direito não é objeto de perícia médica.' },
    { t: 'Quesitos não respondidos invalidam automaticamente o laudo.', ok: false,
      why: 'Errada. A recusa fundamentada por impertinência ou falta de competência é legítima.' },
    { t: 'O perito pode deixar de fundamentar respostas quando o quesito é objetivo.', ok: false,
      why: 'Errada. A fundamentação é exigida em todas as conclusões.' },
    { t: 'O perito deve concluir sobre a existência de culpa do empregador.', ok: false,
      why: 'Errada. Culpa é juízo jurídico; o perito descreve condições, exposições e nexo técnico.' }
  ],
  comentario: 'O perito responde o que é técnico e diz claramente quando o quesito é jurídico. Concluir sobre culpa é o desvio mais frequente — descreve-se condição, exposição e nexo; a culpa é do juiz.',
  pegadinha: 'Responder a tudo para parecer completo é o que faz o laudo invadir competência que não é sua.',
  refs: ['Código de Processo Civil', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.3-060', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofre acidente de trajeto e, durante a internação, adquire infecção hospitalar que prolonga o afastamento. Sobre a análise do caso, é CORRETO afirmar:',
  alts: [
    { t: 'A infecção adquirida no tratamento do evento é concausa superveniente e mantém-se vinculada ao acidente original, respondendo pelo prolongamento do afastamento sem romper o nexo.', ok: true,
      why: 'Correta. A complicação decorrente do tratamento segue ligada ao evento que o motivou.' },
    { t: 'A infecção hospitalar rompe o nexo com o acidente original.', ok: false,
      why: 'Errada. É justamente a hipótese de concausa superveniente prevista.' },
    { t: 'O acidente de trajeto não guarda relação com o trabalho para fins de análise.', ok: false,
      why: 'Errada. É equiparado a acidente do trabalho na legislação previdenciária.' },
    { t: 'O prolongamento do afastamento por complicação deve ser tratado como doença comum.', ok: false,
      why: 'Errada. Segue a natureza do evento que originou o tratamento.' },
    { t: 'A concausa superveniente reduz proporcionalmente os efeitos do reconhecimento.', ok: false,
      why: 'Errada. Não há previsão de redução proporcional por concausa.' }
  ],
  comentario: 'Complicação surgida no tratamento é concausa superveniente e mantém o vínculo com o evento original. Acidente de trajeto é equiparado — e não há rateio proporcional por concausa.',
  pegadinha: 'A intuição de que um evento novo "quebra a cadeia" é exatamente o que a concausa superveniente contraria.',
  refs: ['Lei nº 8.213/1991 — arts. 21 e 21-A'] },

{ id: 'q-2.9-060', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a intoxicação por organofosforados em trabalhadores rurais, é CORRETO afirmar:',
  alts: [
    { t: 'O quadro decorre da inibição de colinesterases, com manifestações muscarínicas, nicotínicas e centrais, e a dosagem de colinesterase serve à vigilância dos expostos — mas a conduta na intoxicação aguda é clínica e não deve aguardar o resultado laboratorial.', ok: true,
      why: 'Correta. Tratamento não espera exame; o laboratório serve à vigilância e à confirmação.' },
    { t: 'O tratamento deve aguardar a confirmação laboratorial da inibição.', ok: false,
      why: 'Errada. Retardar a conduta em intoxicação aguda aumenta a letalidade.' },
    { t: 'A absorção ocorre apenas por via respiratória.', ok: false,
      why: 'Errada. A absorção cutânea é via importante nesses produtos.' },
    { t: 'A síndrome intermediária e a neuropatia tardia não são descritas nesse tipo de intoxicação.', ok: false,
      why: 'Errada. São quadros reconhecidos que ocorrem após a fase aguda.' },
    { t: 'A troca de roupas contaminadas é medida secundária no atendimento.', ok: false,
      why: 'Errada. A descontaminação é medida inicial e protege também a equipe de atendimento.' }
  ],
  comentario: 'Organofosforado: inibição de colinesterase, quadro muscarínico, nicotínico e central, com absorção também cutânea. Descontaminar cedo, tratar sem esperar exame, e lembrar da síndrome intermediária e da neuropatia tardia depois da fase aguda.',
  pegadinha: 'Esperar a colinesterase para iniciar tratamento troca a urgência clínica por uma confirmação que chega tarde.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Ministério da Saúde — intoxicações por agrotóxicos'] },

{ id: 'q-4.9-060', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as zoonoses de interesse ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Trabalhadores rurais, de abatedouros, veterinários e profissionais de manejo animal estão expostos a agentes como brucelose, leptospirose, raiva e febre maculosa, cuja suspeita depende de se perguntar sobre contato com animais — pergunta ausente na maior parte dos atendimentos.', ok: true,
      why: 'Correta. Sem a pergunta ocupacional, essas doenças recebem outro rótulo.' },
    { t: 'Zoonoses ocupacionais são raras a ponto de não justificar suspeita clínica.', ok: false,
      why: 'Errada. São subdiagnosticadas, o que é diferente de raras.' },
    { t: 'A brucelose ocupacional se transmite apenas por ingestão de laticínios.', ok: false,
      why: 'Errada. Há transmissão por contato com material de abate e por inalação em ambientes de risco.' },
    { t: 'A profilaxia antirrábica pré-exposição não tem indicação ocupacional.', ok: false,
      why: 'Errada. É indicada para grupos com exposição ocupacional a animais.' },
    { t: 'A notificação de zoonoses ocupacionais é dispensável quando o trabalhador é informal.', ok: false,
      why: 'Errada. A notificação independe do vínculo.' }
  ],
  comentario: 'Brucelose, leptospirose, raiva, febre maculosa: subdiagnosticadas porque quase ninguém pergunta pelo contato com animais. Há profilaxia pré-exposição para grupos de risco, e a notificação não depende de vínculo formal.',
  pegadinha: 'Chamar de rara o que é subdiagnosticado consolida o próprio subdiagnóstico.',
  refs: ['Ministério da Saúde — zoonoses', 'NR-31', 'PNSTT'] },

{ id: 'q-4.7-070', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação psiquiátrica em contexto ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve considerar o contexto de trabalho como possível determinante ou agravante, evitando tanto atribuir todo sofrimento a características pessoais quanto tratar qualquer insatisfação como adoecimento — e o diagnóstico não é comunicado ao empregador.', ok: true,
      why: 'Correta. Os dois desvios existem e ambos comprometem a avaliação.' },
    { t: 'O sofrimento no trabalho deve ser interpretado prioritariamente como característica de personalidade.', ok: false,
      why: 'Errada. Essa leitura individualiza o que frequentemente é organizacional.' },
    { t: 'Toda insatisfação relatada com o trabalho configura transtorno mental.', ok: false,
      why: 'Errada. Insatisfação não é diagnóstico; medicalizar o conflito não ajuda ninguém.' },
    { t: 'A comunicação do diagnóstico ao empregador é necessária para viabilizar ajustes.', ok: false,
      why: 'Errada. Comunicam-se restrições funcionais; o diagnóstico segue sob sigilo.' },
    { t: 'O uso de medicação psiquiátrica implica, por si, restrição de função.', ok: false,
      why: 'Errada. A restrição decorre da repercussão funcional avaliada, não do uso de medicação.' }
  ],
  comentario: 'Dois erros simétricos: reduzir tudo à personalidade do trabalhador e transformar toda insatisfação em diagnóstico. Restrição decorre de repercussão funcional, nunca do simples uso de medicação — e o diagnóstico não sai do consultório.',
  pegadinha: 'Restringir função por uso de psicotrópico confunde tratamento com incapacidade.',
  refs: ['Código de Ética Médica', 'Ministério da Saúde — transtornos mentais relacionados ao trabalho'] },

{ id: 'q-6.2-060', tema: '6.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a inclusão de pessoas com deficiência no trabalho e o papel do médico do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O foco é a compatibilidade entre as capacidades da pessoa e as exigências da função com as adaptações razoáveis disponíveis — e o exame admissional não pode ser usado para inviabilizar a contratação de candidato encaminhado a vaga reservada.', ok: true,
      why: 'Correta. Adaptação razoável faz parte da avaliação, não é favor concedido depois.' },
    { t: 'A deficiência, por si, justifica conclusão de inaptidão.', ok: false,
      why: 'Errada. A avaliação é sobre a compatibilidade com a função, considerando adaptações.' },
    { t: 'A avaliação deve desconsiderar adaptações possíveis do posto de trabalho.', ok: false,
      why: 'Errada. As adaptações razoáveis integram a análise de compatibilidade.' },
    { t: 'A reserva legal de vagas dispensa avaliação de compatibilidade com a função.', ok: false,
      why: 'Errada. A avaliação permanece, apenas não pode servir de filtro discriminatório.' },
    { t: 'O acompanhamento após a admissão é desnecessário quando o exame conclui pela aptidão.', ok: false,
      why: 'Errada. O acompanhamento verifica se as adaptações foram implementadas e funcionam.' }
  ],
  comentario: 'Inclusão: compara-se capacidade e exigência considerando as adaptações razoáveis, e acompanha-se depois se elas existem de fato. O admissional não pode virar o mecanismo que esvazia a reserva de vagas.',
  pegadinha: 'Avaliar o posto sem adaptações produz inaptidão para praticamente toda deficiência.',
  refs: ['Lei nº 13.146/2015 — Estatuto da Pessoa com Deficiência', 'Lei nº 8.213/1991 — art. 93'] },

{ id: 'q-1.2-032', tema: '1.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a saúde da trabalhadora e as especificidades de gênero no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A dupla jornada, a segregação ocupacional e a maior exposição a assédio compõem determinantes específicos, e o desenho de postos e equipamentos baseado em antropometria masculina produz sobrecarga adicional às mulheres nas mesmas tarefas.', ok: true,
      why: 'Correta. Posto dimensionado para o corpo médio masculino exige mais de quem não corresponde a esse padrão.' },
    { t: 'As exposições ocupacionais afetam homens e mulheres de forma idêntica em qualquer aspecto.', ok: false,
      why: 'Errada. Há diferenças biológicas, de exposição e de organização do trabalho.' },
    { t: 'A antropometria não influencia a carga de trabalho quando a tarefa é a mesma.', ok: false,
      why: 'Errada. O desajuste entre corpo e posto altera diretamente a exigência biomecânica.' },
    { t: 'A dupla jornada é assunto pessoal sem repercussão em saúde ocupacional.', ok: false,
      why: 'Errada. Reduz o tempo de recuperação e integra a carga total de trabalho.' },
    { t: 'A resposta às diferenças de gênero é restringir o acesso das mulheres a determinadas funções.', ok: false,
      why: 'Errada. A resposta é adequar postos, equipamentos e organização, jamais restringir acesso.' }
  ],
  comentario: 'Gênero no trabalho: dupla jornada reduzindo recuperação, segregação ocupacional, assédio e postos desenhados para outro corpo. A resposta é adequar o posto — restringir acesso é o oposto da solução.',
  pegadinha: 'Supor exposição idêntica na mesma tarefa ignora que o posto foi dimensionado para outro percentil antropométrico.',
  refs: ['OIT — gênero e trabalho', 'NR-17', 'PNSTT'] },

{ id: 'q-7.1-054', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o trabalho de adolescentes e sua proteção, é CORRETO afirmar:',
  alts: [
    { t: 'Há vedação de trabalho noturno, perigoso ou insalubre a menores de dezoito anos, e a lista de piores formas de trabalho infantil orienta a identificação das atividades proibidas — proteção que decorre da vulnerabilidade do desenvolvimento em curso.', ok: true,
      why: 'Correta. A vedação é ampla e não admite compensação por adicional.' },
    { t: 'O trabalho insalubre é permitido a partir dos dezesseis anos mediante pagamento de adicional.', ok: false,
      why: 'Errada. O adicional não torna lícito o que é vedado a menores de dezoito anos.' },
    { t: 'A autorização dos responsáveis torna lícito o trabalho em atividade perigosa.', ok: false,
      why: 'Errada. A proteção é indisponível e não se afasta por autorização familiar.' },
    { t: 'O trabalho noturno é permitido ao aprendiz maior de dezesseis anos.', ok: false,
      why: 'Errada. A vedação de trabalho noturno alcança todos os menores de dezoito anos.' },
    { t: 'Adolescentes não requerem adequação ergonômica específica dos postos.', ok: false,
      why: 'Errada. O desenvolvimento em curso e as diferenças antropométricas exigem adequação própria.' }
  ],
  comentario: 'Menor de dezoito: nada de noturno, perigoso ou insalubre — sem exceção por adicional, por autorização dos pais ou por condição de aprendiz. E o posto precisa de adequação ergonômica própria.',
  pegadinha: 'O adicional de insalubridade compra tempo de exposição de adulto e não torna lícito nada em relação a menores.',
  refs: ['CLT — arts. 402 a 441', 'ECA', 'Decreto sobre piores formas de trabalho infantil'] },

{ id: 'q-7.8-033', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a proteção de dados de saúde de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'Dados de saúde são categoria sensível, com exigência de finalidade específica, minimização e segurança — de modo que prontuários ocupacionais não podem ser acessados por setores administrativos nem armazenados sem controle de acesso e registro.', ok: true,
      why: 'Correta. A proteção é técnica e organizacional, não apenas uma declaração de sigilo.' },
    { t: 'O prontuário ocupacional pode ser mantido junto ao arquivo funcional do trabalhador.', ok: false,
      why: 'Errada. A guarda deve ser separada e sob responsabilidade do médico.' },
    { t: 'O consentimento do trabalhador é base suficiente para qualquer tratamento de dados de saúde no emprego.', ok: false,
      why: 'Errada. Em relação assimétrica, o consentimento é base frágil e há hipóteses legais próprias.' },
    { t: 'Prazos de guarda de prontuários ocupacionais podem ser reduzidos por conveniência da empresa.', ok: false,
      why: 'Errada. Há prazos definidos e a guarda longa é essencial em exposições de latência prolongada.' },
    { t: 'A digitalização de prontuários dispensa controles de acesso.', ok: false,
      why: 'Errada. O meio digital exige controle de acesso, registro de operações e segurança adequados.' }
  ],
  comentario: 'Dado de saúde é sensível: finalidade específica, mínimo necessário, guarda separada do arquivo funcional, controle de acesso e prazos longos — que existem porque doença ocupacional aparece décadas depois.',
  pegadinha: 'Consentimento assinado na admissão não legitima o que a relação assimétrica de emprego já compromete.',
  refs: ['LGPD — dados sensíveis', 'Código de Ética Médica', 'NR-7'] }

);
