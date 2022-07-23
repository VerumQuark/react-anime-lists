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
  items: Array<{ title: string; rating: number; id: string }>;
  selected: Set<string | number>;
  toggleSelect: (arg: string | number) => void;
  addAnime: () => void;
  removeAnime: (id: string) => void;
}

const CalcLineCnt = (
  fontSize: number,
  width: number,
  arr: Array<{ title: string; rating: number; id: string }>
): number => {
  const charWidth = fontSize / ROBOTO_MONO_HEIGHT_WIDHT_RATIO;
  let lineCnt = 0;
  arr.forEach((item) => {
    lineCnt += Math.ceil((item.title.length * charWidth) / width);
  });

  return lineCnt;
};

function List({
  title,
  items,
  selected,
  toggleSelect,
  addAnime,
  removeAnime,
  ...props
}: ListProps) {
  const [isOpen, setOpen] = useState(false);

  const toggling = () => {
    setOpen(!isOpen);
  };
  const width = window.innerWidth;
  const LineCnt = CalcLineCnt(16, width, items);
  return (
    <>
      <Header onClick={toggling} isOpen={isOpen} onAddAnime={addAnime}>
        {title ? title : "List title"}
      </Header>
      <StyledList
        {...props}
        isOpen={isOpen}
        height={
          items.length === 0 ? ANIME_TITLE_HEIGHT : ANIME_TITLE_HEIGHT * LineCnt
        }
      >
        {
          // if list is empty put default item
          items.length === 0 ? (
            <ListItem
              id={"0"}
              toggleSelect={() => {}}
              key={0}
              isSelected={false}
            >
              {"List is empty"}
            </ListItem>
          ) : (
            items.map(({ title, id }) => {
              const isSelected = selected.has(id);
              return (
                <ListItem
                  id={id}
                  toggleSelect={toggleSelect}
                  isSelected={isSelected}
                  key={id}
                  removeAnime={removeAnime}
                >
                  {title}
                </ListItem>
              );
            })
          )
        }
      </StyledList>
    </>
  );
}

export default List;
