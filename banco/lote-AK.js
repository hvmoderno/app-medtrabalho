/* Lote AK — 7.1 a 7.8. AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-7.1-090', tema: '7.1', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a rescisão contratual de trabalhador com doença relacionada ao trabalho ainda não reconhecida, é CORRETO afirmar:',
  alts: [
    { t: 'A dispensa pode ser questionada pelo nexo reconhecido depois, e o demissional é a oportunidade de identificá-lo.', ok: true,
      why: 'Correta. O demissional é a última janela para identificar o que ainda não foi reconhecido.' },
    { t: 'A dispensa pode ocorrer normalmente, tornando-se insuscetível de questionamento sem reconhecimento prévio do nexo.', ok: false,
      why: 'Errada. O reconhecimento posterior pode repercutir sobre a dispensa.' },
    { t: 'A dispensa pode ser questionada, devendo o médico que constata a doença apenas registrá-la no prontuário.', ok: false,
      why: 'Errada. Cabem a comunicação de acidente devida e o encaminhamento do trabalhador.' },
    { t: 'A dispensa pode ser questionada, impedindo a homologação da rescisão qualquer discussão posterior sobre nexo.', ok: false,
      why: 'Errada. A discussão de nexo permanece possível após a homologação.' },
    { t: 'A dispensa pode ser questionada, podendo o demissional ser dispensado sempre que houver periódico recente.', ok: false,
      why: 'Errada. A dispensa segue critérios normativos específicos e não é regra geral.' }
  ],
  comentario: 'O demissional é a última oportunidade de identificar doença ocupacional antes de o vínculo acabar — e identificar significa comunicar e encaminhar, não apenas anotar. Homologação não encerra a discussão de nexo.',
  pegadinha: 'Registrar o achado sem emitir a comunicação devida deixa o trabalhador sem qualquer via de reconhecimento.',
  refs: ['CLT', 'Lei nº 8.213/1991 — arts. 22 e 118', 'NR-7'] },

{ id: 'q-7.2-100', tema: '7.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o requerimento de benefício por incapacidade e a documentação médica apresentada, é CORRETO afirmar:',
  alts: [
    { t: 'Relatórios que descrevem repercussão funcional, evolução e resposta ao tratamento instruem melhor.', ok: true,
      why: 'Correta. A perícia avalia incapacidade, e é a descrição funcional que a informa.' },
    { t: 'O código diagnóstico registrado no atestado é a informação mais relevante para a decisão pericial.', ok: false,
      why: 'Errada. O diagnóstico não descreve a incapacidade, que é o objeto da avaliação.' },
    { t: 'Relatórios funcionais instruem melhor, vinculando o tempo de afastamento sugerido a decisão pericial.', ok: false,
      why: 'Errada. É elemento de instrução, não decisão.' },
    { t: 'Relatórios instruem melhor, podendo os exames complementares substituir a descrição clínica e funcional.', ok: false,
      why: 'Errada. Complementam; a repercussão funcional não aparece em exame.' },
    { t: 'Relatórios funcionais instruem melhor, sendo irrelevante a descrição das exigências da atividade exercida.', ok: false,
      why: 'Errada. Incapacidade se avalia frente às exigências da atividade.' }
  ],
  comentario: 'O que instrui bem uma perícia é a descrição funcional: o que o paciente consegue e não consegue fazer, a evolução, o que foi tentado e a resposta. Código diagnóstico e dias sugeridos informam pouco sobre incapacidade.',
  pegadinha: 'Atestado com código e prazo cumpre a burocracia e não dá à perícia nada do que ela precisa decidir.',
  refs: ['Lei nº 8.213/1991', 'Resoluções do CFM sobre perícia médica'] },

{ id: 'q-7.3-100', tema: '7.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a interdição de máquina, setor ou estabelecimento por risco à saúde, é CORRETO afirmar:',
  alts: [
    { t: 'É medida cautelar para fazer cessar risco imediato, podendo ser parcial e ser levantada depois.', ok: true,
      why: 'Correta. Esperar o acidente para interditar inverteria a função da medida.' },
    { t: 'É medida cautelar, exigindo sua adoção a ocorrência prévia de acidente ou adoecimento no local.', ok: false,
      why: 'Errada. É medida preventiva diante de risco iminente.' },
    { t: 'É medida cautelar sempre total, alcançando todo o estabelecimento onde o risco foi constatado.', ok: false,
      why: 'Errada. Pode ser parcial, restrita à máquina ou ao setor.' },
    { t: 'É medida cautelar de caráter definitivo, que não comporta levantamento após as correções feitas.', ok: false,
      why: 'Errada. É levantada após a comprovação das correções.' },
    { t: 'É medida cautelar, perdendo os trabalhadores o direito à remuneração durante o período de paralisação.', ok: false,
      why: 'Errada. O período de paralisação é computado como de trabalho efetivo.' }
  ],
  comentario: 'Interdição é cautelar, pode ser parcial, não espera acidente e se levanta com a correção comprovada. E o trabalhador não paga a conta: o período paralisado conta como trabalho efetivo.',
  pegadinha: 'A ideia de que o trabalhador perde salário durante a interdição é o que faz equipes resistirem à medida que as protege.',
  refs: ['CLT — art. 161', 'NR-3', 'Lei nº 8.080/1990'] },

{ id: 'q-7.4-100', tema: '7.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a segurança no trabalho em máquinas e equipamentos, é CORRETO afirmar:',
  alts: [
    { t: 'A zona de perigo só deve ser acessível com a máquina segura, e a proteção não pode ser fácil de burlar.', ok: true,
      why: 'Correta. Proteção fácil de burlar é proteção que será burlada sob pressão de produção.' },
    { t: 'A zona de perigo deve ser protegida, encerrando a instalação conforme projeto a obrigação da empresa.', ok: false,
      why: 'Errada. É preciso manter, inspecionar e impedir a neutralização.' },
    { t: 'A proteção deve impedir o acesso, sendo sua neutralização falha atribuível exclusivamente ao trabalhador.', ok: false,
      why: 'Errada. Costuma responder a exigências de ritmo e a proteções mal concebidas.' },
    { t: 'A zona de perigo deve ser protegida, podendo o treinamento substituir a proteção física do acesso.', ok: false,
      why: 'Errada. Proteção coletiva tem precedência sobre a instrução.' },
    { t: 'A proteção deve impedir o acesso, podendo manutenção e limpeza ser feitas energizadas por experientes.', ok: false,
      why: 'Errada. Exigem bloqueio e desenergização, independentemente da experiência.' }
  ],
  comentario: 'Máquina segura é aquela em que a zona de perigo só abre em condição segura, com dispositivo não burlável. E quando se encontra proteção neutralizada, a pergunta é o que na organização do trabalho tornou isso necessário.',
  pegadinha: 'Atribuir a neutralização à imprudência individual preserva a meta de produção que a motivou.',
  refs: ['NR-12'] },

{ id: 'q-7.5-070', tema: '7.5', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a articulação entre os eventos do eSocial e os documentos exigidos pelas normas regulamentadoras, é CORRETO afirmar:',
  alts: [
    { t: 'Transmitem informações derivadas dos programas, sendo verificável a consistência entre uns e outros', ok: true,
      why: 'Correta. O sistema permite cruzar o transmitido com o documentado, e a divergência é indício.' },
    { t: 'Transmitem informações de saúde e segurança, substituindo a elaboração dos programas exigidos por norma.', ok: false,
      why: 'Errada. Os programas continuam exigidos; o eSocial transmite informações deles derivadas.' },
    { t: 'Transmitem informações dos programas, sem consequência as divergências entre programa e transmissão.', ok: false,
      why: 'Errada. São indício investigado, com repercussão administrativa.' },
    { t: 'Transmitem informações de saúde e segurança, independentes dos documentos das normas regulamentadoras.', ok: false,
      why: 'Errada. Derivam diretamente deles.' },
    { t: 'Transmitem informações que podem ser genéricas, mantido o detalhamento nos documentos internos.', ok: false,
      why: 'Errada. A informação transmitida deve corresponder ao conteúdo dos documentos.' }
  ],
  comentario: 'O eSocial transmite o que os programas produzem — não substitui a elaboração deles. E como o cruzamento é automático, divergência entre documento e transmissão vira indício antes de qualquer inspeção presencial.',
  pegadinha: 'Supor que a transmissão dispensa o programa deixa a empresa sem o documento que fundamenta o que ela informou.',
  refs: ['eSocial — eventos de SST', 'NR-1', 'NR-7', 'NR-9'] },

{ id: 'q-7.6-070', tema: '7.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os princípios fundamentais do código de ética aplicados à medicina do trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Deve exercer com autonomia, sem limitações que prejudiquem seu trabalho, e denunciar condições de risco.', ok: true,
      why: 'Correta. Autonomia e dever de comunicar riscos são princípios expressos.' },
    { t: 'Deve exercer com autonomia, atenuada essa autonomia quando o médico é empregado da própria empresa.', ok: false,
      why: 'Errada. A autonomia independe da forma de vinculação.' },
    { t: 'Deve exercer com autonomia, restringindo-se o dever de comunicar riscos ao dano já consumado.', ok: false,
      why: 'Errada. Alcança condições que representam risco, antes do dano.' },
    { t: 'Deve exercer com autonomia, criando a relação com o empregador dever ético prevalente sobre o trabalhador.', ok: false,
      why: 'Errada. O interesse da saúde do trabalhador é o parâmetro do ato médico.' },
    { t: 'Deve exercer com autonomia, dependendo a denúncia de condições de risco de autorização prévia da empresa.', ok: false,
      why: 'Errada. É dever do médico, independente de autorização.' }
  ],
  comentario: 'Autonomia técnica independe do vínculo, e o dever de comunicar condições de risco não espera o dano nem pede autorização de ninguém. São princípios do código, não escolhas do profissional.',
  pegadinha: 'A ideia de autonomia "atenuada" por ser empregado é justamente o que o código não admite.',
  refs: ['Código de Ética Médica — princípios fundamentais', 'ICOH'] },

{ id: 'q-7.7-070', tema: '7.7', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre as normas específicas para médicos que atendem o trabalhador, é CORRETO afirmar:',
  alts: [
    { t: 'Deve conhecer processos e riscos, comunicá-los aos trabalhadores e recusar atos contrários à ética.', ok: true,
      why: 'Correta. Conhecer o ambiente é condição para exercer a função, não item opcional.' },
    { t: 'Deve comunicar riscos, podendo limitar sua atuação ao consultório, sem conhecer os locais de trabalho.', ok: false,
      why: 'Errada. O conhecimento do ambiente e dos processos é dever expresso.' },
    { t: 'Deve conhecer os processos, sendo a comunicação de riscos atribuição exclusiva da área de segurança.', ok: false,
      why: 'Errada. É também dever do médico que atende os trabalhadores.' },
    { t: 'Deve conhecer os riscos, justificando a exigência do contratante a prática de ato contrário à ética.', ok: false,
      why: 'Errada. A recusa é dever, e a exigência não exclui responsabilidade.' },
    { t: 'Deve comunicar riscos, sendo o conhecimento dos processos desejável, mas não dever do médico.', ok: false,
      why: 'Errada. Sem ele não há como avaliar nexo, aptidão nem indicar exames pertinentes.' }
  ],
  comentario: 'Conhecer o processo e o ambiente é dever, não diferencial: sem isso não se avalia nexo, não se indica exame pertinente e não se define restrição. Comunicar riscos aos trabalhadores também é do médico.',
  pegadinha: 'Atuar só no consultório, sem pisar no setor, inviabiliza tecnicamente todas as conclusões que se espera assinar.',
  refs: ['Resoluções do CFM sobre médicos que atendem o trabalhador', 'Código de Ética Médica'] },

{ id: 'q-7.8-070', tema: '7.8', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre o compartilhamento de dados de saúde com clínicas terceirizadas e prestadores de serviço, é CORRETO afirmar:',
  alts: [
    { t: 'Contratante e prestador têm papéis próprios, limitado o compartilhamento ao necessário à finalidade.', ok: true,
      why: 'Correta. O contrato é onde se define quem guarda, por quanto tempo e o destino ao final.' },
    { t: 'Contratante e prestador têm papéis definidos, transferindo a terceirização toda a responsabilidade.', ok: false,
      why: 'Errada. A contratante mantém responsabilidades próprias.' },
    { t: 'Contratante e prestador têm papéis próprios, podendo este manter os dados após o fim do contrato.', ok: false,
      why: 'Errada. O destino dos dados ao término deve estar previsto contratualmente.' },
    { t: 'Contratante e prestador têm papéis próprios, podendo compartilhar a base completa de prontuários.', ok: false,
      why: 'Errada. Deve se limitar ao necessário à finalidade específica.' },
    { t: 'Contratante e prestador têm papéis próprios, dispensadas cláusulas de sigilo havendo confiança entre eles.', ok: false,
      why: 'Errada. São exigência prática e legal, independentemente da relação.' }
  ],
  comentario: 'Terceirizar não terceiriza responsabilidade: compartilha-se o mínimo necessário, com contrato que define segurança, sigilo e o destino dos dados ao término. Troca de prestador sem essa cláusula deixa prontuário órfão.',
  pegadinha: 'Migrar de clínica sem definir o destino da base anterior é o cenário em que o histórico de exposição desaparece.',
  refs: ['LGPD — controlador e operador', 'Código de Ética Médica', 'NR-7'] }

);
