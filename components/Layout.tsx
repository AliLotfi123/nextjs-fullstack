import React from "react";
import LayoutCSS from "./Layout.module.scss";
import Menu from "./Menu";

const Layout = ({ children }: any) => {
  return (
    <div className={LayoutCSS.container}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
