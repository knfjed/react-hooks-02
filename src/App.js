import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment2 = () => setCount((previousCount) => previousCount + 1);

  const decrement2 = () => setCount((previousCount) => previousCount - 1);

  const double = () => setCount((previousCount) => previousCount * 2);

  const reset = () => setCount(0);

  const divide3 = () => {
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );
  };

  return (
    <>
      <div>cont: {count}</div>

      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
        <button onClick={double}>*2</button>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={divide3}>3の倍数の時、3倍にする</button>
      </div>
    </>
  );
};

export default App;
