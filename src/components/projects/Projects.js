import React from "react";
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';

export default function Projects() {
  return (
    <Container>
        <h1>Projects</h1>
        <p>Check out some of my projects!</p>
      <Row>
        {/* Pokedex */}
        <Col>
          <CardGroup>
            <Card>
              <Card.Img/>
                <Card.Body>
                  <Card.Img variant='top' src='../../public/assets/pokedex.png' />
                  <Card.Title>JS-Dex</Card.Title>
                  <Card.Text>This pokedex contains all 151 original, generation 1 Pokemon. It loads data from an API and displays each pokemon's name on a button that opens up a bootstrap modal displaying corresponding stats.</Card.Text>
                  <Card.Link href='https://github.com/Clodus-NT/js-dex' target='blank' >
                    <Button variant="link" >Code</Button>
                  </Card.Link>
                  <Card.Link href='https://clodus-nt.github.io/js-dex/' target='blank' >
                    <Button variant="link">Live</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* Chat App */}
        <Col>
          <CardGroup>
            <Card>
              <Card.Img/>
                <Card.Body>
                  <Card.Title>Chat App</Card.Title>
                  <Card.Text>A simple chat app for mobile devices using React Native. The app provides users with a chat interface, the option to share images and the option to share location.</Card.Text>
                  <Card.Img href='./project-imgs/pokedex.png' />
                  <Card.Link href='https://github.com/Clodus-NT/chat-app' target='blank' >
                    <Button variant="link" >Code</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* Movie Api */}
        <Col>
          <CardGroup>
            <Card>
              <Card.Img/>
                <Card.Body>
                  <Card.Title>Movie API</Card.Title>
                  <Card.Text>The server side component for my nixFlix web application. It provides access to movie and user info.</Card.Text>
                  <Card.Img src='pokedex.png' />
                  <Card.Link href='https://github.com/Clodus-NT/movie-api' target='blank' >
                    <Button variant="link" >Code</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>

      <p>Want to see the code behind this site? Check it out <a href='https://github.com/Clodus-NT/personal-site' target='blank'>here</a>.</p>
    </Container>
  )
}