import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
