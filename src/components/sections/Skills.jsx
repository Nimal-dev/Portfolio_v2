import React from "react";
import { motion as Motion } from "framer-motion";
import { skillGroups } from "../../data/portfolioData";
import Doodle from "../common/Doodle";
import { Float, Pop, PopText, Squiggle } from "../common/Reveal";
import useReducedMotion from "../../hooks/useReducedMotion";

const tints = ["var(--yellow)", "var(--blue-soft)", "var(--lime-soft)", "var(--violet-soft)", "var(--white)"];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="section section--violet skills">
      <Doodle shape="heart" fill="var(--orange)" size={60} className="skills__d skills__d--1" />
      <Doodle shape="blob" fill="var(--yellow)" size={150} className="skills__d skills__d--2" />

      <div className="container">
        <div className="section__head section__head--split">
          <h2 className="h-section">
            <Squiggle color="var(--blue)">
              <PopText text="What I work with" />
            </Squiggle>
          </h2>
          <p className="small skills__intro">Grouped by where it shows up in my work, not by how long the list is.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Float key={group.title} className={index === 0 ? "skills__float skills__float--wide" : "skills__float"} amount={7} duration={4 + index * 0.6} delay={index * 0.4}>
            <Pop
              className="skills__group card"
              delay={index * 0.07}
              rotate={index % 2 ? 2 : -2}
              style={{ "--tint": tints[index % tints.length] }}
            >
              <div className="skills__group-head">
                <h3 className="h-small">{group.title}</h3>
                <p className="small">{group.note}</p>
              </div>
              <ul className="skills__chips">
                {group.items.map((item, i) => (
                  <Motion.li
                    key={item}
                    className="chip skills__chip"
                    style={{ "--d": `${(i * 0.35 + index * 0.2) % 2.4}s` }}
                    initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    whileHover={reduce ? undefined : { rotate: [-4, 4, -2, 0], scale: 1.08, transition: { duration: 0.4 } }}
                    transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.15 + i * 0.05 }}
                  >
                    <span className="skills__chip-text">{item}</span>
                  </Motion.li>
                ))}
              </ul>
            </Pop>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
