import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listReducer from "./ListStore/listReducer";
import appReducer from "./AppStore/appReducer";
import modalReducer from "./ModalStore/modalReducer";

const rootReducer = combineReducers({
  lists: listReducer,
  app: appReducer,
  modal: modalReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
});
