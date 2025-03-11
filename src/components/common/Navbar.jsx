import React, { useEffect, useState } from "react";
// Ensure Bootstrap JavaScript components work correctly
import "./navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    // Import Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      // Add an offset for the navbar height
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const scrollOffset = scrollPosition + navbarHeight + 20; // Add extra padding
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollOffset >= sectionTop && scrollOffset < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };
      
    window.addEventListener("scroll", handleScroll);
    
    // Trigger scroll handler once on load to set initial active state
    handleScroll();
    
    // Also listen for hash changes to handle direct link clicks
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const closeOffcanvas = () => {
    const closeButton = document.querySelector(".btn-close[data-bs-dismiss='offcanvas']");
    if (closeButton) {
      closeButton.click(); // Simulate clicking the close button
    }
  };

  return (
    <nav className="navbar navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Mobile: Brand on right, toggle on left */}
        <div className="d-flex d-lg-none w-100">
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand offcanvas-title order-2 ms-auto" href="#">
            Nimal Prince
          </a>
        </div>

        {/* Desktop: Centered content */}
        <div className="d-none d-lg-flex justify-content-center w-100">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-3">
              <a className={`nav-link ${activeSection === "hero" ? "active" : ""}`} aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${activeSection === "About_Section" ? "active" : ""}`} href="#About_Section">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${activeSection === "Skills_Section" ? "active" : ""}`} href="#Skills_Section">
                Skills
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`nav-link ${activeSection === "experience_section" ? "active" : ""}`} href="#experience_section">
                Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Glassmorphic offcanvas for mobile */}
        <div
          className="offcanvas offcanvas-start glassmorphic offcanvas-fullwidth"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <b>Nimal Prince</b>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex align-items-center justify-content-center">
            <ul className="navbar-nav text-center">
              <li className="nav-item mb-4">
                <a className={`nav-link fs-1 ${activeSection === "hero" ? "active" : ""}`} aria-current="page" href="#hero" onClick={closeOffcanvas}>
                  Home
                </a>
              </li>
              <li className="nav-item mb-4">
                <a className={`nav-link fs-1 ${activeSection === "About_Section" ? "active" : ""}`} href="#About_Section" onClick={closeOffcanvas}>
                  About
                </a>
              </li>
              <li className="nav-item mb-4">
                <a className={`nav-link fs-1 ${activeSection === "Skills_Section" ? "active" : ""}`} href="#Skills_Section" onClick={closeOffcanvas}>
                  Skills
                </a>
              </li>
              <li className="nav-item mb-4">
                <a className={`nav-link fs-1 ${activeSection === "experience_section" ? "active" : ""}`} href="#experience_section" onClick={closeOffcanvas}>
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;