import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useInput } from "./useInput";

function App() {
  // maxLen이 true면 useInput 함수에서 willUpdate가 true가 됨.
  // 즉 setValue(value) 가 됨.
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  //const email = useInput("@");
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" type="text" {...name} />
    </div>
  );
}

export default App;
