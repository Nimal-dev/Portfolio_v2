import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import Footer from './common/Footer';
import { projects } from '../data/projectsData';

const ProjectsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="projects-page">
                <div className="container">
                    <div className="projects-header">
                        <h1>Projects</h1>
                    </div>

                    <div className="projects-subcategory">
                        <h3>Premium Builds</h3>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <Link to={`/projectspage/${project.id}`} key={project.id} className="project-card-link">
                                <div className="project-card">
                                    <div className="card-image-container">
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} className="project-image" />
                                        ) : (
                                            <div className="project-placeholder">
                                                <span>{project.title}</span>
                                            </div>
                                        )}
                                        <div className="card-overlay">
                                            <span className="tech-badge">{project.techStack[0]}</span>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h2>{project.title}</h2>
                                        <p className="description">{project.description}</p>

                                        <div className="tech-stack">
                                            {project.techStack.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                            {project.techStack.length > 3 && <span className="tech-tag">+{project.techStack.length - 3}</span>}
                                        </div>

                                        <ul className="features-list">
                                            {project.features.slice(0, 3).map((feature, index) => (
                                                <li key={index}><i className="bi bi-check2-circle"></i> {feature.split(':')[0]}</li>
                                            ))}
                                        </ul>

                                        <div className="card-footer">
                                            <div className="price-tag">{project.price}</div>
                                            <span className="btn-contact">
                                                View Details <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
