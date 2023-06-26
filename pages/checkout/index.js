import React from "react";
import StepCheckout from "./StepCheckout";
import { Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import CheckoutLayout from "../../components/Layout/CheckoutLayout";
import { TitlePage } from "../../components/Title";

const Checkout = () => {
  const router = useRouter();

  return (
    <CheckoutLayout>
      <Space
        onClick={() => router.back()}
        style={{ alignItems: "center", margin: "10px 0", fontSize: 18 }}
      >
        <ArrowLeftOutlined />
        <span>Kembali</span>
      </Space>

      <TitlePage>Checkout</TitlePage>
      <StepCheckout />
    </CheckoutLayout>
  );
};

export default Checkout;
