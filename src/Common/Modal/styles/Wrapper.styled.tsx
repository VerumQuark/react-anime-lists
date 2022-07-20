import styled from "styled-components";
import animation from "./animation";

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 998;
  animation: ${animation} 0.5s;
`;

export default StyledWrapper;
