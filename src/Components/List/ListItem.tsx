import React from "react";
import Button from "../Button";
import StyledLi, { StyleProps } from "./styles/ListItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSwipe } from "../../hooks";
import { removeAnimeFromList } from "../../Store/ListStore/actions";
import { BUTTON_SIZE } from "./Constants";

interface ListItemProps extends StyleProps {
  listName: string;
  toggleSelect: (id: string, listName: string) => void;
  id: string;
  rating: number;
  children: any;
  removeAnime?: (id: string) => void;
  editAnime?: (id: string, title: string, rating: number) => void;
}

function ListItem({
  listName,
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
    toggleSelect(id, listName);
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
      <p>{children}</p>
      {editAnime && removeAnime && (
        <div
          style={{
            height: BUTTON_SIZE,
            width: BUTTON_SIZE * 2,
            flex: "0 0 auto",
          }}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              editAnime(id, children, rating);
            }}
            borderless
            width="50%"
          >
            <FontAwesomeIcon icon={faPencil} />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              removeAnime(id);
            }}
            borderless
            width="50%"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      )}
    </StyledLi>
  );
}

export default ListItem;
