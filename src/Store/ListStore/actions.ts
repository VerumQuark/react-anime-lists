import { Types } from "./types";
import { causeError } from "../AppStore/actions";
import { Dispatch } from "redux";
import { ListName, Action, State, Anime } from "./types";
import axios, { AxiosResponse, AxiosError } from "axios";

export function fetchAnimeLists(uid: number) {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse<State> = await axios.get<State>(
        `http://localhost:5000/animeLists/${uid}`
      );

      const lists: State = response.data;

      dispatch({
        type: Types.FETCH,
        payload: lists,
      });
    } catch (err) {
      let errorExplain: string;

      if (err instanceof AxiosError) {
        errorExplain = err.response?.data
          ? err.response.data
          : "Network Error or Server Shut down";

        dispatch<any>(causeError(errorExplain));

        console.error(`Request Error - ${errorExplain}`);
      } else {
        console.error(err);
      }
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
      const response = await axios.post<any>(
        `http://localhost:5000/animeLists/${uid}`,
        {
          list: listName,
          title: animeTitle,
          rating,
        }
      );

      console.log(response.statusText);
      const anime = response.data;

      dispatch({
        type: Types.ADD_ITEM_TO_LIST,
        payload: anime,
        list: listName,
      });
    } catch (err) {
      let errorExplain: string;

      if (err instanceof AxiosError) {
        errorExplain = err.response?.data
          ? err.response.data.message
          : err.response?.statusText;

        dispatch<any>(causeError(errorExplain));

        console.error(`Request Error - ${errorExplain}`);
      } else {
        console.error(err);
      }
    }
  };
}

export function removeAnimeFromList(
  listName: ListName,
  id: string,
  uid: number
) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.delete(
        `http://localhost:5000/animeLists/${uid}/${listName}/${id}`
      );

      dispatch({
        type: Types.REMOVE_ITEM_FROM_LIST,
        payload: {
          id,
        },
        list: listName,
      });
    } catch (err) {
      let errorExplain: string;

      if (err instanceof AxiosError) {
        errorExplain = err.response?.data
          ? err.response.data
          : "Network Error or Server Shut down";

        dispatch<any>(causeError(errorExplain));

        console.error(`Request Error - ${errorExplain}`);
      } else {
        dispatch<any>(causeError((err as Error).message));

        console.error(err);
      }
    }
  };
}

export function setAnimeRating(
  listName: ListName,
  id: string,
  animeTitle: string,
  rating: number,
  uid: number
) {
  return async (dispatch: Dispatch<any>) => {
    await removeAnimeFromList(listName, id, uid)(dispatch);
    await addAnimeToList(listName, animeTitle, rating, uid)(dispatch);
  };
}
