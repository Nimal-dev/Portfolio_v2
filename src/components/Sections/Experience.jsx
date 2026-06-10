import React from "react";
import { experience } from "../../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="container section-grid">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Hands-on delivery across real web and mobile projects.</h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="experience-card glass-panel"
            >
              <div className="experience-marker" />
              <div className="experience-card-header">
                <span>{item.period}</span>
                <small>{item.type}</small>
              </div>
              <h3>{item.role}</h3>
              <p className="experience-company">
                <i className="bi bi-briefcase-fill" />
                {item.company}
              </p>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
