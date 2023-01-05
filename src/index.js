import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
// настройки плагина локализации языков
import "./i18n";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
