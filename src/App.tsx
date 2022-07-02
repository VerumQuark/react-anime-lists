import React from "react";
import { List } from "./Components";
import { useSelectableList } from "./hooks";
import { v4 as uuid4 } from "uuid";

const items: { title: string; id: string }[] = [
  {
    title: "item1",
    id: uuid4(),
  },
  {
    title: "item2",
    id: uuid4(),
  },
  {
    title: "item3",
    id: uuid4(),
  },
  {
    title: "item4",
    id: uuid4(),
  },
  {
    title: "item5",
    id: uuid4(),
  },
];

function App() {
  const [selected, toggleSelect] = useSelectableList();

  return (
    <>
      <List
        items={items}
        selected={selected}
        toggleSelect={toggleSelect}
        width="120px"
        isBorderCollapse
      />
      <button onClick={() => alert([...selected].join("\n"))}>
        Show selected items
      </button>
    </>
  );
}

export default App;
