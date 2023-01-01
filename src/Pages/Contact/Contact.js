import { Container } from "react-bootstrap";
import React, { Component } from "react";
import SectionTitle from "../../Assets/SectionTitle";
import { contact } from "../../Assets/data";
import Map from "./Map";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <Container className="contact">
        <SectionTitle heading="Contact" subheading="get to connect with me" />

        <div class="container">
          <div class="contentss">
            <div class="left-side">
            {contact.map((e)=>{
              return(
                <div class="details">
                {e.icon}
                <div class="topic">{e.heading}</div>
                <div class="text-one">{e.content}</div>
                <div class="text-two">{e.content2}</div>
              </div>
              )
            })

            }
              
              {/* <div class=" details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+0098 9893 5647</div>
                <div class="text-two">+0096 3434 5678</div>
              </div>
              <div class=" details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">codinglab@gmail.com</div>
                <div class="text-two">info.codinglab@gmail.com</div>
              </div> */}
            </div>
            <div class="right-side">
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Type your message"
                  />
                </div>
                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      <div className="map">
      <Map/>
      </div>
    </Container>
    );
  }
}

export default Contact;
