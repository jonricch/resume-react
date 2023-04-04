import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import NavbarToggle from "./NavbarToggle";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
        {open ? (
          <div className="mobile-nav">
            <ul>
              <li className="nav-item-mobileview">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcHome size={20} /> Home
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcNightPortrait size={20} /> About
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="workExperience"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcFactory size={20} /> Work Experience
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <MdBiotech size={20} color="orange" /> Tech Stack
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <MdCastForEducation size={20} color="yellow " /> Education
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcTodoList size={20} /> Projects
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="reference"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcSalesPerformance size={20} /> Reference
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  <FcContacts size={20} /> Contact
                </Link>
              </li>
              <li className="navbar-toggle">
                <NavbarToggle changeTheme={changeTheme} theme={theme} />
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavbarMobileView;
