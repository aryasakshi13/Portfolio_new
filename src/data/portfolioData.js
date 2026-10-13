// src/data/portfolioData.js
// All portfolio content lives here.

export const PROFILE = {
  name: "Sakshi Arya",
  role: "Full Stack Developer",
  company: "Namami Infotech",
  location: "Delhi, India",
  phone: "+91 7319652323",

  heroLine1: "Building Full-Stack Products &",
  heroLine2: "Retrieval-Powered AI",
  heroSubtitle:
    "Full Stack Developer based in Delhi. I build clean React interfaces, reliable Node.js backends, and AI search systems with hybrid retrieval, LangChain, and LangGraph.",
  tagline: "React and Node.js on the surface, hybrid retrieval and RAG underneath.",

  email: "sakshiarya884@gmail.com",
  github: "https://github.com/aryasakshi13",
  linkedin: "https://linkedin.com/in/aryasakshi13",
  resume: "/Sakshi_Arya_Resume.pdf", // saved in /public
};

export const HIGHLIGHTS = [
  { value: "2025", label: "B.Tech in CSE, DCRUST" },
  { value: "1+ yr", label: "Full-time & internship experience since Feb 2025" },
  { value: "Live", label: "Production RAG app deployed on Vercel" },
];

export const SERVICES = [
  {
    title: "Frontend with React",
    text: "Responsive, accessible interfaces built with React, Redux Toolkit and TypeScript, with input debouncing and performance optimization.",
  },
  {
    title: "Backend and APIs",
    text: "REST APIs and services in Node.js and Express, backed by MongoDB or SQL, with JWT authentication, custom middleware, and rate limiting.",
  },
  {
    title: "AI Search, LangChain & RAG",
    text: "Retrieval pipelines using LangChain, LangGraph, Qdrant vector search, and BM25 lexical matching with Reciprocal Rank Fusion and Cohere reranking.",
  },
];

// Short, specific, first person. No buzzwords.
export const ABOUT = [
  "I'm Sakshi, a full stack developer from Delhi. I finished my B.Tech in Computer Science at DCRUST in 2025, and I've been building software professionally since February that year.",
  "I started on the backend as a Software Developer Intern at Rifcare Tech building Node.js & Express APIs, learned to build production React interfaces as a React Intern at Webmaska, and now develop full-stack features across the stack at Namami Infotech.",
  "Lately I'm most interested in making AI features reliable using LangChain, LangGraph, and hybrid RAG. In my Bhagavad Gita RAG app I focused on the part most demos skip: retrieval quality. Hybrid search, rank fusion, and reranking decide whether the model ever sees the right passage, so that's where I put the effort.",
];

export const SKILLS = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL"] },
  { group: "Frontend", items: ["React.js", "Redux Toolkit", "Tailwind CSS", "HTML5 & CSS3"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  {
    group: "AI and Retrieval",
    items: [
      "RAG pipelines",
      "LangChain",
      "LangGraph",
      "Hybrid search",
      "Qdrant",
      "BM25",
      "Reciprocal Rank Fusion",
      "Cohere reranking",
      "Embeddings (Jina, Gemini)",
    ],
  },
  { group: "Databases & Tools", items: ["MongoDB", "SQL", "Git", "GitHub", "Vercel"] },
];

export const EXPERIENCE = [
  {
    period: "Jun 2026 to Present",
    role: "Full Stack Developer",
    company: "Namami Infotech Pvt. Ltd.",
    points: [
      "Develop and maintain full-stack features using React, Node.js/Express and MongoDB, from UI to REST API and database.",
      "Build and integrate REST APIs with authentication and validation, and collaborate with the team on code reviews and releases.",
      "Optimize frontend performance and fix production bugs to keep the application stable and responsive.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    period: "Jul 2025 to Jan 2026",
    role: "React Intern",
    company: "Webmaska",
    points: [
      "Built production-ready React components from design specs, fully responsive from 320px to 1440px.",
      "Used React memoization hooks to remove unnecessary re-renders, improving page load speed by 30%.",
    ],
    tags: ["React", "JavaScript", "Responsive Design"],
  },
  {
    period: "Feb 2025 to Jul 2025",
    role: "Software Developer Intern",
    company: "Rifcare Tech Pvt. Ltd.",
    points: [
      "Developed scalable Node.js/Express REST API modules for internal product features.",
      "Wrote middleware for authentication, request validation and endpoint rate limiting; reviewed team code to keep production stable.",
    ],
    tags: ["Node.js", "Express", "REST APIs", "Middleware"],
  },
];

export const PIPELINE = [
  { step: "Question", text: "A question comes in from the React app and reaches the Node.js and TypeScript API." },
  { step: "Embed", text: "The text is turned into vectors with Jina and Google Gemini embeddings, used at different stages." },
  { step: "Search", text: "Qdrant vector search finds passages with similar meaning, while BM25 catches exact keyword matches." },
  { step: "Fuse", text: "Reciprocal Rank Fusion merges the keyword and vector rankings into a single list." },
  { step: "Rerank", text: "Cohere reranking reorders the top candidates by how well they answer the question." },
  { step: "Answer", text: "The best passages ground the final answer shown back in the app." },
];

export const PROJECTS = [
  {
    name: "Bhagavad Gita RAG AI",
    featured: true,
    pipeline: true,
    summary: "Ask a question about the Gita and get an answer grounded in the actual text.",
    problem:
      "Keyword search misses meaning, vector search misses exact terms, and an AI model that sees the wrong passages gives confident but wrong answers.",
    built:
      "An advanced Retrieval-Augmented Generation app with a Node.js/TypeScript API and React frontend to answer questions grounded in the Bhagavad Gita.",
    decisions: [
      {
        title: "Hybrid search",
        text: "BM25 handles exact words and names, Qdrant handles meaning. Together they cover the cases where either one alone fails.",
      },
      {
        title: "Reciprocal Rank Fusion",
        text: "Merges the two ranked lists by position, so there is no need to normalise scores that live on different scales.",
      },
      {
        title: "Cohere reranking",
        text: "Re-scores the top candidates against the actual question, so the model sees the sharpest passages.",
      },
      {
        title: "Two embedding models",
        text: "Evaluated Jina and Google Gemini embeddings at different stages of the pipeline to improve retrieval quality.",
      },
    ],
    tags: ["React", "Node.js", "TypeScript", "Qdrant", "BM25", "Cohere", "Gemini", "Jina"],
    image: "/projects/gita-rag.png",
    live: "https://rag-practice-umber.vercel.app/",
    code: "https://github.com/aryasakshi13/Rag_practice",
  },
  {
    name: "Tailwind Config Extractor",
    featured: false,
    summary: "A Chrome extension and web app that reveals the Tailwind setup behind a website.",
    problem:
      "Finding out which colours, spacing and fonts a Tailwind site uses means digging through DevTools one class at a time.",
    built:
      "Built a browser extension and web app that inspects a live page and generates a custom tailwind.config.js from its CSS. Created backend APIs to extract design tokens into reusable JSON schemas with JWT cross-origin auth and MongoDB history storage.",
    decisions: [
      {
        title: "AST CSS Extraction",
        text: "Parses computed styles into structured design tokens (colors, fonts, font sizes, spacing) formatted for tailwind.config.js.",
      },
      {
        title: "History Storage",
        text: "Implemented JWT cross-origin authentication and MongoDB storage so users can save and revisit extraction history.",
      },
    ],
    tags: ["Node.js", "Express", "MongoDB", "Chrome Extension", "Tailwind CSS"],
    video: "https://player.cloudinary.com/embed/?cloud_name=de69seszp&public_id=Tailwind_upload",
    poster: "https://res.cloudinary.com/de69seszp/video/upload/so_3,w_1200/Tailwind_upload.jpg",
    code: "https://github.com/aryasakshi13/Tailwind_Config_Extracter",
  },
  {
    name: "Front Arena",
    draft: false,
    featured: false,
    summary: "A browser-based coding playground to write and run HTML, CSS and JS in real time.",
    problem:
      "Testing frontend ideas often requires full local project scaffolding and dependency setups that slow down prototyping.",
    built:
      "A browser-based playground to write and run HTML, CSS and JS in real time inside an isolated sandbox. Integrated Monaco Editor with input debouncing, reducing event-loop latency by 40% during fast typing, and designed a multi-file workspace with dynamic file-tree state management.",
    decisions: [
      {
        title: "Monaco Editor Integration",
        text: "Integrated Monaco Editor with debounced input, reducing event-loop latency by 40% during fast typing.",
      },
      {
        title: "Multi-File Workspace",
        text: "Designed a multi-file workspace with dynamic file-tree state management, similar to a real IDE.",
      },
    ],
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Monaco Editor"],
    image: "/projects/front-arena.png",
    live: "https://front-arena.vercel.app/",
    code: "https://github.com/aryasakshi13/FrontArena",
  },
];

export const EDUCATION = [
  { period: "2022 to 2025", title: "B.Tech, Computer Science and Engineering", place: "DCRUST" },
  { period: "2019 to 2022", title: "Diploma, Computer Science and Engineering", place: "BIT" },
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "contact", label: "Contact" },
];
