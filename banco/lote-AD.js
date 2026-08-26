/* Lote AD — 4.6, 4.8, 5.4, 5.5, 4.7, 4.9, 4.10, 5.3, 5.6. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.6-090', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o teletrabalho e seus efeitos sobre a saúde mental, é CORRETO afirmar:',
  alts: [
    { t: 'Pode aumentar a autonomia, mas também dissolver fronteiras e enfraquecer o suporte social entre colegas', ok: true,
      why: 'Correta. A modalidade não determina o efeito; a organização do trabalho determina.' },
    { t: 'Ele reduz de forma uniforme os riscos psicossociais, por afastar o trabalhador do ambiente presencial.', ok: false,
      why: 'Errada. Introduz riscos próprios, como conexão prolongada e isolamento.' },
    { t: 'Ele pode aumentar autonomia, e a ausência de deslocamento elimina os fatores de sobrecarga da jornada.', ok: false,
      why: 'Errada. A sobrecarga se relaciona a demandas, prazos e disponibilidade, não ao deslocamento.' },
    { t: 'Ele pode dissolver fronteiras, não alcançando o trabalho remoto as obrigações de saúde e segurança.', ok: false,
      why: 'Errada. Alcançam, incluindo orientação sobre condições ergonômicas do posto.' },
    { t: 'Ele pode prolongar a conexão, sem que o isolamento social no teletrabalho repercuta sobre a saúde.', ok: false,
      why: 'Errada. O suporte social é fator protetor reconhecido, e sua perda é relevante.' }
  ],
  comentario: 'Teletrabalho não é bom nem ruim por natureza: depende de fronteira preservada, expectativa de disponibilidade e suporte social mantido. As obrigações de saúde e segurança seguem o trabalhador até a casa dele.',
  pegadinha: 'Supor que a ausência de deslocamento resolve sobrecarga confunde tempo de trajeto com demanda de trabalho.',
  refs: ['CLT — teletrabalho', 'NR-17', 'OIT — teletrabalho e saúde'] },

{ id: 'q-4.8-090', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a comunicação a um trabalhador de que sua neoplasia pode ter relação com o trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Deve ser prestada com clareza, registro e orientação sobre os direitos decorrentes do reconhecimento.', ok: true,
      why: 'Correta. Não informar é decidir pelo trabalhador que ele não terá acesso a esses direitos.' },
    { t: 'Deve ser omitida enquanto a suspeita não estiver confirmada, para não gerar litígio com a empresa.', ok: false,
      why: 'Errada. Evitar litígio não é razão ética para sonegar informação ao paciente.' },
    { t: 'Deve ser prestada com clareza e registro, somente após a confirmação judicial do nexo ocupacional.', ok: false,
      why: 'Errada. A suspeita fundamentada já deve ser comunicada e registrada.' },
    { t: 'Deve ser prestada com clareza, não integrando a orientação sobre direitos o papel do médico nesse contexto.', ok: false,
      why: 'Errada. Informar sobre a possibilidade de reconhecimento é parte do cuidado.' },
    { t: 'Deve ser prestada com registro, sendo incabível a emissão de comunicação de acidente em neoplasia.', ok: false,
      why: 'Errada. Doença ocupacional é equiparada e a comunicação é devida.' }
  ],
  comentario: 'Suspeita fundamentada de câncer relacionado ao trabalho se comunica, se registra e se orienta — com emissão da comunicação de acidente. Omitir para evitar conflito transfere ao trabalhador o custo do silêncio.',
  pegadinha: 'Esperar confirmação judicial do nexo para informar inverte a ordem: a informação é o que permite buscar o reconhecimento.',
  refs: ['Código de Ética Médica', 'Lei nº 8.213/1991'] },

{ id: 'q-5.4-100', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a fundamentação do laudo pericial, é CORRETO afirmar:',
  alts: [
    { t: 'Deve explicitar metodologia, elementos e raciocínio, permitindo a terceiros reconstituir o percurso.', ok: true,
      why: 'Correta. Reprodutibilidade do raciocínio é o que distingue laudo de opinião.' },
    { t: 'Deve explicitar os elementos considerados, dispensando a conclusão bem fundamentada a descrição da metodologia.', ok: false,
      why: 'Errada. A metodologia é parte da fundamentação.' },
    { t: 'Deve explicitar o raciocínio, substituindo a menção aos documentos analisados a análise de seu conteúdo.', ok: false,
      why: 'Errada. É preciso analisar e não apenas listar.' },
    { t: 'Deve explicitar metodologia e raciocínio, sendo a extensão do laudo indicador confiável de sua qualidade.', ok: false,
      why: 'Errada. Extensão não substitui coerência entre elementos e conclusão.' },
    { t: 'Deve explicitar o raciocínio, podendo omitir os elementos desfavoráveis à conclusão que adotou.', ok: false,
      why: 'Errada. Devem ser enfrentados expressamente; omiti-los compromete a credibilidade.' }
  ],
  comentario: 'Laudo bom é aquele cujo raciocínio um terceiro consegue reconstituir: metodologia declarada, elementos analisados, inclusive os desfavoráveis, e conclusão que decorre deles. Tamanho não é qualidade.',
  pegadinha: 'Omitir o elemento que contraria a conclusão é o que transforma laudo em peça de defesa.',
  refs: ['Código de Processo Civil', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-090', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso da Classificação Internacional de Funcionalidade na avaliação de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'Padroniza a descrição da funcionalidade e do contexto, complementando a classificação diagnóstica', ok: true,
      why: 'Correta. Descreve por que dois trabalhadores com o mesmo diagnóstico têm capacidades distintas.' },
    { t: 'Padroniza a descrição de funcionalidade e substitui a classificação diagnóstica de doenças nesse uso.', ok: false,
      why: 'Errada. São classificações complementares, com objetos distintos.' },
    { t: 'Padroniza a descrição de limitações corporais do avaliado, sem considerar os fatores do ambiente.', ok: false,
      why: 'Errada. Fatores ambientais são componente explícito da classificação.' },
    { t: 'Padroniza a descrição de funcionalidade, com aplicação restrita à reabilitação e não à avaliação de capacidade.', ok: false,
      why: 'Errada. É amplamente aplicável à avaliação de capacidade laborativa.' },
    { t: 'Padroniza a descrição de funcionalidade e contexto, dispensando por isso a avaliação clínica individual.', ok: false,
      why: 'Errada. É instrumento de descrição, aplicado sobre a avaliação clínica.' }
  ],
  comentario: 'A classificação de funcionalidade descreve o que o diagnóstico não alcança: atividade, participação e o ambiente. Complementa a classificação de doenças e explica por que o mesmo diagnóstico dá capacidades diferentes.',
  pegadinha: 'Tratá-la como substituta do diagnóstico confunde duas classificações que servem a perguntas distintas.',
  refs: ['CIF — OMS'] },

{ id: 'q-4.7-090', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a prescrição e o uso de psicofármacos em trabalhadores de funções críticas, é CORRETO afirmar:',
  alts: [
    { t: 'Considera o efeito sobre atenção e sonolência, a fase do tratamento e a resposta de cada indivíduo', ok: true,
      why: 'Correta. O que restringe é o efeito funcional, e ele muda ao longo do tratamento.' },
    { t: 'Considera o efeito da medicação, implicando o uso de qualquer psicofármaco inaptidão para funções críticas.', ok: false,
      why: 'Errada. O efeito varia por fármaco, dose, fase do tratamento e resposta individual.' },
    { t: 'Considera o efeito sobre a atenção, não diferindo a fase inicial das demais quanto ao risco funcional.', ok: false,
      why: 'Errada. É justamente a fase de maior efeito sobre atenção e sonolência.' },
    { t: 'Considera o efeito funcional, sendo a suspensão da medicação a conduta preferencial para preservar a aptidão.', ok: false,
      why: 'Errada. Suspender tratamento necessário cria risco maior que o que se pretendia evitar.' },
    { t: 'Considera o efeito funcional, devendo a restrição ser comunicada com o nome do medicamento em uso.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional, não o tratamento.' }
  ],
  comentario: 'Restringe-se pelo efeito funcional, não pela receita: fase de ajuste pesa mais, restrição costuma ser temporária, e suspender tratamento para preservar aptidão troca um risco por outro maior.',
  pegadinha: 'Pressionar pela suspensão do tratamento é a conduta que produz descompensação em função crítica.',
  refs: ['Código de Ética Médica', 'NR-7', 'Diretrizes de aptidão em funções críticas'] },

{ id: 'q-4.9-080', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a hepatite B como risco ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Tem transmissibilidade percutânea muito superior à dos demais vírus, e a vacina é a proteção mais eficaz', ok: true,
      why: 'Correta. É o vírus de maior risco por acidente percutâneo e o único desses com vacina eficaz.' },
    { t: 'Tem transmissibilidade percutânea semelhante à dos demais vírus de transmissão sanguínea conhecidos.', ok: false,
      why: 'Errada. A do vírus da hepatite B é substancialmente maior.' },
    { t: 'Tem transmissibilidade percutânea elevada, não sobrevivendo fora do organismo por período relevante.', ok: false,
      why: 'Errada. Mantém infectividade em superfícies por período prolongado.' },
    { t: 'Tem transmissibilidade elevada, não alterando a vacinação a conduta diante de exposição ocupacional.', ok: false,
      why: 'Errada. Estado vacinal e resposta sorológica determinam a conduta pós-exposição.' },
    { t: 'Tem transmissibilidade percutânea elevada, não representando a exposição de mucosas risco de transmissão.', ok: false,
      why: 'Errada. Mucosas e pele não íntegra são vias de exposição reconhecidas.' }
  ],
  comentario: 'Hepatite B: maior transmissibilidade percutânea entre os vírus de transmissão sanguínea, sobrevivência prolongada em superfícies, mucosa como via de exposição — e a única com vacina eficaz, que muda a conduta pós-acidente.',
  pegadinha: 'Igualar as transmissibilidades subestima justamente o vírus contra o qual há proteção disponível.',
  refs: ['NR-32', 'Protocolos de exposição a material biológico'] },

{ id: 'q-4.10-080', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a vacinação contra influenza em ambientes de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Reduz transmissão e absenteísmo, e a prioridade em saúde se justifica pela proteção dos pacientes.', ok: true,
      why: 'Correta. A proteção de terceiros é o argumento central em trabalhadores de saúde.' },
    { t: 'Reduz a transmissão em ambientes de convívio, dispensando o afastamento de trabalhadores sintomáticos.', ok: false,
      why: 'Errada. A proteção não é absoluta e o sintomático transmite.' },
    { t: 'Reduz transmissão e absenteísmo, não se justificando a repetição anual por não mudarem as cepas.', ok: false,
      why: 'Errada. A reformulação anual decorre justamente da variação das cepas.' },
    { t: 'Reduz transmissão, justificando-se a indicação em trabalhadores de saúde apenas pela proteção individual.', ok: false,
      why: 'Errada. A proteção de pacientes vulneráveis é razão central da prioridade.' },
    { t: 'Reduz transmissão e absenteísmo, sem que campanhas no local de trabalho influenciem a cobertura vacinal.', ok: false,
      why: 'Errada. Facilitar o acesso no local aumenta a cobertura de forma documentada.' }
  ],
  comentario: 'Influenza: proteção individual, redução de transmissão no convívio e de absenteísmo, revacinação anual por variação de cepas, e prioridade em trabalhadores de saúde também por causa dos pacientes. Vacinado sintomático continua sendo afastado.',
  pegadinha: 'Usar a vacinação como argumento para manter o sintomático trabalhando inverte a lógica da medida.',
  refs: ['Programa Nacional de Imunizações', 'NR-32'] },

{ id: 'q-5.3-080', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a suscetibilidade individual e sua relação com a concausalidade, é CORRETO afirmar:',
  alts: [
    { t: 'A maior suscetibilidade individual não afasta o nexo com o trabalho e pode caracterizar concausa preexistente', ok: true,
      why: 'Correta. A lógica preventiva é adequar o ambiente à variabilidade das pessoas.' },
    { t: 'A maior suscetibilidade individual afasta o nexo com o trabalho, por deslocar a causa para o indivíduo.', ok: false,
      why: 'Errada. Caracteriza, quando muito, concausa preexistente.' },
    { t: 'A maior suscetibilidade não afasta o nexo, devendo os mais suscetíveis ser excluídos das funções de risco.', ok: false,
      why: 'Errada. A resposta é reduzir a exposição, não excluir pessoas.' },
    { t: 'A suscetibilidade pode caracterizar concausa, sendo relevante apenas quando de origem genética comprovada.', ok: false,
      why: 'Errada. Idade e condições prévias também compõem a suscetibilidade.' },
    { t: 'A suscetibilidade pode caracterizar concausa, afastando o nexo a existência de colegas não adoecidos.', ok: false,
      why: 'Errada. A variabilidade de resposta é esperada e não afasta o nexo individual.' }
  ],
  comentario: 'Suscetibilidade não afasta nexo — no máximo caracteriza concausa. E "os outros não adoeceram" não é argumento: variabilidade de resposta é a regra, e a resposta preventiva é reduzir exposição, não filtrar pessoas.',
  pegadinha: '"Só ele adoeceu" é a negativa de nexo mais frequente e a que menos se sustenta tecnicamente.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.6-080', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o papel do médico do trabalho no processo de reabilitação profissional conduzido pela previdência, é CORRETO afirmar:',
  alts: [
    { t: 'Contribui descrevendo as exigências reais das funções disponíveis e avaliando a compatibilidade.', ok: true,
      why: 'Correta. Quem conhece as funções reais da empresa é o serviço médico dela.' },
    { t: 'Não tem papel no processo, que é conduzido pela previdência com seus próprios profissionais e critérios.', ok: false,
      why: 'Errada. Sua informação sobre as funções disponíveis é elemento central.' },
    { t: 'Contribui descrevendo as funções da empresa, bastando ao programa a descrição genérica de cada uma.', ok: false,
      why: 'Errada. Descrição genérica produz encaminhamentos incompatíveis.' },
    { t: 'Contribui com a avaliação de compatibilidade, sem que a empresa tenha obrigação de receber o reabilitado.', ok: false,
      why: 'Errada. Há previsão legal de reserva de vagas para reabilitados.' },
    { t: 'Contribui com a descrição das funções, encerrando-se sua atuação com a conclusão do programa.', ok: false,
      why: 'Errada. O acompanhamento na recolocação é o que consolida o retorno.' }
  ],
  comentario: 'A reabilitação fracassa quando o programa não conhece o trabalho concreto — e quem o conhece é o serviço médico da empresa. Descrever funções reais, avaliar compatibilidade e acompanhar a recolocação.',
  pegadinha: 'Descrever funções pelo nome do cargo entrega ao programa uma informação que não corresponde ao posto.',
  refs: ['Lei nº 8.213/1991 — arts. 89 a 93', 'CIF — OMS'] }

);
