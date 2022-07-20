import { State, Types, Action } from "./types";

const initialState: State = {
  list: "",
  isShow: false,
};

export default function modalReducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return {
        ...state,
        list: action.payload.list!,
        isShow: action.payload.isShow,
      };

    case Types.CLOSE_MODAL:
      return { ...state, list: "", isShow: action.payload.isShow };

    default:
      return { ...state };
  }
}
