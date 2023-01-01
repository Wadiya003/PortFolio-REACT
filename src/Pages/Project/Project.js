import "./css/project.css";
import React from "react";
import Carousel from "./ProjectCard";
import SectionTitle from "../../Assets/SectionTitle";
export default function Project() {
  return (
    <>
      <div class="main-container">
        <SectionTitle
          heading="Experties"
          subheading="here, are my project!"
        />
      </div>
      <Carousel />
    </>
  );
}
