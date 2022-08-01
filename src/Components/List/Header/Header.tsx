import React from "react";
import Button from "../../Button";
import Title from "./Title";
import StyledHeader from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { BUTTON_SIZE } from "../Constants";

interface HeaderProps {
  children: string;
  onClick: () => void;
  onAddAnime: () => void;
  isOpen: boolean;
}

function Header({
  onAddAnime: addAnime,
  isOpen,
  onClick,
  ...props
}: HeaderProps) {
  return (
    <StyledHeader>
      <Title {...props} onClick={onClick}></Title>
      <div
        style={{
          height: BUTTON_SIZE,
          width: BUTTON_SIZE * 2,
          position: "absolute",
          right: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: BUTTON_SIZE,
            width: BUTTON_SIZE,
            minWidth: BUTTON_SIZE,
          }}
        >
          <Button onClick={addAnime} borderless>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
        <div
          style={{
            height: BUTTON_SIZE,
            width: BUTTON_SIZE,
            minWidth: BUTTON_SIZE,
          }}
        >
          <Button onClick={onClick} borderless>
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
