import React from "react";
import './menu-bar.css';
import { Navbar, Nav, } from 'react-bootstrap';

export default function MenuBar() {
  return (
    <Navbar className="nav navColors" variant='navColors'>
      <Navbar.Brand  className='navColors navBrand' href='/'>Nick Turner</Navbar.Brand>
      <Nav className='navColors navLinkContainer'>
        <Nav.Link className='navColors navLink' href="#/">Home</Nav.Link>
        <Nav.Link className='navColors navLink' href="#/projects">Projects</Nav.Link>
        <Nav.Link className='navColors navLink' href="#/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}