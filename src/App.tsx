import React, { useState, useEffect } from 'react';
import { List } from "./Components";
import { useSelectableList } from "./hooks";
import axios, {AxiosResponse} from "axios"

type ListResponse = [
  {
    title: string,
    id: string,
  }
]

function App() {
  const [selected, toggleSelect] = useSelectableList();
  const [selected1, toggleSelect1] = useSelectableList();
  const [selected2, toggleSelect2] = useSelectableList();
  const [selected3, toggleSelect3] = useSelectableList();
  const [fetchedList, setFetchedList] = useState<ListResponse[] | [[], [], [], []]>([[], [], [], []])

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<ListResponse[]> = await axios.get<ListResponse[]>("http://localhost:5000/animeLists")

      if (![200, 201, 204].includes(response.status)) {
        console.error(response)
        return;
      }

      const data: ListResponse[] = response.data

      setFetchedList(data)
    })()
  }, []);


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <List
        title="Переглянуті"
        items={fetchedList[0]}
        selected={selected}
        toggleSelect={toggleSelect}
        width="120px"
        isBorderCollapse
      />
      <List
        title="Заплановані"
        items={fetchedList[1]}
        selected={selected1}
        toggleSelect={toggleSelect1}
        width="120px"
        isBorderCollapse
      />
      <List
        title="Вподобайки"
        items={fetchedList[2]}
        selected={selected2}
        toggleSelect={toggleSelect2}
        width="120px"
        isBorderCollapse
      />
      <List
        title="Дивлюся"
        items={fetchedList[3]}
        selected={selected3}
        toggleSelect={toggleSelect3}
        width="120px"
        isBorderCollapse
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
    </div>
  );
}

export default App;
