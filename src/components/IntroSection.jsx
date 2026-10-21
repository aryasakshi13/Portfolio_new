import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function IntroSection({ onGoToAbout }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toolkit = [
    "React 19",
    "TypeScript",
    "Node.js",
    "Qdrant (Vector DB)",
    "PostgreSQL",
    "Redis & BullMQ",
    "Docker",
    "Tailwind CSS"
  ];

  return (
    <section className="intro-section section-rail" id="intro">
      <div className="eyebrow section-index">
        <span>01 / The approach</span>
        <span className="tiny-cross">+</span>
      </div>

      <div className="intro-body">
        <h2>
          Good systems.
          <br />
          <span className="muted">Better conversations.</span>
        </h2>

        <div>
          <p>
            I’m Sakshi, a software engineer focused on what happens behind and inside the interface.
            APIs, modern reactive architectures, and the small decisions that make software reliable.
          </p>
          <p>
            I believe the best way to understand something is to build it—and the next best way is
            to explain it.
          </p>

          <code className="intro-code">
            <span className="code-comment">// the short version</span>
            <span className="violet">while</span> (curious) &#123; build(); share(); &#125;
          </code>

          <a
            className="text-link"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              if (onGoToAbout) onGoToAbout();
              else scrollTo("about");
            }}
          >
            A little more about me
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="stack-strip mono">
        <span>My everyday toolkit</span>
        {toolkit.map((item) => (
          <span key={item} className="stack-tag">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
