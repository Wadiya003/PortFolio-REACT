import React, { useState } from "react";
import "./css/home3.css";
import SectionTitle from "../../Assets/SectionTitle";
import { Container } from "react-bootstrap";
import { Home3 } from "../../Assets/data";
export default function Home2() {
  return (
    <>
      <Container className="conte">
        <SectionTitle
          heading="Experties"
          subheading="get to know my interests"
        />
        <div className="mid">
          {Home3.map((e) => {
            return (
              <aside class="profile-card">
                <header>
                  <h1>{e.heading}</h1>

                  <h2 style={{ color: "white" }}>{e.description}</h2>
                </header>

                <div class="profile-bio">
                  <p>{e.paragraph}</p>
                </div>
              </aside>
            );
          })}
        </div>
      </Container>
    </>
  );
}
