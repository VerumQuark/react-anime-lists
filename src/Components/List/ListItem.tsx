import React from "react";
import Button from "../Button";
import StyledLi, { StyleProps } from "./styles/ListItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSwipe } from "../../hooks";
import { removeAnimeFromList } from "../../Store/ListStore/actions";
import { ANIME_TITLE_HEIGHT } from "./Constants";

interface ListItemProps extends StyleProps {
  toggleSelect: (arg: string | number) => void;
  id: string;
  rating: number;
  children: any;
  removeAnime?: (id: string) => void;
  editAnime?: (id: string, title: string, rating: number) => void;
}

function ListItem({
  toggleSelect,
  id,
  children,
  isSelected,
  removeAnime,
  editAnime,
  rating,
}: ListItemProps) {
  const dispatch = useDispatch();
  const [onTouchStart, onTouchEnd, onTouchMove, xMove] = useSwipe({
    onSwipeLeft: onSwipeLeft,
    onSwipeRight: onSwipeRight,
  });

  function onSwipeLeft() {
    removeAnime && removeAnime(id);
  }

  function onSwipeRight() {
    editAnime && editAnime(id, children, rating);
  }

  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi
      key={id}
      onClick={onClick}
      isSelected={isSelected}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      xMove={xMove}
    >
      {children}
      {removeAnime && (
        <div style={{ height: ANIME_TITLE_HEIGHT, width: ANIME_TITLE_HEIGHT }}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              removeAnime(id);
            }}
            borderless
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      )}
    </StyledLi>
  );
}

export default ListItem;
