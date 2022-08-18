import { useState } from "react";
import { ListName } from "../Store/ListStore/types";

function useSelectableList(): [
  Set<string>,
  (id: string, listName: ListName) => void,
  ListName | undefined,
  () => void
] {
  const [selected, setSelected] = useState(new Set<string>());
  const [activeList, setActiveList] = useState<ListName>();

  function toggleSelected(id: string, listName: ListName): void {
    if (listName !== activeList) {
      setSelected(new Set<string>());
      setActiveList(listName);
    }

    setSelected((prev: Set<string>): Set<string> => {
      const set: Set<string> = new Set(prev);

      set.has(id) ? set.delete(id) : set.add(id);

      return set;
    });
  }

  const clearSelected = () => {
    setSelected(new Set<string>());
  };

  return [selected, toggleSelected, activeList, clearSelected];
}

export default useSelectableList;
