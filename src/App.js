import { useState, useEffect, useRef } from "react";

function App() {
  const potato = useRef();
  setTimeout(() => potato.current?.focus(), 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={potato} type="text" placeholder="la" />
    </div>
  );
}

export default App;
