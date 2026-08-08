/* Lote AD — 4.6, 4.8, 5.4, 5.5, 4.7, 4.9, 4.10, 5.3, 5.6. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-4.6-090', tema: '4.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o teletrabalho e seus efeitos sobre a saúde mental, é CORRETO afirmar:',
  alts: [
    { t: 'Ele pode reduzir deslocamento e aumentar autonomia, mas também dissolver a fronteira entre trabalho e vida pessoal, prolongar a conexão e enfraquecer o suporte social entre colegas — de modo que o desfecho depende de como é organizado, não da modalidade em si.', ok: true,
      why: 'Correta. A modalidade não determina o efeito; a organização determina.' },
    { t: 'O teletrabalho reduz uniformemente os riscos psicossociais.', ok: false,
      why: 'Errada. Introduz riscos próprios, como conexão prolongada e isolamento.' },
    { t: 'A ausência de deslocamento elimina os fatores de sobrecarga.', ok: false,
      why: 'Errada. A sobrecarga se relaciona a demandas, prazos e disponibilidade, não ao deslocamento.' },
    { t: 'As obrigações de saúde e segurança do empregador não alcançam o trabalho remoto.', ok: false,
      why: 'Errada. Alcançam, incluindo orientação sobre condições ergonômicas do posto.' },
    { t: 'O isolamento social no teletrabalho não tem repercussão sobre a saúde.', ok: false,
      why: 'Errada. O suporte social é fator protetor reconhecido, e sua perda é relevante.' }
  ],
  comentario: 'Teletrabalho não é bom nem ruim por natureza: depende de fronteira preservada, expectativa de disponibilidade e suporte social mantido. As obrigações de saúde e segurança seguem o trabalhador até a casa dele.',
  pegadinha: 'Supor que a ausência de deslocamento resolve sobrecarga confunde tempo de trajeto com demanda de trabalho.',
  refs: ['CLT — teletrabalho', 'NR-17', 'OIT — teletrabalho e saúde'] },

{ id: 'q-4.8-090', tema: '4.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a comunicação a um trabalhador de que sua neoplasia pode ter relação com o trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A informação deve ser prestada de forma clara e responsável, com registro e orientação sobre os direitos decorrentes — e a omissão, além de eticamente indefensável, retira do trabalhador o acesso a benefícios e reparações a que teria direito.', ok: true,
      why: 'Correta. Não informar é decidir pelo trabalhador que ele não terá acesso a esses direitos.' },
    { t: 'A informação deve ser omitida para não gerar litígio com a empresa.', ok: false,
      why: 'Errada. Evitar litígio não é razão ética para sonegar informação ao paciente.' },
    { t: 'A comunicação só deve ser feita após confirmação judicial do nexo.', ok: false,
      why: 'Errada. A suspeita fundamentada já deve ser comunicada e registrada.' },
    { t: 'A orientação sobre direitos não integra o papel do médico nesse contexto.', ok: false,
      why: 'Errada. Informar sobre a possibilidade de reconhecimento é parte do cuidado.' },
    { t: 'A emissão de comunicação de acidente é incabível em neoplasia ocupacional.', ok: false,
      why: 'Errada. Doença ocupacional é equiparada e a comunicação é devida.' }
  ],
  comentario: 'Suspeita fundamentada de câncer relacionado ao trabalho se comunica, se registra e se orienta — com emissão da comunicação de acidente. Omitir para evitar conflito transfere ao trabalhador o custo do silêncio.',
  pegadinha: 'Esperar confirmação judicial do nexo para informar inverte a ordem: a informação é o que permite buscar o reconhecimento.',
  refs: ['Código de Ética Médica', 'Lei nº 8.213/1991'] },

{ id: 'q-5.4-100', tema: '5.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a fundamentação do laudo pericial, é CORRETO afirmar:',
  alts: [
    { t: 'Deve explicitar a metodologia, os elementos considerados e o raciocínio que conduz à conclusão, permitindo que terceiros reconstituam o percurso — laudo que apresenta apenas a conclusão impede o contraditório e é tecnicamente frágil.', ok: true,
      why: 'Correta. Reprodutibilidade do raciocínio é o que distingue laudo de opinião.' },
    { t: 'A conclusão bem fundamentada dispensa a descrição da metodologia empregada.', ok: false,
      why: 'Errada. A metodologia é parte da fundamentação.' },
    { t: 'A menção a documentos analisados substitui a análise de seu conteúdo.', ok: false,
      why: 'Errada. É preciso analisar e não apenas listar.' },
    { t: 'A extensão do laudo é indicador confiável de sua qualidade.', ok: false,
      why: 'Errada. Extensão não substitui coerência entre elementos e conclusão.' },
    { t: 'Elementos desfavoráveis à conclusão adotada podem ser omitidos.', ok: false,
      why: 'Errada. Devem ser enfrentados expressamente; omiti-los compromete a credibilidade do laudo.' }
  ],
  comentario: 'Laudo bom é aquele cujo raciocínio um terceiro consegue reconstituir: metodologia declarada, elementos analisados, inclusive os desfavoráveis, e conclusão que decorre deles. Tamanho não é qualidade.',
  pegadinha: 'Omitir o elemento que contraria a conclusão é o que transforma laudo em peça de defesa.',
  refs: ['Código de Processo Civil', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-5.5-090', tema: '5.5', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o uso da Classificação Internacional de Funcionalidade na avaliação de trabalhadores, é CORRETO afirmar:',
  alts: [
    { t: 'Ela oferece linguagem padronizada para descrever funcionalidade, incapacidade e fatores contextuais, complementando — e não substituindo — a classificação diagnóstica, e permite descrever por que dois trabalhadores com o mesmo diagnóstico têm capacidades laborativas distintas.', ok: true,
      why: 'Correta. É a ferramenta que descreve o que o diagnóstico não descreve.' },
    { t: 'Ela substitui a classificação diagnóstica de doenças.', ok: false,
      why: 'Errada. São classificações complementares, com objetos distintos.' },
    { t: 'Ela descreve apenas limitações corporais, sem considerar o ambiente.', ok: false,
      why: 'Errada. Fatores ambientais são componente explícito da classificação.' },
    { t: 'Sua aplicação é restrita à reabilitação, sem uso em avaliação de capacidade.', ok: false,
      why: 'Errada. É amplamente aplicável à avaliação de capacidade laborativa.' },
    { t: 'Ela dispensa a avaliação clínica individual.', ok: false,
      why: 'Errada. É instrumento de descrição, aplicado sobre a avaliação clínica.' }
  ],
  comentario: 'A classificação de funcionalidade descreve o que o diagnóstico não alcança: atividade, participação e o ambiente. Complementa a classificação de doenças e explica por que o mesmo diagnóstico dá capacidades diferentes.',
  pegadinha: 'Tratá-la como substituta do diagnóstico confunde duas classificações que servem a perguntas distintas.',
  refs: ['CIF — OMS'] },

{ id: 'q-4.7-090', tema: '4.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a prescrição e o uso de psicofármacos em trabalhadores de funções críticas, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação deve considerar o efeito da medicação sobre atenção, tempo de reação e sonolência, a fase do tratamento e a resposta individual — e a restrição, quando necessária, tende a ser temporária, durante o ajuste, e não permanente pelo simples uso.', ok: true,
      why: 'Correta. O que restringe é o efeito funcional, e ele muda ao longo do tratamento.' },
    { t: 'O uso de qualquer psicofármaco implica inaptidão para funções críticas.', ok: false,
      why: 'Errada. O efeito varia por fármaco, dose, fase do tratamento e resposta individual.' },
    { t: 'A fase inicial do tratamento não difere das demais quanto ao risco funcional.', ok: false,
      why: 'Errada. É justamente a fase de maior efeito sobre atenção e sonolência.' },
    { t: 'A suspensão da medicação é a conduta preferencial para preservar a aptidão.', ok: false,
      why: 'Errada. Suspender tratamento necessário cria risco maior que o que se pretendia evitar.' },
    { t: 'A restrição deve ser comunicada com o nome do medicamento em uso.', ok: false,
      why: 'Errada. Comunica-se a restrição funcional, não o tratamento.' }
  ],
  comentario: 'Restringe-se pelo efeito funcional, não pela receita: fase de ajuste pesa mais, restrição costuma ser temporária, e suspender tratamento para preservar aptidão troca um risco por outro maior.',
  pegadinha: 'Pressionar pela suspensão do tratamento é a conduta que produz descompensação em função crítica.',
  refs: ['Código de Ética Médica', 'NR-7', 'Diretrizes de aptidão em funções críticas'] },

{ id: 'q-4.9-080', tema: '4.9', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a hepatite B como risco ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'O vírus tem transmissibilidade elevada por exposição percutânea, muito superior à de outros vírus de transmissão sanguínea, e a vacinação com resposta comprovada é a medida de proteção mais eficaz disponível para os grupos expostos.', ok: true,
      why: 'Correta. É o vírus de maior risco por acidente percutâneo e o único desses com vacina eficaz.' },
    { t: 'A transmissibilidade por exposição percutânea é semelhante entre os principais vírus de transmissão sanguínea.', ok: false,
      why: 'Errada. A do vírus da hepatite B é substancialmente maior.' },
    { t: 'O vírus não sobrevive fora do organismo por período relevante.', ok: false,
      why: 'Errada. Mantém infectividade em superfícies por período prolongado.' },
    { t: 'A vacinação não altera a conduta diante de exposição ocupacional.', ok: false,
      why: 'Errada. O estado vacinal e a resposta sorológica determinam a conduta pós-exposição.' },
    { t: 'A exposição de mucosas não representa risco de transmissão.', ok: false,
      why: 'Errada. Mucosas e pele não íntegra são vias de exposição reconhecidas.' }
  ],
  comentario: 'Hepatite B: maior transmissibilidade percutânea entre os vírus de transmissão sanguínea, sobrevivência prolongada em superfícies, mucosa como via de exposição — e a única com vacina eficaz, que muda a conduta pós-acidente.',
  pegadinha: 'Igualar as transmissibilidades subestima justamente o vírus contra o qual há proteção disponível.',
  refs: ['NR-32', 'Protocolos de exposição a material biológico'] },

{ id: 'q-4.10-080', tema: '4.10', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a vacinação contra influenza em ambientes de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Além da proteção individual, reduz a transmissão em ambientes de convívio e o absenteísmo, e a indicação prioritária alcança trabalhadores de saúde por protegerem também os pacientes — sem que a vacinação dispense afastamento do sintomático.', ok: true,
      why: 'Correta. A proteção de terceiros é o argumento central em trabalhadores de saúde.' },
    { t: 'A vacinação dispensa o afastamento de trabalhadores sintomáticos.', ok: false,
      why: 'Errada. A proteção não é absoluta e o sintomático transmite.' },
    { t: 'A vacinação anual não se justifica por não haver alteração relevante nas cepas circulantes.', ok: false,
      why: 'Errada. A reformulação anual decorre justamente da variação das cepas.' },
    { t: 'A indicação em trabalhadores de saúde se justifica apenas pela proteção individual.', ok: false,
      why: 'Errada. A proteção de pacientes vulneráveis é razão central da prioridade.' },
    { t: 'Campanhas em ambiente de trabalho não influenciam a cobertura vacinal.', ok: false,
      why: 'Errada. Facilitar o acesso no local de trabalho aumenta a cobertura de forma documentada.' }
  ],
  comentario: 'Influenza: proteção individual, redução de transmissão no convívio e de absenteísmo, revacinação anual por variação de cepas, e prioridade em trabalhadores de saúde também por causa dos pacientes. Vacinado sintomático continua sendo afastado.',
  pegadinha: 'Usar a vacinação como argumento para manter o sintomático trabalhando inverte a lógica da medida.',
  refs: ['Programa Nacional de Imunizações', 'NR-32'] },

{ id: 'q-5.3-080', tema: '5.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a suscetibilidade individual e sua relação com a concausalidade, é CORRETO afirmar:',
  alts: [
    { t: 'A suscetibilidade maior de um trabalhador não afasta o nexo, podendo caracterizar concausa — e usar a condição individual para negar relação com o trabalho inverte a lógica preventiva, que é adequar o ambiente à variabilidade das pessoas.', ok: true,
      why: 'Correta. Ambiente se adapta às pessoas, não o contrário.' },
    { t: 'A suscetibilidade individual afasta o nexo com o trabalho.', ok: false,
      why: 'Errada. Caracteriza, quando muito, concausa preexistente.' },
    { t: 'Trabalhadores mais suscetíveis devem ser excluídos das funções de risco.', ok: false,
      why: 'Errada. A resposta é reduzir a exposição, não excluir pessoas.' },
    { t: 'A suscetibilidade só é relevante quando de origem genética.', ok: false,
      why: 'Errada. Idade, condições prévias e outros fatores também compõem a suscetibilidade.' },
    { t: 'A existência de trabalhadores não adoecidos no mesmo setor afasta o nexo do caso individual.', ok: false,
      why: 'Errada. A variabilidade de resposta é esperada e não afasta o nexo individual.' }
  ],
  comentario: 'Suscetibilidade não afasta nexo — no máximo caracteriza concausa. E "os outros não adoeceram" não é argumento: variabilidade de resposta é a regra, e a resposta preventiva é reduzir exposição, não filtrar pessoas.',
  pegadinha: '"Só ele adoeceu" é a negativa de nexo mais frequente e a que menos se sustenta tecnicamente.',
  refs: ['Lei nº 8.213/1991 — art. 21', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-5.6-080', tema: '5.6', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o papel do médico do trabalho no processo de reabilitação profissional conduzido pela previdência, é CORRETO afirmar:',
  alts: [
    { t: 'Ele contribui com a descrição das exigências reais das funções disponíveis na empresa e com a avaliação de compatibilidade, sendo essa informação frequentemente decisiva para o sucesso da recolocação — que fracassa quando o programa desconhece o trabalho concreto.', ok: true,
      why: 'Correta. Quem conhece as funções reais da empresa é o serviço médico dela.' },
    { t: 'O médico do trabalho não tem papel no processo conduzido pela previdência.', ok: false,
      why: 'Errada. Sua informação sobre as funções disponíveis é elemento central.' },
    { t: 'A descrição genérica das funções é suficiente para o programa.', ok: false,
      why: 'Errada. Descrição genérica produz encaminhamentos incompatíveis.' },
    { t: 'A empresa não tem obrigação de receber o trabalhador reabilitado.', ok: false,
      why: 'Errada. Há previsão legal de reserva de vagas para reabilitados.' },
    { t: 'Concluído o programa, não cabe acompanhamento pelo serviço de saúde ocupacional.', ok: false,
      why: 'Errada. O acompanhamento na recolocação é justamente o que consolida o retorno.' }
  ],
  comentario: 'A reabilitação fracassa quando o programa não conhece o trabalho concreto — e quem o conhece é o serviço médico da empresa. Descrever funções reais, avaliar compatibilidade e acompanhar a recolocação.',
  pegadinha: 'Descrever funções pelo nome do cargo entrega ao programa uma informação que não corresponde ao posto.',
  refs: ['Lei nº 8.213/1991 — arts. 89 a 93', 'CIF — OMS'] }

);
