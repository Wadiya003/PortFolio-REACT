import './skills.css'
import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./SkillSection";
import SectionTitle from '../SectionTitle';
import homeLogo from "../Home/pics/home2.svg";
export default function Skills() {
    return (
        <div className='main-container'>
        <SectionTitle heading="Professional" subheading="Skill Sets" /> 
       
     
    <div className="flex-containers">
    <div className="home-header">
    <div class="column left">
                    <div class="text">My skills & experiences.</div>
                    <p>I am quite good with HTML and CSS. I excel in CPP, C and JavaScript languages. Apart from this I'm also familiar with REACT.JS , Node Js , RestFul API's and mastering DSA alongside. I recently developed interest in Cloud Computing and Blockchain.
                   </p>
                </div>
      </div>
      <div className="second">
      <div class="column rights">
                    <div class="bars">
                        <div class="info">
                            <span>HTML & CSS</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>C++</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>DSA</span>
                            <span>70%</span>
                        </div>
                        <div class="line dsa"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Node Js</span>
                            <span>70%</span>
                        </div>
                        <div class="line dsa"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React Js and Next Js</span>
                            <span>70%</span>
                        </div>
                        <div class="line dsa"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MongoDB and MySql</span>
                            <span>80%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    </div>
                </div>
        </div>
        <div className='space'>
    <Techstack/>
    </div>
        </div>

    );
}