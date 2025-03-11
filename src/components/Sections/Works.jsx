import React from "react";
import ektha from "../../assets/ektha.png"

function Work(){
    return(
        <>
        <section id="works_section">
            <div className="container text-center">
                <h1 className="work-head-text">Projects</h1>
                <div className="row project-row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="project-img">
                           <a target="blank" href="https://ektha2025.netlify.app"><img className="img-fluid ektha-img" src={ektha} alt="Ektha site"/></a> 
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="project-text">
                            <h1 className="project-head">EKTHA'25</h1>
                            <p>A responsive website showcasing our college's annual technology festival. Features include event registration, speaker profiles, workshop schedules, and an interactive campus map. The site was built using react with vite framework. The site featured events, proshows, about the fest and college and add on google registration events.</p>
                            <a className="btn site-btn btn-dark" target="blank" href="https://ektha2025.netlify.app">Live Preview <i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        </>
    )
}

export default Work;