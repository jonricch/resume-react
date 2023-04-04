import React from "react";
import "./About.css";
import Profilepic from "../../image/JonRich.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={Profilepic} alt="Profile-Pic" />
            </div>
          </div>
        </Fade>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip>
              <div className="about-title">
                <h5>About me</h5>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade left>
              <p>
                I am a self-taught web developer with a passion for creating
                beautiful and functional websites. Despite not having any work
                experience or a degree in IT-related courses, I have enrolled in
                several online courses and am currently studying at Refocus to
                further enhance my skills. I have completed various projects in
                HTML, CSS, and JavaScript, which have taught me valuable lessons
                about web development and design. As a person, I am a curious
                and creative individual who enjoys exploring new ideas and
                concepts. I am a fast learner and am not afraid to take on
                challenges, even if they seem daunting at first. I am
                detail-oriented and always strive for excellence in everything I
                do. I am also a team player who values collaboration and open
                communication in order to achieve common goals. In my free time,
                I enjoy reading books and articles about technology and web
                development, as well as practicing yoga to stay grounded and
                focused.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
