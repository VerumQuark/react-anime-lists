import React from "react";
import Button from "./Button";
import Title from "./Title";
import StyledHeader from "./styles/Header.styled";

interface HeaderProps {
  children: string;
  onClick: () => void;
  addAnime: () => void;
}

function Header({ addAnime, ...titleProps }: HeaderProps) {
  return (
    <StyledHeader>
      <Title {...titleProps}></Title>
      <Button addAnime={addAnime}>Add</Button>
    </StyledHeader>
  );
}

export default Header;
