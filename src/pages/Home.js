import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from "react-bootstrap/Button";
import * as AiIcons from "react-icons/ai";
import Bio from "../components/Bio";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SideNavbar from "../components/SideNavbar";
import { ThemeProvider } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <div class="row no-padding ">
          <div className="col-md-2 col-sm-12 sticky-bottom no-padding">
            <SideNavbar className="container-fluid"></SideNavbar>
          </div>
          <div className="col-md-10 col-sm-12">
            <Bio></Bio>
            <AboutMe></AboutMe>

            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
