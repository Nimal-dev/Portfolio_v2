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
                                        <p>As a Project Associate, I was responsible for developing and implementing software solutions to support project objectives. I designed, coded, and tested applications to improve efficiency and automate processes. Collaborating with teams, I analyzed requirements and delivered scalable solutions. Additionally, I managed project documentation and assisted in key technical decision-making.</p>
                                    </div>
                                </div>

                                <div class="timeline-block timeline-block-left" data-aos="fade-left">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>Software Trainee Intern</h3>
                                        <span><i class="bi bi-briefcase-fill"></i> Logiprompt Techno Solutions Pvt. Ltd</span>
                                        <p>Served as a Software Trainee intern focusing on mobile application development using Flutter framework. Contributed to cross-platform projects, gained hands-on experience with Dart programming language, and collaborated with development teams to implement responsive UI components and integrate APIs. Developed practical skills in the full development lifecycle while working in an agile environment.</p>
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