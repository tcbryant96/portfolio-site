import React from "react";
import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <>
      <div className="col-10">
        <div className="row">
          <div className="col-1">
            <hr></hr>
          </div>
          <div className="col">
            <p className="fs-6 text-muted"id="about-me">some info</p>
          </div>
        </div>
        <h2>About Me</h2>
        <Card className="card-box mt-5 mb-5">
          <Card.Body className="fs-5">I am a Full-Stack Web Devolper with a diverse background in Sales, Human Relations, and various other viable skills. I prefer making web pages coming to life on the Front-End, though my understanding of the Back-End stays relavent. I recently graduated from<span style={{color:"blue"}}> Coding Temple's Full Stack Web Development Bootcamp.</span> I am passionate about predetermining user needs and creating interactive web pages for an enjoyable experience. I am excited to meet my potential by working along side the intuitive minds in the IT industry! </Card.Body>
        </Card>
      </div>
    </>
  );
}
