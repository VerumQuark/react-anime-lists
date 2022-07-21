import { Dispatch } from "react";
import { Action, Types } from "./types";

export function showModal(listName: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.SHOW_MODAL,
      payload: {
        list: listName,
      },
    });
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch({
          type: Types.STOP_ANIMATION,
          payload: {},
        });
        resolve();
      }, 500);
    });
  };
}

export function closeModal() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.START_ANIMATION,
      payload: {},
    });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch({
          type: Types.CLOSE_MODAL,
          payload: {},
        });
        resolve();
      }, 500);
    });
  };
}
