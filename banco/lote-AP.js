/* Lote AP — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-130', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o efeito do ruído sobre desfechos não auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'Associa-se a alterações do sono, elevação da pressão e prejuízo à comunicação e aos alertas.', ok: true,
      why: 'Correta. Os efeitos extra-auditivos aparecem antes do dano coclear.' },
    { t: 'Associa-se a perda auditiva, sem produzir efeitos relevantes abaixo do nível que a provoca.', ok: false,
      why: 'Errada. Efeitos extra-auditivos ocorrem em níveis inferiores.' },
    { t: 'Associa-se a alterações do sono, sem que o prejuízo à comunicação repercuta em segurança.', ok: false,
      why: 'Errada. Compromete alertas, instruções e percepção de sinais de perigo.' },
    { t: 'Associa-se a elevação da pressão, ocorrendo as alterações do sono apenas em exposição residencial.', ok: false,
      why: 'Errada. Trabalhadores de turnos expostos a ruído também as apresentam.' },
    { t: 'Associa-se a efeitos extra-auditivos, que justificam apenas medidas de conforto no ambiente.', ok: false,
      why: 'Errada. São efeitos de saúde e integram a justificativa para o controle do ruído.' }
  ],
  comentario: 'Ruído não faz só perda auditiva: sono, pressão arterial, irritabilidade e comunicação são afetados em níveis mais baixos. E comunicação prejudicada é problema de segurança, não de conforto.',
  pegadinha: 'Usar o limite de proteção auditiva como fronteira do risco ignora tudo o que acontece abaixo dele.',
  refs: ['OMS — ruído e saúde', 'NR-17', 'NHO 01 — Fundacentro'] },

{ id: 'q-2.2-131', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o controle de ruído na fonte e na trajetória, é CORRETO afirmar:',
  alts: [
    { t: 'Substituição, manutenção, amortecimento e enclausuramento atuam antes de o ruído chegar ao trabalhador', ok: true,
      why: 'Correta. Controle na fonte protege também quem não está usando protetor.' },
    { t: 'A proteção individual, quando fornecida a todos, protege o conjunto dos trabalhadores do setor.', ok: false,
      why: 'Errada. Protege apenas quem a usa corretamente.' },
    { t: 'Substituição e enclausuramento reduzem o ruído, sem que a manutenção influencie o nível gerado.', ok: false,
      why: 'Errada. Desgaste, folga e falta de lubrificação elevam significativamente o ruído.' },
    { t: 'Substituição e manutenção reduzem o ruído, não produzindo o enclausuramento parcial redução relevante.', ok: false,
      why: 'Errada. Produz redução mensurável, ainda que menor que o completo.' },
    { t: 'Substituição e manutenção atuam na fonte, não sendo o tratamento acústico controle na trajetória.', ok: false,
      why: 'Errada. Absorção e barreiras atuam justamente na trajetória entre fonte e receptor.' }
  ],
  comentario: 'Fonte e trajetória: substituir, manter, amortecer, enclausurar, tratar acusticamente. Tudo isso protege quem não colocou o protetor — a proteção individual só alcança quem a usa bem.',
  pegadinha: 'Manutenção adiada é aumento de ruído que ninguém contabiliza como piora da exposição.',
  refs: ['NR-1', 'NHO 01 — Fundacentro', 'ACGIH'] },

{ id: 'q-2.3-130', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a cádmio, é CORRETO afirmar:',
  alts: [
    { t: 'É cancerígeno com toxicidade renal e óssea, detectável a lesão tubular por marcadores precoces.', ok: true,
      why: 'Correta. O rim é o alvo crítico e há marcadores disponíveis antes da clínica.' },
    { t: 'É cancerígeno com toxicidade óssea, sem apresentar toxicidade renal relevante nos expostos.', ok: false,
      why: 'Errada. O túbulo renal é o alvo crítico da exposição crônica.' },
    { t: 'É cancerígeno usado em baterias e pigmentos, não sendo a soldagem de revestidos fonte de exposição.', ok: false,
      why: 'Errada. Revestimentos com cádmio geram fumos na soldagem e no corte.' },
    { t: 'É cancerígeno com toxicidade renal, sem marcadores de lesão renal precoce aplicáveis à vigilância.', ok: false,
      why: 'Errada. Há marcadores de disfunção tubular usados nesse acompanhamento.' },
    { t: 'É cancerígeno com toxicidade renal, integralmente reversível com o afastamento da exposição.', ok: false,
      why: 'Errada. A disfunção tubular instalada tende a ser persistente.' }
  ],
  comentario: 'Cádmio: cancerígeno, com rim e osso como alvos. Baterias, ligas, pigmentos e soldagem de revestido são as fontes. Marcadores de disfunção tubular detectam antes do sintoma — e a lesão instalada não regride.',
  pegadinha: 'Esperar manifestação clínica renal dispensa o marcador que existe justamente para agir antes.',
  refs: ['IARC', 'ACGIH — BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.4-130', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o descarte e o manuseio de perfurocortantes em serviços de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser imediato, no ponto de uso, em recipiente rígido e devidamente posicionado no local', ok: true,
      why: 'Correta. Recipiente longe do leito produz transporte de agulha, e é aí que o acidente ocorre.' },
    { t: 'Deve ser feito em recipiente rígido, ao término do conjunto de procedimentos realizados no leito.', ok: false,
      why: 'Errada. O acúmulo e o transporte do material aumentam o risco.' },
    { t: 'Deve ser imediato em recipiente rígido, sem que a posição dele influencie a ocorrência de acidentes.', ok: false,
      why: 'Errada. Distância e altura inadequadas são fatores de risco documentados.' },
    { t: 'Deve ser imediato, sendo a subnotificação desses acidentes irrelevante para a gestão do risco.', ok: false,
      why: 'Errada. Impede a profilaxia oportuna e distorce o dimensionamento do problema.' },
    { t: 'Deve ser imediato, dispensando capacitação os dispositivos com mecanismo de segurança embutido.', ok: false,
      why: 'Errada. O acionamento incorreto anula o benefício do dispositivo.' }
  ],
  comentario: 'Descarte imediato, no ponto de uso, em recipiente bem posicionado — porque o acidente ocorre no percurso entre o procedimento e a caixa. Dispositivo de segurança exige treino, e subnotificar impede a profilaxia.',
  pegadinha: 'Recipiente instalado longe do leito por questão de layout produz exatamente o transporte que se quer evitar.',
  refs: ['NR-32', 'Protocolos de prevenção de acidentes com perfurocortantes'] },

{ id: 'q-2.6-130', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os limites de exposição para agentes com efeito sensibilizante, é CORRETO afirmar:',
  alts: [
    { t: 'Indica indução de resposta imunológica, e o limite não protege quem já se sensibilizou', ok: true,
      why: 'Correta. O sensibilizado pode reagir a concentrações muito abaixo do valor tabelado.' },
    { t: 'Indica risco de resposta imunológica, protegendo o limite igualmente sensibilizados e não sensibilizados.', ok: false,
      why: 'Errada. O sensibilizado pode reagir muito abaixo do limite.' },
    { t: 'Indica apenas potencial irritativo do agente sobre pele e mucosas dos trabalhadores expostos.', ok: false,
      why: 'Errada. Indica indução de resposta imunológica específica.' },
    { t: 'Indica resposta imunológica, podendo o sensibilizado permanecer exposto com proteção individual.', ok: false,
      why: 'Errada. O afastamento do agente é a conduta que muda o prognóstico.' },
    { t: 'Indica resposta imunológica, perdendo-se a sensibilização com o tempo e permitindo o retorno.', ok: false,
      why: 'Errada. Tende a persistir, e a reexposição reativa o quadro.' }
  ],
  comentario: 'Notação de sensibilizante avisa: o limite protege a maioria e não protege quem já sensibilizou. Para esse trabalhador, a medida é afastar do agente — a sensibilização não se perde com o tempo.',
  pegadinha: 'Manter o sensibilizado no setor porque a medição está conforme é decidir pela média contra o indivíduo.',
  refs: ['ACGIH — notação SEN', 'Diretrizes de asma ocupacional'] },

{ id: 'q-2.7-110', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a aplicação dos procedimentos técnicos padronizados na avaliação de exposição a poeiras, é CORRETO afirmar:',
  alts: [
    { t: 'Usa seletor de fração, e a gravimetria exige controle de umidade e amostras de branco.', ok: true,
      why: 'Correta. Em massa pequena, umidade e contaminação do filtro dominam o resultado.' },
    { t: 'Usa filtro apropriado, dispensando a amostragem de poeira dispositivo seletor de fração.', ok: false,
      why: 'Errada. A fração de interesse define o efeito e exige seletor apropriado.' },
    { t: 'Usa seletor de fração, não sendo necessárias amostras de branco na análise gravimétrica.', ok: false,
      why: 'Errada. Corrigem variações do filtro e da manipulação.' },
    { t: 'Usa seletor de fração, sendo irrelevante o controle de umidade dos filtros para o resultado.', ok: false,
      why: 'Errada. Interfere diretamente na pesagem, sobretudo em massas pequenas.' },
    { t: 'Usa seletor e gravimetria, sem necessidade de verificar a vazão da bomba após a amostragem.', ok: false,
      why: 'Errada. A verificação pós-amostragem valida o volume amostrado.' }
  ],
  comentario: 'Poeira: seletor de fração, filtro com umidade controlada, amostras de branco e vazão verificada antes e depois. Em concentração baixa, é o método que decide se o número significa alguma coisa.',
  pegadinha: 'Sem branco e sem controle de umidade, a massa pesada pode ser mais filtro que poeira.',
  refs: ['NHO 08 — Fundacentro', 'ACGIH'] },

{ id: 'q-2.9-130', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional a hidrocarbonetos aromáticos policíclicos, é CORRETO afirmar:',
  alts: [
    { t: 'Estão em fumos de asfalto e em fuligem, são cancerígenos e absorvidos também pela pele', ok: true,
      why: 'Correta. A via cutânea muda as medidas: higiene e troca de vestimenta entram no controle.' },
    { t: 'Estão em fumos de asfalto e fuligem, com exposição ocorrendo exclusivamente por via respiratória.', ok: false,
      why: 'Errada. A absorção cutânea é relevante e frequentemente subestimada.' },
    { t: 'Estão em fumos de asfalto e coquerias, sem potencial carcinogênico reconhecido para esse grupo.', ok: false,
      why: 'Errada. Há associação estabelecida com cânceres de pele e outros sítios.' },
    { t: 'Estão em fumos e fuligem e são cancerígenos, sem que higiene e troca de roupa alterem a dose.', ok: false,
      why: 'Errada. São medidas diretamente ligadas à via cutânea de absorção.' },
    { t: 'Estão em coquerias e produtos de combustão, não integrando a pavimentação asfáltica os expostos.', ok: false,
      why: 'Errada. São grupo classicamente exposto por fumos de asfalto.' }
  ],
  comentario: 'Hidrocarbonetos aromáticos policíclicos: asfalto, fuligem, coqueria, combustão incompleta. Cancerígenos e absorvidos pela pele — por isso vestiário, banho e troca de roupa entram como medida de controle, não como conforto.',
  pegadinha: 'Focar só na proteção respiratória deixa aberta a via cutânea, que nesses agentes é significativa.',
  refs: ['IARC', 'ACGIH — notação Skin', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.5-110', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a reavaliação periódica dos riscos identificados no inventário, é CORRETO afirmar:',
  alts: [
    { t: 'Além da periodicidade, mudança de processo, novo agente, acidente e inadequação disparam revisão.', ok: true,
      why: 'Correta. Os gatilhos por evento é que mantêm o inventário aderente à realidade.' },
    { t: 'Deve ocorrer na periodicidade máxima prevista, que assegura a atualização regular do inventário.', ok: false,
      why: 'Errada. Há gatilhos por evento que antecipam a revisão.' },
    { t: 'Além da periodicidade, mudança de processo dispara revisão, não constituindo o acidente gatilho.', ok: false,
      why: 'Errada. É um dos gatilhos expressos de revisão.' },
    { t: 'Além da periodicidade, dispensa-se a revisão ao introduzir novo produto se o processo é o mesmo.', ok: false,
      why: 'Errada. Novo agente significa novo risco a inventariar.' },
    { t: 'Além da periodicidade, a inadequação das medidas é assunto do plano de ação, sem tocar o inventário.', ok: false,
      why: 'Errada. Repercute na avaliação do risco residual e, portanto, no inventário.' }
  ],
  comentario: 'O inventário se revisa por calendário e por evento: mudança de processo, agente novo, acidente, doença relacionada ao trabalho, inadequação identificada. Esperar o prazo máximo mantém o documento em dia e desatualizado.',
  pegadinha: 'Acidente ocorrido e inventário não revisado é a combinação que reaparece na investigação do próximo evento.',
  refs: ['NR-1 — gerenciamento de riscos ocupacionais'] },

{ id: 'q-2.8-110', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre respiradores purificadores de ar motorizados, é CORRETO afirmar:',
  alts: [
    { t: 'Fornecem ar filtrado sob pressão positiva, sendo alternativa quando a vedação é inviável.', ok: true,
      why: 'Correta. Resolve casos de barba ou características faciais que impedem a vedação.' },
    { t: 'Fornecem ar filtrado, impondo carga respiratória maior que a dos respiradores não motorizados.', ok: false,
      why: 'Errada. A pressão positiva reduz o esforço respiratório.' },
    { t: 'Fornecem ar sob pressão positiva, sem constituir alternativa a quem não obtém vedação facial.', ok: false,
      why: 'Errada. São a alternativa nesses casos, em versões com capuz ou capacete.' },
    { t: 'Fornecem ar filtrado sob pressão positiva, dispensando manutenção e verificação de fluxo.', ok: false,
      why: 'Errada. Verificação do fluxo e manutenção de bateria e filtros são essenciais.' },
    { t: 'Fornecem ar filtrado sob pressão positiva, podendo ser usados em atmosferas com pouco oxigênio.', ok: false,
      why: 'Errada. Purificam o ar existente e não suprem oxigênio.' }
  ],
  comentario: 'Motorizado: pressão positiva, menos esforço respiratório, e alternativa real para quem não veda — inclusive com barba. Continua purificador, então não serve em deficiência de oxigênio, e exige verificação de fluxo.',
  pegadinha: 'Purificador motorizado é ainda purificador: não cria oxigênio nem serve em atmosfera imediatamente perigosa.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
