import React, { useState } from "react";

const App = (props) => {
  // stateにnameとpriceを集約
  const [state, setState] = useState(props);
  // 分割代入　state.name、state.priceを省略
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      ></input>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
    </>
  );
};

App.defaultProps = {
  name: "sample",
  price: 1000,
};

export default App;
