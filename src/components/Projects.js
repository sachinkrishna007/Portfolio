import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/Screenshot (83).png";
import projImg3 from "../assets/img/Screenshot (84).png";
import projImg4 from "../assets/img/Screenshot (57).png";
import projImg5 from "../assets/img/Screenshot (87).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Wayfarer",
      description: "Travel guide Booking Application",
      imgUrl: projImg1,

      about:
        "Developed a comprehensive travel guide booking website using the MERN stack. The platform empowers users to discover destinations, seamlessly book travel services and elevate their travel experiences through a range of features.",
      livelink: "https://sachinkrishna.me",
      tech: "Express, React, MongoDB, AWS, Redux, JWT, Socket.IO, Zego Cloud API,React Bootstrap, Stripe, JavaScript, Node.js, NGINX, Cloudinary, Nodemailer",
    },
    {
      title: "Home Haven",
      description: "An E-Commerce Store",
      imgUrl: projImg2,
      about: "Home Haven - An E-Commerce Store.",
      livelink: "https://sachinkrishna.me/",
    },
  ];

  const miniprojects = [
    {
      title: "Password Generator",
      description:
        "Application that enables users to create secure and unique password",
      imgUrl: projImg5,
    },
    {
      title: "Netflix Clone",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Olx Clone",
      description: "",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Main Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mini Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <h3></h3>
                        <br />
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {miniprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
