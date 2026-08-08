/* Lote Z — 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.4-070', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a terceirização e a gestão de saúde e segurança nas empresas contratantes, é CORRETO afirmar:',
  alts: [
    { t: 'A contratante deve estender ao trabalhador terceirizado as mesmas condições de segurança e o mesmo atendimento ambulatorial quando o serviço é prestado em suas dependências, e os indicadores de acidentalidade devem consolidar próprios e terceiros para retratar o risco real.', ok: true,
      why: 'Correta. Separar os indicadores é o mecanismo que faz o acidente de terceiro desaparecer da gestão.' },
    { t: 'A responsabilidade pelas condições de segurança do terceirizado é exclusivamente da prestadora.', ok: false,
      why: 'Errada. As condições oferecidas nas dependências da contratante são de sua responsabilidade.' },
    { t: 'Indicadores de acidentalidade devem excluir terceirizados para permitir comparação histórica.', ok: false,
      why: 'Errada. A exclusão produz retrato falso justamente do grupo mais exposto.' },
    { t: 'O atendimento ambulatorial na contratante não deve alcançar trabalhadores terceirizados.', ok: false,
      why: 'Errada. Há previsão de extensão do atendimento quando o serviço é prestado em suas dependências.' },
    { t: 'A verificação dos programas da prestadora é obrigação apenas formal e documental.', ok: false,
      why: 'Errada. É preciso verificar também a execução efetiva no local de trabalho.' }
  ],
  comentario: 'Terceirizado nas dependências da contratante: mesmas condições de segurança, atendimento ambulatorial estendido e acidentes consolidados nos indicadores. Excluir terceiros do indicador esconde o grupo de maior risco.',
  pegadinha: 'Comparabilidade histórica é o argumento mais usado para deixar terceirizados fora da estatística.',
  refs: ['NR-4', 'NR-1', 'Lei nº 6.019/1974'] },

{ id: 'q-1.5-070', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise de causas de acidentes segundo modelos organizacionais contemporâneos, é CORRETO afirmar:',
  alts: [
    { t: 'Os modelos de barreiras múltiplas descrevem o acidente como alinhamento de falhas em defesas sucessivas, deslocando a análise da falha individual para as condições latentes criadas por decisões gerenciais e de projeto.', ok: true,
      why: 'Correta. Condições latentes existem antes do evento e são decisões, não descuidos.' },
    { t: 'O acidente decorre tipicamente de uma única causa identificável.', ok: false,
      why: 'Errada. Resulta do alinhamento de múltiplas falhas em defesas sucessivas.' },
    { t: 'Condições latentes são criadas pelo trabalhador da linha de frente.', ok: false,
      why: 'Errada. Decorrem de decisões de projeto, organização e gestão, muito antes do evento.' },
    { t: 'A eliminação do erro humano é o objetivo central da gestão de segurança.', ok: false,
      why: 'Errada. O erro é esperado; o objetivo é criar sistemas tolerantes a ele.' },
    { t: 'A investigação deve parar quando encontra a ação imediata que precedeu o acidente.', ok: false,
      why: 'Errada. É onde a investigação deve continuar, buscando o que tornou aquela ação provável.' }
  ],
  comentario: 'Acidente é alinhamento de falhas em barreiras sucessivas, com condições latentes criadas por decisões anteriores. O erro humano é esperado — o sistema é que precisa tolerá-lo.',
  pegadinha: 'Encerrar a investigação no ato que precedeu o acidente é parar exatamente onde ela deveria começar.',
  refs: ['Reason — modelo de barreiras', 'ISO 45001'] },

{ id: 'q-1.6-070', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a Rede Nacional de Atenção Integral à Saúde do Trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Ela articula centros de referência e serviços sentinela dentro do sistema de saúde, com o objetivo de integrar assistência, vigilância e informação — e sua efetividade depende de a rede assistencial comum identificar e notificar os agravos, não apenas dos centros especializados.', ok: true,
      why: 'Correta. Rede sem a atenção básica notificando não enxerga a maior parte dos casos.' },
    { t: 'A rede se limita aos centros de referência especializados.', ok: false,
      why: 'Errada. Envolve toda a rede assistencial, com serviços sentinela.' },
    { t: 'Sua atuação se restringe à assistência clínica individual.', ok: false,
      why: 'Errada. Integra assistência, vigilância e produção de informação.' },
    { t: 'Ela é financiada exclusivamente pelo setor previdenciário.', ok: false,
      why: 'Errada. É estrutura do sistema de saúde, com financiamento próprio.' },
    { t: 'Serviços sentinela não têm função de notificação.', ok: false,
      why: 'Errada. A notificação qualificada é justamente a função que os define.' }
  ],
  comentario: 'A rede integra assistência, vigilância e informação — e depende de a rede comum reconhecer e notificar. Centro de referência sozinho vê apenas o que chega até ele.',
  pegadinha: 'Confundir a rede com seus centros especializados reduz a política ao seu componente menos capilar.',
  refs: ['RENAST — Portaria GM/MS nº 2.728/2009', 'PNSTT'] },

{ id: 'q-1.7-070', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a articulação entre o sistema de saúde e a previdência no reconhecimento de agravos relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A notificação em saúde e o reconhecimento previdenciário seguem lógicas e critérios distintos, de modo que um agravo pode ser notificado como relacionado ao trabalho sem que haja benefício acidentário concedido — e o inverso também ocorre.', ok: true,
      why: 'Correta. São sistemas com finalidades e critérios próprios.' },
    { t: 'A notificação em saúde depende do reconhecimento prévio pela previdência.', ok: false,
      why: 'Errada. A notificação é ato de vigilância, independente da decisão previdenciária.' },
    { t: 'A negativa de benefício acidentário impede a notificação do agravo.', ok: false,
      why: 'Errada. Os sistemas são autônomos e a notificação permanece devida.' },
    { t: 'Os dois sistemas utilizam os mesmos critérios de nexo.', ok: false,
      why: 'Errada. Os critérios e as finalidades diferem.' },
    { t: 'A comparação entre as duas bases não tem utilidade para a vigilância.', ok: false,
      why: 'Errada. O cruzamento é ferramenta importante para dimensionar a subnotificação.' }
  ],
  comentario: 'Notificação em saúde e reconhecimento previdenciário são sistemas autônomos, com critérios próprios. Um caso pode existir em um e não no outro — e cruzar as bases é justamente como se mede a subnotificação.',
  pegadinha: 'Condicionar a notificação ao reconhecimento previdenciário subordina a vigilância a uma decisão que tem outra finalidade.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991', 'SINAN'] },

{ id: 'q-1.8-070', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o conceito de vigilância dos ambientes e processos de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Ela se dirige aos determinantes do adoecimento no processo produtivo, antecipando-se ao dano — enquanto a vigilância da saúde dos trabalhadores detecta efeitos já instalados, sendo as duas complementares e nenhuma substituindo a outra.', ok: true,
      why: 'Correta. Uma olha para a causa, a outra para o efeito.' },
    { t: 'A vigilância dos ambientes é dispensável quando há bom programa de exames médicos.', ok: false,
      why: 'Errada. O exame detecta o efeito depois de instalado; ele não previne a exposição.' },
    { t: 'Ambas as vigilâncias produzem o mesmo tipo de informação.', ok: false,
      why: 'Errada. Uma informa sobre determinantes, a outra sobre efeitos.' },
    { t: 'A vigilância dos ambientes é atribuição exclusiva das empresas.', ok: false,
      why: 'Errada. É também atribuição do poder público, com competências definidas.' },
    { t: 'A vigilância dos processos de trabalho se limita à medição de agentes ambientais.', ok: false,
      why: 'Errada. Alcança organização do trabalho, ritmo, jornada e formas de gestão.' }
  ],
  comentario: 'Vigilância de ambientes e processos olha a causa e alcança também organização do trabalho e ritmo, não só agentes medidos. Vigilância da saúde olha o efeito já instalado. Complementares, nunca substitutas.',
  pegadinha: 'Usar um bom programa de exames como argumento para dispensar a vigilância do ambiente troca prevenção por detecção.',
  refs: ['PNSTT', 'Lei nº 8.080/1990'] },

{ id: 'q-1.9-070', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso dos dados de notificação para orientar ações de vigilância, é CORRETO afirmar:',
  alts: [
    { t: 'A análise deve identificar concentração de agravos por atividade econômica, ocupação e território para direcionar inspeções e intervenções — de modo que a notificação sem retorno em ação de vigilância desestimula quem notifica e esvazia o sistema.', ok: true,
      why: 'Correta. Notificar sem consequência prática é o que faz o profissional deixar de notificar.' },
    { t: 'Os dados servem apenas para produção de estatísticas anuais.', ok: false,
      why: 'Errada. Sua finalidade primária é orientar ação.' },
    { t: 'A análise por atividade econômica não é possível com os dados notificados.', ok: false,
      why: 'Errada. O campo de atividade econômica existe justamente para isso.' },
    { t: 'O retorno da informação a quem notificou é irrelevante para o sistema.', ok: false,
      why: 'Errada. É determinante da adesão à notificação.' },
    { t: 'A concentração de casos em um território dispensa investigação por refletir apenas maior cobertura.', ok: false,
      why: 'Errada. Pode refletir cobertura, mas exige investigação antes de qualquer conclusão.' }
  ],
  comentario: 'Notificação existe para gerar ação: concentração por atividade, ocupação e território direciona inspeção. E o retorno a quem notificou é o que sustenta a adesão ao sistema.',
  pegadinha: 'Tratar a base como produtora de relatório anual desperdiça sua função de disparar intervenção.',
  refs: ['SINAN', 'PNSTT'] },

{ id: 'q-1.10-070', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de programas de promoção da saúde no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve considerar alcance e equidade da participação, além de resultados — pois programas voluntários tendem a atrair quem já tem melhores condições e horários, deixando de fora os grupos que mais se beneficiariam.', ok: true,
      why: 'Correta. Adesão desigual pode ampliar a desigualdade que o programa pretendia reduzir.' },
    { t: 'A taxa de adesão global é indicador suficiente de sucesso.', ok: false,
      why: 'Errada. É preciso saber quem aderiu, e não apenas quantos.' },
    { t: 'A participação voluntária tende a se distribuir uniformemente entre os grupos de trabalhadores.', ok: false,
      why: 'Errada. Concentra-se em quem tem mais autonomia de horário e melhores condições.' },
    { t: 'Programas de promoção não podem ampliar desigualdades em saúde.', ok: false,
      why: 'Errada. Podem, quando alcançam preferencialmente os grupos já favorecidos.' },
    { t: 'A avaliação de resultados dispensa a análise do processo de implementação.', ok: false,
      why: 'Errada. Sem entender a implementação não se interpreta o resultado obtido.' }
  ],
  comentario: 'Avaliar promoção exige saber quem participou, não só quantos. Programa voluntário atrai quem tem horário e condição — e pode ampliar a desigualdade que dizia combater.',
  pegadinha: 'A adesão global alta esconde que os turnos e as funções mais expostas ficaram de fora.',
  refs: ['OMS — Healthy Workplace Framework', 'Literatura sobre equidade em promoção da saúde'] },

{ id: 'q-2.5-070', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a verificação da eficácia das medidas de controle implantadas, é CORRETO afirmar:',
  alts: [
    { t: 'A eficácia se demonstra por medição após a implantação e por manutenção documentada do desempenho ao longo do tempo — sistemas de ventilação, por exemplo, perdem desempenho por obstrução, desgaste e alterações no processo, o que exige verificação periódica.', ok: true,
      why: 'Correta. Controle instalado não é controle permanente.' },
    { t: 'A instalação da medida conforme projeto comprova sua eficácia.', ok: false,
      why: 'Errada. É preciso medir o desempenho obtido na condição real de operação.' },
    { t: 'Sistemas de ventilação local exaustora mantêm desempenho estável sem manutenção.', ok: false,
      why: 'Errada. Perdem desempenho por obstrução, desgaste e mudanças no processo.' },
    { t: 'Alterações no processo produtivo não exigem reavaliação dos controles.', ok: false,
      why: 'Errada. Mudança de processo altera a geração e a dispersão do agente.' },
    { t: 'A percepção dos trabalhadores sobre o funcionamento do sistema não tem valor na verificação.', ok: false,
      why: 'Errada. Costuma apontar falhas antes que a medição programada as detecte.' }
  ],
  comentario: 'Eficácia se mede depois de instalado e se mantém com manutenção verificada. Exaustão entope, desgasta e deixa de acompanhar mudanças no processo — e o operador costuma perceber a queda antes da medição anual.',
  pegadinha: 'Aceitar o projeto como prova de eficácia dispensa a única verificação que importa: a condição real de operação.',
  refs: ['ACGIH — Industrial Ventilation', 'NR-9', 'AIHA'] },

{ id: 'q-2.8-070', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o ensaio de vedação de respiradores, é CORRETO afirmar:',
  alts: [
    { t: 'Ele verifica a adequação do modelo e do tamanho à face do usuário e deve ser repetido diante de alterações faciais relevantes, como variação importante de peso ou cirurgia — sendo distinto da verificação de vedação que o próprio usuário faz a cada colocação.', ok: true,
      why: 'Correta. São dois procedimentos com finalidades e periodicidades diferentes.' },
    { t: 'O ensaio de vedação e a verificação feita pelo usuário na colocação são o mesmo procedimento.', ok: false,
      why: 'Errada. Um qualifica o modelo e o tamanho; o outro confere o posicionamento a cada uso.' },
    { t: 'Realizado uma vez, o ensaio não precisa ser repetido.', ok: false,
      why: 'Errada. Alterações faciais e mudança de modelo exigem novo ensaio.' },
    { t: 'O ensaio dispensa a verificação de vedação a cada colocação do equipamento.', ok: false,
      why: 'Errada. A verificação a cada uso continua necessária.' },
    { t: 'Um único modelo de respirador serve adequadamente a todos os trabalhadores.', ok: false,
      why: 'Errada. A variabilidade facial exige disponibilidade de modelos e tamanhos.' }
  ],
  comentario: 'Dois procedimentos distintos: o ensaio qualifica modelo e tamanho para aquela face, e se repete quando a face muda; a verificação de vedação é feita pelo usuário a cada colocação. Um modelo único não serve a todas as faces.',
  pegadinha: 'Confundir os dois procedimentos leva a dispensar justamente o que se faz todo dia.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
