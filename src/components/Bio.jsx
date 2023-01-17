import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from 'react-bootstrap/Button';
import * as AiIcons from "react-icons/ai"


export default function Bio() {
  return (
    <div className="home">
    <div className="row">
      <div className="col-6 d-flex justify-content-end">
        <Image
          className="hero-image me-5"
          src={require("../images/me.jpg")}
          alt="Trevor Bryant"
        />
      </div>
      <div className="col mt-5">
        <h4>Hello World! I'm</h4><p><span style={{color:"blue"}}>Trevor</span> Bryant</p>    
        <p className="fs-5 ">A<span style={{color:"blue"}}> Front-End Web Devolper </span>& natural problem solver transitioning into the field of tech.</p>
        <div className="row d-flex align-items-center">
          <div className="col-4">
        <Button size="lg" className="resume-button">Resumé</Button>
        </div>
        <div className="col-7 d-flex justify-content-evenly">
          <Button size="md" className="bio-button"><AiIcons.AiFillLinkedin/></Button>
          <Button className="bio-button"><AiIcons.AiOutlineGithub/></Button>
          <Button className="bio-button d-flex justify-content-center align-items-center"><AiIcons.AiOutlineFacebook/></Button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
