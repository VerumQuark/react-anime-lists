import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "./Components";
import { useSelectableList } from "./hooks";
import { addAnimeToList, fetchAnimeLists } from "./Store/ListStore/actions";
import { State as ListState } from "./Store/ListStore/types";
import { clearError } from "./Store/AppStore/actions";
import { State } from "./Store";
import { ListName } from "./Store/ListStore/types";

const userId = 308041205;

function App() {
  // TODO
  // clean selected items on fetch
  const [selected, toggleSelect] = useSelectableList();
  const [selected1, toggleSelect1] = useSelectableList();
  const [selected2, toggleSelect2] = useSelectableList();
  const [selected3, toggleSelect3] = useSelectableList();

  const dispatch = useDispatch<any>();

  // Take lists from redux state
  const { anime_seen, anime_future, anime_liked, anime_watching } = useSelector<
    State,
    ListState
  >((state) => state.lists);

  // Take error form redux state
  const error = useSelector<State, string | null>((state) => state.app.error);

  useEffect(() => {
    dispatch(fetchAnimeLists(userId));
  }, []);

  function addAnime(list: ListName) {
    const title = prompt()!;
    const rating = Number(prompt());

    dispatch(addAnimeToList(list, title, rating, userId));
  }

  return (
    <>
      {error && (
        <>
          <div
            style={{ width: "100%", height: "60px", backgroundColor: "red" }}
            onClick={() => dispatch(clearError())}
          >
            {error}
          </div>
        </>
      )}
      <List
        title="Переглянуті"
        items={anime_seen}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        addAnime={() => addAnime("anime_seen")}
      />
      <List
        title="Заплановані"
        items={anime_future}
        selected={selected1}
        toggleSelect={toggleSelect1}
        isBorderCollapse
        addAnime={() => addAnime("anime_seen")}
      />
      <List
        title="Вподобайки"
        items={anime_liked}
        selected={selected2}
        toggleSelect={toggleSelect2}
        isBorderCollapse
        addAnime={() => addAnime("anime_seen")}
      />
      <List
        title="Дивлюся"
        items={anime_watching}
        selected={selected3}
        toggleSelect={toggleSelect3}
        isBorderCollapse
        addAnime={() => addAnime("anime_seen")}
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
