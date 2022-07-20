import { State, Types, Action } from "./types";

const initialState: State = {
  error: "",
};

export default function appReducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case Types.CAUSE_ERROR:
      return { ...state, error: action.payload.error };

    case Types.CLEAR_ERROR:
      return { ...state, error: "" };

    default:
      return { ...state };
  }
}
