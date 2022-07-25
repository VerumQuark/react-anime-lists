import styled, { css } from "styled-components";
import { theme } from "../../../styles/index.styled";
import { ANIME_TITLE_HEIGHT, LIST_ITEM_PADDING } from "../Constants";

interface StyleProps {
  isSelected: boolean;
  xMove?: number;
}

const StyledLi = styled.li<StyleProps>`
  cursor: pointer;

  line-height: ${ANIME_TITLE_HEIGHT}px;
  text-align: left;
  font-size: 16px;
  padding: 0 ${LIST_ITEM_PADDING}px;
  color: ${theme.colors.text};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};

  ${({ xMove }) =>
    xMove &&
    css`
      transform: translateX(${xMove}px);
    `}

  /* position: relative; */
  border: 1px solid rgba(0, 0, 0, 0.5);
  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.actionSelect};
        `
      : css`
          & p {
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
          }
        `};
`;

export default StyledLi;
export { StyleProps };
