import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Route from "./routes";
import { BrowserRouter } from 'react-router-dom';
import reducer from "./reducers/reducer.js";


var store = createStore(reducer);


store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  
    <BrowserRouter>
    <Provider store={store}>
    <Route />
    </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
