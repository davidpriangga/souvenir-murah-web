import React from "react";
import { Space } from "antd";
import { Paragraph, TitleSecond } from "../../components/Title";
import { TableBarang } from "../../components/Table/TableBarang";

const ValidasiCheckout = ({ data, listBarang }) => {
  const newListBarang = listBarang.map(
    ({ id, kodeBarang, namaBarang, quantity, price }) => {
      return { id, kodeBarang, namaBarang, jumlah: quantity, harga: price };
    }
  );

  console.log(newListBarang);
  return (
    <Space direction="vertical" size="middle" style={{ marginBottom: 20 }}>
      <TitleSecond level={3}>Validasi</TitleSecond>
      <Space direction="vertical">
        <span>
          <TitleSecond level={5}>Nama Pemesan</TitleSecond>
          <Paragraph>{data.namaPemesan}</Paragraph>
        </span>
        <span>
          <TitleSecond level={5}>Nomor Whatsapp</TitleSecond>
          <Paragraph>{data.noWa}</Paragraph>
        </span>
        <span>
          <TitleSecond level={5}>Tanggal Acara</TitleSecond>
          <Paragraph>{data.tanggalAcara[0]}</Paragraph>
        </span>
        <span>
          <TitleSecond level={5}>Nama Untuk Kartu Ucapan</TitleSecond>
          <Paragraph>{data.kartuUcapan}</Paragraph>
        </span>
        <span>
          <TitleSecond level={5}>Tanggal Pengambilan</TitleSecond>
          <Paragraph>{data.tanggalPengambilan[0]}</Paragraph>
        </span>
        <span>
          <TitleSecond level={5}>Alamat</TitleSecond>
          <Paragraph>{data.alamat}</Paragraph>
        </span>
      </Space>
      <TableBarang display={true} data={newListBarang} />
    </Space>
  );
};

export default ValidasiCheckout;
