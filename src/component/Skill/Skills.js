import './skills.css'
import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from '../SectionTitle';
import Carousel from './Skillset'
class Skill extends Component {

render(){
    return (
        <Container>
        <SectionTitle heading="Professional" subheading="Skill Sets" /> 
        <Carousel/>
        </Container>
    )
}
}
export default Skill;