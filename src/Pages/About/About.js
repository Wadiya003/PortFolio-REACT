import React from "react";
import "./about1.css";
import { Container } from "react-bootstrap";
import About2 from "./about2";
import { About1 } from "../../Assets/data";
export default function About() {
  return (
    <>
      <Container>
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                {About1.map((e) => {
                  return (
                    <>
                      <h1
                        className="greeting-text"
                      >
                        {e.heading}</h1>
                      <p
                        className="greeting-text-p subTitle"

                      >{e.paragraph}

                      </p>
                    </>
                  );
                })}
              </div>
              <div className="button-greeting-div">
                {/* <Button text="Contact me" href="#contact" /> */}
                
                {About1.map((e) => {
                  return (
                    <>
                    <div >
                  <a className="main-button" href={e.resumeLink} target={  true & "_blank"}>
                    Resume
                  </a>
                </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="greeting-image-div">
              <img
                alt="man sitting on table"
                src="https://cdni.iconscout.com/illustration/premium/thumb/the-girls-are-working-on-graph-analysis-11106432-8945012.png?f=webp"
              ></img>
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
