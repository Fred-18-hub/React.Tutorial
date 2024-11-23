import { useEffect, useState } from "react";

const UseEffect = ({ show = false }) => {
  if (!show) return <></>;

  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("use effect ran");
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Use Effect:</h2>

      <p>Time: {time}</p>
    </div>
  );
};

export default UseEffect;
