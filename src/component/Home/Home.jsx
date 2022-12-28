import "./home.css";

import React, { Component } from "react";
import Particle from "../background";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Home3 from "./home3";
import homeLogo from "./pics/home2.svg";
class Home extends Component {
  render() {
    const transition = { duration: 2, type: "spring" };
    return (
      <>
        <Container className="home-section" id="home">
          <Particle />

          <Container className="home-content">
            <div className="flex-containers">
              <div className="home-header">
                <motion.p
                  initial={{ left: "-50%" }}
                  whileInView={{ left: "-30%" }}
                  transition={transition}
                  className="upper"
                >
                  !DOCTYPE html
                </motion.p>
                <p className="middle">html</p>
                <p className="middle">body</p>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Wadiya Ali</strong>
                </h1>
                <p className="lower">/html</p>
                <p className="middle">/body</p>
              </div>
              {/* <div className="second">
                <img src="https://sunwebtechnologies.com/images/s-4.png" alt="home pic" className="img-fluid" />
              </div> */}
            </div>
          </Container>
        </Container>
        <Home2 />
        <Home3 />
      </>
    );
  }
}
export default Home;
