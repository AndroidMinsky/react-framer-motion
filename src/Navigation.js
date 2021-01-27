import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navigation({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Row className="pt-4">
        <Col>
          <Logo props>AV</Logo>
        </Col>
        <Nav>
          <Menu props>
            <StyledLink to="/dark/about">About Me</StyledLink>
            <StyledLink to="/dark">Works</StyledLink>
            <StyledLink to="/dark/contacts">Contacts</StyledLink>
          </Menu>
        </Nav>
        <Col></Col>
      </Row>
    </ThemeProvider>
  );
}

const Logo = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.color};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.color};
`;
