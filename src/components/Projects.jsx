import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Projects(props) {
  return (
    <Container className=" py-5">
      <Row>
        <div>
          <h5 className=" title d-flex pb-3 justify-content-center">MY PROJECTS</h5>
        </div>

        <Col className="  d-flex pb-3 justify-content-center">
          <div className=" d-flex gap-5">
            <div className=" d-grid project-div">
              <h6>TRAVELGO</h6>
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React | Redux</span>
            </div>
            <div className=" d-grid project-div">
              <p>CLIENT CONNECT</p>
              <span>Git</span>
              <span>Heroku</span>
              <span>OAuth</span>
              <span>Agile</span>
              <span>Bootstrap</span>
            </div>
            <div className=" d-grid project-div">
              <p>MY MUSIC</p>
              <span>Node.JS</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgresSQL</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
