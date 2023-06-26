import React from "react";
import { Form, Input, DatePicker } from "antd";

const FormPembelian = ({ form, handleChange }) => {
  const { Item } = Form;

  return (
    <Form
      requiredMark={false}
      name="form-pesanan"
      layout="vertical"
      labelAlign="left"
      wrapperCol={{ span: 7 }}
      form={form}
    >
      <Item
        label="Nama Pemesan"
        name="namaPemesan"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan nama pemesan dengan benar!",
            pattern: new RegExp(/^[a-zA-Z\s]*$/),
          },
        ]}
      >
        <Input
          onChange={(e) => {
            handleChange({ namaPemesan: e.target.value });
          }}
          placeholder="Masukan Nama Pemesan"
        />
      </Item>
      <Item
        label="Nomor Whatsapp"
        name="noWa"
        required={true}
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan nomor whatsapp dengan benar!",
            pattern: new RegExp(/^[0-9]*$/),
          },
        ]}
      >
        <Input
          onChange={(e) => {
            handleChange({ noWa: e.target.value });
          }}
          placeholder="Masukan Nomor Whatsapp"
        />
      </Item>
      <Item
        label="Alamat"
        name="alamat"
        required={true}
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan alamat pemesanan!",
          },
        ]}
      >
        <Input.TextArea
          onChange={(e) => {
            handleChange({ alamat: e.target.value });
          }}
          placeholder="Masukan Alamat Pemesan"
        />
      </Item>
      <Item
        label="Tanggal Acara"
        name="tanggalAcara"
        required={true}
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan tanggal acara!",
          },
        ]}
      >
        <DatePicker
          style={{ width: "100%" }}
          format="YYYY/MM/DD"
          onChange={(date, dateString) => {
            handleChange({ tanggalAcara: dateString });
          }}
          placeholder="Masukan Tanggal Acara"
        />
      </Item>
      <Item
        label="Nama Untuk Kartu Ucapan"
        name="kartuUcapan"
        required={true}
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan kartu ucapan!",
            pattern: new RegExp(/^[a-zA-Z\s]*$/),
          },
        ]}
      >
        <Input.TextArea
          onChange={(e) => {
            handleChange({ kartuUcapan: e.target.value });
          }}
          placeholder="Masukan Kartu Ucapan"
        />
      </Item>
      <Item
        label="Tanggal Pengambilan"
        name="tanggalPengambilan"
        required={true}
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "masukan tanggal pengambilan!",
          },
        ]}
      >
        <DatePicker
          style={{ width: "100%" }}
          format="YYYY/MM/DD"
          onChange={(date, dateString) => {
            handleChange({ tanggalPengambilan: dateString });
          }}
          placeholder="Masukan Tanggal Pengambilan"
        />
      </Item>
    </Form>
  );
};

export default FormPembelian;
