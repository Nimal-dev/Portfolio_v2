import React from "react";
import reactpic from "../../assets/Skills/react.png"
import html from "../../assets/Skills/html.png"
import css from "../../assets/Skills/css.png"
import bootstrap from "../../assets/Skills/bootstrap.png"
import dart from "../../assets/Skills/dart.png"
import flutter from "../../assets/Skills/flutter.png"
import git from "../../assets/Skills/git.png"
import github from "../../assets/Skills/github.png"
import js from "../../assets/Skills/js.png"
import mongodb from "../../assets/Skills/mongodb.png"
import mysql from "../../assets/Skills/mysql.png"
import nodejs from "../../assets/Skills/nodejs.png"
import sqllite from "../../assets/Skills/sqllite.png"
import django from "../../assets/Skills/django.png"
import arduino from "../../assets/Skills/arduino.png"


function Skills() {
    return (
        <>
            <section id="Skills_Section">
                <div className="container">

                    <h2 className="text-center skill-text">Skills</h2>
                    
                        <div className="skills container">
                            <ul>

                                <li className="skills-card">
                                    <h4>React</h4>
                                    <img src={reactpic} className="skills-logo" alt="React" />
                                </li>
                                <li className="skills-card">
                                    <h4>HTML5</h4>
                                    <img src={html} className="skills-logo" alt="html" />
                                </li>
                                <li className="skills-card">
                                    <h4>JavaScript</h4>
                                    <img src={js} className="skills-logo" alt="js" />
                                </li>
                                <li className="skills-card">
                                    <h4>CSS</h4>
                                    <img src={css} id="css" className="skills-logo" alt="CSS" />
                                </li>
                                <li className="skills-card">
                                    <h4>BOOTSTRAP</h4>
                                    <img src={bootstrap} className="skills-logo" alt="bootstrap" />
                                </li>
                                <li className="skills-card">
                                    <h4>NodeJS</h4>
                                    <img src={nodejs} className="skills-logo" alt="nodejs" />
                                </li>
                                <li className="skills-card">
                                    <h4>GITHUB</h4>
                                    <img src={github} className="skills-logo" alt="github" />
                                </li>
                                <li className="skills-card">
                                    <h4>GIT</h4>
                                    <img src={git} className="skills-logo" alt="git" />
                                </li>
                                <li className="skills-card">
                                    <h4>MongoDB</h4>
                                    <img src={mongodb} className="skills-logo" alt="MongoDB" />
                                </li>
                                <li className="skills-card">
                                    <h4>Dart</h4>
                                    <img src={dart} className="skills-logo" alt="Dart" />
                                </li>

                                <li className="skills-card">
                                    <h4>Flutter</h4>
                                    <img src={flutter} className="skills-logo" alt="Flutter" />
                                </li>

                                <li className="skills-card">
                                    <h4>MySQL</h4>
                                    <img src={mysql} className="skills-logo" alt="MySQL" />
                                </li>

                                <li className="skills-card">
                                    <h4>SQLite</h4>
                                    <img src={sqllite} className="skills-logo" alt="SQLite" />
                                </li>
                                <li className="skills-card">
                                    <h4>Django</h4>
                                    <img src={django} className="skills-logo" alt="Django" />
                                </li>
                                <li className="skills-card">
                                    <h4>Arduino</h4>
                                    <img src={arduino} className="skills-logo" alt="Arduino" />
                                </li>

                            </ul>
                        </div>
                    


                </div>
            </section>
        </>
    )
}

export default Skills;