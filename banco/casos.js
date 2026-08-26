/* =============================================================================
   CASOS.JS — Casos clínicos para a prova teórico-prática (item 9.7 do edital).
   5 casos por simulado, 5 questões encadeadas por caso, 5 alternativas por questão.
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md.
   Nenhum texto cita alternativa por letra: o app reposiciona as alternativas.
   ========================================================================== */
/* Casos clínicos para a prova teórico-prática. AUTORAIS. */
window.CASOS = window.CASOS || [];
window.CASOS.push(

/* ===================== SIMULADO 1 — casos 001 a 005 ====================== */

{ id: 'caso-001',
  titulo: 'Amputação em prensa excêntrica',
  temas: ['5.1', '6.4', '7.2', '1.8'],
  nivel: 'dificil',
  vinheta: 'Operador de prensa excêntrica, 34 anos, seis anos na função, em indústria metalúrgica de médio porte. Durante o turno da noite, ao tentar desalojar uma peça travada na matriz, introduziu a mão direita na zona de prensagem com a máquina energizada. O dispositivo de comando bimanual havia sido burlado com fita adesiva por decisão informal da equipe, para acelerar a produção; a máquina não possuía proteção fixa nem dispositivo de parada de emergência acessível. Houve amputação traumática do terceiro e do quarto quirodáctilos da mão dominante, ao nível das falanges proximais. O trabalhador foi levado ao ambulatório da empresa consciente, corado, com sangramento ativo controlável por compressão; os segmentos amputados foram recolhidos do piso pelos colegas. O médico do trabalho está de plantão. A empresa comunica que não pretende emitir documento algum, sustentando que houve "culpa exclusiva do empregado, que descumpriu procedimento". O trabalhador foi encaminhado a hospital com serviço de cirurgia da mão; a tentativa de reimplante fracassou e realizou-se regularização dos cotos, com afastamento previsto de vários meses.',
  questoes: [
    { enunciado: 'Ainda no ambulatório da empresa, sobre o atendimento inicial e o transporte dos segmentos amputados, a conduta CORRETA é:',
      alts: [
        { t: 'Comprimir e elevar, e acondicionar os segmentos em compressa umedecida dentro de saco plástico fechado, esse saco em gelo e água, sem contato direto com o gelo.', ok: true,
          why: 'Correta. O contato direto com o gelo congela o tecido e inviabiliza o reimplante; a barreira plástica é o que preserva o segmento.' },
        { t: 'Aplicar torniquete de rotina no antebraço e mergulhar os segmentos amputados diretamente em água gelada com gelo, para melhor conservação durante o transporte.', ok: false,
          why: 'Errada. O torniquete de rotina é dispensável quando a compressão controla o sangramento, e o contato direto com o gelo lesa o tecido.' },
        { t: 'Lavar os segmentos com solução antisséptica alcoólica, secá-los cuidadosamente e envolvê-los em gaze seca à temperatura ambiente até a chegada ao serviço.', ok: false,
          why: 'Errada. O álcool fixa e lesa o tecido, e a gaze seca à temperatura ambiente acelera a isquemia.' },
        { t: 'Descartar os segmentos como resíduo biológico, pois a queda no piso da fábrica contamina o tecido e inviabiliza qualquer tentativa posterior de reimplante.', ok: false,
          why: 'Errada. A contaminação não contraindica o encaminhamento; a decisão sobre reimplante é do serviço especializado.' },
        { t: 'Congelar os segmentos em freezer ou em gelo seco, de modo a reduzir ao máximo o metabolismo tecidual durante o tempo de transporte até o hospital.', ok: false,
          why: 'Errada. O congelamento destrói o tecido; o objetivo é resfriar sem congelar.' }
      ],
      comentario: 'A conduta pré-hospitalar em amputação traumática tem dois eixos: estabilizar o acidentado (compressão direta, elevação, analgesia, avaliação de outras lesões) e conservar o segmento de forma a preservar a chance de reimplante — úmido, isolado em invólucro fechado e resfriado indiretamente.',
      pegadinha: 'Duas armadilhas clássicas: torniquete como medida automática e contato direto do coto amputado com gelo ou água.',
      refs: ['Suporte básico ao trauma', 'Protocolos de atendimento inicial ao acidentado no trabalho'] },

    { enunciado: 'Quanto à comunicação do acidente à Previdência, diante da recusa manifestada pela empresa, a orientação tecnicamente CORRETA é:',
      alts: [
        { t: 'É obrigatória e independe de culpa; na omissão da empresa podem emiti-la o acidentado, dependentes, sindicato, médico ou autoridade.', ok: true,
          why: 'Correta. A legitimidade concorrente existe justamente para vencer a recusa da empresa, e a omissão não retira o direito do trabalhador.' },
        { t: 'A comunicação fica suspensa até o encerramento da investigação interna, pois emiti-la antes de definida a causa equivale a reconhecer a responsabilidade da empresa.', ok: false,
          why: 'Errada. A comunicação registra o evento e não implica assunção de culpa.' },
        { t: 'Comprovada a burla do dispositivo de segurança pelo trabalhador, o evento deixa de ser acidente do trabalho e a comunicação passa a ser indevida no caso.', ok: false,
          why: 'Errada. A culpa do trabalhador não descaracteriza o acidente do trabalho.' },
        { t: 'A comunicação só é devida quando o afastamento ultrapassa quinze dias, momento em que passa a existir benefício previdenciário a ser efetivamente concedido.', ok: false,
          why: 'Errada. A obrigação independe de haver afastamento ou benefício.' },
        { t: 'Basta o registro do atendimento no prontuário do ambulatório e a informação ao setor de recursos humanos, ficando dispensada a comunicação formal ao órgão.', ok: false,
          why: 'Errada. Registro interno não substitui a comunicação legal.' }
      ],
      comentario: 'A comunicação do acidente do trabalho é dever da empresa, independe de afastamento, de culpa e do resultado da investigação. A existência de legitimados subsidiários é a resposta do ordenamento à subnotificação.',
      pegadinha: 'A tese de "culpa exclusiva do empregado" costuma ser oferecida como se descaracterizasse o acidente — não descaracteriza.',
      refs: ['Lei nº 8.213/1991 — arts. 19 a 23', 'Cabral — Abre a CAT?'] },

    { enunciado: 'Na investigação do acidente conduzida pelo serviço de segurança e saúde da empresa, a abordagem tecnicamente adequada é:',
      alts: [
        { t: 'Buscar as causas organizacionais e técnicas que tornaram o ato possível: ausência de proteção fixa e de bloqueio, pressão por produção e tolerância gerencial à burla.', ok: true,
          why: 'Correta. Encerrar a análise no comportamento do operador impede corrigir o que produziu o evento.' },
        { t: 'Concluir por ato inseguro do trabalhador, aplicar advertência disciplinar e reforçar o treinamento do procedimento operacional como medida corretiva principal.', ok: false,
          why: 'Errada. É onde a investigação deve continuar; punir encerra o aprendizado e induz subnotificação.' },
        { t: 'Restringir a análise à conformidade documental do programa de gerenciamento de riscos, pois investigar causas cabe à auditoria fiscal do trabalho, e não à empresa.', ok: false,
          why: 'Errada. A investigação interna é obrigação da empresa e não se confunde com fiscalização.' },
        { t: 'Considerar o evento imprevisível e classificá-lo como fatalidade, uma vez que a máquina operava dentro do seu ciclo normal de produção no momento do acidente.', ok: false,
          why: 'Errada. Zona de prensagem sem proteção é risco previsível e conhecido.' },
        { t: 'Adiar a análise até a alta médica do acidentado, para que ele possa participar pessoalmente da reconstituição detalhada do evento junto com a equipe técnica.', ok: false,
          why: 'Errada. O tempo degrada as evidências; a investigação é imediata.' }
      ],
      comentario: 'Investigar acidente é identificar as barreiras que faltaram. A análise que termina em "ato inseguro" produz punição, não prevenção. A resposta correta segue a hierarquia de controles: eliminar o risco na fonte, proteger a máquina e bloquear energia antes de intervenções.',
      pegadinha: 'Treinamento e advertência aparecem como respostas "responsáveis", mas são controles de eficácia baixa e não corrigem a máquina desprotegida.',
      refs: ['NR de segurança em máquinas e equipamentos', 'Investigação e análise de acidentes do trabalho'] },

    { enunciado: 'Sobre as repercussões previdenciárias e trabalhistas do afastamento, é CORRETO afirmar que:',
      alts: [
        { t: 'A empresa paga os quinze primeiros dias e depois vem benefício acidentário, com fundo de garantia mantido e estabilidade de doze meses após a cessação.', ok: true,
          why: 'Correta. São os três efeitos próprios da espécie acidentária: quinze dias da empresa, fundo mantido e estabilidade contada da alta.' },
        { t: 'Por se tratar de acidente com culpa do empregado, o benefício será concedido em espécie previdenciária comum, sem qualquer repercussão de natureza acidentária.', ok: false,
          why: 'Errada. A culpa do trabalhador não altera a espécie do benefício.' },
        { t: 'A estabilidade provisória de doze meses se conta a partir da data em que ocorreu o acidente, e não da data de cessação do benefício previdenciário concedido.', ok: false,
          why: 'Errada. O marco inicial é a cessação do benefício.' },
        { t: 'A concessão de benefício acidentário exige carência mínima de contribuições, que não estará cumprida se o vínculo do trabalhador for recente naquela empresa.', ok: false,
          why: 'Errada. O benefício acidentário independe de carência.' },
        { t: 'Reconhecida a amputação, o trabalhador deve ser encaminhado diretamente à aposentadoria por incapacidade permanente, dada a irreversibilidade da perda anatômica.', ok: false,
          why: 'Errada. A perda anatômica não define incapacidade; cabe avaliar reabilitação.' }
      ],
      comentario: 'Encadeie sempre: quinze primeiros dias pela empresa, benefício por incapacidade temporária de natureza acidentária a partir do décimo sexto dia, recolhimento do fundo de garantia durante o afastamento acidentário e garantia de emprego de doze meses contada da cessação do benefício. Acidente do trabalho não exige carência.',
      pegadinha: 'Contar a estabilidade da data do acidente, e não da cessação do benefício, é o erro mais frequente.',
      refs: ['Lei nº 8.213/1991 — arts. 59 e seguintes, art. 118', 'CLT e legislação do FGTS'] },

    { enunciado: 'Considerando que se trata de acidente do trabalho grave, com mutilação, a conduta CORRETA em relação à vigilância e à prevenção é:',
      alts: [
        { t: 'Notificar o agravo ao sistema de agravos e comunicar à Previdência, priorizando a proteção da zona de prensagem e o bloqueio de energia antes de intervir na matriz.', ok: true,
          why: 'Correta. Os dois registros são devidos, e a medida prioritária é de engenharia, não comportamental.' },
        { t: 'A comunicação do acidente à Previdência substitui a notificação em saúde, pois ambas alimentam a mesma base nacional de dados sobre acidentes de trabalho.', ok: false,
          why: 'Errada. São sistemas distintos, com finalidades próprias, e ambos devidos.' },
        { t: 'A notificação em saúde só é devida em acidente com óbito, não sendo exigível nos casos de amputação sem risco imediato de morte para o trabalhador atingido.', ok: false,
          why: 'Errada. Acidente grave, com mutilação, é de notificação compulsória.' },
        { t: 'A prioridade preventiva é substituir o comando bimanual por sensores de presença associados a campanha comportamental de uso correto dos equipamentos individuais.', ok: false,
          why: 'Errada. A proteção da zona de perigo e o bloqueio de energia vêm antes.' },
        { t: 'Basta atualizar o inventário de riscos com a inclusão do risco mecânico já materializado, aguardando o próximo ciclo de revisão do programa para propor medidas.', ok: false,
          why: 'Errada. Risco grave exige medida imediata, não o próximo ciclo.' }
      ],
      comentario: 'Acidente grave dispara dois fluxos paralelos: comunicação previdenciária e notificação em saúde para a vigilância. Do lado preventivo, a resposta é de engenharia — proteção da zona de perigo e bloqueio de energia — e não campanha ou equipamento individual.',
      pegadinha: 'Tratar comunicação previdenciária e notificação em saúde como sinônimos é a confusão que a questão persegue.',
      refs: ['Portaria de notificação compulsória — agravos relacionados ao trabalho', 'NR de segurança em máquinas e equipamentos'] }
  ] },

{ id: 'caso-002',
  titulo: 'Acidente de trajeto de motociclista',
  temas: ['5.1', '7.2', '7.1', '5.5'],
  nivel: 'dificil',
  vinheta: 'Auxiliar administrativo, 27 anos, empregada de empresa de serviços, desloca-se diariamente de motocicleta própria entre a residência e o local de trabalho. Em uma segunda-feira, ao sair de casa no horário habitual, parou por cerca de dez minutos em uma padaria no mesmo itinerário para tomar café e, ao retomar o percurso na mesma via, foi fechada por um automóvel e sofreu queda, com fratura exposta de tíbia e fíbula à direita. Foi socorrida por terceiros e submetida a osteossíntese, com previsão de afastamento de cerca de quatro meses. A empresa procura o médico do trabalho com três argumentos para não emitir a comunicação: o acidente ocorreu fora do horário e das dependências da empresa; a trabalhadora usava veículo próprio, não fornecido pela empresa; e houve interrupção do trajeto para finalidade pessoal, o que romperia o percurso protegido. A trabalhadora tem dois anos de vínculo e nunca se afastou antes. Não há testemunhas da empresa, apenas boletim de ocorrência e prontuário hospitalar.',
  questoes: [
    { enunciado: 'Sobre a caracterização do evento, a análise CORRETA é:',
      alts: [
        { t: 'É acidente equiparado: ocorreu no percurso, sendo irrelevante o meio de transporte, e a parada breve no mesmo itinerário não rompe a proteção legal.', ok: true,
          why: 'Correta. Nem a propriedade do veículo nem a parada breve no trajeto descaracterizam a equiparação.' },
        { t: 'Não se caracteriza acidente do trabalho porque a trabalhadora utilizava veículo próprio, hipótese em que a proteção só alcança o transporte fornecido pela empresa.', ok: false,
          why: 'Errada. O percurso é protegido qualquer que seja o meio de locomoção.' },
        { t: 'A parada de dez minutos na padaria configura interrupção do percurso por interesse pessoal e afasta integralmente a equiparação legal prevista para o trajeto.', ok: false,
          why: 'Errada. Parada breve no mesmo itinerário não rompe a proteção.' },
        { t: 'Como o evento ocorreu antes do início da jornada contratual, trata-se de acidente comum, com repercussão exclusivamente previdenciária de natureza ordinária.', ok: false,
          why: 'Errada. O trajeto antes da jornada é justamente a hipótese protegida.' },
        { t: 'Somente haveria acidente do trabalho se a empresa exigisse o uso da motocicleta como instrumento de trabalho, o que o converteria em acidente do tipo típico.', ok: false,
          why: 'Errada. A equiparação do trajeto independe disso.' }
      ],
      comentario: 'O acidente de trajeto é equiparado por lei ao acidente do trabalho, qualquer que seja o meio de locomoção, inclusive veículo próprio. Desvios ou paradas breves e habituais no mesmo itinerário não rompem a proteção; rompe-a a interrupção substancial por motivo alheio ao deslocamento.',
      pegadinha: 'Três falsos requisitos são oferecidos ao mesmo tempo: transporte fornecido pela empresa, ocorrência dentro da jornada e percurso sem qualquer parada.',
      refs: ['Lei nº 8.213/1991 — art. 21, IV, d', 'Cabral — Abre a CAT?'] },

    { enunciado: 'Quanto ao documento de comunicação do acidente, a conduta CORRETA do médico do trabalho é:',
      alts: [
        { t: 'Orientar a emissão pela empresa como acidente de trajeto e esclarecer que, persistindo a recusa, outros legitimados podem emiti-la, sem afastar a responsabilidade da empresa.', ok: true,
          why: 'Correta. Trabalhadora, dependentes, sindicato, médico assistente e autoridade pública são legitimados concorrentes.' },
        { t: 'Emitir a comunicação na modalidade de reabertura, uma vez que já houve atendimento hospitalar prévio ao registro do evento junto à empresa empregadora dela.', ok: false,
          why: 'Errada. A reabertura se aplica a evento já comunicado antes.' },
        { t: 'Aguardar a conclusão do inquérito policial sobre a responsabilidade do condutor do automóvel antes de proceder a qualquer comunicação do evento ao órgão.', ok: false,
          why: 'Errada. A comunicação independe da apuração de responsabilidade.' },
        { t: 'Emitir a comunicação apenas ao final do período de afastamento, já com a informação consolidada a respeito do tempo total de incapacidade da trabalhadora.', ok: false,
          why: 'Errada. O prazo é até o primeiro dia útil seguinte ao evento.' },
        { t: 'Deixar a critério da trabalhadora, pois em acidente de trajeto a comunicação é facultativa e depende de manifestação expressa de interesse por parte do segurado.', ok: false,
          why: 'Errada. A comunicação é obrigatória, com ou sem manifestação dela.' }
      ],
      comentario: 'Distinga os tipos de comunicação: inicial, para o evento novo; reabertura, para reinício de tratamento ou agravamento de acidente já comunicado; e a de óbito. O prazo corre para a empresa, e a omissão sujeita a penalidade sem retirar a legitimidade dos demais.',
      pegadinha: 'Confundir "atendimento hospitalar prévio" com "acidente já comunicado" para justificar reabertura.',
      refs: ['Lei nº 8.213/1991 — art. 22', 'Decreto nº 3.048/1999'] },

    { enunciado: 'Sobre os efeitos do afastamento, considerando que ele deve superar quinze dias, é CORRETO afirmar que:',
      alts: [
        { t: 'Fará jus a benefício acidentário, com manutenção do fundo de garantia no afastamento e garantia de emprego de doze meses após a cessação do benefício.', ok: true,
          why: 'Correta. O acidente de trajeto é equiparado e produz os mesmos efeitos do típico.' },
        { t: 'Por não haver relação com a atividade desempenhada, o benefício será de espécie previdenciária comum, sem estabilidade nem manutenção dos depósitos do fundo.', ok: false,
          why: 'Errada. O trajeto é equiparado a acidente do trabalho.' },
        { t: 'A garantia de emprego só se aplica se a trabalhadora vier a receber também auxílio-acidente ao final do tratamento das lesões sofridas naquele evento.', ok: false,
          why: 'Errada. A estabilidade independe do auxílio-acidente.' },
        { t: 'Durante o afastamento o contrato de trabalho é extinto de pleno direito, sendo restabelecido apenas se houver alta pericial com conclusão de plena aptidão.', ok: false,
          why: 'Errada. O contrato fica suspenso, não extinto.' },
        { t: 'Cabe à empresa pagar integralmente a remuneração durante todo o período de afastamento, ressarcindo-se depois junto ao órgão previdenciário competente.', ok: false,
          why: 'Errada. A empresa paga os quinze primeiros dias; depois cabe à previdência.' }
      ],
      comentario: 'Acidente de trajeto é equiparado para todos os efeitos: espécie acidentária do benefício, recolhimento do fundo de garantia no afastamento e garantia de emprego de doze meses contada da cessação. A percepção de auxílio-acidente não é condição da estabilidade.',
      pegadinha: 'Amarrar a garantia de emprego à existência de sequela indenizável é uma inversão sutil e muito cobrada.',
      refs: ['Lei nº 8.213/1991 — art. 118', 'Súmula 378 do TST'] },

    { enunciado: 'Quatro meses depois, a trabalhadora retorna com consolidação da fratura, marcha sem auxílio, mas com limitação da dorsiflexão do tornozelo e dor ao permanecer longos períodos em pé. Sua função é administrativa, predominantemente sentada. A conduta CORRETA do médico do trabalho no exame de retorno é:',
      alts: [
        { t: 'Realizar o exame de retorno, considerá-la apta à função administrativa e registrar orientação de alternância postural com reavaliação programada.', ok: true,
          why: 'Correta. A restrição a permanência prolongada em pé é compatível com a função e comporta reavaliação.' },
        { t: 'Considerá-la inapta em definitivo, pois sequela osteoarticular de caráter permanente é incompatível com o retorno ao trabalho em qualquer função da empresa.', ok: false,
          why: 'Errada. A sequela é compatível com a função administrativa.' },
        { t: 'Dispensar o exame de retorno, pois a função é administrativa e não há exposição a risco ocupacional que justifique a realização daquela avaliação médica.', ok: false,
          why: 'Errada. O exame de retorno decorre do afastamento prolongado.' },
        { t: 'Encaminhá-la à reabilitação profissional para mudança de função, uma vez que a sequela impede o retorno à atividade que ela exercia antes do afastamento.', ok: false,
          why: 'Errada. Não há incompatibilidade com a função original.' },
        { t: 'Registrar no atestado de saúde ocupacional o diagnóstico e a descrição da sequela, para que a chefia imediata possa dimensionar adequadamente as tarefas dela.', ok: false,
          why: 'Errada. Comunica-se a restrição funcional; o diagnóstico é sigiloso.' }
      ],
      comentario: 'O exame de retorno após afastamento prolongado é obrigatório qualquer que seja a causa e a função. A conclusão é sempre relacional — esta pessoa, para esta função —, e a comunicação à empresa é feita em linguagem de restrição funcional, nunca de diagnóstico.',
      pegadinha: 'Escrever o diagnóstico no documento de aptidão parece transparência útil à gestão, mas quebra sigilo.',
      refs: ['NR-7 — exame de retorno ao trabalho', 'Código de Ética Médica', 'Lei nº 13.709/2018 (LGPD)'] },

    { enunciado: 'A empresa, diante do caso, decide agir sobre o risco de acidente de trajeto de seus empregados. A medida de maior consistência técnica é:',
      alts: [
        { t: 'Incluir o deslocamento na análise de riscos, com ação sobre horários e escalas, incentivo a modais mais seguros, manutenção da frota e direção defensiva.', ok: true,
          why: 'Correta. O trajeto é evento sobre o qual a empresa tem influência parcial, mas real.' },
        { t: 'Nada há a fazer em termos de prevenção, pois o acidente de trajeto ocorre em via pública, fora do alcance da gestão de segurança conduzida pela empresa.', ok: false,
          why: 'Errada. Horários, escalas e frota estão sob influência da empresa.' },
        { t: 'Exigir declaração de todos os empregados sobre o meio de transporte utilizado, condicionando a proteção acidentária ao uso efetivo do meio que foi declarado.', ok: false,
          why: 'Errada. A proteção legal não pode ser condicionada por ato da empresa.' },
        { t: 'Proibir o uso de motocicleta no deslocamento e advertir quem descumprir, medida que elimina de uma vez o principal fator de gravidade desses acidentes.', ok: false,
          why: 'Errada. Interfere na vida privada e não é medida legítima nem eficaz.' },
        { t: 'Contratar seguro de acidentes pessoais para todos, o que dispensa investimento em outras medidas por transferir integralmente o risco à companhia seguradora.', ok: false,
          why: 'Errada. Seguro indeniza; não previne o acidente.' }
      ],
      comentario: 'Prevenção de acidente de trajeto é tema de gestão organizacional: jornada e escalas, pressão por pontualidade, condições dos veículos utilizados a serviço, educação para o trânsito e alternativas de deslocamento. Transferir risco a seguro não é prevenir.',
      pegadinha: 'A resposta derrotista ("é via pública, não há o que fazer") é apresentada com aparência de realismo técnico.',
      refs: ['Gestão de riscos ocupacionais', 'Programas de segurança viária corporativa'] }
  ] },

{ id: 'caso-003',
  titulo: 'Acidente com material biológico em unidade de emergência',
  temas: ['2.4', '4.9', '1.9', '5.1'],
  nivel: 'dificil',
  vinheta: 'Técnica de enfermagem, 31 anos, atua há quatro anos em unidade de emergência de hospital público. Ao final de um plantão noturno, ao reencapar uma agulha após punção venosa, sofreu perfuração profunda no polegar esquerdo com agulha de grosso calibre visivelmente contendo sangue. O paciente-fonte é homem de 44 anos, internado por pneumonia, com história de uso de drogas injetáveis e sem sorologias conhecidas. A trabalhadora lavou o local com água e sabão e procurou o serviço de saúde ocupacional cerca de uma hora após o acidente. Refere esquema vacinal completo para hepatite B na admissão, há quatro anos, mas nunca realizou dosagem de anticorpos após a vacinação e não localiza o cartão. Não usa medicação contínua, nega gestação e refere ciclo menstrual regular. Ao exame, ferimento puntiforme no polegar, sem sinais flogísticos. O hospital dispõe de teste rápido para o paciente-fonte e para a acidentada, e de medicação para profilaxia pós-exposição em farmácia própria.',
  questoes: [
    { enunciado: 'Sobre a avaliação inicial do risco e a conduta imediata, é CORRETO afirmar que:',
      alts: [
        { t: 'Trata-se de exposição percutânea de alto risco pelo tipo de dispositivo, profundidade e presença de sangue visível, devendo-se colher testes rápidos do paciente-fonte e da acidentada e decidir a profilaxia sem aguardar sorologias convencionais.', ok: true,
          why: 'Correta. Agulha de grosso calibre com lúmen, lesão profunda e sangue visível caracterizam exposição de maior risco; a decisão sobre profilaxia é urgente e se apoia em teste rápido, não em sorologia convencional.' },
        { t: 'Deve-se aguardar o resultado das sorologias convencionais do paciente-fonte antes de qualquer decisão sobre profilaxia, para não expor a trabalhadora a medicação desnecessária.', ok: false,
          why: 'Errada. A janela de eficácia da profilaxia é curta; aguardar sorologia convencional é o erro clássico que inviabiliza a prevenção.' },
        { t: 'A lavagem com água e sabão foi inadequada; o correto seria espremer o ferimento e aplicar solução cáustica ou hipoclorito para inativar o vírus no sítio da lesão.', ok: false,
          why: 'Errada. Espremer e usar cáusticos aumentam a lesão tecidual e não reduzem o risco; a lavagem com água e sabão é a conduta correta.' },
        { t: 'A exposição é de baixo risco porque o paciente-fonte estava internado por pneumonia, sem diagnóstico de infecção transmissível por via sanguínea.', ok: false,
          why: 'Errada. A ausência de diagnóstico não é ausência de infecção; a história de uso de drogas injetáveis e o desconhecimento sorológico reforçam a necessidade de investigação imediata.' },
        { t: 'Como se passou mais de meia hora do acidente, a profilaxia pós-exposição perdeu completamente a indicação.', ok: false,
          why: 'Errada. Idealmente iniciada nas primeiras horas, a profilaxia mantém indicação dentro do prazo recomendado após a exposição; uma hora está bem dentro dessa janela.' }
      ],
      comentario: 'Na exposição a material biológico, os determinantes de risco são o tipo de exposição (percutânea, mucosa, pele não íntegra), o dispositivo (agulha com lúmen e sangue visível), a profundidade e o estado do paciente-fonte. A decisão é clínica e urgente, apoiada em teste rápido.',
      pegadinha: 'Duas condutas erradas com aparência de zelo: aguardar sorologia convencional e agredir o ferimento com cáusticos.',
      refs: ['Protocolo do Ministério da Saúde para exposição a material biológico', 'NR de segurança em serviços de saúde'] },

    { enunciado: 'O teste rápido do paciente-fonte resulta reagente para o vírus da imunodeficiência humana; o da trabalhadora é não reagente. Sobre a profilaxia antirretroviral, a conduta CORRETA é:',
      alts: [
        { t: 'Iniciar imediatamente o esquema profilático recomendado, mantê-lo por vinte e oito dias e acompanhar a trabalhadora com testagem sorológica seriada, orientando também medidas de prevenção de transmissão secundária durante o período.', ok: true,
          why: 'Correta. Diante de fonte reagente e exposição percutânea de risco, a profilaxia é indicada de imediato, dura vinte e oito dias e vem acompanhada de seguimento sorológico e orientação sobre transmissão secundária.' },
        { t: 'Iniciar a profilaxia e suspendê-la assim que a primeira sorologia da trabalhadora, colhida após uma semana, resultar não reagente.', ok: false,
          why: 'Errada. Sorologia não reagente precoce não afasta infecção em curso e não é critério de suspensão; o curso profilático é completado.' },
        { t: 'Prescrever monoterapia antirretroviral, reservando esquemas combinados para exposições com fonte sabidamente em falha terapêutica.', ok: false,
          why: 'Errada. A profilaxia pós-exposição é feita com esquema combinado; monoterapia não é conduta recomendada.' },
        { t: 'Substituir a profilaxia medicamentosa por vigilância sorológica intensiva, iniciando tratamento apenas se houver soroconversão documentada.', ok: false,
          why: 'Errada. Isso abandona a única intervenção capaz de prevenir a infecção, transformando prevenção em tratamento tardio.' },
        { t: 'Condicionar o início da profilaxia à realização de carga viral do paciente-fonte, iniciando somente se detectável.', ok: false,
          why: 'Errada. A carga viral da fonte pode informar a estimativa de risco, mas aguardar seu resultado atrasa indevidamente a profilaxia, que deve começar o quanto antes.' }
      ],
      comentario: 'Fonte reagente somada a exposição percutânea de risco indica profilaxia antirretroviral combinada, iniciada o mais precocemente possível e mantida por vinte e oito dias, com seguimento sorológico e orientação sobre transmissão secundária no período.',
      pegadinha: 'Sorologia precoce não reagente é oferecida como motivo para interromper a profilaxia — não é.',
      refs: ['Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pós-Exposição de Risco ao HIV'] },

    { enunciado: 'Quanto à hepatite B, considerando o esquema vacinal completo sem comprovação de resposta e o cartão não localizado, a conduta CORRETA é:',
      alts: [
        { t: 'Solicitar a dosagem de anticorpos contra o antígeno de superfície e, enquanto o resultado não estiver disponível em tempo útil, tratar a trabalhadora como potencialmente não respondedora, indicando imunoglobulina específica e dose de vacina conforme a avaliação do risco da fonte.', ok: true,
          why: 'Correta. Vacinação completa sem comprovação de resposta não equivale a proteção comprovada; na urgência, a conduta é titular os anticorpos e, sem resultado oportuno, proceder como se não respondedora fosse.' },
        { t: 'Nenhuma medida é necessária, pois o esquema vacinal completo garante proteção permanente contra a hepatite B, independentemente de sorologia.', ok: false,
          why: 'Errada. Existe proporção de não respondedores à vacina; sem título documentado não há proteção presumida na conduta pós-exposição.' },
        { t: 'Reiniciar o esquema vacinal completo desde a primeira dose, sem indicar imunoglobulina, pois esta só se aplica a quem nunca foi vacinado.', ok: false,
          why: 'Errada. A imunoglobulina específica é indicada também ao vacinado sabidamente não respondedor ou com estado imune desconhecido diante de fonte de risco.' },
        { t: 'Indicar apenas imunoglobulina específica, sem qualquer dose de vacina, uma vez que o esquema vacinal prévio foi completo.', ok: false,
          why: 'Errada. A imunoglobulina confere proteção passiva e transitória; a conduta considera também a necessidade de estímulo ativo conforme o estado vacinal e a resposta.' },
        { t: 'Aguardar quatro semanas e então dosar anticorpos, pois a titulação feita logo após a exposição é sempre falsamente elevada.', ok: false,
          why: 'Errada. A titulação é feita para orientar a decisão imediata, e a espera de semanas esvazia a profilaxia, que tem janela curta.' }
      ],
      comentario: 'A regra é simples: proteção contra hepatite B em contexto pós-exposição se demonstra por título de anticorpos, não por história de vacinação. Sem comprovação disponível em tempo útil, conduz-se o caso como o de não respondedor. Para hepatite C não há profilaxia pós-exposição: a conduta é seguimento e tratamento precoce se houver infecção.',
      pegadinha: 'Tratar "esquema completo" como sinônimo de "imunizado" é o erro central; e a imunoglobulina não é exclusiva de não vacinados.',
      refs: ['Protocolo do Ministério da Saúde para exposição a material biológico', 'Calendário de vacinação do trabalhador da saúde'] },

    { enunciado: 'Sobre os registros e comunicações devidos neste caso, é CORRETO afirmar que:',
      alts: [
        { t: 'O acidente com material biológico deve ser comunicado à Previdência como acidente do trabalho e notificado ao sistema de informação de agravos de notificação, ainda que não haja afastamento e ainda que não ocorra soroconversão.', ok: true,
          why: 'Correta. Exposição a material biológico é agravo de notificação compulsória e acidente do trabalho típico; ambos os registros independem de afastamento e de desfecho.' },
        { t: 'A comunicação previdenciária só será devida se houver soroconversão comprovada, pois antes disso não há doença nem lesão a comunicar.', ok: false,
          why: 'Errada. O acidente é o evento da exposição, e não a eventual infecção; condicionar o registro ao desfecho é a principal causa de subnotificação nesse tema.' },
        { t: 'A notificação em saúde substitui a comunicação previdenciária quando ambas se referem ao mesmo evento, evitando duplicidade de registro.', ok: false,
          why: 'Errada. Os sistemas têm finalidades distintas, previdenciária e de vigilância, e um registro não dispensa o outro.' },
        { t: 'Como a trabalhadora é servidora de hospital público, o evento é registrado apenas internamente, sem qualquer notificação externa.', ok: false,
          why: 'Errada. O regime jurídico do vínculo altera o instrumento previdenciário aplicável, mas não elimina a notificação em saúde do agravo.' },
        { t: 'A comunicação deve ser feita somente ao final do seguimento sorológico de seis meses, com o resultado consolidado.', ok: false,
          why: 'Errada. O registro é imediato; o seguimento gera informações complementares, não justifica adiar a comunicação.' }
      ],
      comentario: 'Exposição a material biológico gera dois registros paralelos e imediatos: comunicação previdenciária do acidente do trabalho e notificação compulsória em saúde. Nenhum deles depende de afastamento, de sintoma ou de soroconversão.',
      pegadinha: 'A ideia de que "sem doença não há o que comunicar" é a raiz da subnotificação e é exatamente o que a questão testa.',
      refs: ['Lei nº 8.213/1991 — arts. 19 a 22', 'Portaria de notificação compulsória'] },

    { enunciado: 'Concluída a conduta individual, o serviço de saúde ocupacional identifica que os acidentes com perfurocortantes na unidade se concentram no reencape de agulhas e na sobrecarga do plantão noturno. A medida prioritária de vigilância e prevenção é:',
      alts: [
        { t: 'Implantar dispositivos com mecanismo de segurança integrado, eliminar a prática de reencape com descarte imediato em recipientes rígidos junto ao ponto de uso e revisar o dimensionamento da equipe no plantão noturno.', ok: true,
          why: 'Correta. Combina controle na fonte (dispositivo com proteção integrada), controle de engenharia e organizacional (descarte no ponto de uso, dimensionamento da equipe) e elimina a prática de risco, em vez de apenas orientá-la.' },
        { t: 'Intensificar o treinamento sobre a técnica correta de reencape com uma só mão, que reduz substancialmente o risco de perfuração.', ok: false,
          why: 'Errada. A recomendação é não reencapar; ensinar a reencapar melhor mantém a prática que deve ser eliminada.' },
        { t: 'Distribuir luvas de maior espessura a toda a equipe de enfermagem, medida suficiente para conter as perfurações por agulha.', ok: false,
          why: 'Errada. Luva não impede perfuração por agulha de grosso calibre e é controle individual, de eficácia limitada nesse cenário.' },
        { t: 'Instituir testagem sorológica periódica compulsória de todos os pacientes internados, para que a equipe conheça previamente o risco de cada leito.', ok: false,
          why: 'Errada. Testagem compulsória sem consentimento é inaceitável eticamente, e a segurança se constrói por precauções padrão aplicadas a todos, não por rotular pacientes.' },
        { t: 'Concentrar a resposta na criação de um fluxo de atendimento pós-exposição mais ágil, já que a prevenção primária nesse tipo de acidente é inviável.', ok: false,
          why: 'Errada. O fluxo pós-exposição é necessário, mas é prevenção secundária; afirmar que a prevenção primária é inviável contraria a evidência sobre dispositivos de segurança.' }
      ],
      comentario: 'Precauções padrão aplicam-se a todo paciente, independentemente de sorologia conhecida. A prevenção eficaz de acidente perfurocortante é hierárquica: dispositivo com segurança integrada, abolição do reencape, descarte no ponto de uso em recipiente rígido e, no plano organizacional, dimensionamento e ritmo de trabalho.',
      pegadinha: 'A alternativa que ensina "reencape seguro" soa prática, mas contraria a recomendação de abolir o reencape.',
      refs: ['NR de segurança e saúde no trabalho em serviços de saúde', 'Precauções padrão — biossegurança'] }
  ] },

{ id: 'caso-004',
  titulo: 'Tendinopatia do manguito rotador em abate de aves',
  temas: ['4.2', '5.2', '5.6', '3.2'],
  nivel: 'dificil',
  vinheta: 'Trabalhadora de 38 anos, sete anos na mesma função em frigorífico de abate de aves, setor de corte. A tarefa é cadenciada por nória em ritmo fixo, com cerca de quarenta peças por minuto, exigindo elevação repetida do braço direito acima da altura do ombro e preensão sustentada de tesoura, em ambiente artificialmente frio, com rodízio limitado e pausas irregulares. Refere dor no ombro direito há oito meses, inicialmente ao final do turno e hoje contínua, com despertar noturno ao deitar sobre o lado afetado e piora ao pentear o cabelo. Ao exame: arco doloroso entre sessenta e cento e vinte graus de abdução, testes de conflito subacromial positivos, força preservada, sem atrofia. Ultrassonografia descreve tendinopatia do supraespinal e bursite subacromial. Não houve emissão de comunicação de acidente do trabalho. A perícia previdenciária concedeu benefício de natureza acidentária com base em nexo técnico epidemiológico, e a empresa procura o médico do trabalho alegando que "é doença degenerativa da idade" e que "todos do setor têm alteração no exame de imagem".',
  questoes: [
    { enunciado: 'Sobre o raciocínio diagnóstico neste caso, é CORRETO afirmar que:',
      alts: [
        { t: 'O diagnóstico é essencialmente clínico, sustentado pela história de dor relacionada ao uso, dor noturna e testes de conflito positivos; a ultrassonografia é complementar e seus achados isolados têm valor limitado, pois alterações tendíneas são frequentes em pessoas assintomáticas.', ok: true,
          why: 'Correta. O quadro doloroso do ombro se define pela clínica; imagem confirma e afasta diferenciais, mas achados degenerativos em assintomáticos são comuns e não firmam nem afastam o diagnóstico sozinhos.' },
        { t: 'O diagnóstico depende da demonstração de ruptura tendínea completa em imagem, sem a qual o quadro deve ser classificado como dor inespecífica.', ok: false,
          why: 'Errada. Tendinopatia e bursite produzem quadro doloroso incapacitante sem ruptura completa; exigir ruptura é critério artificialmente restritivo.' },
        { t: 'A presença de alterações ultrassonográficas em grande parte dos trabalhadores do setor demonstra que se trata de fenômeno degenerativo natural, sem relação com a tarefa.', ok: false,
          why: 'Errada. Alta prevalência de alterações em um grupo exposto sugere exatamente o contrário: pode indicar efeito da exposição comum, e não normalidade.' },
        { t: 'A eletroneuromiografia é o exame de escolha para confirmar tendinopatia do manguito rotador.', ok: false,
          why: 'Errada. O estudo eletroneuromiográfico avalia nervo e músculo, sendo útil em neuropatias compressivas, não em tendinopatia.' },
        { t: 'A ausência de perda de força e de atrofia afasta o diagnóstico de acometimento do manguito rotador.', ok: false,
          why: 'Errada. Força preservada é a regra na tendinopatia sem ruptura; sua presença não exclui doença.' }
      ],
      comentario: 'Nos quadros do ombro relacionados ao trabalho, a clínica manda: dor relacionada ao uso, dor noturna, arco doloroso e testes de conflito. A imagem é adjuvante. O argumento de que "todo mundo tem alteração no exame" é epidemiologicamente invertido: prevalência elevada em grupo exposto sugere efeito da exposição.',
      pegadinha: 'A alta prevalência de achados no setor é apresentada como prova de normalidade, quando é indício de exposição comum.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Doenças relacionadas ao trabalho — manual de procedimentos'] },

    { enunciado: 'Aplicando a classificação de Schilling e os critérios de nexo, a análise CORRETA é:',
      alts: [
        { t: 'Trata-se de agravo em que o trabalho atua como fator contributivo entre outros possíveis, situação típica do grupo II de Schilling, e o raciocínio de nexo se apoia na exposição documentada, na plausibilidade biomecânica, na relação temporal e na exclusão de causas alternativas relevantes.', ok: true,
          why: 'Correta. Doenças osteomusculares relacionadas ao trabalho enquadram-se classicamente no grupo em que o trabalho é fator contributivo, e o nexo se constrói por exposição, plausibilidade, temporalidade e exclusão.' },
        { t: 'Só haveria nexo se o trabalho fosse causa necessária e suficiente do agravo, situação correspondente ao grupo I de Schilling.', ok: false,
          why: 'Errada. Exigir causa necessária restringe o nexo às doenças profissionais estritas e exclui indevidamente a maior parte das doenças relacionadas ao trabalho.' },
        { t: 'A existência de fatores individuais, como idade e condicionamento físico, desloca automaticamente o caso para fora do campo das doenças relacionadas ao trabalho.', ok: false,
          why: 'Errada. Fatores individuais coexistem com a exposição e são analisados como concausa, não como excludente do nexo.' },
        { t: 'O nexo depende de que a trabalhadora seja a única do setor com o agravo, pois a ocorrência em vários trabalhadores indica causa externa ao trabalho.', ok: false,
          why: 'Errada. A ocorrência em vários trabalhadores expostos ao mesmo processo reforça o nexo, e não o contrário.' },
        { t: 'Tratando-se de agravo do grupo III de Schilling, o trabalho apenas desencadeia doença latente, hipótese em que o nexo é apenas presumido e não pode fundamentar reconhecimento.', ok: false,
          why: 'Errada em dois pontos: o enquadramento clássico deste tipo de agravo é o do trabalho como fator contributivo, e mesmo no grupo em que o trabalho provoca ou agrava doença latente há reconhecimento pleno de relação com o trabalho.' }
      ],
      comentario: 'Schilling I: trabalho como causa necessária. II: trabalho como fator contributivo entre vários. III: trabalho como provocador ou agravador de doença latente ou preexistente. Os agravos osteomusculares são o exemplo canônico do grupo II, e a exigência de causa exclusiva é o erro de raciocínio mais comum nesse tema.',
      pegadinha: 'Exigir exclusividade causal ou unicidade do caso no setor — dois requisitos que não existem.',
      refs: ['Classificação de Schilling', 'Lista de Doenças Relacionadas ao Trabalho — Ministério da Saúde'] },

    { enunciado: 'A empresa deseja contestar administrativamente o reconhecimento acidentário fundado em nexo epidemiológico. Sobre esse mecanismo, é CORRETO afirmar que:',
      alts: [
        { t: 'O nexo epidemiológico decorre do cruzamento entre a atividade econômica da empresa e a entidade mórbida do trabalhador, gera presunção relativa e pode ser afastado se a empresa demonstrar, por prova técnica, que o agravo não guarda relação com o trabalho ali executado.', ok: true,
          why: 'Correta. O mecanismo é estatístico e presuntivo, com presunção relativa, e a via de contestação exige demonstração técnica de ausência de relação, não mera alegação.' },
        { t: 'A alegação de que se trata de doença degenerativa relacionada à idade é, por si só, suficiente para desconstituir a presunção.', ok: false,
          why: 'Errada. Alegação genérica não é prova técnica, e a existência de componente degenerativo é compatível com a atuação do trabalho como concausa.' },
        { t: 'O nexo epidemiológico depende de prévia emissão da comunicação de acidente do trabalho pela empresa.', ok: false,
          why: 'Errada. Esse mecanismo foi concebido justamente para operar independentemente da comunicação, corrigindo a subnotificação.' },
        { t: 'Reconhecido o nexo epidemiológico, a presunção é absoluta e a única via da empresa é a judicial.', ok: false,
          why: 'Errada. A presunção é relativa e existe procedimento administrativo de contestação.' },
        { t: 'A contestação, se acolhida, converte automaticamente o benefício em aposentadoria por incapacidade permanente de natureza comum.', ok: false,
          why: 'Errada. Descaracterizar a natureza acidentária muda a espécie do benefício por incapacidade, não o converte em aposentadoria.' }
      ],
      comentario: 'Três nexos a distinguir: profissional ou do trabalho, pela lista agente-doença; epidemiológico, pelo cruzamento entre atividade econômica e agravo, com presunção relativa; e individual, pela análise do caso concreto. Só o epidemiológico opera automaticamente, e é contestável administrativamente mediante prova técnica.',
      pegadinha: 'Tratar a presunção como absoluta, ou supor que a simples alegação de doença degenerativa a desconstitui.',
      refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

    { enunciado: 'Sobre a caracterização da incapacidade e a conduta durante o afastamento, é CORRETO afirmar que:',
      alts: [
        { t: 'Trata-se, neste momento, de incapacidade temporária e parcial, cujo manejo combina tratamento clínico e reabilitação com afastamento da exposição biomecânica que sustenta o quadro, sendo o afastamento medida terapêutica e não apenas administrativa.', ok: true,
          why: 'Correta. O quadro é potencialmente reversível e não impede toda e qualquer atividade; a retirada da exposição é parte do tratamento, sem a qual a terapêutica clínica tende ao insucesso.' },
        { t: 'A incapacidade deve ser considerada permanente desde já, pois a tendinopatia é lesão estrutural irreversível.', ok: false,
          why: 'Errada. Tendinopatia sem ruptura tem potencial de recuperação funcional expressivo com tratamento e retirada da sobrecarga.' },
        { t: 'Não há incapacidade a reconhecer, pois a força muscular está preservada e a trabalhadora consegue realizar as tarefas com dor.', ok: false,
          why: 'Errada. Trabalhar com dor não é sinal de capacidade preservada; a dor limita desempenho, perpetua o quadro e é critério legítimo de incapacidade.' },
        { t: 'O tratamento deve ser conduzido com manutenção na mesma tarefa, para evitar descondicionamento e perda de destreza específica.', ok: false,
          why: 'Errada. Manter a exposição que gera a sobrecarga inviabiliza a recuperação; o princípio é retirar o fator agressor, sem imobilismo.' },
        { t: 'A infiltração corticosteroide repetida é a conduta de primeira linha e substitui a necessidade de intervenção no posto de trabalho.', ok: false,
          why: 'Errada. Intervenção medicamentosa local pode ter papel pontual, nunca substitui a correção da exposição, e a repetição tem efeitos deletérios sobre o tendão.' }
      ],
      comentario: 'Nos quadros osteomusculares relacionados ao trabalho, o afastamento da exposição é intervenção terapêutica. Devolver o trabalhador ao mesmo posto sem mudança do determinante é a causa mais frequente de recidiva e de cronificação.',
      pegadinha: 'A ideia de que "consegue trabalhar com dor, logo não há incapacidade" é a armadilha central.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Avaliação da incapacidade em DORT'] },

    { enunciado: 'Após melhora clínica, planeja-se o retorno ao trabalho. A conduta com maior fundamento técnico é:',
      alts: [
        { t: 'Condicionar o retorno à intervenção sobre o posto e sobre a organização do trabalho — revisão do ritmo imposto pela nória, altura do plano de trabalho, alternância de tarefas e pausas efetivas —, com retorno gradual, restrição temporária a elevação do braço acima do ombro e acompanhamento programado.', ok: true,
          why: 'Correta. O retorno sustentável exige mudança do determinante coletivo, não apenas do indivíduo, e combina adequação do posto, restrição funcional temporária, progressão de carga e reavaliação.' },
        { t: 'Transferir a trabalhadora para outro setor da mesma linha, sem análise das exigências do novo posto, pois qualquer mudança já reduz a sobrecarga do ombro.', ok: false,
          why: 'Errada. Mudança sem análise das exigências pode transferir o trabalhador para posto de sobrecarga igual ou maior; é readaptação apenas nominal.' },
        { t: 'Retornar à função original sem restrições, prescrevendo exercícios de fortalecimento no contraturno como medida preventiva suficiente.', ok: false,
          why: 'Errada. Ginástica e fortalecimento não compensam ritmo e postura inadequados; deslocam para o trabalhador a responsabilidade por um determinante organizacional.' },
        { t: 'Emitir atestado de inaptidão definitiva para a função, encaminhando a trabalhadora à demissão por incapacidade laboral.', ok: false,
          why: 'Errada. Não há inaptidão definitiva demonstrada, e a conduta desconsidera a garantia de emprego decorrente do afastamento acidentário além de contornar o dever de adaptação.' },
        { t: 'Manter restrição permanente e individual sem qualquer alteração do posto, pois a adequação de linha de produção é inviável em processo cadenciado.', ok: false,
          why: 'Errada. Restrição individual isolada não protege os demais expostos, e a inviabilidade alegada não é premissa técnica: ritmo, altura e rodízio são parâmetros ajustáveis.' }
      ],
      comentario: 'Retorno ao trabalho em agravo osteomuscular tem três componentes inseparáveis: condição clínica, análise ergonômica do posto e organização do trabalho. Restrição individual sem correção do determinante coletivo produz recidiva e deixa os demais expostos.',
      pegadinha: 'A troca de setor sem análise das exigências do novo posto aparece como solução prática, mas é readaptação de fachada.',
      refs: ['NR-17 — ergonomia', 'Reabilitação profissional e retorno ao trabalho'] },
  ] },

{ id: 'caso-005',
  titulo: 'Síndrome do túnel do carpo em costureira com hipotireoidismo',
  temas: ['4.2', '5.3', '5.5', '5.6'],
  nivel: 'dificil',
  vinheta: 'Costureira de 45 anos, quinze anos em confecção de vestuário, trabalha em máquina reta com metas de peças por hora e remuneração variável por produção, realizando preensão fina e desvio ulnar repetitivo dos punhos durante praticamente todo o turno, com poucas pausas. Procura o serviço médico por parestesia noturna nas mãos há cerca de um ano, que a desperta e melhora ao sacudi-las, hoje acompanhada de queda de objetos e dificuldade para abotoar roupas. Ao exame: hipoestesia no território do nervo mediano em ambas as mãos, testes de provocação positivos bilateralmente, discreta hipotrofia tenar à direita. Tem hipotireoidismo diagnosticado há seis anos, em uso regular de levotiroxina, com exames laboratoriais recentes dentro da faixa de referência, e não é diabética nem obesa. A eletroneuromiografia mostra neuropatia compressiva do mediano nos punhos, moderada à direita e leve à esquerda. A empresa sustenta que a doença decorre exclusivamente do hipotireoidismo e recusa qualquer registro de origem ocupacional.',
  questoes: [
    { enunciado: 'Sobre o diagnóstico e a interpretação dos exames, é CORRETO afirmar que:',
      alts: [
        { t: 'O diagnóstico é clínico e a eletroneuromiografia serve para confirmar, graduar e localizar a compressão, além de auxiliar no diferencial com radiculopatia cervical e polineuropatia; exame normal em quadro clínico típico não exclui a doença.', ok: true,
          why: 'Correta. O estudo eletrofisiológico gradua e localiza, mas o diagnóstico se sustenta na clínica; existem casos clinicamente típicos com estudo normal, sobretudo nas formas leves.' },
        { t: 'A eletroneuromiografia é o padrão-ouro absoluto, de modo que resultado normal exclui a síndrome do túnel do carpo.', ok: false,
          why: 'Errada. Sensibilidade imperfeita nas formas iniciais faz do exame normal um resultado não excludente.' },
        { t: 'A presença de hipotrofia tenar indica quadro leve, pois a musculatura ainda é visível e a força de preensão costuma estar preservada nessa fase.', ok: false,
          why: 'Errada. Hipotrofia tenar é sinal de comprometimento motor avançado e denota gravidade, não leveza.' },
        { t: 'A bilateralidade do quadro afasta causa ocupacional e aponta obrigatoriamente para doença sistêmica.', ok: false,
          why: 'Errada. Exposição biomecânica bilateral produz quadro bilateral; bilateralidade é esperada quando ambas as mãos trabalham, e não sinal de causa sistêmica exclusiva.' },
        { t: 'A melhora dos sintomas ao sacudir as mãos é achado atípico e sugere origem psicogênica.', ok: false,
          why: 'Errada. O alívio ao sacudir as mãos é um dos achados mais característicos da compressão do mediano no punho.' }
      ],
      comentario: 'Parestesia noturna no território do mediano, alívio ao sacudir as mãos, testes de provocação positivos e, em fases avançadas, hipotrofia tenar. O estudo eletrofisiológico confirma e gradua; não substitui a clínica nem exclui o diagnóstico quando normal.',
      pegadinha: 'Duas inversões: exame normal como excludente e bilateralidade como argumento contra a origem ocupacional.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Neuropatias compressivas relacionadas ao trabalho'] },

    { enunciado: 'Diante do argumento empresarial de que o hipotireoidismo é a causa exclusiva, a análise CORRETA de nexo é:',
      alts: [
        { t: 'A condição sistêmica pode ter atuado como concausa preexistente, predispondo ao quadro, sem afastar o nexo com o trabalho, uma vez que a exposição biomecânica é reconhecidamente associada à compressão do mediano e a doença de base está controlada.', ok: true,
          why: 'Correta. Concausa é contribuição, não exclusividade: uma condição predisponente controlada convive com exposição ocupacional relevante, e o trabalho é reconhecido como fator contributivo.' },
        { t: 'Havendo doença sistêmica capaz de causar a síndrome, o nexo ocupacional fica automaticamente excluído.', ok: false,
          why: 'Errada. É exatamente o raciocínio que a figura da concausa existe para afastar; a exclusividade causal não é requisito.' },
        { t: 'O hipotireoidismo configura concausa superveniente, pois se manifestou clinicamente depois do início da exposição ocupacional.', ok: false,
          why: 'Errada por troca de definição: a condição existente antes do agravo em questão e que predispõe a ele é preexistente; superveniente é a que surge depois e se soma ao curso do dano.' },
        { t: 'Reconhecida a concausa, o caráter ocupacional deve ser reconhecido apenas parcialmente, com repartição proporcional dos efeitos previdenciários.', ok: false,
          why: 'Errada. Não há rateio proporcional: uma vez caracterizada a contribuição do trabalho, o agravo é tratado como relacionado ao trabalho.' },
        { t: 'Como a doença de base está controlada com medicação, ela deixa de existir como fator causal e o caso passa a ser de causa ocupacional exclusiva.', ok: false,
          why: 'Errada no sentido oposto: controle terapêutico reduz a contribuição, mas o raciocínio correto não é substituir uma exclusividade por outra, e sim reconhecer a concorrência de causas.' }
      ],
      comentario: 'Concausa preexistente é a condição anterior que predispõe; concomitante atua junto; superveniente surge depois e agrava. Nenhuma delas rompe o nexo, e o reconhecimento não é proporcional. A defesa de "doença sistêmica, logo não é do trabalho" cai por aqui.',
      pegadinha: 'A troca entre preexistente e superveniente, somada à falsa ideia de repartição proporcional.',
      refs: ['Lei nº 8.213/1991 — art. 21, I', 'Concausalidade em medicina do trabalho'] },

    { enunciado: 'Sobre a conduta terapêutica e ocupacional neste momento, a orientação CORRETA é:',
      alts: [
        { t: 'Afastar a trabalhadora da exposição, instituir tratamento conservador e, considerando o comprometimento motor à direita, encaminhá-la para avaliação de indicação cirúrgica, além de emitir a comunicação de acidente do trabalho independentemente da recusa da empresa.', ok: true,
          why: 'Correta. Hipotrofia tenar indica comprometimento motor e justifica avaliação cirúrgica precoce; retirar a exposição é parte do tratamento, e a comunicação é devida ainda que a empresa se recuse.' },
        { t: 'Manter a trabalhadora na função com uso de órtese noturna, reavaliando apenas se houver perda completa da força de pinça.', ok: false,
          why: 'Errada. Aguardar perda completa é permitir dano axonal irreversível; já há sinal motor, e manter a exposição contraria o tratamento.' },
        { t: 'Indicar apenas reposição hormonal otimizada, pois o controle do hipotireoidismo resolve a compressão nervosa.', ok: false,
          why: 'Errada. A doença de base já está controlada, e o controle hormonal não descomprime o nervo nem retira a sobrecarga biomecânica.' },
        { t: 'Aguardar a conclusão da discussão sobre nexo com a empresa antes de qualquer conduta clínica ou de emissão de documento.', ok: false,
          why: 'Errada. A conduta clínica não se subordina a controvérsia administrativa, e a emissão da comunicação independe da concordância da empresa.' },
        { t: 'Prescrever infiltração local seriada como tratamento definitivo, dispensando avaliação cirúrgica mesmo com hipotrofia tenar.', ok: false,
          why: 'Errada. Infiltração pode dar alívio transitório e tem papel em casos selecionados sem comprometimento motor, mas não é tratamento definitivo diante de sinal de denervação.' }
      ],
      comentario: 'Comprometimento motor, hipotrofia tenar ou estudo eletrofisiológico de grau avançado deslocam a conduta do tratamento conservador para a avaliação cirúrgica. E o médico do trabalho não depende de autorização da empresa para emitir a comunicação do acidente.',
      pegadinha: 'A tentação de tratar como quadro leve porque a força de preensão "ainda está boa", ignorando a hipotrofia tenar.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Lei nº 8.213/1991 — art. 22'] },

    { enunciado: 'Um ano depois, após cirurgia bilateral e reabilitação, persistem hipoestesia residual à direita e redução da força de pinça, com perda definitiva de destreza fina, embora a trabalhadora possa exercer outras atividades. Sobre a repercussão previdenciária, é CORRETO afirmar que:',
      alts: [
        { t: 'Consolidadas as lesões e permanecendo sequela que reduz a capacidade para o trabalho habitualmente exercido, cabe auxílio-acidente, benefício de natureza indenizatória, compatível com o exercício de atividade remunerada e que não exige carência.', ok: true,
          why: 'Correta. Descreve com precisão o pressuposto do auxílio-acidente: consolidação, sequela definitiva, redução da capacidade para o trabalho habitual, natureza indenizatória e acumulação com salário.' },
        { t: 'Cabe aposentadoria por incapacidade permanente, pois a sequela é definitiva e irreversível.', ok: false,
          why: 'Errada. A aposentadoria por incapacidade permanente pressupõe incapacidade para toda e qualquer atividade que garanta a subsistência, o que não é o caso.' },
        { t: 'Nada é devido, uma vez que a trabalhadora retomou atividade remunerada e recebe salário.', ok: false,
          why: 'Errada. O benefício indenizatório por sequela é justamente compatível com o trabalho e com a remuneração.' },
        { t: 'Mantém-se o benefício por incapacidade temporária enquanto persistirem os sintomas residuais.', ok: false,
          why: 'Errada. Consolidadas as lesões, cessa o benefício por incapacidade temporária; o que remanesce é a indenização pela sequela.' },
        { t: 'O benefício por sequela exige carência mínima de contribuições e cessa quando a trabalhadora mudar de emprego.', ok: false,
          why: 'Errada. Benefício decorrente de acidente do trabalho independe de carência, e a mudança de emprego não é causa de cessação.' }
      ],
      comentario: 'Marcos do auxílio-acidente: consolidação das lesões, sequela definitiva, redução da capacidade para o trabalho habitualmente exercido, natureza indenizatória, acumulação com salário e dispensa de carência quando decorrente de acidente do trabalho. Distinga-o com clareza da aposentadoria por incapacidade permanente.',
      pegadinha: 'Confundir irreversibilidade da sequela com incapacidade total e permanente.',
      refs: ['Lei nº 8.213/1991 — art. 86', 'Avaliação da incapacidade laborativa'] },

    { enunciado: 'A análise dos afastamentos do setor de costura mostra outros seis casos semelhantes em dois anos. A conduta de vigilância CORRETA é:',
      alts: [
        { t: 'Caracterizar o conjunto como surto de agravo relacionado ao trabalho, desencadear análise ergonômica do trabalho no setor com foco em ritmo, metas e remuneração por produção, e revisar o programa de controle médico para busca ativa dos demais expostos.', ok: true,
          why: 'Correta. Agregação de casos em um setor é sinal de vigilância que exige investigação coletiva, análise ergonômica com foco organizacional e busca ativa entre os expostos.' },
        { t: 'Considerar o achado esperado para a faixa etária do grupo, já que a prevalência da síndrome aumenta com a idade na população geral.', ok: false,
          why: 'Errada. Atribuir agregação de casos à idade sem comparação adequada é o raciocínio que naturaliza o adoecimento coletivo.' },
        { t: 'Encaminhar individualmente cada caso ao tratamento e evitar qualquer análise agregada, que poderia expor dados de saúde dos trabalhadores.', ok: false,
          why: 'Errada. A análise epidemiológica agregada e anonimizada é atribuição do serviço e não conflita com o sigilo individual.' },
        { t: 'Substituir a remuneração por produção por metas coletivas mais elevadas, mantendo o incentivo à produtividade sem prejuízo individual.', ok: false,
          why: 'Errada. Elevar metas mantém ou agrava o determinante organizacional identificado; a mudança precisa reduzir a exigência, não redistribuí-la.' },
        { t: 'Implantar ginástica laboral diária de dez minutos como principal medida de controle do surto.', ok: false,
          why: 'Errada. Ginástica laboral é medida acessória; adotada como resposta principal, deixa intactos ritmo, postura e repetitividade.' }
      ],
      comentario: 'Agregação de casos em um setor é evento sentinela: exige investigação coletiva, análise ergonômica com olhar sobre organização do trabalho — ritmo, metas, remuneração variável, pausas — e busca ativa entre os expostos. Ginástica laboral não é controle de risco ergonômico.',
      pegadinha: 'Ginástica laboral e campanhas aparecem como resposta suficiente; são acessórias diante de determinantes organizacionais.',
      refs: ['NR-17 — ergonomia e análise ergonômica do trabalho', 'Vigilância em saúde do trabalhador'] }
  ] },

/* ===================== SIMULADO 2 — casos 006 a 010 ====================== */

{ id: 'caso-006',
  titulo: 'Silicose acelerada em marmoraria de quartzo',
  temas: ['4.3', '2.3', '5.2', '1.8'],
  nivel: 'dificil',
  vinheta: 'Marmorista de 33 anos, seis anos de trabalho em oficina de bancadas de quartzo aglomerado, material com teor de sílica cristalina muito superior ao das rochas naturais. O corte e o acabamento são feitos a seco, com serra e lixadeira elétricas, em galpão fechado, sem ventilação exaustora, com nuvem visível de poeira; usa esporadicamente máscara descartável simples, sem programa de proteção respiratória. Procura o serviço por dispneia progressiva aos esforços há um ano e tosse seca. Nega tabagismo. Ao exame: eupneico em repouso, ausculta pulmonar sem alterações, sem baqueteamento. Radiografia de tórax mostra pequenas opacidades arredondadas difusas, com predomínio nos terços superiores de ambos os pulmões, e calcificação periférica de linfonodos hilares. A tomografia de alta resolução confirma micronódulos centrolobulares e subpleurais com distribuição em campos superiores, sem massas. A espirometria mostra distúrbio ventilatório restritivo leve. Não há febre, emagrecimento ou sudorese noturna. Trabalham no mesmo galpão outros nove homens, com tempos de exposição de dois a onze anos, nenhum deles submetido a avaliação radiológica.',
  questoes: [
    { enunciado: 'Sobre o diagnóstico, a interpretação CORRETA do conjunto de dados é:',
      alts: [
        { t: 'História de exposição intensa a sílica cristalina somada a padrão radiológico de pequenas opacidades arredondadas com predomínio em campos superiores e calcificação periférica de linfonodos hilares permite o diagnóstico de silicose, sem necessidade de biópsia pulmonar.', ok: true,
          why: 'Correta. O diagnóstico de silicose é firmado por exposição compatível somada a imagem característica, com exclusão de diferenciais; a confirmação histológica é reservada a casos atípicos.' },
        { t: 'A espirometria com restrição leve é o dado que estabelece o diagnóstico, pois a silicose se define funcionalmente.', ok: false,
          why: 'Errada. A função pulmonar pode ser normal mesmo em doença radiológica evidente; a espirometria mede repercussão, não define a pneumoconiose.' },
        { t: 'O diagnóstico exige biópsia pulmonar com demonstração de nódulos silicóticos e partículas birrefringentes.', ok: false,
          why: 'Errada. Exigir histologia de rotina é conduta invasiva e desnecessária diante de exposição e imagem típicas.' },
        { t: 'A ausência de tabagismo e a ausência de alterações à ausculta afastam doença pulmonar ocupacional significativa.', ok: false,
          why: 'Errada. Ausculta normal é frequente na pneumoconiose, e a ausência de tabagismo em nada reduz a probabilidade de silicose.' },
        { t: 'O tempo de exposição de seis anos é curto demais para silicose, de modo que o quadro deve ser atribuído a doença granulomatosa não ocupacional.', ok: false,
          why: 'Errada. Exposições muito intensas produzem formas aceleradas em poucos anos, cenário típico do trabalho com aglomerado de quartzo cortado a seco.' }
      ],
      comentario: 'Silicose se diagnostica com três elementos: exposição a sílica cristalina, imagem compatível — opacidades arredondadas em campos superiores, eventual calcificação periférica de linfonodos hilares — e exclusão de diferenciais. Função pulmonar pode ser normal, e o corte a seco de aglomerado de quartzo produz formas aceleradas em poucos anos.',
      pegadinha: 'O tempo de exposição "curto" é usado para afastar o diagnóstico; nas formas aceleradas ele é justamente o esperado.',
      refs: ['Classificação radiológica da OIT para pneumoconioses', 'Pneumoconioses — Ministério da Saúde'] },

    { enunciado: 'Além da silicose, a comorbidade que deve ser ativamente investigada neste paciente é:',
      alts: [
        { t: 'Tuberculose, ativa e latente, uma vez que a silicose aumenta expressivamente o risco de adoecimento e a investigação deve ser sistemática, mesmo sem sintomas típicos.', ok: true,
          why: 'Correta. A associação entre silicose e tuberculose é uma das mais consistentes da pneumologia ocupacional, e a investigação é obrigatória no seguimento, incluindo pesquisa de infecção latente.' },
        { t: 'Fibrose cística, cuja apresentação em adultos jovens com padrão restritivo é praticamente indistinguível da silicose.', ok: false,
          why: 'Errada. Fibrose cística tem apresentação clínica, funcional e radiológica distinta, com bronquiectasias e predomínio em outra faixa etária de manifestação.' },
        { t: 'Hipertensão arterial pulmonar primária, complicação inicial mais frequente da exposição à sílica.', ok: false,
          why: 'Errada. Hipertensão pulmonar pode surgir em doença avançada, como consequência, e não é a comorbidade a rastrear nesta fase.' },
        { t: 'Asbestose, dado que ambas as poeiras minerais coexistem em oficinas de rochas ornamentais.', ok: false,
          why: 'Errada. Aglomerado de quartzo não contém asbesto, e a apresentação radiológica descrita não corresponde à asbestose.' },
        { t: 'Nenhuma investigação adicional é necessária enquanto não houver febre, emagrecimento e sudorese noturna.', ok: false,
          why: 'Errada. Aguardar sintomas clássicos retarda o diagnóstico de tuberculose em silicótico, população em que o rastreio é ativo.' }
      ],
      comentario: 'Todo silicótico é população de risco elevado para tuberculose, ativa e latente. O rastreamento é ativo e periódico, e o achado de infecção latente indica tratamento preventivo. A silicose também aumenta o risco de câncer de pulmão, já que a sílica cristalina é classificada como carcinógeno humano comprovado.',
      pegadinha: 'Condicionar a investigação de tuberculose à presença da tríade clássica de sintomas.',
      refs: ['Silicose e tuberculose — Ministério da Saúde', 'Monografias da IARC — sílica cristalina'] },

    { enunciado: 'Quanto ao nexo e ao enquadramento do agravo, é CORRETO afirmar que:',
      alts: [
        { t: 'A sílica cristalina é condição necessária para a silicose, situação em que o trabalho é causa e o agravo se enquadra no grupo I de Schilling, sendo doença profissional de notificação compulsória e de comunicação obrigatória à Previdência.', ok: true,
          why: 'Correta. Sem exposição à sílica não há silicose: trata-se do exemplo clássico de causa necessária, com dupla obrigação de registro, previdenciária e de vigilância em saúde.' },
        { t: 'Trata-se de agravo do grupo II de Schilling, em que o trabalho é apenas um entre vários fatores de risco possíveis.', ok: false,
          why: 'Errada. O grupo em que o trabalho é fator contributivo agrupa agravos multicausais; a silicose tem agente etiológico único e específico.' },
        { t: 'O reconhecimento do nexo depende de laudo de higiene ocupacional com resultado acima do limite de tolerância no momento do diagnóstico.', ok: false,
          why: 'Errada. A avaliação quantitativa atual não é condição do nexo em doença de latência, sobretudo diante de exposição pregressa evidente e não monitorada.' },
        { t: 'Por ser doença sem tratamento específico, a silicose não gera repercussão previdenciária enquanto não houver incapacidade total.', ok: false,
          why: 'Errada. A repercussão previdenciária acompanha a incapacidade existente e o reconhecimento do agravo, não depende de incapacidade total.' },
        { t: 'A notificação em saúde é dispensável, pois a comunicação previdenciária já cumpre a função de vigilância epidemiológica.', ok: false,
          why: 'Errada. São instrumentos distintos e cumulativos, com finalidades e fluxos próprios.' }
      ],
      comentario: 'Silicose é o protótipo de doença profissional em sentido estrito: agente específico, causa necessária, grupo I de Schilling. Registrar duas vezes — comunicação previdenciária e notificação em saúde — é obrigatório, e nenhuma delas depende de laudo quantitativo contemporâneo.',
      pegadinha: 'Exigir avaliação quantitativa atual de exposição para reconhecer nexo em doença de latência.',
      refs: ['Classificação de Schilling', 'Lista de doenças de notificação compulsória relacionadas ao trabalho'] },

    { enunciado: 'Sobre a conduta em relação a este trabalhador, a orientação CORRETA é:',
      alts: [
        { t: 'Afastá-lo definitivamente da exposição à sílica, esclarecer que a doença pode progredir mesmo após cessada a exposição, instituir seguimento clínico, funcional e radiológico periódico, atualizar imunizações respiratórias e encaminhá-lo para avaliação previdenciária e de reabilitação profissional.', ok: true,
          why: 'Correta. Não há tratamento que reverta a silicose; a conduta é interromper a exposição, acompanhar a progressão possível e organizar a recolocação profissional do trabalhador.' },
        { t: 'Mantê-lo na função com fornecimento de respirador purificador de ar com filtro adequado, medida suficiente para deter a progressão da doença.', ok: false,
          why: 'Errada. Uma vez estabelecida a pneumoconiose, o trabalhador deve ser retirado da exposição; proteção respiratória não é resposta para quem já adoeceu.' },
        { t: 'Iniciar corticoterapia sistêmica prolongada, tratamento capaz de reverter a fibrose nodular da silicose.', ok: false,
          why: 'Errada. Não há terapêutica que reverta a fibrose silicótica, e corticoide sistêmico prolongado não tem essa indicação.' },
        { t: 'Manter conduta expectante e repetir a radiografia apenas se houver piora clínica importante, pois a doença não progride depois de retirada a exposição.', ok: false,
          why: 'Errada. A silicose pode progredir mesmo após cessada a exposição, o que torna o seguimento programado indispensável.' },
        { t: 'Considerá-lo inapto para qualquer atividade laboral, pois a restrição pulmonar detectada é definitiva.', ok: false,
          why: 'Errada. Restrição leve não impede muitas atividades; a inaptidão é para a exposição a poeiras, não para o trabalho em geral.' }
      ],
      comentario: 'Diante de pneumoconiose estabelecida: afastamento definitivo da exposição, seguimento programado porque a doença pode progredir sem exposição adicional, rastreio de tuberculose, imunizações respiratórias e encaminhamento previdenciário com vistas à reabilitação. Proteção respiratória não é conduta para quem já adoeceu.',
      pegadinha: 'A ideia de que a doença "para" quando a exposição cessa, usada para justificar seguimento frouxo.',
      refs: ['Pneumoconioses — Ministério da Saúde', 'Reabilitação profissional'] },

    { enunciado: 'Sobre os outros nove trabalhadores do mesmo galpão e sobre o controle da exposição, a conduta CORRETA é:',
      alts: [
        { t: 'Realizar busca ativa em todos os expostos, com avaliação clínica, radiografia de tórax lida segundo padrão internacional e espirometria, e priorizar controles de engenharia — corte com supressão de poeira por via úmida, ventilação exaustora e enclausuramento —, reservando o programa de proteção respiratória como medida complementar.', ok: true,
          why: 'Correta. Um caso de silicose acelerada é evento sentinela que obriga avaliação de todo o grupo exposto, e o controle segue a hierarquia: eliminar a geração de poeira antes de proteger o indivíduo.' },
        { t: 'Aguardar que os demais apresentem sintomas respiratórios para então investigá-los, evitando exames desnecessários em assintomáticos.', ok: false,
          why: 'Errada. A silicose é assintomática por longos períodos, e a busca ativa entre expostos é justamente o instrumento de detecção precoce.' },
        { t: 'Implantar programa de proteção respiratória com respiradores de maior fator de proteção como medida principal, mantendo o corte a seco pela produtividade.', ok: false,
          why: 'Errada. Inverte a hierarquia de controles: manter a geração de poeira e proteger individualmente é a solução menos eficaz e a mais frágil na prática.' },
        { t: 'Encaminhar os demais para exame apenas na data do próximo exame periódico previsto, sem antecipação, pois a periodicidade programada já contempla o risco.', ok: false,
          why: 'Errada. A ocorrência de um caso obriga revisão imediata do programa e antecipação da avaliação, e não a manutenção da rotina que falhou.' },
        { t: 'Substituir a radiografia pela tomografia de alta resolução em todos os expostos, por ser mais sensível, adotando-a como exame de rastreamento de rotina.', ok: false,
          why: 'Errada. A tomografia é mais sensível e tem papel em casos selecionados, mas a radiografia com leitura padronizada é o instrumento de vigilância de grupos, com melhor relação entre benefício, custo e dose de radiação.' }
      ],
      comentario: 'Caso índice de pneumoconiose dispara vigilância do grupo homogêneo de exposição: busca ativa com clínica, radiografia lida em padrão internacional e espirometria. No controle, a ordem é substituição do processo, supressão úmida, exaustão e enclausuramento; proteção respiratória é complemento, nunca a medida principal.',
      pegadinha: 'Adotar respirador de alto desempenho como solução central, mantendo o corte a seco, é o desvio mais frequente na prática e na prova.',
      refs: ['Classificação radiológica da OIT', 'Hierarquia de controles em higiene ocupacional', 'Programa de Proteção Respiratória'] }
  ] },

{ id: 'caso-007',
  titulo: 'Asma ocupacional por isocianatos em repintura automotiva',
  temas: ['4.3', '5.2', '2.8', '6.1'],
  nivel: 'dificil',
  vinheta: 'Pintor de 29 anos, quatro anos em oficina de repintura automotiva, aplica tintas e vernizes de poliuretano bicomponente que contêm isocianatos, em cabine com exaustão deficiente, usando respirador purificador de ar com filtro para vapores orgânicos, sem ensaio de vedação e com troca de filtros sem critério definido. Nos primeiros dois anos era assintomático. Há dezoito meses iniciou tosse seca e sibilância ao final dos turnos de pintura, com sensação de aperto no peito que às vezes surge horas depois de deixar o trabalho, já em casa. Refere melhora clara nos fins de semana prolongados e desaparecimento completo dos sintomas nas férias de trinta dias do ano passado, com recidiva em poucos dias após o retorno. Nega tabagismo, atopia prévia, rinite na infância e uso de medicação contínua. Ao exame, fora do turno, ausculta pulmonar normal. Espirometria em dia de folga: normal, sem resposta significativa ao broncodilatador. O empregador quer manter o trabalhador na função, oferecendo respirador de maior desempenho e adicional de insalubridade.',
  questoes: [
    { enunciado: 'A hipótese diagnóstica mais provável e o exame mais adequado para sustentá-la na prática ambulatorial são, respectivamente:',
      alts: [
        { t: 'Asma ocupacional induzida por agente sensibilizante de baixo peso molecular, investigada por medidas seriadas do pico de fluxo expiratório em períodos de trabalho e de afastamento, com registro sistemático e comparação entre os dois períodos.', ok: true,
          why: 'Correta. O padrão de latência seguida de sintomas relacionados ao turno, com melhora fora do trabalho, é típico de sensibilização, e o registro seriado do pico de fluxo dentro e fora do trabalho é o instrumento factível e de bom rendimento.' },
        { t: 'Asma preexistente agravada pelo trabalho, cujo diagnóstico se estabelece por dosagem de imunoglobulina E total elevada.', ok: false,
          why: 'Errada. Não há asma prévia, e imunoglobulina E total não distingue asma ocupacional de asma agravada pelo trabalho.' },
        { t: 'Pneumonite de hipersensibilidade, a ser confirmada por lavado broncoalveolar com linfocitose.', ok: false,
          why: 'Errada. O quadro é obstrutivo episódico e reversível, sem febre, sem estertores em velcro e sem alteração intersticial; não corresponde à alveolite.' },
        { t: 'Síndrome de disfunção reativa das vias aéreas, decorrente de exposição única e maciça a irritante, sem período de latência.', ok: false,
          why: 'Errada. Essa entidade decorre de exposição única de alta intensidade e se instala em horas, sem latência — o oposto da história aqui descrita.' },
        { t: 'Asma não ocupacional, uma vez que a espirometria em dia de folga foi normal e sem resposta ao broncodilatador, o que exclui asma.', ok: false,
          why: 'Errada. Espirometria normal fora da exposição é achado esperado na asma ocupacional e não exclui o diagnóstico; ela deve ser interpretada junto ao contexto e a testes seriados.' }
      ],
      comentario: 'Asma ocupacional por sensibilizante tem período de latência, sintomas que pioram no trabalho — às vezes com resposta tardia, horas depois — e melhora em férias. Espirometria normal em dia de folga é a regra. O pico de fluxo seriado, dentro e fora do trabalho, é o exame prático de maior rendimento.',
      pegadinha: 'Usar espirometria normal colhida fora da exposição para excluir asma ocupacional.',
      refs: ['Asma ocupacional — Ministério da Saúde', 'Pneumologia ocupacional'] },

    { enunciado: 'Sobre a distinção entre asma ocupacional e asma agravada pelo trabalho, é CORRETO afirmar que:',
      alts: [
        { t: 'Na asma ocupacional por sensibilização a doença é causada pelo agente presente no trabalho e há período de latência até a sensibilização; na asma agravada pelo trabalho existe doença prévia que piora com condições laborais inespecíficas, e a distinção tem consequências diretas sobre a conduta e sobre o nexo.', ok: true,
          why: 'Correta. A diferença está na origem da doença e na presença de sensibilização específica, e ela determina se o afastamento do agente precisa ser definitivo ou se cabe controle da exposição a irritantes.' },
        { t: 'A distinção é apenas acadêmica, pois em ambas a conduta é idêntica: controle ambiental e tratamento medicamentoso, com manutenção na função.', ok: false,
          why: 'Errada. A consequência prática é grande: no quadro por sensibilização a retirada do agente é indispensável, o que não se resolve com controle parcial.' },
        { t: 'A asma agravada pelo trabalho não guarda relação com o trabalho e, portanto, não gera repercussão previdenciária em nenhuma hipótese.', ok: false,
          why: 'Errada. O agravamento pelo trabalho é forma clássica de relação com o trabalho por concausa e pode gerar repercussão.' },
        { t: 'A presença de período de latência é característica da asma agravada pelo trabalho e ausente na asma ocupacional.', ok: false,
          why: 'Errada por inversão: a latência até a sensibilização é característica da asma ocupacional por sensibilizante.' },
        { t: 'Só existe asma ocupacional quando o agente é de alto peso molecular, de origem proteica, como farinha e enzimas.', ok: false,
          why: 'Errada. Agentes de baixo peso molecular, como isocianatos e anidridos, são causas bem estabelecidas de asma ocupacional.' }
      ],
      comentario: 'Asma ocupacional: causada pelo trabalho, com latência quando há sensibilização, ou sem latência quando decorre de exposição irritante única e maciça. Asma agravada pelo trabalho: doença prévia que piora por irritantes inespecíficos, esforço, frio ou poeira. A conduta e o nexo mudam conforme a categoria.',
      pegadinha: 'Restringir asma ocupacional a agentes proteicos de alto peso molecular, deixando os isocianatos de fora.',
      refs: ['Asma relacionada ao trabalho — classificação', 'Doenças respiratórias relacionadas ao trabalho'] },

    { enunciado: 'Confirmado o diagnóstico de asma ocupacional por isocianatos, a conduta CORRETA quanto à manutenção na função é:',
      alts: [
        { t: 'Afastar o trabalhador de forma definitiva da exposição ao agente sensibilizante, pois após a sensibilização concentrações mínimas desencadeiam crises e o prognóstico depende da precocidade da retirada; respirador de maior desempenho e adicional de insalubridade não são alternativas aceitáveis.', ok: true,
          why: 'Correta. Sensibilização abole a relação dose-resposta habitual: exposições ínfimas desencadeiam crise, e o único manejo eficaz é a retirada definitiva do agente, tanto mais eficaz quanto mais precoce.' },
        { t: 'Manter o trabalhador na função com respirador de adução de ar e ensaio de vedação regular, solução que elimina o risco de exposição residual.', ok: false,
          why: 'Errada. Nenhum equipamento garante exposição zero em uso real, e o sensibilizado responde a concentrações mínimas.' },
        { t: 'Manter na função com tratamento de controle otimizado por corticoide inalatório, reavaliando apenas se houver crise grave.', ok: false,
          why: 'Errada. Tratar o sintoma e manter a exposição perpetua a inflamação e favorece a obstrução fixa das vias aéreas.' },
        { t: 'Reduzir a jornada de exposição pela metade, medida proporcional ao caráter dose-dependente da doença.', ok: false,
          why: 'Errada. A premissa está errada: após a sensibilização, a resposta não é proporcional à dose.' },
        { t: 'Aceitar a permanência mediante pagamento de adicional de insalubridade e assinatura de termo de ciência do risco pelo trabalhador.', ok: false,
          why: 'Errada. Adicional é compensação financeira, não medida de proteção, e não existe consentimento válido para manter exposição contraindicada.' }
      ],
      comentario: 'A regra central da asma ocupacional por sensibilizante: retirar definitivamente o trabalhador do contato com o agente, o mais cedo possível. Após a sensibilização não há dose segura, e por isso equipamento de proteção, redução de jornada e adicional de insalubridade não resolvem.',
      pegadinha: 'A oferta de "respirador melhor mais adicional" é sedutora porque parece atender empresa e trabalhador; tecnicamente é inaceitável.',
      refs: ['Asma ocupacional — conduta', 'Programa de Proteção Respiratória — limites do EPI'] },

    { enunciado: 'Quanto às repercussões documentais e previdenciárias do caso, é CORRETO afirmar que:',
      alts: [
        { t: 'Cabe emitir a comunicação de acidente do trabalho por doença ocupacional, com data de início da doença vinculada ao diagnóstico, e o atestado de saúde ocupacional deve concluir por inaptidão para funções com exposição a isocianatos, sem registrar o diagnóstico no documento entregue à empresa.', ok: true,
          why: 'Correta. Doença relacionada ao trabalho enseja comunicação, e a conclusão de aptidão é sempre função-específica e comunicada sem revelar diagnóstico.' },
        { t: 'A comunicação só é cabível se houver afastamento superior a quinze dias com concessão de benefício.', ok: false,
          why: 'Errada. A comunicação de doença relacionada ao trabalho independe de afastamento e de concessão de benefício.' },
        { t: 'O atestado de saúde ocupacional deve trazer o diagnóstico de asma ocupacional para que a empresa possa afastar corretamente o trabalhador do agente.', ok: false,
          why: 'Errada. A empresa precisa da restrição, não do diagnóstico; informar a doença viola o sigilo.' },
        { t: 'A conclusão adequada é de inaptidão para o trabalho em geral, uma vez que a asma é doença crônica.', ok: false,
          why: 'Errada. A inaptidão é para a exposição ao agente sensibilizante; o trabalhador permanece apto a inúmeras outras funções.' },
        { t: 'Como a doença tem componente individual de suscetibilidade, o registro deve ser feito como doença comum, sem natureza acidentária.', ok: false,
          why: 'Errada. Suscetibilidade individual é inerente às doenças por sensibilização e não retira a natureza ocupacional quando o agente é do trabalho.' }
      ],
      comentario: 'Doença relacionada ao trabalho gera comunicação independentemente de afastamento. O documento de aptidão declara conclusão e restrição — inapto para exposição a determinado agente — e nunca diagnóstico. Suscetibilidade individual não descaracteriza a origem ocupacional.',
      pegadinha: 'Escrever o diagnóstico no documento de aptidão sob o argumento de que a empresa "precisa saber para proteger".',
      refs: ['NR-7 — atestado de saúde ocupacional', 'Código de Ética Médica — sigilo', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre os demais pintores da oficina, a conduta de vigilância e controle CORRETA é:',
      alts: [
        { t: 'Priorizar controles coletivos — cabine com exaustão adequada, aplicação em sistema fechado e substituição por produtos sem isocianato quando tecnicamente viável — e instituir vigilância de sintomas respiratórios com espirometria e questionário dirigido nos expostos, com investigação imediata de quem referir sintomas relacionados ao turno.', ok: true,
          why: 'Correta. Combina eliminação e controle na fonte com vigilância médica dirigida, que é o desenho adequado para agentes sensibilizantes respiratórios.' },
        { t: 'Realizar teste cutâneo de sensibilização a isocianatos em todos os candidatos na admissão, excluindo do emprego os positivos, medida que previne integralmente novos casos.', ok: false,
          why: 'Errada. Além de baixa utilidade preditiva, a triagem admissional para excluir suscetíveis é prática discriminatória que transfere ao indivíduo a solução de um problema ambiental.' },
        { t: 'Distribuir respiradores de maior fator de proteção a todos e considerar o risco controlado, dispensando avaliação médica periódica dirigida.', ok: false,
          why: 'Errada. Proteção individual não substitui o controle na fonte e não dispensa vigilância médica.' },
        { t: 'Aguardar novos casos diagnosticados para então revisar o processo de trabalho, evitando alterações onerosas sem evidência local.', ok: false,
          why: 'Errada. O caso índice já é a evidência local, e esperar novos doentes é o contrário de vigilância.' },
        { t: 'Limitar a vigilância à realização anual de radiografia de tórax nos pintores, exame de escolha para detecção precoce de doença respiratória ocupacional.', ok: false,
          why: 'Errada. A radiografia não detecta asma; a vigilância de agentes sensibilizantes se faz por sintomas dirigidos e função pulmonar.' }
      ],
      comentario: 'Para sensibilizantes respiratórios, vigilância é questionário dirigido de sintomas mais função pulmonar, com investigação imediata dos sintomáticos, e controle é eliminação, substituição, sistema fechado e exaustão. Triagem admissional para excluir suscetíveis é discriminatória e ineficaz.',
      pegadinha: 'Radiografia de tórax como exame de vigilância para asma, e triagem admissional excludente apresentada como prevenção.',
      refs: ['Vigilância de agentes sensibilizantes respiratórios', 'Hierarquia de controles', 'Código de Ética Médica'] }
  ] },

{ id: 'caso-008',
  titulo: 'Perda auditiva em operador de prensa têxtil',
  temas: ['4.5', '2.2', '6.1'],
  nivel: 'dificil',
  vinheta: 'Operador de máquina de tecelagem, 42 anos, doze anos na mesma função, exposto a ruído contínuo medido em torno de noventa e cinco decibéis, com uso irregular de protetor auditivo de inserção fornecido sem treinamento e sem verificação de adaptação. No exame periódico, queixa-se de zumbido bilateral há dois anos, dificuldade para entender conversas em ambiente ruidoso e necessidade de aumentar o volume da televisão. Nega otorreia, otalgia, vertigem, trauma craniano, uso de ototóxicos, doenças infecciosas do ouvido na infância e exposição a ruído em atividades de lazer. Não é diabético. A audiometria realizada após repouso auditivo adequado mostra perda auditiva neurossensorial bilateral, com limiares normais até dois mil hertz, entalhe nas frequências de quatro e seis mil hertz, com limiares em torno de cinquenta e cinco decibéis, e melhora parcial dos limiares em oito mil hertz. A curva é semelhante nos dois lados. A audiometria admissional, de doze anos atrás, era normal em todas as frequências. A empresa pergunta se deve afastar o trabalhador da função.',
  questoes: [
    { enunciado: 'A interpretação CORRETA do traçado audiométrico, no contexto ocupacional descrito, é:',
      alts: [
        { t: 'O padrão é altamente sugestivo de perda auditiva induzida por níveis elevados de pressão sonora: neurossensorial, bilateral, aproximadamente simétrica, com entalhe nas frequências de quatro e seis mil hertz e recuperação relativa em oito mil hertz, poupando as frequências graves.', ok: true,
          why: 'Correta. Reúne todos os atributos descritivos clássicos do dano coclear por ruído, inclusive a recuperação parcial na frequência mais aguda testada.' },
        { t: 'O padrão descrito é característico de presbiacusia, que se manifesta com entalhe isolado em quatro e seis mil hertz e recuperação em oito mil hertz.', ok: false,
          why: 'Errada. A perda relacionada à idade costuma ser descendente e progressiva a partir das frequências agudas, sem entalhe com recuperação posterior, e seria incomum nessa magnitude aos quarenta e dois anos.' },
        { t: 'A simetria entre os lados afasta a origem ocupacional e sugere causa retrococlear.', ok: false,
          why: 'Errada por inversão: a perda por ruído é tipicamente simétrica, e é a assimetria importante que obriga a investigar causa retrococlear.' },
        { t: 'A ausência de comprometimento nas frequências graves indica perda condutiva incipiente.', ok: false,
          why: 'Errada. Perda condutiva altera a comparação entre vias aérea e óssea, frequentemente com predomínio em graves; nada disso está descrito.' },
        { t: 'O achado é compatível com trauma acústico agudo, que se caracteriza por perda bilateral simétrica de instalação lenta.', ok: false,
          why: 'Errada. Trauma acústico decorre de evento único de altíssima intensidade, é de instalação súbita e frequentemente assimétrico.' }
      ],
      comentario: 'Descrição clássica do dano coclear por ruído: neurossensorial, bilateral, quase sempre simétrica, irreversível, com entalhe em três, quatro ou seis mil hertz e recuperação relativa em oito mil hertz, poupando inicialmente as frequências da fala. Assimetria relevante desloca a investigação para causas retrococleares.',
      pegadinha: 'A simetria é oferecida como argumento contra a origem ocupacional, quando é justamente um de seus atributos.',
      refs: ['Perda Auditiva Induzida por Ruído — critérios diagnósticos', 'Audiometria ocupacional'] },

    { enunciado: 'No diagnóstico diferencial e na avaliação complementar deste caso, é CORRETO afirmar que:',
      alts: [
        { t: 'O diagnóstico é de exclusão apoiado em história ocupacional, exame otorrinolaringológico e comparação com a audiometria de referência, devendo-se investigar exposição concomitante a solventes ototóxicos, que potencializam o efeito do ruído mesmo abaixo do limite de tolerância.', ok: true,
          why: 'Correta. A interação entre ruído e solventes ototóxicos é bem documentada e amplia o dano, o que torna a pesquisa de exposição química parte obrigatória da avaliação.' },
        { t: 'A ressonância magnética de crânio é exame obrigatório em toda perda auditiva ocupacional, para afastar tumor do nervo vestibulococlear.', ok: false,
          why: 'Errada. A indicação de imagem se coloca diante de assimetria significativa ou de sinais neurológicos, não em toda perda bilateral simétrica típica.' },
        { t: 'A presença de zumbido bilateral indica origem central e afasta lesão coclear por ruído.', ok: false,
          why: 'Errada. Zumbido é sintoma frequentemente associado à lesão coclear por ruído, e não sinal de origem central.' },
        { t: 'A audiometria admissional normal é irrelevante, pois o diagnóstico se faz apenas com o exame atual.', ok: false,
          why: 'Errada. A comparação com o exame de referência é o que documenta a evolução e sustenta a relação temporal com a exposição.' },
        { t: 'A perda auditiva por ruído tende a progredir indefinidamente mesmo após o afastamento da exposição, o que dispensa a análise de exames anteriores.', ok: false,
          why: 'Errada. Cessada a exposição, a perda por ruído não progride em razão dela; a progressão posterior aponta para outra causa.' }
      ],
      comentario: 'O diagnóstico se sustenta em três pilares: história ocupacional consistente, padrão audiométrico compatível e exclusão de outras causas, sempre com comparação à audiometria de referência. Solventes ototóxicos e a interação com o ruído devem ser ativamente pesquisados. Após cessada a exposição, a perda não progride por causa do ruído.',
      pegadinha: 'Dispensar a audiometria de referência é abrir mão do principal argumento de nexo temporal.',
      refs: ['Ototoxicidade química e interação ruído-solvente', 'Audiometria ocupacional — audiograma de referência e sequencial'] },

    { enunciado: 'Quanto à repercussão funcional e à conclusão de aptidão, a orientação CORRETA à empresa é:',
      alts: [
        { t: 'A perda estabelecida raramente implica, por si só, incapacidade para o trabalho, de modo que a conduta não é o afastamento automático da função, mas a intensificação das medidas de controle do ruído, a garantia de proteção auditiva efetiva e o acompanhamento audiométrico com periodicidade reforçada.', ok: true,
          why: 'Correta. Nesse tipo de perda a conduta é preventiva e de controle da exposição, e o afastamento da função não é a resposta padrão nem interrompe a evolução já ocorrida.' },
        { t: 'O trabalhador deve ser considerado inapto e afastado imediatamente da função, pois qualquer exposição adicional reverterá o quadro em surdez profunda.', ok: false,
          why: 'Errada. Esse tipo de perda não costuma evoluir para surdez profunda, e o afastamento automático não é a conduta indicada.' },
        { t: 'Deve-se apenas registrar o achado e manter a periodicidade habitual dos exames, pois a perda é irreversível e nada mais há a fazer.', ok: false,
          why: 'Errada. Irreversibilidade do dano já instalado não impede prevenir a progressão enquanto houver exposição; conformismo aqui é omissão.' },
        { t: 'A conduta correta é o encaminhamento imediato para aposentadoria por incapacidade permanente, dada a natureza definitiva da lesão.', ok: false,
          why: 'Errada. Não há incapacidade total e permanente, e o trabalhador segue produtivo em sua função e em outras.' },
        { t: 'Como a perda ainda não atinge as frequências da fala de forma acentuada, o caso não exige nenhuma medida específica além do fornecimento continuado de protetor.', ok: false,
          why: 'Errada. O caso exige revisão do programa de conservação auditiva e das medidas de engenharia, e não apenas manter a entrega de protetores que já se mostrou ineficaz.' }
      ],
      comentario: 'Perda auditiva induzida por níveis elevados de pressão sonora raramente incapacita para o trabalho. O achado é indicador de falha do controle e obriga a agir sobre a exposição e sobre o programa de conservação auditiva, com seguimento audiométrico reforçado, e não a afastar o trabalhador como resposta padrão.',
      pegadinha: 'Duas condutas opostas e igualmente erradas: afastar automaticamente e não fazer nada porque a lesão é irreversível.',
      refs: ['NR-7 — anexo de audiometria ocupacional', 'Programa de Conservação Auditiva'] },

    { enunciado: 'Sobre o registro do caso e o enquadramento legal, é CORRETO afirmar que:',
      alts: [
        { t: 'O agravo deve ser comunicado como doença relacionada ao trabalho e notificado ao sistema de vigilância em saúde; a caracterização de deficiência auditiva para fins legais depende de critério próprio, baseado na média de limiares nas frequências da fala em ambos os ouvidos, e não se confunde com o diagnóstico do agravo ocupacional.', ok: true,
          why: 'Correta. Diagnóstico clínico-ocupacional e enquadramento legal de deficiência são categorias distintas, com critérios distintos, e ambos os registros são devidos.' },
        { t: 'Todo trabalhador com perda auditiva induzida por ruído é automaticamente enquadrado como pessoa com deficiência auditiva para fins de cota legal.', ok: false,
          why: 'Errada. O enquadramento legal exige critério audiométrico próprio, geralmente não atingido nessas perdas, que poupam as frequências conversacionais nas fases iniciais.' },
        { t: 'Não cabe comunicação previdenciária porque não houve afastamento nem incapacidade.', ok: false,
          why: 'Errada. Doença relacionada ao trabalho é comunicada independentemente de afastamento ou incapacidade.' },
        { t: 'A notificação em saúde é facultativa nesse agravo, ficando a critério do serviço médico da empresa.', ok: false,
          why: 'Errada. A perda auditiva relacionada ao trabalho integra a lista de agravos de notificação compulsória.' },
        { t: 'O enquadramento como deficiência auditiva depende exclusivamente do grau de zumbido e da dificuldade relatada em ambientes ruidosos.', ok: false,
          why: 'Errada. Sintomas orientam a investigação, mas o enquadramento legal se apoia em critério audiométrico objetivo.' }
      ],
      comentario: 'Separe três planos: diagnóstico do agravo, obrigações de registro — comunicação previdenciária e notificação em saúde, ambas independentes de afastamento — e enquadramento legal de deficiência auditiva, que depende de critério audiométrico próprio nas frequências da fala e raramente é atingido nas fases iniciais dessa perda.',
      pegadinha: 'Equiparar diagnóstico do agravo ocupacional a enquadramento legal de deficiência para fins de cota.',
      refs: ['Definição legal de deficiência auditiva', 'Lista de agravos de notificação compulsória relacionados ao trabalho'] },

    { enunciado: 'Sobre o programa de conservação auditiva da empresa, a avaliação CORRETA é:',
      alts: [
        { t: 'O programa está falhando, pois entrega protetores sem treinamento, sem verificação de adaptação e sem avaliação de eficácia; a estrutura adequada começa por medidas de engenharia sobre a fonte e a trajetória do ruído, e o monitoramento audiométrico serve para avaliar a eficácia do conjunto, não para substituir o controle.', ok: true,
          why: 'Correta. Programa de conservação auditiva é sistema: controle de engenharia, controle administrativo, proteção individual bem selecionada e treinada, monitoramento audiométrico, educação e avaliação da própria eficácia.' },
        { t: 'O programa é adequado, pois fornece protetor auditivo e realiza audiometria periódica, que são seus dois únicos componentes obrigatórios.', ok: false,
          why: 'Errada. Reduzir o programa a protetor mais audiometria é exatamente o modelo que falhou neste caso.' },
        { t: 'A audiometria periódica é medida de prevenção primária, pois impede a instalação da perda auditiva nos expostos.', ok: false,
          why: 'Errada. Exame de rastreamento detecta precocemente; é prevenção secundária, e não impede a lesão.' },
        { t: 'A escolha do protetor deve se orientar exclusivamente pelo maior valor de atenuação declarado, independentemente de conforto e adaptação.', ok: false,
          why: 'Errada. Atenuação excessiva prejudica comunicação e percepção de alarmes e reduz a adesão; a seleção considera atenuação necessária, conforto e adaptação individual.' },
        { t: 'Sendo o nível de ruído contínuo, não há medidas de engenharia aplicáveis, restando apenas a proteção individual.', ok: false,
          why: 'Errada. Enclausuramento de máquinas, barreiras acústicas, manutenção, tratamento de superfícies e isolamento de postos são medidas aplicáveis a ruído contínuo.' }
      ],
      comentario: 'Programa de conservação auditiva não é sinônimo de protetor mais audiometria. É um sistema com controle de engenharia na fonte e na trajetória, controle administrativo do tempo de exposição, seleção e treinamento em proteção individual, monitoramento audiométrico e avaliação periódica da própria eficácia. Audiometria é prevenção secundária.',
      pegadinha: 'Tratar audiometria periódica como prevenção primária, e escolher protetor apenas pelo maior valor de atenuação.',
      refs: ['Programa de Conservação Auditiva', 'NHO de avaliação da exposição ocupacional ao ruído'] }
  ] }

);
