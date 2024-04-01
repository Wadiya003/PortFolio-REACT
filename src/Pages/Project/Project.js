import "./css/project.css";
import React from "react";
import Carousel from "./ProjectCard";
import SectionTitle from "../../Assets/SectionTitle";
export default function Project() {
  return (
    <>
        <SectionTitle
          heading="Experties"
          subheading="here, are my project!"
        />
      <Carousel />
    </>
  );
}
