import React from 'react';
import ReactDOM from 'react-dom';
import App from './docs/App.js';
import './docs/assets/scss/style.scss';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.querySelector('#root'));
