import styled from "styled-components";
import { theme } from "../../../styles/index.styled";
import { ANIME_TITLE_HEIGHT } from "../../../Components/List/Constants";
import { appear, disapear } from "./animation";

interface StyleProps {
  isAnimationPending: boolean;
  isClosing: boolean;
}

const StyledNotificationBox = styled.div<StyleProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${ANIME_TITLE_HEIGHT}px;
  background-color: ${theme.colors.accent};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  z-index: 999;
  animation: ${({ isAnimationPending, isClosing }) => {
      if (!isClosing && isAnimationPending) return appear;
      else if (isClosing && isAnimationPending) return disapear;
    }}
    0.5s;
`;

export default StyledNotificationBox;
export { StyleProps };
