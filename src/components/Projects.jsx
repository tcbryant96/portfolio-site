import React from 'react'
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


export default function Projects() {
  return (
    <>
    <div className="col-10 mt-5">
      <div className="row">
        <div className="col-1">
          <hr></hr>
        </div>
        <div className="col">
          <p className="fs-6 text-muted">look at my</p>
        </div>
      </div>
      <h2>Projects</h2>
      <Card className="card-box mt-5 mb-5">
        <Card.Body className="fs-5">
            <div className='row'>
                <div className='col-5 d-flex align-items-center'>
                    <Image
                    className='container-fluid project-image'
                    src={require("../images/2023-01-17.png")}>

                    </Image>
                </div>
                <div className='col'>
                    <h2 className='text-center'>Recipe Generator</h2>
                    <h4>Technoligies Used: <span style={{color:"blue"}}>Javascript, Python, Flask, CSS, HTML, Rest API, Bootstrap, PostgreSQL</span> </h4>
                    <ul className='fs-6'>
                        <li>Curated a straightforward, professional interface using React, Bootstrap, and CSS  that modularized React components and displayed dynamic web pages, such as a user’s username when successfully logged in and recipes based on the number of  ingredients they have in their fridge</li>
                        <li>Optimized the recipe search engine to accept multiple criteria by filtering a user’s input and fetching data from the most relevant API</li>
                        <li>Constructed a Flask API on the back end that uses token authentication to handle HTTP requests and verify complex logins </li>
                        <li>Stored application data and user information in a SQLite database hosted in ElephantSQL</li>
                    </ul>
                    <p className='mt-5'>https://reliable-caramel-25efb8.netlify.app</p>
                </div>
            </div>
        </Card.Body>
      </Card>
    </div>
  </>
  )
}
