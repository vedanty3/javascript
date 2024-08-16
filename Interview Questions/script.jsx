// example 1
import { useState, useRef } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

// example 2
export function App() {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef();

  const startInterval = () => {
    if (timerRef.current) {
      console.log("timer already started...");
      return;
    }
    timerRef.current = setInterval(() => {
      setCounter((prevState) => {
        console.log(prevState);
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          startInterval();
        }}
      >
        add
      </button>
    </div>
  );
}
