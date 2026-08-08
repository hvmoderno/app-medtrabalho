/* Lote M — 6.1, 7.1, 7.6, 7.8, 3.2, 6.3, 5.1. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-6.1-071', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o programa de controle médico de saúde ocupacional e sua articulação com o gerenciamento de riscos, é CORRETO afirmar:',
  alts: [
    { t: 'Os exames e sua periodicidade devem decorrer dos riscos efetivamente identificados no inventário, e não de uma lista padronizada aplicada indistintamente — exame sem relação com o risco consome recurso e não detecta o que importa.', ok: true,
      why: 'Correta. O programa médico é consequência do inventário de riscos, não um pacote independente.' },
    { t: 'A bateria de exames deve ser a mesma para todos os trabalhadores da empresa.', ok: false,
      why: 'Errada. A indicação decorre do risco de cada função.' },
    { t: 'O programa médico substitui as medidas de controle no ambiente.', ok: false,
      why: 'Errada. Vigilância da saúde não substitui controle da exposição.' },
    { t: 'O relatório analítico do programa é dispensável quando não há alterações detectadas.', ok: false,
      why: 'Errada. O relatório é obrigatório e a ausência de alterações também é informação a analisar.' },
    { t: 'Resultados alterados devem ser comunicados ao empregador com o diagnóstico detalhado.', ok: false,
      why: 'Errada. Comunica-se aptidão e restrição funcional; o diagnóstico permanece sob sigilo.' }
  ],
  comentario: 'O programa médico nasce do inventário de riscos: exame indicado pelo risco da função, com relatório analítico anual mesmo sem alterações. E a comunicação ao empregador é de aptidão e restrição — nunca de diagnóstico.',
  pegadinha: 'A bateria padronizada para todos parece cuidado e é gasto que não detecta o risco real de cada função.',
  refs: ['NR-7', 'NR-1', 'Código de Ética Médica'] },

{ id: 'q-6.1-072', tema: '6.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o exame demissional, é CORRETO afirmar:',
  alts: [
    { t: 'Ele documenta o estado de saúde do trabalhador ao término do vínculo e é peça central em discussões posteriores de nexo — sua omissão prejudica tanto o trabalhador, que perde o registro, quanto a empresa, que fica sem elemento de defesa.', ok: true,
      why: 'Correta. É o registro que delimita o que existia ao fim do contrato.' },
    { t: 'O exame demissional é dispensável em qualquer hipótese quando o trabalhador pede demissão.', ok: false,
      why: 'Errada. A forma de desligamento não é o critério de dispensa previsto.' },
    { t: 'Sua realização é interesse exclusivo do trabalhador.', ok: false,
      why: 'Errada. Também é o elemento que documenta a situação para a empresa.' },
    { t: 'Constatada alteração relacionada ao trabalho, o médico deve emitir o atestado de saúde ocupacional como apto e concluir o desligamento.', ok: false,
      why: 'Errada. Constatada alteração, cabem a conduta, a emissão da comunicação de acidente quando devida e o encaminhamento.' },
    { t: 'O exame demissional não gera obrigação de emissão de comunicação de acidente de trabalho.', ok: false,
      why: 'Errada. Identificada doença relacionada ao trabalho, a comunicação é devida.' }
  ],
  comentario: 'O demissional fecha o registro do vínculo — e é onde doenças ocupacionais aparecem pela última vez antes de sumir. Alteração encontrada gera conduta e comunicação de acidente quando cabível, não assinatura de apto para liberar o desligamento.',
  pegadinha: 'Assinar apto para não travar a rescisão transforma o exame em formalidade e apaga o achado.',
  refs: ['NR-7', 'Lei nº 8.213/1991'] },

{ id: 'q-7.1-053', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o poder diretivo do empregador e os limites impostos pela proteção à saúde e à intimidade do trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'O poder diretivo não alcança a exigência de exames ou informações sem relação com o risco da função — como testes de gravidez, sorologias sem indicação ocupacional ou dados genéticos —, práticas que configuram discriminação e violação da intimidade.', ok: true,
      why: 'Correta. A pertinência ao risco da função é o limite do que se pode exigir.' },
    { t: 'O empregador pode exigir qualquer exame que julgue relevante para a contratação.', ok: false,
      why: 'Errada. Exame sem pertinência ao risco da função é prática vedada.' },
    { t: 'O consentimento do candidato torna lícita a exigência de qualquer exame.', ok: false,
      why: 'Errada. Consentimento em relação assimétrica de seleção não valida prática discriminatória.' },
    { t: 'A exigência de teste de gravidez é admissível em funções com exposição a agentes de risco reprodutivo.', ok: false,
      why: 'Errada. A conduta é eliminar ou controlar a exposição, nunca condicionar a admissão ao resultado.' },
    { t: 'Informações genéticas podem orientar a seleção quando há suscetibilidade conhecida ao agente do posto.', ok: false,
      why: 'Errada. Seleção por suscetibilidade genética é discriminação: o dever é adequar o ambiente, não filtrar pessoas.' }
  ],
  comentario: 'O limite do poder diretivo é a pertinência ao risco da função. Teste de gravidez, sorologia sem indicação e dado genético não passam nesse teste — e a resposta ao risco reprodutivo é controlar a exposição, não excluir quem pode engravidar.',
  pegadinha: 'Justificar a exclusão pela proteção da própria pessoa é o argumento clássico da discriminação em medicina do trabalho.',
  refs: ['CLT — art. 373-A', 'Lei nº 9.029/1995', 'Código de Ética Médica'] },

{ id: 'q-5.1-054', tema: '5.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a responsabilidade civil do empregador por acidente do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A regra geral é a responsabilidade subjetiva, dependente de dolo ou culpa, mas admite-se a responsabilidade objetiva quando a atividade desenvolvida implica, por sua natureza, risco especial aos trabalhadores — e o benefício previdenciário não exclui a reparação civil.', ok: true,
      why: 'Correta. Benefício acidentário e indenização civil têm naturezas distintas e são cumuláveis.' },
    { t: 'O recebimento de benefício acidentário exclui o direito à indenização civil.', ok: false,
      why: 'Errada. As esferas são autônomas e as verbas se cumulam.' },
    { t: 'A responsabilidade do empregador é sempre objetiva em qualquer atividade.', ok: false,
      why: 'Errada. A regra é subjetiva; a objetiva é a exceção para atividade de risco especial.' },
    { t: 'A culpa exclusiva da vítima nunca é admitida como excludente.', ok: false,
      why: 'Errada. É excludente reconhecida, embora de demonstração difícil quando havia falha de proteção.' },
    { t: 'A entrega de equipamento de proteção individual, por si, afasta a culpa do empregador.', ok: false,
      why: 'Errada. É preciso demonstrar também treinamento, fiscalização do uso e adequação do equipamento ao risco.' }
  ],
  comentario: 'Regra: responsabilidade subjetiva; exceção: objetiva em atividade de risco especial. Benefício previdenciário e indenização civil se somam. E a ficha de entrega de equipamento sem prova de treinamento e fiscalização não afasta culpa.',
  pegadinha: 'A ficha de entrega assinada é a prova mais apresentada e a que menos comprova o cumprimento do dever.',
  refs: ['Código Civil — arts. 927 e 950', 'CF/1988 — art. 7º, XXVIII'] },

{ id: 'q-7.8-032', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a atuação do médico do trabalho diante de solicitação da empresa para fornecer a lista de trabalhadores em uso de medicação psiquiátrica, é CORRETO afirmar:',
  alts: [
    { t: 'A solicitação deve ser recusada, com esclarecimento de que se pode informar aptidão e restrições funcionais, mas não diagnósticos, tratamentos ou medicamentos — e a recusa é dever ético, não escolha do profissional.', ok: true,
      why: 'Correta. O sigilo não é disponível ao médico nem negociável com o contratante.' },
    { t: 'A informação pode ser fornecida por se tratar de interesse legítimo da empresa que custeia o serviço.', ok: false,
      why: 'Errada. Custear o serviço não cria direito de acesso a dado clínico.' },
    { t: 'A informação pode ser fornecida de forma nominal desde que restrita à área de recursos humanos.', ok: false,
      why: 'Errada. Restringir o destinatário não descaracteriza a quebra de sigilo.' },
    { t: 'O consentimento genérico assinado na admissão autoriza o fornecimento.', ok: false,
      why: 'Errada. Consentimento genérico obtido em relação assimétrica não autoriza revelação de dado sensível.' },
    { t: 'A recusa deve ser silenciosa, sem explicação à empresa, para preservar o sigilo.', ok: false,
      why: 'Errada. Explicar o limite ético é parte do papel do médico e evita a repetição do pedido.' }
  ],
  comentario: 'Aptidão e restrição funcional saem; diagnóstico, tratamento e medicação, não. Nem para o setor de pessoal, nem com consentimento genérico de admissão. E a recusa se explica — o esclarecimento é parte do trabalho.',
  pegadinha: '"Só para o recursos humanos" é a formulação que faz a quebra de sigilo parecer contida.',
  refs: ['Código de Ética Médica', 'Resoluções do CFM sobre medicina do trabalho', 'LGPD'] },

{ id: 'q-3.2-061', tema: '3.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o trabalho em turnos e noturno e seus efeitos sobre a saúde, é CORRETO afirmar:',
  alts: [
    { t: 'A dessincronização circadiana se associa a distúrbios do sono, alterações metabólicas e cardiovasculares e maior risco de acidentes, e medidas como sentido de rotação e velocidade da escala, iluminação e organização das pausas modificam a magnitude do efeito.', ok: true,
      why: 'Correta. O desenho da escala é variável modificável, com efeito documentado.' },
    { t: 'A adaptação completa ao trabalho noturno ocorre na maioria dos trabalhadores após alguns meses.', ok: false,
      why: 'Errada. A adaptação circadiana completa é incomum, sobretudo com folgas em horário diurno.' },
    { t: 'O efeito do trabalho em turnos se limita à sonolência durante a jornada.', ok: false,
      why: 'Errada. Há repercussões metabólicas, cardiovasculares, digestivas e de saúde mental.' },
    { t: 'O sentido de rotação da escala não interfere na tolerância do trabalhador.', ok: false,
      why: 'Errada. É um dos parâmetros com efeito documentado sobre a adaptação.' },
    { t: 'A compensação financeira do adicional noturno neutraliza os efeitos sobre a saúde.', ok: false,
      why: 'Errada. Adicional remunera; não previne nem reduz efeito biológico.' }
  ],
  comentario: 'Turnos: dessincronização com efeitos que passam longe da simples sonolência. Adaptação completa é exceção. O que muda o resultado é o desenho da escala — sentido e velocidade de rotação, pausas, iluminação. Adicional noturno não é medida de saúde.',
  pegadinha: 'Tratar o adicional como compensação do dano confunde reparação econômica com prevenção.',
  refs: ['IARC — trabalho em turnos', 'Fischer, F. M. — trabalho em turnos e saúde'] },

{ id: 'q-7.1-052', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a proteção da trabalhadora gestante e lactante no ambiente de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A conduta correta é afastar a exposição ao agente de risco, com garantia de remuneração e de retorno à função, e não afastar a trabalhadora do emprego — o risco reprodutivo é motivo para controlar o ambiente, jamais para restringir o acesso ao trabalho.', ok: true,
      why: 'Correta. Protege-se a gestação sem transformar a proteção em exclusão.' },
    { t: 'A gestação justifica o desligamento da trabalhadora de função com exposição a agentes nocivos.', ok: false,
      why: 'Errada. A previsão é de afastamento da atividade insalubre com manutenção da remuneração, não de desligamento.' },
    { t: 'A proteção alcança apenas o período gestacional, encerrando-se com o parto.', ok: false,
      why: 'Errada. A lactação também é contemplada, por agentes que se excretam no leite.' },
    { t: 'A trabalhadora deve comprovar dano fetal para obter o afastamento da atividade.', ok: false,
      why: 'Errada. A proteção é preventiva e não depende de dano demonstrado.' },
    { t: 'A proteção reprodutiva se dirige exclusivamente às mulheres.', ok: false,
      why: 'Errada. Há agentes com toxicidade reprodutiva masculina, e a proteção deve alcançar ambos.' }
  ],
  comentario: 'Gestante e lactante: afasta-se a exposição, com remuneração preservada e retorno garantido. Nunca se afasta a pessoa do emprego. E risco reprodutivo não é assunto exclusivamente feminino — há toxicidade reprodutiva masculina bem documentada.',
  pegadinha: 'A proteção reprodutiva é o pretexto mais usado para excluir mulheres de postos melhor remunerados.',
  refs: ['CLT — art. 394-A', 'NR-15', 'Lei nº 9.029/1995'] },

{ id: 'q-6.3-061', tema: '6.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a saúde do trabalhador idoso e o envelhecimento da população trabalhadora, é CORRETO afirmar:',
  alts: [
    { t: 'O envelhecimento traz redução de algumas capacidades e ganho de experiência e estratégia operatória, e a resposta adequada é adequar o posto e a organização do trabalho — a idade isolada não é critério legítimo de restrição de função.', ok: true,
      why: 'Correta. Avalia-se capacidade funcional individual frente à exigência, não idade cronológica.' },
    { t: 'A idade cronológica é critério objetivo suficiente para restringir funções.', ok: false,
      why: 'Errada. A variabilidade interindividual é grande e a idade isolada é critério discriminatório.' },
    { t: 'O trabalhador idoso apresenta necessariamente maior taxa de acidentes.', ok: false,
      why: 'Errada. A frequência tende a não ser maior; a gravidade e o tempo de recuperação é que costumam ser.' },
    { t: 'Adaptações do posto para trabalhadores mais velhos não beneficiam os demais.', ok: false,
      why: 'Errada. Adaptações de iluminação, altura e ritmo beneficiam toda a população trabalhadora.' },
    { t: 'A experiência acumulada não compensa qualquer redução de capacidade física.', ok: false,
      why: 'Errada. Estratégias operatórias desenvolvidas com a experiência compensam parte das perdas.' }
  ],
  comentario: 'Envelhecer no trabalho: perde-se em algumas capacidades, ganha-se em estratégia. A resposta é adaptar o posto — o que beneficia todo mundo. Idade cronológica como critério de restrição é discriminação, e o padrão de acidentes é de maior gravidade, não maior frequência.',
  pegadinha: 'A ideia de que o trabalhador idoso se acidenta mais confunde frequência com gravidade e tempo de recuperação.',
  refs: ['Estatuto da Pessoa Idosa', 'Ergonomia e envelhecimento — literatura de referência'] }

);
