import React from "react";
import Button from "../Button";
import Title from "./Title";
import StyledHeader from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  children: string;
  onClick: () => void;
  onAddAnime: () => void;
}

function Header({ onAddAnime: addAnime, ...titleProps }: HeaderProps) {
  return (
    <StyledHeader>
      <Title {...titleProps}></Title>
      <Button onClick={addAnime}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </StyledHeader>
  );
}

export default Header;
