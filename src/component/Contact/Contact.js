import { Container } from "react-bootstrap";
import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
// import { BsFillTelephoneFill } from "react-icons/bs";
import Map from "./Map";
import './contact.css'
class Contact extends Component {
    render(){
        return (
        <Container className='contact'>

<SectionTitle heading="Contact" subheading="get to connect with me" />

<div class="container">
    <div class="contentss">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">codinglab@gmail.com</div>
          <div class="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <textarea className="form-control" type="text" placeholder="Type your message"/>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  
{/* <Map/> */}
{/* 
          <div className="Contact">
          <div className="contact-left">
             
                  <section>
                      <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                      <h2>address</h2>
                      <p>
                          Lorem ipsum dolor sit. 
                          Lorem, ipsum dolor. 
                          lorem
                      </p>
                  </section>
  
                  <section>
                      <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                      <h2>Phone</h2>
                      <p>123-456-78901548</p>
                  </section>
  
                  <section>
                      <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                      <h2>E-mail</h2>
                      <p>dghdgqd@temporary.net</p>
                  </section>
           
          </div>
          <div className="contant-form">
        <form>
          <div className="form">
              <div className="right">
                <div className="contact-form">
                    <input type="text" required/>
                    <span>Full Name</span>
                </div>
    
                <div className="contact-form">
                    <input type="E-mail" required/>
                    <span>E-mail Id</span>
                </div>
                <div className="contact-form">
                    <textarea name="text">
                      
                    </textarea>
                    <span> Type your Message....</span>
                </div>
    
                <div className="contact-form">
                    <input type="submit" name="submit"/>
                </div>
                </div>
              </div>
      </form>
      </div>
      </div> */}
   </Container>
);
}
}

export default Contact;