import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function EachProject({ projectTitle, collaborators, description, sourceCode, live }) {
  return (
    <>
      <Row className=" project-div pb-5">
        <Col xs={10} lg={5}>
          <Row>
            {" "}
            <h6 className="project-title">{projectTitle}</h6>
          </Row>
          <Row className=" skills-used ">
            <Col xs={2}>HTML5</Col>
            <Col xs={2}>CSS</Col>
            <Col xs={2}>JavaScript</Col>
            <Col xs={2}>React</Col>
            <Col xs={2}>Bootstrap</Col>
            <Col xs={2}>Node.js</Col>
            <Col xs={2}>MongoDB</Col>
            <Col xs={2}>GIT</Col>{" "}
          </Row>
          <Row className=" d-grid  pb-5">
            <p>
              <span className="collaborator">{collaborators}</span>
              <span>{description} </span>
            </p>

            <div className=" proj-views d-flex gap-2">
              <a href={live} target="_blank" rel="noreferrer">
                <span>Live Demo</span>
              </a>
              <a href={sourceCode} target="_blank" rel="noreferrer">
                <span>Source Code</span>
              </a>
            </div>
          </Row>
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
    </>
  );
}

export default EachProject;
