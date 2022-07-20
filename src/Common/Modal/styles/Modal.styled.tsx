import styled from "styled-components";
import { theme } from "../../../styles/index.styled";
import animation from "./animation";

interface StyleProps {
  height?: number;
  dimmed?: boolean;
}

const StyledModal = styled.div<StyleProps>`
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
  animation: ${animation} 0.5s;

  & h1 {
    font-size: 24px;
    color: ${theme.colors.text};
  }
`;

export default StyledModal;
export { StyleProps };
