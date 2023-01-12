import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";

export default function Home() {
  return (
    <div className="home">
      <div className="row d-flex justify-content-center ">
        <div className="col-3">
          <Image
            className="hero-image"
            src={require("../images/me.jpg")}
            alt="Fridge"
          />
        </div>
        <div className="col-5">
          <h4>Hello World! I'm</h4><p><span style={{color:"blue"}}>Trevor</span> Bryant</p>    
          <p className="fs-5 ">A<span style={{color:"blue"}}> Front-End Web Devolper </span>& natural problem solver transitioning into the field of tech.</p>
        </div>
      </div>
    </div>
  );
}
