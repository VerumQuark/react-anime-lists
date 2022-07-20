import { Dispatch } from "react";
import { Action, Types } from "./types";

export function causeError(errorMessage: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.CAUSE_ERROR,
      payload: {
        error: errorMessage,
      },
    });
  };
}

export function clearError() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.CLEAR_ERROR,
      payload: {
        error: "",
      },
    });
  };
}
