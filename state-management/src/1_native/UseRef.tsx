import { useEffect, useRef, useState } from "react";

const UseRef = ({ show = false }) => {
  if (!show) return <></>;
  const inputRef = useRef<HTMLInputElement>(null); // UseRef for DOM element reference
  const idRef = useRef(1); // UseRef for state management

  const [list, setList] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addName = () => {
    setList([
      ...list,
      {
        id: idRef.current++,
        name: inputRef.current?.value as string,
      },
    ]);
    inputRef.current?.focus();
    inputRef.current!.value = "";
  };

  return (
    <div>
      {list.map((item, i) => (
        <p key={i}>
          {item.id} - {item.name}
        </p>
      ))}
      <input type="text" ref={inputRef} />
      <button onClick={addName}>Add name</button>
    </div>
  );
};

export default UseRef;
