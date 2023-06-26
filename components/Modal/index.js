import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

/**
 *
 * @param {{title: string , onCancel : function, onOk:function  }} params
 * @returns
 */

export const showDeleteConfirm = (params) => {
  confirm({
    title: `Yakin Mau Hapus ( ${params.title} ) ?`,
    icon: <ExclamationCircleFilled />,
    content:
      "dengan menghapus data ini mungkin akan berpengaruh pada data lainya",
    okText: "Ya",
    okType: "danger",
    cancelText: "Tidak",
    onOk: params.onOk,
    transitionName: "",
  });
};
