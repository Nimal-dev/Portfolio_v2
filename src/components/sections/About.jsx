import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../../data/portfolioData";
import Doodle from "../common/Doodle";
import { Fade, Float, Pop } from "../common/Reveal";
import useReducedMotion from "../../hooks/useReducedMotion";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <span className="about__w">
      <Motion.span style={{ opacity, y, display: "inline-block" }}>{children}</Motion.span>{" "}
    </span>
  );
}

/**
 * The opening line brightens word by word as it scrolls into view.
 */
function ScrollText({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  const words = text.split(" ");

  if (reduce) {
    return (
      <p ref={ref} className="about__statement">
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className="about__statement">
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

export default function About() {
  const portrait = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: portrait, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-4, 2]);

  return (
    <section id="about" className="section section--white about">
      <Doodle shape="sparkle" fill="var(--orange)" size={56} className="about__d about__d--1" />
      <Doodle shape="ring" fill="none" size={110} className="about__d about__d--2" spin />

      <div className="container">
        <ScrollText text={profile.about[0]} />

        <div className="about__grid">
          <Float amount={10} duration={6} tilt={1.2}>
            <Pop className="about__portrait-wrap" rotate={-6}>
              <Motion.div className="about__portrait card" ref={portrait} style={{ y, rotate }}>
                <img src={profile.image} alt={`${profile.name}, portrait`} loading="lazy" decoding="async" />
                <span className="sticker sticker--lime about__portrait-tag">that&apos;s me</span>
              </Motion.div>
            </Pop>
          </Float>

          <div className="about__copy">
            {profile.about.slice(1).map((paragraph, index) => (
              <Fade key={paragraph} delay={index * 0.08}>
                <p className="body about__p">{paragraph}</p>
              </Fade>
            ))}

            <Fade delay={0.2}>
              <dl className="about__facts">
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Currently</dt>
                  <dd>
                    {profile.role}, {profile.company}
                  </dd>
                </div>
                <div>
                  <dt>Founder of</dt>
                  <dd>{profile.founderOf}</dd>
                </div>
                <div>
                  <dt>Degree</dt>
                  <dd>B.Tech CSE, class of 2026</dd>
                </div>
              </dl>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
