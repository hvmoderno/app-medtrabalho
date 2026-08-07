/* Aprofundamento de alto rendimento: 2.2, 2.3, 2.4, 2.6 e 1.3.
   Questões AUTORAIS. Ver banco/README-formato.md */
window.BANCO = window.BANCO || [];
window.BANCO.push(

/* ==================== 2.2 Agentes físicos ============================== */
{ id: 'q-2.2-030', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de câmara fria, exposto a temperatura negativa por turnos prolongados, apresenta dor e palidez em dedos das mãos, com má cicatrização de pequena lesão em dedo. Sobre exposição ocupacional ao frio, é CORRETO afirmar:',
  alts: [
    { t: 'A vasoconstrição periférica reduz a perfusão das extremidades, prejudicando a cicatrização e aumentando o risco de lesão local por frio, o que exige regime de trabalho e pausa em ambiente aquecido, vestimenta adequada e atenção a lesões cutâneas prévias.', ok: true,
      why: 'Correta. A resposta fisiológica ao frio sacrifica a perfusão das extremidades para preservar a temperatura central, com repercussão direta sobre cicatrização e risco de lesão local.' },
    { t: 'A exposição ao frio favorece a cicatrização por reduzir o metabolismo local.', ok: false,
      why: 'Errada. Redução de perfusão prejudica cicatrização; o metabolismo reduzido não compensa a hipoperfusão.' },
    { t: 'Lesões locais por frio só ocorrem em temperaturas muito abaixo das praticadas em câmaras frias industriais.', ok: false,
      why: 'Errada. Exposição prolongada, umidade e vento aumentam a perda de calor mesmo em temperaturas moderadamente baixas.' },
    { t: 'A aclimatização ao frio é rápida e completa, dispensando medidas organizacionais.', ok: false,
      why: 'Errada. A adaptação ao frio é limitada e não substitui pausas, vestimenta e organização do trabalho.' },
    { t: 'A vestimenta deve ser a mais impermeável possível, para impedir qualquer troca com o ambiente.', ok: false,
      why: 'Errada. Vestimenta que impede a saída da umidade acumula suor junto à pele e aumenta a perda de calor.' }
  ],
  comentario: 'Frio: vasoconstrição periférica sacrifica as extremidades, o que prejudica cicatrização e aumenta risco de lesão local. Controle é organizacional — regime de trabalho e pausa aquecida, vestimenta em camadas que permita sair umidade, atenção a lesões prévias.',
  pegadinha: 'A vestimenta totalmente impermeável aparece como proteção máxima e agrava a perda de calor pelo suor retido.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.2-031', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Técnico de radiologia industrial pergunta sobre os princípios de proteção radiológica aplicáveis à sua atividade. A orientação CORRETA é:',
  alts: [
    { t: 'A proteção se apoia em tempo, distância e blindagem, somados aos princípios de justificação, otimização e limitação de dose — e o monitoramento individual de dose é instrumento de verificação, não substituto das medidas de proteção.', ok: true,
      why: 'Correta. Os três fatores operacionais e os três princípios de proteção radiológica organizam toda a conduta, e o dosímetro verifica se as medidas funcionaram.' },
    { t: 'O uso de dosímetro individual, por si, protege o trabalhador da exposição.', ok: false,
      why: 'Errada. O dosímetro mede; ele não interpõe nenhuma barreira entre a fonte e o trabalhador.' },
    { t: 'A distância da fonte tem efeito desprezível sobre a dose recebida.', ok: false,
      why: 'Errada. A dose cai acentuadamente com o aumento da distância, sendo um dos fatores mais eficazes.' },
    { t: 'O princípio da otimização significa manter a dose exatamente no limite estabelecido.', ok: false,
      why: 'Errada. Otimização significa manter a dose tão baixa quanto razoavelmente exequível, não atingir o limite.' },
    { t: 'Radiação ionizante e não ionizante exigem os mesmos princípios e as mesmas medidas de proteção.', ok: false,
      why: 'Errada. São naturezas distintas, com mecanismos de dano e medidas de proteção próprias.' }
  ],
  comentario: 'Operacional: tempo, distância e blindagem. Conceitual: justificação, otimização e limitação de dose. O dosímetro verifica, não protege. E otimizar não é chegar ao limite: é manter tão baixo quanto razoavelmente exequível.',
  pegadinha: 'Interpretar otimização como "usar todo o limite disponível" inverte o sentido do princípio.',
  refs: ['NR-15', 'Mendes, R. — Patologia do Trabalho'] },

{ id: 'q-2.2-032', tema: '2.2', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre iluminação nos ambientes de trabalho, é CORRETO afirmar:',
  alts: [
    { t: 'A adequação depende do nível de iluminância exigido pela tarefa, da uniformidade da distribuição, do controle de ofuscamento e do contraste — sendo insuficiente avaliar apenas o valor médio medido no ambiente.', ok: true,
      why: 'Correta. Iluminância adequada mal distribuída, com ofuscamento ou contraste inadequado, produz fadiga visual apesar do número aceitável.' },
    { t: 'Quanto maior a iluminância, melhor o conforto visual, sem inconvenientes.', ok: false,
      why: 'Errada. Excesso de iluminância e ofuscamento causam desconforto e fadiga visual.' },
    { t: 'A medição em um único ponto do setor representa adequadamente a condição de iluminação.', ok: false,
      why: 'Errada. A avaliação considera o posto e o campo visual da tarefa, com múltiplos pontos.' },
    { t: 'Iluminação inadequada não tem relação com queixas musculoesqueléticas.', ok: false,
      why: 'Errada. Má iluminação induz posturas de aproximação e rotação para enxergar, com repercussão musculoesquelética.' },
    { t: 'A iluminação natural dispensa qualquer avaliação, por ser sempre adequada.', ok: false,
      why: 'Errada. Luz natural varia ao longo do dia e pode causar ofuscamento e contrastes excessivos.' }
  ],
  comentario: 'Iluminação não é só quantidade: nível exigido pela tarefa, uniformidade, ausência de ofuscamento e contraste adequado. E ela conversa com a ergonomia — enxergar mal produz postura ruim.',
  pegadinha: '"Quanto mais luz melhor" ignora ofuscamento, que é causa frequente de fadiga visual.',
  refs: ['NR-17', 'NHO — Fundacentro'] },

/* ==================== 2.3 Agentes químicos ============================= */
{ id: 'q-2.3-030', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de indústria de cerâmica apresenta, após anos de exposição, quadro respiratório com padrão restritivo e imagem com opacidades. O laudo da empresa afirma que "a poeira é apenas incômoda, sem toxicidade". Sobre a afirmação, é CORRETO afirmar:',
  alts: [
    { t: 'A classificação de uma poeira como de baixa toxicidade não a torna inócua: a fração respirável pode causar efeito pulmonar por sobrecarga, e a presença de sílica cristalina na composição altera completamente o potencial patogênico, exigindo caracterização da composição real.', ok: true,
      why: 'Correta. Poeiras ditas de baixa toxicidade produzem efeito por sobrecarga, e em cerâmica a presença de sílica cristalina é a questão central a investigar.' },
    { t: 'Poeiras classificadas como de baixa toxicidade não produzem qualquer efeito pulmonar.', ok: false,
      why: 'Errada. Há efeito por sobrecarga pulmonar quando a deposição excede a capacidade de depuração.' },
    { t: 'A composição da poeira é irrelevante quando a concentração está abaixo do limite.', ok: false,
      why: 'Errada. A composição define o limite aplicável e o potencial patogênico.' },
    { t: 'Apenas poeiras metálicas causam pneumoconiose.', ok: false,
      why: 'Errada. Sílica, asbesto, carvão e outras poeiras minerais causam pneumoconioses.' },
    { t: 'O padrão restritivo na espirometria afasta a origem ocupacional do quadro.', ok: false,
      why: 'Errada. Pneumoconioses cursam classicamente com padrão restritivo.' }
  ],
  comentario: 'Duas ideias: poeira de baixa toxicidade ainda causa efeito por sobrecarga, e em cerâmica a pergunta decisiva é se há sílica cristalina na composição. Sem caracterizar a composição real, o laudo não diz nada.',
  pegadinha: 'A expressão "poeira incômoda" é usada como se significasse inócua e não significa.',
  refs: ['Santos, U.P. — Pneumologia Ocupacional', 'ACGIH', 'Buschinelli — Toxicologia Ocupacional'] },

{ id: 'q-2.3-031', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de fundição apresenta episódios recorrentes de febre, calafrios, mialgia e mal-estar que começam algumas horas após o turno e cedem espontaneamente em cerca de um dia, com melhora nos fins de semana e recidiva na segunda-feira. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'O quadro é compatível com febre dos fumos metálicos, autolimitada, associada à inalação de fumos de óxidos metálicos, tipicamente com tolerância que se perde após período de afastamento — o que explica a recidiva no início da semana.', ok: true,
      why: 'Correta. A perda de tolerância no fim de semana e a recidiva na segunda-feira são o traço mais característico do quadro.' },
    { t: 'Trata-se de quadro infeccioso recorrente sem relação com o trabalho.', ok: false,
      why: 'Errada. O padrão temporal ligado à jornada e a recidiva após pausa apontam para causa ocupacional.' },
    { t: 'O quadro indica intoxicação crônica grave por metais pesados, com necessidade de quelação.', ok: false,
      why: 'Errada. É quadro agudo e autolimitado, distinto da intoxicação crônica por metais.' },
    { t: 'A melhora nos fins de semana afasta a origem ocupacional.', ok: false,
      why: 'Errada, e inverte: a melhora no afastamento reforça a relação com o trabalho.' },
    { t: 'A prevenção depende exclusivamente do uso de protetor respiratório pelo trabalhador.', ok: false,
      why: 'Errada. Ventilação local exaustora e controle do processo precedem o equipamento individual.' }
  ],
  comentario: 'Febre dos fumos metálicos: quadro gripal algumas horas após a exposição, autolimitado, com tolerância que se perde no fim de semana — daí o padrão de recidiva na segunda-feira. Prevenção é exaustão local, não máscara.',
  pegadinha: 'Usar a melhora no fim de semana para afastar o nexo é a mesma inversão que aparece nas dermatoses.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Santos, U.P. — Pneumologia Ocupacional'] },

{ id: 'q-2.3-032', tema: '2.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Trabalhador de manutenção apresenta cefaleia, tontura, náuseas e confusão ao final de turno em ambiente fechado com uso de gerador a combustão. Sobre o quadro, é CORRETO afirmar:',
  alts: [
    { t: 'Deve-se suspeitar de intoxicação por monóxido de carbono, asfixiante químico que compromete o transporte de oxigênio, cujo tratamento é oxigenoterapia em alta concentração e cuja apresentação inicial é inespecífica e facilmente confundida com quadro viral.', ok: true,
      why: 'Correta. Sintomas inespecíficos em ambiente com combustão e melhora ao sair do local caracterizam a suspeita; a oxigenoterapia é a base do tratamento.' },
    { t: 'A ausência de cianose afasta a hipótese de comprometimento do transporte de oxigênio.', ok: false,
      why: 'Errada. Na intoxicação por monóxido de carbono a coloração pode não sinalizar a hipóxia tecidual.' },
    { t: 'O monóxido de carbono é asfixiante simples, atuando por deslocamento do oxigênio ambiente.', ok: false,
      why: 'Errada. Ele é asfixiante químico e age no transporte de oxigênio pela hemoglobina.' },
    { t: 'O odor característico do gás permite identificação precoce do risco.', ok: false,
      why: 'Errada. É inodoro, o que é justamente o que o torna perigoso.' },
    { t: 'O tratamento se resume à remoção do ambiente, sem indicação de oxigênio suplementar.', ok: false,
      why: 'Errada. A oxigenoterapia acelera a eliminação e é parte essencial do tratamento.' }
  ],
  comentario: 'Monóxido de carbono: inodoro, asfixiante químico, sintomas inespecíficos que imitam virose, melhora ao sair do ambiente e piora ao voltar. Tratamento é oxigênio em alta concentração. E ele também é ototóxico, o que conecta com o tema da audição.',
  pegadinha: 'Classificá-lo como asfixiante simples troca o mecanismo e, com ele, o tratamento.',
  refs: ['Buschinelli — Toxicologia Ocupacional', 'Greenberg — Occupational Emergency Medicine'] },

/* ==================== 2.4 Agentes biológicos =========================== */
{ id: 'q-2.4-030', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Uma empresa de coleta de resíduos sólidos urbanos solicita avaliação de risco biológico para seus garis. Sobre o cenário, é CORRETO afirmar:',
  alts: [
    { t: 'A atividade expõe a material perfurocortante descartado indevidamente, a agentes entéricos e a zoonoses, exigindo avaliação qualitativa das tarefas, imunização conforme o risco, equipamentos adequados e protocolo definido para acidente com material biológico.', ok: true,
      why: 'Correta. O risco decorre do conteúdo imprevisível dos resíduos, o que torna o protocolo de acidente e a imunização tão importantes quanto o equipamento.' },
    { t: 'O risco biológico em coleta de resíduos é desprezível, por não haver contato com pacientes.', ok: false,
      why: 'Errada. O contato é com material contaminado de origem desconhecida, o que agrava a imprevisibilidade.' },
    { t: 'Acidente perfurocortante em gari não segue o mesmo protocolo aplicado em serviços de saúde.', ok: false,
      why: 'Errada. A conduta pós-exposição segue a mesma lógica: avaliação da exposição, profilaxia quando indicada e seguimento.' },
    { t: 'A avaliação deve ser quantitativa, com medição da concentração de microrganismos no ar.', ok: false,
      why: 'Errada. Para agentes biológicos a avaliação é predominantemente qualitativa, por tarefa e via de exposição.' },
    { t: 'A imunização dos garis segue o mesmo esquema indicado para profissionais de saúde, sem adaptação.', ok: false,
      why: 'Errada. A indicação decorre do risco específico da atividade, que difere do de serviços de saúde.' }
  ],
  comentario: 'Coleta de resíduos concentra risco biológico com uma agravante: o conteúdo é desconhecido. Perfurocortante descartado no lixo comum é a exposição mais grave, o que exige protocolo pós-exposição estruturado — igual ao de serviços de saúde.',
  pegadinha: 'Supor que o risco biológico exige contato com pacientes deixa fora saneamento, coleta, funerário e agropecuária.',
  refs: ['NR-32', 'Classificação de Risco dos Agentes Biológicos — Ministério da Saúde', 'PCDT — PEP'] },

{ id: 'q-2.4-031', tema: '2.4', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre as vias de transmissão e as precauções correspondentes em ambiente ocupacional de saúde, é CORRETO afirmar:',
  alts: [
    { t: 'Precauções de contato, de gotículas e para aerossóis somam-se às precauções padrão conforme a via de transmissão do agente, e a definição correta da via determina o equipamento e o tipo de ambiente exigido.', ok: true,
      why: 'Correta. Errar a via leva a proteger com o equipamento errado — máscara cirúrgica onde seria necessário respirador, por exemplo.' },
    { t: 'As precauções por via de transmissão substituem as precauções padrão.', ok: false,
      why: 'Errada. Elas se somam; as padrão permanecem sempre.' },
    { t: 'Máscara cirúrgica e respirador com filtração de partículas têm a mesma indicação.', ok: false,
      why: 'Errada. A primeira protege contra gotículas; o segundo é necessário para aerossóis.' },
    { t: 'As precauções padrão só se aplicam quando há diagnóstico infeccioso confirmado.', ok: false,
      why: 'Errada. Aplicam-se a todos os pacientes, sempre, porque o estado infeccioso frequentemente é desconhecido.' },
    { t: 'Procedimentos geradores de aerossol não alteram a precaução indicada para o agente.', ok: false,
      why: 'Errada. Eles podem exigir precaução para aerossóis mesmo em agentes de transmissão por gotículas.' }
  ],
  comentario: 'Padrão sempre, e sobre elas a precaução por via: contato, gotícula ou aerossol. E o detalhe mais cobrado: procedimento gerador de aerossol pode elevar a precaução exigida, porque muda a via de exposição.',
  pegadinha: 'Tratar máscara cirúrgica e respirador como equivalentes é o erro que expõe profissionais a agentes de transmissão aérea.',
  refs: ['NR-32', 'Ministério da Saúde — precauções e isolamento'] },

/* ============= 2.6 Limites de exposição ocupacional ==================== */
{ id: 'q-2.6-040', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um laudo conclui pela regularidade da exposição usando o valor-limite de um agente para o qual a documentação de referência traz notação de sensibilizante. Sobre a conclusão, é CORRETO afirmar:',
  alts: [
    { t: 'A notação de sensibilizante indica que o agente pode induzir resposta em indivíduos sensibilizados mesmo em concentrações muito baixas, de modo que estar abaixo do valor-limite não protege quem já se sensibilizou — o que exige medidas específicas de prevenção da sensibilização e afastamento do sensibilizado.', ok: true,
      why: 'Correta. Uma vez sensibilizado, o trabalhador reage a concentrações muito inferiores ao limite, o que torna o parâmetro ambiental insuficiente para protegê-lo.' },
    { t: 'A notação de sensibilizante indica apenas potencial irritante, sem repercussão prática.', ok: false,
      why: 'Errada. Sensibilização é fenômeno imunológico distinto de irritação e tem repercussão prática decisiva.' },
    { t: 'Estar abaixo do valor-limite garante proteção inclusive aos trabalhadores já sensibilizados.', ok: false,
      why: 'Errada. É exatamente o que a notação alerta não ser verdade.' },
    { t: 'Trabalhadores sensibilizados devem permanecer na mesma exposição, com uso de equipamento individual.', ok: false,
      why: 'Errada. A conduta é afastar da exposição ao agente sensibilizante; o equipamento não garante proteção suficiente nesse cenário.' },
    { t: 'A notação de sensibilizante substitui a necessidade de valor-limite numérico.', ok: false,
      why: 'Errada. Ela complementa o valor-limite, alertando para uma limitação dele.' }
  ],
  comentario: 'Notação de sensibilizante muda a lógica: o limite protege a maioria não sensibilizada, mas não protege quem já se sensibilizou. As consequências práticas são prevenir a sensibilização no coletivo e afastar da exposição quem já reagiu.',
  pegadinha: 'Confundir sensibilizante com irritante é o mesmo tipo de erro de confundir dermatite alérgica com irritativa.',
  refs: ['ACGIH — TLVs e BEIs', 'Salim — Dermatoses Ocupacionais'] },

{ id: 'q-2.6-041', tema: '2.6', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Ao comparar dois documentos técnicos, o médico do trabalho observa que o limite nacional para determinado agente é várias vezes superior ao valor de referência internacional. Sobre a situação, é CORRETO afirmar:',
  alts: [
    { t: 'A divergência é conhecida e decorre de critérios e épocas de revisão diferentes, sendo tecnicamente defensável adotar o parâmetro mais protetor como meta de gestão, ainda que a caracterização legal de insalubridade siga o critério nacional.', ok: true,
      why: 'Correta. Cumprir a lei e proteger a saúde são objetivos que podem exigir parâmetros distintos, e adotar o mais protetor como meta é conduta técnica legítima.' },
    { t: 'Os limites nacionais e internacionais são numericamente equivalentes por adoção direta.', ok: false,
      why: 'Errada. Há divergências relevantes, tanto em valores quanto em periodicidade de revisão.' },
    { t: 'Adotar parâmetro mais protetor que o legal é vedado à empresa.', ok: false,
      why: 'Errada. Nada impede — e é recomendável — que a empresa adote patamar mais protetor.' },
    { t: 'A caracterização legal de insalubridade pode ser feita diretamente pelo valor internacional.', ok: false,
      why: 'Errada. A caracterização segue o critério legal nacional próprio.' },
    { t: 'Divergência entre parâmetros indica erro em um dos documentos.', ok: false,
      why: 'Errada. Decorre de critérios, bases de evidência e épocas de revisão diferentes.' }
  ],
  comentario: 'Dois planos: o legal, que caracteriza insalubridade pelo critério nacional, e o técnico-preventivo, que pode adotar o parâmetro mais protetor como meta de gestão. Divergir não é errar — é ter critérios e datas diferentes.',
  pegadinha: 'Afirmar equivalência entre os dois conjuntos de valores é falso e aparece com frequência em laudos.',
  refs: ['ACGIH — TLVs e BEIs', 'NR-15'] },

/* ============ 1.3 Epidemiologia clínica e bioestatística =============== */
{ id: 'q-1.3-040', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'dificil',
  enunciado: 'Um estudo de coorte ocupacional acompanhou trabalhadores por dez anos, mas 30% se desligaram da empresa ao longo do período e deixaram de ser avaliados. Sobre o impacto dessa perda, é CORRETO afirmar:',
  alts: [
    { t: 'A perda de seguimento pode gerar viés se estiver relacionada ao desfecho ou à exposição — trabalhadores que adoecem tendem a sair mais, o que subestima a associação e se soma ao efeito do trabalhador sadio.', ok: true,
      why: 'Correta. Perda diferencial é o problema: quem adoece sai e deixa de ser contado, o que enviesa o resultado na direção da ausência de efeito.' },
    { t: 'Perda de seguimento não gera viés desde que seja inferior a 50%.', ok: false,
      why: 'Errada. O que importa não é o percentual isolado, e sim se a perda é diferencial em relação à exposição ou ao desfecho.' },
    { t: 'A perda de seguimento é um tipo de erro aleatório, corrigível pelo aumento da amostra.', ok: false,
      why: 'Errada. É viés de seleção; aumentar a amostra não corrige.' },
    { t: 'Perdas por desligamento tendem a superestimar a associação entre exposição e doença.', ok: false,
      why: 'Errada. A tendência é subestimar, porque quem adoece tende a sair do emprego e do estudo.' },
    { t: 'O efeito do trabalhador sadio não guarda relação com a perda de seguimento.', ok: false,
      why: 'Errada. São fenômenos relacionados: ambos decorrem da saída seletiva dos menos saudáveis.' }
  ],
  comentario: 'Perda de seguimento vira viés quando é diferencial. Em coorte ocupacional a saída costuma ser seletiva — quem adoece sai — o que subestima o efeito e se soma ao efeito do trabalhador sadio. Aumentar a amostra não resolve.',
  pegadinha: 'Fixar um percentual mágico de perda aceitável ignora que o problema é a natureza da perda, não sua magnitude.',
  refs: ['Fletcher — Epidemiologia Clínica', 'Hulley — Delineando a pesquisa clínica'] },

{ id: 'q-1.3-041', tema: '1.3', tipo: 'autoral', fonte: null, nivel: 'intermediario',
  enunciado: 'Sobre a diferença entre significância estatística e relevância clínica em estudos ocupacionais, é CORRETO afirmar:',
  alts: [
    { t: 'Um estudo com amostra muito grande pode detectar como estatisticamente significativa uma diferença sem qualquer repercussão prática, de modo que a interpretação exige avaliar a magnitude do efeito e não apenas o valor de p.', ok: true,
      why: 'Correta. Amostra grande reduz o erro aleatório e torna significativas diferenças mínimas; a decisão exige olhar o tamanho do efeito.' },
    { t: 'Todo resultado estatisticamente significativo é clinicamente relevante.', ok: false,
      why: 'Errada. Significância informa sobre o acaso, não sobre a importância prática.' },
    { t: 'Resultados não significativos comprovam ausência de efeito.', ok: false,
      why: 'Errada. Ausência de evidência não é evidência de ausência, sobretudo com amostra pequena.' },
    { t: 'O valor de p mede a probabilidade de a hipótese nula ser verdadeira.', ok: false,
      why: 'Errada. Ele mede a probabilidade de observar aquele resultado, ou mais extremo, supondo a hipótese nula verdadeira.' },
    { t: 'A magnitude do efeito é irrelevante quando há significância estatística.', ok: false,
      why: 'Errada. É justamente a magnitude que informa se o achado importa na prática.' }
  ],
  comentario: 'Significância responde "isso pode ser acaso?"; relevância responde "isso muda alguma coisa?". Amostra grande torna significativo o irrelevante; amostra pequena torna não significativo o importante. Olhe sempre a magnitude e o intervalo.',
  pegadinha: 'A definição errada do valor de p — como probabilidade de a hipótese nula ser verdadeira — é a mais difundida na literatura médica.',
  refs: ['Fletcher — Epidemiologia Clínica'] }

);
