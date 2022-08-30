import {
  close,
  show,
  startCloseAnimation,
  stopOpeningAnimation,
} from "./NotificationSlice";
import store from "../index";

export async function showNotification(message: string) {
  store.dispatch(show(message));

  await new Promise((resolve) => setTimeout(resolve, 500));
  store.dispatch(stopOpeningAnimation());

  await new Promise((resolve) => setTimeout(resolve, 1500));
  store.dispatch(startCloseAnimation());

  await new Promise((resolve) => setTimeout(resolve, 500));
  store.dispatch(close());
}

export async function closeNotification() {
  store.dispatch(startCloseAnimation());

  await new Promise((resolve) => setTimeout(resolve, 500));

  store.dispatch(close());
}
