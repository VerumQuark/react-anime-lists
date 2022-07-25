import styled, { css } from "styled-components";
import { theme } from "../../../styles/index.styled";

interface StyleProps {
  width?: string | number;
  height?: string | number;
  isBorderCollapse?: boolean;
  isSelected?: boolean;
  isOpen?: boolean;
}

const StyledList = styled.ul<StyleProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
  max-height: ${({ isOpen, height }) =>
    isOpen ? `${`${height}px` || "100%"}` : `0px;`};
  ${({ isBorderCollapse }) =>
    isBorderCollapse &&
    css`
      & li {
        position: relative;
        margin-top: -1px;
        margin-left: -1px;
        left: 1px;
        top: 1px;
      }
    `}
`;

export default StyledList;
export { StyleProps };
