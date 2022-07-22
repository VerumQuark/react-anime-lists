import React, { Component } from "react";
import StyledButton, { StyleProps } from "./styles/Button.styled";

interface ButtonProps extends StyleProps {
  children: string | JSX.Element;
  onClick: () => void;
}

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
