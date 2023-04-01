import { Breadcrumb, Layout as AntLayout, theme } from "antd";
import { AnimatePresence, motion } from "framer-motion";
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
            <Breadcrumb.Item key={item.name}>
              <Link href={item.url}> {item.name}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <motion.div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;
