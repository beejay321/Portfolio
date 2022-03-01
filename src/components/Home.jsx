import React from "react";
import "../css/style.css";
import { Container, Row, Button } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Home(props) {
  return (
    <>
      <Container fluid className=" heading-box m-0 ">
        <Row className=" heading">
          <h1 className="name d-flex justify-content-center">OLUWABUSOLA JIBODU</h1>
          <h5 className="title d-flex justify-content-center">FULL STACK DEVELOPER</h5>

          <div className="header-btns-div d-flex gap-3 justify-content-center">
            <Button variant="light" className="header-btns d-flex justify-content-center">
              My Projects
            </Button>
            <Button variant="light" className="header-btns d-flex justify-content-center">
              <a href="https://drive.google.com/file/d/16wGgYW-QQPq7NfHrhIapZq2hSIwITBD4/view?usp=sharing" target="_blank" rel="noreferrer" >
                Resume
              </a>
            </Button>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Skills />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <ContactMe />
        </Row>
      </Container>
    </>
  );
}

export default Home;
