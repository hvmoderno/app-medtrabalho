/* Lote E — 2.1, 2.5, 2.7, 2.8, 3.1. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.1-039', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma fundição instala sistema de ventilação local exaustora em um posto de trabalho. Seis meses depois, os trabalhadores relatam que o sistema "não puxa como antes". Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'Sistemas perdem eficiência por obstrução, desgaste e saturação, exigindo verificação periódica.', ok: true,
      why: 'Correta. Controle implantado não é sinônimo de controle eficaz.' },
    { t: 'Uma vez dimensionado corretamente no projeto, o sistema mantém seu desempenho indefinidamente.', ok: false,
      why: 'Errada. Obstrução, desgaste e saturação reduzem o desempenho com o tempo.' },
    { t: 'Sistemas perdem eficiência, sendo a percepção dos trabalhadores subjetiva e sem valor na verificação.', ok: false,
      why: 'Errada. Costuma apontar falhas antes da medição programada.' },
    { t: 'Sistemas perdem eficiência, exigindo verificação apenas quando surgir caso de doença ocupacional.', ok: false,
      why: 'Errada. A verificação é periódica e preventiva.' },
    { t: 'Sistemas perdem eficiência com o tempo, sendo a ventilação local exaustora proteção individual.', ok: false,
      why: 'Errada. É medida de proteção coletiva, de controle na fonte.' }
  ],
  comentario: 'Ventilação local exaustora capta o contaminante na fonte, antes que ele atinja a zona respiratória — mas só enquanto funciona. Manutenção e verificação periódica de desempenho são parte da medida, não acessório.',
  pegadinha: 'Descartar a percepção do trabalhador elimina o primeiro sinal de falha do sistema.',
  refs: ['NR-9', 'Higiene ocupacional — antecipação, reconhecimento, avaliação e controle'] },

{ id: 'q-2.1-040', tema: '2.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as etapas da higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A antecipação atua na concepção, antes de o risco existir, com maior potencial e menor custo.', ok: true,
      why: 'Correta. Reconhecimento, avaliação e controle lidam com riscos já instalados.' },
    { t: 'A antecipação e o reconhecimento são etapas equivalentes, aplicadas ao mesmo momento do processo.', ok: false,
      why: 'Errada. Uma antecede a existência do risco; a outra identifica o que já existe.' },
    { t: 'A antecipação atua na concepção, sendo obrigatória a avaliação quantitativa antes de qualquer controle.', ok: false,
      why: 'Errada. Riscos evidentes admitem controle imediato, sem esperar quantificação.' },
    { t: 'A antecipação atua na concepção, sendo o controle sempre a última etapa, após avaliação completa.', ok: false,
      why: 'Errada. Medidas evidentes devem ser adotadas antes de concluir a avaliação.' },
    { t: 'A antecipação atua na concepção, sendo atribuição exclusiva do engenheiro, sem o médico.', ok: false,
      why: 'Errada. A contribuição do médico do trabalho é prevista e relevante nessa fase.' }
  ],
  comentario: 'Antecipação → reconhecimento → avaliação → controle. A primeira é a mais poderosa e a menos usada: mudar o projeto antes de existir a exposição. Depois disso, tudo é remediação.',
  pegadinha: 'Exigir quantificação antes de qualquer controle atrasa medidas óbvias e é usado para postergar investimento.',
  refs: ['Higiene ocupacional — ABHO', 'NR-9'] },

{ id: 'q-2.5-040', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a periodicidade da reavaliação das exposições ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Decorre de periodicidade e também de eventos, sendo o gatilho mais importante que o calendário.', ok: true,
      why: 'Correta. Mudança de processo, layout, organização ou doença ocupacional dispara a revisão.' },
    { t: 'Decorre exclusivamente da periodicidade anual definida, independentemente das mudanças ocorridas.', ok: false,
      why: 'Errada. Há gatilhos por evento que antecipam a revisão.' },
    { t: 'Decorre de periodicidade e eventos, não justificando a mudança de layout reavaliação da exposição.', ok: false,
      why: 'Errada. Altera dispersão, distâncias e a exposição de quem está próximo.' },
    { t: 'Decorre de periodicidade e eventos, sem que a doença ocupacional exija revisão da avaliação.', ok: false,
      why: 'Errada. É um dos gatilhos mais relevantes de revisão.' },
    { t: 'Decorre de periodicidade e eventos, sendo dispensável se os resultados anteriores foram baixos.', ok: false,
      why: 'Errada. O resultado anterior não garante a manutenção da condição.' }
  ],
  comentario: 'Calendário é o piso; evento é o gatilho real. Mudou processo, produto, layout ou organização do trabalho — reavalie. Apareceu doença ocupacional — reavalie, porque o controle falhou.',
  pegadinha: 'Amarrar a reavaliação exclusivamente ao calendário deixa a empresa com laudo que descreve um processo que já não existe.',
  refs: ['NR-9', 'NR-1', 'Jahn, Bullock & Ignacio — ABHO'] },

{ id: 'q-2.7-040', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um perito compara dois laudos de ruído da mesma empresa, com resultados divergentes, feitos por profissionais distintos. Sobre as possíveis causas, é CORRETO afirmar:',
  alts: [
    { t: 'Podem decorrer de critério, posicionamento, duração, tarefas incluídas e calibração.', ok: true,
      why: 'Correta. Por isso a descrição da metodologia é elemento essencial de qualquer laudo.' },
    { t: 'Podem decorrer de vários fatores, indicando a divergência entre laudos fraude em um deles.', ok: false,
      why: 'Errada. Diferenças metodológicas explicam a maior parte das divergências.' },
    { t: 'Podem decorrer de fatores metodológicos, prevalecendo automaticamente o laudo mais recente.', ok: false,
      why: 'Errada. Prevalece o metodologicamente melhor fundamentado, não o mais novo.' },
    { t: 'Podem decorrer de critério e posicionamento, sem que a calibração influencie o resultado obtido.', ok: false,
      why: 'Errada. Instrumento descalibrado compromete todo o conjunto de medições.' },
    { t: 'Podem decorrer de fatores metodológicos, valendo igualmente o laudo sem descrição de metodologia.', ok: false,
      why: 'Errada. Sem metodologia descrita, o resultado não é verificável.' }
  ],
  comentario: 'Dois laudos divergentes não significam fraude: significam metodologias diferentes. Por isso a descrição do método — critério, posicionamento, duração, tarefas cobertas, calibração — é o que dá valor probatório ao documento.',
  pegadinha: 'A regra de que "o mais recente prevalece" é atalho administrativo sem base técnica.',
  refs: ['NHO 01 — Fundacentro', 'NR-15'] },

{ id: 'q-2.8-040', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa fornece respiradores purificadores de ar em setor onde há também deficiência intermitente de oxigênio por uso de gás inerte em processo de purga. Sobre a adequação, é CORRETO afirmar:',
  alts: [
    { t: 'A possibilidade de deficiência de oxigênio exige adução de ar e monitoramento contínuo.', ok: true,
      why: 'Correta. Purificador de ar não gera oxigênio e é inadequado nessa condição.' },
    { t: 'O purificador de ar é adequado quando a deficiência de oxigênio é intermitente e de curta duração.', ok: false,
      why: 'Errada. O purificador não supre oxigênio em nenhuma circunstância.' },
    { t: 'Basta treinar os trabalhadores a deixar o setor assim que perceberem falta de ar durante a tarefa.', ok: false,
      why: 'Errada. A hipóxia por gás inerte não dá aviso; a perda de consciência é súbita.' },
    { t: 'A adução de ar é necessária, dispensando o equipamento respiratório o monitoramento da atmosfera.', ok: false,
      why: 'Errada. O monitoramento é exigência independente do equipamento usado.' },
    { t: 'A adução de ar é necessária, não representando os gases inertes risco por não serem tóxicos.', ok: false,
      why: 'Errada. Deslocam o oxigênio e matam por asfixia, sem toxicidade própria.' }
  ],
  comentario: 'Gás inerte é asfixiante simples e não avisa. Onde há possibilidade de deficiência de oxigênio, purificador de ar está fora de questão — a proteção é adução de ar somada a monitoramento contínuo da atmosfera.',
  pegadinha: 'Confiar na percepção do trabalhador para sair do setor é a mesma ilusão que mata em espaço confinado.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-33', 'NR-6'] },

{ id: 'q-2.8-041', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a guarda, higienização e manutenção dos respiradores, é CORRETO afirmar:',
  alts: [
    { t: 'São componentes do programa, com procedimentos definidos, registro e inspeção antes de cada uso.', ok: true,
      why: 'Correta. Guarda protegida e higienização periódica sustentam o desempenho do equipamento.' },
    { t: 'São componentes do programa, podendo o respirador ser guardado no posto, no ambiente da tarefa.', ok: false,
      why: 'Errada. A guarda deve ser em local limpo e protegido da contaminação.' },
    { t: 'São componentes do programa, sendo a higienização responsabilidade exclusiva do próprio trabalhador.', ok: false,
      why: 'Errada. A empresa define procedimento, periodicidade e meios.' },
    { t: 'São componentes do programa, dispensando os equipamentos novos a inspeção antes do uso.', ok: false,
      why: 'Errada. A inspeção antes de cada uso se aplica a qualquer equipamento.' },
    { t: 'São componentes do programa, sendo aceitável compartilhar respiradores com higienização semanal.', ok: false,
      why: 'Errada. O respirador é individual, e o ensaio de vedação é por usuário.' }
  ],
  comentario: 'O programa não termina na entrega: guarda protegida, higienização com procedimento e periodicidade, manutenção de componentes e inspeção pelo usuário antes de cada uso. E o respirador é individual — o ensaio de vedação também é.',
  pegadinha: 'Guardar o respirador no posto parece prático e contamina exatamente a face que toca o rosto.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

{ id: 'q-3.1-039', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao avaliar uma atividade de levantamento manual de cargas, o ergonomista observa que a carga é levantada do chão, com torção de tronco e a 40 vezes por hora. Sobre a análise, é CORRETO afirmar:',
  alts: [
    { t: 'O risco não é só o peso: altura, distância, torção, frequência, duração e qualidade da pega o compõem', ok: true,
      why: 'Correta. A torção associada à alta frequência agrava substancialmente a carga.' },
    { t: 'O peso da carga define o risco, não havendo o que considerar quando está abaixo do recomendado.', ok: false,
      why: 'Errada. Altura, distância, torção e frequência compõem o risco mesmo com peso baixo.' },
    { t: 'O risco combina vários fatores, sendo a torção de tronco irrelevante quando a carga é leve.', ok: false,
      why: 'Errada. A torção repetida gera carga significativa mesmo com peso reduzido.' },
    { t: 'O risco combina peso, altura e distância, sem que a frequência de levantamento integre a avaliação.', ok: false,
      why: 'Errada. É determinante da carga acumulada ao longo da jornada.' },
    { t: 'O risco combina vários fatores, sem que a qualidade da pega influencie o esforço necessário.', ok: false,
      why: 'Errada. Pega ruim aumenta a força de preensão e a carga sobre a coluna.' }
  ],
  comentario: 'Levantamento de carga não se avalia pelo peso: altura de origem e destino, distância ao corpo, torção, frequência, duração e pega entram todos na conta. Carga leve mal levantada, muitas vezes por hora, adoece.',
  pegadinha: 'A pergunta "quantos quilos pode levantar?" é a formulação errada — e é a que a empresa sempre faz.',
  refs: ['Equação do NIOSH', 'Couto — Ergonomia', 'NR-17'] },

{ id: 'q-3.1-040', tema: '3.1', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o mobiliário do posto de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A regulagem deve cobrir a variabilidade antropométrica, e fornecer o mobiliário não basta.', ok: true,
      why: 'Correta. É preciso orientar sobre o ajuste e verificar se ele é usado.' },
    { t: 'A regulagem cobre a variabilidade, dispensando o mobiliário regulável orientação ao trabalhador.', ok: false,
      why: 'Errada. Sem orientação, o ajuste não é feito e o recurso se perde.' },
    { t: 'Um único dimensionamento bem escolhido serve adequadamente a toda a população trabalhadora.', ok: false,
      why: 'Errada. A variabilidade antropométrica exige faixas de regulagem.' },
    { t: 'A regulagem deve cobrir a variabilidade, sendo o apoio para os pés acessório sempre dispensável.', ok: false,
      why: 'Errada. É necessário quando a altura da superfície não permite apoio plantar.' },
    { t: 'A regulagem deve cobrir a variabilidade, independendo a altura da superfície do tipo de tarefa.', ok: false,
      why: 'Errada. Tarefas de precisão, leves e pesadas exigem alturas distintas.' }
  ],
  comentario: 'Regulável e não ajustado é o mesmo que fixo na posição errada. E a altura da superfície depende da tarefa: precisão pede mais alto, esforço pede mais baixo, tomando o cotovelo como referência.',
  pegadinha: 'Fornecer mobiliário regulável e não orientar o ajuste é o cumprimento formal que não produz nenhum efeito.',
  refs: ['NR-17', 'Couto — Ergonomia'] }

);
