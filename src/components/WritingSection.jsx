import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const articlesData = [
  {
    id: "boring-backends",
    index: "01",
    title: "In praise of boring backends",
    tags: ["Architecture", "Backend"],
    summary:
      "Good infrastructure should let you sleep. A few thoughts on choosing simplicity over novelty when building systems that need to last.",
    date: "Sep 18, 2026",
    readTime: "6 min read",
    content: `
### The illusion of novel complexity
Every few months, a shiny new distributed database or runtime promises to eliminate every architectural compromise you made last quarter. But when production alarms sound at 3:14 a.m., novelty is your greatest liability.

### Why boring wins
A "boring" technology is one whose failure modes are well-documented. When PostgreSQL stalls under unexpected lock contention, millions of engineers have already resolved that exact bottleneck on Stack Overflow and in official guides. When an esoteric multi-model engine fails, you are writing the diagnostic manual yourself in real time.

### The discipline of simple defaults
1. **Prefer SQL over distributed graph layers** until query profiles objectively prove relational constraints are untenable.
2. **Prefer atomic transactions and idempotency keys** before adopting multi-phase commit orchestrators.
3. **Keep business logic close to data boundaries**, rather than distributing single domain concepts across eight microservices.
    `
  },
  {
    id: "hybrid-rag",
    index: "02",
    title: "Hybrid Retrieval & Reciprocal Rank Fusion",
    tags: ["AI Engineering", "RAG"],
    summary:
      "Why dense vector search alone fails on exact terminology, and how fusing BM25 with cross-encoder rerankers eliminates hallucinated passages.",
    date: "Sep 04, 2026",
    readTime: "8 min read",
    content: `
### The Blind Spot of Dense Vectors
Cosine similarity in high-dimensional embedding space is great at identifying conceptual analogies, synonyms, and mood. But it is remarkably fragile with exact nomenclature, serial numbers, and specific chapter verses.

### Fusing Dense + Sparse with RRF
Reciprocal Rank Fusion merges ranked candidate lists without needing to calibrate raw distances or score scales:

$$\\text{RRF}(d) = \\sum_{m \\in M} \\frac{1}{k + \\text{rank}_m(d)}$$

By pairing Qdrant vector retrieval with sparse BM25 token matching, top candidates benefit from both semantic intent and lexical exactitude before reaching the cross-encoder stage.
    `
  },
  {
    id: "event-loop-workers",
    index: "03",
    title: "Graceful shutdown & event loop isolation",
    tags: ["Systems", "Reliability"],
    summary:
      "Deployments should not drop work. A practical guide to BullMQ workers, cancellation, and draining servers cleanly.",
    date: "Aug 21, 2026",
    readTime: "7 min read",
    content: `
### Heavy jobs don't belong in the HTTP thread
When an endpoint accepts a 20MB document and immediately starts tokenization and embedding generation, Node.js can easily freeze incoming socket connections.

### Worker Queues to the Rescue
By delegating document ingestion to BullMQ and Redis, the HTTP server responds immediately with a \`202 Accepted\` status code and a job ticket. Background workers consume tasks at controlled concurrency limits, with automated retries and dead-letter queue routing.
    `
  },
  {
    id: "idempotency-keys",
    index: "04",
    title: "Your API needs an idempotency key",
    tags: ["API Design", "Distributed Systems"],
    summary:
      "A timeout does not mean a request failed. How to make retries safe without accidentally doing the same thing twice.",
    date: "Aug 02, 2026",
    readTime: "5 min read",
    content: `
### Network Timeouts are Ambiguous
When a client sends a payment or status update and the TCP connection drops after 5 seconds, what happened?
- Did the packet reach the server?
- Did the database commit the row before the socket severed?

Without an idempotency key, retrying could double-charge or create duplicate rows. By persisting a unique client-generated \`Idempotency-Key\` in Redis with a short TTL, clients can retry aggressively with zero duplicate side effects.
    `
  }
];

export default function WritingSection({ onSelectArticle }) {
  return (
    <section className="writing-section section-rail" id="writing">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Field notes</p>
          <h2>
            Thinking out loud<span className="violet">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="#writing"
          onClick={(e) => {
            e.preventDefault();
            onSelectArticle(articlesData[0]);
          }}
        >
          All writing
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>

      <div className="article-list featured-articles">
        {articlesData.map((article) => (
          <article
            key={article.id}
            className="article-row"
            tabIndex={0}
            role="button"
            onClick={() => onSelectArticle(article)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectArticle(article);
              }
            }}
          >
            <div className="article-row-index mono">{article.index}</div>
            <div className="article-main">
              <div className="article-tags">
                {article.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </div>
            <div className="article-meta mono">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
              <ArrowUpRight size={21} strokeWidth={1.4} />
            </div>
          </article>
        ))}
      </div>

      <a
        className="writing-end-link text-link"
        href="#writing"
        onClick={(e) => {
          e.preventDefault();
          onSelectArticle(articlesData[1]);
        }}
      >
        More notes from the workbench
        <ArrowRight size={15} strokeWidth={2} />
      </a>
    </section>
  );
}
