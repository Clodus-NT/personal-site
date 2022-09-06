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

      <Row className="projectsCardsContainer">

        {/* Pokedex */}
          <CardGroup className="bgColor pokedexCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
                <Card.Body className="bgColor projectsCardBody">
                  <Card.Title className="bgColor">JS-Dex</Card.Title>
                  <div className="imageContainer bgColor">
                    <Card.Img className="projectsCardImage pokedexImageMain" src={require ('./img/pokedex.png')} />
                    <Card.Img className="projectsCardImage pokedexImageStats" src={require ('./img/gengar.png')} />
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

        {/* nixFlix React */}
          <CardGroup className="bgColor movieAppCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
              <Card.Body className="bgColor projectsCardBody">
                <Card.Title className="bgColor">nixFlix React App</Card.Title>
                <Card.Img className="bgColor projectsCardImage" src={require ('./img/reactMovie1.png')} />
                <Card.Img className="bgColor projectsCardImage chatAppImage" src={require ('./img/reactMovie2.png')} />
                <Card.Text className="bgColor">A client-side movie application built with React.js that is based on existing server-side code (REST API and database). Users can register, login, add movies to a favorites list, update their profile, and delete their account.</Card.Text>
                <div className="bgColor">
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/nixFlix-client' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://nix-flix-client.vercel.app/#/' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* Chat App */}
          <CardGroup className="bgColor chatAppCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
                <Card.Body className="bgColor projectsCardBody">
                  <Card.Title className="bgColor">Chat App</Card.Title>
                  <div className="imageContainer bgColor">
                    <Card.Img className="bgColor projectsCardImage" src={require ('./img/chatapp1crop.png')} />
                    <Card.Img className="bgColor projectsCardImage chatAppImage" src={require ('./img/chatapp2crop.png')} />
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

        {/* nixFlix Angular */}
          <CardGroup className="bgColor movieAppCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
              <Card.Body className="bgColor projectsCardBody">
                <Card.Title className="bgColor">nixFlix Angular App</Card.Title>
                <Card.Img className="bgColor projectsCardImage" src={require ('./img/angularMovie1.png')} />
                <Card.Img className="bgColor projectsCardImage chatAppImage" src={require ('./img/angularMovie2.png')} />
                <Card.Text className="bgColor">A client-side movie application built with Angular that is based on existing server-side code (REST API and database). Users can register, login, add movies to a favorites list, update their profile, and delete their account.</Card.Text>
                <div className="bgColor">
                  <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/angular-nixFlix' target='blank' >
                    <Button className="linkBtn" >Code</Button>
                  </Card.Link>
                  <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/angular-nixFlix/welcome' target='blank' >
                    <Button className="linkBtn" >Live</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* To-Do App */}
          <CardGroup className="bgColor todoCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
              <Card.Body className="bgColor projectsCardBody">
                <Card.Title className="bgColor">To-Do App</Card.Title>
                <Card.Img className="projectsCardImage todoImage" src={require ('./img/todo.png')} />
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
          <CardGroup className="bgColor apiCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
              <Card.Body className="bgColor projectsCardBody">
                <Card.Title className="bgColor">Movie API</Card.Title>
                <Card.Img className="projectsCardImage todoImage" src={require ('./img/postmanTest.png')} />
                <Card.Text className="bgColor">The server side component for my nixFlix web applications built using Node.js, MongoDb, Express, and tested in Postman. It provides access to movie and user info. Endpoints have been set up to allow users to register an account, login, view movies, add movies to favorites list, update their profile, and delete their account.</Card.Text>
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