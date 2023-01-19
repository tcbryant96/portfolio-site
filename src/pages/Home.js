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

export default function Home() {
  return (
    <>
      <Bio></Bio>
      <div className="row">
        <div className="col-10 d-flex justify-content-end">
          <AboutMe></AboutMe>
        </div>
      </div>
      <div className="row">
        <div className="col-10 d-flex justify-content-end">
          <Skills></Skills>
        </div>
      </div>
      <div className="row">
        <div className="col-10 d-flex justify-content-end">
          <Projects></Projects>
        </div>
      </div>
      <div className="row">
        <div className="col-10 d-flex justify-content-end">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
