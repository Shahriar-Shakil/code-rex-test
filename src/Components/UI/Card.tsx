import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";
import { IUser } from "@/utils/interface";
import Image from "next/image";

const { Meta } = Card;
interface Props {
  user: IUser;
}
const UserCard: React.FC<Props> = ({ user }) => {
  const { firstName, lastName, university } = user ?? {};
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "auto" }}
      cover={
        <Link href="user/1">
          <Image
            alt="example"
            src={user.image}
            width={250}
            height="250"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Link>
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Link href="user/1">
        <Meta title={`${firstName} ${lastName}`} description={university} />
      </Link>
    </Card>
  );
};

export default UserCard;
