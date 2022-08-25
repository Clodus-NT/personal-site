import React from "react";
import {Col, Button, Card, CardGroup, Container, Row} from 'react-bootstrap';
import './projects.css';

export default function Projects() {
  return (
    <Container fluid className="projectsContainer">
      <Col className="projectsHeaders">
        <h1>Projects</h1>
        <p className="projectsHeader2">Check out some of my work!</p>
      </Col>

      <Row className="cardsContainer">

        {/* Pokedex */}
          <CardGroup className="bgColor pokedexCard cardGroup">
            <Card className="bgColor cardElement">
                <Card.Body className="bgColor cardBody">
                  <Card.Title className="bgColor">JS-Dex</Card.Title>
                  <div className="imageContainer bgColor">
                    <Card.Img className="cardImage pokedexImageMain" src={require ('./img/pokedex.png')} />
                    <Card.Img className="cardImage pokedexImageStats" src={require ('./img/gengar.png')} />
                  </div>
                  <Card.Text className="bgColor">This pokedex contains all 151 original, generation 1 Pokemon. It loads data from an API and displays each pokemon's name on a button that opens up a bootstrap modal displaying corresponding stats.</Card.Text>
                  <div className="bgColor">
                    <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/js-dex' target='blank' >
                      <Button className="linkBtn"  >Code</Button>
                    </Card.Link>
                    <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/js-dex/' target='blank' >
                      <Button className="linkBtn" >Live</Button>
                    </Card.Link>
                  </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* nixFlix */}
          <CardGroup className="bgColor movieAppCard cardGroup">
            <Card className="bgColor cardElement">
              <Card.Body className="bgColor cardBody">
                <Card.Title className="bgColor">nixFlix Movie App</Card.Title>
                <Card.Img className="bgColor" src='../../public/assets/pokedex.png' />
                <Card.Text className="bgColor">A client-side movie application created with React.js that is based on existing server-side code (REST API and database).</Card.Text>
                <div className="bgColor">
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/nix-flix-client' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/js-dex/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* Chat App */}
          <CardGroup className="bgColor chatAppCard cardGroup">
            <Card className="bgColor cardElement">
                <Card.Body className="bgColor cardBody">
                  <Card.Title className="bgColor">Chat App</Card.Title>
                  <div className="imageContainer bgColor">
                    <Card.Img className="bgColor cardImage" src={require ('./img/chatapp1crop.png')} />
                    <Card.Img className="bgColor cardImage chatAppImage" src={require ('./img/chatapp2crop.png')} />
                  </div>
                  <Card.Text className="bgColor">A simple chat app for mobile devices using React Native. The app provides users with a chat interface, the option to share images and the option to share location.</Card.Text>
                  <div className="bgColor">
                    <Card.Link className="bgColor" href='https://github.com/Clodus-NT/chat-app' target='blank' >
                      <Button className="linkBtn"  >Code</Button>
                    </Card.Link>
                  </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* To-Do App */}
          <CardGroup className="bgColor todoCard cardGroup">
            <Card className="bgColor cardElement">
              <Card.Body className="bgColor cardBody">
                <Card.Title className="bgColor">To-Do App</Card.Title>
                <Card.Img className="cardImage todoImage" src={require ('./img/todo.png')} />
                <Card.Text className="bgColor">A simple To-Do application that allows you to add items, cross them out, remove them, and reorder them.</Card.Text>
                <div className="bgColor">
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/to-do-app' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/to-do-app/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* Movie Api */}
          <CardGroup className="bgColor apiCard cardGroup">
            <Card className="bgColor cardElement">
              <Card.Body className="bgColor cardBody">
                <Card.Title className="bgColor">Movie API</Card.Title>
                <Card.Text className="bgColor">The server side component for my nixFlix web application. It provides access to movie and user info.</Card.Text>
                <div className="bgColor">
                  <Card.Link className="bgColor" href='https://github.com/Clodus-NT/movie-api' target='blank' >
                    <Button className="linkBtn"  >Code</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>

      </Row>
    </Container>
  )
}