/* Aprofundamento de alto rendimento: 2.2, 2.3, 2.4, 2.6 e 1.3.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 2.2 Agentes físicos ============================== */
{ id: 'q-2.2-030', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de câmara fria, exposto a temperatura negativa por turnos prolongados, apresenta dor e palidez em dedos das mãos, com má cicatrização de pequena lesão em dedo. Sobre exposição ocupacional ao frio, é CORRETO afirmar:',
  alts: [
    { t: 'A vasoconstrição reduz a perfusão das extremidades e prejudica a cicatrização das lesões.', ok: true,
      why: 'Correta. Exige pausas em ambiente aquecido e atenção a lesões cutâneas prévias.' },
    { t: 'A exposição ao frio favorece a cicatrização das lesões por reduzir o metabolismo local do tecido.', ok: false,
      why: 'Errada. A vasoconstrição reduz a perfusão e prejudica a cicatrização.' },
    { t: 'A vasoconstrição reduz a perfusão, ocorrendo lesões por frio só bem abaixo das câmaras industriais.', ok: false,
      why: 'Errada. Perniose e lesões locais ocorrem nas temperaturas dessas câmaras.' },
    { t: 'A vasoconstrição reduz a perfusão, sendo a aclimatização ao frio rápida, completa e suficiente.', ok: false,
      why: 'Errada. A aclimatização ao frio é limitada e não dispensa medidas organizacionais.' },
    { t: 'A vasoconstrição reduz a perfusão, devendo a vestimenta ser a mais impermeável possível.', ok: false,
      why: 'Errada. Impedir a saída do vapor umedece a roupa e piora a perda de calor.' }
  ],
  comentario: 'Frio: vasoconstrição periférica sacrifica as extremidades, o que prejudica cicatrização e aumenta risco de lesão local. Controle é organizacional — regime de trabalho e pausa aquecida, vestimenta em camadas que permita sair umidade, atenção a lesões prévias.',
  pegadinha: 'A vestimenta totalmente impermeável aparece como proteção máxima e agrava a perda de calor pelo suor retido.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.2-031', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnico de radiologia industrial pergunta sobre os princípios de proteção radiológica aplicáveis à sua atividade. A orientação CORRETA é:',
  alts: [
    { t: 'Apoia-se em tempo, distância e blindagem, com justificação, otimização e limitação de dose.', ok: true,
      why: 'Correta. O monitoramento individual verifica; não substitui as medidas de proteção.' },
    { t: 'Apoia-se no monitoramento individual, protegendo o uso do dosímetro o trabalhador da exposição.', ok: false,
      why: 'Errada. O dosímetro mede a dose recebida; não protege.' },
    { t: 'Apoia-se em tempo e blindagem, tendo a distância da fonte efeito desprezível sobre a dose.', ok: false,
      why: 'Errada. A distância é uma das medidas mais eficazes de redução.' },
    { t: 'Apoia-se nos três princípios, significando a otimização manter a dose exatamente no limite.', ok: false,
      why: 'Errada. Significa reduzir ao menor nível razoavelmente exequível.' },
    { t: 'Apoia-se em tempo e distância, exigindo radiação ionizante e não ionizante as mesmas medidas.', ok: false,
      why: 'Errada. Mecanismos e efeitos distintos exigem medidas próprias.' }
  ],
  comentario: 'Operacional: tempo, distância e blindagem. Conceitual: justificação, otimização e limitação de dose. O dosímetro verifica, não protege. E otimizar não é chegar ao limite: é manter tão baixo quanto razoavelmente exequível.',
  pegadinha: 'Interpretar otimização como "usar todo o limite disponível" inverte o sentido do princípio.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.2-032', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre iluminação nos ambientes de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'Depende da iluminância exigida pela tarefa, da uniformidade, do ofuscamento e do contraste.', ok: true,
      why: 'Correta. Avaliar apenas o valor médio do ambiente é insuficiente.' },
    { t: 'Depende da iluminância, sendo tanto melhor o conforto visual quanto maior o nível alcançado.', ok: false,
      why: 'Errada. Excesso de luz gera ofuscamento e desconforto.' },
    { t: 'Depende da iluminância, representando a medição em um único ponto a condição do setor.', ok: false,
      why: 'Errada. A uniformidade exige medição em pontos representativos.' },
    { t: 'Depende da iluminância e do contraste, sem relação da iluminação com queixas musculoesqueléticas.', ok: false,
      why: 'Errada. Iluminação ruim induz posturas de aproximação e sobrecarga cervical.' },
    { t: 'Depende da iluminância e do ofuscamento, dispensando a iluminação natural qualquer avaliação.', ok: false,
      why: 'Errada. Varia ao longo do dia e pode gerar ofuscamento intenso.' }
  ],
  comentario: 'Iluminação não é só quantidade: nível exigido pela tarefa, uniformidade, ausência de ofuscamento e contraste adequado. E ela conversa com a ergonomia — enxergar mal produz postura ruim.',
  pegadinha: '"Quanto mais luz melhor" ignora ofuscamento, que é causa frequente de fadiga visual.',
  refs: ['NR-17', 'NHO — Fundacentro'] },

/* ==================== 2.3 Agentes químicos ============================= */
{ id: 'q-2.3-030', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de cerâmica apresenta, após anos de exposição, quadro respiratório com padrão restritivo e imagem com opacidades. O laudo da empresa afirma que "a poeira é apenas incômoda, sem toxicidade". Sobre a afirmação, é CORRETO afirmar:',
  alts: [
    { t: 'Baixa toxicidade não é inocuidade: a fração respirável causa efeito por sobrecarga pulmonar.', ok: true,
      why: 'Correta. A presença de sílica cristalina altera completamente o potencial patogênico.' },
    { t: 'As poeiras classificadas como de baixa toxicidade não produzem qualquer efeito pulmonar relevante.', ok: false,
      why: 'Errada. A fração respirável pode causar efeito por sobrecarga.' },
    { t: 'Baixa toxicidade não é inocuidade, sendo a composição irrelevante se a concentração está baixa.', ok: false,
      why: 'Errada. A presença de sílica muda o limite e o potencial patogênico.' },
    { t: 'Baixa toxicidade não é inocuidade, causando pneumoconiose apenas as poeiras de origem metálica.', ok: false,
      why: 'Errada. Sílica, asbesto e carvão são exemplos clássicos não metálicos.' },
    { t: 'Baixa toxicidade não é inocuidade, afastando o padrão restritivo na espirometria a origem ocupacional.', ok: false,
      why: 'Errada. Pneumoconioses cursam tipicamente com padrão restritivo.' }
  ],
  comentario: 'Duas ideias: poeira de baixa toxicidade ainda causa efeito por sobrecarga, e em cerâmica a pergunta decisiva é se há sílica cristalina na composição. Sem caracterizar a composição real, o laudo não diz nada.',
  pegadinha: 'A expressão "poeira incômoda" é usada como se significasse inócua e não significa.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.3-031', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de fundição apresenta episódios recorrentes de febre, calafrios, mialgia e mal-estar que começam algumas horas após o turno e cedem espontaneamente em cerca de um dia, com melhora nos fins de semana e recidiva na segunda-feira. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'É compatível com febre dos fumos metálicos, autolimitada, com tolerância perdida no afastamento.', ok: true,
      why: 'Correta. É o que explica a recidiva no início da semana de trabalho.' },
    { t: 'É quadro infeccioso recorrente de vias aéreas, sem relação com a atividade exercida pelo trabalhador.', ok: false,
      why: 'Errada. O padrão temporal aponta a exposição ocupacional.' },
    { t: 'É intoxicação crônica grave por metais pesados, com indicação de terapia quelante imediata.', ok: false,
      why: 'Errada. É quadro agudo e autolimitado, sem indicação de quelação.' },
    { t: 'É compatível com fumos metálicos, embora a melhora nos fins de semana afaste a origem ocupacional.', ok: false,
      why: 'Errada. É justamente o padrão que sugere origem ocupacional.' },
    { t: 'É compatível com fumos metálicos, dependendo a prevenção do uso de protetor pelo trabalhador.', ok: false,
      why: 'Errada. A prioridade é a exaustão junto à fonte de geração dos fumos.' }
  ],
  comentario: 'Febre dos fumos metálicos: quadro gripal algumas horas após a exposição, autolimitado, com tolerância que se perde no fim de semana — daí o padrão de recidiva na segunda-feira. Prevenção é exaustão local, não máscara.',
  pegadinha: 'Usar a melhora no fim de semana para afastar o nexo é a mesma inversão que aparece nas dermatoses.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Santos, U.P. — Pneumologia Ocupacional'] },

{ id: 'q-2.3-032', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de manutenção apresenta cefaleia, tontura, náuseas e confusão ao final de turno em ambiente fechado com uso de gerador a combustão. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'Suspeitar de monóxido de carbono, que compromete o transporte de oxigênio, tratado com oxigênio.', ok: true,
      why: 'Correta. A apresentação inicial é inespecífica e se confunde com quadro viral.' },
    { t: 'Suspeitar de monóxido, afastando a ausência de cianose o comprometimento do transporte de oxigênio.', ok: false,
      why: 'Errada. A coloração pode ser normal apesar da intoxicação grave.' },
    { t: 'Suspeitar de monóxido, asfixiante simples que atua deslocando o oxigênio do ar ambiente.', ok: false,
      why: 'Errada. É asfixiante químico: liga-se à hemoglobina e impede o transporte.' },
    { t: 'Suspeitar de monóxido, cujo odor característico permite identificação precoce do risco no local.', ok: false,
      why: 'Errada. É inodoro; não há qualquer aviso sensorial.' },
    { t: 'Suspeitar de monóxido, resumindo-se o tratamento à remoção do ambiente, sem oxigênio suplementar.', ok: false,
      why: 'Errada. A oxigenoterapia em alta concentração acelera a eliminação.' }
  ],
  comentario: 'Monóxido de carbono: inodoro, asfixiante químico, sintomas inespecíficos que imitam virose, melhora ao sair do ambiente e piora ao voltar. Tratamento é oxigênio em alta concentração. E ele também é ototóxico, o que conecta com o tema da audição.',
  pegadinha: 'Classificá-lo como asfixiante simples troca o mecanismo e, com ele, o tratamento.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

/* ==================== 2.4 Agentes biológicos =========================== */
{ id: 'q-2.4-030', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa de coleta de resíduos sólidos urbanos solicita avaliação de risco biológico para seus garis. Sobre o cenário, é CORRETO afirmar:',
  alts: [
    { t: 'Expõe a perfurocortantes mal descartados, a agentes entéricos e a zoonoses.', ok: true,
      why: 'Correta. Exige avaliação qualitativa, imunização por risco e protocolo de acidente.' },
    { t: 'Não expõe a risco biológico relevante, por não haver contato direto com pacientes na atividade.', ok: false,
      why: 'Errada. Perfurocortantes descartados e zoonoses são riscos concretos.' },
    { t: 'Expõe a perfurocortantes, não seguindo o acidente o mesmo protocolo dos serviços de saúde.', ok: false,
      why: 'Errada. A conduta pós-exposição segue a mesma lógica.' },
    { t: 'Expõe a agentes biológicos, exigindo avaliação quantitativa por medição de microrganismos no ar.', ok: false,
      why: 'Errada. A avaliação de risco biológico é qualitativa, pelas tarefas.' },
    { t: 'Expõe a vários agentes, seguindo a imunização o mesmo esquema dos profissionais de saúde.', ok: false,
      why: 'Errada. O esquema se adapta aos riscos próprios da atividade.' }
  ],
  comentario: 'Coleta de resíduos concentra risco biológico com uma agravante: o conteúdo é desconhecido. Perfurocortante descartado no lixo comum é a exposição mais grave, o que exige protocolo pós-exposição estruturado — igual ao de serviços de saúde.',
  pegadinha: 'Supor que o risco biológico exige contato com pacientes deixa fora saneamento, coleta, funerário e agropecuária.',
  refs: ['NR-32', 'Classificação de Risco dos Agentes Biológicos — Ministério da Saúde', 'PCDT — PEP'] },

{ id: 'q-2.4-031', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as vias de transmissão e as precauções correspondentes em ambiente ocupacional de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Contato, gotículas e aerossóis somam-se às precauções padrão conforme a via de transmissão.', ok: true,
      why: 'Correta. A via definida determina o equipamento e o tipo de ambiente exigido.' },
    { t: 'As precauções por via de transmissão substituem as precauções padrão no atendimento do caso.', ok: false,
      why: 'Errada. Somam-se a elas; as padrão permanecem sempre.' },
    { t: 'Somam-se às padrão, tendo máscara cirúrgica e respirador com filtração a mesma indicação.', ok: false,
      why: 'Errada. Uma protege gotículas; o outro é exigido para aerossóis.' },
    { t: 'Somam-se às padrão, que só se aplicam quando há diagnóstico infeccioso já confirmado.', ok: false,
      why: 'Errada. As padrão se aplicam a todos os pacientes, sempre.' },
    { t: 'Somam-se às padrão, sem que procedimentos geradores de aerossol alterem a precaução indicada.', ok: false,
      why: 'Errada. Elevam a exigência para precaução de aerossóis.' }
  ],
  comentario: 'Padrão sempre, e sobre elas a precaução por via: contato, gotícula ou aerossol. E o detalhe mais cobrado: procedimento gerador de aerossol pode elevar a precaução exigida, porque muda a via de exposição.',
  pegadinha: 'Tratar máscara cirúrgica e respirador como equivalentes é o erro que expõe profissionais a agentes de transmissão aérea.',
  refs: ['NR-32', 'Ministério da Saúde — precauções e isolamento'] },

/* ============= 2.6 Limites de exposição ocupacional ==================== */
{ id: 'q-2.6-040', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um laudo conclui pela regularidade da exposição usando o valor-limite de um agente para o qual a documentação de referência traz notação de sensibilizante. Sobre a conclusão, é CORRETO afirmar:',
  alts: [
    { t: 'Indica que o agente induz resposta em sensibilizados mesmo em concentrações muito baixas.', ok: true,
      why: 'Correta. Estar abaixo do limite não protege quem já se sensibilizou.' },
    { t: 'Indica potencial irritante do agente sobre pele e mucosas, sem maior repercussão prática.', ok: false,
      why: 'Errada. Indica indução de resposta imunológica específica.' },
    { t: 'Indica risco de sensibilização, garantindo o valor abaixo do limite proteção aos já sensibilizados.', ok: false,
      why: 'Errada. O sensibilizado reage a concentrações muito inferiores.' },
    { t: 'Indica risco, devendo os sensibilizados permanecer expostos com uso de equipamento individual.', ok: false,
      why: 'Errada. O afastamento do agente é a conduta que muda o prognóstico.' },
    { t: 'Indica risco de sensibilização, substituindo a notação a necessidade de valor-limite numérico.', ok: false,
      why: 'Errada. A notação acompanha o limite, não o substitui.' }
  ],
  comentario: 'Notação de sensibilizante muda a lógica: o limite protege a maioria não sensibilizada, mas não protege quem já se sensibilizou. As consequências práticas são prevenir a sensibilização no coletivo e afastar da exposição quem já reagiu.',
  pegadinha: 'Confundir sensibilizante com irritante é o mesmo tipo de erro de confundir dermatite alérgica com irritativa.',
  refs: ['ACGIH — TLVs e BEIs', 'Salim — Dermatoses Ocupacionais'] },

{ id: 'q-2.6-041', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao comparar dois documentos técnicos, o médico do trabalho observa que o limite nacional para determinado agente é várias vezes superior ao valor de referência internacional. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A divergência decorre de critérios e épocas distintos, sendo defensável adotar o mais protetor.', ok: true,
      why: 'Correta. A caracterização legal de insalubridade, porém, segue o critério nacional.' },
    { t: 'Os limites nacionais e os internacionais são numericamente equivalentes, por adoção direta destes.', ok: false,
      why: 'Errada. Divergem por critérios e datas de revisão diferentes.' },
    { t: 'A divergência existe, sendo vedado à empresa adotar parâmetro mais protetor que o legal.', ok: false,
      why: 'Errada. É permitido e tecnicamente recomendável.' },
    { t: 'A divergência existe, podendo a insalubridade ser caracterizada diretamente pelo valor internacional.', ok: false,
      why: 'Errada. A caracterização legal segue o critério nacional.' },
    { t: 'A divergência entre os parâmetros indica erro técnico em um dos documentos de referência.', ok: false,
      why: 'Errada. Decorre de critérios e épocas de revisão diferentes.' }
  ],
  comentario: 'Dois planos: o legal, que caracteriza insalubridade pelo critério nacional, e o técnico-preventivo, que pode adotar o parâmetro mais protetor como meta de gestão. Divergir não é errar — é ter critérios e datas diferentes.',
  pegadinha: 'Afirmar equivalência entre os dois conjuntos de valores é falso e aparece com frequência em laudos.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-15'] },

/* ============ 1.3 Epidemiologia clínica e bioestatística =============== */
{ id: 'q-1.3-040', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo de coorte ocupacional acompanhou trabalhadores por dez anos, mas 30% se desligaram da empresa ao longo do período e deixaram de ser avaliados. Sobre o impacto dessa perda, é CORRETO afirmar:',
  alts: [
    { t: 'A perda gera viés quando se relaciona ao desfecho: quem adoece tende a sair mais.', ok: true,
      why: 'Correta. Isso subestima a associação e se soma ao efeito do trabalhador sadio.' },
    { t: 'A perda de seguimento não gera viés desde que se mantenha abaixo de metade da coorte estudada.', ok: false,
      why: 'Errada. O que importa é se a perda é diferencial, não o seu tamanho.' },
    { t: 'A perda de seguimento é erro aleatório, corrigível pelo simples aumento do tamanho da amostra.', ok: false,
      why: 'Errada. Perda diferencial é viés, não erro aleatório.' },
    { t: 'A perda gera viés, tendendo as perdas por desligamento a superestimar a associação observada.', ok: false,
      why: 'Errada. Tendem a subestimar, porque os adoecidos saem.' },
    { t: 'A perda gera viés, sem relação do efeito do trabalhador sadio com a perda de seguimento.', ok: false,
      why: 'Errada. Os dois se somam na mesma direção.' }
  ],
  comentario: 'Perda de seguimento vira viés quando é diferencial. Em coorte ocupacional a saída costuma ser seletiva — quem adoece sai — o que subestima o efeito e se soma ao efeito do trabalhador sadio. Aumentar a amostra não resolve.',
  pegadinha: 'Fixar um percentual mágico de perda aceitável ignora que o problema é a natureza da perda, não sua magnitude.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Hulley — Delineando a pesquisa clínica'] },

{ id: 'q-1.3-041', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre significância estatística e relevância clínica em estudos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Amostra muito grande torna significativa diferença sem qualquer repercussão prática.', ok: true,
      why: 'Correta. A interpretação exige avaliar a magnitude do efeito, não só o valor de p.' },
    { t: 'Todo resultado estatisticamente significativo obtido no estudo é também clinicamente relevante.', ok: false,
      why: 'Errada. Significância estatística não equivale a relevância prática.' },
    { t: 'Amostra grande detecta pequenas diferenças, e resultados não significativos comprovam ausência de efeito.', ok: false,
      why: 'Errada. Podem refletir poder insuficiente do estudo.' },
    { t: 'Amostra grande detecta pequenas diferenças, medindo o valor de p a probabilidade de a nula ser verdadeira.', ok: false,
      why: 'Errada. Mede a probabilidade dos dados sob a hipótese nula.' },
    { t: 'Amostra grande detecta pequenas diferenças, sendo a magnitude irrelevante havendo significância.', ok: false,
      why: 'Errada. É justamente a magnitude que informa a relevância prática.' }
  ],
  comentario: 'Significância responde "isso pode ser acaso?"; relevância responde "isso muda alguma coisa?". Amostra grande torna significativo o irrelevante; amostra pequena torna não significativo o importante. Olhe sempre a magnitude e o intervalo.',
  pegadinha: 'A definição errada do valor de p — como probabilidade de a hipótese nula ser verdadeira — é a mais difundida na literatura médica.',
  refs: ['Fletcher — Epidemiologia Clínica'] }

);
