export enum Types {
  ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST",
  REMOVE_ITEM_FROM_LIST = "REMOVE_ITEM_FROM_LIST",
  REMOVE_MANY_ITEMS_FROM_LIST = "REMOVE_MANY_ITEMS_FROM_LIST",
  SET_ITEM_RATING = "SET_ITEM_RATING",
  FETCH = "FETCH",
}

export type ListName =
  | "anime_watching"
  | "anime_seen"
  | "anime_liked"
  | "anime_future";

export type Action = {
  type:
    | Types.ADD_ITEM_TO_LIST
    | Types.REMOVE_ITEM_FROM_LIST
    | Types.REMOVE_MANY_ITEMS_FROM_LIST
    | Types.SET_ITEM_RATING
    | Types.FETCH;
  payload: Partial<Anime> | { id: string[] };
  list: ListName;
};

export type State = {
  anime_seen: [] | Anime[];
  anime_future: [] | Anime[];
  anime_liked: [] | Anime[];
  anime_watching: [] | Anime[];
};

export type Anime = {
  title: string;
  rating: number;
  id: string;
};
