import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ektha from "../../assets/projects/ektha.png";
import auction from "../../assets/projects/auction.png";
import donation from "../../assets/projects/donation.png";
import "./ProjectsCarousel.css"; 
import { Alert } from "bootstrap/dist/js/bootstrap.bundle.min";

const Works = () => {
  const handleAlert = (event) => {
    event.preventDefault(); // Prevents navigation
    alert("Sorry This site is not available for view.");
  };
  const projects = [
    {
      id: 1,
      title: "EKTHA'25",
      image: ektha,
      price: "React",
      author: "Portfolio",
      description:
        "A responsive website showcasing our college's annual technology festival. Features include event registration, speaker profiles, workshop schedules, and an interactive campus map.",
      technologies: "React, HTML, CSS, JS, Vite",
      link: "https://ektha2025.netlify.app",
      
    },
    {
        id: 2,
        title: "Auction System",
        image: auction,
        price: "React",
        author: "Nimal",
        description:
          "A responsive website showcasing our college's annual technology festival. Features include event registration, speaker profiles, workshop schedules, and an interactive campus map.",
        technologies: "React, Node.js, MongoDb, Express",
        link: "",
        
      },
      {
        id: 3,
        title: "Donation System",
        image: donation,
        price: "React",
        author: "Nimal",
        description:
          "A responsive website showcasing our college's annual technology festival. Features include event registration, speaker profiles, workshop schedules, and an interactive campus map.",
        technologies: "React, Node.js, MongoDb, Express",
        link: "",

        
      },
    
  ];


  
  return (
    <section id="works_section">
      <div className="container text-center">
        <h1 className="work-head-text" data-aos="fade-up">
          Projects
        </h1>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="projects-carousel"
        >
            
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="swiper-slide" >
                
              <div className="project-card" data-aos="fade-down">
                {project.badge && (
                  <div className="project-badge">{project.badge}</div>
                )}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <p className="project-technologies">
                    <code><strong>Technologies:</strong> {project.technologies}</code>
                  </p>
                  
                 {project.link? (
                    <a
                      href={project.link}
                      className="btn btn-dark project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <i class="bi bi-box-arrow-in-up-right"></i>
                    </a>
                    ):(
                      <a
                      href="#"
                      onClick={handleAlert}
                      className="btn btn-dark project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <i class="bi bi-box-arrow-in-up-right"></i>
                    </a>
                    )}
            
                </div>
              </div>
              
            </SwiperSlide>
            
          ))}
          
        </Swiper>
        

        
      </div>
      
    </section>
  );
};

export default Works;
