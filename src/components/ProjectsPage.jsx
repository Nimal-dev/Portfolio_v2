import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ImageWithSkeleton from "./common/ImageWithSkeleton";
import { projects } from "../data/portfolioData";

function ProjectPreview({ project }) {
  if (!project.image) {
    return (
      <div className="catalog-placeholder">
        <span>{project.title}</span>
      </div>
    );
  }

  return (
    <ImageWithSkeleton
      src={project.image}
      alt={`${project.title} preview`}
      className="catalog-image"
      loading="lazy"
      skeletonHeight="100%"
      skeletonWidth="100%"
      wrapperStyle={{ width: "100%", height: "100%" }}
    />
  );
}

const groups = [
  {
    title: "Featured Case Studies",
    description: "Deep product builds with clearer problem, role, stack, and feature detail.",
    filter: (project) => project.featured,
  },
  {
    title: "Selected Web Builds",
    description: "Client and brand websites that show delivery range, responsiveness, and visual polish.",
    filter: (project) => !project.featured,
  },
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="projects-page">
        <div className="projects-page-orb" />
        <div className="container">
          <header
            className="projects-header"
          >
            <p className="section-kicker">Project Index</p>
            <h1>Professional builds, product experiments, and case studies.</h1>
            <p>
              A curated view of the work I would want recruiters and technical reviewers to inspect first.
            </p>
          </header>

          {groups.map((group) => {
            const groupProjects = projects.filter(group.filter);

            return (
              <section className="catalog-section" key={group.title}>
                <div className="catalog-section-header">
                  <div>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                  <span>{groupProjects.length} projects</span>
                </div>

                <div className="catalog-grid">
                  {groupProjects.map((project) => (
                    <article
                      key={project.id}
                      className="catalog-project-card glass-panel"
                      style={{ "--project-accent": project.accent }}
                    >
                      <div className="catalog-media">
                        <ProjectPreview project={project} />
                        <span>{project.status}</span>
                      </div>

                      <div className="catalog-content">
                        <p>{project.category}</p>
                        <h3>{project.title}</h3>
                        <span>{project.role}</span>
                        <p className="catalog-description">{project.description}</p>

                        <div className="catalog-stack">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>

                        <ul className="catalog-highlights">
                          {project.features.slice(0, 2).map((feature) => (
                            <li key={feature}>
                              <i className="bi bi-check2-circle" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="catalog-actions">
                          <Link to={`/projectspage/${project.id}`} className="project-text-link">
                            View details
                            <i className="bi bi-arrow-up-right" />
                          </Link>
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-text-link muted">
                              Live
                              <i className="bi bi-box-arrow-up-right" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
