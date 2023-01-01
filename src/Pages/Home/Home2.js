import React, { Component } from "react";
import "./css/home2.css";
import homeLogo from "../../Assets/pics/home2.svg";
import { Container } from "react-bootstrap";
import SectionTitle from "../../Assets/SectionTitle";
class Home2 extends Component {
  render() {
    return (
      <Container className="conte">
        <SectionTitle heading="INTRO" subheading="get to know me" />
        <div className="flex-container">
          <div className="flex-child">
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </div>
          <div className="flex-child second">
            <h1 style={{ fontSize: "2em" }}>
              LET ME{" "}
              <span style={{ fontSize: "1em", color: "rgb(97, 191, 228)" }}>
                {" "}
                INTRODUCE{" "}
              </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: "rgb(97, 191, 228)" }}>
                  {" "}
                  C/C++, Javascript and Java.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: "rgb(97, 191, 228)" }}>
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b style={{ color: "rgb(97, 191, 228)" }}>
                  Android Development and Competitve programming.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: "rgb(97, 191, 228)" }}>Node.js</b> and
              <i>
                <b style={{ color: "rgb(97, 191, 228)" }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              <i>
                <b style={{ color: "rgb(97, 191, 228)" }}>
                  {" "}
                  React.js and Next.js
                </b>
              </i>
            </p>
          </div>
        </div>
      </Container>
    );
  }
}
export default Home2;
