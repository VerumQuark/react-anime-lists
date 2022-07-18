import React from "react";
import StyledButton from "./styles/Button.styled";

interface ButtonProps {
  children: string;
  addAnime: () => void;
}

function Button({ children, addAnime }: ButtonProps) {
  return <StyledButton onClick={addAnime}>{children}</StyledButton>;
}

export default Button;
