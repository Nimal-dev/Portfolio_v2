import { useReducedMotion as useOsReducedMotion } from "framer-motion";

/**
 * Motion is on by default: the site is meant to feel alive, and many Windows
 * machines have "animation effects" switched off without the owner knowing,
 * which would otherwise strip every animation. Set
 * VITE_RESPECT_REDUCED_MOTION=true at build time to honour the OS setting.
 */
export default function useReducedMotion() {
  const osPrefersReduced = useOsReducedMotion();
  return import.meta.env.VITE_RESPECT_REDUCED_MOTION === "true" ? Boolean(osPrefersReduced) : false;
}
