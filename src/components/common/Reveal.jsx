import React from "react";
import { motion as Motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

const spring = { type: "spring", stiffness: 420, damping: 16, mass: 0.7 };

/**
 * Letters pop up one by one with a bounce. Works on mount (animate) or on
 * scroll (whileInView). Words never break mid-word.
 */
export function PopText({
  text,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.035,
  onMount = false,
  once = true,
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  let index = 0;

  const children = words.map((word, wi) => (
    <React.Fragment key={`${word}-${wi}`}>
      <span className="pop__word">
      {Array.from(word).map((char, ci) => {
        const i = index++;
        return (
          <Motion.span
            key={`${char}-${ci}`}
            className="pop__char"
            initial={reduce ? false : { y: "70%", opacity: 0, rotate: -10, scale: 0.8 }}
            {...(onMount
              ? { animate: { y: 0, opacity: 1, rotate: 0, scale: 1 } }
              : { whileInView: { y: 0, opacity: 1, rotate: 0, scale: 1 }, viewport: { once, margin: "-10% 0px" } })}
            transition={{ ...spring, delay: delay + i * stagger }}
          >
            {char}
          </Motion.span>
        );
      })}
      </span>
      {wi < words.length - 1 ? " " : null}
    </React.Fragment>
  ));

  return React.createElement(as, { className: `pop ${className}`, "aria-label": text }, children);
}

/**
 * Hand-drawn underline that draws itself when the heading scrolls in.
 */
export function Squiggle({ children, color = "var(--yellow)", className = "" }) {
  const reduce = useReducedMotion();
  return (
    <span className={`squiggle ${className}`}>
      {children}
      <svg viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true">
        <Motion.path
          d="M3 11c20-8 36-8 52 0s34 8 52 0 36-8 52 0 26 6 38 2"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        />
      </svg>
    </span>
  );
}

/**
 * Springy pop-in for blocks and cards.
 */
export function Pop({ children, className = "", delay = 0, rotate = -2, once = true, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.92, rotate }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}

/** Quiet fade, for text blocks. */
export function Fade({ children, className = "", delay = 0, y = 18, once = true, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}

/** Masked line reveal, kept for lines that should slide rather than pop. */
export function LineReveal({ lines, as = "h2", className = "", delay = 0, once = true }) {
  const reduce = useReducedMotion();
  return React.createElement(
    as,
    { className },
    lines.map((line, index) => (
      <span key={index} style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
        <Motion.span
          style={{ display: "block" }}
          initial={reduce ? false : { y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + index * 0.08 }}
        >
          {line}
        </Motion.span>
      </span>
    ))
  );
}

/**
 * Endless gentle hover, so cards feel like they are floating on the page.
 * Wrap it around elements that animate their own entrance so the two
 * transforms never fight.
 */
export function Float({ children, className = "", amount = 8, duration = 4.5, delay = 0, tilt = 0.8, style, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      className={className}
      style={style}
      animate={reduce ? undefined : { y: [0, -amount, 0], rotate: [0, tilt, 0, -tilt, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}
