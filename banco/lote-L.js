/* Lote L — 2.5, 2.8, 1.5, 1.8, 4.7, 4.9, 5.6. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-2.5-041', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a formação de grupos homogêneos de exposição em higiene ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'O grupo reúne trabalhadores cuja exposição é suficientemente semelhante para que a amostragem em alguns represente todos, e a homogeneidade precisa ser verificada pelos resultados — variabilidade excessiva indica que o grupo foi mal formado e deve ser dividido.', ok: true,
      why: 'Correta. O grupo é hipótese a ser testada pelos dados, não uma classificação administrativa definitiva.' },
    { t: 'O grupo se define pelo cargo formal dos trabalhadores.', ok: false,
      why: 'Errada. Mesmo cargo pode ter exposições muito diferentes conforme o posto e a tarefa.' },
    { t: 'Definido o grupo, ele não deve ser revisto.', ok: false,
      why: 'Errada. A revisão é obrigatória quando os resultados mostram dispersão elevada ou o processo muda.' },
    { t: 'A amostragem de um único trabalhador basta para caracterizar qualquer grupo.', ok: false,
      why: 'Errada. É preciso número de amostras que permita avaliar a variabilidade.' },
    { t: 'Grupos homogêneos servem apenas para reduzir o custo da avaliação.', ok: false,
      why: 'Errada. Servem para tornar a avaliação estatisticamente interpretável e representativa.' }
  ],
  comentario: 'Grupo homogêneo é hipótese: agrupa-se por similaridade real de exposição, amostra-se e verifica-se a dispersão. Variabilidade alta significa grupo mal formado — divide-se. Agrupar por cargo é o atalho que compromete tudo o que vem depois.',
  pegadinha: 'Definir o grupo pelo cargo em carteira é prático e produz grupos que não são homogêneos.',
  refs: ['AIHA — estratégia de avaliação de exposições', 'NHO — Fundacentro'] },

{ id: 'q-2.5-042', tema: '2.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre avaliação de exposição por amostragem pessoal e por amostragem de área, é CORRETO afirmar:',
  alts: [
    { t: 'A amostragem pessoal, feita na zona respiratória do trabalhador, estima a exposição individual e é a referência para comparação com limites; a de área caracteriza o ambiente e é útil para identificar fontes e avaliar a eficácia de controles.', ok: true,
      why: 'Correta. Finalidades distintas: uma mede a pessoa, a outra descreve o ambiente.' },
    { t: 'As duas são intercambiáveis para comparação com limites de exposição.', ok: false,
      why: 'Errada. Os limites se referem à exposição na zona respiratória do trabalhador.' },
    { t: 'A amostragem de área não tem utilidade em higiene ocupacional.', ok: false,
      why: 'Errada. É valiosa para mapear fontes e verificar controles de engenharia.' },
    { t: 'A amostragem pessoal dispensa a descrição das tarefas realizadas no período.', ok: false,
      why: 'Errada. Sem o registro das tarefas, o resultado não pode ser interpretado nem reproduzido.' },
    { t: 'A posição do amostrador no corpo do trabalhador é irrelevante.', ok: false,
      why: 'Errada. A coleta deve ser na zona respiratória, e desvios alteram o resultado.' }
  ],
  comentario: 'Pessoal mede a pessoa, na zona respiratória, e é o que se compara ao limite. Área mapeia fonte e testa controle. E toda amostragem precisa do registro das tarefas do período — sem isso o número não se interpreta.',
  pegadinha: 'Usar resultado de área para concluir sobre cumprimento de limite subestima ou superestima sem controle.',
  refs: ['NHO — Fundacentro', 'AIHA'] },

{ id: 'q-2.8-042', tema: '2.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o programa de proteção respiratória, é CORRETO afirmar:',
  alts: [
    { t: 'A entrega não é proteção: exige programa com seleção, ensaio de vedação, capacitação e manutenção.', ok: true,
      why: 'Correta. Sem programa, o respirador entregue não produz a proteção esperada.' },
    { t: 'A escolha do respirador decorre da concentração medida do agente no ambiente de trabalho.', ok: false,
      why: 'Errada. Dependem também do tipo de agente, do fator de proteção e da atmosfera.' },
    { t: 'O programa exige ensaio de vedação, dispensável nos respiradores do tipo descartável.', ok: false,
      why: 'Errada. O ensaio se aplica também a peças faciais descartáveis com vedação.' },
    { t: 'O programa exige seleção e capacitação, sem que a barba interfira na eficácia da vedação facial.', ok: false,
      why: 'Errada. Pelos na zona de vedação comprometem substancialmente a proteção.' },
    { t: 'O programa exige manutenção, trocando-se o filtro quando o usuário perceber aumento de resistência.', ok: false,
      why: 'Errada. A troca segue cronograma; a percepção não indica saturação química.' }
  ],
  comentario: 'Proteção respiratória é programa, não equipamento: seleção, vedação testada, treinamento, aptidão, higienização, manutenção e critério de troca. Barba na área de selagem anula a vedação, e esperar o aviso sensorial para trocar filtro falha justamente nos agentes sem odor de alerta.',
  pegadinha: 'Confiar no aviso sensorial para trocar o filtro é o erro que expõe quem já se sente protegido.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] },

{ id: 'q-1.5-041', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a investigação de incidentes e acidentes dentro de um sistema de gestão de segurança e saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Deve buscar causas organizacionais e falhas de barreira, e não atribuir culpa individual.', ok: true,
      why: 'Correta. A cultura punitiva reduz o relato e cega o sistema para os eventos precursores.' },
    { t: 'Deve identificar o responsável individual pelo evento, principal resultado esperado da investigação.', ok: false,
      why: 'Errada. O objeto são as causas organizacionais e as falhas de barreira.' },
    { t: 'Deve buscar causas organizacionais, não precisando investigar incidentes que não geraram lesão.', ok: false,
      why: 'Errada. São precursores e a fonte mais rica de aprendizado.' },
    { t: 'Deve ser conduzida exclusivamente pela área de segurança, sem participação dos trabalhadores.', ok: false,
      why: 'Errada. Quem executa a tarefa detém a informação sobre o trabalho real.' },
    { t: 'Deve buscar causas organizacionais, encerrando-se com a conclusão, independentemente das ações.', ok: false,
      why: 'Errada. Sem implementação e verificação, a investigação não produz efeito.' }
  ],
  comentario: 'Investigar é procurar falha de barreira e causa organizacional, com participação de quem executa, incluindo eventos sem lesão. E o ciclo só fecha quando se verifica se a ação implementada funcionou.',
  pegadinha: 'Parar a análise no ato inseguro do trabalhador preserva todas as condições que tornaram o ato provável.',
  refs: ['ISO 45001', 'NR-1'] },

{ id: 'q-1.5-042', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a participação dos trabalhadores em sistemas de gestão de segurança e saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Ela é requisito estruturante, e não etapa opcional: abrange consulta na identificação de perigos, na definição de controles e na investigação de eventos, com remoção de barreiras à participação, como represália e custo para o trabalhador.', ok: true,
      why: 'Correta. Participação sem remoção de barreiras é formal e não produz informação.' },
    { t: 'A participação se cumpre com a existência formal de uma comissão interna.', ok: false,
      why: 'Errada. A comissão é um canal; a participação exige consulta efetiva nos processos.' },
    { t: 'A consulta aos trabalhadores é recomendável apenas em empresas de grande porte.', ok: false,
      why: 'Errada. É requisito independente do porte.' },
    { t: 'Cabe ao trabalhador arcar com o tempo dedicado às atividades de participação.', ok: false,
      why: 'Errada. Custo e tempo são de responsabilidade do empregador.' },
    { t: 'A participação deve se limitar à fase de execução das medidas já decididas.', ok: false,
      why: 'Errada. Ela é necessária desde a identificação dos perigos e a escolha dos controles.' }
  ],
  comentario: 'Participação real: desde a identificação do perigo, sem custo para o trabalhador e sem risco de represália. Comissão constituída é canal, não prova de participação.',
  pegadinha: 'Apontar a existência da comissão como evidência de participação confunde estrutura com processo.',
  refs: ['ISO 45001', 'NR-5', 'NR-1'] },

{ id: 'q-1.8-042', tema: '1.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a vigilância em saúde do trabalhador diante de denúncia de risco grave em uma empresa, é CORRETO afirmar:',
  alts: [
    { t: 'Pode ser desencadeada por denúncia anônima, e a inspeção verifica o processo de trabalho real.', ok: true,
      why: 'Correta. Havendo risco grave e iminente, cabe interdição ou embargo na sua competência.' },
    { t: 'Pode ser desencadeada por denúncia identificada, não dando a anônima origem a ação de vigilância.', ok: false,
      why: 'Errada. A denúncia anônima pode desencadear a ação.' },
    { t: 'Pode ser desencadeada por denúncia, restringindo-se a inspeção à análise documental da empresa.', ok: false,
      why: 'Errada. Deve verificar o processo de trabalho real e ouvir os trabalhadores.' },
    { t: 'Pode ser desencadeada por denúncia, não devendo os trabalhadores ser ouvidos, por imparcialidade.', ok: false,
      why: 'Errada. Ouvi-los é fonte primária sobre o trabalho como ele ocorre.' },
    { t: 'Pode ser desencadeada por denúncia, não dispondo a vigilância em saúde de poder de interdição.', ok: false,
      why: 'Errada. Dispõe, no âmbito de sua competência sanitária.' }
  ],
  comentario: 'Vigilância: denúncia inclusive anônima como disparador, inspeção do trabalho real, escuta protegida dos trabalhadores e interdição diante de risco grave e iminente. Análise documental sozinha vê o trabalho prescrito, não o executado.',
  pegadinha: 'Recusar denúncia anônima descarta justamente a única via segura para quem teme represália.',
  refs: ['Lei nº 8.080/1990', 'PNSTT', 'Portarias de vigilância em saúde do trabalhador'] },

{ id: 'q-4.7-041', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o retorno ao trabalho após afastamento por transtorno mental relacionado ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser planejado com avaliação do posto e das relações, com ajustes e retorno gradual.', ok: true,
      why: 'Correta. Voltar ao mesmo contexto inalterado é o principal preditor de recidiva.' },
    { t: 'Deve ocorrer diretamente à função anterior, sem ajustes, para não estigmatizar o trabalhador.', ok: false,
      why: 'Errada. Retornar ao contexto inalterado é o principal preditor de novo afastamento.' },
    { t: 'Deve ser planejado, informando-se o diagnóstico à chefia para viabilizar os ajustes necessários.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional; o diagnóstico permanece sob sigilo.' },
    { t: 'Deve ser planejado com ajustes de carga, não tendo o retorno gradual respaldo em saúde mental.', ok: false,
      why: 'Errada. É estratégia com evidência de melhores desfechos também nesses quadros.' },
    { t: 'Deve ser planejado, encerrando a alta previdenciária o acompanhamento pelo serviço ocupacional.', ok: false,
      why: 'Errada. O acompanhamento no retorno é o que consolida a permanência.' }
  ],
  comentario: 'Retorno após adoecimento mental: avaliar posto e relações, ajustar carga, considerar gradualidade e acompanhar. Restrição funcional se informa à chefia; diagnóstico, nunca.',
  pegadinha: 'Informar o diagnóstico "para ajudar no ajuste" quebra o sigilo e alimenta o estigma que se quer evitar.',
  refs: ['Código de Ética Médica', 'Diretrizes de retorno ao trabalho em saúde mental'] },

{ id: 'q-4.9-041', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnico de laboratório sofre acidente com material biológico por perfuração com agulha de paciente com sorologia desconhecida. Sobre a conduta imediata, é CORRETO afirmar:',
  alts: [
    { t: 'Lavar com água e sabão, notificar e avaliar rapidamente a indicação de profilaxia.', ok: true,
      why: 'Correta. A eficácia depende do início precoce; espremer ou usar cáustico é indevido.' },
    { t: 'Espremer o local para eliminar o sangue contaminado, lavar com água e sabão e notificar o caso.', ok: false,
      why: 'Errada. Espremer aumenta o trauma local e não reduz o risco.' },
    { t: 'Lavar e notificar, podendo a conduta aguardar o resultado da sorologia do paciente-fonte.', ok: false,
      why: 'Errada. A eficácia da profilaxia depende do início precoce.' },
    { t: 'Lavar com solução cáustica no ferimento, medida que reduz o risco de transmissão do agente.', ok: false,
      why: 'Errada. Cáusticos lesam o tecido e não reduzem o risco.' },
    { t: 'Lavar e avaliar a profilaxia, sendo dispensável a notificação se não houver soroconversão.', ok: false,
      why: 'Errada. A notificação é devida no momento do acidente.' }
  ],
  comentario: 'Acidente com material biológico: água e sabão, notificação, avaliação urgente de profilaxia. Não espremer, não usar cáustico, não esperar sorologia da fonte para avaliar. E notificar sempre, mesmo sem soroconversão.',
  pegadinha: 'Esperar a sorologia da fonte parece prudente e consome exatamente a janela em que a profilaxia funciona.',
  refs: ['NR-32', 'Protocolos do Ministério da Saúde para exposição a material biológico'] },

{ id: 'q-5.6-042', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a reabilitação profissional, é CORRETO afirmar:',
  alts: [
    { t: 'Visa ao reingresso por readaptação ou requalificação e independe de carência.', ok: true,
      why: 'Correta. Pode alcançar também segurados sem direito a benefício por incapacidade.' },
    { t: 'Visa ao reingresso no mercado e exige carência mínima de contribuições do segurado atendido.', ok: false,
      why: 'Errada. Independe de carência.' },
    { t: 'Visa ao reingresso, destinando-se exclusivamente a segurados com incapacidade total e permanente.', ok: false,
      why: 'Errada. Volta-se a quem tem capacidade residual a ser aproveitada.' },
    { t: 'Visa ao reingresso, sem obrigação da empresa quanto à recolocação de trabalhadores reabilitados.', ok: false,
      why: 'Errada. Há previsão legal de reserva de vagas para reabilitados.' },
    { t: 'Visa ao reingresso, dependendo a conclusão do processo exclusivamente da avaliação médica.', ok: false,
      why: 'Errada. Envolve avaliação social, profissional e de mercado, além da médica.' }
  ],
  comentario: 'Reabilitação profissional: sem carência, dirigida a quem tem capacidade residual, processo multiprofissional, e com contrapartida legal das empresas na reserva de vagas para reabilitados e pessoas com deficiência.',
  pegadinha: 'Exigir carência para a reabilitação é a confusão mais comum com as regras dos benefícios.',
  refs: ['Lei nº 8.213/1991 — arts. 89 a 93', 'Decreto nº 3.048/1999'] }

);
