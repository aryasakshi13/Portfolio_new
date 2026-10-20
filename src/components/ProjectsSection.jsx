import React from "react";
import { ArrowUpRight, ScanLine, Globe } from "lucide-react";


const projects = [
  {
    id: "gita-rag",
    title: "gita-rag",
    caption: "Ask. Retrieve. Answer.",
    corner: "01 / AI",
    Icon: ScanLine,
    language: "TypeScript",
    langClass: "ts-dot",
    description:
      "A RAG app that answers questions from the Bhagavad Gita. Hybrid search, reranking and grounded answers.",
  },
  {
    id: "tailwind-extractor",
    title: "tailwind-extractor",
    caption: "See a site. Get the config.",
    corner: "02 / TOOL",
    Icon: Globe,
    language: "JavaScript",
    langClass: "js-dot",
    description:
      "A Chrome extension that pulls a website's design tokens into a ready-to-use Tailwind config.",
  },
];

export default function ProjectsSection({ onSelectProject, onAllProjects }) {
  return (
    <section className="projects-section section-rail" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / BUILT IN THE OPEN</p>
          <h2>
            Less talk. More commits<span className="violet">.</span>
          </h2>
        </div>
        <button
          type="button"
          className="text-link"
          onClick={onAllProjects}
        >
          All projects
          <ArrowUpRight size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          const IconComponent = project.Icon;
          return (
            <div key={project.id} className="project-card">
              <div className="project-card-art">
                <div className="project-art-grid" />
                <IconComponent size={68} strokeWidth={0.9} />
                <span className="project-art-caption mono">{project.caption}</span>
                <span className="project-art-corner mono">{project.corner}</span>
              </div>

              <div className="project-card-body">
                <div className="project-title-row">
                  <h3>
                    {project.title}
                    <span className="violet">_</span>
                  </h3>
                  <button
                    type="button"
                    aria-label={`Open ${project.title}`}
                    onClick={onAllProjects}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
                  >
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </button>
                </div>

                <p>{project.description}</p>

                <div className="project-card-bottom">
                  <span className="mono language">
                    <i className={project.langClass} />
                    {project.language}
                  </span>
                  <button
                    type="button"
                    className="mono"
                    onClick={onAllProjects}
                  >
                    Project notes
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
