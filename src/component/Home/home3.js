import React, { Component } from 'react';
import './home3.css'
import SectionTitle from '../SectionTitle';
import { Container } from "react-bootstrap";
class Home2 extends Component {
    render(){
        return (<>
         
          <Container  className="conte">
          <SectionTitle heading="Experties" subheading="get to know my interests" />
          <div className='mid'>
          <aside class="profile-card">

<header>
  <a>
    <img src="https://th.bing.com/th/id/OIP.7RcR5X1__ZMxRcM-OvZrswHaEK?pid=ImgDet&rs=1"/>
  </a>

  <h1>CODER</h1>

  <h2></h2>

</header>

<div class="profile-bio">

  <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>

</div>
</aside> 
          <aside class="profile-card">

<header>
  <a>
    <img src="https://th.bing.com/th/id/OIP.7RcR5X1__ZMxRcM-OvZrswHaEK?pid=ImgDet&rs=1"/>
  </a>

  <h1>FRONT-END</h1>

  <h2>DEVELOPER</h2>

</header>

<div class="profile-bio">

  <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>

</div>
</aside> 

<aside class="profile-card">

<header>
  <a>
    <img src="https://th.bing.com/th/id/OIP.7RcR5X1__ZMxRcM-OvZrswHaEK?pid=ImgDet&rs=1"/>
  </a>

  <h1>BACK-END</h1>

  <h2>DEVELOPER</h2>

</header>

<div class="profile-bio">

  <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>

</div>
</aside>  
  </div>
          </Container>
          
          </>
          );}
        }
export default Home2;