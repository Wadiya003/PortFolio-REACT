// import React, { useState, useEffect } from "react";
import React from "react"
import Navbar from "./Pages/Navbar/Header";
import Home from "./Pages/Home/Home1";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Skill from "./Pages/Skill/Skills";
import Contact from "./Pages/Contact/Contact";
import "./App.css";
import Footer from './Pages/Footer/Footer.js'
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
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
