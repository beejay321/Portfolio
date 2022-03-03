import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactMe(props) {
  return (
    <Container fluid className=" pt-5">
      <Row className="d-flex  justify-content-center">
        <div>
          <h5 className=" title d-flex pb-3 justify-content-center">CONTACT ME</h5>
        </div>
        <Col xs={10} md={6} className="">
          <div className=" contact-input d-grid gap-3 my-3">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
          </div>
          <div className=" resume d-flex gap-2 my-4">
            <span>SEND</span>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="socials-div pt-4 d-flex gap-5 justify-content-center">
          <a href="https://github.com/beejay321" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/oluwabusola-jibodu-869418125/" target="_blank" rel="noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedIn icon" />
          </a>
          <a href="mailto:jibodu.busola@gmail.com">
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail icon" />
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default ContactMe;
