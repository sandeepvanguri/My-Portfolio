import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={"https://i.pinimg.com/736x/1c/96/ba/1c96ba5eafeebbee4be45a1a279cddb5.jpg"}
              isBlog={false}
              title="SmartShot: AI-Powered Archery"
              description="Developed an interactive computer vision-based archery game using Python, designed to detect colored ball hits on a virtual target board through real-time video processing. The system utilizes perspective transformation and contour detection to identify hit zones and dynamically compute scores. A custom polygon-based annotation tool was implemented to allow manual definition of scoring areas on the target, enhancing accuracy and flexibility. The project integrates HSV color space filtering for precise ball detection and handles mouse-driven input to map interactive zones efficiently."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.macpricesaustralia.com.au/wp-content/uploads/2018/09/Siri-Shortcut-Siri-Logo.jpg"}
              isBlog={false}
              title="PROTO"
              description="Customized AI Assistant for Personal Tasks (PROTO) is designed to enhance productivity by automating personal tasks and delivering accurate, real-time information. Built using Python, it incorporates Natural Language Processing (NLP) to understand and respond to user queries intelligently. The assistant supports voice interaction through speech recognition and text-to-speech (TTS), and retrieves up-to-date content via API integrations. PROTO helps with scheduling, reminders, web queries, and personalized assistance, streamlining everyday workflows through intuitive, user-centric design."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://aivd.com.au/wp-content/uploads/2024/06/Heading-Practical-Placement-shutterstock_17151187-min-1024x693.jpg"}
              isBlog={false}
              title="Placement Portal"
              description="Developed a fully functional placement portal designed to inform users about the latest job openings, hackathons, and career-related events. Built with ReactJS for a dynamic front-end experience and MongoDB for flexible data management, the portal offers a centralized platform to explore opportunities from various companies. The project emphasizes usability and accessibility, keeping students and professionals updated on relevant career paths and events."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
