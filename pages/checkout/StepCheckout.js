import React, { useEffect, useState } from "react";
import { Steps, Button, message, Form } from "antd";
import ListBarang from "./ListBarang";
import FormPembelian from "./FormPembelian";
import ValidasiCheckout from "./ValidasiCheckout";
import { useCart } from "react-use-cart";
import getDate from "../../utils/getDate";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const StepCheckout = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const { isEmpty, items, emptyCart } = useCart();
  const [form] = Form.useForm();
  const [data, setData] = useState({});
  const token = Cookies.get("accessToken");

  const getIdUser = () => {
    const getUser = localStorage.getItem("user");
    const user = JSON.parse(getUser);
    return user.idUser;
  };

  const handleSelesai = () => {
    const dataPemesanan = {
      namaPemesan: data.namaPemesan[0],
      noWa: data.noWa[0],
      kartuUcapan: data.kartuUcapan[0],
      tanggalPesanan: getDate(),
      tanggalAcara: data.tanggalAcara[0],
      tanggalPengambilan: data.tanggalPengambilan[0],
      alamat: data.alamat[0],
      // userIdUser: getIdUser(),
    };

    const listBarang = items.map((item) => {
      return {
        kodeBarang: item.kodeBarang,
        namaBarang: item.namaBarang,
        harga: item.price,
        jumlah: item.quantity,
      };
    });

    // const headers = { Authorization: token };
    const dataForm = { ...dataPemesanan, listBarang: listBarang };

    // axios
    //   .post("http://localhost:5000/pesanan", dataForm, { headers })
    //   .then(() => {
    //     setTimeout(() => {
    //       emptyCart();
    //       router.push("/checkout/selesai");
    //     }, 3000);
    //   })
    //   .catch((error) => {
    //     message.success("Checkout Failed");
    //   });

    console.log(dataForm);
  };

  const handleChange = (value) => {
    setData({
      ...data,
      [Object.keys(value)]: Object.values(value),
    });
  };

  const steps = [
    {
      title: "List Barang",
      content: <ListBarang />,
    },
    {
      title: "Data Pembelian",
      content: <FormPembelian form={form} handleChange={handleChange} />,
    },
    {
      title: "Validasi",
      content: <ValidasiCheckout data={data} listBarang={items} />,
    },
  ];

  const itemsStep = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = () => {
    if (current === 0 && isEmpty) {
      message.warning("Tambahkan Barang Terlebih Dahulu");
    } else if (current === 1) {
      form.validateFields().then(() => setCurrent(current + 1));
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    form.setFieldValue(data);
  }, [form, data]);

  return (
    <>
      <Steps
        current={current}
        size="small"
        items={itemsStep}
        style={{ width: 500 }}
      />
      <div className="steps-content" style={{ marginTop: 20 }}>
        {steps[current].content}
      </div>
      <div className="steps-action" style={{ marginBottom: 20 }}>
        {current > 0 && (
          <Button
            style={{
              marginRight: "8px",
            }}
            onClick={() => prev()}
          >
            Sebelumnya
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Selanjutnya
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              handleSelesai();
            }}
          >
            Selesai
          </Button>
        )}
      </div>
    </>
  );
};

export default StepCheckout;
