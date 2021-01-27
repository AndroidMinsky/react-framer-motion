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
      {width === 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="white"
          class="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="white"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      )}
    </Button>,
    document.getElementById("portal")
  );
}

const Button = styled(motion.button)`
  font-size: 2.5rem;
  position: sticky;
  top: 20vh;
  left: calc(85vw - 45px);
  border: none;
  border-radius: 15px;
  padding: 2rem 2rem;
  background: linear-gradient(to right, #7e5a9b, #797eee 99%);
  z-index: 30;

  &:focus {
    outline: none;
  }
`;
