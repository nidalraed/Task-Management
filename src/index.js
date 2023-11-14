// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/taskReducer';

import App from './App';
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
