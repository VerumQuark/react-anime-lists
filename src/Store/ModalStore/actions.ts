import { Dispatch } from "react";
import { Action, Types } from "./types";

export function showModal(listName: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.SHOW_MODAL,
      payload: {
        list: listName,
        isShow: true,
      },
    });
  };
}

export function closeModal() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.CLOSE_MODAL,
      payload: {
        isShow: false,
      },
    });
  };
}
