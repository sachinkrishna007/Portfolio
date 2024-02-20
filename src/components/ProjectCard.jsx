import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  about,
  livelink,
  tech,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <Button variant="primary" onClick={() => setModalShow(true)}>
            More info
          </Button>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imgUrl}
                    alt="First slide"
                  />
                </Carousel.Item>
                {/* Add additional Carousel.Items for additional images */}
              </Carousel>
              <br />
              <br />
              <h5 style={{ color: "black", textDecoration: "underline" }}>
                About
              </h5>{" "}
              <span style={{ color: "black" }}>{about}</span>
              <br />
              <br />
              <h5 style={{ color: "black", textDecoration: "underline" }}>
                Technology Used
              </h5>{" "}
              <p style={{ color: "black" }}>{tech}</p>
              <br />
              <a
                href={livelink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", paddingTop: "30px" }}
              >
                Live Link
              </a>
              <br />
              <br />
              <a
                href={livelink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", paddingTop: "30px" }}
              >
                Git Hub
              </a>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Col>
  );
};
