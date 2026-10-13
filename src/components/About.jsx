import React from "react";
import { ABOUT, EXPERIENCE, PROFILE } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section" id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container global-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building Systems with Engineering Rigor</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative Story & Engineering Principles */}
          <div className="about-content">
            {ABOUT.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Philosophy Cards */}
            <div className="about-philosophy" style={{ marginTop: "2.5rem" }}>
              <div className="philosophy-card">
                <h4>Interfaces That Feel Simple</h4>
                <p>
                  Believing the best interfaces feel effortless, reducing cognitive load,
                  and guiding users naturally toward their next action with clean hierarchy.
                </p>
              </div>
              <div className="philosophy-card">
                <h4>Systems That Return the Right Answer</h4>
                <p>
                  Engineering beyond simple prompt wrappers by implementing hybrid retrieval,
                  rank fusion, and structured validation for dependable real-world output.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Work Timeline */}
          <div className="about-sidebar">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "2rem",
                color: "var(--text-primary)"
              }}
            >
              Work Timeline
            </h3>

            <div className="experience-timeline">
              {EXPERIENCE.map((job) => (
                <div className="timeline-item" key={job.company}>
                  <div className="timeline-year">{job.period}</div>
                  <h4 className="timeline-role">{job.role}</h4>
                  <div className="timeline-company">{job.company}</div>

                  <ul
                    style={{
                      marginTop: "0.75rem",
                      paddingLeft: "1.25rem",
                      fontSize: "0.825rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6
                    }}
                  >
                    {job.points.map((pt, idx) => (
                      <li key={idx} style={{ marginBottom: "0.35rem" }}>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {job.tags && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "0.75rem" }}>
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.72rem",
                            padding: "2px 8px",
                            borderRadius: "100px",
                            background: "var(--bg-glass)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-tertiary)"
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
