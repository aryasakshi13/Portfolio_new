import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="scrollToTopBtn"
      title="Scroll to top"
      aria-label="Scroll to top of page"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        width: "48px",
        height: "48px",
        borderRadius: "999px",
        backgroundColor: "var(--c1)",
        color: "var(--on-c)",
        border: "2.5px solid var(--line)",
        boxShadow: "3px 3px 0 var(--shadow)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translate(0, 0)" : "translate(0, 14px)",
        transition: "opacity 0.2s ease, transform 0.2s ease, box-shadow 0.12s ease",
        zIndex: 50
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(1px, 1px)";
        e.currentTarget.style.boxShadow = "2px 2px 0 var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)";
        e.currentTarget.style.boxShadow = "3px 3px 0 var(--shadow)";
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
