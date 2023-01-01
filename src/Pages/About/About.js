import React from 'react';
import './about.css';
import AboutImg from '../../Assets/pics/about.jpeg';
import { Container} from "react-bootstrap";
import About2 from './about2';
import About3 from './about3';
import {About1} from "../../Assets/data";
export default function About() {
  return (
    <>
     <Container>
       
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am Wadiya
              </p>
              { About1.map((e)=>{
               return(<>
              <h2 className="about__heading">{e.heading}</h2>
              <div className="about__info">
                <p>
                 {e.paragraph}
                  </p>
              </div></>
              )})}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        
          <div className="about__info__items">
          <About3/>
          {/* <About2/> */}
  
          </div>
          </Container>
     
    </>
  );
}