import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import Navbar from "react-bootstrap/Navbar";

export default function SideNavbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: 42 }}>
        <nav className="side-navbar">
          <div className="row side-navbar-header">TB</div>
          {SidebarData.map((item, index) =>{
            return(
              <>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <a href={item.path} className="icon-link">
                {item.icon}
                <span>{item.title}</span>
              </a>
            </div>
          </div>
          </>
            )
          })}
        </nav>
      </IconContext.Provider>
    </>
  );
}
