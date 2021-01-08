import React from "react";
import styled from "styled-components";
import heroDark from "./assets/me-dark.png";
import { motion } from "framer-motion";

export default function DarkTheme() {
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
      <TitleDark>
        Hello. My name is Alex and I'm a Web Developer by night.
      </TitleDark>
      <Img src={heroDark} />
    </MainContainer>
  );
}

const Img = styled.img`
  grid-area: photo;
  padding-top: 22rem;
  position: relative;
`;

const TitleDark = styled(motion.h1)`
  grid-area: title;
  color: white;
  font-size: 9rem;
  padding-top: 22rem;
  position: relative;
`;

const MainContainer = styled(motion.div)`
  display: grid;
  column-gap: 3rem;
  row-gap: 2rem;
  grid-template-columns: 23rem 23rem 23rem 23rem;
  grid-template-rows: auto;
  grid-template-areas:
    "title title title photo"
    "section section sectionTwo sectionTwo";
  text-align: start;
`;
