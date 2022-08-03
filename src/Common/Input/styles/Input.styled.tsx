import styled, { css } from "styled-components";
import { theme } from "../../../styles/index.styled";

interface StyleProps {
  type: "button" | "text" | "number";
  width?: number | string;
}

const StyledInput = styled.input`
  width: ${({ width }) => width || "30%"};
  height: 30px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  text-align: center;
  font-size: 16px;
  border-radius: 2px;
  border: none;
  outline: none;

  ${({ type }) =>
    type === "button" &&
    css`
      &:active {
        background-color: ${theme.colors.accent};
      }

      &:hover {
        border: 2px solid ${theme.colors.accent};
      }
    `}
`;

export default StyledInput;
export { StyleProps };
