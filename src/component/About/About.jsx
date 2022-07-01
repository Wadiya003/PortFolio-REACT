
import React from 'react';
import './about.css'
import AboutImg from './about.jpeg';
import { Container} from "react-bootstrap";
import About2 from './about2'
import About3 from './about3'
export default function About() {
  return (
    <>
     <Container>
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Wadiya</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <p>
                  I am from chittagong, Bangladesh. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                  </p>
              </div>
             
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