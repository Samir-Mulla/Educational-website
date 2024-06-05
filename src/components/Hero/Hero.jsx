import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import whiteArrow from "/white-arrow.png";
function Hero() {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We ensure better education for a better world</h1>
          <p>
            Our cutting edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <Button content="Explore more" whiteArrow={whiteArrow} />
        </div>
      </div>
    </>
  );
}

export default Hero;
