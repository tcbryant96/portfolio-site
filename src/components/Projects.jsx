import React from 'react'
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { ThemeProvider } from 'react-bootstrap';

export default function Projects() {
  return (
    <>
          <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
    <div className="col p-3 mt-5">
      <div className="row">
        <div className="col-1">
          <hr></hr>
        </div>
        <div className="col">
          <p className="fs-6 text-muted" id="my-projects">look at my</p>
        </div>
      </div>
      <h2>Live Projects</h2>
      <Card className="card-box mt-5 mb-5">
        <Card.Body className="fs-5">
            <div className='row'>
            <div className='col-lg order-lg-first d-flex justify-content-center align-items-center'>
                    <Image
                    className='container-fluid project-image'
                    src={require("../images/2023-03-02.png")}>

                    </Image>
                </div>
                <div className='col-lg order-md-last'>
                    <h2 className='text-center p-3'>GrindhousePro Wrestling</h2>
                    <h4>Technoligies Used: <span style={{color:"blue"}}>React, Javascript, CSS, HTML, Rest API, Bootstrap, PostgreSQL, Azure</span> </h4>
                    <ul className='fs-6'>
                      <li>Complete design control for Grindhouse landing page, implementing CSS animations for elevated UX design</li>
                      <li>Connected to Azure database to store company's videos in blobs and display blob files. Will be displayed once client's finances are in order </li>
                      <li>Used React Router Dom for navigation to all of company;s social media and partnered businesses</li>
                    </ul>
                    <a className='mt-5 text-center' href="https://superb-kataifi-24d726.netlify.app/">https://superb-kataifi-24d726.netlify.app/</a>
                </div>
            </div>
        </Card.Body>
      </Card>
      <Card className="card-box mt-5 mb-5">
  <Card.Body className="fs-5">
    <div className='row'>
      <div className='col-lg order-lg-first d-flex justify-content-center align-items-center'>
        <Image
          className='container-fluid project-image'
          src={require("../images/2023-01-17.png")}
        />
      </div>
      <div className='col-lg order-md-last'>
        <h2 className='text-center p-3'>Recipe Generator</h2>
        <h4>Technoligies Used: <span style={{color:"blue"}}>Javascript, Python, Flask, CSS, HTML, Rest API, Bootstrap, PostgreSQL</span> </h4>
        <ul className='fs-6'>
          <li>Curated a straightforward, professional interface using React, Bootstrap, and CSS  that modularized React components and displayed dynamic web pages, such as a user’s username when successfully logged in and recipes based on the number of  ingredients they have in their fridge</li>
          <li>Optimized the recipe search engine to accept multiple criteria by filtering a user’s input and fetching data from the most relevant API</li>
          <li>Constructed a Flask API on the back end that uses token authentication to handle HTTP requests and verify complex logins </li>
          <li>Stored application data and user information in a SQLite database hosted in ElephantSQL</li>
        </ul>
        <a className='mt-5 text-center' href="https://reliable-caramel-25efb8.netlify.app">https://reliable-caramel-25efb8.netlify.app</a>
      </div>
    </div>
  </Card.Body>
</Card>

      <Card className="card-box mt-5 mb-5">
        <Card.Body className="fs-5">
            <div className='row'>
            <div className='col-lg order-lg-first d-flex justify-content-center align-items-center'>
                    <Image
                    className='container-fluid project-image'
                    src={require("../images/2023-01-18.png")}>

                    </Image>
                </div>
                <div className='col-lg order-md-last'>
                    <h2 className='text-center p-3'>Pokédex</h2>
                    <h4>Technoligies Used: <span style={{color:"blue"}}>Javascript, CSS, HTML, Rest API, Bootstrap</span> </h4>
                    <ul className='fs-6'>
                        <li>Built HTML template with CSS with Bootstrap framework</li>
                        <li>Displayed information retrieved from Pokémon API using async functions and DOM Maniputlation</li>
                        <li>Created cards with Pokémon information based on user input using event listeners</li>
            
                    </ul>
                    <a className='mt-5 text-center' href="https://tcbryant96.github.io">https://tcbryant96.github.io</a>
                </div>
            </div>
        </Card.Body>
      </Card>
    </div>
    </ThemeProvider>
  </>
  )
}
