// import React, { useState, useEffect } from "react";
import React from "react"
import Navbar from "./component/Navbar/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import Project from "./component/Project/Project";
import Skill from "./component/Skill/Skills";
import Contact from "./component/Contact/Contact";
import "./App.css";
import Footer from './component/Footer/Footer.js'
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
