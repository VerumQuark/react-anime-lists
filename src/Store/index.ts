import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listReducer from "./ListStore/listReducer";
import appReducer from "./AppStore/appReducer"

const rootReducer = combineReducers({
  lists: listReducer,
  app: appReducer
})

export type State = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: combineReducers({
    lists: listReducer,
    app: appReducer
  }),
});
