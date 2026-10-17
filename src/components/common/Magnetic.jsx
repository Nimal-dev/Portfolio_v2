import React, { useRef } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import useMedia from "../../hooks/useMedia";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * Wraps a child so it leans toward the cursor while hovered.
 * Desktop only; no-op on touch and reduced motion.
 */
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const fine = useMedia("(pointer: fine)", true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const enabled = fine && !reduce;

  const onMove = (event) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </Motion.div>
  );
}
