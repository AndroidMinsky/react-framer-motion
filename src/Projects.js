import React, { useState } from "react";
import styled from "styled-components";

import projects from "./data";
import ModalWindow from "./ModalWindow";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleModal = (id) => {
    setId(id);
    setShow(true);
  };
  return (
    <div>
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
          {projects.map((project) => (
            <Col key={project.id}>
              <Card onClick={() => handleModal(project.id)}>
                <ImageSection>
                  <Img src={process.env.PUBLIC_URL + project.image} />
                </ImageSection>
                <TitleSection>
                  <Title>{project.title}</Title>
                </TitleSection>
              </Card>
            </Col>
          ))}
        </Row>
      </Cards>
      <Hire>
        <Button>Hire Me</Button>
      </Hire>
      {id && <ModalWindow show={show} close={() => setShow(false)} id={id} />}
    </div>
  );
}

const Tags = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
`;

const Tag = styled.button`
  background-color: ${(props) => (props.active ? "#c66aab" : "#797eee")};
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
  background-color: #292d37;
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
  margin-bottom: 5rem;
`;

const Button = styled.button`
  background: linear-gradient(to right, #f15e86, #b26fbc 70%);
  border: none;
  color: white;
  padding: 1.5rem 8rem;
  text-decoration: none;
  border-radius: 1rem;
  font-size: 2rem;
`;
