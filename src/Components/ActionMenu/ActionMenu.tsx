import React from "react";
import StyledActionMenu from "./styles/ActionMenu.styled";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faArrowRightArrowLeft,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { removeManyAnimeFromList } from "../../Store/ListStore/actions";
import { ListName, State as ListState } from "../../Store/ListStore/types";
import { BUTTON_SIZE } from "../../Components/List/Constants";
import DropDownMenu from "./DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store";
import { addAnimeToList } from "../../Store/ListStore/actions";
import { showNotification } from "../../Store/NotificationStore/actions";

interface ActionMenuProps {
  clearSelected: () => void;
  selected: Set<string>;
  activeList: ListName | undefined;
}

function ActionMenu({ clearSelected, selected, activeList }: ActionMenuProps) {
  const dispatch = useDispatch<any>();
  const animeLists = useSelector<State, ListState>((state) => state.lists);

  const copySelectedTo = (targetList: ListName) => {
    const uid = (window as any).uid;

    selected.forEach((id) => {
      const anime = animeLists[activeList as ListName].filter(
        (anime) => anime.id === id
      )[0];

      dispatch(addAnimeToList(targetList, anime.title, anime.rating, uid));
    });

    showNotification("Копіювання успішне");

    clearSelected();
  };

  const transferSelectedTo = (targetList: ListName) => {
    const uid = (window as any).uid;

    selected.forEach((id) => {
      const anime = animeLists[activeList as ListName].filter(
        (anime) => anime.id === id
      )[0];

      dispatch(addAnimeToList(targetList, anime.title, anime.rating, uid));
    });
    dispatch(
      removeManyAnimeFromList(
        activeList as ListName,
        [...selected],
        (window as any).uid
      )
    );

    showNotification("Перенесення успішне");

    clearSelected();
  };

  // todo notification

  const deleteSelected = (): void => {
    dispatch(
      removeManyAnimeFromList(
        activeList as ListName,
        [...selected],
        (window as any).uid
      )
    );

    showNotification("Видалення успішне");
  };

  return (
    <StyledActionMenu>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          clearSelected();
        }}
        borderless
        width={`${BUTTON_SIZE}px`}
      >
        <FontAwesomeIcon icon={faClose} />
      </Button>

      <div id="counter">{selected.size}</div>

      <DropDownMenu
        leftShift={-40}
        icon={faCopy}
        selectedAction={copySelectedTo}
      />

      <DropDownMenu
        leftShift={-80}
        icon={faArrowRightArrowLeft}
        selectedAction={transferSelectedTo}
      />

      <Button
        onClick={(e) => {
          e.stopPropagation();
          deleteSelected();
        }}
        borderless
        width={`${BUTTON_SIZE}px`}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </StyledActionMenu>
  );
}

export default ActionMenu;
