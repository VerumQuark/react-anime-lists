import React from "react";
import Button from "../Button";
import StyledLi, { StyleProps } from "./styles/ListItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSwipe } from "../../hooks";
import { removeAnimeFromList } from "../../Store/ListStore/actions";
import { BUTTON_SIZE } from "./Constants";
import { ListName } from "../../Store/ListStore/types";
import { showNotification } from "../../Store/NotificationStore/actions";

interface ListItemProps extends StyleProps {
  listName: ListName;
  toggleSelect: (id: string, listName: ListName) => void;
  id: string;
  rating: number;
  children: any;
  removeAnime?: (id: string) => void;
  editAnime?: (id: string, title: string, rating: number) => void;
  height: number;
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
  height,
}: ListItemProps) {
  const [onTouchStart, onTouchEnd, onTouchMove, xMove, isLeftSwipe] = useSwipe({
    onSwipeLeft: onSwipeLeft,
    onSwipeRight: onSwipeRight,
    delta: 50,
    distance: 100,
  });

  function onSwipeLeft() {
    removeAnime && removeAnime(id);
    showNotification("Видалення успішне");
  }

  function onSwipeRight() {
    editAnime && editAnime(id, children, rating);
  }

  function onClick() {
    toggleSelect(id, listName);
  }

  const swipeIcon = isLeftSwipe ? faPencil : faTrashCan;

  return (
    <StyledLi
      key={id}
      onClick={onClick}
      isSelected={isSelected}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      xMove={xMove}
      height={height}
      isLeftSwipe={isLeftSwipe}
      shiftSize={28}
    >
      <FontAwesomeIcon className="slideActionIcon" icon={swipeIcon} />
      <div className="listItem">
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
                showNotification("Видалення успішне");
              }}
              borderless
              width="50%"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </div>
        )}
      </div>
    </StyledLi>
  );
}

export default ListItem;
