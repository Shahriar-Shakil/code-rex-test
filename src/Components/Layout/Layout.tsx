import { Breadcrumb, Layout as AntLayout, theme } from "antd";
import Link from "next/link";
import React from "react";
import Header from "./Header";

const { Content, Footer } = AntLayout;
interface Props {
  children: React.ReactNode;
  breadcrumb: {
    name: string;
    url: string;
    active: boolean;
  }[];
}
const Layout: React.FC<Props> = ({ children, breadcrumb }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntLayout className="layout">
      <Header />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {breadcrumb?.map((item) => (
            <Link key={item.name} href={item.url}>
              <Breadcrumb style={{ paddingRight: "8px" }}>
                {item.name} /
              </Breadcrumb>
            </Link>
          ))}
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;
