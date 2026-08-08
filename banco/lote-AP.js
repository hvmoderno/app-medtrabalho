/* Lote AP — 2.2, 2.3, 2.4, 2.6, 2.7, 2.9, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.2-130', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o efeito do ruído sobre desfechos não auditivos, é CORRETO afirmar:',
  alts: [
    { t: 'A exposição a ruído associa-se a alterações do sono, elevação da pressão arterial, irritabilidade e prejuízo à comunicação e à percepção de sinais de alerta — efeitos que ocorrem em níveis abaixo dos que produzem perda auditiva.', ok: true,
      why: 'Correta. Os efeitos extra-auditivos aparecem antes do dano coclear.' },
    { t: 'Abaixo do nível que causa perda auditiva, o ruído não produz efeitos relevantes.', ok: false,
      why: 'Errada. Efeitos extra-auditivos ocorrem em níveis inferiores.' },
    { t: 'O prejuízo à comunicação no ambiente ruidoso não repercute em segurança.', ok: false,
      why: 'Errada. Compromete alertas, instruções e percepção de sinais de perigo.' },
    { t: 'Alterações do sono por ruído ocorrem apenas em exposição residencial.', ok: false,
      why: 'Errada. Trabalhadores de turnos expostos a ruído também as apresentam.' },
    { t: 'Os efeitos extra-auditivos justificam apenas medidas de conforto.', ok: false,
      why: 'Errada. São efeitos de saúde e integram a justificativa para o controle do ruído.' }
  ],
  comentario: 'Ruído não faz só perda auditiva: sono, pressão arterial, irritabilidade e comunicação são afetados em níveis mais baixos. E comunicação prejudicada é problema de segurança, não de conforto.',
  pegadinha: 'Usar o limite de proteção auditiva como fronteira do risco ignora tudo o que acontece abaixo dele.',
  refs: ['OMS — ruído e saúde', 'NR-17', 'NHO 01 — Fundacentro'] },

{ id: 'q-2.2-131', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o controle de ruído na fonte e na trajetória, é CORRETO afirmar:',
  alts: [
    { t: 'Medidas como substituição de equipamento, manutenção, amortecimento de vibração, enclausuramento e barreiras acústicas atuam antes do trabalhador e beneficiam todos os expostos, ao contrário da proteção individual, que depende do uso correto de cada um.', ok: true,
      why: 'Correta. Controle na fonte protege quem não está usando protetor também.' },
    { t: 'A proteção individual protege o conjunto dos trabalhadores do setor.', ok: false,
      why: 'Errada. Protege apenas quem a usa corretamente.' },
    { t: 'A manutenção de equipamentos não influencia o nível de ruído gerado.', ok: false,
      why: 'Errada. Desgaste, folga e falta de lubrificação elevam significativamente o ruído.' },
    { t: 'O enclausuramento parcial não produz redução relevante.', ok: false,
      why: 'Errada. Produz redução mensurável, ainda que menor que o enclausuramento completo.' },
    { t: 'O tratamento acústico do ambiente não é considerado controle na trajetória.', ok: false,
      why: 'Errada. Absorção e barreiras atuam justamente na trajetória entre fonte e receptor.' }
  ],
  comentario: 'Fonte e trajetória: substituir, manter, amortecer, enclausurar, tratar acusticamente. Tudo isso protege quem não colocou o protetor — a proteção individual só alcança quem a usa bem.',
  pegadinha: 'Manutenção adiada é aumento de ruído que ninguém contabiliza como piora da exposição.',
  refs: ['NR-1', 'NHO 01 — Fundacentro', 'ACGIH'] },

{ id: 'q-2.3-130', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a cádmio, é CORRETO afirmar:',
  alts: [
    { t: 'É agente cancerígeno com toxicidade renal e óssea, cuja exposição ocorre em produção de baterias, ligas, pigmentos e soldagem de materiais revestidos — e o comprometimento tubular renal pode ser detectado por marcadores antes de qualquer manifestação clínica.', ok: true,
      why: 'Correta. O rim é o alvo crítico e há marcadores precoces disponíveis.' },
    { t: 'O cádmio não apresenta toxicidade renal relevante.', ok: false,
      why: 'Errada. O túbulo renal é o alvo crítico da exposição crônica.' },
    { t: 'A soldagem de materiais revestidos não é fonte de exposição.', ok: false,
      why: 'Errada. Revestimentos com cádmio geram fumos na soldagem e no corte.' },
    { t: 'Não há marcadores de lesão renal precoce aplicáveis à vigilância.', ok: false,
      why: 'Errada. Há marcadores de disfunção tubular usados nesse acompanhamento.' },
    { t: 'A lesão renal por cádmio é integralmente reversível com o afastamento.', ok: false,
      why: 'Errada. A disfunção tubular instalada tende a ser persistente.' }
  ],
  comentario: 'Cádmio: cancerígeno, com rim e osso como alvos. Baterias, ligas, pigmentos e soldagem de revestido são as fontes. Marcadores de disfunção tubular detectam antes do sintoma — e a lesão instalada não regride.',
  pegadinha: 'Esperar manifestação clínica renal dispensa o marcador que existe justamente para agir antes.',
  refs: ['IARC', 'ACGIH — BEIs', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.4-130', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o descarte e o manuseio de perfurocortantes em serviços de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'O descarte deve ser imediato, no ponto de uso, em recipiente rígido e devidamente posicionado — a distância entre o local do procedimento e o recipiente é um dos determinantes práticos da ocorrência de acidentes.', ok: true,
      why: 'Correta. Recipiente longe do leito produz transporte de agulha, que é quando o acidente acontece.' },
    { t: 'O descarte pode ser feito ao término do conjunto de procedimentos.', ok: false,
      why: 'Errada. O acúmulo e o transporte do material aumentam o risco.' },
    { t: 'A posição do recipiente no ambiente não influencia a ocorrência de acidentes.', ok: false,
      why: 'Errada. Distância e altura inadequadas são fatores de risco documentados.' },
    { t: 'A subnotificação de acidentes com perfurocortantes é irrelevante para a gestão do risco.', ok: false,
      why: 'Errada. Impede a profilaxia oportuna e distorce o dimensionamento do problema.' },
    { t: 'Dispositivos com mecanismo de segurança dispensam capacitação para uso.', ok: false,
      why: 'Errada. O acionamento incorreto anula o benefício do dispositivo.' }
  ],
  comentario: 'Descarte imediato, no ponto de uso, em recipiente bem posicionado — porque o acidente ocorre no percurso entre o procedimento e a caixa. Dispositivo de segurança exige treino, e subnotificar impede a profilaxia.',
  pegadinha: 'Recipiente instalado longe do leito por questão de layout produz exatamente o transporte que se quer evitar.',
  refs: ['NR-32', 'Protocolos de prevenção de acidentes com perfurocortantes'] },

{ id: 'q-2.6-130', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre os limites de exposição para agentes com efeito sensibilizante, é CORRETO afirmar:',
  alts: [
    { t: 'A notação de sensibilizante indica que o agente pode induzir resposta imunológica, e o limite estabelecido não protege o trabalhador já sensibilizado — que pode reagir a concentrações muito inferiores ao valor tabelado.', ok: true,
      why: 'Correta. Sensibilizado é caso individual em que o limite deixa de ter significado protetor.' },
    { t: 'O limite estabelecido protege igualmente sensibilizados e não sensibilizados.', ok: false,
      why: 'Errada. O sensibilizado pode reagir muito abaixo do limite.' },
    { t: 'A notação de sensibilizante indica apenas potencial irritativo.', ok: false,
      why: 'Errada. Indica indução de resposta imunológica específica.' },
    { t: 'Uma vez sensibilizado, o trabalhador pode permanecer exposto com proteção individual.', ok: false,
      why: 'Errada. O afastamento do agente é a conduta que muda o prognóstico.' },
    { t: 'A sensibilização se perde com o tempo de afastamento, permitindo o retorno ao mesmo agente.', ok: false,
      why: 'Errada. Tende a persistir, e a reexposição reativa o quadro.' }
  ],
  comentario: 'Notação de sensibilizante avisa: o limite protege a maioria e não protege quem já sensibilizou. Para esse trabalhador, a medida é afastar do agente — a sensibilização não se perde com o tempo.',
  pegadinha: 'Manter o sensibilizado no setor porque a medição está conforme é decidir pela média contra o indivíduo.',
  refs: ['ACGIH — notação SEN', 'Diretrizes de asma ocupacional'] },

{ id: 'q-2.7-110', tema: '2.7', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a aplicação dos procedimentos técnicos padronizados na avaliação de exposição a poeiras, é CORRETO afirmar:',
  alts: [
    { t: 'A amostragem utiliza dispositivo seletor que separa a fração de interesse, e a análise gravimétrica deve considerar controle de umidade e amostras de branco — a ausência desses cuidados compromete a confiabilidade de resultados em concentrações baixas.', ok: true,
      why: 'Correta. Em massa pequena, umidade e contaminação do filtro dominam o resultado.' },
    { t: 'A amostragem de poeira dispensa dispositivo seletor de fração.', ok: false,
      why: 'Errada. A fração de interesse define o efeito e exige seletor apropriado.' },
    { t: 'Amostras de branco não são necessárias na análise gravimétrica.', ok: false,
      why: 'Errada. Corrigem variações do filtro e da manipulação.' },
    { t: 'O controle de umidade dos filtros é irrelevante para o resultado.', ok: false,
      why: 'Errada. Interfere diretamente na pesagem, sobretudo em massas pequenas.' },
    { t: 'A vazão da bomba não precisa ser verificada após a amostragem.', ok: false,
      why: 'Errada. A verificação pós-amostragem valida o volume amostrado.' }
  ],
  comentario: 'Poeira: seletor de fração, filtro com umidade controlada, amostras de branco e vazão verificada antes e depois. Em concentração baixa, é o método que decide se o número significa alguma coisa.',
  pegadinha: 'Sem branco e sem controle de umidade, a massa pesada pode ser mais filtro que poeira.',
  refs: ['NHO 08 — Fundacentro', 'ACGIH'] },

{ id: 'q-2.9-130', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a exposição ocupacional a hidrocarbonetos aromáticos policíclicos, é CORRETO afirmar:',
  alts: [
    { t: 'Estão presentes em fumos de asfalto, fuligem, coquerias e produtos de combustão incompleta, com potencial carcinogênico reconhecido e absorção também por via cutânea — o que torna a higiene pessoal e a troca de vestimenta parte relevante do controle.', ok: true,
      why: 'Correta. A pele é via importante nesses agentes, o que muda as medidas de controle.' },
    { t: 'A exposição a esses agentes ocorre exclusivamente por via respiratória.', ok: false,
      why: 'Errada. A absorção cutânea é relevante e frequentemente subestimada.' },
    { t: 'Não há potencial carcinogênico reconhecido para esse grupo de agentes.', ok: false,
      why: 'Errada. Há associação estabelecida com cânceres de pele e outros sítios.' },
    { t: 'A higiene pessoal e a troca de roupa não influenciam a dose absorvida.', ok: false,
      why: 'Errada. São medidas diretamente ligadas à via cutânea de absorção.' },
    { t: 'Trabalhadores de pavimentação asfáltica não integram os grupos expostos.', ok: false,
      why: 'Errada. São grupo classicamente exposto por fumos de asfalto.' }
  ],
  comentario: 'Hidrocarbonetos aromáticos policíclicos: asfalto, fuligem, coqueria, combustão incompleta. Cancerígenos e absorvidos pela pele — por isso vestiário, banho e troca de roupa entram como medida de controle, não como conforto.',
  pegadinha: 'Focar só na proteção respiratória deixa aberta a via cutânea, que nesses agentes é significativa.',
  refs: ['IARC', 'ACGIH — notação Skin', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.5-110', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a reavaliação periódica dos riscos identificados no inventário, é CORRETO afirmar:',
  alts: [
    { t: 'Além da periodicidade máxima prevista, a reavaliação deve ocorrer diante de mudança de processo, introdução de novo agente, ocorrência de acidente ou doença relacionada ao trabalho e identificação de inadequação — gatilhos que independem do calendário.', ok: true,
      why: 'Correta. Os gatilhos por evento são o que mantém o inventário aderente à realidade.' },
    { t: 'A reavaliação deve ocorrer apenas na periodicidade máxima prevista.', ok: false,
      why: 'Errada. Há gatilhos por evento que antecipam a revisão.' },
    { t: 'A ocorrência de acidente não constitui gatilho de revisão do inventário.', ok: false,
      why: 'Errada. É um dos gatilhos expressos.' },
    { t: 'A introdução de novo produto químico dispensa revisão quando o processo permanece o mesmo.', ok: false,
      why: 'Errada. Novo agente significa novo risco a inventariar.' },
    { t: 'A identificação de inadequação nas medidas é assunto do plano de ação, sem repercussão no inventário.', ok: false,
      why: 'Errada. Repercute na avaliação do risco residual e, portanto, no inventário.' }
  ],
  comentario: 'O inventário se revisa por calendário e por evento: mudança de processo, agente novo, acidente, doença relacionada ao trabalho, inadequação identificada. Esperar o prazo máximo mantém o documento em dia e desatualizado.',
  pegadinha: 'Acidente ocorrido e inventário não revisado é a combinação que reaparece na investigação do próximo evento.',
  refs: ['NR-1 — gerenciamento de riscos ocupacionais'] },

{ id: 'q-2.8-110', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre respiradores purificadores de ar motorizados, é CORRETO afirmar:',
  alts: [
    { t: 'Fornecem fluxo de ar filtrado sob pressão positiva, reduzindo a carga respiratória e sendo alternativa para trabalhadores com dificuldade de uso de peças faciais com vedação — inclusive os que não obtêm vedação adequada por características faciais ou uso de barba.', ok: true,
      why: 'Correta. Resolve casos em que a vedação facial é inviável.' },
    { t: 'Esses equipamentos impõem carga respiratória maior que os não motorizados.', ok: false,
      why: 'Errada. A pressão positiva reduz o esforço respiratório.' },
    { t: 'Não constituem alternativa para trabalhadores sem vedação facial adequada.', ok: false,
      why: 'Errada. São justamente a alternativa nesses casos, em versões com capuz ou capacete.' },
    { t: 'Dispensam manutenção e verificação de fluxo.', ok: false,
      why: 'Errada. A verificação do fluxo e a manutenção da bateria e dos filtros são essenciais.' },
    { t: 'Podem ser usados em atmosferas com deficiência de oxigênio.', ok: false,
      why: 'Errada. Purificam o ar existente e não suprem oxigênio.' }
  ],
  comentario: 'Motorizado: pressão positiva, menos esforço respiratório, e alternativa real para quem não veda — inclusive com barba. Continua purificador, então não serve em deficiência de oxigênio, e exige verificação de fluxo.',
  pegadinha: 'Purificador motorizado é ainda purificador: não cria oxigênio nem serve em atmosfera imediatamente perigosa.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
