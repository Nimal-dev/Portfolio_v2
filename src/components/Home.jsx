import React, { Suspense, lazy } from "react";
import "../App.css";
import Hero from "./Hero";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Experience = lazy(() => import("./Sections/Experience"));
const Works = lazy(() => import("./Sections/Works"));
const Testimonials = lazy(() => import("./Sections/Testimonials"));

const LoadingSpinner = () => (
  <div className="section-loader" role="status" aria-label="Loading portfolio section">
    <span />
  </div>
);

function Home() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Skills />
          <Experience />
          <Works />
          <Testimonials />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
