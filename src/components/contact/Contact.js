import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <ContactInfo />
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  )
}