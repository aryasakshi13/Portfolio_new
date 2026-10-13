import React from "react";

export default function StatsMarquee() {
  const skills = [
    { name: "React", label: "Frontend" },
    { name: "TypeScript", label: "Type-Safe JS" },
    { name: "Node.js", label: "Runtime" },
    { name: "Express.js", label: "REST APIs" },
    { name: "Hybrid RAG", label: "AI Retrieval" },
    { name: "Qdrant", label: "Vector Search" },
    { name: "BM25 & RRF", label: "Rank Fusion" },
    { name: "Tailwind CSS", label: "Modern Styling" },
    { name: "MongoDB", label: "NoSQL DB" },
    { name: "SQL", label: "Database" },
    { name: "Redis & BullMQ", label: "Async Queues" },
    { name: "Redux Toolkit", label: "State Mgmt" },
    { name: "Cohere & Gemini", label: "Rerank & Embed" },
    { name: "Monaco Editor", label: "Code Workspaces" }
  ];

  return (
    <div className="stats-bar" aria-label="Skills & Technologies Marquee">
      <div className="stats-track">
        {/* First set of skills */}
        {skills.map((skill, idx) => (
          <React.Fragment key={`skill-1-${idx}`}>
            <div className="stat-item">
              <span className="stat-number">{skill.name}</span>
              <span className="stat-label">{skill.label}</span>
            </div>
            <span className="stat-divider" />
          </React.Fragment>
        ))}

        {/* Duplicate set for seamless continuous marquee loop */}
        {skills.map((skill, idx) => (
          <React.Fragment key={`skill-2-${idx}`}>
            <div className="stat-item">
              <span className="stat-number">{skill.name}</span>
              <span className="stat-label">{skill.label}</span>
            </div>
            <span className="stat-divider" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
