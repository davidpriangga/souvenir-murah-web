import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const TitlePage = ({ children }) => {
  return (
    <Title style={{ margin: "0", marginBottom: 10 }} level={1}>
      {children}
    </Title>
  );
};

const TitleSecond = ({ children, level }) => {
  return (
    <Title style={{ margin: "0" }} level={level}>
      {children}
    </Title>
  );
};

const Paragraph = ({ children }) => {
  return (
    <Text style={{ margin: 0, maxWidth: 250, display: "block" }}>
      {children}
    </Text>
  );
};

export { TitlePage, TitleSecond, Paragraph };
