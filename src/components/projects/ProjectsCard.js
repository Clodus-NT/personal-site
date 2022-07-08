import React from "react";
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './movie-card.scss';


export default function ProjectsCard() {

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Img/>
                <Card.Body>
                  <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                      <Link>
                        <Button variant="link">Code</Button>
                      </Link>
                      <Link>
                        <Button variant="link">Live</Button>
                      </Link>
                </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
        )       
}
