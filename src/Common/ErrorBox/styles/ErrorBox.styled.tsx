import styled from "styled-components";

interface StyleProps {
  warning?: boolean;
  critical?: boolean;
}

const StyledErrorBox = styled.div<StyleProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ critical }) => (critical ? "100vh" : "40px")};
  background-color: ${({ warning }) => (!warning ? "red" : "orange")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export default StyledErrorBox;
export { StyleProps };
