import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "../../data/portfolioData";
import useMedia from "../../hooks/useMedia";
import Icon from "../common/Icon";
import Doodle from "../common/Doodle";
import SmartImage from "../common/SmartImage";
import { PopText, Squiggle } from "../common/Reveal";
import useReducedMotion from "../../hooks/useReducedMotion";

const featured = projects.filter((project) => project.featured);
const builds = projects.filter((project) => !project.featured);
const stickers = ["sticker--orange", "sticker--lime", "sticker--violet"];

/**
 * Image frame that tilts toward the cursor.
 */
function TiltImage({ project, reduce, fine }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (event) => {
    if (!ref.current || reduce || !fine) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 12);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      className="stack__media-wrap"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <Link to={`/projectspage/${project.id}`} className="stack__media" aria-label={`${project.title} screens`}>
        <SmartImage src={project.image} alt="" label={project.title} />
      </Link>
    </Motion.div>
  );
}

function StackCard({ project, index, total, progress, sticky, reduce, fine }) {
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const rotate = useTransform(progress, [index / total, 1], [0, (index % 2 ? 1 : -1) * 1.5]);

  return (
    <div className={`stack__slot ${sticky ? "is-sticky" : ""}`}>
      <Motion.article
        className="stack__card card"
        style={{
          "--accent": project.accent,
          scale: sticky ? scale : 1,
          rotate: sticky ? rotate : 0,
          top: sticky ? `calc(var(--nav-h) + ${index * 22}px)` : 0,
        }}
      >
        <span className={`sticker ${stickers[index % stickers.length]} stack__tag`}>{project.category}</span>

        <div className="stack__text">
          <p className="stack__role">{project.role}</p>
          <h3 className="h-card stack__title">
            {project.logo && <img className="stack__logo" src={project.logo} alt="" width="44" height="44" />}
            {project.title}
          </h3>
          <p className="body stack__desc">{project.description}</p>
          <ul className="stack__chips">
            {project.techStack.slice(0, 5).map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="stack__actions">
            <Link to={`/projectspage/${project.id}`} className="btn btn--blue">
              Read case study
              <Icon name="arrowRight" />
            </Link>
            {project.liveUrl && (
              <a className="tlink" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site
                <Icon name="external" />
              </a>
            )}
          </div>
        </div>

        <TiltImage project={project} reduce={reduce} fine={fine} />
      </Motion.article>
    </div>
  );
}

function BuildRow({ project, onEnter, onLeave, index, reduce }) {
  return (
    <Motion.li
      className="builds__row"
      onPointerEnter={() => onEnter(project)}
      onPointerLeave={onLeave}
      initial={reduce ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={reduce ? undefined : { x: -3, y: -3, rotate: -0.5 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.06 }}
    >
        <Link to={`/projectspage/${project.id}`} className="builds__link">
          <span className="builds__idx">{String(index + 1).padStart(2, "0")}</span>
          <span className="builds__title">{project.title}</span>
          <span className="builds__cat">{project.category}</span>
          <span className="builds__status sticker sticker--lime">{project.status}</span>
          <span className="builds__arrow" aria-hidden="true">
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </span>
        </Link>
        {project.liveUrl && (
          <a className="builds__live" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title}, open live site`}>
            <Icon name="external" strokeWidth={2.2} />
          </a>
        )}
    </Motion.li>
  );
}

export default function Work() {
  const reduce = useReducedMotion();
  const wide = useMedia("(min-width: 900px)", true);
  const fine = useMedia("(pointer: fine)", true);
  const sticky = wide && !reduce;

  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  const [hovered, setHovered] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
  const py = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

  const onMove = (event) => {
    mx.set(event.clientX + 28);
    my.set(event.clientY - 100);
  };

  return (
    <section id="work" className="section section--white work">
      <Doodle shape="star" fill="var(--yellow)" size={64} className="work__d work__d--1" />
      <Doodle shape="squiggle" fill="none" size={110} className="work__d work__d--2" />

      <div className="container">
        <div className="section__head section__head--split">
          <h2 className="h-section">
            <Squiggle color="var(--lime)">
              <PopText text="Selected work" />
            </Squiggle>
          </h2>
          <Link to="/projectspage" className="tlink">
            All projects
            <Icon name="arrowRight" strokeWidth={2.4} />
          </Link>
        </div>
      </div>

      <div className="container stack" ref={stackRef}>
        {featured.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            total={featured.length}
            progress={scrollYProgress}
            sticky={sticky}
            reduce={reduce}
            fine={fine}
          />
        ))}
      </div>

      <div className="container builds">
        <div className="builds__head">
          <h3 className="h-card">
            <PopText text="Also built" />
          </h3>
          <p className="small">Client sites and smaller products, all live.</p>
        </div>

        <ul className="builds__list" onPointerMove={fine ? onMove : undefined}>
          {builds.map((project, index) => (
            <BuildRow
              key={project.id}
              project={project}
              index={index}
              reduce={reduce}
              onEnter={fine ? setHovered : () => {}}
              onLeave={() => setHovered(null)}
            />
          ))}
        </ul>

        <AnimatePresence>
          {fine && hovered && (
            <Motion.div
              className="builds__preview card"
              style={{ x: px, y: py }}
              initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.8, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-hidden="true"
            >
              <img key={hovered.id} src={hovered.image} alt="" />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
