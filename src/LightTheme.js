import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import hero from "./assets/me-light.png";

export default function LightTheme() {
  return (
    <MainContainer
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
      <Title>
        Hello. My name is Alex and I'm a Fraud Analyst at Oracle by day.
      </Title>
      <Img src={hero}></Img>

      <AboutContainer>
        <AboutSection>
          I'm an enthusiastic, self-motivated, reliable, responsible and
          hardworking person. I'm a mature team worker and adaptable to all
          challenging situations.
        </AboutSection>
        <Fade />
      </AboutContainer>
      <DutiesContainer>
        <DutiesSection>
          I monitor, diagnose and disposition fraudulent transactions through
          the use of fraud prevention technologies. Analyze trends and process
          data collection and metrics.
        </DutiesSection>
        <Fade />
      </DutiesContainer>

      <ButtonSection>
        <Button>Wait... What?</Button>
      </ButtonSection>
    </MainContainer>
  );
}

const MainContainer = styled(motion.div)`
  display: grid;
  column-gap: 3rem;
  row-gap: 3rem;
  grid-template-columns: 23rem 23rem 23rem 23rem;
  grid-template-rows: auto;
  grid-template-areas:
    "title title title photo"
    "about about duties duties"
    ". button button .";
  // margin: 0 60rem 0 40rem;
  padding-top: 22rem;
  text-align: start;
`;

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

const AboutContainer = styled.div`
  grid-area: about;
  position: relative;
`;

const AboutSection = styled.p`
  position: relative;
  font-size: 2.5rem;
  padding-right: 1rem;
`;

const DutiesContainer = styled.div`
  grid-area: duties;
  position: relative;
`;

const DutiesSection = styled.p`
  position: relative;
  font-size: 2.5rem;
  padding-left: 1rem;
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

const ButtonSection = styled.div`
  grid-area: button;
  position: relative;
  justify-self: center;
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
