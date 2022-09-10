import React from "react";
import { useDispatch } from "react-redux";
import StyledModal, { StyleProps } from "./styles/Modal.styled";
import StyledWrapper from "./styles/Wrapper.styled";
import { closeModal } from "../../Store/ModalStore/actions";
import { useSelector } from "react-redux";
import { State } from "../../Store";

interface ModalProps extends StyleProps {
  children: JSX.Element | JSX.Element[];
  header: string;
}

function Modal({ header, children, ...props }: ModalProps) {
  const dispatch = useDispatch<any>();

  // Чтобы знать когда какую анимацию включить
  const isAnimationPending = useSelector<State, boolean>(
    (state) => state.modal.isAnimationPending
  );
  const isClosing = useSelector<State, boolean>(
    (state) => state.modal.isClosing
  );

  return <StyledWrapper
      onClick={() => dispatch(closeModal())}
      isAnimationPending={isAnimationPending}
      isClosing={isClosing}
    >
      <StyledModal
        {...props}
        isAnimationPending={isAnimationPending}
        onClick={(e) => {
          e.stopPropagation();
        }}
        isClosing={isClosing}
      >
        <h1>{header}</h1>
        {children}
      </StyledModal>
    </StyledWrapper>
}

export default Modal;
