import React from "react";
import { Container, Row, Col,  Image } from "react-bootstrap";

function Projects(props) {
  return (
    <Container className=" py-5">
      <Row>
        <div>
          <h5 className=" title d-flex pb-3 justify-content-center">MY PROJECTS</h5>
        </div>
      </Row>
      <Row className=" project-div pb-5">
        <Col xs={10} lg={5}>
          <div className=" d-grid  pb-5">
            <h6 className="project-title">TRAVELGO</h6>
            <div className=" skills-used ">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>GIT</span>
            </div>
            <p className="collaborator">
              <span>Solo Project</span>
            </p>
            <p className="">
              <span>
                A travel log website for travellers get relevant information about prosective vacation destinations and also share experiences and information on previous vacation destinations.
              </span>
            </p>
            <div className=" proj-views d-flex gap-2">
              <span>DEMO</span>
              <span>Source Code</span>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={1}>
          <div className=" imageBox"></div>
        </Col>
        <Col xs={12} lg={6}>
          <div className=" imageBox">
            <Image className="imageFit" fluid src="https://via.placeholder.com/600x350" alt="..." />
          </div>
        </Col>
      </Row>
      <Row className=" project-div pb-5">
        <Col xs={10} lg={5}>
          <div className=" d-grid  pb-5">
            <h6 className="project-title">CLIENT CONNECT</h6>
            <div className=" skills-used ">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Redux</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>GIT</span>
            </div>
            <p className="collaborator">
              <span>Solo Project</span>
            </p>
            <p className="">
              <span>
                A marketplace website to connect freelancers to clients with freelance job. Freelancers have the ability to bid for projects they believe they are qualified for and the clients will
                choose which freelancers they feel suits best{" "}
              </span>
            </p>
            <div className=" proj-views d-flex gap-2">
              <span>DEMO</span>
              <span>Source Code</span>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={1}>
          <div className=" imageBox"></div>
        </Col>
        <Col xs={12} lg={6}>
          <div className=" imageBox">
            <Image className="imageFit" fluid src="https://via.placeholder.com/600x350" alt="..." />
          </div>
        </Col>
      </Row>
      <Row className=" project-div pb-5">
        <Col xs={10} lg={5}>
          <div className=" d-grid  pb-5">
            <h6 className="project-title">WEATHERSAYS</h6>
            <div className=" skills-used ">
              <span>HTML5</span>
              <span>CSS</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Bootstrap</span>
              <span>OpenWeather API</span>
              <span>GIT</span>
            </div>
            <p className="collaborator">
              <span>Solo Project</span>
            </p>
            <p className="">
              <span>A website that basically tells the weather conditions for diffrent locations if searched for. The data is gotten from the Open weather </span>
              {/* https://openweathermap.org/ */}
            </p>
            <div className=" proj-views d-flex gap-2">
              <span>DEMO</span>
              <span>Source Code</span>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={1}>
          <div className=" imageBox"></div>
        </Col>
        <Col xs={12} lg={6}>
          <div className=" imageBox">
            <Image className="imageFit" fluid src="https://via.placeholder.com/600x350" alt="..." />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
