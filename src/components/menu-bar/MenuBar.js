import React from "react";
import './menu-bar.css';
import { Navbar, Nav, } from 'react-bootstrap';

export default function MenuBar() {
  return (
    <Navbar className="nav navColors" variant='navColors'>
      <Navbar.Brand  className='navColors navBrand navName' href='#/'>Nick Turner</Navbar.Brand>
      <Nav className='navColors navLinkContainer'>
        <Nav.Link className='navColors navLink navHome' href="#/">Home</Nav.Link>
        <Nav.Link className='navColors navLink navProjects' href="#/projects">Projects</Nav.Link>
        <Nav.Link className='navColors navLink navAbout' href="#/about">About</Nav.Link>
        <Nav.Link className='navColors navLink navAbout' href="#/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  )
}