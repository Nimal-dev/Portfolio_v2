import React from "react";
import "../Sections/testimonials.css";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import { testimonials } from "../../data/portfolioData";

function Testimonials() {
  return (
    <section id="testimonials" className="portfolio-section testimonials-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Testimonials</p>
          <h2>Feedback from people who have worked with me.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card glass-panel"
              key={testimonial.name}
            >
              <i className="bi bi-quote testimonial-quote-icon" />
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <ImageWithSkeleton
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt={testimonial.name}
                  skeletonVariant="circle"
                  skeletonWidth="62px"
                  skeletonHeight="62px"
                  wrapperStyle={{ width: "62px", height: "62px" }}
                />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>
                    {testimonial.role} @ {testimonial.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
