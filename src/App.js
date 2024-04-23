import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Home/>
    </BrowserRouter>
  );
}

export default App;
