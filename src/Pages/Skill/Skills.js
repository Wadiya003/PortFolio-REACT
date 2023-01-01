import "./skills.css";
import React from "react";
import {Skill} from "../../Assets/data";
import Techstack from "./SkillSection";
import SectionTitle from "../../Assets/SectionTitle";
import FullStackImg from "./need.js"
export default function Skills() {
  return (
    <div className="main-container">
      <SectionTitle heading="Professional" subheading="Skill Sets" />
      <div className="flex-containers">
        <div className="home-header">
        {Skill.left.map((e)=>{
            return(
            <div className="column left">
            <div className="text">{e.heading}</div>
            <p>
            {e.paragraph1} 
            </p>
            
            </div>
            )
          })}
        </div>
        <div className="second">
          <div className="column rights">
          {/* {Skill.right.map((e)=>{
            return(
            <div className="bars">
              <div className="info">
              <span>{e.heading}</span>
                <span>{e.percentage}</span>
              </div>
              <div className={e.css}></div>
            </div>
            )
          })} */}
        
           <FullStackImg/>
        
        </div>
      </div>
      </div>
      <div className="space">
      <SectionTitle heading="" subheading="Skills, I currently possess!" />
        <Techstack />
      </div>
    </div>
  );
}