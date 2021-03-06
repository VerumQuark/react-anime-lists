import React, { useEffect, useState } from "react";
import ErrorBox from "./Common/ErrorBox";
import { useSelectableList } from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { State as ListState } from "./Store/ListStore/types";
import { State } from "./Store";
import { ListName } from "./Store/ListStore/types";
import { List } from "./Components";
import {
  fetchAnimeLists,
  removeAnimeFromList,
} from "./Store/ListStore/actions";
import AddModal from "./Components/AddModal";
import { showModal } from "./Store/ModalStore/actions";
import EditModal from "./Components/EditModal";

const userId = 308041205;
(window as any).uid = userId;

function App() {
  // TODO
  // clean selected items on fetch
  const [selected, toggleSelect] = useSelectableList();

  const dispatch = useDispatch<any>();

  // Take lists from redux state
  const { anime_seen, anime_future, anime_liked, anime_watching } = useSelector<
    State,
    ListState
  >((state) => state.lists);

  // Take error form redux state
  const error = useSelector<State, string>((state) => state.app.error);
  const isShowModal = useSelector<State, boolean>(
    (state) => state.modal.isShow
  );
  const modal = useSelector<State, JSX.Element>((state) => state.modal.modal);

  useEffect(() => {
    dispatch(fetchAnimeLists(userId));
  }, []);

  function addAnime(list: ListName) {
    return () => dispatch(showModal(list, <AddModal />));
  }

  function editAnime(list: ListName) {
    return (id: string, title: string, rating: number) =>
      dispatch(
        showModal(list, <EditModal id={id} title={title} rating={rating} />)
      );
  }

  function removeAnime(list: ListName) {
    return (id: string) =>
      dispatch(removeAnimeFromList(list, id, (window as any).uid));
  }

  const [currentOpenListName, setOpenListName] = useState("");
  const setOpenList = (listName: string): void => {
    let openListName = "";
    currentOpenListName === listName
      ? (openListName = "")
      : (openListName = listName);

    setOpenListName(openListName);
    toggleSelect("", openListName);
  };

  return (
    <>
      {isShowModal && modal}
      {error && <ErrorBox />}
      <List
        title="??????????????????????"
        items={anime_seen}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        listName={"anime_seen"}
        addAnime={addAnime("anime_seen")}
        removeAnime={removeAnime("anime_seen")}
        editAnime={editAnime("anime_seen")}
        isOpen={"anime_seen" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_seen")}
      />
      <List
        title="??????????????????????"
        items={anime_future}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        listName={"anime_future"}
        addAnime={addAnime("anime_future")}
        removeAnime={removeAnime("anime_future")}
        editAnime={editAnime("anime_future")}
        isOpen={"anime_future" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_future")}
      />
      <List
        title="????????????????????"
        items={anime_liked}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        listName={"anime_liked"}
        addAnime={addAnime("anime_liked")}
        removeAnime={removeAnime("anime_liked")}
        editAnime={editAnime("anime_liked")}
        isOpen={"anime_liked" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_liked")}
      />
      <List
        title="??????????????"
        items={anime_watching}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        listName={"anime_watching"}
        addAnime={addAnime("anime_watching")}
        removeAnime={removeAnime("anime_watching")}
        editAnime={editAnime("anime_watching")}
        isOpen={"anime_watching" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_watching")}
      />
    </>
  );
}

/*
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
      </button>*/

export default App;
