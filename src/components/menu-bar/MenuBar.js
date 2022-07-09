import React from "react";
import './menu-bar.css';
import { Navbar, Container, Nav, } from 'react-bootstrap';

export default function MenuBar() {
  return (
    <Navbar className="nav, navColors" variant='navColors'>
      <Container className="navContainer, navColors">
        <Navbar.Brand  className='navColors' href='/'>Nick Turner</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav, navbarScroll' />
        <Navbar.Collapse className='navColors' id="responsive-navbar-nav">
          <Nav className='me-auto navColors'>
            <Nav.Link className='navColors' href="/">Home</Nav.Link>
            <Nav.Link className='navColors' href="/projects">Projects</Nav.Link>
            <Nav.Link className='navColors' href="/about">About</Nav.Link>
            <Nav.Link className='navColors' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}