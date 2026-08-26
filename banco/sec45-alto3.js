/* Aprofundamento de alto rendimento: 4.5, 4.6, 4.8, 5.4 e 5.5.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 4.5 ORL ocupacional ====================== */
{ id: 'q-4.5-040', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador exposto a ruído apresenta audiometria de referência normal e, no periódico seguinte, queda de limiares em 3.000, 4.000 e 6.000 Hz em ambas as orelhas. O exame foi realizado ao final da jornada, sem repouso auditivo. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'Pode ser mudança temporária de limiar: repetir a audiometria após repouso auditivo adequado.', ok: true,
      why: 'Correta. Sem repouso, o deslocamento temporário se confunde com perda permanente.' },
    { t: 'Confirma perda auditiva induzida por ruído, cabendo emitir a comunicação do agravo de imediato.', ok: false,
      why: 'Errada. Falta a condição básica de validade do exame: o repouso auditivo prévio.' },
    { t: 'É achado válido, sendo a realização ao fim da jornada preferível por captar o efeito real da exposição.', ok: false,
      why: 'Errada, e inverte a finalidade: capta o efeito temporário que se quer excluir.' },
    { t: 'Pode ser mudança temporária de limiar, dispensando a bilateralidade do achado a repetição do exame.', ok: false,
      why: 'Errada. Bilateralidade é esperada tanto no temporário quanto na perda permanente.' },
    { t: 'Confirma perda permanente, pois não há mudança temporária em exposições dentro do limite.', ok: false,
      why: 'Errada. O deslocamento temporário pode ocorrer mesmo abaixo do limite.' }
  ],
  comentario: 'Repouso auditivo é condição de validade, não formalidade. Exame feito ao fim da jornada mede o deslocamento temporário de limiar — reversível — e transformá-lo em diagnóstico de perda permanente é erro grave, com repercussão previdenciária.',
  pegadinha: 'A alternativa que elogia o exame ao fim da jornada por "captar o efeito real" soa lógica e inverte o objetivo do repouso.',
  refs: ['NR-7 — anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-041', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com perda auditiva induzida por ruído já estabelecida pergunta se pode continuar na mesma função. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Depende de controle efetivo e proteção adequada, com monitoramento em intervalos menores.', ok: true,
      why: 'Correta. O diagnóstico não implica inaptidão automática; a audição residual precisa ser preservada.' },
    { t: 'Depende do grau da perda, implicando o diagnóstico inaptidão definitiva para atividade com ruído.', ok: false,
      why: 'Errada. A decisão é individualizada e depende do controle da exposição e do grau.' },
    { t: 'Depende do controle, embora, sendo a perda irreversível, não haja mais audição a proteger.', ok: false,
      why: 'Errada. Há audição residual, e sua preservação é o objetivo do controle.' },
    { t: 'Depende da troca por protetor de maior atenuação, o que dispensa revisar o controle ambiental.', ok: false,
      why: 'Errada. Superproteção traz riscos próprios e não substitui a correção na fonte.' },
    { t: 'Depende de controle efetivo, dispensando a perda já diagnosticada novos exames audiométricos.', ok: false,
      why: 'Errada. O monitoramento passa a ser ainda mais importante, para detectar progressão.' }
  ],
  comentario: 'PAIR diagnosticada é evento sentinela do sistema de proteção, não sentença de inaptidão. Corrija a exposição, verifique o protetor, encurte o intervalo de monitoramento — e lembre que a perda não deve progredir se a exposição cessar.',
  pegadinha: '"Já perdeu, não há o que proteger" ignora a audição residual e as frequências da fala ainda preservadas.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-042', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a avaliação audiológica ocupacional além da audiometria tonal, é CORRETO afirmar:',
  alts: [
    { t: 'A via aérea é triagem e a via óssea diferencia condutiva de neurossensorial.', ok: true,
      why: 'Correta. Otoscopia e anamnese ocupacional e extraocupacional são indissociáveis da avaliação.' },
    { t: 'A via aérea isolada permite classificar o tipo de perda apresentado pelo trabalhador avaliado.', ok: false,
      why: 'Errada. É necessária a comparação com a via óssea para identificar gap aéreo-ósseo.' },
    { t: 'A via aérea é triagem e a óssea diferencia, sendo a otoscopia dispensável no assintomático.', ok: false,
      why: 'Errada. Cerume obstrutivo e alterações timpânicas são frequentemente assintomáticos.' },
    { t: 'A via aérea é triagem e a óssea diferencia, sendo irrelevante a exposição extraocupacional a ruído.', ok: false,
      why: 'Errada. Atividades de lazer com ruído intenso compõem a exposição total.' },
    { t: 'A via aérea é triagem, bastando um único exame alterado para caracterizar perda induzida por ruído.', ok: false,
      why: 'Errada. A caracterização exige comparação sequencial, história e exclusão de outras causas.' }
  ],
  comentario: 'Quatro elementos inseparáveis: anamnese ocupacional e extraocupacional, otoscopia, audiometria por via aérea e óssea, e comparação sequencial com a de referência. Traçado isolado não diagnostica nada.',
  pegadinha: 'Ignorar a exposição extraocupacional é falha frequente que compromete tanto o diagnóstico quanto a discussão de nexo.',
  refs: ['NR-7 — anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ======================== 4.6 Saúde mental ============================= */
{ id: 'q-4.6-040', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa registra aumento de afastamentos por transtornos mentais após reestruturação que reduziu o quadro em 30% e manteve as mesmas metas de produção. A direção atribui o quadro a "fragilidade da nova geração". Sobre a análise, é CORRETO afirmar:',
  alts: [
    { t: 'A intensificação do trabalho é risco psicossocial reconhecido, e culpar o indivíduo desloca a análise.', ok: true,
      why: 'Correta. Reduzir quadro mantendo metas aumenta demanda e reduz margem de regulação.' },
    { t: 'A explicação da direção é plausível, pois características geracionais determinam a tolerância ao trabalho.', ok: false,
      why: 'Errada. É generalização sem sustentação e serve para não olhar a organização do trabalho.' },
    { t: 'A intensificação é risco, sendo o aumento após a reestruturação coincidência sem valor analítico.', ok: false,
      why: 'Errada. A coincidência com mudança organizacional é o dado que orienta a investigação.' },
    { t: 'A intensificação é risco, sendo a solução oferecer apoio psicológico sem rever metas ou quadro.', ok: false,
      why: 'Errada. Sem alterar o determinante, o apoio individual gerencia apenas as consequências.' },
    { t: 'A intensificação é risco, mas transtornos dela decorrentes não podem ser reconhecidos como ocupacionais.', ok: false,
      why: 'Errada. A organização do trabalho é fator de risco reconhecido e o nexo é possível.' }
  ],
  comentario: 'Intensificação — mesma meta com menos gente — é a mudança organizacional que mais produz adoecimento mental e a que menos aparece nos documentos. Atribuir a "geração" ou a "perfil" é a forma mais eficaz de não olhar para ela.',
  pegadinha: 'A explicação geracional é confortável para quem decidiu a reestruturação e não sobrevive à coincidência temporal.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-1', 'NR-17'] },

{ id: 'q-4.6-041', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de nexo em transtorno mental relacionado ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Combina caracterização da exposição, temporalidade, plausibilidade e análise de concausas.', ok: true,
      why: 'Correta. É o mesmo raciocínio dos demais agravos, com exposição organizacional.' },
    { t: 'Combina temporalidade e plausibilidade, afastando os problemas pessoais do trabalhador o nexo.', ok: false,
      why: 'Errada. Fatores extraocupacionais são concausas e não rompem o nexo.' },
    { t: 'Combina vários elementos, exigindo exame complementar que comprove a alteração em saúde mental.', ok: false,
      why: 'Errada. Não há exame que comprove transtorno mental; o diagnóstico é clínico.' },
    { t: 'Combina temporalidade e plausibilidade, sendo impossível caracterizar a exposição psicossocial.', ok: false,
      why: 'Errada. Ritmo, metas, jornada, autonomia e assédio são caracterizáveis e documentáveis.' },
    { t: 'Combina vários elementos, reconhecendo-se apenas os transtornos que constem de lista específica.', ok: false,
      why: 'Errada. Além das listas, existem o nexo individual e a análise do caso concreto.' }
  ],
  comentario: 'Nexo em saúde mental não é diferente em método: caracterizar a exposição (aqui, organizacional), verificar temporalidade e plausibilidade, e considerar concausas sem exigir exclusividade. O que muda é a natureza do agente, não o raciocínio.',
  pegadinha: 'Exigir exame complementar comprobatório aplica a transtornos mentais um critério que não existe em nenhuma prática clínica.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Lei nº 8.213/1991'] },

{ id: 'q-4.6-042', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o suporte social no trabalho como fator de proteção em saúde mental, é CORRETO afirmar:',
  alts: [
    { t: 'O suporte da chefia e dos colegas modula o efeito da alta demanda com baixo controle.', ok: true,
      why: 'Correta. É o terceiro eixo do modelo estendido e é acionável por intervenções concretas.' },
    { t: 'O suporte social é fator individual de cada trabalhador, sem relação com a organização do trabalho.', ok: false,
      why: 'Errada. Depende de estrutura de equipe, estilo de gestão e possibilidade de convívio.' },
    { t: 'O suporte modula o efeito, não sendo a relação com a chefia passível de avaliação técnica.', ok: false,
      why: 'Errada. Existem instrumentos validados que a avaliam de forma agregada.' },
    { t: 'O suporte modula o efeito e, aumentado, compensa integralmente qualquer nível de demanda.', ok: false,
      why: 'Errada. Modula o efeito, mas não substitui a redução da demanda excessiva.' },
    { t: 'O suporte modula o efeito, sendo relevante apenas nas atividades de atendimento ao público.', ok: false,
      why: 'Errada. É fator transversal a qualquer atividade.' }
  ],
  comentario: 'Suporte social modula, não anula. Ele é organizacional — depende de como as equipes são estruturadas e de como a chefia se comporta — e por isso é avaliável e intervível, ao contrário do que a gestão costuma alegar.',
  pegadinha: 'Tratar suporte social como traço individual retira do alcance da gestão algo que ela produz ou destrói.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ==================== 4.8 Câncer relacionado ao trabalho =============== */
{ id: 'q-4.8-040', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de curtume por 25 anos desenvolve carcinoma de células escamosas de cavidade nasal. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'Poeiras de couro têm carcinogenicidade reconhecida para cavidade nasal e seios paranasais.', ok: true,
      why: 'Correta. A compatibilidade sítio-agente é pilar do nexo, ao lado da latência.' },
    { t: 'Os cânceres de cavidade nasal decorrem de fatores individuais, sem associação ocupacional descrita.', ok: false,
      why: 'Errada. Poeiras de madeira e couro, níquel e cromo se associam a esse sítio.' },
    { t: 'Poeiras de couro são associadas, mas a ausência de agente químico líquido afasta o nexo.', ok: false,
      why: 'Errada. Poeiras são agentes químicos particulados e produzem exposição relevante.' },
    { t: 'Poeiras de couro são associadas, sendo irrelevante a compatibilidade entre sítio e agente.', ok: false,
      why: 'Errada. Exposição genérica não sustenta nexo; a compatibilidade é essencial.' },
    { t: 'Poeiras de couro são associadas, mas por ser tumor raro não há como estabelecer o nexo.', ok: false,
      why: 'Errada, e é o oposto: tumor raro com forte associação facilita o reconhecimento.' }
  ],
  comentario: 'Em câncer ocupacional, tumor raro com agente conhecido é o cenário mais favorável ao nexo — mesotelioma e asbesto, angiossarcoma hepático e cloreto de vinila, nasossinusal e poeira de couro ou madeira. Raridade ajuda, não atrapalha.',
  pegadinha: 'A alternativa que usa a raridade contra o nexo inverte a lógica da força de associação.',
  refs: ['IARC Monographs', 'LINACH', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-041', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa argumenta que a exposição a agente cancerígeno é intermitente e de baixa intensidade, e por isso não requer as medidas de controle previstas para carcinogênicos. Sobre o argumento, é CORRETO afirmar:',
  alts: [
    { t: 'Sem limiar demonstrado, exposições intermitentes e baixas também somam risco acumulado.', ok: true,
      why: 'Correta. A dose acumulada é o que importa, e por isso a substituição segue exigível.' },
    { t: 'A exposição intermitente ao agente não contribui para o risco de câncer ocupacional acumulado.', ok: false,
      why: 'Errada. A dose acumulada resulta também de exposições intermitentes ao longo dos anos.' },
    { t: 'Sem limiar, o risco existe, mas baixa intensidade equivale a ausência de risco nesses agentes.', ok: false,
      why: 'Errada. É justamente o pressuposto que a ausência de limiar afasta.' },
    { t: 'Sem limiar, o controle se aplica apenas a exposições contínuas e acima do limite estabelecido.', ok: false,
      why: 'Errada. A exigência decorre da natureza do agente, não do regime de exposição.' },
    { t: 'Sem limiar, o risco se acumula, podendo o registro ser dispensado quando a exposição é intermitente.', ok: false,
      why: 'Errada, e é grave: o registro é o que permitirá reconhecer o nexo décadas depois.' }
  ],
  comentario: 'Sem limiar não há "pouco seguro". Exposição intermitente e de baixa intensidade contribui para a dose acumulada, mantém a exigência de substituição e — o ponto mais esquecido — precisa ser registrada, porque o câncer aparece décadas depois.',
  pegadinha: 'Dispensar o registro por a exposição ser "pequena" é o que deixa o trabalhador sem prova no futuro.',
  refs: ['IARC Monographs', 'LINACH', 'ACGIH — TLVs e BEIs'] },

/* ============================ 5.4 Perícia ============================== */
{ id: 'q-5.4-040', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em perícia previdenciária, o segurado apresenta relatório do médico assistente afirmando incapacidade, mas o perito conclui pela capacidade. Sobre a divergência, é CORRETO afirmar:',
  alts: [
    { t: 'Respondem a perguntas diferentes, e a divergência é legítima e deve ser fundamentada.', ok: true,
      why: 'Correta. Um cuida e descreve; o outro avalia a repercussão sobre a capacidade.' },
    { t: 'Respondem a perguntas diferentes, vinculando o relatório do assistente a conclusão pericial.', ok: false,
      why: 'Errada. Ele é elemento de instrução, não conclusão vinculante.' },
    { t: 'Respondem a perguntas diferentes, indicando a divergência falha técnica de um dos médicos.', ok: false,
      why: 'Errada. Decorre da diferença de objeto entre assistência e perícia.' },
    { t: 'Respondem a perguntas diferentes, devendo o perito desconsiderar os relatórios por serem parciais.', ok: false,
      why: 'Errada. São elementos legítimos de instrução e precisam ser analisados.' },
    { t: 'Respondem a perguntas diferentes, devendo o perito ajustar a conclusão para evitar conflito.', ok: false,
      why: 'Errada. Alterar por conveniência compromete a integridade do trabalho pericial.' }
  ],
  comentario: 'Assistente descreve a doença; perito avalia a capacidade para uma atividade específica. Divergir é normal. O que não é aceitável é ignorar o relatório — ele precisa ser analisado e a divergência, fundamentada.',
  pegadinha: 'Os dois extremos: o relatório vincula, ou o relatório se descarta. Nenhum dos dois.',
  refs: ['Resoluções do CFM sobre perícia médica', 'Código de Ética Médica'] },

{ id: 'q-5.4-041', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do assistente técnico em perícia judicial, é CORRETO afirmar:',
  alts: [
    { t: 'É indicado pela parte, atua no interesse dela com independência técnica e pode divergir.', ok: true,
      why: 'Correta. Parcialidade de posição não autoriza falsidade: segue o dever de veracidade.' },
    { t: 'É indicado pela parte, com o mesmo dever de imparcialidade atribuído ao perito do juízo.', ok: false,
      why: 'Errada. A imparcialidade é dever do perito; o assistente atua no interesse de quem o indicou.' },
    { t: 'É indicado pela parte, podendo atuar depois como perito no mesmo processo, se nomeado.', ok: false,
      why: 'Errada. As funções são inconciliáveis no mesmo processo.' },
    { t: 'É indicado pela parte e pode afirmar conclusões contrárias aos achados se favorecerem quem o indicou.', ok: false,
      why: 'Errada. Parcialidade de posição não autoriza falsidade.' },
    { t: 'É indicado pela parte e apresenta parecer, sem poder acompanhar a realização da perícia.', ok: false,
      why: 'Errada. Acompanhar os trabalhos periciais é uma de suas prerrogativas.' }
  ],
  comentario: 'A distinção fina do tema: o assistente é parcial de posição — atua no interesse de quem o indicou — mas não pode ser falso. E jamais acumula com a função de perito no mesmo processo.',
  pegadinha: 'Confundir parcialidade legítima de posição com licença para afirmar o que não é verdade.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica e assistente técnico'] },

/* ================ 5.5 Incapacidade e dano corporal ==================== */
{ id: 'q-5.5-040', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 38 anos, motorista profissional, sofreu traumatismo cranioencefálico com sequela cognitiva leve, sem déficit motor. Sobre a avaliação da incapacidade, é CORRETO afirmar:',
  alts: [
    { t: 'Sequela cognitiva leve pode ser incompatível com condução pelo risco a terceiros.', ok: true,
      why: 'Correta. A mesma sequela é irrelevante numa função e decisiva em outra.' },
    { t: 'Sequela cognitiva leve, por definição, não gera incapacidade para nenhuma atividade laboral.', ok: false,
      why: 'Errada. A exigência da função é que decide, não a gravidade isolada.' },
    { t: 'Sequela cognitiva pode limitar, afastando a ausência de déficit motor a incapacidade para conduzir.', ok: false,
      why: 'Errada. Atenção, tempo de reação e julgamento são requisitos essenciais da condução.' },
    { t: 'Sequela cognitiva pode limitar, devendo a avaliação considerar apenas a imagem do crânio.', ok: false,
      why: 'Errada. Imagem não mede função cognitiva; a avaliação é clínica e neuropsicológica.' },
    { t: 'Sequela cognitiva pode limitar, sem que o risco a terceiros integre o juízo de aptidão.', ok: false,
      why: 'Errada. É elemento central em atividades que expõem terceiros.' }
  ],
  comentario: 'Sequela leve pode ser incapacitante para função de risco. Em atividades que expõem terceiros — condução, altura, energia, máquina — o critério de aptidão é mais restritivo, e cognição pesa tanto quanto função motora.',
  pegadinha: 'A ausência de déficit motor é usada como prova de capacidade e não diz nada sobre atenção e julgamento.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-5.5-041', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de dano corporal com uso de tabelas de referência, é CORRETO afirmar:',
  alts: [
    { t: 'Padronizam a quantificação do dano, sem substituir a avaliação clínica nem a análise funcional.', ok: true,
      why: 'Correta. O percentual tabelado é ponto de partida, não conclusão.' },
    { t: 'Padronizam a quantificação, correspondendo o percentual tabelado ao grau de incapacidade laborativa.', ok: false,
      why: 'Errada. Dano corporal e incapacidade laborativa são medidas distintas.' },
    { t: 'Padronizam a quantificação do dano, dispensando o uso da tabela a descrição dos achados no laudo.', ok: false,
      why: 'Errada. A descrição dos achados é o que fundamenta a aplicação da tabela.' },
    { t: 'Padronizam a quantificação, com aplicação restrita às lesões que acometem os membros do avaliado.', ok: false,
      why: 'Errada. Abrangem múltiplos sistemas e segmentos corporais.' },
    { t: 'Padronizam a quantificação, tornando dispensável a avaliação clínica individualizada do periciando.', ok: false,
      why: 'Errada. A tabela orienta, mas a avaliação clínica produz os dados que ela quantifica.' }
  ],
  comentario: 'Tabela dá padronização e comparabilidade, não dispensa clínica. E o ponto que mais confunde: percentual de dano corporal não é percentual de incapacidade laborativa — são perguntas diferentes, com destinatários diferentes.',
  pegadinha: 'Converter diretamente percentual tabelado em grau de incapacidade é o erro mais comum na leitura desses laudos.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM'] },

{ id: 'q-5.5-042', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a reavaliação da incapacidade ao longo do tempo, é CORRETO afirmar:',
  alts: [
    { t: 'A temporária exige reavaliação periódica, e mesmo a permanente admite revisão posterior.', ok: true,
      why: 'Correta. Permanente qualifica a expectativa no momento da avaliação, não elimina revisão.' },
    { t: 'A temporária exige reavaliação, não admitindo revisão a incapacidade classificada como permanente.', ok: false,
      why: 'Errada. Há previsão de reavaliação periódica.' },
    { t: 'A temporária exige reavaliação, que só cabe quando expressamente solicitada pelo segurado.', ok: false,
      why: 'Errada. Pode ser determinada de ofício pela instituição.' },
    { t: 'A temporária exige reavaliação, não permitindo agravamento posterior de sequela nova avaliação.', ok: false,
      why: 'Errada. Agravamento é uma das hipóteses que justificam reavaliação.' },
    { t: 'A temporária exige reavaliação, que considera apenas a condição clínica, e não a atividade exercida.', ok: false,
      why: 'Errada. Mudança de função altera as exigências e o juízo de capacidade.' }
  ],
  comentario: '"Permanente" descreve a expectativa no momento da avaliação, não um veredito eterno. Recuperação, agravamento, novas terapias e mudança de função são razões legítimas para reavaliar — em ambos os sentidos.',
  pegadinha: 'Ler "permanente" como definitivo e irrevisável fecha portas que a norma mantém abertas.',
  refs: ['Lei nº 8.213/1991', 'Decreto nº 3.048/1999'] }

);
