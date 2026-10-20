import React, { useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

const allProjects = [
  {
    id: "gita-rag",
    number: "01",
    status: "Live",
    title: "gita-rag_",
    subheading: "Ask a question. Get a grounded answer.",
    description:
      "A retrieval-augmented AI app for the Bhagavad Gita. Keyword and vector search run together, results are merged, then reranked so the best passages reach the model.",
    tags: ["RAG", "Qdrant", "TypeScript"],
    filterTags: ["AI", "TypeScript"],
    liveLabel: "Live demo",
    liveUrl: "https://rag-practice-umber.vercel.app/",
    githubUrl: "https://github.com/aryasakshi13",
    quickLook: "query → BM25 + vector search → RRF merge → Cohere rerank → answer",
  },
  {
    id: "tailwind-extractor",
    number: "02",
    status: "Demo",
    title: "tailwind-extractor_",
    subheading: "Any website's styling, as a Tailwind config.",
    description:
      "A Chrome extension that inspects a page and extracts its colors, fonts and spacing into a usable Tailwind config, so you can recreate or study a design quickly.",
    tags: ["Chrome Extension", "JavaScript", "Tailwind"],
    filterTags: ["JavaScript"],
    liveLabel: "Watch demo",
    liveUrl:
      "https://player.cloudinary.com/embed/?cloud_name=de69seszp&public_id=Tailwind_upload",
    githubUrl: "https://github.com/aryasakshi13",
    quickLook: "open any site → click extension → copy tailwind.config.js",
  },
  {
    id: "front-arena",
    number: "03",
    status: "Project",
    title: "front-arena_",
    subheading: "Write code. See results instantly.",
    description:
      "A zero-setup web playground for front-end developers. Write HTML, CSS and JavaScript in a Monaco editor and see results compile live inside a sandboxed iframe — no installs, no config.",
    tags: ["React", "TypeScript", "Monaco"],
    filterTags: ["React", "TypeScript"],
    liveLabel: "Explore",
    liveUrl: "https://front-arena.vercel.app/",
    githubUrl: "https://github.com/aryasakshi13/FrontArena",
    quickLook: "write code in Monaco → live compile in sandbox iframe → instant preview",
  },
];

const FILTERS = ["All", "AI", "TypeScript", "JavaScript", "React"];

export default function AllProjectsPage({ onBackToIntro }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <div className="all-projects-page" id="all-projects">
      {/* Page Rail Header */}
      <div className="projects-page-rail section-rail">
        <p className="eyebrow">02 / Built in the open</p>
        <button
          type="button"
          className="back-link mono"
          onClick={onBackToIntro}
        >
          <ArrowLeft size={13} strokeWidth={2} />
          Back to intro
        </button>
      </div>

      {/* Page Title */}
      <div className="projects-page-hero section-rail">
        <h1 className="page-heading">
          The workbench.<br />
          <span className="page-heading-muted">Always in progress.</span>
        </h1>
        <p className="projects-page-sub">
          Practical projects across full stack and AI. Built to solve a
          problem, understand a system, or learn something new.
        </p>
      </div>

      {/* Filters + Count */}
      <div className="projects-filter-bar section-rail">
        <div className="filter-tags">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-tag ${activeFilter === f ? "filter-tag--active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="mono projects-count">
          {visible.length} project{visible.length !== 1 ? "s" : ""} / Built to learn
        </span>
      </div>

      {/* Project List */}
      <div className="project-features section-rail">
        {visible.map((project) => (
          <article key={project.id} className="project-feature">
            {/* Feature Header */}
            <div className="project-feature-header">
              <span className="mono project-feature-num">
                {project.number} / {project.status}
              </span>
              <h2 className="project-feature-title">{project.title}</h2>
              <p className="project-feature-sub">{project.subheading}</p>
            </div>

            {/* Feature Body */}
            <div className="project-feature-body">
              <p className="project-feature-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-feature-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="mono project-tag">{tag}</span>
                ))}
              </div>

              {/* Quick Look */}
              <div className="project-quick-look">
                <span className="mono quick-look-label">Quick look</span>
                <code className="quick-look-code mono">{project.quickLook}</code>
              </div>

              {/* Buttons */}
              <div className="project-feature-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  {project.liveLabel}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-ghost"
                >
                  Find on GitHub
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Open Source Closing Note */}
      <div className="open-source-note section-rail">
        <p>
          Open source is a conversation. Read the code, question a decision,
          or share a better approach.
        </p>
        <a
          href="https://github.com/aryasakshi13"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          View all on GitHub
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
