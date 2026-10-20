import React, { useState, useEffect } from "react";
import {
  Terminal,
  GitBranch,
  UserRound,
  Mail,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";

export default function Header({ activeView, onGoToProjects, onGoToIntro, onGoToAbout }) {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activeView !== "intro") {
      setActiveSection(activeView);
      return;
    }
    const handleScroll = () => {
      const sections = ["top", "intro", "projects", "newsletter"];
      const scrollPos = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + h) {
            setActiveSection(id === "top" ? "intro" : id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeView]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleIntroClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activeView !== "intro") onGoToIntro();
    else scrollTo("top");
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onGoToProjects();
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onGoToAbout();
  };

  const handleNewsletterClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activeView !== "intro") {
      onGoToIntro();
      setTimeout(() => scrollTo("newsletter"), 350);
    } else {
      scrollTo("newsletter");
    }
  };

  const isIntroActive   = activeView === "intro"    && (activeSection === "intro" || activeSection === "top");
  const isProjectActive = activeView === "projects";
  const isAboutActive   = activeView === "about";

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <header className="site-header">
        <a href="#top" onClick={handleIntroClick} className="wordmark" aria-label="Home">
          sa<span>_</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a
            href="#top"
            onClick={handleIntroClick}
            className={`nav-link ${isIntroActive ? "is-active" : ""}`}
          >
            <Terminal size={13} strokeWidth={1.8} />
            <span>Intro</span>
          </a>

          <a
            href="#projects"
            onClick={handleProjectsClick}
            className={`nav-link ${isProjectActive ? "is-active" : ""}`}
          >
            <GitBranch size={13} strokeWidth={1.8} />
            <span>Projects</span>
          </a>

          <a
            href="#about"
            onClick={handleAboutClick}
            className={`nav-link ${isAboutActive ? "is-active" : ""}`}
          >
            <UserRound size={13} strokeWidth={1.8} />
            <span>About</span>
          </a>

          <a
            href="#newsletter"
            onClick={handleNewsletterClick}
            className="nav-newsletter"
          >
            <Mail size={13} strokeWidth={1.8} />
            <span>Newsletter</span>
          </a>
        </nav>

        {/* Status Badge */}
        <a href="#newsletter" onClick={handleNewsletterClick} className="header-status">
          <span className="status-dot" />
          <span>Open to roles</span>
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-nav-menu" aria-label="Mobile navigation">
          <a href="#top" onClick={handleIntroClick} className={isIntroActive ? "is-active" : ""}>
            <Terminal size={14} />
            <span>Intro</span>
          </a>
          <a href="#projects" onClick={handleProjectsClick} className={isProjectActive ? "is-active" : ""}>
            <GitBranch size={14} />
            <span>Projects</span>
          </a>
          <a href="#about" onClick={handleAboutClick} className={isAboutActive ? "is-active" : ""}>
            <UserRound size={14} />
            <span>About</span>
          </a>
          <a href="#newsletter" onClick={handleNewsletterClick}>
            <Mail size={14} />
            <span>Newsletter</span>
          </a>
        </nav>
      )}
    </>
  );
}
