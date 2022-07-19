import React, { useState, useEffect } from "react";
import { List } from "./Components";
import { useSelectableList } from "./hooks";
import axios, { AxiosResponse } from "axios";

type ListResponse = [
  {
    title: string;
    id: string;
  }
];

function App() {
  // TODO
  // clean selected items on fetch
  const [selected, toggleSelect] = useSelectableList();
  const [selected1, toggleSelect1] = useSelectableList();
  const [selected2, toggleSelect2] = useSelectableList();
  const [selected3, toggleSelect3] = useSelectableList();
  const [fetchedList, setFetchedList] = useState<
    ListResponse[] | [[], [], [], []]
  >([[], [], [], []]);

  useEffect(() => {
    (async () => {
      await fetchList();
    })();
  }, []);

  const fetchList = async () => {
    const response: AxiosResponse<ListResponse[]> = await axios.get<
      ListResponse[]
    >("http://localhost:5000/animeLists");

    if (![200, 201, 204].includes(response.status)) {
      console.error(response);
      return;
    }

    const data: ListResponse[] = response.data;

    setFetchedList(data);
  };

  enum DICT {
    WATCHED = "anime_watching",
    SEEN = "anime_seen",
    LIKED = "anime_liked",
    FUTURE = "anime_future",
  }

  const addAnimeToList: (list: string) => () => void = (list: string) => {
    const listName = list;
    return () => {
      const title = window.prompt("Enter the title");
      const userId = 308041205;

      if (title !== null) {
        axios
          .post(`http://localhost:5000/animeLists/${userId}`, {
            listName,
            title,
          })
          .then((data) => {
            (async () => {
              await fetchList();
            })();
          })
          .catch((err) => {
            if (err.response.status)
              window.alert("Це аніме вже знаходиться у цьому списку");
          });
      }
    };
  };

  return (
    <>
      <List
        title="Переглянуті"
        items={fetchedList[0]}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        addAnime={addAnimeToList(DICT.SEEN)}
      />
      <List
        title="Заплановані"
        items={fetchedList[1]}
        selected={selected1}
        toggleSelect={toggleSelect1}
        isBorderCollapse
        addAnime={addAnimeToList(DICT.FUTURE)}
      />
      <List
        title="Вподобайки"
        items={fetchedList[2]}
        selected={selected2}
        toggleSelect={toggleSelect2}
        isBorderCollapse
        addAnime={addAnimeToList(DICT.LIKED)}
      />
      <List
        title="Дивлюся"
        items={fetchedList[3]}
        selected={selected3}
        toggleSelect={toggleSelect3}
        isBorderCollapse
        addAnime={addAnimeToList(DICT.WATCHED)}
      />
      <button onClick={() => alert([...selected].join("\n"))}>
        Show selected items1
      </button>
      <button onClick={() => alert([...selected1].join("\n"))}>
        Show selected items2
      </button>
      <button onClick={() => alert([...selected2].join("\n"))}>
        Show selected items3
      </button>
      <button onClick={() => alert([...selected3].join("\n"))}>
        Show selected items4
      </button>
    </>
  );
}

export default App;
