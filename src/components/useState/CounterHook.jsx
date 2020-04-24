//useState
import React, { useState } from "react";

export const CounterHook = () => {
  const [count, setCount] = useState(0);

  const state = useState(0);
  console.log(state);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1); //更新前の値に基づいて計算される場合はprevious valueを使う
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント + 1</button>
      <button onClick={incrementCountTen}>カウント + 10</button>
    </div>
  );
};
