import { useUser } from "@/data/get/useUser";
import { getFullName } from "@/utils";
import { Card, Col, Divider, Row, Space } from "antd";
import { useRouter } from "next/router";
import Layout from "../Layout/Layout";
import { Error } from "../UI/Error";
import Posts from "../User/Posts";
import UserDescriptions from "../User/UserDescriptions";

type Props = {};

export default function UserPage({}: Props) {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useUser(Number(id));

  const { firstName, lastName } = data ?? {};
  if (error) {
    const { data, status } = error.response ?? {};
    return (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Error status={status} title={data} />;
      </Space>
    );
  }
  return (
    <Layout
      breadcrumb={[
        { name: "Home", active: false, url: "/" },
        {
          name: getFullName(firstName, lastName),
          active: true,
          url: router.asPath,
        },
      ]}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            loading={loading}
            title={loading ? "..." : getFullName(firstName, lastName)}
            bordered={false}
            style={{ width: "100%" }}
          >
            <UserDescriptions user={data} />
          </Card>
        </Col>

        <Col span={24}>
          <Divider orientation="left" plain>
            Posts
          </Divider>
          <Posts userID={Number(id)} />
        </Col>
      </Row>
    </Layout>
  );
}
