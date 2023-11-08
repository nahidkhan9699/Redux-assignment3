import React from "react";
import Colour from "./components/Colour";
import { configstore } from "./state/configstore";
import { Provider } from "react-redux";
function App() {
  const mystore=configstore();
  return (
    <Provider store={mystore}>
      <Colour/>
      </Provider>

  );
}

export default App;
