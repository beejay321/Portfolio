import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


function Skills(props) {
    return (
        <Container className=" py-5">
        <Row>
          <div>
            <h5 className=" title d-flex pb-3 justify-content-center">SKILLS</h5>
          </div>
          <Col>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit laudantium id perspiciatis, inventore doloribus repudiandae! In, molestias. A!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit laudantium id perspiciatis, inventore doloribus repudiandae! In, molestias. A!</p>
            </div>
          </Col>
          <Col>
            <div className=" d-flex gap-5">
              <div className=" d-grid skills-div">
                <h6>FRONT END</h6>
                <span>HTML5</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React | Redux</span>
              </div>
              <div className=" d-grid skills-div">
                <p>TOOLS</p>
                <span>Git</span>
                <span>Heroku</span>
                <span>OAuth</span>
                <span>Agile</span>
                <span>Bootstrap</span>
              </div>
              <div className=" d-grid skills-div">
                <p>BACK END</p>
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

export default Skills;