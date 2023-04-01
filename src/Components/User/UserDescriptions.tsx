import { getFullName } from "@/utils";
import { IUser } from "@/utils/interface";
import { Descriptions } from "antd";
import React from "react";

type Props = {
  user: IUser;
};

export default function UserDescriptions({ user }: Props) {
  const { firstName, lastName, phone, address, username, email } = user ?? {};

  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="Name">
        {getFullName(firstName, lastName)}
      </Descriptions.Item>
      <Descriptions.Item label="Telephone">
        <a href={`tel:${phone}`}>{phone}</a>
      </Descriptions.Item>
      <Descriptions.Item label="Live">
        {address?.address}, {address?.city}
      </Descriptions.Item>
      <Descriptions.Item label="username">{username}</Descriptions.Item>
      <Descriptions.Item label="email">{email}</Descriptions.Item>
    </Descriptions>
  );
}
