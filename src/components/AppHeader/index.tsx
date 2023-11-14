import { Badge, Space, Image as StyleImage, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import React from "react";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <StyleImage
        width={40}
        src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png"
      ></StyleImage>
      <Typography.Title style={{ marginBottom: 0 }}>Dashboard</Typography.Title>
      <Space>
        <Badge count={20} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={5}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
