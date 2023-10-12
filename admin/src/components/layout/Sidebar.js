import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./Layout.css";
import { Link } from "react-router-dom";
import { BsPersonVcardFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import Sider from "antd/es/layout/Sider";
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      "Dashboard",
      "1",
      <Link to={"/bbbb"}>
        <AiFillDashboard />
      </Link>
    ),
    getItem(
      "Vcards",
      "2",
      <Link to={"/vcard"}>
        <BsPersonVcardFill />
      </Link>
    )
    
  ];

  

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          // defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>

    // {/* <div className="side-menu" >
    //   <ul  >
    //     <li>
    //       <AiFillDashboard/>
    //       <Link to={"/"}>Dashboard</Link>
    //     </li>
    //     <li>
    //       <BsPersonVcardFill/>
    //       <Link to={"/vcard"}>vcards</Link>
    //     </li>
    //   </ul>
    // </div> */}
  );
}

export default Sidebar;
