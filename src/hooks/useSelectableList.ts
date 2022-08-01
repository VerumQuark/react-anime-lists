import { useState } from "react";

function useSelectableList(): [
  Set<string>,
  (id: string, listName: string) => void
] {
  const [selected, setSelected] = useState(new Set<string>());
  const [activeList, setActiveList] = useState("");

  function toggleSelected(id: string, listName: string): void {
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

  return [selected, toggleSelected];
}

export default useSelectableList;
