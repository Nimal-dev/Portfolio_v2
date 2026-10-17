import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion as Motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "../../data/portfolioData";
import useMedia from "../../hooks/useMedia";
import useReducedMotion from "../../hooks/useReducedMotion";

const cards = projects.filter((project) => project.image).slice(0, 5);
const middle = (cards.length - 1) / 2;

function Card({ project, index, delay, reduce }) {
  const offset = index - middle;
  return (
    <Motion.div
      className="hstack__slot"
      style={{ "--i": offset, "--abs": Math.abs(offset) }}
      initial={reduce ? false : { y: 160, opacity: 0, rotate: 0 }}
      animate={{ y: 0, opacity: 1, rotate: offset * 5 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <Motion.div
        className="hstack__card"
        style={{ "--accent": project.accent }}
        whileHover={reduce ? undefined : { y: -90, scale: 1.12, rotate: 0 }}
        whileTap={reduce ? undefined : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 380, damping: 14, mass: 0.8 }}
      >
        <Link to={`/projectspage/${project.id}`} aria-label={`${project.title}: open project`}>
          <img src={project.image} alt="" loading="eager" decoding="async" />
          <span className="hstack__label">
            <strong>{project.title}</strong>
            <em>{project.category}</em>
          </span>
        </Link>
      </Motion.div>
    </Motion.div>
  );
}

/**
 * Real project screenshots fanned across the bottom of the hero.
 * The whole fan tilts toward the cursor and drifts down as you scroll.
 */
export default function HeroStack() {
  const reduce = useReducedMotion();
  const compact = useMedia("(max-width: 760px)");
  const fine = useMedia("(pointer: fine)", true);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-1, 1], [-9, 9]), { stiffness: 90, damping: 20 });
  const rotateX = useSpring(useTransform(py, [-1, 1], [22, 8]), { stiffness: 90, damping: 20 });

  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 220]);

  useEffect(() => {
    if (!fine || reduce) return undefined;
    const onMove = (event) => {
      px.set((event.clientX / window.innerWidth) * 2 - 1);
      py.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine, reduce, px, py]);

  if (compact) {
    return (
      <div className="hstack hstack--row" aria-label="Selected projects">
        {cards.map((project) => (
          <Link
            key={project.id}
            to={`/projectspage/${project.id}`}
            className="hstack__card hstack__card--row"
            style={{ "--accent": project.accent }}
          >
            <img src={project.image} alt="" loading="lazy" decoding="async" />
            <span className="hstack__label">
              <strong>{project.title}</strong>
              <em>{project.category}</em>
            </span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="hstack" aria-label="Selected projects">
      <Motion.div
        className="hstack__fan"
        style={{ rotateX: reduce ? 14 : rotateX, rotateY: reduce ? 0 : rotateY, y: drift }}
      >
        {cards.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={index}
            reduce={reduce}
            delay={0.75 + Math.abs(index - middle) * 0.1}
          />
        ))}
      </Motion.div>
    </div>
  );
}
