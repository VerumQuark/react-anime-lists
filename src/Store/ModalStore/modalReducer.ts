import { State, Types, Action } from "./types";

const initialState: State = {
  list: "",
  isShow: false,
  isAnimationPending: false,
  isClosing: false,
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
        isShow: true,
        isAnimationPending: true,
      };

    case Types.CLOSE_MODAL:
      return initialState;

    case Types.STOP_ANIMATION:
      return {
        ...state,
        isAnimationPending: false,
      };

    case Types.START_ANIMATION:
      return {
        ...state,
        isAnimationPending: true,
        isClosing: true,
      };

    default:
      return { ...state };
  }
}
