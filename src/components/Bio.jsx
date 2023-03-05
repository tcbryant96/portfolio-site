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
          className="row column-container d-flex justify-content-center align-items-center mb-5"
          id="my-bio"
        >
          <div className="col column-order-1 d-flex flex-column justify-content-center align-items-center">
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
          <div className="col-md-12 column-order-2 col-lg-6 d-flex flex-column">
                  <h1 className="mb-4 text-center ">Hello World! I'm</h1>
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
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            {toAnime ?
                 <Button
                 size="lg"
                 className=" resume-button anime-button mb-5"
                 onClick={() => {
                   setToAnime(false);
                 }}
               >
                 Normalize Me
               </Button>
            :
            <Button
              size="lg"
              className=" resume-button anime-button mb-5"
              onClick={() => {
                setToAnime(true);
              }}
            >
              ANIME-te Me
            </Button>}
          </div>
          <div className="col d-flex justify-content-evenly align-items-center mb-5">
            <a href="https://docs.google.com/document/d/18RRgV2cI6T-Q4lCna-mMc4Hid6qq4WJ7C9C8NGP_Pl8/edit?usp=sharing">
              <Button size="lg" className="resume-button">
                Resumé
              </Button>
            </a>
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
      </ThemeProvider>
    </>
  );
}
