import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../../data/portfolioData";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("projects");
      return undefined;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry) {
          setActiveSection(activeEntry.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const getHref = (id) => (location.pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <header className="nav-shell">
      <nav className="glass-nav" aria-label="Primary navigation">
        <Link className="nav-brand" to="/">
          <span>NP</span>
          {profile.name}
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={getHref(link.id)}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link className="nav-projects-link" to="/projectspage" onClick={() => setMenuOpen(false)}>
            Project Index
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
