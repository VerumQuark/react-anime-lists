import styled, { css } from "styled-components";
import { theme } from "../../../styles/index.styled";
import { LIST_ITEM_HEIGHT, LIST_ITEM_PADDING } from "../Constants";

interface StyleProps {
  isSelected: boolean;
  xMove?: number;
  height: number;
  isLeftSwipe?: boolean;
  shiftSize?: number;
}

const StyledLi = styled.li<StyleProps>`
  position: fixed;

  ${({ isLeftSwipe, shiftSize }) =>
    isLeftSwipe
      ? css`
          background-color: ${theme.colors.edit};
          & .slideActionIcon {
            left: ${shiftSize}px;
          }
        `
      : css`
          background-color: ${theme.colors.remove};
          & .slideActionIcon {
            right: ${shiftSize}px;
          }
        `}

  & .slideActionIcon {
    color: white;
    position: absolute;
    top: ${({ height }) => {
      switch (height) {
        case LIST_ITEM_HEIGHT:
          return "30%";
        case LIST_ITEM_HEIGHT * 2:
          return "40%";
        default:
          return "45%";
      }
    }};
  }

  & .listItem {
    cursor: pointer;

    line-height: ${LIST_ITEM_HEIGHT}px;
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
    position: relative;

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
  }
`;

export default StyledLi;
export { StyleProps };
