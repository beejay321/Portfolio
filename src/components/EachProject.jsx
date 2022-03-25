import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

function EachProject({ project }) {
  return (
    <>
      <Row className=" project-div pb-5">
        <Col xs={10} lg={5}>
          <Row>
            {" "}
            <h6 className="project-title">{project.projectTitle}</h6>
          </Row>
          <Row className=" d-grid  pb-2">
            <p>
              <span className="collaborator">{project.collaborators}</span>
              <span>{project.description} </span>
            </p>
          </Row>
          <Row className=" skills-used  pb-3 ">
            {project.skills.map((skill) => (
              <Col xs={2}>{skill}</Col>
            ))}
          </Row>
          <div className=" proj-views d-flex ">
            <a href={project.live} target="_blank" rel="noreferrer">
              <span>Live Demo</span>
            </a>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <span>Source Code</span>
            </a>
          </div>
        </Col>
        <Col xs={12} lg={1}>
          <div className=" imageBox"></div>
        </Col>
        <Col xs={12} lg={6}>
          <Carousel fade>
            {project.images.map((image) => (
              <Carousel.Item className=" imageBox pt-3">
                <img className="d-block w-100 imageFit" src={image} alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default EachProject;
