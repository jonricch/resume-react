import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Hi, I'm Jon </h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web developer",
                  "Web Designer",
                  "CSS Wizard",
                  "React Developer",
                  "Javascript Expert",
                ],

                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            <div className="hire-me-button">
              {" "}
              <a href="#contact" rel="noreferrer">
                Hire Me
              </a>
            </div>
            <div className="get-resume-button">
              <a
                href="https://jonricch.github.io/Aranco-CV/"
                target="_blank"
                rel="noreferrer"
              >
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Home;
