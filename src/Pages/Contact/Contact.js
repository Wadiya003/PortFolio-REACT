import { Container } from "react-bootstrap";
import React, { Component } from "react";
import SectionTitle from "../../Assets/SectionTitle";
import { contact } from "../../Assets/data";
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
              </div>
              )
            })

            }
              
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
    </Container>
    );
  }
}

export default Contact;
