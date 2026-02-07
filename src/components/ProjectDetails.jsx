import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import Footer from './common/Footer';
import './project-details.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <button onClick={() => navigate('/projectspage')} className="btn-back">
                    Back to Projects
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="project-details-page">
                <div className="container">
                    <button onClick={() => navigate('/projectspage')} className="btn-back">
                        <i className="bi bi-arrow-left"></i> Back to Projects
                    </button>

                    <div className="details-hero">
                        <h1 className="details-title">{project.title}</h1>
                        <p className="details-subtitle">{project.description}</p>
                    </div>

                    <div className="details-content">
                        <div className="main-image-container">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="main-project-image" />
                            ) : (
                                <div className="project-placeholder large">
                                    <span>{project.title} Preview</span>
                                </div>
                            )}
                        </div>

                        <div className="project-info-grid">
                            <div className="info-section">
                                <h3>About the Project</h3>
                                <p className="full-description">{project.fullDescription}</p>

                                <h3>Key Features</h3>
                                <ul className="details-features">
                                    {project.features.map((feature, index) => (
                                        <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-section">
                                <div className="tech-stack-box">
                                    <h3>Tech Stack</h3>
                                    <div className="tech-tags">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="cta-box">
                                    <h3>Interested?</h3>
                                    <p>Get full access to this project including documentation and support.</p>
                                    <a href={`mailto:nimalprince.dev@gmail.com?subject=Inquiry about ${project.title}`} className="btn-buy">
                                        {project.price} <i className="bi bi-envelope-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {project.gallery && project.gallery.length > 0 && (
                            <div className="gallery-section">
                                <h3>Project Gallery</h3>
                                <div className="gallery-grid">
                                    {project.gallery.map((img, index) => (
                                        <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
                                            <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <img src={selectedImage} alt="Full size view" />
                        <button className="close-lightbox" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default ProjectDetails;
