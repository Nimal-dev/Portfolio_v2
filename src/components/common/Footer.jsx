import React from "react";
import { profile } from "../../data/portfolioData";

function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-inner glass-panel">
        <div>
          <p className="section-kicker">Let us build something polished.</p>
          <h2>Available for full-stack, frontend, and mobile-focused roles.</h2>
        </div>

        <div className="footer-actions">
          <a className="btn-primary-glass" href={`mailto:${profile.email}`}>
            Contact Me
            <i className="bi bi-envelope-fill" />
          </a>
          <a className="btn-secondary-glass" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
            <i className="bi bi-file-earmark-person" />
          </a>
        </div>

        <div className="footer-bottom">
          <span>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div>
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
