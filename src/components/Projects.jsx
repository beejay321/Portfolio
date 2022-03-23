import React from "react";
import { Container, Row } from "react-bootstrap";
import EachProject from "./EachProject";
import projects from "../file/projects.json";

function Projects(props) {
  return (
    <Container className="project-container py-5">
      <Row>
        <div>
          <h5 className=" sections pb-3 d-flex justify-content-center">PROJECTS</h5>
        </div>
      </Row>

      <EachProject project={projects[0]} />
      <EachProject project={projects[1]} />
      {/* <EachProject project={projects[2]} /> */}
    </Container>
  );
}

export default Projects;
