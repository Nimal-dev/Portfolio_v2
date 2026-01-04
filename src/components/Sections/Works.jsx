import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Sections/works.css";
import gm from "../../assets/gmgroups.png";
import ektha from "../../assets/ektha.png";
import auction from "../../assets/auction.png";
import Donation from "../../assets/Donation.png";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

function Works() {
    const projects = [
        {
            id: 1,
            title: "GM Groups Club",
            image: gm,
            description: "Developed a dynamic and visually engaging website for GM Groups, a private club that owns and operates the popular Burgershot business. The website showcases the club’s identity, investor collaborations (e.g., with Tokyo Family), business ventures, and announcements.",
            link: "https://gmgroups.netlify.app/",
        },
        {
            id: 2,
            title: "EKTHA'25",
            image: ektha,
            description: "Ektha is a dynamic website that serves as the digital hub for an innovative techno-cultural festival where technology meets artistic expression. The responsive site features an interactive event schedule that allows visitors to browse through workshops, hackathons, and cultural performances.",
            link: "https://ektha2025.netlify.app/",
        },
        {
            id: 3,
            title: "BidMaster",
            image: auction,
            description: "BidMaster is a comprehensive online auction system developed with the MERN stack, enabling secure real-time bidding across various product categories. The responsive platform features a dynamic dashboard where users can track active auctions, place bids, and receive instant notifications.",
            link: "#",
        },
        {
            id: 4,
            title: "Compassion Link",
            image: Donation,
            description: "Compassion Link is a versatile donation platform built with the MERN stack that facilitates both monetary and non-monetary contributions to causes worldwide. The responsive website features an intuitive dashboard where donors can browse campaigns by category.",
            link: "#",
        }
    ];

    return (
        <section id="Works_section">
            <div className="container">
                <h2 className="text-center works_head" data-aos="fade-up">My <span>Works</span></h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="swiper-slide-custom">
                            <div className="project-card glassmorphic">
                                <div className="project-image">
                                    <ImageWithSkeleton
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        skeletonHeight="220px"
                                        wrapperStyle={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    {project.link !== "#" ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                            <span>View Project</span>
                                        </a>
                                    ) : (
                                        <div className="project-link disabled">
                                            <i className="bi bi-lock-fill"></i>
                                            <span>Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Works;

