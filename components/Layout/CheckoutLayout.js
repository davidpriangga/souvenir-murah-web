import { Layout } from "antd";

const CheckoutLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: 100 + "vh" }}>
      <Layout>
        <Content style={{ padding: "10px 20px 20px 100px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CheckoutLayout;
