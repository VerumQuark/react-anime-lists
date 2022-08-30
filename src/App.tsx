import React, { useEffect, useState } from "react";
import ErrorBox from "./Common/ErrorBox";
import NotificationBox from "./Common/NotificationBox";
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
import ActionMenu from "./Components/ActionMenu/ActionMenu";
import { theme } from "./styles/index.styled";

import {
  closeNotification,
  showNotification,
} from "./Store/NotificationStore/actions";

const userId = 306544780;
(window as any).uid = userId;

function App() {
  const [selected, toggleSelect, activeList, clearSelected] =
    useSelectableList();

  const dispatch = useDispatch<any>();

  // Take lists from redux state
  const { anime_seen, anime_future, anime_liked, anime_watching } = useSelector<
    State,
    ListState
  >((state) => state.lists);

  // Take error form redux state
  const error = useSelector<State, string>((state) => state.app.error);
  const isShowNotification = useSelector<State, boolean>(
    (state) => state.notification.isOpen
  );
  const isNotificationAnimationPending = useSelector<State, boolean>(
    (state) => state.notification.isNotificationAnimationPending
  );
  const isNotificationClosing = useSelector<State, boolean>(
    (state) => state.notification.isNotificationClosing
  );
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

  const [currentOpenListName, setOpenListName] = useState<ListName>();
  const setOpenList = (listName: ListName): void => {
    let openListName: ListName | undefined = undefined;
    currentOpenListName === listName
      ? (openListName = undefined)
      : (openListName = listName);

    clearSelected();
    setOpenListName(openListName);
  };
  return userId ? (
    <>
      {selected.size > 0 && (
        <ActionMenu
          clearSelected={clearSelected}
          selected={selected}
          activeList={activeList}
        />
      )}
      {isShowModal && modal}
      {isShowNotification && (
        <NotificationBox
          isAnimationPending={isNotificationAnimationPending}
          isClosing={isNotificationClosing}
        />
      )}
      {error && <ErrorBox />}
      <List
        title="Дивлюся"
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
      <List
        title="Заплановані"
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
        title="Переглянуті"
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
        title="Вподобайки"
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
    </>
  ) : (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
      }}
    >
      <h1>You must enter this site from telegram bot @lapis_lazuri_bot</h1>
    </div>
  );
}

/*<button
        onClick={() => {
          showNotification("tet");
        }}
      >
        Show selected items1
      </button>*/

export default App;
