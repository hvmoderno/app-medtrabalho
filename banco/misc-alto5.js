/* Aprofundamento: 2.5, 2.8, 4.7, 4.9, 7.6 e 1.8.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ========== 2.5 Avaliação e gerenciamento das exposições =============== */
{ id: 'q-2.5-030', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao caracterizar a exposição de um grupo de soldadores, o higienista dispõe de poucos recursos para amostragem e precisa priorizar. Sobre a estratégia, é CORRETO afirmar:',
  alts: [
    { t: 'A priorização deve considerar a toxicidade do agente, a magnitude estimada da exposição e o número de trabalhadores atingidos, começando pelos grupos de maior risco presumido — a caracterização básica é o que permite priorizar racionalmente quando os recursos são limitados.', ok: true,
      why: 'Correta. Priorizar sem caracterização básica é sortear; com ela, a decisão sobre onde gastar a amostragem passa a ser defensável.' },
    { t: 'Deve-se amostrar uniformemente todos os grupos, distribuindo igualmente os recursos.', ok: false,
      why: 'Errada. Distribuição uniforme ignora diferenças de risco e desperdiça recursos em exposições irrelevantes.' },
    { t: 'A priorização deve seguir a ordem de reclamação dos trabalhadores.', ok: false,
      why: 'Errada. A percepção é insumo valioso, mas não substitui critério técnico de risco.' },
    { t: 'Sem recursos para amostrar todos os grupos, nenhuma conclusão pode ser tirada.', ok: false,
      why: 'Errada. A avaliação qualitativa e o julgamento por analogia com exposições similares permitem decisões enquanto a amostragem avança.' },
    { t: 'A caracterização básica é etapa dispensável quando o processo é conhecido.', ok: false,
      why: 'Errada. É ela que fundamenta a formação de grupos e a priorização.' }
  ],
  comentario: 'Recursos limitados exigem priorização, e priorização exige caracterização básica: processo, agentes, tarefas, tempo de exposição, número de expostos. Sem isso, amostrar vira loteria cara.',
  pegadinha: 'A distribuição uniforme parece justa e é a menos eficiente do ponto de vista de proteção.',
  refs: ['Jahn, Bullock & Ignacio — Uma estratégia para avaliar e gerenciar exposições ocupacionais (ABHO)'] },

{ id: 'q-2.5-031', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso de dados de exposições análogas na avaliação ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Dados de processos e tarefas similares podem subsidiar o julgamento quando não há amostragem própria, desde que se documente a similaridade de processo, agente, controles e organização do trabalho — e que a limitação seja explicitada.', ok: true,
      why: 'Correta. Analogia é recurso legítimo em avaliação e em perícia, desde que a similaridade seja demonstrada e a limitação registrada.' },
    { t: 'Dados de outras empresas nunca podem ser utilizados, por serem estranhos ao caso.', ok: false,
      why: 'Errada. São recurso reconhecido, sobretudo na reconstrução de exposições pretéritas.' },
    { t: 'A similaridade se presume quando as empresas pertencem ao mesmo ramo econômico.', ok: false,
      why: 'Errada. Mesmo ramo pode ter processos, controles e organizações muito distintos.' },
    { t: 'O uso de dados análogos dispensa qualquer explicitação de limitações no laudo.', ok: false,
      why: 'Errada. Explicitar a limitação é condição de validade técnica da conclusão.' },
    { t: 'Dados análogos substituem integralmente a necessidade de avaliação própria quando disponíveis.', ok: false,
      why: 'Errada. São subsídio; a avaliação própria continua sendo o padrão quando possível.' }
  ],
  comentario: 'Analogia é recurso útil e limitado: exige demonstrar similaridade de processo, agente, controle e organização, e exige dizer no laudo que se trata de analogia. Mesmo ramo econômico não é prova de similaridade.',
  pegadinha: 'Presumir similaridade pelo ramo econômico é o atalho que fragiliza laudos de exposição pretérita.',
  refs: ['Jahn, Bullock & Ignacio — Uma estratégia para avaliar e gerenciar exposições ocupacionais (ABHO)'] },

/* ==================== 2.8 Proteção respiratória ======================== */
{ id: 'q-2.8-030', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma empresa, os respiradores purificadores de ar com filtros químicos são usados sem qualquer critério definido para troca dos cartuchos, ficando a decisão a cargo do trabalhador "quando sentir cheiro". Sobre a prática, é CORRETO afirmar:',
  alts: [
    { t: 'O odor não é critério confiável de saturação, pois muitos agentes têm limiar de percepção acima do valor-limite ou provocam fadiga olfativa — a troca deve seguir cronograma definido com base na capacidade do filtro e nas condições de uso.', ok: true,
      why: 'Correta. Depender do olfato expõe o trabalhador justamente nos agentes mais perigosos, que não avisam ou anestesiam o olfato.' },
    { t: 'A percepção de odor é o critério mais seguro de saturação do filtro.', ok: false,
      why: 'Errada. É critério falho e potencialmente letal em agentes com limiar de odor alto ou com fadiga olfativa.' },
    { t: 'Filtros químicos não saturam, dispensando cronograma de troca.', ok: false,
      why: 'Errada. Saturam por definição, e a capacidade depende de concentração, umidade e tempo de uso.' },
    { t: 'A troca deve ocorrer apenas quando houver aumento da resistência respiratória.', ok: false,
      why: 'Errada. Aumento de resistência é indicativo para filtros de partículas, não para saturação de filtros químicos.' },
    { t: 'O cronograma de troca dispensa registro, por ser rotina operacional.', ok: false,
      why: 'Errada. O registro é parte do programa e permite verificar cumprimento e eficácia.' }
  ],
  comentario: 'Dois critérios distintos: filtro de partículas colmata e aumenta a resistência respiratória; filtro químico satura e não avisa. Por isso o químico exige cronograma calculado e registrado — nunca o nariz do trabalhador.',
  pegadinha: 'Confundir os sinais de esgotamento dos dois tipos de filtro é o erro que mantém trabalhadores com cartucho saturado.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

{ id: 'q-2.8-031', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o ensaio de vedação em programa de proteção respiratória, é CORRETO afirmar:',
  alts: [
    { t: 'Ele verifica a adequação de um modelo e tamanho específico ao rosto de um trabalhador específico, deve ser repetido periodicamente e refeito quando houver mudança facial relevante — e não se confunde com a verificação de vedação feita pelo próprio usuário a cada colocação.', ok: true,
      why: 'Correta. São dois procedimentos distintos: o ensaio formal, periódico e documentado, e a checagem rápida que o usuário faz sempre que coloca o respirador.' },
    { t: 'Realizado uma vez na admissão, o ensaio de vedação não precisa ser repetido.', ok: false,
      why: 'Errada. Mudanças de peso, cirurgias e alterações faciais exigem novo ensaio, além da periodicidade prevista.' },
    { t: 'A certificação do respirador dispensa o ensaio de vedação.', ok: false,
      why: 'Errada. Certificação atesta o equipamento; o ensaio verifica a adequação àquele rosto.' },
    { t: 'O ensaio de vedação substitui a verificação feita pelo usuário a cada colocação.', ok: false,
      why: 'Errada. São complementares e ambos necessários.' },
    { t: 'O ensaio qualitativo e o quantitativo são intercambiáveis em qualquer situação.', ok: false,
      why: 'Errada. A escolha depende do tipo de respirador e do fator de proteção pretendido.' }
  ],
  comentario: 'Ensaio de vedação: formal, periódico, documentado, específico para modelo e tamanho. Verificação de vedação pelo usuário: a cada colocação, rápida. Um não substitui o outro, e certificação não substitui nenhum dos dois.',
  pegadinha: 'Tratar o ensaio como evento único de admissão ignora que o rosto do trabalhador muda ao longo dos anos.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

/* ==================== 4.7 Psiquiatria ocupacional ====================== */
{ id: 'q-4.7-030', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador em uso de medicação psiquiátrica estável há dois anos, sem repercussão funcional, é submetido a exame periódico. O setor de pessoal solicita que ele seja "reavaliado com mais frequência que os demais, por segurança". Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A periodicidade deve seguir critérios técnicos ligados ao risco da função e à condição clínica, não podendo ser diferenciada apenas em razão de diagnóstico psiquiátrico — reavaliar mais por rótulo é prática discriminatória.', ok: true,
      why: 'Correta. Diferenciar periodicidade por diagnóstico, sem repercussão funcional ou risco específico, é discriminação disfarçada de zelo.' },
    { t: 'A solicitação é adequada, pois transtornos mentais exigem vigilância permanente diferenciada.', ok: false,
      why: 'Errada. Vigilância diferenciada sem critério técnico estigmatiza e não protege ninguém.' },
    { t: 'A periodicidade deve ser definida pelo setor de pessoal, que conhece a operação.', ok: false,
      why: 'Errada. É decisão técnica do médico coordenador.' },
    { t: 'O trabalhador deve ser transferido preventivamente para função sem risco.', ok: false,
      why: 'Errada. Transferência sem repercussão funcional demonstrada é medida discriminatória.' },
    { t: 'A estabilidade de dois anos é irrelevante para a avaliação de aptidão.', ok: false,
      why: 'Errada. Estabilidade prolongada e ausência de repercussão são justamente os dados que sustentam a aptidão.' }
  ],
  comentario: 'Periodicidade se define por risco da função e condição clínica com repercussão — nunca por rótulo diagnóstico. Reavaliação diferenciada "por precaução" em quem está estável é vigilância estigmatizante.',
  pegadinha: 'A alternativa da transferência preventiva usa o vocabulário da segurança para produzir exclusão.',
  refs: ['Camargo — Psiquiatria Ocupacional', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-4.7-031', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso de instrumentos de rastreamento de transtornos mentais em exames ocupacionais periódicos, é CORRETO afirmar:',
  alts: [
    { t: 'Instrumentos de rastreamento podem apoiar a identificação precoce, mas exigem confirmação clínica, garantia de sigilo, encaminhamento estruturado e uso agregado para fins de gestão — aplicá-los sem essas condições produz rotulação sem cuidado.', ok: true,
      why: 'Correta. Rastrear sem caminho de cuidado e sem sigilo gera identificação de casos que ninguém acolhe e expõe o trabalhador.' },
    { t: 'Resultado positivo em instrumento de rastreamento equivale a diagnóstico.', ok: false,
      why: 'Errada. Rastreamento levanta suspeita; o diagnóstico é clínico e exige confirmação.' },
    { t: 'Os resultados individuais devem ser informados ao gestor para adequação das cobranças.', ok: false,
      why: 'Errada. Resultado individual é dado sensível e não vai ao gestor.' },
    { t: 'Instrumentos de rastreamento dispensam a entrevista clínica.', ok: false,
      why: 'Errada. São complementares à avaliação, nunca substitutos.' },
    { t: 'Rastrear é sempre benéfico, independentemente da existência de fluxo de encaminhamento.', ok: false,
      why: 'Errada. Rastrear sem caminho de cuidado gera dano — é aplicação direta da prevenção quaternária.' }
  ],
  comentario: 'Rastreamento em saúde mental só se justifica com quatro condições: confirmação clínica, sigilo, fluxo de encaminhamento e uso agregado para intervir na organização. Faltando qualquer uma, rotula sem cuidar.',
  pegadinha: 'A ideia de que rastrear é sempre bom ignora que identificar sem tratar é dano, não prevenção.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Ferreira Junior — Rastreamento de doenças'] },

/* ============ 4.9 Doenças infectocontagiosas ocupacionais ============== */
{ id: 'q-4.9-030', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de canil municipal é mordido por animal não vacinado e de procedência desconhecida, com ferimento profundo em mão. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Além da limpeza cuidadosa do ferimento, a avaliação para profilaxia antirrábica deve ser feita conforme o tipo de exposição e a condição do animal, e a situação vacinal antitetânica precisa ser verificada — sendo o evento também acidente do trabalho, com registro e comunicação devidos.', ok: true,
      why: 'Correta. Mordedura profunda por animal de procedência desconhecida exige avaliação antirrábica e antitetânica, e o evento é acidente do trabalho.' },
    { t: 'A profilaxia antirrábica só é indicada se o animal apresentar sinais de doença no momento da agressão.', ok: false,
      why: 'Errada. A indicação considera tipo de exposição, espécie e possibilidade de observação do animal; ausência de sinais no momento não afasta o risco.' },
    { t: 'A limpeza do ferimento é dispensável quando se inicia a profilaxia.', ok: false,
      why: 'Errada. A limpeza abundante é medida inicial essencial e reduz a carga viral no local.' },
    { t: 'Por ser mordedura de animal, o evento não configura acidente do trabalho.', ok: false,
      why: 'Errada. Ocorreu no exercício do trabalho e configura acidente típico.' },
    { t: 'A verificação da situação vacinal antitetânica é desnecessária em ferimentos de mão.', ok: false,
      why: 'Errada. Ferimento profundo é justamente o cenário de risco para tétano.' }
  ],
  comentario: 'Mordedura em atividade com animais: limpeza abundante, avaliação antirrábica conforme exposição e animal, verificação antitetânica, e registro como acidente do trabalho. Nenhuma dessas etapas é dispensável.',
  pegadinha: 'Condicionar a profilaxia a sinais de doença no animal no momento da agressão desconhece o período de transmissibilidade.',
  refs: ['Ministério da Saúde — profilaxia antirrábica', 'NR-31', 'Lei nº 8.213/1991'] },

{ id: 'q-4.9-031', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre biossegurança em laboratórios que manipulam agentes biológicos, é CORRETO afirmar:',
  alts: [
    { t: 'O nível de contenção exigido decorre da classe de risco do agente e do procedimento realizado, combinando práticas laboratoriais, equipamentos de contenção e características da instalação — e procedimentos geradores de aerossol podem exigir contenção superior à classe do agente.', ok: true,
      why: 'Correta. Nível de biossegurança combina prática, equipamento e instalação, e o procedimento pode elevar a exigência acima da classe do agente.' },
    { t: 'O nível de contenção depende exclusivamente da classe de risco do agente.', ok: false,
      why: 'Errada. O procedimento realizado também determina a exigência.' },
    { t: 'Cabine de segurança biológica substitui as boas práticas laboratoriais.', ok: false,
      why: 'Errada. Equipamento não substitui prática; a contenção é resultado dos três componentes juntos.' },
    { t: 'Agentes de classe de risco 1 dispensam qualquer medida de contenção.', ok: false,
      why: 'Errada. Mesmo em classe 1 aplicam-se práticas laboratoriais básicas.' },
    { t: 'A classificação de risco do agente é a mesma em todos os países e contextos.', ok: false,
      why: 'Errada. Há variação conforme o contexto epidemiológico e a listagem oficial adotada.' }
  ],
  comentario: 'Nível de biossegurança = prática + equipamento + instalação. E atenção ao detalhe cobrado: procedimento gerador de aerossol pode exigir contenção acima da classe do agente, porque muda a via de exposição.',
  pegadinha: 'Reduzir a contenção à classe do agente ignora que o procedimento pode elevar o risco real.',
  refs: ['Classificação de Risco dos Agentes Biológicos — Ministério da Saúde', 'NR-32'] },

/* ==================== 7.6 Código de Ética Médica ======================= */
{ id: 'q-7.6-030', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Médico do trabalho é procurado por advogado da empresa solicitando cópia do prontuário ocupacional de ex-empregado que move ação trabalhista, para subsidiar a defesa. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Deve recusar o fornecimento direto, orientando que o acesso ao prontuário em processo se dá pelas vias próprias, com autorização do titular ou por determinação judicial dirigida ao médico — o sigilo persiste após o fim do vínculo.', ok: true,
      why: 'Correta. O sigilo não se extingue com o fim do contrato de trabalho, e a via processual adequada não é a entrega direta ao advogado da parte contrária.' },
    { t: 'Deve fornecer, pois a empresa custeou os exames e o processo é dela.', ok: false,
      why: 'Errada. Custeio não confere titularidade sobre o conteúdo clínico.' },
    { t: 'Deve fornecer apenas os atestados de aptidão, e nunca o prontuário — sem qualquer outra ressalva.', ok: false,
      why: 'Errada quanto à ausência de ressalva: mesmo os documentos seguem as vias próprias, e a autorização do titular ou a determinação judicial é que definem o acesso.' },
    { t: 'O fim do vínculo empregatício extingue o dever de sigilo.', ok: false,
      why: 'Errada. O sigilo persiste após o fim do vínculo e mesmo após a morte do paciente.' },
    { t: 'Deve entregar ao setor jurídico e deixar que ele decida o que usar.', ok: false,
      why: 'Errada. A entrega já consuma a quebra do sigilo, independentemente do uso posterior.' }
  ],
  comentario: 'Sigilo não termina com o contrato. Pedido de prontuário para instruir defesa da empresa contra o próprio trabalhador é o cenário mais delicado do tema: o acesso se faz pelas vias próprias, com autorização do titular ou determinação judicial.',
  pegadinha: 'A alternativa que manda entregar ao jurídico "para ele decidir" ignora que a quebra se consuma na entrega.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre prontuário', 'LGPD'] },

{ id: 'q-7.6-031', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a relação entre o médico do trabalho e o médico assistente do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'A comunicação entre eles é desejável e deve ocorrer com conhecimento do trabalhador, versando sobre as exigências da função e as repercussões funcionais — sem que o médico do trabalho reveja ou desautorize a conduta terapêutica do assistente.', ok: true,
      why: 'Correta. A articulação melhora as decisões de aptidão e de retorno, respeitando a autonomia técnica de cada um e a ciência do paciente.' },
    { t: 'O médico do trabalho pode desautorizar o atestado do assistente com base em sua própria avaliação retrospectiva.', ok: false,
      why: 'Errada. Divergência entre médicos se resolve por vias próprias, não por revisão unilateral.' },
    { t: 'A comunicação entre os dois dispensa o conhecimento do trabalhador.', ok: false,
      why: 'Errada. O paciente deve ter ciência da comunicação sobre sua saúde.' },
    { t: 'O médico do trabalho deve assumir o tratamento quando discordar da conduta do assistente.', ok: false,
      why: 'Errada. Assumir o tratamento rompe o cuidado longitudinal e confunde papéis.' },
    { t: 'A troca de informações entre médicos é vedada pelo sigilo em qualquer hipótese.', ok: false,
      why: 'Errada. A comunicação entre profissionais que assistem o mesmo paciente é legítima, com ciência dele e no interesse do cuidado.' }
  ],
  comentario: 'A articulação com o assistente é uma das ferramentas mais úteis da especialidade: o médico do trabalho informa as exigências da função, o assistente informa a repercussão. Nenhum revisa o outro, e o trabalhador sabe da conversa.',
  pegadinha: 'Interpretar o sigilo como proibição de comunicação entre médicos isola o médico do trabalho de informação essencial.',
  refs: ['Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] },

/* ============= 1.8 Vigilância em saúde do trabalhador ================== */
{ id: 'q-1.8-040', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante inspeção, a equipe de vigilância identifica risco grave e iminente em uma prensa sem proteção. A empresa alega que a paralisação do equipamento inviabiliza a produção e propõe corrigir em trinta dias. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Diante de risco grave e iminente, a medida cabível é a interdição imediata do equipamento, independentemente do impacto produtivo, sendo o levantamento condicionado à correção — prazo para adequação se aplica a situações que não configurem risco grave e iminente.', ok: true,
      why: 'Correta. A caracterização de risco grave e iminente é justamente o que afasta a concessão de prazo: a exposição não pode continuar enquanto se corrige.' },
    { t: 'A concessão de prazo é sempre preferível à interdição, por preservar empregos.', ok: false,
      why: 'Errada. Manter trabalhadores expostos a risco grave e iminente durante o prazo é inaceitável.' },
    { t: 'A interdição depende de concordância prévia da empresa.', ok: false,
      why: 'Errada. É ato administrativo de autoridade, não acordo.' },
    { t: 'Durante a interdição do equipamento, os trabalhadores do setor perdem o direito à remuneração.', ok: false,
      why: 'Errada. Os salários são mantidos como se em efetivo exercício durante a paralisação.' },
    { t: 'A interdição só pode alcançar o estabelecimento inteiro, nunca um equipamento isolado.', ok: false,
      why: 'Errada. A medida é graduável e pode recair sobre a máquina.' }
  ],
  comentario: 'Risco grave e iminente é a hipótese em que não se concede prazo: interdita-se e depois se corrige. A medida é graduável — máquina, setor ou estabelecimento — e os salários são mantidos durante a paralisação.',
  pegadinha: 'A alternativa que invoca a preservação de empregos usa um valor legítimo para manter trabalhadores expostos.',
  refs: ['CLT — Capítulo V do Título II', 'NR-3', 'NR-12'] },

{ id: 'q-1.8-041', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a participação dos trabalhadores nas ações de vigilância em saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Ela é elemento estruturante do campo, pois são os trabalhadores que conhecem o trabalho real e as situações que não aparecem nos documentos — e sua participação deve ser assegurada com proteção contra retaliação.', ok: true,
      why: 'Correta. O conhecimento do trabalho real é o insumo que a inspeção documental não alcança, e sem proteção contra retaliação esse conhecimento não emerge.' },
    { t: 'A participação dos trabalhadores compromete a objetividade técnica da inspeção.', ok: false,
      why: 'Errada. Ela acrescenta informação sobre a atividade real, que a documentação não descreve.' },
    { t: 'Basta entrevistar a chefia, que conhece melhor o processo produtivo.', ok: false,
      why: 'Errada. A chefia conhece o prescrito; quem conhece o real é quem executa.' },
    { t: 'A proteção contra retaliação é irrelevante, pois as entrevistas são sigilosas.', ok: false,
      why: 'Errada. Sigilo das entrevistas é medida necessária mas insuficiente sem proteção efetiva.' },
    { t: 'A participação se limita à indicação de representantes formais.', ok: false,
      why: 'Errada. Alcança os trabalhadores diretamente envolvidos nas atividades sob análise.' }
  ],
  comentario: 'Vigilância sem ouvir quem executa vê apenas o trabalho prescrito. A participação é estruturante — e depende de duas condições práticas: sigilo das entrevistas e proteção efetiva contra retaliação.',
  pegadinha: 'Entrevistar apenas a chefia produz um retrato do que deveria acontecer, não do que acontece.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] }

);
