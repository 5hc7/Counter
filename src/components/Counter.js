import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";

function Counter() {
  const [count, setCount] = useState(0);
  const style = useContext(ThemeContext);

  const decrease = () => {
    if (count === 0) return setCount(0);
    return setCount((prevValue) => prevValue - 1);
  };

  const increase = () => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className="counter">
      <button style={style} onClick={decrease}>
        -
      </button>
      <p>{count}</p>
      <button style={style} onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
