import React, { useEffect, useState, useCallback } from "react";
import { Space, Input, message } from "antd";
import TablePesanan from "./TablePesanan";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { TitlePage } from "../../components/Title";

const ListPesanan = () => {
  const [listPesanan, setListPesanan] = useState([
    {
      id: 1,
      kodePesanan: "SVNRMRH444331",
      namaPemesan: "Fulan",
      noWa: "097877575772",
      tanggalPesanan: "22/12/2000",
      tanggalPengambilan: "22/12/2000",
    },
  ]);
  const [listSearch, setListSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("accessToken");
  const headers = { Authorization: token };
  const { push } = useRouter();

  const handleDetail = ({ id }) => {
    push(`/order/detail-order/${id}`);
  };

  const handleDelete = ({ idPesanan }) => {
    axios
      .delete(`http://localhost:5000/pesanan/${idPesanan}`, {
        headers: headers,
      })
      .then(({ data }) => {
        message.info(data.message);
        setRecord();
      });
  };

  const onChange = (e) => {
    setLoading(true);
    const value = e.target.value;
    getListPesanan().then((data) => {
      setListSearch(data);
    });
    const findValue = listSearch.filter(
      (obj) => obj.kodePesanan.toLowerCase().includes(value) === true
    );
    if (findValue.length > 0) {
      setListPesanan(findValue);
    } else {
      setListPesanan([]);
    }
    setLoading(false);
  };

  const getIdUser = () => {
    const getUser = localStorage.getItem("user");
    const user = JSON.parse(getUser);
    const userId = user?.idUser;
    const role = user?.role;

    return { userId: 0, role: "user" };
  };

  const getListPesanan = useCallback(async () => {
    const { userId, role } = getIdUser();
    let endpoint;

    if (role === "admin") {
      endpoint = "http://localhost:5000/pesanan";
    } else {
      endpoint = `http://localhost:5000/pesanan/user/${userId}`;
    }

    const getData = await axios.get(endpoint, {
      headers: { Authorization: token },
    });
    return getData.data;
  }, [token]);

  const setRecord = useCallback(() => {
    getListPesanan().then((data) => {
      setListPesanan(data);
      setLoading(false);
    });
  }, [getListPesanan]);

  useEffect(() => {
    // setRecord();
  }, [setRecord]);

  return (
    <div style={{ padding: `30px 100px` }}>
      <TitlePage>List Pesanan</TitlePage>
      <Space direction="vertical">
        <Input
          placeholder="Cari kode pesanan"
          allowClear={true}
          // onChange={onChange}
          style={{
            width: 300,
          }}
        />
        <TablePesanan
          listPesanan={listPesanan}
          loading={loading}
          handleDelete={handleDelete}
          handleDetail={handleDetail}
        />
      </Space>
    </div>
  );
};

export default ListPesanan;
