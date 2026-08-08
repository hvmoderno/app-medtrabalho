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
    { t: 'A simples entrega do respirador não constitui proteção: é necessário programa com seleção adequada ao agente, ensaio de vedação, capacitação, avaliação de aptidão para uso, higienização, guarda, manutenção e troca de elementos filtrantes.', ok: true,
      why: 'Correta. Sem programa, a proteção é presumida e não verificada.' },
    { t: 'A escolha do respirador depende apenas da concentração medida do agente.', ok: false,
      why: 'Errada. Depende também do tipo de agente, da forma física, do risco imediato à vida e das condições do trabalho.' },
    { t: 'O ensaio de vedação é dispensável em respiradores descartáveis.', ok: false,
      why: 'Errada. A vedação também determina a proteção efetiva dos descartáveis.' },
    { t: 'Barba não interfere na eficácia de respiradores com vedação facial.', ok: false,
      why: 'Errada. Pelos na área de selagem comprometem a vedação e a proteção.' },
    { t: 'A troca do elemento filtrante deve ocorrer apenas quando o usuário perceber resistência.', ok: false,
      why: 'Errada. Para vários agentes não há aviso sensorial confiável; a troca segue critério definido no programa.' }
  ],
  comentario: 'Proteção respiratória é programa, não equipamento: seleção, vedação testada, treinamento, aptidão, higienização, manutenção e critério de troca. Barba na área de selagem anula a vedação, e esperar o aviso sensorial para trocar filtro falha justamente nos agentes sem odor de alerta.',
  pegadinha: 'Confiar no aviso sensorial para trocar o filtro é o erro que expõe quem já se sente protegido.',
  refs: ['NR-6', 'Programa de Proteção Respiratória — Fundacentro'] },

{ id: 'q-1.5-041', tema: '1.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a investigação de incidentes e acidentes dentro de um sistema de gestão de segurança e saúde, é CORRETO afirmar:',
  alts: [
    { t: 'A investigação deve buscar as causas organizacionais e as falhas de barreira, e não a atribuição de culpa individual — porque a cultura punitiva reduz o relato e cega o sistema justamente para os eventos precursores.', ok: true,
      why: 'Correta. Punição individual produz silêncio, e o sistema perde a informação de que depende.' },
    { t: 'A identificação do responsável individual é o principal resultado esperado da investigação.', ok: false,
      why: 'Errada. Encerrar em "ato inseguro" mantém intactas as condições que o produziram.' },
    { t: 'Incidentes sem lesão não precisam ser investigados.', ok: false,
      why: 'Errada. São eventos precursores e a fonte mais barata de aprendizado.' },
    { t: 'A investigação deve ser conduzida exclusivamente pela área de segurança, sem participação dos trabalhadores.', ok: false,
      why: 'Errada. Quem executa a tarefa detém a informação sobre como o trabalho realmente acontece.' },
    { t: 'A conclusão da investigação encerra o processo, independentemente da implementação das ações.', ok: false,
      why: 'Errada. Sem verificação da implementação e da eficácia, a investigação não muda nada.' }
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
    { t: 'A ação de vigilância pode ser desencadeada por denúncia, inclusive anônima, e a inspeção deve verificar o processo de trabalho real, ouvir os trabalhadores e, havendo risco grave e iminente, adotar medidas de interdição ou embargo no âmbito de sua competência.', ok: true,
      why: 'Correta. Denúncia é disparador legítimo, e há poder de interdição diante de risco grave e iminente.' },
    { t: 'Denúncia anônima não pode dar origem a ação de vigilância.', ok: false,
      why: 'Errada. É disparador frequente e legítimo, pelo receio de represália que a identificação traria.' },
    { t: 'A inspeção deve se restringir à análise documental apresentada pela empresa.', ok: false,
      why: 'Errada. O objeto é o trabalho real, que raramente coincide inteiramente com o documento.' },
    { t: 'Os trabalhadores não devem ser ouvidos para preservar a imparcialidade da inspeção.', ok: false,
      why: 'Errada. Ouvi-los é parte essencial do método; a proteção deles contra represália é que deve ser assegurada.' },
    { t: 'A vigilância em saúde não dispõe de qualquer poder de interdição.', ok: false,
      why: 'Errada. A vigilância sanitária dispõe desse poder diante de risco iminente à saúde.' }
  ],
  comentario: 'Vigilância: denúncia inclusive anônima como disparador, inspeção do trabalho real, escuta protegida dos trabalhadores e interdição diante de risco grave e iminente. Análise documental sozinha vê o trabalho prescrito, não o executado.',
  pegadinha: 'Recusar denúncia anônima descarta justamente a única via segura para quem teme represália.',
  refs: ['Lei nº 8.080/1990', 'PNSTT', 'Portarias de vigilância em saúde do trabalhador'] },

{ id: 'q-4.7-041', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o retorno ao trabalho após afastamento por transtorno mental relacionado ao trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O retorno deve ser planejado com avaliação do posto e das relações de trabalho, ajustes de carga e, quando indicado, retorno gradual — e o encaminhamento ao mesmo contexto inalterado é o principal preditor de recidiva e de novo afastamento.', ok: true,
      why: 'Correta. Sem mudar o contexto, o retorno reinicia o ciclo.' },
    { t: 'O retorno deve ocorrer diretamente à função anterior, sem ajustes, para evitar estigma.', ok: false,
      why: 'Errada. O estigma se combate com informação e sigilo do diagnóstico, não devolvendo o trabalhador ao fator causal.' },
    { t: 'O diagnóstico deve ser informado à chefia para viabilizar o ajuste.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional necessária, nunca o diagnóstico.' },
    { t: 'O retorno gradual não tem respaldo em saúde mental ocupacional.', ok: false,
      why: 'Errada. É estratégia reconhecida e associada a melhores desfechos de permanência.' },
    { t: 'A alta previdenciária encerra a necessidade de acompanhamento pelo serviço de saúde ocupacional.', ok: false,
      why: 'Errada. O acompanhamento no retorno é justamente o período de maior risco de recidiva.' }
  ],
  comentario: 'Retorno após adoecimento mental: avaliar posto e relações, ajustar carga, considerar gradualidade e acompanhar. Restrição funcional se informa à chefia; diagnóstico, nunca.',
  pegadinha: 'Informar o diagnóstico "para ajudar no ajuste" quebra o sigilo e alimenta o estigma que se quer evitar.',
  refs: ['Código de Ética Médica', 'Diretrizes de retorno ao trabalho em saúde mental'] },

{ id: 'q-4.9-041', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnico de laboratório sofre acidente com material biológico por perfuração com agulha de paciente com sorologia desconhecida. Sobre a conduta imediata, é CORRETO afirmar:',
  alts: [
    { t: 'Lava-se o local com água e sabão, notifica-se e avalia-se rapidamente a indicação de profilaxia pós-exposição, cuja eficácia depende do início precoce — sendo indevido espremer o ferimento ou aplicar substâncias cáusticas.', ok: true,
      why: 'Correta. Higiene simples, avaliação urgente e nada de manobras que aumentem a lesão tecidual.' },
    { t: 'Deve-se espremer o local para eliminar o sangue contaminado.', ok: false,
      why: 'Errada. A manobra aumenta o trauma local e não reduz o risco.' },
    { t: 'A conduta pode aguardar o resultado da sorologia do paciente-fonte, sem prejuízo.', ok: false,
      why: 'Errada. A eficácia da profilaxia depende do início precoce; a avaliação não espera.' },
    { t: 'A aplicação de solução cáustica no ferimento reduz o risco de transmissão.', ok: false,
      why: 'Errada. Não há benefício e há dano tecidual adicional.' },
    { t: 'A notificação do acidente é dispensável quando não há soroconversão posterior.', ok: false,
      why: 'Errada. A notificação decorre do acidente e é imediata, independentemente do desfecho.' }
  ],
  comentario: 'Acidente com material biológico: água e sabão, notificação, avaliação urgente de profilaxia. Não espremer, não usar cáustico, não esperar sorologia da fonte para avaliar. E notificar sempre, mesmo sem soroconversão.',
  pegadinha: 'Esperar a sorologia da fonte parece prudente e consome exatamente a janela em que a profilaxia funciona.',
  refs: ['NR-32', 'Protocolos do Ministério da Saúde para exposição a material biológico'] },

{ id: 'q-5.6-042', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a reabilitação profissional, é CORRETO afirmar:',
  alts: [
    { t: 'Seu objetivo é o reingresso no mercado de trabalho por meio de readaptação ou requalificação compatível com as limitações residuais, e ela independe de carência, podendo alcançar também segurados sem direito a benefício por incapacidade.', ok: true,
      why: 'Correta. Não há exigência de carência para a reabilitação profissional.' },
    { t: 'A reabilitação profissional exige carência mínima de contribuições.', ok: false,
      why: 'Errada. É serviço prestado independentemente de carência.' },
    { t: 'Ela se destina exclusivamente a segurados com incapacidade total e permanente.', ok: false,
      why: 'Errada. Volta-se justamente a quem tem capacidade residual aproveitável.' },
    { t: 'A empresa não tem obrigação relacionada à recolocação de trabalhadores reabilitados.', ok: false,
      why: 'Errada. Há previsão legal de reserva de vagas para reabilitados e pessoas com deficiência.' },
    { t: 'A conclusão do processo depende exclusivamente da avaliação médica.', ok: false,
      why: 'Errada. O processo é multiprofissional e considera aspectos funcionais, sociais e de mercado.' }
  ],
  comentario: 'Reabilitação profissional: sem carência, dirigida a quem tem capacidade residual, processo multiprofissional, e com contrapartida legal das empresas na reserva de vagas para reabilitados e pessoas com deficiência.',
  pegadinha: 'Exigir carência para a reabilitação é a confusão mais comum com as regras dos benefícios.',
  refs: ['Lei nº 8.213/1991 — arts. 89 a 93', 'Decreto nº 3.048/1999'] }

);
