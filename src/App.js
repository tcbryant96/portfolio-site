
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import AboutMe from "./components/AboutMe";
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <>
    <div className="row">

    <div className="col-2">

    <SideNavbar></SideNavbar>
    </div>
    <div className="col">

    <Home></Home>
    </div>
    </div>
    

</>
  );
}

export default App;
