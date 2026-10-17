import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/portfolioData";
import useLocalTime from "../../hooks/useLocalTime";
import Icon from "../common/Icon";
import Doodle from "../common/Doodle";
import Magnetic from "../common/Magnetic";
import { Fade, PopText } from "../common/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime(profile.timeZone);

  useEffect(() => {
    if (!copied) return undefined;
    const id = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const toTop = (event) => {
    event.preventDefault();
    if (window.lenis) window.lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact">
      <Doodle shape="star" fill="var(--white)" size={80} className="contact__d contact__d--1" />
      <Doodle shape="bolt" fill="var(--orange)" size={70} className="contact__d contact__d--2" />
      <Doodle shape="ring" fill="none" size={120} className="contact__d contact__d--3" spin />
      <Doodle shape="heart" fill="var(--white)" size={54} className="contact__d contact__d--4" />

      <div className="container contact__inner">
        <h2 className="contact__title">
          <PopText text="Have something" as="span" className="contact__line" stagger={0.03} />
          <PopText text="to build?" as="span" className="contact__line" stagger={0.03} delay={0.35} />
        </h2>
        <Fade>
          <p className="contact__sub">
            I&apos;m open to iOS and full-stack roles, and to product collaborations. Email is the fastest way to reach me.
          </p>
        </Fade>

        <Fade className="contact__actions" delay={0.1}>
          <Magnetic>
            <a className="btn btn--ink contact__mail" href={`mailto:${profile.email}`}>
              {profile.email}
              <Icon name="arrowUpRight" strokeWidth={2.4} />
            </a>
          </Magnetic>
          <button type="button" className="btn btn--ghost" onClick={copyEmail} aria-live="polite">
            {copied ? "Copied" : "Copy address"}
            <Icon name={copied ? "check" : "copy"} strokeWidth={2.2} />
          </button>
          <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
            <Icon name="external" strokeWidth={2.2} />
          </a>
        </Fade>

        <footer className="contact__foot">
          <div className="contact__foot-left">
            <span>
              {profile.name}, {new Date().getFullYear()}
            </span>
            <span className="contact__clock">
              <span className="sr-only">Local time in Kerala </span>
              {time} in Kerala
            </span>
          </div>
          <div className="contact__foot-right">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="contact__social">
                {social.label}
              </a>
            ))}
            <Link to="/projectspage" className="contact__social">
              All projects
            </Link>
            <a href="#hero" className="contact__social" onClick={toTop}>
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
