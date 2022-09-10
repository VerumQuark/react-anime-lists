import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listReducer from "./ListStore/listReducer";
import appReducer from "./AppStore/appReducer";
import modalReducer from "./ModalStore/modalReducer";
import notificationReducer from "./NotificationStore/NotificationSlice";

const rootReducer = combineReducers({
  lists: listReducer,
  app: appReducer,
  modal: modalReducer,
  notification: notificationReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default (initialState: { [key: string]: any }) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
