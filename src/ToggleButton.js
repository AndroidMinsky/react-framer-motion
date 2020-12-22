import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function ToggleButton({ click, width }) {
  return ReactDOM.createPortal(
    <Button
      onClick={click}
      animate={{ x: width }}
      transition={{
        type: "tween",
        duration: 1,
        ease: [1, 0.1, 0.1, 1],
      }}
    >
      Click Me
    </Button>,
    document.getElementById("portal")
  );
}

const Button = styled(motion.button)`
  font-size: 2.5rem;
  position: absolute;
  top: 25vh;
  left: calc(80vw - 69px);
  border: 1px solid;
  border-radius: 5px;
  padding: 2rem 2rem;
  background: yellow;
`;
