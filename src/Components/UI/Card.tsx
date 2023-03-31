import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

const UserCard: React.FC = () => (
  <Card
    style={{ width: 300, margin: "auto" }}
    cover={
      <Link href="user/1">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </Link>
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default UserCard;
