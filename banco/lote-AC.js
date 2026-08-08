/* Lote AC — 1.3, 2.2, 2.3, 2.4, 2.6, 2.9, 4.4, 4.5. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.3-090', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre estudos de caso-controle aninhados em coortes ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Permitem aprofundar a caracterização da exposição em um subconjunto, com menor custo do que fazê-lo em toda a coorte, preservando a vantagem de a exposição ter sido registrada antes do desfecho — o que reduz o viés de memória.', ok: true,
      why: 'Correta. Combina economia com a proteção temporal da coorte de origem.' },
    { t: 'O delineamento aninhado perde a vantagem temporal da coorte de origem.', ok: false,
      why: 'Errada. A exposição segue registrada antes do desfecho.' },
    { t: 'Os controles devem ser selecionados fora da coorte de origem.', ok: false,
      why: 'Errada. São selecionados dentro dela, o que garante a comparabilidade.' },
    { t: 'O delineamento é mais caro que estudar a coorte completa.', ok: false,
      why: 'Errada. Sua principal vantagem prática é a redução de custo.' },
    { t: 'Não é possível estimar medidas de associação nesse delineamento.', ok: false,
      why: 'Errada. Permite estimativas válidas de associação.' }
  ],
  comentario: 'Caso-controle aninhado: controles vêm da própria coorte, a exposição já estava registrada antes do desfecho e o aprofundamento custa muito menos que fazê-lo em todos. É o desenho típico da epidemiologia ocupacional com longo seguimento.',
  pegadinha: 'Buscar controles fora da coorte destrói a comparabilidade que o aninhamento garante.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology', 'Rothman'] },

{ id: 'q-2.2-090', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional ao frio, é CORRETO afirmar:',
  alts: [
    { t: 'Além do risco de lesões locais e hipotermia, o frio reduz a destreza manual e a sensibilidade tátil, aumentando o risco de acidentes — e a velocidade do vento e a umidade agravam a perda de calor além do que a temperatura isolada indica.', ok: true,
      why: 'Correta. A perda de destreza é o efeito que produz o acidente antes da lesão pelo frio.' },
    { t: 'A temperatura do ar isolada caracteriza adequadamente a exposição ao frio.', ok: false,
      why: 'Errada. Vento e umidade alteram substancialmente a perda de calor.' },
    { t: 'O frio não interfere no desempenho manual do trabalhador.', ok: false,
      why: 'Errada. Reduz destreza e sensibilidade, com impacto direto na segurança.' },
    { t: 'Vestimenta mais espessa é sempre a melhor solução.', ok: false,
      why: 'Errada. Excesso de isolamento gera sudorese, que umedece a roupa e piora a perda de calor.' },
    { t: 'A hidratação não é preocupação em ambientes frios.', ok: false,
      why: 'Errada. A desidratação ocorre também no frio, com sensação de sede reduzida.' }
  ],
  comentario: 'Frio: vento e umidade pesam mais que o termômetro, a destreza cai antes de qualquer lesão, roupa excessiva gera suor que umedece e piora, e a sede diminui mesmo com desidratação em curso.',
  pegadinha: 'Agasalhar mais parece sempre melhor e transforma sudorese em perda acelerada de calor.',
  refs: ['NR-15 — Anexo 9', 'ACGIH — estresse por frio', 'ISO 11079'] },

{ id: 'q-2.3-090', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a agrotóxicos na agricultura familiar e no trabalho informal, é CORRETO afirmar:',
  alts: [
    { t: 'A ausência de vínculo formal não reduz a exposição e frequentemente agrava a proteção, com armazenamento no domicílio, reutilização de embalagens e participação de familiares na aplicação — o que estende a exposição para além do trabalhador.', ok: true,
      why: 'Correta. A exposição domiciliar alcança quem nem trabalha na lavoura.' },
    { t: 'A exposição na agricultura familiar é menor por envolver menores volumes.', ok: false,
      why: 'Errada. A proteção costuma ser mais precária, o que compensa ou supera o menor volume.' },
    { t: 'A exposição se restringe ao momento da aplicação.', ok: false,
      why: 'Errada. Preparo da calda, manutenção de equipamento, reentrada na área e lavagem de roupas também expõem.' },
    { t: 'A lavagem das roupas de trabalho junto com as demais não representa risco.', ok: false,
      why: 'Errada. É via reconhecida de exposição de familiares, sobretudo de quem lava.' },
    { t: 'Trabalhadores informais não devem ser incluídos nas ações de vigilância.', ok: false,
      why: 'Errada. São prioridade justamente por acumularem exposição e desproteção.' }
  ],
  comentario: 'Agrotóxico na agricultura familiar expõe a casa inteira: armazenamento no domicílio, embalagem reutilizada, criança na lavoura, roupa lavada junto. A exposição vai muito além do momento da aplicação.',
  pegadinha: 'Restringir a exposição ao ato de aplicar deixa de fora preparo, reentrada e lavagem de roupas.',
  refs: ['NR-31', 'Ministério da Saúde — vigilância de populações expostas a agrotóxicos'] },

{ id: 'q-2.4-090', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a agentes biológicos em laboratórios de análises clínicas, é CORRETO afirmar:',
  alts: [
    { t: 'A maior parte dos acidentes envolve manipulação de amostras e perfurocortantes, e o risco existe mesmo quando o agente da amostra é desconhecido — motivo pelo qual as precauções são aplicadas a toda amostra biológica, independentemente da suspeita clínica registrada.', ok: true,
      why: 'Correta. Amostra sem diagnóstico é amostra potencialmente infectante.' },
    { t: 'Amostras de pacientes sem diagnóstico infeccioso conhecido dispensam precauções.', ok: false,
      why: 'Errada. Toda amostra biológica é tratada como potencialmente infectante.' },
    { t: 'A centrifugação não representa risco de geração de aerossóis.', ok: false,
      why: 'Errada. É procedimento reconhecidamente gerador de aerossóis, sobretudo com tubo quebrado.' },
    { t: 'A pipetagem com a boca é aceitável em amostras não infectantes.', ok: false,
      why: 'Errada. É prática vedada em qualquer circunstância.' },
    { t: 'A cabine de segurança biológica dispensa manutenção e certificação periódica.', ok: false,
      why: 'Errada. Sua eficácia depende de certificação periódica do fluxo e dos filtros.' }
  ],
  comentario: 'Laboratório: toda amostra é potencialmente infectante, centrífuga gera aerossol, pipetagem com a boca é vedada sempre, e cabine sem certificação periódica é móvel com aparência de proteção.',
  pegadinha: 'Graduar a precaução conforme a suspeita registrada falha justamente nas amostras ainda não caracterizadas.',
  refs: ['NR-32', 'Diretrizes de biossegurança em laboratório clínico'] },

{ id: 'q-2.6-090', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a comparação de resultados de avaliação de exposição com limites, é CORRETO afirmar:',
  alts: [
    { t: 'A decisão sobre conformidade deve considerar a distribuição dos resultados e não apenas a média, pois exposições ocupacionais são tipicamente assimétricas — e uma média abaixo do limite pode conviver com proporção relevante de jornadas acima dele.', ok: true,
      why: 'Correta. Distribuição assimétrica faz a média enganar sobre a fração de dias excedentes.' },
    { t: 'A média dos resultados é suficiente para concluir sobre conformidade.', ok: false,
      why: 'Errada. Ignora a dispersão e a fração de jornadas acima do limite.' },
    { t: 'Exposições ocupacionais tipicamente seguem distribuição simétrica.', ok: false,
      why: 'Errada. Costumam apresentar distribuição assimétrica com cauda à direita.' },
    { t: 'Uma única medição abaixo do limite demonstra controle da exposição.', ok: false,
      why: 'Errada. Não informa nada sobre a variabilidade entre jornadas.' },
    { t: 'A variabilidade entre dias não precisa ser considerada em atividades rotineiras.', ok: false,
      why: 'Errada. Mesmo tarefas rotineiras apresentam variabilidade relevante.' }
  ],
  comentario: 'Exposição ocupacional é assimétrica: a média fica abaixo do limite enquanto uma parcela das jornadas passa dele. Decide-se pela distribuição, não pela média — e uma medição isolada não diz nada sobre variabilidade.',
  pegadinha: 'A média confortável é o número que mais frequentemente esconde os dias que excedem.',
  refs: ['AIHA — estratégia de avaliação', 'NHO — Fundacentro'] },

{ id: 'q-2.9-090', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a cromo hexavalente, é CORRETO afirmar:',
  alts: [
    { t: 'É reconhecidamente cancerígeno para humanos, com risco respiratório em processos como galvanoplastia e soldagem de aço inoxidável, além de efeitos locais como ulceração nasal e perfuração de septo — achados que devem ser ativamente procurados no exame dos expostos.', ok: true,
      why: 'Correta. A lesão nasal é sinal precoce e só aparece se for procurada.' },
    { t: 'Todas as formas de cromo têm o mesmo potencial carcinogênico.', ok: false,
      why: 'Errada. O potencial se associa à forma hexavalente, não à trivalente.' },
    { t: 'Não há efeitos locais relevantes na exposição a esse agente.', ok: false,
      why: 'Errada. Ulceração e perfuração de septo nasal são achados reconhecidos.' },
    { t: 'A soldagem de aço inoxidável não gera exposição relevante.', ok: false,
      why: 'Errada. É fonte reconhecida de cromo hexavalente nos fumos.' },
    { t: 'O exame das fossas nasais é dispensável na vigilância desses trabalhadores.', ok: false,
      why: 'Errada. É exame simples que detecta efeito precoce da exposição.' }
  ],
  comentario: 'Cromo hexavalente — não o trivalente — é cancerígeno reconhecido, presente em galvanoplastia e soldagem de inoxidável. Olhar a fossa nasal é a parte mais barata e mais esquecida da vigilância.',
  pegadinha: 'Tratar "cromo" como um único agente ignora que o efeito depende da valência.',
  refs: ['IARC — Grupo 1', 'ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-4.4-100', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre alterações ungueais e periungueais de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Trabalho úmido prolongado favorece paroníquia crônica e onicomicose, e determinados agentes químicos produzem onicólise e alterações de coloração — achados que orientam a investigação da exposição, mas exigem diferencial com causas não ocupacionais.', ok: true,
      why: 'Correta. São sinais úteis, desde que não substituam o diferencial.' },
    { t: 'Alterações ungueais não têm relação com exposições ocupacionais.', ok: false,
      why: 'Errada. Trabalho úmido e agentes químicos produzem alterações características.' },
    { t: 'A paroníquia crônica em trabalho úmido tem etiologia exclusivamente bacteriana.', ok: false,
      why: 'Errada. Envolve componente irritativo e frequentemente colonização fúngica.' },
    { t: 'A presença de alteração ungueal isolada estabelece o nexo ocupacional.', ok: false,
      why: 'Errada. Exige correlação com a exposição e diferencial com causas comuns.' },
    { t: 'O uso contínuo de luvas resolve a paroníquia em trabalho úmido.', ok: false,
      why: 'Errada. A oclusão prolongada mantém a umidade e perpetua o quadro.' }
  ],
  comentario: 'Trabalho úmido produz paroníquia crônica com componente irritativo e fúngico; alguns químicos dão onicólise e discromia. Sinais úteis, nunca autossuficientes — e luva oclusiva mantém a umidade que causa o problema.',
  pegadinha: 'Prescrever luva contínua para paroníquia de trabalho úmido perpetua exatamente a condição que a gera.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.5-090', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as rinopatias e as alterações de vias aéreas superiores relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Exposições a poeiras, gases irritantes e sensibilizantes produzem rinite ocupacional que frequentemente precede a asma ocupacional pelo mesmo agente — de modo que a queixa nasal em exposto é oportunidade de intervir antes do comprometimento brônquico.', ok: true,
      why: 'Correta. A rinite costuma ser o aviso que antecede a asma.' },
    { t: 'A rinite ocupacional não guarda relação com o desenvolvimento posterior de asma.', ok: false,
      why: 'Errada. A associação temporal entre elas é bem documentada.' },
    { t: 'Queixas nasais em trabalhadores expostos devem ser atribuídas a causas alérgicas comuns.', ok: false,
      why: 'Errada. A investigação da exposição é necessária antes dessa atribuição.' },
    { t: 'O tratamento sintomático da rinite dispensa a avaliação da exposição.', ok: false,
      why: 'Errada. Sem intervir na exposição, o quadro persiste e pode progredir.' },
    { t: 'A perfuração de septo nasal em trabalhadores não tem causas ocupacionais reconhecidas.', ok: false,
      why: 'Errada. Exposição a cromo e outros agentes é causa reconhecida.' }
  ],
  comentario: 'Rinite ocupacional costuma anteceder a asma pelo mesmo agente — a queixa nasal é a janela de intervenção. Tratar sintoma sem mexer na exposição deixa a progressão seguir seu curso.',
  pegadinha: 'Rotular a queixa nasal como alergia comum fecha a única janela antes do comprometimento brônquico.',
  refs: ['Diretrizes de rinite ocupacional', 'Mendes, R. — Patologia do Trabalho'] }

);
