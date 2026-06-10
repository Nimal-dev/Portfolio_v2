import React, { Suspense, lazy } from "react";
import { motion as Motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import ImageWithSkeleton from "./common/ImageWithSkeleton";

const GlassHeroScene = lazy(() => import("./GlassHeroScene"));

const fadeUp = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
};

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />

      <div className="container hero-layout">
        <Motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
        >
          <Motion.p className="section-kicker" variants={fadeUp}>
            {profile.eyebrow}
          </Motion.p>

          <Motion.h1 className="hero-title" variants={fadeUp}>
            {profile.title}
          </Motion.h1>

          <Motion.p className="hero-summary" variants={fadeUp}>
            {profile.summary}
          </Motion.p>

          <Motion.div className="hero-role-strip" variants={fadeUp}>
            {profile.roleHighlights.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </Motion.div>

          <Motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn-primary-glass" href="#projects">
              View Projects
              <i className="bi bi-arrow-down-right" />
            </a>
            <a className="btn-secondary-glass" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
              <i className="bi bi-file-earmark-person" />
            </a>
          </Motion.div>

          <Motion.div className="hero-socials" variants={fadeUp} aria-label="Social links">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <i className={social.icon} />
              </a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.21, 1, 0.36, 1], delay: 0.2 }}
        >
          <Suspense fallback={<div className="hero-scene hero-scene-fallback" />}>
            <GlassHeroScene />
          </Suspense>

          <div className="hero-profile-card glass-panel">
            <ImageWithSkeleton
              className="hero-avatar"
              src={profile.image}
              alt={`${profile.name} portrait`}
              skeletonHeight="118px"
              skeletonWidth="118px"
              skeletonVariant="circle"
              wrapperClassName="hero-avatar-wrapper"
              wrapperStyle={{ width: "118px", height: "118px" }}
            />
            <div>
              <p className="hero-profile-label">Available for</p>
              <h2>{profile.shortTitle}</h2>
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="hero-metrics glass-panel">
            {profile.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;
