import styled from "styled-components";
import { theme } from "../../../../styles/index.styled";

const StyledHeader = styled.div`
  background: ${theme.colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  height: 49px;
`;

export default StyledHeader;
