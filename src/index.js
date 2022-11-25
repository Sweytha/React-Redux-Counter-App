// Our src/index.js file will end up looking like this:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The following imports enable us to use our reducer. Be careful when importing, as each one comes from a different place. configureStore is built into Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';
// Because we combined our reducers, we can get the allReducers variable from the file in which we created it:
import allReducers from "./redux/reducers/";
// Provider is used to create the wrapper that gives all of the descendant components access to the store:
import { Provider } from "react-redux";

// Here, we configure the store:
const store = configureStore({ reducer: allReducers });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // And this wrapper gives access to everything running inside of the Provider element:
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();