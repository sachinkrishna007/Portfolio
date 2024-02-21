import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/Screenshot (83).png";
import projImg3 from "../assets/img/Screenshot (84).png";
import projImg4 from "../assets/img/Screenshot (57).png";
import projImg5 from "../assets/img/Screenshot (87).png";
import wayfarer2 from "../assets/img/Screenshot (88).png";
import wayfarer3 from "../assets/img/Screenshot (89).png";
import home2 from "../assets/img/Screenshot (91).png";
import home3 from "../assets/img/Screenshot (92).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Wayfarer",
      description: "Travel guide Booking Application",
      imgUrl: projImg1,
      imgUrl2: wayfarer2,
      imgUrl3: wayfarer3,
      git: "https://github.com/sachinkrishna007/Wayfarer",
      about:
        "Developed a comprehensive travel guide booking website using the MERN stack. The platform empowers users to discover destinations, seamlessly book travel services and elevate their travel experiences through a range of features.",
      livelink: "https://sachinkrishna.me",
      tech: "Express, React, MongoDB, AWS, Redux, JWT, Socket.IO, Zego Cloud API,React Bootstrap, Stripe, JavaScript, Node.js, NGINX, Cloudinary, Nodemailer",
    },
    {
      title: "Home Haven",
      description: "An E-Commerce Store",
      imgUrl: projImg2,
      git: "https://github.com/sachinkrishna007/HomeHaven--Ecommerce-Website",
      about:
        "Developed a comprehensive e-commerce platform specializing in home decor items, featuring an extensive  range of functionalities catering to both users and administrators..",
      livelink: "https://home.sachinkrishna.me/",
      imgUrl2: home2,
      imgUrl3: home3,
      tech: "Express, React, MongoDB, AWS, Razorpay, Multer, JavaScript, Node.js, NGINX,Twilio",
    },
  ];

  const miniprojects = [
    {
      title: "Password Generator",
      description:
        "Application that enables users to create secure and unique password",
      imgUrl: projImg5,
      about:
        "Developed a Password Generator application that enables users to create secure and unique passwords customized to their specific criteria.",
      tech: "React, Express , MongoDB , Node",
      git: "https://github.com/sachinkrishna007/Password-Generator",
    },
    {
      title: "Netflix Clone",
      description: "Cloned netflix",
      imgUrl: projImg4,
      tech: "React,Axios",
      git: "https://github.com/sachinkrishna007/Netflix-Clone",
      about:
        "Cloned Netflix website using React , Used TMDB API for dynamic content fetching and Axios for seamless API calls.",
    },
    {
      title: "Olx Clone",
      description: "Cloned Olx",
      git: "https://github.com/sachinkrishna007/OLX_CLONE",
      imgUrl: projImg3,
      tech: "React, Firebase",
      about:
        "Developed a web application that replicates the functionality of the popular online classifieds platform OLX  and Firebase for the backend..",
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
                        <Nav.Link eventKey="third"> Upcoming</Nav.Link>
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
                        <h6>No contents to show here</h6>
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
