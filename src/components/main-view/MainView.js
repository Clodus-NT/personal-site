import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from '../menu-bar/MenuBar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

export default function MainView(props) {
  return (
    <Router>
      <MenuBar />
      <Container>
        <Routes>
          <Route exact path='/' />
          <Route path='/projects' element={ <Projects/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/contact' element={ <Contact/> } />
        </Routes>
      </Container>
    </Router>
  )
}