/* Seção 2 — Higiene Ocupacional, Exposições e Toxicologia
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.1-001', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Em uma fundição, a avaliação identificou concentração de fumos metálicos acima do aceitável em um posto de rebarbação. A empresa propõe fornecer respiradores a todos os trabalhadores do setor e encerrar o assunto. Segundo a hierarquia de controles da higiene ocupacional, a crítica CORRETA a essa proposta é:',
  alts: [
    { t: 'O equipamento individual é o último degrau e só cabe se as demais medidas forem inviáveis.', ok: true,
      why: 'Correta. Eliminação, substituição, engenharia e administrativas vêm antes.' },
    { t: 'O equipamento individual é aceitável isoladamente se o fator de proteção cobrir a concentração medida.', ok: false,
      why: 'Errada. A hierarquia exige esgotar os degraus superiores primeiro.' },
    { t: 'A proposta é adequada, pois a proteção individual atua diretamente sobre a fonte geradora do agente.', ok: false,
      why: 'Errada. Atua no trabalhador, não na fonte.' },
    { t: 'A proposta é inadequada apenas por custo, já que o equipamento sai mais caro que a exaustão local.', ok: false,
      why: 'Errada. A inadequação é de hierarquia técnica, não de preço.' },
    { t: 'A hierarquia não se aplica a agentes químicos particulados, sendo específica dos agentes físicos.', ok: false,
      why: 'Errada. Aplica-se a todos os riscos ocupacionais.' }
  ],
  comentario: 'A hierarquia clássica é: eliminação → substituição → controles de engenharia → controles administrativos e de organização do trabalho → EPI. O EPI é último porque sua eficácia real depende de seleção, ensaio de vedação, treinamento e uso contínuo — variáveis que falham no mundo real.',
  pegadinha: 'A alternativa do fator de proteção mistura dois assuntos verdadeiros. Selecionar bem o respirador é obrigação, mas não transforma o EPI em medida de primeira linha.',
  refs: ['Higiene ocupacional — antecipação, reconhecimento, avaliação e controle', 'NR-6', 'NR-9'] },

{ id: 'q-2.2-001', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhadores de uma pedreira executam serviço a céu aberto em região de verão intenso. O médico do trabalho é chamado a orientar sobre sobrecarga térmica. Assinale a alternativa CORRETA sobre exposição ocupacional ao calor:',
  alts: [
    { t: 'Considera temperatura, umidade, radiação e velocidade do ar, junto à taxa metabólica.', ok: true,
      why: 'Correta. O índice combina o ambiente com o esforço exigido pela tarefa.' },
    { t: 'A aclimatização é permanente: adquirida, mantém-se mesmo após semanas afastado da exposição.', ok: false,
      why: 'Errada. Perde-se em poucos dias sem exposição.' },
    { t: 'A reposição hídrica deve ocorrer quando o trabalhador referir sede, sinal confiável de desidratação.', ok: false,
      why: 'Errada. A sede aparece tarde; a hidratação deve ser programada.' },
    { t: 'A intermação se caracteriza por pele fria e sudorese profusa, com nível de consciência preservado.', ok: false,
      why: 'Errada. Cursa com pele quente, anidrose e alteração da consciência.' },
    { t: 'A vestimenta impermeável reduz a sobrecarga térmica por bloquear a radiação solar direta no corpo.', ok: false,
      why: 'Errada. Impede a evaporação do suor e aumenta a sobrecarga.' }
  ],
  comentario: 'Três pontos concentram a maior parte das questões de calor: o índice combina variáveis ambientais e é lido junto à taxa metabólica; a aclimatização é reversível; e a intermação é a forma grave, com comprometimento neurológico, distinta da exaustão pelo calor.',
  pegadinha: 'A troca entre exaustão pelo calor e intermação é a inversão preferida da banca. Consciência alterada e disfunção neurológica indicam a forma grave.',
  refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

{ id: 'q-2.3-001', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de reforma de baterias, 42 anos, apresenta cólica abdominal recorrente, anemia, astenia e queixa recente de fraqueza para extensão do punho direito. O hemograma mostra anemia com pontilhado basófilo em hemácias. A hipótese diagnóstica e o marcador de exposição mais adequados são:',
  alts: [
    { t: 'Intoxicação por chumbo, com dosagem sanguínea como indicador de exposição.', ok: true,
      why: 'Correta. É o indicador biológico de exposição consagrado para o chumbo.' },
    { t: 'Intoxicação por mercúrio metálico, monitorada por dosagem de mercúrio na urina do trabalhador.', ok: false,
      why: 'Errada. O quadro e a atividade descritos apontam chumbo.' },
    { t: 'Intoxicação por manganês, monitorada por dosagem de manganês no sangue dos expostos ao agente.', ok: false,
      why: 'Errada. O manganismo tem quadro extrapiramidal, não o descrito.' },
    { t: 'Intoxicação por benzeno, monitorada por dosagem de ácido trans,trans-mucônico na urina.', ok: false,
      why: 'Errada. O benzeno cursa com alterações hematológicas.' },
    { t: 'Intoxicação por organofosforados, monitorada pela dosagem da atividade da colinesterase sérica.', ok: false,
      why: 'Errada. A síndrome colinérgica aguda é outro quadro.' }
  ],
  comentario: 'A tríade cólica + anemia com pontilhado basófilo + neuropatia motora de extensores (punho caído) em atividade com baterias, tintas, solda ou reciclagem de metais deve ser lida como saturnismo até prova em contrário. Cada distrator traz um metal ou solvente com marcador biológico correto, mas quadro clínico incompatível.',
  pegadinha: 'Todos os marcadores citados existem e são corretos para os respectivos agentes. Quem decorou pares "agente–marcador" sem o quadro clínico erra.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.6-001', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa apresenta laudo afirmando que "a exposição está regular porque as concentrações medidas ficaram abaixo do limite de tolerância nacional". O médico do trabalho revisa o documento. Sobre limites de exposição ocupacional, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Estar abaixo do limite legal não garante ausência de risco à saúde do trabalhador.', ok: true,
      why: 'Correta. Os limites não protegem todos e podem estar defasados.' },
    { t: 'Os limites nacionais e os valores de referência internacionais são numericamente equivalentes por adoção.', ok: false,
      why: 'Errada. Divergem por critérios e datas de revisão distintas.' },
    { t: 'O valor de curta duração se destina a jornadas de doze horas, substituindo a média ponderada usual.', ok: false,
      why: 'Errada. Aplica-se a períodos breves de exposição intensa.' },
    { t: 'Para agentes com notação de pele, a avaliação do ar é suficiente para caracterizar a exposição total.', ok: false,
      why: 'Errada. Não capta a absorção pela via cutânea.' },
    { t: 'Para carcinogênicos sem limiar definido, existe concentração segura estabelecida abaixo do risco.', ok: false,
      why: 'Errada. Justamente para eles não se assume limiar seguro.' }
  ],
  comentario: 'Este é um dos temas em que a banca gosta de cobrar postura profissional, não número. Os pontos-chave: limite não é fronteira entre seguro e inseguro; jornadas atípicas exigem ajuste; notação de pele muda a estratégia de avaliação; carcinogênico sem limiar não tem "nível seguro".',
  pegadinha: 'A afirmação de que os limites nacionais equivalem aos valores da ACGIH é falsa e muito repetida na prática — inclusive em laudos.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-15', 'NR-9'] },

{ id: 'q-2.9-001', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao interpretar o monitoramento biológico de trabalhadores expostos a um solvente, o médico do trabalho recebe resultados discrepantes entre dois trabalhadores com exposições ambientais semelhantes. Sobre monitoramento biológico em toxicologia ocupacional, assinale a alternativa INCORRETA:',
  alts: [
    { t: 'O momento da coleta é indiferente para a maioria dos indicadores biológicos usados.', ok: true,
      why: 'É a INCORRETA. O momento depende da meia-vida do agente e do indicador.' },
    { t: 'O monitoramento integra as várias vias de absorção, sendo útil quando há absorção cutânea significativa.', ok: false,
      why: 'Correta, portanto não é a resposta. É sua principal vantagem sobre o ambiental.' },
    { t: 'Medicamentos, tabagismo, álcool e polimorfismos enzimáticos podem interferir no resultado obtido.', ok: false,
      why: 'Correta, portanto não é a resposta. São fatores de interferência conhecidos.' },
    { t: 'Resultado acima da referência indica investigar exposição e controles, e não doença já instalada.', ok: false,
      why: 'Correta, portanto não é a resposta. O indicador sinaliza absorção, não doença.' },
    { t: 'A escolha do indicador deve considerar sua especificidade, evitando marcadores inespecíficos.', ok: false,
      why: 'Correta, portanto não é a resposta. Especificidade orienta a escolha.' }
  ],
  comentario: 'O monitoramento biológico só funciona quando três coisas se alinham: indicador adequado, momento de coleta compatível com a cinética do agente e leitura à luz dos interferentes individuais. Resultado alterado significa investigar exposição — não fechar diagnóstico.',
  pegadinha: 'Enunciado de "assinale a INCORRETA" com quatro afirmações verdadeiras e bem escritas. A falsa é a única que despreza a cinética do agente.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'ACGIH — BEIs'] }

);
