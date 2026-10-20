import React from "react";
import NetworkBackground from "./NetworkBackground";
import { ArrowUpRight, ArrowDown, Terminal, GitBranch } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Hero({ onExploreWork }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {/* Network Background with Violet-to-Cyan glow */}
      <NetworkBackground />

      {/* Hero Corner Brackets Frame */}
      <div className="hero-frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Top Caption Strip */}
      <div className="hero-top-caption mono">
        <span>
          <span className="status-dot" />
          BUILDING IN THE OPEN
        </span>
        <span>FULL STACK DEVELOPER &amp; AI BUILDER</span>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        <h1 id="hero-title">
          SAKSHI
          <br />
          <span>
            ARYA<span className="name-period">.</span>
          </span>
        </h1>
        <p className="hero-description">
          I build fast React frontends and dependable Node.js backends,
          <br className="desktop-break" />
          and I&apos;m now building AI apps with RAG, LangChain and LangGraph.
        </p>

        <div className="hero-actions">
          <button
            onClick={onExploreWork}
            className="button button-primary"
          >
            Explore my work
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Left Aside — Let's Connect */}
      <aside className="hero-side hero-side-left">
        <p className="eyebrow">Connect</p>
        <a href="https://github.com/aryasakshi13" target="_blank" rel="noreferrer">
          <Github size={13} strokeWidth={2} />
          GitHub
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>
        <a href="https://www.linkedin.com/in/sakshi-arya-8aa820307" target="_blank" rel="noreferrer">
          <Linkedin size={13} strokeWidth={2} />
          LinkedIn
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>
        <a
          href="#newsletter"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("newsletter");
          }}
        >
          Let&apos;s talk
          <ArrowUpRight size={12} strokeWidth={2} />
        </a>
      </aside>

      {/* Right Aside */}
      <aside className="hero-side hero-side-right">
        <p className="eyebrow">Currently into</p>
        <span>React 19 &amp; TypeScript</span>
        <span>LangChain &amp; LangGraph</span>
        <span>Hybrid RAG &amp; Qdrant</span>
      </aside>

      {/* Bottom Status Bar */}
      <div className="hero-bottom mono">
        <span>
          <Terminal size={13} strokeWidth={2} />
          More than just code
        </span>
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("intro");
          }}
        >
          Scroll to explore
          <ArrowDown size={14} strokeWidth={2} />
        </a>
        <span>
          <GitBranch size={13} strokeWidth={2} />
          Always a work in progress
        </span>
      </div>
    </section>
  );
}
