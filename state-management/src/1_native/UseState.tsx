import { useState } from "react";

const UseState = ({ show }: { show: boolean }) => {
  if (!show) return <></>;

  const [count, setCount] = useState(1);
  const [nameList, setNameList] = useState<string[]>([]);
  const [name, setName] = useState(() => {
    if (count) return "Joey";
    return "Noey";
  });

  const counterBtnClck = () => {
    setCount((prev) => prev + 1);
  };

  const addNameToList = () => {
    setNameList([...nameList, name]);
  };

  return (
    <div>
      <h2>UseState:</h2>

      <button onClick={counterBtnClck}>Count: {count}</button>

      <ol>
        {nameList.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ol>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addNameToList}>Add Name</button>
    </div>
  );
};

export default UseState;
