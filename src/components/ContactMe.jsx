import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const ADDRESS = "https://busola-uche.herokuapp.com";

  const sendMail = async () => {
    try {
      const details = {
        name: name,
        message: message,
        email: email,
      };
      const response = await fetch(`${ADDRESS}/contacts/sendmail`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      if (response.ok) {
        console.log("An email has been sent ");
        setMessageSent(true);
      } else {
        console.log("No email was sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const details = {
        name: name,
        email: email,
        message: message,
      };
      const response = await fetch(`${ADDRESS}/contacts/contact`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        sendMail();
      } else {
        console.log("not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className=" pt-5">
      {messageSent ? (
        <Row className="d-flex  justify-content-center">
          <div className="message-alert">
            <h5 className=" title d-flex pb-3 justify-content-center">Your message has been sent</h5>
          </div>
        </Row>
      ) : (
        <Row className="contact-me ">
          <div>
            <h5 className=" sections d-flex pb-3 justify-content-center">CONTACT ME</h5>
          </div>
          <Col xs={10} md={4} className="contact-input">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="CavelloSmall">Name*</Form.Label>
              <Form.Control required placeholder="" value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="CavelloSmall">Email Address*</Form.Label>
              <Form.Control placeholder="" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="CavelloSmall">Message</Form.Label>
              <Form.Control type="text" placeholder="" as="textarea" style={{ height: "100px" }} value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <div className=" resume d-flex gap-2 my-4" onClick={sendMessage}>
              <Button className="rsvpSubmitBtn" type="submit" variant="outline-secondary" onClick={sendMessage}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      )}
      <Row className="socials-div pb-4 ">
        <div>
          <a className="top d-flex justify-content-center" href="/">
            <span>Back to Top</span>
          </a>
        </div>
        <div className=" pb-4 d-flex gap-5 justify-content-center">
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
