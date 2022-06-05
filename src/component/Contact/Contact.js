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

  <div className="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required/>
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  {/* <!-- Left contact page -->  */}
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>
          
          <li className="list-item">
          {/* <BsFillTelephoneFill/> */}
          <span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

       
        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
<Map/>
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