import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import "./index.less";
import './assets/fonts/index.less'
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { ConfigProvider } from "antd";
import { HomeTheme } from "./app/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider theme={HomeTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
);
