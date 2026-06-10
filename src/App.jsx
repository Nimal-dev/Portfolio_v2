import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "./App.css";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const scrollWithLenis = (target, options = {}) => {
      if (window.lenis) {
        window.lenis.scrollTo(target, {
          duration: 1.35,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          offset: -96,
          ...options,
        });
        return true;
      }

      return false;
    };

    if (!location.hash) {
      if (!scrollWithLenis(0, { immediate: true, offset: 0 })) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      return undefined;
    }

    const sectionId = location.hash.replace("#", "");
    let attempts = 0;
    let timeoutId;

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        if (!scrollWithLenis(section)) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      if (attempts < 12) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollToSection, 80);
      }
    };

    scrollToSection();

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reduceMotion = prefersReducedMotion.matches;
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
    const lenis = new Lenis({
      duration: reduceMotion ? 1.15 : 1.6,
      easing: easeOutQuart,
      lerp: reduceMotion ? 0.095 : 0.075,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: reduceMotion ? 0.82 : 0.76,
      touchMultiplier: reduceMotion ? 1.15 : 1.35,
      anchors: {
        offset: -96,
        duration: reduceMotion ? 1.05 : 1.45,
        easing: easeOutQuart,
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
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/projectspage/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
