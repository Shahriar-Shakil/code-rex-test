import React from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

interface Props {
  status: 404 | 403 | 500;
  title: string;
}
export const Error: React.FC<Props> = ({ status, title }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/");
  };
  return (
    <Result
      status={status}
      title={status}
      subTitle={title}
      extra={
        <Button onClick={handleGoBack} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
