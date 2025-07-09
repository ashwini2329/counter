import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleDecrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{count}</h2>
      <br />
      <br />
      <button onClick={handleIncrementCount}>+</button>
      <br />
      <br />
      <button onClick={handleDecrementCount}>-</button>
      <br />
      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
