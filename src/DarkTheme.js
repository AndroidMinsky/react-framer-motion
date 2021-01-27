import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Projects from "./Projects";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function DarkTheme() {
  const theme = {
    color: "white",
  };
  const activeClassName = "nav-item-active";

  const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-size: 4rem;
    padding: 0 2rem;
    color: #979797;
    text-decoration: none;

    &.${activeClassName} {
      color: white;
      text-decoration: underline;
    }

    &:hover {
      color: white;
      text-decoration: underline;
    }
  `;

  let { path, url } = useRouteMatch();

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
            <Img src={process.env.PUBLIC_URL + "/assets/me-dark.png"} />
          </Col>
        </Row>

        <Main>
          <Nav>
            <StyledLink exact to={`${url}`}>
              Projects
            </StyledLink>
            <StyledLink to={`${url}/about`}>About</StyledLink>
            <StyledLink to={`${url}/contacts`}>Contacts</StyledLink>
          </Nav>

          <Switch>
            <Route path={`${path}/contacts`} children={<Contacts />} />
            <Route exact path={`${path}`} children={<Projects />} />
          </Switch>
        </Main>
      </Container>
      <FooterSection>
        <Container>
          <Footer />
        </Container>
      </FooterSection>
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
  margin-top: 15rem;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;

const FooterSection = styled.div`
  background: #292d37;
`;
