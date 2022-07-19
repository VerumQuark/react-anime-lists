import { Action, Types, State, Anime } from "./types";

const initialState: State = {
  anime_seen: [],
  anime_future: [],
  anime_liked: [],
  anime_watching: [],
};

export default function listReducer(state = initialState, action: Action) {
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
          (anime) => anime.title !== action.payload.title
        ),
      };

    case Types.SET_ITEM_RATING:
      const anime: Anime = state[action.list].find(
        (a) => a.title === action.payload.title
      )!;
      anime.rating = action.payload.rating!;
      return {
        ...state,
        [action.list]: [
          ...state[action.list].filter((a) => a.title !== action.payload.title),
          anime,
        ],
      };

    case Types.FETCH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
