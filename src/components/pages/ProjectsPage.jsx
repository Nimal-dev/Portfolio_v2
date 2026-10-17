import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import Nav from "../common/Nav";
import Icon from "../common/Icon";
import SmartImage from "../common/SmartImage";
import Contact from "../sections/Contact";
import "../sections/sections.css";
import "./pages.css";
import useReducedMotion from "../../hooks/useReducedMotion";

const filters = [
  { id: "all", label: "All" },
  { id: "Case study", label: "Case studies" },
  { id: "Web build", label: "Web builds" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const reduce = useReducedMotion();
  const visible = projects.filter((project) => filter === "all" || project.type === filter);

  return (
    <>
      <Nav />
      <main className="page">
        <header className="container page__head">
          <h1 className="h-section page__title">All projects</h1>
          <p className="lede page__lede">
            Case studies, client sites, and prototypes. Each one links to a page with the stack, the features, and screens.
          </p>

          <div className="filters" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`filters__btn ${filter === item.id ? "is-active" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                {filter === item.id && (
                  <Motion.span
                    className="filters__pill"
                    layoutId="filters-pill"
                    style={{ position: "absolute", inset: 0, display: "block" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span>{item.label}</span>
                <span className="filters__count">
                  {projects.filter((project) => item.id === "all" || project.type === item.id).length}
                </span>
              </button>
            ))}
          </div>
        </header>

        <Motion.ul className="container catalog" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <Motion.li
                key={project.id}
                layout
                className="catalog__item"
                style={{ "--accent": project.accent }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/projectspage/${project.id}`} className="catalog__card card">
                  <div className="catalog__media">
                    <SmartImage src={project.image} alt="" label={project.title} />
                    <span className="sticker sticker--lime catalog__status">{project.status}</span>
                  </div>
                  <div className="catalog__body">
                    <div className="catalog__row">
                      <h2 className="h-card">{project.title}</h2>
                      <span className="catalog__arrow" aria-hidden="true">
                        <Icon name="arrowUpRight" />
                      </span>
                    </div>
                    <p className="catalog__cat">{project.category}</p>
                    <p className="body catalog__desc">{project.description}</p>
                    <ul className="catalog__chips">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Motion.li>
            ))}
          </AnimatePresence>
        </Motion.ul>
      </main>
      <Contact />
    </>
  );
}
