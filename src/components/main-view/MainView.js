import React from "react";
import Projects from '../projects/Projects';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./MainView.css"
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from '../about/About';
// import Projects from '../projects/Projects';
// import Contact from '../contact/Contact';

export default function MainView(props) {
  return (
    <Container>
      <div className="splashContainer">
        <p className="splashText">Hi! I'm a web developer based in Tallahassee, Florida.</p>
        <div className="btnContainer">
          <Button>Resume</Button>
          <Button>Github</Button>
        </div>
      </div>
      
      {/* <Col className="projectsContainer">
        <Projects></Projects>
      </Col> */}
    </Container>
  )
}