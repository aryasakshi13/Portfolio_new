import React from "react";
import { PROFILE } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background Gradient & Ambient Glow */}
      <div className="hero-gradient" />

      {/* Decorative Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="hero-content">
        {/* Top Status Pill Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Full Stack Developer @ {PROFILE.company}</span>
        </div>

        {/* Hero Title with Name and Adjusted Font Size */}
        <h1 className="hero-title">
          <span
            style={{
              display: "block",
              fontSize: "clamp(1.35rem, 2.8vw, 2.15rem)",
              fontWeight: 700,
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em"
            }}
          >
            Hi, I'm <span style={{ color: "#FFFFFF" }}>{PROFILE.name}</span>
          </span>
          <span>{PROFILE.heroLine1}</span>
          <br />
          <span className="gradient-text">{PROFILE.heroLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          {PROFILE.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            <span>Explore My Work</span>
            <svg
              className="btn-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
}
