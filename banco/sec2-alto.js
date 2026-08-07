/* Seção 2 — aprofundamento dos temas de ALTO rendimento (2.2, 2.3, 2.6, 2.9)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 2.2 Agentes Físicos =============================== */
{ id: 'q-2.2-020', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Operador de martelete pneumático, 44 anos, há doze anos na função, relata episódios de palidez súbita das pontas dos dedos das duas mãos desencadeados pelo frio, seguidos de cianose e depois rubor com formigamento, além de redução da sensibilidade tátil fina. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere a síndrome de vibração mão-braço, em que o componente vascular se manifesta como fenômeno de Raynaud ocupacional, com nexo estabelecido pela exposição a vibração localizada.', ok: true,
      why: 'Correta. Palidez episódica desencadeada pelo frio, em trabalhador com anos de exposição a vibração de mãos e braços, caracteriza o componente vascular da síndrome, que também tem componentes neurológico e musculoesquelético.' },
    { t: 'Trata-se de fenômeno de Raynaud primário, sem relação com o trabalho, por ser bilateral.', ok: false,
      why: 'Errada. A bilateralidade não afasta a origem ocupacional — ela é justamente esperada em quem opera ferramenta com as duas mãos.' },
    { t: 'O quadro decorre de exposição a vibração de corpo inteiro, típica de operadores de ferramentas manuais.', ok: false,
      why: 'Errada, houve troca: ferramenta manual gera vibração de mãos e braços. Vibração de corpo inteiro é a de veículos e plataformas, associada sobretudo a lombalgia.' },
    { t: 'A ausência de alteração em radiografia de mãos afasta o diagnóstico.', ok: false,
      why: 'Errada. O diagnóstico é clínico e ocupacional; radiografia normal não exclui o componente vascular nem o neurológico.' },
    { t: 'A conduta correta é manter a exposição e prescrever vasodilatador, pois o quadro é reversível com medicação.', ok: false,
      why: 'Errada. A medida essencial é reduzir ou cessar a exposição à vibração e ao frio; manter a exposição perpetua e agrava a lesão.' }
  ],
  comentario: 'Vibração de mãos e braços produz uma síndrome com três componentes: vascular (Raynaud ocupacional, os "dedos brancos"), neurológico (parestesia, perda de sensibilidade e de destreza) e musculoesquelético. Vibração de corpo inteiro é outra história — veículos, plataformas, lombalgia.',
  pegadinha: 'A banca troca vibração localizada por corpo inteiro, e usa a bilateralidade para sugerir causa não ocupacional. As duas mãos operam a ferramenta: bilateral é o esperado.',
  refs: ['NHO 10 — Fundacentro', 'Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-021', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma marcenaria, o setor de lixamento apresenta ruído contínuo e o setor de prensagem apresenta impactos repetidos. O higienista precisa definir a estratégia de avaliação. Sobre ruído ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Ruído contínuo ou intermitente e ruído de impacto têm critérios de avaliação distintos, e a caracterização exige identificar o tipo antes de escolher o parâmetro e o instrumento de medição.', ok: true,
      why: 'Correta. Os dois tipos exigem abordagens diferentes: o primeiro é avaliado por nível equivalente e dose ao longo da jornada; o de impacto exige medição de nível de pico com resposta apropriada.' },
    { t: 'Todo ruído deve ser avaliado apenas pelo nível de pressão sonora instantâneo no momento de maior intensidade.', ok: false,
      why: 'Errada. O valor instantâneo isolado não representa a exposição ao longo da jornada, que é o que importa para o risco auditivo no ruído contínuo.' },
    { t: 'O conceito de nível de ação é irrelevante, pois só o limite de tolerância desencadeia medidas.', ok: false,
      why: 'Errada, e é o oposto da lógica preventiva: o nível de ação é justamente o patamar em que se disparam medidas preventivas antes de o limite ser atingido.' },
    { t: 'A dosimetria deve ser feita em posto fixo, sem acompanhar o trabalhador ao longo das tarefas.', ok: false,
      why: 'Errada. A dosimetria pessoal acompanha o trabalhador, porque é a exposição dele — e não a do ponto — que se quer conhecer.' },
    { t: 'Trabalhador que usa protetor auditivo dispensa a avaliação da exposição ambiental.', ok: false,
      why: 'Errada. É preciso conhecer a exposição ambiental para saber se a atenuação do protetor é suficiente — sem esse dado a seleção do protetor é arbitrária.' }
  ],
  comentario: 'Antes de medir, classifique: contínuo/intermitente (dose e nível equivalente, dosimetria pessoal) ou de impacto (nível de pico). E guarde o conceito de nível de ação: patamar abaixo do limite em que já se disparam medidas preventivas, incluindo monitoramento audiométrico.',
  pegadinha: 'Dizer que o protetor dispensa a avaliação inverte a ordem: é a avaliação que permite escolher o protetor.',
  refs: ['NHO 01 — Fundacentro', 'NR-9', 'NR-15'] },

{ id: 'q-2.2-022', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Soldador relata episódios recorrentes de dor ocular intensa, sensação de areia nos olhos, lacrimejamento e fotofobia, iniciados algumas horas após a jornada e com resolução em um a dois dias. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro é compatível com ceratoconjuntivite por radiação ultravioleta, de início tardio em relação à exposição, e a prevenção depende de proteção ocular com filtro adequado e de barreiras que protejam também os trabalhadores próximos.', ok: true,
      why: 'Correta. O intervalo de horas entre a exposição e o sintoma é característico, e a proteção precisa alcançar quem está ao redor, não apenas o soldador.' },
    { t: 'O quadro decorre de radiação ionizante emitida pelo arco elétrico.', ok: false,
      why: 'Errada. O arco de solda emite radiação NÃO ionizante — ultravioleta, visível e infravermelho.' },
    { t: 'A ausência de sintomas durante a jornada afasta a relação com a solda.', ok: false,
      why: 'Errada, e é justamente o traço diagnóstico: o intervalo livre de algumas horas é típico da lesão por ultravioleta.' },
    { t: 'A exposição repetida gera tolerância, tornando desnecessária a proteção após alguns meses na função.', ok: false,
      why: 'Errada. Não há adaptação protetora; a exposição cumulativa aumenta o risco de dano crônico, inclusive de catarata.' },
    { t: 'Óculos escuros comuns oferecem proteção equivalente à do filtro de solda.', ok: false,
      why: 'Errada. Lentes escuras sem filtro adequado podem inclusive piorar o dano, ao dilatar a pupila sem bloquear a radiação.' }
  ],
  comentario: 'Solda é fonte de radiação não ionizante. A ceratoconjuntivite actínica aparece horas depois — o "olho de solda" — e a proteção precisa cobrir também quem passa perto, daí as cortinas e biombos. Óculos escuro comum não protege e pode agravar.',
  pegadinha: 'A alternativa que classifica a radiação do arco como ionizante é a inversão central do tema.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-023', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Mergulhador profissional apresenta, cerca de uma hora após ascensão, dor articular intensa em ombros e joelhos, sem trauma. Sobre exposição a pressões anormais, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O quadro sugere doença descompressiva, causada pela formação de bolhas de gás inerte com a redução da pressão ambiente, e o tratamento definitivo é a recompressão em câmara hiperbárica.', ok: true,
      why: 'Correta. A descompressão rápida demais permite que o gás dissolvido nos tecidos forme bolhas; a recompressão é o tratamento que reduz as bolhas e restabelece a perfusão.' },
    { t: 'Trata-se de osteonecrose disbárica, complicação aguda que surge horas após o mergulho.', ok: false,
      why: 'Errada. A osteonecrose disbárica é complicação CRÔNICA, de instalação insidiosa após exposições repetidas, e não explica um quadro agudo pós-ascensão.' },
    { t: 'O tratamento é exclusivamente analgésico, pois o quadro é autolimitado.', ok: false,
      why: 'Errada. Retardar a recompressão piora o prognóstico e pode levar a sequelas neurológicas permanentes.' },
    { t: 'O quadro decorre de intoxicação por oxigênio, cuja manifestação típica é a dor articular.', ok: false,
      why: 'Errada. A toxicidade do oxigênio se manifesta por quadro neurológico e pulmonar, não por dor articular pós-ascensão.' },
    { t: 'A prevenção depende apenas da experiência do mergulhador, não de tabelas de descompressão.', ok: false,
      why: 'Errada. O cumprimento de tabelas e procedimentos de descompressão é a base da prevenção, e não a experiência individual.' }
  ],
  comentario: 'Duas entidades que a banca troca: doença descompressiva é AGUDA, por bolhas de gás após ascensão, e trata com recompressão; osteonecrose disbárica é CRÔNICA, sequela óssea de exposições repetidas. Prevenção é procedimento e tabela, não perícia pessoal.',
  pegadinha: 'A troca entre a complicação aguda e a crônica é o eixo da questão — repare sempre no tempo de instalação descrito no enunciado.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-024', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre exposição ocupacional ao frio, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A ingestão de bebida alcoólica é medida útil para o trabalhador em ambiente frio, por promover sensação de aquecimento.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. O álcool provoca vasodilatação periférica, que aumenta a perda de calor central enquanto gera sensação enganosa de aquecimento — é fator de risco, não medida de proteção.' },
    { t: 'A velocidade do ar aumenta a perda de calor e deve ser considerada na avaliação da exposição.', ok: false,
      why: 'Verdadeira, portanto não é a resposta. O efeito do vento sobre a perda de calor é determinante da sensação térmica e do risco.' },
    { t: 'Vestimenta em camadas permite ajuste conforme a atividade e reduz o acúmulo de umidade junto à pele.', ok: false,
      why: 'Verdadeira. O suor retido é um dos principais responsáveis pela perda de calor em ambiente frio.' },
    { t: 'Extremidades são as regiões mais vulneráveis, com risco de lesão local por congelamento.', ok: false,
      why: 'Verdadeira. Dedos, orelhas, nariz e pés são os sítios de maior risco pela vasoconstrição periférica.' },
    { t: 'Pausas em ambiente aquecido integram as medidas de organização do trabalho em exposição ao frio.', ok: false,
      why: 'Verdadeira. O regime de trabalho e pausa é medida organizacional central na exposição ao frio.' }
  ],
  comentario: 'Frio: o vento multiplica a perda de calor, a umidade junto à pele agrava, as extremidades são o alvo e a organização do trabalho com pausas aquecidas é medida essencial. Álcool é fator de risco — vasodilata, engana e aumenta a perda de calor central.',
  pegadinha: 'É questão de "assinale a INCORRETA" e a falsa se apoia numa crença popular bastante difundida sobre álcool e frio.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

/* ==================== 2.3 Agentes Químicos ============================== */
{ id: 'q-2.3-020', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao descrever os aerodispersoides presentes em uma indústria, o higienista precisa classificá-los corretamente. A associação CORRETA entre o material particulado e seu processo de geração é:',
  alts: [
    { t: 'Fumo metálico — partícula sólida formada pela condensação de vapores metálicos, como na soldagem.', ok: true,
      why: 'Correta. Fumo é definido pelo mecanismo de geração: vaporização seguida de condensação, gerando partículas muito finas — daí a alta penetração respiratória na solda.' },
    { t: 'Poeira — partícula sólida formada pela condensação de vapores.', ok: false,
      why: 'Errada. Poeira resulta de ruptura mecânica de sólidos, como britagem, lixamento e moagem — não de condensação.' },
    { t: 'Névoa — partícula sólida gerada por combustão incompleta.', ok: false,
      why: 'Errada em dois pontos: névoa é líquida, e a partícula de combustão incompleta é a fumaça.' },
    { t: 'Vapor — estado particulado de substância que é sólida à temperatura ambiente.', ok: false,
      why: 'Errada. Vapor é a fase gasosa de substância que é líquida ou sólida nas condições ambientes, e não material particulado.' },
    { t: 'Fumaça — partícula líquida gerada por ruptura mecânica de líquidos.', ok: false,
      why: 'Errada. Ruptura mecânica de líquido gera névoa; fumaça vem de combustão incompleta.' }
  ],
  comentario: 'Classifique pelo mecanismo de geração: poeira = ruptura mecânica de sólido; fumo = condensação de vapor metálico; névoa = ruptura mecânica de líquido; neblina = condensação de vapor de líquido; fumaça = combustão incompleta. Vapor e gás não são particulados.',
  pegadinha: 'A prova embaralha os pares. O atalho é fixar o VERBO: ruptura mecânica versus condensação versus combustão.',
  refs: ['ABHO', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.3-021', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa que utiliza benzeno como matéria-prima pergunta ao médico do trabalho qual limite de exposição adotar como meta de controle. A orientação CORRETA é:',
  alts: [
    { t: 'Para o benzeno não se admite a existência de nível seguro de exposição, de modo que o valor de referência tem caráter tecnológico e a meta é a busca permanente da menor exposição possível.', ok: true,
      why: 'Correta. Por ser carcinogênico reconhecido sem limiar demonstrado, o parâmetro adotado não representa fronteira de segurança e sim referência de desempenho tecnológico, com redução contínua.' },
    { t: 'Basta manter a concentração logo abaixo do valor de referência, que representa o nível seguro para exposição por toda a vida laboral.', ok: false,
      why: 'Errada. Tratar o valor como fronteira de segurança é justamente o erro que o regime especial do benzeno pretende evitar.' },
    { t: 'O controle da exposição ao benzeno se faz exclusivamente por equipamento de proteção respiratória.', ok: false,
      why: 'Errada. A prioridade é a substituição do agente e as medidas de engenharia; o equipamento individual é complementar.' },
    { t: 'O monitoramento biológico do benzeno substitui a avaliação ambiental.', ok: false,
      why: 'Errada. Os dois se complementam: o ambiental caracteriza a exposição do grupo e o biológico verifica a absorção individual.' },
    { t: 'Trabalhadores expostos ao benzeno não necessitam de acompanhamento hematológico periódico.', ok: false,
      why: 'Errada. A mielotoxicidade é o efeito central do benzeno, o que torna o acompanhamento hematológico essencial.' }
  ],
  comentario: 'Benzeno é o caso emblemático do carcinogênico sem limiar: o valor de referência é tecnológico, não de segurança, e a meta é reduzir sempre. Some a isso a substituição como primeira medida, o acompanhamento hematológico dos expostos e a complementaridade entre avaliação ambiental e biológica.',
  pegadinha: 'A alternativa que trata o valor de referência como "nível seguro" é a tese que a norma do benzeno existe para derrubar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs', 'LINACH'] },

{ id: 'q-2.3-022', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador rural é levado ao serviço médico com miose, sialorreia intensa, broncorreia, sudorese, cólicas abdominais, bradicardia e fasciculações musculares, cerca de duas horas após aplicação de defensivo agrícola. A hipótese e a conduta CORRETAS são:',
  alts: [
    { t: 'Intoxicação por inibidor de colinesterase, com síndrome colinérgica; a prioridade é a descontaminação, o suporte ventilatório e a administração de atropina em doses tituladas pela resposta das secreções.', ok: true,
      why: 'Correta. O conjunto descrito é a síndrome muscarínica somada a manifestações nicotínicas; a atropina é titulada pelo controle das secreções brônquicas, que é o que mata nesses casos.' },
    { t: 'Intoxicação por piretroide, cuja manifestação típica é a síndrome colinérgica descrita.', ok: false,
      why: 'Errada. Piretroides causam sobretudo parestesias cutâneas e irritação, sem a síndrome colinérgica completa.' },
    { t: 'Intoxicação por paraquat, com quadro colinérgico agudo e boa resposta à atropina.', ok: false,
      why: 'Errada. O paraquat produz lesão cáustica e fibrose pulmonar tardia, não síndrome colinérgica, e não responde à atropina.' },
    { t: 'Quadro compatível com intoxicação por herbicida glifosato, tratado com pralidoxima.', ok: false,
      why: 'Errada. O quadro não corresponde ao glifosato, e a pralidoxima é reativador de colinesterase, usado em intoxicação por organofosforado.' },
    { t: 'Como o quadro é autolimitado, basta observação clínica sem intervenção medicamentosa.', ok: false,
      why: 'Errada e perigosa. A síndrome colinérgica grave leva a insuficiência respiratória e morte sem tratamento.' }
  ],
  comentario: 'Síndrome colinérgica — miose, sialorreia, broncorreia, bradicardia, cólicas, fasciculações — aponta para inibidores da colinesterase. Conduta: descontaminar, proteger via aérea, atropina titulada pelas secreções, e reativador de colinesterase conforme o agente. Não confunda com piretroide (parestesia) nem com paraquat (lesão pulmonar tardia).',
  pegadinha: 'Todos os distratores citam agrotóxicos reais e antídotos reais — só que descasados do quadro clínico.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-2.3-023', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma marmoraria processa rochas ornamentais com corte a seco. Sobre a exposição à sílica cristalina, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A sílica cristalina é reconhecida como carcinogênica para humanos, e o corte a seco aumenta muito a geração de poeira respirável, o que torna a supressão com água ou a exaustão localizada medidas prioritárias.', ok: true,
      why: 'Correta. Além da silicose, há reconhecimento da carcinogenicidade pulmonar, e o processo a seco é justamente o determinante técnico da exposição — daí a prioridade da via úmida e da exaustão.' },
    { t: 'O risco existe apenas para a fração inalável total, não havendo relevância da fração respirável.', ok: false,
      why: 'Errada, e inverte o conceito: é a fração respirável, que atinge a região alveolar, a responsável pela silicose.' },
    { t: 'A silicose só ocorre após três décadas de exposição, o que descarta risco em trabalhadores jovens.', ok: false,
      why: 'Errada. Exposições intensas produzem formas aceleradas e mesmo agudas, com latência de poucos anos, e o corte a seco é cenário clássico dessas formas.' },
    { t: 'A umidificação do processo é contraindicada por aumentar o risco de acidentes elétricos, devendo-se preferir o uso de máscaras.', ok: false,
      why: 'Errada. A via úmida é medida consagrada e a segurança elétrica se resolve com equipamento adequado, não abandonando o controle na fonte.' },
    { t: 'A silicose regride após o afastamento da exposição, o que permite retorno à mesma função depois do tratamento.', ok: false,
      why: 'Errada. A silicose é irreversível e pode progredir mesmo após cessada a exposição.' }
  ],
  comentario: 'Sílica cristalina: fração respirável é a que importa, corte a seco é o multiplicador de exposição, formas aceleradas e agudas existem em exposições intensas, a doença é irreversível e há reconhecimento de carcinogenicidade. Controle na fonte — via úmida e exaustão — antes de qualquer máscara.',
  pegadinha: 'A ideia de que "silicose exige décadas" já matou muito trabalhador jovem de marmoraria e de jateamento.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'IARC Monographs', 'LINACH'] },

/* ============== 2.6 Limites de Exposição Ocupacional ==================== */
{ id: 'q-2.6-020', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um laudo apresenta, para o mesmo agente químico, três parâmetros distintos de referência. Sobre os tipos de valores-limite, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A média ponderada pelo tempo refere-se à jornada habitual; o valor de curta duração aplica-se a períodos breves de exposição intensa; e o valor teto não pode ser ultrapassado em nenhum instante da jornada.', ok: true,
      why: 'Correta. São três recortes temporais distintos e complementares: a jornada inteira, o pico de curta duração e o limite instantâneo absoluto.' },
    { t: 'Os três parâmetros são intercambiáveis, bastando adotar o mais conveniente ao caso.', ok: false,
      why: 'Errada. Cada um responde a uma pergunta diferente e existe conforme o tipo de efeito tóxico do agente.' },
    { t: 'O valor teto admite ultrapassagens desde que compensadas por períodos de menor exposição.', ok: false,
      why: 'Errada. A lógica de compensação vale para a média ponderada; o valor teto é justamente o que NÃO admite ultrapassagem.' },
    { t: 'A média ponderada aplica-se a agentes de efeito agudo imediato, e o valor teto a agentes de efeito crônico.', ok: false,
      why: 'Errada, é a inversão: efeito agudo e irritante grave pede valor teto ou de curta duração; efeito crônico cumulativo é bem representado pela média da jornada.' },
    { t: 'Agentes com valor teto dispensam avaliação da exposição média da jornada.', ok: false,
      why: 'Errada. Pode haver necessidade de avaliar ambos, conforme o perfil toxicológico do agente.' }
  ],
  comentario: 'Três perguntas diferentes: quanto o trabalhador absorve na jornada inteira (média ponderada), o quanto ele pode receber num pico curto (curta duração) e qual concentração jamais pode ser atingida (teto). Efeito crônico cumulativo pede média; efeito agudo e irritante pede teto.',
  pegadinha: 'A alternativa que admite compensar ultrapassagens do valor teto transporta para ele a lógica da média ponderada — e é o erro central do tema.',
  refs: ['ACGIH — TLVs e BEIs'] },

{ id: 'q-2.6-021', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma refinaria adota jornadas de doze horas em regime de turnos. O higienista alerta que os valores-limite precisam ser ajustados. A justificativa CORRETA é:',
  alts: [
    { t: 'Os valores-limite são estabelecidos para jornadas habituais, e jornadas prolongadas aumentam o tempo de absorção e reduzem o tempo de eliminação entre exposições, o que exige aplicação de fator de redução.', ok: true,
      why: 'Correta. O raciocínio é toxicocinético: mais horas expondo e menos horas eliminando alteram a carga corporal acumulada, e por isso o limite precisa ser ajustado para baixo.' },
    { t: 'O ajuste é desnecessário, pois o limite já contempla qualquer jornada praticada.', ok: false,
      why: 'Errada. Os valores partem de um regime de referência; fora dele, a premissa de recuperação entre jornadas deixa de valer.' },
    { t: 'Jornadas prolongadas exigem elevação do limite, pois o trabalhador se adapta à exposição contínua.', ok: false,
      why: 'Errada, e é inversão perigosa: não há adaptação protetora, e o ajuste é sempre no sentido de reduzir o valor admitido.' },
    { t: 'O ajuste se aplica somente a agentes de efeito agudo.', ok: false,
      why: 'Errada. A necessidade de ajuste é mais relevante justamente para agentes de efeito cumulativo, cuja eliminação é lenta.' },
    { t: 'Basta reduzir proporcionalmente o número de dias trabalhados na semana, sem alterar o limite.', ok: false,
      why: 'Errada. A distribuição semanal é um dos elementos, mas não substitui o ajuste do valor de referência para a jornada praticada.' }
  ],
  comentario: 'Valores-limite pressupõem um regime de jornada e de recuperação. Jornada estendida = mais absorção e menos eliminação = ajuste para baixo. Vale sobretudo para agentes de meia-vida longa e efeito cumulativo. Nunca se ajusta um limite para cima por "adaptação".',
  pegadinha: 'A ideia de adaptação à exposição contínua aparece em vários temas e é sempre falsa em toxicologia ocupacional.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.6-022', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um agente químico presente no processo produtivo possui, em sua documentação de referência, notação indicativa de absorção pela pele. Sobre as consequências práticas dessa notação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A avaliação da concentração no ar pode subestimar a exposição real, o que aumenta a importância do monitoramento biológico e das medidas de proteção da pele.', ok: true,
      why: 'Correta. A notação sinaliza que a via cutânea contribui de forma significativa para a dose absorvida — algo que a amostragem de ar simplesmente não enxerga.' },
    { t: 'A notação indica que o agente causa dermatite de contato, sem relação com a dose sistêmica.', ok: false,
      why: 'Errada. A notação trata de ABSORÇÃO pela pele com contribuição sistêmica, e não de efeito irritante ou sensibilizante local.' },
    { t: 'A notação torna desnecessária a avaliação ambiental do agente.', ok: false,
      why: 'Errada. A via respiratória continua existindo; a notação acrescenta uma preocupação, não elimina a outra.' },
    { t: 'Com a notação de pele, o valor-limite deixa de ser aplicável.', ok: false,
      why: 'Errada. O valor-limite continua valendo para a via respiratória; a notação alerta que cumpri-lo pode não bastar.' },
    { t: 'Luvas de qualquer material resolvem a questão, desde que usadas continuamente.', ok: false,
      why: 'Errada. A seleção do material da luva depende do agente: material inadequado permite permeação e pode ampliar o contato.' }
  ],
  comentario: 'A notação de pele muda a estratégia: o ar deixa de contar a história inteira, o monitoramento biológico ganha peso e a seleção do material da luva passa a ser decisão técnica, não escolha de almoxarifado. Ela não substitui o valor-limite nem a avaliação ambiental.',
  pegadinha: 'Confundir a notação de absorção cutânea com potencial de causar dermatite é o erro mais frequente do tema.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

/* ==================== 2.9 Toxicologia Ocupacional ======================= */
{ id: 'q-2.9-020', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao interpretar a toxicidade de um solvente orgânico, o médico do trabalho considera as etapas da toxicocinética. Sobre biotransformação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A biotransformação nem sempre reduz a toxicidade: há substâncias cujo metabólito é mais tóxico que a molécula original, fenômeno conhecido como bioativação.', ok: true,
      why: 'Correta. A premissa de que metabolizar equivale a destoxificar é falsa; diversos agentes ocupacionais devem sua toxicidade justamente ao metabólito formado.' },
    { t: 'Toda biotransformação converte a substância em metabólito menos tóxico e mais facilmente excretado.', ok: false,
      why: 'Errada. Essa é a regra geral, mas as exceções — a bioativação — são exatamente o que a toxicologia ocupacional precisa reconhecer.' },
    { t: 'A biotransformação ocorre exclusivamente no fígado.', ok: false,
      why: 'Errada. Pulmão, rim, pele e mucosa intestinal também apresentam capacidade de biotransformação, ainda que em menor grau.' },
    { t: 'Substâncias lipossolúveis são excretadas diretamente, sem necessidade de biotransformação.', ok: false,
      why: 'Errada, e é o inverso: justamente por serem lipossolúveis precisam ser convertidas em formas mais hidrossolúveis para serem eliminadas.' },
    { t: 'A variabilidade individual na biotransformação é irrelevante para a interpretação do monitoramento biológico.', ok: false,
      why: 'Errada. Polimorfismos enzimáticos, uso de medicamentos e álcool alteram a biotransformação e explicam boa parte das discrepâncias entre trabalhadores.' }
  ],
  comentario: 'Biotransformação em geral destoxifica e torna mais hidrossolúvel para excretar — mas nem sempre: a bioativação gera metabólitos mais tóxicos. Ocorre principalmente no fígado, não exclusivamente. E a variabilidade individual é a explicação mais comum para resultados discrepantes no monitoramento biológico.',
  pegadinha: 'A alternativa "toda biotransformação reduz a toxicidade" é a generalização confortável que o tema existe para desmontar.',
  refs: ['Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.9-021', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de acumuladores apresenta indicador biológico de exposição elevado, sem sintomas. O gestor pergunta se ele deve ser afastado. A conduta CORRETA é:',
  alts: [
    { t: 'Investigar a exposição e as medidas de controle, reavaliar o trabalhador e considerar o afastamento da exposição conforme o resultado e o protocolo aplicável — o indicador alterado sinaliza absorção excessiva e exige ação, ainda que não haja sintoma.', ok: true,
      why: 'Correta. O monitoramento biológico existe para detectar absorção antes do dano clínico; resultado alterado é gatilho de investigação e de intervenção sobre a exposição, e não achado a ser observado.' },
    { t: 'Como não há sintomas, nenhuma medida é necessária além da repetição do exame no próximo periódico.', ok: false,
      why: 'Errada. Esperar o sintoma é perder a única vantagem do monitoramento biológico, que é a detecção precoce.' },
    { t: 'O trabalhador deve ser desligado da empresa, por apresentar suscetibilidade individual ao agente.', ok: false,
      why: 'Errada, e é discriminatória: a alteração indica exposição excessiva, e a resposta é controlar a exposição, não eliminar o exposto.' },
    { t: 'Deve-se prescrever quelante de imediato a todos os trabalhadores do setor, como medida preventiva.', ok: false,
      why: 'Errada. Terapia quelante tem indicação clínica precisa e não é medida preventiva coletiva; usá-la para permitir a continuidade da exposição é inaceitável.' },
    { t: 'O resultado alterado confirma o diagnóstico de intoxicação e caracteriza incapacidade laborativa.', ok: false,
      why: 'Errada. Indicador de exposição não é diagnóstico de doença nem, por si, caracteriza incapacidade.' }
  ],
  comentario: 'Indicador biológico alterado significa ABSORÇÃO EXCESSIVA, não doença e não incapacidade. Dispara três coisas: investigar a exposição, reavaliar o trabalhador e afastar da exposição conforme o protocolo. Quelação nunca é medida para viabilizar a continuidade da exposição.',
  pegadinha: 'Os dois extremos aparecem juntos: não fazer nada por ausência de sintoma e desligar o trabalhador por "suscetibilidade". Ambos deslocam o problema para longe da exposição.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-7'] },

{ id: 'q-2.9-022', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a relação dose-resposta em toxicologia ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Para efeitos com limiar, existe uma dose abaixo da qual o efeito não é observado; para carcinogênicos genotóxicos, admite-se que não há limiar demonstrável, o que muda a lógica do controle.', ok: true,
      why: 'Correta. É a distinção que estrutura toda a regulação: com limiar, o objetivo é ficar abaixo dele; sem limiar, o objetivo é reduzir a exposição ao menor nível tecnicamente possível.' },
    { t: 'Todo agente tóxico possui uma dose segura abaixo da qual não há efeito.', ok: false,
      why: 'Errada. É justamente o que não se admite para carcinogênicos genotóxicos.' },
    { t: 'A relação dose-resposta é sempre linear.', ok: false,
      why: 'Errada. Há relações sigmoides, com limiar, e mesmo não monotônicas para alguns desreguladores endócrinos.' },
    { t: 'A suscetibilidade individual não influencia a resposta a uma mesma dose.', ok: false,
      why: 'Errada. Idade, sexo, condição de saúde, uso de medicamentos e polimorfismos genéticos alteram a resposta a uma mesma dose.' },
    { t: 'A duração da exposição é irrelevante quando a concentração está abaixo do limite.', ok: false,
      why: 'Errada. Para agentes cumulativos a dose é função de concentração E tempo; a duração é parte da dose.' }
  ],
  comentario: 'A pergunta que organiza o tema: o efeito tem limiar? Se sim, controla-se abaixo dele. Se não — caso dos carcinogênicos genotóxicos —, não existe "nível seguro" e o objetivo passa a ser a menor exposição tecnicamente possível. E dose é concentração multiplicada por tempo.',
  pegadinha: 'A ideia de que "existe sempre uma dose segura" é a de Paracelso mal aplicada — ela não vale para carcinogênicos sem limiar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs'] },

{ id: 'q-2.9-023', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o momento de coleta no monitoramento biológico, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O momento adequado é definido pela cinética do agente e do indicador escolhido, podendo ser antes da jornada, ao fim da jornada ou ao fim da semana de trabalho.', ok: true,
      why: 'Correta. Indicadores de meia-vida curta exigem coleta ao fim da jornada; os de eliminação lenta e acúmulo semanal pedem coleta ao fim da semana; alguns exigem condição basal, antes da jornada.' },
    { t: 'A coleta deve ser sempre feita em jejum, pela manhã, antes do início do trabalho.', ok: false,
      why: 'Errada. Essa rotina se aplica a exames laboratoriais clínicos gerais e desconsidera a cinética do agente monitorado.' },
    { t: 'O momento da coleta é indiferente, pois o resultado reflete a carga corporal acumulada.', ok: false,
      why: 'Errada. Só alguns indicadores refletem carga acumulada; para a maioria, o momento é determinante do valor obtido.' },
    { t: 'A coleta deve ser realizada apenas após o aparecimento de sintomas.', ok: false,
      why: 'Errada. O monitoramento é preventivo e periódico; aguardar sintomas anula sua finalidade.' },
    { t: 'A coleta ao fim da semana é sempre a mais adequada, por representar a exposição acumulada.', ok: false,
      why: 'Errada. É a escolha certa apenas para indicadores com esse comportamento cinético; para outros, produz resultado falsamente baixo.' }
  ],
  comentario: 'Não existe momento universal de coleta: ele decorre da meia-vida do agente e do comportamento do indicador. Coletar na hora errada produz resultado que parece normal e não é — e essa é a falha mais comum na prática do monitoramento biológico.',
  pegadinha: 'A rotina de "jejum pela manhã" vem da prática laboratorial geral e é justamente o que compromete o monitoramento de agentes de meia-vida curta.',
  refs: ['ACGIH — BEIs', 'Buschinelli — Toxicologia Ocupacional'] }

);
