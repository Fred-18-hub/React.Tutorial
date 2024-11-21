import { useReducer } from "react";

const UseReducer = ({ show = false }) => {
  if (!show) return <></>;

  const [count, dispatchCount] = useReducer(
    (prevCount: number, action: string) => {
      switch (action) {
        case "ADD":
          return prevCount + 1;
        case "SUB":
          return prevCount - 1;
        default:
          return prevCount;
      }
    },
    0
  );

  const [nameList, dispatchNameList] = useReducer(nameListReducer, {
    name: "test",
    list: [] as string[],
  });

  const [form, dispatchForm] = useReducer(
    (_: formType, action: formType) => {
      return { ...action };
    },
    {
      firstName: "",
      lastName: "",
    } as formType
  );

  const counterBtnClck = (action: string) => {
    dispatchCount(action);
  };

  const handleNameListUpdate = (type: string, payload: string) => {
    dispatchNameList({ type, payload });
  };

  return (
    <div>
      <h2>UseReducer:</h2>

      <div>
        <button onClick={() => counterBtnClck("ADD")}>Increase count</button>
        <span>{` Count: ${count} `}</span>
        <button onClick={() => counterBtnClck("SUB")}>Decrease count</button>
      </div>

      <div>
        <ol>
          {nameList.list.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ol>
        <input
          type="text"
          value={nameList.name}
          onChange={(e) => handleNameListUpdate("SET_NAME", e.target.value)}
          onKeyDown={(e) => {
            e.key == "Enter" && handleNameListUpdate("ADD_NAME", nameList.name);
          }}
        />
        <button onClick={() => handleNameListUpdate("ADD_NAME", nameList.name)}>
          Add Name
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => dispatchForm({ ...form, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => dispatchForm({ ...form, lastName: e.target.value })}
        />
        <p>
          First name: {form.firstName} | Last name: {form.lastName}
        </p>
      </div>
    </div>
  );
};

interface formType {
  firstName: string;
  lastName: string;
}

const nameListReducer = function (
  nameList: { name: string; list: string[] },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "SET_NAME": {
      return { ...nameList, name: action.payload };
    }
    case "ADD_NAME": {
      return { ...nameList, list: [...nameList.list, action.payload] };
    }
    default: {
      return nameList;
    }
  }
};

export default UseReducer;
