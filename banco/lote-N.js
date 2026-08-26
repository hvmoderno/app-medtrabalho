/* Lote N — 1.3, 2.2, 2.4, 2.6 (segunda rodada nas maiores lacunas). AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.3-060', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo compara a prevalência de lombalgia entre trabalhadores de duas empresas e conclui que a empresa A é mais nociva. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'A prevalência sofre efeito da duração da condição e da rotatividade da força de trabalho.', ok: true,
      why: 'Correta. Empresa com alta rotatividade perde os adoecidos e aparenta prevalência baixa.' },
    { t: 'A prevalência mede diretamente o risco de adoecer no ambiente estudado durante o período.', ok: false,
      why: 'Errada. Quem mede risco de adoecer é a incidência.' },
    { t: 'A prevalência sofre efeito da duração, sem que a rotatividade interfira na comparação entre empresas.', ok: false,
      why: 'Errada. Alta rotatividade remove os casos do denominador e do numerador.' },
    { t: 'A prevalência sofre efeito da duração, dispensando a comparação padronização por idade e tempo de casa.', ok: false,
      why: 'Errada. São fatores que exigem padronização antes de comparar.' },
    { t: 'A prevalência sofre efeito da duração, indicando valor baixo com exposição intensa controle eficaz.', ok: false,
      why: 'Errada. Pode indicar que os adoecidos já saíram da empresa.' }
  ],
  comentario: 'Prevalência mistura risco com duração e com quem permaneceu. Empresa que gira muita gente exporta os adoecidos e exibe prevalência baixa — leitura invertida clássica. Para risco de adoecer, incidência; para comparar, padronização.',
  pegadinha: 'Prevalência baixa lida como sinal de ambiente saudável é o efeito do trabalhador sadio em ação.',
  refs: ['Rothman — Epidemiologia Moderna', 'Almeida Filho — Epidemiologia & Saúde'] },

{ id: 'q-1.3-061', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a interpretação do intervalo de confiança de uma medida de associação, é CORRETO afirmar:',
  alts: [
    { t: 'Sua amplitude expressa a precisão: intervalo muito amplo indica estudo pouco informativo.', ok: true,
      why: 'Correta. É diferente de intervalo estreito em torno do nulo, que sugere ausência de efeito.' },
    { t: 'Sua amplitude expressa a precisão, significando o intervalo que inclui o nulo ausência de efeito.', ok: false,
      why: 'Errada. Pode indicar apenas imprecisão, quando o intervalo é amplo.' },
    { t: 'Sua amplitude expressa a precisão, sem depender do tamanho da amostra estudada no trabalho.', ok: false,
      why: 'Errada. Amostras maiores produzem intervalos mais estreitos.' },
    { t: 'Sua amplitude expressa a precisão, corrigindo o intervalo de confiança os vieses do delineamento.', ok: false,
      why: 'Errada. Trata da variabilidade aleatória, não do viés.' },
    { t: 'Sua amplitude expressa a precisão, sendo relevante na prática todo resultado que exclui o nulo.', ok: false,
      why: 'Errada. Significância estatística não equivale a relevância clínica.' }
  ],
  comentario: 'O intervalo fala de precisão e de erro aleatório apenas — viés ele não corrige. Amplo incluindo o nulo significa estudo pouco informativo; estreito em torno do nulo sugere ausência de efeito relevante. E excluir o nulo não torna o achado importante.',
  pegadinha: 'Tratar "incluiu o nulo" como prova de ausência de efeito confunde imprecisão com evidência negativa.',
  refs: ['Rothman — Epidemiologia Moderna'] },

{ id: 'q-1.3-062', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre sensibilidade e especificidade aplicadas a exames de vigilância ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Com baixa prevalência, mesmo exame específico gera muitos falso-positivos entre os positivos.', ok: true,
      why: 'Correta. Exige confirmação antes de qualquer conduta com repercussão sobre o emprego.' },
    { t: 'Com baixa prevalência, a sensibilidade e a especificidade do exame variam conforme a população.', ok: false,
      why: 'Errada. São propriedades do teste; o que varia com a prevalência é o valor preditivo.' },
    { t: 'Com baixa prevalência, a alta especificidade garante que todo resultado positivo seja verdadeiro.', ok: false,
      why: 'Errada. Ainda assim há falso-positivos, proporcionalmente numerosos.' },
    { t: 'Com baixa prevalência, prefere-se sempre o teste mais específico como triagem inicial do grupo.', ok: false,
      why: 'Errada. Na triagem costuma-se privilegiar sensibilidade, com confirmação depois.' },
    { t: 'Com baixa prevalência, o resultado de triagem pode fundamentar isoladamente decisão de inaptidão.', ok: false,
      why: 'Errada. Triagem levanta suspeita; a decisão exige confirmação.' }
  ],
  comentario: 'Sensibilidade e especificidade são do teste; valor preditivo depende da prevalência. Em população de baixa prevalência, positivo de triagem é majoritariamente falso — e nunca deve virar inaptidão sem confirmação.',
  pegadinha: 'Dizer que a especificidade varia com a prevalência é a troca conceitual mais cobrada nesse tema.',
  refs: ['Fletcher — Epidemiologia Clínica', 'NR-7'] },

{ id: 'q-2.2-060', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional ao calor, é CORRETO afirmar:',
  alts: [
    { t: 'Considera o calor ambiental com a carga metabólica da tarefa e a vestimenta utilizada.', ok: true,
      why: 'Correta. A mesma condição térmica produz sobrecarga distinta conforme esforço e roupa.' },
    { t: 'Considera a temperatura do ar medida no posto, parâmetro que expressa a condição térmica local.', ok: false,
      why: 'Errada. Carga metabólica, umidade, radiação e vestimenta também compõem.' },
    { t: 'Considera calor e esforço, reduzindo a vestimenta de proteção química a sobrecarga térmica.', ok: false,
      why: 'Errada. Ela impede a evaporação do suor e aumenta a sobrecarga.' },
    { t: 'Considera calor, esforço e vestimenta, sendo a aclimatação permanente depois de adquirida.', ok: false,
      why: 'Errada. Perde-se em poucos dias de afastamento da exposição.' },
    { t: 'Considera calor e esforço, sendo a sede indicador adequado da necessidade de hidratação.', ok: false,
      why: 'Errada. A sede aparece tarde; a hidratação deve ser programada.' }
  ],
  comentario: 'Sobrecarga térmica = ambiente + metabolismo da tarefa + vestimenta. Roupa de proteção química piora. Aclimatação se perde em poucos dias — perigoso no retorno de férias. E hidratação por horário, não por sede.',
  pegadinha: 'Voltar de férias já aclimatado é a suposição que produz caso grave na primeira semana de retorno.',
  refs: ['NHO 06 — Fundacentro', 'ACGIH — estresse térmico', 'NR-15'] },

{ id: 'q-2.2-061', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a radiações ionizantes, é CORRETO afirmar:',
  alts: [
    { t: 'Apoia-se em tempo, distância e blindagem, com otimização das doses ao menor nível exequível.', ok: true,
      why: 'Correta. Abaixo dos limites, e não apenas dentro deles.' },
    { t: 'Apoia-se em tempo e blindagem, encerrando a dose dentro do limite anual as obrigações de proteção.', ok: false,
      why: 'Errada. O princípio de otimização exige reduzir abaixo do limite.' },
    { t: 'Apoia-se em tempo e distância, constituindo o dosímetro individual, por si, medida de proteção.', ok: false,
      why: 'Errada. O dosímetro mede a dose recebida; não protege.' },
    { t: 'Apoia-se em tempo e blindagem, apresentando os efeitos estocásticos limiar de dose estabelecido.', ok: false,
      why: 'Errada. Para efeitos estocásticos não se assume limiar.' },
    { t: 'Apoia-se em tempo e distância, tendo esta efeito linear sobre a taxa de dose recebida.', ok: false,
      why: 'Errada. A relação é quadrática inversa para fonte pontual.' }
  ],
  comentario: 'Tempo, distância, blindagem e otimização — reduzir abaixo do limite, não parar nele. Dosímetro mede, não protege. E os efeitos estocásticos são os sem limiar assumido.',
  pegadinha: 'Considerar o dosímetro um equipamento de proteção é confusão frequente entre monitorar e proteger.',
  refs: ['CNEN — normas de radioproteção', 'ICRP'] },

{ id: 'q-2.4-060', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a agentes biológicos em serviços de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Aplicam-se a todos os pacientes, independentemente do diagnóstico presumido ou conhecido.', ok: true,
      why: 'Correta. Proteção baseada em diagnóstico falha nos casos ainda não identificados.' },
    { t: 'Aplicam-se seletivamente conforme o diagnóstico apresentado pelo paciente em atendimento.', ok: false,
      why: 'Errada. Devem ser aplicadas a todos, sempre.' },
    { t: 'Aplicam-se a todos os pacientes, dispensando a vacinação do trabalhador as precauções padrão.', ok: false,
      why: 'Errada. Protege contra um agente e não cobre os demais.' },
    { t: 'Aplicam-se a todos, sendo aceitável o reencape de agulhas quando feito com técnica adequada.', ok: false,
      why: 'Errada. O reencape é prática vedada.' },
    { t: 'Aplicam-se a todos, sendo facultativos os dispositivos de segurança havendo treinamento adequado.', ok: false,
      why: 'Errada. A adoção de dispositivos de segurança é exigência.' }
  ],
  comentario: 'Precaução padrão vale para todos, sempre — porque o risco está no não diagnosticado. Reencape é proibido, dispositivo de segurança é exigência, e vacina não substitui barreira.',
  pegadinha: 'Aplicar precauções conforme o diagnóstico conhecido protege exatamente quem já se sabe ser risco e deixa o resto aberto.',
  refs: ['NR-32', 'Protocolos de controle de infecção'] },

{ id: 'q-2.4-061', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o risco biológico em atividades de coleta e tratamento de resíduos e esgoto, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição a leptospirose, tétano, hepatite A e parasitoses, com múltiplas vias.', ok: true,
      why: 'Correta. Exige vacinação, higienização, vestimenta e cuidado com lesões cutâneas.' },
    { t: 'Há risco químico predominante, sendo o risco biológico desprezível nessas atividades de saneamento.', ok: false,
      why: 'Errada. O risco biológico é central nessas atividades.' },
    { t: 'Há exposição a vários agentes, ocorrendo a transmissão exclusivamente por via digestiva.', ok: false,
      why: 'Errada. Pele lesada, mucosas e aerossóis são vias relevantes.' },
    { t: 'Há exposição a vários agentes, podendo trabalhar normalmente com botas quem tem feridas nas pernas.', ok: false,
      why: 'Errada. Lesão cutânea é porta de entrada e exige afastamento do contato.' },
    { t: 'Há exposição a vários agentes, dispensando a vacinação antitetânica quem usa proteção adequada.', ok: false,
      why: 'Errada. A proteção falha, e o risco de ferimentos torna a vacina prioritária.' }
  ],
  comentario: 'Saneamento e resíduos: leptospirose, tétano, hepatite A, parasitoses. A pele lesada é porta de entrada — trabalhador com ferida em membro inferior precisa ser afastado do contato até cicatrizar, mesmo de bota.',
  pegadinha: 'Confiar na bota com a perna ferida é a situação em que a leptospirose grave costuma acontecer.',
  refs: ['NR-32', 'Ministério da Saúde — leptospirose ocupacional'] },

{ id: 'q-2.6-062', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os limites de exposição de curta duração e os valores-teto, é CORRETO afirmar:',
  alts: [
    { t: 'Existem porque alguns agentes têm efeito agudo dependente de pico de concentração.', ok: true,
      why: 'Correta. Média dentro do limite pode ocultar picos lesivos, e o teto nunca se ultrapassa.' },
    { t: 'Existem como referência, sendo a média ponderada suficiente para caracterizar a exposição segura.', ok: false,
      why: 'Errada. A média pode ocultar picos capazes de causar dano agudo.' },
    { t: 'Existem para picos, podendo o valor-teto ser ultrapassado se a média permanecer abaixo do limite.', ok: false,
      why: 'Errada. O valor-teto não pode ser ultrapassado em momento algum.' },
    { t: 'Existem para efeitos agudos, aplicando-se limites de curta duração apenas a agentes cancerígenos.', ok: false,
      why: 'Errada. Aplicam-se a agentes com efeito agudo, cancerígenos ou não.' },
    { t: 'Existem para picos, dispensando sua existência a avaliação da exposição na jornada completa.', ok: false,
      why: 'Errada. As duas avaliações são necessárias e complementares.' }
  ],
  comentario: 'Média ponderada não enxerga pico. Por isso existem limite de curta duração e valor-teto — este último inultrapassável em qualquer instante. Os dois critérios são cumulativos com o da jornada.',
  pegadinha: 'Tratar o valor-teto como média de curto período desfaz exatamente o que ele significa.',
  refs: ['ACGIH — TLV-STEL e TLV-C', 'NR-15'] },

{ id: 'q-2.6-063', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a aplicação de limites de exposição em jornadas diferentes de oito horas, é CORRETO afirmar:',
  alts: [
    { t: 'Jornadas longas aumentam o tempo de absorção e reduzem o intervalo de recuperação.', ok: true,
      why: 'Correta. Justifica ajustar o limite para baixo em agentes cumulativos ou de eliminação lenta.' },
    { t: 'Os limites se aplicam sem qualquer ajuste às jornadas de doze horas praticadas em escala.', ok: false,
      why: 'Errada. Jornadas prolongadas alteram absorção e recuperação.' },
    { t: 'Jornadas longas exigem atenção, sem alterar a dose absorvida se a concentração for constante.', ok: false,
      why: 'Errada. Mais tempo de exposição significa mais dose, à mesma concentração.' },
    { t: 'Jornadas longas exigem ajuste do limite, aplicável igualmente a todos os agentes químicos.', ok: false,
      why: 'Errada. O ajuste depende da cinética e do efeito de cada agente.' },
    { t: 'Jornadas longas aumentam a absorção, sem que a recuperação entre jornadas influencie o acúmulo.', ok: false,
      why: 'Errada. É o intervalo de recuperação que permite a eliminação do agente.' }
  ],
  comentario: 'O limite pressupõe jornada padrão e descanso entre elas. Doze horas absorvem mais e recuperam menos: para agente cumulativo ou de eliminação lenta, o limite precisa cair. O ajuste depende da cinética — não é regra única para todos.',
  pegadinha: 'Aplicar o limite tabelado direto em jornada de doze horas ignora as duas metades do problema: mais dose e menos recuperação.',
  refs: ['ACGIH — TLVs, ajuste para jornadas não convencionais', 'Buschinelli — Toxicologia Ocupacional'] }

);
