import React from "react";
import Card from "react-bootstrap/Card";
import { SkillData } from "./SkillsData";
export default function skills() {
  return (
    <>
      <div className="col-10 mt-5">
        <div className="row">
          <div className="col-1">
            <hr></hr>
          </div>
          <div className="col">
            <p className="fs-6 text-muted">check out my</p>
          </div>
        </div>
        <h2>Skills</h2>
        <Card className="card-box mt-5 mb-5 ">
          <Card.Body className="fs-5 skills-body">
            {SkillData.map((item, index) =>{
                return(
                    <Card className="skill-card" key={index}>
                    <Card.Img
                      variant="top"
                      src={require(`../images/${item.image}`)}
                      className="skill-image"
                    />
                    <Card.Body>
                      <Card.Text className="fs-6 fw-bold text-center">
                        {item.title}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
            })}

          </Card.Body>
        </Card>
      </div>
    </>
  );
}
