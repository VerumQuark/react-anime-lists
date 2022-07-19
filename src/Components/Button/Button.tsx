import React, { Component } from "react";
import StyledButton from "./styles/Button.styled";

interface ButtonProps {
  children: string | JSX.Element;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
