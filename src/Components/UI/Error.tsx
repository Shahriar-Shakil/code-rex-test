import React from "react";
import { Button, Result } from "antd";

interface Props {
  status: 404 | 403 | 500;
  title: string;
}
export const Error: React.FC<Props> = ({ status, title }) => (
  <Result
    status={status}
    title={status}
    subTitle={title}
    extra={<Button type="primary">Back Home</Button>}
  />
);
