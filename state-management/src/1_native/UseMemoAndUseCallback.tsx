import { useCallback, useMemo, useState } from "react";

const NameListComponent = ({
  list,
  sortFunc,
}: {
  list: string[];
  sortFunc: (a: string, b: string) => number;
}) => {
  const sortedList = useMemo(() => {
    console.log("Sorted list Memo rendered");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return (
    <div>
      <p>Names: [{list.join(", ")}]</p>
      <p>Sorted Names: [{sortedList.join(", ")}]</p>
    </div>
  );
};

const UseMemoAndUseCallback = ({ show = false }) => {
  if (!show) return <></>;

  const [count, setCount] = useState(0);
  const [numberList, setNumberList] = useState([10, 20, 30]);
  const [nameList] = useState(["Joey", "Fisher", "Zack"]);

  const sumOfList = useMemo(
    // Expensive calculation: suppose list has a lot of elements
    () => {
      console.log("Sum of list Memo rendered");
      return numberList.reduce((prev, curr) => prev + curr, 0);
    },
    [numberList]
  );

  const sortFunc = useCallback(
    (a: string, b: string) => a.localeCompare(b) * -1,
    []
  );

  return (
    <div>
      <h2>UseMemo:</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>

      <div>
        <p>[{numberList.join(", ")}]</p>
        <p>Sum of List: {sumOfList}</p>
        <button
          onClick={() =>
            setNumberList([...numberList, Math.round(Math.random() * 10)])
          }
        >
          Push number
        </button>
      </div>

      <NameListComponent list={nameList} sortFunc={sortFunc} />
    </div>
  );
};

export default UseMemoAndUseCallback;
