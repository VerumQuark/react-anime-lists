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
    currentOpenListName === listName
      ? setOpenListName("")
      : setOpenListName(listName);
  };

  return (
    <>
      {isShowModal && modal}
      {error && <ErrorBox />}
      <List
        title="Переглянуті"
        items={anime_seen}
        selected={selected}
        toggleSelect={toggleSelect}
        isBorderCollapse
        addAnime={addAnime("anime_seen")}
        removeAnime={removeAnime("anime_seen")}
        editAnime={editAnime("anime_seen")}
        isOpen={"anime_seen" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_seen")}
      />
      <List
        title="Заплановані"
        items={anime_future}
        selected={selected1}
        toggleSelect={toggleSelect1}
        isBorderCollapse
        addAnime={addAnime("anime_future")}
        removeAnime={removeAnime("anime_future")}
        editAnime={editAnime("anime_future")}
        isOpen={"anime_future" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_future")}
      />
      <List
        title="Вподобайки"
        items={anime_liked}
        selected={selected2}
        toggleSelect={toggleSelect2}
        isBorderCollapse
        addAnime={addAnime("anime_liked")}
        removeAnime={removeAnime("anime_liked")}
        editAnime={editAnime("anime_liked")}
        isOpen={"anime_liked" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_liked")}
      />
      <List
        title="Дивлюся"
        items={anime_watching}
        selected={selected3}
        toggleSelect={toggleSelect3}
        isBorderCollapse
        addAnime={addAnime("anime_watching")}
        removeAnime={removeAnime("anime_watching")}
        editAnime={editAnime("anime_watching")}
        isOpen={"anime_watching" === currentOpenListName ? true : false}
        setOpenList={() => setOpenList("anime_watching")}
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
