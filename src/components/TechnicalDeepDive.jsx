import React, { useState } from "react";
import { portfolioData } from "../portfolioData";
import {
  Cpu,
  Layers,
  ArrowRight,
  Database,
  Check,
  Search,
  Filter,
  Zap,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function TechnicalDeepDive() {
  const { caseStudies } = portfolioData;
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);

  const currentStudy =
    caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section
      id="deep-dive"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "48px" }}>
          <span className="section-label">Engineering Case Studies</span>
          <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
            How I think about systems &amp; architecture.
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7
            }}
          >
            Engineering is about trade-offs, reliability, and precision. Here
            are two architectural breakdowns from my actual projects detailing
            why specific design choices were made.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "36px",
            overflowX: "auto",
            paddingBottom: "6px"
          }}
        >
          {caseStudies.map((study) => {
            const isActive = study.id === activeTab;
            return (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveTab(study.id)}
                style={{
                  background: isActive ? "var(--bg-card)" : "transparent",
                  border: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap"
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "var(--accent)" : "#52525B"
                  }}
                ></span>
                <span>{study.title}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Detail Card */}
        <div
          className="card-base"
          style={{
            padding: "40px",
            backgroundColor: "#131317",
            border: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          {/* Top Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "12px"
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--accent-light)",
                  backgroundColor: "var(--accent-subtle)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  display: "inline-block",
                  marginBottom: "8px"
                }}
              >
                {currentStudy.tag}
              </span>
              <h3 className="heading-md" style={{ color: "#FFFFFF" }}>
                {currentStudy.title}
              </h3>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  marginTop: "4px"
                }}
              >
                {currentStudy.subtitle}
              </div>
            </div>
          </div>

          {/* High-level Summary */}
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.7,
              color: "#D4D4D8",
              marginBottom: "36px",
              maxWidth: "880px"
            }}
          >
            {currentStudy.summary}
          </p>

          {/* Visual Architecture Flow */}
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "14px"
              }}
            >
              End-to-End Pipeline Execution:
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${currentStudy.flow.length}, minmax(0, 1fr))`,
                gap: "12px"
              }}
              className="flow-grid"
            >
              {currentStudy.flow.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#0C0C0F",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "8px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "130px",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--accent-light)",
                      fontWeight: 600,
                      marginBottom: "6px"
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#FFFFFF",
                        marginBottom: "4px"
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#A1A1AA",
                        lineHeight: 1.45
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Architectural Principles */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "16px"
              }}
            >
              Architectural Rationale &amp; Deep Concepts:
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px"
              }}
              className="concepts-grid"
            >
              {currentStudy.concepts.map((concept, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    padding: "18px"
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.96rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: "6px"
                    }}
                  >
                    {concept.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6
                    }}
                  >
                    {concept.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flow-grid {
            grid-template-columns: 1fr !important;
          }
          .concepts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
