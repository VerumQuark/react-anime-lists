import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import createStore from "./Store";
import GlobalStyles from "./styles/index.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const store = createStore({});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
