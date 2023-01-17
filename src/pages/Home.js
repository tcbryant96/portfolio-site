import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from 'react-bootstrap/Button';
import * as AiIcons from "react-icons/ai"
import Bio from '../components/Bio'
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
   <Bio></Bio>
   <div className="col-10 d-flex justify-content-end">
    <AboutMe></AboutMe>
   </div>
   
   </>
  );
}
