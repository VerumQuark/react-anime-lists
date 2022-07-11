import React, { useState } from "react";
import ListItem from "./ListItem";
import StyledList, { StyleProps } from "./styles/List.styled";
import Header from "../Header";
import {
  ANIME_TITLE_HEIGHT,
  ROBOTO_MONO_HEIGHT_WIDHT_RATIO,
} from "./Constants";

interface ListProps extends StyleProps {
  title?: string;
  items: Array<{ title: string; id: never | number | string }>;
  selected: Set<string | number>;
  toggleSelect: (arg: string | number) => void;
}

const CalcLineCnt = (
  fontSize: number,
  width: number,
  arr: Array<{ title: string; id: never | number | string }>
): number => {
  const charWidth = fontSize / ROBOTO_MONO_HEIGHT_WIDHT_RATIO;
  let lineCnt = 0;
  arr.forEach((item) => {
    lineCnt += Math.ceil((item.title.length * charWidth) / width);
  });

  return lineCnt;
};

function List({ title, items, selected, toggleSelect, ...props }: ListProps) {
  const [isOpen, setOpen] = useState(false);

  const toggling = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  const width = 390;
  const LineCnt = CalcLineCnt(16, width, items);

  return (
    <>
      <Header onClick={toggling}>{title ? title : "List title"}</Header>
      <StyledList
        {...props}
        isOpen={isOpen}
        height={ANIME_TITLE_HEIGHT * LineCnt}
        width={width}
      >
        {items.map(({ title, id }) => {
          const isSelected = selected.has(id);
          return (
            <ListItem
              id={id}
              toggleSelect={toggleSelect}
              isSelected={isSelected}
              isOpen={isOpen}
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
