import { State, Types, Action } from "./types";

const initialState: State = {
  error: null,
};

export default function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case Types.CAUSE_ERROR:
      return { ...state, error: action.payload.error };

    case Types.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return { ...state };
  }
}
