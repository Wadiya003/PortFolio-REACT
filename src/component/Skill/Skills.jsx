import './skills.css'
import React, { Component } from 'react';
import Particle from '../background';
import {motion} from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import WordCloud from './right';
class Skill extends Component {

render(){
    return (
        <div className='right'>
        <WordCloud/> 
        </div> 
    )
}
}
export default Skill;