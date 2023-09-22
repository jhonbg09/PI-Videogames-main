import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  //1. Envolver la app con BrowerRouter y exportarla para crear las rutas
  //2.Envolvemos la aplicacion con provider para ytilizar redux
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
