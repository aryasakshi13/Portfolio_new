import React from "react";
import { SERVICES, SKILLS, EDUCATION } from "../data/portfolioData";
import { Code, Server, Cpu, Database } from "lucide-react";

export default function Skills() {
  const serviceIcons = [Code, Server, Cpu];

  return (
    <section className="section" id="skills">
      <div className="section-container global-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Expertise &amp; Services</span>
          <h2 className="section-title">Engineering Skillset &amp; Capabilities</h2>
          <p className="section-description">
            A blend of clean frontend engineering, scalable backend APIs, and
            retrieval-augmented generation pipelines.
          </p>
        </div>

        {/* 3 Core Services / Architectural Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem"
          }}
        >
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div className="skill-card" key={service.title}>
                <div className="skill-icon">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>

        {/* Grouped Skills Matrix */}
        <div className="tools-section">
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--text-primary)"
            }}
          >
            Technologies &amp; Toolkit
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            The languages, frameworks, vector databases, and tools I use to build production systems.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {SKILLS.map((grp) => (
              <div
                key={grp.group}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--border-radius-md)",
                  padding: "1.75rem",
                  backdropFilter: "blur(8px)"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--accent-tertiary)",
                    marginBottom: "1rem"
                  }}
                >
                  {grp.group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {grp.items.map((item) => (
                    <span
                      key={item}
                      className="tool-badge"
                      style={{ padding: "0.45rem 0.95rem", fontSize: "0.8rem" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="tools-section" style={{ marginTop: "4.5rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--text-primary)"
            }}
          >
            Education &amp; Credentials
          </h3>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.9375rem",
              marginBottom: "1.75rem"
            }}
          >
            Academic background in Computer Science and Engineering.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {EDUCATION.map((edu) => (
              <div
                key={edu.title}
                className="skill-card"
                style={{
                  padding: "1.75rem",
                  background: "var(--bg-card)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.35rem"
                    }}
                  >
                    {edu.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      margin: 0
                    }}
                  >
                    {edu.place}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--accent-primary)",
                    fontWeight: 600,
                    marginTop: "1rem",
                    letterSpacing: "0.05em"
                  }}
                >
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Orb */}
      <div className="orb orb-3" />
    </section>
  );
}
