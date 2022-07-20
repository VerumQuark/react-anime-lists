import React, { ChangeEventHandler, MouseEventHandler, Ref } from "react";
import StyledInput, { StyleProps } from "./styles/Input.styled";

interface InputProps extends StyleProps {
  value: string | number;
  type: "text" | "button";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  ref?: Ref<HTMLInputElement>;
  pattern?: string;
}

function Input({
  type,
  ref,
  onChange,
  onClick,
  value,
  pattern,
  ...props
}: InputProps) {
  return (
    <StyledInput
      ref={ref}
      onChange={onChange}
      type={type}
      value={value}
      pattern={pattern}
      onClick={onClick}
      {...props}
    />
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
