import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Node Js",
    },
    {
      name: "React Js",
    },
    {
      name: "Express Js",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Wordpress",
    },
    {
      name: "Elementor",
    },
    {
      name: "Divi",
    },
    {
      name: "CSS",
    },
    {
      name: "Javascript",
    },
    {
      name: "Sass",
    },
    {
      name: "Typescript",
    },
    {
      name: "Vite",
    },
    {
      name: "UI/Ux Design",
    },
    {
      name: "HTML 5",
    },
  ];

  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadmore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techStack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right key={index}>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadmore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
