import styled from "styled-components";
import { theme } from "../../../styles/index.styled";

interface StyleProps {
  background?: string;
  borderless?: boolean;
}

const StyledButton = styled.button<StyleProps>`
  background-color: ${({ background }) => background || "transparent"};
  border: ${({ borderless }) => borderless && "none"};
  height: 100%;
  width: 100%;
  color: ${theme.colors.text};
`;

export default StyledButton;
export { StyleProps };
