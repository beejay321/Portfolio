import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills(props) {
  return (
    <>
      <Container className=" sth py-5">
        <Row className=" skills-box mx-1">
          <div>
            <h5 className=" title d-flex pb-3 justify-content-center">SKILLS</h5>
          </div>
          <Col xs={12}  lg={3} className=" d-grid skills-div justify-content-center">
            <p className="skill-category">FRONTEND</p>
            <div className="skill">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React|Redux</span>
            </div>
          </Col>
          <Col xs={12}  lg={3} className=" d-grid skills-div justify-content-center ">
            <p className="skill-category">TOOLS</p>
            <div className="skill">
              <span>Git</span>
              <span>Heroku</span>
              <span>OAuth</span>
              <span>Agile</span>
              <span>Bootstrap</span>
            </div>
          </Col>
          <Col xs={12}  lg={3} className=" d-grid skills-div justify-content-center ">
            <p className="skill-category">BACKEND</p>
            <div className="skill">
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgresSQL</span>
              <span>RESTful API</span>
            </div>
          </Col>

         
        </Row>
      </Container>
    </>
  );
}

export default Skills;
