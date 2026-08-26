/* Lote AC — 1.3, 2.2, 2.3, 2.4, 2.6, 2.9, 4.4, 4.5. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.3-090', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre estudos de caso-controle aninhados em coortes ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Aprofundam a exposição num subconjunto a menor custo, mantendo o registro dela anterior ao desfecho.', ok: true,
      why: 'Correta. Combina economia com a proteção temporal da coorte de origem, reduzindo viés de memória.' },
    { t: 'Aprofundam a caracterização da exposição a menor custo, perdendo a vantagem temporal da coorte de origem.', ok: false,
      why: 'Errada. A exposição segue registrada antes do desfecho.' },
    { t: 'Aprofundam a exposição num subconjunto, devendo os controles ser selecionados fora da coorte de origem.', ok: false,
      why: 'Errada. São selecionados dentro dela, o que garante a comparabilidade.' },
    { t: 'Aprofundam a caracterização da exposição num subconjunto, a custo maior do que estudar a coorte completa.', ok: false,
      why: 'Errada. Sua principal vantagem prática é justamente a redução de custo.' },
    { t: 'Aprofundam a exposição num subconjunto, não permitindo estimar medidas de associação nesse delineamento.', ok: false,
      why: 'Errada. Permite estimativas válidas de associação.' }
  ],
  comentario: 'Caso-controle aninhado: controles vêm da própria coorte, a exposição já estava registrada antes do desfecho e o aprofundamento custa muito menos que fazê-lo em todos. É o desenho típico da epidemiologia ocupacional com longo seguimento.',
  pegadinha: 'Buscar controles fora da coorte destrói a comparabilidade que o aninhamento garante.',
  refs: ['Checkoway — Research Methods in Occupational Epidemiology', 'Rothman'] },

{ id: 'q-2.2-090', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional ao frio, é CORRETO afirmar:',
  alts: [
    { t: 'O frio reduz a destreza manual e a sensibilidade tátil, e vento e umidade agravam a perda de calor', ok: true,
      why: 'Correta. A perda de destreza produz o acidente antes de qualquer lesão pelo frio.' },
    { t: 'O frio traz risco de lesões locais e hipotermia, sendo a temperatura do ar isolada suficiente para caracterizar a exposição.', ok: false,
      why: 'Errada. Vento e umidade alteram substancialmente a perda de calor.' },
    { t: 'O frio traz risco de lesões locais e hipotermia, sem interferir no desempenho manual do trabalhador exposto.', ok: false,
      why: 'Errada. Reduz destreza e sensibilidade, com impacto direto na segurança.' },
    { t: 'O frio traz risco de lesões locais, sendo a vestimenta mais espessa sempre a melhor solução de proteção.', ok: false,
      why: 'Errada. Excesso de isolamento gera sudorese, que umedece a roupa e piora a perda de calor.' },
    { t: 'O frio reduz destreza e traz risco de hipotermia, não sendo a hidratação preocupação em ambientes frios.', ok: false,
      why: 'Errada. A desidratação ocorre também no frio, com sensação de sede reduzida.' }
  ],
  comentario: 'Frio: vento e umidade pesam mais que o termômetro, a destreza cai antes de qualquer lesão, roupa excessiva gera suor que umedece e piora, e a sede diminui mesmo com desidratação em curso.',
  pegadinha: 'Agasalhar mais parece sempre melhor e transforma sudorese em perda acelerada de calor.',
  refs: ['NR-15 — Anexo 9', 'ACGIH — estresse por frio', 'ISO 11079'] },

{ id: 'q-2.3-090', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a agrotóxicos na agricultura familiar e no trabalho informal, é CORRETO afirmar:',
  alts: [
    { t: 'A ausência de vínculo formal não reduz a exposição e costuma agravar a proteção, estendendo o risco aos familiares', ok: true,
      why: 'Correta. Armazenamento no domicílio e reutilização de embalagens alcançam quem nem trabalha na lavoura.' },
    { t: 'A exposição nesse contexto é menor por envolver volumes reduzidos de produto em cada aplicação realizada.', ok: false,
      why: 'Errada. A proteção costuma ser mais precária, o que compensa ou supera o menor volume.' },
    { t: 'A ausência de vínculo formal agrava a proteção, restringindo-se a exposição ao momento da aplicação do produto.', ok: false,
      why: 'Errada. Preparo da calda, manutenção, reentrada na área e lavagem de roupas também expõem.' },
    { t: 'A ausência de vínculo agrava a proteção, sem que a lavagem das roupas junto com as demais represente risco.', ok: false,
      why: 'Errada. É via reconhecida de exposição de familiares, sobretudo de quem lava.' },
    { t: 'A ausência de vínculo formal agrava a proteção, mas trabalhadores informais ficam fora das ações de vigilância.', ok: false,
      why: 'Errada. São prioridade justamente por acumularem exposição e desproteção.' }
  ],
  comentario: 'Agrotóxico na agricultura familiar expõe a casa inteira: armazenamento no domicílio, embalagem reutilizada, criança na lavoura, roupa lavada junto. A exposição vai muito além do momento da aplicação.',
  pegadinha: 'Restringir a exposição ao ato de aplicar deixa de fora preparo, reentrada e lavagem de roupas.',
  refs: ['NR-31', 'Ministério da Saúde — vigilância de populações expostas a agrotóxicos'] },

{ id: 'q-2.4-090', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição a agentes biológicos em laboratórios de análises clínicas, é CORRETO afirmar:',
  alts: [
    { t: 'A maioria dos acidentes envolve manipulação de amostras e perfurocortantes, e o risco existe mesmo com agente desconhecido', ok: true,
      why: 'Correta. Amostra sem diagnóstico é amostra potencialmente infectante.' },
    { t: 'A maioria dos acidentes envolve perfurocortantes, dispensando precauções as amostras sem diagnóstico infeccioso.', ok: false,
      why: 'Errada. Toda amostra biológica é tratada como potencialmente infectante.' },
    { t: 'A maioria dos acidentes envolve amostras e perfurocortantes, não representando a centrifugação risco de aerossóis.', ok: false,
      why: 'Errada. É procedimento reconhecidamente gerador de aerossóis, sobretudo com tubo quebrado.' },
    { t: 'A maioria dos acidentes envolve perfurocortantes, sendo aceitável a pipetagem com a boca em amostras não infectantes.', ok: false,
      why: 'Errada. É prática vedada em qualquer circunstância.' },
    { t: 'A maioria dos acidentes envolve amostras, e a cabine de segurança dispensa manutenção e certificação periódica.', ok: false,
      why: 'Errada. Sua eficácia depende de certificação periódica do fluxo e dos filtros.' }
  ],
  comentario: 'Laboratório: toda amostra é potencialmente infectante, centrífuga gera aerossol, pipetagem com a boca é vedada sempre, e cabine sem certificação periódica é móvel com aparência de proteção.',
  pegadinha: 'Graduar a precaução conforme a suspeita registrada falha justamente nas amostras ainda não caracterizadas.',
  refs: ['NR-32', 'Diretrizes de biossegurança em laboratório clínico'] },

{ id: 'q-2.6-090', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a comparação de resultados de avaliação de exposição com limites, é CORRETO afirmar:',
  alts: [
    { t: 'Deve considerar a distribuição dos resultados, e não apenas a média, pois as exposições são assimétricas ali', ok: true,
      why: 'Correta. Média abaixo do limite convive com proporção relevante de jornadas acima dele.' },
    { t: 'Deve tomar a média dos resultados obtidos, medida que resume adequadamente a exposição para concluir sobre conformidade.', ok: false,
      why: 'Errada. Ignora a dispersão e a fração de jornadas acima do limite.' },
    { t: 'Deve considerar a distribuição dos resultados, que nas exposições ocupacionais é tipicamente simétrica em torno da média.', ok: false,
      why: 'Errada. Costumam apresentar distribuição assimétrica, com cauda à direita.' },
    { t: 'Deve considerar a distribuição, sendo uma única medição abaixo do limite demonstração suficiente de controle.', ok: false,
      why: 'Errada. Não informa nada sobre a variabilidade entre jornadas.' },
    { t: 'Deve considerar a distribuição, dispensada a análise da variabilidade entre dias em atividades rotineiras.', ok: false,
      why: 'Errada. Mesmo tarefas rotineiras apresentam variabilidade relevante.' }
  ],
  comentario: 'Exposição ocupacional é assimétrica: a média fica abaixo do limite enquanto uma parcela das jornadas passa dele. Decide-se pela distribuição, não pela média — e uma medição isolada não diz nada sobre variabilidade.',
  pegadinha: 'A média confortável é o número que mais frequentemente esconde os dias que excedem.',
  refs: ['AIHA — estratégia de avaliação', 'NHO — Fundacentro'] },

{ id: 'q-2.9-090', tema: '2.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a cromo hexavalente, é CORRETO afirmar:',
  alts: [
    { t: 'É cancerígeno reconhecido, com risco respiratório e efeitos locais como ulceração e perfuração de septo.', ok: true,
      why: 'Correta. A lesão nasal é sinal precoce e só aparece se for ativamente procurada.' },
    { t: 'É cancerígeno reconhecido para humanos, tendo todas as formas de cromo o mesmo potencial carcinogênico.', ok: false,
      why: 'Errada. O potencial se associa à forma hexavalente, não à trivalente.' },
    { t: 'É cancerígeno reconhecido com risco respiratório, não havendo efeitos locais relevantes na exposição.', ok: false,
      why: 'Errada. Ulceração e perfuração de septo nasal são achados reconhecidos.' },
    { t: 'É cancerígeno reconhecido em galvanoplastia, não gerando a soldagem de aço inoxidável exposição relevante.', ok: false,
      why: 'Errada. É fonte reconhecida de cromo hexavalente nos fumos de soldagem.' },
    { t: 'É cancerígeno reconhecido, sendo dispensável o exame das fossas nasais na vigilância desses trabalhadores.', ok: false,
      why: 'Errada. É exame simples que detecta efeito precoce da exposição.' }
  ],
  comentario: 'Cromo hexavalente — não o trivalente — é cancerígeno reconhecido, presente em galvanoplastia e soldagem de inoxidável. Olhar a fossa nasal é a parte mais barata e mais esquecida da vigilância.',
  pegadinha: 'Tratar "cromo" como um único agente ignora que o efeito depende da valência.',
  refs: ['IARC — Grupo 1', 'ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-4.4-100', tema: '4.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre alterações ungueais e periungueais de origem ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Trabalho úmido favorece paroníquia e onicomicose, e agentes químicos produzem onicólise e alteração de cor', ok: true,
      why: 'Correta. São sinais úteis, desde que não substituam o diferencial com causas não ocupacionais.' },
    { t: 'Alterações ungueais decorrem de fatores individuais e infecciosos, sem relação com exposições ocupacionais.', ok: false,
      why: 'Errada. Trabalho úmido e agentes químicos produzem alterações características.' },
    { t: 'Trabalho úmido favorece paroníquia crônica, quadro de etiologia exclusivamente bacteriana nesses trabalhadores.', ok: false,
      why: 'Errada. Envolve componente irritativo e frequentemente colonização fúngica.' },
    { t: 'Trabalho úmido e agentes químicos produzem alterações, e a alteração ungueal isolada estabelece o nexo.', ok: false,
      why: 'Errada. Exige correlação com a exposição e diferencial com causas comuns.' },
    { t: 'Trabalho úmido favorece paroníquia crônica, quadro resolvido pelo uso contínuo de luvas durante a jornada.', ok: false,
      why: 'Errada. A oclusão prolongada mantém a umidade e perpetua o quadro.' }
  ],
  comentario: 'Trabalho úmido produz paroníquia crônica com componente irritativo e fúngico; alguns químicos dão onicólise e discromia. Sinais úteis, nunca autossuficientes — e luva oclusiva mantém a umidade que causa o problema.',
  pegadinha: 'Prescrever luva contínua para paroníquia de trabalho úmido perpetua exatamente a condição que a gera.',
  refs: ['Salim — Dermatoses Ocupacionais'] },

{ id: 'q-4.5-090', tema: '4.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as rinopatias e as alterações de vias aéreas superiores relacionadas ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Poeiras e sensibilizantes produzem rinite ocupacional que frequentemente precede a asma pelo mesmo agente.', ok: true,
      why: 'Correta. A queixa nasal é a oportunidade de intervir antes do comprometimento brônquico.' },
    { t: 'Poeiras e gases irritantes produzem rinite ocupacional, quadro sem relação com o desenvolvimento posterior de asma.', ok: false,
      why: 'Errada. A associação temporal entre rinite e asma ocupacional é bem documentada.' },
    { t: 'Poeiras e sensibilizantes produzem rinite, devendo as queixas nasais ser atribuídas a causas alérgicas comuns.', ok: false,
      why: 'Errada. A investigação da exposição é necessária antes dessa atribuição.' },
    { t: 'Poeiras e sensibilizantes produzem rinite, dispensando o tratamento sintomático a avaliação da exposição.', ok: false,
      why: 'Errada. Sem intervir na exposição, o quadro persiste e pode progredir.' },
    { t: 'Poeiras e sensibilizantes produzem rinite, não tendo a perfuração de septo causas ocupacionais reconhecidas.', ok: false,
      why: 'Errada. Exposição a cromo e outros agentes é causa reconhecida.' }
  ],
  comentario: 'Rinite ocupacional costuma anteceder a asma pelo mesmo agente — a queixa nasal é a janela de intervenção. Tratar sintoma sem mexer na exposição deixa a progressão seguir seu curso.',
  pegadinha: 'Rotular a queixa nasal como alergia comum fecha a única janela antes do comprometimento brônquico.',
  refs: ['Diretrizes de rinite ocupacional', 'Mendes, R. — Patologia do Trabalho'] }

);
