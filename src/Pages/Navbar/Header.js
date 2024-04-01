import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="navbar">
      <ul
        className={click ? "nav-links-responsive" : "nav-links"}
        onClick={() => setClick(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/project" className="work">
          <li>Work</li>
        </Link>
        <Link to="/skill" className="skill">
          <li>Skill</li>
        </Link>
        <Link to="/contact" className="contacts">
          <li>Contact</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setClick(!click)}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </nav>
  );
};

export default Header;
