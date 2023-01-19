import React from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact() {
  return (
    <>
    <div className="col-10">
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
            <h2 className='text-center'>Email Me</h2>
        <Form className='mt-3'>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Your Email*" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="Name" placeholder="Your Name*" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Control placeholder="Subject*" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="Your Message*" />
      </Form.Group>
    <Col className='d-flex justify-content-center'>
      <Button variant="primary" type="submit" className='text-center'>
        Submit
      </Button>
      </Col>
    </Form>
        </Card.Body>
      </Card>
    </div>
  </>
  )
}
