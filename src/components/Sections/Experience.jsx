import React from "react";


function Experience() {
    return (
        <>
            <section id="experience_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 experience-head-text">
                            <div className="experience-head1">My</div>
                            <div className="experience-head2">Experience!</div>
                        </div>
                        <div className="col-md-8 experience-para">
                            <div class="exp-container">
                                <div class="timeline-block timeline-block-right" data-aos="fade-right">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>Project Associate</h3>
                                        <span><i class="bi bi-briefcase-fill"></i> Logiprompt Techno Solutions Pvt. Ltd.</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                                    </div>
                                </div>

                                <div class="timeline-block timeline-block-left" data-aos="fade-left">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>Software Trainee Intern</h3>
                                        <span><i class="bi bi-briefcase-fill"></i> Logiprompt Techno Solutions Pvt. Ltd</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Experience;