import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import ListItem from "./ListItem";
import StyledList, { StyleProps } from "./styles/List.styled";
import Header from "../Header";
import {
  ANIME_TITLE_HEIGHT,
  LIST_ITEM_PADDING,
  ROBOTO_MONO_HEIGHT_WIDHT_RATIO,
} from "./Constants";
import { theme } from "../../styles/index.styled";

interface ListProps extends StyleProps {
  title?: string;
  items: Array<{ title: string; rating: number; id: string }>;
  selected: Set<string>;
  toggleSelect: (arg: string) => void;
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
  const width =
    window.innerWidth - ANIME_TITLE_HEIGHT * 2 - LIST_ITEM_PADDING * 2;
  const LineCnt = CalcLineCnt(16, width, items);

  useEffect(() => {
    selected.forEach((item) => toggleSelect(item));
  }, [items]);

  return (
    <>
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
              rating={0}
            >
              {"List is empty"}
            </ListItem>
          ) : (
            items.map(({ title, id, rating }) => {
              const isSelected = selected.has(id);
              return (
                <ListItem
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
    </>
  );
}

export default List;
