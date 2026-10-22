import React from "react";
import { FileText, ArrowUpRight } from "lucide-react";

export default function AboutSection({ onOpenContact }) {
  return (
    <section className="about-section section-rail" id="about">
      <div className="about-story">
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
            I build full stack products and care about the details that make them feel finished.
          </p>
          <p>
            My core stack is React, TypeScript, Node.js and MongoDB. I like owning a feature end to end, from the database and API to the screen someone actually uses. Today I do that as a Full Stack Developer at Namami Infotech.
          </p>
          <p>
            My curiosity right now is AI. I built a RAG app that answers questions from a real text, and I’m learning LangChain, LangGraph and agentic AI so I can build products that reason over data instead of just displaying it.
          </p>
          <p>
            This site is where I build in public, with projects that taught me something and ideas that made it out of my notebook.
          </p>

          <div className="about-strengths">
            <h3 className="strengths-title mono">Where I’m strongest</h3>
            <div className="strengths-list">
              <div className="strength-item">
                <span className="strength-tag mono">Frontend:</span>
                <span className="strength-desc">React, Redux Toolkit, Tailwind CSS, TypeScript</span>
              </div>
              <div className="strength-item">
                <span className="strength-tag mono">Backend:</span>
                <span className="strength-desc">Node.js, Express, MongoDB, Firebase</span>
              </div>
              <div className="strength-item">
                <span className="strength-tag mono">AI:</span>
                <span className="strength-desc">RAG pipelines, LangChain, LangGraph</span>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <a
              href="/Sakshi_Arya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <FileText size={15} strokeWidth={2} />
              View Resume
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/sakshi-arya-8aa820307"
              target="_blank"
              rel="noreferrer"
            >
              Say hello
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

