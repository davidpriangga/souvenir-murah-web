import React, { useCallback, useEffect, useState } from "react";
import { Button, message, Space, Upload } from "antd";

import Cookies from "js-cookie";
import axios from "axios";
import { Paragraph, TitlePage, TitleSecond } from "../../../components/Title";
import { TableBarang } from "../../../components/Table/TableBarang";
import { useCart } from "react-use-cart";
import { getDataUriFromFile } from "../../../utils";

const DetailPesanan = () => {
  const { items } = useCart();
  console.log(items);
  const [fileList, setFileList] = useState([]);
  const [listBarang, setListBarang] = useState(
    items.map((item) => ({
      id: item.id,
      kodeBarang: item.kode_barang,
      namaBarang: item.title,
      jumlah: item.quantity,
      harga: item.price,
    }))
  );
  const [data, setData] = useState({
    id: 1,
    kodePesanan: "SVNRMRH444331",
    namaPemesan: "Fulan",
    noWa: "097877575772",
    tanggalPesanan: "22/12/2000",
    tanggalPengambilan: "22/12/2000",
    kartuUcapan: "Selamat Menikmati",
    alamat: "cungking rt 1 rw1",
  });
  const token = Cookies.get("accessToken");

  const setValue = useCallback(async () => {
    const headers = { Authorization: token };
    try {
      const getData = await axios.get(
        `http://localhost:5000/pesanan/${params.id}`,
        {
          headers: headers,
        }
      );
      if (getData.data === {}) {
        throw new Error({ message: "data tidak ditemukan" });
      }
      setData(getData.data);
      setListBarang(getData.data.listBarang);
      return;
    } catch (error) {
      navigate("/not-found");
    }
  }, [token]);

  const handleUploadImage = (options) => {
    getDataUriFromFile(options.file)
      .then(({ dataUri, fileName }) => {
        setFileList([...fileList, { fileName, url: dataUri }]);
      })
      .catch((error) => message.error(error.message));
  };

  const handleRemoveUpdloadImage = (file) => {
    const filterArr = fileList.filter(
      (item) => item.fileName !== file.fileName
    );
    setFileList(filterArr);
  };

  const handleUpload = async () => {
    try {
      // console.log(fileList[0].url);
      await OrderAPI.uploadPaymentProof(
        { image: fileList[0].url },
        pathname.split("/")[3]
      );
      message.success("Upload berhasil");
      navigate(`/${paths.order}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    // window.location = `http://localhost:5000/cetak-pesanan/${data.idPesanan}`;
  };

  useEffect(() => {
    // setValue();
  }, [setValue]);

  return (
    <div style={{ padding: `30px 100px` }}>
      <Space direction="vertical" size="middle" style={{ marginBottom: 20 }}>
        <TitlePage>Detail Pesanan {data.kodePesanan}</TitlePage>

        <Upload
          listType="picture-card"
          style={{ width: "100%" }}
          customRequest={handleUploadImage}
          onRemove={handleRemoveUpdloadImage}
          fileList={fileList}
          accept=".jpg,.jpeg,.png,.webp"
        >
          {fileList.length === 0 && " Upload Bukti Transfer"}
        </Upload>
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
            <TitleSecond level={5}>Kartu Ucapan</TitleSecond>
            <Paragraph>{data.kartuUcapan}</Paragraph>
          </span>
          <span>
            <TitleSecond level={5}>Tanggal Acara</TitleSecond>
            <Paragraph>{data.tanggalPengambilan}</Paragraph>
          </span>
          <span>
            <TitleSecond level={5}>Tanggal Pengambilan</TitleSecond>
            <Paragraph>{data.tanggalPengambilan}</Paragraph>
          </span>
          <span>
            <TitleSecond level={5}>Tanggal Pemesanan</TitleSecond>
            <Paragraph>{data.tanggalPengambilan}</Paragraph>
          </span>
          <span>
            <TitleSecond level={5}>Alamat</TitleSecond>
            <Paragraph>{data.alamat}</Paragraph>
          </span>
        </Space>
        <TableBarang display={true} data={listBarang} />

        <Button
          onClick={() => {
            handleDownload();
          }}
        >
          Cetak Pesanan
        </Button>
      </Space>
    </div>
  );
};

export default DetailPesanan;
