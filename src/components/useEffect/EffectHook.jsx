// useEffect
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 第2引数で条件を加えることができる
  useEffect(() => {
    document.title = `クリック数: ${count}回`;
    console.log("render");
  }, [count]);

  return (
    <div>
      <p>クリック数: {count}回</p>
      <p>名前: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>カウント +1</button>
    </div>
  );
};
