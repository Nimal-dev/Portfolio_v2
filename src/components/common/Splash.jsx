import React, { useEffect, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { profile } from "../../data/portfolioData";
import { PopText } from "./Reveal";
import "./splash.css";

const LAND = 0.55; // seconds until the drop hits
const HOLD = 2.6; // total time on screen before the curtain lifts

/**
 * Cartoon water-splash intro. A drop falls, bursts into droplets and
 * ripples, a welcome pops in, then the whole sheet lifts away.
 */
export default function Splash({ onDone }) {
  const droplets = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2 + 0.3;
        const dist = 120 + (i % 3) * 55;
        return {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist * 0.75 - 40,
          size: 14 + (i % 4) * 6,
          delay: LAND + (i % 4) * 0.04,
          color: ["var(--blue)", "var(--lime)", "var(--orange)", "var(--yellow)"][i % 4],
        };
      }),
    []
  );

  useEffect(() => {
    const lenis = window.lenis;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const timer = window.setTimeout(onDone, HOLD * 1000);
    return () => {
      window.clearTimeout(timer);
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [onDone]);

  return (
    <Motion.div
      className="splash"
      role="dialog"
      aria-label="Welcome"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
      onClick={onDone}
    >
      <div className="splash__dots" aria-hidden="true" />

      <div className="splash__stage" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <Motion.span
            key={i}
            className="splash__ripple"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: [0.2, 2.6 + i * 0.6], opacity: [0, 0.9, 0] }}
            transition={{ duration: 1.1, delay: LAND + i * 0.12, ease: "easeOut" }}
          />
        ))}

        <Motion.span
          className="splash__drop"
          initial={{ y: -420, scaleX: 0.8, scaleY: 1.3, opacity: 1 }}
          animate={{
            y: [-420, 0, 0],
            scaleX: [0.8, 1, 1.9],
            scaleY: [1.3, 1, 0.25],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: LAND + 0.3, times: [0, 0.78, 1], ease: ["easeIn", "easeOut"] }}
        />

        {droplets.map((d, i) => (
          <Motion.span
            key={i}
            className="splash__droplet"
            style={{ width: d.size, height: d.size, background: d.color }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ x: d.x, y: [0, d.y, d.y + 160], scale: [0, 1.2, 0.6], opacity: [0, 1, 0] }}
            transition={{ duration: 0.95, delay: d.delay, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="splash__text">
        <h1 className="splash__title">
          <PopText text="Welcome!" onMount delay={LAND + 0.25} stagger={0.06} />
        </h1>
        <Motion.p
          className="splash__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: LAND + 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          You found {profile.firstName}&apos;s corner of the web.
        </Motion.p>
        <Motion.span
          className="splash__skip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: LAND + 1.2 }}
        >
          Tap anywhere to jump in
        </Motion.span>
      </div>
    </Motion.div>
  );
}
