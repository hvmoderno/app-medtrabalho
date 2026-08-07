/* Aprofundamento de alto rendimento: 4.4, 4.5, 4.6, 4.8 e 2.9.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 4.4 Dermatoses ============================ */
{ id: 'q-4.4-030', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Galvanizador com dez anos de exposição a banhos de cromo apresenta úlceras arredondadas, de bordas elevadas e fundo limpo, indolores, em dorso das mãos e dedos, além de queixa de obstrução nasal e epistaxes recorrentes. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'As lesões são compatíveis com ulcerações por cromo hexavalente, que acometem pele e mucosa nasal, podendo evoluir com perfuração do septo, e a conduta exige afastamento da exposição e revisão das medidas de controle na fonte.', ok: true,
      why: 'Correta. Úlcera indolor de bordas elevadas em áreas de contato somada a sintomas nasais é o quadro clássico do cromo hexavalente, com risco de perfuração septal.' },
    { t: 'Trata-se de dermatite de contato alérgica em fase crônica, com liquenificação.', ok: false,
      why: 'Errada. A dermatite alérgica cursa com eczema e liquenificação, não com úlceras de bordas elevadas e fundo limpo.' },
    { t: 'A ausência de dor afasta origem ocupacional e sugere piodermite.', ok: false,
      why: 'Errada. A indolor é característica da úlcera pelo cromo, e piodermite cursa com sinais inflamatórios e secreção purulenta.' },
    { t: 'Os sintomas nasais são independentes das lesões cutâneas e não devem ser investigados em conjunto.', ok: false,
      why: 'Errada. Pele e mucosa nasal são alvos do mesmo agente, e a associação reforça o diagnóstico.' },
    { t: 'A conduta se resume ao curativo das lesões, com manutenção do trabalhador na função.', ok: false,
      why: 'Errada. Sem afastamento da exposição e controle na fonte, as lesões recidivam e o dano nasal progride.' }
  ],
  comentario: 'Cromo hexavalente produz um par característico: úlcera cutânea indolor de bordas elevadas nas áreas de contato e lesão de mucosa nasal com risco de perfuração septal. É também agente com reconhecimento de carcinogenicidade respiratória.',
  pegadinha: 'A ausência de dor é usada para sugerir causa banal, quando é justamente traço do quadro ocupacional.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs'] },

{ id: 'q-4.4-031', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de manutenção de veículos apresenta lesões papulopustulosas foliculares em antebraços e face anterior das coxas, áreas de contato com uniforme impregnado de óleo lubrificante. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'É compatível com elaioconiose, foliculite por óleos e graxas, cuja prevenção depende de higienização e troca frequente do uniforme, barreiras físicas e revisão do processo — e não apenas de tratamento tópico.', ok: true,
      why: 'Correta. A distribuição em áreas de contato com roupa impregnada é típica, e a prevenção passa por eliminar o contato prolongado com o óleo.' },
    { t: 'Trata-se de acne vulgar, agravada pelo calor da oficina.', ok: false,
      why: 'Errada. A distribuição em antebraços e coxas, nas áreas de contato com o uniforme, não corresponde à acne vulgar.' },
    { t: 'É cloracne, marcadora de exposição a hidrocarbonetos halogenados.', ok: false,
      why: 'Errada. A cloracne acomete região malar e retroauricular e se associa a organoclorados, não a óleos lubrificantes.' },
    { t: 'O uso continuado do mesmo uniforme não influencia o quadro, desde que haja banho ao fim da jornada.', ok: false,
      why: 'Errada. É justamente o contato prolongado com o tecido impregnado que mantém a exposição durante toda a jornada.' },
    { t: 'Óleos minerais usados não apresentam qualquer potencial carcinogênico.', ok: false,
      why: 'Errada. Óleos minerais pouco ou não tratados têm reconhecimento de carcinogenicidade cutânea.' }
  ],
  comentario: 'Elaioconiose: foliculite pelo contato com óleos, nas áreas em que a roupa impregnada toca a pele. A prevenção é de processo e de higiene — trocar e lavar o uniforme institucionalmente, evitar panos oleosos no bolso, reduzir o contato.',
  pegadinha: 'Confundir com cloracne é erro frequente: as duas são acneiformes, mas a topografia e o agente são completamente diferentes.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs'] },

{ id: 'q-4.4-032', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador rural de 58 anos, 35 anos de atividade a céu aberto, apresenta lesão perlácea com telangiectasias em dorso do nariz e múltiplas ceratoses actínicas em face e antebraços. Sobre o caso, é CORRETO afirmar:',
  alts: [
    { t: 'A radiação solar é reconhecida como carcinogênica para a pele e o trabalho a céu aberto configura exposição ocupacional, de modo que o câncer cutâneo nesse trabalhador pode ser reconhecido como relacionado ao trabalho, com providências de registro e de proteção coletiva e individual.', ok: true,
      why: 'Correta. A exposição solar ocupacional é reconhecida, e a conduta envolve tanto o tratamento quanto o reconhecimento do agravo e a proteção do restante da equipe.' },
    { t: 'Câncer de pele nunca é considerado doença relacionada ao trabalho, por depender de fototipo individual.', ok: false,
      why: 'Errada. Fototipo é fator de suscetibilidade e, quando muito, concausa — não afasta a exposição ocupacional.' },
    { t: 'As ceratoses actínicas são achado benigno sem relação com a exposição solar acumulada.', ok: false,
      why: 'Errada. São lesões diretamente relacionadas à exposição solar crônica e marcam dano cumulativo.' },
    { t: 'A proteção contra radiação solar em trabalho a céu aberto se resume ao uso de protetor solar pelo trabalhador.', ok: false,
      why: 'Errada. Organização do trabalho, sombreamento, horários e vestimenta adequada precedem o protetor solar.' },
    { t: 'A latência longa entre exposição e lesão afasta o nexo ocupacional.', ok: false,
      why: 'Errada. Latência longa é característica dos cânceres relacionados ao trabalho e não afasta o nexo.' }
  ],
  comentario: 'Trabalho a céu aberto é exposição ocupacional à radiação solar, reconhecida como carcinogênica para a pele. A prevenção segue a hierarquia: organizar horários e sombreamento antes de vestimenta e protetor solar.',
  pegadinha: 'Reduzir a proteção ao protetor solar coloca no último degrau da hierarquia a única medida adotada.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.4-033', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Auxiliar de cozinha apresenta lesões eritêmato-vesiculosas em antebraços após manipular determinados vegetais e permanecer exposta ao sol durante o transporte de caixas. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'É compatível com fotodermatose de contato, em que a lesão só ocorre pela combinação do agente com a radiação ultravioleta, o que explica a distribuição em áreas fotoexpostas e a necessidade de investigar os dois fatores.', ok: true,
      why: 'Correta. A fotodermatose exige a presença simultânea do agente fotossensibilizante e da radiação; sem um dos dois não há lesão.' },
    { t: 'Trata-se de queimadura solar simples, sem relação com os vegetais manipulados.', ok: false,
      why: 'Errada. A distribuição relacionada ao contato com o vegetal e o padrão vesiculoso apontam para interação agente-radiação.' },
    { t: 'A lesão ocorreria igualmente em ambiente fechado, sem exposição solar.', ok: false,
      why: 'Errada. É a combinação com a radiação que desencadeia o quadro.' },
    { t: 'A prevenção depende exclusivamente do uso de protetor solar.', ok: false,
      why: 'Errada. Evitar o contato com o agente e proteger com vestimenta e organização do trabalho são medidas anteriores.' },
    { t: 'Fotodermatoses não têm relevância ocupacional por serem raras.', ok: false,
      why: 'Errada. São relevantes em agricultura, cozinha, indústria química e em uso de alguns medicamentos.' }
  ],
  comentario: 'Fotodermatose de contato: lesão só nas áreas fotoexpostas E com contato com o agente. Investigue sempre os dois lados — retirar apenas a radiação ou apenas o agente já resolve, o que ajuda no diagnóstico e na conduta.',
  pegadinha: 'A alternativa que atribui tudo à queimadura solar ignora a distribuição relacionada ao contato.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

/* ============================ 4.5 ORL ocupacional ======================= */
{ id: 'q-4.5-030', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Professora de 46 anos, 20 anos de magistério em salas com acústica ruim e turmas numerosas, refere rouquidão progressiva, fadiga vocal ao fim do dia e necessidade de esforço para ser ouvida. A laringoscopia mostra nódulos vocais bilaterais. Sobre o caso, é CORRETO afirmar:',
  alts: [
    { t: 'O quadro é compatível com disfonia ocupacional, e a intervenção deve alcançar as condições de trabalho — acústica, número de alunos, amplificação, pausas e umidade do ar — além do tratamento fonoaudiológico individual.', ok: true,
      why: 'Correta. Nódulos vocais bilaterais em profissional da voz com demanda elevada e ambiente desfavorável configuram disfonia relacionada ao trabalho, e a intervenção precisa ser também ambiental e organizacional.' },
    { t: 'Nódulos vocais são sempre de origem constitucional, sem relação com demanda vocal.', ok: false,
      why: 'Errada. São classicamente relacionados a uso vocal intenso e inadequado, com forte componente ocupacional em profissionais da voz.' },
    { t: 'O tratamento se esgota na terapia fonoaudiológica individual.', ok: false,
      why: 'Errada. Sem alterar acústica, demanda e pausas, o quadro recidiva.' },
    { t: 'A disfonia ocupacional não é passível de reconhecimento como agravo relacionado ao trabalho.', ok: false,
      why: 'Errada. Distúrbios da voz relacionados ao trabalho são reconhecidos e notificáveis.' },
    { t: 'O uso de amplificação sonora em sala de aula é contraindicado por gerar dependência vocal.', ok: false,
      why: 'Errada. A amplificação reduz o esforço vocal e é medida de proteção recomendada.' }
  ],
  comentario: 'Disfonia ocupacional é doença de professor, teleatendente, operador e vendedor. A intervenção tem dois braços: cuidado individual e mudança das condições — acústica, amplificação, turma, pausas, hidratação e umidade do ar.',
  pegadinha: 'Tratar nódulo vocal como constitucional retira o nexo de uma das doenças ocupacionais mais prevalentes no magistério.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-031', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao revisar o programa de conservação auditiva de uma metalúrgica, o médico do trabalho observa que a atenuação do protetor foi calculada apenas pelo valor nominal informado pelo fabricante. Sobre a seleção de protetores auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'A atenuação real obtida em campo costuma ser menor que a nominal de laboratório, de modo que a seleção deve considerar fatores de correção, ajuste individual e treinamento — e a superproteção também é indesejável, por dificultar a comunicação e a percepção de sinais de alerta.', ok: true,
      why: 'Correta. A diferença entre atenuação de laboratório e de campo é conhecida, e proteger demais gera isolamento acústico que aumenta o risco de acidente.' },
    { t: 'A atenuação nominal do fabricante corresponde à proteção obtida em campo.', ok: false,
      why: 'Errada. As condições de laboratório não reproduzem uso real, ajuste imperfeito e uso intermitente.' },
    { t: 'Quanto maior a atenuação do protetor, melhor, sem qualquer inconveniente.', ok: false,
      why: 'Errada. Superproteção prejudica a comunicação e a percepção de alarmes, com risco de acidente.' },
    { t: 'O uso intermitente do protetor não compromete significativamente a proteção ao longo da jornada.', ok: false,
      why: 'Errada. Retirar o protetor por curtos períodos em ambiente ruidoso reduz drasticamente a proteção efetiva da jornada.' },
    { t: 'O protetor auditivo dispensa a avaliação da exposição ambiental ao ruído.', ok: false,
      why: 'Errada. É a avaliação ambiental que permite definir a atenuação necessária.' }
  ],
  comentario: 'Três pontos: atenuação de campo é menor que a nominal; uso intermitente derruba a proteção efetiva; e superproteção é problema, não virtude — isola o trabalhador de alarmes e da comunicação, aumentando o risco de acidente.',
  pegadinha: '"Quanto mais atenuação melhor" é intuitivo e errado.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-6', 'NHO 01 — Fundacentro'] },

{ id: 'q-4.5-032', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a perda auditiva e a caracterização legal de deficiência auditiva para fins de inclusão, é CORRETO afirmar:',
  alts: [
    { t: 'A caracterização de deficiência auditiva para fins legais segue critérios normativos próprios, que não se confundem com o diagnóstico de perda auditiva induzida por ruído nem com a avaliação de incapacidade laborativa.', ok: true,
      why: 'Correta. São três avaliações distintas, com finalidades e critérios próprios: diagnóstico clínico-ocupacional, enquadramento legal de deficiência e juízo de incapacidade.' },
    { t: 'Todo trabalhador com perda auditiva induzida por ruído se enquadra como pessoa com deficiência para fins de cota.', ok: false,
      why: 'Errada. O enquadramento depende de critérios normativos específicos de grau e configuração da perda.' },
    { t: 'A caracterização de deficiência auditiva equivale à declaração de incapacidade para o trabalho.', ok: false,
      why: 'Errada. Deficiência e incapacidade laborativa são conceitos distintos.' },
    { t: 'O enquadramento independe de qualquer critério audiométrico objetivo.', ok: false,
      why: 'Errada. Há parâmetros normativos que balizam a caracterização.' },
    { t: 'O trabalhador com deficiência auditiva está automaticamente inapto para setores com ruído.', ok: false,
      why: 'Errada. A avaliação é individualizada, e há audição residual a proteger com as mesmas medidas aplicadas aos demais.' }
  ],
  comentario: 'Três perguntas diferentes: existe PAIR (diagnóstico)? Ela enquadra como deficiência para fins legais (critério normativo próprio)? Há incapacidade laborativa (juízo pericial)? As respostas são independentes.',
  pegadinha: 'Supor que toda PAIR gera enquadramento em cota mistura o diagnóstico clínico com o critério legal.',
  refs: ['Lei nº 14.768/2023', 'Lei nº 13.146/2015', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ======================== 4.6 Saúde mental ============================= */
{ id: 'q-4.6-030', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador procura o serviço médico manifestando ideação suicida, relacionando-a a humilhações repetidas no trabalho. Sobre a conduta imediata, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação do risco deve ser feita de forma direta e acolhedora, com perguntas explícitas sobre ideação, plano e meios, garantindo o não abandono, acionando rede de suporte e encaminhamento com vinculação — e o sigilo cede apenas na medida necessária à proteção da vida.', ok: true,
      why: 'Correta. Perguntar diretamente não induz o ato e é essencial para estimar o risco; a conduta combina acolhimento, encaminhamento vinculado e proteção da vida.' },
    { t: 'Perguntar diretamente sobre ideação suicida aumenta o risco do ato e deve ser evitado.', ok: false,
      why: 'Errada. É um dos mitos mais difundidos e mais prejudiciais; perguntar de forma acolhedora reduz o isolamento.' },
    { t: 'O médico deve manter sigilo absoluto, mesmo diante de risco iminente de morte.', ok: false,
      why: 'Errada. A proteção da vida é justa causa para a revelação estritamente necessária.' },
    { t: 'A conduta se resume a fornecer atestado de afastamento e encaminhar por escrito para a rede pública.', ok: false,
      why: 'Errada. Encaminhamento sem vinculação e sem acompanhamento é uma das principais causas de perda de seguimento.' },
    { t: 'Relatos de humilhação no trabalho não devem ser considerados na avaliação de risco.', ok: false,
      why: 'Errada. Fatores psicossociais e assédio são elementos relevantes na avaliação e apontam determinantes a intervir.' }
  ],
  comentario: 'Perguntar sobre ideação suicida é obrigatório e seguro. A conduta é acolher, avaliar risco (ideação, plano, meios, tentativas prévias, suporte), encaminhar com vinculação e não abandonar. O sigilo cede na medida necessária à proteção da vida.',
  pegadinha: 'O mito de que perguntar induz o ato é o distrator mais perigoso deste tema.',
  refs: ['Murta et al. — Prevenção e promoção em saúde mental', 'Código de Ética Médica'] },

{ id: 'q-4.6-031', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa decide avaliar fatores de risco psicossociais e propõe aplicar um questionário individual, identificando os respondentes para "oferecer apoio direcionado". Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação de fatores psicossociais deve produzir resultado agregado, por setor ou grupo, pois a identificação nominal compromete a adesão, expõe o trabalhador e desvia o foco do determinante organizacional para o indivíduo.', ok: true,
      why: 'Correta. O objeto da avaliação é a organização do trabalho; identificar respondentes inibe respostas sinceras e transforma diagnóstico coletivo em triagem individual.' },
    { t: 'A identificação dos respondentes é necessária para validar estatisticamente o instrumento.', ok: false,
      why: 'Errada. A validade do instrumento não depende de identificação nominal.' },
    { t: 'Fatores psicossociais só podem ser avaliados por entrevista clínica individual.', ok: false,
      why: 'Errada. Existem instrumentos validados de aplicação coletiva, complementados por métodos qualitativos.' },
    { t: 'Resultados agregados não permitem qualquer ação prática.', ok: false,
      why: 'Errada. É justamente o resultado por setor que orienta a intervenção sobre ritmo, metas, autonomia e suporte.' },
    { t: 'A participação dos trabalhadores na construção e na devolutiva da avaliação é dispensável.', ok: false,
      why: 'Errada. Participação aumenta a qualidade do diagnóstico e a legitimidade das medidas.' }
  ],
  comentario: 'Avaliação psicossocial: instrumento validado, aplicação com garantia de anonimato, resultado agregado por grupo, devolutiva aos trabalhadores e plano de ação sobre a organização. Identificar respondente destrói o instrumento.',
  pegadinha: 'A justificativa de "apoio direcionado" soa cuidadosa e converte diagnóstico organizacional em vigilância individual.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-1', 'NR-17'] },

{ id: 'q-4.6-032', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a relação entre trabalho e transtornos mentais, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A existência de vulnerabilidade individual prévia afasta a possibilidade de reconhecimento do nexo com o trabalho.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. Vulnerabilidade prévia é, quando muito, concausa — e concausa não rompe o nexo.' },
    { t: 'Transtornos mentais podem ser reconhecidos como relacionados ao trabalho e figuram entre os agravos notificáveis.', ok: false,
      why: 'Verdadeira, portanto não é a resposta.' },
    { t: 'Perturbação funcional decorrente do trabalho caracteriza acidente do trabalho mesmo sem lesão física.', ok: false,
      why: 'Verdadeira. O conceito legal abrange perturbação funcional com perda ou redução de capacidade.' },
    { t: 'O agrupamento de afastamentos por transtorno mental em um mesmo setor é dado epidemiológico relevante.', ok: false,
      why: 'Verdadeira. Sugere determinante organizacional comum e justifica investigação.' },
    { t: 'A intervenção sobre a organização do trabalho é componente necessário da conduta.', ok: false,
      why: 'Verdadeira. Sem ela, o tratamento individual devolve o trabalhador ao ambiente que o adoeceu.' }
  ],
  comentario: 'A tese da vulnerabilidade individual é a defesa mais comum contra o nexo em saúde mental e não se sustenta: a lei admite expressamente a concausa, bastando que o trabalho tenha contribuído para o resultado.',
  pegadinha: 'Enunciado de "assinale a INCORRETA": a falsa formula exatamente o argumento usado para negar nexo em transtorno mental.',
  refs: ['Lei nº 8.213/1991 — art. 20 e 21', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ===================== 4.8 Câncer relacionado ao trabalho ============== */
{ id: 'q-4.8-030', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria calçadista por 22 anos, exposto a colas e solventes, desenvolve leucemia mieloide aguda. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição a benzeno e a solventes contendo benzeno como contaminante deve ser ativamente investigada, considerando que as leucemias apresentam latência menor que a dos tumores sólidos e que o efeito mielotóxico é reconhecido.', ok: true,
      why: 'Correta. Benzeno e leucemia é a associação clássica, e a presença do agente como contaminante de solventes e colas é cenário frequente no setor calçadista.' },
    { t: 'A latência das leucemias é sempre superior a trinta anos, o que afasta o nexo neste caso.', ok: false,
      why: 'Errada. As leucemias têm latência tipicamente menor que a dos tumores sólidos.' },
    { t: 'Como o trabalhador não manipulava benzeno puro, a exposição é irrelevante.', ok: false,
      why: 'Errada. O benzeno frequentemente aparece como contaminante de outros solventes e produtos, e a exposição indireta é relevante.' },
    { t: 'A ausência de alterações hematológicas em exames periódicos anteriores exclui a exposição significativa.', ok: false,
      why: 'Errada. Exames anteriores normais não excluem exposição nem impedem o desenvolvimento posterior da neoplasia.' },
    { t: 'Leucemias não integram a lista de agravos passíveis de reconhecimento como relacionados ao trabalho.', ok: false,
      why: 'Errada. Neoplasias hematológicas associadas a agentes ocupacionais são reconhecidas.' }
  ],
  comentario: 'Duas coisas a reter: benzeno como contaminante de colas e solventes é exposição real e frequentemente ignorada; e a latência das leucemias é menor que a dos tumores sólidos — não use o critério de décadas para todos os cânceres.',
  pegadinha: '"Não manipulava o agente puro" é a defesa mais comum e desconsidera contaminantes.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-031', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a lista nacional de agentes cancerígenos e sua aplicação prática, é CORRETO afirmar:',
  alts: [
    { t: 'Ela sistematiza os agentes reconhecidos e serve de referência para a vigilância, o gerenciamento de riscos e a definição de prioridades de substituição, complementando — e não substituindo — as avaliações internacionais de evidência.', ok: true,
      why: 'Correta. A lista nacional é instrumento de ação regulatória e preventiva, apoiada nas avaliações internacionais de evidência.' },
    { t: 'A ausência de um agente na lista nacional prova que ele não é carcinogênico.', ok: false,
      why: 'Errada. Listas são revisadas periodicamente e a ausência pode refletir defasagem, não segurança.' },
    { t: 'A lista dispensa a consulta às avaliações internacionais.', ok: false,
      why: 'Errada. As fontes são complementares.' },
    { t: 'A presença de um agente na lista autoriza mantê-lo em uso desde que dentro do limite de tolerância.', ok: false,
      why: 'Errada. Para carcinogênicos sem limiar a orientação é substituir e, na impossibilidade, reduzir ao mínimo tecnicamente viável.' },
    { t: 'A lista se aplica apenas a agentes químicos.', ok: false,
      why: 'Errada. Contempla agentes de naturezas diversas, incluindo físicos e biológicos, além de processos.' }
  ],
  comentario: 'A lista nacional é ferramenta de ação: prioriza substituição, orienta vigilância e alimenta o gerenciamento de riscos. Ausência na lista não é atestado de segurança, e presença não autoriza uso "dentro do limite".',
  pegadinha: 'Ler a ausência na lista como prova de inocuidade inverte o ônus da evidência.',
  refs: ['LINACH — Portaria Interministerial nº 9/2014', 'IARC Monographs'] },

{ id: 'q-4.8-032', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um trabalhador exposto a agente cancerígeno pergunta se o tabagismo dele "anula" o direito ao reconhecimento de eventual câncer de pulmão. A orientação CORRETA é:',
  alts: [
    { t: 'O tabagismo é concausa e não afasta o nexo; em várias exposições ocupacionais há inclusive interação que amplia o risco além da simples soma dos efeitos, o que reforça a importância do controle da exposição no trabalho.', ok: true,
      why: 'Correta. Concausa não rompe nexo, e para alguns agentes a interação com o tabaco é mais que aditiva — o que torna o controle ocupacional ainda mais relevante nos fumantes.' },
    { t: 'O tabagismo, por ser causa mais provável, afasta automaticamente o nexo ocupacional.', ok: false,
      why: 'Errada. Exigiria causa única, requisito que a concausalidade dispensa.' },
    { t: 'Havendo tabagismo, o reconhecimento deve ser proporcional à contribuição de cada fator.', ok: false,
      why: 'Errada. Não há rateio proporcional no reconhecimento.' },
    { t: 'A empresa pode condicionar a manutenção do trabalhador em setor de risco à cessação do tabagismo.', ok: false,
      why: 'Errada. Cabe orientar e apoiar a cessação, não condicionar o emprego a hábito de vida.' },
    { t: 'A interação entre tabagismo e agentes ocupacionais nunca ultrapassa a soma dos riscos individuais.', ok: false,
      why: 'Errada. Há exposições em que a interação é mais que aditiva.' }
  ],
  comentario: 'Tabagismo é concausa: não afasta nexo, não gera rateio e, em várias exposições, potencializa o risco. A conclusão prática é o oposto da intuição: no trabalhador fumante, controlar a exposição ocupacional importa ainda mais.',
  pegadinha: 'A alternativa que condiciona o emprego à cessação do tabagismo transforma orientação de saúde em coerção.',
  refs: ['IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho', 'Lei nº 8.213/1991 — art. 21, I'] },

/* ===================== 2.9 Toxicologia ocupacional ===================== */
{ id: 'q-2.9-030', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de tintas apresenta, ao longo de dois anos, queixas de irritabilidade, dificuldade de concentração, alteração de memória recente e distúrbio do sono, com exame neurológico sem déficits focais. Trabalha com solventes orgânicos em ambiente com ventilação precária. Sobre a hipótese, é CORRETO afirmar:',
  alts: [
    { t: 'Deve-se considerar encefalopatia crônica por solventes orgânicos, cujo quadro inicial é predominantemente neurocomportamental e inespecífico, exigindo história ocupacional detalhada, avaliação neuropsicológica e afastamento da exposição para observar a evolução.', ok: true,
      why: 'Correta. O quadro inicial é sutil e neurocomportamental, o que torna a história ocupacional e a avaliação neuropsicológica decisivas — e o afastamento da exposição tem valor diagnóstico e terapêutico.' },
    { t: 'A ausência de déficits focais ao exame neurológico afasta qualquer causa tóxica.', ok: false,
      why: 'Errada. A encefalopatia por solventes cursa tipicamente sem sinais focais nas fases iniciais.' },
    { t: 'Trata-se necessariamente de transtorno de ansiedade, sem relação com a exposição.', ok: false,
      why: 'Errada. A superposição de sintomas exige investigar a exposição antes de atribuir a causa psiquiátrica primária.' },
    { t: 'O monitoramento biológico normal exclui a hipótese, independentemente do momento da coleta.', ok: false,
      why: 'Errada. Indicadores de solventes têm meia-vida curta e a coleta em momento inadequado produz resultado falsamente tranquilizador.' },
    { t: 'A manutenção da exposição não interfere na evolução do quadro.', ok: false,
      why: 'Errada. A permanência da exposição é fator determinante da progressão.' }
  ],
  comentario: 'Encefalopatia por solventes: sintomas neurocomportamentais inespecíficos, exame neurológico inicialmente normal, sobreposição com quadros psiquiátricos e ausência de marcador definitivo. A história ocupacional é o que levanta a hipótese; o afastamento é parte da investigação.',
  pegadinha: 'Monitoramento biológico normal como prova de ausência de exposição ignora a cinética do agente e o momento da coleta.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.9-031', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de galvanoplastia é levado ao pronto atendimento com cefaleia, náuseas, taquipneia e acidose metabólica após limpeza de tanque com produto contendo cianeto. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Trata-se de emergência com bloqueio da respiração celular, exigindo remoção da fonte com proteção da equipe, oxigenoterapia e antidototerapia específica, sem aguardar confirmação laboratorial, pois a evolução é rápida.', ok: true,
      why: 'Correta. O quadro é de asfixia celular e a antidototerapia é guiada pela clínica e pelo contexto de exposição; aguardar exame confirma o diagnóstico tarde demais.' },
    { t: 'A conduta é apenas de suporte, pois não há antídoto disponível para esse agente.', ok: false,
      why: 'Errada. Há antidototerapia específica para intoxicação por cianeto.' },
    { t: 'A equipe pode entrar no tanque sem proteção respiratória, já que o trabalhador foi retirado.', ok: false,
      why: 'Errada. A atmosfera permanece perigosa e a segurança da cena é a primeira regra.' },
    { t: 'O tratamento deve aguardar dosagem sérica confirmatória do agente.', ok: false,
      why: 'Errada. A evolução é rápida e a decisão é clínica e contextual.' },
    { t: 'A pele rósea e a ausência de cianose excluem hipóxia tecidual.', ok: false,
      why: 'Errada. Justamente por haver bloqueio da utilização celular do oxigênio, pode não haver cianose apesar da hipóxia tecidual.' }
  ],
  comentario: 'Asfixiantes celulares bloqueiam o uso do oxigênio pela célula: há hipóxia tecidual sem cianose. Conduta: segurança da cena, remover da fonte, oxigênio, antídoto específico guiado pela clínica. Não se espera exame.',
  pegadinha: 'A ausência de cianose é usada para descartar hipóxia — e é característica do mecanismo.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-2.9-032', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre asfixiantes ocupacionais, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Asfixiantes simples atuam por deslocamento do oxigênio do ambiente, enquanto asfixiantes químicos interferem no transporte ou na utilização celular do oxigênio — distinção que muda tanto a avaliação do ambiente quanto a conduta clínica.', ok: true,
      why: 'Correta. Os primeiros reduzem a fração de oxigênio disponível; os segundos agem no organismo, o que exige antidototerapia específica em alguns casos.' },
    { t: 'Todos os asfixiantes possuem antídoto específico.', ok: false,
      why: 'Errada. Asfixiantes simples não têm antídoto: o tratamento é remover da atmosfera, oxigenar e dar suporte.' },
    { t: 'Asfixiantes simples são detectáveis pelo odor, o que permite alerta precoce.', ok: false,
      why: 'Errada. Vários são inodoros, e a deficiência de oxigênio não produz sinal de alerta perceptível.' },
    { t: 'O monóxido de carbono atua por deslocamento do oxigênio ambiente.', ok: false,
      why: 'Errada. Ele age no transporte de oxigênio pela hemoglobina, sendo asfixiante químico.' },
    { t: 'A avaliação da concentração de oxigênio no ambiente é dispensável quando não há odor perceptível.', ok: false,
      why: 'Errada, e é a lógica que mata em espaço confinado: a medição é sempre prévia e obrigatória.' }
  ],
  comentario: 'Simples: deslocam o oxigênio do ar (nitrogênio, dióxido de carbono, metano, argônio) — sem antídoto, tratamento é ar e suporte. Químicos: agem no transporte (monóxido de carbono) ou na utilização celular (cianeto, sulfeto de hidrogênio) — alguns com antídoto.',
  pegadinha: 'Confiar no odor como alerta é o erro que precede a maioria das mortes em espaço confinado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-33'] }

);
