import React from "react";
import { useTheme } from "../context/ThemeContext";
import { portfolioData } from "../portfolioData";

export default function Architecture() {
  const { isDark } = useTheme();
  const { architecture } = portfolioData;

  const stepIcons = [
    "fas fa-desktop",
    "fas fa-network-wired",
    "fas fa-shield-alt",
    "fas fa-database",
    "fas fa-plug",
    "fas fa-cloud-upload-alt"
  ];

  const renderGroup = (keyPrefix) =>
    architecture.steps.map((step, idx) => (
      <div className="architecture-node-card" key={`${keyPrefix}-${idx}`}>
        <div className="node-top-bar">
          <span className="node-step-number">0{step.step}</span>
          <div className="node-icon-wrapper">
            <i className={stepIcons[idx] || "fas fa-cube"}></i>
          </div>
        </div>
        <h3 className="node-title">{step.title}</h3>
        <div className="node-tech-pill font-mono">{step.tech}</div>
        <p className="node-desc">{step.desc}</p>
        <div className="node-card-footer">
          <span className="flow-badge">Step 0{step.step} of 06</span>
          <span className="flow-arrow-icon" aria-hidden="true">
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    ));

  return (
    <section
      className={`architecture-section ${isDark ? "dark-arch" : "light-arch"}`}
      id="architecture"
    >
      <div className="architecture-container">
        <div className="section-header">
          <span className="section-eyebrow">End-to-End Pipeline</span>
          <h2 className="section-title">{architecture.title}</h2>
          <p className="section-subtitle">{architecture.subtitle}</p>
          <div className="marquee-status-pill">
            <span className="pulse-dot"></span>
            <span>Continuous Pipeline • Hover to Pause</span>
          </div>
        </div>
      </div>

      <div className="architecture-marquee-wrapper">
        <div className="architecture-marquee-track">
          <div className="architecture-track-group">{renderGroup("group-1")}</div>
          <div className="architecture-track-group" aria-hidden="true">
            {renderGroup("group-2")}
          </div>
        </div>
      </div>
    </section>
  );
}
