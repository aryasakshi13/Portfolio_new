import React from "react";
import {
  Code,
  Play,
  Layers,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
  Users,
  Search,
  Briefcase,
  FileCheck,
  Zap
} from "lucide-react";

/* 1. Front Arena Browser Playground Mockup */
export function FrontArenaMockup() {
  return (
    <div
      style={{
        backgroundColor: "#0D0E12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
      }}
    >
      {/* Top Browser Bar */}
      <div
        style={{
          backgroundColor: "#13141A",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }}></span>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B" }}></span>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}></span>
          <span style={{ color: "#71717A", fontSize: "0.7rem", marginLeft: "6px" }}>
            front-arena.vercel.app/sandbox
          </span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "#34D399",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "0.68rem"
          }}
        >
          <Play size={10} fill="#34D399" /> Live Preview
        </div>
      </div>

      {/* Editor & Preview Split Screen */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          minHeight: "220px"
        }}
      >
        {/* Left: Code Pane */}
        <div
          style={{
            backgroundColor: "#0A0B0E",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
            padding: "12px",
            color: "#D4D4D8",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "10px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                paddingBottom: "6px"
              }}
            >
              <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>App.tsx</span>
              <span style={{ color: "#52525B" }}>index.css</span>
              <span style={{ color: "#52525B" }}>preview.html</span>
            </div>
            <div style={{ color: "#9CA3AF", lineHeight: 1.6 }}>
              <span style={{ color: "#C084FC" }}>export default function</span>{" "}
              <span style={{ color: "#60A5FA" }}>App</span>() &#123;
              <br />
              &nbsp;&nbsp;<span style={{ color: "#C084FC" }}>const</span> [count, setCount] ={" "}
              <span style={{ color: "#34D399" }}>useState</span>(0);
              <br />
              &nbsp;&nbsp;<span style={{ color: "#C084FC" }}>return</span> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: "#F472B6" }}>button</span>{" "}
              <span style={{ color: "#FBBF24" }}>className</span>=
              <span style={{ color: "#34D399" }}>"interactive-btn"</span>&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Arena Live: &#123;count&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: "#F472B6" }}>button</span>&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </div>
          </div>
          <div
            style={{
              fontSize: "0.68rem",
              color: "#52525B",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              paddingTop: "6px"
            }}
          >
            Monaco Engine • UTF-8 • TypeScript 5.0
          </div>
        </div>

        {/* Right: Live Preview Iframe Output */}
        <div
          style={{
            backgroundColor: "#111217",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div
            style={{
              padding: "12px 20px",
              background: "linear-gradient(135deg, #7C3AED, #6366F1)",
              borderRadius: "8px",
              color: "#FFFFFF",
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(124, 58, 237, 0.35)",
              marginBottom: "12px"
            }}
          >
            Interactive Component
          </div>
          <span style={{ color: "#71717A", fontSize: "0.7rem" }}>
            Instant DOM Rendering in Sandboxed Iframe
          </span>
        </div>
      </div>
    </div>
  );
}

/* 2. Job Portal Recruitment Dashboard Mockup */
export function JobPortalMockup() {
  return (
    <div
      style={{
        backgroundColor: "#0D0E12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: "0.78rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
      }}
    >
      {/* Dashboard Top Header */}
      <div
        style={{
          backgroundColor: "#14151C",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Briefcase size={14} color="var(--accent-light)" />
          <span style={{ fontWeight: 600, color: "#FFFFFF" }}>Recruiter Control Center</span>
          <span
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.15)",
              color: "var(--accent-light)",
              fontSize: "0.68rem",
              padding: "2px 6px",
              borderRadius: "4px",
              fontFamily: "var(--font-mono)"
            }}
          >
            RBAC: RECRUITER
          </span>
        </div>
        <div style={{ color: "#A1A1AA", fontSize: "0.72rem" }}>JWT Session Verified</div>
      </div>

      {/* Metrics Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          padding: "14px 16px",
          backgroundColor: "#0A0B0E"
        }}
      >
        <div
          style={{
            backgroundColor: "#13141B",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <div style={{ color: "#71717A", fontSize: "0.7rem" }}>Active Postings</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>12 Roles</div>
        </div>
        <div
          style={{
            backgroundColor: "#13141B",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <div style={{ color: "#71717A", fontSize: "0.7rem" }}>Total Applicants</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-light)" }}>
            148 Candidates
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#13141B",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <div style={{ color: "#71717A", fontSize: "0.7rem" }}>Shortlisted</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#34D399" }}>
            24 Evaluated
          </div>
        </div>
      </div>

      {/* Candidate Pipeline Sample */}
      <div style={{ padding: "12px 16px", backgroundColor: "#0E0F14" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 10px",
            backgroundColor: "#151720",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "6px"
          }}
        >
          <div>
            <div style={{ fontWeight: 600, color: "#F5F5F5" }}>Frontend Engineer (React / TS)</div>
            <div style={{ color: "#71717A", fontSize: "0.7rem" }}>Delhi NCR • Full-Time</div>
          </div>
          <span
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              color: "#34D399",
              padding: "3px 8px",
              borderRadius: "4px",
              fontSize: "0.7rem",
              fontWeight: 600
            }}
          >
            Shortlisted
          </span>
        </div>
      </div>
    </div>
  );
}

/* 3. Bhagavad Gita RAG Hybrid Pipeline Architecture Mockup */
export function GitaRAGMockup() {
  return (
    <div
      style={{
        backgroundColor: "#0D0E12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        padding: "18px",
        width: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingBottom: "8px"
        }}
      >
        <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>
          Hybrid Retrieval Pipeline (Vector + BM25)
        </span>
        <span style={{ color: "#10B981", fontSize: "0.7rem" }}>Reciprocal Rank Fusion</span>
      </div>

      {/* Visual Pipeline Flow */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Step 1: Query */}
        <div
          style={{
            backgroundColor: "#14151C",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span style={{ color: "#A1A1AA" }}>Query: "How does one master the restless mind?"</span>
          <span style={{ color: "var(--accent-light)", fontSize: "0.7rem" }}>Input Tokenized</span>
        </div>

        {/* Step 2: Dual Parallel Retrieval */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.08)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              padding: "10px",
              borderRadius: "6px"
            }}
          >
            <div style={{ color: "var(--accent-light)", fontWeight: 600, marginBottom: "4px" }}>
              Dense Vector (Qdrant)
            </div>
            <div style={{ color: "#71717A", fontSize: "0.7rem" }}>
              Cosine similarity over semantic embeddings (k=20)
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              padding: "10px",
              borderRadius: "6px"
            }}
          >
            <div style={{ color: "#38BDF8", fontWeight: 600, marginBottom: "4px" }}>
              Sparse Lexical (BM25)
            </div>
            <div style={{ color: "#71717A", fontSize: "0.7rem" }}>
              Exact term frequency & inverse document scoring (k=20)
            </div>
          </div>
        </div>

        {/* Step 3: RRF & Reranker */}
        <div
          style={{
            backgroundColor: "#161720",
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Cpu size={14} color="#A78BFA" />
            <span style={{ color: "#F5F5F5", fontWeight: 600 }}>
              Reciprocal Rank Fusion (k=60) &rarr; Cross-Encoder
            </span>
          </div>
          <span style={{ color: "#34D399", fontSize: "0.7rem" }}>Top 3 Chunks Verified</span>
        </div>

        {/* Output */}
        <div
          style={{
            backgroundColor: "#0A0B0E",
            borderLeft: "2px solid #10B981",
            padding: "8px 12px",
            color: "#D4D4D8",
            fontSize: "0.72rem"
          }}
        >
          <span style={{ color: "#10B981", fontWeight: 600 }}>Verified Citation: </span>
          BG Chapter 6, Verse 35 (Abhyasa & Vairagya)
        </div>
      </div>
    </div>
  );
}

/* 4. BullMQ & Redis Background Worker Queue Mockup */
export function BullMQWorkerMockup() {
  return (
    <div
      style={{
        backgroundColor: "#0D0E12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        padding: "18px",
        width: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingBottom: "8px"
        }}
      >
        <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>
          BullMQ / Redis Ingestion Telemetry
        </span>
        <span style={{ color: "#34D399", fontSize: "0.7rem" }}>Workers Active (4)</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Queue Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px"
          }}
        >
          <div
            style={{
              backgroundColor: "#14151D",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <div style={{ color: "#71717A", fontSize: "0.68rem" }}>Pending Jobs</div>
            <div style={{ color: "#F5F5F5", fontWeight: 700, fontSize: "1rem" }}>0</div>
          </div>
          <div
            style={{
              backgroundColor: "#14151D",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <div style={{ color: "#71717A", fontSize: "0.68rem" }}>Processing</div>
            <div style={{ color: "var(--accent-light)", fontWeight: 700, fontSize: "1rem" }}>
              2 Ingesting
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#14151D",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <div style={{ color: "#71717A", fontSize: "0.68rem" }}>Completed</div>
            <div style={{ color: "#34D399", fontWeight: 700, fontSize: "1rem" }}>124</div>
          </div>
        </div>

        {/* Live Job Item */}
        <div
          style={{
            backgroundColor: "#111219",
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ color: "#F5F5F5" }}>Job #125: doc-chunking-gemini.pdf</span>
            <span style={{ color: "var(--accent-light)" }}>78% Chunks Embedded</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "5px",
              backgroundColor: "#27272A",
              borderRadius: "3px",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                width: "78%",
                height: "100%",
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                borderRadius: "3px"
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0A0B0E",
            padding: "8px 12px",
            color: "#A1A1AA",
            fontSize: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span>Isolated from API Event Loop</span>
          <span style={{ color: "#10B981" }}>HTTP Latency: 22ms</span>
        </div>
      </div>
    </div>
  );
}

/* 5. DevTinder Social Connection Mockup */
export function DevTinderMockup() {
  return (
    <div
      style={{
        backgroundColor: "#0D0E12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        padding: "18px",
        width: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: "0.78rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
      }}
    >
      <div
        style={{
          backgroundColor: "#14151C",
          borderRadius: "8px",
          padding: "14px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 700
            }}
          >
            DEV
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#FFFFFF" }}>Full-Stack Engineer Match</div>
            <div style={{ color: "#71717A", fontSize: "0.72rem" }}>Active Collaborator • Open to OSS</div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <span className="tech-pill">React</span>
          <span className="tech-pill">Node.js</span>
          <span className="tech-pill">MongoDB</span>
          <span className="tech-pill">Tailwind</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "10px"
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
              padding: "7px",
              borderRadius: "6px",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "#A1A1AA",
              fontSize: "0.75rem"
            }}
          >
            Skip
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              padding: "7px",
              borderRadius: "6px",
              backgroundColor: "var(--accent)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "0.75rem"
            }}
          >
            Connect
          </div>
        </div>
      </div>
    </div>
  );
}
