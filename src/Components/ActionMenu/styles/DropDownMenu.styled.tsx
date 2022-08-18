import styled from "styled-components";
import { ANIME_TITLE_HEIGHT, BUTTON_SIZE } from "../../List/Constants";
import { theme } from "../../../styles/index.styled";

interface StyledDropDownMenuProps {
  leftShift: number;
}

const StyledDropDownMenu = styled.div<StyledDropDownMenuProps>`
  width: ${BUTTON_SIZE}px;
  position: relative;
  color: ${theme.colors.text};

  & ul {
    position: absolute;
    left: ${(p) => p.leftShift}px;
  }

  & li {
    background: ${theme.colors.accent};
    display: none;
    height: ${ANIME_TITLE_HEIGHT}px;
    line-height: ${ANIME_TITLE_HEIGHT}px;
    padding: 0 10px;
  }

  :hover li {
    display: block;
  }

  :hover li:hover {
    background: ${theme.colors.actionSelect};
  }
`;

export default StyledDropDownMenu;
export { StyledDropDownMenuProps };
