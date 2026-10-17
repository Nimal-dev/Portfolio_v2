import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { profile, projects } from "../../data/portfolioData";
import Nav from "../common/Nav";
import Icon from "../common/Icon";
import SmartImage from "../common/SmartImage";
import Contact from "../sections/Contact";
import "../sections/sections.css";
import "./pages.css";
import useReducedMotion from "../../hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectDetails() {
  const { id } = useParams();
  const reduce = useReducedMotion();
  const index = projects.findIndex((item) => item.id === id);
  const project = projects[index];
  const next = project ? projects[(index + 1) % projects.length] : null;
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    window.lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.lenis?.start();
    };
  }, [lightbox]);

  if (!project) {
    return (
      <>
        <Nav />
        <main className="page">
          <div className="container page__head">
            <h1 className="h-section">That project is not here</h1>
            <p className="lede page__lede">The link may be old. Everything I have published is listed on the projects page.</p>
            <Link to="/projectspage" className="btn">
              See all projects
              <Icon name="arrowRight" />
            </Link>
          </div>
        </main>
        <Contact />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="page detail" style={{ "--accent": project.accent }}>
        <div className="container">
          <Link to="/projectspage" className="tlink detail__back">
            <Icon name="arrowLeft" />
            All projects
          </Link>

          <header className="detail__head">
            <Motion.h1
              className="detail__title"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              {project.logo && <img className="detail__logo" src={project.logo} alt="" width="96" height="96" />}
              {project.title}
            </Motion.h1>
            <Motion.div
              className="detail__intro"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              <p className="lede">{project.description}</p>
              <dl className="detail__meta">
                <div>
                  <dt>Type</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
              </dl>
              <div className="detail__actions">
                {project.liveUrl && (
                  <a className="btn" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Open live site
                    <Icon name="external" />
                  </a>
                )}
                <a
                  className="btn btn--ghost"
                  href={`mailto:${profile.email}?subject=About ${encodeURIComponent(project.title)}`}
                >
                  Ask me about it
                  <Icon name="mail" />
                </a>
              </div>
            </Motion.div>
          </header>

          <Motion.figure
            className="detail__cover"
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            <SmartImage src={project.image} alt={`${project.title} main screen`} label={project.title} />
          </Motion.figure>

          <div className="detail__grid">
            <article className="detail__main">
              <h2 className="h-card">Overview</h2>
              <p className="body detail__p">{project.fullDescription}</p>

              <h2 className="h-card">What it does</h2>
              <ol className="detail__list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ol>

              <h2 className="h-card">Why it matters</h2>
              <ul className="detail__list detail__list--plain">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <aside className="detail__side">
              <div className="detail__box card">
                <h2 className="h-small">Stack</h2>
                <ul className="detail__chips">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {next && (
                <Link to={`/projectspage/${next.id}`} className="detail__box detail__next card" style={{ "--accent": next.accent }}>
                  <span className="small">Next project</span>
                  <span className="h-card">{next.title}</span>
                  <span className="detail__next-cat">{next.category}</span>
                  <span className="detail__next-arrow" aria-hidden="true">
                    <Icon name="arrowRight" />
                  </span>
                </Link>
              )}
            </aside>
          </div>

          {project.gallery?.length > 0 && (
            <section className="detail__gallery">
              <h2 className="h-card">Screens</h2>
              <ul className="gallery">
                {project.gallery.map((src, i) => (
                  <li key={`${src}-${i}`}>
                    <button type="button" className="gallery__item" onClick={() => setLightbox(src)}>
                      <img src={src} alt={`${project.title} screen ${i + 1}`} loading="lazy" decoding="async" />
                      <span className="gallery__zoom" aria-hidden="true">
                        <Icon name="plus" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>

      <AnimatePresence>
        {lightbox && (
          <Motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged screenshot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            <Motion.img
              src={lightbox}
              alt={`${project.title} enlarged screen`}
              initial={reduce ? false : { scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={reduce ? undefined : { scale: 0.96, y: 10 }}
              transition={{ duration: 0.45, ease }}
              onClick={(event) => event.stopPropagation()}
            />
            <button type="button" className="lightbox__close icon-btn" onClick={() => setLightbox(null)} aria-label="Close">
              <Icon name="close" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </>
  );
}
