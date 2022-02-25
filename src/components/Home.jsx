import React from "react";
import "../css/style.css";
import { Container, Row, Button } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Home(props) {
  return (
    <>
      <Container fluid className=" heading-box">
        <Row className=" heading">
          <h1 className="name d-flex justify-content-center">OLUWABUSOLA JIBODU</h1>
          <h5 className="title d-flex justify-content-center">FULL STACK DEVELOPER</h5>

          <div className="header-btns-div d-flex gap-3 justify-content-center">
            <Button variant="light" className="header-btns d-flex justify-content-center">
              My Projects
            </Button>
            <Button variant="light" className="header-btns d-flex justify-content-center">
              Resume
            </Button>
          </div>
        </Row>
      </Container>
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}

export default Home;
