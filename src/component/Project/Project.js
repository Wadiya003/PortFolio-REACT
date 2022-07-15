import './project.css'
import React from 'react';
import Carousel from "./carousel";
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
 <Carousel/>
</>
)
}