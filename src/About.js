import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function About() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = new Date().getDay();
  return (
    <motion.div
      // style={{ margin: "6rem 0" }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.2,
        },
      }}
    >
      <Title>
        I'm a self-taught <Gradient>frontend developer</Gradient> from Estonia,
        currently living in <Gradient>Ireland</Gradient>. I'm passionate about{" "}
        <Gradient>web design</Gradient> and love working with{" "}
        <Gradient>React</Gradient> and other frameworks. <br />
        <br />
        I'm looking to turn my passion into a <Gradient>career</Gradient>. Feel
        free to <Gradient>contact me</Gradient>.
        <br />
        <br />
        Thanks for reading & Have a great {weekday[day]}!
      </Title>
      <Hire>
        <Button>Hire Me</Button>
      </Hire>
    </motion.div>
  );
}

const Title = styled.h1`
  color: white;
  font-size: 6rem;
  line-height: 1.1em;
`;

const Gradient = styled.span`
  font-size: 6rem;
  // background: linear-gradient(to right, #503cff, #9cface 70%);
  background: #c66aab;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Hire = styled.div`
  text-align: center;
  margin: 5rem 0;
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
