import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Porfolio Website Using Bootstrap and Sass",
      des: "This is my website portfolio using Boostrap and Sass that showcases my refocus projects and certificates in github.",
      projectlink: "https://jonricch.github.io/resume.v2/",
      techused: [
        {
          techname: "Node Js",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "Bootstrap 5",
        },
        {
          techname: "Sass",
        },
      ],
    },
    {
      name: "Mern Stack Event Management Portal",
      des: "Coming Soon! ",
      projectlink: "",
      techused: [
        {
          techname: "Django",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Node Js",
        },
      ],
    },
    {
      name: "Mern Stack Social Media",
      des: "Coming Soon! ",
      projectlink: "",
      techused: [
        {
          techname: "Node Js",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Node Js",
        },
      ],
    },
    {
      name: "Mern Stack Video Straming",
      des: "Coming Soon!.",
      projectlink: "",
      techused: [
        {
          techname: "DJango",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Angular Js",
        },
      ],
    },
    {
      name: "Mern Stack Online Learning Platform",
      des: "Coming Soon! ",
      projectlink: "",
      techused: [
        {
          techname: "DJango",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Angular Js",
        },
      ],
    },
    {
      name: "Mern Stack E-commerce",
      des: "Coming Soon!",
      projectlink: "",
      techused: [
        {
          techname: "React Js",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "Redux",
        },
      ],
    },
  ];

  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Project</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-col col-nd-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
