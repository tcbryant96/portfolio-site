import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from 'react-bootstrap/Button';
import * as AiIcons from "react-icons/ai"
import { useInView } from "react-intersection-observer";



export default function Bio() {
  const { ref: myName, inView: moveNameIn} = useInView()

  return (
    <>
    <div className="home" id="my-bio">
    <div className="row">
      <div className="col-6 d-flex justify-content-center">
        <Image
          className="hero-image me-5"
          src={require("../images/me.jpg")}
          alt="Trevor Bryant"
        />
      </div>
      <div className="col mt-5">
        <div className="row">
        <div className="col">
        <h4>Hello World! I'm</h4> <p className={`${moveNameIn ? "animate-name" : "hidden"}`} ref={myName}><span style={{color:"blue"}}>Trevor</span> Bryant</p>    
        <p className="fs-5 ">A<span style={{color:"blue"}}> Front-End Web Devolper </span>& natural problem solver transitioning into the field of tech.</p>
        </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex">
        <a href="https://docs.google.com/document/d/1NA7TYqTD6FPjqw-u7X1wPmXWlY7JBOXBFYOMvRwESHk/edit?usp=share_link"><Button size="lg" className="resume-button">Resumé</Button></a>
        </div>
        <div className="col-7 d-flex justify-content-evenly">
        <a href="https://www.linkedin.com/in/trevor-bryant-2589ba218/"><Button className="bio-button mb-2"><AiIcons.AiFillLinkedin/></Button></a>
        <a href="https://github.com/tcbryant96"><Button className="bio-button mb-2"><AiIcons.AiOutlineGithub/></Button></a>
        <a href="#contact-form"><Button className="bio-button mb-2"><AiIcons.AiOutlineMail/></Button></a>
        </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
