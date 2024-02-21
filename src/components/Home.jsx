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
      {/* <Container fluid className=" heading  "> */}
      <div className="heading-box">
        <div>
          <h1 className="name ">Oluwabusola Ilechukwu</h1>
          <span className="position ">SOFTWARE DEVELOPER</span>
        </div>
      </div>
      {/* </Container> */}
      {/* <Container> */}
      <Row id="about">
        <AboutMe />
      </Row>
      <Row id="skills">
        <Skills />
      </Row>
      {/* </Container> */}
      <div id="projects">
        <Projects />
      </div>{" "}
      <Row id="contact">
        <ContactMe />
      </Row>
    </>
  );
}

export default Home;
