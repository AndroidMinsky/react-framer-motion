import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Switch, useLocation, Route, useHistory } from "react-router-dom";

import ToggleButton from "./ToggleButton";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

function App() {
  const [width, setWidth] = useState(0);

  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    if (location.pathname.startsWith("/dark")) {
      setWidth("-75vw");
    }
  }, [location]);

  useEffect(() => {
    if (history.action === "POP" && location.pathname === "/") {
      setWidth(0);
    }
  }, [location, history]);

  const themeToggle = () => {
    width === 0 ? setWidth("-75vw") : setWidth(0);
    location.pathname === "/" ? history.push("/dark") : history.push("/");
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
          <Switch location={location} key={location.key}>
            <Route path="/dark" children={<DarkTheme key="dark" />} />
            <Route exact path="/" children={<LightTheme key="light" />} />
          </Switch>
        </AnimatePresence>
      </MainSection>
    </>
  );
}

export default App;

const WhiteSection = styled(motion.div)`
  min-height: 100vh;
  height: 100%;
  width: 85vw;
  background: white;
  position: absolute;
`;

const MainSection = styled.div`
  height: 100%;
  width: 100%;
  background: #14171a;
`;
