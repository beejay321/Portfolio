import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactMe(props) {
  return (
    <Container fluid className=" pt-5">
      <Row>
        <div>
          <h5 className=" title d-flex pb-3 justify-content-center">CONTACT ME</h5>
        </div>
        <Col className="  d-flex pb-3 justify-content-center">
          <div className=" d-flex gap-5">
            <div className=" d-grid gap-3 contact-div">
              <h6>Full name</h6>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
            </div>
          </div>
        </Col>
        <div className="socials-div pt-4 d-flex gap-5 justify-content-center">
          <span>GitHub</span>
          <a href="https://www.linkedin.com/in/oluwabusola-jibodu-869418125/" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
            {/* <span>LINKEDIN</span> */}
          </a>
          <a href="mailto:jibodu.busola@gmail.com">
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
            {/* <span>EMAIL</span> */}
          </a>
          
        </div>
      </Row>
    </Container>
  );
}

export default ContactMe;
