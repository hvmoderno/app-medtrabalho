/* Lote M — 6.1, 7.1, 7.6, 7.8, 3.2, 6.3, 5.1. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-071', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o programa de controle médico de saúde ocupacional e sua articulação com o gerenciamento de riscos, é CORRETO afirmar:',
  alts: [
    { t: 'Os exames e a sua periodicidade decorrem dos riscos do inventário, e não de lista padronizada', ok: true,
      why: 'Correta. Exame sem relação com o risco consome recurso e não detecta o que importa.' },
    { t: 'A bateria de exames deve ser a mesma para todos os trabalhadores, garantindo tratamento uniforme.', ok: false,
      why: 'Errada. Os exames derivam do risco de cada função.' },
    { t: 'Exames decorrem dos riscos, substituindo o programa médico as medidas de controle no ambiente.', ok: false,
      why: 'Errada. São complementares; vigiar não é controlar.' },
    { t: 'Exames decorrem dos riscos, sendo o relatório analítico dispensável quando não há alterações.', ok: false,
      why: 'Errada. É obrigatório, e ausência de alterações também é resultado a analisar.' },
    { t: 'Exames decorrem dos riscos, devendo alterações ser comunicadas ao empregador com o diagnóstico.', ok: false,
      why: 'Errada. Comunica-se aptidão e restrição; o diagnóstico é sigiloso.' }
  ],
  comentario: 'O programa médico nasce do inventário de riscos: exame indicado pelo risco da função, com relatório analítico anual mesmo sem alterações. E a comunicação ao empregador é de aptidão e restrição — nunca de diagnóstico.',
  pegadinha: 'A bateria padronizada para todos parece cuidado e é gasto que não detecta o risco real de cada função.',
  refs: ['NR-7', 'NR-1', 'Código de Ética Médica'] },

{ id: 'q-6.1-072', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame demissional, é CORRETO afirmar:',
  alts: [
    { t: 'Documenta o estado de saúde ao término do vínculo e é peça central em discussões de nexo', ok: true,
      why: 'Correta. Sua omissão prejudica o trabalhador e deixa a empresa sem elemento de defesa.' },
    { t: 'Documenta o estado de saúde, sendo dispensável sempre que o trabalhador pede demissão.', ok: false,
      why: 'Errada. A dispensa segue critérios normativos, não a iniciativa do desligamento.' },
    { t: 'Documenta o estado de saúde ao término, sendo sua realização interesse exclusivo do trabalhador.', ok: false,
      why: 'Errada. Interessa também à empresa, como elemento de prova.' },
    { t: 'Documenta o estado, devendo o médico concluir pela aptidão e encerrar o desligamento se houver alteração.', ok: false,
      why: 'Errada. Constatada alteração relacionada ao trabalho, cabem comunicação e encaminhamento.' },
    { t: 'Documenta o estado de saúde, não gerando obrigação de emitir comunicação de acidente de trabalho.', ok: false,
      why: 'Errada. Identificada doença relacionada, a comunicação é devida.' }
  ],
  comentario: 'O demissional fecha o registro do vínculo — e é onde doenças ocupacionais aparecem pela última vez antes de sumir. Alteração encontrada gera conduta e comunicação de acidente quando cabível, não assinatura de apto para liberar o desligamento.',
  pegadinha: 'Assinar apto para não travar a rescisão transforma o exame em formalidade e apaga o achado.',
  refs: ['NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-7.1-053', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o poder diretivo do empregador e os limites impostos pela proteção à saúde e à intimidade do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O poder diretivo não alcança exames nem informações que não tenham relação com o risco da função', ok: true,
      why: 'Correta. Teste de gravidez, sorologia sem indicação e dado genético são discriminação.' },
    { t: 'O poder diretivo permite exigir qualquer exame que o empregador julgue relevante à contratação.', ok: false,
      why: 'Errada. Só se exige o que tem relação com o risco da função.' },
    { t: 'O poder diretivo é limitado, tornando o consentimento do candidato lícita qualquer exigência.', ok: false,
      why: 'Errada. A assimetria da relação torna esse consentimento frágil.' },
    { t: 'O poder diretivo é limitado, sendo admissível o teste de gravidez em funções de risco reprodutivo.', ok: false,
      why: 'Errada. A resposta é controlar a exposição, não testar e selecionar.' },
    { t: 'O poder diretivo é limitado, podendo dados genéticos orientar a seleção havendo suscetibilidade.', ok: false,
      why: 'Errada. Selecionar por suscetibilidade é discriminação; a resposta é reduzir a exposição.' }
  ],
  comentario: 'O limite do poder diretivo é a pertinência ao risco da função. Teste de gravidez, sorologia sem indicação e dado genético não passam nesse teste — e a resposta ao risco reprodutivo é controlar a exposição, não excluir quem pode engravidar.',
  pegadinha: 'Justificar a exclusão pela proteção da própria pessoa é o argumento clássico da discriminação em medicina do trabalho.',
  refs: ['CLT — art. 373-A', 'Lei nº 9.029/1995', 'Código de Ética Médica'] },

{ id: 'q-5.1-054', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a responsabilidade civil do empregador por acidente do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A regra é a responsabilidade subjetiva, admitida a objetiva em atividade de risco especial.', ok: true,
      why: 'Correta. E o benefício previdenciário não exclui a reparação civil.' },
    { t: 'A regra é a subjetiva, excluindo o recebimento de benefício acidentário a indenização civil.', ok: false,
      why: 'Errada. São esferas distintas e cumuláveis.' },
    { t: 'A responsabilidade do empregador é objetiva em qualquer atividade, dado o risco inerente ao trabalho.', ok: false,
      why: 'Errada. A regra é a subjetiva; a objetiva se admite em atividade de risco especial.' },
    { t: 'A regra é a subjetiva, não sendo a culpa exclusiva da vítima admitida como excludente.', ok: false,
      why: 'Errada. É excludente reconhecida, quando efetivamente demonstrada.' },
    { t: 'A regra é a subjetiva, afastando a entrega de equipamento de proteção, por si, a culpa.', ok: false,
      why: 'Errada. É preciso demonstrar fiscalização do uso e adequação da medida.' }
  ],
  comentario: 'Regra: responsabilidade subjetiva; exceção: objetiva em atividade de risco especial. Benefício previdenciário e indenização civil se somam. E a ficha de entrega de equipamento sem prova de treinamento e fiscalização não afasta culpa.',
  pegadinha: 'A ficha de entrega assinada é a prova mais apresentada e a que menos comprova o cumprimento do dever.',
  refs: ['Código Civil — arts. 927 e 950', 'CF/1988 — art. 7º, XXVIII'] },

{ id: 'q-7.8-032', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do médico do trabalho diante de solicitação da empresa para fornecer a lista de trabalhadores em uso de medicação psiquiátrica, é CORRETO afirmar:',
  alts: [
    { t: 'Recusar, esclarecendo que se informa aptidão e restrição, mas não diagnóstico nem tratamento.', ok: true,
      why: 'Correta. A recusa é dever ético, não escolha do profissional.' },
    { t: 'Fornecer, por se tratar de interesse legítimo da empresa que custeia o serviço médico prestado.', ok: false,
      why: 'Errada. Custeio não confere acesso a conteúdo clínico.' },
    { t: 'Fornecer de forma nominal, desde que a informação fique restrita à área de recursos humanos.', ok: false,
      why: 'Errada. Restringir o destinatário não afasta a quebra do sigilo.' },
    { t: 'Fornecer, pois o consentimento genérico assinado na admissão autoriza esse compartilhamento.', ok: false,
      why: 'Errada. Consentimento genérico não legitima o acesso a dados de saúde.' },
    { t: 'Recusar em silêncio, sem qualquer explicação à empresa, de modo a preservar o sigilo médico.', ok: false,
      why: 'Errada. Explicar o limite legal é parte da recusa e evita repetição do pedido.' }
  ],
  comentario: 'Aptidão e restrição funcional saem; diagnóstico, tratamento e medicação, não. Nem para o setor de pessoal, nem com consentimento genérico de admissão. E a recusa se explica — o esclarecimento é parte do trabalho.',
  pegadinha: '"Só para o recursos humanos" é a formulação que faz a quebra de sigilo parecer contida.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre medicina do trabalho', 'LGPD'] },

{ id: 'q-3.2-061', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o trabalho em turnos e noturno e seus efeitos sobre a saúde, é CORRETO afirmar:',
  alts: [
    { t: 'A dessincronização associa-se a distúrbios do sono, alterações metabólicas e mais acidentes.', ok: true,
      why: 'Correta. Sentido e velocidade da escala, iluminação e pausas modificam a magnitude.' },
    { t: 'A adaptação completa ao trabalho noturno ocorre na maioria dos trabalhadores após alguns meses.', ok: false,
      why: 'Errada. A adaptação completa é exceção, não regra.' },
    { t: 'A dessincronização existe, limitando-se seu efeito à sonolência durante a jornada de trabalho.', ok: false,
      why: 'Errada. Há efeitos metabólicos, cardiovasculares e sobre acidentes.' },
    { t: 'A dessincronização traz efeitos, sem que o sentido de rotação da escala altere a tolerância.', ok: false,
      why: 'Errada. A rotação em sentido horário é mais bem tolerada.' },
    { t: 'A dessincronização traz efeitos, neutralizados pela compensação financeira do adicional noturno.', ok: false,
      why: 'Errada. Adicional é compensação econômica, não medida de proteção.' }
  ],
  comentario: 'Turnos: dessincronização com efeitos que passam longe da simples sonolência. Adaptação completa é exceção. O que muda o resultado é o desenho da escala — sentido e velocidade de rotação, pausas, iluminação. Adicional noturno não é medida de saúde.',
  pegadinha: 'Tratar o adicional como compensação do dano confunde reparação econômica com prevenção.',
  refs: ['IARC — trabalho em turnos', 'Fischer, F. M. — trabalho em turnos e saúde'] },

{ id: 'q-7.1-052', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a proteção da trabalhadora gestante e lactante no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Afastar a exposição ao agente, com remuneração garantida e retorno à função assegurado depois', ok: true,
      why: 'Correta. O risco reprodutivo é motivo para controlar o ambiente, não para restringir o trabalho.' },
    { t: 'Afastar a trabalhadora da empresa, dado o risco que a exposição representa durante a gestação.', ok: false,
      why: 'Errada. Afasta-se da exposição, não do emprego.' },
    { t: 'Afastar da exposição, encerrando a proteção com o parto, quando cessa a vulnerabilidade fetal.', ok: false,
      why: 'Errada. A proteção alcança também o período de amamentação.' },
    { t: 'Afastar da exposição, devendo a trabalhadora comprovar dano fetal para obter o afastamento.', ok: false,
      why: 'Errada. A proteção é preventiva e não exige dano consumado.' },
    { t: 'Afastar da exposição, dirigindo-se a proteção reprodutiva exclusivamente às trabalhadoras mulheres.', ok: false,
      why: 'Errada. Há efeitos sobre a fertilidade masculina documentados.' }
  ],
  comentario: 'Gestante e lactante: afasta-se a exposição, com remuneração preservada e retorno garantido. Nunca se afasta a pessoa do emprego. E risco reprodutivo não é assunto exclusivamente feminino — há toxicidade reprodutiva masculina bem documentada.',
  pegadinha: 'A proteção reprodutiva é o pretexto mais usado para excluir mulheres de postos melhor remunerados.',
  refs: ['CLT — art. 394-A', 'NR-15', 'Lei nº 9.029/1995'] },

{ id: 'q-6.3-061', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a saúde do trabalhador idoso e o envelhecimento da população trabalhadora, é CORRETO afirmar:',
  alts: [
    { t: 'Há redução de algumas capacidades e ganho de experiência, cabendo adequar posto e organização.', ok: true,
      why: 'Correta. A idade isolada não é critério legítimo de restrição de função.' },
    { t: 'A idade cronológica é critério objetivo e suficiente para restringir funções ao trabalhador mais velho.', ok: false,
      why: 'Errada. A variabilidade individual é ampla; a avaliação é funcional.' },
    { t: 'Há redução de capacidades, apresentando o trabalhador idoso necessariamente mais acidentes.', ok: false,
      why: 'Errada. Experiência e estratégia operatória compensam parte das reduções.' },
    { t: 'Há redução de capacidades, não beneficiando os demais as adaptações feitas para os mais velhos.', ok: false,
      why: 'Errada. Adaptações de posto costumam beneficiar todo o coletivo.' },
    { t: 'Há redução de capacidades, sem que a experiência acumulada compense qualquer perda física.', ok: false,
      why: 'Errada. A estratégia operatória compensa parte relevante das reduções.' }
  ],
  comentario: 'Envelhecer no trabalho: perde-se em algumas capacidades, ganha-se em estratégia. A resposta é adaptar o posto — o que beneficia todo mundo. Idade cronológica como critério de restrição é discriminação, e o padrão de acidentes é de maior gravidade, não maior frequência.',
  pegadinha: 'A ideia de que o trabalhador idoso se acidenta mais confunde frequência com gravidade e tempo de recuperação.',
  refs: ['Estatuto da Pessoa Idosa', 'Ergonomia e envelhecimento — literatura de referência'] }

);
