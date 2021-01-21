import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import hero from "./assets/me-light.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./Navigation";

export default function LightTheme() {
  const theme = {
    color: "black",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.25,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.1,
        },
      }}
    >
      <Container>
        <Navigation theme={theme} />

        <Row style={{ marginTop: "18rem" }}>
          <Col sm={8}>
            <Title>
              Hello. My name is Alex and I'm a Fraud Analyst at Oracle by day.
            </Title>
          </Col>
          <Col sm={4}>
            <Img src={hero}></Img>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={6}>
            <About>
              I'm an enthusiastic, self-motivated, reliable, responsible and
              hardworking person. I'm a mature team worker and adaptable to all
              challenging situations.
            </About>
            <Fade />
          </Col>
          <Col xs={6}>
            <Duties>
              I monitor, diagnose and disposition fraudulent transactions
              through the use of fraud prevention technologies. Analyze trends
              and process data collection and metrics.
            </Duties>
            <Fade />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col></Col>
          <Col className="text-center">
            <Button>Wait... What?</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </motion.div>
  );
}

const Title = styled.h1`
  grid-area: title;
  color: black;
  font-size: 9rem;
  position: relative;
  line-height: 1em;
`;

const Img = styled.img`
  grid-area: photo;
  position: relative;
`;

const About = styled.p`
  position: relative;
  font-size: 2.5rem;
  padding-right: 1rem;
`;

const Duties = styled.p`
  position: relative;
  font-size: 2.5rem;
`;

const Fade = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10rem 0;
  background-image: linear-gradient(to bottom, transparent, white);
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  border-radius: 1rem;
  font-size: 2rem;
`;
