import { Pagination, PaginationProps, Space } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
  total: number;
  limit: number;
  offset: number;
  onPageSizeChange: (value: number) => void;
  setSkipValue: (value: number) => void;
}
const PaginationComponent: React.FC<Props> = ({
  total,
  limit,
  offset,
  onPageSizeChange,
  setSkipValue,
}) => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    let currentPage = offset / limit + 1;
    let checkNumber = Number.isSafeInteger(currentPage) ? currentPage : 1;

    setCurrent(checkNumber);
  }, [limit, offset]);
  const onChange: PaginationProps["onChange"] = (page) => {
    let skipValue = page > 1 ? (page - 1) * limit : 0;
    let checkNumber = Number.isSafeInteger(skipValue) ? skipValue : 0;
    setSkipValue(checkNumber);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setCurrent(1);
    setSkipValue(0);
    onPageSizeChange(pageSize);
  };
  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
    >
      <Pagination
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        defaultPageSize={limit}
        defaultCurrent={1}
        current={current}
      />
    </Space>
  );
};

export default PaginationComponent;
