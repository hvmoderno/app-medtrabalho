/* Seção 2 — Higiene Ocupacional, Exposições e Toxicologia
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.1-001', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Em uma fundição, a avaliação identificou concentração de fumos metálicos acima do aceitável em um posto de rebarbação. A empresa propõe fornecer respiradores a todos os trabalhadores do setor e encerrar o assunto. Segundo a hierarquia de controles da higiene ocupacional, a crítica CORRETA a essa proposta é:',
  alts: [
    { t: 'O equipamento de proteção individual é a última medida da hierarquia e só se justifica quando as medidas de eliminação, substituição, engenharia e administrativas forem inviáveis ou insuficientes.', ok: true,
      why: 'Correta. A hierarquia de controles coloca o EPI no último degrau justamente porque ele depende do uso correto e contínuo pelo trabalhador e não reduz a geração do agente.' },
    { t: 'O equipamento de proteção individual é aceitável como medida isolada desde que o fator de proteção atribuído seja suficiente para a concentração medida.', ok: false,
      why: 'Errada. Um fator de proteção adequado é condição necessária para a escolha do respirador, mas não autoriza pular os degraus superiores da hierarquia.' },
    { t: 'A proposta é adequada porque a proteção individual atua diretamente na fonte geradora do agente.', ok: false,
      why: 'Errada, e inverte o conceito. O EPI atua no trabalhador, no fim da cadeia; quem atua na fonte é a eliminação, a substituição e as medidas de engenharia.' },
    { t: 'A proposta é inadequada apenas por questão de custo, já que o EPI é sempre mais caro que a ventilação local exaustora no longo prazo.', ok: false,
      why: 'Errada. O argumento contra o EPI como medida isolada é técnico, de eficácia e confiabilidade, não meramente econômico.' },
    { t: 'A hierarquia de controles não se aplica a agentes químicos particulados, sendo específica para agentes físicos.', ok: false,
      why: 'Errada. A hierarquia é transversal a todos os tipos de agente: físicos, químicos, biológicos e de risco ergonômico e de acidentes.' }
  ],
  comentario: 'A hierarquia clássica é: eliminação → substituição → controles de engenharia → controles administrativos e de organização do trabalho → EPI. O EPI é último porque sua eficácia real depende de seleção, ensaio de vedação, treinamento e uso contínuo — variáveis que falham no mundo real.',
  pegadinha: 'A alternativa do fator de proteção mistura dois assuntos verdadeiros. Selecionar bem o respirador é obrigação, mas não transforma o EPI em medida de primeira linha.',
  refs: ['Higiene ocupacional — antecipação, reconhecimento, avaliação e controle', 'NR-6', 'NR-9'] },

{ id: 'q-2.2-001', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhadores de uma pedreira executam serviço a céu aberto em região de verão intenso. O médico do trabalho é chamado a orientar sobre sobrecarga térmica. Assinale a alternativa CORRETA sobre exposição ocupacional ao calor:',
  alts: [
    { t: 'A avaliação da sobrecarga térmica considera, além da temperatura do ar, a umidade, a radiação térmica e a velocidade do ar, combinadas a um índice, e é interpretada junto à taxa metabólica da atividade.', ok: true,
      why: 'Correta. Não existe avaliação de calor ocupacional só com termômetro de bulbo seco: o índice combina componentes ambientais e é sempre lido em conjunto com o gasto energético da tarefa.' },
    { t: 'A aclimatização é permanente: uma vez adquirida, o trabalhador mantém a adaptação mesmo após semanas afastado da exposição.', ok: false,
      why: 'Errada. A aclimatização se perde em poucos dias a semanas de afastamento, e o retorno após férias ou afastamento é período de risco aumentado que exige reaclimatização progressiva.' },
    { t: 'A reposição hídrica deve ser feita apenas quando o trabalhador referir sede, sinal fisiológico confiável de desidratação.', ok: false,
      why: 'Errada. A sede é sinal tardio: quando aparece já há déficit hídrico. A hidratação deve ser programada e fracionada ao longo da jornada.' },
    { t: 'A intermação caracteriza-se por pele fria e sudorese profusa, com nível de consciência preservado.', ok: false,
      why: 'Errada. Esse quadro descreve a exaustão pelo calor. A intermação cursa com disfunção do sistema nervoso central e é emergência médica.' },
    { t: 'A vestimenta de proteção química impermeável reduz a sobrecarga térmica por bloquear a radiação solar direta.', ok: false,
      why: 'Errada, e é o oposto. Vestimentas impermeáveis impedem a evaporação do suor, que é a principal via de dissipação de calor, e aumentam a sobrecarga térmica.' }
  ],
  comentario: 'Três pontos concentram a maior parte das questões de calor: o índice combina variáveis ambientais e é lido junto à taxa metabólica; a aclimatização é reversível; e a intermação é a forma grave, com comprometimento neurológico, distinta da exaustão pelo calor.',
  pegadinha: 'A troca entre exaustão pelo calor e intermação é a inversão preferida da banca. Consciência alterada e disfunção neurológica indicam a forma grave.',
  refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

{ id: 'q-2.3-001', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de reforma de baterias, 42 anos, apresenta cólica abdominal recorrente, anemia, astenia e queixa recente de fraqueza para extensão do punho direito. O hemograma mostra anemia com pontilhado basófilo em hemácias. A hipótese diagnóstica e o marcador de exposição mais adequados são:',
  alts: [
    { t: 'Intoxicação por chumbo; dosagem de chumbo no sangue como indicador de exposição.', ok: true,
      why: 'Correta. Cólica abdominal, anemia com pontilhado basófilo e neuropatia motora com punho caído em trabalhador de baterias compõem o quadro clássico do saturnismo, cujo indicador de exposição de referência é a plumbemia.' },
    { t: 'Intoxicação por mercúrio metálico; dosagem de mercúrio urinário.', ok: false,
      why: 'Errada. O mercúrio metálico produz tremor, eretismo e gengivoestomatite, não cólica com pontilhado basófilo e punho caído. O marcador citado é próprio do mercúrio, mas o quadro não é este.' },
    { t: 'Intoxicação por manganês; dosagem de manganês no sangue.', ok: false,
      why: 'Errada. O manganismo cursa com quadro extrapiramidal e alterações neuropsiquiátricas, não com o conjunto hematológico e a neuropatia motora descritos.' },
    { t: 'Intoxicação por benzeno; dosagem de ácido trans,trans-mucônico urinário.', ok: false,
      why: 'Errada. O benzeno produz mielotoxicidade com citopenias, sem cólica abdominal nem punho caído, e não gera pontilhado basófilo como marca típica.' },
    { t: 'Intoxicação por organofosforados; dosagem da atividade da colinesterase.', ok: false,
      why: 'Errada. Organofosforados causam síndrome colinérgica aguda — miose, sialorreia, broncorreia, fasciculações —, quadro incompatível com a apresentação descrita.' }
  ],
  comentario: 'A tríade cólica + anemia com pontilhado basófilo + neuropatia motora de extensores (punho caído) em atividade com baterias, tintas, solda ou reciclagem de metais deve ser lida como saturnismo até prova em contrário. Cada distrator traz um metal ou solvente com marcador biológico correto, mas quadro clínico incompatível.',
  pegadinha: 'Todos os marcadores citados existem e são corretos para os respectivos agentes. Quem decorou pares "agente–marcador" sem o quadro clínico erra.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.6-001', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa apresenta laudo afirmando que "a exposição está regular porque as concentrações medidas ficaram abaixo do limite de tolerância nacional". O médico do trabalho revisa o documento. Sobre limites de exposição ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Estar abaixo do limite legal não garante ausência de risco à saúde, pois os limites não protegem a totalidade dos trabalhadores e podem estar defasados em relação às referências técnicas atualizadas.', ok: true,
      why: 'Correta. Limites de exposição são valores de referência para a maioria dos trabalhadores em condições definidas; suscetibilidades individuais, exposições combinadas e defasagem normativa fazem com que "dentro do limite" não signifique "sem risco".' },
    { t: 'Os limites de tolerância nacionais e os valores-limite da ACGIH são numericamente equivalentes, por adoção direta.', ok: false,
      why: 'Errada. Há divergências relevantes entre os dois conjuntos, tanto em valores quanto em critérios e em periodicidade de revisão.' },
    { t: 'O valor de exposição de curta duração destina-se a jornadas inteiras de doze horas, substituindo a média ponderada.', ok: false,
      why: 'Errada. O valor de curta duração aplica-se a períodos curtos de exposição intensa e complementa a média ponderada — não a substitui nem se refere a jornada longa.' },
    { t: 'Para agentes com notação de absorção cutânea, a avaliação ambiental do ar é suficiente para caracterizar a exposição total.', ok: false,
      why: 'Errada. A notação de pele indica contribuição significativa da via cutânea; nesses casos a avaliação do ar subestima a exposição, e o monitoramento biológico ganha importância.' },
    { t: 'Para agentes reconhecidamente carcinogênicos sem limiar definido, existe concentração segura estabelecida abaixo da qual não há risco.', ok: false,
      why: 'Errada. Para carcinogênicos sem limiar a orientação é reduzir a exposição ao menor nível tecnicamente possível, e não presumir uma concentração segura.' }
  ],
  comentario: 'Este é um dos temas em que a banca gosta de cobrar postura profissional, não número. Os pontos-chave: limite não é fronteira entre seguro e inseguro; jornadas atípicas exigem ajuste; notação de pele muda a estratégia de avaliação; carcinogênico sem limiar não tem "nível seguro".',
  pegadinha: 'A afirmação de que os limites nacionais equivalem aos valores da ACGIH é falsa e muito repetida na prática — inclusive em laudos.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-15', 'NR-9'] },

{ id: 'q-2.9-001', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao interpretar o monitoramento biológico de trabalhadores expostos a um solvente, o médico do trabalho recebe resultados discrepantes entre dois trabalhadores com exposições ambientais semelhantes. Sobre monitoramento biológico em toxicologia ocupacional, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O momento da coleta é indiferente para a maioria dos indicadores biológicos, pois refletem a carga corporal acumulada independentemente da meia-vida do agente.', ok: true,
      why: 'É a alternativa INCORRETA, portanto a resposta. O momento da coleta — antes, durante ou ao fim da jornada, ou ao fim da semana — é definido pela cinética do agente e é determinante para a validade do resultado.' },
    { t: 'O monitoramento biológico integra as várias vias de absorção, o que o torna especialmente útil quando há absorção cutânea significativa.', ok: false,
      why: 'Verdadeira. É justamente a principal vantagem sobre a avaliação ambiental, que só mede a via respiratória.' },
    { t: 'Fatores individuais como uso de medicamentos, tabagismo, álcool e polimorfismos enzimáticos podem interferir no resultado.', ok: false,
      why: 'Verdadeira. Interferentes individuais e exposições extraocupacionais são causa frequente de discrepância entre trabalhadores com exposição ambiental semelhante.' },
    { t: 'Um resultado acima do valor de referência indica necessidade de investigar a exposição e as medidas de controle, e não necessariamente doença instalada.', ok: false,
      why: 'Verdadeira. O indicador é de exposição, não de efeito clínico; o achado dispara investigação e intervenção, não diagnóstico automático.' },
    { t: 'A escolha do indicador deve considerar sua especificidade para o agente, evitando marcadores inespecíficos quando houver alternativa validada.', ok: false,
      why: 'Verdadeira. Indicadores inespecíficos sofrem influência de outras fontes e devem ceder lugar a marcadores específicos quando disponíveis.' }
  ],
  comentario: 'O monitoramento biológico só funciona quando três coisas se alinham: indicador adequado, momento de coleta compatível com a cinética do agente e leitura à luz dos interferentes individuais. Resultado alterado significa investigar exposição — não fechar diagnóstico.',
  pegadinha: 'Enunciado de "assinale a INCORRETA" com quatro afirmações verdadeiras e bem escritas. A falsa é a única que despreza a cinética do agente.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs'] }

);
