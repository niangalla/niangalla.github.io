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
      "about.p1": "I'm <strong>Alla NIANG</strong>, a Data &amp; AI Engineer at <strong>Cuberfit</strong> in Dakar. I design and run ELT pipelines (Airflow, SQL, dbt) that turn raw source data into tested, trustworthy tables for analytics and decision-making.",
      "about.p2": "I also build <strong>CuberOne</strong>, Cuberfit's production voice AI assistant: retrieval-augmented generation over a knowledge base, tool calling into the CRM and customer support, guardrails against hallucinations and a non-regression test suite.",
      "about.p3": "My background is full-stack web development (a remote team in Dubai, university platforms used by 5,000+ users), which keeps me close to product needs. Known for rigorous, well-documented work and clear technical explanations, I'm comfortable in fully remote, English-speaking teams.",
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
      "projects.sub": "From a production AI assistant to end-to-end pipelines on Senegalese data.",
      "projects.inprod": "In production", "projects.flagship": "Flagship · Cuberfit",
      "projects.cuber.lead": "Cuberfit's production voice AI assistant.",
      "projects.cuber.b1": "Retrieval-augmented generation (RAG) over the company knowledge base.",
      "projects.cuber.b2": "LLM tool calling into the CRM and customer support: customer data lookups and support ticket creation from the conversation.",
      "projects.cuber.b3": "Guardrails against hallucinated answers and a non-regression test suite to keep behaviour stable across changes.",
      "projects.cuber.b4": "Architecture documented at each step.",
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
      "projects.ww.sub": "Energy affordability ELT pipeline",
      "projects.ww.desc": "Bronze/Silver/Gold ELT on regulator (CRSE) tariff PDFs for 5 Senegalese electricity operators: Scrapy + pdfplumber ingestion, versioned landing in AWS S3, Airflow COPY INTO Snowflake, dbt models tested on every run, Power BI serving. Infrastructure declared in Terraform, GitHub Actions CI.",
      "projects.obs.sub": "Internet price comparison · dbt + DuckDB star schema",
      "projects.obs.desc": "Playwright scrapers archive dated, immutable HTML/JSON snapshots; dbt on DuckDB models them into a star schema (dimensions + fact_tarif) where prices live as dated facts. Offers are normalised into unit prices (per Mb/s) across operators and countries, reported in Power BI and Streamlit.",
      "projects.dfe.sub": "Maritime big data pipeline",
      "projects.dfe.desc": "Distributed pipeline on Port Autonome de Dakar data: ingestion with Apache Kafka, processing with Apache Spark, storage on HDFS, Airflow-orchestrated ETL into a PostgreSQL data warehouse, Docker Compose deployment and ELK monitoring.",
      "projects.met.sub": "Real-time & batch weather data pipeline",
      "projects.met.desc": "Combines streaming and batch processing of weather data, with ELK monitoring and DevOps practices.",
      "projects.face.sub": "Real-time biometric identification of learners",
      "projects.face.desc": "A real-time face recognition system built with FaceNet embeddings and an SVM classifier.",
      "projects.pbi.title": "KPI dashboards, Senegal",
      "projects.pbi.sub": "Resilient agriculture & community health programs",
      "projects.pbi.desc": "Target vs actual tracking (completion rate, gap to target, territorial prioritization) with relational models and DAX measures across 8 regions and 8 health districts.",
      "projects.agri": "Agriculture", "projects.health": "Health",
      "exp.title": "Experience",
      "exp.cuber.date": "Mar 2026 – Present", "exp.cuber.role": "Data & AI Engineer",
      "exp.cuber.b1": "Design and build automated ELT pipelines orchestrated with Apache Airflow; model and transform data with SQL and dbt; containerized workloads with Docker.",
      "exp.cuber.b2": "Designed the target ingestion architecture (Airbyte → warehouse → dbt → marts).",
      "exp.cuber.b3": "Build and operate CuberOne, the production voice AI assistant (RAG, tool calling into CRM/support, guardrails, non-regression tests).",
      "exp.cuber.b4": "Product analytics with Amplitude: user event tracking and key product metrics, with Product and Engineering teams.",
      "exp.dscale.date": "Jun 2024 – Nov 2024", "exp.dscale.role": "Full-Stack Web Developer (Remote)", "exp.dubai": "Dubai",
      "exp.dscale.b1": "Contributed to a blockchain-based (ICP) crowdfunding platform with React and Next.js; integrated data via APIs and built views to track KPIs defined with the team.",
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
      "about.p1": "Je m'appelle <strong>Alla NIANG</strong>. Je suis Data &amp; AI Engineer chez <strong>Cuberfit</strong> à Dakar. Je conçois et fais tourner des pipelines ELT (Airflow, SQL, dbt) qui transforment la donnée source brute en tables testées et fiables, au service de l'analyse et de la décision.",
      "about.p2": "Je développe aussi <strong>CuberOne</strong>, l'assistant vocal IA de Cuberfit en production : génération augmentée par la recherche (RAG) sur une base de connaissances, appels d'outils vers le CRM et le support client, garde-fous contre les hallucinations et suite de tests de non-régression.",
      "about.p3": "Je viens du développement web fullstack (équipe remote basée à Dubaï, plateformes universitaires utilisées par plus de 5 000 personnes), ce qui me garde proche des besoins produit. Reconnu pour un travail rigoureux, bien documenté et des explications techniques claires, je suis à l'aise dans des équipes 100 % remote et anglophones.",
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
      "projects.sub": "D'un assistant IA en production à des pipelines de bout en bout sur des données sénégalaises.",
      "projects.inprod": "En production", "projects.flagship": "Projet phare · Cuberfit",
      "projects.cuber.lead": "L'assistant vocal IA de Cuberfit, en production.",
      "projects.cuber.b1": "Génération augmentée par la recherche (RAG) sur la base de connaissances de l'entreprise.",
      "projects.cuber.b2": "Appels d'outils LLM vers le CRM et le support client : consultation des données clients et création de tickets de support depuis la conversation.",
      "projects.cuber.b3": "Garde-fous contre les réponses hallucinées et suite de tests de non-régression pour garder un comportement stable d'une version à l'autre.",
      "projects.cuber.b4": "Architecture documentée à chaque étape.",
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
      "projects.ww.sub": "Pipeline ELT sur l'accessibilité financière de l'énergie",
      "projects.ww.desc": "ELT Bronze/Silver/Gold sur les grilles tarifaires PDF du régulateur (CRSE) pour 5 opérateurs électriques sénégalais : ingestion Scrapy + pdfplumber, landing versionné sur AWS S3, chargement Airflow (COPY INTO) vers Snowflake, modèles dbt testés à chaque exécution, restitution Power BI. Infrastructure déclarée en Terraform, CI GitHub Actions.",
      "projects.obs.sub": "Comparateur des offres internet · schéma en étoile dbt + DuckDB",
      "projects.obs.desc": "Des scrapers Playwright archivent des instantanés HTML/JSON datés et immuables ; dbt sur DuckDB les modélise en schéma en étoile (dimensions + fact_tarif) où les prix sont des faits datés. Les offres sont ramenées à un prix unitaire (par Mb/s) entre opérateurs et pays, avec restitution Power BI et Streamlit.",
      "projects.dfe.sub": "Pipeline Big Data maritime",
      "projects.dfe.desc": "Pipeline distribué sur les données du Port Autonome de Dakar : ingestion avec Apache Kafka, traitement avec Apache Spark, stockage sur HDFS, ETL orchestré par Airflow vers un data warehouse PostgreSQL, déploiement Docker Compose et monitoring ELK.",
      "projects.met.sub": "Pipeline météo temps réel & batch",
      "projects.met.desc": "Combine traitements en streaming et en batch sur des données météo, avec monitoring ELK et pratiques DevOps.",
      "projects.face.sub": "Identification biométrique des apprenants en temps réel",
      "projects.face.desc": "Système de reconnaissance faciale en temps réel basé sur des embeddings FaceNet et un classifieur SVM.",
      "projects.pbi.title": "Tableaux de bord KPI, Sénégal",
      "projects.pbi.sub": "Programmes d'agriculture résiliente & de santé communautaire",
      "projects.pbi.desc": "Suivi cible vs réalisé (taux de réalisation, écart à la cible, priorisation territoriale) avec modèles relationnels et mesures DAX, sur 8 régions et 8 districts sanitaires.",
      "projects.agri": "Agriculture", "projects.health": "Santé",
      "exp.title": "Parcours professionnel",
      "exp.cuber.date": "Mars 2026 – Aujourd'hui", "exp.cuber.role": "Data & AI Engineer",
      "exp.cuber.b1": "Conception et développement de pipelines ELT automatisés orchestrés par Apache Airflow ; modélisation et transformation des données avec SQL et dbt ; workloads conteneurisés avec Docker.",
      "exp.cuber.b2": "Conception de l'architecture d'ingestion cible (Airbyte → entrepôt → dbt → marts).",
      "exp.cuber.b3": "Développement et exploitation de CuberOne, l'assistant vocal IA en production (RAG, appels d'outils vers le CRM et le support, garde-fous, tests de non-régression).",
      "exp.cuber.b4": "Product analytics avec Amplitude : tracking des événements utilisateurs et métriques produit clés, avec les équipes Produit et Développement.",
      "exp.dscale.date": "Juin 2024 – Nov. 2024", "exp.dscale.role": "Développeur Web Fullstack (Remote)", "exp.dubai": "Dubaï",
      "exp.dscale.b1": "Participation à une plateforme de crowdfunding basée sur la blockchain ICP avec React et Next.js ; intégration de données via API et création de vues pour suivre les indicateurs définis avec l'équipe.",
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
