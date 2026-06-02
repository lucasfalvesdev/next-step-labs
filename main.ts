/// <reference lib="es2015" />
/// <reference lib="es2016" />
/// <reference lib="es2017" />
/// <reference lib="dom" />

// ── Types ────────────────────────────────────────────────────────────────────

type Lang = 'pt' | 'en' | 'es';

type TranslationValue = string | string[];

interface Translations {
    [key: string]: TranslationValue;
}

interface TranslationMap {
    pt: Translations;
    en: Translations;
    es: Translations;
}

// ── Translation Data ─────────────────────────────────────────────────────────

const T: TranslationMap = {
    pt: {
        "nav.mission":"Missão","nav.founder":"Fundador","nav.curriculum":"Currículo","nav.ds":"Estruturas de Dados","nav.math":"Matemática","nav.english":"Inglês","nav.schedule":"Bootcamp","nav.ai":"AI Tutor","nav.pricing":"Preços","nav.signup":"Inscrição","nav.impact":"Impacto","nav.faq":"FAQ","nav.cta":"Começar Agora",
        "hero.badge":"Bootcamp · Sábados e Domingos · 6 Meses","h1a":"De iniciante a","h1b":"engenheiro de software","h1c":"em 6 meses.",
        "hsub":"Programação, estruturas de dados, algoritmos e C++ num bootcamp guiado por IA e projetos reais. Formamos engenheiros completos.",
        "cs.lbl":"Turmas em breve","cs.t":"🚀 Inscrições abertas para a próxima turma!","cs.d":"Aulas fim de semana. Projetos reais. AI Tutor. Vagas limitadas.",
        "email.ph":"seu@email.com","notify.btn":"Quero uma vaga!","notify.ok":"✅ Recebemos! Entraremos em contato em breve.",
        "s1":"Duração","s2":"Projetos reais","s3":"AI Tutor","s4":"Potencial","follow":"Siga-nos",
        "mis.lbl":"Nossa missão","mis.title":"Formamos engenheiros.<br>Não apenas programadores.","mis.desc":"Alunos não falham por falta de inteligência — falham por falta de direção, prática real e conexão entre estruturas de dados e código.",
        "m1t":"Direção Clara","m1d":"Trilha estruturada de 6 meses. Você sabe exatamente onde está e aonde vai chegar.",
        "m2t":"Prática Real","m2d":"80% do tempo é código e projetos. Cada módulo termina com um sistema funcionando.",
        "m3t":"Estruturas de Dados","m3d":"Listas, pilhas, filas, árvores, grafos e tabelas hash ensinados com código real.",
        "m4t":"Guiado por IA","m4d":"Tutor com IA disponível 24/7 para explicar código, corrigir erros e sugerir o próximo passo.",
        "fnd.lbl":"O Fundador","fnd.title":"Criado por quem entende<br>o problema por dentro.",
        "fnd.quote":"\"Alunos não falham por falta de inteligência. Falham por falta de <span>direção e prática real.</span>\"",
        "fnd.bio1":"Lucas percebeu que o ensino de programação tradicional quebra as pessoas exatamente quando estruturas de dados e algoritmos aparecem sem nenhuma ponte prática.",
        "fnd.bio2":"Por isso criou o NextStep Coding: um bootcamp com estruturas de dados reais, algoritmos, matemática aplicada e AI Tutor — com C++ para quem quer ir ainda mais longe.",
        "fs1":"Bootcamp","fs2":"Projetos reais","fs3":"Impacto global",
        "cur.lbl":"Currículo","cur.title":"6 meses. 4 níveis.<br>Um engenheiro completo.","cur.desc":"Estruturas de dados e algoritmos integrados em todos os módulos.",
        "p1lbl":"🟦 Meses 1–2 · Fundamentos","p1t":"Beginner","p1s":"// Lógica → Python → Git → Arrays e Listas",
        "l1a":"Lógica de programação e pensamento algorítmico","l1b":"Python: variáveis, loops, funções, recursão","l1c":"Git e GitHub — controle de versão real","l1d":"Arrays, listas e operações fundamentais",
        "p1pa":"Calculadora","p1pb":"Jogo simples","p1pc":"Sistema básico",
        "p2lbl":"🟨 Meses 3–4 · Backend & Estruturas","p2t":"Intermediate","p2s":"// Pilhas → Filas → Árvores → SQL → APIs",
        "l2a":"Pilhas, filas, árvores binárias e grafos","l2b":"Algoritmos de busca: BFS, DFS, binária","l2c":"SQL, bancos de dados e modelagem relacional","l2d":"APIs REST com autenticação JWT",
        "p2pa":"Sistema de login","p2pb":"API de tarefas","p2pc":"Blog com banco",
        "p3lbl":"🟥 Meses 5–6 · Avançado","p3t":"Advanced","p3s":"// Hash Tables → Heaps → Big O → Grafos",
        "l3a":"Tabelas hash, heaps e estruturas avançadas","l3b":"Ordenação: QuickSort, MergeSort, HeapSort","l3c":"Complexidade de algoritmos: Big O Notation","l3d":"Programação dinâmica e grafos ponderados",
        "p3pa":"API JWT segura","p3pb":"Dashboard analítico",
        "p4lbl":"⚡ Elite · C++ Avançado","p4t":"Elite Engineer","p4s":"// Memória → Ponteiros → Sistemas Reais",
        "lb1":"Sintaxe C++, ponteiros e gerenciamento de memória","lb2":"Estruturas de dados em C++ puro (linked lists, trees)","lb3":"Algoritmos otimizados e análise de performance","lb4":"Construção de sistemas de alta performance",
        "pblbl":"Motor de busca em C++ com Trie","proj.lbl":"Projetos",
        "ds.lbl":"Estruturas de Dados","ds.title":"O coração da<br>engenharia de software.","ds.desc":"Cada estrutura é ensinada com código real, visualização e projeto prático.",
        "ds1t":"Arrays e Listas","ds1a":"→ Fundamentos","ds1d":"Acesso direto, inserção e remoção. A base de toda estrutura de dados.",
        "ds2t":"Pilhas e Filas","ds2a":"→ LIFO & FIFO","ds2d":"Undo/redo, parsing de expressões, processamento de tarefas em sequência.",
        "ds3t":"Árvores Binárias","ds3a":"→ BST, AVL, Heap","ds3d":"Busca eficiente em O(log n). Base de bancos de dados e sistemas de arquivos.",
        "ds4t":"Grafos","ds4a":"→ BFS & DFS","ds4d":"Redes, mapas, redes sociais. Algoritmos de Dijkstra e A* na prática.",
        "ds5t":"Tabelas Hash","ds5a":"→ O(1) médio","ds5d":"Acesso em tempo constante. Implementação de dicionários e caches.",
        "ds6t":"Tries","ds6a":"→ Autocompletar","ds6d":"Busca de strings eficiente. Usado em editores, buscadores e compressão.",
        "math.lbl":"Matemática Integrada","math.title":"Matemática aplicada.<br>Nunca isolada.","math.desc":"Cada conceito matemático é ensinado dentro do código, no momento exato em que faz sentido.",
        "ma1t":"Lógica","ma1a":"→ Programação","ma1d":"Operadores lógicos e condicionais — a base do pensamento computacional.",
        "ma2t":"Álgebra","ma2a":"→ Variáveis e Funções","ma2d":"Variáveis e equações mapeadas diretamente para código Python e C++.",
        "ma3t":"Estatística","ma3a":"→ Dados e IA","ma3d":"Médias e probabilidade aplicados a dados e introdução à IA.",
        "ma4t":"Complexidade","ma4a":"→ Big O Notation","ma4d":"O(1), O(n), O(log n), O(n²) na prática com código real.",
        "ma5t":"Combinatória","ma5a":"→ Algoritmos","ma5d":"Permutações aplicadas a backtracking e programação dinâmica.",
        "ma6t":"Funções","ma6a":"→ Algoritmos Recursivos","ma6d":"Funções matemáticas viram recursão. Gráficos viram visualizações.",
        "sch.lbl":"Formato Bootcamp","sch.title":"Fins de semana intensos.<br>Resultados reais.","sch.desc":"Projetado para quem trabalha durante a semana. 20% teoria · 40% código · 40% prática.",
        "sch.sat":"Sábado","sch.satd":"Teoria aplicada + código ao vivo. Conceitos explicados dentro de projetos reais.",
        "sch.sun":"Domingo","sch.sund":"Prática guiada e desenvolvimento de projetos com suporte do AI Tutor.",
        "sch.hol":"Feriados","sch.hold":"Hackathons e imersões. Projetos completos do zero em um dia.",
        "ai.lbl":"AI Tutor","ai.title":"Seu mentor pessoal.<br>Disponível 24/7.","ai.desc":"O AI Tutor conhece onde você está no currículo, analisa seu código e sugere a estrutura de dados certa para cada problema.",
        "af1t":"Explicação em Tempo Real","af1d":"Entende seu código e explica linha por linha com clareza",
        "af2t":"Correção Automática","af2d":"Detecta erros, explica o porquê e sugere a solução correta",
        "af3t":"Trilha Personalizada","af3d":"Adapta ritmo, exercícios e estruturas ao seu progresso individual",
        "ai.online":"Online · Analisando seu código",
        "chat.m1":"Oi! Vi que você está implementando uma árvore binária de busca. Qual operação está te dando problema? 🌳",
        "chat.m2":"A rotação AVL — não entendo quando aplicar rotação dupla...",
        "chat.m4":"Seu Next Step Score subiu para ⚡ 7.480 pts — top 12% da turma!",
        "chat.ph":"Pergunte sobre estruturas de dados...",
        "imp.lbl":"Impacto Global","imp.title":"Cada número aqui é<br>uma vida transformada.",
        "i1":"Duração bootcamp","i2":"Países alcançados","i3":"Projetos reais","i4":"AI Tutor ativo",
        "faq.lbl":"FAQ","faq.title":"Perguntas frequentes.",
        "faq.q1":"Preciso saber matemática avançada para entrar?","faq.a1":"Não! O curso começa do zero. Toda a matemática e estruturas de dados são ensinadas de forma aplicada e progressiva.",
        "faq.q2":"Quanto tempo preciso por semana?","faq.a2":"Sábado (2–3h) e domingo (2–4h). Recomendamos 2–3h extras na semana. AI Tutor disponível 24/7.",
        "faq.q3":"É 100% online?","faq.a3":"Sim, totalmente online e ao vivo. Gravações disponíveis para revisão a qualquer hora.",
        "faq.q4":"Vou aprender C++ sendo iniciante?","faq.a4":"C++ é introduzido nos meses 5–6, quando você já domina Python, estruturas de dados e algoritmos.",
        "faq.q5":"Vou sair com portfólio?","faq.a5":"Sim! Pelo menos 6 projetos no GitHub — incluindo estruturas implementadas do zero e motor de busca em C++.",
        "cta.title":"Seu próximo passo<br>começa agora.","cta.desc":"6 meses. Fins de semana. Estruturas de dados reais. AI Tutor. Você sai engenheiro de software completo.",
        "cta.btn1":"🚀 Garantir minha vaga","cta.btn2":"Conhecer o fundador",
        "ft.sl":"Aprender · Criar · Transformar","ft.cp":"© 2025 NextStep Coding · Lucas F. Alves Rodrigues. Todos os direitos reservados.","ft.pv":"Privacidade","ft.tm":"Termos","ft.ct":"Contato",
        tech:["Estruturas de Dados","Algoritmos","Python Avançado","C++ Moderno","Árvores & Grafos","Big O Notation","SQL & Bancos","APIs REST","QuickSort & MergeSort","Tabelas Hash","Programação Dinâmica","C++ Performance"]
    },
    en: {
        "nav.mission":"Mission","nav.founder":"Founder","nav.curriculum":"Curriculum","nav.ds":"Data Structures","nav.math":"Math","nav.english":"English","nav.schedule":"Bootcamp","nav.ai":"AI Tutor","nav.pricing":"Pricing","nav.signup":"Enroll","nav.impact":"Impact","nav.faq":"FAQ","nav.cta":"Start Now",
        "hero.badge":"Bootcamp · Saturdays & Sundays · 6 Months","h1a":"From beginner to","h1b":"software engineer","h1c":"in 6 months.",
        "hsub":"Programming, data structures, algorithms and C++ in an AI-guided project-based bootcamp. We build complete engineers.",
        "cs.lbl":"Classes coming soon","cs.t":"🚀 Enrollment open for the next cohort!","cs.d":"Weekend classes. Real projects. AI Tutor. Limited spots.",
        "email.ph":"your@email.com","notify.btn":"I want a spot!","notify.ok":"✅ Got it! We'll reach out soon.",
        "s1":"Duration","s2":"Real projects","s3":"AI Tutor","s4":"Potential","follow":"Follow us",
        "mis.lbl":"Our mission","mis.title":"We build engineers.<br>Not just programmers.","mis.desc":"Students don't fail from lack of intelligence — they fail from lack of direction, real practice and connection between data structures and code.",
        "m1t":"Clear Direction","m1d":"Structured 6-month path. You always know where you are and where you're going.",
        "m2t":"Real Practice","m2d":"80% of time is code and projects. Every module ends with a working system.",
        "m3t":"Data Structures","m3d":"Lists, stacks, queues, trees, graphs and hash tables taught with real code.",
        "m4t":"AI-Guided","m4d":"AI Tutor available 24/7 to explain code, fix errors and suggest your next step.",
        "fnd.lbl":"The Founder","fnd.title":"Built by someone who<br>understands the problem firsthand.",
        "fnd.quote":"\"Students don't fail from lack of intelligence. They fail from lack of <span>direction and real practice.</span>\"",
        "fnd.bio1":"Lucas noticed that traditional programming education breaks people exactly when data structures and algorithms appear without any practical bridge.",
        "fnd.bio2":"So he built NextStep Coding: a bootcamp with real data structures, algorithms, applied math and AI Tutor — with C++ for those who want to go further.",
        "fs1":"Bootcamp","fs2":"Real projects","fs3":"Global impact",
        "cur.lbl":"Curriculum","cur.title":"6 months. 4 levels.<br>One complete engineer.","cur.desc":"Data structures and algorithms integrated at every module level.",
        "p1lbl":"🟦 Months 1–2 · Foundations","p1t":"Beginner","p1s":"// Logic → Python → Git → Arrays & Lists",
        "l1a":"Programming logic and algorithmic thinking","l1b":"Python: variables, loops, functions, recursion","l1c":"Git and GitHub — real version control","l1d":"Arrays, lists and fundamental operations",
        "p1pa":"Calculator","p1pb":"Simple game","p1pc":"Basic system",
        "p2lbl":"🟨 Months 3–4 · Backend & Structures","p2t":"Intermediate","p2s":"// Stacks → Queues → Trees → SQL → APIs",
        "l2a":"Stacks, queues, binary trees and graphs","l2b":"Search algorithms: BFS, DFS, binary search","l2c":"SQL, databases and relational modeling","l2d":"REST APIs with JWT authentication",
        "p2pa":"Login system","p2pb":"Task API","p2pc":"Blog with database",
        "p3lbl":"🟥 Months 5–6 · Advanced","p3t":"Advanced","p3s":"// Hash Tables → Heaps → Big O → Graphs",
        "l3a":"Hash tables, heaps and advanced structures","l3b":"Sorting: QuickSort, MergeSort, HeapSort","l3c":"Algorithm complexity: Big O Notation","l3d":"Dynamic programming and weighted graphs",
        "p3pa":"Secure JWT API","p3pb":"Analytics dashboard",
        "p4lbl":"⚡ Elite · Advanced C++","p4t":"Elite Engineer","p4s":"// Memory → Pointers → Real Systems",
        "lb1":"C++ syntax, pointers and memory management","lb2":"Data structures in pure C++ (linked lists, trees)","lb3":"Optimized algorithms and performance analysis","lb4":"Building high-performance systems",
        "pblbl":"C++ search engine with Trie","proj.lbl":"Projects",
        "ds.lbl":"Data Structures","ds.title":"The heart of<br>software engineering.","ds.desc":"Every structure is taught with real code, visualization and practical projects.",
        "ds1t":"Arrays & Lists","ds1a":"→ Foundations","ds1d":"Direct access, insertion and removal. The foundation of all data structures.",
        "ds2t":"Stacks & Queues","ds2a":"→ LIFO & FIFO","ds2d":"Undo/redo, expression parsing, sequential task processing.",
        "ds3t":"Binary Trees","ds3a":"→ BST, AVL, Heap","ds3d":"Efficient search in O(log n). Foundation of databases and file systems.",
        "ds4t":"Graphs","ds4a":"→ BFS & DFS","ds4d":"Networks, maps, social graphs. Dijkstra and A* algorithms in practice.",
        "ds5t":"Hash Tables","ds5a":"→ O(1) average","ds5d":"Constant time access. Dictionary and cache implementation.",
        "ds6t":"Tries","ds6a":"→ Autocomplete","ds6d":"Efficient string search. Used in editors, search engines and compression.",
        "math.lbl":"Integrated Math","math.title":"Applied math.<br>Never isolated.","math.desc":"Every math concept is taught inside the code, at the exact moment it makes sense.",
        "ma1t":"Logic","ma1a":"→ Programming","ma1d":"Logical operators and conditionals — the foundation of computational thinking.",
        "ma2t":"Algebra","ma2a":"→ Variables & Functions","ma2d":"Variables and equations mapped directly to Python and C++ code.",
        "ma3t":"Statistics","ma3a":"→ Data & AI","ma3d":"Averages and probability applied to data analysis and basic AI.",
        "ma4t":"Complexity","ma4a":"→ Big O Notation","ma4d":"O(1), O(n), O(log n), O(n²) in practice with real code.",
        "ma5t":"Combinatorics","ma5a":"→ Algorithms","ma5d":"Permutations applied to backtracking and dynamic programming.",
        "ma6t":"Functions","ma6a":"→ Recursive Algorithms","ma6d":"Mathematical functions become recursion. Graphs become algorithm visualizations.",
        "sch.lbl":"Bootcamp Format","sch.title":"Intense weekends.<br>Real results.","sch.desc":"Designed for those who work weekdays. 20% theory · 40% live coding · 40% practice.",
        "sch.sat":"Saturday","sch.satd":"Applied theory + live coding. Concepts explained through real projects.",
        "sch.sun":"Sunday","sch.sund":"Guided practice and project development with AI Tutor support.",
        "sch.hol":"Holidays","sch.hold":"Hackathons and immersions. Complete projects from scratch in one day.",
        "ai.lbl":"AI Tutor","ai.title":"Your personal mentor.<br>Available 24/7.","ai.desc":"The AI Tutor knows where you are, analyzes your code and suggests the right data structure for each problem.",
        "af1t":"Real-Time Explanation","af1d":"Understands your code and explains it line by line",
        "af2t":"Automatic Correction","af2d":"Detects errors, explains why and suggests the correct solution",
        "af3t":"Personalized Path","af3d":"Adapts pace, exercises and structures to your individual progress",
        "ai.online":"Online · Analyzing your code",
        "chat.m1":"Hey! I see you're implementing a binary search tree. Which operation is giving you trouble? 🌳",
        "chat.m2":"AVL rotation — I don't understand when to apply double rotation...",
        "chat.m4":"Your Next Step Score jumped to ⚡ 7,480 pts — top 12% of your cohort!",
        "chat.ph":"Ask about data structures...",
        "imp.lbl":"Global Impact","imp.title":"Every number here is<br>a life transformed.",
        "i1":"Bootcamp duration","i2":"Countries reached","i3":"Real projects","i4":"AI Tutor active",
        "faq.lbl":"FAQ","faq.title":"Frequently asked questions.",
        "faq.q1":"Do I need advanced math?","faq.a1":"No! The course starts from zero. All math and data structures are taught applied and progressively.",
        "faq.q2":"How much time per week?","faq.a2":"Saturday (2–3h) and Sunday (2–4h). Plus 2–3h extra practice. AI Tutor available 24/7.",
        "faq.q3":"Is it 100% online?","faq.a3":"Yes, fully online and live. Recordings available anytime.",
        "faq.q4":"Will I learn C++ as a beginner?","faq.a4":"C++ is introduced in months 5–6, when you already master Python, data structures and algorithms.",
        "faq.q5":"Will I leave with a portfolio?","faq.a5":"Yes! At least 6 real projects on GitHub — including structures built from scratch and a C++ search engine.",
        "cta.title":"Your next step<br>starts now.","cta.desc":"6 months. Weekends. Real data structures. AI Tutor. You graduate as a complete software engineer.",
        "cta.btn1":"🚀 Secure my spot","cta.btn2":"Meet the founder",
        "ft.sl":"Learn · Create · Transform","ft.cp":"© 2025 NextStep Coding · Lucas F. Alves Rodrigues. All rights reserved.","ft.pv":"Privacy","ft.tm":"Terms","ft.ct":"Contact",
        tech:["Data Structures","Algorithms","Advanced Python","Modern C++","Trees & Graphs","Big O Notation","SQL & Databases","REST APIs","QuickSort & MergeSort","Hash Tables","Dynamic Programming","C++ Performance"]
    },
    es: {
        "nav.mission":"Misión","nav.founder":"Fundador","nav.curriculum":"Currículo","nav.ds":"Estructuras de Datos","nav.math":"Matemáticas","nav.english":"Inglés","nav.schedule":"Bootcamp","nav.ai":"AI Tutor","nav.pricing":"Precios","nav.signup":"Inscripción","nav.impact":"Impacto","nav.faq":"FAQ","nav.cta":"Empezar Ahora",
        "hero.badge":"Bootcamp · Sábados y Domingos · 6 Meses","h1a":"De principiante a","h1b":"ingeniero de software","h1c":"en 6 meses.",
        "hsub":"Programación, estructuras de datos, algoritmos y C++ en un bootcamp guiado por IA y proyectos reales. Formamos ingenieros completos.",
        "cs.lbl":"Clases próximamente","cs.t":"🚀 ¡Inscripciones abiertas para la próxima cohorte!","cs.d":"Clases fines de semana. Proyectos reales. AI Tutor. Plazas limitadas.",
        "email.ph":"tu@correo.com","notify.btn":"¡Quiero un lugar!","notify.ok":"✅ ¡Recibido! Te contactaremos pronto.",
        "s1":"Duración","s2":"Proyectos reales","s3":"AI Tutor","s4":"Potencial","follow":"Síguenos",
        "mis.lbl":"Nuestra misión","mis.title":"Formamos ingenieros.<br>No solo programadores.","mis.desc":"Los estudiantes no fallan por falta de inteligencia — fallan por falta de dirección, práctica real y conexión entre estructuras de datos y código.",
        "m1t":"Dirección Clara","m1d":"Ruta estructurada de 6 meses. Siempre sabes dónde estás y adónde vas.",
        "m2t":"Práctica Real","m2d":"80% del tiempo es código y proyectos. Cada módulo termina con un sistema funcionando.",
        "m3t":"Estructuras de Datos","m3d":"Listas, pilas, colas, árboles, grafos y tablas hash enseñados con código real.",
        "m4t":"Guiado por IA","m4d":"Tutor de IA disponible 24/7 para explicar código, corregir errores y sugerir el siguiente paso.",
        "fnd.lbl":"El Fundador","fnd.title":"Creado por alguien que<br>entiende el problema desde adentro.",
        "fnd.quote":"\"Los estudiantes no fallan por falta de inteligencia. Fallan por falta de <span>dirección y práctica real.</span>\"",
        "fnd.bio1":"Lucas notó que la enseñanza tradicional rompe a las personas exactamente cuando las estructuras de datos y algoritmos aparecen sin ningún puente práctico.",
        "fnd.bio2":"Por eso creó NextStep Coding: un bootcamp con estructuras de datos reales, algoritmos, matemática aplicada y AI Tutor — con C++ para los que quieren ir más lejos.",
        "fs1":"Bootcamp","fs2":"Proyectos reales","fs3":"Impacto global",
        "cur.lbl":"Currículo","cur.title":"6 meses. 4 niveles.<br>Un ingeniero completo.","cur.desc":"Estructuras de datos y algoritmos integrados en todos los módulos.",
        "p1lbl":"🟦 Meses 1–2 · Fundamentos","p1t":"Beginner","p1s":"// Lógica → Python → Git → Arrays y Listas",
        "l1a":"Lógica de programación y pensamiento algorítmico","l1b":"Python: variables, bucles, funciones, recursión","l1c":"Git y GitHub — control de versiones real","l1d":"Arrays, listas y operaciones fundamentales",
        "p1pa":"Calculadora","p1pb":"Juego simple","p1pc":"Sistema básico",
        "p2lbl":"🟨 Meses 3–4 · Backend & Estructuras","p2t":"Intermediate","p2s":"// Pilas → Colas → Árboles → SQL → APIs",
        "l2a":"Pilas, colas, árboles binarios y grafos","l2b":"Algoritmos de búsqueda: BFS, DFS, binaria","l2c":"SQL, bases de datos y modelado relacional","l2d":"APIs REST con autenticación JWT",
        "p2pa":"Sistema de login","p2pb":"API de tareas","p2pc":"Blog con base de datos",
        "p3lbl":"🟥 Meses 5–6 · Avanzado","p3t":"Advanced","p3s":"// Hash Tables → Heaps → Big O → Grafos",
        "l3a":"Tablas hash, heaps y estructuras avanzadas","l3b":"Ordenamiento: QuickSort, MergeSort, HeapSort","l3c":"Complejidad de algoritmos: Big O Notation","l3d":"Programación dinámica y grafos ponderados",
        "p3pa":"API JWT segura","p3pb":"Dashboard analítico",
        "p4lbl":"⚡ Elite · C++ Avanzado","p4t":"Elite Engineer","p4s":"// Memoria → Punteros → Sistemas Reales",
        "lb1":"Sintaxis C++, punteros y gestión de memoria","lb2":"Estructuras de datos en C++ puro (linked lists, trees)","lb3":"Algoritmos optimizados y análisis de performance","lb4":"Construcción de sistemas de alto rendimiento",
        "pblbl":"Motor de búsqueda en C++ con Trie","proj.lbl":"Proyectos",
        "ds.lbl":"Estructuras de Datos","ds.title":"El corazón de la<br>ingeniería de software.","ds.desc":"Cada estructura se enseña con código real, visualización y proyecto práctico.",
        "ds1t":"Arrays y Listas","ds1a":"→ Fundamentos","ds1d":"Acceso directo, inserción y eliminación. La base de todas las estructuras.",
        "ds2t":"Pilas y Colas","ds2a":"→ LIFO & FIFO","ds2d":"Undo/redo, parsing de expresiones, procesamiento secuencial de tareas.",
        "ds3t":"Árboles Binarios","ds3a":"→ BST, AVL, Heap","ds3d":"Búsqueda eficiente en O(log n). Base de bases de datos y sistemas de archivos.",
        "ds4t":"Grafos","ds4a":"→ BFS & DFS","ds4d":"Redes, mapas, redes sociales. Algoritmos de Dijkstra y A* en la práctica.",
        "ds5t":"Tablas Hash","ds5a":"→ O(1) promedio","ds5d":"Acceso en tiempo constante. Implementación de diccionarios y caches.",
        "ds6t":"Tries","ds6a":"→ Autocompletar","ds6d":"Búsqueda de strings eficiente. Usado en editores, buscadores y compresión.",
        "math.lbl":"Matemáticas Integradas","math.title":"Matemáticas aplicadas.<br>Nunca aisladas.","math.desc":"Cada concepto matemático se enseña dentro del código, en el momento exacto en que tiene sentido.",
        "ma1t":"Lógica","ma1a":"→ Programación","ma1d":"Operadores lógicos y condicionales — la base del pensamiento computacional.",
        "ma2t":"Álgebra","ma2a":"→ Variables y Funciones","ma2d":"Variables y ecuaciones mapeadas directamente a código Python y C++.",
        "ma3t":"Estadística","ma3a":"→ Datos e IA","ma3d":"Medias y probabilidad aplicadas a análisis de datos e IA.",
        "ma4t":"Complejidad","ma4a":"→ Big O Notation","ma4d":"O(1), O(n), O(log n), O(n²) en práctica con código real.",
        "ma5t":"Combinatoria","ma5a":"→ Algoritmos","ma5d":"Permutaciones aplicadas a backtracking y programación dinámica.",
        "ma6t":"Funciones","ma6a":"→ Algoritmos Recursivos","ma6d":"Las funciones matemáticas se convierten en recursión. Los gráficos en visualizaciones.",
        "sch.lbl":"Formato Bootcamp","sch.title":"Fines de semana intensos.<br>Resultados reales.","sch.desc":"Diseñado para quienes trabajan entre semana. 20% teoría · 40% código · 40% práctica.",
        "sch.sat":"Sábado","sch.satd":"Teoría aplicada + código en vivo. Conceptos explicados dentro de proyectos reales.",
        "sch.sun":"Domingo","sch.sund":"Práctica guiada y desarrollo de proyectos con soporte del AI Tutor.",
        "sch.hol":"Feriados","sch.hold":"Hackathons e inmersiones. Proyectos completos desde cero en un día.",
        "ai.lbl":"AI Tutor","ai.title":"Tu mentor personal.<br>Disponible 24/7.","ai.desc":"El AI Tutor conoce dónde estás, analiza tu código y sugiere la estructura de datos correcta para cada problema.",
        "af1t":"Explicación en Tiempo Real","af1d":"Entiende tu código y lo explica línea por línea",
        "af2t":"Corrección Automática","af2d":"Detecta errores, explica el porqué y sugiere la solución",
        "af3t":"Ruta Personalizada","af3d":"Adapta ritmo, ejercicios y estructuras a tu progreso individual",
        "ai.online":"Online · Analizando tu código",
        "chat.m1":"¡Hola! Vi que estás implementando un árbol binario de búsqueda. ¿Qué operación te está dando problemas? 🌳",
        "chat.m2":"La rotación AVL — no entiendo cuándo aplicar rotación doble...",
        "chat.m4":"¡Tu Next Step Score subió a ⚡ 7.480 pts — top 12% de tu cohorte!",
        "chat.ph":"Pregunta sobre estructuras de datos...",
        "imp.lbl":"Impacto Global","imp.title":"Cada número aquí es<br>una vida transformada.",
        "i1":"Duración bootcamp","i2":"Países alcanzados","i3":"Proyectos reales","i4":"AI Tutor activo",
        "faq.lbl":"FAQ","faq.title":"Preguntas frecuentes.",
        "faq.q1":"¿Necesito matemáticas avanzadas?","faq.a1":"¡No! El curso empieza desde cero. Toda la matemática y estructuras de datos se enseñan de forma aplicada.",
        "faq.q2":"¿Cuánto tiempo por semana?","faq.a2":"Sábado (2–3h) y domingo (2–4h). Más 2–3h extras de práctica. AI Tutor disponible 24/7.",
        "faq.q3":"¿Es 100% online?","faq.a3":"Sí, totalmente online y en vivo. Grabaciones disponibles en cualquier momento.",
        "faq.q4":"¿Aprenderé C++ siendo principiante?","faq.a4":"C++ se introduce en los meses 5–6, cuando ya dominas Python, estructuras de datos y algoritmos.",
        "faq.q5":"¿Saldré con portafolio?","faq.a5":"¡Sí! Al menos 6 proyectos en GitHub — incluyendo estructuras desde cero y motor de búsqueda en C++.",
        "cta.title":"Tu próximo paso<br>empieza ahora.","cta.desc":"6 meses. Fines de semana. Estructuras de datos reales. AI Tutor. Saldrás como ingeniero de software completo.",
        "cta.btn1":"🚀 Asegurar mi lugar","cta.btn2":"Conocer al fundador",
        "ft.sl":"Aprender · Crear · Transformar","ft.cp":"© 2025 NextStep Coding · Lucas F. Alves Rodrigues. Todos los derechos reservados.","ft.pv":"Privacidad","ft.tm":"Términos","ft.ct":"Contacto",
        tech:["Estructuras de Datos","Algoritmos","Python Avanzado","C++ Moderno","Árboles y Grafos","Big O Notation","SQL y Bases de Datos","APIs REST","QuickSort & MergeSort","Tabelas Hash","Programación Dinámica","C++ Performance"]
    }
};

// ── Keys that require innerHTML ───────────────────────────────────────────────

const IH: Set<string> = new Set([
    "mis.title","fnd.title","cur.title","ds.title","math.title",
    "sch.title","ai.title","imp.title","cta.title","h1b","fnd.quote"
]);

// ── State ─────────────────────────────────────────────────────────────────────

let cur: Lang = 'pt';

// ── Functions ─────────────────────────────────────────────────────────────────

function navTo(id: string): void {
    const el: HTMLElement | null = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 72,
        behavior: 'smooth'
    });
}

function L(lang: Lang): void {
    cur = lang;
    const t: Translations = T[lang];

    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el: HTMLElement) => {
        const k: string = el.getAttribute('data-i18n') as string;
        const val: TranslationValue = t[k];
        if (val === undefined) return;
        if (IH.has(k) || k.indexOf('.title') !== -1 || k === 'fnd.quote') {
            el.innerHTML = val as string;
        } else {
            el.textContent = val as string;
        }
    });

    document.querySelectorAll<HTMLInputElement>('[data-i18n-ph]').forEach((el: HTMLInputElement) => {
        const k: string = el.getAttribute('data-i18n-ph') as string;
        const val: TranslationValue = t[k];
        if (val) el.placeholder = val as string;
    });

    document.querySelectorAll<HTMLButtonElement>('.lb').forEach((b: HTMLButtonElement) => {
        const text: string = (b.textContent || '').toLowerCase();
        b.classList.toggle('on', text === lang);
    });

    document.documentElement.lang = lang;
    buildStrip();
}

function buildStrip(): void {
    const items: string[] = T[cur].tech as string[];
    const all: string[] = items.concat(items);
    const track: HTMLElement | null = document.getElementById('track');
    if (track) {
        track.innerHTML = all.map((i: string) => '<span class="ti">' + i + '</span>').join('');
    }
}

async function doNotify(e: Event): Promise<void> {
    e.preventDefault();
    const form = document.getElementById('nForm') as HTMLFormElement;
    const ok = document.getElementById('nok') as HTMLElement;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]') as HTMLButtonElement;
    const nomeEl = document.getElementById('ni-nome') as HTMLInputElement | null;
    const emailEl = document.getElementById('ni') as HTMLInputElement;
    const whatsEl = document.getElementById('ni-whats') as HTMLInputElement | null;

    const nome: string = nomeEl ? nomeEl.value : '';
    const email: string = emailEl.value;
    const whatsapp: string = whatsEl ? whatsEl.value : '';

    btn.disabled = true;
    btn.textContent = '...';

    try {
        const res = await fetch('https://formspree.io/f/mzdwnoea', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ nome, email, whatsapp, _subject: 'Nova inscrição NextStep Coding 🚀' })
        });

        if (res.ok) {
            form.style.display = 'none';
            ok.style.display = 'block';
        } else {
            btn.disabled = false;
            btn.textContent = (T[cur]['notify.btn'] as string) || 'Quero uma vaga!';
            alert('Erro ao enviar. Tente novamente.');
        }
    } catch (_err) {
        btn.disabled = false;
        btn.textContent = (T[cur]['notify.btn'] as string) || 'Quero uma vaga!';
        alert('Erro de conexão. Tente novamente.');
    }
}

function toggleMenu(): void {
    const mob: HTMLElement | null = document.getElementById('mob');
    const btn: HTMLElement | null = document.getElementById('hbgBtn');
    if (mob) mob.classList.toggle('open');
    if (btn) btn.classList.toggle('open');
}

function toggleFaq(el: HTMLElement): void {
    const isOpen: boolean = el.classList.contains('open');
    document.querySelectorAll('.faqitem').forEach((i: Element) => i.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
}

// ── Expose functions to HTML onclick attributes ───────────────────────────────

(window as any).navTo = navTo;
(window as any).L = L;
(window as any).toggleMenu = toggleMenu;
(window as any).toggleFaq = toggleFaq;
(window as any).doNotify = doNotify;

// ── Intersection Observer ─────────────────────────────────────────────────────

const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e: IntersectionObserverEntry) => {
            if (e.isIntersecting) e.target.classList.add('in');
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.rv').forEach((el: Element) => observer.observe(el));

// ── Init ──────────────────────────────────────────────────────────────────────

buildStrip();
