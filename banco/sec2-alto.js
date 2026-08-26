/* Seção 2 — aprofundamento dos temas de ALTO rendimento (2.2, 2.3, 2.6, 2.9)
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 2.2 Agentes Físicos =============================== */
{ id: 'q-2.2-020', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Operador de martelete pneumático, 44 anos, há doze anos na função, relata episódios de palidez súbita das pontas dos dedos das duas mãos desencadeados pelo frio, seguidos de cianose e depois rubor com formigamento, além de redução da sensibilidade tátil fina. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere síndrome de vibração mão-braço, com Raynaud ocupacional no seu componente vascular', ok: true,
      why: 'Correta. O nexo se estabelece pela exposição a vibração localizada.' },
    { t: 'Sugere fenômeno de Raynaud primário, sem relação com o trabalho, por acometer as duas mãos.', ok: false,
      why: 'Errada. A forma ocupacional também é bilateral, conforme a ferramenta usada.' },
    { t: 'Sugere quadro por vibração de corpo inteiro, típica de quem opera ferramentas manuais portáteis.', ok: false,
      why: 'Errada. Ferramenta manual transmite vibração de mãos e braços.' },
    { t: 'Sugere vibração mão-braço, afastando o diagnóstico a radiografia de mãos sem alterações.', ok: false,
      why: 'Errada. O diagnóstico é clínico e de exposição, não radiológico.' },
    { t: 'Sugere vibração mão-braço, cabendo manter a exposição e prescrever vasodilatador ao trabalhador.', ok: false,
      why: 'Errada. Sem afastar a vibração, o quadro progride.' }
  ],
  comentario: 'Vibração de mãos e braços produz uma síndrome com três componentes: vascular (Raynaud ocupacional, os "dedos brancos"), neurológico (parestesia, perda de sensibilidade e de destreza) e musculoesquelético. Vibração de corpo inteiro é outra história — veículos, plataformas, lombalgia.',
  pegadinha: 'A banca troca vibração localizada por corpo inteiro, e usa a bilateralidade para sugerir causa não ocupacional. As duas mãos operam a ferramenta: bilateral é o esperado.',
  refs: ['NHO 10 — Fundacentro', 'Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-021', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma marcenaria, o setor de lixamento apresenta ruído contínuo e o setor de prensagem apresenta impactos repetidos. O higienista precisa definir a estratégia de avaliação. Sobre ruído ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Ruído contínuo e de impacto têm critérios distintos: identificar o tipo precede a medição', ok: true,
      why: 'Correta. O parâmetro e o instrumento dependem do tipo de ruído.' },
    { t: 'Todo ruído se avalia pelo nível de pressão sonora instantâneo no momento de maior intensidade.', ok: false,
      why: 'Errada. O contínuo se avalia pelo nível equivalente da jornada.' },
    { t: 'Os critérios diferem, sendo irrelevante o nível de ação, pois só o limite desencadeia medidas.', ok: false,
      why: 'Errada. O nível de ação antecipa monitoramento e controle.' },
    { t: 'Os critérios diferem, devendo a dosimetria ser feita em posto fixo, sem acompanhar o trabalhador.', ok: false,
      why: 'Errada. A dosimetria é pessoal e acompanha as tarefas da jornada.' },
    { t: 'Os critérios diferem, dispensando o uso de protetor a avaliação da exposição ambiental ao ruído.', ok: false,
      why: 'Errada. Sem conhecer o nível não se seleciona nem se verifica a proteção.' }
  ],
  comentario: 'Antes de medir, classifique: contínuo/intermitente (dose e nível equivalente, dosimetria pessoal) ou de impacto (nível de pico). E guarde o conceito de nível de ação: patamar abaixo do limite em que já se disparam medidas preventivas, incluindo monitoramento audiométrico.',
  pegadinha: 'Dizer que o protetor dispensa a avaliação inverte a ordem: é a avaliação que permite escolher o protetor.',
  refs: ['NHO 01 — Fundacentro', 'NR-9', 'NR-15'] },

{ id: 'q-2.2-022', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Soldador relata episódios recorrentes de dor ocular intensa, sensação de areia nos olhos, lacrimejamento e fotofobia, iniciados algumas horas após a jornada e com resolução em um a dois dias. Sobre o quadro, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É ceratoconjuntivite por radiação ultravioleta, de início tardio em relação à exposição sofrida', ok: true,
      why: 'Correta. Exige filtro adequado e barreiras que protejam também quem passa perto.' },
    { t: 'É quadro por radiação ionizante emitida pelo arco elétrico durante o processo de soldagem.', ok: false,
      why: 'Errada. O arco emite radiação não ionizante, sobretudo ultravioleta.' },
    { t: 'É ceratoconjuntivite actínica, afastada pela ausência de sintomas durante a própria jornada.', ok: false,
      why: 'Errada. O início tardio, horas depois, é característico.' },
    { t: 'É ceratoconjuntivite, gerando a exposição repetida tolerância que dispensa a proteção depois.', ok: false,
      why: 'Errada. Não há tolerância; o dano é cumulativo.' },
    { t: 'É ceratoconjuntivite, oferecendo óculos escuros comuns proteção equivalente à do filtro de solda.', ok: false,
      why: 'Errada. Escurecem a visão sem filtrar a radiação ultravioleta.' }
  ],
  comentario: 'Solda é fonte de radiação não ionizante. A ceratoconjuntivite actínica aparece horas depois — o "olho de solda" — e a proteção precisa cobrir também quem passa perto, daí as cortinas e biombos. Óculos escuro comum não protege e pode agravar.',
  pegadinha: 'A alternativa que classifica a radiação do arco como ionizante é a inversão central do tema.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-023', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Mergulhador profissional apresenta, cerca de uma hora após ascensão, dor articular intensa em ombros e joelhos, sem trauma. Sobre exposição a pressões anormais, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Sugere doença descompressiva por bolhas de gás inerte, tratada com câmara hiperbárica.', ok: true,
      why: 'Correta. A recompressão é o tratamento definitivo do quadro.' },
    { t: 'Sugere osteonecrose disbárica, complicação aguda que aparece nas horas seguintes ao mergulho.', ok: false,
      why: 'Errada. A osteonecrose é complicação crônica e tardia.' },
    { t: 'Sugere doença descompressiva, de tratamento apenas analgésico por ser quadro autolimitado.', ok: false,
      why: 'Errada. Exige recompressão; a demora agrava as sequelas.' },
    { t: 'Sugere intoxicação por oxigênio, cuja manifestação típica é a dor articular após o mergulho.', ok: false,
      why: 'Errada. A toxicidade do oxigênio se manifesta por convulsão e sintomas pulmonares.' },
    { t: 'Sugere doença descompressiva, dependendo a prevenção da experiência, e não de tabelas.', ok: false,
      why: 'Errada. As tabelas de descompressão são a base da prevenção.' }
  ],
  comentario: 'Duas entidades que a banca troca: doença descompressiva é AGUDA, por bolhas de gás após ascensão, e trata com recompressão; osteonecrose disbárica é CRÔNICA, sequela óssea de exposições repetidas. Prevenção é procedimento e tabela, não perícia pessoal.',
  pegadinha: 'A troca entre a complicação aguda e a crônica é o eixo da questão — repare sempre no tempo de instalação descrito no enunciado.',
  refs: ['Mendes, R. — Patologia do Trabalho', 'NR-15'] },

{ id: 'q-2.2-024', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre exposição ocupacional ao frio, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A ingestão de bebida alcoólica é útil ao trabalhador no frio, por promover sensação de aquecimento', ok: true,
      why: 'É a INCORRETA. O álcool causa vasodilatação periférica e acelera a perda de calor.' },
    { t: 'A velocidade do ar aumenta a perda de calor e deve ser considerada na avaliação da exposição.', ok: false,
      why: 'Correta, portanto não é a resposta. O vento agrava a perda além do que a temperatura indica.' },
    { t: 'Vestimenta em camadas permite ajuste conforme a atividade e reduz o acúmulo de umidade na pele.', ok: false,
      why: 'Correta, portanto não é a resposta. É a recomendação padrão para trabalho no frio.' },
    { t: 'As extremidades são as regiões mais vulneráveis, com risco de lesão local por congelamento.', ok: false,
      why: 'Correta, portanto não é a resposta. A vasoconstrição periférica as expõe primeiro.' },
    { t: 'Pausas em ambiente aquecido integram as medidas de organização do trabalho em exposição ao frio.', ok: false,
      why: 'Correta, portanto não é a resposta. É medida organizacional prevista.' }
  ],
  comentario: 'Frio: o vento multiplica a perda de calor, a umidade junto à pele agrava, as extremidades são o alvo e a organização do trabalho com pausas aquecidas é medida essencial. Álcool é fator de risco — vasodilata, engana e aumenta a perda de calor central.',
  pegadinha: 'É questão de "assinale a INCORRETA" e a falsa se apoia numa crença popular bastante difundida sobre álcool e frio.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

/* ==================== 2.3 Agentes Químicos ============================== */
{ id: 'q-2.3-020', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao descrever os aerodispersoides presentes em uma indústria, o higienista precisa classificá-los corretamente. A associação CORRETA entre o material particulado e seu processo de geração é:',
  alts: [
    { t: 'Fumo metálico: partícula sólida da condensação de vapores de metal, como ocorre na soldagem', ok: true,
      why: 'Correta. É a definição do aerodispersoide gerado por condensação de vapor de metal.' },
    { t: 'Poeira: partícula sólida formada pela condensação de vapores em processos de aquecimento intenso.', ok: false,
      why: 'Errada. Poeira se forma por ruptura mecânica de sólidos.' },
    { t: 'Névoa: partícula sólida gerada por combustão incompleta de materiais orgânicos no ambiente.', ok: false,
      why: 'Errada. Névoa é partícula líquida em suspensão.' },
    { t: 'Vapor: estado particulado de substância que é sólida à temperatura ambiente de trabalho.', ok: false,
      why: 'Errada. Vapor é a fase gasosa de substância líquida em condições normais.' },
    { t: 'Fumaça: partícula líquida gerada pela ruptura mecânica de líquidos durante o processo produtivo.', ok: false,
      why: 'Errada. Fumaça é partícula sólida de combustão incompleta.' }
  ],
  comentario: 'Classifique pelo mecanismo de geração: poeira = ruptura mecânica de sólido; fumo = condensação de vapor metálico; névoa = ruptura mecânica de líquido; neblina = condensação de vapor de líquido; fumaça = combustão incompleta. Vapor e gás não são particulados.',
  pegadinha: 'A prova embaralha os pares. O atalho é fixar o VERBO: ruptura mecânica versus condensação versus combustão.',
  refs: ['ABHO', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.3-021', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa que utiliza benzeno como matéria-prima pergunta ao médico do trabalho qual limite de exposição adotar como meta de controle. A orientação CORRETA é:',
  alts: [
    { t: 'Para o benzeno não se admite nível seguro: o valor de referência tem apenas caráter tecnológico', ok: true,
      why: 'Correta. A meta é a busca permanente da menor exposição possível.' },
    { t: 'Basta manter a concentração logo abaixo do valor de referência, que é o nível seguro para a vida laboral.', ok: false,
      why: 'Errada. Não se assume nível seguro para o benzeno.' },
    { t: 'O controle da exposição ao benzeno se faz exclusivamente por equipamento de proteção respiratória.', ok: false,
      why: 'Errada. Substituição e engenharia vêm antes na hierarquia.' },
    { t: 'Não há nível seguro, e o monitoramento biológico do benzeno substitui a avaliação ambiental.', ok: false,
      why: 'Errada. São complementares e ambos necessários.' },
    { t: 'Não há nível seguro, mas os expostos não necessitam de acompanhamento hematológico periódico.', ok: false,
      why: 'Errada. O hemograma periódico é central na vigilância.' }
  ],
  comentario: 'Benzeno é o caso emblemático do carcinogênico sem limiar: o valor de referência é tecnológico, não de segurança, e a meta é reduzir sempre. Some a isso a substituição como primeira medida, o acompanhamento hematológico dos expostos e a complementaridade entre avaliação ambiental e biológica.',
  pegadinha: 'A alternativa que trata o valor de referência como "nível seguro" é a tese que a norma do benzeno existe para derrubar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs', 'LINACH'] },

{ id: 'q-2.3-022', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador rural é levado ao serviço médico com miose, sialorreia intensa, broncorreia, sudorese, cólicas abdominais, bradicardia e fasciculações musculares, cerca de duas horas após aplicação de defensivo agrícola. A hipótese e a conduta CORRETAS são:',
  alts: [
    { t: 'É síndrome colinérgica por inibidor de colinesterase: descontaminar, ventilar e atropinizar.', ok: true,
      why: 'Correta. A atropina é titulada pela resposta das secreções.' },
    { t: 'É intoxicação por piretroide, cuja manifestação típica é a síndrome colinérgica aqui descrita.', ok: false,
      why: 'Errada. Piretroides causam parestesias e irritação, não síndrome colinérgica.' },
    { t: 'É intoxicação por paraquat, com quadro colinérgico agudo e boa resposta à atropina intravenosa.', ok: false,
      why: 'Errada. O paraquat causa lesão cáustica e fibrose pulmonar.' },
    { t: 'É intoxicação por glifosato, tratada com pralidoxima para reativar a enzima inibida.', ok: false,
      why: 'Errada. O glifosato não inibe colinesterase.' },
    { t: 'É quadro autolimitado, bastando observação clínica sem intervenção medicamentosa específica.', ok: false,
      why: 'Errada. É emergência com risco de morte por insuficiência respiratória.' }
  ],
  comentario: 'Síndrome colinérgica — miose, sialorreia, broncorreia, bradicardia, cólicas, fasciculações — aponta para inibidores da colinesterase. Conduta: descontaminar, proteger via aérea, atropina titulada pelas secreções, e reativador de colinesterase conforme o agente. Não confunda com piretroide (parestesia) nem com paraquat (lesão pulmonar tardia).',
  pegadinha: 'Todos os distratores citam agrotóxicos reais e antídotos reais — só que descasados do quadro clínico.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-2.3-023', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma marmoraria processa rochas ornamentais com corte a seco. Sobre a exposição à sílica cristalina, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A sílica é cancerígena e o corte a seco eleva muito a geração de poeira respirável no ambiente', ok: true,
      why: 'Correta. Supressão com água ou exaustão localizada são medidas prioritárias.' },
    { t: 'O risco existe para a fração inalável total, sem relevância específica da fração respirável.', ok: false,
      why: 'Errada. É a fração respirável que atinge os alvéolos.' },
    { t: 'A sílica é cancerígena, mas a silicose só ocorre após três décadas, o que exclui risco em jovens.', ok: false,
      why: 'Errada. Há formas acelerada e aguda em exposições intensas.' },
    { t: 'A umidificação é contraindicada por risco elétrico, devendo-se preferir o uso de máscaras.', ok: false,
      why: 'Errada. A supressão úmida é medida prioritária, com adequação elétrica.' },
    { t: 'A sílica é cancerígena, e a silicose regride após o afastamento, permitindo o retorno à função.', ok: false,
      why: 'Errada. A fibrose instalada é irreversível e pode progredir.' }
  ],
  comentario: 'Sílica cristalina: fração respirável é a que importa, corte a seco é o multiplicador de exposição, formas aceleradas e agudas existem em exposições intensas, a doença é irreversível e há reconhecimento de carcinogenicidade. Controle na fonte — via úmida e exaustão — antes de qualquer máscara.',
  pegadinha: 'A ideia de que "silicose exige décadas" já matou muito trabalhador jovem de marmoraria e de jateamento.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'IARC Monographs', 'LINACH'] },

/* ============== 2.6 Limites de Exposição Ocupacional ==================== */
{ id: 'q-2.6-020', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um laudo apresenta, para o mesmo agente químico, três parâmetros distintos de referência. Sobre os tipos de valores-limite, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A média é da jornada; o de curta duração vale para picos breves; o teto nunca se ultrapassa.', ok: true,
      why: 'Correta. São três parâmetros com funções distintas e complementares.' },
    { t: 'Os três parâmetros são intercambiáveis, bastando adotar o mais conveniente ao caso avaliado.', ok: false,
      why: 'Errada. Cada um responde a um padrão distinto de exposição.' },
    { t: 'A média é da jornada, e o valor teto admite ultrapassagens compensadas por períodos menores.', ok: false,
      why: 'Errada. O teto não pode ser ultrapassado em nenhum instante.' },
    { t: 'A média aplica-se a agentes de efeito agudo imediato, e o teto a agentes de efeito crônico.', ok: false,
      why: 'Errada, é o inverso: o teto existe para efeito agudo dependente de pico.' },
    { t: 'A média é da jornada, dispensando os agentes com valor teto a avaliação da exposição média.', ok: false,
      why: 'Errada. As duas avaliações são necessárias.' }
  ],
  comentario: 'Três perguntas diferentes: quanto o trabalhador absorve na jornada inteira (média ponderada), o quanto ele pode receber num pico curto (curta duração) e qual concentração jamais pode ser atingida (teto). Efeito crônico cumulativo pede média; efeito agudo e irritante pede teto.',
  pegadinha: 'A alternativa que admite compensar ultrapassagens do valor teto transporta para ele a lógica da média ponderada — e é o erro central do tema.',
  refs: ['ACGIH — TLVs e BEIs'] },

{ id: 'q-2.6-021', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma refinaria adota jornadas de doze horas em regime de turnos. O higienista alerta que os valores-limite precisam ser ajustados. A justificativa CORRETA é:',
  alts: [
    { t: 'Os limites pressupõem a jornada habitual, e a jornada prolongada exige fator de redução', ok: true,
      why: 'Correta. Aumenta o tempo de absorção e reduz o de eliminação entre jornadas.' },
    { t: 'O ajuste é desnecessário, pois o limite já contempla qualquer jornada praticada pela empresa.', ok: false,
      why: 'Errada. Os valores pressupõem regime de jornada e recuperação específicos.' },
    { t: 'Jornadas prolongadas exigem elevar o limite, pois o trabalhador se adapta à exposição contínua.', ok: false,
      why: 'Errada. O ajuste é para baixo; não há adaptação que reduza a dose.' },
    { t: 'O ajuste é necessário, aplicando-se somente aos agentes de efeito agudo e rápida eliminação.', ok: false,
      why: 'Errada. É mais relevante nos de efeito cumulativo e eliminação lenta.' },
    { t: 'Basta reduzir proporcionalmente o número de dias trabalhados na semana, sem alterar o limite.', ok: false,
      why: 'Errada. A dose diária e a recuperação entre jornadas é que importam.' }
  ],
  comentario: 'Valores-limite pressupõem um regime de jornada e de recuperação. Jornada estendida = mais absorção e menos eliminação = ajuste para baixo. Vale sobretudo para agentes de meia-vida longa e efeito cumulativo. Nunca se ajusta um limite para cima por "adaptação".',
  pegadinha: 'A ideia de adaptação à exposição contínua aparece em vários temas e é sempre falsa em toxicologia ocupacional.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.6-022', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um agente químico presente no processo produtivo possui, em sua documentação de referência, notação indicativa de absorção pela pele. Sobre as consequências práticas dessa notação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A avaliação do ar pode subestimar a exposição real, valorizando o monitoramento biológico.', ok: true,
      why: 'Correta. E as medidas de proteção da pele ganham importância.' },
    { t: 'A notação indica que o agente causa dermatite de contato, sem relação com a dose sistêmica.', ok: false,
      why: 'Errada. Indica contribuição cutânea para a absorção sistêmica.' },
    { t: 'A notação sinaliza absorção pela pele e torna desnecessária a avaliação ambiental do agente.', ok: false,
      why: 'Errada. A avaliação ambiental continua indicando onde intervir.' },
    { t: 'A notação sinaliza absorção pela pele, deixando o valor-limite de ser aplicável ao agente.', ok: false,
      why: 'Errada. O limite permanece, com a ressalva da via cutânea.' },
    { t: 'A notação sinaliza absorção pela pele, resolvida por luvas de qualquer material usadas sempre.', ok: false,
      why: 'Errada. O material deve ser compatível com o agente, sob pena de permeação.' }
  ],
  comentario: 'A notação de pele muda a estratégia: o ar deixa de contar a história inteira, o monitoramento biológico ganha peso e a seleção do material da luva passa a ser decisão técnica, não escolha de almoxarifado. Ela não substitui o valor-limite nem a avaliação ambiental.',
  pegadinha: 'Confundir a notação de absorção cutânea com potencial de causar dermatite é o erro mais frequente do tema.',
  refs: ['ACGIH — TLVs e BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

/* ==================== 2.9 Toxicologia Ocupacional ======================= */
{ id: 'q-2.9-020', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao interpretar a toxicidade de um solvente orgânico, o médico do trabalho considera as etapas da toxicocinética. Sobre biotransformação, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A biotransformação nem sempre reduz a toxicidade: há metabólitos mais tóxicos que a original.', ok: true,
      why: 'Correta. O fenômeno é conhecido como bioativação.' },
    { t: 'Toda biotransformação converte a substância em metabólito menos tóxico e mais facilmente excretado.', ok: false,
      why: 'Errada. Há bioativação, com metabólitos mais tóxicos.' },
    { t: 'A biotransformação pode gerar metabólitos tóxicos e ocorre exclusivamente no tecido hepático.', ok: false,
      why: 'Errada. Ocorre também em pulmão, rim, pele e intestino.' },
    { t: 'As substâncias lipossolúveis são excretadas diretamente, sem necessidade de biotransformação.', ok: false,
      why: 'Errada. Precisam ser convertidas em formas hidrossolúveis.' },
    { t: 'A biotransformação varia entre pessoas, variação irrelevante para interpretar o monitoramento.', ok: false,
      why: 'Errada. Explica boa parte das diferenças entre trabalhadores.' }
  ],
  comentario: 'Biotransformação em geral destoxifica e torna mais hidrossolúvel para excretar — mas nem sempre: a bioativação gera metabólitos mais tóxicos. Ocorre principalmente no fígado, não exclusivamente. E a variabilidade individual é a explicação mais comum para resultados discrepantes no monitoramento biológico.',
  pegadinha: 'A alternativa "toda biotransformação reduz a toxicidade" é a generalização confortável que o tema existe para desmontar.',
  refs: ['Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.9-021', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de acumuladores apresenta indicador biológico de exposição elevado, sem sintomas. O gestor pergunta se ele deve ser afastado. A conduta CORRETA é:',
  alts: [
    { t: 'Investigar a exposição e os controles, reavaliar e considerar o afastamento conforme o protocolo', ok: true,
      why: 'Correta. O indicador alterado sinaliza absorção excessiva e exige ação, sem sintoma.' },
    { t: 'Nenhuma medida é necessária além de repetir o exame no próximo periódico, por não haver sintomas.', ok: false,
      why: 'Errada. O indicador existe para agir antes do sintoma aparecer.' },
    { t: 'Desligar o trabalhador da empresa, por apresentar suscetibilidade individual ao agente do setor.', ok: false,
      why: 'Errada. A resposta é controlar a exposição, não excluir a pessoa.' },
    { t: 'Prescrever quelante de imediato a todos os trabalhadores do setor, como medida preventiva coletiva.', ok: false,
      why: 'Errada. Quelação não é medida preventiva e tem riscos próprios.' },
    { t: 'Reconhecer que o resultado confirma intoxicação e caracteriza incapacidade laborativa do exposto.', ok: false,
      why: 'Errada. Indica absorção excessiva, não diagnóstico nem incapacidade.' }
  ],
  comentario: 'Indicador biológico alterado significa ABSORÇÃO EXCESSIVA, não doença e não incapacidade. Dispara três coisas: investigar a exposição, reavaliar o trabalhador e afastar da exposição conforme o protocolo. Quelação nunca é medida para viabilizar a continuidade da exposição.',
  pegadinha: 'Os dois extremos aparecem juntos: não fazer nada por ausência de sintoma e desligar o trabalhador por "suscetibilidade". Ambos deslocam o problema para longe da exposição.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs', 'NR-7'] },

{ id: 'q-2.9-022', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a relação dose-resposta em toxicologia ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Com limiar, há dose abaixo da qual não há efeito; em genotóxicos, não se admite limiar.', ok: true,
      why: 'Correta. Isso muda toda a lógica do controle da exposição.' },
    { t: 'Todo agente tóxico possui uma dose segura abaixo da qual nenhum efeito é observado no exposto.', ok: false,
      why: 'Errada. Para carcinogênicos genotóxicos não se admite limiar.' },
    { t: 'Há efeitos com e sem limiar, sendo a relação dose-resposta sempre linear em ambos os casos.', ok: false,
      why: 'Errada. Há curvas sigmoides, com limiar e com saturação.' },
    { t: 'Há efeitos com e sem limiar, sem que a suscetibilidade individual influencie a resposta à dose.', ok: false,
      why: 'Errada. A variabilidade individual é ampla e reconhecida.' },
    { t: 'Há efeitos com e sem limiar, sendo a duração irrelevante quando a concentração está sob o limite.', ok: false,
      why: 'Errada. A dose acumulada depende de concentração e de tempo.' }
  ],
  comentario: 'A pergunta que organiza o tema: o efeito tem limiar? Se sim, controla-se abaixo dele. Se não — caso dos carcinogênicos genotóxicos —, não existe "nível seguro" e o objetivo passa a ser a menor exposição tecnicamente possível. E dose é concentração multiplicada por tempo.',
  pegadinha: 'A ideia de que "existe sempre uma dose segura" é a de Paracelso mal aplicada — ela não vale para carcinogênicos sem limiar.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs'] },

{ id: 'q-2.9-023', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o momento de coleta no monitoramento biológico, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É definido pela cinética do agente e do indicador: antes, ao fim da jornada ou da semana.', ok: true,
      why: 'Correta. Coleta em momento inadequado inviabiliza a interpretação.' },
    { t: 'A coleta deve ser sempre em jejum, pela manhã, antes do início da jornada de trabalho.', ok: false,
      why: 'Errada. O momento depende da cinética do agente e do indicador.' },
    { t: 'O momento é indiferente, pois o resultado reflete a carga corporal acumulada pelo trabalhador.', ok: false,
      why: 'Errada. Vários indicadores refletem apenas exposição recente.' },
    { t: 'A coleta deve ser realizada apenas depois do aparecimento dos primeiros sintomas de intoxicação.', ok: false,
      why: 'Errada. O monitoramento existe para agir antes do sintoma.' },
    { t: 'A coleta ao fim da semana é sempre a mais adequada, por representar a exposição acumulada.', ok: false,
      why: 'Errada. Só nos agentes de eliminação lenta e acúmulo semanal.' }
  ],
  comentario: 'Não existe momento universal de coleta: ele decorre da meia-vida do agente e do comportamento do indicador. Coletar na hora errada produz resultado que parece normal e não é — e essa é a falha mais comum na prática do monitoramento biológico.',
  pegadinha: 'A rotina de "jejum pela manhã" vem da prática laboratorial geral e é justamente o que compromete o monitoramento de agentes de meia-vida curta.',
  refs: ['ACGIH — BEIs', 'Buschinelli — Toxicologia Ocupacional'] }

);
