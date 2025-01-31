import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const rootElem = document.querySelector('#root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(<App />);
}
