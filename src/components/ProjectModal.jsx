import React, { useEffect } from "react";
import { X, ArrowUpRight, ExternalLink, CheckCircle } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;
  const d = project.details || {};

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project notes">
          <X size={18} />
        </button>

        <span className="mono" style={{ fontSize: "9px", color: "var(--terminal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {project.corner || "PROJECT NOTES"}
        </span>

        <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, margin: "14px 0 10px", color: "var(--white)" }}>
          {project.title}
          <span className="violet">_</span>
        </h2>

        <p style={{ fontSize: "14px", color: "var(--copy)", lineHeight: 1.8, marginBottom: "24px" }}>
          {d.headline || project.description}
        </p>

        {d.problem && (
          <div style={{ marginBottom: "26px", padding: "18px 20px", background: "rgba(20, 27, 45, 0.6)", borderRadius: "6px", borderLeft: "2px solid var(--terminal)" }}>
            <span className="mono" style={{ fontSize: "10px", color: "var(--terminal)", display: "block", marginBottom: "6px", textTransform: "uppercase" }}>
              Core Technical Problem
            </span>
            <p style={{ fontSize: "12px", color: "var(--copy)", lineHeight: 1.8 }}>
              {d.problem}
            </p>
          </div>
        )}

        {d.features && d.features.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <span className="mono" style={{ fontSize: "10px", color: "var(--quiet)", display: "block", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Key Architecture &amp; Features
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {d.features.map((feat, idx) => (
                <li key={idx} style={{ display: "flex", gap: "10px", fontSize: "12px", color: "var(--copy)", lineHeight: 1.7 }}>
                  <CheckCircle size={15} color="var(--terminal)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {d.techStack && (
          <div style={{ marginBottom: "32px" }}>
            <span className="mono" style={{ fontSize: "10px", color: "var(--quiet)", display: "block", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Technologies Involved
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {d.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ paddingTop: "24px", borderTop: "1px solid var(--line)", display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              <ExternalLink size={15} strokeWidth={2} />
              Open Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              <Github size={15} strokeWidth={2} />
              Source Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
