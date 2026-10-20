import React, { useEffect } from "react";
import { X, ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close article">
          <X size={18} />
        </button>

        <div className="article-tags" style={{ marginBottom: "16px" }}>
          {article.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1, marginBottom: "18px", color: "var(--white)" }}>
          {article.title}
        </h2>

        <div className="mono" style={{ display: "flex", gap: "20px", fontSize: "10px", color: "var(--quiet)", marginBottom: "32px", paddingBottom: "20px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Calendar size={13} /> {article.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={13} /> {article.readTime}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--terminal)" }}>
            <BookOpen size={13} /> Sakshi Arya
          </span>
        </div>

        <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--white)", marginBottom: "26px", fontWeight: 400 }}>
          {article.summary}
        </p>

        <div
          style={{
            fontSize: "13px",
            lineHeight: 2,
            color: "var(--copy)",
            whiteSpace: "pre-line"
          }}
        >
          {article.content}
        </div>

        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span className="mono" style={{ fontSize: "10px", color: "var(--slate)" }}>
            // end of field note
          </span>
          <button
            type="button"
            className="button button-primary"
            onClick={onClose}
          >
            Back to notes
          </button>
        </div>
      </div>
    </div>
  );
}
