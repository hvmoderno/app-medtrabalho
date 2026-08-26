/* Aprofundamento: 1.6, 1.7, 1.10, 2.7, 4.10 e 5.6.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============= 1.6 Políticas públicas de saúde do trabalhador ========== */
{ id: 'q-1.6-030', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um município de pequeno porte, sem centro de referência próprio, identifica casos de intoxicação por agrotóxicos em trabalhadores rurais. Sobre a organização da resposta, é CORRETO afirmar:',
  alts: [
    { t: 'A ausência de centro de referência não desobriga a rede local de notificar, assistir e acionar.', ok: true,
      why: 'Correta. A rede é organizada por níveis e a retaguarda especializada é regionalizada.' },
    { t: 'Sem centro de referência, os casos devem ir a outro município e sair das estatísticas locais.', ok: false,
      why: 'Errada. A notificação é feita onde o caso é identificado.' },
    { t: 'A ausência de estrutura especializada desobriga o município de qualquer ação de vigilância local.', ok: false,
      why: 'Errada. As atribuições permanecem, com apoio matricial regional.' },
    { t: 'A rede local deve agir, não integrando os casos em rurais informais as estatísticas do campo.', ok: false,
      why: 'Errada. A notificação independe do vínculo do trabalhador.' },
    { t: 'A rede local deve assistir, cabendo a resposta exclusivamente ao órgão de fiscalização do trabalho.', ok: false,
      why: 'Errada. A vigilância em saúde tem competências próprias.' }
  ],
  comentario: 'Regionalização não é terceirização de responsabilidade: o município notifica, assiste e vigia, buscando apoio matricial regional. E trabalhador informal conta nas estatísticas — a política é universal.',
  pegadinha: 'Excluir das estatísticas locais o caso encaminhado a outro município distorce o retrato do território.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.6-031', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a intersetorialidade nas políticas de saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'A articulação entre os setores amplia a intervenção, pois cada um tem instrumentos próprios.', ok: true,
      why: 'Correta. Saúde, trabalho, previdência, ambiente e ministério público se complementam.' },
    { t: 'A articulação é possível, impedindo a atuação de uma esfera a das demais sobre o mesmo fato.', ok: false,
      why: 'Errada. As competências coexistem e se complementam.' },
    { t: 'A intersetorialidade é princípio teórico do campo, sem instrumentos concretos de aplicação prática.', ok: false,
      why: 'Errada. Inquéritos, termos de conduta e ações conjuntas são instrumentos concretos.' },
    { t: 'A articulação amplia a intervenção, não tendo o ministério público atuação em saúde do trabalhador.', ok: false,
      why: 'Errada. Atua por inquéritos, termos de ajustamento e ações civis públicas.' },
    { t: 'A articulação amplia a intervenção, sendo incompatível com a proteção do trabalhador a área ambiental.', ok: false,
      why: 'Errada. Contaminações atingem trabalhadores e comunidade simultaneamente.' }
  ],
  comentario: 'Cada esfera tem sua ferramenta: sanitária interdita, trabalhista autua, previdenciária cobra regressivamente, ambiental licencia e o Ministério Público ajuíza. Elas se somam sobre o mesmo fato — e é isso que torna a intersetorialidade prática, não retórica.',
  pegadinha: 'A ideia de exclusividade entre esferas é usada para paralisar a atuação de uma alegando a competência de outra.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

/* ============================== 1.7 SUS ================================= */
{ id: 'q-1.7-030', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador acidentado em obra é atendido em unidade de urgência da rede pública. Sobre a atuação do serviço, é CORRETO afirmar:',
  alts: [
    { t: 'Além de assistir, cabe registrar a relação com o trabalho, notificar e orientar o trabalhador.', ok: true,
      why: 'Correta. O reconhecimento começa na porta de entrada e independe do vínculo.' },
    { t: 'Cabe limitar-se à assistência, deixando o registro da relação com o trabalho para outros serviços.', ok: false,
      why: 'Errada. O registro na porta de entrada é o que sustenta o reconhecimento.' },
    { t: 'Cabe assistir, devendo o atendimento em obra ser cobrado da empresa antes da assistência prestada.', ok: false,
      why: 'Errada. O atendimento no sistema público é universal e gratuito.' },
    { t: 'Cabe assistir e notificar, dependendo a notificação de o trabalhador comprovar vínculo formal.', ok: false,
      why: 'Errada. A notificação independe do vínculo.' },
    { t: 'Cabe assistir e notificar, sendo a orientação previdenciária atribuição exclusiva do empregador.', ok: false,
      why: 'Errada. Orientar sobre direitos integra o cuidado.' }
  ],
  comentario: 'A porta de urgência é onde o nexo se perde. Registrar a ocupação, notificar e orientar sobre a comunicação previdenciária são atos simples que transformam um atendimento isolado em dado de vigilância e em direito assegurado.',
  pegadinha: 'Condicionar a notificação à comprovação de vínculo formal exclui justamente os mais desprotegidos.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991 — art. 22'] },

{ id: 'q-1.7-031', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o financiamento e a organização do sistema público de saúde aplicados à saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O atendimento público não afasta a responsabilidade da empresa nem a cobertura previdenciária.', ok: true,
      why: 'Correta. Gratuidade para o usuário não significa ausência de custo atribuível.' },
    { t: 'O atendimento pela rede pública transfere ao Estado toda a responsabilidade decorrente do acidente.', ok: false,
      why: 'Errada. Responsabilidade da empresa e cobertura previdenciária permanecem.' },
    { t: 'O atendimento é universal, não podendo trabalhadores com plano de saúde ser atendidos na rede pública.', ok: false,
      why: 'Errada. O direito é universal, independentemente de cobertura privada.' },
    { t: 'O atendimento é gratuito, o que impede qualquer forma de ressarcimento ao sistema de saúde.', ok: false,
      why: 'Errada. Há hipóteses previstas de ressarcimento.' },
    { t: 'O atendimento é público, sendo a saúde do trabalhador financiada por contribuições previdenciárias.', ok: false,
      why: 'Errada. Integra o financiamento do sistema de saúde, que é tripartite.' }
  ],
  comentario: 'Gratuidade no acesso não é ausência de responsabilidade. O sistema atende sempre, e paralelamente permanecem a responsabilidade civil da empresa, a cobertura previdenciária e as hipóteses de ressarcimento.',
  pegadinha: 'A ideia de que atender pelo sistema público "resolve" o acidente apaga a responsabilidade da empresa.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991'] },

/* ========================= 1.10 Promoção da saúde ====================== */
{ id: 'q-1.10-030', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa institui programa de bonificação por metas de saúde individuais — índice de massa corporal, pressão arterial e prática de exercício —, com desconto no plano de saúde para quem atingir os alvos. Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'Vincular benefícios a parâmetros individuais de saúde é eticamente problemático e discriminatório.', ok: true,
      why: 'Correta. Penaliza condições que dependem de determinantes que o trabalhador não controla.' },
    { t: 'A proposta é adequada, pois cria incentivo objetivo à adoção de hábitos saudáveis pelo trabalhador.', ok: false,
      why: 'Errada. Penaliza determinantes que o trabalhador não controla integralmente.' },
    { t: 'A proposta é problemática, sendo irrelevante a coleta desses parâmetros para a proteção de dados.', ok: false,
      why: 'Errada. São dados de saúde, categoria sensível.' },
    { t: 'A proposta é problemática, embora metas individuais mensuráveis sejam condição de eficácia.', ok: false,
      why: 'Errada. Metas corporais individuais geram pressão sem alterar determinantes.' },
    { t: 'A proposta é problemática, sendo os trabalhadores com doenças crônicas beneficiados por ela.', ok: false,
      why: 'Errada. São justamente os mais penalizados por esse desenho.' }
  ],
  comentario: 'Promoção da saúde legítima muda ambiente e oferece oportunidade; promoção problemática mede o corpo do trabalhador e vincula benefício ao resultado. A segunda penaliza doente crônico, cria discriminação e trata dado sensível para finalidade contratual.',
  pegadinha: 'A alternativa do "incentivo objetivo" confunde estimular comportamento com premiar resultado clínico.',
  refs: ['OMS — Ambientes de trabalho saudáveis', 'LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-1.10-031', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a prevenção primária no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Atua antes do aparecimento da doença e inclui controlar a exposição e imunizar os expostos', ok: true,
      why: 'Correta. Na medicina do trabalho depende mais do ambiente que do indivíduo.' },
    { t: 'Corresponde ao rastreamento precoce de doenças em trabalhadores assintomáticos expostos ao agente.', ok: false,
      why: 'Errada. Rastreamento é prevenção secundária.' },
    { t: 'Atua antes da doença, realizando-se na medicina do trabalho principalmente por exames periódicos.', ok: false,
      why: 'Errada. O exame detecta efeito; a primária atua sobre a exposição.' },
    { t: 'Atua antes da doença, não incluindo ações de imunização dos trabalhadores expostos ao agente.', ok: false,
      why: 'Errada. A imunização é medida clássica de prevenção primária.' },
    { t: 'Atua antes da doença, sendo prevenção primária e promoção da saúde conceitos idênticos.', ok: false,
      why: 'Errada. A promoção atua sobre determinantes amplos, não sobre agravo específico.' }
  ],
  comentario: 'Primária evita que apareça — controle da fonte e imunização. Secundária detecta cedo — exames e rastreamento. Terciária reduz sequela. Quaternária protege do excesso. Em medicina do trabalho, a primária é quase sempre ambiental.',
  pegadinha: 'Classificar exame periódico como prevenção primária é o erro mais frequente do tema.',
  refs: ['Política Nacional de Promoção da Saúde', 'NR-7', 'NR-9'] },

/* ================== 2.7 Normas de Higiene Ocupacional ================== */
{ id: 'q-2.7-030', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um perito precisa avaliar a exposição de motorista de trator agrícola a vibração. Sobre a avaliação segundo os procedimentos técnicos de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'É vibração de corpo inteiro, medida na interface entre o assento e o próprio trabalhador', ok: true,
      why: 'Correta. Considera jornada e eixos, e difere da avaliação de mãos e braços.' },
    { t: 'É vibração transmitida pelo veículo, medida na empunhadura do volante, ponto de contato principal.', ok: false,
      why: 'Errada. Para corpo inteiro, mede-se na interface do assento.' },
    { t: 'É vibração de corpo inteiro, dispensando a avaliação a consideração do tempo de exposição.', ok: false,
      why: 'Errada. A dose depende do nível e do tempo de exposição.' },
    { t: 'É vibração de corpo inteiro, produzindo os mesmos efeitos da vibração de mãos e braços.', ok: false,
      why: 'Errada. Os órgãos-alvo e os desfechos são distintos.' },
    { t: 'É vibração de corpo inteiro, sem procedimento técnico padronizado disponível no país.', ok: false,
      why: 'Errada. Há norma de higiene ocupacional específica.' }
  ],
  comentario: 'Duas vibrações, dois procedimentos: corpo inteiro se mede no assento e adoece a coluna; mãos e braços se mede na empunhadura e produz a síndrome com Raynaud ocupacional. E em ambas o tempo de exposição integra o cálculo.',
  pegadinha: 'Medir na empunhadura do volante em trator confunde o agente que se quer avaliar.',
  refs: ['Normas de Higiene Ocupacional — Fundacentro', 'NR-15'] },

{ id: 'q-2.7-031', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a amostragem de aerodispersoides conforme os procedimentos técnicos de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A fração a amostrar depende do sítio de deposição em que aquele agente exerce o seu efeito', ok: true,
      why: 'Correta. Amostrar a fração errada produz resultado que não representa o risco.' },
    { t: 'Qualquer fração amostrada representa a exposição, bastando corrigir o cálculo ao final da análise.', ok: false,
      why: 'Errada. Cada fração deposita-se em sítio distinto da via aérea.' },
    { t: 'A fração depende do efeito, devendo a amostragem ser em ponto fixo, e não junto ao trabalhador.', ok: false,
      why: 'Errada. A referência para comparação com limites é a amostragem pessoal.' },
    { t: 'A fração depende do efeito, sendo irrelevante o tempo se conhecida a concentração instantânea.', ok: false,
      why: 'Errada. A exposição se caracteriza pela concentração ao longo da jornada.' },
    { t: 'A fração depende do efeito, sendo dispensável a calibração em avaliações de curta duração.', ok: false,
      why: 'Errada. A calibração valida o volume amostrado em qualquer duração.' }
  ],
  comentario: 'Três decisões definem a validade: qual fração amostrar (pelo sítio de ação do agente), onde amostrar (zona respiratória do trabalhador) e por quanto tempo (cobrindo as tarefas representativas). Erro em qualquer uma invalida o resultado.',
  pegadinha: 'Amostragem em ponto fixo é mais cômoda e não mede a exposição de ninguém.',
  refs: ['Normas de Higiene Ocupacional — Fundacentro', 'ACGIH'] },

/* ======================= 4.10 Imunizações ============================== */
{ id: 'q-4.10-030', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde com esquema completo para hepatite B apresenta sorologia com anti-HBs não reagente após o segundo esquema completo. Ocorre acidente percutâneo com paciente-fonte de sorologia desconhecida. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'É não respondedor, e a conduta pós-exposição difere, com avaliação para imunização passiva.', ok: true,
      why: 'Correta. Identificar o não respondedor antes do acidente é o que permite decidir certo.' },
    { t: 'Está protegido por ter recebido dois esquemas completos, independentemente do resultado sorológico.', ok: false,
      why: 'Errada. A proteção depende da resposta sorológica, não do número de doses.' },
    { t: 'É não respondedor, sendo a conduta pós-exposição idêntica à adotada para os respondedores.', ok: false,
      why: 'Errada. Envolve avaliação para imunização passiva.' },
    { t: 'É não respondedor, devendo receber um terceiro esquema completo antes de qualquer outra medida.', ok: false,
      why: 'Errada. A conduta pós-exposição é imediata e não espera novo esquema.' },
    { t: 'É não respondedor, sendo irrelevante a sorologia do paciente-fonte nessa condição específica.', ok: false,
      why: 'Errada. É determinante da conduta pós-exposição.' }
  ],
  comentario: 'Não respondedor é a razão de existir a verificação sorológica pós-vacinal. Descobrir isso no dia do acidente é tarde: a conduta específica precisa estar planejada antes. E investigar a fonte permanece obrigatório em qualquer cenário.',
  pegadinha: 'Contar doses em vez de verificar resposta é o erro que deixa o não respondedor desprotegido sem saber.',
  refs: ['PCDT — Profilaxia Pós-Exposição — Ministério da Saúde', 'SBIm', 'NR-32'] },

{ id: 'q-4.10-031', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a organização do programa de imunização ocupacional em uma empresa, é CORRETO afirmar:',
  alts: [
    { t: 'Parte do mapa de riscos por função, registra doses e recusas e é revisado a cada mudança.', ok: true,
      why: 'Correta. Verifica-se a resposta quando isso altera a conduta pós-exposição.' },
    { t: 'Basta ofertar anualmente as mesmas vacinas a todos os empregados do estabelecimento avaliado.', ok: false,
      why: 'Errada. A indicação é dirigida ao risco de cada função.' },
    { t: 'Parte do mapa de riscos, dispensando a recusa vacinal registro, por ser decisão pessoal.', ok: false,
      why: 'Errada. A recusa esclarecida deve ser registrada e reavaliada.' },
    { t: 'Parte do mapa de riscos por função, não exigindo a mudança de função revisão do esquema.', ok: false,
      why: 'Errada. Muda o risco e, portanto, a indicação vacinal.' },
    { t: 'Parte do mapa de riscos, devendo o registro vacinal ficar arquivado no setor de pessoal.', ok: false,
      why: 'Errada. É dado de saúde e integra o prontuário ocupacional.' }
  ],
  comentario: 'Programa de imunização é derivado do mapa de riscos, não do calendário administrativo. Registre doses e recusas no prontuário, verifique resposta quando ela muda a conduta e revise a cada mudança de exposição.',
  pegadinha: 'Arquivar carteira vacinal no setor de pessoal é a violação de sigilo mais banalizada do tema.',
  refs: ['SBIm — calendário ocupacional', 'NR-7', 'LGPD'] },

/* ==================== 5.6 Reabilitação profissional ==================== */
{ id: 'q-5.6-030', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador reabilitado pela Previdência retorna à empresa com certificado de reabilitação para nova função. A empresa alega não possuir vaga compatível e pretende dispensá-lo. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'O reabilitado integra a reserva legal, e sua dispensa exige substituto em condição semelhante.', ok: true,
      why: 'Correta. A regra protege o preenchimento da reserva, e não só o indivíduo.' },
    { t: 'A reserva legal de vagas alcança apenas pessoas com deficiência, e não o trabalhador reabilitado.', ok: false,
      why: 'Errada. Os reabilitados são expressamente alcançados.' },
    { t: 'O reabilitado integra a reserva, autorizando a alegação de inexistência de vaga a dispensa imediata.', ok: false,
      why: 'Errada. A alegação exige demonstração e não afasta a condição legal.' },
    { t: 'O reabilitado integra a reserva, atestando o certificado incapacidade laborativa permanente.', ok: false,
      why: 'Errada. Atesta capacidade para a nova função, não incapacidade.' },
    { t: 'O reabilitado integra a reserva, não participando a empresa do processo, conduzido pela previdência.', ok: false,
      why: 'Errada. A empresa informa funções e viabiliza a recolocação.' }
  ],
  comentario: 'A reserva legal de vagas alcança pessoas com deficiência E beneficiários reabilitados. O certificado atesta capacidade para a nova função, não incapacidade — e a dispensa segue condicionada à contratação de substituto.',
  pegadinha: 'Ler o certificado de reabilitação como atestado de incapacidade inverte completamente o seu significado.',
  refs: ['Lei nº 8.213/1991 — art. 93', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.6-031', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao estruturar um programa interno de retorno ao trabalho, o médico do trabalho define os elementos essenciais. Sobre esse programa, é CORRETO afirmar:',
  alts: [
    { t: 'Prevê contato durante o afastamento, avaliação prévia, restrições com prazo e acompanhamento', ok: true,
      why: 'Correta. E intervenção no posto quando o determinante estiver nele.' },
    { t: 'Prevê avaliação prévia, devendo o contato durante o afastamento ser evitado para não configurar assédio.', ok: false,
      why: 'Errada. O contato cuidadoso mantém o vínculo e melhora o desfecho.' },
    { t: 'Prevê avaliação e restrições, sendo o retorno gradual inviável por ser a jornada contratual.', ok: false,
      why: 'Errada. É estratégia praticável e com melhores desfechos.' },
    { t: 'Prevê restrições, preferindo-se as sem prazo de reavaliação por darem mais segurança ao trabalhador.', ok: false,
      why: 'Errada. Restrição sem prazo se cristaliza e limita indevidamente.' },
    { t: 'Prevê acompanhamento, dispensável quando o trabalhador retorna assintomático da licença médica.', ok: false,
      why: 'Errada. É nas primeiras semanas que a recaída costuma ocorrer.' }
  ],
  comentario: 'Seis elementos: contato no afastamento, avaliação prévia, restrição escrita com prazo, gradualidade, acompanhamento próximo e mudança do posto quando o determinante está nele. Faltando o último, os cinco primeiros só adiam a recidiva.',
  pegadinha: 'Evitar contato durante o afastamento "para não assediar" confunde cuidado com cobrança e piora o desfecho.',
  refs: ['Penteado — Perícias em DORT', 'NR-7', 'Lei nº 8.213/1991'] }

);
