import { Card, Col, Row } from "antd";
import React from "react";
import { Descriptions } from "antd";

type Props = {};

export default function UserPage({}: Props) {
  return (
    <Row>
      <Col span={24}>
        <Card title="Mr: Jack" bordered={false} style={{ width: "100%" }}>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  );
}
