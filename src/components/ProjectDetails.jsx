import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects, profile } from "../data/portfolioData";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ImageWithSkeleton from "./common/ImageWithSkeleton";
import "./project-details.css";

function ProjectVisual({ project, className = "main-project-image" }) {
  if (!project.image) {
    return (
      <div className="detail-placeholder">
        <span>{project.title}</span>
      </div>
    );
  }

  return (
    <ImageWithSkeleton
      src={project.image}
      alt={`${project.title} main preview`}
      className={className}
      skeletonHeight="100%"
      skeletonWidth="100%"
      wrapperStyle={{ width: "100%", height: "100%" }}
    />
  );
}

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-not-found">
          <div className="glass-panel">
            <h1>Project not found</h1>
            <p>The project you are looking for is not available in this portfolio.</p>
            <button type="button" onClick={() => navigate("/projectspage")} className="btn-primary-glass">
              Back to projects
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="project-details-page" style={{ "--project-accent": project.accent }}>
        <div className="detail-page-orb" />
        <div className="container">
          <Link to="/projectspage" className="detail-back-link">
            <i className="bi bi-arrow-left" />
            Back to Project Index
          </Link>

          <header
            className="details-hero"
          >
            <p className="section-kicker">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="detail-meta-row">
              <span>{project.type}</span>
              <span>{project.role}</span>
              <span>{project.status}</span>
            </div>
          </header>

          <div
            className="detail-hero-visual glass-panel"
          >
            <ProjectVisual project={project} />
          </div>

          <div className="project-info-grid">
            <section
              className="info-section glass-panel"
            >
              <p className="section-kicker">Overview</p>
              <h2>About the project</h2>
              <p className="full-description">{project.fullDescription}</p>

              <h2>Key features</h2>
              <ul className="details-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <i className="bi bi-check-circle-fill" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h2>Impact</h2>
              <ul className="details-features">
                {project.impact.map((impact) => (
                  <li key={impact}>
                    <i className="bi bi-lightning-charge-fill" />
                    {impact}
                  </li>
                ))}
              </ul>
            </section>

            <aside className="sidebar-section">
              <div
                className="tech-stack-box glass-panel"
              >
                <p className="section-kicker">Stack</p>
                <h2>Technologies</h2>
                <div className="detail-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div
                className="cta-box glass-panel"
              >
                <p className="section-kicker">Next Step</p>
                <h2>Want to discuss this build?</h2>
                <p>
                  I can walk through the design decisions, implementation choices, and what I would improve next.
                </p>
                <a
                  href={`mailto:${profile.email}?subject=Portfolio inquiry: ${project.title}`}
                  className="btn-primary-glass"
                >
                  Contact Me
                  <i className="bi bi-envelope-fill" />
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-secondary-glass">
                    Open Live Project
                    <i className="bi bi-box-arrow-up-right" />
                  </a>
                )}
              </div>
            </aside>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <section className="gallery-section">
              <div className="section-heading centered">
                <p className="section-kicker">Gallery</p>
                <h2>Product screens and interface snapshots.</h2>
              </div>

              <div className="gallery-grid">
                {project.gallery.map((img, index) => (
                  <button
                    type="button"
                    key={`${img}-${index}`}
                    className="gallery-item glass-panel"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)} role="presentation">
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage} alt="Full size project screenshot" />
            <button type="button" className="close-lightbox" onClick={() => setSelectedImage(null)} aria-label="Close image">
              x
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProjectDetails;
