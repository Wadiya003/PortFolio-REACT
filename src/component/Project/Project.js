import './project.css'
import React, { Component } from 'react';
import homeLogo from "../Home/pics/project.svg";
import SectionTitle from '../SectionTitle';
export default function Project(){
return (
    <>
    <div class="main-container">
    <SectionTitle heading="Experties" subheading="get to know my interests" />
  <div class="cardys">
  
    <div class="cardy cardy-2">
      <div class="cardy__icon"><i class="fas fa-bolt"></i></div>
      <p class="cardy__exit"><i class="fas fa-times"></i></p>
      <h2 class="cardy__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      <p class="cardy__apply">
        <a class="cardy__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    
    <div class="cardy cardy-4">
      <div class="cardy__icon"><i class="fas fa-bolt"></i></div>
      <p class="cardy__exit"><i class="fas fa-times"></i></p>
      <h2 class="cardy__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
      <p class="cardy__apply">
        <a class="cardy__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    
  </div>
</div>
  <div className='project2'>
  <div className="project2container">
 
  <div className="procardy procardy1">
    <p className="question">Who's the strongest Avenger?</p>
    <p className="option">Hulk</p>
    <p className="option">Thor</p>
    <p className="option">Captian America</p>
    <p className="option">Ironman</p>
  </div>
  <div className="procardy procardy2">
    <p className="question">Who's the fastest man alive?</p>
    <p className="option">Ussain Bolt</p>
    <p className="option">The Flash</p>
    <p className="option">Reverse Flash</p>
  </div>
 
  <div className="procardy procardy4">
    <p className="question">Who's the strongest Avenger?</p>
    <p className="option">Hulk</p>
    <p className="option">Thor</p>
    <p className="option">Captian America</p>
    <p className="option">Ironman</p>
  </div>
  <div className="procardy procardy5">
    <p className="question">Who's the fastest man alive?</p>
    <p className="option">Ussain Bolt</p>
    <p className="option">The Flash</p>
    <p className="option">Reverse Flash</p>
  </div>
</div>
 <div className='propic'>
 <h2>More Projects!</h2>
  <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"

              /></div>
              </div>

<div className='project2'>
<div className='propic2'>
 <h2>More Projects!</h2>
  <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"

              />
              </div>
  <div className="project2container2">
 
  <div className="procardy procardy1">
    <p className="question">Who's the strongest Avenger?</p>
    <p className="option">Hulk</p>
    <p className="option">Thor</p>
    <p className="option">Captian America</p>
    <p className="option">Ironman</p>
  </div>
  <div className="procardy procardy2">
    <p className="question">Who's the fastest man alive?</p>
    <p className="option">Ussain Bolt</p>
    <p className="option">The Flash</p>
    <p className="option">Reverse Flash</p>
  </div>
 
  <div className="procardy procardy4">
    <p className="question">Who's the strongest Avenger?</p>
    <p className="option">Hulk</p>
    <p className="option">Thor</p>
    <p className="option">Captian America</p>
    <p className="option">Ironman</p>
  </div>
  <div className="procardy procardy5">
    <p className="question">Who's the fastest man alive?</p>
    <p className="option">Ussain Bolt</p>
    <p className="option">The Flash</p>
    <p className="option">Reverse Flash</p>
  </div>
</div>
 </div>
</>
)
}