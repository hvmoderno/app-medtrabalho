/* Seção 7 — Legislação, Normas Regulamentadoras e Ética
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-7.4-001', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante auditoria, o médico do trabalho verifica que a empresa mantém documento intitulado "PPRA" desatualizado e não elaborou inventário de riscos nem plano de ação. Sobre o gerenciamento de riscos ocupacionais no arcabouço atual das Normas Regulamentadoras, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O programa de gerenciamento de riscos, com inventário de riscos e plano de ação, integra a norma de disposições gerais e gerenciamento de riscos ocupacionais, tendo substituído o antigo programa de prevenção de riscos ambientais.', ok: true,
      why: 'Correta. A revisão do arcabouço deslocou o gerenciamento de riscos para a NR-1, com o inventário de riscos e o plano de ação como documentos integrantes, em substituição ao antigo PPRA.' },
    { t: 'O programa de gerenciamento de riscos permanece regulado pela norma de ergonomia, que passou a concentrar toda a avaliação de riscos.', ok: false,
      why: 'Errada. A norma de ergonomia trata de adaptação das condições de trabalho às características psicofisiológicas; ela não concentra o gerenciamento geral de riscos.' },
    { t: 'O programa de controle médico de saúde ocupacional pode ser elaborado de forma independente do gerenciamento de riscos, sem necessidade de articulação entre os dois.', ok: false,
      why: 'Errada. O programa médico se apoia no reconhecimento de riscos: sem essa articulação, não há como definir exames por exposição nem monitorar os expostos.' },
    { t: 'A avaliação quantitativa de todos os agentes é obrigatória em qualquer situação, independentemente do resultado da avaliação preliminar.', ok: false,
      why: 'Errada. A quantificação é indicada conforme a necessidade identificada na avaliação; nem toda situação exige medição quantitativa.' },
    { t: 'Microempresas e empresas de pequeno porte estão integralmente dispensadas de qualquer forma de gerenciamento de riscos ocupacionais.', ok: false,
      why: 'Errada. Há simplificações e tratamento diferenciado conforme grau de risco e porte, mas não dispensa integral do gerenciamento.' }
  ],
  comentario: 'Mudança estruturante que a banca cobra: o gerenciamento de riscos ocupacionais migrou para a NR-1, com inventário de riscos e plano de ação, substituindo o PPRA. O programa médico não vive isolado — ele se alimenta do reconhecimento de riscos. Norma atualizada: confira sempre a redação vigente antes da prova.',
  pegadinha: 'Muito material antigo ainda fala em PPRA. Questões que trazem a nomenclatura antiga como correta são armadilha de desatualização.',
  refs: ['NR-1', 'NR-7', 'NR-9', 'Portaria nº 3.214/1978'] },

{ id: 'q-7.2-001', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador afastado por doença ocupacional recebeu benefício por incapacidade temporária de natureza acidentária durante oito meses e teve alta pericial. A empresa pretende demiti-lo na semana seguinte ao retorno. A orientação CORRETA é:',
  alts: [
    { t: 'Há garantia de manutenção do contrato de trabalho pelo prazo mínimo de doze meses após a cessação do benefício acidentário, independentemente de percepção de auxílio-acidente.', ok: true,
      why: 'Correta. A estabilidade acidentária assegura a manutenção do contrato por, no mínimo, doze meses contados da cessação do benefício por incapacidade de natureza acidentária, e independe do recebimento de auxílio-acidente.' },
    { t: 'Não há qualquer garantia de emprego, pois a alta pericial restabelece plenamente o poder potestativo do empregador.', ok: false,
      why: 'Errada. Justamente após a alta é que corre o período de garantia de emprego decorrente do afastamento acidentário.' },
    { t: 'A garantia existe apenas se o trabalhador tiver recebido auxílio-acidente após a alta.', ok: false,
      why: 'Errada. A garantia independe da concessão de auxílio-acidente; são institutos distintos.' },
    { t: 'A garantia é de doze meses contados do início do afastamento, já esgotada no caso descrito.', ok: false,
      why: 'Errada quanto ao termo inicial: a contagem começa na cessação do benefício, não no início do afastamento.' },
    { t: 'A garantia só se aplica a acidentes típicos, não alcançando doenças ocupacionais.', ok: false,
      why: 'Errada. A doença ocupacional é equiparada a acidente do trabalho, e a garantia alcança ambas as hipóteses.' }
  ],
  comentario: 'Três detalhes definem a resposta: prazo mínimo de doze meses; termo inicial na CESSAÇÃO do benefício (não no início do afastamento); e independência em relação ao auxílio-acidente. Doença ocupacional entra por equiparação a acidente do trabalho.',
  pegadinha: 'A alternativa que muda o termo inicial para o começo do afastamento é a mais eficaz — o prazo está certo, o marco está errado.',
  refs: ['Lei nº 8.213/1991 — arts. 20, 86 e 118'] },

{ id: 'q-7.5-001', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'A empresa pergunta ao médico do trabalho quais informações de saúde e segurança devem ser transmitidas por meio do eSocial. Sobre os eventos de segurança e saúde no trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'São transmitidos, entre outros, o evento de comunicação de acidente do trabalho e o evento de monitoramento da saúde do trabalhador, que veicula informações dos exames ocupacionais.', ok: true,
      why: 'Correta. O conjunto de eventos de SST contempla a comunicação de acidente do trabalho e o monitoramento da saúde do trabalhador, além do evento relativo a agentes nocivos e condições ambientais.' },
    { t: 'O eSocial substituiu integralmente o atestado de saúde ocupacional em papel, dispensando sua emissão e entrega ao trabalhador.', ok: false,
      why: 'Errada. O envio da informação ao sistema não dispensa a emissão do atestado de saúde ocupacional nem a entrega de via ao trabalhador.' },
    { t: 'O evento de monitoramento da saúde deve conter o diagnóstico completo do trabalhador, para permitir auditoria.', ok: false,
      why: 'Errada. O evento veicula informação sobre exames e conclusão de aptidão; o diagnóstico permanece protegido pelo sigilo médico.' },
    { t: 'A comunicação de acidente do trabalho pelo eSocial é facultativa quando não houver afastamento.', ok: false,
      why: 'Errada. A comunicação é devida mesmo sem afastamento; a ausência de afastamento muda o desdobramento previdenciário, não a obrigação de comunicar.' },
    { t: 'A responsabilidade pelo conteúdo técnico dos eventos de saúde é exclusivamente do setor de recursos humanos, sem participação do médico.', ok: false,
      why: 'Errada. O conteúdo técnico-médico depende do profissional responsável; o setor administrativo opera a transmissão, não a produção da informação clínica.' }
  ],
  comentario: 'O que importa reter: o eSocial é meio de transmissão, não substitui documentos nem o sigilo. O médico responde pelo conteúdo técnico do que é informado, o atestado de saúde ocupacional continua sendo emitido e entregue, e a comunicação de acidente é devida ainda que não haja afastamento.',
  pegadinha: 'A ideia de que "o eSocial acabou com o ASO em papel" circula bastante na prática e é falsa.',
  refs: ['eSocial — eventos de SST', 'NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-7.6-001', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'O gerente de uma fábrica procura o médico do trabalho e pede a lista dos empregados em tratamento psiquiátrico, alegando necessidade de "gerenciar melhor as equipes". Sobre a conduta ética, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O médico deve recusar o fornecimento, pois o diagnóstico é protegido pelo sigilo profissional; à empresa cabe conhecer apenas a conclusão sobre aptidão e as restrições necessárias.', ok: true,
      why: 'Correta. O sigilo alcança o diagnóstico mesmo na medicina do trabalho; a informação legítima ao empregador limita-se à aptidão e às restrições, sem revelar a condição de saúde.' },
    { t: 'O médico pode fornecer a lista, pois o empregador é o contratante do serviço médico e tem direito de acesso às informações que custeia.', ok: false,
      why: 'Errada. Custear o serviço não confere direito às informações clínicas: o sigilo protege o trabalhador, não o contrato.' },
    { t: 'O médico pode fornecer a lista desde que omita os diagnósticos, informando apenas quem está em tratamento psiquiátrico.', ok: false,
      why: 'Errada. Informar quem está em tratamento psiquiátrico já revela dado sensível de saúde e expõe o trabalhador a discriminação.' },
    { t: 'O médico deve fornecer a informação se houver previsão em contrato de prestação de serviços firmado com a empresa.', ok: false,
      why: 'Errada. Cláusula contratual não afasta dever ético e legal de sigilo; disposição nesse sentido é inválida.' },
    { t: 'O médico pode fornecer a lista ao setor de recursos humanos, desde que este assine termo de confidencialidade.', ok: false,
      why: 'Errada. Transferir o dado sensível para setor administrativo é a própria quebra do sigilo, ainda que haja termo assinado.' }
  ],
  comentario: 'Regra de ouro do médico do trabalho: a empresa recebe APTIDÃO e RESTRIÇÕES; nunca diagnóstico. Nem contrato, nem termo de confidencialidade, nem "omitir o diagnóstico mas informar quem está em tratamento" salvam — o dado sensível é a própria condição de saúde. Sob a lei de proteção de dados, o raciocínio se reforça.',
  pegadinha: 'As quatro alternativas erradas oferecem quatro maneiras diferentes de "legitimar" a entrega. A banca gosta desse formato porque uma delas quase sempre parece razoável.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador', 'LGPD — Lei nº 13.709/2018'] },

{ id: 'q-7.8-001', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma clínica de medicina ocupacional revisa seus processos à luz da Lei Geral de Proteção de Dados. Sobre o tratamento de dados de saúde de trabalhadores, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Dados de saúde são dados pessoais sensíveis e seu tratamento exige base legal específica; o consentimento do trabalhador não é a única base possível, nem sempre a mais adequada em relação de emprego.', ok: true,
      why: 'Correta. Dados de saúde são sensíveis, e a lei prevê bases legais específicas — como tutela da saúde por profissional de saúde e cumprimento de obrigação legal. Em relação de emprego, o consentimento é frágil pela assimetria de poder.' },
    { t: 'O consentimento do titular é sempre a base legal exigida para tratar dados de saúde do trabalhador.', ok: false,
      why: 'Errada. Há outras bases legais aplicáveis, e o consentimento em relação de emprego é problemático justamente por não ser livre.' },
    { t: 'A lei de proteção de dados afastou o dever de sigilo médico, substituindo-o por regras de segurança da informação.', ok: false,
      why: 'Errada. A lei se soma ao sigilo médico; não o revoga nem o substitui.' },
    { t: 'O empregador, como controlador, pode acessar integralmente os prontuários ocupacionais mantidos pelo serviço médico.', ok: false,
      why: 'Errada. O prontuário permanece sob guarda e sigilo do serviço médico; o acesso irrestrito do empregador não é legitimado pela lei de proteção de dados.' },
    { t: 'Incidentes de segurança envolvendo dados de saúde de trabalhadores não precisam ser comunicados, por estarem protegidos por sigilo médico.', ok: false,
      why: 'Errada, e é uma inversão: o caráter sensível dos dados reforça, e não elimina, o dever de comunicar incidentes.' }
  ],
  comentario: 'Duas ideias resolvem quase toda questão de proteção de dados aplicada à medicina do trabalho: dado de saúde é sensível e exige base legal específica (consentimento não é a única, e é a mais frágil no emprego); e a lei convive com o sigilo médico, somando-se a ele. Prontuário permanece com o serviço médico.',
  pegadinha: 'A alternativa "consentimento é sempre a base" é a mais escolhida por quem estudou a lei superficialmente. Em relação de emprego, o consentimento raramente é livre.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] }

);
