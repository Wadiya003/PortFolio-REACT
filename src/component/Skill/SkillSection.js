// import React from "react";
// import "./skills.css";
// // import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import { skills } from "../../portfolio";
// // import { Fade } from "react-reveal";
// import FullStackImg from "./FullStackImg";
// import CloudInfraImg from "./CloudInfraImg";
// // import DesignImg from "./DesignImg";

// function GetSkillSvg(props) {
//   if (props.fileName === "FullStackImg")
//     return <FullStackImg theme={props.theme} />;
//   else if (props.fileName === "CloudInfraImg")
//     return <CloudInfraImg theme={props.theme} />;
//   // return <DesignImg theme={props.theme} />;
// }

// function SkillSection() {
//   return (
//     <div>
      

//     </div>
//   );
// }

// export default SkillSection;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
    DiPython,
    DiDjango, DiJava, DiRasberryPi
} from "react-icons/di";
import {SiJupyter} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", allignItems:"center",paddingLeft: "40px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
    </Row>
  );
}

export default Techstack;