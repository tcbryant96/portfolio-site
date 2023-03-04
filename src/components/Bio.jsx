import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from "react-bootstrap/Button";
import * as AiIcons from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "react-bootstrap";

export default function Bio() {
  const { ref: myName, inView: moveNameIn } = useInView();
  const [toAnime, setToAnime] = useState(false);

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <div
          className="row d-flex justify-content-center align-items-center p-5 mb-5"
          id="my-bio"
        >
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center flex-grow-1">
              <div className="col h-100 d-flex justify-content-center align-items-center">
                <div style={{ position: "relative" }}>
                  <Image
                    className="hero-image"
                    src={require("../images/me.jpg")}
                    alt="Trevor Bryant"
                  />
                  <Image
                    className={`hero-image-2 ${
                      toAnime ? "animate-headband" : "hidden"
                    }`}
                    src={require("../images/pngaaa.com-2413255 (1).png")}
                  ></Image>
                  <Image
                    className={`hero-image-3 ${
                      toAnime ? "animate-sharingan" : "hidden"
                    }`}
                    src={require("../images/pngfind.com-sharingan-png-470771.png")}
                  ></Image>
                  <Image
                    className={`hero-image-4 ${
                      toAnime ? "animate-mask" : "hidden"
                    }`}
                    src={require("../images/—Pngtree—black mask design for free_6234134.png")}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col h-100 d-flex justify-content-center align-items-center pt-5">
                <Button
                  className=" mt-4 resume-button anime-button"
                  onClick={() => {
                    setToAnime(true);
                  }}
                >
                  ANIME-te me
                </Button>
              </div>
            </div>
          </div>
          <div
            xl={6}
            lg={6}
            md={12}
            sm={12}
            className="col-md-12 col-lg-6 mt-5 d-flex flex-column"
          >
            <div className="row flex-grow-1">
              <div className="col  h-100">
                <h2 className="mb-4 text-center ">Hello World! I'm</h2>
                <h1
                  className={`mb-4 text-center ${
                    moveNameIn ? "animate-name" : "hidden"
                  }`}
                  ref={myName}
                >
                  <span style={{ color: "blue" }}>Trevor</span> Bryant
                </h1>
                <h2 className="text-center">
                  A
                  <span style={{ color: "blue" }}>
                    {toAnime ? " Shinobi " : " Web-Developer "}
                  </span>
                  & natural problem solver transitioning into the field of tech.
                </h2>
              </div>
            </div>
            <div className="row h-100 d-flex justify-content-center align-items-center">
              <div
                lg={4}
                md={4}
                sm={12}
                xs={12}
                xxs={12}
                className="col h-100 d-flex justify-content-center align-items-center"
              >
                <a href="https://docs.google.com/document/d/18RRgV2cI6T-Q4lCna-mMc4Hid6qq4WJ7C9C8NGP_Pl8/edit?usp=sharing">
                  <Button size="lg" className="resume-button">
                    Resumé
                  </Button>
                </a>
              </div>
              <div className="col d-flex  justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/trevor-bryant-2589ba218/">
                  <Button className="bio-button m-2">
                    <AiIcons.AiFillLinkedin />
                  </Button>
                </a>
                <a href="https://github.com/tcbryant96">
                  <Button className="bio-button m-2">
                    <AiIcons.AiOutlineGithub />
                  </Button>
                </a>
                <a href="#contact-form">
                  <Button className="bio-button m-2">
                    <AiIcons.AiOutlineMail />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
