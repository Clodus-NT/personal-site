import React from "react";
import { Container } from "react-bootstrap";
import "./MainView.css"

export default function MainView(props) {
  return (
    <Container className="mainContainer">
      <div className="splashContainer">
        <p className="splashText">
          Hi! I'm Nick, a web developer based in Tallahassee, Florida. Check out some of my <a  className="projectsLink" href="/projects">projects</a>.
        </p>
      </div>
    </Container>
  )
}