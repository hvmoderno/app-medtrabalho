/* Seção 5 — Acidentes do Trabalho, Nexo, Perícia e Incapacidade
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-5.1-001', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um empregado sofre fratura de tornozelo ao descer do ônibus no trajeto de casa para o trabalho. A empresa questiona se há obrigação de emitir a comunicação de acidente do trabalho, alegando que o evento ocorreu fora das dependências e sem relação com a atividade. A orientação CORRETA do médico do trabalho é:',
  alts: [
    { t: 'Deve ser emitida: o acidente de trajeto é equiparado e a obrigação independe de afastamento.', ok: true,
      why: 'Correta. A comunicação é devida também nos casos sem afastamento.' },
    { t: 'É devida apenas se houver afastamento superior a quinze dias, quando surge a repercussão previdenciária.', ok: false,
      why: 'Errada. A obrigação independe de haver afastamento.' },
    { t: 'Não é devida: acidente fora das dependências só é do trabalho se o empregado estiver a serviço.', ok: false,
      why: 'Errada. O acidente de trajeto é legalmente equiparado.' },
    { t: 'É devida, cabendo exclusivamente ao médico assistente que atendeu o trabalhador, e não à empresa.', ok: false,
      why: 'Errada. A obrigação primária é da empresa, com legitimados concorrentes.' },
    { t: 'Não é devida, pois o trajeto foi feito em transporte público não fornecido pela empresa empregadora.', ok: false,
      why: 'Errada. O meio de transporte não descaracteriza o trajeto.' }
  ],
  comentario: 'Pontos que a banca cobra: acidente de trajeto é equiparado; a comunicação é devida mesmo sem afastamento; a obrigação primária é da empresa, mas há legitimados subsidiários (o próprio acidentado, dependentes, sindicato, médico assistente e autoridade pública). O prazo de quinze dias é assunto de benefício, não de comunicação.',
  pegadinha: 'A confusão entre "prazo de quinze dias de afastamento" e "obrigação de comunicar" é uma das mais exploradas.',
  refs: ['Lei nº 8.213/1991 — arts. 19 a 23', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.2-001', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa do ramo de abate de aves recebe grande número de benefícios concedidos com reconhecimento automático de natureza acidentária em casos de tendinopatia de ombro, sem que tenha havido emissão de comunicação de acidente do trabalho. Esse reconhecimento decorre de:',
  alts: [
    { t: 'Nexo técnico epidemiológico, pelo cruzamento entre atividade econômica e entidade mórbida.', ok: true,
      why: 'Correta. Gera presunção relativa, que admite prova em contrário pela empresa.' },
    { t: 'Nexo técnico profissional, que decorre da ocupação declarada pelo trabalhador ao requerer o benefício.', ok: false,
      why: 'Errada. O cruzamento é entre atividade econômica e entidade mórbida.' },
    { t: 'Nexo técnico individual, estabelecido pelo médico assistente no atestado que o trabalhador apresentou.', ok: false,
      why: 'Errada. Aqui a presunção decorre de cruzamento estatístico.' },
    { t: 'Presunção absoluta de origem ocupacional, contra a qual não cabe contestação administrativa da empresa.', ok: false,
      why: 'Errada. É presunção relativa, com via própria de contestação.' },
    { t: 'Reconhecimento automático decorrente da emissão da comunicação de acidente pelo sindicato da categoria.', ok: false,
      why: 'Errada. A comunicação registra o evento; não estabelece nexo.' }
  ],
  comentario: 'O nexo epidemiológico foi criado para corrigir a subnotificação: quando há associação estatística entre a atividade econômica da empresa e determinado agravo, o benefício é concedido como acidentário mesmo sem comunicação de acidente. A presunção é relativa. Distinga dos outros dois: profissional/do trabalho (listas de agente-doença) e individual (análise do caso concreto).',
  pegadinha: 'Trocar "presunção relativa" por "absoluta" é a armadilha mais frequente neste tema.',
  refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.3-001', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com espondilodiscartrose lombar prévia, assintomático, passa a exercer função com levantamento manual repetitivo de cargas e desenvolve lombalgia incapacitante. O perito conclui que o trabalho não é a causa única da alteração degenerativa. Sobre concausalidade, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A doença degenerativa preexistente não afasta o nexo: o trabalho pode atuar como concausa.', ok: true,
      why: 'Correta. Pode agravar ou desencadear condição até então silenciosa.' },
    { t: 'Havendo doença degenerativa preexistente documentada, o nexo com o trabalho fica automaticamente excluído.', ok: false,
      why: 'Errada. O agravamento é hipótese expressa de concausa.' },
    { t: 'A preexistente não afasta o nexo, sendo a superveniente a que já existia antes da atividade laboral.', ok: false,
      why: 'Errada. Superveniente é a que surge depois do evento.' },
    { t: 'Reconhecida a concausa, a repercussão previdenciária é reduzida conforme o percentual do trabalho.', ok: false,
      why: 'Errada. Não há previsão de fracionamento dos efeitos.' },
    { t: 'A concausalidade não afasta o nexo, aplicando-se apenas a doenças, e não aos acidentes típicos.', ok: false,
      why: 'Errada. Alcança também os acidentes.' }
  ],
  comentario: 'Concausa é contribuição, não exclusividade. Preexistente (anterior à atividade), concomitante (atua junto) e superveniente (surge depois e agrava). O reconhecimento não é proporcional: contribuiu, é relacionado ao trabalho. É o argumento que derruba a defesa de "doença degenerativa, logo não é do trabalho".',
  pegadinha: 'A troca entre preexistente e superveniente aparece com frequência; guarde pelo prefixo temporal.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.4-001', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um médico do trabalho de uma empresa é convidado a atuar como perito judicial em ação movida por empregado dessa mesma empresa contra ela. Sobre a conduta ética adequada, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve recusar: há impedimento pelo vínculo com uma das partes do processo.', ok: true,
      why: 'Correta. A situação compromete a imparcialidade exigida do perito.' },
    { t: 'Pode aceitar, desde que informe às partes o vínculo empregatício e obtenha a concordância de ambas.', ok: false,
      why: 'Errada. O impedimento não se afasta por concordância das partes.' },
    { t: 'Pode aceitar, pois quem conhece o ambiente laboral é o profissional mais qualificado para o caso.', ok: false,
      why: 'Errada. O conhecimento não supre o impedimento por vínculo.' },
    { t: 'Deve aceitar e, identificando conflito, renunciar apenas depois de concluído e entregue o laudo.', ok: false,
      why: 'Errada. O impedimento é prévio e obsta a atuação.' },
    { t: 'Pode atuar como perito e como assistente da empresa, desde que apresente documentos separados.', ok: false,
      why: 'Errada. As funções são inconciliáveis no mesmo processo.' }
  ],
  comentario: 'Duas linhas nunca se cruzam: perito é auxiliar imparcial; assistente técnico defende o interesse de quem o contratou; e médico assistente cuida do paciente. Quem já ocupa um desses papéis no caso está impedido de ocupar outro. O consentimento das partes não sana impedimento.',
  pegadinha: 'A alternativa do "informe e obtenha concordância" soa ética e transparente, mas impedimento não se resolve com consentimento.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-001', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofreu amputação traumática de dois quirodáctilos da mão dominante. Após consolidação das lesões e reabilitação, retorna ao trabalho em função adaptada, com redução da destreza manual e sem possibilidade de retomar a função original. Sobre a avaliação da incapacidade, assinale a alternativa CORRETA:',
  alts: [
    { t: 'É sequela definitiva que reduz a capacidade para o trabalho habitual: parcial e permanente.', ok: true,
      why: 'Correta. Não impede o exercício de outra atividade compatível.' },
    { t: 'É incapacidade total e permanente, dado o caráter irreversível da lesão apresentada pelo trabalhador.', ok: false,
      why: 'Errada. Há capacidade residual para outras atividades.' },
    { t: 'É incapacidade temporária, pois o quadro ainda pode melhorar com adaptação e treinamento específico.', ok: false,
      why: 'Errada. A sequela está consolidada e é definitiva.' },
    { t: 'Não há incapacidade a reconhecer, uma vez que o trabalhador retornou às suas atividades na empresa.', ok: false,
      why: 'Errada. A redução de capacidade persiste e é indenizável.' },
    { t: 'A avaliação deve considerar só o percentual de perda anatômica, sem levar em conta a função exercida.', ok: false,
      why: 'Errada. A repercussão depende das exigências da atividade.' }
  ],
  comentario: 'Organize sempre por dois eixos: extensão (total × parcial) e duração (temporária × permanente). Irreversível não é sinônimo de total, e retorno ao trabalho não é sinônimo de ausência de dano. A perda anatômica é o ponto de partida; a repercussão depende da função.',
  pegadinha: 'Equiparar "lesão irreversível" a "incapacidade total" é o erro central que a questão persegue.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] }

);
