export const portfolioData = {
  profile: {
    name: "Sakshi Arya",
    role: "Frontend / React Developer",
    tagline: "I build interfaces that make complex ideas feel simple.",
    bio: "Frontend-focused engineer with strong foundations in full-stack JavaScript applications and modern AI retrieval systems. I care deeply about component architecture, crisp user ergonomics, and building reliable end-to-end software.",
    availability: "Available for Frontend & Full-Stack Roles",
    location: "New Delhi / NCR, India",
    email: "aryasakshi.dev@gmail.com",
    github: "https://github.com/aryasakshi13",
    linkedin: "https://www.linkedin.com/in/sakshi-arya/",
    resumeUrl: "/Sakshi_Arya_Resume.pdf",
    stats: [
      { label: "Core Focus", value: "React & TypeScript" },
      { label: "Systems", value: "Full-Stack Node.js" },
      { label: "AI Exploration", value: "Hybrid RAG & Qdrant" }
    ]
  },

  skills: {
    frontend: [
      "React 19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Monaco Editor",
      "State Management",
      "Component Design"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "API Middleware",
      "Error Handling"
    ],
    aiAndData: [
      "Retrieval-Augmented Generation (RAG)",
      "Qdrant Vector Database",
      "Vector Embeddings",
      "BM25 Keyword Search",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Reranking",
      "MongoDB",
      "Mongoose"
    ],
    toolsAndInfra: [
      "Git & GitHub",
      "Redis",
      "BullMQ (Queues & Workers)",
      "Postman",
      "Linux / Bash",
      "Vercel Deployment"
    ]
  },

  projects: [
    {
      id: "front-arena",
      title: "Front Arena",
      badge: "Developer Tooling",
      headline: "Browser-based coding playground with real-time compilation & live preview",
      description:
        "A zero-setup web playground designed for front-end developers to experiment with HTML, CSS, JavaScript, and TypeScript components directly inside the browser with immediate visual feedback.",
      problem:
        "Setting up local dev environments or lightweight sandboxes for component experimentation often involves heavy build tools and friction. Front Arena provides an instant, isolated coding sandbox inside the browser.",
      features: [
        "Integrated Monaco Editor with syntax highlighting, autocomplete, and code folding",
        "Secure iframe sandbox executing client code with real-time DOM synchronization",
        "Multi-language tab switching between HTML, CSS, JavaScript, and TypeScript",
        "Responsive side-by-side or stacked split panes with adjustable layouts",
        "Instant console execution logs and runtime error boundary captures"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Monaco Editor", "Vite"],
      liveDemo: "https://front-arena.vercel.app/",
      github: "https://github.com/aryasakshi13/FrontArena",
      category: "Frontend & Tooling",
      mockupType: "editor"
    },
    {
      id: "job-portal",
      title: "Full-Stack Job Portal",
      badge: "Full-Stack Platform",
      headline: "End-to-end recruitment platform with role-based auth & candidate tracking",
      description:
        "A full-stack MERN application connecting hiring teams and job seekers with dedicated recruiter workflows, applicant status tracking, and secure authentication.",
      problem:
        "Standard recruitment boards are often bloated or lack clean applicant state management. This application delivers streamlined hiring workflows with distinct candidate and recruiter portals.",
      features: [
        "Role-Based Access Control (RBAC) distinguishing Recruiters from Applicants",
        "Secure JWT authentication with bcrypt password hashing and HTTP headers",
        "Recruiter dashboard to publish openings, view applicants, and update hiring statuses",
        "Candidate portal to search, filter by role/location, and track live applications",
        "Normalized MongoDB data models for Users, Jobs, and Application submissions"
      ],
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
      liveDemo: "https://job-portal-sigma-rouge.vercel.app/",
      github: "https://github.com/aryasakshi13/Job_portal",
      category: "Full-Stack Web App",
      mockupType: "dashboard"
    },
    {
      id: "gita-rag",
      title: "Bhagavad Gita RAG",
      badge: "AI Engineering Case Study",
      headline: "Hybrid retrieval system combining vector semantic search & BM25 with RRF",
      description:
        "An advanced Retrieval-Augmented Generation (RAG) system engineered to accurately answer philosophical queries by fusing dense semantic embeddings with sparse lexical search and cross-encoder reranking.",
      problem:
        "Pure vector search misses specific Sanskrit terminology and exact verse numbers, while keyword search fails on semantic abstractions. Combining both through Reciprocal Rank Fusion (RRF) prevents hallucinations and produces precise verse citations.",
      features: [
        "Dual-retrieval pipeline: Qdrant dense vector search alongside sparse BM25 token matching",
        "Reciprocal Rank Fusion (RRF) algorithm to mathematically merge ranked candidate sets",
        "Cross-encoder reranking step scoring query-passage relevance before LLM synthesis",
        "Context-constrained prompt formatting enforcing verified chapter and verse citations",
        "Lightweight React search interface with citation inspection and confidence metrics"
      ],
      techStack: ["Node.js", "TypeScript", "React", "Qdrant", "BM25", "Embeddings", "RRF"],
      liveDemo: "https://github.com/aryasakshi13",
      github: "https://github.com/aryasakshi13",
      category: "AI & Retrieval Systems",
      mockupType: "rag-pipeline"
    },
    {
      id: "langchain-rag-workers",
      title: "LangChain RAG with Background Workers",
      badge: "Distributed Systems",
      headline: "Asynchronous document ingestion & query pipeline powered by Redis & BullMQ",
      description:
        "An enterprise-pattern retrieval architecture that isolates heavy document parsing and embedding generation into asynchronous worker processes, protecting the primary API event loop.",
      problem:
        "Generating embeddings for large PDF/text uploads inside standard HTTP request cycles blocks the Node.js event loop and triggers client timeouts. Delegating to BullMQ background workers ensures predictable low-latency APIs.",
      features: [
        "Asynchronous job queueing using Redis and BullMQ for document ingestion",
        "Dedicated worker processes handling chunking, tokenization, and vector generation",
        "Gemini text embeddings stored in Qdrant collections with optimized payload indexes",
        "Decoupled query queue enabling parallelized retrieval and LLM context streaming",
        "Retry logic with exponential backoff and failed-job dead-letter queues"
      ],
      techStack: ["TypeScript", "Node.js", "LangChain", "Qdrant", "Redis", "BullMQ", "Gemini API"],
      liveDemo: "https://github.com/aryasakshi13",
      github: "https://github.com/aryasakshi13",
      category: "Distributed AI Architecture",
      mockupType: "worker-queue"
    },
    {
      id: "dev-tinder",
      title: "DevTinder",
      badge: "Community & Networking",
      headline: "Developer networking platform matching engineers by tech stack and interests",
      description:
        "A social networking and peer connection platform designed specifically for software engineers to find open-source collaborators, hackathon partners, and mentors.",
      problem:
        "Traditional professional networks focus on corporate resumes rather than active tech stacks and shared coding interests. DevTinder connects engineers based on real complementary skillsets.",
      features: [
        "Developer profile cards with GitHub repositories and primary technology stacks",
        "Connection request pipeline with mutual match approval workflows",
        "Clean, interactive discovery feed with responsive swipe and card filtering",
        "Express REST backend with authenticated user sessions and feed algorithms"
      ],
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://github.com/aryasakshi13",
      github: "https://github.com/aryasakshi13",
      category: "Full-Stack Web App",
      mockupType: "social"
    }
  ],

  caseStudies: [
    {
      id: "hybrid-retrieval",
      title: "Hybrid Retrieval & Reciprocal Rank Fusion",
      subtitle: "Why Dense + Sparse Outperforms Naive Vector Search",
      tag: "RAG Architecture",
      summary:
        "In domain-specific RAG systems, relying exclusively on vector cosine similarity introduces blind spots for exact terminology, product codes, or proper nouns. A hybrid pipeline bridges semantic comprehension with lexical exactitude.",
      concepts: [
        {
          name: "Dense Semantic Search (Qdrant)",
          desc: "Transforms queries into high-dimensional embeddings to capture semantic intent, synonyms, and conceptual relationships."
        },
        {
          name: "Sparse Lexical Search (BM25)",
          desc: "Scores exact keyword matches and term frequency to catch specific proper nouns, Sanskrit verse keys, and technical terms."
        },
        {
          name: "Reciprocal Rank Fusion (RRF)",
          desc: "Combines disparate score scales without calibration by scoring items according to reciprocal rank position: RRF(d) = Σ 1 / (k + rank(d))."
        },
        {
          name: "Cross-Encoder Reranker",
          desc: "Evaluates the top-k fused candidates against the query simultaneously, computing deep cross-attention to filter irrelevant chunks before LLM ingestion."
        }
      ],
      flow: [
        { step: "01", label: "Query Ingestion", detail: "User submits query via API" },
        { step: "02", label: "Dual Retrieval", detail: "Parallel Vector Search (Dense) + BM25 (Sparse)" },
        { step: "03", label: "Rank Fusion (RRF)", detail: "Merge candidate lists using reciprocal rank scores" },
        { step: "04", label: "Cross-Encoder Rerank", detail: "Deep cross-attention scoring on top 10 candidates" },
        { step: "05", label: "Context Augmentation", detail: "Feed top 3 high-confidence chunks to LLM" }
      ]
    },
    {
      id: "background-processing",
      title: "Asynchronous Document Ingestion with Redis & BullMQ",
      subtitle: "Decoupling Heavy Computations from the Node.js Event Loop",
      tag: "Systems Design",
      summary:
        "Document parsing, semantic chunking, and calling external embedding APIs are latency-heavy operations. Delegating these tasks to background worker queues ensures that client HTTP requests remain sub-50ms.",
      concepts: [
        {
          name: "Producer / Consumer Decoupling",
          desc: "The HTTP API acknowledges file uploads instantly (202 Accepted) and enqueues a job payload into Redis without waiting for embedding generation."
        },
        {
          name: "Controlled Concurrency",
          desc: "Workers process jobs based on strict concurrency limits, preventing API rate-limit exhaustion on external embedding providers."
        },
        {
          name: "Fault Tolerance & Retries",
          desc: "BullMQ manages automatic exponential backoff retries on transient network failures and routes unrecoverable jobs to Dead Letter Queues (DLQ)."
        },
        {
          name: "Real-time Job Telemetry",
          desc: "Progress events update job statuses in Redis, allowing the frontend to poll or subscribe via WebSockets to ingestion progress."
        }
      ],
      flow: [
        { step: "01", label: "Client Upload", detail: "POST /documents receives file and enqueues job" },
        { step: "02", label: "Redis Queue", detail: "BullMQ queue holds document processing payloads" },
        { step: "03", label: "Worker Pool", detail: "Background worker pulls job, parses text, and chunks" },
        { step: "04", label: "Embedding API", detail: "Batch vector generation via embedding provider" },
        { step: "05", label: "Qdrant Upsert", detail: "Indexed vector payloads saved to collection" }
      ]
    }
  ],

  education: [
    {
      institution: "DCRUST Murthal",
      degree: "Bachelor of Technology — Computer Science and Engineering",
      period: "2022 – 2025",
      location: "Haryana, India",
      details: [
        "Core coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, and Computer Networks.",
        "Hands-on engineering projects focused on modern web architectures, React interfaces, and distributed systems.",
        "Active contributor to technical initiatives, coding workshops, and open-source explorations."
      ]
    },
    {
      institution: "BIT Mesra",
      degree: "Diploma in Computer Engineering",
      period: "2019 – 2022",
      location: "Ranchi, India",
      details: [
        "Rigorous foundation in computer architecture, C/C++ programming, object-oriented concepts, and software engineering methodologies.",
        "Graduated with distinction and developed strong analytical problem-solving habits."
      ]
    }
  ],

  journey: [
    {
      period: "2024 – Present",
      title: "Full-Stack Development & AI Retrieval Systems",
      detail:
        "Architecting full-stack JavaScript applications and investigating Retrieval-Augmented Generation (RAG) pipelines. Building hybrid search with Qdrant and BM25, and orchestrating background ingestion queues with BullMQ and Redis."
    },
    {
      period: "2023 – 2024",
      title: "Modern Frontend Engineering with React & TypeScript",
      detail:
        "Building interactive browser developer tools like Front Arena with Monaco Editor and responsive web applications with Tailwind CSS. Focused on clean state management, modular components, and seamless UX."
    },
    {
      period: "2019 – 2023",
      title: "Computer Science & Engineering Foundations",
      detail:
        "Comprehensive academic training in computer science fundamentals across BIT Mesra and DCRUST Murthal, establishing deep intuition for data structures, networks, relational databases, and algorithm efficiency."
    }
  ]
};
