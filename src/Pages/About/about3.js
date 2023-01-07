import {React, useState} from 'react';
import { Container } from "react-bootstrap";
import SectionTitle from '../../Assets/SectionTitle';

export default function About3() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <Container>
      <SectionTitle heading="Qualification" subheading='& Education!'/>
      <div className="container">
      
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        10th
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        12th
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        B-Tech
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>High School-10th
          <hr />
          </h2>
          <div className="headinpic">
          <p className="headin">
            JAMIA GIRLS SENIOR SECONDARY SCHOOL
          </p>

        </div>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Intermediate-12th
          <hr />
          </h2>
          <div className="headinpic">
          <p className="headin">
            JAMIA GIRLS SENIOR SECONDARY SCHOOL
          </p>
        </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>B-Tech, Computer Science </h2>
          <hr />
          <div className="headinpic">
          <div className="headin">
           <p> JAMIA MILLIA ISLAMIA          </p>
            </div>
        </div>
        </div>
      </div>
      </div>
    
      </Container>
      )
      }