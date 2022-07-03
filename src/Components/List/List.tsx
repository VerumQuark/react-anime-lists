import React from "react";
import ListItem from "./ListItem";
import StyledList, { StyleProps } from "./styles/List.styled";
import Header from "../Header";

interface ListProps extends StyleProps {
  title?: string;
  items: Array<{ title: string; id: never | number | string }>;
  selected: Set<string | number>;
  toggleSelect: (arg: string | number) => void;
}

function List({ title, items, selected, toggleSelect, ...props }: ListProps) {
  return (
    <>
      <Header>{title ? title : "List title"}</Header>
      <StyledList {...props}>
        {items.map(({ title, id }) => {
          const isSelected = selected.has(id);
          return (
            <ListItem
              id={id}
              toggleSelect={toggleSelect}
              isSelected={isSelected}
            >
              {title}
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}

export default List;
