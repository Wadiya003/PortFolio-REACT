import "./skills.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Skill } from "../../Assets/data";
import Techstack from "./SkillSection";
import SectionTitle from "../../Assets/SectionTitle";
import FullStackImg from "./need.js";
export default function Skills() {
  return (
    <>
      <Container>
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                {Skill.left.map((e) => {
                  return (
                    <>
                      <h1
                        className="greeting-text"
                      >
                        {e.heading}</h1>
                      <p
                        className="greeting-text-p subTitle"

                      >{e.paragraph1}

                      </p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="greeting-image-div">
            <FullStackImg />
            </div>
          </div>
        </div>
        <div className="space">
          <Techstack />
        </div>
      </Container>
    </>
  );
}
