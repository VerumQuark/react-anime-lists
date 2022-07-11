import styled from "styled-components";

interface StyleProps {
  isSelected: boolean;
  isOpen: boolean;
}

const StyledLi = styled.li<StyleProps>`
  cursor: pointer;
  
  position: relative;
  border: 2px solid transparent;
  border-color: ${({ isSelected }) => isSelected && "black"};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

export default StyledLi;
export { StyleProps };
