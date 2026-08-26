/* Lote Z — 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 2.5, 2.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.4-070', tema: '1.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a terceirização e a gestão de saúde e segurança nas empresas contratantes, é CORRETO afirmar:',
  alts: [
    { t: 'Deve estender as mesmas condições e o atendimento ambulatorial, consolidando os indicadores', ok: true,
      why: 'Correta. Separar os indicadores faz o acidente de terceiro desaparecer da gestão.' },
    { t: 'Deve verificar os programas da prestadora, a quem cabe com exclusividade a segurança do terceirizado.', ok: false,
      why: 'Errada. As condições oferecidas nas dependências da contratante são de sua responsabilidade.' },
    { t: 'Deve estender as mesmas condições, excluindo terceirizados dos indicadores para comparação histórica.', ok: false,
      why: 'Errada. A exclusão produz retrato falso justamente do grupo mais exposto.' },
    { t: 'Deve estender as condições de segurança, sem que o atendimento ambulatorial alcance os terceirizados.', ok: false,
      why: 'Errada. Há previsão de extensão quando o serviço é prestado em suas dependências.' },
    { t: 'Deve estender as condições e consolidar indicadores, sendo a verificação dos programas apenas documental.', ok: false,
      why: 'Errada. É preciso verificar também a execução efetiva no local de trabalho.' }
  ],
  comentario: 'Terceirizado nas dependências da contratante: mesmas condições de segurança, atendimento ambulatorial estendido e acidentes consolidados nos indicadores. Excluir terceiros do indicador esconde o grupo de maior risco.',
  pegadinha: 'Comparabilidade histórica é o argumento mais usado para deixar terceirizados fora da estatística.',
  refs: ['NR-4', 'NR-1', 'Lei nº 6.019/1974'] },

{ id: 'q-1.5-070', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a análise de causas de acidentes segundo modelos organizacionais contemporâneos, é CORRETO afirmar:',
  alts: [
    { t: 'Descrevem o acidente como alinhamento de falhas em defesas sucessivas, com condições latentes.', ok: true,
      why: 'Correta. Condições latentes existem antes do evento e são decisões, não descuidos.' },
    { t: 'Descrevem o acidente como decorrente de uma única causa identificável na sequência do evento.', ok: false,
      why: 'Errada. Resulta do alinhamento de múltiplas falhas em defesas sucessivas.' },
    { t: 'Descrevem o acidente como alinhamento de falhas, criadas as condições latentes pelo trabalhador da ponta.', ok: false,
      why: 'Errada. Decorrem de decisões de projeto, organização e gestão, muito antes do evento.' },
    { t: 'Descrevem o alinhamento de falhas, sendo a eliminação do erro humano o objetivo central da gestão.', ok: false,
      why: 'Errada. O erro é esperado; o objetivo é criar sistemas tolerantes a ele.' },
    { t: 'Descrevem o alinhamento de falhas, devendo a investigação parar na ação imediata que precedeu o evento.', ok: false,
      why: 'Errada. É onde a investigação deve continuar, buscando o que tornou aquela ação provável.' }
  ],
  comentario: 'Acidente é alinhamento de falhas em barreiras sucessivas, com condições latentes criadas por decisões anteriores. O erro humano é esperado — o sistema é que precisa tolerá-lo.',
  pegadinha: 'Encerrar a investigação no ato que precedeu o acidente é parar exatamente onde ela deveria começar.',
  refs: ['Reason — modelo de barreiras', 'ISO 45001'] },

{ id: 'q-1.6-070', tema: '1.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a Rede Nacional de Atenção Integral à Saúde do Trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Articula centros de referência e serviços sentinela, integrando assistência, vigilância e informação.', ok: true,
      why: 'Correta. Rede sem a atenção básica notificando não enxerga a maior parte dos casos.' },
    { t: 'Articula os centros de referência especializados, aos quais os casos suspeitos devem ser encaminhados.', ok: false,
      why: 'Errada. Envolve toda a rede assistencial, com serviços sentinela.' },
    { t: 'Articula centros e serviços sentinela, com atuação restrita à assistência clínica individual dos casos.', ok: false,
      why: 'Errada. Integra assistência, vigilância e produção de informação.' },
    { t: 'Articula centros e serviços sentinela, sendo financiada exclusivamente pelo setor previdenciário.', ok: false,
      why: 'Errada. É estrutura do sistema de saúde, com financiamento próprio.' },
    { t: 'Articula centros de referência e serviços sentinela, que não têm função de notificação dos agravos.', ok: false,
      why: 'Errada. A notificação qualificada é justamente a função que os define.' }
  ],
  comentario: 'A rede integra assistência, vigilância e informação — e depende de a rede comum reconhecer e notificar. Centro de referência sozinho vê apenas o que chega até ele.',
  pegadinha: 'Confundir a rede com seus centros especializados reduz a política ao seu componente menos capilar.',
  refs: ['RENAST — Portaria GM/MS nº 2.728/2009', 'PNSTT'] },

{ id: 'q-1.7-070', tema: '1.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a articulação entre o sistema de saúde e a previdência no reconhecimento de agravos relacionados ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Seguem lógicas e critérios distintos: cabe notificar sem que haja benefício concedido, e vice-versa.', ok: true,
      why: 'Correta. São sistemas com finalidades e critérios próprios.' },
    { t: 'Seguem critérios articulados, dependendo a notificação em saúde do reconhecimento prévio pela previdência.', ok: false,
      why: 'Errada. A notificação é ato de vigilância, independente da decisão previdenciária.' },
    { t: 'Seguem lógicas distintas, impedindo a negativa de benefício acidentário a notificação do agravo.', ok: false,
      why: 'Errada. Os sistemas são autônomos e a notificação permanece devida.' },
    { t: 'Seguem finalidades distintas, utilizando ambos os sistemas os mesmos critérios de nexo com o trabalho.', ok: false,
      why: 'Errada. Os critérios e as finalidades diferem entre eles.' },
    { t: 'Seguem lógicas distintas, sem utilidade para a vigilância a comparação entre as duas bases de dados.', ok: false,
      why: 'Errada. O cruzamento é ferramenta importante para dimensionar a subnotificação.' }
  ],
  comentario: 'Notificação em saúde e reconhecimento previdenciário são sistemas autônomos, com critérios próprios. Um caso pode existir em um e não no outro — e cruzar as bases é justamente como se mede a subnotificação.',
  pegadinha: 'Condicionar a notificação ao reconhecimento previdenciário subordina a vigilância a uma decisão que tem outra finalidade.',
  refs: ['Lei nº 8.080/1990', 'Lei nº 8.213/1991', 'SINAN'] },

{ id: 'q-1.8-070', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o conceito de vigilância dos ambientes e processos de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Dirige-se aos determinantes no processo produtivo, antecipando-se ao dano já instalado', ok: true,
      why: 'Correta. Uma olha para a causa, a outra para o efeito; são complementares.' },
    { t: 'Dirige-se aos determinantes, sendo dispensável havendo bom programa de exames médicos periódicos.', ok: false,
      why: 'Errada. O exame detecta o efeito depois de instalado; não previne a exposição.' },
    { t: 'Dirige-se aos determinantes, produzindo as duas vigilâncias o mesmo tipo de informação sobre o risco.', ok: false,
      why: 'Errada. Uma informa sobre determinantes, a outra sobre efeitos.' },
    { t: 'Dirige-se aos determinantes do processo, sendo atribuição exclusiva das empresas onde ele ocorre.', ok: false,
      why: 'Errada. É também atribuição do poder público, com competências definidas.' },
    { t: 'Dirige-se aos determinantes, limitando-se na prática à medição dos agentes ambientais presentes.', ok: false,
      why: 'Errada. Alcança organização do trabalho, ritmo, jornada e formas de gestão.' }
  ],
  comentario: 'Vigilância de ambientes e processos olha a causa e alcança também organização do trabalho e ritmo, não só agentes medidos. Vigilância da saúde olha o efeito já instalado. Complementares, nunca substitutas.',
  pegadinha: 'Usar um bom programa de exames como argumento para dispensar a vigilância do ambiente troca prevenção por detecção.',
  refs: ['PNSTT', 'Lei nº 8.080/1990'] },

{ id: 'q-1.9-070', tema: '1.9', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o uso dos dados de notificação para orientar ações de vigilância, é CORRETO afirmar:',
  alts: [
    { t: 'Deve identificar concentração por atividade, ocupação e território para direcionar inspeções.', ok: true,
      why: 'Correta. Notificar sem consequência prática é o que faz o profissional deixar de notificar.' },
    { t: 'Deve alimentar a produção de estatísticas anuais, consolidadas para acompanhamento da série histórica.', ok: false,
      why: 'Errada. Sua finalidade primária é orientar ação de vigilância.' },
    { t: 'Deve identificar concentração por território, não sendo possível a análise por atividade econômica.', ok: false,
      why: 'Errada. O campo de atividade econômica existe justamente para isso.' },
    { t: 'Deve direcionar inspeções, sendo irrelevante para o sistema o retorno da informação a quem notificou.', ok: false,
      why: 'Errada. É determinante da adesão à notificação.' },
    { t: 'Deve identificar concentrações, dispensando investigação a concentração que reflita maior cobertura.', ok: false,
      why: 'Errada. Pode refletir cobertura, mas exige investigação antes de qualquer conclusão.' }
  ],
  comentario: 'Notificação existe para gerar ação: concentração por atividade, ocupação e território direciona inspeção. E o retorno a quem notificou é o que sustenta a adesão ao sistema.',
  pegadinha: 'Tratar a base como produtora de relatório anual desperdiça sua função de disparar intervenção.',
  refs: ['SINAN', 'PNSTT'] },

{ id: 'q-1.10-070', tema: '1.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a avaliação de programas de promoção da saúde no trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Deve considerar alcance e equidade da participação, além dos resultados obtidos pelo programa.', ok: true,
      why: 'Correta. Programas voluntários atraem quem já tem melhores condições e horários.' },
    { t: 'Deve tomar a taxa de adesão global do programa, indicador suficiente do sucesso da iniciativa.', ok: false,
      why: 'Errada. É preciso saber quem aderiu, e não apenas quantos.' },
    { t: 'Deve considerar os resultados, distribuindo-se a participação voluntária uniformemente entre os grupos.', ok: false,
      why: 'Errada. Concentra-se em quem tem mais autonomia de horário e melhores condições.' },
    { t: 'Deve considerar alcance e resultados, não podendo programas de promoção ampliar desigualdades em saúde.', ok: false,
      why: 'Errada. Podem, quando alcançam preferencialmente os grupos já favorecidos.' },
    { t: 'Deve considerar alcance e equidade, dispensando a avaliação de resultados a análise da implementação.', ok: false,
      why: 'Errada. Sem entender a implementação não se interpreta o resultado obtido.' }
  ],
  comentario: 'Avaliar promoção exige saber quem participou, não só quantos. Programa voluntário atrai quem tem horário e condição — e pode ampliar a desigualdade que dizia combater.',
  pegadinha: 'A adesão global alta esconde que os turnos e as funções mais expostas ficaram de fora.',
  refs: ['OMS — Healthy Workplace Framework', 'Literatura sobre equidade em promoção da saúde'] },

{ id: 'q-2.5-070', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a verificação da eficácia das medidas de controle implantadas, é CORRETO afirmar:',
  alts: [
    { t: 'Demonstra-se por medição após a implantação e por manutenção documentada ao longo do tempo', ok: true,
      why: 'Correta. Controle instalado não é controle permanente.' },
    { t: 'Demonstra-se pela instalação da medida conforme o projeto aprovado e verificado no recebimento.', ok: false,
      why: 'Errada. É preciso medir o desempenho obtido na condição real de operação.' },
    { t: 'Demonstra-se por medição posterior, mantendo a ventilação local exaustora desempenho estável sem manutenção.', ok: false,
      why: 'Errada. Perde desempenho por obstrução, desgaste e mudanças no processo.' },
    { t: 'Demonstra-se por medição e manutenção, não exigindo alterações no processo reavaliação dos controles.', ok: false,
      why: 'Errada. Mudança de processo altera a geração e a dispersão do agente.' },
    { t: 'Demonstra-se por medição periódica, sem valor a percepção dos trabalhadores sobre o funcionamento.', ok: false,
      why: 'Errada. Costuma apontar falhas antes que a medição programada as detecte.' }
  ],
  comentario: 'Eficácia se mede depois de instalado e se mantém com manutenção verificada. Exaustão entope, desgasta e deixa de acompanhar mudanças no processo — e o operador costuma perceber a queda antes da medição anual.',
  pegadinha: 'Aceitar o projeto como prova de eficácia dispensa a única verificação que importa: a condição real de operação.',
  refs: ['ACGIH — Industrial Ventilation', 'NR-9', 'AIHA'] },

{ id: 'q-2.8-070', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o ensaio de vedação de respiradores, é CORRETO afirmar:',
  alts: [
    { t: 'Verifica a adequação de modelo e tamanho à face e deve ser repetido após alterações faciais', ok: true,
      why: 'Correta. É distinto da verificação que o próprio usuário faz a cada colocação.' },
    { t: 'Verifica a adequação do modelo à face, sendo o mesmo procedimento que o usuário faz na colocação.', ok: false,
      why: 'Errada. Um qualifica o modelo e o tamanho; o outro confere o posicionamento a cada uso.' },
    { t: 'Verifica a adequação de modelo e tamanho à face, não precisando ser repetido uma vez realizado.', ok: false,
      why: 'Errada. Alterações faciais e mudança de modelo exigem novo ensaio.' },
    { t: 'Verifica a adequação à face do usuário, dispensando a verificação de vedação a cada colocação.', ok: false,
      why: 'Errada. A verificação a cada uso continua necessária.' },
    { t: 'Verifica a adequação à face, servindo adequadamente um único modelo a todos os trabalhadores.', ok: false,
      why: 'Errada. A variabilidade facial exige disponibilidade de modelos e tamanhos.' }
  ],
  comentario: 'Dois procedimentos distintos: o ensaio qualifica modelo e tamanho para aquela face, e se repete quando a face muda; a verificação de vedação é feita pelo usuário a cada colocação. Um modelo único não serve a todas as faces.',
  pegadinha: 'Confundir os dois procedimentos leva a dispensar justamente o que se faz todo dia.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] }

);
