/* Seção 7 — Legislação, Normas Regulamentadoras e Ética
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-7.4-001', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Durante auditoria, o médico do trabalho verifica que a empresa mantém documento intitulado "PPRA" desatualizado e não elaborou inventário de riscos nem plano de ação. Sobre o gerenciamento de riscos ocupacionais no arcabouço atual das Normas Regulamentadoras, assinale a alternativa CORRETA:',
  alts: [
    { t: 'O gerenciamento de riscos, com inventário e plano de ação, está na norma de disposições gerais.', ok: true,
      why: 'Correta. Substituiu o antigo programa de prevenção de riscos ambientais.' },
    { t: 'O gerenciamento de riscos permanece regulado pela norma de ergonomia, que concentrou essa avaliação.', ok: false,
      why: 'Errada. Está na norma de disposições gerais e gerenciamento de riscos.' },
    { t: 'O programa médico pode ser elaborado de forma independente, sem articulação com o gerenciamento.', ok: false,
      why: 'Errada. O programa médico decorre dos riscos inventariados.' },
    { t: 'A avaliação quantitativa de todos os agentes é obrigatória, seja qual for o resultado preliminar.', ok: false,
      why: 'Errada. A avaliação preliminar pode dispensar a quantificação.' },
    { t: 'Microempresas e empresas de pequeno porte estão integralmente dispensadas do gerenciamento de riscos.', ok: false,
      why: 'Errada. Há simplificação, não dispensa integral.' }
  ],
  comentario: 'Mudança estruturante que a banca cobra: o gerenciamento de riscos ocupacionais migrou para a NR-1, com inventário de riscos e plano de ação, substituindo o PPRA. O programa médico não vive isolado — ele se alimenta do reconhecimento de riscos. Norma atualizada: confira sempre a redação vigente antes da prova.',
  pegadinha: 'Muito material antigo ainda fala em PPRA. Questões que trazem a nomenclatura antiga como correta são armadilha de desatualização.',
  refs: ['NR-1', 'NR-7', 'NR-9', 'Portaria nº 3.214/1978'] },

{ id: 'q-7.2-001', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador afastado por doença ocupacional recebeu benefício por incapacidade temporária de natureza acidentária durante oito meses e teve alta pericial. A empresa pretende demiti-lo na semana seguinte ao retorno. A orientação CORRETA é:',
  alts: [
    { t: 'Há garantia de emprego por doze meses após a cessação do benefício acidentário.', ok: true,
      why: 'Correta. Independe de percepção de auxílio-acidente.' },
    { t: 'Não há garantia alguma, pois a alta pericial restabelece plenamente o poder de dispensa do empregador.', ok: false,
      why: 'Errada. A estabilidade acidentária é prevista em lei.' },
    { t: 'Há garantia apenas se o trabalhador tiver passado a receber auxílio-acidente depois da alta pericial.', ok: false,
      why: 'Errada. A garantia independe de auxílio-acidente.' },
    { t: 'Há garantia de doze meses contados do início do afastamento, prazo já esgotado no caso descrito.', ok: false,
      why: 'Errada. O prazo se conta da cessação do benefício.' },
    { t: 'Há garantia de doze meses, aplicável só a acidentes típicos, sem alcançar as doenças ocupacionais.', ok: false,
      why: 'Errada. Doença ocupacional é equiparada a acidente do trabalho.' }
  ],
  comentario: 'Três detalhes definem a resposta: prazo mínimo de doze meses; termo inicial na CESSAÇÃO do benefício (não no início do afastamento); e independência em relação ao auxílio-acidente. Doença ocupacional entra por equiparação a acidente do trabalho.',
  pegadinha: 'A alternativa que muda o termo inicial para o começo do afastamento é a mais eficaz — o prazo está certo, o marco está errado.',
  refs: ['Lei nº 8.213/1991 — arts. 20, 86 e 118'] },

{ id: 'q-7.5-001', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'A empresa pergunta ao médico do trabalho quais informações de saúde e segurança devem ser transmitidas por meio do eSocial. Sobre os eventos de segurança e saúde no trabalho, assinale a alternativa CORRETA:',
  alts: [
    { t: 'São transmitidos a comunicação de acidente e o monitoramento da saúde do trabalhador.', ok: true,
      why: 'Correta. O evento de monitoramento veicula informações dos exames ocupacionais.' },
    { t: 'O sistema substituiu integralmente o atestado em papel, dispensando sua emissão e entrega ao trabalhador.', ok: false,
      why: 'Errada. O atestado permanece devido, com entrega de via ao trabalhador.' },
    { t: 'São transmitidos vários eventos, devendo o de monitoramento conter o diagnóstico para auditoria.', ok: false,
      why: 'Errada. Informa-se aptidão e exames, não diagnóstico.' },
    { t: 'São transmitidos vários eventos, sendo facultativa a comunicação de acidente sem afastamento.', ok: false,
      why: 'Errada. É devida também nos casos sem afastamento.' },
    { t: 'São transmitidos vários eventos, sendo o conteúdo técnico de responsabilidade do setor de pessoal.', ok: false,
      why: 'Errada. O conteúdo médico é de responsabilidade de quem o atesta.' }
  ],
  comentario: 'O que importa reter: o eSocial é meio de transmissão, não substitui documentos nem o sigilo. O médico responde pelo conteúdo técnico do que é informado, o atestado de saúde ocupacional continua sendo emitido e entregue, e a comunicação de acidente é devida ainda que não haja afastamento.',
  pegadinha: 'A ideia de que "o eSocial acabou com o ASO em papel" circula bastante na prática e é falsa.',
  refs: ['eSocial — eventos de SST', 'NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-7.6-001', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'O gerente de uma fábrica procura o médico do trabalho e pede a lista dos empregados em tratamento psiquiátrico, alegando necessidade de "gerenciar melhor as equipes". Sobre a conduta ética, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve recusar: o diagnóstico é protegido por sigilo; à empresa cabem aptidão e restrições.', ok: true,
      why: 'Correta. A lista pedida expõe informação clínica protegida.' },
    { t: 'Pode fornecer, pois o empregador contrata o serviço médico e tem direito às informações que custeia.', ok: false,
      why: 'Errada. Custeio não confere acesso a conteúdo clínico.' },
    { t: 'Pode fornecer omitindo os diagnósticos, informando apenas quem está em tratamento psiquiátrico.', ok: false,
      why: 'Errada. Revelar quem trata já é quebra de sigilo.' },
    { t: 'Deve fornecer se houver previsão expressa no contrato de prestação de serviços firmado com a empresa.', ok: false,
      why: 'Errada. Cláusula contratual não afasta o sigilo profissional.' },
    { t: 'Pode fornecer ao setor de pessoal, desde que este assine termo de confidencialidade específico.', ok: false,
      why: 'Errada. Restringir o destinatário não legitima a revelação.' }
  ],
  comentario: 'Regra de ouro do médico do trabalho: a empresa recebe APTIDÃO e RESTRIÇÕES; nunca diagnóstico. Nem contrato, nem termo de confidencialidade, nem "omitir o diagnóstico mas informar quem está em tratamento" salvam — o dado sensível é a própria condição de saúde. Sob a lei de proteção de dados, o raciocínio se reforça.',
  pegadinha: 'As quatro alternativas erradas oferecem quatro maneiras diferentes de "legitimar" a entrega. A banca gosta desse formato porque uma delas quase sempre parece razoável.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre atendimento ao trabalhador', 'LGPD — Lei nº 13.709/2018'] },

{ id: 'q-7.8-001', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma clínica de medicina ocupacional revisa seus processos à luz da Lei Geral de Proteção de Dados. Sobre o tratamento de dados de saúde de trabalhadores, assinale a alternativa CORRETA:',
  alts: [
    { t: 'São dados sensíveis com base legal específica, e o consentimento não é a única nem a melhor.', ok: true,
      why: 'Correta. Na relação de emprego, a assimetria fragiliza o consentimento.' },
    { t: 'O consentimento do titular é sempre a base legal exigida para tratar dados de saúde do trabalhador.', ok: false,
      why: 'Errada. Obrigação legal e tutela da saúde são bases mais adequadas.' },
    { t: 'A lei de proteção de dados afastou o dever de sigilo médico, substituído por regras de segurança.', ok: false,
      why: 'Errada. O sigilo profissional permanece e se soma às regras de dados.' },
    { t: 'São dados sensíveis, podendo o empregador controlador acessar integralmente os prontuários ocupacionais.', ok: false,
      why: 'Errada. O acesso é limitado pelo sigilo e pela minimização.' },
    { t: 'São dados sensíveis, não sendo comunicáveis os incidentes por estarem protegidos por sigilo médico.', ok: false,
      why: 'Errada. O incidente deve ser comunicado quando houver risco relevante.' }
  ],
  comentario: 'Duas ideias resolvem quase toda questão de proteção de dados aplicada à medicina do trabalho: dado de saúde é sensível e exige base legal específica (consentimento não é a única, e é a mais frágil no emprego); e a lei convive com o sigilo médico, somando-se a ele. Prontuário permanece com o serviço médico.',
  pegadinha: 'A alternativa "consentimento é sempre a base" é a mais escolhida por quem estudou a lei superficialmente. Em relação de emprego, o consentimento raramente é livre.',
  refs: ['LGPD — Lei nº 13.709/2018', 'Código de Ética Médica'] }

);
