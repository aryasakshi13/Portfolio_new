// src/data/portfolioData.js
// All portfolio content lives here. Items marked TODO need your real details.

export const PROFILE = {
  name: "Sakshi Arya",
  role: "Full Stack Developer",
  company: "Namami Infotech",
  location: "Delhi, India",

  heroLine1: "Building Full-Stack Products &",
  heroLine2: "Retrieval-Powered AI",
  heroSubtitle:
    "Full Stack Developer based in Delhi. I build clean React interfaces, reliable Node.js backends, and AI search systems that find the right answer instead of just a plausible one.",
  tagline: "React and Node.js on the surface, hybrid retrieval and RAG underneath.",

  email: "aryasakshi13@gmail.com",
  github: "https://github.com/aryasakshi13",
  linkedin: "https://linkedin.com/in/aryasakshi13",
  resume: "/Sakshi_Arya_Resume.pdf", // put the PDF inside /public
};

export const HIGHLIGHTS = [
  { value: "2025", label: "B.Tech in CSE, DCRUST" },
  { value: "3 roles", label: "Backend, frontend and full stack since Feb 2025" },
  { value: "Live", label: "Hybrid RAG app deployed on Vercel" },
];

export const SERVICES = [
  {
    title: "Frontend with React",
    text: "Responsive, accessible interfaces built with React, Redux and TypeScript, with attention to how they feel as well as how they look.",
  },
  {
    title: "Backend and APIs",
    text: "REST APIs and services in Node.js and Express, backed by MongoDB or SQL, designed to be simple to consume and easy to maintain.",
  },
  {
    title: "AI search and RAG",
    text: "Retrieval pipelines that combine keyword and vector search, then rerank the results, so AI answers are grounded in the right source text.",
  },
];

// Short, specific, first person. No buzzwords.
export const ABOUT = [
  "I'm Sakshi, a full stack developer from Delhi. I finished my B.Tech in Computer Science at DCRUST in 2025, and I've been building software professionally since February that year.",
  "I started on the backend with Node.js and Express at Rifcare Tech, learned to care about interfaces as a React intern at Webmaska, and now work across the whole product at Namami Infotech.",
  "Lately I'm most interested in making AI features reliable. In my Bhagavad Gita RAG app I focused on the part most demos skip: retrieval. Hybrid search, rank fusion and reranking decide whether the model ever sees the right passage, so that's where I put the effort.",
];

export const SKILLS = [
  { group: "Frontend", items: ["React", "Redux", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Java", "REST APIs"] },
  { group: "Databases", items: ["MongoDB", "SQL", "Qdrant (vector DB)"] },
  {
    group: "AI and Retrieval",
    items: ["RAG pipelines", "Hybrid search", "BM25", "Reciprocal Rank Fusion", "Cohere reranking", "Embeddings (Jina, Gemini)"],
  },
];

// TODO: replace the bullets with the exact lines from your resume
export const EXPERIENCE = [
  {
    period: "Jun 2026 to Present",
    role: "Full Stack Developer",
    company: "Namami Infotech Pvt. Ltd.",
    points: [
      "Build and ship features end to end, from React interfaces to Node.js services and databases.",
      "Design APIs and data models and connect them cleanly to the front end.",
      "Work with the team from requirements through to release.",
    ],
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    period: "Jul 2025 to Jan 2026",
    role: "React Intern",
    company: "Webmaska",
    points: [
      "Built responsive, reusable React components and pages.",
      "Connected the interface to backend APIs and handled loading and error states.",
      "Learned production workflows: code reviews, version control and shipping on a team.",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    period: "Feb 2025 to Jul 2025",
    role: "Software Developer",
    company: "Rifcare Tech Pvt. Ltd.",
    points: [
      "Developed backend endpoints and services with Node.js and Express.",
      "Worked with databases and supported API integration with the front end.",
    ],
    tags: ["Node.js", "Express"],
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

/*
  Project media:
  - image:  screenshot saved in /public/projects/ (falls back to a styled placeholder if missing)
  - video:  Cloudinary embed URL, plays inline when the visitor clicks the thumbnail
  - poster: thumbnail for the video (Cloudinary generates a frame from the video)
*/
export const PROJECTS = [
  {
    name: "Bhagavad Gita RAG AI",
    featured: true,
    pipeline: true,
    summary: "Ask a question about the Gita and get an answer grounded in the actual text.",
    problem:
      "Keyword search misses meaning, vector search misses exact terms, and an AI model that sees the wrong passages gives confident but wrong answers.",
    built:
      "A React app and a Node.js and TypeScript API that run every question through a hybrid retrieval pipeline before an answer is written. The app is live on Vercel.",
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
        text: "Jina and Google Gemini embeddings are used at different stages of the pipeline.",
      },
    ],
    tags: ["React", "Node.js", "TypeScript", "Qdrant", "BM25", "Cohere", "Gemini"],
    image: "/projects/gita-rag.png",
    live: "https://rag-practice-umber.vercel.app/",
    code: "https://github.com/aryasakshi13",
  },
  {
    name: "Tailwind Config Extractor",
    featured: false,
    summary: "A Chrome extension that reveals the Tailwind setup behind a website.",
    problem:
      "Finding out which colours, spacing and fonts a Tailwind site uses means digging through DevTools one class at a time.",
    built:
      "A Chrome extension that reads a page and extracts its Tailwind configuration, so the design tokens can be copied straight into your own project.",
    decisions: [],
    tags: ["JavaScript", "Chrome extension", "Tailwind CSS"],
    video: "https://player.cloudinary.com/embed/?cloud_name=de69seszp&public_id=Tailwind_upload",
    poster: "https://res.cloudinary.com/de69seszp/video/upload/so_3,w_1200/Tailwind_upload.jpg",
    code: "https://github.com/aryasakshi13",
  },
  {
    name: "Front Arena",
    draft: false,
    featured: false,
    summary: "A browser-based coding playground with live preview.",
    problem:
      "Testing frontend ideas often requires full local project scaffolding and dependency setups that slow down prototyping.",
    built:
      "A React playground with Monaco Editor and real-time execution in a sandboxed iframe, supporting multi-tab file editing.",
    decisions: [],
    tags: ["React", "TypeScript", "Monaco Editor", "Tailwind CSS"],
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
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
