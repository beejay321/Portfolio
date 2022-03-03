import React from "react";
import "../css/style.css";
import { Container, Row } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";

function Home(props) {
  return (
    <>
      <Container fluid className=" heading-box  m-0 ">
        <Row className="heading ">
          <h1 className="name d-flex justify-content-center">OLUWABUSOLA JIBODU</h1>
          <h5 className="title d-flex justify-content-center">FULL STACK DEVELOPER</h5>

          <div className=" nav-links d-flex gap-2">
            <a href="/#skills">
              <span>SKILLS</span>
            </a>
            <a href="/#projects">
              <span>PROJECTS</span>
            </a>
            <a href="/#about">
              <span>ABOUT</span>
            </a>
            <a href="/#contact">
              <span> CONTACT ME</span>
            </a>
          </div>
        </Row>
      </Container>
      <Container>
        <Row id="skills">
          <Skills />
        </Row>
      </Container>
      <div id="projects">
        <Projects />
      </div>{" "}
      <Row id="about">
        <AboutMe />
      </Row>
      <Row id="contact">
        <ContactMe />
      </Row>
    </>
  );
}

export default Home;
