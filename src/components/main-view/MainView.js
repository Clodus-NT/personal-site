import React from "react";
import { Container, Button } from "react-bootstrap";
import "./MainView.css"

export default function MainView(props) {
  return (
    <Container>
      <div className="splashContainer">
        <p className="splashText">Hi! I'm a web developer based in Tallahassee, Florida.</p>
        {/* <div className="btnContainer">
          <Button>Resume</Button>
          <Button>Github</Button>
        </div> */}
      </div>
    </Container>
  )
}