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
        { t: 'A deficiência de oxigênio por deslocamento é a explicação mais compatível, e sua principal característica é não produzir sinais de alerta perceptíveis, levando à perda de consciência em poucos instantes sem que a vítima consiga reagir.', ok: true,
          why: 'Correta. Atmosferas com oxigênio reduzido não têm odor nem irritação que sirvam de aviso; a incapacitação é rápida e silenciosa, o que explica os dois minutos até a perda de resposta.' },
        { t: 'A perda de consciência indica necessariamente intoxicação por gás tóxico, já que a asfixia simples não incapacita tão rapidamente.', ok: false,
          why: 'Errada. A medição não detectou gases tóxicos, e a deficiência de oxigênio incapacita com extrema rapidez.' },
        { t: 'O enxágue prévio com água elimina o risco atmosférico do tanque.', ok: false,
          why: 'Errada. Enxaguar não garante atmosfera respirável e pode inclusive gerar vapores ou consumir oxigênio, conforme o produto armazenado.' },
        { t: 'Como o tanque estava aberto na parte superior, a ventilação natural garante atmosfera segura.', ok: false,
          why: 'Errada. Abertura superior não assegura renovação do ar no fundo, onde gases mais densos se acumulam e o oxigênio pode estar reduzido.' },
        { t: 'A altura do tanque, por si, exclui a classificação como espaço confinado.', ok: false,
          why: 'Errada. A classificação decorre de meios limitados de entrada e saída, ventilação natural deficiente e não destinação à ocupação contínua — não do tamanho.' }
      ],
      comentario: 'Deficiência de oxigênio é a causa mais frequente de morte em espaço confinado e não dá aviso. Por isso a avaliação da atmosfera é PRÉVIA e obrigatória: não existe inspeção visual ou "cheiro" que substitua a medição.',
      pegadinha: 'A ideia de que abertura superior garante ventilação é a justificativa mais comum para dispensar a medição.',
      refs: ['NR-33', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre a conduta do segundo trabalhador, que desceu para socorrer o colega, é CORRETO afirmar:',
      alts: [
        { t: 'Reproduz o padrão descrito na literatura, em que parcela expressiva das mortes em espaço confinado ocorre entre socorristas improvisados; a primeira regra do atendimento é a segurança da cena, e o resgate exige equipe treinada com equipamento de adução de ar.', ok: true,
          why: 'Correta. Entrar em atmosfera não avaliada multiplica as vítimas em vez de salvar — daí a exigência de plano de resgate e de vigia que aciona, mas não entra.' },
        { t: 'A conduta foi correta, pois o socorro imediato é prioridade absoluta em qualquer emergência.', ok: false,
          why: 'Errada. Prioridade absoluta é a segurança da cena; sem ela o socorrista se torna a vítima seguinte.' },
        { t: 'O erro do segundo trabalhador foi não ter levado uma máscara semifacial com filtro químico.', ok: false,
          why: 'Errada. Purificadores de ar não protegem em atmosfera com deficiência de oxigênio nem com concentração desconhecida.' },
        { t: 'Se houvesse vigia designado, ele deveria ter descido para o resgate imediato.', ok: false,
          why: 'Errada. O vigia permanece do lado de fora e aciona o resgate; entrar é exatamente o que ele não pode fazer.' },
        { t: 'A rapidez do socorro compensa a ausência de avaliação da atmosfera.', ok: false,
          why: 'Errada. Nada compensa entrar sem saber o que há dentro.' }
      ],
      comentario: 'Espaço confinado mata em dupla. Guarde a sequência: avaliar a atmosfera antes, permissão de entrada, vigia permanente do lado de fora, plano de resgate e equipamento de adução de ar. O vigia aciona; não entra.',
      pegadinha: 'A alternativa que elogia o socorro imediato explora o instinto correto na situação errada.',
      refs: ['NR-33', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre as exigências normativas descumpridas neste caso, a alternativa CORRETA é:',
      alts: [
        { t: 'Faltaram avaliação prévia da atmosfera, permissão de entrada, vigia designado e plano de resgate, além de capacitação registrada da equipe — a existência de procedimento escrito não substitui treinamento nem a aplicação efetiva das medidas.', ok: true,
          why: 'Correta. Documento sem treinamento e sem aplicação é papel; as quatro exigências operacionais foram todas descumpridas.' },
        { t: 'A permissão de entrada é dispensável em serviços de curta duração.', ok: false,
          why: 'Errada. A duração curta não afasta o risco nem a exigência.' },
        { t: 'A existência de procedimento escrito, ainda que sem treinamento, satisfaz a exigência normativa.', ok: false,
          why: 'Errada. A capacitação dos envolvidos é exigência autônoma e essencial.' },
        { t: 'A avaliação da atmosfera pode ser feita após a entrada, com equipamento portátil levado pelo trabalhador.', ok: false,
          why: 'Errada. A avaliação é prévia; medir depois de entrar é medir com a vítima dentro.' },
        { t: 'O plano de resgate só é exigível em tanques com produtos inflamáveis.', ok: false,
          why: 'Errada. O plano de resgate é exigência do trabalho em espaço confinado, independentemente do produto.' }
      ],
      comentario: 'Quatro exigências operacionais em espaço confinado: atmosfera avaliada ANTES, permissão de entrada por escrito, vigia permanente FORA e plano de resgate. Some a capacitação registrada — sem ela, o procedimento escrito não protege ninguém.',
      pegadinha: 'A defesa de que "existe procedimento" é a mais comum após acidentes desse tipo e não sustenta nada sem treinamento e aplicação.',
      refs: ['NR-33', 'NR-1'] },

    { enunciado: 'Sobre a conduta médica no atendimento do segundo trabalhador, é CORRETO afirmar:',
      alts: [
        { t: 'A oxigenoterapia e o suporte às funções vitais são a base do atendimento na asfixia por deficiência de oxigênio, com monitorização e observação, pois pode haver lesão neurológica tardia mesmo após recuperação inicial do nível de consciência.', ok: true,
          why: 'Correta. Recuperação inicial não afasta a possibilidade de repercussão neurológica; monitorização e observação são necessárias.' },
        { t: 'Recuperado o nível de consciência, o trabalhador pode ser liberado imediatamente para casa sem observação.', ok: false,
          why: 'Errada. A liberação precoce ignora o risco de deterioração e de sequela tardia.' },
        { t: 'Está indicada a administração de antídoto específico para asfixiantes simples.', ok: false,
          why: 'Errada. Asfixiantes simples atuam por deslocamento do oxigênio e não possuem antídoto; o tratamento é oxigênio e suporte.' },
        { t: 'A ausência de gases tóxicos na medição dispensa qualquer investigação complementar no trabalhador.', ok: false,
          why: 'Errada. A avaliação clínica e a monitorização seguem indicadas independentemente do resultado da medição ambiental.' },
        { t: 'Por não haver lesão física aparente, não se caracteriza acidente do trabalho neste caso.', ok: false,
          why: 'Errada. Perturbação funcional decorrente do trabalho caracteriza acidente, independentemente de lesão externa.' }
      ],
      comentario: 'Asfixiante simples não tem antídoto: o tratamento é remover da atmosfera, oxigenar e dar suporte. Recuperação da consciência não encerra o caso — há risco de repercussão neurológica tardia, o que exige observação.',
      pegadinha: 'A busca por um antídoto específico é reflexo comum e não se aplica aos asfixiantes simples.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Buschinelli — Toxicologia Ocupacional'] },

    { enunciado: 'Sobre as providências institucionais após o evento, a conduta CORRETA é:',
      alts: [
        { t: 'Emitir a comunicação do acidente para ambos os trabalhadores, notificar o acidente grave e o fatal ao sistema de vigilância, comunicar às autoridades competentes e conduzir investigação que alcance as decisões organizacionais e gerenciais, não se limitando ao comportamento das vítimas.', ok: true,
          why: 'Correta. Acidente grave e fatal gera comunicação previdenciária, notificação sanitária, comunicação às autoridades e investigação em múltiplos níveis.' },
        { t: 'A investigação deve concluir por culpa exclusiva das vítimas, que descumpriram o procedimento existente.', ok: false,
          why: 'Errada. Ausência de treinamento, de permissão de entrada, de vigia e de medição são falhas do sistema, não das vítimas.' },
        { t: 'A investigação interna deve aguardar o encerramento do inquérito policial.', ok: false,
          why: 'Errada. A investigação tem finalidade preventiva e é imediata e independente das demais esferas.' },
        { t: 'Basta a comunicação do óbito, sendo dispensável a comunicação relativa ao trabalhador que sobreviveu.', ok: false,
          why: 'Errada. Ambos sofreram acidente do trabalho e ambos geram comunicação.' },
        { t: 'Como a empresa possui procedimento escrito, não há providências adicionais a adotar.', ok: false,
          why: 'Errada. O evento demonstra que o procedimento não estava implantado; a revisão do sistema é obrigatória.' }
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
        { t: 'O quadro corresponde a síndrome colinérgica por inibidor de colinesterase, e a prioridade é a descontaminação com remoção das roupas e lavagem da pele, proteção da via aérea e suporte ventilatório, e atropina em doses tituladas pelo controle das secreções brônquicas.', ok: true,
          why: 'Correta. O que mata na intoxicação colinérgica é a insuficiência respiratória por broncorreia e broncoespasmo; a atropina é titulada pelo controle das secreções, e não pela frequência cardíaca ou pelo tamanho da pupila.' },
        { t: 'Trata-se de intoxicação por piretroide, cuja manifestação típica é a síndrome colinérgica descrita.', ok: false,
          why: 'Errada. Piretroides causam sobretudo parestesias cutâneas e irritação, sem a síndrome colinérgica completa.' },
        { t: 'A atropina deve ser titulada pela reversão da miose, que é o parâmetro mais confiável de resposta.', ok: false,
          why: 'Errada. A miose pode persistir por absorção ocular direta; o parâmetro de titulação é a secreção brônquica.' },
        { t: 'A descontaminação da pele é dispensável quando a via de exposição foi respiratória.', ok: false,
          why: 'Errada. A aplicação com pulverizador costal sem proteção implica contaminação cutânea significativa, que mantém a absorção se não for removida.' },
        { t: 'O quadro é autolimitado e a observação clínica sem intervenção medicamentosa é suficiente.', ok: false,
          why: 'Errada e perigosa. A síndrome colinérgica grave evolui para insuficiência respiratória e morte sem tratamento.' }
      ],
      comentario: 'Síndrome colinérgica: miose, sialorreia, broncorreia, bradicardia, cólicas, fasciculações. Conduta: descontaminar (roupas e pele, com proteção da equipe), proteger a via aérea, atropina titulada pelas secreções e reativador de colinesterase conforme o agente.',
      pegadinha: 'Titular atropina pela miose é erro clássico — a pupila pode não responder por contato ocular direto.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

    { enunciado: 'Sobre a dúvida da equipe quanto ao trabalhador informal, é CORRETO afirmar:',
      alts: [
        { t: 'A política de saúde do trabalhador alcança todos os trabalhadores, com ou sem vínculo formal, e o reconhecimento da relação do agravo com o trabalho é obrigação do serviço de saúde independentemente de cobertura previdenciária.', ok: true,
          why: 'Correta. A universalidade é traço definidor da política; a ausência de vínculo formal limita direitos previdenciários, não o alcance da atenção e da vigilância em saúde.' },
        { t: 'Por ser informal, o caso não integra o escopo da saúde do trabalhador.', ok: false,
          why: 'Errada. É exatamente o trabalhador que está fora do sistema previdenciário que a política existe para alcançar.' },
        { t: 'O reconhecimento da relação com o trabalho depende de o trabalhador ser segurado.', ok: false,
          why: 'Errada. O reconhecimento sanitário independe da condição contributiva.' },
        { t: 'A conduta se esgota no tratamento clínico da intoxicação.', ok: false,
          why: 'Errada. Sem intervenção sobre a exposição e sem notificação, o caso se repete — como já ocorreu com os colegas.' },
        { t: 'A investigação do local de trabalho é vedada quando não há empregador formalmente constituído.', ok: false,
          why: 'Errada. A vigilância atua sobre ambientes e processos de trabalho, inclusive em atividades informais e familiares.' }
      ],
      comentario: 'Este é o caso que separa quem entendeu o campo. Sem carteira, sem CAT possível e sem benefício — e ainda assim objeto integral da política de saúde do trabalhador, com notificação, investigação do ambiente e intervenção sobre a exposição.',
      pegadinha: 'Confundir alcance da política de saúde com alcance da cobertura previdenciária é o erro estrutural do tema.',
      refs: ['Política Nacional de Saúde do Trabalhador e da Trabalhadora', 'Lei nº 8.080/1990'] },

    { enunciado: 'Sobre as providências de notificação e vigilância, a conduta CORRETA é:',
      alts: [
        { t: 'Notificar a intoxicação exógena relacionada ao trabalho, acionar a vigilância para investigação do local e das condições de aplicação, e considerar o relato dos três colegas como indicativo de casos não notificados que precisam ser buscados ativamente.', ok: true,
          why: 'Correta. A notificação dispara a vigilância, e o relato de casos anteriores caracteriza subnotificação que exige busca ativa no território.' },
        { t: 'A notificação só é devida após confirmação laboratorial da intoxicação.', ok: false,
          why: 'Errada. A notificação decorre da suspeita; aguardar confirmação atrasa a intervenção.' },
        { t: 'Por ter ocorrido em propriedade privada, a investigação do local depende de autorização do produtor.', ok: false,
          why: 'Errada. A vigilância em saúde do trabalhador é exercício de poder sanitário e não depende de autorização do responsável pelo estabelecimento.' },
        { t: 'Os casos anteriores relatados não devem ser investigados por não terem sido notificados à época.', ok: false,
          why: 'Errada. A ausência de notificação prévia é justamente o que torna a busca ativa necessária.' },
        { t: 'A notificação substitui a necessidade de intervenção sobre as condições de trabalho.', ok: false,
          why: 'Errada. A notificação é o gatilho da intervenção, não o seu substituto.' }
      ],
      comentario: 'Notificar por suspeita, acionar a vigilância e fazer busca ativa. Três colegas que "passaram mal e não procuraram o posto" é a descrição literal da subnotificação — e a razão de a vigilância existir.',
      pegadinha: 'Exigir confirmação laboratorial antes de notificar é o que trava a vigilância em intoxicações agudas.',
      refs: ['SINAN — Ministério da Saúde', 'Política Nacional de Saúde do Trabalhador e da Trabalhadora'] },

    { enunciado: 'Sobre a embalagem sem rótulo e as condições de aplicação relatadas, é CORRETO afirmar:',
      alts: [
        { t: 'A ausência de identificação do produto compromete o atendimento clínico e caracteriza falha grave de controle, devendo a investigação buscar identificar o agente junto ao responsável pela propriedade e verificar armazenamento, receituário, equipamento de aplicação e destinação de embalagens.', ok: true,
          why: 'Correta. Sem identificar o agente não há como orientar antídoto, monitoramento nem prevenção; e o conjunto descrito aponta falhas em toda a cadeia de uso do produto.' },
        { t: 'A identificação do produto é irrelevante, pois o tratamento da síndrome colinérgica é sempre o mesmo.', ok: false,
          why: 'Errada. A escolha e a duração do tratamento, inclusive do reativador de colinesterase, dependem do agente envolvido.' },
        { t: 'O calor do dia não influencia a absorção do produto pela pele.', ok: false,
          why: 'Errada. Calor e sudorese aumentam a absorção cutânea, além de desestimular o uso de proteção.' },
        { t: 'O pulverizador costal é equipamento de proteção e dispensa o uso de vestimenta e proteção respiratória.', ok: false,
          why: 'Errada. O pulverizador é equipamento de aplicação e aumenta a exposição do aplicador, que fica em contato direto com a névoa.' },
        { t: 'A ausência de receituário para o produto não tem repercussão sanitária.', ok: false,
          why: 'Errada. O controle da prescrição e da comercialização integra o marco sanitário desses produtos.' }
      ],
      comentario: 'Embalagem sem rótulo é achado sentinela: compromete o atendimento e denuncia falha em toda a cadeia — aquisição, armazenamento, aplicação e descarte. E lembre da fisiologia: calor e sudorese aumentam a absorção cutânea.',
      pegadinha: 'Chamar o pulverizador costal de proteção inverte completamente o papel do equipamento.',
      refs: ['Buschinelli — Toxicologia Ocupacional', 'NR-31', 'Lei nº 8.080/1990'] },

    { enunciado: 'Sobre o seguimento do trabalhador após a fase aguda, a conduta CORRETA é:',
      alts: [
        { t: 'Manter acompanhamento clínico e laboratorial, considerando a possibilidade de manifestações tardias e a necessidade de afastamento da exposição por período adequado à recuperação da atividade enzimática, com orientação sobre retorno seguro.', ok: true,
          why: 'Correta. Após a fase aguda pode haver manifestações tardias, e o retorno à exposição antes da recuperação enzimática expõe o trabalhador a intoxicação com doses menores.' },
        { t: 'Resolvida a fase aguda, o trabalhador pode retornar imediatamente à aplicação de defensivos.', ok: false,
          why: 'Errada. O retorno precoce à exposição, com a enzima ainda deprimida, é fator de risco para nova intoxicação.' },
        { t: 'Não há manifestações tardias descritas em intoxicações por inibidores de colinesterase.', ok: false,
          why: 'Errada. Há quadros de instalação tardia após a fase colinérgica aguda.' },
        { t: 'O acompanhamento deve ser interrompido caso o trabalhador não possua vínculo formal.', ok: false,
          why: 'Errada. O acompanhamento independe da forma de inserção no trabalho.' },
        { t: 'A prevenção de novos casos cabe exclusivamente ao trabalhador, que deve usar equipamento adequado.', ok: false,
          why: 'Errada. Transferir a prevenção ao trabalhador ignora armazenamento, identificação do produto, equipamento de aplicação e organização do trabalho.' }
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
        { t: 'A queda simultânea da taxa de frequência e dos relatos de quase-acidentes, associada ao aumento do absenteísmo e dos afastamentos, sugere fortemente subnotificação induzida pelo programa de bonificação, e não melhora real do desempenho em segurança.', ok: true,
          why: 'Correta. Premiar a ausência de registro cria incentivo direto a não registrar; a queda de quase-acidentes de 180 para 12 é o sinal mais eloquente, porque relatos deveriam aumentar em cultura madura.' },
        { t: 'Os resultados demonstram melhora consistente do sistema de gestão, comprovada pela certificação.', ok: false,
          why: 'Errada. Certificação atesta conformidade do sistema documentado, não desempenho real, e os demais indicadores apontam em sentido oposto.' },
        { t: 'A queda dos relatos de quase-acidentes indica que há menos desvios no processo.', ok: false,
          why: 'Errada, e é contraintuitivo: em cultura de segurança madura os relatos tendem a AUMENTAR, porque as pessoas confiam e relatam.' },
        { t: 'O aumento do absenteísmo é fenômeno independente e não guarda relação com os indicadores de segurança.', ok: false,
          why: 'Errada. Absenteísmo crescente com acidentes em queda é combinação clássica de deslocamento do problema, não de melhora.' },
        { t: '"Acidente zero" em quatro filiais é evidência suficiente de eficácia das medidas preventivas.', ok: false,
          why: 'Errada. Ausência de evento registrado pode refletir subnotificação, acaso ou baixa exposição no período.' }
      ],
      comentario: 'Leia os indicadores em conjunto e desconfie de melhora que só aparece nos números premiados. Queda de acidentes com queda de quase-acidentes e alta de afastamentos é assinatura de subnotificação.',
      pegadinha: 'A certificação aparece como selo de qualidade e mede conformidade documental, não segurança.',
      refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador', 'OIT — Sistema de Gestão da SST'] },

    { enunciado: 'Sobre o programa de bonificação por ausência de acidentes, a avaliação CORRETA é:',
      alts: [
        { t: 'Trata-se de indutor conhecido de subnotificação, devendo ser substituído por incentivos atrelados a indicadores proativos — inspeções realizadas, desvios corrigidos, relatos de quase-acidentes e cumprimento de plano de ação.', ok: true,
          why: 'Correta. Premiar o não registro corrompe o dado; premiar a ação preventiva alinha o incentivo ao objetivo.' },
        { t: 'É a forma mais confiável de conduzir o programa, por engajar diretamente as equipes.', ok: false,
          why: 'Errada. Engaja as equipes a esconder o evento, não a preveni-lo.' },
        { t: 'O problema do programa é apenas o valor do bônus, que deveria ser maior.', ok: false,
          why: 'Errada. O problema é o objeto premiado, não o valor.' },
        { t: 'A bonificação é neutra desde que acompanhada de treinamento em segurança.', ok: false,
          why: 'Errada. O incentivo contrário ao registro persiste independentemente do treinamento.' },
        { t: 'A subnotificação induzida por bonificação não tem repercussão previdenciária.', ok: false,
          why: 'Errada. Deixar de comunicar acidentes tem repercussão previdenciária e priva o trabalhador de direitos.' }
      ],
      comentario: 'Regra simples: nunca premie a ausência de registro. Premie a ação preventiva. Indicadores reativos servem para monitorar; indicadores proativos servem para incentivar.',
      pegadinha: 'Discutir o valor do bônus em vez do objeto premiado é o desvio que mantém o problema intacto.',
      refs: ['Zétola — Tratado de Gestão em Saúde do Trabalhador'] },

    { enunciado: 'Sobre o programa de qualidade de vida descrito, a análise CORRETA é:',
      alts: [
        { t: 'As ações de promoção têm valor, mas atuam apenas sobre recursos pessoais de saúde e não substituem a intervenção sobre os determinantes — jornada estendida e metas elevadas —, além de a vinculação da participação à avaliação de desempenho ser coercitiva e eticamente insustentável.', ok: true,
          why: 'Correta. O modelo de ambientes saudáveis tem quatro vias, e o programa cobre apenas uma; vincular hábitos de vida ao desempenho é coerção.' },
        { t: 'O programa é adequado, pois atua sobre os principais fatores de risco, que são comportamentais.', ok: false,
          why: 'Errada. Atribuir o adoecimento predominantemente ao comportamento individual ignora exposição e organização do trabalho.' },
        { t: 'Vincular a participação à avaliação de desempenho é boa prática de engajamento.', ok: false,
          why: 'Errada. É coercitivo e transforma escolha de vida em critério de avaliação profissional.' },
        { t: 'Ginástica laboral é medida suficiente para prevenir os transtornos musculoesqueléticos observados.', ok: false,
          why: 'Errada. Sem alterar jornada, metas e pausas, o efeito preventivo é limitado.' },
        { t: 'Programas de promoção não devem ser adotados por empresas, por serem atribuição do sistema público.', ok: false,
          why: 'Errada. O ambiente de trabalho é espaço legítimo de promoção — o problema é usá-lo como substituto do controle de risco.' }
      ],
      comentario: 'O modelo de ambientes de trabalho saudáveis tem quatro vias: ambiente físico, ambiente psicossocial, recursos pessoais de saúde e envolvimento com a comunidade. Programa que só mexe na terceira faz um quarto do trabalho e chama de completo.',
      pegadinha: 'A tese de que "os principais fatores de risco são comportamentais" é o que sustenta o wellness sem prevenção.',
      refs: ['OMS — Ambientes de trabalho saudáveis', 'Política Nacional de Promoção da Saúde'] },

    { enunciado: 'Sobre a jornada estendida dos motoristas e as metas elevadas, é CORRETO afirmar:',
      alts: [
        { t: 'Constituem fatores de risco relevantes para acidentes e para adoecimento musculoesquelético e mental, devendo integrar o inventário de riscos e o plano de ação, com atenção à fadiga e aos distúrbios do sono como determinantes de acidente de trânsito ocupacional.', ok: true,
          why: 'Correta. Fadiga e privação de sono são determinantes reconhecidos de acidentes na condução profissional, e organização do trabalho é risco ocupacional que entra no inventário.' },
        { t: 'Jornada e metas são matéria contratual e não integram o gerenciamento de riscos ocupacionais.', ok: false,
          why: 'Errada. Organização do trabalho é fator de risco e integra o gerenciamento.' },
        { t: 'Havendo acordo coletivo autorizando a extensão da jornada, não há risco ocupacional a considerar.', ok: false,
          why: 'Errada. Validade jurídica do acordo não elimina o efeito fisiológico da jornada sobre fadiga e sono.' },
        { t: 'A fadiga do motorista é questão de responsabilidade individual, sem interface com a gestão.', ok: false,
          why: 'Errada. Jornada, escala, metas e possibilidade de pausa são decisões de gestão.' },
        { t: 'Distúrbios do sono em motoristas não guardam relação com risco de acidente.', ok: false,
          why: 'Errada. A associação entre sonolência e acidente na condução profissional é bem documentada.' }
      ],
      comentario: 'Jornada e meta não são só cláusula contratual: são exposição. Em transporte, fadiga e sonolência são determinantes diretos de acidente, o que coloca a organização do trabalho no centro do inventário de riscos.',
      pegadinha: 'Invocar o acordo coletivo para afastar o risco confunde legalidade com segurança.',
      refs: ['NR-1', 'NR-17', 'Ferreira Junior — Rastreamento de doenças'] },

    { enunciado: 'Sobre as recomendações do médico coordenador à direção, a conduta mais adequada é:',
      alts: [
        { t: 'Apresentar formalmente a análise conjunta dos indicadores, recomendar a substituição da bonificação por incentivos a indicadores proativos, propor revisão de jornada, metas e pausas, restabelecer canal seguro de relato e registrar por escrito a comunicação à direção.', ok: true,
          why: 'Correta. A intervenção alcança o incentivo perverso, o determinante organizacional e o canal de informação — e o registro formal documenta a atuação do médico.' },
        { t: 'Elogiar os resultados de segurança e propor apenas ampliação do programa de qualidade de vida.', ok: false,
          why: 'Errada. Os resultados de segurança são provavelmente artefato de subnotificação.' },
        { t: 'Aguardar mais um ciclo de indicadores antes de qualquer recomendação, para confirmar a tendência.', ok: false,
          why: 'Errada. A convergência dos sinais já é suficiente; aguardar é omissão diante de risco identificado.' },
        { t: 'Recomendar auditoria externa adicional, por ser o instrumento que mais reflete o desempenho real.', ok: false,
          why: 'Errada. A auditoria já foi favorável e não capturou o problema; o que falta é agir sobre incentivos e determinantes.' },
        { t: 'Encaminhar a análise apenas ao setor de recursos humanos, sem envolver a alta direção.', ok: false,
          why: 'Errada. Comprometimento da alta direção é requisito do sistema de gestão, e as decisões sobre jornada e metas são dela.' }
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
        { t: 'O quadro é de intermação, emergência médica caracterizada por hipertermia com disfunção do sistema nervoso central, e a prioridade é o resfriamento imediato e agressivo iniciado no local, simultaneamente ao suporte e ao transporte, pois o tempo de hipertermia determina o prognóstico.', ok: true,
          why: 'Correta. Alteração do nível de consciência com hipertermia define a forma grave; o resfriamento começa no local — retirar do sol, remover vestimenta, molhar e ventilar — e não deve aguardar o transporte.' },
        { t: 'Trata-se de exaustão pelo calor, quadro benigno que se resolve com repouso à sombra e hidratação oral.', ok: false,
          why: 'Errada. A alteração do nível de consciência é o que distingue a forma grave da exaustão pelo calor, e o manejo é de emergência.' },
        { t: 'O resfriamento deve ser adiado até a chegada ao ambulatório, para evitar arritmias por resfriamento rápido.', ok: false,
          why: 'Errada. O retardo do resfriamento piora o prognóstico; o resfriamento precoce é a intervenção que mais reduz mortalidade.' },
        { t: 'A pele quente e seca exclui o diagnóstico de intermação, que cursa sempre com sudorese profusa.', ok: false,
          why: 'Errada. A ausência de sudorese pode ocorrer na forma clássica e não exclui o diagnóstico; sua presença também não o afasta.' },
        { t: 'Antitérmicos são a base do tratamento da hipertermia por sobrecarga térmica.', ok: false,
          why: 'Errada. Antitérmicos atuam sobre o ponto de ajuste hipotalâmico e não são eficazes na hipertermia por sobrecarga externa.' }
      ],
      comentario: 'Exaustão pelo calor: consciência preservada, manejo com repouso, sombra e hidratação. Intermação: disfunção do sistema nervoso central, emergência, resfriamento imediato no local. Antitérmico não funciona nessa hipertermia.',
      pegadinha: 'Adiar o resfriamento para o ambulatório é a conduta que mais custa vidas nesse quadro.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre os fatores que contribuíram para o evento, é CORRETO afirmar:',
      alts: [
        { t: 'Concorreram a remuneração por produção, que desestimula pausas, a ausência de aclimatização após a entressafra, a falta de sombra e de regime formal de pausas e a água aquecida ao sol — todos determinantes organizacionais e ambientais, e não falhas individuais.', ok: true,
          why: 'Correta. O conjunto descreve um sistema que empurra o trabalhador a não pausar e não hidratar; a "recusa de pausas" é consequência do modelo de remuneração, não escolha livre.' },
        { t: 'A causa principal foi a recusa do trabalhador em fazer pausas, caracterizando ato inseguro individual.', ok: false,
          why: 'Errada. Parar a análise na recusa ignora que a remuneração por produção torna a pausa financeiramente custosa para o trabalhador.' },
        { t: 'A aclimatização adquirida em safras anteriores é permanente e não se perde na entressafra.', ok: false,
          why: 'Errada. A aclimatização se perde em poucos dias a semanas de afastamento, e o retorno exige readaptação progressiva.' },
        { t: 'A umidade elevada facilita a dissipação de calor e reduz o risco.', ok: false,
          why: 'Errada, e inverte a fisiologia: a umidade alta dificulta a evaporação do suor, que é a principal via de dissipação.' },
        { t: 'A temperatura ambiente isolada é suficiente para avaliar a sobrecarga térmica.', ok: false,
          why: 'Errada. A avaliação combina temperatura, umidade, radiação térmica e velocidade do ar, lidos junto à taxa metabólica da atividade.' }
      ],
      comentario: 'Aclimatização se perde na entressafra — o retorno é o período de maior risco. Umidade alta piora, porque bloqueia a evaporação. E remuneração por produção é fator organizacional que inviabiliza pausa e hidratação.',
      pegadinha: 'Classificar como "recusa do trabalhador" transforma um determinante organizacional em falha moral individual.',
      refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre a queixa de urina escassa e escura nos dias anteriores, a interpretação CORRETA é:',
      alts: [
        { t: 'Sugere desidratação e possível rabdomiólise com repercussão renal, complicação descrita em trabalho extenuante sob calor, o que exige avaliação laboratorial dirigida e hidratação cuidadosa, além de vigilância para lesão renal aguda.', ok: true,
          why: 'Correta. Esforço intenso, calor e desidratação repetida compõem o cenário de rabdomiólise e nefropatia associada ao trabalho sob calor.' },
        { t: 'É achado irrelevante, próprio da rotina de quem trabalha ao ar livre.', ok: false,
          why: 'Errada. Normalizar oligúria e urina escura em trabalhador sob calor é ignorar sinal de alarme.' },
        { t: 'Indica exclusivamente ingestão hídrica insuficiente, sem risco de repercussão orgânica.', ok: false,
          why: 'Errada. A desidratação repetida sob esforço tem repercussão renal e muscular documentada.' },
        { t: 'A hidratação deve ser feita exclusivamente com água pura, em grande volume e de uma só vez.', ok: false,
          why: 'Errada. A reposição deve ser fracionada e programada; volumes grandes de água pura de uma vez podem gerar distúrbio eletrolítico.' },
        { t: 'A sede é indicador confiável de necessidade de hidratação nesse contexto.', ok: false,
          why: 'Errada. A sede é sinal tardio: quando aparece, já há déficit hídrico.' }
      ],
      comentario: 'Oligúria e urina escura em trabalho sob calor são sinais de alarme, não rotina. Pensar em rabdomiólise e lesão renal. E a hidratação é programada e fracionada — a sede é sinal tardio e não serve de gatilho.',
      pegadinha: 'A alternativa da hidratação em grande volume de uma vez parece generosa e é perigosa.',
      refs: ['Greenberg — Occupational Emergency Medicine', 'Guia de exposição ao calor a céu aberto — Fundacentro'] },

    { enunciado: 'Sobre as medidas de controle a serem recomendadas para a frente de trabalho, a conduta CORRETA é:',
      alts: [
        { t: 'Instituir regime formal de trabalho e pausa em local sombreado e ventilado, disponibilizar água fresca em pontos próximos e protegidos do sol, implantar programa de aclimatização progressiva no início da safra e após afastamentos, e rever a remuneração por produção como fator que inviabiliza as pausas.', ok: true,
          why: 'Correta. O conjunto ataca os determinantes reais: exposição, hidratação, adaptação fisiológica e o incentivo econômico que impede o trabalhador de se proteger.' },
        { t: 'Orientar individualmente cada trabalhador sobre a importância de beber água e fazer pausas.', ok: false,
          why: 'Errada. Orientação sem alterar as condições e o incentivo econômico tem efeito limitado.' },
        { t: 'Fornecer vestimenta impermeável para proteção contra a radiação solar direta.', ok: false,
          why: 'Errada, e é perigosa: vestimenta impermeável impede a evaporação do suor e aumenta a sobrecarga térmica.' },
        { t: 'Substituir a avaliação da sobrecarga térmica por medição diária da temperatura do ar.', ok: false,
          why: 'Errada. A temperatura do ar isolada não representa a sobrecarga térmica.' },
        { t: 'Concentrar toda a jornada no período da manhã, sem outras medidas, resolve integralmente o problema.', ok: false,
          why: 'Errada. Reorganizar horários é medida útil, mas isolada não resolve hidratação, aclimatização, sombra e regime de pausas.' }
      ],
      comentario: 'Calor se controla por engenharia e organização: sombra, ventilação, água fresca acessível, regime de pausas e aclimatização progressiva. E enquanto a remuneração premiar quem não para, nenhuma orientação individual funciona.',
      pegadinha: 'Vestimenta impermeável aparece como proteção solar e é exatamente o que bloqueia a principal via de dissipação de calor.',
      refs: ['NHO 06 — Fundacentro', 'Guia de exposição ao calor a céu aberto — Fundacentro', 'NR-31'] },

    { enunciado: 'Sobre as providências de registro e o retorno ao trabalho, é CORRETO afirmar:',
      alts: [
        { t: 'O evento caracteriza acidente do trabalho, com comunicação e notificação devidas, e o retorno deve ser precedido de avaliação clínica com atenção à função renal e de reaclimatização progressiva, além da correção das condições da frente de trabalho.', ok: true,
          why: 'Correta. Trata-se de agravo decorrente do trabalho, com registros devidos; e o retorno exige avaliar sequelas e reaclimatizar, além de mudar as condições que produziram o evento.' },
        { t: 'Por se tratar de fenômeno climático, não se caracteriza acidente do trabalho.', ok: false,
          why: 'Errada. A exposição ocorreu em razão do trabalho e nas condições em que ele é executado.' },
        { t: 'O retorno pode ser imediato após a alta, sem necessidade de reaclimatização.', ok: false,
          why: 'Errada. Após afastamento, a tolerância ao calor está reduzida e o retorno exige readaptação progressiva.' },
        { t: 'A notificação só é devida em caso de óbito.', ok: false,
          why: 'Errada. Agravos graves relacionados ao trabalho são notificáveis independentemente do desfecho.' },
        { t: 'Basta orientar o trabalhador a evitar exposição ao sol, sem intervenção na frente de trabalho.', ok: false,
          why: 'Errada. Sem correção das condições coletivas, os demais trabalhadores permanecem expostos ao mesmo risco.' }
      ],
      comentario: 'Sobrecarga térmica grave é acidente do trabalho: comunica e notifica. O retorno exige avaliar repercussão renal e reaclimatizar — e a frente de trabalho precisa mudar antes que o próximo trabalhador ocupe o mesmo lugar.',
      pegadinha: 'Atribuir o evento ao "clima" descola a exposição das condições de trabalho em que ela ocorreu.',
      refs: ['Lei nº 8.213/1991', 'SINAN — Ministério da Saúde', 'Guia de exposição ao calor a céu aberto — Fundacentro'] }
  ] }

);
