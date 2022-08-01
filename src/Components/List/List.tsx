import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import ListItem from "./ListItem";
import StyledList, { StyleProps } from "./styles/List.styled";
import Header from "./Header";
import {
  ANIME_TITLE_HEIGHT,
  LIST_ITEM_PADDING,
  ROBOTO_MONO_HEIGHT_WIDHT_RATIO,
  BUTTON_SIZE,
  LIST_ITEM_HEIGHT,
} from "./Constants";
import { theme } from "../../styles/index.styled";

interface ListProps extends StyleProps {
  title?: string;
  items: Array<{ title: string; rating: number; id: string }>;
  selected: Set<string>;
  listName: string;
  toggleSelect: (id: string, listName: string) => void;
  addAnime: () => void;
  removeAnime: (id: string) => void;
  editAnime: (id: string, title: string, rating: number) => void;
  isOpen: boolean;
  setOpenList: () => void;
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
  listName,
  title,
  items,
  selected,
  toggleSelect,
  addAnime,
  removeAnime,
  editAnime,
  isOpen,
  setOpenList,

  ...props
}: ListProps) {
  const width = window.innerWidth - BUTTON_SIZE * 2 - LIST_ITEM_PADDING * 2;
  const LineCnt = CalcLineCnt(16, width, items);

  useEffect(() => {
    selected.forEach((item) => toggleSelect(item, listName));
  }, [items]);

  return (
    <div>
      <Header
        onClick={() => {
          setOpenList();
        }}
        isOpen={isOpen}
        onAddAnime={addAnime}
      >
        {title ? title : "List title"}
      </Header>
      <StyledList
        {...props}
        isOpen={isOpen}
        maxHeight={
          items.length === 0 ? LIST_ITEM_HEIGHT : LIST_ITEM_HEIGHT * LineCnt
        }
        height={window.innerHeight - ANIME_TITLE_HEIGHT * 4}
      >
        {
          // if list is empty put default item
          items.length === 0 ? (
            <ListItem
              listName={listName}
              id={"0"}
              toggleSelect={() => {}}
              key={0}
              isSelected={false}
              rating={0}
            >
              {"List is empty"}
            </ListItem>
          ) : (
            items.map(({ title, id, rating }) => {
              const isSelected = selected.has(id);
              return (
                <ListItem
                  listName={listName}
                  id={id}
                  toggleSelect={toggleSelect}
                  isSelected={isSelected}
                  key={id}
                  removeAnime={removeAnime}
                  editAnime={editAnime}
                  rating={rating}
                >
                  {title}
                </ListItem>
              );
            })
          )
        }
      </StyledList>
    </div>
  );
}

export default List;
