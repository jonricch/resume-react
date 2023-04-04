import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const data = [
    {
      name: "Refocus Online Academy",
      course: "Full-Stack Web Developer",
      year: "2023 - Present",
      des: "I am a self-taught web developer with a passion for creating beautiful and functional websites.",
    },
    {
      name: "Legit Online Virtual Assistance Academy",
      course: "Basic SEO",
      year: "2021 ",
      des: "I am a self-taught web developer with a passion for creating beautiful and functional websites.",
    },
    {
      name: "Quick Pro Freelance Academy",
      course:
        "Web Developer, Basic SEO, MX Excel, Adobe Photoshop, Adobe Illustrator, Social Media Marketing",
      year: "2019 - 2020",
      des: "I am a self-taught web developer with a passion for creating beautiful and functional websites.",
    },
    {
      name: "Saint Columban College",
      course: "Bachelor of Science in Library Information Science",
      year: "2011 - 2015",
      des: "I am a self-taught web developer with a passion for creating beautiful and functional websites.",
    },
  ];
  const colors = ["#FFBB28", "#FF8042", "#001CCE", "#FF1042"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #ff0024" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h6 className="vertical-timeline-element-subtitle">
                {item.course}
              </h6>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
