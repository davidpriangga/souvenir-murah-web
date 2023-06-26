import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { CheckoutLayout } from "../../components";

const DoneCheckout = () => {
  return (
    <CheckoutLayout>
      <Result
        status="success"
        title="Berhasil Membuat Pesanan"
        subTitle={`Pesanan kamu sudah terkirim silahkan tunggu konfirmasi dari admin`}
        extra={[
          <Link to="/katalog" key="buy">
            <Button>Kembali</Button>
          </Link>,
        ]}
      />
    </CheckoutLayout>
  );
};

export default DoneCheckout;
