import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import crypto from "../../Assets/Projects/crypto.png";
import suicide from "../../Assets/Projects/suicide.png";
import dhoni from "../../Assets/Projects/dhoni.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Coiny"
              description="Developed a real-time cryptocurrency application
using MERN stack, ReactJS, and RapidAPI that fetched live exchange rates and updates on 50+ cryptocurrencies; reduced
the time spent on manual updates by over 75%."
              ghLink="https://github.com/vatskopal09/crypto-app"
              demoLink="cryptp-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dhoni}
              isBlog={false}
              title="Speakify"
              description="This project is a web-based text-to-speech converter that utilizes the Web Speech API. It enables users to enter text, select from a variety of voices, and listen to the spoken output by clicking a button, providing an accessible and interactive way to convert written text into speech."
              ghLink="https://github.com/vatskopal09/Text-to-Speech"
              demoLink="text-to-speech-lime.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Solario"
              description="Explore the beauty of our solar system with Solario, a web app providing detailed information on planets and a 2D solar system simulation. Features include a Space Invader game, space news, and a contact page. Optimized for larger screens and modern browsers, preferably Chrome."
              ghLink="https://github.com/vatskopal09/Solario.git"
              demoLink="https://solario-app.web.app/"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
