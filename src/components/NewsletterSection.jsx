import React, { useState } from "react";
import { Terminal, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSection({ onOpenPrivacy }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="newsletter section-rail" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-icon" aria-hidden="true">
        <Terminal size={28} strokeWidth={1.5} />
      </div>

      <p className="eyebrow">The occasional dispatch</p>
      <h2 id="newsletter-title">
        A little signal.
        <br />
        <span className="muted">None of the noise.</span>
      </h2>

      <p className="newsletter-description">
        Backend systems, AI engineering notes, and things worth sharing.
        <br />
        Thoughtful notes for people who like to build.
      </p>

      {submitted ? (
        <div className="newsletter-success" role="alert">
          <CheckCircle2 size={32} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <strong>You&apos;re on the list.</strong>
            <p>
              Thanks for subscribing with <span style={{ color: "var(--terminal)" }}>{email}</span>.
              Zero spam, no marketing fluff—only deep technical dispatches.
            </p>
          </div>
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>
          <div className="newsletter-input-row">
            <span className="input-prompt" aria-hidden="true">
              &gt;
            </span>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@domain.com"
              required
              maxLength={254}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="button button-primary">
              Count me in
              <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </div>

          {error && (
            <p className="form-error" style={{ color: "#f87171", fontSize: "11px", marginTop: "10px" }}>
              {error}
            </p>
          )}

          <p id="newsletter-note" className="newsletter-note">
            By joining, you agree to receive Sakshi’s newsletter.{" "}
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onOpenPrivacy();
              }}
            >
              Privacy policy
            </a>
            .
          </p>
        </form>
      )}

      <span className="newsletter-decoration mono" aria-hidden="true">
        // stay curious
      </span>
    </section>
  );
}
