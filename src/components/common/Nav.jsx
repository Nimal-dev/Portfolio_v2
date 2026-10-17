import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { navLinks, profile } from "../../data/portfolioData";
import Icon from "./Icon";
import "./nav.css";
import useReducedMotion from "../../hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1];

export default function Nav() {
  const location = useLocation();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive("work");
      return undefined;
    }
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const lenis = window.lenis;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav__bar container">
          <Link to="/" className="nav__brand" aria-label="Nimal Prince, home">
            <span className="nav__mark" aria-hidden="true">NP</span>
            <span>{profile.name}</span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.id} href={href(link.id)} className={active === link.id ? "is-active" : ""}>
                {link.label}
              </a>
            ))}
            <Link to="/projectspage" className={!onHome ? "is-active" : ""}>
              All projects
            </Link>
          </nav>

          <div className="nav__end">
            <a className="btn btn--ghost nav__cta" href={href("contact")}>
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="nav__toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <Motion.div
            id="site-menu"
            className="menu"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="menu__inner container">
              <nav className="menu__links" aria-label="Menu">
                {[...navLinks, { id: "__all", label: "All projects" }].map((link, index) =>
                  link.id === "__all" ? (
                    <Motion.div
                      key={link.id}
                      initial={reduce ? false : { opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.15 + index * 0.06 }}
                    >
                      <Link to="/projectspage" onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </Motion.div>
                  ) : (
                    <Motion.div
                      key={link.id}
                      initial={reduce ? false : { opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.15 + index * 0.06 }}
                    >
                      <a href={href(link.id)} onClick={() => setOpen(false)}>
                        {link.label}
                      </a>
                    </Motion.div>
                  )
                )}
              </nav>

              <Motion.div
                className="menu__foot"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <div className="menu__socials">
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
              </Motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
