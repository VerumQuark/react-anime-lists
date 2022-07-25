import React from "react";
import Button from "../Button";
import StyledLi, { StyleProps } from "./styles/ListItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

interface ListItemProps extends StyleProps {
  toggleSelect: (arg: string | number) => void;
  id: string;
  children: any;
  removeAnime?: (id: string) => void;
}

function ListItem({
  toggleSelect,
  id,
  children,
  isSelected,
  removeAnime,
}: ListItemProps) {
  const dispatch = useDispatch();

  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi key={id} onClick={onClick} isSelected={isSelected}>
      {children}
      {removeAnime && (
        <div style={{ height: 40, width: 40 }}>
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
