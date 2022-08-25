import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills(props) {
  return (
    <>
      <Container fluid className="skills-section  ">
        <Row className=" skills-box mx-1 ">
          <div>
            <h5 className=" sections d-flex justify-content-center pb-1">SKILLS</h5>
          </div>
          <Col xs={{ offset: 1, span: 10 }} lg={3} className=" d-grid skills-div  justify-content-center">
            <div className="skill">
              <p className="skill-category">FRONTEND</p>
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React|Redux</span>
            </div>
          </Col>
          <Col xs={{ offset: 1, span: 10 }} lg={3} className=" d-grid skills-div justify-content-center ">
            <div className="skill">
              <p className="skill-category">TOOLS</p>
              <span>Git</span>
              <span>Heroku</span>
              <span>OAuth</span>
              <span>Agile</span>
              <span>Bootstrap</span>
            </div>
          </Col>
          <Col xs={{ offset: 1, span: 10 }} lg={3} className=" d-grid skills-div justify-content-center ">
            <div className="skill">
              <p className="skill-category">BACKEND</p>
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
