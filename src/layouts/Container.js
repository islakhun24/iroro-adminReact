import React from "react";
import { Layout, Menu, Button } from "antd";
import { Logo } from "components";
import { Typography } from "antd";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import pageRoutes from "../routes/pageRoutes";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
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
            <Menu.Item key="3">Inventory</Menu.Item>
          </SubMenu>
          <SubMenu key="subquestion" icon={<UserOutlined />} title="Contact Us">
            <Menu.Item key="question">
              <Link to="/contact-us/question" />
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
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
          <Switch>
            {pageRoutes?.map((e) => (
              <Route component={e?.component} path={e?.path} exact />
            ))}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
