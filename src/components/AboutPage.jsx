import React from "react";
import { ArrowUpRight, ArrowLeft, Terminal, GitBranch, BookOpen } from "lucide-react";
import NewsletterSection from "./NewsletterSection";

const principles = [
  {
    num: "01",
    Icon: Terminal,
    title: "Simple before clever.",
    desc: "Readable code and clear behavior beat a clever abstraction. Build what the problem needs, not what the trend demands.",
  },
  {
    num: "02",
    Icon: GitBranch,
    title: "Build in the open.",
    desc: "Ship the unfinished idea. Share what worked and what didn't. Make it easier for the next person to learn, contribute, and improve it.",
  },
  {
    num: "03",
    Icon: BookOpen,
    title: "Stay a beginner.",
    desc: "Ask the obvious question. Read the source. Keep a notebook. There is always a deeper explanation worth looking for.",
  },
];

const facts = [
  { label: "location", value: "Delhi, India" },
  { label: "role", value: "Full Stack Developer" },
  { label: "education", value: "B.Tech CSE, DCRUST" },
  { label: "learning", value: "LangChain · LangGraph · Agentic AI" },
];

export default function AboutPage({ onBackToIntro, onOpenPrivacy }) {
  return (
    <div className="about-page" id="about-page">

      {/* ── Page Heading Rail ── */}
      <section className="page-heading section-rail">
        <div className="page-heading-top">
          <p className="eyebrow">04 / A little about me</p>
          <button
            type="button"
            className="back-link mono"
            onClick={onBackToIntro}
          >
            <ArrowLeft size={13} strokeWidth={2} />
            Back to intro
          </button>
        </div>

        <h1>
          Engineer by trade.<br />
          <span className="muted">Curious by default.</span>
        </h1>

        <p className="page-description">
          Behind every commit is a person. Here’s a little about what I care
          about, why I build, and what keeps me asking questions.
        </p>
      </section>

      {/* ── Story + Portrait ── */}
      <section className="about-story section-rail">
        <figure className="about-portrait">
          <img
            src="/portrait.jpg"
            width="864"
            height="1152"
            alt="Sakshi in a quiet workspace beside a window"
          />
          <figcaption className="mono">
            <span>Sakshi Arya</span>
            <span>Usually building something.</span>
          </figcaption>
        </figure>

        <div className="about-copy">
          <p className="eyebrow">The human behind the commits</p>
          <h2>
            Hi, I&apos;m Sakshi<span className="violet">.</span>
          </h2>
          <p className="about-lede">
            A full stack developer who cares as much about understanding the
            problem as writing the code.
          </p>
          <p>
            I started with a diploma in Computer Science, then did my B.Tech
            in CSE at DCRUST. Since then I&apos;ve worked across the stack:
            Node.js and Express at Rifcare Tech, React at Webmaska, and now
            as a Full Stack Developer at Namami Infotech.
          </p>
          <p>
            Lately I&apos;m spending my time on AI: I&apos;ve built a RAG
            pipeline, and I&apos;m learning LangChain, LangGraph and agentic
            AI. I want to build apps that don&apos;t just show data, but
            understand it.
          </p>
          <p>
            This site is my workbench in public: projects that taught me
            something and ideas that made it out of my notebook.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/sakshi-arya-8aa820307"
            target="_blank"
            rel="noreferrer"
          >
            Say hello
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </section>

      {/* ── Working Principles ── */}
      <section className="working-principles section-rail">
        <p className="eyebrow">A few things I come back to</p>
        <h2>
          How I like to work<span className="violet">.</span>
        </h2>

        <div className="principle-rows">
          {principles.map(({ num, Icon, title, desc }) => (
            <div key={num} className="principle-row">
              <span className="mono">{num}</span>
              <Icon size={25} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="about-facts section-rail">
        <p className="eyebrow">Quick facts</p>
        <h2>
          At a glance<span className="violet">.</span>
        </h2>
        <div className="facts-grid">
          {facts.map(({ label, value }) => (
            <div key={label} className="fact-row mono">
              <span className="fact-label">{label}</span>
              <span className="fact-sep">:</span>
              <span className="fact-value">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterSection onOpenPrivacy={onOpenPrivacy} />

    </div>
  );
}
