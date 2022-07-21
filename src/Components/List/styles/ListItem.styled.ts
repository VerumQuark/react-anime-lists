import styled, { css } from "styled-components";
import { theme } from "../../../styles/index.styled";
import { ANIME_TITLE_HEIGHT } from "../Constants";

interface StyleProps {
  isSelected: boolean;
}

const StyledLi = styled.li<StyleProps>`
  cursor: pointer;
  height: ${ANIME_TITLE_HEIGHT}px;
  line-height: ${ANIME_TITLE_HEIGHT}px;
  text-align: left;
  font-size: 16px;
  padding: 0 15px;
  color: ${theme.colors.text};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.5);
  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.actionSelect};
        `
      : css`
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        `};
`;

export default StyledLi;
export { StyleProps };
