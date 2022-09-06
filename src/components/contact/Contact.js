import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import EmailForm from '../email-form/EmailForm';
import './Contact.css';

export default function Contact() {

  return (
    <div className="contactContainer">
      <CardGroup className="cardGroup">
        <Card className="cardElement bgColor">
          <Card.Title className="cardTitle bgColor">Contact</Card.Title>
          <Card.Text className="bgColor contactText">Get in touch with me via email, download my resume or check out my socials.</Card.Text>
          <Card.Text className="bgColor emailText">j.nickturner@gmail.com</Card.Text>
            <div className="emailComponentContainer">
              <EmailForm/>
            </div>
            <a className="bgColor" href='Nick_Turner_Resume_2022.pdf' download>
              <Button className="downloadBtn">Download Resume</Button>
            </a>
          <Card.Body className="cardBodyLinks bgColor">
            <Card.Link target="_blank" className="bgColor" href="https://www.linkedin.com/in/nick-turner-a1b23223b/">
              <Card.Img className="bgColor" src={require ('./img/linkedin.png')} />
            </Card.Link>
            <Card.Link target="_blank" className="bgColor" href="https://github.com/Clodus-NT">
              <Card.Img className="bgColor" src={require ('./img/github.png')} />
            </Card.Link>
            <Card.Link target="_blank" className="bgColor" href="https://twitter.com/nicktdev">
              <Card.Img className="bgColor" src={require ('./img/twitter.png')} />
            </Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}
