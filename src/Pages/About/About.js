import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";
import About2 from "./about2";
import { About1 } from "../../Assets/data";
export default function About() {
  return (
    <>
      <Container>
        <div className="flex-containers">
          <div className="home-header">
            <p className="about__subheading">Hi, I am Wadiya</p>
            {About1.map((e) => {
              return (
                <>
                  <h2 className="about__heading">{e.heading}</h2>
                  <div className="about__info">
                    <p>{e.paragraph}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="second">
            <div className="column rights">
              <img
                src="https://magneceutical.com/images/about-us/office-girl.png"
                alt="me"
              />
            </div>
          </div>
        </div>
        <div className="about__info__items">
          <About2 />
        </div>
      </Container>
    </>
  );
}
