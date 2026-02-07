import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from 'lenis'
import './App.css'
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails";


function App() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // RAF for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectspage" element={<ProjectsPage />} />
          <Route path="/projectspage/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
