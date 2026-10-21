import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer({ onGoToAbout, onGoToIntro, onOpenPrivacy, onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTopClick = (e) => {
    e.preventDefault();
    if (onGoToIntro) {
      onGoToIntro();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (onGoToAbout) {
      onGoToAbout();
    } else {
      scrollTo("about");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a
          className="wordmark"
          href="#top"
          onClick={handleTopClick}
        >
          sa<span>_</span>
        </a>
        <p>Build thoughtfully. Share openly.</p>
        <a
          href="https://github.com/aryasakshi13"
          target="_blank"
          rel="noreferrer"
        >
          Find me on GitHub
          <ArrowUpRight size={15} strokeWidth={2} />
        </a>
      </div>

      <div className="footer-bottom mono">
        <span>© 2026 Sakshi Arya. Crafted with precision.</span>
        <div>
          <a
            href="#about"
            onClick={handleAboutClick}
          >
            About
          </a>
          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
          >
            Get in touch
          </a>
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              onOpenPrivacy();
            }}
          >
            Privacy
          </a>
        </div>
        <a
          href="#top"
          className="back-top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
        >
          Back to top
          <ArrowUp size={13} strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}
