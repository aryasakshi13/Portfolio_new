import React, { useState } from "react";
import { MicVocal, ChevronDown, Clock, ArrowUpRight } from "lucide-react";

export default function SpeakingSection() {
  const [openTalk, setOpenTalk] = useState(null);

  const talks = [
    {
      id: "talk-1",
      number: "01",
      title: "Pragmatic RAG: Making Vector Search Work in Production",
      duration: "35 min",
      summary:
        "Why pure cosine similarity in embedding space is insufficient for domain precision, and how hybrid dense-sparse fusion with cross-encoders fixes hallucinations.",
      takeaways:
        "Covers embedding drift, index quantization in Qdrant, lexical BM25 tokenizers, and Reciprocal Rank Fusion algorithms."
    },
    {
      id: "talk-2",
      number: "02",
      title: "Event Loop Discipline: Taming Heavy Workloads in Node.js",
      duration: "40 min",
      summary:
        "How to prevent large document parsing, chunking, and embedding generation from choking the single-threaded Node.js event loop.",
      takeaways:
        "Deep dive into Redis-backed BullMQ job queues, concurrency backpressure, dead-letter queues, and graceful shutdown handling."
    },
    {
      id: "talk-3",
      number: "03",
      title: "The Component Contract: Architecting Predictable React Interfaces",
      duration: "30 min",
      summary:
        "Principles for architecting durable, modular React 19 component trees that scale gracefully across complex applications.",
      takeaways:
        "Eliminating cascaded re-renders, establishing explicit prop boundaries, and separating server data orchestration from visual primitives."
    }
  ];

  return (
    <section className="speaking-preview section-rail" id="speaking">
      <div className="speaking-photo">
        <div className="speaking-photo-graphic">
          <MicVocal size={84} strokeWidth={0.8} style={{ opacity: 0.25, color: "var(--terminal)" }} />
        </div>
        <div className="speaking-photo-caption mono">
          <MicVocal size={14} strokeWidth={2} />
          Ideas are better when shared.
        </div>
      </div>

      <div className="speaking-preview-content">
        <p className="eyebrow">04 / Beyond the keyboard</p>
        <h2>
          From the terminal
          <br />
          to the stage<span className="violet">.</span>
        </h2>
        <p>
          I speak about the things I wrestle with in real code: reliability, hybrid retrieval
          architectures, and making complex systems understandable.
        </p>
        <p>
          No magic frameworks. Just useful ideas, honest trade-offs, and a conversation worth
          having.
        </p>

        {/* Expandable Talks Accordion */}
        <div className="talks-list">
          {talks.map((talk) => {
            const isOpen = openTalk === talk.id;
            return (
              <div key={talk.id} className="talk-row">
                <button
                  type="button"
                  className={`talk-toggle ${isOpen ? "is-open" : ""}`}
                  onClick={() => setOpenTalk(isOpen ? null : talk.id)}
                  aria-expanded={isOpen}
                >
                  <span className="talk-number mono">{talk.number}</span>
                  <div className="talk-toggle-main">
                    <strong>{talk.title}</strong>
                    <span className="talk-duration mono">
                      <Clock size={11} /> {talk.duration}
                    </span>
                  </div>
                  <ChevronDown size={18} />
                </button>

                {isOpen && (
                  <div className="talk-notes">
                    <p>{talk.summary}</p>
                    <p style={{ color: "var(--quiet)", fontSize: "11px", marginTop: "8px" }}>
                      <strong style={{ color: "var(--terminal)", fontWeight: 500 }}>Key takeaways: </strong>
                      {talk.takeaways}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a
          className="text-link"
          href="#newsletter"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("newsletter");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Invite for a talk or podcast
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
