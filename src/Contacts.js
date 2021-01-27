import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contacts() {
  return (
    <>
      <Cards>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card>
              <TitleSection>
                <Title>Fortnite API</Title>
              </TitleSection>
            </Card>
          </Col>
          <Col>
            <Card>
              <TitleSection>
                <Title>Jobs Board</Title>
              </TitleSection>
            </Card>
          </Col>
          <Col>
            <Card>
              <TitleSection>
                <Title>Invoice App</Title>
              </TitleSection>
            </Card>
          </Col>
        </Row>
      </Cards>
    </>
  );
}

const Cards = styled.div`
  margin: 5rem 0;
`;

const Card = styled.div`
  background-color: #1c1f25;
  color: white;
  height: 33rem;
  border-radius: 1rem;
  font-size: 1.6rem;
`;

const TitleSection = styled.div`
  margin: 2.5rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
