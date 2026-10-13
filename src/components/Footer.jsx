import React from "react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="global-container">
        <div className="footer-content">
          <span className="footer-text">
            © {new Date().getFullYear()} Sakshi Arya. Full Stack Developer Delhi.
            Built with Fluent-Inspired Aesthetics.
          </span>
          <div className="footer-links">
            <a href={PROFILE.resume} download="Sakshi_Arya_Resume.pdf">
              Resume
            </a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
