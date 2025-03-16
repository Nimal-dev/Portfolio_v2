import React from "react";
import TL from "../../assets/TL.jpg";
import DC from "../../assets/PC.jpg";

function Testimonials() {
    return (
        <>
            <section id="Testimonials" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="container px-4">
                    <h2 className="testimonial-heading mb-5">
                        <span className="testimonial-text1">Testi</span>
                        <span className="testimonial-text2">monials</span>
                    </h2>
                    
                    <div className="row gy-4 justify-content-center">
                        {/* Testimonial 1 */}
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="testimonial-item h-100 shadow-sm">
                                <div className="testimonial-icon1">
                                    <i className="bi bi-quote"></i>
                                </div>
                                <p className="testimonial-text">
                                    Nimal is proactive in seeking feedback, open to guidance, and consistently demonstrates a desire to grow professionally. He's not only focused on his technical contributions but also values collaboration, fitting seamlessly into team projects and actively contributing in discussions. He has shown remarkable dedication and quickly adapted to our workflows and tools. He demonstrates strong foundational skills in programming and a natural problem-solving ability, often delivering clean, well-documented code.
                                </p>
                                <div className="testimonial-icon2">
                                    <i className="bi bi-quote"></i>
                                </div>
                                <div className="testimonial-author mt-4">
                                    <div className="row author-row">
                                        <div className="col-3 col-md-3 col-lg-2">
                                            <img className="img-fluid author-img" src={TL} alt="Team Lead" />
                                        </div>
                                        <div className="col-9 col-md-9 col-lg-10 text-start">
                                            <h5 className="testimonial-author-name mb-1">Muhammed Aslam</h5>
                                            <p className="testimonial-author-position">Team Lead @ Logiprompt Techno Solutions Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 2 */}
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="testimonial-item h-100 shadow-sm">
                                <div className="testimonial-icon1">
                                    <i className="bi bi-quote"></i>
                                </div>
                                <p className="testimonial-text">
                                    Nimal Prince has been a valuable asset in developing both web and mobile applications for our projects. His dedication to clean, maintainable code and his quick adaptability have consistently impressed our team. Nimal demonstrates strong problem-solving skills and a proactive approach, making him an excellent contributor to any project. Nimal also has a keen eye for detail, ensuring that every feature is optimized for both performance and user experience. His collaborative mindset and willingness to learn make him a pleasure to work with on any development team.
                                </p>
                                <div className="testimonial-icon2">
                                    <i className="bi bi-quote"></i>
                                </div>
                                <div className="testimonial-author mt-4">
                                    <div className="row author-row">
                                        <div className="col-3 col-md-3 col-lg-2">
                                            <img className="img-fluid author-img" src={DC} alt="Team Lead" />
                                        </div>
                                        <div className="col-9 col-md-9 col-lg-10 text-start">
                                            <h5 className="testimonial-author-name mb-1">Apsara Raj</h5>
                                            <p className="testimonial-author-position">Dept. Coordinator @ Logiprompt Techno Solutions Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;