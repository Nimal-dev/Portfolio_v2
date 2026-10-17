import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { profile, skillGroups } from "../../data/portfolioData";
import Icon from "../common/Icon";
import Doodle from "../common/Doodle";
import Magnetic from "../common/Magnetic";
import { Float, PopText } from "../common/Reveal";
import HeroStack from "./HeroStack";
import "./hero.css";
import useReducedMotion from "../../hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1];
const rotating = ["iPhone apps", "web platforms", "mobile apps", "things that help people"];

function RotatingWord() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % rotating.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <span className="hero__rotor" aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <Motion.span
          key={rotating[index]}
          className="hero__rotor-word"
          initial={reduce ? false : { y: "110%", rotate: 6, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-110%", rotate: -6, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          {rotating[index]}
        </Motion.span>
      </AnimatePresence>
    </span>
  );
}

function Rise({ children, delay, className, as = Motion.div }) {
  const reduce = useReducedMotion();
  return React.createElement(
    as,
    {
      className,
      initial: reduce ? false : { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease, delay },
    },
    children
  );
}

const tickerItems = [
  profile.role,
  profile.company,
  `Founder of ${profile.founderOf}`,
  "B.Tech CSE 2026",
  ...skillGroups.flatMap((group) => group.items.slice(0, 3)),
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="hero">
      <div className="hero__dots dots" aria-hidden="true" />

      <Doodle shape="star" fill="var(--yellow)" size={72} className="hero__d hero__d--1" />
      <Doodle shape="blob" fill="var(--lime)" size={140} className="hero__d hero__d--2" />
      <Doodle shape="squiggle" fill="none" size={120} className="hero__d hero__d--3" />
      <Doodle shape="bolt" fill="var(--orange)" size={64} className="hero__d hero__d--4" />
      <Doodle shape="ring" fill="none" size={90} className="hero__d hero__d--5" spin />
      <Doodle shape="sparkle" fill="var(--blue)" size={48} className="hero__d hero__d--6" />
      <Doodle shape="cloud" fill="var(--white)" size={120} className="hero__d hero__d--7" />

      <div className="container hero__inner">
        <Rise className="hero__lead" delay={0.1} as={Motion.p}>
          <span className="sticker sticker--blue">Hi, I&apos;m</span>
        </Rise>

        <div className="hero__grid">
          <div className="hero__left">
            <h1 className="display hero__name">
              <PopText as="span" className="hero__name-line" text={profile.firstName} onMount delay={0.2} stagger={0.06} />
              <PopText as="span" className="hero__name-line hero__name-line--2" text={profile.lastName} onMount delay={0.45} stagger={0.06} />
            </h1>

            <Rise className="hero__statement lede" delay={0.85} as={Motion.p}>
              <span>I build </span>
              <RotatingWord />
              <span>.</span>
              <span className="hero__statement-rest">
                iOS engineer at {profile.company}. Founder of {profile.founderOf}.
              </span>
            </Rise>

            <Rise className="hero__actions" delay={1}>
              <Magnetic>
                <a className="btn" href="#work">
                  See the work
                  <Icon name="arrowDown" />
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  Resume
                  <Icon name="external" />
                </a>
              </Magnetic>
              <div className="hero__socials">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    className="icon-btn"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </Rise>
          </div>

          <Float className="hero__now-float" amount={10} duration={5} delay={1.6}>
          <Motion.aside
            className="hero__now card"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 16, delay: 1.05 }}
          >
            <span className="sticker sticker--orange hero__now-tag">Right now</span>
            <dl>
              {profile.now.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.value === profile.founderOf ? (
                      <a className="hero__founder" href={profile.founderUrl} target="_blank" rel="noreferrer">
                        <img src={profile.founderLogo} alt="" width="28" height="28" />
                        {item.value}
                        <Icon name="arrowUpRight" size={16} strokeWidth={2.4} />
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="hero__now-meta">{profile.location}</p>
          </Motion.aside>
          </Float>
        </div>
      </div>

      <HeroStack />

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="ticker__item">
              {item}
              <Doodle shape="star" fill="var(--yellow)" size={18} className="ticker__star" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
