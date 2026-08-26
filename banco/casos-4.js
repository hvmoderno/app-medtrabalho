/* CASOS-4.JS — casos clínicos 017 a 020. AUTORAIS. */
window.CASOS = window.CASOS || [];
window.CASOS.push(

{ id: 'caso-017',
  titulo: 'Duas vítimas em tanque de armazenamento',
  temas: ['6.4', '7.4', '2.2', '5.1'],
  nivel: 'dificil',
  vinheta: 'Em uma indústria química, dois trabalhadores da manutenção foram designados para limpeza interna de um tanque de armazenamento de 8 metros de altura, previamente esvaziado e apenas enxaguado com água. Não houve medição da atmosfera interna, não foi emitida permissão de entrada e não havia vigia designado. O primeiro trabalhador desceu pela escada interna e, cerca de dois minutos depois, deixou de responder aos chamados. O segundo desceu imediatamente para socorrê-lo e também perdeu a consciência. A equipe de emergência da planta acionou o resgate, mediu a atmosfera pela abertura superior e encontrou concentração de oxigênio muito reduzida, sem detecção de gases tóxicos. Os dois foram retirados por equipe com equipamento autônomo. O primeiro chegou ao ambulatório em parada cardiorrespiratória e não respondeu às manobras; o segundo chegou torporoso, evoluindo com melhora após oxigenoterapia. A empresa possui procedimento escrito para espaço confinado, elaborado há três anos, sem registro de treinamento da equipe de manutenção.',
  questoes: [
    { enunciado: 'Sobre a causa mais provável do evento, é CORRETO afirmar:',
      alts: [
        { t: 'A deficiência de oxigênio por deslocamento é a explicação mais compatível, e sua característica é não produzir sinais de alerta perceptíveis.', ok: true,
          why: 'Correta. O gás inerte desloca o oxigênio sem cheiro, cor ou irritação. A perda de consciência ocorre em poucos instantes, sem que a vítima consiga perceber o perigo e reagir.' },
        { t: 'A perda de consciência em poucos segundos indica necessariamente intoxicação por gás tóxico presente no tanque, já que a asfixia simples por deficiência de oxigênio não é capaz de incapacitar tão rapidamente.', ok: false,
          why: 'Incorreta. Em atmosferas muito pobres em oxigênio a inconsciência pode ocorrer em uma ou duas inspirações. A rapidez não distingue asfixia simples de intoxicação.' },
        { t: 'O enxágue prévio do tanque com água elimina o risco atmosférico do espaço confinado, uma vez que remove os resíduos do produto anteriormente armazenado.', ok: false,
          why: 'Incorreta. A limpeza reduz resíduos, mas não corrige a atmosfera, que pode permanecer deficiente em oxigênio por inertização ou consumo por oxidação.' },
        { t: 'Como o tanque estava aberto na parte superior, a ventilação natural garante atmosfera segura em todo o seu interior durante o serviço.', ok: false,
          why: 'Incorreta. Abertura superior não ventila o fundo. Gases mais densos que o ar se acumulam na parte baixa e ali permanecem.' },
        { t: 'A altura do tanque, por si só, exclui a sua classificação como espaço confinado.', ok: false,
          why: 'Incorreta. O que define espaço confinado é meio de entrada e saída limitado, ventilação insuficiente e não destinação à ocupação humana contínua.' }
      ],
      comentario: 'Deficiência de oxigênio é a causa mais frequente de morte em espaço confinado e não dá aviso. Por isso a avaliação da atmosfera é PRÉVIA e obrigatória: não existe inspeção visual ou "cheiro" que substitua a medição.',
      pegadinha: 'A ideia de que abertura superior garante ventilação é a justificativa mais comum para dispensar a medição.',
      refs: ['NR-33', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre a conduta do segundo trabalhador, que desceu para socorrer o colega, é CORRETO afirmar:',
      alts: [
        { t: 'Reproduz o padrão descrito na literatura, em que parcela expressiva das mortes em espaço confinado ocorre entre socorristas improvisados.', ok: true,
          why: 'Correta. A primeira regra do atendimento é a segurança da cena. O resgate em espaço confinado exige equipe treinada, com equipamento de adução de ar e sistema de retirada.' },
        { t: 'A conduta foi correta, pois o socorro imediato ao colega em risco de morte é prioridade absoluta em qualquer situação de emergência, ainda que o socorrista não disponha de equipamento.', ok: false,
          why: 'Incorreta. Entrar sem proteção transforma um acidentado em dois e reduz a chance de sobrevivência de ambos.' },
        { t: 'O erro do segundo trabalhador foi não ter levado consigo uma máscara semifacial com filtro químico apropriado ao produto antes armazenado no tanque.', ok: false,
          why: 'Incorreta. Filtro purificador não gera oxigênio e é inútil em atmosfera deficiente. Só serve equipamento com adução de ar.' },
        { t: 'Se houvesse vigia designado para a tarefa, caberia a ele descer imediatamente para realizar o resgate do trabalhador desacordado.', ok: false,
          why: 'Incorreta. O vigia jamais entra: ele permanece do lado de fora, mantém comunicação e aciona o resgate.' },
        { t: 'A rapidez do socorro compensa a ausência de avaliação prévia da atmosfera.', ok: false,
          why: 'Incorreta. Nada compensa entrar em atmosfera desconhecida, onde a incapacitação é praticamente imediata.' }
      ],
      comentario: 'Espaço confinado mata em dupla. Guarde a sequência: avaliar a atmosfera antes, permissão de entrada, vigia permanente do lado de fora, plano de resgate e equipamento de adução de ar. O vigia aciona; não entra.',
      pegadinha: 'A alternativa que elogia o socorro imediato explora o instinto correto na situação errada.',
      refs: ['NR-33', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre as exigências normativas descumpridas neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'Faltaram avaliação prévia da atmosfera, permissão de entrada, vigia designado, plano de resgate e capacitação registrada da equipe.', ok: true,
          why: 'Correta. A existência de procedimento escrito não substitui o treinamento nem a aplicação efetiva das medidas. Todas essas exigências foram descumpridas simultaneamente.' },
        { t: 'A permissão de entrada e trabalho é dispensável em serviços de curta duração, como uma limpeza rápida que não ultrapasse alguns minutos no interior do espaço.', ok: false,
          why: 'Incorreta. A permissão é exigida para toda entrada, independentemente do tempo. Foi justamente em minutos que este acidente ocorreu.' },
        { t: 'A existência de procedimento escrito, ainda que sem treinamento da equipe, satisfaz a exigência normativa de capacitação para trabalho em espaço confinado.', ok: false,
          why: 'Incorreta. A capacitação é exigida com carga horária, conteúdo e registro. Procedimento arquivado e desconhecido pela equipe não protege ninguém.' },
        { t: 'A avaliação da atmosfera pode ser feita após a entrada, com equipamento portátil levado pelo próprio trabalhador.', ok: false,
          why: 'Incorreta. A avaliação é prévia e feita de fora do espaço, com o instrumento introduzido em diferentes níveis antes de qualquer entrada.' },
        { t: 'O plano de resgate só é exigível em tanques que tenham armazenado produtos inflamáveis.', ok: false,
          why: 'Incorreta. O plano de resgate é exigido para toda entrada em espaço confinado, qualquer que seja o produto.' }
      ],
      comentario: 'Quatro exigências operacionais em espaço confinado: atmosfera avaliada ANTES, permissão de entrada por escrito, vigia permanente FORA e plano de resgate. Some a capacitação registrada — sem ela, o procedimento escrito não protege ninguém.',
      pegadinha: 'A defesa de que "existe procedimento" é a mais comum após acidentes desse tipo e não sustenta nada sem treinamento e aplicação.',
      refs: ['NR-33', 'NR-1'] },

    { enunciado: 'Sobre a conduta médica no atendimento do segundo trabalhador, é CORRETO afirmar:',
      alts: [
        { t: 'A oxigenoterapia e o suporte às funções vitais são a base do atendimento, com monitorização e período de observação.', ok: true,
          why: 'Correta. Pode haver lesão neurológica tardia mesmo após a recuperação inicial do nível de consciência, o que torna a observação obrigatória antes de qualquer liberação.' },
        { t: 'Recuperado o nível de consciência e estando o trabalhador orientado e sem queixas, ele pode ser liberado imediatamente para casa, sem necessidade de período de observação hospitalar.', ok: false,
          why: 'Incorreta. A hipóxia cerebral pode manifestar-se de forma tardia, com alterações cognitivas e motoras horas ou dias depois.' },
        { t: 'Está indicada a administração de antídoto específico para asfixiantes simples, disponível nos serviços de emergência para esse tipo de exposição.', ok: false,
          why: 'Incorreta. Não existe antídoto para asfixiante simples: o tratamento é restabelecer a oferta de oxigênio.' },
        { t: 'A ausência de gases tóxicos na medição posterior dispensa qualquer investigação complementar no trabalhador atendido.', ok: false,
          why: 'Incorreta. O dano decorreu da hipóxia, e é ela que precisa ser acompanhada, independentemente da presença de tóxicos.' },
        { t: 'Por não haver lesão física aparente no trabalhador que sobreviveu, não se caracteriza acidente do trabalho no seu caso.', ok: false,
          why: 'Incorreta. Houve perda de consciência por hipóxia, que é lesão. O acidente está caracterizado.' }
      ],
      comentario: 'Asfixiante simples não tem antídoto: o tratamento é remover da atmosfera, oxigenar e dar suporte. Recuperação da consciência não encerra o caso — há risco de repercussão neurológica tardia, o que exige observação.',
      pegadinha: 'A busca por um antídoto específico é reflexo comum e não se aplica aos asfixiantes simples.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Buschinelli — Toxicologia Ocupacional'] },

    { enunciado: 'Sobre as providências institucionais após o evento, a conduta CORRETA é:',
      alts: [
        { t: 'Emitir a comunicação do acidente para ambos os trabalhadores, notificar o acidente grave e o fatal e conduzir investigação que alcance as decisões organizacionais.', ok: true,
          why: 'Correta. Cabe ainda comunicar às autoridades competentes. A investigação não pode limitar-se ao comportamento das vítimas: precisa chegar às decisões gerenciais que permitiram a entrada.' },
        { t: 'A investigação interna deve concluir por culpa exclusiva das vítimas, que descumpriram o procedimento de segurança escrito e disponível na empresa para trabalho em espaço confinado.', ok: false,
          why: 'Incorreta. Culpar a vítima encerra a análise antes das causas reais: ausência de treinamento, de permissão, de vigia e de plano de resgate.' },
        { t: 'A investigação interna deve aguardar o encerramento do inquérito policial, para não produzir conclusões que conflitem com a apuração oficial do evento.', ok: false,
          why: 'Incorreta. As apurações são independentes, e a investigação interna é urgente porque o risco segue presente para os demais trabalhadores.' },
        { t: 'Basta a comunicação relativa ao óbito, sendo dispensável a comunicação referente ao trabalhador que sobreviveu ao evento.', ok: false,
          why: 'Incorreta. Cada trabalhador acidentado gera sua própria comunicação, inclusive o que sobreviveu.' },
        { t: 'Como a empresa possui procedimento escrito para espaço confinado, não há providências adicionais a adotar.', ok: false,
          why: 'Incorreta. O procedimento existia e não foi aplicado, o que aponta falha de gestão a ser corrigida.' }
      ],
      comentario: 'Acidente fatal em espaço confinado é o caso emblemático de análise em camadas: evento imediato, condições do local, organização do trabalho e decisões gerenciais — quem planejou o serviço, quem autorizou, quem deveria ter treinado. Parar na vítima impede prevenir o próximo.',
      pegadinha: 'A conclusão por "culpa exclusiva da vítima" é a resposta que a empresa quer e a que garante a repetição do acidente.',
      refs: ['Lei nº 8.213/1991', 'NR-33', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] }
  ] },

{ id: 'caso-018',
  titulo: 'Intoxicação por agrotóxico em trabalhador rural informal',
  temas: ['2.3', '1.8', '1.6', '1.9'],
  nivel: 'dificil',
  vinheta: 'Homem de 38 anos, trabalhador rural sem registro em carteira, é levado à unidade básica de saúde de município do interior duas horas após aplicação de defensivo agrícola em lavoura de tomate. Apresenta miose puntiforme, sialorreia intensa, sudorese profusa, broncorreia com estertores difusos, cólicas abdominais, vômitos, bradicardia e fasciculações em face e membros. Relata que aplicou o produto com pulverizador costal, sem luvas e sem proteção respiratória, em dia quente, e que a embalagem "estava sem rótulo". Trabalha em regime de diária para um produtor da região e afirma que outros três colegas passaram mal na última safra, mas "ninguém procurou o posto". A unidade não dispõe de antídoto em quantidade suficiente e o hospital de referência fica a 60 km. A equipe pergunta se, por se tratar de trabalhador informal, o caso "entra ou não em saúde do trabalhador".',
  questoes: [
    { enunciado: 'Sobre a hipótese diagnóstica e a conduta imediata, a alternativa CORRETA é:',
      alts: [
        { t: 'O quadro é de síndrome colinérgica por inibidor de colinesterase, e a prioridade é a descontaminação, a proteção da via aérea e a atropina em doses tituladas.', ok: true,
          why: 'Correta. A descontaminação exige remoção das roupas e lavagem da pele, para deter a absorção que continua. A atropina se titula pelo controle das secreções brônquicas, não pela pupila.' },
        { t: 'Trata-se de intoxicação por piretroide, cuja manifestação típica é exatamente a síndrome colinérgica descrita, com miose, sialorreia, broncorreia e fasciculações musculares.', ok: false,
          why: 'Incorreta. Piretroides causam parestesias, irritação e, em casos graves, convulsões, mas não produzem síndrome colinérgica.' },
        { t: 'A atropina deve ser titulada pela reversão da miose, parâmetro mais confiável e objetivo de resposta terapêutica na intoxicação por inibidores de colinesterase.', ok: false,
          why: 'Incorreta. A miose pode persistir por efeito local e não acompanha a resposta sistêmica. O parâmetro é a secreção brônquica e a ausculta pulmonar.' },
        { t: 'A descontaminação da pele é dispensável quando a principal via de exposição foi a respiratória, como ocorre na pulverização em campo aberto.', ok: false,
          why: 'Incorreta. A absorção dérmica é via importante nesses produtos, ainda mais com roupa encharcada, calor e sudorese.' },
        { t: 'O quadro é autolimitado, e a observação clínica sem intervenção medicamentosa é suficiente.', ok: false,
          why: 'Incorreta. A intoxicação colinérgica grave evolui para insuficiência respiratória e óbito sem tratamento.' }
      ],
      comentario: 'Síndrome colinérgica: miose, sialorreia, broncorreia, bradicardia, cólicas, fasciculações. Conduta: descontaminar (roupas e pele, com proteção da equipe), proteger a via aérea, atropina titulada pelas secreções e reativador de colinesterase conforme o agente.',
      pegadinha: 'Titular atropina pela miose é erro clássico — a pupila pode não responder por contato ocular direto.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre a dúvida da equipe quanto ao trabalhador informal, é CORRETO afirmar:',
      alts: [
        { t: 'A política de saúde do trabalhador alcança todos os trabalhadores, com ou sem vínculo formal.', ok: true,
          why: 'Correta. O reconhecimento da relação do agravo com o trabalho é obrigação do serviço de saúde e independe de cobertura previdenciária, que é questão distinta e posterior.' },
        { t: 'Por ser trabalhador informal, sem vínculo empregatício registrado e sem contribuição previdenciária, o caso não integra o escopo de atuação da saúde do trabalhador no sistema público.', ok: false,
          why: 'Incorreta. A saúde do trabalhador se define pela relação entre o agravo e o trabalho, e não pela formalização do vínculo.' },
        { t: 'O reconhecimento da relação do agravo com o trabalho depende de que o trabalhador tenha a condição de segurado da Previdência Social no momento do evento.', ok: false,
          why: 'Incorreta. A condição de segurado define o direito ao benefício, não a existência da relação entre o agravo e o trabalho.' },
        { t: 'A conduta do serviço se esgota no tratamento clínico da intoxicação aguda, cabendo a outras instâncias qualquer providência de natureza coletiva.', ok: false,
          why: 'Incorreta. Notificação, investigação e vigilância integram a conduta do próprio serviço que atende o caso.' },
        { t: 'A investigação do local de trabalho é vedada quando não existe empregador formalmente constituído.', ok: false,
          why: 'Incorreta. A vigilância em saúde do trabalhador atua sobre o ambiente e o processo de trabalho, independentemente de formalização.' }
      ],
      comentario: 'Este é o caso que separa quem entendeu o campo. Sem carteira, sem CAT possível e sem benefício — e ainda assim objeto integral da política de saúde do trabalhador, com notificação, investigação do ambiente e intervenção sobre a exposição.',
      pegadinha: 'Confundir alcance da política de saúde com alcance da cobertura previdenciária é o erro estrutural do tema.',
      refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

    { enunciado: 'Sobre as providências de notificação e vigilância, a conduta CORRETA é:',
      alts: [
        { t: 'Notificar a intoxicação exógena relacionada ao trabalho, acionar a vigilância para investigar o local e buscar ativamente os casos relatados pelos colegas.', ok: true,
          why: 'Correta. O relato de três colegas com sintomas semelhantes indica casos não notificados, e a busca ativa é o que revela a dimensão real do problema no local.' },
        { t: 'A notificação ao sistema de vigilância só é devida após a confirmação laboratorial da intoxicação por dosagem de colinesterase plasmática ou eritrocitária do trabalhador atendido.', ok: false,
          why: 'Incorreta. A notificação se faz por suspeita, exatamente para não retardar a investigação. A confirmação laboratorial vem depois e nem sempre é possível.' },
        { t: 'Por ter ocorrido em propriedade privada, a investigação do local de aplicação depende de autorização prévia do produtor rural responsável pela área.', ok: false,
          why: 'Incorreta. A vigilância sanitária tem poder de polícia e acesso aos ambientes de trabalho, inclusive em propriedade privada.' },
        { t: 'Os casos anteriores relatados pelos colegas não devem ser investigados, por não terem sido notificados na época em que ocorreram.', ok: false,
          why: 'Incorreta. A busca ativa retrospectiva é ferramenta essencial de vigilância diante de subnotificação.' },
        { t: 'A notificação substitui a necessidade de intervenção sobre as condições de trabalho no local.', ok: false,
          why: 'Incorreta. Notificar é o começo do processo: sem intervenção no ambiente, os casos continuam.' }
      ],
      comentario: 'Notificar por suspeita, acionar a vigilância e fazer busca ativa. Três colegas que "passaram mal e não procuraram o posto" é a descrição literal da subnotificação — e a razão de a vigilância existir.',
      pegadinha: 'Exigir confirmação laboratorial antes de notificar é o que trava a vigilância em intoxicações agudas.',
      refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

    { enunciado: 'Sobre a embalagem sem rótulo e as condições de aplicação relatadas, é CORRETO afirmar:',
      alts: [
        { t: 'A ausência de identificação do produto compromete o atendimento clínico e caracteriza falha grave de controle, devendo a investigação buscar identificar o agente.', ok: true,
          why: 'Correta. Cabe verificar ainda armazenamento, receituário agronômico, equipamento de aplicação e destinação das embalagens, todos elementos de controle ausentes no relato.' },
        { t: 'A identificação exata do produto é irrelevante para a conduta, pois o tratamento da síndrome colinérgica é sempre o mesmo, independentemente do agente que a provocou.', ok: false,
          why: 'Incorreta. Carbamato e organofosforado têm evolução e indicação de oxima diferentes, e a identificação orienta prognóstico e seguimento.' },
        { t: 'O calor intenso do dia não influencia a absorção do produto pela pele do trabalhador durante a aplicação em campo aberto.', ok: false,
          why: 'Incorreta. Calor e sudorese aumentam a absorção dérmica e levam o trabalhador a dispensar a vestimenta de proteção.' },
        { t: 'O pulverizador costal é considerado equipamento de proteção e dispensa o uso de vestimenta e de proteção respiratória durante a aplicação.', ok: false,
          why: 'Incorreta. O pulverizador é equipamento de aplicação, e o modelo costal aproxima o produto do corpo, aumentando a exposição.' },
        { t: 'A ausência de receituário agronômico para o produto aplicado não tem repercussão sanitária.', ok: false,
          why: 'Incorreta. O receituário é exigência legal e instrumento de controle de uso, dose e produto autorizado para a cultura.' }
      ],
      comentario: 'Embalagem sem rótulo é achado sentinela: compromete o atendimento e denuncia falha em toda a cadeia — aquisição, armazenamento, aplicação e descarte. E lembre da fisiologia: calor e sudorese aumentam a absorção cutânea.',
      pegadinha: 'Chamar o pulverizador costal de proteção inverte completamente o papel do equipamento.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-31', 'Lei nº 8.080/1990'] },

    { enunciado: 'Sobre o seguimento do trabalhador após a fase aguda, a conduta CORRETA é:',
      alts: [
        { t: 'Manter acompanhamento clínico e laboratorial e afastar da exposição por período adequado à recuperação enzimática.', ok: true,
          why: 'Correta. Há manifestações tardias descritas, como a síndrome intermediária e a neuropatia retardada, e o retorno precoce à aplicação encontra a colinesterase ainda deprimida.' },
        { t: 'Resolvida a fase aguda e recebendo alta hospitalar sem sintomas, o trabalhador pode retornar imediatamente à aplicação de defensivos, uma vez que o efeito do produto já se dissipou.', ok: false,
          why: 'Incorreta. A atividade da colinesterase leva semanas a meses para se recuperar, e nova exposição nesse período causa intoxicação com dose muito menor.' },
        { t: 'Não há manifestações tardias descritas nas intoxicações por inibidores de colinesterase, de modo que o seguimento se encerra com a alta da fase aguda.', ok: false,
          why: 'Incorreta. Estão bem descritas a síndrome intermediária, com paresia de musculatura proximal e respiratória, e a neuropatia retardada.' },
        { t: 'O acompanhamento deve ser interrompido caso se confirme que o trabalhador não possui vínculo formal de emprego.', ok: false,
          why: 'Incorreta. O cuidado no sistema público não depende de vínculo, e condicioná-lo a isso é discriminação.' },
        { t: 'A prevenção de novos casos cabe exclusivamente ao trabalhador, que deve usar equipamento adequado.', ok: false,
          why: 'Incorreta. Transfere ao trabalhador a responsabilidade por um controle que depende de produto autorizado, receituário, equipamento e organização do trabalho.' }
      ],
      comentario: 'Depois da fase aguda: acompanhar, considerar manifestações tardias e não devolver o trabalhador à exposição antes da recuperação. E a prevenção é do processo — identificação do produto, equipamento adequado, armazenamento e organização do trabalho.',
      pegadinha: 'Responsabilizar o trabalhador pela própria proteção é a conclusão mais fácil e a que menos previne.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] }
  ] },

{ id: 'caso-019',
  titulo: 'Indicadores e sistema de gestão em transportadora',
  temas: ['1.4', '1.5', '1.10', '7.4'],
  nivel: 'dificil',
  vinheta: 'Transportadora com 600 empregados apresenta ao novo médico coordenador os resultados do último ano: taxa de frequência de acidentes em queda pelo terceiro ano consecutivo, "acidente zero" alcançado em quatro filiais e programa de bonificação trimestral por ausência de acidentes registrados. Ao mesmo tempo, o absenteísmo cresceu 22%, houve aumento de afastamentos por transtornos musculoesqueléticos e mentais, e o número de relatos de quase-acidentes caiu de 180 para 12 em dois anos. A empresa possui certificação em sistema de gestão de segurança e saúde, com auditoria externa favorável. O programa de qualidade de vida oferece ginástica laboral, palestras de alimentação saudável e desafio de passos, com participação vinculada à avaliação de desempenho. As jornadas de motoristas foram estendidas por acordo, e as metas de entrega aumentaram no período.',
  questoes: [
    { enunciado: 'Sobre a leitura conjunta dos indicadores apresentados, a interpretação CORRETA é:',
      alts: [
        { t: 'O conjunto sugere subnotificação induzida pelo programa de bonificação, e não melhora real do desempenho.', ok: true,
          why: 'Correta. Taxa de frequência e relatos de quase-acidentes caindo ao mesmo tempo em que sobem absenteísmo e afastamentos por acidente é o padrão clássico de ocultamento: o dano continua, apenas deixou de ser registrado.' },
        { t: 'Os resultados demonstram melhora consistente do sistema de gestão de segurança, comprovada de forma independente pela auditoria de certificação realizada no período.', ok: false,
          why: 'Incorreta. A certificação atesta conformidade documental do sistema e não valida a fidedignidade dos números informados a ela.' },
        { t: 'A queda no número de relatos de quase-acidentes indica que existem menos desvios ocorrendo no processo de trabalho da transportadora.', ok: false,
          why: 'Incorreta. Relato de quase-acidente é indicador de participação, não de ausência de desvio. A queda costuma significar que as pessoas pararam de relatar.' },
        { t: 'O aumento do absenteísmo por doença é fenômeno independente e não guarda relação com os indicadores de segurança do trabalho apresentados.', ok: false,
          why: 'Incorreta. Absenteísmo e afastamentos acidentários são indicadores de saúde e devem ser lidos em conjunto com os de segurança, sobretudo quando divergem.' },
        { t: 'O resultado de acidente zero em quatro filiais é evidência suficiente da eficácia das medidas preventivas adotadas nessas unidades.', ok: false,
          why: 'Incorreta. Acidente zero em unidade com bonificação atrelada ao indicador é justamente o resultado que exige maior desconfiança.' }
      ],
      comentario: 'Leia os indicadores em conjunto e desconfie de melhora que só aparece nos números premiados. Queda de acidentes com queda de quase-acidentes e alta de afastamentos é assinatura de subnotificação.',
      pegadinha: 'A certificação aparece como selo de qualidade e mede conformidade documental, não segurança.',
      refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'OIT — Sistema de Gestão da SST'] },

    { enunciado: 'Sobre o programa de bonificação por ausência de acidentes, a avaliação CORRETA é:',
      alts: [
        { t: 'É indutor conhecido de subnotificação e deve ser substituído por incentivos atrelados a indicadores proativos.', ok: true,
          why: 'Correta. Inspeções realizadas, desvios corrigidos, relatos de quase-acidentes e cumprimento do plano de ação medem o que se faz para prevenir, e não a ausência de registro do dano.' },
        { t: 'É a forma mais confiável de conduzir o programa de segurança, por engajar diretamente as equipes em torno de um objetivo comum e mensurável de redução de acidentes.', ok: false,
          why: 'Incorreta. O engajamento produzido é o de esconder o acidente, porque o grupo inteiro perde o bônus quando alguém registra.' },
        { t: 'O problema do programa está apenas no valor do bônus oferecido, que deveria ser mais elevado para produzir efeito real sobre o comportamento das equipes.', ok: false,
          why: 'Incorreta. Aumentar o valor intensifica a pressão para ocultar. O defeito está no indicador escolhido, não no valor.' },
        { t: 'A bonificação por ausência de acidentes é neutra desde que acompanhada de treinamento periódico em segurança do trabalho.', ok: false,
          why: 'Incorreta. Treinamento não neutraliza incentivo financeiro que pune o registro do acidente.' },
        { t: 'A subnotificação induzida por bonificação não tem repercussão previdenciária.', ok: false,
          why: 'Incorreta. Deixar de comunicar acidente do trabalho é infração, com repercussão previdenciária e sobre o direito do trabalhador.' }
      ],
      comentario: 'Regra simples: nunca premie a ausência de registro. Premie a ação preventiva. Indicadores reativos servem para monitorar; indicadores proativos servem para incentivar.',
      pegadinha: 'Discutir o valor do bônus em vez do objeto premiado é o desvio que mantém o problema intacto.',
      refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

    { enunciado: 'Sobre o programa de qualidade de vida descrito, a análise CORRETA é:',
      alts: [
        { t: 'As ações de promoção têm valor, mas não substituem a intervenção sobre jornada e metas.', ok: true,
          why: 'Correta. Elas atuam apenas sobre recursos pessoais de saúde, deixando intactos os determinantes. Vincular a participação à avaliação de desempenho é coercitivo e eticamente insustentável.' },
        { t: 'O programa é adequado, pois atua sobre os principais fatores de risco envolvidos, que são de natureza comportamental e dependem essencialmente das escolhas de cada trabalhador.', ok: false,
          why: 'Incorreta. Os determinantes descritos são organizacionais: jornada estendida e metas elevadas. Atribuí-los a comportamento individual desloca a responsabilidade.' },
        { t: 'Vincular a participação nas atividades do programa à avaliação de desempenho do trabalhador é boa prática de engajamento em promoção da saúde.', ok: false,
          why: 'Incorreta. Participação em ação de saúde deve ser voluntária. Atrelá-la à avaliação transforma o cuidado em obrigação sob ameaça.' },
        { t: 'A ginástica laboral é medida suficiente para prevenir os transtornos musculoesqueléticos observados nos motoristas da empresa.', ok: false,
          why: 'Incorreta. Ela não altera tempo de direção, vibração, postura sentada prolongada nem pressão de meta.' },
        { t: 'Programas de promoção da saúde não devem ser adotados por empresas, por serem atribuição do sistema público.', ok: false,
          why: 'Incorreta. A promoção na empresa é legítima e útil, desde que voluntária e somada à intervenção sobre os determinantes.' }
      ],
      comentario: 'O modelo de ambientes de trabalho saudáveis tem quatro vias: ambiente físico, ambiente psicossocial, recursos pessoais de saúde e envolvimento com a comunidade. Programa que só mexe na terceira faz um quarto do trabalho e chama de completo.',
      pegadinha: 'A tese de que "os principais fatores de risco são comportamentais" é o que sustenta o wellness sem prevenção.',
      refs: ['OMS — Ambientes de trabalho saudáveis', 'Política Nacional de Promoção da Saúde'] },

    { enunciado: 'Sobre a jornada estendida dos motoristas e as metas elevadas, é CORRETO afirmar:',
      alts: [
        { t: 'São fatores de risco relevantes para acidentes e adoecimento e devem integrar o inventário de riscos e o plano de ação.', ok: true,
          why: 'Correta. Fadiga e distúrbios do sono são determinantes reconhecidos de acidente de trânsito ocupacional, e jornada e meta são os fatores organizacionais que os produzem.' },
        { t: 'Jornada de trabalho e metas de produtividade são matéria de natureza contratual e trabalhista e, por isso, não integram o gerenciamento de riscos ocupacionais da empresa.', ok: false,
          why: 'Incorreta. Fatores organizacionais são riscos ocupacionais e devem constar do inventário como qualquer outro perigo identificado.' },
        { t: 'Havendo acordo coletivo que autorize a extensão da jornada dos motoristas, não há risco ocupacional adicional a considerar no gerenciamento de riscos.', ok: false,
          why: 'Incorreta. Acordo coletivo pode tornar a jornada lícita, mas não elimina o efeito fisiológico da fadiga.' },
        { t: 'A fadiga do motorista é questão de responsabilidade individual, ligada a hábitos de sono e de vida, sem interface com a gestão.', ok: false,
          why: 'Incorreta. Jornada, escala, tempo de espera e pressão de entrega são decisões da gestão que determinam a fadiga.' },
        { t: 'Distúrbios do sono em motoristas profissionais não guardam relação com risco de acidente de trânsito.', ok: false,
          why: 'Incorreta. A associação entre apneia do sono e sonolência diurna e acidentes de trânsito está bem estabelecida.' }
      ],
      comentario: 'Jornada e meta não são só cláusula contratual: são exposição. Em transporte, fadiga e sonolência são determinantes diretos de acidente, o que coloca a organização do trabalho no centro do inventário de riscos.',
      pegadinha: 'Invocar o acordo coletivo para afastar o risco confunde legalidade com segurança.',
      refs: ['NR-1', 'NR-17', 'Ferreira Junior — Rastreamento de doenças'] },

    { enunciado: 'Sobre as recomendações do médico coordenador à direção, a conduta mais adequada é:',
      alts: [
        { t: 'Apresentar formalmente a análise conjunta dos indicadores e registrar por escrito a comunicação feita à direção.', ok: true,
          why: 'Correta. As recomendações incluem substituir a bonificação por incentivos a indicadores proativos, rever jornada, metas e pausas e restabelecer canal seguro de relato sem retaliação.' },
        { t: 'Elogiar os resultados de segurança alcançados no período e propor apenas a ampliação do programa de qualidade de vida para as demais filiais da transportadora.', ok: false,
          why: 'Incorreta. Validar indicadores provavelmente distorcidos e ampliar a ação que menos altera os determinantes é o pior encaminhamento possível.' },
        { t: 'Aguardar mais um ciclo completo de indicadores antes de fazer qualquer recomendação, de modo a confirmar se a tendência observada se mantém.', ok: false,
          why: 'Incorreta. O padrão já é consistente e há dano em curso. Esperar outro ciclo é um ano a mais de subnotificação.' },
        { t: 'Recomendar a contratação de auditoria externa adicional, por ser o instrumento que melhor reflete o desempenho real em segurança.', ok: false,
          why: 'Incorreta. A empresa já é certificada por auditoria externa, que não detectou o problema porque examina o sistema documental.' },
        { t: 'Encaminhar a análise apenas ao setor de recursos humanos, sem envolver a alta direção da empresa.', ok: false,
          why: 'Incorreta. As decisões sobre bonificação, jornada e metas são da alta direção, única instância capaz de mudá-las.' }
      ],
      comentario: 'A recomendação precisa alcançar quem decide sobre jornada e metas — a alta direção — e precisa ser formalizada por escrito. Documentar a comunicação é o que protege o médico e o trabalhador quando a recomendação é ignorada.',
      pegadinha: 'Pedir mais auditoria em vez de agir é a resposta que mantém a aparência de gestão sem mudar nada.',
      refs: ['OIT — Sistema de Gestão da SST', 'ICOH — Código internacional de ética', 'NR-1'] }
  ] },

{ id: 'caso-020',
  titulo: 'Sobrecarga térmica em corte de cana',
  temas: ['2.2', '2.7', '6.3', '6.4'],
  nivel: 'dificil',
  vinheta: 'Cortador de cana de 42 anos, remunerado por produção, no décimo dia de safra após período de entressafra sem atividade física regular, é encontrado pelos colegas confuso e agressivo no meio do talhão, às 14h de um dia com temperatura ambiente elevada e alta umidade. Apresenta pele quente e seca, taquicardia, taquipneia, temperatura axilar de 40,2 °C e rebaixamento progressivo do nível de consciência. Refere-se que ele vinha urinando pouco e escuro nos últimos dias e que havia recusado pausas para não perder produção. A frente de trabalho dispõe de água em galões plásticos deixados ao sol, sem local de sombra estruturado e sem regime formal de pausas. O ambulatório móvel está a 20 minutos. O médico do trabalho da usina é acionado por rádio.',
  questoes: [
    { enunciado: 'Sobre a hipótese diagnóstica e a conduta imediata, a alternativa CORRETA é:',
      alts: [
        { t: 'O quadro é de intermação, emergência médica, e a prioridade é o resfriamento imediato e agressivo iniciado no próprio local.', ok: true,
          why: 'Correta. A intermação se caracteriza por hipertermia com disfunção do sistema nervoso central. O resfriamento corre em paralelo ao suporte e ao transporte, porque o tempo de hipertermia determina o prognóstico.' },
        { t: 'Trata-se de exaustão pelo calor, quadro benigno e autolimitado, que se resolve apenas com repouso à sombra, afrouxamento das roupas e hidratação por via oral.', ok: false,
          why: 'Incorreta. Confusão mental e temperatura de quarenta graus e meio definem intermação, não exaustão pelo calor, que cursa sem alteração neurológica importante.' },
        { t: 'O resfriamento deve ser adiado até a chegada ao ambulatório da usina, para evitar arritmias cardíacas provocadas pelo resfriamento rápido em ambiente não monitorado.', ok: false,
          why: 'Incorreta. Cada minuto de hipertermia aumenta a mortalidade. O resfriamento começa no local, e o risco de adiá-lo é muito maior que o de iniciá-lo.' },
        { t: 'A pele quente e seca afasta o diagnóstico de intermação, que cursa sempre com sudorese profusa até o momento do colapso.', ok: false,
          why: 'Incorreta. A anidrose é achado clássico na intermação clássica, embora possa haver sudorese na forma de esforço.' },
        { t: 'Antitérmicos são a base do tratamento da hipertermia por sobrecarga térmica.', ok: false,
          why: 'Incorreta. Antitérmicos agem sobre o centro termorregulador em resposta a pirógenos e são inúteis na hipertermia por carga externa.' }
      ],
      comentario: 'Exaustão pelo calor: consciência preservada, manejo com repouso, sombra e hidratação. Intermação: disfunção do sistema nervoso central, emergência, resfriamento imediato no local. Antitérmico não funciona nessa hipertermia.',
      pegadinha: 'Adiar o resfriamento para o ambulatório é a conduta que mais custa vidas nesse quadro.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre os fatores que contribuíram para o evento, é CORRETO afirmar:',
      alts: [
        { t: 'Concorreram a remuneração por produção, a ausência de aclimatização, a falta de sombra e de pausas formais e a água aquecida ao sol.', ok: true,
          why: 'Correta. Todos são determinantes organizacionais e ambientais, e nenhum é falha individual do trabalhador. A remuneração por produção é o que torna a pausa economicamente punitiva.' },
        { t: 'A causa principal do evento foi a recusa do próprio trabalhador em interromper a atividade para fazer pausas, o que caracteriza ato inseguro de responsabilidade individual.', ok: false,
          why: 'Incorreta. Quem é pago por produção não recusa a pausa por descuido: ela custa dinheiro. O determinante é a forma de remuneração.' },
        { t: 'A aclimatização adquirida nas safras anteriores é permanente e não se perde durante o período de entressafra em que o trabalhador ficou afastado.', ok: false,
          why: 'Incorreta. A aclimatização se perde em cerca de uma a duas semanas sem exposição e precisa ser reconstruída progressivamente.' },
        { t: 'A umidade relativa elevada facilita a dissipação de calor pelo organismo e reduz o risco de sobrecarga térmica.', ok: false,
          why: 'Incorreta. É o oposto: a umidade alta impede a evaporação do suor, principal via de perda de calor em ambiente quente.' },
        { t: 'A temperatura ambiente isolada é suficiente para avaliar a sobrecarga térmica no campo.', ok: false,
          why: 'Incorreta. A avaliação considera calor radiante, umidade, velocidade do ar, taxa metabólica e vestimenta, e não apenas a temperatura do ar.' }
      ],
      comentario: 'Aclimatização se perde na entressafra — o retorno é o período de maior risco. Umidade alta piora, porque bloqueia a evaporação. E remuneração por produção é fator organizacional que inviabiliza pausa e hidratação.',
      pegadinha: 'Classificar como "recusa do trabalhador" transforma um determinante organizacional em falha moral individual.',
      refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre a queixa de urina escassa e escura nos dias anteriores, a interpretação CORRETA é:',
      alts: [
        { t: 'Sugere desidratação e possível rabdomiólise com repercussão renal, o que exige avaliação laboratorial dirigida.', ok: true,
          why: 'Correta. A rabdomiólise é complicação descrita em trabalho extenuante sob calor. Impõe hidratação cuidadosa e vigilância para lesão renal aguda, que pode instalar-se de forma silenciosa.' },
        { t: 'É achado irrelevante e próprio da rotina de quem trabalha ao ar livre sob sol forte, sem significado clínico que justifique investigação complementar.', ok: false,
          why: 'Incorreta. Oligúria com urina escura em trabalho extenuante sob calor é sinal de alerta para desidratação grave e para rabdomiólise.' },
        { t: 'Indica exclusivamente ingestão hídrica insuficiente nos dias anteriores, sem qualquer risco de repercussão sobre órgãos ou sistemas.', ok: false,
          why: 'Incorreta. A desidratação repetida sob esforço térmico está associada a lesão renal aguda e à nefropatia de causa não tradicional descrita em cortadores de cana.' },
        { t: 'A hidratação deve ser feita exclusivamente com água pura, em grande volume e de uma só vez, ao final da jornada.', ok: false,
          why: 'Incorreta. A reposição é fracionada ao longo da jornada, e a perda intensa de suor exige também reposição de eletrólitos.' },
        { t: 'A sede é indicador confiável da necessidade de hidratação nesse contexto de trabalho.', ok: false,
          why: 'Incorreta. A sede aparece quando já há déficit instalado, e por isso a ingestão deve ser programada, não guiada por ela.' }
      ],
      comentario: 'Oligúria e urina escura em trabalho sob calor são sinais de alarme, não rotina. Pensar em rabdomiólise e lesão renal. E a hidratação é programada e fracionada — a sede é sinal tardio e não serve de gatilho.',
      pegadinha: 'A alternativa da hidratação em grande volume de uma vez parece generosa e é perigosa.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre as medidas de controle a serem recomendadas para a frente de trabalho, a conduta CORRETA é:',
      alts: [
        { t: 'Instituir regime formal de trabalho e pausa em local sombreado e ventilado, com água fresca próxima e aclimatização progressiva.', ok: true,
          why: 'Correta. É indispensável rever também a remuneração por produção, que é o que inviabiliza na prática qualquer regime de pausas. A aclimatização se aplica ao início da safra e após afastamentos.' },
        { t: 'Orientar individualmente cada trabalhador sobre a importância de beber água com frequência e de fazer pausas durante a jornada, reforçando a mensagem em treinamentos periódicos.', ok: false,
          why: 'Incorreta. Orientação sem sombra, sem água próxima e com pagamento por produção não muda comportamento algum.' },
        { t: 'Fornecer vestimenta impermeável a toda a frente de trabalho, para proteção contra a radiação solar direta durante o corte.', ok: false,
          why: 'Incorreta. Vestimenta impermeável impede a evaporação do suor e agrava a sobrecarga térmica. O indicado é tecido leve, claro e permeável.' },
        { t: 'Substituir a avaliação de sobrecarga térmica por medição diária da temperatura do ar na frente de trabalho.', ok: false,
          why: 'Incorreta. A temperatura do ar isolada não representa a carga térmica, que depende também de umidade, radiação e esforço.' },
        { t: 'Concentrar toda a jornada no período da manhã, sem outras medidas, resolve integralmente o problema.', ok: false,
          why: 'Incorreta. Deslocar o horário ajuda, mas sem pausas, sombra, água e aclimatização a sobrecarga permanece.' }
      ],
      comentario: 'Calor se controla por engenharia e organização: sombra, ventilação, água fresca acessível, regime de pausas e aclimatização progressiva. E enquanto a remuneração premiar quem não para, nenhuma orientação individual funciona.',
      pegadinha: 'Vestimenta impermeável aparece como proteção solar e é exatamente o que bloqueia a principal via de dissipação de calor.',
      refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro', 'NR-31'] },

    { enunciado: 'Sobre as providências de registro e o retorno ao trabalho, é CORRETO afirmar:',
      alts: [
        { t: 'O evento caracteriza acidente do trabalho, com comunicação e notificação devidas, e o retorno exige avaliação clínica prévia.', ok: true,
          why: 'Correta. A avaliação deve dar atenção à função renal, e o retorno requer reaclimatização progressiva e, antes de tudo, a correção das condições da frente de trabalho.' },
        { t: 'Por decorrer de fenômeno climático natural, e não de um risco criado pela empresa, o evento não se caracteriza como acidente do trabalho para fins legais.', ok: false,
          why: 'Incorreta. O calor é agente ocupacional gerenciável, e o evento ocorreu no exercício do trabalho e por causa dele.' },
        { t: 'O retorno ao corte de cana pode ser imediato após a alta hospitalar, sem necessidade de reaclimatização progressiva.', ok: false,
          why: 'Incorreta. Quem teve intermação fica mais suscetível por semanas, e o retorno direto ao esforço pleno sob calor é de alto risco.' },
        { t: 'A notificação do agravo ao sistema de vigilância só é devida nos casos que evoluem para óbito.', ok: false,
          why: 'Incorreta. Acidente de trabalho grave é de notificação compulsória, e este exigiu internação em terapia intensiva.' },
        { t: 'Basta orientar o trabalhador a evitar a exposição ao sol, sem intervenção na frente de trabalho.', ok: false,
          why: 'Incorreta. Os demais cortadores seguem expostos às mesmas condições, e a resposta individual não previne o próximo caso.' }
      ],
      comentario: 'Sobrecarga térmica grave é acidente do trabalho: comunica e notifica. O retorno exige avaliar repercussão renal e reaclimatizar — e a frente de trabalho precisa mudar antes que o próximo trabalhador ocupe o mesmo lugar.',
      pegadinha: 'Atribuir o evento ao "clima" descola a exposição das condições de trabalho em que ela ocorreu.',
      refs: ['Lei nº 8.213/1991', 'SINAN — Ministério da Saúde', 'Guia de exposição ao calor a céu aberto — Fundacentro'] }
  ] }

);
