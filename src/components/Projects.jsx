import React from "react";
import { Container, Row } from "react-bootstrap";
import EachProject from "./EachProject";

function Projects(props) {
  return (
    <Container className="project-container py-5">
      <Row>
        <div>
          <h5 className=" sections pb-3 d-flex justify-content-center">PROJECTS</h5>
        </div>
      </Row>

      <EachProject
        projectTitle="TRAVELGO"
        collaborators="Solo Project"
        sourceCode="https://github.com/beejay321/Travel_go"
        live=""
        description="A travel log website for travellers get relevant information about prosective vacation destinations and also share experiences and information on previous vacation destinations."
      />
      <EachProject
        projectTitle="CLIENT CONNECT"
        collaborators="Solo Project"
        sourceCode="https://github.com/beejay321/Capstone"
        // live="https://clientconnect-fawn.vercel.app/"
        description="A marketplace website to connect freelancers to clients with freelance job. Freelancers have the ability to bid for projects they believe they are qualified for and the clients will
        choose which freelancers they feel suits best."
      />
      <EachProject
        projectTitle="WEATHERSAYS"
        collaborators="Solo Project"
        sourceCode="https://github.com/beejay321/MyWeather_App"
        live=""
        description="A website that basically tells the weather conditions for different 
        locations if searched for."
      />
    </Container>
  );
}

export default Projects;
