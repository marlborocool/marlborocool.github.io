import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import panoraven from "../../Assets/Projects/panoraven.png";
import affiliate from "../../Assets/Projects/affiliate.png";
import marketplace from "../../Assets/Projects/nft-marketplace.png";
import chatify from "../../Assets/Projects/chatify.png";
import neatleaf from "../../Assets/Projects/neatleaf.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/marlborocool/react-firebase-chatting-app"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="This e-commerce web site was built with React, React Router, Redux and Material-UI. The primary motive was to try out and learn both Redux and Material-UI. I also thought an e-commerce project would be an interesting and educational undertaking in general."
              ghLink="https://github.com/marlborocool/react-e-commerce"
              demoLink="https://e-commerce-mr.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="NEXUS Land Sale"
              description="Land Sale was built by Vue.js, Nuxt.js, Vite, Tailwind CSS and TypeScript. Users can enjoy a place they call home and earn from palyer traffic. Enroll players into their hometown so they can collect taxes on their earnings and let them manage your facilities."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://marketplace.affyn.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panoraven}
              isBlog={false}
              title="Panoraven"
              description="This website was built by Angular, Nest.js, TypeScript and Material UI. Panoraven is for creating, sharing the virtual tours 360 in a breeze."
              // ghLink="https://github.com/marlborocool/the-impact-suite"
              demoLink="https://panoraven.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neatleaf}
              isBlog={false}
              title="Neatleaf Dashboard"
              description="Used React, TypeScript, MUI, styled-components, Hasura, PostgreSQL, GraphQL and AWS Cognito, AWS Lambda, AWS Amplify for neatleaf company dashboard."
              ghLink="https://github.com/marlborocool/neatleaf-dashboard"
              demoLink="https://dashboard.neatleaf.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={affiliate}
              isBlog={false}
              title="Affiliate Dashboard"
              description="This software was built by React, Node.js, PHP, Laravel, MySQL, TypeScript, Prisma-ORM, TRPC, Tremor and Chakra UI."
              ghLink="https://github.com/marlborocool/AFF/tree/master/aff"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
