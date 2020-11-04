import React from "react";
import LayoutCSS from "./Layout.module.scss";
import Menu from "./Menu";

const Layout = (props: any) => {
  return (
    <div className={LayoutCSS.container}>
      <Menu />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
