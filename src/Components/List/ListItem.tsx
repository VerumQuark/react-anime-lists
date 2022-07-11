import React from "react";
import StyledLi, { StyleProps } from "./styles/ListItem.styled";

interface ListItemProps extends StyleProps {
  toggleSelect: (arg: string | number) => void;
  id: string | number;
  children: any;
}

function ListItem({ toggleSelect, id, children, isSelected }: ListItemProps) {
  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi key={id} onClick={onClick} isSelected={isSelected}>
      {children}
    </StyledLi>
  );
}

export default ListItem;
