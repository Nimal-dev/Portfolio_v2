import React, { Suspense, lazy } from "react";
import Nav from "../common/Nav";
import Hero from "../hero/Hero";
import "../sections/sections.css";

const About = lazy(() => import("../sections/About"));
const Experience = lazy(() => import("../sections/Experience"));
const Work = lazy(() => import("../sections/Work"));
const Skills = lazy(() => import("../sections/Skills"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const Contact = lazy(() => import("../sections/Contact"));

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: "60vh" }} aria-hidden="true" />}>
          <About />
          <Experience />
          <Work />
          <Skills />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
