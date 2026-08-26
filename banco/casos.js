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
        { t: 'Trata-se de exposição percutânea de alto risco, cabendo colher testes rápidos da fonte e da acidentada e decidir sobre a profilaxia sem aguardar as sorologias convencionais.', ok: true,
          why: 'Correta. Agulha oca de grosso calibre, lesão profunda e sangue visível compõem exposição de alto risco. A profilaxia tem janela de horas, e o teste rápido existe justamente para permitir decidir sem esperar a sorologia convencional.' },
        { t: 'A conduta correta é aguardar o resultado das sorologias convencionais do paciente-fonte, que são mais específicas que os testes rápidos, antes de decidir sobre a profilaxia, para não expor a trabalhadora a medicação desnecessária.', ok: false,
          why: 'Incorreta. As sorologias convencionais de fato são o padrão para diagnóstico, mas levam dias. A profilaxia perde eficácia com o tempo, e por isso a decisão se apoia no teste rápido.' },
        { t: 'A lavagem com água e sabão está indicada, mas é insuficiente: o ferimento deve ainda ser espremido e tratado com solução cáustica ou hipoclorito para inativar o vírus no sítio da lesão.', ok: false,
          why: 'Incorreta. A lavagem com água e sabão é exatamente a conduta recomendada. Espremer e usar cáusticos aumenta a lesão tecidual e não reduz o risco de transmissão.' },
        { t: 'A exposição deve ser classificada como de baixo risco, pois o paciente-fonte estava internado por pneumonia comunitária, sem diagnóstico ou suspeita de infecção transmissível por via sanguínea.', ok: false,
          why: 'Incorreta. O risco se estima pelo tipo de exposição e pela condição sorológica da fonte, que era desconhecida. Ausência de diagnóstico prévio não equivale a fonte negativa.' },
        { t: 'Como já se passaram mais de trinta minutos do acidente, a janela de eficácia da profilaxia pós-exposição se encerrou e resta apenas o acompanhamento sorológico seriado.', ok: false,
          why: 'Incorreta. Quanto mais precoce, melhor, idealmente nas primeiras horas. Mas a indicação se conta em horas a poucos dias, e não em minutos.' }
      ],
      comentario: 'Na exposição a material biológico, os determinantes de risco são o tipo de exposição (percutânea, mucosa, pele não íntegra), o dispositivo (agulha com lúmen e sangue visível), a profundidade e o estado do paciente-fonte. A decisão é clínica e urgente, apoiada em teste rápido.',
      pegadinha: 'Duas condutas erradas com aparência de zelo: aguardar sorologia convencional e agredir o ferimento com cáusticos.',
      refs: ['Protocolo do Ministério da Saúde para exposição a material biológico', 'NR de segurança em serviços de saúde'] },

    { enunciado: 'O teste rápido do paciente-fonte resulta reagente para o vírus da imunodeficiência humana; o da trabalhadora é não reagente. Sobre a profilaxia antirretroviral, a conduta CORRETA é:',
      alts: [
        { t: 'Iniciar de imediato o esquema profilático combinado, mantê-lo por vinte e oito dias e acompanhar a trabalhadora com testagem sorológica seriada e orientação de prevenção secundária.', ok: true,
          why: 'Correta. A profilaxia é feita com esquema combinado por vinte e oito dias completos, com seguimento sorológico e cuidados para evitar transmissão a terceiros durante o período de janela.' },
        { t: 'Iniciar a profilaxia e suspendê-la assim que a primeira sorologia da trabalhadora, colhida após uma semana, resultar não reagente, conduta que reduz a exposição desnecessária à toxicidade do esquema.', ok: false,
          why: 'Incorreta. Sorologia não reagente na primeira semana apenas reflete o período de janela imunológica e não autoriza interromper o esquema, que deve ser completado.' },
        { t: 'Prescrever monoterapia antirretroviral, reservando os esquemas combinados para as exposições em que a fonte esteja sabidamente em falha terapêutica ou com carga viral elevada.', ok: false,
          why: 'Incorreta. A profilaxia pós-exposição é sempre feita com esquema combinado. A monoterapia foi abandonada por eficácia insuficiente.' },
        { t: 'Substituir a profilaxia medicamentosa por vigilância sorológica intensiva, com coletas mensais, iniciando tratamento antirretroviral apenas se houver soroconversão documentada.', ok: false,
          why: 'Incorreta. Trocar profilaxia por vigilância abre mão da única janela em que a infecção ainda pode ser evitada. Tratar depois da soroconversão não devolve essa chance.' },
        { t: 'Condicionar o início da profilaxia ao resultado da carga viral do paciente-fonte, iniciando o esquema somente se ela estiver detectável.', ok: false,
          why: 'Incorreta. Esperar a carga viral atrasa a profilaxia. Carga viral indetectável reduz, mas não anula, o risco diante de exposição de alto risco.' }
      ],
      comentario: 'Fonte reagente somada a exposição percutânea de risco indica profilaxia antirretroviral combinada, iniciada o mais precocemente possível e mantida por vinte e oito dias, com seguimento sorológico e orientação sobre transmissão secundária no período.',
      pegadinha: 'Sorologia precoce não reagente é oferecida como motivo para interromper a profilaxia — não é.',
      refs: ['Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pós-Exposição de Risco ao HIV'] },

    { enunciado: 'Quanto à hepatite B, considerando o esquema vacinal completo sem comprovação de resposta e o cartão não localizado, a conduta CORRETA é:',
      alts: [
        { t: 'Dosar os anticorpos contra o antígeno de superfície e, sem resultado em tempo útil, tratá-la como possível não respondedora.', ok: true,
          why: 'Correta. O esquema vacinal completo não garante resposta: uma parcela dos vacinados não soroconverte. Sem título conhecido em tempo útil, indica-se imunoglobulina específica e dose de vacina conforme a avaliação de risco da fonte.' },
        { t: 'Nenhuma medida específica é necessária quanto à hepatite B, pois o esquema vacinal completo confere proteção duradoura, independentemente de comprovação sorológica de resposta.', ok: false,
          why: 'Incorreta. A memória imunológica de fato é duradoura em quem respondeu, mas a trabalhadora nunca comprovou resposta, e não respondedores existem e permanecem suscetíveis.' },
        { t: 'Reiniciar o esquema vacinal completo desde a primeira dose, sem indicar imunoglobulina, pois esta se destina apenas a quem nunca recebeu qualquer dose de vacina.', ok: false,
          why: 'Incorreta. A imunoglobulina não se limita a não vacinados: ela é indicada também para vacinados sem resposta comprovada diante de fonte de risco.' },
        { t: 'Indicar apenas a imunoglobulina específica, sem qualquer dose de vacina, uma vez que o esquema vacinal prévio foi completo e não há o que reforçar do ponto de vista ativo.', ok: false,
          why: 'Incorreta. A imunoglobulina dá proteção passiva e temporária. A dose de vacina é o que pode desencadear resposta ativa e é indicada em conjunto na avaliação de risco.' },
        { t: 'Aguardar quatro semanas e então dosar os anticorpos, pois a titulação feita logo após a exposição sofre interferência e resulta sempre falsamente elevada.', ok: false,
          why: 'Incorreta. A dosagem deve ser solicitada de imediato, porque a decisão sobre imunoglobulina tem prazo curto. Esperar um mês inviabiliza a profilaxia.' }
      ],
      comentario: 'A regra é simples: proteção contra hepatite B em contexto pós-exposição se demonstra por título de anticorpos, não por história de vacinação. Sem comprovação disponível em tempo útil, conduz-se o caso como o de não respondedor. Para hepatite C não há profilaxia pós-exposição: a conduta é seguimento e tratamento precoce se houver infecção.',
      pegadinha: 'Tratar "esquema completo" como sinônimo de "imunizado" é o erro central; e a imunoglobulina não é exclusiva de não vacinados.',
      refs: ['Protocolo do Ministério da Saúde para exposição a material biológico', 'Calendário de vacinação do trabalhador da saúde'] },

    { enunciado: 'Sobre os registros e comunicações devidos neste caso, é CORRETO afirmar que:',
      alts: [
        { t: 'O acidente deve ser comunicado à Previdência como acidente do trabalho e notificado ao sistema de agravos de notificação, mesmo sem afastamento e mesmo sem soroconversão.', ok: true,
          why: 'Correta. Acidente com material biológico é acidente do trabalho típico e agravo de notificação compulsória. Nenhuma das duas obrigações depende de afastamento ou de desfecho sorológico.' },
        { t: 'A comunicação previdenciária só se torna devida se houver soroconversão comprovada no seguimento, pois antes disso não existe doença nem lesão a comunicar.', ok: false,
          why: 'Incorreta. A comunicação registra o acidente em si, com o risco e o seguimento que ele impõe, e não apenas o eventual desfecho infeccioso.' },
        { t: 'A notificação em saúde substitui a comunicação previdenciária quando ambas se referem ao mesmo evento, evitando duplicidade de registro sobre o mesmo trabalhador.', ok: false,
          why: 'Incorreta. São sistemas distintos, com finalidades distintas, vigilância epidemiológica e proteção previdenciária, e ambos devem ser alimentados.' },
        { t: 'Por se tratar de servidora de hospital público, vinculada a regime próprio, o evento é registrado apenas no serviço interno de saúde do servidor, sem notificação externa.', ok: false,
          why: 'Incorreta. O regime previdenciário muda o instrumento de registro do acidente, mas a notificação do agravo ao sistema de vigilância em saúde independe do vínculo.' },
        { t: 'A comunicação deve ser feita ao final do seguimento sorológico de seis meses, com o resultado consolidado, para que o registro reflita o desfecho real da exposição.', ok: false,
          why: 'Incorreta. O prazo de comunicação é imediato. O desfecho é acompanhado depois e não é condição para o registro.' }
      ],
      comentario: 'Exposição a material biológico gera dois registros paralelos e imediatos: comunicação previdenciária do acidente do trabalho e notificação compulsória em saúde. Nenhum deles depende de afastamento, de sintoma ou de soroconversão.',
      pegadinha: 'A ideia de que "sem doença não há o que comunicar" é a raiz da subnotificação e é exatamente o que a questão testa.',
      refs: ['Lei nº 8.213/1991 — arts. 19 a 22', 'Portaria de notificação compulsória'] },

    { enunciado: 'Concluída a conduta individual, o serviço de saúde ocupacional identifica que os acidentes com perfurocortantes na unidade se concentram no reencape de agulhas e na sobrecarga do plantão noturno. A medida prioritária de vigilância e prevenção é:',
      alts: [
        { t: 'Implantar dispositivos com mecanismo de segurança integrado, abolir o reencape com descarte imediato em recipiente rígido no ponto de uso e revisar o dimensionamento do plantão noturno.', ok: true,
          why: 'Correta. A hierarquia de controle começa pela eliminação do risco na fonte: agulha com dispositivo de segurança e descarte imediato junto ao leito. A sobrecarga do plantão noturno é fator organizacional que precisa ser enfrentado.' },
        { t: 'Intensificar o treinamento sobre a técnica correta de reencape com uma só mão, que dispensa a aproximação das duas mãos da agulha e reduz o risco de perfuração.', ok: false,
          why: 'Incorreta. O reencape deve ser abolido, e não aperfeiçoado. Treinar técnica de reencape mantém o risco em vez de eliminá-lo.' },
        { t: 'Distribuir luvas de maior espessura, ou luvas duplas, a toda a equipe de enfermagem, medida capaz de conter as perfurações por agulha nesse tipo de procedimento.', ok: false,
          why: 'Incorreta. A luva dupla reduz o volume de sangue inoculado, mas não impede a perfuração por agulha oca e não substitui o controle na fonte.' },
        { t: 'Instituir testagem sorológica periódica compulsória de todos os pacientes internados, para que a equipe conheça previamente o risco biológico associado a cada leito.', ok: false,
          why: 'Incorreta. Testagem compulsória viola autonomia e sigilo e cria falsa segurança pelo período de janela. A resposta é a precaução padrão para todos.' },
        { t: 'Concentrar a resposta na criação de um fluxo de atendimento pós-exposição mais ágil e disponível nas vinte e quatro horas, já que a prevenção primária desse acidente é inviável.', ok: false,
          why: 'Incorreta. O fluxo ágil é necessário, mas é resposta ao dano já ocorrido. A prevenção primária é perfeitamente viável e tem prioridade.' }
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
        { t: 'O diagnóstico é essencialmente clínico; a ultrassonografia é complementar e seus achados isolados têm valor limitado.', ok: true,
          why: 'Correta. Dor relacionada ao uso, dor noturna e testes de conflito positivos sustentam o diagnóstico. Alterações tendíneas na ultrassonografia são frequentes em pessoas assintomáticas, o que limita o valor do achado isolado.' },
        { t: 'O diagnóstico depende da demonstração de ruptura tendínea completa em exame de imagem, sem a qual o quadro deve ser classificado apenas como dor de ombro inespecífica.', ok: false,
          why: 'Incorreta. A tendinopatia sem ruptura é a apresentação mais comum e tem diagnóstico próprio. Exigir ruptura completa excluiria a maioria dos casos verdadeiros.' },
        { t: 'A presença de alterações ultrassonográficas em grande parte dos trabalhadores do setor demonstra tratar-se de fenômeno degenerativo natural da idade, sem relação com a tarefa executada.', ok: false,
          why: 'Incorreta. Alta prevalência em um grupo exposto sugere justamente exposição compartilhada. O achado de imagem em assintomáticos limita o valor do exame, não o nexo do caso sintomático.' },
        { t: 'A eletroneuromiografia é o exame de escolha para confirmar a tendinopatia do manguito rotador e para graduar o comprometimento funcional do ombro.', ok: false,
          why: 'Incorreta. A eletroneuromiografia avalia nervo e músculo, não tendão. Ela serve ao diferencial com radiculopatia e com neuropatias, não à confirmação da tendinopatia.' },
        { t: 'A ausência de perda de força e de atrofia da musculatura periescapular afasta o acometimento do manguito rotador e aponta para dor de origem cervical.', ok: false,
          why: 'Incorreta. Força preservada é a regra na tendinopatia sem ruptura. Atrofia é achado tardio e sua ausência não exclui nada.' }
      ],
      comentario: 'Nos quadros do ombro relacionados ao trabalho, a clínica manda: dor relacionada ao uso, dor noturna, arco doloroso e testes de conflito. A imagem é adjuvante. O argumento de que "todo mundo tem alteração no exame" é epidemiologicamente invertido: prevalência elevada em grupo exposto sugere efeito da exposição.',
      pegadinha: 'A alta prevalência de achados no setor é apresentada como prova de normalidade, quando é indício de exposição comum.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Doenças relacionadas ao trabalho — manual de procedimentos'] },

    { enunciado: 'Aplicando a classificação de Schilling e os critérios de nexo, a análise CORRETA é:',
      alts: [
        { t: 'O trabalho atua como fator contributivo entre outras causas possíveis, situação típica do grupo II de Schilling, e o nexo se apoia em exposição documentada, plausibilidade biomecânica, relação temporal e exclusão de causas alternativas relevantes.', ok: true,
          why: 'Correta. No grupo II o trabalho é causa contributiva, não necessária. O raciocínio de nexo é probabilístico e se constrói com esses quatro elementos somados.' },
        { t: 'Só haveria nexo se o trabalho fosse causa necessária e suficiente do agravo, situação correspondente ao grupo I de Schilling, em que a doença não ocorre sem a exposição.', ok: false,
          why: 'Incorreta. A descrição do grupo I está certa, mas exigir esse padrão para todo agravo excluiria as doenças relacionadas ao trabalho dos grupos II e III.' },
        { t: 'A existência de fatores individuais, como idade e condicionamento físico, desloca automaticamente o caso para fora do campo das doenças relacionadas ao trabalho.', ok: false,
          why: 'Incorreta. Fatores individuais coexistem com o fator ocupacional e configuram concausa. Concausa não elimina o nexo, integra a análise.' },
        { t: 'O nexo depende de que a trabalhadora seja a única do setor com o agravo, pois a ocorrência do mesmo quadro em vários colegas indica causa externa ao ambiente de trabalho.', ok: false,
          why: 'Incorreta. O raciocínio está invertido: o agrupamento de casos no mesmo setor é evidência epidemiológica a favor do nexo, não contra.' },
        { t: 'Tratando-se de agravo do grupo III de Schilling, o trabalho apenas desencadeia doença latente, hipótese em que o nexo é meramente presumido e não sustenta reconhecimento acidentário.', ok: false,
          why: 'Incorreta. Duplo erro: o caso é de grupo II, e mesmo no grupo III o trabalho como desencadeante gera reconhecimento e repercussão previdenciária.' }
      ],
      comentario: 'Schilling I: trabalho como causa necessária. II: trabalho como fator contributivo entre vários. III: trabalho como provocador ou agravador de doença latente ou preexistente. Os agravos osteomusculares são o exemplo canônico do grupo II, e a exigência de causa exclusiva é o erro de raciocínio mais comum nesse tema.',
      pegadinha: 'Exigir exclusividade causal ou unicidade do caso no setor — dois requisitos que não existem.',
      refs: ['Classificação de Schilling', 'Lista de Doenças Relacionadas ao Trabalho — Ministério da Saúde'] },

    { enunciado: 'A empresa deseja contestar administrativamente o reconhecimento acidentário fundado em nexo epidemiológico. Sobre esse mecanismo, é CORRETO afirmar que:',
      alts: [
        { t: 'O nexo epidemiológico resulta do cruzamento entre a atividade econômica da empresa e a entidade mórbida do trabalhador e gera presunção relativa, que pode ser afastada por prova técnica da empresa.', ok: true,
          why: 'Correta. O nexo técnico epidemiológico inverte o ônus da prova, mas a presunção é relativa: cabe à empresa demonstrar tecnicamente que o agravo não guarda relação com o trabalho ali executado.' },
        { t: 'A alegação de que se trata de doença degenerativa relacionada à idade é, por si só, suficiente para desconstituir a presunção decorrente do nexo epidemiológico.', ok: false,
          why: 'Incorreta. A alegação genérica de degeneração não é prova técnica. Seria preciso demonstrar as condições concretas do posto e a ausência de sobrecarga.' },
        { t: 'O nexo epidemiológico depende de prévia emissão da comunicação de acidente do trabalho pela empresa, sem a qual a perícia não pode aplicá-lo.', ok: false,
          why: 'Incorreta. O nexo epidemiológico foi criado exatamente para operar quando a empresa não emite a comunicação, corrigindo a subnotificação.' },
        { t: 'Reconhecido o nexo epidemiológico na perícia, a presunção passa a ser absoluta e a única via de que a empresa dispõe é a contestação judicial do benefício.', ok: false,
          why: 'Incorreta. Existe contestação administrativa própria, com prazo e instrução técnica, antes de qualquer discussão judicial.' },
        { t: 'Acolhida a contestação, o benefício é automaticamente convertido em aposentadoria por incapacidade permanente de natureza comum.', ok: false,
          why: 'Incorreta. A contestação discute apenas a natureza acidentária ou comum do benefício. Ela não altera o grau nem a espécie da incapacidade reconhecida.' }
      ],
      comentario: 'Três nexos a distinguir: profissional ou do trabalho, pela lista agente-doença; epidemiológico, pelo cruzamento entre atividade econômica e agravo, com presunção relativa; e individual, pela análise do caso concreto. Só o epidemiológico opera automaticamente, e é contestável administrativamente mediante prova técnica.',
      pegadinha: 'Tratar a presunção como absoluta, ou supor que a simples alegação de doença degenerativa a desconstitui.',
      refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

    { enunciado: 'Sobre a caracterização da incapacidade e a conduta durante o afastamento, é CORRETO afirmar que:',
      alts: [
        { t: 'A incapacidade é, neste momento, temporária e parcial, e o afastamento da exposição biomecânica é medida terapêutica, não apenas administrativa.', ok: true,
          why: 'Correta. O quadro é potencialmente reversível com tratamento e reabilitação, o que caracteriza incapacidade temporária. Manter a sobrecarga que sustenta a lesão inviabiliza qualquer tratamento.' },
        { t: 'A incapacidade deve ser considerada permanente desde já, pois a tendinopatia envolve alteração estrutural do tendão e, uma vez instalada, não regride.', ok: false,
          why: 'Incorreta. A tendinopatia responde a tratamento conservador e reabilitação na maioria dos casos. Declarar permanência nesta fase é prematuro.' },
        { t: 'Não há incapacidade a reconhecer, pois a força muscular está preservada e a trabalhadora ainda consegue executar as tarefas do posto, mesmo referindo dor.', ok: false,
          why: 'Incorreta. Capacidade de executar com dor e com risco de agravamento não é aptidão. A avaliação considera a exigência da tarefa, não apenas a força medida.' },
        { t: 'O tratamento deve ser conduzido com manutenção na mesma tarefa, para evitar descondicionamento muscular e perda da destreza específica adquirida no posto.', ok: false,
          why: 'Incorreta. Manter a exposição perpetua o estímulo lesivo. O descondicionamento se previne com reabilitação dirigida, não com a continuidade da sobrecarga.' },
        { t: 'A infiltração com corticosteroide, repetida conforme a recorrência da dor, é a conduta de primeira linha e substitui a necessidade de intervenção no posto de trabalho.', ok: false,
          why: 'Incorreta. A infiltração é recurso pontual, com risco de dano tendíneo quando repetida, e nunca substitui a intervenção sobre a causa.' }
      ],
      comentario: 'Nos quadros osteomusculares relacionados ao trabalho, o afastamento da exposição é intervenção terapêutica. Devolver o trabalhador ao mesmo posto sem mudança do determinante é a causa mais frequente de recidiva e de cronificação.',
      pegadinha: 'A ideia de que "consegue trabalhar com dor, logo não há incapacidade" é a armadilha central.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Avaliação da incapacidade em DORT'] },

    { enunciado: 'Após melhora clínica, planeja-se o retorno ao trabalho. A conduta com maior fundamento técnico é:',
      alts: [
        { t: 'Condicionar o retorno à intervenção sobre o posto e a organização do trabalho, com retorno gradual, restrição temporária a elevação do braço acima do ombro e acompanhamento programado.', ok: true,
          why: 'Correta. Sem revisão do ritmo imposto pela nória, da altura do plano de trabalho, da alternância de tarefas e das pausas efetivas, o retorno reproduz a exposição que gerou o agravo.' },
        { t: 'Transferir a trabalhadora para outro setor da mesma linha, sem análise prévia das exigências do novo posto, pois qualquer mudança de tarefa já reduz a sobrecarga do ombro.', ok: false,
          why: 'Incorreta. Transferência às cegas pode levar a posto com exigência igual ou pior. A mudança precisa ser guiada por análise das exigências reais.' },
        { t: 'Retornar à função original sem restrições, prescrevendo exercícios de fortalecimento do manguito rotador no contraturno como medida preventiva suficiente.', ok: false,
          why: 'Incorreta. Exercício é coadjuvante e desloca para a trabalhadora, no tempo dela, a responsabilidade por um risco que é do processo de trabalho.' },
        { t: 'Emitir atestado de inaptidão definitiva para a função e encaminhar a trabalhadora para desligamento por incapacidade laboral.', ok: false,
          why: 'Incorreta. O quadro melhorou e é potencialmente reversível. Inaptidão definitiva nesta fase é desproporcional e produz exclusão evitável.' },
        { t: 'Manter restrição individual permanente sem qualquer alteração do posto de trabalho, uma vez que a adequação ergonômica é inviável em linha de produção cadenciada.', ok: false,
          why: 'Incorreta. A adequação de linha cadenciada é viável e exigível. Restrição individual sem mudança do posto apenas transfere a sobrecarga aos colegas.' }
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
        { t: 'O diagnóstico é clínico, e a eletroneuromiografia confirma, gradua e localiza a compressão; exame normal em quadro típico não exclui a doença.', ok: true,
          why: 'Correta. A eletroneuromiografia é complementar: ajuda no diferencial com radiculopatia cervical e polineuropatia e orienta a conduta, mas há falsos negativos em quadros clínicos típicos.' },
        { t: 'A eletroneuromiografia é o padrão-ouro absoluto para a síndrome do túnel do carpo, de modo que um resultado dentro dos limites da normalidade exclui o diagnóstico e obriga a buscar outra explicação para os sintomas.', ok: false,
          why: 'Incorreta. O exame tem boa especificidade, mas sensibilidade imperfeita. Resultado normal diante de quadro clínico típico não exclui a síndrome.' },
        { t: 'A presença de hipotrofia da eminência tenar indica quadro ainda leve, pois a musculatura permanece visível e a força de preensão costuma estar preservada nessa fase inicial.', ok: false,
          why: 'Incorreta. Hipotrofia tenar é sinal de comprometimento motor e marca quadro avançado, com indicação de avaliação cirúrgica.' },
        { t: 'A bilateralidade do quadro afasta a causa ocupacional e aponta obrigatoriamente para doença sistêmica.', ok: false,
          why: 'Incorreta. A exposição biomecânica costuma ser bilateral, e a apresentação bilateral é frequente também na forma ocupacional.' },
        { t: 'A melhora dos sintomas ao sacudir as mãos é achado atípico e sugere origem psicogênica do quadro.', ok: false,
          why: 'Incorreta. O sinal do sacudir as mãos é achado clássico e típico da síndrome do túnel do carpo.' }
      ],
      comentario: 'Parestesia noturna no território do mediano, alívio ao sacudir as mãos, testes de provocação positivos e, em fases avançadas, hipotrofia tenar. O estudo eletrofisiológico confirma e gradua; não substitui a clínica nem exclui o diagnóstico quando normal.',
      pegadinha: 'Duas inversões: exame normal como excludente e bilateralidade como argumento contra a origem ocupacional.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Neuropatias compressivas relacionadas ao trabalho'] },

    { enunciado: 'Diante do argumento empresarial de que o hipotireoidismo é a causa exclusiva, a análise CORRETA de nexo é:',
      alts: [
        { t: 'A condição sistêmica pode ter atuado como concausa preexistente, predispondo ao quadro, sem afastar o nexo com o trabalho, já que a exposição biomecânica é reconhecidamente associada à compressão do mediano.', ok: true,
          why: 'Correta. Concausa preexistente é a que antecede a exposição e a ela se soma. A doença de base está controlada e não explica sozinha o quadro, que se instalou no contexto da exposição.' },
        { t: 'Havendo doença sistêmica reconhecidamente capaz de causar a síndrome do túnel do carpo, o nexo ocupacional fica automaticamente excluído, ainda que a exposição biomecânica esteja documentada e seja intensa.', ok: false,
          why: 'Incorreta. Causa alternativa possível não é causa exclusiva demonstrada. A coexistência configura concausa, e concausa não afasta o nexo.' },
        { t: 'O hipotireoidismo configura concausa superveniente, pois se manifestou clinicamente depois do início da exposição ocupacional.', ok: false,
          why: 'Incorreta. O diagnóstico é anterior ao quadro nas mãos e a condição antecede a instalação da doença, o que a torna preexistente, não superveniente.' },
        { t: 'Reconhecida a concausa, o caráter ocupacional deve ser reconhecido apenas parcialmente, com repartição proporcional dos efeitos previdenciários entre a parcela ocupacional e a parcela comum.', ok: false,
          why: 'Incorreta. Não existe reconhecimento fracionado na Previdência: o benefício é acidentário ou comum. A concausa não gera rateio.' },
        { t: 'Como a doença de base está controlada com medicação, ela deixa de existir como fator causal e o caso passa a ser de causa ocupacional exclusiva.', ok: false,
          why: 'Incorreta. O controle terapêutico reduz o peso da concausa, mas não a apaga da história. O nexo se reconhece com ela, não a despeito dela.' }
      ],
      comentario: 'Concausa preexistente é a condição anterior que predispõe; concomitante atua junto; superveniente surge depois e agrava. Nenhuma delas rompe o nexo, e o reconhecimento não é proporcional. A defesa de "doença sistêmica, logo não é do trabalho" cai por aqui.',
      pegadinha: 'A troca entre preexistente e superveniente, somada à falsa ideia de repartição proporcional.',
      refs: ['Lei nº 8.213/1991 — art. 21, I', 'Concausalidade em medicina do trabalho'] },

    { enunciado: 'Sobre a conduta terapêutica e ocupacional neste momento, a orientação CORRETA é:',
      alts: [
        { t: 'Afastar da exposição, instituir tratamento conservador, encaminhar para avaliação cirúrgica pelo comprometimento motor e emitir a comunicação de acidente do trabalho.', ok: true,
          why: 'Correta. A hipotrofia tenar à direita indica lesão motora e justifica avaliação cirúrgica. A emissão da comunicação é dever do médico e independe da concordância da empresa.' },
        { t: 'Manter a trabalhadora na função com uso de órtese noturna de posicionamento do punho, reavaliando a conduta somente se houver perda completa da força de pinça ou incapacidade de segurar objetos.', ok: false,
          why: 'Incorreta. Já existe comprometimento motor. Esperar a perda completa da pinça significa aguardar dano irreversível antes de agir.' },
        { t: 'Indicar apenas a otimização da reposição hormonal, pois o controle adequado do hipotireoidismo resolve a retenção que comprime o nervo mediano no túnel do carpo.', ok: false,
          why: 'Incorreta. Otimizar a reposição é parte do cuidado, mas não descomprime um nervo já lesado nem substitui o afastamento da exposição.' },
        { t: 'Aguardar a conclusão da discussão sobre o nexo com a empresa antes de tomar qualquer conduta clínica ou emitir documento, para não antecipar posição em tema controverso.', ok: false,
          why: 'Incorreta. A conduta clínica não se subordina a discussão administrativa. Postergar tratamento por divergência sobre nexo é falha assistencial.' },
        { t: 'Prescrever infiltração local seriada como tratamento definitivo, dispensando a avaliação cirúrgica mesmo diante da hipotrofia tenar.', ok: false,
          why: 'Incorreta. A infiltração dá alívio temporário e não trata compressão com lesão motora estabelecida.' }
      ],
      comentario: 'Comprometimento motor, hipotrofia tenar ou estudo eletrofisiológico de grau avançado deslocam a conduta do tratamento conservador para a avaliação cirúrgica. E o médico do trabalho não depende de autorização da empresa para emitir a comunicação do acidente.',
      pegadinha: 'A tentação de tratar como quadro leve porque a força de preensão "ainda está boa", ignorando a hipotrofia tenar.',
      refs: ['Protocolo de LER/DORT do Ministério da Saúde', 'Lei nº 8.213/1991 — art. 22'] },

    { enunciado: 'Um ano depois, após cirurgia bilateral e reabilitação, persistem hipoestesia residual à direita e redução da força de pinça, com perda definitiva de destreza fina, embora a trabalhadora possa exercer outras atividades. Sobre a repercussão previdenciária, é CORRETO afirmar que:',
      alts: [
        { t: 'Consolidadas as lesões e persistindo sequela que reduz a capacidade para o trabalho habitual, cabe auxílio-acidente, de natureza indenizatória.', ok: true,
          why: 'Correta. O auxílio-acidente é compatível com o exercício de atividade remunerada, não exige carência e é devido justamente pela redução da capacidade após a consolidação.' },
        { t: 'Cabe aposentadoria por incapacidade permanente, pois a sequela é definitiva e irreversível, e a irreversibilidade da lesão é o critério que define esse benefício.', ok: false,
          why: 'Incorreta. O critério não é a irreversibilidade da lesão, mas a incapacidade total para qualquer atividade, que não é o caso: ela voltou a trabalhar.' },
        { t: 'Nada é devido, uma vez que a trabalhadora retomou atividade remunerada e recebe salário, o que demonstra ausência de prejuízo econômico decorrente da sequela.', ok: false,
          why: 'Incorreta. O auxílio-acidente é indenizatório e existe exatamente para quem voltou a trabalhar com capacidade reduzida.' },
        { t: 'Mantém-se o benefício por incapacidade temporária enquanto persistirem os sintomas residuais e a limitação para atividades de força e de repetição com as mãos.', ok: false,
          why: 'Incorreta. Consolidadas as lesões, encerra-se a incapacidade temporária. O que resta é sequela, e sequela remete a auxílio-acidente.' },
        { t: 'O benefício por sequela exige carência mínima de contribuições e cessa quando a trabalhadora mudar de emprego.', ok: false,
          why: 'Incorreta. O auxílio-acidente independe de carência e não cessa por mudança de vínculo empregatício.' }
      ],
      comentario: 'Marcos do auxílio-acidente: consolidação das lesões, sequela definitiva, redução da capacidade para o trabalho habitualmente exercido, natureza indenizatória, acumulação com salário e dispensa de carência quando decorrente de acidente do trabalho. Distinga-o com clareza da aposentadoria por incapacidade permanente.',
      pegadinha: 'Confundir irreversibilidade da sequela com incapacidade total e permanente.',
      refs: ['Lei nº 8.213/1991 — art. 86', 'Avaliação da incapacidade laborativa'] },

    { enunciado: 'A análise dos afastamentos do setor de costura mostra outros seis casos semelhantes em dois anos. A conduta de vigilância CORRETA é:',
      alts: [
        { t: 'Caracterizar o conjunto como surto de agravo relacionado ao trabalho, desencadear análise ergonômica do setor com foco em ritmo, metas e remuneração por produção, e revisar o programa de controle médico.', ok: true,
          why: 'Correta. Vários casos do mesmo agravo no mesmo setor configuram surto e deslocam a resposta do plano individual para o coletivo, com busca ativa dos demais expostos.' },
        { t: 'Considerar o achado esperado para a faixa etária do grupo, já que a prevalência da síndrome do túnel do carpo aumenta com a idade também na população geral, sem necessidade de investigação do setor.', ok: false,
          why: 'Incorreta. A concentração dos casos em um único setor não se explica por idade. O agrupamento é o próprio sinal de alerta.' },
        { t: 'Encaminhar individualmente cada caso ao tratamento e evitar qualquer análise agregada, que exporia dados de saúde dos trabalhadores e violaria o sigilo médico.', ok: false,
          why: 'Incorreta. A análise epidemiológica agregada e anonimizada é atribuição do serviço e não viola sigilo. Confundir uma coisa com a outra paralisa a vigilância.' },
        { t: 'Substituir a remuneração por produção por metas coletivas mais elevadas, mantendo o incentivo à produtividade sem prejuízo individual.', ok: false,
          why: 'Incorreta. Meta coletiva mais alta mantém, e pode até aumentar, a pressão de ritmo, que é o fator de risco em questão.' },
        { t: 'Implantar ginástica laboral diária de dez minutos como principal medida de controle do surto.', ok: false,
          why: 'Incorreta. Ginástica laboral é medida complementar e não corrige ritmo, postura, força nem repetitividade do posto.' }
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
        { t: 'A história de exposição intensa a sílica somada ao padrão radiológico típico permite o diagnóstico, sem necessidade de biópsia pulmonar.', ok: true,
          why: 'Correta. Pequenas opacidades arredondadas com predomínio em campos superiores e calcificação periférica de linfonodos hilares, em trabalhador de rocha ornamental, fecham o diagnóstico de silicose.' },
        { t: 'A espirometria com distúrbio restritivo leve é o dado que estabelece o diagnóstico, pois a silicose se define por critério funcional e não por critério de imagem.', ok: false,
          why: 'Incorreta. A espirometria mede repercussão funcional e pode ser normal em doença radiológica extensa. O diagnóstico se apoia em exposição mais imagem.' },
        { t: 'O diagnóstico exige biópsia pulmonar com demonstração de nódulos silicóticos e de partículas birrefringentes à luz polarizada, procedimento indispensável antes da notificação.', ok: false,
          why: 'Incorreta. A biópsia fica reservada a casos atípicos ou duvidosos. Exigi-la de rotina submete o trabalhador a risco desnecessário.' },
        { t: 'A ausência de tabagismo e a ausência de alterações à ausculta pulmonar afastam doença pulmonar ocupacional significativa neste trabalhador.', ok: false,
          why: 'Incorreta. A silicose independe do tabagismo, e a ausculta costuma ser normal mesmo em doença radiológica avançada.' },
        { t: 'O tempo de exposição de seis anos é curto demais para silicose, de modo que o quadro deve ser atribuído a outra doença granulomatosa, de causa não ocupacional.', ok: false,
          why: 'Incorreta. Em concentrações muito altas, como no corte a seco de quartzo, ocorre a forma acelerada, com latência de poucos anos.' }
      ],
      comentario: 'Silicose se diagnostica com três elementos: exposição a sílica cristalina, imagem compatível — opacidades arredondadas em campos superiores, eventual calcificação periférica de linfonodos hilares — e exclusão de diferenciais. Função pulmonar pode ser normal, e o corte a seco de aglomerado de quartzo produz formas aceleradas em poucos anos.',
      pegadinha: 'O tempo de exposição "curto" é usado para afastar o diagnóstico; nas formas aceleradas ele é justamente o esperado.',
      refs: ['Classificação radiológica da OIT para pneumoconioses', 'Pneumoconioses — Ministério da Saúde'] },

    { enunciado: 'Além da silicose, a comorbidade que deve ser ativamente investigada neste paciente é:',
      alts: [
        { t: 'Tuberculose, ativa e latente, cuja investigação deve ser sistemática mesmo na ausência de sintomas típicos.', ok: true,
          why: 'Correta. A silicose aumenta expressivamente o risco de adoecimento por tuberculose, e a apresentação pode ser oligossintomática ou confundir-se com a própria pneumoconiose.' },
        { t: 'Fibrose cística, cuja apresentação em adultos jovens com distúrbio ventilatório restritivo é praticamente indistinguível da silicose, o que exige teste do suor em todo silicótico.', ok: false,
          why: 'Incorreta. A fibrose cística cursa com doença obstrutiva e bronquiectasias e não integra o diferencial de rotina da silicose.' },
        { t: 'Hipertensão arterial pulmonar primária, reconhecida como a complicação mais frequente e mais precoce da exposição à sílica cristalina.', ok: false,
          why: 'Incorreta. Hipertensão pulmonar pode ocorrer, mas tardiamente e como consequência da fibrose, não como complicação inicial mais frequente.' },
        { t: 'Asbestose, dado que amianto e sílica coexistem nas oficinas de rochas ornamentais e produzem padrões radiológicos sobrepostos.', ok: false,
          why: 'Incorreta. Marmoraria de quartzo não é fonte de amianto, e a asbestose tem padrão distinto, com predomínio em bases e acometimento pleural.' },
        { t: 'Nenhuma investigação adicional é necessária enquanto não houver a tríade de febre, emagrecimento e sudorese noturna.', ok: false,
          why: 'Incorreta. Justamente no silicótico a tuberculose costuma abrir o quadro sem essa tríade. Esperar por ela atrasa o diagnóstico.' }
      ],
      comentario: 'Todo silicótico é população de risco elevado para tuberculose, ativa e latente. O rastreamento é ativo e periódico, e o achado de infecção latente indica tratamento preventivo. A silicose também aumenta o risco de câncer de pulmão, já que a sílica cristalina é classificada como carcinógeno humano comprovado.',
      pegadinha: 'Condicionar a investigação de tuberculose à presença da tríade clássica de sintomas.',
      refs: ['Silicose e tuberculose — Ministério da Saúde', 'Monografias da IARC — sílica cristalina'] },

    { enunciado: 'Quanto ao nexo e ao enquadramento do agravo, é CORRETO afirmar que:',
      alts: [
        { t: 'A sílica cristalina é condição necessária para a silicose, o que enquadra o agravo no grupo I de Schilling, com notificação compulsória e comunicação obrigatória à Previdência.', ok: true,
          why: 'Correta. No grupo I o trabalho é causa necessária: sem exposição à sílica não há silicose. Trata-se de doença profissional, com dupla obrigação de registro.' },
        { t: 'Trata-se de agravo do grupo II de Schilling, em que o trabalho figura apenas como um entre vários fatores de risco possíveis, ao lado de fatores individuais e ambientais não ocupacionais.', ok: false,
          why: 'Incorreta. A descrição do grupo II está certa, mas não se aplica: a silicose não ocorre sem sílica, o que a coloca no grupo I.' },
        { t: 'O reconhecimento do nexo depende de laudo de higiene ocupacional que demonstre concentração acima do limite de tolerância no momento do diagnóstico.', ok: false,
          why: 'Incorreta. A doença reflete exposição cumulativa passada. Medição atual normal não desfaz o nexo de uma pneumoconiose já instalada.' },
        { t: 'Por ser doença sem tratamento específico, a silicose não gera repercussão previdenciária enquanto não houver incapacidade total e permanente.', ok: false,
          why: 'Incorreta. A repercussão previdenciária decorre do agravo e de suas consequências, inclusive parciais, e não da existência de tratamento.' },
        { t: 'A notificação em saúde é dispensável, pois a comunicação previdenciária já cumpre a função de vigilância epidemiológica.', ok: false,
          why: 'Incorreta. São sistemas distintos e complementares. A comunicação previdenciária não alimenta a vigilância em saúde.' }
      ],
      comentario: 'Silicose é o protótipo de doença profissional em sentido estrito: agente específico, causa necessária, grupo I de Schilling. Registrar duas vezes — comunicação previdenciária e notificação em saúde — é obrigatório, e nenhuma delas depende de laudo quantitativo contemporâneo.',
      pegadinha: 'Exigir avaliação quantitativa atual de exposição para reconhecer nexo em doença de latência.',
      refs: ['Classificação de Schilling', 'Lista de doenças de notificação compulsória relacionadas ao trabalho'] },

    { enunciado: 'Sobre a conduta em relação a este trabalhador, a orientação CORRETA é:',
      alts: [
        { t: 'Afastá-lo definitivamente da sílica, esclarecer que a doença pode progredir mesmo após cessada a exposição e instituir seguimento clínico, funcional e radiológico periódico.', ok: true,
          why: 'Correta. Completam a conduta a atualização das imunizações respiratórias, a investigação de tuberculose e o encaminhamento para avaliação previdenciária e reabilitação profissional.' },
        { t: 'Mantê-lo na função com fornecimento de respirador purificador de ar com filtro de alta eficiência e ensaio de vedação periódico, medida suficiente para deter a progressão da doença.', ok: false,
          why: 'Incorreta. Proteção respiratória reduz mas não anula a exposição, e em doente já diagnosticado a conduta é a retirada, não a contenção parcial.' },
        { t: 'Iniciar corticoterapia sistêmica prolongada, tratamento capaz de reverter a fibrose nodular característica da silicose e de recuperar a função pulmonar perdida.', ok: false,
          why: 'Incorreta. Não há tratamento que reverta a fibrose silicótica. O corticoide tem uso pontual e restrito, sem efeito sobre a evolução da doença.' },
        { t: 'Manter conduta expectante e repetir a radiografia apenas se houver piora clínica importante, pois a silicose não progride após a retirada da exposição.', ok: false,
          why: 'Incorreta. A premissa é falsa: a silicose progride mesmo sem nova exposição, o que torna o seguimento programado indispensável.' },
        { t: 'Considerá-lo inapto para qualquer atividade laboral, pois a restrição ventilatória detectada é definitiva.', ok: false,
          why: 'Incorreta. A restrição é leve. A inaptidão é para atividades com exposição a sílica, não para o trabalho em geral.' }
      ],
      comentario: 'Diante de pneumoconiose estabelecida: afastamento definitivo da exposição, seguimento programado porque a doença pode progredir sem exposição adicional, rastreio de tuberculose, imunizações respiratórias e encaminhamento previdenciário com vistas à reabilitação. Proteção respiratória não é conduta para quem já adoeceu.',
      pegadinha: 'A ideia de que a doença "para" quando a exposição cessa, usada para justificar seguimento frouxo.',
      refs: ['Pneumoconioses — Ministério da Saúde', 'Reabilitação profissional'] },

    { enunciado: 'Sobre os outros nove trabalhadores do mesmo galpão e sobre o controle da exposição, a conduta CORRETA é:',
      alts: [
        { t: 'Fazer busca ativa em todos os expostos, com avaliação clínica, radiografia lida em padrão internacional e espirometria, e priorizar controles de engenharia sobre a geração de poeira.', ok: true,
          why: 'Correta. Corte por via úmida, ventilação exaustora e enclausuramento atuam na fonte. O programa de proteção respiratória é medida complementar, nunca a principal.' },
        { t: 'Aguardar que os demais trabalhadores apresentem sintomas respiratórios para então investigá-los individualmente, evitando a realização de exames desnecessários em pessoas assintomáticas.', ok: false,
          why: 'Incorreta. A silicose é assintomática por anos. Esperar sintomas significa detectar todos os casos tardiamente, quando já há dano extenso.' },
        { t: 'Implantar programa de proteção respiratória com respiradores de maior fator de proteção para todos os expostos, mantendo o corte a seco em razão da produtividade do processo.', ok: false,
          why: 'Incorreta. Inverte a hierarquia de controle: mantém intacta a fonte de poeira e transfere ao trabalhador a responsabilidade pela própria proteção.' },
        { t: 'Encaminhar os demais para avaliação apenas na data do próximo exame periódico já programado, pois a periodicidade prevista contempla o risco do setor.', ok: false,
          why: 'Incorreta. Um caso de forma acelerada é sentinela e indica falha grave de controle, o que exige antecipação e não a rotina programada.' },
        { t: 'Substituir a radiografia pela tomografia de alta resolução em todos os expostos, adotando-a como exame de rastreamento de rotina por ser mais sensível.', ok: false,
          why: 'Incorreta. A radiografia com leitura padronizada é o exame de rastreamento. A tomografia fica reservada a casos duvidosos, pela dose e pelo custo.' }
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
        { t: 'Asma ocupacional por agente sensibilizante de baixo peso molecular, investigada por medidas seriadas do pico de fluxo expiratório no trabalho e fora dele.', ok: true,
          why: 'Correta. O registro sistemático do pico de fluxo em períodos de trabalho e de afastamento, comparados entre si, é o método mais acessível para demonstrar a relação entre sintomas e exposição.' },
        { t: 'Asma preexistente agravada pelo trabalho, cujo diagnóstico se estabelece pela dosagem de imunoglobulina E total elevada associada à história de piora dos sintomas ao longo da semana de trabalho.', ok: false,
          why: 'Incorreta. Não há relato de asma prévia, e a imunoglobulina E total é inespecífica: ela não distingue asma ocupacional de asma comum nem confirma sensibilização a isocianato.' },
        { t: 'Pneumonite de hipersensibilidade, a ser confirmada por lavado broncoalveolar com linfocitose e por tomografia com padrão de vidro fosco e nódulos centrolobulares.', ok: false,
          why: 'Incorreta. O quadro é obstrutivo, com sibilos e melhora no afastamento. A pneumonite de hipersensibilidade cursa com quadro restritivo, tosse seca e febre após a exposição.' },
        { t: 'Síndrome de disfunção reativa das vias aéreas, decorrente de exposição única e maciça a agente irritante, sem período de latência.', ok: false,
          why: 'Incorreta. A descrição da síndrome está certa, mas o caso é de exposição repetida com latência e sensibilização progressiva.' },
        { t: 'Asma não ocupacional, uma vez que a espirometria em dia de folga foi normal e sem resposta ao broncodilatador.', ok: false,
          why: 'Incorreta. Espirometria normal fora da exposição é exatamente o esperado na asma ocupacional e reforça, em vez de afastar, a hipótese.' }
      ],
      comentario: 'Asma ocupacional por sensibilizante tem período de latência, sintomas que pioram no trabalho — às vezes com resposta tardia, horas depois — e melhora em férias. Espirometria normal em dia de folga é a regra. O pico de fluxo seriado, dentro e fora do trabalho, é o exame prático de maior rendimento.',
      pegadinha: 'Usar espirometria normal colhida fora da exposição para excluir asma ocupacional.',
      refs: ['Asma ocupacional — Ministério da Saúde', 'Pneumologia ocupacional'] },

    { enunciado: 'Sobre a distinção entre asma ocupacional e asma agravada pelo trabalho, é CORRETO afirmar que:',
      alts: [
        { t: 'Na forma ocupacional o agente do trabalho causa a doença, após período de latência para sensibilização; na agravada pelo trabalho há doença prévia que piora com condições inespecíficas.', ok: true,
          why: 'Correta. A distinção não é acadêmica: define se a conduta é retirada definitiva do agente sensibilizante ou controle ambiental e clínico, e tem consequências diretas sobre o nexo.' },
        { t: 'A distinção é apenas acadêmica, pois em ambas as situações a conduta é idêntica, restrita ao controle ambiental e ao tratamento medicamentoso, com manutenção do trabalhador na função.', ok: false,
          why: 'Incorreta. Na asma ocupacional por sensibilização a conduta é o afastamento definitivo do agente, o que não se aplica à asma agravada pelo trabalho.' },
        { t: 'A asma agravada pelo trabalho não guarda qualquer relação com o trabalho e, portanto, não gera repercussão previdenciária em nenhuma hipótese.', ok: false,
          why: 'Incorreta. Ela é doença relacionada ao trabalho do grupo III de Schilling, com repercussão previdenciária quando há incapacidade.' },
        { t: 'A presença de período de latência entre o início da exposição e o surgimento dos sintomas é característica da asma agravada pelo trabalho e ausente na asma ocupacional por sensibilização.', ok: false,
          why: 'Incorreta. Está invertido: a latência é justamente o marco da sensibilização, própria da asma ocupacional.' },
        { t: 'Só existe asma ocupacional quando o agente é de alto peso molecular e de origem proteica, como farinha, látex e enzimas.', ok: false,
          why: 'Incorreta. Agentes de baixo peso molecular, como isocianatos, anidridos e persulfatos, são causas clássicas de asma ocupacional.' }
      ],
      comentario: 'Asma ocupacional: causada pelo trabalho, com latência quando há sensibilização, ou sem latência quando decorre de exposição irritante única e maciça. Asma agravada pelo trabalho: doença prévia que piora por irritantes inespecíficos, esforço, frio ou poeira. A conduta e o nexo mudam conforme a categoria.',
      pegadinha: 'Restringir asma ocupacional a agentes proteicos de alto peso molecular, deixando os isocianatos de fora.',
      refs: ['Asma relacionada ao trabalho — classificação', 'Doenças respiratórias relacionadas ao trabalho'] },

    { enunciado: 'Confirmado o diagnóstico de asma ocupacional por isocianatos, a conduta CORRETA quanto à manutenção na função é:',
      alts: [
        { t: 'Afastar o trabalhador de forma definitiva da exposição ao agente sensibilizante, pois após a sensibilização concentrações mínimas já desencadeiam crises.', ok: true,
          why: 'Correta. O prognóstico depende da precocidade da retirada. Respirador de maior desempenho e adicional de insalubridade não são alternativas aceitáveis a ela.' },
        { t: 'Manter o trabalhador na função com respirador de adução de ar e ensaio de vedação regular, solução que elimina por completo o risco de exposição residual ao isocianato.', ok: false,
          why: 'Incorreta. Nenhum equipamento elimina o risco residual, e no sensibilizado uma exposição mínima basta para desencadear crise grave.' },
        { t: 'Manter na função com tratamento de controle otimizado por corticoide inalatório em dose alta, reavaliando a conduta apenas se ocorrer crise grave com necessidade de atendimento de urgência.', ok: false,
          why: 'Incorreta. O tratamento mascara os sintomas enquanto a sensibilização progride, e a espera pela crise grave é justamente o desfecho a evitar.' },
        { t: 'Reduzir pela metade a jornada de exposição ao produto, medida proporcional ao caráter dose-dependente que a doença assume após a sensibilização.', ok: false,
          why: 'Incorreta. Depois de sensibilizado, não há relação dose-resposta segura: a reação ocorre em concentrações muito abaixo do limite de tolerância.' },
        { t: 'Aceitar a permanência mediante pagamento de adicional de insalubridade e assinatura de termo de ciência do risco pelo trabalhador.', ok: false,
          why: 'Incorreta. Adicional monetiza o risco sem removê-lo, e o termo de ciência não transfere ao trabalhador a responsabilidade pela própria saúde.' }
      ],
      comentario: 'A regra central da asma ocupacional por sensibilizante: retirar definitivamente o trabalhador do contato com o agente, o mais cedo possível. Após a sensibilização não há dose segura, e por isso equipamento de proteção, redução de jornada e adicional de insalubridade não resolvem.',
      pegadinha: 'A oferta de "respirador melhor mais adicional" é sedutora porque parece atender empresa e trabalhador; tecnicamente é inaceitável.',
      refs: ['Asma ocupacional — conduta', 'Programa de Proteção Respiratória — limites do EPI'] },

    { enunciado: 'Quanto às repercussões documentais e previdenciárias do caso, é CORRETO afirmar que:',
      alts: [
        { t: 'Cabe emitir a comunicação de acidente do trabalho por doença ocupacional, e o atestado de saúde ocupacional deve concluir por inaptidão para funções com isocianatos, sem registrar o diagnóstico.', ok: true,
          why: 'Correta. A data de início da doença se vincula ao diagnóstico. O atestado entregue à empresa informa a aptidão e a restrição necessária, nunca o diagnóstico, protegido por sigilo.' },
        { t: 'A comunicação de acidente do trabalho só é cabível quando houver afastamento superior a quinze dias com concessão de benefício previdenciário pelo instituto.', ok: false,
          why: 'Incorreta. A comunicação independe de afastamento e de concessão de benefício: ela registra o agravo relacionado ao trabalho.' },
        { t: 'O atestado de saúde ocupacional deve trazer o diagnóstico de asma ocupacional, para que a empresa possa afastar corretamente o trabalhador do agente sensibilizante.', ok: false,
          why: 'Incorreta. A empresa precisa da restrição, não do diagnóstico. Registrar o diagnóstico no documento entregue ao empregador viola o sigilo médico.' },
        { t: 'A conclusão adequada é de inaptidão para o trabalho em geral, uma vez que a asma é doença crônica e o risco de crise acompanha o trabalhador em qualquer atividade.', ok: false,
          why: 'Incorreta. Fora da exposição ao agente sensibilizante ele é plenamente apto. A inaptidão é específica, não genérica.' },
        { t: 'Como a doença tem componente individual de suscetibilidade, o registro deve ser feito como doença comum, sem natureza acidentária.', ok: false,
          why: 'Incorreta. Suscetibilidade individual não descaracteriza o nexo: o agente causador está no trabalho.' }
      ],
      comentario: 'Doença relacionada ao trabalho gera comunicação independentemente de afastamento. O documento de aptidão declara conclusão e restrição — inapto para exposição a determinado agente — e nunca diagnóstico. Suscetibilidade individual não descaracteriza a origem ocupacional.',
      pegadinha: 'Escrever o diagnóstico no documento de aptidão sob o argumento de que a empresa "precisa saber para proteger".',
      refs: ['NR-7 — atestado de saúde ocupacional', 'Código de Ética Médica — sigilo', 'Lei nº 8.213/1991'] },

    { enunciado: 'Sobre os demais pintores da oficina, a conduta de vigilância e controle CORRETA é:',
      alts: [
        { t: 'Priorizar controles coletivos e instituir vigilância de sintomas respiratórios nos expostos, com investigação imediata de quem referir sintomas relacionados ao turno.', ok: true,
          why: 'Correta. Cabine com exaustão adequada, aplicação em sistema fechado e substituição por produtos sem isocianato, quando viável, atuam na fonte. A vigilância detecta precocemente novos sensibilizados.' },
        { t: 'Realizar teste cutâneo de sensibilização a isocianatos em todos os candidatos na admissão e excluir do emprego os que resultarem positivos, medida que previne integralmente novos casos.', ok: false,
          why: 'Incorreta. Além de não existir teste admissional confiável para isocianatos, seleção excludente por suscetibilidade é discriminatória e substitui o controle do risco pela exclusão do trabalhador.' },
        { t: 'Distribuir respiradores de maior fator de proteção a todos os pintores e considerar o risco controlado, dispensando a avaliação médica periódica dirigida ao aparelho respiratório.', ok: false,
          why: 'Incorreta. Proteção individual é a última linha da hierarquia de controle e nunca dispensa a vigilância médica dos expostos.' },
        { t: 'Aguardar o surgimento de novos casos diagnosticados para então revisar o processo de trabalho, evitando alterações onerosas sem evidência local do problema.', ok: false,
          why: 'Incorreta. Já existe evidência local: um caso sentinela de sensibilização. Esperar mais casos é aceitar dano previsível e evitável.' },
        { t: 'Limitar a vigilância à radiografia de tórax anual dos pintores, exame de escolha para a detecção precoce de doença respiratória ocupacional.', ok: false,
          why: 'Incorreta. A radiografia é normal na asma. A vigilância adequada usa questionário dirigido e espirometria.' }
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
        { t: 'O padrão é altamente sugestivo de perda auditiva induzida por níveis elevados de pressão sonora, com entalhe em quatro e seis mil hertz.', ok: true,
          why: 'Correta. A perda é neurossensorial, bilateral e aproximadamente simétrica, com recuperação relativa em oito mil hertz e preservação das frequências graves, conjunto característico da exposição ocupacional ao ruído.' },
        { t: 'O padrão descrito é característico de presbiacusia, que se manifesta tipicamente com entalhe isolado em quatro e seis mil hertz e com recuperação do limiar em oito mil hertz.', ok: false,
          why: 'Incorreta. A presbiacusia é descendente e se acentua nas frequências mais agudas, sem recuperação em oito mil hertz, e não produz entalhe isolado.' },
        { t: 'A simetria entre os dois lados afasta a origem ocupacional do quadro e sugere lesão retrococlear, o que impõe investigação por imagem do ângulo pontocerebelar.', ok: false,
          why: 'Incorreta. A simetria é a regra na perda induzida por ruído, porque a exposição atinge os dois ouvidos. A assimetria é que levantaria suspeita retrococlear.' },
        { t: 'A ausência de comprometimento nas frequências graves indica que se trata de perda condutiva incipiente, a ser confirmada por imitanciometria com curva alterada.', ok: false,
          why: 'Incorreta. A preservação dos graves é típica da perda por ruído, que é neurossensorial. Perda condutiva compromete justamente as frequências graves.' },
        { t: 'O achado é compatível com trauma acústico agudo, que se caracteriza por perda bilateral e simétrica de instalação lenta e progressiva.', ok: false,
          why: 'Incorreta. O trauma acústico agudo decorre de evento único e intenso, com instalação súbita e frequentemente unilateral.' }
      ],
      comentario: 'Descrição clássica do dano coclear por ruído: neurossensorial, bilateral, quase sempre simétrica, irreversível, com entalhe em três, quatro ou seis mil hertz e recuperação relativa em oito mil hertz, poupando inicialmente as frequências da fala. Assimetria relevante desloca a investigação para causas retrococleares.',
      pegadinha: 'A simetria é oferecida como argumento contra a origem ocupacional, quando é justamente um de seus atributos.',
      refs: ['Perda Auditiva Induzida por Ruído — critérios diagnósticos', 'Audiometria ocupacional'] },

    { enunciado: 'No diagnóstico diferencial e na avaliação complementar deste caso, é CORRETO afirmar que:',
      alts: [
        { t: 'O diagnóstico é de exclusão, apoiado na história ocupacional, no exame otorrinolaringológico e na comparação com a audiometria de referência.', ok: true,
          why: 'Correta. Deve-se investigar ainda a exposição concomitante a solventes ototóxicos, que potencializam o efeito do ruído e produzem dano mesmo abaixo do limite de tolerância.' },
        { t: 'A ressonância magnética de crânio é exame obrigatório em toda perda auditiva de origem ocupacional, para afastar tumor do nervo vestibulococlear antes de firmar o nexo.', ok: false,
          why: 'Incorreta. A imagem se reserva a perdas assimétricas ou com sinais retrococleares. Não é rastreamento de rotina na perda induzida por ruído.' },
        { t: 'A presença de zumbido bilateral indica origem central da queixa e afasta a hipótese de lesão coclear provocada pela exposição ao ruído ocupacional.', ok: false,
          why: 'Incorreta. O zumbido bilateral é sintoma frequente e esperado na lesão coclear por ruído, não um marcador de origem central.' },
        { t: 'A audiometria admissional é irrelevante para a análise, pois o diagnóstico se faz exclusivamente com o traçado atual e com a história de exposição.', ok: false,
          why: 'Incorreta. O exame de referência é o que permite demonstrar o agravamento durante o vínculo e diferenciar perda prévia de perda adquirida no trabalho.' },
        { t: 'A perda auditiva induzida por ruído progride indefinidamente mesmo após cessada a exposição, o que torna dispensável a análise de exames anteriores.', ok: false,
          why: 'Incorreta. Ela não progride após o afastamento da exposição, característica que a distingue de outras causas e reforça o valor dos exames seriados.' }
      ],
      comentario: 'O diagnóstico se sustenta em três pilares: história ocupacional consistente, padrão audiométrico compatível e exclusão de outras causas, sempre com comparação à audiometria de referência. Solventes ototóxicos e a interação com o ruído devem ser ativamente pesquisados. Após cessada a exposição, a perda não progride por causa do ruído.',
      pegadinha: 'Dispensar a audiometria de referência é abrir mão do principal argumento de nexo temporal.',
      refs: ['Ototoxicidade química e interação ruído-solvente', 'Audiometria ocupacional — audiograma de referência e sequencial'] },

    { enunciado: 'Quanto à repercussão funcional e à conclusão de aptidão, a orientação CORRETA à empresa é:',
      alts: [
        { t: 'A perda estabelecida raramente implica, por si só, incapacidade laboral, de modo que a conduta é intensificar o controle do ruído e reforçar o acompanhamento audiométrico.', ok: true,
          why: 'Correta. Não é caso de afastamento automático da função, e sim de garantir proteção auditiva efetiva, atuar sobre a fonte e monitorar com periodicidade aumentada.' },
        { t: 'O trabalhador deve ser considerado inapto e afastado imediatamente da função, pois qualquer exposição adicional levará à evolução do quadro para surdez profunda em curto prazo.', ok: false,
          why: 'Incorreta. A perda por ruído não evolui para surdez profunda e a exposição controlada é compatível com a permanência, desde que com proteção efetiva.' },
        { t: 'Deve-se apenas registrar o achado no prontuário e manter a periodicidade habitual dos exames, pois a perda já instalada é irreversível e nada mais há a fazer.', ok: false,
          why: 'Incorreta. A perda é irreversível, mas é evitável a progressão. O achado exige intensificar controle e vigilância, não conformar-se.' },
        { t: 'A conduta correta é o encaminhamento imediato para aposentadoria por incapacidade permanente, dada a natureza definitiva e irreversível da lesão coclear.', ok: false,
          why: 'Incorreta. Irreversibilidade da lesão não é sinônimo de incapacidade para o trabalho, que é o critério do benefício.' },
        { t: 'Como a perda ainda não atinge de forma acentuada as frequências da fala, o caso não exige medida alguma além do fornecimento continuado de protetor auditivo.', ok: false,
          why: 'Incorreta. O entalhe é sinal precoce e é exatamente o momento de agir sobre a fonte, antes que a fala seja comprometida.' }
      ],
      comentario: 'Perda auditiva induzida por níveis elevados de pressão sonora raramente incapacita para o trabalho. O achado é indicador de falha do controle e obriga a agir sobre a exposição e sobre o programa de conservação auditiva, com seguimento audiométrico reforçado, e não a afastar o trabalhador como resposta padrão.',
      pegadinha: 'Duas condutas opostas e igualmente erradas: afastar automaticamente e não fazer nada porque a lesão é irreversível.',
      refs: ['NR-7 — anexo de audiometria ocupacional', 'Programa de Conservação Auditiva'] },

    { enunciado: 'Sobre o registro do caso e o enquadramento legal, é CORRETO afirmar que:',
      alts: [
        { t: 'O agravo deve ser comunicado como doença relacionada ao trabalho e notificado à vigilância em saúde; a caracterização de deficiência auditiva para fins legais segue critério próprio e não se confunde com o diagnóstico do agravo ocupacional.', ok: true,
          why: 'Correta. O critério legal de deficiência auditiva se baseia na média de limiares nas frequências da fala em ambos os ouvidos, patamar que a maioria dos casos de perda por ruído não alcança.' },
        { t: 'Todo trabalhador com perda auditiva induzida por ruído é automaticamente enquadrado como pessoa com deficiência auditiva para efeito do cumprimento da cota legal pela empresa.', ok: false,
          why: 'Incorreta. São conceitos distintos: ter o agravo diagnosticado não significa atingir o limiar legal que caracteriza a deficiência.' },
        { t: 'Não cabe comunicação previdenciária no caso, uma vez que não houve afastamento do trabalho nem incapacidade laborativa reconhecida.', ok: false,
          why: 'Incorreta. A comunicação registra o agravo relacionado ao trabalho e independe de afastamento ou de incapacidade.' },
        { t: 'A notificação à vigilância em saúde é facultativa nesse agravo, ficando a critério do serviço médico da empresa decidir sobre a conveniência do registro.', ok: false,
          why: 'Incorreta. A perda auditiva relacionada ao trabalho é agravo de notificação compulsória, sem margem de discricionariedade.' },
        { t: 'O enquadramento como deficiência auditiva depende exclusivamente da intensidade do zumbido e da dificuldade relatada em ambientes ruidosos.', ok: false,
          why: 'Incorreta. O critério é audiométrico e objetivo, baseado em limiares medidos, não em sintomas referidos.' }
      ],
      comentario: 'Separe três planos: diagnóstico do agravo, obrigações de registro — comunicação previdenciária e notificação em saúde, ambas independentes de afastamento — e enquadramento legal de deficiência auditiva, que depende de critério audiométrico próprio nas frequências da fala e raramente é atingido nas fases iniciais dessa perda.',
      pegadinha: 'Equiparar diagnóstico do agravo ocupacional a enquadramento legal de deficiência para fins de cota.',
      refs: ['Definição legal de deficiência auditiva', 'Lista de agravos de notificação compulsória relacionados ao trabalho'] },

    { enunciado: 'Sobre o programa de conservação auditiva da empresa, a avaliação CORRETA é:',
      alts: [
        { t: 'O programa está falhando, pois entrega protetores sem treinamento, sem verificação de adaptação e sem avaliação de eficácia.', ok: true,
          why: 'Correta. A estrutura adequada começa por medidas de engenharia sobre a fonte e a trajetória do ruído. O monitoramento audiométrico serve para avaliar a eficácia do conjunto, e não para substituir o controle.' },
        { t: 'O programa é adequado, pois fornece protetor auditivo a todos os expostos e realiza audiometria periódica, que são seus dois componentes obrigatórios essenciais.', ok: false,
          why: 'Incorreta. Um programa de conservação auditiva envolve avaliação do ruído, controle de engenharia, seleção e treinamento, monitoramento e avaliação de eficácia.' },
        { t: 'A audiometria periódica constitui medida de prevenção primária, pois sua realização regular impede a instalação da perda auditiva nos trabalhadores expostos.', ok: false,
          why: 'Incorreta. A audiometria detecta dano já ocorrido: é prevenção secundária. Prevenção primária é reduzir o ruído.' },
        { t: 'A escolha do protetor deve se orientar exclusivamente pelo maior valor de atenuação declarado pelo fabricante, independentemente de conforto, adaptação e tolerância.', ok: false,
          why: 'Incorreta. Protetor desconfortável é retirado ou mal posicionado, e a atenuação real cai a quase nada. Conforto e adaptação determinam a proteção efetiva.' },
        { t: 'Sendo o ruído contínuo e inerente ao maquinário, não há medidas de engenharia aplicáveis, restando apenas a proteção individual.', ok: false,
          why: 'Incorreta. Enclausuramento, barreiras acústicas, manutenção, amortecimento de vibração e isolamento do operador são medidas viáveis em ruído contínuo.' }
      ],
      comentario: 'Programa de conservação auditiva não é sinônimo de protetor mais audiometria. É um sistema com controle de engenharia na fonte e na trajetória, controle administrativo do tempo de exposição, seleção e treinamento em proteção individual, monitoramento audiométrico e avaliação periódica da própria eficácia. Audiometria é prevenção secundária.',
      pegadinha: 'Tratar audiometria periódica como prevenção primária, e escolher protetor apenas pelo maior valor de atenuação.',
      refs: ['Programa de Conservação Auditiva', 'NHO de avaliação da exposição ocupacional ao ruído'] }
  ] }

);
