import React, {useState} from "react";
import { Container } from "react-bootstrap";
import "./about2.css"
import { Abouts2 } from "../../Assets/data.js";
export default function About2() {
  return (
    <Container>
      {/* <SectionTitle heading="Education" subheading="and Experience!" /> */}
      <div className="contain">
	  <main className="row">
	  <section className="col">
	  <header className="title">
		<h2>EDUCTATION</h2>
	  </header>
	  <div className="contents">
	  {Abouts2.education.map((e) => {
        return (
	  <div className="box">
	  <div className="A">
			<img src={e.icon}/>
		</div>
		<div className="B">
		<h4>{e.year}</h4>
		<h3>{e.class}</h3>
		<p>{e.paragraph}</p>
		</div>
	  </div>
	  )})}
	  </div>
	  </section>
	  <section className="col">
	  <header className="title">
		<h2>ORGANIZATION</h2>
	  </header>
	  <div className="contents">
	  {Abouts2.organization.map((e) => {
        return (
	  <div className="box">
	    <div className="A">
			<img src={e.icon}/>
		</div>
		<div className="B">
		<h4>{e.year}</h4>
		<h3>{e.class}</h3>
		<p>{e.paragraph}</p>
		</div>
	  </div>
	  )})}
	  </div>
	  </section>
	  </main>
	  </div>
    </Container>
  );
}
