import React from "react";
import { Col, Row } from "react-bootstrap";

import {Skills} from "../../Assets/data"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", allignItems:"center",paddingLeft: "40px" }}>
    {Skills.map((e)=>{
    return(
      <Col xs={4} md={2} className="tech-icons">
        {e.icon}
      </Col>
      )
    })}
    </Row>
  );
}

export default Techstack;