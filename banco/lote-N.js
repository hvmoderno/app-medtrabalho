/* Lote N — 1.3, 2.2, 2.4, 2.6 (segunda rodada nas maiores lacunas). AUTORAIS. */
window.BANCO = window.BANCO || [];
window.BANCO.push(

{ id: 'q-1.3-060', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo compara a prevalência de lombalgia entre trabalhadores de duas empresas e conclui que a empresa A é mais nociva. Sobre a interpretação, é CORRETO afirmar:',
  alts: [
    { t: 'A prevalência sofre influência da duração da condição e da rotatividade da força de trabalho: empresa com alta rotatividade perde os adoecidos e apresenta prevalência baixa, o que pode inverter a leitura sobre qual ambiente é mais nocivo.', ok: true,
      why: 'Correta. Quem adoece e sai deixa de ser contado onde adoeceu.' },
    { t: 'A prevalência mede diretamente o risco de adoecer no ambiente.', ok: false,
      why: 'Errada. Quem mede risco de adoecer é a incidência.' },
    { t: 'A rotatividade não interfere na comparação entre empresas.', ok: false,
      why: 'Errada. É um dos principais fatores de confusão nessas comparações.' },
    { t: 'A comparação direta de prevalências dispensa padronização por idade e tempo de casa.', ok: false,
      why: 'Errada. Diferenças de composição etária e de tempo de exposição distorcem a comparação.' },
    { t: 'Prevalência baixa em empresa com exposição intensa indica controle eficaz.', ok: false,
      why: 'Errada. Pode indicar seleção de sobreviventes e saída dos adoecidos.' }
  ],
  comentario: 'Prevalência mistura risco com duração e com quem permaneceu. Empresa que gira muita gente exporta os adoecidos e exibe prevalência baixa — leitura invertida clássica. Para risco de adoecer, incidência; para comparar, padronização.',
  pegadinha: 'Prevalência baixa lida como sinal de ambiente saudável é o efeito do trabalhador sadio em ação.',
  refs: ['Rothman — Epidemiologia Moderna', 'Almeida Filho — Epidemiologia & Saúde'] },

{ id: 'q-1.3-061', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a interpretação do intervalo de confiança de uma medida de associação, é CORRETO afirmar:',
  alts: [
    { t: 'Sua amplitude expressa a precisão da estimativa, e um intervalo muito amplo que inclui tanto efeito irrelevante quanto efeito grande indica estudo pouco informativo — situação diferente de um intervalo estreito em torno do valor de nulidade, que sugere ausência de efeito relevante.', ok: true,
      why: 'Correta. Amplo e incluindo o nulo não é o mesmo que estreito em torno do nulo.' },
    { t: 'Intervalo que inclui o valor de nulidade sempre significa ausência de efeito.', ok: false,
      why: 'Errada. Pode significar apenas imprecisão por amostra pequena.' },
    { t: 'A amplitude do intervalo não depende do tamanho da amostra.', ok: false,
      why: 'Errada. É um dos determinantes principais da precisão.' },
    { t: 'O intervalo de confiança corrige vieses do delineamento.', ok: false,
      why: 'Errada. Ele descreve erro aleatório, não erro sistemático.' },
    { t: 'Um resultado com intervalo excluindo o valor de nulidade é necessariamente relevante na prática.', ok: false,
      why: 'Errada. Significância estatística não equivale a relevância clínica ou de saúde pública.' }
  ],
  comentario: 'O intervalo fala de precisão e de erro aleatório apenas — viés ele não corrige. Amplo incluindo o nulo significa estudo pouco informativo; estreito em torno do nulo sugere ausência de efeito relevante. E excluir o nulo não torna o achado importante.',
  pegadinha: 'Tratar "incluiu o nulo" como prova de ausência de efeito confunde imprecisão com evidência negativa.',
  refs: ['Rothman — Epidemiologia Moderna'] },

{ id: 'q-1.3-062', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre sensibilidade e especificidade aplicadas a exames de vigilância ocupacional, é CORRETO afirmar:',
  alts: [
    { t: 'Em rastreamento de população trabalhadora com baixa prevalência do agravo, mesmo um exame muito específico gera proporção elevada de resultados falso-positivos entre os positivos, o que exige exame confirmatório antes de qualquer conduta com repercussão sobre o emprego.', ok: true,
      why: 'Correta. O valor preditivo positivo despenca quando a prevalência é baixa.' },
    { t: 'Sensibilidade e especificidade variam conforme a prevalência da doença na população.', ok: false,
      why: 'Errada. São propriedades do teste; o que varia com a prevalência é o valor preditivo.' },
    { t: 'Alta especificidade garante que todo resultado positivo seja verdadeiro.', ok: false,
      why: 'Errada. Em baixa prevalência, os falso-positivos podem superar os verdadeiros.' },
    { t: 'Em vigilância ocupacional, prefere-se sempre o teste mais específico como triagem inicial.', ok: false,
      why: 'Errada. Na triagem prioriza-se sensibilidade, deixando a especificidade para a confirmação.' },
    { t: 'O resultado de triagem pode fundamentar isoladamente decisão de inaptidão.', ok: false,
      why: 'Errada. Decisão com repercussão sobre o emprego exige confirmação.' }
  ],
  comentario: 'Sensibilidade e especificidade são do teste; valor preditivo depende da prevalência. Em população de baixa prevalência, positivo de triagem é majoritariamente falso — e nunca deve virar inaptidão sem confirmação.',
  pegadinha: 'Dizer que a especificidade varia com a prevalência é a troca conceitual mais cobrada nesse tema.',
  refs: ['Fletcher — Epidemiologia Clínica', 'NR-7'] },

{ id: 'q-2.2-060', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional ao calor, é CORRETO afirmar:',
  alts: [
    { t: 'A avaliação considera o calor ambiental combinado à carga metabólica da tarefa e à vestimenta utilizada, de modo que a mesma condição térmica produz sobrecarga distinta conforme o esforço exigido e a roupa de proteção usada.', ok: true,
      why: 'Correta. Ambiente, metabolismo e vestimenta compõem a sobrecarga térmica.' },
    { t: 'A avaliação depende exclusivamente da temperatura do ar.', ok: false,
      why: 'Errada. Umidade, radiação, velocidade do ar, esforço e vestimenta também determinam a sobrecarga.' },
    { t: 'A vestimenta de proteção química reduz a sobrecarga térmica do trabalhador.', ok: false,
      why: 'Errada. Ela reduz a dissipação de calor e aumenta a sobrecarga.' },
    { t: 'A aclimatação é permanente após adquirida.', ok: false,
      why: 'Errada. Perde-se em poucos dias de afastamento e precisa ser reconstruída no retorno.' },
    { t: 'A sede é indicador adequado de necessidade de hidratação no trabalho em calor.', ok: false,
      why: 'Errada. A sede aparece com desidratação já instalada; a hidratação deve ser programada.' }
  ],
  comentario: 'Sobrecarga térmica = ambiente + metabolismo da tarefa + vestimenta. Roupa de proteção química piora. Aclimatação se perde em poucos dias — perigoso no retorno de férias. E hidratação por horário, não por sede.',
  pegadinha: 'Voltar de férias já aclimatado é a suposição que produz caso grave na primeira semana de retorno.',
  refs: ['NHO 06 — Fundacentro', 'ACGIH — estresse térmico', 'NR-15'] },

{ id: 'q-2.2-061', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a radiações ionizantes, é CORRETO afirmar:',
  alts: [
    { t: 'A proteção se apoia em tempo, distância e blindagem, com princípio de otimização que impõe manter as doses tão baixas quanto razoavelmente exequíveis — abaixo dos limites, e não apenas dentro deles.', ok: true,
      why: 'Correta. Cumprir o limite não encerra o dever de otimizar.' },
    { t: 'Manter a dose dentro do limite anual encerra as obrigações de proteção.', ok: false,
      why: 'Errada. A otimização exige reduzir abaixo do limite sempre que exequível.' },
    { t: 'O uso de dosímetro individual constitui, por si, medida de proteção.', ok: false,
      why: 'Errada. O dosímetro monitora a dose recebida; não a reduz.' },
    { t: 'Os efeitos estocásticos apresentam limiar de dose bem estabelecido.', ok: false,
      why: 'Errada. São justamente os efeitos para os quais não se assume limiar.' },
    { t: 'A distância da fonte tem efeito linear sobre a taxa de dose.', ok: false,
      why: 'Errada. Para fonte pontual a relação com a distância é bem mais favorável do que linear.' }
  ],
  comentario: 'Tempo, distância, blindagem e otimização — reduzir abaixo do limite, não parar nele. Dosímetro mede, não protege. E os efeitos estocásticos são os sem limiar assumido.',
  pegadinha: 'Considerar o dosímetro um equipamento de proteção é confusão frequente entre monitorar e proteger.',
  refs: ['CNEN — normas de radioproteção', 'ICRP'] },

{ id: 'q-2.4-060', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a exposição ocupacional a agentes biológicos em serviços de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'As precauções padrão devem ser aplicadas no atendimento de todos os pacientes, independentemente do diagnóstico presumido ou conhecido, porque a proteção baseada apenas em diagnóstico conhecido falha justamente nos casos ainda não identificados.', ok: true,
      why: 'Correta. É o fundamento das precauções padrão.' },
    { t: 'As precauções podem ser adotadas seletivamente conforme o diagnóstico do paciente.', ok: false,
      why: 'Errada. A seletividade por diagnóstico deixa descoberto o paciente não diagnosticado.' },
    { t: 'A vacinação do trabalhador dispensa as precauções padrão.', ok: false,
      why: 'Errada. A vacinação protege contra agentes específicos e não cobre os demais.' },
    { t: 'O reencape de agulhas é aceitável quando feito com técnica adequada.', ok: false,
      why: 'Errada. O reencape é vedado; utiliza-se descarte imediato em recipiente apropriado.' },
    { t: 'A adoção de dispositivos de segurança em perfurocortantes é facultativa quando há treinamento adequado.', ok: false,
      why: 'Errada. A substituição por dispositivos com mecanismo de segurança é exigência normativa.' }
  ],
  comentario: 'Precaução padrão vale para todos, sempre — porque o risco está no não diagnosticado. Reencape é proibido, dispositivo de segurança é exigência, e vacina não substitui barreira.',
  pegadinha: 'Aplicar precauções conforme o diagnóstico conhecido protege exatamente quem já se sabe ser risco e deixa o resto aberto.',
  refs: ['NR-32', 'Protocolos de controle de infecção'] },

{ id: 'q-2.4-061', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre o risco biológico em atividades de coleta e tratamento de resíduos e esgoto, é CORRETO afirmar:',
  alts: [
    { t: 'Há exposição a agentes com múltiplas vias de transmissão, incluindo leptospirose, tétano, hepatite A e parasitoses, exigindo vacinação conforme indicação, higienização, vestimenta e calçado adequados e cuidado especial com lesões cutâneas preexistentes.', ok: true,
      why: 'Correta. Lesão de pele é porta de entrada relevante nessas atividades.' },
    { t: 'O risco biológico nessas atividades é desprezível diante do risco químico.', ok: false,
      why: 'Errada. Ambos são relevantes e coexistem.' },
    { t: 'A transmissão nessas atividades ocorre exclusivamente por via digestiva.', ok: false,
      why: 'Errada. Pele lesada e mucosas são vias importantes, e a leptospirose é o exemplo típico.' },
    { t: 'Trabalhadores com feridas em membros inferiores podem atuar normalmente com botas.', ok: false,
      why: 'Errada. Lesão cutânea exige avaliação e afastamento temporário do contato até a cicatrização.' },
    { t: 'A vacinação antitetânica é dispensável quando o trabalhador usa equipamento de proteção.', ok: false,
      why: 'Errada. O equipamento pode falhar e o esquema antitetânico é indicação básica nessas atividades.' }
  ],
  comentario: 'Saneamento e resíduos: leptospirose, tétano, hepatite A, parasitoses. A pele lesada é porta de entrada — trabalhador com ferida em membro inferior precisa ser afastado do contato até cicatrizar, mesmo de bota.',
  pegadinha: 'Confiar na bota com a perna ferida é a situação em que a leptospirose grave costuma acontecer.',
  refs: ['NR-32', 'Ministério da Saúde — leptospirose ocupacional'] },

{ id: 'q-2.6-062', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre os limites de exposição de curta duração e os valores-teto, é CORRETO afirmar:',
  alts: [
    { t: 'Eles existem porque alguns agentes produzem efeito agudo dependente de pico de concentração, de modo que uma média ponderada dentro do limite pode ocultar picos capazes de causar dano — e o valor-teto não pode ser ultrapassado em momento algum.', ok: true,
      why: 'Correta. Média conforme não garante ausência de pico lesivo.' },
    { t: 'A média ponderada no tempo é sempre suficiente para caracterizar a exposição segura.', ok: false,
      why: 'Errada. Ela mascara picos relevantes para agentes de ação aguda.' },
    { t: 'O valor-teto pode ser ultrapassado por curtos períodos desde que a média permaneça abaixo do limite.', ok: false,
      why: 'Errada. O valor-teto é justamente o que não admite ultrapassagem em nenhum momento.' },
    { t: 'Limites de curta duração se aplicam apenas a agentes cancerígenos.', ok: false,
      why: 'Errada. Aplicam-se a agentes com efeito agudo, irritante ou narcótico.' },
    { t: 'A existência de limite de curta duração dispensa a avaliação da exposição na jornada completa.', ok: false,
      why: 'Errada. Os dois critérios são complementares e devem ser atendidos simultaneamente.' }
  ],
  comentario: 'Média ponderada não enxerga pico. Por isso existem limite de curta duração e valor-teto — este último inultrapassável em qualquer instante. Os dois critérios são cumulativos com o da jornada.',
  pegadinha: 'Tratar o valor-teto como média de curto período desfaz exatamente o que ele significa.',
  refs: ['ACGIH — TLV-STEL e TLV-C', 'NR-15'] },

{ id: 'q-2.6-063', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Sobre a aplicação de limites de exposição em jornadas diferentes de oito horas, é CORRETO afirmar:',
  alts: [
    { t: 'Jornadas prolongadas aumentam o tempo de absorção e reduzem o intervalo de recuperação entre exposições, o que justifica ajuste do limite para baixo em agentes de efeito cumulativo ou de eliminação lenta.', ok: true,
      why: 'Correta. O limite pressupõe um padrão de jornada e de recuperação.' },
    { t: 'Os limites se aplicam sem qualquer ajuste a jornadas de doze horas.', ok: false,
      why: 'Errada. Há modelos de ajuste justamente para essas situações.' },
    { t: 'A prorrogação da jornada não altera a dose absorvida se a concentração permanecer constante.', ok: false,
      why: 'Errada. Dose depende de concentração e de tempo; mais tempo, mais dose.' },
    { t: 'O ajuste de limite para jornadas longas se aplica igualmente a todos os agentes.', ok: false,
      why: 'Errada. Depende da cinética do agente e do tipo de efeito.' },
    { t: 'O período de recuperação entre jornadas não influencia o efeito acumulado.', ok: false,
      why: 'Errada. É determinante para agentes de eliminação lenta.' }
  ],
  comentario: 'O limite pressupõe jornada padrão e descanso entre elas. Doze horas absorvem mais e recuperam menos: para agente cumulativo ou de eliminação lenta, o limite precisa cair. O ajuste depende da cinética — não é regra única para todos.',
  pegadinha: 'Aplicar o limite tabelado direto em jornada de doze horas ignora as duas metades do problema: mais dose e menos recuperação.',
  refs: ['ACGIH — TLVs, ajuste para jornadas não convencionais', 'Buschinelli — Toxicologia Ocupacional'] }

);
