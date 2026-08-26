/* Aprofundamento de alto rendimento: 4.4, 4.5, 4.6, 4.8 e 2.9.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============================ 4.4 Dermatoses ============================ */
{ id: 'q-4.4-030', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Galvanizador com dez anos de exposição a banhos de cromo apresenta úlceras arredondadas, de bordas elevadas e fundo limpo, indolores, em dorso das mãos e dedos, além de queixa de obstrução nasal e epistaxes recorrentes. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'São compatíveis com ulceração por cromo hexavalente, que acomete pele e mucosa nasal.', ok: true,
      why: 'Correta. Exige afastamento da exposição e revisão do controle na fonte.' },
    { t: 'São compatíveis com dermatite de contato alérgica em fase crônica, com liquenificação das bordas.', ok: false,
      why: 'Errada. A ulceração de bordas elevadas com lesão nasal aponta cromo hexavalente.' },
    { t: 'São compatíveis com piodermite, pois a ausência de dor afasta a origem ocupacional das lesões.', ok: false,
      why: 'Errada. As úlceras por cromo são caracteristicamente indolores.' },
    { t: 'São compatíveis com cromo, sendo os sintomas nasais independentes e investigados em separado.', ok: false,
      why: 'Errada. Pele e mucosa nasal são alvos do mesmo agente.' },
    { t: 'São compatíveis com cromo, resumindo-se a conduta ao curativo, mantida a função atual.', ok: false,
      why: 'Errada. Sem afastar a exposição, a lesão progride para perfuração de septo.' }
  ],
  comentario: 'Cromo hexavalente produz um par característico: úlcera cutânea indolor de bordas elevadas nas áreas de contato e lesão de mucosa nasal com risco de perfuração septal. É também agente com reconhecimento de carcinogenicidade respiratória.',
  pegadinha: 'A ausência de dor é usada para sugerir causa banal, quando é justamente traço do quadro ocupacional.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs'] },

{ id: 'q-4.4-031', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de manutenção de veículos apresenta lesões papulopustulosas foliculares em antebraços e face anterior das coxas, áreas de contato com uniforme impregnado de óleo lubrificante. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'É compatível com elaioconiose, foliculite por óleos, que exige higiene e revisão do processo.', ok: true,
      why: 'Correta. Não se resolve apenas com tratamento tópico.' },
    { t: 'É compatível com acne vulgar do adulto, agravada pelo calor do ambiente da oficina mecânica.', ok: false,
      why: 'Errada. A distribuição em áreas de contato com óleo aponta elaioconiose.' },
    { t: 'É cloracne, dermatose marcadora de exposição a hidrocarbonetos halogenados no ambiente.', ok: false,
      why: 'Errada. A cloracne tem morfologia e agentes distintos.' },
    { t: 'É compatível com elaioconiose, sem que o uniforme impregnado influencie havendo banho ao fim.', ok: false,
      why: 'Errada. A roupa impregnada mantém o contato durante toda a jornada.' },
    { t: 'É compatível com elaioconiose, não tendo os óleos minerais usados potencial carcinogênico.', ok: false,
      why: 'Errada. Óleos minerais usados têm carcinogenicidade reconhecida.' }
  ],
  comentario: 'Elaioconiose: foliculite pelo contato com óleos, nas áreas em que a roupa impregnada toca a pele. A prevenção é de processo e de higiene — trocar e lavar o uniforme institucionalmente, evitar panos oleosos no bolso, reduzir o contato.',
  pegadinha: 'Confundir com cloracne é erro frequente: as duas são acneiformes, mas a topografia e o agente são completamente diferentes.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs'] },

{ id: 'q-4.4-032', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador rural de 58 anos, 35 anos de atividade a céu aberto, apresenta lesão perlácea com telangiectasias em dorso do nariz e múltiplas ceratoses actínicas em face e antebraços. Sobre o caso, é CORRETO afirmar:',
  alts: [
    { t: 'A radiação solar é cancerígena e o trabalho a céu aberto configura exposição ocupacional.', ok: true,
      why: 'Correta. O câncer cutâneo pode ser reconhecido como relacionado ao trabalho.' },
    { t: 'O câncer de pele nunca é doença relacionada ao trabalho, por depender do fototipo individual.', ok: false,
      why: 'Errada. A radiação solar é cancerígena reconhecida e a dose ocupacional é maior.' },
    { t: 'A exposição é ocupacional, sendo as ceratoses actínicas achado benigno sem relação com o sol.', ok: false,
      why: 'Errada. São marcadores de dano actínico acumulado.' },
    { t: 'A exposição é ocupacional, resumindo-se a proteção ao uso de protetor solar pelo trabalhador.', ok: false,
      why: 'Errada. Sombreamento, horários e vestimenta vêm antes na hierarquia.' },
    { t: 'A exposição é ocupacional, afastando a latência longa entre exposição e lesão o nexo com o trabalho.', ok: false,
      why: 'Errada. A latência longa é característica desses agravos.' }
  ],
  comentario: 'Trabalho a céu aberto é exposição ocupacional à radiação solar, reconhecida como carcinogênica para a pele. A prevenção segue a hierarquia: organizar horários e sombreamento antes de vestimenta e protetor solar.',
  pegadinha: 'Reduzir a proteção ao protetor solar coloca no último degrau da hierarquia a única medida adotada.',
  refs: ['Salim — Dermatoses Ocupacionais', 'IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.4-033', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Auxiliar de cozinha apresenta lesões eritêmato-vesiculosas em antebraços após manipular determinados vegetais e permanecer exposta ao sol durante o transporte de caixas. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'É fotodermatose de contato: a lesão exige a combinação do agente com a radiação ultravioleta.', ok: true,
      why: 'Correta. Explica a distribuição em áreas fotoexpostas e a necessidade de tratar os dois fatores.' },
    { t: 'É queimadura solar simples, sem relação com os vegetais manipulados durante a jornada de trabalho.', ok: false,
      why: 'Errada. A distribuição e o padrão apontam interação entre agente e luz.' },
    { t: 'É fotodermatose de contato, cuja lesão ocorreria igualmente em ambiente fechado, sem sol.', ok: false,
      why: 'Errada. Sem a radiação ultravioleta a reação não se produz.' },
    { t: 'É fotodermatose de contato, dependendo a prevenção exclusivamente do uso de protetor solar.', ok: false,
      why: 'Errada. É preciso agir também sobre o contato com o agente.' },
    { t: 'É fotodermatose, sem relevância ocupacional por se tratar de condição rara entre trabalhadores.', ok: false,
      why: 'Errada. É frequente em atividades agrícolas e de manipulação vegetal.' }
  ],
  comentario: 'Fotodermatose de contato: lesão só nas áreas fotoexpostas E com contato com o agente. Investigue sempre os dois lados — retirar apenas a radiação ou apenas o agente já resolve, o que ajuda no diagnóstico e na conduta.',
  pegadinha: 'A alternativa que atribui tudo à queimadura solar ignora a distribuição relacionada ao contato.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

/* ============================ 4.5 ORL ocupacional ======================= */
{ id: 'q-4.5-030', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Professora de 46 anos, 20 anos de magistério em salas com acústica ruim e turmas numerosas, refere rouquidão progressiva, fadiga vocal ao fim do dia e necessidade de esforço para ser ouvida. A laringoscopia mostra nódulos vocais bilaterais. Sobre o caso, é CORRETO afirmar:',
  alts: [
    { t: 'É compatível com disfonia ocupacional, e a intervenção deve alcançar as condições de trabalho.', ok: true,
      why: 'Correta. Acústica, turma, amplificação, pausas e umidade compõem o quadro.' },
    { t: 'É quadro constitucional, pois nódulos vocais não guardam relação com a demanda vocal da atividade.', ok: false,
      why: 'Errada. A demanda vocal prolongada é fator determinante.' },
    { t: 'É disfonia ocupacional, esgotando-se o tratamento na terapia fonoaudiológica individual da paciente.', ok: false,
      why: 'Errada. Sem alterar as condições, o quadro recidiva.' },
    { t: 'É disfonia relacionada à voz, não passível de reconhecimento como agravo relacionado ao trabalho.', ok: false,
      why: 'Errada. Consta entre os agravos relacionados ao trabalho.' },
    { t: 'É disfonia ocupacional, sendo a amplificação contraindicada por gerar dependência vocal.', ok: false,
      why: 'Errada. A amplificação reduz o esforço vocal e é medida recomendada.' }
  ],
  comentario: 'Disfonia ocupacional é doença de professor, teleatendente, operador e vendedor. A intervenção tem dois braços: cuidado individual e mudança das condições — acústica, amplificação, turma, pausas, hidratação e umidade do ar.',
  pegadinha: 'Tratar nódulo vocal como constitucional retira o nexo de uma das doenças ocupacionais mais prevalentes no magistério.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

{ id: 'q-4.5-031', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao revisar o programa de conservação auditiva de uma metalúrgica, o médico do trabalho observa que a atenuação do protetor foi calculada apenas pelo valor nominal informado pelo fabricante. Sobre a seleção de protetores auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'A atenuação de campo é menor que a nominal, exigindo correção, ajuste e treinamento.', ok: true,
      why: 'Correta. A superproteção também prejudica comunicação e percepção de alertas.' },
    { t: 'A atenuação nominal declarada pelo fabricante corresponde à proteção efetivamente obtida em campo.', ok: false,
      why: 'Errada. A atenuação real é sistematicamente menor.' },
    { t: 'A atenuação de campo é menor, sendo tanto melhor quanto maior a atenuação, sem inconvenientes.', ok: false,
      why: 'Errada. Atenuação excessiva prejudica comunicação e percepção de alertas.' },
    { t: 'A atenuação de campo é menor, sem que o uso intermitente comprometa a proteção da jornada.', ok: false,
      why: 'Errada. Poucos minutos sem proteção derrubam a atenuação média.' },
    { t: 'A atenuação de campo é menor, dispensando o protetor a avaliação da exposição ambiental ao ruído.', ok: false,
      why: 'Errada. Sem conhecer o nível não se seleciona a atenuação necessária.' }
  ],
  comentario: 'Três pontos: atenuação de campo é menor que a nominal; uso intermitente derruba a proteção efetiva; e superproteção é problema, não virtude — isola o trabalhador de alarmes e da comunicação, aumentando o risco de acidente.',
  pegadinha: '"Quanto mais atenuação melhor" é intuitivo e errado.',
  refs: ['Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho', 'NR-6', 'NHO 01 — Fundacentro'] },

{ id: 'q-4.5-032', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a perda auditiva e a caracterização legal de deficiência auditiva para fins de inclusão, é CORRETO afirmar:',
  alts: [
    { t: 'A deficiência auditiva legal segue critérios próprios, distintos do diagnóstico e da incapacidade.', ok: true,
      why: 'Correta. São três enquadramentos com finalidades e critérios diferentes.' },
    { t: 'Todo trabalhador com perda induzida por ruído se enquadra como pessoa com deficiência para a cota.', ok: false,
      why: 'Errada. O enquadramento exige critério normativo de grau e bilateralidade.' },
    { t: 'A caracterização segue critérios próprios e equivale à declaração de incapacidade para o trabalho.', ok: false,
      why: 'Errada. Deficiência não é sinônimo de incapacidade laborativa.' },
    { t: 'A caracterização segue critérios próprios, independendo de qualquer critério audiométrico objetivo.', ok: false,
      why: 'Errada. Há parâmetros audiométricos definidos em norma.' },
    { t: 'A caracterização segue critérios próprios, ficando o trabalhador automaticamente inapto ao ruído.', ok: false,
      why: 'Errada. A aptidão se avalia por função e condições de exposição.' }
  ],
  comentario: 'Três perguntas diferentes: existe PAIR (diagnóstico)? Ela enquadra como deficiência para fins legais (critério normativo próprio)? Há incapacidade laborativa (juízo pericial)? As respostas são independentes.',
  pegadinha: 'Supor que toda PAIR gera enquadramento em cota mistura o diagnóstico clínico com o critério legal.',
  refs: ['Lei nº 14.768/2023', 'Lei nº 13.146/2015', 'Gândara — Doenças Otorrinolaringológicas Relacionadas ao Trabalho'] },

/* ======================== 4.6 Saúde mental ============================= */
{ id: 'q-4.6-030', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador procura o serviço médico manifestando ideação suicida, relacionando-a a humilhações repetidas no trabalho. Sobre a conduta imediata, é CORRETO afirmar:',
  alts: [
    { t: 'Avaliar o risco de forma direta e acolhedora, perguntando sobre ideação, plano e meios.', ok: true,
      why: 'Correta. Garante-se o não abandono, e o sigilo cede na medida necessária à proteção da vida.' },
    { t: 'Evitar perguntar diretamente sobre ideação suicida, pois isso aumenta o risco de o ato ocorrer.', ok: false,
      why: 'Errada. Perguntar não induz o comportamento e permite intervir.' },
    { t: 'Avaliar o risco, mantendo sigilo absoluto mesmo diante de risco iminente de morte do paciente.', ok: false,
      why: 'Errada. O sigilo cede na medida necessária à proteção da vida.' },
    { t: 'Avaliar o risco, resumindo-se a conduta ao atestado de afastamento e encaminhamento por escrito.', ok: false,
      why: 'Errada. Exige vinculação e garantia de continuidade do cuidado.' },
    { t: 'Avaliar o risco, sem considerar relatos de humilhação no trabalho na análise do caso apresentado.', ok: false,
      why: 'Errada. São determinantes relevantes e compõem a avaliação.' }
  ],
  comentario: 'Perguntar sobre ideação suicida é obrigatório e seguro. A conduta é acolher, avaliar risco (ideação, plano, meios, tentativas prévias, suporte), encaminhar com vinculação e não abandonar. O sigilo cede na medida necessária à proteção da vida.',
  pegadinha: 'O mito de que perguntar induz o ato é o distrator mais perigoso deste tema.',
  refs: ['Murta et al. — Prevenção e promoção em saúde mental', 'Código de Ética Médica'] },

{ id: 'q-4.6-031', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa decide avaliar fatores de risco psicossociais e propõe aplicar um questionário individual, identificando os respondentes para "oferecer apoio direcionado". Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'O resultado deve ser agregado por setor ou grupo, pois identificar compromete a adesão.', ok: true,
      why: 'Correta. A identificação expõe o trabalhador e desloca o foco do determinante organizacional.' },
    { t: 'O resultado exige identificar os respondentes, condição para validar estatisticamente o instrumento.', ok: false,
      why: 'Errada. A validação não depende de identificação nominal.' },
    { t: 'O resultado deve ser agregado, podendo os fatores psicossociais ser avaliados só por entrevista clínica.', ok: false,
      why: 'Errada. Instrumentos coletivos são o método próprio para esse objeto.' },
    { t: 'O resultado deve ser agregado, embora os dados agregados não permitam qualquer ação prática.', ok: false,
      why: 'Errada. Orientam intervenção sobre metas, ritmo, suporte e clareza de papel.' },
    { t: 'O resultado deve ser agregado, sendo dispensável a participação dos trabalhadores e a devolutiva.', ok: false,
      why: 'Errada. A devolutiva é o que legitima o processo e mantém a adesão.' }
  ],
  comentario: 'Avaliação psicossocial: instrumento validado, aplicação com garantia de anonimato, resultado agregado por grupo, devolutiva aos trabalhadores e plano de ação sobre a organização. Identificar respondente destrói o instrumento.',
  pegadinha: 'A justificativa de "apoio direcionado" soa cuidadosa e converte diagnóstico organizacional em vigilância individual.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'NR-1', 'NR-17'] },

{ id: 'q-4.6-032', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a relação entre trabalho e transtornos mentais, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'A vulnerabilidade individual prévia afasta a possibilidade de reconhecimento do nexo.', ok: true,
      why: 'É a INCORRETA. Pode configurar concausa, que é hipótese reconhecida.' },
    { t: 'Transtornos mentais podem ser relacionados ao trabalho e figuram entre os agravos notificáveis.', ok: false,
      why: 'Correta, portanto não é a resposta. Constam expressamente da lista.' },
    { t: 'Perturbação funcional decorrente do trabalho caracteriza acidente do trabalho mesmo sem lesão física.', ok: false,
      why: 'Correta, portanto não é a resposta. É previsão legal expressa.' },
    { t: 'O agrupamento de afastamentos por transtorno mental num mesmo setor é dado epidemiológico relevante.', ok: false,
      why: 'Correta, portanto não é a resposta. Aponta causa comum organizacional.' },
    { t: 'A intervenção sobre a organização do trabalho é componente necessário da conduta nesses casos.', ok: false,
      why: 'Correta, portanto não é a resposta. Sem ela, o padrão persiste.' }
  ],
  comentario: 'A tese da vulnerabilidade individual é a defesa mais comum contra o nexo em saúde mental e não se sustenta: a lei admite expressamente a concausa, bastando que o trabalho tenha contribuído para o resultado.',
  pegadinha: 'Enunciado de "assinale a INCORRETA": a falsa formula exatamente o argumento usado para negar nexo em transtorno mental.',
  refs: ['Lei nº 8.213/1991 — art. 20 e 21', 'De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho'] },

/* ===================== 4.8 Câncer relacionado ao trabalho ============== */
{ id: 'q-4.8-030', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria calçadista por 22 anos, exposto a colas e solventes, desenvolve leucemia mieloide aguda. Sobre a investigação do nexo, é CORRETO afirmar:',
  alts: [
    { t: 'Investigar exposição a benzeno e a solventes que o contenham como contaminante do produto.', ok: true,
      why: 'Correta. As leucemias têm latência menor que a dos tumores sólidos.' },
    { t: 'Afastar o nexo, pois a latência das leucemias é sempre superior a trinta anos de exposição.', ok: false,
      why: 'Errada. É menor que a dos tumores sólidos.' },
    { t: 'Afastar o nexo, pois o trabalhador não manipulava benzeno puro, mas apenas solventes comerciais.', ok: false,
      why: 'Errada. Solventes contêm benzeno como contaminante.' },
    { t: 'Afastar a exposição significativa, dada a ausência de alterações hematológicas em exames anteriores.', ok: false,
      why: 'Errada. A ausência de alteração prévia não exclui exposição relevante.' },
    { t: 'Afastar o reconhecimento, pois as leucemias não integram a lista de agravos relacionados ao trabalho.', ok: false,
      why: 'Errada. A associação com o benzeno consta expressamente.' }
  ],
  comentario: 'Duas coisas a reter: benzeno como contaminante de colas e solventes é exposição real e frequentemente ignorada; e a latência das leucemias é menor que a dos tumores sólidos — não use o critério de décadas para todos os cânceres.',
  pegadinha: '"Não manipulava o agente puro" é a defesa mais comum e desconsidera contaminantes.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho'] },

{ id: 'q-4.8-031', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a lista nacional de agentes cancerígenos e sua aplicação prática, é CORRETO afirmar:',
  alts: [
    { t: 'Sistematiza os agentes reconhecidos e serve de referência para vigilância e priorização.', ok: true,
      why: 'Correta. Complementa, e não substitui, as avaliações internacionais de evidência.' },
    { t: 'Sistematiza os agentes, provando a ausência de um agente na lista que ele não é carcinogênico.', ok: false,
      why: 'Errada. Pode significar apenas que ainda não foi incorporado.' },
    { t: 'Sistematiza os agentes reconhecidos, o que dispensa a consulta às avaliações internacionais.', ok: false,
      why: 'Errada. São fontes complementares e frequentemente mais atualizadas.' },
    { t: 'Sistematiza os agentes, autorizando a presença na lista mantê-los em uso dentro do limite.', ok: false,
      why: 'Errada. Para cancerígenos, prioriza-se substituição e redução máxima.' },
    { t: 'Sistematiza os agentes reconhecidos, com aplicação restrita aos agentes de natureza química.', ok: false,
      why: 'Errada. Alcança agentes físicos e biológicos também.' }
  ],
  comentario: 'A lista nacional é ferramenta de ação: prioriza substituição, orienta vigilância e alimenta o gerenciamento de riscos. Ausência na lista não é atestado de segurança, e presença não autoriza uso "dentro do limite".',
  pegadinha: 'Ler a ausência na lista como prova de inocuidade inverte o ônus da evidência.',
  refs: ['LINACH — Portaria Interministerial nº 9/2014', 'IARC Monographs'] },

{ id: 'q-4.8-032', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um trabalhador exposto a agente cancerígeno pergunta se o tabagismo dele "anula" o direito ao reconhecimento de eventual câncer de pulmão. A orientação CORRETA é:',
  alts: [
    { t: 'O tabagismo é concausa e não afasta o nexo, havendo interação que amplia o risco.', ok: true,
      why: 'Correta. Isso reforça a importância do controle da exposição no trabalho.' },
    { t: 'O tabagismo, por ser a causa mais provável do quadro, afasta automaticamente o nexo ocupacional.', ok: false,
      why: 'Errada. É concausa e não excludente do nexo.' },
    { t: 'O tabagismo é concausa, devendo o reconhecimento ser proporcional à contribuição de cada fator.', ok: false,
      why: 'Errada. Não há previsão de fracionamento do reconhecimento.' },
    { t: 'O tabagismo é concausa, podendo a empresa condicionar a permanência no setor à sua cessação.', ok: false,
      why: 'Errada. Condicionar o emprego a hábito pessoal é discriminação.' },
    { t: 'O tabagismo é concausa, nunca ultrapassando a interação com agentes a soma dos riscos isolados.', ok: false,
      why: 'Errada. Há sinergias documentadas, como com o asbesto.' }
  ],
  comentario: 'Tabagismo é concausa: não afasta nexo, não gera rateio e, em várias exposições, potencializa o risco. A conclusão prática é o oposto da intuição: no trabalhador fumante, controlar a exposição ocupacional importa ainda mais.',
  pegadinha: 'A alternativa que condiciona o emprego à cessação do tabagismo transforma orientação de saúde em coerção.',
  refs: ['IARC Monographs', 'Atlas do Câncer Relacionado ao Trabalho', 'Lei nº 8.213/1991 — art. 21, I'] },

/* ===================== 2.9 Toxicologia ocupacional ===================== */
{ id: 'q-2.9-030', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de tintas apresenta, ao longo de dois anos, queixas de irritabilidade, dificuldade de concentração, alteração de memória recente e distúrbio do sono, com exame neurológico sem déficits focais. Trabalha com solventes orgânicos em ambiente com ventilação precária. Sobre a hipótese, é CORRETO afirmar:',
  alts: [
    { t: 'Considerar encefalopatia crônica por solventes, de quadro inicial neurocomportamental.', ok: true,
      why: 'Correta. Exige história ocupacional detalhada, avaliação neuropsicológica e afastamento.' },
    { t: 'Afastar causa tóxica, dada a ausência de déficits focais no exame neurológico realizado.', ok: false,
      why: 'Errada. O quadro inicial é difuso e neurocomportamental.' },
    { t: 'Concluir por transtorno de ansiedade, sem relação com a exposição ocupacional a solventes.', ok: false,
      why: 'Errada. A exposição precisa ser investigada como hipótese.' },
    { t: 'Excluir a hipótese pelo monitoramento biológico normal, qualquer que seja o momento da coleta.', ok: false,
      why: 'Errada. O momento da coleta condiciona a interpretação do indicador.' },
    { t: 'Considerar encefalopatia, sem que a manutenção da exposição interfira na evolução do quadro.', ok: false,
      why: 'Errada. Manter a exposição favorece a progressão.' }
  ],
  comentario: 'Encefalopatia por solventes: sintomas neurocomportamentais inespecíficos, exame neurológico inicialmente normal, sobreposição com quadros psiquiátricos e ausência de marcador definitivo. A história ocupacional é o que levanta a hipótese; o afastamento é parte da investigação.',
  pegadinha: 'Monitoramento biológico normal como prova de ausência de exposição ignora a cinética do agente e o momento da coleta.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.9-031', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de galvanoplastia é levado ao pronto atendimento com cefaleia, náuseas, taquipneia e acidose metabólica após limpeza de tanque com produto contendo cianeto. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'É emergência com bloqueio da respiração celular: remover com proteção, oxigênio e antídoto.', ok: true,
      why: 'Correta. Não se aguarda confirmação laboratorial, pois a evolução é rápida.' },
    { t: 'É emergência sem antídoto disponível para o agente, cabendo apenas medidas de suporte clínico.', ok: false,
      why: 'Errada. Há antidototerapia específica indicada.' },
    { t: 'É emergência, podendo a equipe entrar no tanque sem proteção, já retirado o trabalhador.', ok: false,
      why: 'Errada. A atmosfera segue perigosa e mata socorristas.' },
    { t: 'É emergência, devendo o tratamento aguardar a dosagem sérica confirmatória do agente envolvido.', ok: false,
      why: 'Errada. A evolução é rápida e a conduta é clínica.' },
    { t: 'É emergência, excluindo a pele rósea e a ausência de cianose a hipóxia tecidual instalada.', ok: false,
      why: 'Errada. A coloração preservada é característica desse quadro.' }
  ],
  comentario: 'Asfixiantes celulares bloqueiam o uso do oxigênio pela célula: há hipóxia tecidual sem cianose. Conduta: segurança da cena, remover da fonte, oxigênio, antídoto específico guiado pela clínica. Não se espera exame.',
  pegadinha: 'A ausência de cianose é usada para descartar hipóxia — e é característica do mecanismo.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

{ id: 'q-2.9-032', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre asfixiantes ocupacionais, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Os simples deslocam o oxigênio do ambiente; os químicos afetam transporte ou uso celular.', ok: true,
      why: 'Correta. A distinção muda a avaliação do ambiente e a conduta clínica.' },
    { t: 'São dois grupos distintos, possuindo todos os asfixiantes antídoto específico disponível.', ok: false,
      why: 'Errada. Para os asfixiantes simples não há antídoto: a conduta é oxigênio.' },
    { t: 'Os simples deslocam o oxigênio e são detectáveis pelo odor, o que permite alerta precoce.', ok: false,
      why: 'Errada. Nitrogênio e outros são inodoros e não dão aviso.' },
    { t: 'Os dois grupos diferem, atuando o monóxido de carbono por deslocamento do oxigênio ambiente.', ok: false,
      why: 'Errada. É asfixiante químico: liga-se à hemoglobina.' },
    { t: 'Os dois grupos diferem, sendo dispensável medir o oxigênio quando não há odor perceptível.', ok: false,
      why: 'Errada. Deficiência de oxigênio não tem odor nem aviso sensorial.' }
  ],
  comentario: 'Simples: deslocam o oxigênio do ar (nitrogênio, dióxido de carbono, metano, argônio) — sem antídoto, tratamento é ar e suporte. Químicos: agem no transporte (monóxido de carbono) ou na utilização celular (cianeto, sulfeto de hidrogênio) — alguns com antídoto.',
  pegadinha: 'Confiar no odor como alerta é o erro que precede a maioria das mortes em espaço confinado.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-33'] }

);
