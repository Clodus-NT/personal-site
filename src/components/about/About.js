import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <CardGroup className="aboutCardGroup">
        <Card className="aboutCard bgColor">
          <Card.Title className="aboutCardTitle bgColor">About</Card.Title>
          <Card.Text className="bgColor aboutText">Hello World! I'm Nick, a web developer currently residing in Tallahassee, Florida. I discovered a love for coding after deciding to move on from retail work and was pleasanlty surprised to find that the skills I had learned such as time management, flexibility, and problem solving carried over into web development. My passion for coding is accompanied by a desire to never stop learning.</Card.Text>
          <a className="bgColor" href='Nick-Turner_Resume.pdf' download>
            <Button className="aboutDownloadBtn">Download Resume</Button>
          </a>
          <Card.Body className="aboutBodyLinks bgColor">
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
      {/* <CardGroup className="bgColor aboutCardGroup">
        <Card classname="bgColor aboutCard">
          <Card.Title className="bgColor aboutCardTitle">About</Card.Title>
        </Card>
      </CardGroup> */}
    </div>
    // <div className="about-container">
    //   <div className="blurb-container">
    //     <h1 className="blurb-header">About Me</h1>
    //     <p className="blurb-text">
    //       Hello World! I'm Nick, a web developer currently residing in Tallahassee, Florida. I discovered a love for coding after deciding to move on from retail work and was pleasanlty surprised to find that the skills I had learned such as time management, flexibility, and problem solving carried over into web development. My passion for coding is accompanied by a desire to never stop learning.
    //     </p>
    //     <p className="socials-text">Check out my socials or download my resume:</p>
    //     <div className="socials-container">
    //       <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
    //         Github
    //       </a>
    //       <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
    //         LinkedIn
    //       </a>
    //       <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
    //         Download CV
    //       </a>
    //     </div>
    //   </div>
    // </div>
  )
}