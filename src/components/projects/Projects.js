import React from "react";
import {Button, Card, CardGroup, Container, Row, Col} from 'react-bootstrap';
import './projects.css';

export default function Projects() {
  return (
    <Container className="projectsContainer">
        <h1>Projects</h1>
        <p>Check out some of my projects!</p>
      <Row>
        {/* Pokedex */}
        <Col>
          <CardGroup className="bgColor cardGroup">
            <Card className="bgColor">
                <Card.Body className="bgColor">
                  <Card.Img className="bgColor" src='../../public/assets/pokedex.png' />
                  <Card.Title className="bgColor">JS-Dex</Card.Title>
                  <Card.Text className="bgColor">This pokedex contains all 151 original, generation 1 Pokemon. It loads data from an API and displays each pokemon's name on a button that opens up a bootstrap modal displaying corresponding stats.</Card.Text>
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/js-dex' target='blank' >
                    <Button className="linkBtn"  >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/js-dex/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* Chat App */}
        <Col>
          <CardGroup className="bgColor cardGroup">
            <Card className="bgColor">
                <Card.Body className="bgColor">
                  <Card.Title className="bgColor">Chat App</Card.Title>
                  <Card.Text className="bgColor">A simple chat app for mobile devices using React Native. The app provides users with a chat interface, the option to share images and the option to share location.</Card.Text>
                  <Card.Img className="bgColor" href='./project-imgs/pokedex.png' />
                  <Card.Link className="bgColor" href='https://github.com/Clodus-NT/chat-app' target='blank' >
                    <Button className="linkBtn"  >Code</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* Movie Api */}
        <Col>
          <CardGroup className="bgColor cardGroup">
            <Card className="bgColor card">
                <Card.Body className="bgColor">
                  <Card.Title className="bgColor">Movie API</Card.Title>
                  <Card.Text className="bgColor">The server side component for my nixFlix web application. It provides access to movie and user info.</Card.Text>
                  <Card.Link className="bgColor" href='https://github.com/Clodus-NT/movie-api' target='blank' >
                    <Button className="linkBtn"  >Code</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* nixFlix */}
        <Col>
          <CardGroup className="bgColor cardGroup">
            <Card className="bgColor">
                <Card.Body className="bgColor">
                  <Card.Img className="bgColor" variant='top' src='../../public/assets/pokedex.png' />
                  <Card.Title className="bgColor">nixFlix Move App</Card.Title>
                  <Card.Text className="bgColor">A client-side movie application created with React.js that is based on existing server-side code (REST API and database).</Card.Text>
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/nix-flix-client' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/js-dex/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        {/* To-Do App */}
        <Col>
          <CardGroup className="bgColor cardGroup">
            <Card className="bgColor">
                <Card.Body className="bgColor">
                  <Card.Img className="bgColor" variant='top' src='../../public/assets/pokedex.png' />
                  <Card.Title className="bgColor">To-Do App</Card.Title>
                  <Card.Text className="bgColor">A simple To-Do application that allows you to add items, cross them out, remove them, and reorder them.</Card.Text>
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/to-do-app' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/to-do-app/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

      </Row>
    </Container>
  )
}