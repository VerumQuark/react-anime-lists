import React from "react";
import Modal from "../Common/Modal";

import AddModal from "../Components/AddModal";
import EditModal from "../Components/EditModal";

import createStore from "../Store";

import { Provider } from "react-redux";

export default {
  title: "Components/Modal",
  decorators: [
    (Story: any) => (
      <Provider
        store={createStore({
          modal: {
            list: "Test list",
          },
        })}
      >
        <Story />
      </Provider>
    ),
  ],
};

export const Add = () => <AddModal />;
export const Edit = () => <EditModal id="123" title="title" rating={12} />;
