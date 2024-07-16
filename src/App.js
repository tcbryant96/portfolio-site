import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >

            <Home></Home>
    
      </ThemeProvider>
    </>
  );
}

export default App;
