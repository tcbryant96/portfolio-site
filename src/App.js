
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>

</>
  );
}

export default App;
