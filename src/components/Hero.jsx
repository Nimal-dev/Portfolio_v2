import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilepic from "../assets/me.png";
import resume from "../assets/Nimal_Prince_FullStack_Developer_Resume.pdf"

function Hero() {
  // Create a reference to the element where we want the typing effect
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ["Junior Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: false
    });

    // Clean up Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <section id="hero">
        <div className="container-lg hero_container">
          <div className="row intro">
            <div className="col-lg-8 col-md-8 col-sm-12 text-start align-items-center">
              <span className="head-text-1">Hello!, </span>
              <span className="head-text-2">I'm</span>
              <h1 className="name-text">Nimal Prince</h1>
              <h3 className="role-text">
                <span>I'm a <code><span className="role" ref={typedElementRef}></span></code></span>
              </h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/nimalprince" className="animate-icon linkedin" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Nimal-dev" className="animate-icon github" target="_blank">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nimalprince.dev@gmail.com" className="animate-icon google" target="_blank">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
              <a href={resume} target="_blank" className="btn animate-btn">Download Resume</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 profile_col">
              <img className="img-fluid profilepic" src={profilepic} alt="Profile_Pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;