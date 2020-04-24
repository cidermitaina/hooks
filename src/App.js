import React from "react";

import "./App.css";

import { Counter } from "./components/useState/Counter";
// import { CounterHook } from "./components/useState/CounterHook";
// import { FormHook } from "./components/useState/FormHook";
// import { ItemHook } from "./components/useState/ItemHook";
// import { EffectHook } from "./components/useEffect/EffectHook";
// import { MouseEventEffect } from "./components/useEffect/MouseEventEffect";
// import { DataFeatch } from "./components/useEffect/DataFeatch";
// import { DataFeatchById } from "./components/useEffect/DataFeatchById";
// import { WrapComponent } from "./components/useCallback/WrapComponent";
// import { FocusInput } from './components/useRef/FocusInput'
// import { Count } from './components/useRef/Count'

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <CounterHook />
      <FormHook />
      <ItemHook />
      <EffectHook />
      <MouseEventEffect />
      <EffectHook />
      <WrapComponent />
      <DataFeatch />
      <DataFeatchById />
      <FocusInput />
      <Count /> */}
    </div>
  );
}

export default App;
