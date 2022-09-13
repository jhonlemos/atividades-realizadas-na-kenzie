import { useState } from "react";

import "./style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function randomNumber() {
    setCounter(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <div className="container">
      <div>
        <p>{counter}</p>
        <button onClick={randomNumber}>Não aperte esse botão</button>
      </div>
    </div>
  );
};

export default Counter;
