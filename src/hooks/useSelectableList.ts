import { useState } from "react";

function useSelectableList(): [
  Set<string>,
  (arg: string) => void
] {
  const [selected, setSelected] = useState(new Set<string>());

  function toggleSelected(id: string): void {
    setSelected((prev: Set<string>): Set<string> => {
      const set: Set<string> = new Set(prev);

      set.has(id) ? set.delete(id) : set.add(id);

      return set;
    });
  }

  return [selected, toggleSelected];
}

export default useSelectableList;
 