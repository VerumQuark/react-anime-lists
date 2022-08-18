import styled from "styled-components";
import { ANIME_TITLE_HEIGHT, BUTTON_SIZE } from "../../List/Constants";
import { theme } from "../../../styles/index.styled";

const StyledActionMenu = styled.div`
  width: 100vw;
  height: ${ANIME_TITLE_HEIGHT}px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 998;
  background-color: ${theme.colors.secondary};
  display: flex;
  align-items: center;

  & div#counter {
    color: ${theme.colors.text};
    width: ${window.innerWidth - BUTTON_SIZE * 4}px;
  }
`;

export default StyledActionMenu;
