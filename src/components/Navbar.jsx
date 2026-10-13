import React, { useState, useEffect } from "react";
import { PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <a href="#top" className="nav-logo">
        sakshiarya<span className="dot"></span>
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Expertise</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* CTA Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <a
          href={PROFILE.resume}
          download="Sakshi_Arya_Resume.pdf"
          className="nav-cta hidden sm:inline-flex"
          style={{
            borderColor: "var(--accent-tertiary)",
            color: "var(--accent-tertiary)"
          }}
        >
          Resume PDF
        </a>
        <button onClick={scrollToContact} className="nav-cta">
          Let's Talk
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-toggle md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px"
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-primary)",
              borderRadius: "2px",
              transition: "transform 0.2s"
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-primary)",
              borderRadius: "2px"
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-primary)",
              borderRadius: "2px"
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            backgroundColor: "rgba(6, 6, 14, 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-medium)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            zIndex: 999
          }}
        >
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.05rem", color: "var(--text-primary)", textDecoration: "none" }}
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.05rem", color: "var(--text-primary)", textDecoration: "none" }}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.05rem", color: "var(--text-primary)", textDecoration: "none" }}
          >
            Expertise
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.05rem", color: "var(--text-primary)", textDecoration: "none" }}
          >
            Contact
          </a>
          <a
            href={PROFILE.resume}
            download="Sakshi_Arya_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: "0.95rem",
              color: "var(--accent-tertiary)",
              textDecoration: "none",
              paddingTop: "0.5rem",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            Download Resume PDF
          </a>
        </div>
      )}
    </nav>
  );
}
