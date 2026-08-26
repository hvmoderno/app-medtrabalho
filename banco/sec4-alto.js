/* Seção 4 — aprofundamento dos temas de ALTO rendimento (4.4, 4.5, 4.6, 4.8)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 4.4 Dermatoses Ocupacionais ======================= */
{ id: 'q-4.4-020', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria química apresenta erupção acneiforme com comedões e cistos em região malar, retroauricular e axilar, poupando as áreas habituais da acne vulgar, após meses manipulando produto contaminado com compostos organoclorados. A hipótese CORRETA é:',
  alts: [
    { t: 'Cloracne, marcadora de exposição a hidrocarbonetos aromáticos halogenados.', ok: true,
      why: 'Correta. A distribuição atípica e a persistência a distinguem da acne comum.' },
    { t: 'Acne vulgar do adulto, agravada pelo calor do ambiente industrial em que o trabalhador atua.', ok: false,
      why: 'Errada. A distribuição e a persistência apontam cloracne.' },
    { t: 'Foliculite por óleo de corte, que cursa com comedões em região malar e retroauricular.', ok: false,
      why: 'Errada. A elaioconiose acomete áreas de contato com o óleo.' },
    { t: 'Dermatite de contato alérgica em fase aguda, com eritema e vesículas nas áreas expostas.', ok: false,
      why: 'Errada. A morfologia comedônica não corresponde a essa hipótese.' },
    { t: 'Miliária provocada pela oclusão da pele pelo uniforme de trabalho em ambiente quente.', ok: false,
      why: 'Errada. A miliária cursa com vesículas, não com comedões e cistos.' }
  ],
  comentario: 'Cloracne é dermatose marcadora: sua presença aponta exposição significativa a hidrocarbonetos aromáticos halogenados. Guarde a distribuição — malar e retroauricular — e a persistência prolongada mesmo após o afastamento. É um dos poucos achados dermatológicos que praticamente fecham o nexo sozinhos.',
  pegadinha: 'A banca oferece a acne vulgar "agravada pelo calor" como saída fácil. A distribuição atípica é o que denuncia a origem ocupacional.',
  refs: ['Salim — Dermatoses Ocupacionais', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.4-021', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de borracha apresenta manchas acrômicas em mãos e antebraços, simétricas, iniciadas nas áreas de contato com o produto e posteriormente também em áreas não expostas. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere leucodermia ocupacional por despigmentantes, como derivados fenólicos.', ok: true,
      why: 'Correta. Destroem melanócitos e podem gerar lesões à distância do contato.' },
    { t: 'É necessariamente vitiligo idiopático, pois há lesões também em áreas não expostas ao agente.', ok: false,
      why: 'Errada. A leucodermia ocupacional produz lesões à distância.' },
    { t: 'É pitiríase versicolor, quadro comum em trabalhadores de ambientes quentes e úmidos.', ok: false,
      why: 'Errada. A despigmentação por agente químico tem outro padrão e evolução.' },
    { t: 'Sugere leucodermia ocupacional, ocorrendo repigmentação invariável após o afastamento do agente.', ok: false,
      why: 'Errada. A repigmentação é incerta e frequentemente incompleta.' },
    { t: 'Sugere leucodermia, quadro que, por não gerar sintomas, não caracteriza dano à saúde do trabalhador.', ok: false,
      why: 'Errada. Há dano estético e psicossocial documentado.' }
  ],
  comentario: 'Leucodermia ocupacional: o início nas áreas de contato é a pista, mesmo quando aparecem lesões a distância. A repigmentação após o afastamento é incerta. E o fato de a lesão não doer não a torna irrelevante — ela sinaliza exposição a agente que destrói células.',
  pegadinha: 'A alternativa que usa as lesões a distância para "provar" vitiligo idiopático explora exatamente a característica que torna o diagnóstico difícil.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.4-022', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhadora de cozinha industrial apresenta, minutos após manusear determinado alimento com luvas de látex, prurido intenso, eritema e pápulas nas mãos, com resolução em poucas horas. Em um episódio houve também rinite e sensação de aperto torácico. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere urticária de contato imunológica, com risco de manifestação sistêmica.', ok: true,
      why: 'Correta. Exige investigação e substituição do agente sensibilizante.' },
    { t: 'É dermatite de contato alérgica, reação de hipersensibilidade tardia mediada por células.', ok: false,
      why: 'Errada. O início em minutos aponta mecanismo imediato.' },
    { t: 'Sugere urticária de contato, sendo o teste de contato com leituras diferidas o exame de escolha.', ok: false,
      why: 'Errada. Para reação imediata usa-se teste de leitura precoce.' },
    { t: 'Sugere urticária de contato, indicando a resolução rápida quadro benigno, sem afastar o agente.', ok: false,
      why: 'Errada. Há risco de progressão para reação sistêmica grave.' },
    { t: 'Sugere urticária de contato, sendo a luva de látex a medida preventiva indicada para esse caso.', ok: false,
      why: 'Errada. O látex é justamente um dos agentes clássicos desse quadro.' }
  ],
  comentario: 'Separe pelo tempo e pelo mecanismo: urticária de contato aparece em minutos e é imediata, mediada por anticorpos, com risco sistêmico; dermatite de contato alérgica aparece em um a dois dias, é tardia e mediada por células, investigada por teste de leitura diferida. Látex é o sensibilizante emblemático da primeira.',
  pegadinha: 'Indicar luva de látex como prevenção é a armadilha final — o suposto equipamento de proteção pode ser a própria fonte.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-32'] },

{ id: 'q-4.4-023', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a prevenção de dermatoses ocupacionais, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Cremes de barreira substituem com vantagem as luvas, por preservarem a destreza manual.', ok: true,
      why: 'É a INCORRETA. Têm eficácia limitada e não substituem a barreira física.' },
    { t: 'A seleção do material da luva deve considerar o agente, pois a resistência à permeação varia.', ok: false,
      why: 'Correta, portanto não é a resposta. Material inadequado permite permeação.' },
    { t: 'A substituição do agente sensibilizante é a medida mais eficaz quando tecnicamente viável.', ok: false,
      why: 'Correta, portanto não é a resposta. É o topo da hierarquia de controle.' },
    { t: 'A higienização adequada e o cuidado com a integridade da pele reduzem a penetração de agentes.', ok: false,
      why: 'Correta, portanto não é a resposta. Pele íntegra é barreira relevante.' },
    { t: 'O uso prolongado de luvas oclusivas pode, por si, gerar irritação e favorecer dermatose.', ok: false,
      why: 'Correta, portanto não é a resposta. A oclusão macera e agrava.' }
  ],
  comentario: 'Ordem de prevenção nas dermatoses: substituir o agente, isolar o processo, proteger com material adequado ao agente, cuidar da integridade da pele. Cremes de barreira entram por último e não substituem luva. E a própria luva oclusiva pode causar dermatose.',
  pegadinha: 'A falsa vende o creme de barreira como solução prática — argumento comum na indústria e tecnicamente frágil.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

/* ================ 4.5 Otorrinolaringologia Ocupacional ================== */
{ id: 'q-4.5-020', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 52 anos, exposto a ruído há 20 anos, apresenta audiometria com perda neurossensorial bilateral, simétrica, com queda progressiva a partir de 2.000 Hz e sem recuperação nas frequências mais altas. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A queda progressiva nas agudas sem recuperação em oito mil hertz sugere presbiacusia.', ok: true,
      why: 'Correta. Exige considerar a idade e outras causas além do ruído.' },
    { t: 'O padrão é típico de perda induzida por ruído, por ser neurossensorial e acometer as duas orelhas.', ok: false,
      why: 'Errada. A perda por ruído mostra entalhe com recuperação em oito mil hertz.' },
    { t: 'A perda em frequências agudas exclui qualquer contribuição da exposição ocupacional ao ruído.', ok: false,
      why: 'Errada. Pode haver contribuição concorrente a investigar.' },
    { t: 'O diagnóstico se resolve pela audiometria, sem necessidade de anamnese ocupacional e otoscopia.', ok: false,
      why: 'Errada. O traçado isolado não estabelece diagnóstico nem nexo.' },
    { t: 'A ausência de gap aéreo-ósseo no exame confirma que a causa da perda é de origem ocupacional.', ok: false,
      why: 'Errada. Indica perda neurossensorial, que tem várias causas.' }
  ],
  comentario: 'Não basta ser neurossensorial e bilateral: é a CONFIGURAÇÃO que distingue. Perda induzida por ruído desenha entalhe em 3.000 a 6.000 Hz com recuperação em 8.000 Hz. Queda progressiva e contínua nas agudas, sem recuperação, aponta presbiacusia — que pode coexistir com a exposição como concausa.',
  pegadinha: 'Neurossensorial + bilateral é o falso atalho: essas duas características não são exclusivas da perda induzida por ruído.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-021', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após uma explosão em uma indústria, trabalhador apresenta perda auditiva súbita à direita, com zumbido intenso e otoscopia mostrando perfuração timpânica. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É trauma acústico: evento agudo único, podendo ser unilateral e lesar a orelha média.', ok: true,
      why: 'Correta. Distingue-se da perda induzida por ruído, crônica e bilateral.' },
    { t: 'É perda auditiva induzida por ruído em sua forma aguda, desencadeada pelo evento sonoro intenso.', ok: false,
      why: 'Errada. A perda induzida por ruído é crônica e cumulativa.' },
    { t: 'É trauma acústico, sendo a perfuração timpânica achado esperado na perda induzida por ruído.', ok: false,
      why: 'Errada. A perda por ruído não cursa com lesão timpânica.' },
    { t: 'É evento sonoro único e, por isso, não se configura acidente do trabalho no caso descrito.', ok: false,
      why: 'Errada. É acidente típico, súbito e no exercício da atividade.' },
    { t: 'É trauma acústico, mas a assimetria da perda afasta qualquer relação com a atividade laboral.', ok: false,
      why: 'Errada. O trauma acústico é caracteristicamente assimétrico.' }
  ],
  comentario: 'Duas entidades diferentes: trauma acústico é agudo, por evento único, pode ser unilateral e pode ter componente condutivo por perfuração; perda induzida por ruído é crônica, bilateral, neurossensorial e sem lesão de orelha média. O primeiro gera comunicação de acidente do trabalho como acidente típico.',
  pegadinha: 'Chamar o trauma acústico de "forma aguda da PAIR" é o erro conceitual que a questão persegue.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-022', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma gráfica expõe trabalhadores simultaneamente a ruído e a solventes orgânicos. O médico do trabalho estrutura o programa de conservação auditiva. Sobre a interação entre agentes, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Alguns solventes são ototóxicos e potencializam o dano do ruído sobre a audição.', ok: true,
      why: 'Correta. A exposição química entra na avaliação mesmo com ruído abaixo do nível de ação.' },
    { t: 'Os solventes não afetam a audição, sendo o ruído o único agente ototóxico de origem ocupacional.', ok: false,
      why: 'Errada. Há solventes e metais com ototoxicidade reconhecida.' },
    { t: 'Os solventes são ototóxicos apenas em exposições acima do limite de tolerância do próprio agente.', ok: false,
      why: 'Errada. O efeito combinado ocorre abaixo dos limites individuais.' },
    { t: 'Os solventes são ototóxicos, devendo o programa limitar-se ao fornecimento de protetores auriculares.', ok: false,
      why: 'Errada. O protetor não atua sobre a via química, que é sistêmica.' },
    { t: 'Os solventes são ototóxicos, dispensando os expostos monitoramento se o ruído estiver controlado.', ok: false,
      why: 'Errada. A vigilância audiométrica permanece indicada.' }
  ],
  comentario: 'Ruído não é o único agente que lesa a audição: solventes, monóxido de carbono e alguns metais também. A consequência prática é que o mapa de risco auditivo precisa incluir a exposição química, e o monitoramento audiométrico não se restringe a quem está acima do nível de ação de ruído.',
  pegadinha: 'A alternativa que reduz o programa de conservação auditiva a protetor auricular repete o erro estrutural de confundir programa com equipamento.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7', 'NR-9'] },

{ id: 'q-4.5-023', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a realização da audiometria ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É necessário repouso auditivo prévio adequado antes da realização do exame.', ok: true,
      why: 'Correta. Sem ele, mudança temporária de limiar simula perda permanente.' },
    { t: 'É necessário cuidado técnico, sendo a audiometria de referência a realizada no exame demissional.', ok: false,
      why: 'Errada. A referência é a primeira obtida em condições adequadas.' },
    { t: 'É necessário cuidado técnico, sendo a otoscopia prévia dispensável no trabalhador assintomático.', ok: false,
      why: 'Errada. Cerume obstrutivo é frequentemente assintomático.' },
    { t: 'O exame deve ser feito logo após a jornada, para captar o efeito real da exposição do dia.', ok: false,
      why: 'Errada. É exatamente o que o repouso auditivo existe para evitar.' },
    { t: 'É necessário cuidado técnico, bastando uma audiometria alterada para firmar o diagnóstico.', ok: false,
      why: 'Errada. Exige confirmação, história e exclusão de outras causas.' }
  ],
  comentario: 'Três exigências da audiometria ocupacional: repouso auditivo prévio, otoscopia antes do exame e comparação com a audiometria de referência, que é a INICIAL. E nunca se firma o diagnóstico em um único exame isolado.',
  pegadinha: 'A alternativa que manda examinar logo após a jornada soa como bom senso ("medir o efeito real") e produz exatamente o falso positivo que o repouso evita.',
  refs: ['NR-7 — Anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ===== 4.6 Saúde Mental e Fatores Psicossociais no Trabalho ============= */
{ id: 'q-4.6-020', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao analisar o adoecimento mental em um setor de produção com metas rígidas, o médico do trabalho recorre a modelos teóricos de estresse ocupacional. Sobre o modelo demanda-controle, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O maior risco é a alta demanda com baixo controle, modulada pelo apoio social.', ok: true,
      why: 'Correta. É o núcleo do modelo demanda-controle com apoio.' },
    { t: 'O maior risco está na combinação de baixa demanda com alto controle sobre a própria atividade.', ok: false,
      why: 'Errada. Essa combinação é a de menor tensão.' },
    { t: 'O modelo sustenta que a demanda elevada, isoladamente, é o principal determinante do adoecimento.', ok: false,
      why: 'Errada. É a combinação com baixo controle que adoece.' },
    { t: 'O modelo esforço-recompensa é idêntico ao demanda-controle, mudando apenas a nomenclatura usada.', ok: false,
      why: 'Errada. Um trata de controle; o outro, de reconhecimento e recompensa.' },
    { t: 'Os fatores psicossociais não são passíveis de avaliação sistemática, por seu caráter subjetivo.', ok: false,
      why: 'Errada. Há instrumentos validados para avaliá-los.' }
  ],
  comentario: 'Demanda-controle: o risco está na alta exigência — muita demanda com pouca autonomia —, modulada pelo apoio social. Esforço-recompensa: o risco está no desequilíbrio entre o que se investe e o que se recebe, incluindo estima e segurança no emprego. São modelos complementares, não sinônimos.',
  pegadinha: 'A alternativa que atribui o risco à demanda isolada apaga o conceito central do modelo, que é o controle.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-17'] },

{ id: 'q-4.6-021', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma trabalhadora relata ao serviço médico exposição repetida a humilhações públicas pela chefia, isolamento deliberado e atribuição sistemática de tarefas incompatíveis com sua função, há mais de um ano, com repercussão sobre sua saúde. Sobre a conduta e a caracterização, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É compatível com assédio moral: conduta abusiva repetida que degrada as condições de trabalho.', ok: true,
      why: 'Correta. Cabe acolher, cuidar, registrar e orientar, preservando o sigilo.' },
    { t: 'É compatível com assédio, configurado já por um episódio isolado de descortesia da chefia.', ok: false,
      why: 'Errada. Repetição e prolongamento são elementos característicos.' },
    { t: 'É compatível com assédio, devendo o médico investigar os fatos junto à chefia antes de qualquer conduta.', ok: false,
      why: 'Errada. Investigar fatos não é papel do médico; o cuidado vem primeiro.' },
    { t: 'É conflito interpessoal e, como tal, não tem repercussão no campo da saúde do trabalhador.', ok: false,
      why: 'Errada. Há repercussão documentada em saúde mental e física.' },
    { t: 'É compatível com assédio, devendo o relato ser comunicado à chefia imediata para que ela se defenda.', ok: false,
      why: 'Errada. Expõe o trabalhador e viola o sigilo.' }
  ],
  comentario: 'Assédio moral exige conduta abusiva REPETITIVA e PROLONGADA que degrada o ambiente. O médico não apura: acolhe, cuida, registra com precisão e orienta sobre os canais. Registrar bem é o que sustenta tanto o cuidado quanto o eventual reconhecimento futuro.',
  pegadinha: 'A alternativa que manda comunicar à chefia parece transparência e é exatamente o que expõe a trabalhadora.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Código de Ética Médica', 'NR-1'] },

{ id: 'q-4.6-022', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a psicodinâmica do trabalho na perspectiva de Dejours, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O sofrimento pode virar criatividade quando há espaço para reorganizar a atividade.', ok: true,
      why: 'Correta. Adoece quando esse espaço e o reconhecimento são bloqueados.' },
    { t: 'Todo sofrimento vivido no trabalho é patológico e deve ser integralmente eliminado da atividade.', ok: false,
      why: 'Errada. O sofrimento pode ser mobilizador quando há espaço de ação.' },
    { t: 'As estratégias coletivas de defesa construídas pelos trabalhadores devem ser combatidas pela gestão.', ok: false,
      why: 'Errada. São formas de enfrentamento a compreender, não a suprimir.' },
    { t: 'A abordagem sustenta que a saúde mental no trabalho depende de traços de personalidade individuais.', ok: false,
      why: 'Errada. O foco é a organização do trabalho.' },
    { t: 'O reconhecimento pelo trabalho tem importância secundária, sendo o salário o fator determinante.', ok: false,
      why: 'Errada. O reconhecimento é elemento central do modelo.' }
  ],
  comentario: 'A diferença entre trabalho prescrito e trabalho real gera sofrimento inevitável. O que decide o desfecho é haver espaço para reorganizar a atividade e receber reconhecimento. Sem isso, o sofrimento vira patogênico. O foco está na organização do trabalho, não na personalidade.',
  pegadinha: 'Reduzir a saúde mental a traço de personalidade é justamente a leitura que a psicodinâmica do trabalho recusa.',
  refs: ['Dejours — A loucura do trabalho'] },

{ id: 'q-4.6-023', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o gerenciamento dos fatores de risco psicossociais nas empresas, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Por serem subjetivos, não integram o inventário e ficam em programas voluntários.', ok: true,
      why: 'É a INCORRETA. Fatores psicossociais integram expressamente o inventário de riscos.' },
    { t: 'Ritmo, metas, jornada, autonomia e suporte da chefia são fatores organizacionais avaliáveis.', ok: false,
      why: 'Correta, portanto não é a resposta. São caracterizáveis e documentáveis.' },
    { t: 'A participação dos trabalhadores na identificação dos fatores aumenta a qualidade do diagnóstico.', ok: false,
      why: 'Correta, portanto não é a resposta. Traz o conhecimento do trabalho real.' },
    { t: 'Intervenções apenas individuais tendem a ter efeito limitado se a organização do trabalho não muda.', ok: false,
      why: 'Correta, portanto não é a resposta. Sem mudar o determinante, o efeito não se sustenta.' },
    { t: 'O sigilo das informações individuais deve ser preservado nas avaliações de caráter coletivo.', ok: false,
      why: 'Correta, portanto não é a resposta. Sem sigilo, o instrumento mede o medo.' }
  ],
  comentario: 'Risco psicossocial é risco ocupacional: entra no inventário, tem plano de ação e é gerenciado como os demais. Avalia-se por dimensões concretas — ritmo, metas, jornada, autonomia, suporte — com participação dos trabalhadores e resultado agregado.',
  pegadinha: 'A falsa usa a "subjetividade" para expulsar o risco psicossocial do gerenciamento formal, que é a resistência mais comum na prática.',
  refs: ['NR-1', 'NR-17', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ================= 4.8 Câncer Relacionado ao Trabalho ================== */
{ id: 'q-4.8-020', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ex-trabalhador de indústria de fibrocimento, afastado da atividade há 25 anos, apresenta dor torácica e derrame pleural recidivante. A biópsia confirma mesotelioma. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A latência prolongada é característica do mesotelioma e não afasta o nexo com o asbesto.', ok: true,
      why: 'Correta. É compatível mesmo com exposição cessada décadas antes.' },
    { t: 'O longo intervalo desde a exposição ao asbesto afasta a relação do tumor com o trabalho.', ok: false,
      why: 'Errada. A latência longa é característica desse tumor.' },
    { t: 'O mesotelioma exige exposição intensa e prolongada, não ocorrendo após exposições leves.', ok: false,
      why: 'Errada. Há casos após exposições curtas e de baixa intensidade.' },
    { t: 'Por estar o trabalhador aposentado, não cabe providência de notificação nem de reconhecimento.', ok: false,
      why: 'Errada. A notificação e o reconhecimento permanecem devidos.' },
    { t: 'A ausência de asbestose ao exame de imagem exclui a exposição prévia ao asbesto no trabalho.', ok: false,
      why: 'Errada. O mesotelioma ocorre sem asbestose associada.' }
  ],
  comentario: 'Mesotelioma e asbesto: latência de décadas, ocorrência mesmo após exposições de baixa intensidade, e independência em relação à presença de asbestose. Nada disso afasta o nexo — tudo isso o sustenta. O reconhecimento independe de o trabalhador estar aposentado.',
  pegadinha: 'Usar a latência longa como argumento contra o nexo é o raciocínio invertido mais comum em câncer ocupacional.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs', 'Santos, U.P. — Pneumologia Ocupacional'] },

{ id: 'q-4.8-021', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao estruturar a vigilância do câncer relacionado ao trabalho em um município, a equipe discute o conceito de fração atribuível. Sobre esse conceito, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Estima a proporção dos casos evitáveis se a exposição ocupacional fosse eliminada.', ok: true,
      why: 'Correta. É ferramenta de dimensionamento e de priorização.' },
    { t: 'Indica a probabilidade de que o câncer de um paciente específico tenha sido causado pelo trabalho.', ok: false,
      why: 'Errada. É medida populacional, não individual.' },
    { t: 'É sinônimo de risco relativo, expressando quantas vezes o risco é maior entre os expostos.', ok: false,
      why: 'Errada. São medidas distintas, com interpretações diferentes.' },
    { t: 'Estima os casos evitáveis, e só pode ser calculada para cânceres com exposição a agente único.', ok: false,
      why: 'Errada. Aplica-se também a exposições múltiplas.' },
    { t: 'Estima os casos evitáveis, indicando fração baixa que a exposição não precisa ser controlada.', ok: false,
      why: 'Errada. Fração baixa em câncer frequente ainda representa muitos casos.' }
  ],
  comentario: 'Fração atribuível é medida populacional: quanto do total de casos desapareceria sem aquela exposição. Não responde "o câncer deste paciente veio do trabalho?" — essa é outra pergunta, respondida pelo raciocínio de nexo individual, com exposição documentada, latência compatível e exclusão de outras causas.',
  pegadinha: 'Transportar uma medida populacional para a decisão sobre um indivíduo é o erro epidemiológico mais comum em perícia de câncer ocupacional.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'Fletcher — Epidemiologia Clínica'] },

{ id: 'q-4.8-022', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o acompanhamento de trabalhadores expostos a agentes cancerígenos, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve considerar a latência e pode ser necessário mesmo após o fim da exposição.', ok: true,
      why: 'Correta. Exige registro duradouro da história ocupacional do trabalhador.' },
    { t: 'Encerrada a exposição ao agente, cessa a necessidade de qualquer acompanhamento posterior.', ok: false,
      why: 'Errada. A latência longa é a razão do seguimento.' },
    { t: 'Deve considerar a latência, sendo o rastreamento sempre indicado, haja ou não método eficaz.', ok: false,
      why: 'Errada. Rastrear sem método eficaz produz dano por excesso.' },
    { t: 'Deve considerar a latência, sendo dispensável o registro quando o trabalhador muda de empresa.', ok: false,
      why: 'Errada. É exatamente aí que o registro se torna essencial.' },
    { t: 'Deve considerar a latência, dispensando o câncer em exposto a análise individual de nexo.', ok: false,
      why: 'Errada. A análise individual permanece necessária.' }
  ],
  comentario: 'Duas consequências práticas da latência longa: o acompanhamento pode se estender além do vínculo, e o registro da história ocupacional precisa ser duradouro e transferível. Rastreamento, porém, só quando existe método com desempenho comprovado — do contrário o dano supera o benefício.',
  pegadinha: 'A alternativa que defende rastrear sempre esbarra no mesmo princípio da prevenção quaternária: mais exame nem sempre é mais proteção.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'LINACH', 'Ferreira Junior — Rastreamento de doenças'] }

);
