import './Header.css';
import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-line">
          
                        <div className='box1'><Link to="/"> Home</Link></div> 
                        <div className='box1'><Link to="/about">About</Link></div> 
                        <div className='box1'><Link to="/skill">Skills</Link></div> 
                        <div className='box1'><Link to="/project">Projects</Link></div> 
                        <div className='box1'><Link to="/contact">Contact</Link></div> 
                      
                </div>
            </nav>
        );
    }
}

export default Header;