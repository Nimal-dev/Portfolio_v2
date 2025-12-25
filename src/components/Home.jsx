



import React, { useEffect, Suspense, lazy } from "react";
import '../App.css'
import Hero from "./Hero";
import Navbar from "./common/Navbar";
import 'aos/dist/aos.css';
import AOS from 'aos';

// Lazy Load Sections
const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Experience = lazy(() => import("./Sections/Experience"));
const Works = lazy(() => import("./Sections/Works"));
const Testimonials = lazy(() => import("./Sections/Testimonials"));
const Footer = lazy(() => import("./common/Footer"));

// Loading Component
const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Suspense fallback={<LoadingSpinner />}>
                <About />
                <Skills />
                <Experience />
                <Works />
                <Testimonials />
                <Footer />
            </Suspense>
        </>
    );

}

export default Home;