import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listReducer from "./ListStore/listReducer";

export default configureStore({
  reducer: combineReducers({
    lists: listReducer,
  }),
});
