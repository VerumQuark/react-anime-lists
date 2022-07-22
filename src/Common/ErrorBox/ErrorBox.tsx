import React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store";
import { clearError } from "../../Store/AppStore/actions";
import Button from "../../Components/Button";
import StyledErrorBox, { StyleProps } from "./styles/ErrorBox.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ErrorBoxProps extends StyleProps {}

function ErrorBox(props: ErrorBoxProps) {
  const dispatch = useDispatch<any>();
  const reduxError = useSelector<State, string>((state) => state.app.error);

  return createPortal(
    <StyledErrorBox {...props}>
      {reduxError}
      <div style={{ position: "absolute", right: 0, height: 40, width: 40 }}>
        <Button onClick={() => dispatch(clearError())}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
    </StyledErrorBox>,
    document.getElementById("error")!
  );
}

export default ErrorBox;
