import './Header.css';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
   

        const [click, setClick] = useState(false)

        // const handleClick = () => setClick(!click)
        
        return (
            <nav className='navbar'>
                <ul className={click? "nav-links-responsive": "nav-links"} onClick={()=>setClick(false)} >
                    <Link to="/" className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className='about'>
                        <li>About</li>
                    </Link>
                    <Link to="/project" className='work'>
                        <li>Work</li>
                    </Link>
                    <Link to="/skill" className='skill'>
                        <li>Skill</li>
                    </Link>
                    <Link to="/contact" className='contacts'>
                        <li>Contact</li>
                    </Link>
  
                        {/* <div className='box1'><Link to="/"> Home</Link></div> 
                        <div className='box1'><Link to="/about">About</Link></div> 
                        <div className='box1'><Link to="/skill">Skills</Link></div> 
                        <div className='box1'><Link to="/project">Projects</Link></div> 
                        <div className='box1'><Link to="/contact">Contact</Link></div>  */}
                        
                 </ul> 
        
   <button className="mobile-menu-icon" onClick={()=>setClick(!click)}>
    click
   </button>
            
        </nav>
            // <>
            // <nav className="navbar" ref={navref}>
            //     <div className="navbar-line">
          
            //             <div className='box1'><Link to="/"> Home</Link></div> 
            //             <div className='box1'><Link to="/about">About</Link></div> 
            //             <div className='box1'><Link to="/skill">Skills</Link></div> 
            //             <div className='box1'><Link to="/project">Projects</Link></div> 
            //             <div className='box1'><Link to="/contact">Contact</Link></div> 
            //             <button className='nav open' onClick={showNav}>    Open      </button>
            //     </div>  

            // </nav>
            // <button  className='nav close' onClick={showNav}>    Close      </button>
            // </>
        );
    }

export default Header;