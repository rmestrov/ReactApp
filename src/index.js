import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

const store = createStore();

ReactDOM.render(
  //makes redux store available in connect() calls
  <Provider store={store}>
  <Main />
  </Provider>,
  document.getElementById('root')
);