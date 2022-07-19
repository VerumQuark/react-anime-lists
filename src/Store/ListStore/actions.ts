import { Types } from "./types";
import { Dispatch } from "redux";
import { ListName, Action, State, Anime } from "./types";
import axios, { AxiosResponse } from "axios";

export function fetchAnimeLists(uid: number) {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<State> = await axios.get<State>(
        `http://localhost:5000/animeLists/${uid}`
      );

      if (![200, 201, 204].includes(response.status)) {
        throw new Error("Can't fetch lists");
      }

      const lists: State = response.data;

      dispatch({
        type: Types.FETCH,
        payload: lists,
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}

export function addAnimeToList(
  listName: ListName,
  animeTitle: string,
  rating: number,
  uid: number
) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post<Anime>(
        `http://localhost:5000/animeLists/${uid}/${listName}`,
        {
          listName,
          title: animeTitle,
          rating,
        }
      );

      if (![200, 201, 204].includes(response.status)) {
        throw new Error("Can't add to list");
      }

      const anime = response.data;

      dispatch({
        type: Types.ADD_ITEM_TO_LIST,
        payload: anime,
        list: listName,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: Types.ADD_ITEM_TO_LIST,
        payload: {
          title: animeTitle,
          id: "0",
          rating: rating,
        },
        list: listName,
      });
      throw err;
    }
  };
}

export function removeAnimeFromList(
  listName: ListName,
  animeTitle: string,
  uid: number
) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/animeLists/${uid}/${listName}/${animeTitle}`
      );

      if (![200, 201, 204].includes(response.status)) {
        throw new Error("Can't remove from list");
      }

      const anime = response.data;

      dispatch({
        type: Types.REMOVE_ITEM_FROM_LIST,
        payload: anime,
        list: listName,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: Types.REMOVE_ITEM_FROM_LIST,
        payload: {
          title: animeTitle,
          id: "0",
        },
        list: listName,
      });
      throw err;
    }
  };
}

export function setAnimeRating(
  listName: ListName,
  animeTitle: string,
  rating: number,
  uid: number
) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.delete(
        `http://localhost:5000/animeLists/${uid}/${listName}/${animeTitle}`
      );

      const response = await axios.post<Anime>(
        `http://localhost:5000/animeLists/${uid}/${listName}`,
        {
          listName,
          title: animeTitle,
          rating,
        }
      );

      if (![200, 201, 204].includes(response.status)) {
        throw new Error("Can't add to list");
      }

      const anime = response.data;

      dispatch({
        type: Types.SET_ITEM_RATING,
        payload: anime,
        list: listName,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: Types.SET_ITEM_RATING,
        payload: {
          title: animeTitle,
          id: "0",
          rating: rating,
        },
        list: listName,
      });
      throw err;
    }
  };
}
