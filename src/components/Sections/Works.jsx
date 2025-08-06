import React, { useState, useRef, useEffect } from "react";
import "../Sections/works.css";
import gm from "../../assets/gmgroups.png";
import ektha from "../../assets/ektha.png";
import auction from "../../assets/auction.png";
import Donation from "../../assets/Donation.png";

function Works() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const autoScrollRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "GM Groups Club",
            image: gm,
            description: "Developed a dynamic and visually engaging website for GM Groups, a private club that owns and operates the popular Burgershot business. The website showcases the club’s identity, investor collaborations (e.g., with Tokyo Family), business ventures, and announcements.",
            link: "https://gmgroups.netlify.app/",
            color: "rgba(255, 107, 107, 0.2)"
        },
        {
            id: 2,
            title: "EKTHA'25",
            image: ektha,
            description: "Ektha is a dynamic website that serves as the digital hub for an innovative techno-cultural festival where technology meets artistic expression. The responsive site features an interactive event schedule that allows visitors to browse through workshops, hackathons, and cultural performances.",
            link: "https://ektha2025.netlify.app/",
            color: "rgba(255, 107, 107, 0.2)"
        },
        {
            id: 3,
            title: "BidMaster",
            image: auction,
            description: "BidMaster is a comprehensive online auction system developed with the MERN stack, enabling secure real-time bidding across various product categories. The responsive platform features a dynamic dashboard where users can track active auctions, place bids, and receive instant notifications.",
            link: "#",
            color: "rgba(78, 205, 196, 0.2)"
        },
        {
            id: 4,
            title: "Compassion Link",
            image: Donation,
            description: "Compassion Link is a versatile donation platform built with the MERN stack that facilitates both monetary and non-monetary contributions to causes worldwide. The responsive website features an intuitive dashboard where donors can browse campaigns by category.",
            link: "#",
            color: "rgba(69, 183, 209, 0.2)"
        }
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - translateX);
        stopAutoScroll();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - startX;
        setTranslateX(x);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const threshold = 100;
        const cardWidth = 100;
        
        if (translateX > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (translateX < -threshold && currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (translateX < -threshold && currentIndex === projects.length - 1) {
            setCurrentIndex(0);
        }
        
        setTranslateX(0);
        startAutoScroll();
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - translateX);
        stopAutoScroll();
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX - startX;
        setTranslateX(x);
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    const handleProjectClick = (link) => {
        if (link !== "#") {
            window.open(link, '_blank');
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    };

    const startAutoScroll = () => {
        autoScrollRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 4000);
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll();
        
        const handleMouseLeave = () => {
            if (isDragging) {
                handleMouseUp();
            }
        };

        document.addEventListener('mouseup', handleMouseLeave);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            stopAutoScroll();
            document.removeEventListener('mouseup', handleMouseLeave);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <section id="Works_section">
                <div className="container">
                    <h2 className="text-center works_head">My <span>Works</span></h2>
                    
                    <div className="slider-container" ref={containerRef}>
                        <div 
                            className="slider-wrapper"
                            ref={sliderRef}
                            style={{
                                transform: `translateX(${-currentIndex * 100}%)`,
                                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                cursor: isDragging ? 'grabbing' : 'grab'
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {projects.map((project, index) => (
                                <div 
                                    key={project.id}
                                    className="project-card glassmorphic full-width"
                                    onClick={() => handleProjectClick(project.link)}
                                >
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-link">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                            <span>View Project</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-dots">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Works;
