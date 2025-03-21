import React from "react";
import '../App.css'
import Hero from "./Hero";
import Navbar from "./common/Navbar";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from "./common/Footer";
import Works from "./Sections/Works";
import Testimonials from "./Sections/Testimonials";

      



function Home() {
    AOS.init();
    return (
        <>
        <Navbar/>,
        <Hero/>,
        <About/>,
        <Skills/>,
        <Experience/>,
        <Works/>,
        <Testimonials/>,
        <Footer/>
        </>
    );
    
}

export default Home;