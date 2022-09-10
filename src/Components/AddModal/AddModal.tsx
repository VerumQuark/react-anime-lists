import React, { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Input from "../../Common/Input";
import { addAnimeToList } from "../../Store/ListStore/actions";
import { State } from "../../Store";
import { closeModal } from "../../Store/ModalStore/actions";
import StyledAddModal from "./styles/AddModal.styles"
import { showNotification } from "../../Store/NotificationStore/actions";

interface AddModalProps {
  title?: string;
  rating?: number;
}

export default function AddModal({ title, rating }: AddModalProps) {
  const [t, setT] = useState<string>(title || "");
  const [r, setR] = useState<number>(rating || 0);

  const dispatch = useDispatch<any>();

  const list = useSelector<State, string>((state) => state.modal.list);

  return (
    <StyledAddModal header="Введіть назву">
      <Input
        value={t}
        onChange={(e) => {
          setT(e.target.value);
        }}
        width="60%"
      />

      <p>Оцінка: </p>
      <Input
        value={r}
        type={"number"}
        onChange={(e) => {
          setR(Number(e.target.value));
        }}
      />

      <Input
        type="button"
        value="Додати"
        onClick={() => {
          dispatch(addAnimeToList(list as any, t, r, (window as any).uid));
          dispatch(closeModal());
          showNotification(`${t} успішно додано`);
        }}
      />
    </StyledAddModal>
  );
}
