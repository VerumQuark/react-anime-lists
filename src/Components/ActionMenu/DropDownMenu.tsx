import React from "react";
import StyledDropDownMenu, {
  StyledDropDownMenuProps,
} from "./styles/DropDownMenu.styled";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ListName} from "../../Store/ListStore/types";


interface DropDownMenuProps extends StyledDropDownMenuProps {
  leftShift: number;
  icon: IconDefinition;
  selectedAction: (targetList: ListName) => void;
}

function DropDownMenu({ leftShift, icon, selectedAction }: DropDownMenuProps) {
  return (
    <StyledDropDownMenu leftShift={leftShift}>
      <Button
        onClick={(e) => {
          e.stopPropagation();
        }}
        borderless
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
      <ul>
        <li
          onClick={(e) => {
            e.stopPropagation();
            selectedAction("anime_watching");
          }}
        >
          Дивлюся
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            selectedAction("anime_future");
          }}
        >
          Заплановані
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            selectedAction("anime_seen");
          }}
        >
          Переглянуті
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            selectedAction("anime_liked");
          }}
        >
          Улюблені
        </li>
      </ul>
    </StyledDropDownMenu>
  );
}

export default DropDownMenu;
