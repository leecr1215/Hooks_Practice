import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  // componentWillUnmount 때 useEffect 실행됨
  useEffect(() => {
    // if문은 componentDidMount, componentDidUpdate 때 호출
    if (typeof onClick !== "function") {
      return;
    }
    // reference 안에 element.current가 있는지 확인
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // componentWillUnMount 일 때 return
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function App() {
  const sayHello = () => {
    console.log("say hello");
  };
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
