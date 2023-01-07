import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1 } from "react-icons/di";

import { Skills } from "../../Assets/data";

function Techstack() {
  return (
    <div className="spaces">
      {Skills.map((e) => {
        return <div className="tech-icons">{e.icon}</div>;
      })}
    </div>
  );
}

export default Techstack;
