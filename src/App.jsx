import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  const data = [
    {
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am",
    },
    {
      title: "Cardio",
      description: "Jog 5km",
      time: "8am",
    },
    {
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
  ];

  return (
    <div className="App">
      {!isTodoListVisible ? (
        <button onClick={() => setIsTodoListVisible(true)}>
          Show Todo List
        </button>
      ) : (
        <h1>Todo List :-)</h1>
      )}

      {isTodoListVisible && (
        <ol>
          {data.map((itemObj, index) => (
            <ListItem
              key={index}
              title={itemObj.title}
              description={itemObj.description}
              time={itemObj.time}
            />
          ))}
          <button onClick={() => setIsTodoListVisible(false)}>
            Hide Todo List
          </button>
        </ol>
      )}
    </div>
  );
}

export default App;
