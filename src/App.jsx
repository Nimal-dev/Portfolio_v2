import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Lenis from "lenis";
import Home from "./components/pages/Home";
import ProjectsPage from "./components/pages/ProjectsPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import Splash from "./components/common/Splash";
import useReducedMotion from "./hooks/useReducedMotion";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (target, options = {}) => {
      if (window.lenis) {
        window.lenis.scrollTo(target, {
          duration: 1.3,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          offset: -(76 + 8),
          ...options,
        });
        return true;
      }
      return false;
    };

    if (!location.hash) {
      if (!scrollTo(0, { immediate: true, offset: 0 })) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      return undefined;
    }

    const id = location.hash.slice(1);
    let attempts = 0;
    let timer;

    const tryScroll = () => {
      const node = document.getElementById(id);
      if (node) {
        if (!scrollTo(node)) node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts < 15) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 80);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function Page({ children }) {
  const reduce = useReducedMotion();
  return (
    <Motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="/projectspage"
          element={
            <Page>
              <ProjectsPage />
            </Page>
          }
        />
        <Route
          path="/projectspage/:id"
          element={
            <Page>
              <ProjectDetails />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [splash, setSplash] = useState(true);
  const endSplash = useCallback(() => setSplash(false), []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      duration: reduce ? 0.8 : 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      lerp: reduce ? 0.2 : 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.3,
      anchors: {
        offset: -84,
        duration: 1.3,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      },
      autoRaf: true,
    });

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{splash && <Splash key="splash" onDone={endSplash} />}</AnimatePresence>
      {!splash && (
        <>
          <ScrollManager />
          <AnimatedRoutes />
        </>
      )}
    </BrowserRouter>
  );
}
