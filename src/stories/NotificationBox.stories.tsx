import React from "react";

import NotificationBox from "../Common/NotificationBox";

import { Provider } from "react-redux";

import createStore from "../Store";

export default {
  title: "Common/NotificationBox",
  decorators: [
    (Story: any) => (
      <Provider
        store={createStore({
          notification: {
            message: "Notification",
          },
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};

export const Notification = () => (
  <NotificationBox isAnimationPending={false} isClosing={false} />
);
