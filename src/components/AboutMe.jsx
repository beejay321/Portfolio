import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutMe(props) {
  return (
    <Container className=" aboutSection py-5">
      <Row className="  py-5">
        <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 3 }}>
          <div className="myPic-div pb-5">
            {/* <Image className="myPic" src="https://via.placeholder.com/300x450" alt="" roundedCircle /> */}
            <Image className="myPic" src="https://res.cloudinary.com/dvyids286/image/upload/v1661385850/portfolio/fzbl9xqyp8qn1h8dmq6l.jpg" alt="" roundedCircle />
          </div>{" "}
        </Col>
        <Col className="aboutText" xs={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 6 }}>
          <div>
            <div>
              <h5 className="aboutText-title pb-3">Hi I'm Oluwabusola Jibodu </h5>
            </div>

            <div className="aboutText d-flex gap-2">
              <span>
                An architect turned web developer. In 2021, I took a leap and trained in Full stack web development at Strive School. I quickly absorbed new concepts, while bringing ambitious ideas
                and a positive attitude to every challenge. When I'm not coding, I'm usually travelling, trying new recipes, or watching a movie.
              </span>
            </div>
            <div className=" resume d-flex gap-2">
              <a href="https://docs.google.com/document/d/1eHAUsdxh8J53QIvTRZA6ZmZHbiwiTMUaqt-bCDyoVdI/edit?usp=sharing" target="_blank" rel="noreferrer">
                <span>RESUME</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
