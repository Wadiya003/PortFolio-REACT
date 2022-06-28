import './skills.css'
// import Particle from './background';
import React, { Component } from 'react';
import Particle from '../background';
import {motion} from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import WordCloud from './skillset';
import SectionTitle from '../SectionTitle';
class Skill extends Component {

render(){
    return (
        <Container>
        {/* <SectionTitle heading="Professional" subheading="Skill Sets" /> */}
        <div class="skills_section">
        <Particle />
            <div class="container">
             </div>

             
                   
        </div>
</Container>
    )
}
}
export default Skill;