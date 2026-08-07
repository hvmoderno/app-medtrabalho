/* Seção 5 — Acidentes do Trabalho, Nexo, Perícia e Incapacidade
   Questões AUTORAIS, escritas no estilo da banca. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-5.1-001', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um empregado sofre fratura de tornozelo ao descer do ônibus no trajeto de casa para o trabalho. A empresa questiona se há obrigação de emitir a comunicação de acidente do trabalho, alegando que o evento ocorreu fora das dependências e sem relação com a atividade. A orientação CORRETA do médico do trabalho é:',
  alts: [
    { t: 'A comunicação deve ser emitida, pois o acidente de trajeto é legalmente equiparado a acidente do trabalho, e a obrigação de comunicar independe de haver ou não afastamento.', ok: true,
      why: 'Correta. O acidente ocorrido no percurso entre residência e trabalho é equiparado a acidente do trabalho, e a comunicação é devida mesmo sem afastamento — inclusive para fins estatísticos e epidemiológicos.' },
    { t: 'A comunicação só é devida se houver afastamento superior a quinze dias, quando passa a existir repercussão previdenciária.', ok: false,
      why: 'Errada. O prazo de quinze dias delimita a responsabilidade pelo pagamento nos primeiros dias, não a obrigação de comunicar. Comunica-se ainda que não haja afastamento.' },
    { t: 'A empresa está correta: acidente fora das dependências não é acidente do trabalho, salvo se o empregado estiver a serviço.', ok: false,
      why: 'Errada. Além do acidente a serviço, o acidente de trajeto é expressamente equiparado, assim como outras situações previstas em lei.' },
    { t: 'A comunicação cabe exclusivamente ao médico assistente que atendeu o trabalhador, não à empresa.', ok: false,
      why: 'Errada. A obrigação primária é da empresa, e na sua falta a comunicação pode ser feita pelo próprio acidentado, seus dependentes, o sindicato, o médico assistente ou a autoridade pública.' },
    { t: 'A comunicação é dispensada porque o trajeto foi feito em transporte público não fornecido pela empresa.', ok: false,
      why: 'Errada. A equiparação do trajeto não depende de o transporte ser fornecido pela empresa.' }
  ],
  comentario: 'Pontos que a banca cobra: acidente de trajeto é equiparado; a comunicação é devida mesmo sem afastamento; a obrigação primária é da empresa, mas há legitimados subsidiários (o próprio acidentado, dependentes, sindicato, médico assistente e autoridade pública). O prazo de quinze dias é assunto de benefício, não de comunicação.',
  pegadinha: 'A confusão entre "prazo de quinze dias de afastamento" e "obrigação de comunicar" é uma das mais exploradas.',
  refs: ['Lei nº 8.213/1991 — arts. 19 a 23', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.2-001', tema: '5.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa do ramo de abate de aves recebe grande número de benefícios concedidos com reconhecimento automático de natureza acidentária em casos de tendinopatia de ombro, sem que tenha havido emissão de comunicação de acidente do trabalho. Esse reconhecimento decorre de:',
  alts: [
    { t: 'Nexo técnico epidemiológico previdenciário, que se estabelece pelo cruzamento entre a atividade econômica da empresa e a entidade mórbida, com presunção relativa que admite prova em contrário pela empresa.', ok: true,
      why: 'Correta. O nexo epidemiológico opera pelo cruzamento entre atividade econômica e agravo, gerando presunção que a empresa pode afastar demonstrando ausência de relação com o trabalho.' },
    { t: 'Nexo técnico profissional, que decorre da simples ocupação declarada pelo trabalhador no requerimento do benefício.', ok: false,
      why: 'Errada. O nexo profissional ou do trabalho decorre da associação entre o agente ou fator de risco e a doença conforme listas técnicas, não da ocupação declarada no requerimento.' },
    { t: 'Nexo técnico individual, estabelecido pelo médico assistente no atestado apresentado.', ok: false,
      why: 'Errada. O nexo individual é aquele firmado pela avaliação do caso concreto na perícia, e não pelo atestado do assistente, embora este componha a instrução.' },
    { t: 'Presunção absoluta de origem ocupacional, contra a qual não cabe contestação administrativa da empresa.', ok: false,
      why: 'Errada. A presunção é relativa; existe via administrativa para a empresa contestar a aplicação do nexo epidemiológico.' },
    { t: 'Reconhecimento automático decorrente da emissão de comunicação de acidente do trabalho pelo sindicato da categoria.', ok: false,
      why: 'Errada. O enunciado é expresso em dizer que não houve comunicação, e o mecanismo descrito independe dela — é exatamente essa a sua função.' }
  ],
  comentario: 'O nexo epidemiológico foi criado para corrigir a subnotificação: quando há associação estatística entre a atividade econômica da empresa e determinado agravo, o benefício é concedido como acidentário mesmo sem comunicação de acidente. A presunção é relativa. Distinga dos outros dois: profissional/do trabalho (listas de agente-doença) e individual (análise do caso concreto).',
  pegadinha: 'Trocar "presunção relativa" por "absoluta" é a armadilha mais frequente neste tema.',
  refs: ['Lei nº 8.213/1991 — art. 21-A', 'Decreto nº 3.048/1999'] },

{ id: 'q-5.3-001', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador com espondilodiscartrose lombar prévia, assintomático, passa a exercer função com levantamento manual repetitivo de cargas e desenvolve lombalgia incapacitante. O perito conclui que o trabalho não é a causa única da alteração degenerativa. Sobre concausalidade, assinale a alternativa CORRETA:',
  alts: [
    { t: 'A existência de doença degenerativa preexistente não afasta o nexo, pois o trabalho pode atuar como concausa, agravando ou desencadeando a manifestação clínica de condição até então silenciosa.', ok: true,
      why: 'Correta. A concausa preexistente não rompe o nexo: basta que o trabalho tenha contribuído para o resultado, ainda que não seja a causa única nem a principal.' },
    { t: 'Havendo doença degenerativa preexistente, o nexo com o trabalho fica automaticamente excluído.', ok: false,
      why: 'Errada. É exatamente o raciocínio que a figura da concausa existe para afastar. Causa única não é requisito.' },
    { t: 'A concausa superveniente é aquela existente antes do início da atividade laboral e que predispõe ao agravo.', ok: false,
      why: 'Errada, houve troca de definições: a que existe antes é a preexistente. A superveniente surge depois e se soma ao curso do dano.' },
    { t: 'Reconhecida a concausa, a repercussão previdenciária é reduzida proporcionalmente ao percentual de contribuição do trabalho.', ok: false,
      why: 'Errada. Não há rateio proporcional do reconhecimento: caracterizada a contribuição do trabalho, o agravo é tratado como relacionado ao trabalho.' },
    { t: 'A concausalidade aplica-se somente a doenças, não a acidentes típicos.', ok: false,
      why: 'Errada. A lógica de concausa alcança também os acidentes, inclusive nas hipóteses de agravamento de lesão por condição associada.' }
  ],
  comentario: 'Concausa é contribuição, não exclusividade. Preexistente (anterior à atividade), concomitante (atua junto) e superveniente (surge depois e agrava). O reconhecimento não é proporcional: contribuiu, é relacionado ao trabalho. É o argumento que derruba a defesa de "doença degenerativa, logo não é do trabalho".',
  pegadinha: 'A troca entre preexistente e superveniente aparece com frequência; guarde pelo prefixo temporal.',
  refs: ['Lei nº 8.213/1991 — art. 21, I', 'Cabral — Abre a CAT?'] },

{ id: 'q-5.4-001', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Um médico do trabalho de uma empresa é convidado a atuar como perito judicial em ação movida por empregado dessa mesma empresa contra ela. Sobre a conduta ética adequada, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Deve recusar a nomeação, pois há impedimento decorrente do vínculo com uma das partes, situação que compromete a imparcialidade exigida do perito.', ok: true,
      why: 'Correta. Vínculo com uma das partes configura impedimento: a atividade pericial exige imparcialidade, e o médico que assiste ou é contratado por uma parte não pode atuar como perito no mesmo caso.' },
    { t: 'Pode aceitar, desde que informe às partes seu vínculo empregatício e obtenha concordância expressa de ambas.', ok: false,
      why: 'Errada. O impedimento não é sanável por consentimento das partes; a vedação decorre da natureza do encargo pericial.' },
    { t: 'Pode aceitar, pois o médico do trabalho, por conhecer o ambiente laboral, é o profissional mais qualificado para a perícia naquele caso.', ok: false,
      why: 'Errada. Conhecimento técnico do ambiente não supre o impedimento — o problema é de imparcialidade, não de competência.' },
    { t: 'Deve aceitar e, se identificar conflito, renunciar apenas depois de concluído o laudo.', ok: false,
      why: 'Errada. O impedimento é prévio e conhecido; produzir o laudo e só então renunciar agrava a situação.' },
    { t: 'Pode atuar como perito e, simultaneamente, como assistente técnico da empresa, desde que apresente documentos separados.', ok: false,
      why: 'Errada. As funções são inconciliáveis: perito é auxiliar imparcial do juízo, assistente técnico atua no interesse de uma parte.' }
  ],
  comentario: 'Duas linhas nunca se cruzam: perito é auxiliar imparcial; assistente técnico defende o interesse de quem o contratou; e médico assistente cuida do paciente. Quem já ocupa um desses papéis no caso está impedido de ocupar outro. O consentimento das partes não sana impedimento.',
  pegadinha: 'A alternativa do "informe e obtenha concordância" soa ética e transparente, mas impedimento não se resolve com consentimento.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-001', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador sofreu amputação traumática de dois quirodáctilos da mão dominante. Após consolidação das lesões e reabilitação, retorna ao trabalho em função adaptada, com redução da destreza manual e sem possibilidade de retomar a função original. Sobre a avaliação da incapacidade, assinale a alternativa CORRETA:',
  alts: [
    { t: 'Trata-se de sequela definitiva que implica redução da capacidade para o trabalho habitualmente exercido, sem impedir o exercício de outra atividade — situação típica de incapacidade parcial e permanente.', ok: true,
      why: 'Correta. Há dano consolidado e definitivo, com redução da capacidade para a função habitual e preservação da capacidade para outras atividades: incapacidade parcial e permanente.' },
    { t: 'Trata-se de incapacidade total e permanente, pois a lesão é irreversível.', ok: false,
      why: 'Errada. Irreversibilidade da lesão não equivale a incapacidade total: o trabalhador segue apto a outras atividades, e é isso que define o caráter parcial.' },
    { t: 'Trata-se de incapacidade temporária, pois o quadro pode melhorar com adaptação e treinamento.', ok: false,
      why: 'Errada. Após consolidação das lesões e reabilitação, o dano é definitivo; adaptação melhora o desempenho, não restitui a estrutura perdida.' },
    { t: 'Não há incapacidade a ser reconhecida, uma vez que o trabalhador retornou ao trabalho.', ok: false,
      why: 'Errada. Retorno ao trabalho em função adaptada não elimina a sequela nem a redução de capacidade — são coisas distintas.' },
    { t: 'A avaliação deve considerar exclusivamente o percentual de perda anatômica, sem levar em conta a função exercida.', ok: false,
      why: 'Errada. A avaliação do dano corporal parte da perda anatômica e funcional, mas a repercussão sobre a capacidade laborativa depende da atividade exercida.' }
  ],
  comentario: 'Organize sempre por dois eixos: extensão (total × parcial) e duração (temporária × permanente). Irreversível não é sinônimo de total, e retorno ao trabalho não é sinônimo de ausência de dano. A perda anatômica é o ponto de partida; a repercussão depende da função.',
  pegadinha: 'Equiparar "lesão irreversível" a "incapacidade total" é o erro central que a questão persegue.',
  refs: ['Tabela brasileira para apuração do dano corporal — ABMLPM', 'Lei nº 8.213/1991'] }

);
