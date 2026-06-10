import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import "../Sections/works.css";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import { projects } from "../../data/portfolioData";

function ProjectImage({ project }) {
  if (!project.image) {
    return (
      <div className="featured-project-placeholder">
        <span>{project.title}</span>
      </div>
    );
  }

  return (
    <ImageWithSkeleton
      src={project.image}
      alt={`${project.title} preview`}
      className="featured-project-image"
      loading="lazy"
      skeletonHeight="100%"
      skeletonWidth="100%"
      wrapperStyle={{ width: "100%", height: "100%" }}
    />
  );
}

function Works() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbTransform = useTransform(scrollYProgress, [0, 1], ["translateY(-80px)", "translateY(90px)"]);
  const featuredProjects = projects.filter((project) => project.featured);
  const selectedBuilds = projects.filter((project) => !project.featured).slice(0, 4);

  return (
    <section id="projects" className="portfolio-section works-section" ref={sectionRef}>
      <Motion.div className="projects-parallax-orb" style={{ transform: orbTransform }} />

      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Featured Work</p>
          <h2>Case studies built around product thinking, clean UI, and full-stack execution.</h2>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="featured-project-card glass-panel"
              style={{ "--project-accent": project.accent }}
            >
              <div className="featured-project-media">
                <ProjectImage project={project} />
                <span>{project.category}</span>
              </div>

              <div className="featured-project-body">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.role}</span>
                </div>
                <p className="featured-project-description">{project.description}</p>
                <div className="featured-stack">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <Link className="project-text-link" to={`/projectspage/${project.id}`}>
                  Read case study
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="selected-builds">
          <div className="selected-builds-header">
            <p className="section-kicker">Selected Web Builds</p>
            <Link to="/projectspage" className="project-text-link">
              View all projects
              <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="selected-builds-grid">
            {selectedBuilds.map((project) => (
              <article
                key={project.id}
                className="selected-build-card glass-panel"
                style={{ "--project-accent": project.accent }}
              >
                <div className="selected-build-image">
                  <ProjectImage project={project} />
                </div>
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/projectspage/${project.id}`} className="project-text-link">
                    Details
                    <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
