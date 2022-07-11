import React from "react";
import StyledHeader from "./styles/Header.styled"

interface HeaderProps {
    children: string;
    onClick: () => void;
}

function  Header (props: HeaderProps) {
  return (
    <StyledHeader {...props}/>
  )
}

export default Header