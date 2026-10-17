import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { education, experience } from "../../data/portfolioData";
import Icon from "../common/Icon";
import Doodle from "../common/Doodle";
import { Fade, PopText, Squiggle } from "../common/Reveal";
import useReducedMotion from "../../hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1];
const colors = ["var(--yellow)", "var(--lime)", "var(--blue-soft)", "var(--violet-soft)"];

function Entry({ item, open, onToggle, index }) {
  const reduce = useReducedMotion();
  const panelId = `xp-panel-${item.id}`;

  return (
    <Motion.li
      className={`xp__item card ${open ? "is-open" : ""}`}
      style={{ "--tint": colors[index % colors.length] }}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduce ? undefined : { x: -3, y: -3 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, ease, delay: index * 0.06 }}
    >
        <button type="button" className="xp__head" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
          <span className="xp__period">{item.period}</span>
          <span className="xp__title">
            <span className="xp__role">{item.role}</span>
            <span className="xp__company">{item.company}</span>
          </span>
          <span className="xp__kind">{item.kind}</span>
          <span className="xp__toggle" aria-hidden="true">
            <Icon name="plus" strokeWidth={2.4} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <Motion.div
              id={panelId}
              className="xp__panel"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="xp__panel-inner">
                <p className="body">{item.summary}</p>
                <ul className="xp__points">
                  {item.highlights.map((point, i) => (
                    <Motion.li
                      key={point}
                      initial={reduce ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.07 }}
                    >
                      {point}
                    </Motion.li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
    </Motion.li>
  );
}

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section id="experience" className="section xp">
      <Doodle shape="bolt" fill="var(--yellow)" size={70} className="xp__d xp__d--1" />
      <Doodle shape="cloud" fill="var(--white)" size={130} className="xp__d xp__d--2" />

      <div className="container">
        <div className="section__head section__head--split">
          <h2 className="h-section">
            <Squiggle color="var(--orange)">
              <PopText text="Experience" />
            </Squiggle>
          </h2>
          <p className="small xp__intro">
            Four roles since 2023, from a Flutter traineeship to shipping iOS and founding a company.
          </p>
        </div>

        <ol className="xp__list">
          {experience.map((item, index) => (
            <Entry
              key={item.id}
              item={item}
              index={index}
              open={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </ol>

        <Fade className="xp__edu card">
          <h3 className="h-small">Education</h3>
          <ul>
            {education.map((item) => (
              <li key={item.degree}>
                <span className="xp__period">{item.year}</span>
                <span className="xp__title">
                  <span className="xp__role">{item.degree}</span>
                  <span className="xp__company">{item.school}</span>
                </span>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </section>
  );
}
