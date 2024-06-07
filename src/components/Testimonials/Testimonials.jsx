import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "/next-icon.png";
import back_icon from "/back-icon.png";
import TestimonialsData from "../../data/TestimonialsData";

function Testimonials() {
  const slider = useRef();
  let transX = 0;

  const slideForward = () => {
    if (transX > -50) {
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  const slideBackward = () => {
    if (transX < 0) {
      transX += 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          alt="next icon"
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt="back icon"
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            {TestimonialsData.map((testimonial) => (
              <li key={testimonial.id}>
                <div className="slide">
                  <div className="user-info">
                    <img src={testimonial.imageUrl} alt={testimonial.name} />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <p>{testimonial.testimonial}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
