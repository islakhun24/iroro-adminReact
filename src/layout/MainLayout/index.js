import React from "react";
import { Layout, Menu, Button } from "antd";
import { Logo } from "components";
import { Typography } from "antd";
import { Link, Outlet } from "react-router-dom";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const Container = (props) => {
  const warehouse_title = "Warehouse of \n Iroiro Statio";
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width="200" trigger={null} collapsible collapsed={collapsed}>
        <div className="flex items-center px-2 py-4 space-x-2 text-white">
          <Logo width={20} height={20} />
          <div className="font-sans font-bold">IRORO STATION</div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title={warehouse_title}>
            <Menu.Item key="warehouse_inventory">
              <Link to="/warehouse/inventory">Inventory</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="subquestion" icon={<UserOutlined />} title="Contact Us">
            <Menu.Item key="question">
              <Link to="/contact-us/question">Question</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 4 }}>
          <Button
            type="primary"
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginBottom: 16 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
