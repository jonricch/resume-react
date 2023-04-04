import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import "./NavbarToggle.css";

const NavbarToggle = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="navbar-theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p className="toogle-icon">
            <BsToggleOff size={40} />
          </p>
        ) : (
          <p>
            <BsToggleOn size={40} />
          </p>
        )}
      </div>
    </div>
  );
};

export default NavbarToggle;
