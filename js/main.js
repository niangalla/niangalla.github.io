/* Alla Niang · portfolio scripts (no build step, no dependencies) */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ------------------------------------------------------------------
     Translations (EN default, FR alternative)
     data-i18n       -> textContent
     data-i18n-html  -> innerHTML (only for trusted strings below)
     data-i18n-ph    -> placeholder
     data-i18n-alt   -> alt
  ------------------------------------------------------------------ */
  var I18N = {
    en: {
      "meta.title": "Alla Niang · Data & AI Engineer · Dakar, Senegal",
      "skip": "Skip to content",
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.certs": "Certifications", "nav.contact": "Contact",
      "stage.source": "source", "stage.ingest": "ingest", "stage.transform": "transform",
      "stage.model": "model", "stage.serve": "serve", "stage.validate": "validate", "stage.deploy": "deploy",
      "hero.badge": "Open to remote opportunities",
      "hero.role": "Data & AI Engineer",
      "hero.pitch": "I build reliable data pipelines and production AI assistants that turn raw, messy data into tested tables, clear dashboards and useful answers.",
      "hero.loc": "Dakar, Senegal",
      "hero.remote": "Remote worldwide, freelance & collaborations",
      "hero.cv": "Download CV", "hero.contact": "Contact me",
      "hero.photoAlt": "Portrait of Alla Niang, smiling with arms crossed",
      "hero.chipProd": "CuberOne · in production",
      "about.title": "About me",
      "about.p1": "I'm <strong>Alla NIANG</strong>, a Data &amp; AI Engineer at <strong>Cuberfit</strong> in Dakar. I build ELT pipelines (Airflow, SQL, dbt) and <strong>CuberOne</strong>, Cuberfit's production voice AI assistant.",
      "about.p2": "A full-stack web background keeps me close to product needs, and I work comfortably in remote, English-speaking teams.",
      "about.f.based": "Based in", "about.f.basedV": "Dakar, Senegal (UTC+0)",
      "about.f.focus": "Focus", "about.f.focusV": "Data engineering · LLM / RAG systems · Analytics",
      "about.f.lang": "Languages", "about.f.langV": "French (native) · English (professional, EF SET C2)",
      "about.f.edu": "Education", "about.f.eduV": "Sonatel Academy – Orange Digital Center (2025) · Master's in Software Engineering, in progress",
      "about.f.off": "Off the clock", "about.f.offV": "Football, and a loyal Real Madrid supporter ⚽",
      "skills.title": "Skills & toolbox",
      "skills.sub": "The tools I use to move data from source to decision, and to put AI into production.",
      "skills.de": "Data engineering", "skills.wh": "Warehouses & modeling", "skills.ai": "AI / ML systems",
      "skills.cloud": "Cloud & DevOps", "skills.prog": "Programming & ingestion", "skills.bi": "Analytics & BI",
      "skills.c.batch": "Batch & streaming", "skills.c.quality": "Data quality tests", "skills.c.star": "Star schema",
      "skills.c.tools": "Tool calling", "skills.c.regr": "Non-regression testing", "skills.c.voice": "Voice AI (ElevenLabs)",
      "skills.c.sql": "SQL (advanced)", "skills.c.api": "API integration", "skills.c.eda": "Exploratory data analysis",
      "projects.title": "Selected projects",
      "projects.sub": "From a production AI assistant to end-to-end pipelines and dashboards on Senegalese data.",
      "projects.inprod": "In production", "projects.flagship": "Flagship · Cuberfit",
      "projects.cuber.lead": "Cuberfit's production voice AI assistant.",
      "projects.cuber.b1": "Two channels with the same cloned voice: FAQ answers voiced once with ElevenLabs TTS, stored on Amazon S3 and served through CloudFront, and a real-time conversational agent for everything else.",
      "projects.cuber.b2": "The ElevenLabs agent combines retrieval-augmented generation (RAG) over the company knowledge base, an LLM and text-to-speech.",
      "projects.cuber.b3": "LLM tool calls go through a single NestJS API on AWS: read-only booking status from HubSpot CRM, and Jira Service Management support tickets opened only with the customer's consent.",
      "projects.cuber.b4": "Guardrails against hallucinated answers and a non-regression test suite to keep behaviour stable across changes. Architecture documented at each step.",
      "projects.tag.regr": "Regression tests", "projects.tag.kpi": "KPI design",
      "projects.private": "Proprietary system, no public repository.",
      "projects.ongoing": "ongoing", "projects.repo": "View repository", "projects.more": "More on GitHub",
      "projects.rag.kind": "open source · RAG",
      "projects.rag.sub": "Citizen assistant for e‑senegal.sn administrative procedures",
      "projects.rag.desc": "A RAG assistant that answers citizens' questions about administrative procedures on e‑senegal.sn, the Senegalese government's online one-stop portal, in French and strictly from its document base. A scraper pulls the official procedures catalogue from the portal's public GraphQL API; documents are chunked by section, embedded and indexed in ChromaDB. Retrieved chunks are re-ranked (title and keyword boosts, score threshold) before a local LLM generates the answer, streamed with its sources to a React chat interface.",
      "projects.rag.desc2": "The system prompt enforces a fixed answer structure (documents to provide, cost, processing time) and an explicit \"not enough information\" reply instead of guessing.",
      "projects.rag.note": "Work in progress · self-hosted with Docker Compose", "projects.indev": "In development",
      "projects.rag.llm": "Llama 3.2 3B via Ollama (local, CPU)", "projects.rag.vdb": "Vector DB",
      "projects.rag.api": "FastAPI, streamed NDJSON", "projects.rag.ui": "UI", "projects.rag.run": "Run",
      "projects.details": "Details",
      "projects.zoom": "Open full-size image",
      "projects.cap.arch": "Architecture",
      "arch.tag": "Two channels · one voice",
      "arch.laneA": "REAL-TIME AGENT · PERSONAL QUESTIONS",
      "arch.laneB": "PRE-GENERATED FAQ AUDIO · ONCE PER ANSWER",
      "arch.laneBp": "PRE-GENERATED FAQ AUDIO",
      "arch.user": "User",
      "arch.user.s": "CuberFit app",
      "arch.orb": "CuberOne orb",
      "arch.orb.s": "voice or text",
      "arch.agent.s": "conversational AI",
      "arch.rag.s": "knowledge base",
      "arch.llm.s": "generation",
      "arch.tts.s": "cloned voice",
      "arch.guard": "Guardrails",
      "arch.guard.s": "system prompt",
      "arch.tools": "tool calls",
      "arch.ctx": "context",
      "arch.api.s": "single integration point",
      "arch.crm.s": "booking status · read-only",
      "arch.jira.s": "support ticket · with consent",
      "arch.reply": "voice reply",
      "arch.help": "Help page",
      "arch.help.s": "“Listen” button",
      "arch.cf.s": "cache",
      "arch.s3.s": "mp3 audio",
      "arch.tts2.s": "via NestJS",
      "arch.top.s": "most-asked Q&A",
      "arch.kb.s": "source of truth",
      "arch.listen.p": "“Listen” button",
      "projects.cap.sim": "Partly simulated data",
      "projects.tag.model": "Data modeling",
      "projects.cuber.short": "Two channels, one cloned voice: pre-generated audio for the most-asked FAQ answers, and a real-time agent that answers from the company knowledge base (RAG) and acts on the CRM and customer support through LLM tool calling, behind guardrails and a non-regression test suite.",
      "projects.cuber.alt": "CuberOne architecture, two channels with one voice. Real-time agent: the user speaks or types to the CuberOne orb in the CuberFit app; an ElevenLabs agent answers with RAG over the knowledge base, an LLM, a cloned TTS voice and guardrails, and makes tool calls to a NestJS API on AWS, which reads booking status from HubSpot CRM (read-only) and opens Jira Service Management support tickets with the customer's consent. Pre-generated FAQ audio: the most-asked answers from the knowledge base are voiced once with ElevenLabs TTS through NestJS, stored in Amazon S3 and served through CloudFront to the help page's Listen button.",
      "projects.rag.short": "Answers citizens' questions in French, strictly from the official e‑senegal.sn procedures catalogue, with its sources. Runs fully local with Llama 3.2, ChromaDB and FastAPI.",
      "projects.rag.alt": "Architecture diagram of the e-Sénégal RAG chatbot: scraper, embeddings, ChromaDB, re-ranking, Llama 3.2 via Ollama, FastAPI and React",
      "projects.ww.short": "Bronze/Silver/Gold ELT on regulator (CRSE) tariff PDFs for 5 Senegalese electricity operators, from AWS S3 to Snowflake to Power BI. dbt models are tested on every run.",
      "projects.ww.alt": "WattWatch Africa architecture diagram from the repository: sources, Scrapy ingestion, S3 landing, Snowflake with dbt, Power BI",
      "projects.obs.short": "Compares internet offers across operators and countries, normalised to a price per Mb/s. Prices live as dated facts in a dbt + DuckDB star schema.",
      "projects.obs.alt": "Observatoire Internet architecture diagram: Playwright scrapers, dated raw snapshots, dbt and DuckDB star schema, CSV exports to Power BI, Streamlit planned",
      "projects.dfe.short": "Batch and streaming pipeline on Port Autonome de Dakar data, from Kafka and Spark to a PostgreSQL warehouse. Orchestrated with Airflow, monitored with ELK.",
      "projects.dfe.alt": "DataFlowEngineering360 architecture diagram from the repository: batch and Kafka streaming ingestion, Hadoop raw and clean zones, Spark and dbt, PostgreSQL warehouse, monitoring",
      "projects.met.short": "Streams live weather data from the Tomorrow.io API through Kafka and PySpark into an HDFS data lake. Orchestrated with Airflow, monitored with ELK.",
      "projects.met.alt": "DataFlow360 MeteoStream architecture diagram from the repository: weather API producer, Kafka, Logstash to Elasticsearch, Kibana and Redis, PySpark Streaming to an HDFS data lake, Airflow orchestration",
      "projects.face.short": "Detects faces from a webcam with MTCNN, encodes them as FaceNet embeddings and identifies people with an SVM classifier. Unrecognised faces are labelled \"Unknown\".",
      "projects.face.alt": "Realtime Face Recognition diagram: dataset, MTCNN and FaceNet embeddings, SVM training, then webcam, detection, SVM prediction and identity",
      "projects.bi.title": "Analytics & BI",
      "projects.bi.sub": "Power BI monitoring & evaluation dashboards built on Senegalese public references.",
      "projects.bi.me": "M&E",
      "projects.agri.title": "Climate-resilient agriculture",
      "projects.agri.sub": "Monitoring & evaluation dashboard · Senegal",
      "projects.agri.short": "Tracks the adoption of climate-resilient practices and their effect on yields, by region and value chain. DAPSA/EAA reference figures plus simulated program data.",
      "projects.agri.desc": "4 report pages (Home, Overview, Geographic breakdown, Insight) with Region and Value-chain filters synced across pages. Two-table model (campaigns → farmer groups) with DAX measures for average yield, adoption rate and share of women beneficiaries. Demo scope: 8 regions, 2022–2025.",
      "projects.agri.alt": "Overview page of the Power BI climate-resilient agriculture dashboard: KPI cards, yield trend by value chain, adoption rate by region, breakdowns by value chain and practice",
      "projects.sante.title": "Community health",
      "projects.sante.sub": "Logframe dashboard, target vs actual · Senegal",
      "projects.sante.short": "Compares 4 community health indicators against their targets across 8 health districts, to spot territorial gaps. EDS-Continue 2023 (ANSD) references plus simulated program data.",
      "projects.sante.desc": "3 report pages (Summary, Indicators, Action priorities) filtered by health district, indicator and quarter. DAX measures for completion rate, gap to target and indicators below target, with conditional formatting on the gap. Demo scope: 8 quarters, 2024–2025.",
      "projects.sante.alt": "Indicators page of the Power BI community health dashboard: completion rate KPIs, completion vs target by indicator, quarterly trend and gap to target by district",
      "stage.review": "peer review",
      "reco.title": "Recommendations",
      "reco.sub": "What former colleagues and classmates wrote on LinkedIn.",
      "reco.tr": "Translated from French",
      "reco.profile": "LinkedIn profile",
      "reco.all": "See all 7 recommendations on LinkedIn",
      "reco.1.q": "“A rigorous, business-oriented data professional, he knows how to turn raw data into clear analyses that are useful for decision-making. […] a reliable, efficient profile, immediately operational.”",
      "reco.1.rel": "Colleague, Dec 2025",
      "reco.2.q": "“Alla is a strong asset: a data engineer has to master everything on the development side, but more and more the job is about handling errors and ensuring good performance without wasting resources. I recommend Alla because he is well placed for it.”",
      "reco.2.rel": "Studied together, Jan 2026",
      "reco.3.q": "“He excels at designing robust, scalable and well-documented data pipelines. Alla is an excellent teammate: rigorous, a natural teacher, and with a great ability to pass on technical knowledge in a clear and accessible way.”",
      "reco.3.rel": "Studied together, Jan 2026",
      "projects.ww.sub": "Energy affordability ELT pipeline",
      "projects.ww.desc": "Bronze/Silver/Gold ELT on regulator (CRSE) tariff PDFs for 5 Senegalese electricity operators: Scrapy + pdfplumber ingestion, versioned landing in AWS S3, Airflow COPY INTO Snowflake, dbt models tested on every run, Power BI serving. Infrastructure declared in Terraform, GitHub Actions CI.",
      "projects.obs.sub": "Internet price comparison · dbt + DuckDB star schema",
      "projects.obs.desc": "Playwright scrapers archive dated, immutable HTML/JSON snapshots of operator pages (Orange SN and Orange CI so far); dbt on DuckDB models them into dimensions and a fact_tarif table. Power BI serves as the analysis lab through CSV exports; a public Streamlit site is planned.",
      "projects.dfe.sub": "Maritime big data pipeline",
      "projects.dfe.desc": "Ingestion with Apache Kafka and Spark, raw storage on HDFS, Airflow-orchestrated ETL into a PostgreSQL star-schema warehouse, data quality checks with Great Expectations, Docker Compose deployment, ELK and Grafana monitoring.",
      "projects.met.sub": "Real-time & batch weather data pipeline",
      "projects.met.desc": "Modular Docker Compose stacks (core, Airflow, monitoring, data warehouse, utilities) started by a single script; PostgreSQL for Airflow metadata and the data warehouse; Logstash feeds Elasticsearch/Kibana and Redis. The Streamlit dashboard is still incomplete.",
      "projects.face.sub": "Real-time biometric identification of learners",
      "projects.face.desc": "Three scripts: extract 512-d embeddings from an augmented dataset, train the SVM classifier (scikit-learn), then run real-time recognition on the webcam with OpenCV.",
      
      
      "exp.title": "Experience",
      "exp.cuber.date": "Mar 2026 – Present", "exp.cuber.role": "Data & AI Engineer",
      "exp.cuber.b1": "Build automated ELT pipelines with Apache Airflow, SQL and dbt, and designed the target ingestion architecture (Airbyte → warehouse → dbt → marts).",
      "exp.cuber.b3": "Build and operate CuberOne, the production voice AI assistant (RAG, tool calling into CRM/support, guardrails, non-regression tests).",
      "exp.cuber.b4": "Product analytics with Amplitude: user event tracking and key product metrics, with Product and Engineering teams.",
      "exp.dscale.date": "Jun 2024 – Nov 2024", "exp.dscale.role": "Full-Stack Web Developer (Remote)", "exp.dubai": "Dubai",
      "exp.dscale.b1": "Contributed to a blockchain-based (ICP) crowdfunding platform with React and Next.js, including API data integration and KPI tracking views.",
      "exp.dscale.b2": "International remote team, all collaboration and deliverables in English.",
      "exp.appen.date": "Oct 2023 – Oct 2024", "exp.appen.role": "AI Training Data Contributor (Freelance, Remote)",
      "exp.appen.b1": "Produced AI training data (transcription) and performed product testing for remote clients.",
      "exp.uidt.date": "Mar 2022 – Oct 2022", "exp.uidt.role": "Full-Stack Web Developer",
      "exp.uidt.org": "IT Department (DSI), Université Iba Der Thiam · Thiès",
      "exp.uidt.b1": "Built two platforms (claims management, student journey tracking) used by 5,000+ users, cutting processing time by 50% and simplifying reporting for 2,000+ students per semester.",
      "edu.title": "Education",
      "edu.sa.date": "Feb 2025 – Dec 2025 · Graduated", "edu.sa.name": "Data Development Program",
      "edu.ma.date": "2023 – Present", "edu.ma.name": "Master's in Computer Science, Software Engineering",
      "edu.ba.name": "Bachelor's in Computer Science, Software Engineering", "edu.ba.note": "ranked 2nd in class, honors",
      "certs.title": "Certifications", "certs.sub": "Every credential links to its public verification page.",
      "certs.verify": "Verify", "certs.efset": "EF SET English Certificate · C2 Proficient",
      "certs.gmi": "Professional Mentorship Program Certificate",
      "contact.title": "Let's build something together",
      "contact.sub": "Open to remote roles worldwide, freelance missions and collaborations. The fastest way to reach me is email or WhatsApp.",
      "contact.email": "Email", "contact.phone": "Phone", "contact.wa": "Chat on WhatsApp",
      "form.title": "Send a quick message",
      "form.note": "Your message is sent straight to my inbox. I usually reply within a few days.",
      "form.name": "Your name", "form.email": "Your email", "form.emailPh": "you@company.com",
      "form.subject": "Subject", "form.subjectPh": "Remote data engineering role",
      "form.message": "Message", "form.send": "Send message", "form.sending": "Sending…",
      "form.errRequired": "Please fill in all fields.",
      "form.errEmail": "Please enter a valid email address.",
      "form.errShort": "Your message is a bit short. Please add a few more details (at least 10 characters).",
      "form.success": "<strong>Thanks, your message is on its way!</strong> I'll get back to you by email soon.",
      "form.fail": "<strong>Sorry, the message could not be sent.</strong> Please email me directly at <a href=\"mailto:niangalla98@gmail.com\">niangalla98@gmail.com</a>.",
      "footer.made": "Designed & built in Dakar", "footer.top": "Back to top",
      "ui.toDark": "Switch to dark mode", "ui.toLight": "Switch to light mode",
      "ui.langSwitch": "Passer en français", "ui.menuOpen": "Open menu", "ui.menuClose": "Close menu"
    },
    fr: {
      "meta.title": "Alla Niang · Data & AI Engineer · Dakar, Sénégal",
      "skip": "Aller au contenu",
      "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets",
      "nav.experience": "Parcours", "nav.certs": "Certifications", "nav.contact": "Contact",
      "stage.source": "source", "stage.ingest": "ingestion", "stage.transform": "transformation",
      "stage.model": "modélisation", "stage.serve": "restitution", "stage.validate": "validation", "stage.deploy": "déploiement",
      "hero.badge": "Ouvert aux opportunités en remote",
      "hero.role": "Data & AI Engineer",
      "hero.pitch": "Je construis des pipelines de données fiables et des assistants IA en production, pour transformer une donnée brute et désordonnée en tables testées, en tableaux de bord clairs et en réponses utiles.",
      "hero.loc": "Dakar, Sénégal",
      "hero.remote": "Remote partout dans le monde, freelance & collaborations",
      "hero.cv": "Télécharger mon CV", "hero.contact": "Me contacter",
      "hero.photoAlt": "Portrait d'Alla Niang, souriant, bras croisés",
      "hero.chipProd": "CuberOne · en production",
      "about.title": "À propos",
      "about.p1": "Je m'appelle <strong>Alla NIANG</strong>, Data &amp; AI Engineer chez <strong>Cuberfit</strong> à Dakar. Je construis des pipelines ELT (Airflow, SQL, dbt) et <strong>CuberOne</strong>, l'assistant vocal IA de Cuberfit en production.",
      "about.p2": "Mon parcours en développement web fullstack me garde proche des besoins produit, et je suis à l'aise dans des équipes remote et anglophones.",
      "about.f.based": "Basé à", "about.f.basedV": "Dakar, Sénégal (UTC+0)",
      "about.f.focus": "Domaines", "about.f.focusV": "Data engineering · Systèmes LLM / RAG · Analytics",
      "about.f.lang": "Langues", "about.f.langV": "Français (langue maternelle) · Anglais (professionnel, EF SET C2)",
      "about.f.edu": "Formation", "about.f.eduV": "Sonatel Academy – Orange Digital Center (2025) · Master Génie Logiciel en cours",
      "about.f.off": "Hors du code", "about.f.offV": "Le football, et un fidèle supporter du Real Madrid ⚽",
      "skills.title": "Compétences & outils",
      "skills.sub": "Les outils que j'utilise pour amener la donnée de la source à la décision, et pour mettre l'IA en production.",
      "skills.de": "Data engineering", "skills.wh": "Entrepôts & modélisation", "skills.ai": "Systèmes IA / ML",
      "skills.cloud": "Cloud & DevOps", "skills.prog": "Programmation & ingestion", "skills.bi": "Analytics & BI",
      "skills.c.batch": "Batch & streaming", "skills.c.quality": "Tests de qualité des données", "skills.c.star": "Schéma en étoile",
      "skills.c.tools": "Appels d'outils (tool calling)", "skills.c.regr": "Tests de non-régression", "skills.c.voice": "IA vocale (ElevenLabs)",
      "skills.c.sql": "SQL (avancé)", "skills.c.api": "Intégration d'API", "skills.c.eda": "Analyse exploratoire",
      "projects.title": "Projets choisis",
      "projects.sub": "D'un assistant IA en production à des pipelines de bout en bout et des tableaux de bord sur des données sénégalaises.",
      "projects.inprod": "En production", "projects.flagship": "Projet phare · Cuberfit",
      "projects.cuber.lead": "L'assistant vocal IA de Cuberfit, en production.",
      "projects.cuber.b1": "Deux canaux avec la même voix clonée : les réponses de la FAQ vocalisées une seule fois avec ElevenLabs TTS, stockées sur Amazon S3 et servies via CloudFront, et un agent conversationnel temps réel pour tout le reste.",
      "projects.cuber.b2": "L'agent ElevenLabs combine génération augmentée par la recherche (RAG) sur la base de connaissances de l'entreprise, un LLM et la synthèse vocale.",
      "projects.cuber.b3": "Les appels d'outils LLM passent par une API NestJS unique sur AWS : statut des réservations en lecture seule depuis le CRM HubSpot, et tickets Jira Service Management créés uniquement avec l'accord du client.",
      "projects.cuber.b4": "Garde-fous contre les réponses hallucinées et suite de tests de non-régression pour garder un comportement stable d'une version à l'autre. Architecture documentée à chaque étape.",
      "projects.tag.regr": "Tests de régression", "projects.tag.kpi": "Conception de KPI",
      "projects.private": "Système propriétaire, pas de dépôt public.",
      "projects.ongoing": "en cours", "projects.repo": "Voir le dépôt", "projects.more": "Plus de projets sur GitHub",
      "projects.rag.kind": "open source · RAG",
      "projects.rag.sub": "Assistant citoyen pour les démarches administratives d'e‑senegal.sn",
      "projects.rag.desc": "Un assistant RAG qui répond aux questions des citoyens sur les démarches administratives du portail e‑senegal.sn, le guichet unique numérique de l'État du Sénégal, en français et uniquement à partir de sa base documentaire. Un scraper récupère le catalogue officiel des démarches via l'API GraphQL publique du portail ; les documents sont découpés par section, vectorisés puis indexés dans ChromaDB. Les passages retrouvés sont reclassés (bonus titre et mots-clés, seuil de score) avant qu'un LLM local génère la réponse, diffusée en streaming avec ses sources dans une interface de chat React.",
      "projects.rag.desc2": "Le prompt système impose une structure de réponse fixe (pièces à fournir, coût, délai) et une réponse explicite « informations insuffisantes » plutôt qu'une supposition.",
      "projects.rag.note": "En cours de développement · auto-hébergé avec Docker Compose", "projects.indev": "En cours de développement",
      "projects.rag.llm": "Llama 3.2 3B via Ollama (local, CPU)", "projects.rag.vdb": "Base vectorielle",
      "projects.rag.api": "FastAPI, streaming NDJSON", "projects.rag.ui": "Interface", "projects.rag.run": "Exécution",
      "projects.details": "Détails",
      "projects.zoom": "Ouvrir l'image en grand",
      "projects.cap.arch": "Architecture",
      "arch.tag": "Deux canaux · une voix",
      "arch.laneA": "AGENT TEMPS RÉEL · QUESTIONS PERSONNELLES",
      "arch.laneB": "AUDIO FAQ PRÉ-GÉNÉRÉ · UNE FOIS PAR RÉPONSE",
      "arch.laneBp": "AUDIO FAQ PRÉ-GÉNÉRÉ",
      "arch.user": "Utilisateur",
      "arch.user.s": "app CuberFit",
      "arch.orb": "Orbe CuberOne",
      "arch.orb.s": "voix ou texte",
      "arch.agent.s": "IA conversationnelle",
      "arch.rag.s": "base documentaire",
      "arch.llm.s": "génération",
      "arch.tts.s": "voix clonée",
      "arch.guard": "Garde-fous",
      "arch.guard.s": "prompt système",
      "arch.tools": "tool calls",
      "arch.ctx": "contexte",
      "arch.api.s": "point d'entrée unique",
      "arch.crm.s": "réservations · lecture seule",
      "arch.jira.s": "ticket support · avec accord",
      "arch.reply": "réponse vocale",
      "arch.help": "Page d'aide",
      "arch.help.s": "bouton « Écouter »",
      "arch.cf.s": "cache",
      "arch.s3.s": "audio mp3",
      "arch.tts2.s": "via NestJS",
      "arch.top.s": "Q/R fréquentes",
      "arch.kb.s": "source de vérité",
      "arch.listen.p": "« Écouter »",
      "projects.cap.sim": "Données en partie simulées",
      "projects.tag.model": "Modélisation de données",
      "projects.cuber.short": "Deux canaux, une seule voix clonée : des réponses audio pré-générées pour les questions les plus fréquentes, et un agent temps réel qui répond à partir de la base de connaissances de l'entreprise (RAG) et agit sur le CRM et le support client par appels d'outils LLM, encadré par des garde-fous et une suite de tests de non-régression.",
      "projects.cuber.alt": "Architecture de CuberOne, deux canaux et une seule voix. Agent temps réel : l'utilisateur parle ou écrit à l'orbe CuberOne dans l'app CuberFit ; un agent ElevenLabs répond avec un RAG sur la base de connaissances, un LLM, une voix TTS clonée et des garde-fous, et effectue des appels d'outils vers une API NestJS sur AWS, qui lit le statut des réservations dans le CRM HubSpot (lecture seule) et crée des tickets Jira Service Management avec l'accord du client. Audio FAQ pré-généré : les réponses les plus fréquentes de la base de connaissances sont vocalisées une seule fois avec ElevenLabs TTS via NestJS, stockées sur Amazon S3 et servies par CloudFront au bouton « Écouter » de la page d'aide.",
      "projects.rag.short": "Répond aux questions des citoyens en français, uniquement à partir du catalogue officiel des démarches d'e‑senegal.sn, avec ses sources. Tourne entièrement en local avec Llama 3.2, ChromaDB et FastAPI.",
      "projects.rag.alt": "Schéma d'architecture du chatbot RAG e-Sénégal : scraper, embeddings, ChromaDB, reclassement, Llama 3.2 via Ollama, FastAPI et React",
      "projects.ww.short": "ELT Bronze/Silver/Gold sur les grilles tarifaires PDF du régulateur (CRSE) pour 5 opérateurs électriques sénégalais, d'AWS S3 à Snowflake puis Power BI. Les modèles dbt sont testés à chaque exécution.",
      "projects.ww.alt": "Schéma d'architecture de WattWatch Africa issu du dépôt : sources, ingestion Scrapy, landing S3, Snowflake avec dbt, Power BI",
      "projects.obs.short": "Compare les offres internet entre opérateurs et pays, ramenées à un prix par Mb/s. Les prix sont des faits datés dans un schéma en étoile dbt + DuckDB.",
      "projects.obs.alt": "Schéma d'architecture de l'Observatoire Internet : scrapers Playwright, instantanés bruts datés, schéma en étoile dbt et DuckDB, exports CSV vers Power BI, Streamlit prévu",
      "projects.dfe.short": "Pipeline batch et streaming sur les données du Port Autonome de Dakar, de Kafka et Spark jusqu'à un data warehouse PostgreSQL. Orchestré par Airflow, supervisé avec ELK.",
      "projects.dfe.alt": "Schéma d'architecture de DataFlowEngineering360 issu du dépôt : ingestion batch et streaming Kafka, zones brute et nettoyée Hadoop, Spark et dbt, data warehouse PostgreSQL, monitoring",
      "projects.met.short": "Diffuse en continu des données météo de l'API Tomorrow.io via Kafka et PySpark vers un data lake HDFS. Orchestré par Airflow, supervisé avec ELK.",
      "projects.met.alt": "Schéma d'architecture de DataFlow360 MeteoStream issu du dépôt : producteur API météo, Kafka, Logstash vers Elasticsearch, Kibana et Redis, PySpark Streaming vers un data lake HDFS, orchestration Airflow",
      "projects.face.short": "Détecte les visages depuis une webcam avec MTCNN, les encode en embeddings FaceNet et identifie les personnes avec un classifieur SVM. Les visages non reconnus sont étiquetés « Unknown ».",
      "projects.face.alt": "Schéma de Realtime Face Recognition : jeu de données, embeddings MTCNN et FaceNet, entraînement SVM, puis webcam, détection, prédiction SVM et identité",
      "projects.bi.title": "Analytique & BI",
      "projects.bi.sub": "Tableaux de bord Power BI de suivi-évaluation, construits sur des références publiques sénégalaises.",
      "projects.bi.me": "Suivi-évaluation",
      "projects.agri.title": "Agriculture résiliente au climat",
      "projects.agri.sub": "Tableau de bord de suivi-évaluation · Sénégal",
      "projects.agri.short": "Mesure l'adoption de pratiques résilientes au climat et leur effet sur les rendements, par région et par filière. Références DAPSA/EAA et données de programme simulées.",
      "projects.agri.desc": "4 pages de rapport (Accueil, Vue d'ensemble, Répartition géographique, Insight) avec filtres Région et Filière synchronisés. Modèle à deux tables (campagnes → groupements) et mesures DAX : rendement moyen, taux d'adoption, part de bénéficiaires femmes. Périmètre de démonstration : 8 régions, 2022–2025.",
      "projects.agri.alt": "Page Vue d'ensemble du tableau de bord Power BI agriculture résiliente : cartes KPI, évolution du rendement par filière, taux d'adoption par région, répartitions par filière et par pratique",
      "projects.sante.title": "Santé communautaire",
      "projects.sante.sub": "Cadre logique, cible vs réalisé · Sénégal",
      "projects.sante.short": "Compare 4 indicateurs de santé communautaire à leurs cibles dans 8 districts sanitaires, pour repérer les écarts territoriaux. Références EDS-Continue 2023 (ANSD) et données de programme simulées.",
      "projects.sante.desc": "3 pages de rapport (Synthèse, Indicateurs, Priorités d'actions) filtrées par district sanitaire, indicateur et trimestre. Mesures DAX : taux de réalisation, écart à la cible, indicateurs sous la cible, avec mise en forme conditionnelle de l'écart. Périmètre de démonstration : 8 trimestres, 2024–2025.",
      "projects.sante.alt": "Page Indicateurs du tableau de bord Power BI santé communautaire : KPI de taux de réalisation, réalisé vs cible par indicateur, évolution trimestrielle et écart à la cible par district",
      "stage.review": "revue par les pairs",
      "reco.title": "Recommandations",
      "reco.sub": "Ce qu'ont écrit sur LinkedIn d'anciens collègues et camarades de formation.",
      "reco.tr": "Traduit du français",
      "reco.profile": "Profil LinkedIn",
      "reco.all": "Voir les 7 recommandations sur LinkedIn",
      "reco.1.q": "« Professionnel de la data rigoureux et orienté métier, il sait transformer des données brutes en analyses claires et utiles à la prise de décision. […] un profil fiable, efficace et immédiatement opérationnel. »",
      "reco.1.rel": "Collègue, déc. 2025",
      "reco.2.q": "« Alla est un bon élément, vu qu’un data engineer doit savoir maîtriser tout ce qui est du développement. Mais de plus en plus, c’est de gérer les erreurs et assurer des bonnes performances sans gâcher plusieurs ressources. Je vous recommande Alla puisqu’il est bien placé. »",
      "reco.2.rel": "Études ensemble, janv. 2026",
      "reco.3.q": "« Il excelle dans la conception de pipelines de données robustes, scalables et bien documentés. Alla est un excellent coéquipier : rigoureux, pédagogue, et doté d'une grande facilité à transmettre ses connaissances techniques de manière claire et accessible. »",
      "reco.3.rel": "Études ensemble, janv. 2026",
      "projects.ww.sub": "Pipeline ELT sur l'accessibilité financière de l'énergie",
      "projects.ww.desc": "ELT Bronze/Silver/Gold sur les grilles tarifaires PDF du régulateur (CRSE) pour 5 opérateurs électriques sénégalais : ingestion Scrapy + pdfplumber, landing versionné sur AWS S3, chargement Airflow (COPY INTO) vers Snowflake, modèles dbt testés à chaque exécution, restitution Power BI. Infrastructure déclarée en Terraform, CI GitHub Actions.",
      "projects.obs.sub": "Comparateur des offres internet · schéma en étoile dbt + DuckDB",
      "projects.obs.desc": "Des scrapers Playwright archivent des instantanés HTML/JSON datés et immuables des pages opérateurs (Orange SN et Orange CI pour l'instant) ; dbt sur DuckDB les modélise en dimensions et en table fact_tarif. Power BI sert de labo d'analyse via des exports CSV ; un site public Streamlit est prévu.",
      "projects.dfe.sub": "Pipeline Big Data maritime",
      "projects.dfe.desc": "Ingestion avec Apache Kafka et Spark, stockage brut sur HDFS, ETL orchestré par Airflow vers un data warehouse PostgreSQL en schéma en étoile, contrôles qualité avec Great Expectations, déploiement Docker Compose, monitoring ELK et Grafana.",
      "projects.met.sub": "Pipeline météo temps réel & batch",
      "projects.met.desc": "Stacks Docker Compose modulaires (cœur, Airflow, monitoring, data warehouse, utilitaires) lancées par un seul script ; PostgreSQL pour les métadonnées Airflow et le data warehouse ; Logstash alimente Elasticsearch/Kibana et Redis. Le dashboard Streamlit est encore incomplet.",
      "projects.face.sub": "Identification biométrique des apprenants en temps réel",
      "projects.face.desc": "Trois scripts : extraction d'embeddings de 512 dimensions à partir d'un jeu de données augmenté, entraînement du classifieur SVM (scikit-learn), puis reconnaissance en temps réel sur la webcam avec OpenCV.",
      
      
      "exp.title": "Parcours professionnel",
      "exp.cuber.date": "Mars 2026 – Aujourd'hui", "exp.cuber.role": "Data & AI Engineer",
      "exp.cuber.b1": "Développement de pipelines ELT automatisés avec Apache Airflow, SQL et dbt, et conception de l'architecture d'ingestion cible (Airbyte → entrepôt → dbt → marts).",
      "exp.cuber.b3": "Développement et exploitation de CuberOne, l'assistant vocal IA en production (RAG, appels d'outils vers le CRM et le support, garde-fous, tests de non-régression).",
      "exp.cuber.b4": "Product analytics avec Amplitude : tracking des événements utilisateurs et métriques produit clés, avec les équipes Produit et Développement.",
      "exp.dscale.date": "Juin 2024 – Nov. 2024", "exp.dscale.role": "Développeur Web Fullstack (Remote)", "exp.dubai": "Dubaï",
      "exp.dscale.b1": "Participation à une plateforme de crowdfunding sur la blockchain ICP avec React et Next.js : intégration de données via API et vues de suivi des KPI.",
      "exp.dscale.b2": "Équipe internationale en remote, collaboration et livrables entièrement en anglais.",
      "exp.appen.date": "Oct. 2023 – Oct. 2024", "exp.appen.role": "Contributeur données d'entraînement IA (Freelance, Remote)",
      "exp.appen.b1": "Production de données d'entraînement pour l'IA (transcription) et tests de produits pour des clients à distance.",
      "exp.uidt.date": "Mars 2022 – Oct. 2022", "exp.uidt.role": "Développeur Web Fullstack",
      "exp.uidt.org": "Direction des Systèmes d'Information (DSI), Université Iba Der Thiam · Thiès",
      "exp.uidt.b1": "Développement de deux plateformes (gestion des réclamations, suivi du parcours étudiant) utilisées par plus de 5 000 personnes, réduisant de 50 % les délais de traitement et facilitant le reporting pour plus de 2 000 étudiants par semestre.",
      "edu.title": "Formation",
      "edu.sa.date": "Fév. 2025 – Déc. 2025 · Diplômé", "edu.sa.name": "Programme Développement Data",
      "edu.ma.date": "2023 – En cours", "edu.ma.name": "Master Informatique, Génie Logiciel",
      "edu.ba.name": "Licence Informatique, Génie Logiciel", "edu.ba.note": "2e de promotion, mention Bien",
      "certs.title": "Certifications", "certs.sub": "Chaque certification renvoie vers sa page de vérification publique.",
      "certs.verify": "Vérifier", "certs.efset": "Certificat d'anglais EF SET · C2 Proficient",
      "certs.gmi": "Certificat du Professional Mentorship Program",
      "contact.title": "Construisons quelque chose ensemble",
      "contact.sub": "Ouvert aux postes en remote partout dans le monde, aux missions freelance et aux collaborations. Le plus rapide pour me joindre : l'e-mail ou WhatsApp.",
      "contact.email": "E-mail", "contact.phone": "Téléphone", "contact.wa": "Discuter sur WhatsApp",
      "form.title": "Envoyer un message",
      "form.note": "Votre message arrive directement dans ma boîte mail. Je réponds généralement sous quelques jours.",
      "form.name": "Votre nom", "form.email": "Votre e-mail", "form.emailPh": "vous@entreprise.com",
      "form.subject": "Objet", "form.subjectPh": "Poste de data engineer en remote",
      "form.message": "Message", "form.send": "Envoyer le message", "form.sending": "Envoi en cours…",
      "form.errRequired": "Merci de remplir tous les champs.",
      "form.errEmail": "Merci de saisir une adresse e-mail valide.",
      "form.errShort": "Votre message est un peu court. Ajoutez quelques détails (10 caractères minimum).",
      "form.success": "<strong>Merci, votre message est bien parti !</strong> Je vous réponds par e-mail très vite.",
      "form.fail": "<strong>Désolé, le message n'a pas pu être envoyé.</strong> Écrivez-moi directement à <a href=\"mailto:niangalla98@gmail.com\">niangalla98@gmail.com</a>.",
      "footer.made": "Conçu & développé à Dakar", "footer.top": "Haut de page",
      "ui.toDark": "Passer en mode sombre", "ui.toLight": "Passer en mode clair",
      "ui.langSwitch": "Switch to English", "ui.menuOpen": "Ouvrir le menu", "ui.menuClose": "Fermer le menu"
    }
  };

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var lang = "en";
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ""; }

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    root.setAttribute("lang", lang);
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.getElementById("lang-toggle").setAttribute("aria-label", t("ui.langSwitch"));
    updateThemeLabel();
    updateMenuLabel();
    store.set("an-lang", lang);
  }

  /* ---------- Theme ---------- */
  function currentTheme() { return root.getAttribute("data-theme") === "dark" ? "dark" : "light"; }
  function updateThemeLabel() {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", currentTheme() === "dark" ? t("ui.toLight") : t("ui.toDark"));
  }
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("an-theme", next);
    updateThemeLabel();
  });

  /* ---------- Language ---------- */
  document.getElementById("lang-toggle").addEventListener("click", function () {
    applyLang(lang === "en" ? "fr" : "en");
  });
  var params = new URLSearchParams(location.search);
  applyLang(params.get("lang") || store.get("an-lang") || "en");

  /* ---------- Mobile menu ---------- */
  function updateMenuLabel() {
    menuBtn.setAttribute("aria-label", menuBtn.getAttribute("aria-expanded") === "true" ? t("ui.menuClose") : t("ui.menuOpen"));
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    updateMenuLabel();
  }
  menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Pipeline progress + active stage ---------- */
  var bar = document.getElementById("progress-bar");
  var fill = document.getElementById("rail-fill");
  var stages = Array.prototype.slice.call(document.querySelectorAll(".rail-stages li"));
  var sections = stages.map(function (li) { return document.getElementById(li.getAttribute("data-target")); });
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".main-nav a"));
  var ticking = false;

  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.width = (p * 100).toFixed(2) + "%";

    var probe = window.innerHeight * 0.38;
    var active = 0;
    sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= probe) active = i; });
    if (max - window.scrollY < 4) active = sections.length - 1;
    stages.forEach(function (li, i) {
      li.classList.toggle("active", i === active);
      li.classList.toggle("done", i < active);
    });
    // fill the rail down to the active node, plus progress within that stage
    var rail = fill.parentElement.getBoundingClientRect();
    var node = stages[active].querySelector(".node").getBoundingClientRect();
    var next = stages[Math.min(active + 1, stages.length - 1)].querySelector(".node").getBoundingClientRect();
    var sec = sections[active], frac = 0;
    if (sec && active < stages.length - 1) {
      var r = sec.getBoundingClientRect();
      frac = Math.min(1, Math.max(0, (probe - r.top) / Math.max(1, r.height)));
    }
    var y = (node.top + node.height / 2) + ((next.top - node.top) * frac) - rail.top;
    fill.style.height = Math.max(0, y) + "px";

    var id = sections[active] ? sections[active].id : "";
    navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + id); });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  /* ---------- Contact form: in-page submit via FormSubmit (no backend) ---------- */
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/niangalla98@gmail.com";
  var form = document.getElementById("contact-form");
  var err = document.getElementById("form-error");
  var statusBox = document.getElementById("form-status");
  var submitBtn = form.querySelector(".form-submit");
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Messages are rendered through data-i18n(-html) so a language switch re-translates them.
  function showError(key, field) {
    err.setAttribute("data-i18n", key);
    err.textContent = t(key);
    err.hidden = false;
    if (field) field.focus();
  }
  function clearError() {
    err.hidden = true; err.removeAttribute("data-i18n"); err.textContent = "";
    form.querySelectorAll("[aria-invalid]").forEach(function (el) { el.removeAttribute("aria-invalid"); });
  }
  function showStatus(kind, key) {
    statusBox.className = "form-status is-" + kind;
    statusBox.setAttribute("data-i18n-html", key);
    statusBox.innerHTML = t(key);
    statusBox.hidden = false;
  }
  function hideStatus() { statusBox.hidden = true; statusBox.removeAttribute("data-i18n-html"); statusBox.innerHTML = ""; }
  function setLoading(on) {
    submitBtn.disabled = on;
    submitBtn.classList.toggle("is-loading", on);
    submitBtn.setAttribute("aria-busy", on ? "true" : "false");
    var label = submitBtn.querySelector(".btn-label");
    label.setAttribute("data-i18n", on ? "form.sending" : "form.send");
    label.textContent = t(on ? "form.sending" : "form.send");
  }

  form.addEventListener("input", function (e) {
    if (e.target.hasAttribute("aria-invalid")) e.target.removeAttribute("aria-invalid");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (submitBtn.disabled) return;
    clearError(); hideStatus();

    var f = form.elements;
    var name = f.name.value.trim(), email = f.email.value.trim();
    var subject = f.subject.value.trim(), message = f.message.value.trim();

    // Honeypot: real visitors never see this field. If it is filled, silently drop the submission.
    if (f._honey.value) { form.reset(); return; }

    var empty = [f.name, f.email, f.subject, f.message].filter(function (el) { return !el.value.trim(); });
    if (empty.length) { empty.forEach(function (el) { el.setAttribute("aria-invalid", "true"); }); return showError("form.errRequired", empty[0]); }
    if (!EMAIL_RE.test(email)) { f.email.setAttribute("aria-invalid", "true"); return showError("form.errEmail", f.email); }
    if (message.length < 10) { f.message.setAttribute("aria-invalid", "true"); return showError("form.errShort", f.message); }

    var fullSubject = "[Portfolio] " + subject;
    var payload = {
      name: name, email: email, subject: fullSubject, message: message,
      _subject: fullSubject, _template: "table", _captcha: "false"
    };

    setLoading(true);
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 15000) : null;

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok || !(data.success === true || data.success === "true")) throw new Error("FormSubmit: " + (data.message || res.status));
        });
      })
      .then(function () { form.reset(); showStatus("success", "form.success"); })
      .catch(function () { showStatus("error", "form.fail"); })
      .then(function () { if (timer) clearTimeout(timer); setLoading(false); });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
