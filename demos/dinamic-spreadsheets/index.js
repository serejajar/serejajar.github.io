// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { store } from './store'
// import { App } from './components/App';

const { Provider } = ReactRedux;
const { useState } = React;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
