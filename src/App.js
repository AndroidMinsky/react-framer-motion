import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

function App() {
  const [dark, setDark] = useState(false);
  const [width, setWidth] = useState(0);

  const themeToggle = () => {
    setDark(!dark);
    width === 0 ? setWidth("-70vw") : setWidth(0);
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
        {!dark && <LightTheme />}
        {dark && <DarkTheme />}
      </MainSection>
    </>
  );
}

export default App;

const WhiteSection = styled(motion.div)`
  height: 100vh;
  width: 80vw;
  background: white;
  position absolute;
`;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
`;
