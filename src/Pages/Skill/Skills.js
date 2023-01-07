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
        <SectionTitle heading="Professional" subheading="Skill Sets" />
        <div className="flex-containers">
          <div className="home-header">
            {Skill.left.map((e) => {
              return (
                <>
                  <h2 className="about__heading">{e.heading}</h2>
                  <div className="about__info">
                    <p>{e.paragraph1}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="second">
            <div className="column rights">
              <div className="imgs">
                <FullStackImg />
              </div>
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
