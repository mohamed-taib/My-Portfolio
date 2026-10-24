import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Search,
  Sparkles,
  X,
  Database,
  Layers3,
  Cpu,
  Workflow,
  GraduationCap,
  MapPin,
  Terminal,
  Filter,
  FileText,
  Send,
} from "lucide-react";

const projects = [
  {
    id: "djezzy-rag",
    title: "Djezzy Customer Support Assistant",
    category: "Generative AI",
    status: "Academic project",
    featured: true,
    year: "2025–2026",
    description:
      "A retrieval-augmented assistant that answers customer questions using information collected from Djezzy’s website.",
    problem:
      "Customers need clear answers about mobile offers and services without searching across many pages.",
    approach:
      "Collected and organized website information, indexed knowledge for retrieval with FAISS, and connected retrieved context to Qwen2.5-1.5B-Instruct to produce grounded answers.",
    outcome:
      "Implemented a RAG workflow covering multiple offer and service categories. The project explored how a compact language model can support a focused customer-service knowledge base.",
    stack: [
      "Python",
      "RAG",
      "FAISS",
      "Qwen2.5",
      "LLM fine-tuning",
      "Web scraping",
    ],
    icon: BrainCircuit,
    color: "blue",
    links: [],
  },
  {
    id: "systematic-generalization",
    title: "Systematic Generalization in LLMs",
    category: "Research",
    status: "Final-year project",
    featured: true,
    year: "2025–2026",
    description:
      "Compared sequence-to-sequence and Transformer models on the SCAN add_prim_jump task to study generalization to unseen instruction combinations.",
    problem:
      "Models can perform well on familiar training examples but struggle to recombine learned concepts in new ways.",
    approach:
      "Evaluated LSTM Seq2Seq with Bahdanau attention, T5-Small, and GPT-2 Small. Also explored REINFORCE and PPO reinforcement-learning approaches.",
    outcome:
      "Observed a gap between training performance and unseen-combination generalization; GPT-2 performed better than T5-Small and LSTM in the recorded experiments, but true systematic generalization remained unresolved.",
    stack: [
      "PyTorch",
      "Hugging Face",
      "LSTM",
      "T5",
      "GPT-2",
      "SCAN",
      "REINFORCE",
      "PPO",
    ],
    icon: Layers3,
    color: "violet",
  },
  {
    id: "business-analyst",
    title: "AI Business Analyst",
    category: "Data & Analytics",
    status: "Built application",
    featured: true,
    year: "2026",
    description:
      "A Streamlit app that profiles CSV/XLSX files and lets users ask questions about business data in natural language.",
    problem:
      "Business users often need insights from spreadsheets without writing code or complex queries.",
    approach:
      "Built a workflow for file loading, schema profiling, LLM-assisted tool selection, answer generation, and chart creation using a local Ollama model.",
    outcome:
      "A working prototype for exploring tabular data through a conversational interface. Tested with a sample revenue dataset.",
    stack: [
      "Python",
      "Streamlit",
      "Pandas",
      "Ollama",
      "Qwen2.5-Coder",
      "Data visualization",
    ],
    icon: Database,
    color: "cyan",
    links: [],
  },
  {
    id: "text-to-sql",
    title: "Multi-Agent Text-to-SQL Analyst",
    category: "Generative AI",
    status: "Prototype / exploration",
    featured: true,
    year: "2026",
    description:
      "An AI workflow concept for turning plain-language questions into SQL queries and readable analysis.",
    problem:
      "Getting useful answers from relational databases can require SQL knowledge.",
    approach:
      "Planned agent stages for interpreting questions, generating SQL, checking queries, handling errors, and presenting results with visualizations.",
    outcome:
      "A reusable architecture direction for natural-language database analytics. Update this entry with implementation details as the system matures.",
    stack: ["Python", "SQL", "LangGraph", "LLMs", "Ollama", "Plotly"],
    icon: Workflow,
    color: "blue",
    links: [],
  },
  {
    id: "textgcn",
    title: "Arabic Sentiment Analysis with TextGCN",
    category: "NLP",
    status: "Research project",
    featured: true,
    year: "2025",
    description:
      "An Arabic text-classification experiment that predicts one of three sentiment classes using a graph-based NLP approach.",
    problem:
      "Text classification needs to capture both document meaning and relationships between words and documents.",
    approach:
      "Explored a TextGCN-style graph representation and graph neural network learning for Arabic sentiment data.",
    outcome:
      "A graph-based Arabic NLP project focused on three-class sentiment classification.",
    stack: [
      "Python",
      "PyTorch",
      "TextGCN",
      "Arabic NLP",
      "Graph Neural Networks",
    ],
    icon: BrainCircuit,
    color: "violet",
    links: [
      "https://arabic-sentiment-classification-with-graph-neural.streamlit.app/",
      "https://www.kaggle.com/code/mohamedtaib/arabic-sentiment-classification-with-graph-neural",
    ],
  },
  {
    id: "burned-area",
    title: "UAV Burned-Area Estimation",
    category: "Computer Vision",
    status: "Built application",
    featured: true,
    year: "2025",
    description:
      "A Streamlit tool using trained deep-learning models to analyze aerial imagery and estimate burned areas.",
    problem:
      "Assessing fire-affected land from aerial images can be time-consuming.",
    approach:
      "Integrated six trained .h5 models into an application for burned-area analysis and result presentation.",
    outcome:
      "One recorded analysis estimated 4,016.76 hectares, representing 43.58% of the analyzed example. Results depend on the input and model.",
    stack: [
      "Python",
      "Computer Vision",
      "TensorFlow/Keras",
      "Streamlit",
      "Aerial imagery",
    ],
    icon: Cpu,
    color: "orange",
    links: [],
  },
  {
    id: "arabic-tts",
    title: "Arabic Text-to-Speech with SpeechT5",
    category: "NLP",
    status: "Model experiment",
    featured: false,
    year: "2025",
    description:
      "An experiment with generating Arabic speech from text using SpeechT5 and speaker embeddings.",
    problem:
      "Text-to-speech can make written content more accessible and useful in voice-based applications.",
    approach:
      "Worked with a pretrained SpeechT5 workflow and speaker embeddings in a Kaggle environment.",
    outcome:
      "Explored an Arabic speech-synthesis pipeline; add audio samples and repository details when ready.",
    stack: [
      "Python",
      "SpeechT5",
      "Hugging Face",
      "Speaker embeddings",
      "Kaggle",
    ],
    icon: Terminal,
    color: "cyan",
    links: [
      "https://www.kaggle.com/code/mohamedtaib/arabic-tts-with-speaker-embeddings-speecht5",
    ],
  },
  {
    id: "customer-support-automation",
    title: "Business Messaging AI Automation",
    category: "Generative AI",
    status: "Solution concept",
    featured: false,
    year: "2026",
    description:
      "A reusable AI support workflow concept for answering common customer questions across messaging and web channels.",
    problem:
      "Small businesses spend time repeatedly answering questions about products, availability, prices, and policies.",
    approach:
      "Explored local LLMs, workflow automation, messaging API integration, knowledge retrieval, and human handoff.",
    outcome:
      "A proposed modular solution for small-business customer support. Treat as a concept until deployment details are added.",
    stack: [
      "n8n",
      "Ollama",
      "Qwen2.5-Coder",
      "FastAPI",
      "Evolution API",
      "RAG",
    ],
    icon: Workflow,
    color: "blue",
    links: [],
  },
];

const categories = [
  "All projects",
  "Generative AI",
  "NLP",
  "Computer Vision",
  "Data & Analytics",
  "Research",
];

const skills = [
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Model Evaluation",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
    icon: BrainCircuit,
  },
  {
    title: "LLMs & NLP",
    items: [
      "RAG",
      "Prompt Engineering",
      "Hugging Face",
      "FAISS",
      "Text Classification",
      "Arabic NLP",
    ],
    icon: Sparkles,
  },
  {
    title: "Data & Development",
    items: ["Python", "SQL", "Pandas", "Streamlit", "FastAPI", "REST APIs"],
    icon: Code2,
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Ollama", "n8n", "VS Code", "Jupyter / Kaggle"],
    icon: Terminal,
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to homepage">
        <span className="brand-mark">
          BMT<span>.</span>
        </span>
        <span className="brand-name">
          BENACHA MOHAMED ETAIB<span>AI ENGINEER & DEVELOPER</span>
        </span>
      </a>
      <button
        className="mobile-menu"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;
  return (
    <article className="project-card">
      <div className={`project-visual ${project.color}`}>
        <div className="visual-grid"></div>
        <span className="project-number">
          {project.id.toUpperCase().replaceAll("-", " ").slice(0, 18)}
        </span>
        <div className="visual-icon">
          <Icon size={29} strokeWidth={1.5} />
        </div>
        <span className="visual-orbit orbit-one"></span>
        <span className="visual-orbit orbit-two"></span>
        <span className="visual-label">{project.category}</span>
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.year}</span>
          <span className="meta-dot"></span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.slice(0, 4).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="tag more-tag">+{project.stack.length - 4}</span>
          )}
        </div>
        <button className="text-link" onClick={() => onOpen(project)}>
          View case study <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <div className={`modal-banner ${project.color}`}>
          <Icon size={34} />
          <span>
            {project.category} / {project.year}
          </span>
        </div>
        <div className="modal-content">
          <div className="eyebrow">{project.status}</div>
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-intro">{project.description}</p>
          <div className="case-section">
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="case-section">
            <h3>Approach</h3>
            <p>{project.approach}</p>
          </div>
          <div className="case-section">
            <h3>Outcome & notes</h3>
            <p>{project.outcome}</p>
          </div>
          <div className="case-section">
            <h3>Technology stack</h3>
            <div className="tag-row modal-tags">
              {project.stack.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.links?.length > 0 && (
            <div className="modal-note">
              <FileText size={17} />

              <div className="project-links">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    className="button button-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All projects");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesCategory =
          activeCategory === "All projects" ||
          project.category === activeCategory;
        const query = search.trim().toLowerCase();
        const matchesSearch =
          !query ||
          [
            project.title,
            project.description,
            project.category,
            project.status,
            ...project.stack,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query);
        return (
          matchesCategory &&
          matchesSearch &&
          (!featuredOnly || project.featured)
        );
      }),
    [activeCategory, search, featuredOnly],
  );

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse"></span> OPEN TO AI & SOFTWARE
              OPPORTUNITIES
            </div>
            <h1>
              Building <span className="gradient-text">intelligent</span>
              <br />
              solutions for the
              <br />
              <span className="outline-text">real world.</span>
            </h1>
            <p className="hero-lead">
              I’m Benaicha Mohamed Etaib — an AI-focused developer working
              across machine learning, LLM applications, and data-driven
              software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/mohamed-taib"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-etaib-benaicha-757600254/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <span>
                <MapPin size={16} /> Algeria · Open to remote
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract AI network illustration"
          >
            <div className="art-glow"></div>
            <div className="art-grid"></div>
            <div className="orbit-ring ring-a"></div>
            <div className="orbit-ring ring-b"></div>
            <div className="orbit-ring ring-c"></div>
            <div className="core">
              <BrainCircuit size={64} strokeWidth={1.1} />
              <span>AI / ML</span>
            </div>
            <div className="float-card float-card-top">
              <span className="mini-icon">
                <Code2 size={16} />
              </span>
              <span>
                <b>Applied AI</b>
                <small>From models to products</small>
              </span>
              <span className="status-dot"></span>
            </div>
            <div className="float-card float-card-bottom">
              <span className="mini-icon purple">
                <Database size={16} />
              </span>
              <span>
                <b>Data-driven</b>
                <small>Insights that matter</small>
              </span>
              <span className="tiny-chart">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
            <span className="node node-1"></span>
            <span className="node node-2"></span>
            <span className="node node-3"></span>
            <span className="node node-4"></span>
            <div className="art-caption">
              <span className="caption-line"></span> INTELLIGENCE, ENGINEERED
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-mouse">
              <i></i>
            </span>{" "}
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </section>

        <section className="stats-strip">
          <div className="stats-inner">
            <div>
              <strong>
                AI<span> / </span>ML
              </strong>
              <small>CORE FOCUS</small>
            </div>
            <div>
              <strong>
                LLM<span> + </span>RAG
              </strong>
              <small>GENERATIVE AI</small>
            </div>
            <div>
              <strong>
                DATA<span> → </span>INSIGHT
              </strong>
              <small>ANALYTICS</small>
            </div>
            <div>
              <strong>
                BUILD<span> . </span>LEARN
              </strong>
              <small>ALWAYS ITERATING</small>
            </div>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span>01</span> / ABOUT ME
              </div>
              <h2>
                Curious by nature.
                <br />
                <span className="muted-heading">Engineer by practice.</span>
              </h2>
            </div>
            <p>
              I enjoy turning complex technical ideas into useful tools — from
              experimenting with language models to building practical data
              applications.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-main panel">
              <div className="about-mark">
                <span>M</span>
                <i></i>
              </div>
              <div>
                <h3>A little about me</h3>
                <p>
                  My work sits at the intersection of artificial intelligence,
                  software development, and data analysis. I’ve explored NLP,
                  computer vision, retrieval-augmented generation, and model
                  evaluation, while also bringing a practical business
                  perspective from retail operations.
                </p>
                <p>
                  I value clear problem-solving, continuous learning, and
                  building systems that people can actually use.
                </p>
              </div>
              <div className="about-foot">
                <span>
                  <GraduationCap size={17} /> Master’s studies in Artificial
                  Intelligence
                </span>
                <span>
                  <MapPin size={17} /> Blida / Médéa, Algeria
                </span>
              </div>
            </div>
            <div className="about-side">
              <div className="mini-panel">
                <span className="mini-panel-icon">
                  <BrainCircuit size={20} />
                </span>
                <h3>Research mindset</h3>
                <p>
                  Experiment, evaluate, learn from results — not just accuracy
                  scores.
                </p>
              </div>
              <div className="mini-panel">
                <span className="mini-panel-icon">
                  <Code2 size={20} />
                </span>
                <h3>Builder mentality</h3>
                <p>
                  Prototype practical applications with modern and open-source
                  tools.
                </p>
              </div>
              <div className="mini-panel">
                <span className="mini-panel-icon">
                  <BriefcaseBusiness size={20} />
                </span>
                <h3>Business perspective</h3>
                <p>Connect technical work to real workflows and user needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading project-heading">
            <div>
              <div className="eyebrow">
                <span>02</span> / SELECTED WORK
              </div>
              <h2>
                Projects that turn
                <br />
                <span className="muted-heading">ideas into systems.</span>
              </h2>
            </div>
            <p>
              A selection of AI research, data applications, and software
              concepts. Open any case study for more context and implementation
              notes.
            </p>
          </div>
          <div className="project-tools">
            <label className="search-box">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, tools, technologies..."
                aria-label="Search projects"
              />
              {search && (
                <button aria-label="Clear search" onClick={() => setSearch("")}>
                  <X size={15} />
                </button>
              )}
            </label>
            <button
              className={
                featuredOnly ? "featured-toggle active" : "featured-toggle"
              }
              onClick={() => setFeaturedOnly(!featuredOnly)}
            >
              <Filter size={15} />
              {featuredOnly ? "Featured only" : "All projects"}
              {featuredOnly && <Check size={14} />}
            </button>
          </div>
          <div
            className="filter-row"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter-chip selected"
                    : "filter-chip"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="results-line">
            <span>
              {filteredProjects.length} PROJECT
              {filteredProjects.length === 1 ? "" : "S"}
            </span>
            <span>
              Click a card to explore the case study <ArrowDown size={13} />
            </span>
          </div>
          {filteredProjects.length ? (
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={25} />
              <h3>No matching projects</h3>
              <p>Try another keyword or clear your filters.</p>
              <button
                className="button button-secondary"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All projects");
                  setFeaturedOnly(false);
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span>03</span> / TOOLKIT
                </div>
                <h2>
                  Tools for the
                  <br />
                  <span className="muted-heading">problems I solve.</span>
                </h2>
              </div>
              <p>
                A practical toolkit across AI experimentation, application
                development, data work, and open-source tooling.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map(({ title, items, icon: Icon }, index) => (
                <div className="skill-card" key={title}>
                  <div className="skill-top">
                    <span className="skill-icon">
                      <Icon size={21} />
                    </span>
                    <span className="skill-index">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span>04</span> / EXPERIENCE & EDUCATION
              </div>
              <h2>
                Learning, building,
                <br />
                <span className="muted-heading">and delivering.</span>
              </h2>
            </div>
            <p>
              My path combines AI-focused study, hands-on experimentation, and
              practical experience in a customer-facing business environment.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <BriefcaseBusiness size={17} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  2025 — PRESENT · PROFESSIONAL EXPERIENCE
                </div>
                <h3>Department Supervisor / Chef de Rayon</h3>
                <div className="timeline-place">Le Printemps Mall</div>
                <p>
                  Coordinate day-to-day department operations, support the sales
                  team, plan merchandising, monitor product performance, and
                  work with sales and stock information.
                </p>
                <div className="tag-row">
                  <span className="tag">Sales KPIs</span>
                  <span className="tag">Operations</span>
                  <span className="tag">Product analysis</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <Cpu size={17} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">JUL — AUG 2025 · INTERNSHIP</div>
                <h3>AI Engineering Intern</h3>
                <div className="timeline-place">
                  INTAJ Mouhtawayat · Birkhadem
                </div>
                <p>
                  Worked with text and image data through preprocessing, ML/DL
                  experimentation, NLP and computer-vision tasks, and model
                  evaluation.
                </p>
                <div className="tag-row">
                  <span className="tag">NLP</span>
                  <span className="tag">Computer Vision</span>
                  <span className="tag">Model evaluation</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <GraduationCap size={17} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2024 — PRESENT · EDUCATION</div>
                <h3>Master’s studies in Artificial Intelligence</h3>
                <div className="timeline-place">
                  Université Saad Dahlab Blida 1
                </div>
                <p>
                  Focused on AI, machine learning, deep learning, and
                  research-oriented project work. Update this entry with your
                  exact current degree status before publishing.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <Sparkles size={17} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">ACHIEVEMENTS</div>
                <h3>Competitions & continuous learning</h3>
                <p>
                  2nd place in DataHack and 3rd place in the ITC AI Challenge.
                  Also participated in AI camps, DataCamp challenges, Decamp
                  activities, and CTF challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-orb orb-left"></div>
          <div className="cta-orb orb-right"></div>
          <div className="section-wrap cta-inner">
            <div className="eyebrow">
              <span>05</span> / CONTACT
            </div>
            <h2>
              Have a problem
              <br />
              worth <span className="gradient-text">solving?</span>
            </h2>
            <p>
              I’m interested in AI engineering, machine learning, data-focused
              roles, and practical software projects. Let’s connect.
            </p>
            <div className="cta-actions">
              <a
                className="button button-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=medtaib.ai@gmail.com&su=Portfolio%20inquiry"
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={17} /> Email me <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/mohamed-etaib-benaicha-757600254/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">
              M<span>.</span>
            </span>
            <span className="brand-name">
              MOHAMED ETAIB<span>AI ENGINEER & DEVELOPER</span>
            </span>
          </a>
          <span className="footer-copy">
            Designed & built with curiosity. © {new Date().getFullYear()}
          </span>
          <div className="footer-socials">
            <a
              href="https://github.com/mohamed-taib"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-etaib-benaicha-757600254/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
