import React from "react";
import { Terminal, ScanLine, FileText, GitBranch, ArrowUpRight, Code2 } from "lucide-react";

export default function AboutSection({ onOpenContact }) {
  const principles = [
    {
      num: "01",
      icon: Terminal,
      title: "Simplicity first.",
      desc: "Resist unnecessary complexity. Most systems do not need a distributed microservice cluster on day one. Boring architectures let you sleep at night."
    },
    {
      num: "02",
      icon: ScanLine,
      title: "Measure before optimizing.",
      desc: "Profile the query plans, event loop latency, and memory footprints before introducing complex caching tiers or exotic runtimes."
    },
    {
      num: "03",
      icon: FileText,
      title: "Documentation is a feature.",
      desc: "If a peer engineer cannot clone, boot, and understand the failure modes within 10 minutes, the developer ergonomics require redesign."
    },
    {
      num: "04",
      icon: GitBranch,
      title: "Build in the open.",
      desc: "Writing articles, publishing open-source tooling, and explaining technical trade-offs tests real understanding and elevates the community."
    }
  ];

  return (
    <section className="about-section section-rail" id="about">
      <div className="about-story">
        <div className="about-portrait">
          <div className="about-portrait-card">
            <span className="about-portrait-corner mono">ENGINEER / BUILDER</span>

            <div className="about-portrait-center">
              <div className="about-avatar-symbol">
                <Code2 size={42} strokeWidth={1.5} />
              </div>
              <h3>Sakshi Arya</h3>
              <p className="mono">Frontend &amp; Full-Stack Systems</p>
            </div>

            <figcaption className="mono">
              <span>New Delhi, India</span>
              <span style={{ color: "var(--terminal)" }}>• Available for roles</span>
            </figcaption>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">05 / Story &amp; Foundations</p>
          <h2>
            Building behind &amp;
            <br />
            inside the screen<span className="violet">.</span>
          </h2>
          <p className="about-lede">
            I believe that the cleanest software systems happen when frontend ergonomics and
            backend reliability are treated with equal rigor.
          </p>
          <p>
            From engineering browser-based developer tooling like Front Arena with Monaco Editor to
            fusing sparse BM25 and dense vector search in hybrid RAG pipelines, my focus is on
            writing code that is intuitive to use and predictable when it fails.
          </p>
          <p>
            I’m continuously experimenting with Redis worker queues, full-stack TypeScript
            architectures, and making complex computational systems feel lightweight.
          </p>
          <a
            className="text-link"
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
          >
            Get in touch
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="working-principles">
        <p className="eyebrow">Guiding heuristics</p>
        <h2>
          Working principles<span className="violet">.</span>
        </h2>

        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.num} className="principle-row">
              <span className="mono">{item.num}</span>
              <Icon size={24} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
