// All portfolio content + translations, ported verbatim from the design prototype.
// Translatable fields are { en, fr, zh } (hero previews add es/ja). Image paths point
// at the real assets under public/assets.

export type Lang = 'en' | 'fr' | 'zh';
export type Loc = Record<Lang, string>;
export type LocArr = Record<Lang, string[]>;

// ---------------------------------------------------------------- UI strings (T)
export interface UIStrings {
  navTrack: string; navProjects: string; navLanguages: string;
  eyebrow: string; hello: string; bio: string;
  explore: string; hoverHello: string;
  trackTitle: string;
  profileBio: string;
  resume: string; projectsTitle: string; searchPh: string;
  viewGithub: string; tryMe: string; noResults: string;
  languagesTitle: string;
  langIntro1: string; langIntro2: string;
  descTitle: string; skillsGained: string; techUsed: string; gallery: string;
  close: string; tryLive: string; showAll: string; showLess: string;
  details: string; certificate: string; footerTag: string;
  report: string; reference: string;
  footerNav: string; footerContact: string; rights: string; backTop: string;
}

export const T: Record<Lang, UIStrings> = {
  en: {
    navTrack: 'Track', navProjects: 'Projects', navLanguages: 'Languages',
    eyebrow: 'COMPUTER SCIENCE & LANGUAGES', hello: "Hello, I'm",
    bio: 'Computer science student and autodidact polyglot with a passion for data science and living languages. I enjoy building AI and NLP systems that bridge technology and human language.',
    explore: 'Explore my work', hoverHello: 'HOVER TO SAY HELLO',
    trackTitle: 'Academic & Professional Track',
    profileBio: 'Third-year computer science student at the University of Bordeaux, currently an apprentice AI engineer at the French Senate in Paris, designing and shipping AI solutions for Senators and civil servants.',
    resume: 'Resume', projectsTitle: 'Personal Projects', searchPh: 'Search by title, technology…',
    viewGithub: 'View on GitHub', tryMe: 'Try it', noResults: 'No projects match, try another filter or search.',
    languagesTitle: 'Languages',
    langIntro1: 'Apart from programming I spend my time **practicing** and **speaking** foreign languages, self-taught, using all kinds of resources but mostly YouTube.',
    langIntro2: 'Language learning started as a hobby that makes friends everywhere, but learning new **grammars** and **syntaxes** also sharpened my **logic** and **problem-solving**.',
    descTitle: 'Description', skillsGained: 'Skills Gained', techUsed: 'Technologies Used', gallery: 'Gallery', close: 'Close', tryLive: 'Try it live', showAll: 'Show all projects', showLess: 'Show less', details: 'Details', certificate: 'Certificate', footerTag: 'CS student · AI & NLP enthusiast · Polyglot',
    report: 'Report', reference: 'Reference letter',
    footerNav: 'NAVIGATION', footerContact: 'CONTACT', rights: 'All rights reserved.', backTop: 'Back to top',
  },
  fr: {
    navTrack: 'Parcours', navProjects: 'Projets', navLanguages: 'Langues',
    eyebrow: 'INFORMATIQUE & LANGUES', hello: 'Bonjour, je suis',
    bio: "Étudiant en informatique et polyglotte autodidacte, passionné de data science et de langues vivantes. J'aime construire des systèmes d'IA et de NLP qui relient la technologie et le langage humain.",
    explore: 'Découvrir mon travail', hoverHello: 'SURVOLEZ POUR DIRE BONJOUR',
    trackTitle: 'Parcours académique & professionnel',
    profileBio: "Étudiant en troisième année d'informatique à l'Université de Bordeaux, actuellement ingénieur IA en alternance au Sénat à Paris, je conçois et déploie des solutions d'IA pour les sénateurs et fonctionnaires.",
    resume: 'CV', projectsTitle: 'Projets personnels', searchPh: 'Rechercher par titre, technologie…',
    viewGithub: 'Voir sur GitHub', tryMe: 'Essayer', noResults: 'Aucun projet ne correspond, essayez un autre filtre.',
    languagesTitle: 'Langues',
    langIntro1: "En dehors de la programmation, je passe mon temps à **pratiquer** et **parler** des langues étrangères, en autodidacte, surtout grâce à YouTube.",
    langIntro2: "L'apprentissage des langues est d'abord un loisir qui me fait des amis partout, mais apprendre de nouvelles **grammaires** et **syntaxes** a aussi aiguisé ma **logique** et ma **résolution de problèmes**.",
    descTitle: 'Description', skillsGained: 'Compétences acquises', techUsed: 'Technologies utilisées', gallery: 'Galerie', close: 'Fermer', tryLive: 'Essayer en ligne', showAll: 'Voir tous les projets', showLess: 'Voir moins', details: 'Détails', certificate: 'Certificat', footerTag: 'Étudiant CS · Passionné IA & NLP · Polyglotte',
    report: 'Rapport', reference: 'Lettre de recommandation',
    footerNav: 'NAVIGATION', footerContact: 'CONTACT', rights: 'Tous droits réservés.', backTop: 'Haut de page',
  },  
  zh: {
    navTrack: '经历', navProjects: '项目', navLanguages: '语言',
    eyebrow: '计算机科学与语言', hello: '你好，我是',
    bio: '计算机科学专业学生，自学多语者，热爱数据科学与语言。我喜欢构建连接技术与人类语言的AI和NLP系统。',
    explore: '查看我的作品', hoverHello: '悬停打个招呼',
    trackTitle: '学术与职业经历',
    profileBio: '波尔多大学计算机科学三年级学生，目前在巴黎的法国参议院担任AI工程师学徒，为参议员和公务员设计并落地AI解决方案。',
    resume: '简历', projectsTitle: '个人项目', searchPh: '按标题、技术搜索…',
    viewGithub: '在GitHub查看', tryMe: '试一试', noResults: '没有匹配的项目，换个筛选或搜索词试试。',
    languagesTitle: '语言',
    langIntro1: '编程之外，我把时间花在**练习**和**使用**外语上，完全自学，主要通过YouTube。',
    langIntro2: '学语言起初只是能到处交朋友的爱好，但学习新的**语法**和**句法**也让我的**逻辑**和**解决问题**的能力更敏锐。',
    descTitle: '描述', skillsGained: '收获的技能', techUsed: '使用的技术', gallery: '图库', close: '关闭', tryLive: '在线试玩', showAll: '查看全部项目', showLess: '收起', details: '详情', certificate: '证书', footerTag: '计算机学生 · AI与NLP爱好者 · 多语者',
    report: '报告', reference: '推荐信',
    footerNav: '导航', footerContact: '联系方式', rights: '版权所有。', backTop: '回到顶部',
  },
};

// ------------------------------------------------------------- Hero previews (5 langs)
export type HeroLang = Lang | 'es' | 'ja';
export interface HeroCopy { eyebrow: string; hello: string; bio: string; }

// Keywords wrapped in **…** are rendered in the accent colour (see <Highlight>).
export const HERO: Record<HeroLang, HeroCopy> = {
  en: { eyebrow: 'COMPUTER SCIENCE & LANGUAGES', hello: "Hello, I'm", bio: 'Computer science student and autodidact **polyglot** with a passion for **data science** and living languages. I enjoy building **AI** and **NLP** systems that bridge technology and human language.' },
  fr: { eyebrow: 'INFORMATIQUE & LANGUES', hello: 'Bonjour, je suis', bio: "Étudiant en informatique et **polyglotte** autodidacte, passionné de **data science** et de langues vivantes. J'aime construire des systèmes d'**IA** et de **NLP** qui relient la technologie et le langage humain." },
  zh: { eyebrow: '计算机科学与语言', hello: '你好，我是', bio: '计算机科学专业学生，自学**多语者**，热爱**数据科学**与语言。我喜欢构建连接技术与人类语言的**AI**和**NLP**系统。' },
  es: { eyebrow: 'INFORMÁTICA E IDIOMAS', hello: '¡Hola! Soy', bio: 'Estudiante de informática y **políglota** autodidacta, apasionado por la **ciencia de datos** y las lenguas vivas. Me gusta construir sistemas de **IA** y **PLN** que conectan la tecnología con el lenguaje humano.' },
  ja: { eyebrow: 'コンピュータサイエンスと言語', hello: 'こんにちは、私は', bio: 'コンピュータサイエンスを学ぶ学生であり、独学の**ポリグロット**です。**データサイエンス**と生きた言語に情熱を注ぎ、テクノロジーと人間の言語をつなぐ**AI**・**NLP**システムを作ることが好きです。' },
};

// -------------------------------------------------------------------- Language cards
export interface LangCard {
  code: HeroLang; flag: string; greeting: string;
  name: Loc; level: Loc; prof: Loc;
  cert?: string; // certificate href, if any
}

export const LANGS: LangCard[] = [
  { code: 'fr', flag: '🇫🇷', greeting: 'Bonjour !', name: { en: 'French', fr: 'Français', zh: '法语' }, level: { en: 'Native', fr: 'Langue maternelle', zh: '母语' }, prof: { en: 'Native speaker', fr: 'Locuteur natif', zh: '母语者' } },
  { code: 'en', flag: '🇬🇧', greeting: 'Hello!', name: { en: 'English', fr: 'Anglais', zh: '英语' }, level: { en: 'C1 · TOEFL 104', fr: 'C1 · TOEFL 104', zh: 'C1 · 托福104' }, prof: { en: 'Full professional proficiency', fr: 'Compétence professionnelle complète', zh: '完全专业工作能力' }, cert: '/assets/TOELF_SCORE.pdf' },
  { code: 'zh', flag: '🇨🇳', greeting: '你好！', name: { en: 'Chinese', fr: 'Chinois', zh: '中文' }, level: { en: 'C1 · HSK 5', fr: 'C1 · HSK 5', zh: 'C1 · HSK五级' }, prof: { en: 'Full professional proficiency', fr: 'Compétence professionnelle complète', zh: '完全专业工作能力' }, cert: '/assets/HSK_SCORE.jpg' },
  { code: 'es', flag: '🇪🇸', greeting: '¡Hola!', name: { en: 'Spanish', fr: 'Espagnol', zh: '西班牙语' }, level: { en: 'B1', fr: 'B1', zh: 'B1' }, prof: { en: 'Elementary working proficiency', fr: 'Compétence de travail élémentaire', zh: '基础工作能力' } },
  { code: 'ja', flag: '🇯🇵', greeting: 'こんにちは！', name: { en: 'Japanese', fr: 'Japonais', zh: '日语' }, level: { en: 'A2 · JLPT N4', fr: 'A2 · JLPT N4', zh: 'A2 · 日语能力考N4' }, prof: { en: 'Elementary working proficiency', fr: 'Compétence de travail élémentaire', zh: '基础工作能力' } },
];

// -------------------------------------------------------------------- Track entries
export interface TrackItem {
  id: string; logo: string; title: Loc; role: Loc; period: Loc; location: Loc;
  // Optional links — each is only rendered when non-empty.
  report?: string;    // PDF, opens in the in-app viewer
  reference?: string; // PDF (reference letter), opens in the in-app viewer
  github?: string;    // external
  tryMe?: string;     // external
}
export interface TrackPhoto { src: string; desc: Loc; }
export interface TrackDetail { recap: Loc; skills: LocArr; photos: TrackPhoto[]; }

export const TRACK: TrackItem[] = [
  { id: 'senat', logo: '/assets/Logos/senatLogo.jpg', title: { en: 'French Senate', fr: 'Sénat', zh: '法国参议院' }, role: { en: 'Apprenticeship · AI Engineer', fr: 'Alternance · Ingénieur IA', zh: '学徒实习 · AI工程师' }, period: { en: 'Sep 2025 – Jul 2026', fr: 'Sept. 2025 – Juil. 2026', zh: '2025年9月 – 2026年7月' }, location: { en: 'Paris, France', fr: 'Paris, France', zh: '法国巴黎' }, report: '/assets/SenatReport.pdf', reference: '', github: '', tryMe: '' },
  { id: 'tokyo', logo: '/assets/Logos/UniversityOfTokyo.png', title: { en: 'University of Tokyo', fr: 'Université de Tokyo', zh: '东京大学' }, role: { en: 'Internship · Research assistant', fr: 'Stage · Assistant de recherche', zh: '实习 · 研究助理' }, period: { en: 'Apr 2025 – Jul 2025', fr: 'Avr. 2025 – Juil. 2025', zh: '2025年4月 – 7月' }, location: { en: 'Tokyo, Japan', fr: 'Tokyo, Japon', zh: '日本东京' }, report: '/assets/TokyoReport.pdf', reference: '/assets/UTokyoReference.pdf', github: '', tryMe: '' },
  { id: 'asso', logo: '/assets/Logos/LogoBDE.png', title: { en: 'Student Association', fr: 'Assopeña', zh: '学生会' }, role: { en: 'President', fr: 'Président', zh: '会长' }, period: { en: '2024 – 2025', fr: '2024 – 2025', zh: '2024 – 2025' }, location: { en: 'Bordeaux, France', fr: 'Bordeaux, France', zh: '法国波尔多' }, report: '', reference: '', github: '', tryMe: '' },
  { id: 'iut', logo: '/assets/Logos/IUT.png', title: { en: 'University of Bordeaux', fr: 'Université de Bordeaux', zh: '波尔多大学' }, role: { en: 'B.Sc. Computer Science, International Track', fr: 'BUT Informatique, parcours international', zh: '计算机科学学士（国际方向）' }, period: { en: '2023 – 2026', fr: '2023 – 2026', zh: '2023 – 2026' }, location: { en: 'Bordeaux, France', fr: 'Bordeaux, France', zh: '法国波尔多' }, report: '', reference: '/assets/IUTReference.pdf', github: '', tryMe: '' },
];

export const TRACK_DETAILS: Record<string, TrackDetail> = {
  senat: {
    recap: {
      en: "A one-year apprenticeship at the Information Systems Department (DSI) of the French Senate in Paris, as an AI developer in the Management division: analysing existing applications to propose and integrate AI features, under the Senate's strong security and confidentiality constraints.\n\nThree projects. Julia, the senators' expense-claim app, gained an OCR module coupled to a local LLM to auto-fill reimbursement forms. SénatBOT, built from scratch, is a RAG chatbot connected to Albert API (the French government's shared-GPU solution) that answers questions on the DSI wiki (6,000+ pages) in natural language. CodeAmendement automates GitLab merge-request reviews with an LLM. Stack: Python, Vue.js, PostgreSQL, PaddleOCR and Albert API models. SénatBOT is deployed on the DSI Kubernetes cluster with a 91% retrieval rate.",
      fr: "Une alternance d'un an à la Direction des Systèmes d'Information (DSI) du Sénat, à Paris, comme développeur IA dans la division Gestion : analyser les applications existantes pour proposer et intégrer des fonctionnalités d'IA, dans le respect des fortes contraintes de sécurité et de confidentialité du Sénat.\n\nTrois projets. Julia, l'application de gestion des frais des sénateurs, a reçu un module OCR couplé à un LLM local pour pré-remplir les formulaires de remboursement. SénatBOT, développé de zéro, est un chatbot RAG connecté à Albert API (la solution de mutualisation GPU de l'État) qui répond en langage naturel sur le wiki de la DSI (plus de 6 000 pages). CodeAmendement automatise la relecture des merge requests GitLab avec un LLM. Stack : Python, Vue.js, PostgreSQL, PaddleOCR et les modèles d'Albert API. SénatBOT est déployé sur le cluster Kubernetes de la DSI, avec un taux de récupération de 91 %.",
      zh: '在巴黎法国参议院信息系统部门（DSI）为期一年的学徒实习，担任管理处的AI开发：分析现有应用，提出并集成AI功能，同时严格遵守参议院的安全与保密要求。\n\n三个项目。Julia 是参议员费用报销应用，我为其加入OCR模块并结合本地LLM，自动预填报销单。SénatBOT 从零开发，是接入 Albert API（法国政府共享GPU方案）的RAG聊天机器人，可用自然语言查询DSI内部维基（6000多页）。CodeAmendement 用LLM自动审查GitLab合并请求。技术栈：Python、Vue.js、PostgreSQL、PaddleOCR 以及 Albert API 提供的模型。SénatBOT 已部署在DSI的Kubernetes集群上，检索准确率达91%。',
    },
    skills: { en: ['Computer vision', 'Automatic extraction of document data', 'Building an AI architecture with limited resources', 'LLM integration', 'Handling highly classified data with care'], fr: ['Vision par ordinateur', 'Extraction automatique de données documentaires', 'Concevoir une architecture IA avec des ressources limitées', 'Intégration de LLM', 'Manipuler des données très sensibles avec précaution'], zh: ['计算机视觉', '文档数据自动提取', '在有限资源下搭建AI架构', '大模型集成', '谨慎处理高度机密数据'] },
    photos: [
      { src: '/assets/TrackPhotos/Senat3.jpg', desc: { en: 'Working in the prestigious Senate of France, one of the oldest institutions of the country', fr: "Travailler au prestigieux Sénat, l'une des plus anciennes institutions du pays", zh: '在法国最古老的机构之一、久负盛名的参议院工作' } },
      { src: '/assets/TrackPhotos/Senat1.png', desc: { en: 'My OCR model analyzing an invoice, extracting its price and date', fr: 'Mon modèle OCR analysant une facture, extrayant prix et date', zh: '我的OCR模型分析发票并提取金额和日期' } },
      { src: '/assets/TrackPhotos/Senat2.png', desc: { en: 'The workflow of the RAG architecture I designed for ingestion and querying of the intranet wiki', fr: "Le workflow de l'architecture RAG que j'ai conçue pour l'ingestion et l'interrogation du wiki intranet", zh: '我为内网Wiki的摄取与查询设计的RAG架构流程' } },
    ],
  },
  tokyo: {
    recap: { en: 'Three-month research internship at the DLX Design Lab with an international team, on two projects. CoralRescue: an innovative aquarium collecting damaged coral, connected to sensors feeding a web app, I built better data-visualization interfaces and trained ML models on historical data for hourly anomaly alerts and daily quality scores. AiCOM: an image-guessing game where two players compete against the GPT-4 API, collecting data on cases where LLMs miss what humans understand, I built the entire full-stack website and the mechanics for three game modes.', fr: "Stage de recherche de trois mois au DLX Design Lab avec une équipe internationale, sur deux projets. CoralRescue : un aquarium innovant recueillant du corail endommagé, relié à des capteurs alimentant une web app, j'ai créé de meilleures interfaces de visualisation et entraîné des modèles ML sur l'historique pour des alertes d'anomalies horaires et des scores de qualité journaliers. AiCOM : un jeu de devinettes d'images où deux joueurs affrontent l'API GPT-4, pour collecter des données sur les cas où les LLM ne comprennent pas ce qu'un humain comprend, j'ai réalisé tout le site full-stack et les mécaniques de trois modes de jeu.", zh: '在DLX设计实验室与国际团队进行三个月研究实习，参与两个项目。CoralRescue：收集受损珊瑚的创新水族箱，传感器数据接入Web应用，我改进了数据可视化界面，并用历史数据训练机器学习模型，实现每小时异常预警和每日数据质量评分。AiCOM：两名玩家对战GPT-4 API的图片竞猜游戏，收集大模型无法理解而人类能理解的案例数据，我独立完成了整个全栈网站和三种游戏模式的机制。' },
    skills: { en: ['Embedded systems programming', 'Machine learning implementation', 'Data analysis and visualization', 'IoT protocol implementation', 'Cross-cultural communication', 'Research methodology'], fr: ['Programmation de systèmes embarqués', 'Implémentation de machine learning', 'Analyse et visualisation de données', 'Implémentation de protocoles IoT', 'Communication interculturelle', 'Méthodologie de recherche'], zh: ['嵌入式系统编程', '机器学习落地', '数据分析与可视化', 'IoT协议实现', '跨文化沟通', '研究方法论'] },
    photos: [
      { src: '/assets/TrackPhotos/Tokyo1.jpg', desc: { en: 'Testing the sensors of the CoralRescue aquarium', fr: "Tests des capteurs de l'aquarium CoralRescue", zh: '测试CoralRescue水族箱的传感器' } },
      { src: '/assets/TrackPhotos/Tokyo2.jpg', desc: { en: "Presenting the AiCOM game at the University of Tokyo's yearly open campus", fr: "Présentation du jeu AiCOM à l'open campus annuel de l'Université de Tokyo", zh: '在东京大学年度开放日上展示AiCOM游戏' } },
      { src: '/assets/TrackPhotos/Tokyo.jpg', desc: { en: 'Giving a tour to French high-school students visiting for the open campus', fr: "Visite guidée pour des lycéens français venus pour l'open campus", zh: '为参观开放日的法国高中生做校园导览' } },
    ],
  },
  asso: {
    recap: { en: "Elected among 300 students as president of my department's student association. In charge of managing a team of 10 members, organizing events, running the association bar, managing a budget of thousands of euros, integrating the new students and handling communication between students and administration.", fr: "Élu parmi 300 étudiants président de l'association étudiante de mon département. En charge d'une équipe de 10 membres, de l'organisation d'événements, du bar de l'association, d'un budget de plusieurs milliers d'euros, de l'intégration des nouveaux étudiants et de la communication entre étudiants et administration.", zh: '从300名学生中当选系学生会会长。负责管理10人团队、组织活动、经营学生会小卖部、管理数千欧元预算、帮助新生融入，并协调学生与校方的沟通。' },
    skills: { en: ['Leadership and team management', 'Budget management and financial planning', 'Event planning and organization', 'Public speaking and presentation', 'Communication between students and administration'], fr: ["Leadership et gestion d'équipe", 'Gestion de budget et planification financière', "Planification et organisation d'événements", 'Prise de parole en public', 'Communication entre étudiants et administration'], zh: ['领导力与团队管理', '预算管理与财务规划', '活动策划与组织', '公开演讲与展示', '学生与校方之间的沟通'] },
    photos: [
      { src: '/assets/TrackPhotos/BDE.jpg', desc: { en: 'Crêpes event raising money for the Téléthon, a French charity funding research against illnesses', fr: 'Vente de crêpes au profit du Téléthon', zh: '为法国慈善机构Téléthon筹款的可丽饼义卖活动' } },
      { src: '/assets/TrackPhotos/BDE1.png', desc: { en: 'Welcome speech for the new students at the start of the academic year', fr: 'Discours de bienvenue aux nouveaux étudiants à la rentrée', zh: '开学季为新生做欢迎演讲' } },
      { src: '/assets/TrackPhotos/BDE2.png', desc: { en: 'The whole team of the association', fr: "Toute l'équipe de l'association", zh: '学生会全体成员' } },
    ],
  },
  iut: {
    recap: { en: "Bachelor's degree (BUT) in Computer Science at the University of Bordeaux, subjects ranging from web development to data science and algorithmics. A strong point of the program is the frequency of team projects with randomly assigned students, teaching concrete teamwork. I follow the international track: computer science and mathematics classes in English, plus a required internship abroad, completed in Japan, which taught me to work in a technical, international environment.", fr: "BUT Informatique à l'Université de Bordeaux, des matières allant du développement web à la data science et l'algorithmique. Un point fort de la formation : la fréquence des projets d'équipe avec des étudiants tirés au sort, un vrai apprentissage du travail collectif. Je suis le parcours international : cours d'informatique et de maths en anglais, plus un stage obligatoire à l'étranger, effectué au Japon, qui m'a appris à travailler dans un environnement technique et international.", zh: '波尔多大学计算机科学学士（BUT），课程从Web开发到数据科学与算法。项目制是其一大特色：每学期与随机分组的同学完成团队项目，在实战中学习协作。我就读国际方向：计算机与数学课程全英文授课，并要求海外实习，已在日本完成，让我学会在技术性、国际化的环境中工作。' },
    skills: { en: ['Software development', 'Algorithm design and analysis', 'Database design and management', 'Web development', 'Object-oriented programming', 'Team collaboration'], fr: ['Développement logiciel', "Conception et analyse d'algorithmes", 'Conception et gestion de bases de données', 'Développement web', 'Programmation orientée objet', 'Collaboration en équipe'], zh: ['软件开发', '算法设计与分析', '数据库设计与管理', 'Web开发', '面向对象编程', '团队协作'] },
    photos: [
      { src: '/assets/TrackPhotos/IUT.jpeg', desc: { en: 'IUT Bordeaux computer science department', fr: "Le département informatique de l'IUT de Bordeaux", zh: '波尔多IUT计算机科学系' } },
      { src: '/assets/TrackPhotos/IUT1.jpg', desc: { en: 'Brainstorming for a school project', fr: 'Brainstorming pour un projet', zh: '为课程项目头脑风暴' } },
      { src: '/assets/TrackPhotos/IUT2.jpg', desc: { en: 'With my team after a successful final project presentation', fr: 'Avec mon équipe après une soutenance réussie', zh: '项目答辩成功后与团队合影' } },
    ],
  },
};

// ------------------------------------------------------------------------ Projects
export interface Project {
  title: string; cats: string[]; techs: string[]; img: string;
  github?: string; tryMe?: string; blurb: Loc;
}
export interface ProjectPhoto { src: string; desc: Loc; }
export interface ProjectDetail { recap: Loc; skills: LocArr; photos: ProjectPhoto[]; }

export const PROJECTS: Project[] = [
  { title: 'YOLO vs Custom CNN', cats: ['AI', 'Machine-learning'], techs: ['PyTorch', 'YOLO', 'OpenCV'], img: '/assets/ProjectsPhotos/customCNN.gif', github: 'https://github.com/elias-utf8/YOLOvsCustomCNN', blurb: { en: 'Supervised-learning audit comparing YOLO and a custom CNN for 3D object detection with an Intel RealSense depth camera.', fr: "Audit d'apprentissage supervisé comparant YOLO et un CNN maison pour la détection d'objets 3D avec une caméra de profondeur Intel RealSense.", zh: '对比YOLO与自研CNN的监督学习性能评测，结合Intel RealSense深度相机实现3D目标检测。' } },
  { title: 'Neural Network from Scratch', cats: ['AI', 'Machine-learning'], techs: ['Python', 'NumPy', 'Pandas'], img: '/assets/ProjectsPhotos/ANNFromScratch1.png', github: 'https://github.com/Arkww/FromScratchMINST/', blurb: { en: 'A two-layer neural network built with only NumPy and pandas to truly understand the math, 92% on MNIST.', fr: 'Un réseau de neurones à deux couches codé uniquement avec NumPy et pandas pour comprendre les maths, 92 % sur MNIST.', zh: '仅用NumPy和pandas从零实现两层神经网络，真正弄懂背后的数学，MNIST准确率92%。' } },
  { title: 'Chinese Numbers Recognition', cats: ['Data-science', 'NLP', 'Machine-learning'], techs: ['PyTorch', 'Computer vision'], img: '/assets/ProjectsPhotos/ChineseCharacters1.png', github: 'https://github.com/Arkww/ChineseNumbersRecognition', blurb: { en: 'A PyTorch CNN trained on 15,000 handwritten Chinese numerals, 98% accuracy.', fr: 'Un CNN PyTorch entraîné sur 15 000 chiffres chinois manuscrits, 98 % de précision.', zh: '用PyTorch训练的CNN识别15000个手写汉字数字，准确率98%。' } },
  { title: 'Elliptic Curve Cryptography', cats: ['Cryptography', 'Mathematics'], techs: ['Python', 'secp256k1', 'ECDSA'], img: '/assets/ProjectsPhotos/ECC1.png', github: 'https://github.com/Arkww/Elliptic-Curve-Cryptography', blurb: { en: 'Elliptic-curve crypto from scratch: ECDH, AES, and a full Bitcoin simulation with ECDSA signing on secp256k1.', fr: 'Cryptographie sur courbes elliptiques from scratch : ECDH, AES et une simulation Bitcoin complète avec signatures ECDSA sur secp256k1.', zh: '从零实现椭圆曲线密码学：ECDH、AES，以及基于secp256k1的完整比特币模拟与ECDSA签名。' } },
  { title: 'Amazon Reviews Sentiment', cats: ['Data-science', 'NLP'], techs: ['NLTK', 'Hugging Face', 'Pandas'], img: '/assets/ProjectsPhotos/SentimentAnalysis1.png', github: 'https://github.com/Arkww/AmazonReviewsSentimentAnalysis', blurb: { en: "Sentiment analysis of 50,000 Amazon reviews, NLTK's VADER against a RoBERTa model from Hugging Face.", fr: "Analyse de sentiment de 50 000 avis Amazon, VADER (NLTK) contre un modèle RoBERTa de Hugging Face.", zh: '对5万条亚马逊评论做情感分析，NLTK的VADER对比Hugging Face的RoBERTa模型。' } },
  { title: 'Study of Chinese Articles', cats: ['Data-science', 'NLP'], techs: ['Python', 'Pandas', 'Kaggle'], img: '/assets/ProjectsPhotos/Article1.png', github: 'https://github.com/Arkww/ChineseNewspaperWordCount', blurb: { en: 'Character-frequency study across 140,000 simplified and traditional Chinese articles.', fr: 'Étude de fréquence des caractères sur 140 000 articles en chinois simplifié et traditionnel.', zh: '统计14万篇简体与繁体中文文章的汉字频率并分析差异。' } },
  { title: 'MatMap', cats: ['Data-science', 'Software-development'], techs: ['JavaScript', 'Leaflet.js', 'Python'], img: '/assets/ProjectsPhotos/MatMap1.PNG', github: 'https://github.com/Arkww/MatMap', tryMe: 'https://arkww.github.io/MatMap/', blurb: { en: 'A choropleth-map guessing game, 10 rounds, 4 options, maps generated live from a database.', fr: 'Un jeu de devinettes sur cartes choroplèthes, 10 manches, 4 options, cartes générées depuis une base de données.', zh: '猜地图小游戏，10轮、4个选项，地图由数据库实时生成。' } },
  { title: 'S&P 500 Prediction', cats: ['Data-science', 'Machine-learning'], techs: ['Python', 'scikit-learn', 'Pandas'], img: '/assets/ProjectsPhotos/MarketPredict1.png', github: 'https://github.com/Arkww/marketPredict', blurb: { en: 'Predicting the S&P 500 with 35 years of daily data and backtesting, beat the index precision by 4%.', fr: "Prédiction du S&P 500 avec 35 ans de données quotidiennes et du backtesting, précision supérieure de 4 % à l'indice.", zh: '用35年日线数据和回测预测标普500，精度超出指数4%。' } },
  { title: 'CIFAR-10 Image Recognition', cats: ['Data-science', 'Machine-learning'], techs: ['Python', 'PyTorch'], img: '/assets/ProjectsPhotos/CIFAR1.png', github: 'https://github.com/Arkww/CIFAR10Recognition', blurb: { en: 'First deep-learning project: a CNN reaching 85% on CIFAR-10, and correctly recognizing my cats.', fr: 'Premier projet de deep learning : un CNN à 85 % sur CIFAR-10, qui reconnaît mes chats.', zh: '深度学习入门项目：CNN在CIFAR-10上达到85%，还能认出我家的猫。' } },
  { title: 'EcoGraph', cats: ['Data-science', 'Software-development'], techs: ['C#', 'Python', 'SQL'], img: '/assets/ProjectsPhotos/EcoGraph1.png', blurb: { en: 'Two-week team sprint: a C# desktop app visualizing scraped data on custom maps, as project leader of five.', fr: "Sprint d'équipe de deux semaines : une appli C# visualisant des données sur des cartes personnalisées, en tant que chef de projet.", zh: '两周团队冲刺：C#桌面应用在自定义地图上可视化数据，担任五人团队的项目负责人。' } },
  { title: 'Graph Project', cats: ['Software-development'], techs: ['Java'], img: '/assets/ProjectsPhotos/graph1.png', blurb: { en: 'A Java app to display graphs and run algorithms, Prim, BFS, Dijkstra, and edge bundling.', fr: 'Une appli Java pour afficher des graphes et exécuter des algorithmes, Prim, BFS, Dijkstra et edge bundling.', zh: 'Java图算法应用，实现Prim、BFS、Dijkstra与边捆绑算法并可视化。' } },
  { title: 'RobotFight', cats: ['Software-development'], techs: ['Symfony', 'PHP', 'MySQL'], img: '/assets/ProjectsPhotos/RobotFight1.png', blurb: { en: 'Full-stack Symfony site to organize robot-football competitions, time slots, field editor, results.', fr: 'Site full-stack Symfony pour organiser des compétitions de robots footballeurs, créneaux, éditeur de terrain, résultats.', zh: '用Symfony开发的机器人足球赛事网站，时段管理、场地编辑器、比赛结果展示。' } },
  { title: 'Odomo', cats: ['Software-development'], techs: ['Java'], img: '/assets/ProjectsPhotos/Odomo1.png', blurb: { en: 'Rewriting a home-automation control unit in Java, rainfall, temperature and heating modes via boolean matrices.', fr: "Réécriture d'une centrale domotique en Java, modes pluie, température et chauffage via des matrices booléennes.", zh: '用Java重写家庭自动化控制单元，通过布尔矩阵实现降雨、温度与供暖模式。' } },
];

export const DETAILS: Record<string, ProjectDetail> = {
  'YOLO vs Custom CNN': {
    recap: { en: 'A supervised-learning performance audit comparing YOLO11n and a custom CNN. Detected objects are located in 3D with an Intel RealSense depth camera and an ArUco world reference: the bounding-box center is deprojected to camera coordinates, then transformed to world coordinates via solvePnP. A PyQt6 app provides Detection, Training and Calibration tabs. I was responsible for the CNN conception and development.', fr: "Un audit de performance en apprentissage supervisé comparant YOLO11n et un CNN maison. Les objets détectés sont localisés en 3D avec une caméra de profondeur Intel RealSense et un marqueur ArUco : le centre de la bounding box est déprojeté en coordonnées caméra, puis transformé en coordonnées monde via solvePnP. Une appli PyQt6 offre trois onglets : détection, entraînement et calibration. J'étais responsable de la conception et du développement du CNN.", zh: '对比YOLO11n与自研CNN的监督学习性能评测。借助Intel RealSense深度相机和ArUco世界参考标记实现3D定位：将检测框中心反投影为相机坐标，再通过solvePnP转换为世界坐标。PyQt6桌面应用提供检测、训练和标定三个选项卡。我负责CNN的设计与开发。' },
    skills: { en: ['Designing and training a custom CNN for object detection', 'Comparing model performance with IoU and confusion matrices', '3D localisation using RealSense depth + ArUco markers', 'Integrating a CV pipeline into a PyQt6 desktop app'], fr: ["Concevoir et entraîner un CNN maison pour la détection d'objets", 'Comparer les performances avec IoU et matrices de confusion', 'Localisation 3D via RealSense + marqueurs ArUco', 'Intégrer un pipeline de vision dans une appli PyQt6'], zh: ['设计并训练自定义目标检测CNN', '用IoU和混淆矩阵对比模型性能', '基于RealSense深度相机与ArUco标记的3D定位', '将视觉流水线集成进PyQt6桌面应用'] },
    photos: [
      { src: '/assets/ProjectsPhotos/customCNN.gif', desc: { en: 'The custom CNN detecting objects in real time, bounding-box center deprojected to 3D in the PyQt6 app', fr: "Le CNN détectant des objets en temps réel, centre de la box déprojeté en 3D dans l'appli PyQt6", zh: '自研CNN实时检测物体，检测框中心在PyQt6应用中反投影为3D坐标' } },
      { src: '/assets/ProjectsPhotos/customCNN2.png', desc: { en: 'Benchmark comparison of YOLO11n and my custom CNN', fr: 'Comparaison benchmark de YOLO11n et de mon CNN', zh: 'YOLO11n与自研CNN的基准对比' } },
    ],
  },
  'Neural Network from Scratch': {
    recap: { en: 'After building networks with high-level libraries like PyTorch, I wanted to understand the math underneath. I studied the concepts and coded a simple two-layer ANN using only NumPy and pandas, trained on MNIST (28×28 black-and-white images).', fr: "Après avoir construit des réseaux avec des bibliothèques haut niveau comme PyTorch, je voulais comprendre les maths sous-jacentes. J'ai étudié les concepts et codé un ANN simple à deux couches avec seulement NumPy et pandas, entraîné sur MNIST (images noir et blanc 28×28).", zh: '在用PyTorch等高层库做过几个项目后，我想真正理解背后的数学。我研究了相关概念，仅用NumPy和pandas编写了一个简单的两层神经网络，在MNIST（28×28黑白图像）上训练。' },
    skills: { en: ['Deep understanding of the math behind neural networks', 'Reached 0.92 accuracy with a basic two-layer model', 'Implementing networks with low-level libraries only'], fr: ['Compréhension profonde des maths derrière les réseaux de neurones', 'Précision de 0,92 avec un modèle basique à deux couches', 'Implémenter des réseaux avec des bibliothèques bas niveau'], zh: ['深入理解神经网络背后的数学', '仅两层的基础模型达到0.92准确率', '只用底层库实现神经网络'] },
    photos: [
      { src: '/assets/ProjectsPhotos/ANNFromScratch2.png', desc: { en: 'An image from the dataset classified successfully by my network', fr: 'Une image du dataset classifiée avec succès par mon réseau', zh: '数据集中被我的网络成功分类的一张图像' } },
      { src: '/assets/ProjectsPhotos/ANNFromScratch1.png', desc: { en: 'Evolution of weights and biases over 1500 epochs', fr: 'Évolution des poids et biais sur 1500 époques', zh: '权重与偏置在1500轮训练中的演变' } },
    ],
  },
  'Chinese Numbers Recognition': {
    recap: { en: 'I created a deep-learning model from scratch in PyTorch to recognize handwritten Chinese numbers, trained on a dataset of 15,000 images. The model reached 98% accuracy, and I used a confusion matrix to analyze its errors.', fr: "J'ai créé un modèle de deep learning from scratch en PyTorch pour reconnaître des chiffres chinois manuscrits, entraîné sur 15 000 images. Le modèle atteint 98 % de précision, et j'ai utilisé une matrice de confusion pour analyser ses erreurs.", zh: '我用PyTorch从零构建深度学习模型识别手写汉字数字，在15000张图像上训练，准确率达98%，并通过混淆矩阵分析错误。' },
    skills: { en: ['Creating my own deep-learning model', 'Reached an accuracy of 0.98', 'Importing and adapting a confusion matrix'], fr: ['Créer mon propre modèle de deep learning', 'Précision de 0,98 atteinte', 'Importer et adapter une matrice de confusion'], zh: ['创建自己的深度学习模型', '达到0.98的准确率', '引入并调整混淆矩阵'] },
    photos: [
      { src: '/assets/ProjectsPhotos/ChineseCharacters1.png', desc: { en: 'The final confusion matrix of my model', fr: 'La matrice de confusion finale de mon modèle', zh: '模型最终的混淆矩阵' } },
      { src: '/assets/ProjectsPhotos/ChineseCharacters2.png', desc: { en: 'One of the characters with the layers (number 9)', fr: 'Un des caractères avec les couches (chiffre 9)', zh: '其中一个字符及网络各层（数字九）' } },
    ],
  },
  'Elliptic Curve Cryptography': {
    recap: { en: 'A from-scratch implementation of elliptic-curve cryptography in Python: point addition and scalar multiplication over real numbers and finite fields, up to real protocols. The Bitcoin module implements secp256k1, generates valid addresses (private key → public key → SHA-256 → RIPEMD-160 → Base58Check) and signs transactions with ECDSA. A benchmark shows ECC beating RSA-3072 at equal security. I handled the curve arithmetic, address generation and ECDSA signing.', fr: "Une implémentation from scratch de la cryptographie sur courbes elliptiques en Python : addition de points et multiplication scalaire sur réels et corps finis, jusqu'aux protocoles réels. Le module Bitcoin implémente secp256k1, génère des adresses valides (clé privée → clé publique → SHA-256 → RIPEMD-160 → Base58Check) et signe des transactions en ECDSA. Un benchmark montre ECC surpassant RSA-3072 à sécurité égale. J'ai réalisé l'arithmétique des courbes, la génération d'adresses et la signature ECDSA.", zh: '用Python从零实现椭圆曲线密码学：从实数与有限域上的点加法和标量乘法，一直到真实协议。比特币模块实现secp256k1，生成有效地址（私钥→公钥→SHA-256→RIPEMD-160→Base58Check）并用ECDSA签名交易。基准测试显示同等安全强度下ECC优于RSA-3072。我负责曲线运算、地址生成和ECDSA签名。' },
    skills: { en: ['Point addition and scalar multiplication over finite fields', 'Building secp256k1 and generating valid Bitcoin addresses', 'ECDSA signature generation and verification', 'Benchmarking ECC vs RSA at equivalent security'], fr: ['Addition de points et multiplication scalaire sur corps finis', 'Construire secp256k1 et générer des adresses Bitcoin valides', 'Génération et vérification de signatures ECDSA', 'Benchmark ECC vs RSA à sécurité équivalente'], zh: ['有限域上的点加法与标量乘法', '构建secp256k1并生成有效比特币地址', 'ECDSA签名的生成与验证', '同等安全强度下ECC与RSA的基准对比'] },
    photos: [
      { src: '/assets/ProjectsPhotos/ECC1.png', desc: { en: 'Point addition and scalar multiplication visualized on a curve over real numbers', fr: 'Addition de points et multiplication scalaire visualisées sur une courbe réelle', zh: '实数域曲线上的点加法与标量乘法可视化' } },
      { src: '/assets/ProjectsPhotos/ECC2.png', desc: { en: 'RSA vs ECDH benchmark: ECC is faster with smaller keys', fr: 'Benchmark RSA vs ECDH : ECC plus rapide avec des clés plus courtes', zh: 'RSA与ECDH基准对比：ECC用更短的密钥更快' } },
    ],
  },
  'Amazon Reviews Sentiment': {
    recap: { en: "After cleaning and preparing the data, I first implemented NLTK's VADER model. It wasn't very efficient, so I found a fitting RoBERTa model on Hugging Face, the results were far more satisfying.", fr: "Après avoir nettoyé et préparé les données, j'ai d'abord implémenté le modèle VADER de NLTK. Peu efficace, je l'ai remplacé par un modèle RoBERTa trouvé sur Hugging Face, des résultats bien plus satisfaisants.", zh: '清洗和准备数据后，我先实现了NLTK的VADER模型，效果不佳，于是在Hugging Face上找到合适的RoBERTa模型，结果好得多。' },
    skills: { en: ['Sentiment analysis on a dataset of 50,000 reviews', 'Comparing the results of two different models', 'Analyzing positive 1-star and negative 5-star reviews to explain failures'], fr: ['Analyse de sentiment sur 50 000 avis', 'Comparer les résultats de deux modèles différents', 'Analyser les avis 1 étoile positifs et 5 étoiles négatifs pour expliquer les échecs'], zh: ['对5万条评论做情感分析', '对比两个不同模型的结果', '分析正面1星和负面5星评论以解释模型失误'] },
    photos: [
      { src: '/assets/ProjectsPhotos/SentimentAnalysis1.png', desc: { en: 'Comparison of the two models, RoBERTa is far more accurate', fr: 'Comparaison des deux modèles, RoBERTa bien plus précis', zh: '两个模型的对比，RoBERTa准确得多' } },
      { src: '/assets/ProjectsPhotos/SentimentAnalysis2.png', desc: { en: 'VADER results, many mistakes are visible', fr: "Résultats de VADER, beaucoup d'erreurs visibles", zh: 'VADER的结果，可见大量错误' } },
    ],
  },
  'Study of Chinese Articles': {
    recap: { en: 'I counted the frequency of every character across more than 140,000 Chinese articles to study whether the 20 most-used characters differ between simplified and traditional Chinese, and found an explanation for the difference.', fr: "J'ai compté la fréquence de chaque caractère dans plus de 140 000 articles chinois pour étudier si les 20 caractères les plus utilisés diffèrent entre chinois simplifié et traditionnel, et trouvé une explication à la différence.", zh: '我统计了14万多篇中文文章中所有汉字的频率，研究简体与繁体文章中最常用的20个字是否存在显著差异，并找到了差异的原因。' },
    skills: { en: ['Processing a large volume of Chinese character data', 'Analyzing the result'], fr: ['Traiter un grand volume de caractères chinois', 'Analyser le résultat'], zh: ['处理大量汉字数据', '分析结果'] },
    photos: [
      { src: '/assets/ProjectsPhotos/Article1.png', desc: { en: 'Character count in simplified Chinese articles', fr: 'Fréquence des caractères dans les articles en chinois simplifié', zh: '简体中文文章的字频统计' } },
      { src: '/assets/ProjectsPhotos/Article2.png', desc: { en: 'Character count in traditional Chinese articles', fr: 'Fréquence des caractères dans les articles en chinois traditionnel', zh: '繁体中文文章的字频统计' } },
    ],
  },
  'MatMap': {
    recap: { en: 'A website attached to a database that renders choropleth maps from its values. The user guesses which map is displayed among 4 options, 10 rounds, highest score wins.', fr: "Un site relié à une base de données qui génère des cartes choroplèthes à partir de ses valeurs. L'utilisateur devine quelle carte est affichée parmi 4 options, 10 manches, meilleur score gagnant.", zh: '一个连接数据库的网站，根据数据生成分级统计地图。玩家在4个选项中猜出显示的是哪张地图，共10轮，得分越高越好。' },
    skills: { en: ['Making maps in JavaScript', 'Updating maps in real time', 'Filling a database with Kaggle data', 'Python scripts to add and modify database entries'], fr: ['Créer des cartes en JavaScript', 'Mettre à jour les cartes en temps réel', 'Remplir une base avec des données Kaggle', 'Scripts Python pour ajouter/modifier les données'], zh: ['用JavaScript制作地图', '实时更新地图', '用Kaggle数据填充数据库', '用Python脚本增改数据库数据'] },
    photos: [
      { src: '/assets/ProjectsPhotos/MatMap1.PNG', desc: { en: 'The game being played', fr: 'Le jeu en cours', zh: '游戏进行中的画面' } },
      { src: '/assets/ProjectsPhotos/MatMap2.PNG', desc: { en: 'Multiple maps and colors are available', fr: 'Plusieurs cartes et couleurs disponibles', zh: '提供多种地图与配色' } },
    ],
  },
  'S&P 500 Prediction': {
    recap: { en: 'A fun project to discover financial data with ML: I trained a scikit-learn model on 35 years of daily S&P 500 data and beat the index precision by 4%. Not meant for real use, it is not really reliable.', fr: "Un projet fun pour découvrir la donnée financière avec le ML : j'ai entraîné un modèle scikit-learn sur 35 ans de données quotidiennes du S&P 500 et battu la précision de l'indice de 4 %. Pas destiné à un usage réel, peu fiable.", zh: '一个探索金融数据与机器学习的趣味项目：用35年标普500日线数据训练scikit-learn模型，精度超出指数4%。仅供娱乐，并不可靠。' },
    skills: { en: ['Analyzing data over a long period (35 years)', 'Implementing and improving a scikit-learn model', 'Adding backtesting to the model', 'New features like trend and close ratio to improve accuracy'], fr: ['Analyser des données sur une longue période (35 ans)', 'Implémenter et améliorer un modèle scikit-learn', 'Ajouter du backtesting au modèle', 'Nouvelles variables (tendance, close ratio) pour améliorer la précision'], zh: ['分析长周期数据（35年）', '实现并改进scikit-learn模型', '为模型加入回测', '新增趋势、收盘比等特征提升精度'] },
    photos: [
      { src: '/assets/ProjectsPhotos/MarketPredict1.png', desc: { en: 'Rolling precision over the last 20 years, 4% better than the index', fr: "Précision glissante sur 20 ans, 4 % au-dessus de l'indice", zh: '近20年的滚动精度，比指数高4%' } },
      { src: '/assets/ProjectsPhotos/MarketPredict2.png', desc: { en: 'The dataset: highs/lows/close plus close ratio and trend over 2–1000 days', fr: 'Le dataset : hauts/bas/clôture plus close ratio et tendance sur 2 à 1000 jours', zh: '数据集：高低收盘价，外加2至1000天的收盘比与趋势' } },
    ],
  },
  'CIFAR-10 Image Recognition': {
    recap: { en: 'My first deep-learning project: a CNN recognizing photos of animals and vehicles from CIFAR-10. It reached 85% accuracy, and successfully recognized my cats.', fr: "Mon premier projet de deep learning : un CNN reconnaissant des photos d'animaux et de véhicules du dataset CIFAR-10. 85 % de précision, et il a reconnu mes chats.", zh: '我的第一个深度学习项目：用CNN识别CIFAR-10中的动物和交通工具照片，准确率85%，还成功认出了我家的猫。' },
    skills: { en: ['Building a model with convolutional neural networks', 'Trying many options to improve accuracy', 'Learning PyTorch and CUDA'], fr: ['Construire un modèle avec des réseaux convolutifs', "Tester beaucoup d'options pour améliorer la précision", 'Apprendre PyTorch et CUDA'], zh: ['用卷积神经网络构建模型', '尝试多种方法提升准确率', '学习PyTorch与CUDA'] },
    photos: [
      { src: '/assets/ProjectsPhotos/CIFAR1.png', desc: { en: 'Training loss over 30 epochs', fr: "Loss d'entraînement sur 30 époques", zh: '30轮训练的损失曲线' } },
      { src: '/assets/ProjectsPhotos/CIFAR2.png', desc: { en: 'The model recognizing photos of my cats', fr: 'Le modèle reconnaissant mes chats', zh: '模型认出我家猫的照片' } },
    ],
  },
  'EcoGraph': {
    recap: { en: 'A team of 5 students working full-time for 2 weeks: a C# application in Visual Studio 2022, data scraped from the internet into a database, then displayed on custom maps. I was project leader, supervising the team with MindView.', fr: "Une équipe de 5 étudiants à temps plein pendant 2 semaines : une application C# sous Visual Studio 2022, des données extraites d'internet vers une base, puis affichées sur des cartes personnalisées. J'étais chef de projet, avec MindView pour superviser l'équipe.", zh: '五名学生全职协作两周：用Visual Studio 2022开发C#应用，从网上抓取数据入库，再在自定义地图上展示。我担任项目负责人，用MindView管理团队。' },
    skills: { en: ['Supervising a team of 5 people', 'Linking the application to the database with Python', 'Finding pertinent data on the internet', 'Creating and filling our database'], fr: ['Superviser une équipe de 5 personnes', "Relier l'application à la base avec Python", 'Trouver des données pertinentes sur internet', 'Créer et remplir notre base de données'], zh: ['管理五人团队', '用Python连接应用与数据库', '在网上寻找有价值的数据', '创建并填充数据库'] },
    photos: [
      { src: '/assets/ProjectsPhotos/EcoGraph1.png', desc: { en: 'The visualization, pick data on the left', fr: 'La visualisation, données sélectionnables à gauche', zh: '可视化界面，左侧选择数据' } },
      { src: '/assets/ProjectsPhotos/EcoGraph2.png', desc: { en: 'The main page of the application', fr: "La page principale de l'application", zh: '应用主页面' } },
    ],
  },
  'Graph Project': {
    recap: { en: "I implemented Prim's algorithm to find the minimum spanning tree of any graph, but the highlight was coding an edge-bundling algorithm, which required implementing two shortest-path algorithms, BFS and Dijkstra.", fr: "J'ai implémenté l'algorithme de Prim pour trouver l'arbre couvrant minimal de n'importe quel graphe, mais le point fort fut de coder un algorithme d'edge bundling, nécessitant deux algorithmes de plus court chemin, BFS et Dijkstra.", zh: '我实现了Prim算法求任意图的最小生成树，但亮点是编写边捆绑算法，为此还实现了BFS和Dijkstra两种最短路径算法。' },
    skills: { en: ['Implementing complex graph algorithms', 'Handling the display of the graphs', 'Manipulating graphs programmatically'], fr: ['Implémenter des algorithmes de graphes complexes', "Gérer l'affichage des graphes", 'Manipuler des graphes par programmation'], zh: ['实现复杂的图算法', '处理图的可视化显示', '以编程方式操作图结构'] },
    photos: [
      { src: '/assets/ProjectsPhotos/graph1.png', desc: { en: 'A graph in its original form (American air traffic)', fr: 'Un graphe dans sa forme originale (trafic aérien américain)', zh: '原始形态的图（美国航空交通）' } },
      { src: '/assets/ProjectsPhotos/graph2.png', desc: { en: 'The same graph after the edge-bundling algorithm', fr: "Le même graphe après l'edge bundling", zh: '经过边捆绑算法处理后的同一张图' } },
    ],
  },
  'RobotFight': {
    recap: { en: 'As a full-stack developer on a Symfony website for robot-football competitions: time-slot creation and booking for matches, a land editor for users, and match results display, all attached to our database, following SCRUM.', fr: "Développeur full-stack sur un site Symfony pour des compétitions de robots footballeurs : création et réservation de créneaux pour les matchs, un éditeur de terrain pour les utilisateurs et l'affichage des résultats, le tout relié à notre base, en méthode SCRUM.", zh: '作为全栈开发者参与Symfony机器人足球赛事网站：比赛时段的创建与预订、用户场地编辑器、比赛结果展示，全部对接数据库，遵循SCRUM方法。' },
    skills: { en: ['Developing features across back and front-end simultaneously', 'Using Symfony and the Doctrine ORM'], fr: ['Développer des fonctionnalités back et front-end en même temps', "Utiliser Symfony et l'ORM Doctrine"], zh: ['同时开发前后端功能', '使用Symfony与Doctrine ORM'] },
    photos: [
      { src: '/assets/ProjectsPhotos/RobotFight1.png', desc: { en: 'Customizable time slots respecting a long list of constraints', fr: 'Créneaux personnalisables respectant une longue liste de contraintes', zh: '可自定义的时段，满足一长串约束条件' } },
      { src: '/assets/ProjectsPhotos/RobotFight2.png', desc: { en: 'The land interface and competition customization options', fr: "L'interface terrain et les options de personnalisation", zh: '场地界面与赛事自定义选项' } },
    ],
  },
  'Odomo': {
    recap: { en: 'Rewriting the code of a home-automation control unit in Java, with three modes: rainfall, temperature and heating. For each mode I created and used boolean matrices to display the control-unit interface.', fr: "Réécriture du code d'une centrale domotique en Java, avec trois modes : pluie, température et chauffage. Pour chaque mode, j'ai créé et utilisé des matrices booléennes pour afficher l'interface de la centrale.", zh: '用Java重写家庭自动化控制单元，包含降雨、温度和供暖三种模式。每种模式都通过布尔矩阵来显示控制单元的界面。' },
    skills: { en: ['Manipulating matrices in Java'], fr: ['Manipuler des matrices en Java'], zh: ['在Java中操作矩阵'] },
    photos: [
      { src: '/assets/ProjectsPhotos/Odomo1.png', desc: { en: 'The interface in rainfall mode', fr: "L'interface en mode pluie", zh: '降雨模式下的界面' } },
      { src: '/assets/ProjectsPhotos/Odomo2.png', desc: { en: 'The interface in heating mode, asking for heating time', fr: "L'interface en mode chauffage, demandant la durée", zh: '供暖模式界面，询问供暖时长' } },
    ],
  },
};

// ------------------------------------------------------------------------- Filters
export interface Filter { id: string; label: Loc; }
export const FILTERS: Filter[] = [
  { id: 'All', label: { en: 'All', fr: 'Tout', zh: '全部' } },
  { id: 'Machine-learning', label: { en: 'Machine learning', fr: 'Machine learning', zh: '机器学习' } },
  { id: 'Data-science', label: { en: 'Data science', fr: 'Data science', zh: '数据科学' } },
  { id: 'NLP', label: { en: 'NLP', fr: 'NLP', zh: 'NLP' } },
  { id: 'Software-development', label: { en: 'Software', fr: 'Développement', zh: '软件开发' } },
];

// ------------------------------------------------------------------- Social / links
export const PORTRAIT = '/assets/MePhotos/PhotoMoi.jpg';
export const RESUME = '/assets/MATHIEU_JAY_RESUME.pdf';
export const SOCIAL = {
  github: 'https://github.com/Arkww',
  linkedin: 'https://www.linkedin.com/in/mathieu-jay/',
  instagram: 'https://www.instagram.com/mathieuaway/',
  email: 'mathieu.jay2@gmail.com',
};

// Circular brand badges (blue circle + white glyph), read well in light & dark.
export const LOGOS = {
  github: '/assets/Logos/github.png',
  linkedin: '/assets/Logos/linkedin.png',
  instagram: '/assets/Logos/instagram.jpg',
  mail: '/assets/Logos/mail.png',
};
