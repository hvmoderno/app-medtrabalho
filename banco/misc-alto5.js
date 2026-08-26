/* Aprofundamento: 2.5, 2.8, 4.7, 4.9, 7.6 e 1.8.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ========== 2.5 Avaliação e gerenciamento das exposições =============== */
{ id: 'q-2.5-030', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao caracterizar a exposição de um grupo de soldadores, o higienista dispõe de poucos recursos para amostragem e precisa priorizar. Sobre a estratégia, é CORRETO afirmar:',
  alts: [
    { t: 'Deve considerar a toxicidade, a magnitude estimada e o número de expostos, começando pelo maior risco', ok: true,
      why: 'Correta. Priorizar sem caracterização básica é sortear; com ela, a decisão é defensável.' },
    { t: 'Deve amostrar uniformemente todos os grupos, distribuindo os recursos de forma igualitária entre eles.', ok: false,
      why: 'Errada. Ignora diferenças de risco e desperdiça recursos em exposições irrelevantes.' },
    { t: 'Deve considerar a toxicidade, seguindo a ordem em que as reclamações dos trabalhadores são registradas.', ok: false,
      why: 'Errada. A percepção é insumo valioso, mas não substitui critério técnico de risco.' },
    { t: 'Deve considerar toxicidade e expostos, ficando impedida qualquer conclusão sem amostrar todos os grupos.', ok: false,
      why: 'Errada. Avaliação qualitativa e analogia permitem decisões enquanto a amostragem avança.' },
    { t: 'Deve considerar toxicidade e expostos, sendo a caracterização básica dispensável em processo conhecido.', ok: false,
      why: 'Errada. É ela que fundamenta a formação de grupos e a priorização.' }
  ],
  comentario: 'Recursos limitados exigem priorização, e priorização exige caracterização básica: processo, agentes, tarefas, tempo de exposição, número de expostos. Sem isso, amostrar vira loteria cara.',
  pegadinha: 'A distribuição uniforme parece justa e é a menos eficiente do ponto de vista de proteção.',
  refs: ['Jahn, Bullock & Ignacio — Uma estratégia para avaliar e gerenciar exposições ocupacionais (ABHO)'] },

{ id: 'q-2.5-031', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso de dados de exposições análogas na avaliação ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Podem subsidiar o julgamento, desde que documentada a similaridade e explicitada a limitação.', ok: true,
      why: 'Correta. Analogia é recurso legítimo, desde que a similaridade seja demonstrada.' },
    { t: 'Dados de outras empresas nunca podem ser utilizados, por serem estranhos ao caso sob análise.', ok: false,
      why: 'Errada. São recurso reconhecido, sobretudo na reconstrução de exposições pretéritas.' },
    { t: 'Podem subsidiar o julgamento, presumindo-se a similaridade quando as empresas são do mesmo ramo.', ok: false,
      why: 'Errada. Mesmo ramo pode ter processos, controles e organizações muito distintos.' },
    { t: 'Podem subsidiar o julgamento, dispensando o uso de dados análogos a explicitação de limitações.', ok: false,
      why: 'Errada. Explicitar a limitação é condição de validade técnica da conclusão.' },
    { t: 'Podem subsidiar o julgamento, substituindo integralmente a avaliação própria quando disponíveis.', ok: false,
      why: 'Errada. São subsídio; a avaliação própria continua sendo o padrão quando possível.' }
  ],
  comentario: 'Analogia é recurso útil e limitado: exige demonstrar similaridade de processo, agente, controle e organização, e exige dizer no laudo que se trata de analogia. Mesmo ramo econômico não é prova de similaridade.',
  pegadinha: 'Presumir similaridade pelo ramo econômico é o atalho que fragiliza laudos de exposição pretérita.',
  refs: ['Jahn, Bullock & Ignacio — Uma estratégia para avaliar e gerenciar exposições ocupacionais (ABHO)'] },

/* ==================== 2.8 Proteção respiratória ======================== */
{ id: 'q-2.8-030', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Em uma empresa, os respiradores purificadores de ar com filtros químicos são usados sem qualquer critério definido para troca dos cartuchos, ficando a decisão a cargo do trabalhador "quando sentir cheiro". Sobre a prática, é CORRETO afirmar:',
  alts: [
    { t: 'O odor não é critério confiável, pela fadiga olfativa e por limiares acima do valor-limite.', ok: true,
      why: 'Correta. Depender do olfato expõe justamente nos agentes que não avisam.' },
    { t: 'A percepção de odor pelo usuário é o critério mais seguro para identificar a saturação do filtro.', ok: false,
      why: 'Errada. É critério falho e potencialmente letal em agentes com limiar alto.' },
    { t: 'O odor não é confiável, e filtros químicos não saturam, o que dispensa cronograma de troca.', ok: false,
      why: 'Errada. Saturam por definição; a capacidade depende de concentração, umidade e tempo.' },
    { t: 'O odor não é confiável, devendo a troca ocorrer quando aumentar a resistência respiratória.', ok: false,
      why: 'Errada. Resistência indica saturação de filtros de partículas, não de químicos.' },
    { t: 'O odor não é confiável, dispensando o cronograma de troca registro, por ser rotina operacional.', ok: false,
      why: 'Errada. O registro é parte do programa e permite verificar cumprimento e eficácia.' }
  ],
  comentario: 'Dois critérios distintos: filtro de partículas colmata e aumenta a resistência respiratória; filtro químico satura e não avisa. Por isso o químico exige cronograma calculado e registrado — nunca o nariz do trabalhador.',
  pegadinha: 'Confundir os sinais de esgotamento dos dois tipos de filtro é o erro que mantém trabalhadores com cartucho saturado.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

{ id: 'q-2.8-031', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o ensaio de vedação em programa de proteção respiratória, é CORRETO afirmar:',
  alts: [
    { t: 'Verifica a adequação de um modelo e tamanho a um rosto, e deve ser repetido periodicamente depois', ok: true,
      why: 'Correta. Não se confunde com a checagem rápida que o usuário faz a cada colocação.' },
    { t: 'Verifica a adequação do modelo ao rosto e, realizado na admissão, não precisa mais ser repetido.', ok: false,
      why: 'Errada. Mudanças de peso, cirurgias e alterações faciais exigem novo ensaio.' },
    { t: 'Verifica a adequação ao rosto, sendo dispensado quando o respirador possui certificação de aprovação.', ok: false,
      why: 'Errada. Certificação atesta o equipamento; o ensaio verifica a adequação àquele rosto.' },
    { t: 'Verifica a adequação ao rosto e substitui a verificação feita pelo usuário a cada colocação.', ok: false,
      why: 'Errada. São complementares e ambos necessários.' },
    { t: 'Verifica a adequação ao rosto, sendo os ensaios qualitativo e quantitativo intercambiáveis sempre.', ok: false,
      why: 'Errada. A escolha depende do tipo de respirador e do fator de proteção pretendido.' }
  ],
  comentario: 'Ensaio de vedação: formal, periódico, documentado, específico para modelo e tamanho. Verificação de vedação pelo usuário: a cada colocação, rápida. Um não substitui o outro, e certificação não substitui nenhum dos dois.',
  pegadinha: 'Tratar o ensaio como evento único de admissão ignora que o rosto do trabalhador muda ao longo dos anos.',
  refs: ['Torloni & Vieira — Manual de Proteção Respiratória', 'NR-6'] },

/* ==================== 4.7 Psiquiatria ocupacional ====================== */
{ id: 'q-4.7-030', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador em uso de medicação psiquiátrica estável há dois anos, sem repercussão funcional, é submetido a exame periódico. O setor de pessoal solicita que ele seja "reavaliado com mais frequência que os demais, por segurança". Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'A periodicidade segue o risco da função e a condição clínica, não o diagnóstico psiquiátrico.', ok: true,
      why: 'Correta. Reavaliar mais por rótulo é discriminação disfarçada de zelo.' },
    { t: 'A solicitação é adequada, pois transtornos mentais exigem vigilância permanente e diferenciada.', ok: false,
      why: 'Errada. Vigilância diferenciada sem critério técnico estigmatiza e não protege ninguém.' },
    { t: 'A periodicidade segue o risco, cabendo ao setor de pessoal defini-la por conhecer a operação.', ok: false,
      why: 'Errada. É decisão técnica do médico coordenador.' },
    { t: 'A periodicidade segue o risco da função, devendo o trabalhador ser transferido preventivamente.', ok: false,
      why: 'Errada. Transferência sem repercussão funcional demonstrada é medida discriminatória.' },
    { t: 'A periodicidade segue o risco, sendo irrelevante a estabilidade de dois anos para a aptidão.', ok: false,
      why: 'Errada. Estabilidade prolongada e ausência de repercussão sustentam a aptidão.' }
  ],
  comentario: 'Periodicidade se define por risco da função e condição clínica com repercussão — nunca por rótulo diagnóstico. Reavaliação diferenciada "por precaução" em quem está estável é vigilância estigmatizante.',
  pegadinha: 'A alternativa da transferência preventiva usa o vocabulário da segurança para produzir exclusão.',
  refs: ['Camargo — Psiquiatria Ocupacional', 'NR-7', 'Código de Ética Médica'] },

{ id: 'q-4.7-031', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso de instrumentos de rastreamento de transtornos mentais em exames ocupacionais periódicos, é CORRETO afirmar:',
  alts: [
    { t: 'Podem apoiar a identificação precoce, mas exigem confirmação clínica, sigilo e encaminhamento.', ok: true,
      why: 'Correta. Rastrear sem caminho de cuidado gera identificação que ninguém acolhe.' },
    { t: 'Podem apoiar a identificação, equivalendo o resultado positivo em rastreamento a diagnóstico.', ok: false,
      why: 'Errada. Rastreamento levanta suspeita; o diagnóstico é clínico e exige confirmação.' },
    { t: 'Podem apoiar a identificação, devendo os resultados individuais ir ao gestor para ajustar cobranças.', ok: false,
      why: 'Errada. Resultado individual é dado sensível e não vai ao gestor.' },
    { t: 'Podem apoiar a identificação precoce, dispensando os instrumentos de rastreamento a entrevista clínica.', ok: false,
      why: 'Errada. São complementares à avaliação, nunca substitutos.' },
    { t: 'Podem apoiar a identificação, sendo rastrear sempre benéfico, haja ou não fluxo de encaminhamento.', ok: false,
      why: 'Errada. Rastrear sem caminho de cuidado gera dano; é prevenção quaternária.' }
  ],
  comentario: 'Rastreamento em saúde mental só se justifica com quatro condições: confirmação clínica, sigilo, fluxo de encaminhamento e uso agregado para intervir na organização. Faltando qualquer uma, rotula sem cuidar.',
  pegadinha: 'A ideia de que rastrear é sempre bom ignora que identificar sem tratar é dano, não prevenção.',
  refs: ['De Lucca — Fatores Psicossociais e Saúde Mental no Trabalho', 'Ferreira Junior — Rastreamento de doenças'] },

/* ============ 4.9 Doenças infectocontagiosas ocupacionais ============== */
{ id: 'q-4.9-030', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de canil municipal é mordido por animal não vacinado e de procedência desconhecida, com ferimento profundo em mão. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Além da limpeza, avaliar profilaxia antirrábica e situação antitetânica, e registrar o acidente.', ok: true,
      why: 'Correta. Mordedura profunda por animal desconhecido exige as duas avaliações, e o evento é acidente do trabalho.' },
    { t: 'Além da limpeza, indicar antirrábica apenas se o animal apresentar sinais de doença na agressão.', ok: false,
      why: 'Errada. A indicação considera tipo de exposição, espécie e possibilidade de observação.' },
    { t: 'Iniciar a profilaxia de imediato, sendo dispensável a limpeza do ferimento nesse caso.', ok: false,
      why: 'Errada. A limpeza abundante é medida inicial essencial e reduz a carga viral no local.' },
    { t: 'Além da limpeza e da profilaxia, não configura o evento acidente do trabalho por ser mordedura.', ok: false,
      why: 'Errada. Ocorreu no exercício do trabalho e configura acidente típico.' },
    { t: 'Além da limpeza e da antirrábica, dispensar a verificação antitetânica em ferimentos de mão.', ok: false,
      why: 'Errada. Ferimento profundo é justamente o cenário de risco para tétano.' }
  ],
  comentario: 'Mordedura em atividade com animais: limpeza abundante, avaliação antirrábica conforme exposição e animal, verificação antitetânica, e registro como acidente do trabalho. Nenhuma dessas etapas é dispensável.',
  pegadinha: 'Condicionar a profilaxia a sinais de doença no animal no momento da agressão desconhece o período de transmissibilidade.',
  refs: ['Ministério da Saúde — profilaxia antirrábica', 'NR-31', 'Lei nº 8.213/1991'] },

{ id: 'q-4.9-031', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre biossegurança em laboratórios que manipulam agentes biológicos, é CORRETO afirmar:',
  alts: [
    { t: 'Decorre da classe do agente e do procedimento, combinando práticas, equipamentos e instalação.', ok: true,
      why: 'Correta. Procedimentos geradores de aerossol podem exigir contenção acima da classe.' },
    { t: 'Decorre exclusivamente da classe de risco do agente manipulado no laboratório em questão.', ok: false,
      why: 'Errada. O procedimento realizado também determina a exigência.' },
    { t: 'Decorre da classe e do procedimento, substituindo a cabine de segurança as boas práticas laboratoriais.', ok: false,
      why: 'Errada. Equipamento não substitui prática; a contenção resulta dos três componentes.' },
    { t: 'Decorre da classe do agente, dispensando os de classe de risco 1 qualquer medida de contenção.', ok: false,
      why: 'Errada. Mesmo em classe 1 aplicam-se práticas laboratoriais básicas.' },
    { t: 'Decorre da classe do agente, que é a mesma em todos os países e contextos epidemiológicos.', ok: false,
      why: 'Errada. Há variação conforme o contexto e a listagem oficial adotada.' }
  ],
  comentario: 'Nível de biossegurança = prática + equipamento + instalação. E atenção ao detalhe cobrado: procedimento gerador de aerossol pode exigir contenção acima da classe do agente, porque muda a via de exposição.',
  pegadinha: 'Reduzir a contenção à classe do agente ignora que o procedimento pode elevar o risco real.',
  refs: ['Classificação de Risco dos Agentes Biológicos — Ministério da Saúde', 'NR-32'] },

/* ==================== 7.6 Código de Ética Médica ======================= */
{ id: 'q-7.6-030', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Médico do trabalho é procurado por advogado da empresa solicitando cópia do prontuário ocupacional de ex-empregado que move ação trabalhista, para subsidiar a defesa. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Deve recusar a entrega direta: o acesso se dá com autorização do titular ou por ordem judicial.', ok: true,
      why: 'Correta. O sigilo não se extingue com o fim do contrato de trabalho.' },
    { t: 'Deve fornecer os documentos, pois a empresa custeou os exames e é parte no processo em curso.', ok: false,
      why: 'Errada. Custeio não confere titularidade sobre o conteúdo clínico.' },
    { t: 'Deve fornecer apenas os atestados de aptidão, e nunca o prontuário, sem qualquer outra ressalva.', ok: false,
      why: 'Errada quanto à ausência de ressalva: mesmo esses documentos seguem as vias próprias.' },
    { t: 'Deve recusar durante o vínculo, extinguindo-se o dever de sigilo com o fim do contrato de trabalho.', ok: false,
      why: 'Errada. O sigilo persiste após o fim do vínculo e mesmo após a morte do paciente.' },
    { t: 'Deve entregar ao setor jurídico da empresa e deixar que ele decida o que será usado no processo.', ok: false,
      why: 'Errada. A entrega já consuma a quebra do sigilo, independentemente do uso posterior.' }
  ],
  comentario: 'Sigilo não termina com o contrato. Pedido de prontuário para instruir defesa da empresa contra o próprio trabalhador é o cenário mais delicado do tema: o acesso se faz pelas vias próprias, com autorização do titular ou determinação judicial.',
  pegadinha: 'A alternativa que manda entregar ao jurídico "para ele decidir" ignora que a quebra se consuma na entrega.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre prontuário', 'LGPD'] },

{ id: 'q-7.6-031', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a relação entre o médico do trabalho e o médico assistente do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'É desejável e deve ocorrer com ciência do trabalhador, sobre exigências e repercussões funcionais.', ok: true,
      why: 'Correta. Melhora as decisões de aptidão sem que um médico reveja a conduta do outro.' },
    { t: 'É desejável, podendo o médico do trabalho desautorizar o atestado do assistente por sua avaliação.', ok: false,
      why: 'Errada. Divergência entre médicos se resolve por vias próprias, não por revisão unilateral.' },
    { t: 'É desejável e versa sobre a função, dispensando a comunicação entre eles o conhecimento do trabalhador.', ok: false,
      why: 'Errada. O paciente deve ter ciência da comunicação sobre sua saúde.' },
    { t: 'É desejável, devendo o médico do trabalho assumir o tratamento quando discordar da conduta adotada.', ok: false,
      why: 'Errada. Assumir o tratamento rompe o cuidado longitudinal e confunde papéis.' },
    { t: 'É desejável em tese, mas a troca de informações entre médicos é vedada pelo sigilo profissional.', ok: false,
      why: 'Errada. A comunicação entre quem assiste o mesmo paciente é legítima, com ciência dele.' }
  ],
  comentario: 'A articulação com o assistente é uma das ferramentas mais úteis da especialidade: o médico do trabalho informa as exigências da função, o assistente informa a repercussão. Nenhum revisa o outro, e o trabalhador sabe da conversa.',
  pegadinha: 'Interpretar o sigilo como proibição de comunicação entre médicos isola o médico do trabalho de informação essencial.',
  refs: ['Código de Ética Médica', 'Resolução CFM sobre normas para médicos que atendem o trabalhador'] },

/* ============= 1.8 Vigilância em saúde do trabalhador ================== */
{ id: 'q-1.8-040', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante inspeção, a equipe de vigilância identifica risco grave e iminente em uma prensa sem proteção. A empresa alega que a paralisação do equipamento inviabiliza a produção e propõe corrigir em trinta dias. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'Cabe a interdição imediata do equipamento, com o levantamento condicionado à correção do risco', ok: true,
      why: 'Correta. Risco grave e iminente é o que afasta a concessão de prazo para adequação.' },
    { t: 'Cabe conceder prazo para adequação, solução sempre preferível à interdição por preservar empregos.', ok: false,
      why: 'Errada. Manter trabalhadores expostos durante o prazo é inaceitável.' },
    { t: 'Cabe interdição imediata do equipamento, dependendo a medida de concordância prévia da empresa.', ok: false,
      why: 'Errada. É ato administrativo de autoridade, não acordo.' },
    { t: 'Cabe interdição imediata, perdendo os trabalhadores do setor a remuneração durante a paralisação.', ok: false,
      why: 'Errada. Os salários são mantidos como se em efetivo exercício.' },
    { t: 'Cabe interdição, que alcança o estabelecimento inteiro, e nunca um equipamento isoladamente.', ok: false,
      why: 'Errada. A medida é graduável e pode recair sobre a máquina.' }
  ],
  comentario: 'Risco grave e iminente é a hipótese em que não se concede prazo: interdita-se e depois se corrige. A medida é graduável — máquina, setor ou estabelecimento — e os salários são mantidos durante a paralisação.',
  pegadinha: 'A alternativa que invoca a preservação de empregos usa um valor legítimo para manter trabalhadores expostos.',
  refs: ['CLT — Capítulo V do Título II', 'NR-3', 'NR-12'] },

{ id: 'q-1.8-041', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a participação dos trabalhadores nas ações de vigilância em saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'É estruturante, pois são eles que conhecem o trabalho real, aquele que não aparece nos documentos', ok: true,
      why: 'Correta. E sem proteção contra retaliação esse conhecimento não emerge.' },
    { t: 'É prevista, mas a participação dos trabalhadores compromete a objetividade técnica da inspeção.', ok: false,
      why: 'Errada. Ela acrescenta informação sobre a atividade real, que a documentação não descreve.' },
    { t: 'É estruturante, bastando entrevistar a chefia, que conhece melhor o processo produtivo do setor.', ok: false,
      why: 'Errada. A chefia conhece o prescrito; quem conhece o real é quem executa.' },
    { t: 'É estruturante, sendo irrelevante a proteção contra retaliação, já que as entrevistas são sigilosas.', ok: false,
      why: 'Errada. Sigilo é necessário mas insuficiente sem proteção efetiva.' },
    { t: 'É estruturante e se realiza pela indicação de representantes formais dos trabalhadores do setor.', ok: false,
      why: 'Errada. Alcança os trabalhadores diretamente envolvidos nas atividades sob análise.' }
  ],
  comentario: 'Vigilância sem ouvir quem executa vê apenas o trabalho prescrito. A participação é estruturante — e depende de duas condições práticas: sigilo das entrevistas e proteção efetiva contra retaliação.',
  pegadinha: 'Entrevistar apenas a chefia produz um retrato do que deveria acontecer, não do que acontece.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] }

);
