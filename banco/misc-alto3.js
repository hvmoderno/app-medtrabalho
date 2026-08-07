/* Aprofundamento: 1.6, 1.7, 1.10, 2.7, 4.10 e 5.6.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ============= 1.6 Políticas públicas de saúde do trabalhador ========== */
{ id: 'q-1.6-030', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um município de pequeno porte, sem centro de referência próprio, identifica casos de intoxicação por agrotóxicos em trabalhadores rurais. Sobre a organização da resposta, é CORRETO afirmar:',
  alts: [
    { t: 'A ausência de centro de referência no município não desobriga a rede local, que deve notificar, assistir e acionar a vigilância, buscando apoio matricial regional — a rede é organizada por níveis e a retaguarda especializada é regionalizada.', ok: true,
      why: 'Correta. A regionalização existe justamente para que municípios sem estrutura própria acessem retaguarda técnica sem transferir a responsabilidade da assistência e da notificação.' },
    { t: 'Sem centro de referência no município, os casos devem ser encaminhados a outro município e excluídos das estatísticas locais.', ok: false,
      why: 'Errada. Encaminhar para assistência não retira o caso do território nem dispensa a notificação local.' },
    { t: 'A ausência de estrutura especializada desobriga o município de qualquer ação de vigilância.', ok: false,
      why: 'Errada. A vigilância é atribuição do município, com apoio das demais esferas.' },
    { t: 'Casos em trabalhadores rurais informais não integram as estatísticas de saúde do trabalhador.', ok: false,
      why: 'Errada. A política alcança todos os trabalhadores, independentemente do vínculo.' },
    { t: 'A resposta cabe exclusivamente ao órgão de fiscalização do trabalho.', ok: false,
      why: 'Errada. As competências se somam; a resposta sanitária é própria e independente.' }
  ],
  comentario: 'Regionalização não é terceirização de responsabilidade: o município notifica, assiste e vigia, buscando apoio matricial regional. E trabalhador informal conta nas estatísticas — a política é universal.',
  pegadinha: 'Excluir das estatísticas locais o caso encaminhado a outro município distorce o retrato do território.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

{ id: 'q-1.6-031', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a intersetorialidade nas políticas de saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'A articulação entre Saúde, Trabalho, Previdência, Meio Ambiente e Ministério Público amplia a capacidade de intervenção, pois cada esfera dispõe de instrumentos próprios que se complementam sobre a mesma situação de risco.', ok: true,
      why: 'Correta. Interdição sanitária, autuação trabalhista, ação regressiva previdenciária e ação civil pública são instrumentos distintos que podem incidir sobre o mesmo fato.' },
    { t: 'A atuação de uma esfera impede a atuação das demais sobre o mesmo fato.', ok: false,
      why: 'Errada. As esferas são autônomas e podem atuar concomitantemente.' },
    { t: 'A intersetorialidade é princípio teórico sem instrumentos concretos de aplicação.', ok: false,
      why: 'Errada. Há instrumentos concretos e articulações formais previstas.' },
    { t: 'O Ministério Público não tem atuação em saúde do trabalhador.', ok: false,
      why: 'Errada. Atua por meio de inquérito civil, termo de ajustamento de conduta e ação civil pública, entre outros instrumentos.' },
    { t: 'A articulação com o setor ambiental é incompatível com a proteção do trabalhador.', ok: false,
      why: 'Errada. Fonte de risco ocupacional e ambiental é frequentemente a mesma, e a articulação amplia a proteção.' }
  ],
  comentario: 'Cada esfera tem sua ferramenta: sanitária interdita, trabalhista autua, previdenciária cobra regressivamente, ambiental licencia e o Ministério Público ajuíza. Elas se somam sobre o mesmo fato — e é isso que torna a intersetorialidade prática, não retórica.',
  pegadinha: 'A ideia de exclusividade entre esferas é usada para paralisar a atuação de uma alegando a competência de outra.',
  refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

/* ============================== 1.7 SUS ================================= */
{ id: 'q-1.7-030', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador acidentado em obra é atendido em unidade de urgência da rede pública. Sobre a atuação do serviço, é CORRETO afirmar:',
  alts: [
    { t: 'Além da assistência, cabe registrar a relação do agravo com o trabalho, notificar o acidente e orientar sobre a comunicação para fins previdenciários, pois o reconhecimento começa na porta de entrada e independe do vínculo do trabalhador.', ok: true,
      why: 'Correta. A urgência é frequentemente o único contato do trabalhador com o sistema, e é ali que a relação com o trabalho se perde ou se registra.' },
    { t: 'A unidade de urgência deve limitar-se à assistência, deixando o registro da relação com o trabalho para outros serviços.', ok: false,
      why: 'Errada. Perder o registro na porta de entrada é a principal causa de subnotificação de acidentes.' },
    { t: 'O atendimento a trabalhador acidentado em obra deve ser cobrado da empresa antes da assistência.', ok: false,
      why: 'Errada. O acesso é universal e a assistência não se condiciona a pagamento prévio.' },
    { t: 'A notificação depende de o trabalhador comprovar vínculo formal.', ok: false,
      why: 'Errada. A notificação independe do tipo de vínculo.' },
    { t: 'A orientação sobre comunicação previdenciária é atribuição exclusiva do empregador.', ok: false,
      why: 'Errada. O serviço de saúde pode e deve orientar, e o médico assistente está entre os legitimados a comunicar.' }
  ],
  comentario: 'A porta de urgência é onde o nexo se perde. Registrar a ocupação, notificar e orientar sobre a comunicação previdenciária são atos simples que transformam um atendimento isolado em dado de vigilância e em direito assegurado.',
  pegadinha: 'Condicionar a notificação à comprovação de vínculo formal exclui justamente os mais desprotegidos.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991 — art. 22'] },

{ id: 'q-1.7-031', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o financiamento e a organização do sistema público de saúde aplicados à saúde do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O atendimento ao trabalhador acidentado pela rede pública não afasta a responsabilidade da empresa nem a cobertura previdenciária, e o sistema pode buscar ressarcimento em hipóteses previstas — a gratuidade para o usuário não significa ausência de custo atribuível.', ok: true,
      why: 'Correta. Universalidade e gratuidade no acesso convivem com mecanismos de ressarcimento e com a responsabilidade da empresa.' },
    { t: 'O atendimento pela rede pública transfere para o Estado toda a responsabilidade pelo acidente.', ok: false,
      why: 'Errada. A responsabilidade da empresa pelo ambiente e pelo evento permanece.' },
    { t: 'Trabalhadores com plano de saúde não podem ser atendidos pela rede pública.', ok: false,
      why: 'Errada. O acesso é universal, independentemente de cobertura privada.' },
    { t: 'A gratuidade do acesso impede qualquer forma de ressarcimento ao sistema.', ok: false,
      why: 'Errada. Há hipóteses legais de ressarcimento previstas.' },
    { t: 'A saúde do trabalhador é financiada exclusivamente por contribuições previdenciárias.', ok: false,
      why: 'Errada. O financiamento do sistema de saúde é próprio e distinto do previdenciário.' }
  ],
  comentario: 'Gratuidade no acesso não é ausência de responsabilidade. O sistema atende sempre, e paralelamente permanecem a responsabilidade civil da empresa, a cobertura previdenciária e as hipóteses de ressarcimento.',
  pegadinha: 'A ideia de que atender pelo sistema público "resolve" o acidente apaga a responsabilidade da empresa.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991'] },

/* ========================= 1.10 Promoção da saúde ====================== */
{ id: 'q-1.10-030', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa institui programa de bonificação por metas de saúde individuais — índice de massa corporal, pressão arterial e prática de exercício —, com desconto no plano de saúde para quem atingir os alvos. Sobre a proposta, é CORRETO afirmar:',
  alts: [
    { t: 'A vinculação de benefícios a parâmetros individuais de saúde é eticamente problemática, por penalizar condições que dependem de determinantes sociais e biológicos, gerar discriminação e transferir ao trabalhador a responsabilidade por desfechos que não controla integralmente.', ok: true,
      why: 'Correta. Condicionar benefício a parâmetro clínico penaliza quem tem doença crônica ou condição genética e desloca a responsabilidade para o indivíduo.' },
    { t: 'A proposta é adequada, pois cria incentivo objetivo à adoção de hábitos saudáveis.', ok: false,
      why: 'Errada. Incentivo atrelado a resultado clínico não equivale a incentivo a comportamento e penaliza quem já está doente.' },
    { t: 'A coleta desses parâmetros pelo empregador é irrelevante do ponto de vista da proteção de dados.', ok: false,
      why: 'Errada. São dados de saúde, portanto sensíveis, e seu tratamento pelo empregador para fins de benefício é problemático.' },
    { t: 'Programas de promoção devem sempre ser vinculados a metas mensuráveis individuais para serem eficazes.', ok: false,
      why: 'Errada. Metas coletivas e mudança de ambiente têm mais respaldo que metas clínicas individuais.' },
    { t: 'Trabalhadores com doenças crônicas seriam beneficiados por esse tipo de programa.', ok: false,
      why: 'Errada, é o oposto: são os mais penalizados por parâmetros que dificilmente atingirão.' }
  ],
  comentario: 'Promoção da saúde legítima muda ambiente e oferece oportunidade; promoção problemática mede o corpo do trabalhador e vincula benefício ao resultado. A segunda penaliza doente crônico, cria discriminação e trata dado sensível para finalidade contratual.',
  pegadinha: 'A alternativa do "incentivo objetivo" confunde estimular comportamento com premiar resultado clínico.',
  refs: ['OMS — Ambientes de trabalho saudáveis', 'LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] },

{ id: 'q-1.10-031', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a prevenção primária no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Ela atua antes do aparecimento da doença e inclui tanto a eliminação ou o controle da exposição quanto medidas como a imunização dos expostos — sendo, na medicina do trabalho, a que mais depende de intervenção sobre o ambiente e não sobre o indivíduo.', ok: true,
      why: 'Correta. Controlar a fonte é prevenção primária por excelência, e a imunização também se enquadra nesse nível.' },
    { t: 'A prevenção primária corresponde ao rastreamento precoce de doenças.', ok: false,
      why: 'Errada. Rastreamento é prevenção secundária: busca detectar doença já instalada em fase pré-clínica.' },
    { t: 'Na medicina do trabalho, a prevenção primária se realiza principalmente por meio de exames periódicos.', ok: false,
      why: 'Errada. Exames periódicos monitoram e detectam; quem evita o aparecimento é o controle da exposição.' },
    { t: 'A prevenção primária não inclui ações de imunização.', ok: false,
      why: 'Errada. A imunização evita o aparecimento da doença e é prevenção primária.' },
    { t: 'Prevenção primária e promoção da saúde são conceitos idênticos.', ok: false,
      why: 'Errada. São próximos e complementares, mas a promoção atua sobre determinantes amplos e não se restringe a evitar agravo específico.' }
  ],
  comentario: 'Primária evita que apareça — controle da fonte e imunização. Secundária detecta cedo — exames e rastreamento. Terciária reduz sequela. Quaternária protege do excesso. Em medicina do trabalho, a primária é quase sempre ambiental.',
  pegadinha: 'Classificar exame periódico como prevenção primária é o erro mais frequente do tema.',
  refs: ['Política Nacional de Promoção da Saúde', 'NR-7', 'NR-9'] },

/* ================== 2.7 Normas de Higiene Ocupacional ================== */
{ id: 'q-2.7-030', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um perito precisa avaliar a exposição de motorista de trator agrícola a vibração. Sobre a avaliação segundo os procedimentos técnicos de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Trata-se de vibração de corpo inteiro, avaliada com o transdutor posicionado na interface entre o assento e o trabalhador, considerando a jornada e os eixos de medição — e o resultado é distinto do obtido em avaliação de vibração de mãos e braços.', ok: true,
      why: 'Correta. Corpo inteiro se mede no assento; mãos e braços se mede na empunhadura. São procedimentos, parâmetros e desfechos diferentes.' },
    { t: 'A medição deve ser feita na empunhadura do volante, por ser o ponto de contato principal.', ok: false,
      why: 'Errada. Isso caracterizaria avaliação de vibração de mãos e braços, que não é o objeto aqui.' },
    { t: 'A avaliação de vibração dispensa a consideração do tempo de exposição na jornada.', ok: false,
      why: 'Errada. A exposição é função da magnitude e do tempo, como nos demais agentes físicos.' },
    { t: 'Vibração de corpo inteiro e de mãos e braços produzem os mesmos efeitos à saúde.', ok: false,
      why: 'Errada. Corpo inteiro associa-se sobretudo a lombalgia e alterações de coluna; mãos e braços, à síndrome vascular, neurológica e osteomuscular de membro superior.' },
    { t: 'A avaliação de vibração não possui procedimento técnico padronizado no país.', ok: false,
      why: 'Errada. Há norma técnica de higiene ocupacional específica para avaliação da exposição a vibração.' }
  ],
  comentario: 'Duas vibrações, dois procedimentos: corpo inteiro se mede no assento e adoece a coluna; mãos e braços se mede na empunhadura e produz a síndrome com Raynaud ocupacional. E em ambas o tempo de exposição integra o cálculo.',
  pegadinha: 'Medir na empunhadura do volante em trator confunde o agente que se quer avaliar.',
  refs: ['Normas de Higiene Ocupacional — Fundacentro', 'NR-15'] },

{ id: 'q-2.7-031', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a amostragem de aerodispersoides conforme os procedimentos técnicos de higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'A definição da fração a ser amostrada — inalável, torácica ou respirável — depende do sítio de deposição em que o agente exerce seu efeito, e amostrar a fração errada produz resultado que não representa o risco.', ok: true,
      why: 'Correta. Sílica exige fração respirável porque age no alvéolo; agentes de efeito em vias superiores exigem fração inalável. A escolha não é indiferente.' },
    { t: 'Qualquer fração amostrada representa igualmente a exposição, bastando corrigir o cálculo.', ok: false,
      why: 'Errada. Frações medem populações de partículas diferentes e não são intercambiáveis por cálculo.' },
    { t: 'A amostragem deve ser feita em ponto fixo do setor, e não junto ao trabalhador.', ok: false,
      why: 'Errada. A amostragem pessoal, na zona respiratória do trabalhador, é a que representa a exposição.' },
    { t: 'O tempo de amostragem é irrelevante desde que se conheça a concentração instantânea.', ok: false,
      why: 'Errada. A representatividade da amostra depende da duração e da cobertura das tarefas realizadas.' },
    { t: 'A calibração do equipamento é dispensável em avaliações de curta duração.', ok: false,
      why: 'Errada. Calibração antes e após a amostragem é requisito de validade do resultado.' }
  ],
  comentario: 'Três decisões definem a validade: qual fração amostrar (pelo sítio de ação do agente), onde amostrar (zona respiratória do trabalhador) e por quanto tempo (cobrindo as tarefas representativas). Erro em qualquer uma invalida o resultado.',
  pegadinha: 'Amostragem em ponto fixo é mais cômoda e não mede a exposição de ninguém.',
  refs: ['Normas de Higiene Ocupacional — Fundacentro', 'ACGIH'] },

/* ======================= 4.10 Imunizações ============================== */
{ id: 'q-4.10-030', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Profissional de saúde com esquema completo para hepatite B apresenta sorologia com anti-HBs não reagente após o segundo esquema completo. Ocorre acidente percutâneo com paciente-fonte de sorologia desconhecida. Sobre a conduta, é CORRETO afirmar:',
  alts: [
    { t: 'O profissional é considerado não respondedor e, nessa condição, a conduta pós-exposição difere daquela adotada para respondedores, envolvendo avaliação para imunização passiva conforme protocolo — motivo pelo qual identificar o não respondedor antes do acidente é essencial.', ok: true,
      why: 'Correta. O não respondedor não conta com proteção vacinal e depende de conduta específica após exposição, o que só é possível se sua condição for previamente conhecida.' },
    { t: 'Como recebeu dois esquemas completos, o profissional está protegido independentemente da sorologia.', ok: false,
      why: 'Errada. Proteção se demonstra por resposta sorológica, não por número de doses aplicadas.' },
    { t: 'A conduta pós-exposição é idêntica para respondedores e não respondedores.', ok: false,
      why: 'Errada. É justamente nesse ponto que a distinção importa.' },
    { t: 'Deve-se aplicar um terceiro esquema vacinal completo antes de qualquer outra medida pós-exposição.', ok: false,
      why: 'Errada. A resposta vacinal levaria semanas; a conduta pós-exposição é imediata e não pode aguardar.' },
    { t: 'A sorologia do paciente-fonte é irrelevante quando o acidentado é não respondedor.', ok: false,
      why: 'Errada. Investigar a fonte com teste rápido continua sendo etapa essencial e orienta toda a conduta.' }
  ],
  comentario: 'Não respondedor é a razão de existir a verificação sorológica pós-vacinal. Descobrir isso no dia do acidente é tarde: a conduta específica precisa estar planejada antes. E investigar a fonte permanece obrigatório em qualquer cenário.',
  pegadinha: 'Contar doses em vez de verificar resposta é o erro que deixa o não respondedor desprotegido sem saber.',
  refs: ['PCDT — Profilaxia Pós-Exposição — Ministério da Saúde', 'SBIm', 'NR-32'] },

{ id: 'q-4.10-031', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a organização do programa de imunização ocupacional em uma empresa, é CORRETO afirmar:',
  alts: [
    { t: 'O programa deve partir do mapa de riscos por função, registrar as doses aplicadas e as recusas esclarecidas no prontuário ocupacional, verificar resposta quando isso altera a conduta e ser revisado a cada mudança de função ou de exposição.', ok: true,
      why: 'Correta. Indicação por risco, registro, verificação de resposta quando pertinente e revisão por mudança de exposição são os quatro elementos operacionais.' },
    { t: 'Basta ofertar anualmente as mesmas vacinas a todos os empregados.', ok: false,
      why: 'Errada. A indicação é por exposição, e um pacote uniforme desperdiça recursos e deixa expostos descobertos.' },
    { t: 'A recusa vacinal dispensa registro, por ser decisão pessoal do trabalhador.', ok: false,
      why: 'Errada. O registro documenta a oferta e a decisão informada, protegendo trabalhador e serviço.' },
    { t: 'Mudança de função não exige revisão do esquema vacinal.', ok: false,
      why: 'Errada. Nova função pode significar nova exposição e nova indicação.' },
    { t: 'O registro vacinal deve ficar arquivado no setor de pessoal, por ser dado administrativo.', ok: false,
      why: 'Errada. É dado de saúde e integra o prontuário ocupacional, sob sigilo.' }
  ],
  comentario: 'Programa de imunização é derivado do mapa de riscos, não do calendário administrativo. Registre doses e recusas no prontuário, verifique resposta quando ela muda a conduta e revise a cada mudança de exposição.',
  pegadinha: 'Arquivar carteira vacinal no setor de pessoal é a violação de sigilo mais banalizada do tema.',
  refs: ['SBIm — calendário ocupacional', 'NR-7', 'LGPD'] },

/* ==================== 5.6 Reabilitação profissional ==================== */
{ id: 'q-5.6-030', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador reabilitado pela Previdência retorna à empresa com certificado de reabilitação para nova função. A empresa alega não possuir vaga compatível e pretende dispensá-lo. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'O trabalhador reabilitado integra o grupo protegido pela reserva legal de vagas, e sua dispensa em contrato por prazo indeterminado só pode ocorrer após a contratação de substituto em condição semelhante.', ok: true,
      why: 'Correta. A reserva legal alcança tanto pessoas com deficiência quanto trabalhadores reabilitados, com o mesmo condicionamento à dispensa.' },
    { t: 'A reserva legal de vagas alcança apenas pessoas com deficiência, não o trabalhador reabilitado.', ok: false,
      why: 'Errada. A norma menciona expressamente beneficiários reabilitados ao lado das pessoas com deficiência.' },
    { t: 'A alegação de inexistência de vaga compatível autoriza a dispensa imediata.', ok: false,
      why: 'Errada. A empresa tem o dever de buscar função compatível, e a dispensa permanece condicionada.' },
    { t: 'O certificado de reabilitação atesta incapacidade laborativa permanente.', ok: false,
      why: 'Errada. Ele atesta justamente a capacidade para a nova atividade para a qual o trabalhador foi reabilitado.' },
    { t: 'A empresa não participa do processo de reabilitação, cabendo tudo à Previdência.', ok: false,
      why: 'Errada. A empresa participa na identificação de função compatível e na reintegração.' }
  ],
  comentario: 'A reserva legal de vagas alcança pessoas com deficiência E beneficiários reabilitados. O certificado atesta capacidade para a nova função, não incapacidade — e a dispensa segue condicionada à contratação de substituto.',
  pegadinha: 'Ler o certificado de reabilitação como atestado de incapacidade inverte completamente o seu significado.',
  refs: ['Lei nº 8.213/1991 — art. 93', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.6-031', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao estruturar um programa interno de retorno ao trabalho, o médico do trabalho define os elementos essenciais. Sobre esse programa, é CORRETO afirmar:',
  alts: [
    { t: 'Deve prever contato durante o afastamento, avaliação prévia ao retorno, restrições escritas com prazo, retorno gradual quando indicado, acompanhamento nas primeiras semanas e intervenção no posto quando o determinante estiver nele.', ok: true,
      why: 'Correta. São os seis elementos com melhor respaldo, e a intervenção no posto é o que impede a recidiva.' },
    { t: 'O contato com o trabalhador durante o afastamento deve ser evitado, para não caracterizar assédio.', ok: false,
      why: 'Errada. Contato de cuidado, não de cobrança, é fator favorável ao retorno; o silêncio prolongado é que aumenta o risco de não retorno.' },
    { t: 'O retorno gradual é inviável, pois a jornada é definida contratualmente.', ok: false,
      why: 'Errada. Adaptações temporárias de carga e tarefa são praticáveis e recomendadas.' },
    { t: 'Restrições sem prazo de reavaliação são preferíveis, por darem mais segurança ao trabalhador.', ok: false,
      why: 'Errada. Restrição sem prazo vira exclusão permanente disfarçada.' },
    { t: 'O acompanhamento após o retorno é dispensável quando o trabalhador está assintomático.', ok: false,
      why: 'Errada. As primeiras semanas concentram o risco de recidiva, mesmo em assintomáticos.' }
  ],
  comentario: 'Seis elementos: contato no afastamento, avaliação prévia, restrição escrita com prazo, gradualidade, acompanhamento próximo e mudança do posto quando o determinante está nele. Faltando o último, os cinco primeiros só adiam a recidiva.',
  pegadinha: 'Evitar contato durante o afastamento "para não assediar" confunde cuidado com cobrança e piora o desfecho.',
  refs: ['Penteado — Perícias em DORT', 'NR-7', 'Lei nº 8.213/1991'] }

);
