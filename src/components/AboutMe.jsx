import React from "react";
import { Container, Row } from "react-bootstrap";

function AboutMe(props) {
  return (
    <Container className=" aboutSection py-5">
      <Row className="  py-5">
        <div>
          <h5 className=" title d-flex py-3 justify-content-center">ABOUT</h5>
        </div>
      {/* </Row>
      <Row> */}
        <div className="aboutText d-flex gap-2">
          <span>
            An architect turned web developer. In 2021, I took a leap and trained in Full stack web development at Strive School. I quickly absorbed new concepts, while bringing ambitious ideas and a
            positive attitude to every challenge. When I'm not coding, I'm usually travelling, trying new recipes, or watching a movie.
          </span>
        </div>
        <div className=" resume d-flex gap-2">
          <a href="https://drive.google.com/file/d/1aQRIDh-Z4E5SxXHz7z9j1_6p_xP3P3hL/view?usp=sharing" target="_blank" rel="noreferrer">
            <span>RESUME</span>
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default AboutMe;
