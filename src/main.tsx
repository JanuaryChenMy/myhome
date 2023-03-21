import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import "./index.less";
import './assets/fonts/index.less'
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { HomeTheme } from "./app/theme";
import AppLayout from "./features/AppLayout/AppLayout";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider theme={HomeTheme}>
      <AppLayout/>
    </ConfigProvider>
  </Provider>
);
