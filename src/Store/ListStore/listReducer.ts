import { Action, Types, State, Anime } from "./types";

const initialState: State = {
  anime_seen: [],
  anime_future: [],
  anime_liked: [],
  anime_watching: [],
};

export default function listReducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case Types.ADD_ITEM_TO_LIST:
      return {
        ...state,
        [action.list]: [...state[action.list], action.payload],
      };

    case Types.REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        [action.list]: state[action.list].filter(
          (anime) => anime.id !== action.payload.id
        ),
      };

    case Types.SET_ITEM_RATING:
      return {
        ...state,
        [action.list]: [
          ...state[action.list].filter((a) => a.id !== action.payload.id),
          action.payload,
        ],
      };

    case Types.FETCH:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
}
