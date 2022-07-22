import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import store from "../Store";
import { Provider } from "react-redux";
import axios from "axios";
import { act } from "react-dom/test-utils";

const response = {
  anime_seen: [
    {
      title: "Title1",
      rating: 23,
      id: "0",
    },
    {
      title: "Title2",
      rating: 53,
      id: "1",
    },
    {
      title: "Title3",
      rating: 2,
      id: "2",
    },
    {
      title: "Title4",
      rating: 6,
      id: "3",
    },
  ],
  anime_future: [
    {
      title: "Title1",
      rating: 23,
      id: "0",
    },
    {
      title: "Title2",
      rating: 53,
      id: "1",
    },
    {
      title: "Title3",
      rating: 2,
      id: "2",
    },
    {
      title: "Title4",
      rating: 6,
      id: "3",
    },
  ],
  anime_liked: [
    {
      title: "Title1",
      rating: 23,
      id: "0",
    },
    {
      title: "Title2",
      rating: 53,
      id: "1",
    },
    {
      title: "Title3",
      rating: 2,
      id: "2",
    },
    {
      title: "Title4",
      rating: 6,
      id: "3",
    },
  ],
  anime_watching: [
    {
      title: "Title1",
      rating: 23,
      id: "0",
    },
    {
      title: "Title2",
      rating: 53,
      id: "1",
    },
    {
      title: "Title3",
      rating: 2,
      id: "2",
    },
    {
      title: "Title4",
      rating: 6,
      id: "3",
    },
  ],
};

jest.mock("axios");
const mockedGet = axios.get as jest.MockedFunction<typeof axios.get>;

describe("Testing whole App", () => {
  beforeEach(() => {
    act(() => {
      mockedGet.mockResolvedValue({ data: response });
    });
  });

  it("Render without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("List headers rendered", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const lists = await screen.findAllByRole("list");

    lists.forEach(async (list) => {
      const animes = await within(list).findAllByRole("listitem");

      animes.forEach((anime) => {
        expect(anime).toHaveTextContent(/^Title./);
      });
    });
  });
});
