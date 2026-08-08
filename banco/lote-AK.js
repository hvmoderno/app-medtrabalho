/* Lote AK — 7.1 a 7.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-7.1-090', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a rescisão contratual de trabalhador com doença relacionada ao trabalho ainda não reconhecida, é CORRETO afirmar:',
  alts: [
    { t: 'A dispensa durante o curso de doença ocupacional pode ser questionada com base no nexo posteriormente reconhecido, e o exame demissional é a oportunidade em que o médico pode identificar a condição e desencadear a comunicação de acidente e o encaminhamento devidos.', ok: true,
      why: 'Correta. O demissional é a última janela para identificar o que ainda não foi reconhecido.' },
    { t: 'A ausência de reconhecimento prévio do nexo torna a dispensa insuscetível de questionamento.', ok: false,
      why: 'Errada. O reconhecimento posterior pode repercutir sobre a dispensa.' },
    { t: 'O médico que constata a doença no demissional deve apenas registrar no prontuário.', ok: false,
      why: 'Errada. Cabem a comunicação de acidente devida e o encaminhamento do trabalhador.' },
    { t: 'A homologação da rescisão impede qualquer discussão posterior sobre nexo.', ok: false,
      why: 'Errada. A discussão de nexo permanece possível.' },
    { t: 'O exame demissional pode ser dispensado quando há exame periódico recente em qualquer situação.', ok: false,
      why: 'Errada. A dispensa segue critérios normativos específicos e não é regra geral.' }
  ],
  comentario: 'O demissional é a última oportunidade de identificar doença ocupacional antes de o vínculo acabar — e identificar significa comunicar e encaminhar, não apenas anotar. Homologação não encerra a discussão de nexo.',
  pegadinha: 'Registrar o achado sem emitir a comunicação devida deixa o trabalhador sem qualquer via de reconhecimento.',
  refs: ['CLT', 'Lei nº 8.213/1991 — arts. 22 e 118', 'NR-7'] },

{ id: 'q-7.2-100', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o requerimento de benefício por incapacidade e a documentação médica apresentada, é CORRETO afirmar:',
  alts: [
    { t: 'Relatórios que descrevem repercussão funcional, evolução, tratamentos realizados e resposta obtida têm maior valor instrutório do que atestados que apenas registram o código diagnóstico e o tempo sugerido de afastamento.', ok: true,
      why: 'Correta. A perícia avalia incapacidade, e é a descrição funcional que a informa.' },
    { t: 'O código diagnóstico é a informação mais relevante para a decisão pericial.', ok: false,
      why: 'Errada. O diagnóstico não descreve a incapacidade, que é o objeto da avaliação.' },
    { t: 'O tempo de afastamento sugerido pelo assistente vincula a decisão.', ok: false,
      why: 'Errada. É elemento de instrução, não decisão.' },
    { t: 'Exames complementares substituem a descrição clínica e funcional.', ok: false,
      why: 'Errada. Complementam; a repercussão funcional não aparece em exame.' },
    { t: 'A descrição das exigências da atividade do segurado é irrelevante para a avaliação.', ok: false,
      why: 'Errada. Incapacidade se avalia frente às exigências da atividade.' }
  ],
  comentario: 'O que instrui bem uma perícia é a descrição funcional: o que o paciente consegue e não consegue fazer, a evolução, o que foi tentado e a resposta. Código diagnóstico e dias sugeridos informam pouco sobre incapacidade.',
  pegadinha: 'Atestado com código e prazo cumpre a burocracia e não dá à perícia nada do que ela precisa decidir.',
  refs: ['Lei nº 8.213/1991', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-7.3-100', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a interdição de máquina, setor ou estabelecimento por risco à saúde, é CORRETO afirmar:',
  alts: [
    { t: 'A medida é cautelar e visa fazer cessar o risco imediato, podendo ser parcial e ser levantada após a comprovação das correções — e sua adoção não depende de ocorrência prévia de acidente ou adoecimento.', ok: true,
      why: 'Correta. Esperar o acidente para interditar inverte a função da medida.' },
    { t: 'A interdição exige ocorrência prévia de acidente no local.', ok: false,
      why: 'Errada. É medida preventiva diante de risco iminente.' },
    { t: 'A interdição é sempre total, alcançando todo o estabelecimento.', ok: false,
      why: 'Errada. Pode ser parcial, restrita à máquina ou ao setor.' },
    { t: 'A interdição é definitiva e não comporta levantamento.', ok: false,
      why: 'Errada. É levantada após a comprovação das correções.' },
    { t: 'Durante a interdição, os trabalhadores perdem o direito à remuneração do período.', ok: false,
      why: 'Errada. O período de paralisação por interdição é computado como de trabalho efetivo.' }
  ],
  comentario: 'Interdição é cautelar, pode ser parcial, não espera acidente e se levanta com a correção comprovada. E o trabalhador não paga a conta: o período paralisado conta como trabalho efetivo.',
  pegadinha: 'A ideia de que o trabalhador perde salário durante a interdição é o que faz equipes resistirem à medida que as protege.',
  refs: ['CLT — art. 161', 'NR-3', 'Lei nº 8.080/1990'] },

{ id: 'q-7.4-100', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a segurança no trabalho em máquinas e equipamentos, é CORRETO afirmar:',
  alts: [
    { t: 'A proteção deve ser concebida de modo que a zona de perigo só seja acessível com a máquina em condição segura, com dispositivos que não possam ser facilmente burlados — sendo a neutralização de proteções, geralmente motivada por ganho de produtividade, causa frequente de amputações.', ok: true,
      why: 'Correta. Proteção fácil de burlar é proteção que será burlada sob pressão de produção.' },
    { t: 'A instalação de proteção conforme projeto encerra a obrigação da empresa.', ok: false,
      why: 'Errada. É preciso manter, inspecionar e impedir a neutralização.' },
    { t: 'A neutralização de proteções é falha exclusivamente atribuível ao trabalhador.', ok: false,
      why: 'Errada. Costuma responder a exigências de ritmo e a proteções mal concebidas.' },
    { t: 'O treinamento substitui a proteção física da zona de perigo.', ok: false,
      why: 'Errada. Proteção coletiva tem precedência sobre a instrução.' },
    { t: 'Manutenção e limpeza podem ser realizadas com a máquina energizada quando executadas por pessoal experiente.', ok: false,
      why: 'Errada. Exigem procedimento de bloqueio e desenergização, independentemente da experiência.' }
  ],
  comentario: 'Máquina segura é aquela em que a zona de perigo só abre em condição segura, com dispositivo não burlável. E quando se encontra proteção neutralizada, a pergunta é o que na organização do trabalho tornou isso necessário.',
  pegadinha: 'Atribuir a neutralização à imprudência individual preserva a meta de produção que a motivou.',
  refs: ['NR-12'] },

{ id: 'q-7.5-070', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a articulação entre os eventos do eSocial e os documentos exigidos pelas normas regulamentadoras, é CORRETO afirmar:',
  alts: [
    { t: 'Os eventos transmitem informações que decorrem dos programas e documentos exigidos pelas normas, de modo que a consistência entre o que consta no programa e o que é transmitido é verificável — e a divergência entre eles é indício investigado pela fiscalização.', ok: true,
      why: 'Correta. O sistema permite cruzar o transmitido com o documentado.' },
    { t: 'A transmissão pelo eSocial substitui a elaboração dos programas exigidos pelas normas.', ok: false,
      why: 'Errada. Os programas continuam exigidos; o eSocial transmite informações deles derivadas.' },
    { t: 'Divergências entre programa e transmissão não têm consequência.', ok: false,
      why: 'Errada. São indício investigado, com repercussão administrativa.' },
    { t: 'Os eventos de saúde e segurança são independentes dos documentos das normas regulamentadoras.', ok: false,
      why: 'Errada. Derivam diretamente deles.' },
    { t: 'A empresa pode transmitir informações genéricas e manter o detalhamento apenas nos documentos internos.', ok: false,
      why: 'Errada. A informação transmitida deve corresponder ao conteúdo dos documentos.' }
  ],
  comentario: 'O eSocial transmite o que os programas produzem — não substitui a elaboração deles. E como o cruzamento é automático, divergência entre documento e transmissão vira indício antes de qualquer inspeção presencial.',
  pegadinha: 'Supor que a transmissão dispensa o programa deixa a empresa sem o documento que fundamenta o que ela informou.',
  refs: ['eSocial — eventos de SST', 'NR-1', 'NR-7', 'NR-9'] },

{ id: 'q-7.6-070', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os princípios fundamentais do código de ética aplicados à medicina do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'O médico deve exercer a profissão com autonomia, sem se submeter a limitações que prejudiquem a eficácia de seu trabalho, e tem o dever de denunciar condições de trabalho que ponham em risco a saúde — deveres que se aplicam integralmente ao contexto ocupacional.', ok: true,
      why: 'Correta. Autonomia e dever de comunicar riscos são princípios expressos.' },
    { t: 'A autonomia técnica é atenuada quando o médico é empregado da empresa.', ok: false,
      why: 'Errada. A autonomia independe da forma de vinculação.' },
    { t: 'O dever de comunicar riscos se restringe a situações de dano já consumado.', ok: false,
      why: 'Errada. Alcança condições que representam risco, antes do dano.' },
    { t: 'A relação com o empregador cria dever ético prevalente sobre o interesse do trabalhador.', ok: false,
      why: 'Errada. O interesse da saúde do trabalhador é o parâmetro do ato médico.' },
    { t: 'A denúncia de condições de risco depende de autorização prévia da empresa.', ok: false,
      why: 'Errada. É dever do médico, independente de autorização.' }
  ],
  comentario: 'Autonomia técnica independe do vínculo, e o dever de comunicar condições de risco não espera o dano nem pede autorização de ninguém. São princípios do código, não escolhas do profissional.',
  pegadinha: 'A ideia de autonomia "atenuada" por ser empregado é justamente o que o código não admite.',
  refs: ['Código de Ética Médica — princípios fundamentais', 'ICOH'] },

{ id: 'q-7.7-070', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as normas específicas para médicos que atendem o trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Elas estabelecem, entre outros pontos, que o médico deve conhecer os processos e os riscos do ambiente de trabalho onde atua, comunicar aos trabalhadores os riscos existentes e recusar-se a praticar atos que contrariem os postulados éticos, mesmo diante de exigência do contratante.', ok: true,
      why: 'Correta. Conhecer o ambiente é condição para exercer a função, não item opcional.' },
    { t: 'O médico do trabalho pode limitar sua atuação ao consultório, sem conhecer os locais de trabalho.', ok: false,
      why: 'Errada. O conhecimento do ambiente e dos processos é dever expresso.' },
    { t: 'A comunicação de riscos aos trabalhadores é atribuição exclusiva da área de segurança.', ok: false,
      why: 'Errada. É também dever do médico que os atende.' },
    { t: 'A exigência do contratante justifica a prática de ato contrário aos postulados éticos.', ok: false,
      why: 'Errada. A recusa é dever, e a exigência não é excludente de responsabilidade.' },
    { t: 'O conhecimento dos processos produtivos é desejável, mas não constitui dever do médico.', ok: false,
      why: 'Errada. Sem ele não há como avaliar nexo, aptidão nem indicar exames pertinentes.' }
  ],
  comentario: 'Conhecer o processo e o ambiente é dever, não diferencial: sem isso não se avalia nexo, não se indica exame pertinente e não se define restrição. Comunicar riscos aos trabalhadores também é do médico.',
  pegadinha: 'Atuar só no consultório, sem pisar no setor, inviabiliza tecnicamente todas as conclusões que se espera assinar.',
  refs: ['Resoluções do CFM sobre médicos que atendem o trabalhador', 'Código de Ética Médica'] },

{ id: 'q-7.8-070', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o compartilhamento de dados de saúde com clínicas terceirizadas e prestadores de serviço, é CORRETO afirmar:',
  alts: [
    { t: 'A empresa contratante e o prestador têm papéis definidos no tratamento dos dados, com responsabilidades próprias, e o compartilhamento deve se limitar ao necessário à finalidade — com previsão contratual de segurança, sigilo e descarte ou devolução ao término.', ok: true,
      why: 'Correta. O contrato é onde se define quem guarda, por quanto tempo e o que acontece ao final.' },
    { t: 'A terceirização transfere integralmente a responsabilidade pelo tratamento dos dados.', ok: false,
      why: 'Errada. A contratante mantém responsabilidades próprias.' },
    { t: 'O prestador pode manter os dados indefinidamente após o término do contrato.', ok: false,
      why: 'Errada. O destino dos dados ao término deve estar previsto contratualmente.' },
    { t: 'O compartilhamento pode incluir a base completa de prontuários para facilitar a operação.', ok: false,
      why: 'Errada. Deve se limitar ao necessário à finalidade específica.' },
    { t: 'Cláusulas de segurança e sigilo em contrato de prestação são dispensáveis quando há confiança entre as partes.', ok: false,
      why: 'Errada. São exigência prática e legal, independentemente da relação entre as partes.' }
  ],
  comentario: 'Terceirizar não terceiriza responsabilidade: compartilha-se o mínimo necessário, com contrato que define segurança, sigilo e o destino dos dados ao término. Troca de prestador sem essa cláusula deixa prontuário órfão.',
  pegadinha: 'Migrar de clínica sem definir o destino da base anterior é o cenário em que o histórico de exposição desaparece.',
  refs: ['LGPD — controlador e operador', 'Código de Ética Médica', 'NR-7'] }

);
