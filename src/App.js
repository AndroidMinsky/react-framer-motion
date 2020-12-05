import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [dark, setDark] = useState(false);
  const [width, setWidth] = useState(0);

  const themeToggle = () => {
    setDark(!dark);
    width === 0 ? setWidth("-70vw") : setWidth(0);
  };

  return (
    <>
      <Light
        animate={{ x: width }}
        transition={{
          type: "tween",
          duration: 1,
          ease: [0.9, 0.15, 0.15, 0.9],
        }}
      >
        <Button
          onClick={() => themeToggle()}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1, repeatDelay: 2 }}
        >
          Click Me
        </Button>
      </Light>

      <Dark>
        <AnimatePresence initial={false} exitBeforeEnter>
          {!dark && (
            <TitleLight
              key="1"
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
              exit={{ opacity: 0 }}
            >
              By Day
            </TitleLight>
          )}

          {dark && (
            <TitleDark
              key="2"
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
              exit={{ opacity: 0 }}
            >
              By Night
            </TitleDark>
          )}
        </AnimatePresence>
      </Dark>
    </>
  );
}

export default App;

const Dark = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  text-align: center;
`;

const Light = styled(motion.div)`
  height: 100vh;
  background: white;
  width: 80vw;
  position absolute;
  top: 0;
`;

const TitleLight = styled(motion.h1)`
  color: blue;
  font-size: 10rem;
  padding-top: 25rem;
  position: relative;
`;

const TitleDark = styled(motion.h1)`
  color: yellow;
  font-size: 10rem;
  padding-top: 25rem;
  position: relative;
`;

const Button = styled(motion.button)`
  font-size: 2.5rem;
  position: relative;
  top: 45vh;
  left: 76.5vw;
  border: 1px solid;
  border-radius: 5px;
  padding: 2rem 2rem;
  background: yellow;
  z-index: 1000;
`;
