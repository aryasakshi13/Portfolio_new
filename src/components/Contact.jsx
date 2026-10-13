import React from "react";
import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container global-container">
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          {/* Section Heading */}
          <h2 className="contact-heading">
            Let's Talk<br />
            <span className="gradient-text">Engineering &amp; AI</span>
          </h2>
          <p className="contact-text" style={{ margin: "0 auto 3rem" }}>
            I am based in {PROFILE.location}, and am currently open to exploring
            full-stack, frontend, and AI engineering roles. Let's connect!
          </p>

          {/* Contact Cards Grid */}
          <div className="contact-links" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {/* Email */}
            <a href={`mailto:${PROFILE.email}`} className="contact-link-item">
              <div className="contact-link-icon">📧</div>
              <div style={{ textAlign: "left" }}>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">{PROFILE.email}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">💼</div>
              <div style={{ textAlign: "left" }}>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">
                  linkedin.com/in/aryasakshi13
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">🐙</div>
              <div style={{ textAlign: "left" }}>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/aryasakshi13</div>
              </div>
            </a>

            {/* Phone */}
            {PROFILE.phone && (
              <a href={`tel:${PROFILE.phone}`} className="contact-link-item">
                <div className="contact-link-icon">📞</div>
                <div style={{ textAlign: "left" }}>
                  <div className="contact-link-label">Phone &amp; WhatsApp</div>
                  <div className="contact-link-value">{PROFILE.phone}</div>
                </div>
              </a>
            )}

            {/* Resume */}
            <a
              href={PROFILE.resume}
              download="Sakshi_Arya_Resume.pdf"
              className="contact-link-item"
            >
              <div className="contact-link-icon">📄</div>
              <div style={{ textAlign: "left" }}>
                <div className="contact-link-label">Resume / CV</div>
                <div className="contact-link-value">Download PDF</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
