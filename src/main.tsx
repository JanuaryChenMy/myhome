import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import "./index.less";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
