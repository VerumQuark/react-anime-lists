import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import StyledModal, { StyleProps } from "./styles/Modal.styled";
import StyledWrapper from "./styles/Wrapper.styled";
import { closeModal } from "../../Store/ModalStore/actions";

interface ModalProps extends StyleProps {
  children: JSX.Element | JSX.Element[];
  header: string;
}

function Modal({ header, children, ...props }: ModalProps) {
  const dispatch = useDispatch<any>();

  return createPortal(
    <StyledWrapper onClick={(e) => dispatch(closeModal())}>
      <StyledModal
        {...props}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1>{header}</h1>
        {children}
      </StyledModal>
    </StyledWrapper>,
    document.getElementById("modal")!
  );
}

export default Modal;
