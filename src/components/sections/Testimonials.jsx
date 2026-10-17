import React from "react";
import { testimonials } from "../../data/portfolioData";
import Doodle from "../common/Doodle";
import { Float, Pop, PopText, Squiggle } from "../common/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section quotes">
      <Doodle shape="sparkle" fill="var(--yellow)" size={54} className="quotes__d quotes__d--1" />
      <Doodle shape="cloud" fill="var(--white)" size={140} className="quotes__d quotes__d--2" />

      <div className="container">
        <div className="section__head">
          <h2 className="h-section">
            <Squiggle color="var(--yellow)">
              <PopText text="Kind words" />
            </Squiggle>
          </h2>
        </div>

        <div className="quotes__grid">
          {testimonials.map((item, index) => (
            <Float key={item.name} amount={9} duration={5 + index} delay={index * 0.7}>
            <Pop className="quotes__item" delay={index * 0.12} rotate={index % 2 ? 3 : -3}>
              <figure>
                <blockquote className="quotes__bubble card">
                  <p className="quotes__text">{item.quote}</p>
                  <svg className="quotes__tail" viewBox="0 0 40 30" aria-hidden="true">
                    <path d="M2 2h34L10 28z" fill="var(--white)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M4 1h30" stroke="var(--white)" strokeWidth="5" />
                  </svg>
                </blockquote>
                <figcaption className="quotes__author">
                  <img src={item.image} alt="" width="60" height="60" loading="lazy" decoding="async" />
                  <span>
                    <strong>{item.name}</strong>
                    <small>
                      {item.role}, {item.company}
                    </small>
                  </span>
                </figcaption>
              </figure>
            </Pop>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
