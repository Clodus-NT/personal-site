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

        {/* CLo-Synth */}
          <CardGroup className="bgColor synthCard projectsCardGroup">
            <Card className="bgColor projectsCardElement">
                <Card.Body className="bgColor projectsCardBody">
                  <Card.Title className="bgColor">Clo-Synth</Card.Title>
                  <div className="imageContainer synthImageContainer bgColor">
                    <Card.Img className="projectsCardImage synthImageMain" src={require ('./img/clo-synth1.png')} />
                    <Card.Img className="projectsCardImage synthImageSecond" src={require ('./img/clo-synth2.png')} />
                  </div>
                  <Card.Text className="bgColor">A monophonic, browser based synthesizer built with Tone.js and p5.js. Users can choose between 4 waveforms, play notes with their keyboard and adjust an ADSR amplitude envelope.</Card.Text>
                  <div className="bgColor">
                    <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/tonejs-synth' target='blank' >
                      <Button className="linkBtn"  >Code</Button>
                    </Card.Link>
                    <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/tonejs-synth/' target='blank' >
                      <Button className="linkBtn" >Live</Button>
                    </Card.Link>
                  </div>
              </Card.Body>
            </Card>
          </CardGroup>

        {/* Weather App */}
          <CardGroup className="bgColor movieAppCard projectsCardGroup">
              <Card className="bgColor projectsCardElement">
                <Card.Body className="bgColor projectsCardBody">
                  <Card.Title className="bgColor">Weather React App</Card.Title>
                  <Card.Img className="bgColor projectsCardImage weatherAppImage" src={require ('./img/weather-app1.png')} />
                  <Card.Img className="bgColor projectsCardImage weatherAppImage" src={require ('./img/weather-app2.png')} />
                  <Card.Text className="bgColor">A simple weather application built with React.js that utilizes both the OpenWeatherMap API and GeoDB API to display current weather and a daily forecast for a user chosen city.</Card.Text>
                  <div className="bgColor">
                    <Card.Link className="bgColor project-link" href='https://github.com/Clodus-NT/weather-app' target='blank' >
                      <Button className="linkBtn" >Code</Button>
                    </Card.Link>
                    <Card.Link className="bgColor project-link" href='https://clodus-nt.github.io/weather-app/' target='blank' >
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
          {/* <CardGroup className="bgColor todoCard projectsCardGroup">
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
          </CardGroup> */}

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