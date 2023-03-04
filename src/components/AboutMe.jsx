import React from "react";
import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <>
      <div className="col p-3">
        <div className="row">
          <div className="col-1">
            <hr></hr>
          </div>
          <div className="col">
            <p className="fs-6 text-muted" id="about-me">
              some info
            </p>
          </div>
        </div>
        <h2>About Me</h2>
        <Card className="card-box mt-5 mb-5">
          <Card.Body className="fs-4 about-me-text p-4">
            As a Full-Stack Web Developer with a background in Sales, Human
            Relations, and various other valuable skills, I bring a diverse
            perspective to my work. While my passion lies in bringing web pages
            to life on the Front-End, my understanding of the Back-End remains
            relevant and up-to-date. I recently graduated from
            <span className="about-me-text" style={{ color: "blue" }}>
              {" "}
              Coding Temple's Full Stack Web Development Bootcamp{" "}
            </span>
            and am eager to apply my skills to create interactive and engaging
            user experiences. I am dedicated to understanding user needs and
            leveraging my technical skills to create high-quality web pages. I
            look forward to collaborating with like-minded professionals in the
            IT industry to further enhance my knowledge and skills.{" "}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
