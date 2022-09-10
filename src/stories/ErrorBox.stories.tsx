import React from "react";

import ErrorBox from "../Common/ErrorBox";

import { Provider } from "react-redux";

import createStore from "../Store";

export default {
  title: "Common/ErrorBox",
  decorators: [
    (Story: any) => (
      <Provider
        store={createStore({
          app: {
            error: "Some error",
          },
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};

export const SimpleError = () => <ErrorBox />;

export const CriticalError = () => <ErrorBox critical />;

export const WarningError = () => <ErrorBox warning />;
