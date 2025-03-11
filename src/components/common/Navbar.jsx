import React from "react";
import './navbar.css'



function Navbar() {
  return (
    <nav class="navbar navbar-dark fixed-top custom-navbar">
      <div class="container-fluid">
        {/* <!-- Mobile: Brand on right, toggle on left --> */}
        <div class="d-flex d-lg-none w-100">
          <button class="navbar-toggler order-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand offcanvas-title order-2 ms-auto" href="#">Nimal Prince</a>
        </div>

        {/* <!-- Desktop: Centered content --> */}
        <div class="d-none d-lg-flex justify-content-center w-100">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#About_Section">About</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#Skills_Section">Skills</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#experience_section">Experience</a>
            </li>
            {/* <li class="nav-item mx-3">
              <a class="nav-link" href="#">Works</a>
            </li> */}
          </ul>
        </div>

        {/* <!-- Glassmorphic offcanvas for mobile --> */}
        <div class="offcanvas offcanvas-start glassmorphic offcanvas-fullwidth" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><b>Nimal Prince</b></h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex align-items-center justify-content-center">
            <ul class="navbar-nav text-center">
              <li class="nav-item mb-4">
                <a class="nav-link active fs-1" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mb-4">
                <a class="nav-link fs-1" href="#About_Section">About</a>
              </li>
              <li class="nav-item mb-4">
                <a class="nav-link fs-1" href="#Skills_Section">Skills</a>
              </li>
              <li class="nav-item mb-4">
                <a class="nav-link fs-1" href="#experience_section">Experience</a>
              </li>
              {/* <li class="nav-item mb-4">
                <a class="nav-link fs-1" href="#">Works</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar;