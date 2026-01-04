import React, { useEffect } from "react";
import "./skills.css";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import AOS from 'aos';

// Images
import reactpic from "../../assets/Skills/react.png";
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css.png";
import bootstrap from "../../assets/Skills/bootstrap.png";
import dart from "../../assets/Skills/dart.png";
import flutter from "../../assets/Skills/flutter.png";
import git from "../../assets/Skills/git.png";
import github from "../../assets/Skills/github.png";
import js from "../../assets/Skills/js.png";
import mongodb from "../../assets/Skills/mongodb.png";
import nodejs from "../../assets/Skills/nodejs.png";
import arduino from "../../assets/Skills/arduino.png";

const skillsData = [
    { name: "React", img: reactpic, color: "#61DAFB" },
    { name: "HTML5", img: html, color: "#E34F26" },
    { name: "JavaScript", img: js, color: "#F7DF1E" },
    { name: "CSS3", img: css, color: "#1572B6" },
    { name: "Bootstrap", img: bootstrap, color: "#7952B3" },
    { name: "Node.js", img: nodejs, color: "#339933" },
    { name: "GitHub", img: github, color: "#ffffff" }, // White glow for github
    { name: "Git", img: git, color: "#F05032" },
    { name: "MongoDB", img: mongodb, color: "#47A248" },
    { name: "Dart", img: dart, color: "#0175C2" },
    { name: "Flutter", img: flutter, color: "#02569B" },
    { name: "Arduino", img: arduino, color: "#00979D" },
];

function Skills() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section id="Skills_Section">
            <div className="container">
                <h2 className="skill-text" data-aos="fade-down">
                    <span>Skills</span> & <span>Tech</span>
                </h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="tech-card"
                            style={{ '--glow-color': skill.color }}
                            data-aos="fade-up"
                            data-aos-delay={index * 50} // Staggered delay
                        >
                            <div className="tech-icon-wrapper">
                                <ImageWithSkeleton
                                    src={skill.img}
                                    className="img-fluid"
                                    alt={skill.name}
                                    skeletonHeight="60px"
                                    skeletonWidth="60px"
                                    wrapperStyle={{ width: '60px', height: '60px' }}
                                />
                            </div>
                            <h4 className="tech-name">{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
