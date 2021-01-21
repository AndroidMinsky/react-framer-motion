import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButton from "./ToggleButton";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

function App() {
  const [dark, setDark] = useState(false);
  const [width, setWidth] = useState(0);

  const themeToggle = () => {
    setDark(!dark);
    width === 0 ? setWidth("-75vw") : setWidth(0);
  };

  return (
    <>
      <WhiteSection
        animate={{ x: width }}
        transition={{
          type: "tween",
          duration: 1,
          ease: [1, 0.1, 0.1, 1],
        }}
      >
        <ToggleButton click={themeToggle} width={width} />
      </WhiteSection>

      <MainSection>
        <AnimatePresence exitBeforeEnter initial={false}>
          {dark ? <DarkTheme key="dark" /> : <LightTheme key="light" />}
        </AnimatePresence>
      </MainSection>
    </>
  );
}

export default App;

const WhiteSection = styled(motion.div)`
  height: 100%;
  width: 85vw;
  background: white;
  position: absolute;
`;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  background: #14171a;
`;
