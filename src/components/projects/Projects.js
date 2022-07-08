import React from "react";
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Container>
        <h1>Projects</h1>
        <p>Check out some of my projects!</p>
      <Row>
        
        <Col>
          <CardGroup>
            <Card>
              <Card.Img/>
                <Card.Body>
                  <Card.Title>JS-Dex</Card.Title>
                  <Card.Text>A simple pokedex that uses the pokeapi.co API to display stats and sprites of all 151 original Pokemon.</Card.Text>
                  <Card.Img href='./pokedex.png'></Card.Img>
                  {/* <Link>
                    <Button variant="link">Code</Button>
                  </Link>
                  <Link>
                    <Button variant="link">Live</Button>
                  </Link> */}
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

      </Row>
      <p>Want to see the code behind this site? Check it out <a href='https://github.com/Clodus-NT' target='blank'>here</a>.</p>
    </Container>
  )
}