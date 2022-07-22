import styled from "styled-components";
import { theme } from "../../../styles/index.styled";
import { appear, disapear } from "./animation";

interface StyleProps {
  height?: number;
  dimmed?: boolean;
}

interface AnimateProps {
  isAnimationPending: boolean;
  isClosing: boolean;
}

const StyledModal = styled.div<StyleProps & AnimateProps>`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px 27px;
  gap: 10px;
  background-color: ${theme.colors.primary};
  z-index: 999;
  border-radius: 5px;
  /* Чтобы знать когда какую анимацию включить */
  animation: ${({ isAnimationPending, isClosing }) => {
      if (!isClosing && isAnimationPending) return appear;
      else if (isClosing && isAnimationPending) return disapear;
    }}
    0.5s;

  & h1 {
    font-size: 24px;
    color: ${theme.colors.text};
  }
`;

export default StyledModal;
export { StyleProps };
