import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { ThemeProvider } from "react-bootstrap";

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
              <p className="fs-6 text-muted" id="my-projects">
                look at my
              </p>
            </div>
          </div>
          <h2>Live Projects</h2>
          <Card className="card-box mt-5 mb-5">
            <Card.Body className="fs-5">
              <div className="row">
                <div className="col-lg order-lg-first d-flex justify-content-center align-items-center">
                  <Image
                    className="container-fluid project-image"
                    src={require("../images/2023-03-02.png")}
                  ></Image>
                </div>
                <div className="col-lg order-md-last">
                  <h2 className="text-center p-3">GrindhousePro Wrestling</h2>
                  <h4>
                    Technoligies Used:{" "}
                    <span style={{ color: "blue" }}>
                      React, Javascript, CSS, HTML, Rest API, Bootstrap,
                      PostgreSQL, Azure
                    </span>{" "}
                  </h4>
                  <ul className="fs-6">
                    <li>
                      As the lead designer and developer for the Grindhouse
                      landing page, I had complete creative control to ensure a
                      polished and engaging user experience. To elevate the
                      design, I implemented CSS animations that provided a
                      seamless and immersive experience for the user.
                    </li>
                    <li>
                      In addition, I connected the landing page to an Azure
                      database, allowing the company's video content to be
                      stored in blobs for optimized performance. Once the
                      client's finances are in order, the video files will be
                      displayed prominently on the landing page.{" "}
                    </li>
                    <li>
                      For easy navigation, I utilized React Router Dom to link
                      to all of the company's social media platforms and
                      partnered businesses. By leveraging this powerful tool,
                      users can effortlessly explore and engage with
                      Grindhouse's online presence.
                    </li>
                  </ul>
                  <a
                    className="mt-5 text-center"
                    href="https://superb-kataifi-24d726.netlify.app/"
                  >
                    https://superb-kataifi-24d726.netlify.app/
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-box mt-5 mb-5">
            <Card.Body className="fs-5">
              <div className="row">
                <div className="col-lg order-lg-first d-flex justify-content-center align-items-center">
                  <Image
                    className="container-fluid project-image"
                    src={require("../images/2023-01-17.png")}
                  />
                </div>
                <div className="col-lg order-md-last">
                  <h2 className="text-center p-3">Recipe Generator</h2>
                  <h4>
                    Technoligies Used:{" "}
                    <span style={{ color: "blue" }}>
                      Javascript, Python, Flask, CSS, HTML, Rest API, Bootstrap,
                      PostgreSQL
                    </span>{" "}
                  </h4>
                  <ul className="fs-6">
                    <li>
                      As the lead developer for a recipe management application,
                      I designed and implemented a straightforward, professional
                      interface using React, Bootstrap, and CSS. My approach
                      modularized React components and enabled dynamic web pages
                      that displayed personalized content such as a user's
                      username when successfully logged in or recipes based on
                      the number of ingredients they had in their fridge.
                    </li>
                    <li>
                      To improve the application's functionality, I optimized
                      the recipe search engine to accept multiple criteria by
                      filtering a user's input and fetching data from the most
                      relevant API. This enhanced the search experience for the
                      user and made finding the perfect recipe even easier.
                    </li>
                    <li>
                      On the back-end, I constructed a robust Flask API that
                      utilized token authentication to handle HTTP requests and
                      ensure secure logins. This approach verified complex
                      logins and added an extra layer of protection to the
                      application.{" "}
                    </li>
                    <li>
                      Finally, I stored application data and user information in
                      a scalable SQLite database hosted in ElephantSQL. This
                      solution provided a stable and efficient way to manage
                      data and allowed for seamless integration with the
                      application's front-end.
                    </li>
                    <li>
                      Overall, my contributions to this project enabled a
                      seamless and intuitive user experience while ensuring the
                      application's back-end was secure and scalable.
                    </li>
                  </ul>
                  <a
                    className="mt-5 text-center"
                    href="https://reliable-caramel-25efb8.netlify.app"
                  >
                    https://reliable-caramel-25efb8.netlify.app
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="card-box mt-5 mb-5">
            <Card.Body className="fs-5">
              <div className="row">
                <div className="col-lg order-lg-first d-flex justify-content-center align-items-center">
                  <Image
                    className="container-fluid project-image"
                    src={require("../images/2023-01-18.png")}
                  ></Image>
                </div>
                <div className="col-lg order-md-last">
                  <h2 className="text-center p-3">Pokédex</h2>
                  <h4>
                    Technoligies Used:{" "}
                    <span style={{ color: "blue" }}>
                      Javascript, CSS, HTML, Rest API, Bootstrap
                    </span>{" "}
                  </h4>
                  <ul className="fs-6">
                    <li>
                      As a front-end developer for a Pokémon-themed application,
                      I designed and implemented a modern and responsive user
                      interface using HTML and CSS with the Bootstrap framework.
                      The result was an eye-catching and user-friendly layout
                      that enhanced the application's overall experience.
                    </li>
                    <li>
                      To provide users with dynamic and up-to-date information,
                      I utilized asynchronous functions to fetch data from the
                      Pokémon API and manipulated the DOM to display the
                      information in a clear and organized manner. This allowed
                      users to easily explore and discover new Pokémon in
                      real-time.
                    </li>
                    <li>
                      To further engage users, I created interactive cards that
                      displayed detailed information about a selected Pokémon.
                      These cards were generated on the fly based on the user's
                      input using event listeners, resulting in a seamless and
                      intuitive user experience.
                    </li>
                    <li>
                      Overall, my contributions to this project enabled users to
                      interact with the Pokémon universe in an engaging and
                      immersive way, while also providing them with the
                      information they needed to become true Pokémon masters.
                    </li>
                  </ul>
                  <a
                    className="mt-5 text-center"
                    href="https://tcbryant96.github.io"
                  >
                    https://tcbryant96.github.io
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
}
