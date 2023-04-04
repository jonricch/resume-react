import React, { useState } from "react";
import "./sidebar.css";
import Home from "../Home/Home";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";

const Sidebar = ({ theme, changeTheme }) => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-navbar-expand-and-collpase">
          <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <BsChevronLeft size={25} />
            ) : (
              <BsChevronRight size={25} />
            )}
          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container-fluid">
        <Home changeTheme={changeTheme} theme={theme} />
      </div>
    </div>
  );
};

export default Sidebar;
