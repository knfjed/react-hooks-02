import React, { useState } from "react";

const App = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      {/* イベントを拾って、setNameで変更。e.target.valueはお約束 */}
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

App.defaultProps = {
  name: "sample",
  price: 1000,
};

export default App;
