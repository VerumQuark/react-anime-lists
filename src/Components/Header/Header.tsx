import React from "react";
import Button from "../Button";
import Title from "./Title";
import StyledHeader from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

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
          height: 49,
          width: 98,
          position: "absolute",
          right: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ height: 49, width: 49, minWidth: 49 }}>
          <Button onClick={addAnime} borderless>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
        <div style={{ height: 49, width: 49, minWidth: 49 }}>
          <Button onClick={onClick} borderless>
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
