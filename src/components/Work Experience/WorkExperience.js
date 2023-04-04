import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const WorkExperience = () => {
  const data = [
    {
      id: 0,
      companyname: "Google",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
      ],
    },
    {
      id: 1,
      companyname: "Facebook",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
      ],
    },
    {
      id: 2,
      companyname: "Youtube",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
      ],
    },
    {
      id: 3,
      companyname: "Microsoft",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      id: 4,
      companyname: "Facebook",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      id: 5,
      companyname: "Facebook",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      year: "2018-2019",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
  ];

  const colors = [
    "#001CCE",
    "#FE2EF7",
    "#800000",
    "#4B088A",
    "#FFBB24",
    "#FF1042",
  ];

  return (
    <div className="container work-experience-section" id="workExperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[item.id], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #ff0024" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[item.id], color: "#fff" }}
              icon={<MdGroupWork />}
              key={uuidv4()}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {item.position}
              </h5>

              <div className="row">
                {item.techskills.map((tec) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={uuidv4()}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
