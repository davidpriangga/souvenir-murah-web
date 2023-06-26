import React from "react";
import { Button } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const ButtonAdd = ({ label, handleClick, submit }) => {
  return (
    <Button
      type="primary"
      onClick={handleClick}
      htmlType={submit ? "submit" : ""}
      icon={<PlusOutlined />}
    >
      {label}
    </Button>
  );
};

const ButtonEdit = ({ label, handleClick }) => {
  return (
    <Button type="primary" onClick={handleClick} icon={<EditOutlined />}>
      {label}
    </Button>
  );
};

const ButtonDetail = ({ label, handleClick }) => {
  return (
    <Button type="primary" onClick={handleClick} icon={<InfoCircleOutlined />}>
      {label}
    </Button>
  );
};

const ButtonDelete = ({ label, handleClick }) => {
  return (
    <Button
      type="primary"
      danger
      onClick={handleClick}
      icon={<DeleteOutlined />}
    >
      {label}
    </Button>
  );
};

export { ButtonAdd, ButtonEdit, ButtonDelete, ButtonDetail };
