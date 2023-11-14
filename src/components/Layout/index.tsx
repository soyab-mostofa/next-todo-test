import AppFooter from "@components/AppFooter";
import AppHeader from "@components/AppHeader";
import SideMenu from "@components/SideMenu/Index";
import { Space } from "antd";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="App">
      <AppHeader />
      <Space align="start" className="SideMenuAndPageContent">
        <SideMenu />
        {children}
      </Space>
      <AppFooter />
    </div>
  );
};

export default Layout;
