import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import heroDark from "./assets/me-dark.png";

import Projects from "./Projects";
import Navigation from "./Navigation";

export default function DarkTheme() {
  const theme = {
    color: "white",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
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
              Hello. My name is Alex and I'm a{" "}
              <Gradient>Web Developer</Gradient> by night.
            </Title>
          </Col>
          <Col sm={4}>
            <Img src={heroDark} />
          </Col>
        </Row>

        <Main>
          <Nav>
            <Link active>Projects</Link>
            <Link>Experience</Link>
            <Link>Contacts</Link>
          </Nav>

          <Projects />
        </Main>
      </Container>
    </motion.div>
  );
}

const Title = styled(motion.h1)`
  grid-area: title;
  color: white;
  font-size: 9rem;
  position: relative;
`;

const Gradient = styled.h1`
  font-size: 9rem;
  background: linear-gradient(to right, #503cff, #9cface 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Img = styled.img`
  grid-area: photo;
  position: relative;
`;

const Main = styled.div`
  margin: 15rem 0 5rem 0;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;

const Link = styled.li`
  font-size: 4rem;
  padding: 0 2rem;
  color: ${(props) => (props.active ? "white" : "#979797")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;
