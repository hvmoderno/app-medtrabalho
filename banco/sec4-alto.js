/* Seção 4 — aprofundamento dos temas de ALTO rendimento (4.4, 4.5, 4.6, 4.8)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 4.4 Dermatoses Ocupacionais ======================= */
{ id: 'q-4.4-020', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria química apresenta erupção acneiforme com comedões e cistos em região malar, retroauricular e axilar, poupando as áreas habituais da acne vulgar, após meses manipulando produto contaminado com compostos organoclorados. A hipótese CORRETA é:',
  alts: [
    { t: 'Cloracne, dermatose marcadora de exposição a hidrocarbonetos aromáticos halogenados, cuja distribuição atípica e a persistência após o afastamento a distinguem da acne comum.', ok: true,
      why: 'Correta. A cloracne acomete regiões malar e retroauricular, com comedões numerosos, é marcador de exposição a compostos como dioxinas e bifenilos policlorados, e pode persistir por anos após cessada a exposição.' },
    { t: 'Acne vulgar agravada pelo calor do ambiente industrial.', ok: false,
      why: 'Errada. A distribuição descrita, poupando as áreas típicas da acne vulgar, é justamente o que afasta essa hipótese.' },
    { t: 'Foliculite por óleo de corte, que cursa com comedões em região malar e retroauricular.', ok: false,
      why: 'Errada. A elaioconiose por óleos acomete tipicamente áreas de contato direto, como antebraços e coxas, e não a distribuição descrita.' },
    { t: 'Dermatite de contato alérgica em fase aguda.', ok: false,
      why: 'Errada. Dermatite de contato alérgica cursa com eczema, e não com lesões acneiformes com comedões e cistos.' },
    { t: 'Miliária por oclusão pelo uniforme de trabalho.', ok: false,
      why: 'Errada. A miliária resulta de obstrução de ductos sudoríparos, com vesículas superficiais, sem comedões.' }
  ],
  comentario: 'Cloracne é dermatose marcadora: sua presença aponta exposição significativa a hidrocarbonetos aromáticos halogenados. Guarde a distribuição — malar e retroauricular — e a persistência prolongada mesmo após o afastamento. É um dos poucos achados dermatológicos que praticamente fecham o nexo sozinhos.',
  pegadinha: 'A banca oferece a acne vulgar "agravada pelo calor" como saída fácil. A distribuição atípica é o que denuncia a origem ocupacional.',
  refs: ['Salim — Dermatoses Ocupacionais', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-4.4-021', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de borracha apresenta manchas acrômicas em mãos e antebraços, simétricas, iniciadas nas áreas de contato com o produto e posteriormente também em áreas não expostas. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere leucodermia ocupacional por agentes despigmentantes, como derivados fenólicos, que destroem melanócitos e podem produzir lesões à distância das áreas de contato.', ok: true,
      why: 'Correta. Alguns derivados fenólicos e catecóis são citotóxicos para melanócitos, iniciando o quadro nas áreas de contato e podendo evoluir para lesões a distância, o que torna o diagnóstico diferencial com vitiligo difícil.' },
    { t: 'Trata-se necessariamente de vitiligo idiopático, pois há lesões em áreas não expostas.', ok: false,
      why: 'Errada. A ocorrência de lesões a distância não afasta a origem ocupacional em leucodermia química; o início nas áreas de contato é o dado que orienta.' },
    { t: 'O quadro corresponde a pitiríase versicolor, comum em ambientes quentes.', ok: false,
      why: 'Errada. A pitiríase versicolor produz máculas hipocrômicas descamativas com padrão distinto e exame micológico positivo.' },
    { t: 'A repigmentação ocorre invariavelmente após o afastamento do agente.', ok: false,
      why: 'Errada. A repigmentação é variável e frequentemente incompleta, sobretudo em lesões antigas e extensas.' },
    { t: 'Por não gerar sintomas, o quadro não caracteriza dano à saúde do trabalhador.', ok: false,
      why: 'Errada. Há repercussão estética e psicossocial relevante, além do valor da lesão como marcador de exposição a agente citotóxico.' }
  ],
  comentario: 'Leucodermia ocupacional: o início nas áreas de contato é a pista, mesmo quando aparecem lesões a distância. A repigmentação após o afastamento é incerta. E o fato de a lesão não doer não a torna irrelevante — ela sinaliza exposição a agente que destrói células.',
  pegadinha: 'A alternativa que usa as lesões a distância para "provar" vitiligo idiopático explora exatamente a característica que torna o diagnóstico difícil.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.4-022', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhadora de cozinha industrial apresenta, minutos após manusear determinado alimento com luvas de látex, prurido intenso, eritema e pápulas nas mãos, com resolução em poucas horas. Em um episódio houve também rinite e sensação de aperto torácico. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere urticária de contato imunológica, mediada por anticorpos, com risco de manifestações sistêmicas, o que exige investigação e substituição do agente sensibilizante.', ok: true,
      why: 'Correta. A instalação em minutos com resolução em horas, somada a manifestações respiratórias, caracteriza reação imediata mediada por anticorpos, que pode evoluir para reação sistêmica grave.' },
    { t: 'Trata-se de dermatite de contato alérgica, de hipersensibilidade tardia.', ok: false,
      why: 'Errada quanto ao mecanismo e ao tempo: a hipersensibilidade tardia se instala em um a dois dias e cursa com eczema, não com urticária em minutos.' },
    { t: 'O teste de contato com leituras diferidas é o exame de escolha para confirmar o diagnóstico.', ok: false,
      why: 'Errada. O teste de leitura diferida investiga hipersensibilidade tardia; reações imediatas exigem testes apropriados a esse mecanismo, com precaução pelo risco sistêmico.' },
    { t: 'A resolução rápida dos sintomas indica quadro benigno, sem necessidade de afastamento do agente.', ok: false,
      why: 'Errada. A rapidez não indica benignidade: reações imediatas podem escalar para anafilaxia em exposições subsequentes.' },
    { t: 'O uso de luvas de látex é a medida preventiva indicada para o caso.', ok: false,
      why: 'Errada. O látex é ele próprio um sensibilizante clássico de urticária de contato imunológica e pode ser o agente envolvido.' }
  ],
  comentario: 'Separe pelo tempo e pelo mecanismo: urticária de contato aparece em minutos e é imediata, mediada por anticorpos, com risco sistêmico; dermatite de contato alérgica aparece em um a dois dias, é tardia e mediada por células, investigada por teste de leitura diferida. Látex é o sensibilizante emblemático da primeira.',
  pegadinha: 'Indicar luva de látex como prevenção é a armadilha final — o suposto equipamento de proteção pode ser a própria fonte.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-32'] },

{ id: 'q-4.4-023', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a prevenção de dermatoses ocupacionais, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Cremes de barreira substituem com vantagem as luvas, por não comprometerem a destreza manual.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Cremes de barreira são medida complementar de eficácia limitada e não substituem a proteção física adequada ao agente.' },
    { t: 'A seleção do material da luva deve considerar o agente manipulado, pois materiais diferentes têm resistência à permeação diferente.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. Luva inadequada permite permeação e pode manter o agente em contato prolongado com a pele.' },
    { t: 'A substituição do agente sensibilizante é a medida mais eficaz quando tecnicamente viável.', ok: false,
      why: 'Verdadeira. Eliminar ou substituir está no topo da hierarquia de controles também nas dermatoses.' },
    { t: 'A higienização adequada e o cuidado com a integridade da pele reduzem a penetração de agentes.', ok: false,
      why: 'Verdadeira. Pele lesada perde a função de barreira e facilita a absorção e a sensibilização.' },
    { t: 'O uso prolongado de luvas oclusivas pode, por si, gerar irritação e favorecer dermatose.', ok: false,
      why: 'Verdadeira. Oclusão, calor e umidade sob a luva são causa reconhecida de dermatite irritativa.' }
  ],
  comentario: 'Ordem de prevenção nas dermatoses: substituir o agente, isolar o processo, proteger com material adequado ao agente, cuidar da integridade da pele. Cremes de barreira entram por último e não substituem luva. E a própria luva oclusiva pode causar dermatose.',
  pegadinha: 'A falsa vende o creme de barreira como solução prática — argumento comum na indústria e tecnicamente frágil.',
  refs: ['Salim — Dermatoses Ocupacionais', 'NR-6'] },

/* ================ 4.5 Otorrinolaringologia Ocupacional ================== */
{ id: 'q-4.5-020', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de 52 anos, exposto a ruído há 20 anos, apresenta audiometria com perda neurossensorial bilateral, simétrica, com queda progressiva a partir de 2.000 Hz e sem recuperação nas frequências mais altas. Sobre a interpretação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O padrão descrito, em queda progressiva nas frequências agudas sem recuperação em 8.000 Hz, é mais compatível com presbiacusia do que com perda auditiva induzida por ruído, o que exige considerar a idade e outras causas.', ok: true,
      why: 'Correta. A perda induzida por ruído caracteriza-se por entalhe em torno de 3.000 a 6.000 Hz COM recuperação em 8.000 Hz; a queda progressiva e contínua nas agudas aponta para componente relacionado à idade.' },
    { t: 'O padrão é típico de perda induzida por ruído, pois é neurossensorial e bilateral.', ok: false,
      why: 'Errada. Neurossensorial e bilateral também descreve a presbiacusia; o que distingue é a CONFIGURAÇÃO da curva, e aqui falta o entalhe com recuperação.' },
    { t: 'A presença de perda em frequências agudas exclui qualquer contribuição da exposição ocupacional.', ok: false,
      why: 'Errada. Pode haver superposição de causas, com a exposição atuando como concausa sobre a perda relacionada à idade.' },
    { t: 'O diagnóstico se resolve exclusivamente pela audiometria, sem necessidade de anamnese ocupacional e otoscopia.', ok: false,
      why: 'Errada. A audiometria é um exame dentro de uma avaliação que inclui história ocupacional e extraocupacional, otoscopia e outros testes.' },
    { t: 'A ausência de gap aéreo-ósseo confirma que a causa é ocupacional.', ok: false,
      why: 'Errada. A ausência de gap indica que a perda é neurossensorial, e não a sua causa — presbiacusia e ototoxicidade também são neurossensoriais.' }
  ],
  comentario: 'Não basta ser neurossensorial e bilateral: é a CONFIGURAÇÃO que distingue. Perda induzida por ruído desenha entalhe em 3.000 a 6.000 Hz com recuperação em 8.000 Hz. Queda progressiva e contínua nas agudas, sem recuperação, aponta presbiacusia — que pode coexistir com a exposição como concausa.',
  pegadinha: 'Neurossensorial + bilateral é o falso atalho: essas duas características não são exclusivas da perda induzida por ruído.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7'] },

{ id: 'q-4.5-021', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Após uma explosão em uma indústria, trabalhador apresenta perda auditiva súbita à direita, com zumbido intenso e otoscopia mostrando perfuração timpânica. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro corresponde a trauma acústico, evento agudo por exposição única de altíssima intensidade, que pode ser unilateral e cursar com lesão de orelha média — quadro distinto da perda induzida por ruído, que é crônica e bilateral.', ok: true,
      why: 'Correta. Trauma acústico é agudo, decorre de um único evento, pode ser assimétrico e pode envolver a orelha média com perfuração timpânica, gerando componente condutivo.' },
    { t: 'Trata-se de perda auditiva induzida por ruído em sua forma aguda.', ok: false,
      why: 'Errada. A perda induzida por ruído é, por definição, de instalação lenta e progressiva por exposição crônica, e é bilateral.' },
    { t: 'A perfuração timpânica é achado esperado na perda auditiva induzida por ruído.', ok: false,
      why: 'Errada. A perda induzida por ruído é puramente neurossensorial, sem lesão de orelha média.' },
    { t: 'Como o evento foi único, não se configura acidente do trabalho.', ok: false,
      why: 'Errada. Evento único em razão do trabalho, com lesão, é exatamente a definição de acidente do trabalho típico.' },
    { t: 'A assimetria da perda afasta qualquer relação com o trabalho.', ok: false,
      why: 'Errada. No trauma acústico a assimetria é esperada, conforme a posição do trabalhador em relação à fonte.' }
  ],
  comentario: 'Duas entidades diferentes: trauma acústico é agudo, por evento único, pode ser unilateral e pode ter componente condutivo por perfuração; perda induzida por ruído é crônica, bilateral, neurossensorial e sem lesão de orelha média. O primeiro gera comunicação de acidente do trabalho como acidente típico.',
  pegadinha: 'Chamar o trauma acústico de "forma aguda da PAIR" é o erro conceitual que a questão persegue.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-022', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma gráfica expõe trabalhadores simultaneamente a ruído e a solventes orgânicos. O médico do trabalho estrutura o programa de conservação auditiva. Sobre a interação entre agentes, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Alguns solventes orgânicos são ototóxicos e podem potencializar o dano auditivo do ruído, de modo que a avaliação de risco auditivo deve considerar a exposição química mesmo quando o ruído está abaixo do nível de ação.', ok: true,
      why: 'Correta. A interação entre ruído e agentes ototóxicos é reconhecida, e ignorá-la subestima o risco de trabalhadores expostos a ambos.' },
    { t: 'Solventes não afetam a audição, sendo o ruído o único agente ototóxico ocupacional.', ok: false,
      why: 'Errada. Além de solventes, agentes como monóxido de carbono e alguns metais têm potencial ototóxico reconhecido.' },
    { t: 'A ototoxicidade química só é relevante em exposições acima do limite de tolerância do agente químico.', ok: false,
      why: 'Errada. A interação pode ocorrer em concentrações inferiores ao limite, sobretudo na presença simultânea de ruído.' },
    { t: 'O programa de conservação auditiva deve limitar-se ao fornecimento de protetores auriculares.', ok: false,
      why: 'Errada. Programa de conservação auditiva inclui avaliação da exposição, controle de engenharia, monitoramento audiométrico, capacitação e avaliação de eficácia.' },
    { t: 'Trabalhadores expostos a ototóxicos químicos dispensam monitoramento audiométrico se o ruído estiver controlado.', ok: false,
      why: 'Errada, e é o oposto: a presença de ototóxicos é razão adicional para manter o monitoramento.' }
  ],
  comentario: 'Ruído não é o único agente que lesa a audição: solventes, monóxido de carbono e alguns metais também. A consequência prática é que o mapa de risco auditivo precisa incluir a exposição química, e o monitoramento audiométrico não se restringe a quem está acima do nível de ação de ruído.',
  pegadinha: 'A alternativa que reduz o programa de conservação auditiva a protetor auricular repete o erro estrutural de confundir programa com equipamento.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-7', 'NR-9'] },

{ id: 'q-4.5-023', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a realização da audiometria ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É necessário repouso auditivo prévio adequado, pois sem ele a mudança temporária de limiar pode ser interpretada erroneamente como perda permanente.', ok: true,
      why: 'Correta. O repouso auditivo antes do exame é justamente o que permite distinguir o deslocamento temporário do limiar, reversível, da perda permanente.' },
    { t: 'A audiometria de referência é aquela realizada no exame demissional.', ok: false,
      why: 'Errada. A audiometria de referência é a inicial, contra a qual as sequenciais serão comparadas ao longo do vínculo.' },
    { t: 'A otoscopia prévia é dispensável quando o trabalhador é assintomático.', ok: false,
      why: 'Errada. A otoscopia é etapa necessária, pois achados como cerume obstrutivo alteram o resultado do exame.' },
    { t: 'O exame deve ser realizado logo após a jornada, para captar o efeito real da exposição.', ok: false,
      why: 'Errada, e é o oposto do que se busca: realizar logo após a jornada captura exatamente o deslocamento temporário que se quer evitar.' },
    { t: 'Uma única audiometria alterada é suficiente para firmar o diagnóstico de perda induzida por ruído.', ok: false,
      why: 'Errada. O diagnóstico exige comparação sequencial, história ocupacional e exclusão de outras causas.' }
  ],
  comentario: 'Três exigências da audiometria ocupacional: repouso auditivo prévio, otoscopia antes do exame e comparação com a audiometria de referência, que é a INICIAL. E nunca se firma o diagnóstico em um único exame isolado.',
  pegadinha: 'A alternativa que manda examinar logo após a jornada soa como bom senso ("medir o efeito real") e produz exatamente o falso positivo que o repouso evita.',
  refs: ['NR-7 — Anexo de audiometria', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ===== 4.6 Saúde Mental e Fatores Psicossociais no Trabalho ============= */
{ id: 'q-4.6-020', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao analisar o adoecimento mental em um setor de produção com metas rígidas, o médico do trabalho recorre a modelos teóricos de estresse ocupacional. Sobre o modelo demanda-controle, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A situação de maior risco é a combinação de alta demanda com baixo controle sobre o próprio trabalho, e o apoio social funciona como fator que modula esse efeito.', ok: true,
      why: 'Correta. É a célula de alta exigência do modelo: muita demanda somada a pouca autonomia decisória. A extensão do modelo incorpora o apoio social como moderador.' },
    { t: 'O maior risco está na combinação de baixa demanda com alto controle.', ok: false,
      why: 'Errada. Essa combinação descreve trabalho pouco exigente e com autonomia, de baixo risco.' },
    { t: 'O modelo sustenta que a demanda elevada, isoladamente, é o principal determinante do adoecimento.', ok: false,
      why: 'Errada. O ponto central do modelo é justamente que a demanda alta é tolerável quando há controle; o que adoece é a combinação.' },
    { t: 'O modelo esforço-recompensa é idêntico ao demanda-controle, mudando apenas a nomenclatura.', ok: false,
      why: 'Errada. O modelo esforço-recompensa foca o desequilíbrio entre o esforço despendido e as recompensas obtidas — salário, estima, perspectiva de carreira e segurança no emprego.' },
    { t: 'Fatores psicossociais não são passíveis de avaliação sistemática, por serem subjetivos.', ok: false,
      why: 'Errada. Existem instrumentos validados de avaliação, e a norma de ergonomia trata expressamente da organização do trabalho.' }
  ],
  comentario: 'Demanda-controle: o risco está na alta exigência — muita demanda com pouca autonomia —, modulada pelo apoio social. Esforço-recompensa: o risco está no desequilíbrio entre o que se investe e o que se recebe, incluindo estima e segurança no emprego. São modelos complementares, não sinônimos.',
  pegadinha: 'A alternativa que atribui o risco à demanda isolada apaga o conceito central do modelo, que é o controle.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-17'] },

{ id: 'q-4.6-021', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma trabalhadora relata ao serviço médico exposição repetida a humilhações públicas pela chefia, isolamento deliberado e atribuição sistemática de tarefas incompatíveis com sua função, há mais de um ano, com repercussão sobre sua saúde. Sobre a conduta e a caracterização, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O relato é compatível com assédio moral, caracterizado pela conduta abusiva repetitiva e prolongada que degrada as condições de trabalho, e o médico deve acolher, cuidar, registrar e orientar sobre os caminhos institucionais, preservando o sigilo.', ok: true,
      why: 'Correta. Repetição, prolongamento no tempo e degradação das condições de trabalho são os elementos que caracterizam o assédio moral, e o papel do médico começa pelo acolhimento e pelo registro cuidadoso.' },
    { t: 'Um episódio isolado de descortesia já configura assédio moral.', ok: false,
      why: 'Errada. A repetição e o prolongamento no tempo são elementos definidores; conflito pontual não é assédio.' },
    { t: 'O médico do trabalho deve investigar os fatos junto à chefia antes de qualquer conduta clínica.', ok: false,
      why: 'Errada. A apuração dos fatos é atribuição de canal institucional próprio; o médico cuida, registra e orienta, sem se transformar em investigador.' },
    { t: 'Como se trata de conflito interpessoal, o caso não tem repercussão em saúde do trabalhador.', ok: false,
      why: 'Errada. Assédio moral é fator de risco psicossocial reconhecido, com repercussão documentada sobre a saúde mental e física.' },
    { t: 'O relato deve ser comunicado à chefia imediata para que ela se defenda.', ok: false,
      why: 'Errada. Comunicar o relato ao suposto agressor expõe a trabalhadora a retaliação e quebra a confiança do atendimento.' }
  ],
  comentario: 'Assédio moral exige conduta abusiva REPETITIVA e PROLONGADA que degrada o ambiente. O médico não apura: acolhe, cuida, registra com precisão e orienta sobre os canais. Registrar bem é o que sustenta tanto o cuidado quanto o eventual reconhecimento futuro.',
  pegadinha: 'A alternativa que manda comunicar à chefia parece transparência e é exatamente o que expõe a trabalhadora.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Código de Ética Médica', 'NR-1'] },

{ id: 'q-4.6-022', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a psicodinâmica do trabalho na perspectiva de Dejours, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O sofrimento no trabalho não é necessariamente patológico: pode ser transformado em criatividade quando há espaço para o trabalhador reorganizar sua atividade e ser reconhecido, e adoece quando esse espaço é bloqueado.', ok: true,
      why: 'Correta. A distinção entre sofrimento criativo e sofrimento patogênico é o eixo da abordagem, e o reconhecimento é o operador central dessa transformação.' },
    { t: 'Todo sofrimento no trabalho é patológico e deve ser eliminado.', ok: false,
      why: 'Errada. A abordagem sustenta justamente que o sofrimento é inerente ao confronto entre o trabalho prescrito e o real, e pode ser mobilizador.' },
    { t: 'As estratégias coletivas de defesa construídas pelos trabalhadores devem ser sempre combatidas pela gestão.', ok: false,
      why: 'Errada. Elas são compreendidas como formas de suportar o sofrimento; combatê-las sem alterar o que as gera apenas retira uma proteção.' },
    { t: 'A abordagem sustenta que a saúde mental no trabalho depende exclusivamente de traços de personalidade.', ok: false,
      why: 'Errada, e é o oposto: o foco está na organização do trabalho, não em atributos individuais.' },
    { t: 'O reconhecimento pelo trabalho realizado tem importância secundária, sendo o salário o fator determinante.', ok: false,
      why: 'Errada. O reconhecimento — do fazer e da utilidade — ocupa lugar central na transformação do sofrimento.' }
  ],
  comentario: 'A diferença entre trabalho prescrito e trabalho real gera sofrimento inevitável. O que decide o desfecho é haver espaço para reorganizar a atividade e receber reconhecimento. Sem isso, o sofrimento vira patogênico. O foco está na organização do trabalho, não na personalidade.',
  pegadinha: 'Reduzir a saúde mental a traço de personalidade é justamente a leitura que a psicodinâmica do trabalho recusa.',
  refs: ['Dejours — A loucura do trabalho'] },

{ id: 'q-4.6-023', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o gerenciamento dos fatores de risco psicossociais nas empresas, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'Por serem subjetivos, os fatores psicossociais não integram o inventário de riscos e são tratados apenas em programas voluntários de bem-estar.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Fatores de risco psicossociais integram o gerenciamento de riscos ocupacionais e devem ser identificados e tratados como os demais riscos.' },
    { t: 'Ritmo, metas, jornada, autonomia e suporte da chefia são fatores organizacionais avaliáveis.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. São dimensões concretas e mensuráveis da organização do trabalho.' },
    { t: 'A participação dos trabalhadores na identificação dos fatores aumenta a qualidade do diagnóstico.', ok: false,
      why: 'Verdadeira. Quem executa a atividade conhece as pressões reais, que raramente aparecem no organograma.' },
    { t: 'Intervenções apenas individuais tendem a ter efeito limitado se a organização do trabalho não muda.', ok: false,
      why: 'Verdadeira. Sem alterar o determinante, o trabalhador cuidado retorna ao mesmo ambiente adoecedor.' },
    { t: 'O sigilo das informações individuais deve ser preservado nas avaliações coletivas.', ok: false,
      why: 'Verdadeira. O resultado é agregado; a identificação individual comprometeria a adesão e o sigilo.' }
  ],
  comentario: 'Risco psicossocial é risco ocupacional: entra no inventário, tem plano de ação e é gerenciado como os demais. Avalia-se por dimensões concretas — ritmo, metas, jornada, autonomia, suporte — com participação dos trabalhadores e resultado agregado.',
  pegadinha: 'A falsa usa a "subjetividade" para expulsar o risco psicossocial do gerenciamento formal, que é a resistência mais comum na prática.',
  refs: ['NR-1', 'NR-17', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ================= 4.8 Câncer Relacionado ao Trabalho ================== */
{ id: 'q-4.8-020', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ex-trabalhador de indústria de fibrocimento, afastado da atividade há 25 anos, apresenta dor torácica e derrame pleural recidivante. A biópsia confirma mesotelioma. Sobre o caso, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A latência prolongada é característica do mesotelioma relacionado ao asbesto e não afasta o nexo; ao contrário, é compatível com ele, ainda que a exposição tenha cessado décadas antes.', ok: true,
      why: 'Correta. A latência longa é traço definidor da doença, e por isso o afastamento antigo da exposição é esperado e não constitui argumento contra o nexo.' },
    { t: 'O longo intervalo desde a exposição afasta a relação com o trabalho.', ok: false,
      why: 'Errada, e inverte o raciocínio: latência curta é que seria incompatível com o que se conhece da doença.' },
    { t: 'O mesotelioma exige exposição intensa e prolongada, não ocorrendo após exposições de baixa intensidade.', ok: false,
      why: 'Errada. Há casos associados a exposições de baixa intensidade, inclusive ambientais e domésticas por contaminação de vestimentas.' },
    { t: 'Por o trabalhador estar aposentado, não cabe qualquer providência de notificação ou de reconhecimento.', ok: false,
      why: 'Errada. A notificação e o reconhecimento da relação com o trabalho independem da situação contratual atual.' },
    { t: 'A ausência de asbestose ao exame de imagem exclui a exposição prévia ao asbesto.', ok: false,
      why: 'Errada. O mesotelioma pode ocorrer sem asbestose associada; são desfechos distintos da mesma exposição.' }
  ],
  comentario: 'Mesotelioma e asbesto: latência de décadas, ocorrência mesmo após exposições de baixa intensidade, e independência em relação à presença de asbestose. Nada disso afasta o nexo — tudo isso o sustenta. O reconhecimento independe de o trabalhador estar aposentado.',
  pegadinha: 'Usar a latência longa como argumento contra o nexo é o raciocínio invertido mais comum em câncer ocupacional.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'IARC Monographs', 'Santos, U.P. — Pneumologia Ocupacional'] },

{ id: 'q-4.8-021', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao estruturar a vigilância do câncer relacionado ao trabalho em um município, a equipe discute o conceito de fração atribuível. Sobre esse conceito, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Estima a proporção dos casos de determinado câncer na população que poderia ser evitada se a exposição ocupacional fosse eliminada, sendo ferramenta de dimensionamento do problema e de priorização.', ok: true,
      why: 'Correta. A fração atribuível responde a uma pergunta de saúde pública — quanto do total é devido àquela exposição — e por isso orienta prioridade de intervenção.' },
    { t: 'Indica a probabilidade de que o câncer de um paciente específico tenha sido causado pelo trabalho.', ok: false,
      why: 'Errada. Essa é uma pergunta individual e distinta; a fração atribuível populacional é medida agregada.' },
    { t: 'É sinônimo de risco relativo.', ok: false,
      why: 'Errada. O risco relativo compara incidências entre expostos e não expostos; a fração atribuível é derivada dele e expressa proporção de casos evitáveis.' },
    { t: 'Só pode ser calculada para cânceres com exposição a agente único.', ok: false,
      why: 'Errada. Pode ser estimada mesmo em cânceres multicausais, que são a regra.' },
    { t: 'Uma fração atribuível baixa indica que a exposição não deve ser controlada.', ok: false,
      why: 'Errada. Fração baixa em câncer frequente pode significar muitos casos em números absolutos, e o controle da exposição carcinogênica não depende desse cálculo.' }
  ],
  comentario: 'Fração atribuível é medida populacional: quanto do total de casos desapareceria sem aquela exposição. Não responde "o câncer deste paciente veio do trabalho?" — essa é outra pergunta, respondida pelo raciocínio de nexo individual, com exposição documentada, latência compatível e exclusão de outras causas.',
  pegadinha: 'Transportar uma medida populacional para a decisão sobre um indivíduo é o erro epidemiológico mais comum em perícia de câncer ocupacional.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'Fletcher — Epidemiologia Clínica'] },

{ id: 'q-4.8-022', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o acompanhamento de trabalhadores expostos a agentes cancerígenos, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O acompanhamento deve considerar a latência do agente e pode ser necessário mesmo após o encerramento da exposição, o que exige registro duradouro da história ocupacional.', ok: true,
      why: 'Correta. Com latências longas, o risco persiste após o fim da exposição, e a informação sobre a exposição precisa sobreviver ao vínculo empregatício.' },
    { t: 'Encerrada a exposição, cessa a necessidade de qualquer acompanhamento.', ok: false,
      why: 'Errada. É justamente após o fim da exposição que a maior parte dos casos se manifesta, dada a latência.' },
    { t: 'A realização de exames de rastreamento é sempre indicada, independentemente de haver método eficaz para o câncer em questão.', ok: false,
      why: 'Errada. Rastrear sem método de desempenho comprovado gera dano por falso-positivo e investigação desnecessária.' },
    { t: 'O registro da exposição no prontuário é dispensável quando o trabalhador muda de empresa.', ok: false,
      why: 'Errada, e é o oposto: a mudança de empresa torna o registro ainda mais crítico, pois a informação tende a se perder.' },
    { t: 'A ocorrência de câncer em trabalhador exposto dispensa a análise individual de nexo, por ser presumida.', ok: false,
      why: 'Errada. O nexo individual exige análise da exposição, da latência e da plausibilidade — não se presume automaticamente.' }
  ],
  comentario: 'Duas consequências práticas da latência longa: o acompanhamento pode se estender além do vínculo, e o registro da história ocupacional precisa ser duradouro e transferível. Rastreamento, porém, só quando existe método com desempenho comprovado — do contrário o dano supera o benefício.',
  pegadinha: 'A alternativa que defende rastrear sempre esbarra no mesmo princípio da prevenção quaternária: mais exame nem sempre é mais proteção.',
  refs: ['Atlas do Câncer Relacionado ao Trabalho', 'LINACH', 'Ferreira Junior — Rastreamento de doenças'] }

);
