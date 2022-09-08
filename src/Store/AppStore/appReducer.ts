import { State, Types, Action } from "./types";

const initialState: State = {
  error: undefined,
  loading: false
};

export default function appReducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case Types.CAUSE_ERROR:
      return { ...state, error: action?.payload?.error };

    case Types.CLEAR_ERROR:
      return { ...state, error: undefined };

    case Types.START_LOAD:
      return {...state, loading: true };

    case Types.END_LOAD:
      return {...state, loading: false };

    default:
      return { ...state };
  }
}
