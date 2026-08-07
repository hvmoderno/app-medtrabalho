/* Aprofundamento de alto rendimento: 4.5, 4.6, 4.8, 5.4 e 5.5.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 4.5 ORL ocupacional ====================== */
{ id: 'q-4.5-040', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador exposto a ruído apresenta audiometria de referência normal e, no periódico seguinte, queda de limiares em 3.000, 4.000 e 6.000 Hz em ambas as orelhas. O exame foi realizado ao final da jornada, sem repouso auditivo. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'O achado pode corresponder a mudança temporária de limiar, e a conduta correta é repetir a audiometria após repouso auditivo adequado antes de qualquer conclusão diagnóstica ou de nexo.', ok: true,
      why: 'Correta. Sem repouso auditivo o deslocamento temporário se confunde com perda permanente, e concluir nesse exame produziria diagnóstico falso.' },
    { t: 'O achado confirma perda auditiva induzida por ruído, cabendo emitir a comunicação do agravo de imediato.', ok: false,
      why: 'Errada. Falta a condição básica de validade do exame — o repouso auditivo — antes de qualquer conclusão.' },
    { t: 'A realização ao final da jornada é preferível, por captar o efeito real da exposição diária.', ok: false,
      why: 'Errada, e inverte a finalidade: capta justamente o efeito temporário que se quer excluir.' },
    { t: 'A bilateralidade do achado dispensa a repetição do exame.', ok: false,
      why: 'Errada. Bilateralidade é esperada tanto no deslocamento temporário quanto na perda permanente.' },
    { t: 'Mudança temporária de limiar não existe em exposições dentro do limite de tolerância.', ok: false,
      why: 'Errada. O deslocamento temporário pode ocorrer mesmo em exposições abaixo do limite.' }
  ],
  comentario: 'Repouso auditivo é condição de validade, não formalidade. Exame feito ao fim da jornada mede o deslocamento temporário de limiar — reversível — e transformá-lo em diagnóstico de perda permanente é erro grave, com repercussão previdenciária.',
  pegadinha: 'A alternativa que elogia o exame ao fim da jornada por "captar o efeito real" soa lógica e inverte o objetivo do repouso.',
  refs: ['NR-7 — anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-041', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com perda auditiva induzida por ruído já estabelecida pergunta se pode continuar na mesma função. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A permanência depende de controle efetivo da exposição e de proteção adequada, com monitoramento em intervalos menores — o diagnóstico não implica inaptidão automática, mas exige demonstrar que a exposição foi controlada, pois a audição residual precisa ser preservada.', ok: true,
      why: 'Correta. Diagnóstico firmado não é sinônimo de inaptidão; é sinal de que o controle falhou e precisa ser corrigido, com acompanhamento mais próximo.' },
    { t: 'O diagnóstico implica inaptidão definitiva para qualquer atividade com ruído.', ok: false,
      why: 'Errada. A decisão é individualizada e depende do controle da exposição e do grau da perda.' },
    { t: 'Como a perda é irreversível, não há mais audição a proteger.', ok: false,
      why: 'Errada. Há audição residual, e sua preservação é justamente o objetivo do controle.' },
    { t: 'A troca por protetor de maior atenuação resolve a situação, dispensando revisão do controle ambiental.', ok: false,
      why: 'Errada. Superproteção traz seus próprios riscos e não substitui a correção da exposição na fonte.' },
    { t: 'Uma vez diagnosticada, a perda dispensa novos exames audiométricos.', ok: false,
      why: 'Errada. O monitoramento passa a ser ainda mais importante, para detectar progressão que indique exposição não controlada.' }
  ],
  comentario: 'PAIR diagnosticada é evento sentinela do sistema de proteção, não sentença de inaptidão. Corrija a exposição, verifique o protetor, encurte o intervalo de monitoramento — e lembre que a perda não deve progredir se a exposição cessar.',
  pegadinha: '"Já perdeu, não há o que proteger" ignora a audição residual e as frequências da fala ainda preservadas.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-042', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação audiológica ocupacional além da audiometria tonal, é CORRETO afirmar:',
  alts: [
    { t: 'A audiometria tonal por via aérea é o exame de triagem, e a pesquisa por via óssea permite diferenciar perda condutiva de neurossensorial — sendo a otoscopia e a anamnese ocupacional e extraocupacional partes indissociáveis da avaliação.', ok: true,
      why: 'Correta. Sem via óssea não se distingue condutiva de neurossensorial, e sem anamnese e otoscopia o traçado sozinho não diagnostica.' },
    { t: 'A audiometria por via aérea isolada permite classificar o tipo de perda.', ok: false,
      why: 'Errada. É necessária a comparação com a via óssea para identificar gap aéreo-ósseo.' },
    { t: 'A otoscopia é dispensável quando o trabalhador é assintomático.', ok: false,
      why: 'Errada. Cerume obstrutivo e alterações timpânicas alteram o resultado e são frequentemente assintomáticos.' },
    { t: 'A história de exposição extraocupacional a ruído é irrelevante para a avaliação.', ok: false,
      why: 'Errada. Atividades de lazer com ruído intenso compõem a exposição total e são parte do diagnóstico diferencial.' },
    { t: 'Um único exame alterado é suficiente para caracterizar perda induzida por ruído.', ok: false,
      why: 'Errada. A caracterização exige comparação sequencial, história e exclusão de outras causas.' }
  ],
  comentario: 'Quatro elementos inseparáveis: anamnese ocupacional e extraocupacional, otoscopia, audiometria por via aérea e óssea, e comparação sequencial com a de referência. Traçado isolado não diagnostica nada.',
  pegadinha: 'Ignorar a exposição extraocupacional é falha frequente que compromete tanto o diagnóstico quanto a discussão de nexo.',
  refs: ['NR-7 — anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ======================== 4.6 Saúde mental ============================= */
{ id: 'q-4.6-040', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa registra aumento de afastamentos por transtornos mentais após reestruturação que reduziu o quadro em 30% e manteve as mesmas metas de produção. A direção atribui o quadro a "fragilidade da nova geração". Sobre a análise, é CORRETO afirmar:',
  alts: [
    { t: 'A intensificação do trabalho — mesma demanda com menos pessoas — é fator de risco psicossocial reconhecido, e atribuir o adoecimento a características individuais dos trabalhadores desloca a análise do determinante organizacional que a própria empresa criou.', ok: true,
      why: 'Correta. Reduzir quadro mantendo metas aumenta demanda por trabalhador e reduz margem de regulação, que é exatamente a combinação de risco.' },
    { t: 'A explicação da direção é plausível, pois características geracionais determinam a tolerância ao trabalho.', ok: false,
      why: 'Errada. Atribuir a fatores geracionais é generalização sem sustentação e serve para não olhar a organização do trabalho.' },
    { t: 'O aumento de afastamentos após reestruturação é coincidência temporal sem valor analítico.', ok: false,
      why: 'Errada. Coincidência temporal com mudança organizacional identificada é justamente o dado que orienta a investigação.' },
    { t: 'A solução adequada é oferecer apoio psicológico individual sem revisar metas ou quadro.', ok: false,
      why: 'Errada. Sem alterar o determinante, o apoio individual apenas gerencia as consequências.' },
    { t: 'Transtornos mentais decorrentes de intensificação do trabalho não podem ser reconhecidos como relacionados ao trabalho.', ok: false,
      why: 'Errada. A organização do trabalho é fator de risco reconhecido e o nexo é possível.' }
  ],
  comentario: 'Intensificação — mesma meta com menos gente — é a mudança organizacional que mais produz adoecimento mental e a que menos aparece nos documentos. Atribuir a "geração" ou a "perfil" é a forma mais eficaz de não olhar para ela.',
  pegadinha: 'A explicação geracional é confortável para quem decidiu a reestruturação e não sobrevive à coincidência temporal.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-1', 'NR-17'] },

{ id: 'q-4.6-041', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de nexo em transtorno mental relacionado ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O raciocínio combina a caracterização da exposição a fatores psicossociais, a temporalidade entre exposição e quadro, a plausibilidade e a análise de fatores extraocupacionais como possíveis concausas — sem exigir que o trabalho seja causa única.', ok: true,
      why: 'Correta. É o mesmo raciocínio de nexo aplicado aos demais agravos, com a exposição sendo organizacional em vez de física ou química.' },
    { t: 'A existência de problemas pessoais do trabalhador afasta o nexo com o trabalho.', ok: false,
      why: 'Errada. Fatores extraocupacionais são concausas e não rompem o nexo.' },
    { t: 'O nexo em saúde mental exige exame complementar que comprove a alteração.', ok: false,
      why: 'Errada. Não há exame que comprove transtorno mental; o diagnóstico é clínico.' },
    { t: 'A caracterização da exposição psicossocial é impossível por ser subjetiva.', ok: false,
      why: 'Errada. Ritmo, metas, jornada, autonomia, suporte e episódios de assédio são caracterizáveis e documentáveis.' },
    { t: 'Somente transtornos que constem de lista específica podem ser reconhecidos.', ok: false,
      why: 'Errada. Além das listas, existem o nexo individual e a análise do caso concreto.' }
  ],
  comentario: 'Nexo em saúde mental não é diferente em método: caracterizar a exposição (aqui, organizacional), verificar temporalidade e plausibilidade, e considerar concausas sem exigir exclusividade. O que muda é a natureza do agente, não o raciocínio.',
  pegadinha: 'Exigir exame complementar comprobatório aplica a transtornos mentais um critério que não existe em nenhuma prática clínica.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Lei nº 8.213/1991'] },

{ id: 'q-4.6-042', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o suporte social no trabalho como fator de proteção em saúde mental, é CORRETO afirmar:',
  alts: [
    { t: 'O suporte da chefia e dos colegas modula o efeito da alta demanda com baixo controle, podendo reduzir o impacto sobre a saúde — o que torna a qualidade da relação hierárquica um objeto legítimo de avaliação e de intervenção.', ok: true,
      why: 'Correta. O apoio social é o terceiro eixo do modelo estendido e é acionável: treinar liderança e criar canais de escuta são intervenções concretas.' },
    { t: 'Suporte social é fator individual, sem relação com a organização do trabalho.', ok: false,
      why: 'Errada. Ele depende de estrutura de equipe, estilo de gestão e possibilidade de convívio, que são organizacionais.' },
    { t: 'A qualidade da relação com a chefia não é passível de avaliação técnica.', ok: false,
      why: 'Errada. Existem instrumentos validados que a avaliam de forma agregada.' },
    { t: 'Aumentar o suporte social compensa integralmente qualquer nível de demanda.', ok: false,
      why: 'Errada. Ele modula o efeito, mas não substitui a redução da demanda excessiva.' },
    { t: 'Suporte social só é relevante em atividades de atendimento ao público.', ok: false,
      why: 'Errada. É fator transversal a qualquer atividade.' }
  ],
  comentario: 'Suporte social modula, não anula. Ele é organizacional — depende de como as equipes são estruturadas e de como a chefia se comporta — e por isso é avaliável e intervível, ao contrário do que a gestão costuma alegar.',
  pegadinha: 'Tratar suporte social como traço individual retira do alcance da gestão algo que ela produz ou destrói.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ==================== 4.8 Câncer relacionado ao trabalho =============== */
{ id: 'q-4.8-040', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de curtume por 25 anos desenvolve carcinoma de células escamosas de cavidade nasal. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'Poeiras de couro estão entre os agentes com reconhecimento de carcinogenicidade para cavidade nasal e seios paranasais, e a compatibilidade entre o sítio acometido e o agente é elemento central do raciocínio de nexo, ao lado da latência.', ok: true,
      why: 'Correta. A associação entre poeira de couro e neoplasia nasossinusal é reconhecida, e a compatibilidade sítio-agente é um dos pilares do nexo em câncer.' },
    { t: 'Cânceres de cavidade nasal não têm associação ocupacional descrita.', ok: false,
      why: 'Errada. Poeiras de madeira e de couro, níquel e cromo estão entre os agentes associados a esse sítio.' },
    { t: 'A ausência de exposição a agente químico líquido afasta o nexo.', ok: false,
      why: 'Errada. Poeiras são agentes químicos particulados e produzem exposição relevante.' },
    { t: 'A compatibilidade entre sítio e agente é irrelevante, bastando haver exposição ocupacional qualquer.', ok: false,
      why: 'Errada. Exposição genérica não sustenta nexo; a compatibilidade entre o agente e o sítio é essencial.' },
    { t: 'Por ser tumor raro, não há como estabelecer nexo ocupacional.', ok: false,
      why: 'Errada, e é o oposto: tumores raros com forte associação ocupacional facilitam o reconhecimento do nexo.' }
  ],
  comentario: 'Em câncer ocupacional, tumor raro com agente conhecido é o cenário mais favorável ao nexo — mesotelioma e asbesto, angiossarcoma hepático e cloreto de vinila, nasossinusal e poeira de couro ou madeira. Raridade ajuda, não atrapalha.',
  pegadinha: 'A alternativa que usa a raridade contra o nexo inverte a lógica da força de associação.',
  refs: ['IARC Monographs', 'LINACH', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-041', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa argumenta que a exposição a agente cancerígeno é intermitente e de baixa intensidade, e por isso não requer as medidas de controle previstas para carcinogênicos. Sobre o argumento, é CORRETO afirmar:',
  alts: [
    { t: 'Para carcinogênicos sem limiar demonstrado, exposições intermitentes e de baixa intensidade também contribuem para o risco acumulado, o que mantém a exigência de substituição do agente e, na impossibilidade, de redução ao menor nível tecnicamente viável.', ok: true,
      why: 'Correta. Sem limiar, não existe patamar abaixo do qual a exposição deixe de contribuir; a dose acumulada é o que importa.' },
    { t: 'Exposição intermitente não contribui para o risco de câncer ocupacional.', ok: false,
      why: 'Errada. A dose acumulada resulta também de exposições intermitentes ao longo dos anos.' },
    { t: 'Baixa intensidade equivale a ausência de risco para agentes cancerígenos.', ok: false,
      why: 'Errada. É justamente o pressuposto que a ausência de limiar afasta.' },
    { t: 'As medidas de controle para carcinogênicos só se aplicam a exposições contínuas e acima do limite.', ok: false,
      why: 'Errada. A exigência decorre da natureza do agente, não do regime de exposição.' },
    { t: 'O registro da exposição pode ser dispensado quando ela é intermitente.', ok: false,
      why: 'Errada, e é grave: o registro é o que permitirá reconhecer o nexo décadas depois.' }
  ],
  comentario: 'Sem limiar não há "pouco seguro". Exposição intermitente e de baixa intensidade contribui para a dose acumulada, mantém a exigência de substituição e — o ponto mais esquecido — precisa ser registrada, porque o câncer aparece décadas depois.',
  pegadinha: 'Dispensar o registro por a exposição ser "pequena" é o que deixa o trabalhador sem prova no futuro.',
  refs: ['IARC Monographs', 'LINACH', 'ACGIH — TLVs e BEIs'] },

/* ============================ 5.4 Perícia ============================== */
{ id: 'q-5.4-040', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia previdenciária, o segurado apresenta relatório do médico assistente afirmando incapacidade, mas o perito conclui pela capacidade. Sobre a divergência, é CORRETO afirmar:',
  alts: [
    { t: 'Assistente e perito respondem a perguntas diferentes — o primeiro cuida e descreve a condição clínica, o segundo avalia a repercussão sobre a capacidade para determinada atividade — e a divergência é legítima, devendo o perito fundamentar sua conclusão em vez de simplesmente desconsiderar o relatório.', ok: true,
      why: 'Correta. As funções são distintas e a divergência não implica erro de nenhum dos dois; o que se exige do perito é fundamentação explícita.' },
    { t: 'O relatório do assistente vincula a conclusão pericial.', ok: false,
      why: 'Errada. Ele é elemento de instrução, não conclusão vinculante.' },
    { t: 'A divergência indica necessariamente falha técnica de um dos médicos.', ok: false,
      why: 'Errada. Decorre da diferença de objeto entre assistência e perícia.' },
    { t: 'O perito deve desconsiderar relatórios do assistente por serem parciais.', ok: false,
      why: 'Errada. São elementos legítimos de instrução e precisam ser analisados e comentados.' },
    { t: 'O perito deve alterar sua conclusão para evitar conflito com o assistente.', ok: false,
      why: 'Errada. Alterar por conveniência compromete a integridade do trabalho pericial.' }
  ],
  comentario: 'Assistente descreve a doença; perito avalia a capacidade para uma atividade específica. Divergir é normal. O que não é aceitável é ignorar o relatório — ele precisa ser analisado e a divergência, fundamentada.',
  pegadinha: 'Os dois extremos: o relatório vincula, ou o relatório se descarta. Nenhum dos dois.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Código de Ética Médica'] },

{ id: 'q-5.4-041', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do assistente técnico em perícia judicial, é CORRETO afirmar:',
  alts: [
    { t: 'Ele é indicado pela parte, atua no interesse dela com independência técnica, pode acompanhar a perícia e apresentar parecer divergente — e não está sujeito ao mesmo dever de imparcialidade do perito, embora permaneça vinculado à ética médica e à veracidade.', ok: true,
      why: 'Correta. Parcialidade de posição não autoriza falsidade: o assistente defende uma tese, mas dentro dos limites da técnica e da ética.' },
    { t: 'O assistente técnico deve ser imparcial como o perito.', ok: false,
      why: 'Errada. A imparcialidade é dever do perito; o assistente atua no interesse de quem o indicou.' },
    { t: 'A atuação como assistente técnico permite depois atuar como perito no mesmo caso.', ok: false,
      why: 'Errada. As funções são inconciliáveis no mesmo processo.' },
    { t: 'O assistente técnico pode afirmar conclusões que sabe não corresponderem aos achados, desde que favoreçam a parte.', ok: false,
      why: 'Errada. Parcialidade de posição não autoriza falsidade; permanece o dever de veracidade.' },
    { t: 'O assistente técnico não pode acompanhar a realização da perícia.', ok: false,
      why: 'Errada. Acompanhar os trabalhos periciais é uma de suas prerrogativas.' }
  ],
  comentario: 'A distinção fina do tema: o assistente é parcial de posição — atua no interesse de quem o indicou — mas não pode ser falso. E jamais acumula com a função de perito no mesmo processo.',
  pegadinha: 'Confundir parcialidade legítima de posição com licença para afirmar o que não é verdade.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica e assistente técnico'] },

/* ================ 5.5 Incapacidade e dano corporal ==================== */
{ id: 'q-5.5-040', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 38 anos, motorista profissional, sofreu traumatismo cranioencefálico com sequela cognitiva leve, sem déficit motor. Sobre a avaliação da incapacidade, é CORRETO afirmar:',
  alts: [
    { t: 'Sequela cognitiva leve pode ser incompatível com a condução profissional pelo risco a terceiros, ainda que não gere limitação para muitas outras atividades — o que ilustra que a incapacidade se define pela relação entre a repercussão e as exigências específicas da função.', ok: true,
      why: 'Correta. A mesma sequela é irrelevante para uma função e decisiva para outra; em atividade com risco a terceiros o critério é mais restritivo.' },
    { t: 'Sequela cognitiva leve, por definição, não gera incapacidade para nenhuma atividade.', ok: false,
      why: 'Errada. A gravidade da sequela não define isoladamente a incapacidade; a exigência da função é que decide.' },
    { t: 'A ausência de déficit motor afasta a incapacidade para condução profissional.', ok: false,
      why: 'Errada. Atenção, tempo de reação e julgamento são requisitos essenciais da condução.' },
    { t: 'A avaliação deve considerar apenas os achados de exame de imagem do crânio.', ok: false,
      why: 'Errada. Imagem não mede função cognitiva; a avaliação é clínica e neuropsicológica.' },
    { t: 'O risco a terceiros não integra o juízo de aptidão em atividades de condução.', ok: false,
      why: 'Errada. É elemento central em atividades que expõem terceiros.' }
  ],
  comentario: 'Sequela leve pode ser incapacitante para função de risco. Em atividades que expõem terceiros — condução, altura, energia, máquina — o critério de aptidão é mais restritivo, e cognição pesa tanto quanto função motora.',
  pegadinha: 'A ausência de déficit motor é usada como prova de capacidade e não diz nada sobre atenção e julgamento.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-5.5-041', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de dano corporal com uso de tabelas de referência, é CORRETO afirmar:',
  alts: [
    { t: 'As tabelas padronizam a quantificação do dano anatômico e funcional, mas não substituem a avaliação clínica individualizada nem a análise da repercussão sobre a atividade exercida — o percentual tabelado é ponto de partida, não conclusão.', ok: true,
      why: 'Correta. A tabela dá comparabilidade; a repercussão sobre a capacidade depende da função e das circunstâncias do periciando.' },
    { t: 'O percentual da tabela corresponde diretamente ao grau de incapacidade laborativa.', ok: false,
      why: 'Errada. Dano corporal e incapacidade laborativa são medidas distintas.' },
    { t: 'O uso de tabela dispensa a descrição dos achados no laudo.', ok: false,
      why: 'Errada. A descrição dos achados é o que fundamenta a aplicação da tabela.' },
    { t: 'Tabelas de dano corporal se aplicam apenas a lesões de membros.', ok: false,
      why: 'Errada. Abrangem múltiplos sistemas e segmentos corporais.' },
    { t: 'Havendo tabela, a avaliação clínica individualizada torna-se dispensável.', ok: false,
      why: 'Errada. A tabela orienta a quantificação, mas a avaliação clínica é o que produz os dados que ela quantifica.' }
  ],
  comentario: 'Tabela dá padronização e comparabilidade, não dispensa clínica. E o ponto que mais confunde: percentual de dano corporal não é percentual de incapacidade laborativa — são perguntas diferentes, com destinatários diferentes.',
  pegadinha: 'Converter diretamente percentual tabelado em grau de incapacidade é o erro mais comum na leitura desses laudos.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-042', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a reavaliação da incapacidade ao longo do tempo, é CORRETO afirmar:',
  alts: [
    { t: 'A incapacidade temporária exige reavaliação periódica, e mesmo a permanente admite revisão em face de recuperação, agravamento ou surgimento de novas possibilidades terapêuticas e de reabilitação.', ok: true,
      why: 'Correta. Permanente qualifica a expectativa no momento da avaliação, não elimina a possibilidade de revisão.' },
    { t: 'Uma vez classificada como permanente, a incapacidade não admite revisão.', ok: false,
      why: 'Errada. Há previsão de reavaliação periódica.' },
    { t: 'A reavaliação só cabe quando solicitada pelo segurado.', ok: false,
      why: 'Errada. Pode ser determinada de ofício pela instituição.' },
    { t: 'Agravamento posterior de sequela consolidada não permite nova avaliação.', ok: false,
      why: 'Errada. Agravamento é uma das hipóteses que justificam reavaliação.' },
    { t: 'A reavaliação deve considerar apenas a condição clínica, sem observar mudanças na atividade exercida.', ok: false,
      why: 'Errada. Mudança de função altera as exigências e, portanto, o juízo de capacidade.' }
  ],
  comentario: '"Permanente" descreve a expectativa no momento da avaliação, não um veredito eterno. Recuperação, agravamento, novas terapias e mudança de função são razões legítimas para reavaliar — em ambos os sentidos.',
  pegadinha: 'Ler "permanente" como definitivo e irrevisável fecha portas que a norma mantém abertas.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] }

);
