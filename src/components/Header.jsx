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

export default function Header({ activeView, onGoToProjects, onGoToIntro }) {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activeView === "projects") {
      setActiveSection("projects");
      return;
    }
    const handleScroll = () => {
      const sections = ["top", "intro", "projects", "newsletter", "about"];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === "top" ? "intro" : sectionId);
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIntroClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activeView === "projects") {
      onGoToIntro();
    } else {
      scrollTo("top");
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onGoToProjects();
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <a
          href="#top"
          onClick={handleIntroClick}
          className="wordmark"
          aria-label="Home"
        >
          sa<span>_</span>
        </a>

        {/* Floating Desktop Pill Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a
            href="#top"
            onClick={handleIntroClick}
            className={`nav-link ${activeView === "intro" && activeSection === "intro" ? "is-active" : ""}`}
          >
            <Terminal size={13} strokeWidth={1.8} />
            <span>Intro</span>
          </a>

          <a
            href="#projects"
            onClick={handleProjectsClick}
            className={`nav-link ${activeView === "projects" ? "is-active" : ""}`}
          >
            <GitBranch size={13} strokeWidth={1.8} />
            <span>Projects</span>
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              if (activeView === "projects") {
                onGoToIntro();
                setTimeout(() => scrollTo("about"), 300);
              } else {
                scrollTo("about");
              }
            }}
            className={`nav-link ${activeView === "intro" && activeSection === "about" ? "is-active" : ""}`}
          >
            <UserRound size={13} strokeWidth={1.8} />
            <span>About</span>
          </a>

          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              if (activeView === "projects") {
                onGoToIntro();
                setTimeout(() => scrollTo("newsletter"), 300);
              } else {
                scrollTo("newsletter");
              }
            }}
            className="nav-newsletter"
          >
            <Mail size={13} strokeWidth={1.8} />
            <span>Newsletter</span>
          </a>
        </nav>

        {/* Status Callout Badge */}
        <a
          href="#newsletter"
          onClick={(e) => {
            e.preventDefault();
            if (activeView === "projects") {
              onGoToIntro();
              setTimeout(() => scrollTo("newsletter"), 300);
            } else {
              scrollTo("newsletter");
            }
          }}
          className="header-status"
        >
          <span className="status-dot" />
          <span>Open to roles</span>
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-nav-menu" aria-label="Mobile navigation">
          <a href="#top" onClick={handleIntroClick} className={activeView === "intro" ? "is-active" : ""}>
            <Terminal size={14} />
            <span>Intro</span>
          </a>
          <a href="#projects" onClick={handleProjectsClick} className={activeView === "projects" ? "is-active" : ""}>
            <GitBranch size={14} />
            <span>Projects</span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (activeView === "projects") {
                onGoToIntro();
                setTimeout(() => scrollTo("about"), 300);
              } else {
                scrollTo("about");
              }
            }}
          >
            <UserRound size={14} />
            <span>About</span>
          </a>
          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (activeView === "projects") {
                onGoToIntro();
                setTimeout(() => scrollTo("newsletter"), 300);
              } else {
                scrollTo("newsletter");
              }
            }}
          >
            <Mail size={14} />
            <span>Newsletter</span>
          </a>
        </nav>
      )}
    </>
  );
}
