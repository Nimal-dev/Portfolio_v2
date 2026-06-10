import React from "react";
import "./skills.css";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import { skillGroups } from "../../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Technical Toolkit</p>
          <h2>Modern web, mobile, backend, and AI-ready product skills.</h2>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <article
              className="skill-group glass-panel"
              key={group.title}
            >
              <div className="skill-group-header">
                <span>0{groupIndex + 1}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-grid">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="tech-card"
                    style={{ "--glow-color": skill.color }}
                  >
                    <ImageWithSkeleton
                      src={skill.img}
                      className="tech-icon"
                      alt={skill.name}
                      skeletonHeight="54px"
                      skeletonWidth="54px"
                      wrapperStyle={{ width: "54px", height: "54px" }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
