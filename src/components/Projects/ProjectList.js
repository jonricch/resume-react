import React, { useState } from "react";
import "./ProjectList.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

import Zoom from "react-reveal/Zoom";

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollpase = () => {
    setShow(!show);
  };

  const colors = [
    "#1F618D",
    "#FE2EF7",
    "#800000",
    "#4B088A",
    "#FFBB24",
    "#FF1042",
  ];

  return (
    <Zoom>
      <div
        className={show ? "project-list-opened project-list" : "project-list"}
        onClick={handleShowandCollpase}
        onMouseEnter={() => setShow(true)}
        //   onMouseLeave={() => setShow(false)}
      >
        <div className="title-and-collapse-option">
          <h5>{name}</h5>
          <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />} </p>
        </div>

        <div className="description">
          {show ? <p>{des}</p> : <p>{des.substring(0, 50)}...</p>}
        </div>

        <div className="row">
          {techused &&
            techused.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p style={{ backgroundColor: colors[index] }}>
                    {tech.techname}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="live-demo-button">
          <a href={projectlink} target="_">
            Live Demo
          </a>
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectList;
