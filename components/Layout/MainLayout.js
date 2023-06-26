import { Layout } from "antd";
import { Sidebar, TopNav } from "../";
import { useState } from "react";

const { Footer, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  return (
    <Layout style={{ minHeight: 100 + "vh" }}>
      <TopNav
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        showTrigger={showTrigger}
      />
      <Layout hasSider={true}>
        <Sidebar collapsed={collapsed} setShowTrigger={setShowTrigger} />
        <Content style={{ padding: "10px 20px 20px 20px" }}>{children}</Content>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#001529",
        }}
      >
        Copyright &copy; Souvenir Murah Banyuwangi
      </Footer>
    </Layout>
  );
};

export default MainLayout;
