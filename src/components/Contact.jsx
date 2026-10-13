import React from "react";
import { PROFILE } from "../data/portfolioData";
import { Mail, Phone, FileText, ArrowUpRight, Download } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container global-container">
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          {/* Section Heading */}
          <h2 className="contact-heading">
            Let's Talk<br />
            <span className="gradient-text">Engineering &amp; AI</span>
          </h2>
          <p className="contact-text" style={{ margin: "0 auto 3rem" }}>
            I am based in {PROFILE.location}, and am currently open to exploring
            full-stack, frontend, and AI engineering opportunities. Let's connect!
          </p>

          {/* Symmetrical 2-Column Contact Cards Grid */}
          <div className="contact-grid-wrapper">
            {/* 1. Email */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="contact-card-modern"
            >
              <div className="contact-card-left">
                <div
                  className="contact-icon-box"
                  style={{
                    background: "rgba(79, 107, 246, 0.12)",
                    borderColor: "rgba(79, 107, 246, 0.3)",
                    color: "#4F6BF6"
                  }}
                >
                  <Mail size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">{PROFILE.email}</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>

            {/* 2. LinkedIn */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-modern"
            >
              <div className="contact-card-left">
                <div
                  className="contact-icon-box"
                  style={{
                    background: "rgba(123, 92, 245, 0.12)",
                    borderColor: "rgba(123, 92, 245, 0.3)",
                    color: "#7B5CF5"
                  }}
                >
                  <Linkedin size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">linkedin.com/in/aryasakshi13</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>

            {/* 3. GitHub */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-modern"
            >
              <div className="contact-card-left">
                <div
                  className="contact-icon-box"
                  style={{
                    background: "rgba(0, 212, 170, 0.12)",
                    borderColor: "rgba(0, 212, 170, 0.3)",
                    color: "#00D4AA"
                  }}
                >
                  <Github size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">github.com/aryasakshi13</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>

            {/* 4. Phone & WhatsApp */}
            <a
              href={`tel:${PROFILE.phone}`}
              className="contact-card-modern"
            >
              <div className="contact-card-left">
                <div
                  className="contact-icon-box"
                  style={{
                    background: "rgba(16, 185, 129, 0.12)",
                    borderColor: "rgba(16, 185, 129, 0.3)",
                    color: "#10B981"
                  }}
                >
                  <Phone size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">Phone &amp; WhatsApp</div>
                  <div className="contact-card-value">{PROFILE.phone}</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="contact-card-arrow" />
            </a>

            {/* 5. Resume / CV — Full-Width Featured Card */}
            <a
              href={PROFILE.resume}
              download="Sakshi_Arya_Resume.pdf"
              className="contact-card-modern contact-card-featured"
            >
              <div className="contact-card-left">
                <div
                  className="contact-icon-box"
                  style={{
                    background: "rgba(161, 155, 255, 0.16)",
                    borderColor: "rgba(161, 155, 255, 0.35)",
                    color: "#A19BFF"
                  }}
                >
                  <FileText size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">Official Resume / CV</div>
                  <div className="contact-card-value">Sakshi_Arya_Resume.pdf</div>
                </div>
              </div>
              <div className="contact-download-btn">
                <Download size={14} />
                <span>Download PDF</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
