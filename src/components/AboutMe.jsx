import React from "react";
import { Container, Row } from "react-bootstrap";

function AboutMe(props) {
  return (
    <Container className=" pt-5">
      <Row>
        <div>
          <h5 className=" title d-flex pb-3 justify-content-center">ABOUT</h5>
        </div>
      </Row>
      <Row>
        <div className="aboutText d-flex gap-2">
          <span>
            An architect turned web developer. In 2021, I took a leap and trained in Full stack web development at Strive School. I quickly absorbed new concepts, while bringing ambitious ideas and a
            positive attitude to every challenge. When I'm not coding, I'm usually travelling, trying new recipes, or watching a movie.
          </span>
        </div>
        <div className=" resume d-flex gap-2">
          <a href="https://drive.google.com/file/d/16wGgYW-QQPq7NfHrhIapZq2hSIwITBD4/view?usp=sharing" target="_blank" rel="noreferrer">
            <span>RESUME</span>
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default AboutMe;
