import React from "react";
import StyledTitle from "./styles/Title.styled";

interface TitleProps {
  children: string;
  onClick: () => void;
}

function Title(props: TitleProps) {
  return (
    <StyledTitle {...props} />
  );
}

export default Title;
