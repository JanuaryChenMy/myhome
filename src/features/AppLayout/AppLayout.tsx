import type { FC } from "react";
import React, { useState } from "react";
// import Header from "../Header/Header";
import "./AppLayout.less";
import "antd/dist/reset.css";
import { RouterProvider } from "react-router-dom";
import router from "../../app/router";
import Header from "../Header/Header";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Sider, Content } = Layout;
const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }} className="AppLayout">
      <Sider
        collapsedWidth={50}
        trigger={null}
        collapsible
        collapsed={true}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "主页",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
