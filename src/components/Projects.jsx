import React, { useState } from "react";
import { PROJECTS, PIPELINE } from "../data/portfolioData";
import { Play } from "lucide-react";
import {
  GitaRAGMockup,
  FrontArenaMockup
} from "./ProjectMockups";

export default function Projects() {
  const [activeStage, setActiveStage] = useState(2); // default to 'Search'
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="projects" id="work">
      <div className="projects-inner">
        {/* Section Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label">Selected Works</span>
          <h2 className="projects-title">Featured Products &amp; AI Systems</h2>
          <p className="projects-sub">
            A collection of web applications and retrieval pipelines built to
            solve real problems and return the right answers.
          </p>
        </div>

        {/* Editorial Projects List */}
        <div>
          {PROJECTS.map((project, index) => {
            const isReverse = index % 2 === 1;
            const isVideoActive = playingVideo === project.name;

            return (
              <article
                key={project.name}
                className={`project ${isReverse ? "reverse" : ""}`}
              >
                {/* Media Column */}
                <div className="p-media">
                  {/* Inline Video Player (e.g. Tailwind Config Extractor) */}
                  {project.video && isVideoActive ? (
                    <iframe
                      src={`${project.video}&autoplay=1`}
                      title={`${project.name} demo video`}
                      allow="autoplay; fullscreen; encrypted-media"
                      loading="lazy"
                    />
                  ) : project.video ? (
                    /* Video Thumbnail Poster with Play CTA */
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <img
                        src={project.poster}
                        alt={`${project.name} thumbnail`}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <button
                        type="button"
                        className="p-play"
                        onClick={() => setPlayingVideo(project.name)}
                        aria-label={`Play demo video for ${project.name}`}
                      >
                        <Play size={14} fill="#0a0e1f" />
                        <span>Watch demo</span>
                      </button>
                    </div>
                  ) : project.name === "Bhagavad Gita RAG AI" ? (
                    /* Custom High-Fidelity Pipeline Mockup */
                    <div style={{ padding: "1.25rem", width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                      <GitaRAGMockup />
                    </div>
                  ) : project.name === "Front Arena" ? (
                    /* Custom High-Fidelity IDE Mockup */
                    <div style={{ padding: "1.25rem", width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                      <FrontArenaMockup />
                    </div>
                  ) : (
                    /* Fallback Stylized Card */
                    <div className="p-fallback">
                      <span>{project.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-body">
                  <h3>{project.name}</h3>
                  <p className="p-lead">{project.summary}</p>

                  {/* Problem & Built Case Study */}
                  <dl className="p-case">
                    {project.problem && (
                      <div>
                        <dt>The problem</dt>
                        <dd>{project.problem}</dd>
                      </div>
                    )}
                    {project.built && (
                      <div style={{ marginTop: "10px" }}>
                        <dt>What I built</dt>
                        <dd>{project.built}</dd>
                      </div>
                    )}
                  </dl>

                  {/* Interactive Retrieval Pipeline for Bhagavad Gita RAG AI */}
                  {project.pipeline && (
                    <div className="p-pipe">
                      <ol role="group" aria-label="Retrieval pipeline stages">
                        {PIPELINE.map((p, idx) => (
                          <li key={p.step}>
                            <button
                              type="button"
                              aria-pressed={activeStage === idx}
                              onClick={() => setActiveStage(idx)}
                            >
                              <span className="n">{idx + 1}</span>
                              <span>{p.step}</span>
                            </button>
                          </li>
                        ))}
                      </ol>
                      <div className="p-stage" aria-live="polite">
                        <strong style={{ color: "var(--p-text)" }}>
                          {PIPELINE[activeStage].step}:{" "}
                        </strong>
                        <span style={{ color: "var(--p-muted)" }}>
                          {PIPELINE[activeStage].text}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Architectural Decisions List */}
                  {project.decisions && project.decisions.length > 0 && (
                    <ul className="p-decisions">
                      {project.decisions.map((d, dIdx) => (
                        <li key={dIdx}>
                          <b>{d.title} — </b>
                          <span>{d.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="p-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="p-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Try the live app →
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View source code →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
