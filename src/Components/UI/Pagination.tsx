import React, { useState } from "react";
import { Col, PaginationProps, Row, Space } from "antd";
import { Pagination } from "antd";

const PaginationComponent: React.FC = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", justifyContent: "center",marginTop: "16px" }}
    >
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </Space>
  );
};

export default PaginationComponent;
