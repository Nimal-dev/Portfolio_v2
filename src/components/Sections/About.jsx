import React from "react";
import { profile } from "../../data/portfolioData";

function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="container section-grid">
        <div
          className="section-heading"
        >
          <p className="section-kicker">About</p>
          <h2>
            Product-minded developer with a full-stack foundation.
          </h2>
        </div>

        <div
          className="about-content glass-panel"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="about-strengths">
            {profile.strengths.map((strength) => (
              <div key={strength} className="strength-pill">
                <i className="bi bi-stars" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
