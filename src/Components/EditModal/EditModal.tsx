import React, { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Input from "../../Common/Input";
import { addAnimeToList, setAnimeRating } from "../../Store/ListStore/actions";
import { State } from "../../Store";
import { closeModal } from "../../Store/ModalStore/actions";
import StyledEditModal from "./styles/EdiModal.styles";
import { showNotification } from "../../Store/NotificationStore/actions";

interface EditModalProps {
  title?: string;
  rating?: number;
  id: string;
}

export default function EditModal({ title, rating, id }: EditModalProps) {
  const [t, setT] = useState<string>(title || "");
  const [r, setR] = useState<number>(rating || 0);

  const dispatch = useDispatch<any>();

  const list = useSelector<State, string>((state) => state.modal.list);

  return (
    <StyledEditModal header="Введіть назву">
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
        value="Зберігти"
        onClick={() => {
          dispatch(setAnimeRating(list as any, id, t, r, (window as any).uid));
          dispatch(closeModal());
          showNotification("Редагування успішне");
        }}
      />
    </StyledEditModal>
  );
}
