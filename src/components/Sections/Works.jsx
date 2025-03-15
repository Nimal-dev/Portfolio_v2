import React from "react";

import ektha from "../../assets/ektha.png";
import auction from "../../assets/auction.png";
import Donation from "../../assets/Donation.png";

function Works() {

    return (
        <>
            <section id="Works_section">
                <div className="container">
                    <h2 className="text-center works_head">My <span>Works</span></h2>
                   
                   {/* Project 1 */}
                    <div className="row my-5 align-items-center justify-content-center">
                        <div className="col-md-4">
                            <a href="https://ektha2025.netlify.app/" className="link-hover">
                                <img className="img-fluid" data-aos="flip-down" src={ektha} alt="Ektha" />
                            </a>
                        </div>
                        <div className="col-md-6 ">
                            <h1 className="work-head" data-aos="zoom-out-left">EKTHA'25  <a href="https://ektha2025.netlify.app/">  <i class=" mx-3 bi bi-box-arrow-up-right"></i></a></h1>
                            <p className="work-para" data-aos="fade-left">Ektha is a dynamic website that serves as the digital hub for an innovative techno-cultural festival where technology meets artistic expression. The responsive site features an interactive event schedule that allows visitors to browse through workshops, hackathons, and cultural performances.The immersive gallery showcases highlights from previous editions, giving potential attendees a glimpse of what to expect. Ektha's website bridges technological innovation with cultural celebration, creating a seamless digital experience for participants, mentors, and spectators alike.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="row my-5 align-items-center justify-content-center">
                        <div className="col-md-6 ">
                            <h1 className="work-head" data-aos="zoom-out-left">BidMaster</h1>
                            <p className="work-para" data-aos="fade-left">BidMaster is a comprehensive online auction system developed with the MERN stack (MongoDB, Express.js, React, and Node.js), enabling secure real-time bidding across various product categories. The responsive platform features a dynamic dashboard where users can track active auctions, place bids, and receive instant notifications when outbid or when auctions close. Sellers can easily list items with detailed descriptions and images, set reserve prices, and monitor bidding activity through an intuitive management interface. The website implements secure payment processing using razorpay and escrow services to ensure safe transactions between buyers and sellers once auctions conclude.</p>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="link-hover">
                                <img className="img-fluid" data-aos="flip-down" src={auction} alt="auction" />
                            </a>
                        </div>
                    </div>

                     {/* Project 3 */}
                     <div className="row my-5 align-items-center justify-content-center">
                        <div className="col-md-4">
                            <a href="#" className="link-hover">
                                <img className="img-fluid" data-aos="flip-down" src={Donation} alt="Donation" />
                            </a>
                        </div>
                        <div className="col-md-6 ">
                            <h1 className="work-head" data-aos="zoom-out-left">Compassion Link</h1>
                            <p className="work-para" data-aos="fade-left">Compassion Link is a versatile donation platform built with the MERN stack (MongoDB, Express.js, React, and Node.js) that facilitates both monetary and non-monetary contributions to causes worldwide. The responsive website features an intuitive dashboard where donors can browse campaigns by category, track their giving history, and receive impact updates from organizations they've supported. Organizations can create detailed campaign pages showcasing their needs whether financial support, essential items, or volunteer hours complete with progress trackers and compelling storytelling elements.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Works;
