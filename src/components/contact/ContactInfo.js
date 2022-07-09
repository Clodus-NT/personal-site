import React from "react";
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';

export default function ContactInfo() {
  return (
    <Container>
      <Col>
        <Row>My Info</Row>
        <Row>Email: j.nickturner@gmail.com</Row>
        <Row>LinkedIn</Row>
        <Row>Github</Row>
      </Col>
    </Container>
  )
}