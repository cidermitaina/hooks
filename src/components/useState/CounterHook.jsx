//useState
import React, { useState } from "react";

export const CounterHook = () => {
  const [count, setCount] = useState(0);

  const state = useState(0);
  console.log(state);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント + 1</button>
    </div>
  );
};
