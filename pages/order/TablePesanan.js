import React from "react";
import { Table, Space } from "antd";
// import { getCredential } from "../../helper/getCredential";
import { ButtonDelete, ButtonDetail } from "../../components/Button";
import { showDeleteConfirm } from "../../components/Modal";

const TablePesanan = ({ listPesanan, loading, handleDelete, handleDetail }) => {
  const data = listPesanan.map((data, i) => {
    return { ...data, key: i };
  });

  // const { role } = getCredential();

  const columns = [
    {
      title: "Kode Pesanan",
      dataIndex: "kodePesanan",
      key: "kodePesanan",
    },
    {
      title: "Nama Pemesan",
      dataIndex: "namaPemesan",
      key: "namaPemesan",
    },
    {
      title: "Nomor Whatsapp",
      dataIndex: "noWa",
      key: "noWa",
    },
    {
      title: "Tanggal Pemesanan",
      dataIndex: "tanggalPesanan",
      key: "tanggalPemesanan",
    },
    {
      title: "Tanggal Pengambilan",
      dataIndex: "tanggalPengambilan",
      key: "tanggalPengambilan",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      render: (_, record) => (
        <Space>
          <ButtonDetail
            label="Detail"
            handleClick={() => {
              handleDetail(record);
            }}
          />

          {/* {role !== "user" ? ( */}
          {/* <ButtonDelete
            label="Hapus"
            handleClick={() => {
              showDeleteConfirm({
                title: record.kodePesanan,
                onOk: () => {
                  handleDelete(record);
                },
              });
            }}
          /> */}
          {/* ) : (
            ""
          )} */}
        </Space>
      ),
    },
  ];
  return (
    <Table
      pagination={{ pageSize: 5 }}
      loading={loading}
      columns={columns}
      dataSource={data}
    />
  );
};

export default TablePesanan;
