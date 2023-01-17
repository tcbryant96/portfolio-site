
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import AboutMe from "./components/AboutMe";
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    
    <Sidebar></Sidebar>
    <Home></Home>
    

</>
  );
}

export default App;
