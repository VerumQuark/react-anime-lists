import styled from "styled-components";
import { appear, disapear } from "./animation";

interface StyleProps {
  isAnimationPending: boolean;
  isClosing: boolean;
}

const StyledWrapper = styled.div<StyleProps>`
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
  /* Чтобы знать когда какую анимацию включить */
  animation: ${({ isAnimationPending, isClosing }) => {
      if (!isClosing && isAnimationPending) return appear;
      else if (isClosing && isAnimationPending) return disapear;
    }}
    0.5s;
`;

export default StyledWrapper;
