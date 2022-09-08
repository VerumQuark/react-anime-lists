import React, { useEffect } from "react";
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
import { ListName } from "../../Store/ListStore/types";

interface ListProps extends StyleProps {
  title?: string;
  items: Array<{ title: string; rating: number; id: string }>;
  selected: Set<string>;
  listName: ListName;
  toggleSelect: (id: string, listName: ListName) => void;
  addAnime: () => void;
  removeAnime: (id: string) => void;
  editAnime: (id: string, title: string, rating: number) => void;
  isOpen: boolean;
  setOpenList: () => void;
}

const CalcListLineCnt = (
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

const CalcItemLineCnt = (
  fontSize: number,
  width: number,
  title: string
): number => {
  const charWidth = fontSize / ROBOTO_MONO_HEIGHT_WIDHT_RATIO;
  return Math.ceil((title.length * charWidth) / width);
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
  const LineCnt = CalcListLineCnt(16, width, items);

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
              height={LIST_ITEM_HEIGHT}
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
                  height={CalcItemLineCnt(16, width, title) * LIST_ITEM_HEIGHT}
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
