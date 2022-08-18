import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="blurb-container">
        <h1 className="blurb-header">About Me</h1>
        <p className="blurb-text">
          Hello World! I'm Nick, a web developer currently residing in Tallahassee, Florida. I discovered a love for coding after deciding to move on from retail work and was pleasanlty surprised to find that the skills I had learned such as time management, flexibility, and problem solving carried over into web development. My passion for coding is accompanied by a desire to never stop learning.
        </p>
        <p className="socials-text">Check out my socials or download my resume:</p>
        <div className="socials-container">
          <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
            Github
          </a>
          <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
            LinkedIn
          </a>
          <a target="_blank" rel="noreferrer" className="links" href="https://github.com/Clodus-NT">
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}