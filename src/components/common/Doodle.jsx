import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const shapes = {
  star: <path d="M50 4l12 30 32 2-25 20 9 31-28-18-28 18 9-31L6 36l32-2z" />,
  blob: <path d="M28 12c18-14 50-10 60 10s16 48-4 62-54 14-70-4S10 26 28 12z" />,
  squiggle: <path d="M4 50c14-30 28-30 42 0s28 30 42 0 28-30 42 0" fill="none" strokeWidth="9" />,
  bolt: <path d="M58 4L18 56h26l-8 40 46-56H56z" />,
  cloud: <path d="M28 76a18 18 0 0 1-4-35 24 24 0 0 1 46-8 18 18 0 0 1 22 26 14 14 0 0 1-8 17z" />,
  ring: <circle cx="50" cy="50" r="36" fill="none" strokeWidth="10" />,
  sparkle: <path d="M50 6c4 26 18 40 44 44-26 4-40 18-44 44-4-26-18-40-44-44 26-4 40-18 44-44z" />,
  heart: <path d="M50 88C20 66 6 50 6 32A20 20 0 0 1 50 20a20 20 0 0 1 44 12c0 18-14 34-44 56z" />,
};

/**
 * Outlined cartoon shape. It bobs on its own (CSS) and drifts with the
 * scroll (parallax), so the page feels layered as you move through it.
 */
export default function Doodle({ shape, fill = "var(--yellow)", size = 64, style, className = "", spin = false, speed = 1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8 * speed, 8 * speed]);

  return (
    <Motion.span ref={ref} className={`doodle ${className}`} style={{ width: size, height: size, y, rotate, ...style }} aria-hidden="true">
      <span className={`doodle__inner ${spin ? "doodle--spin" : ""}`}>
        <svg viewBox="0 0 100 100" fill={fill} stroke="var(--ink)" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
          {shapes[shape]}
        </svg>
      </span>
    </Motion.span>
  );
}
