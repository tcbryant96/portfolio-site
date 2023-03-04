import React from "react";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

export default function SideNavbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: 42 }}>
        <nav className="side-navbar">
          <ul>
            <li className="side-navbar-header">TB</li>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <li>
                    <a href={item.path} className="icon-link">
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
