import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

export default function PrivacyModal({ onClose }) {
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

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close privacy notice">
          <X size={18} />
        </button>

        <span className="mono" style={{ fontSize: "9px", color: "var(--terminal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          DISPATCH POLICIES
        </span>

        <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", margin: "14px 0 20px", color: "var(--white)" }}>
          Privacy Policy<span className="violet">.</span>
        </h2>

        <div style={{ fontSize: "13px", lineHeight: 1.95, color: "var(--copy)", display: "flex", flexDirection: "column", gap: "18px" }}>
          <p>
            This website collects your email address solely for delivering the occasional technical
            dispatches, notes, and updates from Sakshi Arya.
          </p>
          <p>
            <strong style={{ color: "var(--white)" }}>No Third-Party Brokers:</strong> Your contact
            details are never sold, rented, monetized, or shared with advertisers or third-party marketing
            platforms.
          </p>
          <p>
            <strong style={{ color: "var(--white)" }}>One-Click Unsubscribe:</strong> Every email
            sent contains an explicit, instantaneous unsubscribe link that purges your contact record
            from the dispatch registry.
          </p>
          <p>
            <strong style={{ color: "var(--white)" }}>Analytics &amp; Cookies:</strong> This site uses
            privacy-preserving telemetry without persistent cross-site tracking cookies.
          </p>
        </div>

        <div style={{ marginTop: "34px", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
          <button type="button" className="button button-primary" onClick={onClose}>
            <ShieldCheck size={16} /> Understood
          </button>
        </div>
      </div>
    </div>
  );
}
