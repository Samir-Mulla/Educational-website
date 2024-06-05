import React from "react";
import "./About.css";
import about_img from "/about.png";
import play_icon from "/play-icon.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="university campus" className="about-img" />
          <img src={play_icon} alt="play video icon" className="play-icon" />
        </div>
        <div className="about-right">
          <h3>ABOUT THE UNIVERSITY</h3>
          <h2>Empowering Futures in Pune</h2>
          <p>
            Welcome to Ilm College of Engineering a
            beacon of academic excellence nestled in the heart of Pune. Our
            institution stands tall as a testament to the city's rich
            intellectual heritage, offering a nurturing environment for students
            from around the globe.
          </p>
          <p>
            At Ilm College of Engineering, we believe in the power of education to
            transform lives. Our comprehensive curriculum, designed by industry
            experts, equips students with the skills and knowledge needed to
            thrive in today's competitive world.
          </p>
          <p>
            Beyond academics, our vibrant campus life fosters leadership,
            teamwork, and innovation. From state-of-the-art laboratories to our
            extensive extracurricular activities, every aspect of student life
            is crafted to inspire and challenge.
          </p>
          <p>
            Join us at Ilm College of Engineering and embark on a journey of discovery,
            growth, and success. Together, we will shape the future, one
            graduate at a time.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
