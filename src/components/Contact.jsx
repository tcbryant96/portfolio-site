import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { send } from "emailjs-com";
import * as BsIcons from "react-icons/bs";

export default function Contact() {
  const [toSent, setToSent] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Trevor Bryant",
    message: "",
    reply_to: "",
    subject: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSent = () => {
    setToSent(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ugu42x9", "template_z5a3etn", toSend, "w_IPPumo5Bvo1uwkZ")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        e.target.reply_to.value = "";
        e.target.message.value = "";
        e.target.from_name.value = "";
        e.target.subject.value = "";
      })
      .then(handleSent())

      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <div className="col p-3 add-bottom-margin">
        <div className="row">
          <div className="col-1">
            <hr></hr>
          </div>
          <div className="col">
            <p className="fs-6 text-muted">say hello</p>
          </div>
        </div>
        <h2>Contact</h2>
        <Card className="card-box mt-5 mb-5">
          <Card.Body className="fs-5">
            {toSent ? (
              <h2 className="text-center">I'll be in touch soon :)</h2>
            ) : (
              <h2 className="text-center">Email Me</h2>
            )}
            <Form className="mt-3" id="contact-form" onSubmit={onSubmit}>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="reply_to">
                  <Form.Control
                    onChange={handleChange}
                    value={toSend.reply_to}
                    name="reply_to"
                    type="email"
                    placeholder="Your Email*"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="from_name">
                  <Form.Control
                    name="from_name"
                    required
                    value={toSend.from_name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4" controlId="subject">
                <Form.Control
                  value={toSend.subject}
                  required
                  onChange={handleChange}
                  name="subject"
                  placeholder="Subject*"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  required
                  onChange={handleChange}
                  type="text"
                  value={toSend.message}
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Your Message*"
                />
              </Form.Group>
              <Col className="d-flex justify-content-center align-items-center">
                {toSent ? (
                  <>
                    <Button
                      variant="success"
                      type="submit"
                      className="text-center"
                    >
                      Submitted
                    </Button>
                    <BsIcons.BsCheckLg
                      style={{ color: "green" }}
                      className="ms-2"
                    ></BsIcons.BsCheckLg>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    className="text-center"
                  >
                    Submit
                  </Button>
                )}
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
