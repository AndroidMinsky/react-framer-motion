import React from "react";
import styled from "styled-components";

import cardImg1 from "./assets/card-img1.png";
import cardImg2 from "./assets/card-img2.png";
import cardImg3 from "./assets/card-img3.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  return (
    <>
      <Tags>
        <Tag active>everything</Tag>
        <Tag># react</Tag>
        <Tag># bootsrap</Tag>
        <Tag># redux</Tag>
        <Tag># material-ui</Tag>
        <Tag># nodejs</Tag>
        <Tag># firebase</Tag>
      </Tags>
      <Cards>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card>
              <ImageSection>
                <Img src={cardImg1} />
              </ImageSection>
              <TitleSection>
                <Title>Fortnite API</Title>
              </TitleSection>
            </Card>
          </Col>
          <Col>
            <Card>
              <ImageSection>
                <Img src={cardImg2} />
              </ImageSection>
              <TitleSection>
                <Title>Jobs Board</Title>
              </TitleSection>
            </Card>
          </Col>
          <Col>
            <Card>
              <ImageSection>
                <Img src={cardImg3} />
              </ImageSection>
              <TitleSection>
                <Title>Invoice App</Title>
              </TitleSection>
            </Card>
          </Col>
        </Row>
      </Cards>
      <Hire>
        <Button>Hire Me</Button>
      </Hire>
    </>
  );
}

const Tags = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
`;

const Tag = styled.button`
  background-color: ${(props) => (props.active ? "#f95d7f" : "#797eee")};
  border: none;
  color: white;
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin: 0.7rem;
`;

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

const ImageSection = styled.div`
  border-radius: 1rem 1rem 0 0;
  height: 25rem;
  overflow: hidden;
`;

const Img = styled.img`
  grid-area: photo;
  position: relative;
`;

const TitleSection = styled.div`
  margin: 2.5rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Hire = styled.div`
  text-align: center;
  padding-bottom: 5rem;
`;

const Button = styled.button`
  background-color: #2b4cf3;
  border: none;
  color: white;
  padding: 1.5rem 5rem;
  text-decoration: none;
  border-radius: 1rem;
  font-size: 2rem;
  box-shadow: 0 0.5rem 2.5rem rgba(52, 96, 241, 0.6);
`;
