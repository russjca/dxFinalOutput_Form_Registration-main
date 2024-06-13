import React, { useState } from "react";
import { useOutlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AndroidFilled,
  ReadFilled,
} from "@ant-design/icons";

const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          style={{
            marginTop: "20px",
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            // Appointment Page
            {
              key: "/",
              label: "Student Form",
              icon: <AndroidFilled />,
            },
            // Appointment Records
            {
              key: "/StudentRecordPage",
              label: "Student Records",
              icon: <ReadFilled />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 30,
            minHeight: 642,
            background: colorBgContainer,
          }}
        >
          <p>{outlet}</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
