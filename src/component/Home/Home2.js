
import React, { Component } from 'react';
import './home2.css'
import homeLogo from "./pics/home2.svg";
import { Container } from "react-bootstrap";
import SectionTitle from '../SectionTitle';
class Home2 extends Component {
    render(){
        return (
          <Container className="conte">
          <SectionTitle heading="INTRO" subheading="get to know me" />
  <div className="flex-container">
    <div className="flex-child">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
             
              />
          </div>
          <div className="flex-child second">
            
            <h1 style={{ fontSize: "2em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
             
              <i>
                <b className="blue"> React.js and Next.js</b>
              </i>
            </p>
        
        </div>
        </div>
            </Container>
  
    
        );
      }
    
    }
export default Home2;