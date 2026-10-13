import React from "react";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Where I've worked</h2>
        <div className="jobs">
          {EXPERIENCE.map((j) => (
            <article className="card job" key={j.company}>
              <span className="period" style={{ background: j.color }}>
                {j.period}
              </span>
              <div>
                <h3>{j.role}</h3>
                <div className="co">{j.company}</div>
                <ul>
                  {j.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
