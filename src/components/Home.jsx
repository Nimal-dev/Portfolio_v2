import React from "react";
import '../App.css'
import Hero from "./Hero";
import Navbar from "./common/Navbar";
import About from "./Sections/About";
import Skills from "./Sections/Skills";



function Home() {
    return (
        <>
        <Navbar/>,
        <Hero/>,
        <About/>,
        <Skills/>,
        </>
    );
    
}

export default Home;