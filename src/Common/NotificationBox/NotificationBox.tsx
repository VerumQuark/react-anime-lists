import React from "react";
import StyledNotificationBox, {
  StyleProps,
} from "./styles/NotificationBox.styled";
import { useSelector } from "react-redux";
import { State } from "../../Store";
import Button from "../../Components/Button";
import { theme } from "../../styles/index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeNotification } from "../../Store/NotificationStore/actions";

function NotificationBox(props: StyleProps) {
  const message = useSelector<State, string>(
    (state) => state.notification.message
  );

  return <StyledNotificationBox {...props}>
      {message}
      <div style={{ position: "absolute", right: 0, height: 40, width: 40 }}>
        <Button
          onClick={() => {
            closeNotification;
          }}
          background={theme.colors.primary}
          borderless
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
    </StyledNotificationBox>
}
export default NotificationBox;
