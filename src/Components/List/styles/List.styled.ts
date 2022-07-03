  import styled, { css } from "styled-components";

interface StyleProps {
  width?: string | number;
  height?: string | number;
  isBorderCollapse?: boolean;
  isSelected?: boolean;
}

const StyledList = styled.ul<StyleProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  list-style: square;
  display: flex;
  flex-direction: column;
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
