import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from './state/store';

const App = () => {
  return (
    <Provider store={store}>
        <h2>Title</h2>
        <Counter />
    </Provider>
  );
}

export default App;