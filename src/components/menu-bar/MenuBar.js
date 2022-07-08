import React from "react";
import { Navbar, Container, Nav, } from 'react-bootstrap';

export default function MenuBar() {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Nick Turner</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}