import { getFullName } from "@/utils";
import { IUser } from "@/utils/interface";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { Meta } = Card;
interface Props {
  user: IUser;
}
const UserCard: React.FC<Props> = ({ user }) => {
  const { id, firstName, lastName, university } = user ?? {};
  return (
    <Card
      hoverable
      style={{ width: "100%", margin: "auto" }}
      cover={
        <Link href={`users/${id}`}>
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
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Link href={`users/${id}`}>
        <Meta
          title={getFullName(firstName, lastName)}
          description={university}
        />
      </Link>
    </Card>
  );
};

export default UserCard;
