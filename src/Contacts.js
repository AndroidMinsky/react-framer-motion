import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contacts() {
  return (
    <Cards
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
      <Row xs={1} md={2} lg={3}>
        <Col className="mb-5">
          <Card>
            <TitleSection>
              <Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>{" "}
                Hire Me
              </Title>
              <Text2>Let's work together</Text2>
            </TitleSection>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card2>
            <TitleSection>
              <Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>{" "}
                hello@av.dev
              </Title>
              <Text>Say Hello</Text>
            </TitleSection>
          </Card2>
        </Col>
        <Col className="mb-5">
          <Card2>
            <TitleSection>
              <Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>{" "}
                Kevin_Finnerty
              </Title>
              <Text>Let's chat</Text>
            </TitleSection>
          </Card2>
        </Col>
      </Row>
    </Cards>
  );
}

const Cards = styled(motion.div)`
  margin: 5rem 0 3rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  // background-color: #323742;
  background: linear-gradient(to right, #f15e86, #b26fbc 70%);
  color: white;
  height: 20rem;
  border-radius: 1rem;
  font-size: 1.6rem;
`;

const Card2 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #323742;
  color: white;
  height: 20rem;
  border-radius: 1rem;
  font-size: 1.6rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  align-self: center;
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #979797;
`;

const Text2 = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: white;
`;
