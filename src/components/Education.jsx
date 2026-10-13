import React from "react";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <h2>Education</h2>
        <div className="edu">
          {EDUCATION.map((e) => (
            <div className="card" key={e.title}>
              <h3>{e.title}</h3>
              <p>
                {e.place}, {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
