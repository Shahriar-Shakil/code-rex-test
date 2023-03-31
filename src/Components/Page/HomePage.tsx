import Layout from "../Layout/Layout";
import { Col, Empty, Row, Space } from "antd";
import UserCard from "../UI/Card";
import PaginationComponent from "../UI/Pagination";
import { useUsers } from "@/data/get/useUsers";
import SkeletonCard from "../UI/SkeletonCard";
import { IUser } from "@/utils/interface";
import { Error } from "../UI/Error";

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage: React.FC = () => {
  const { data, loading, error } = useUsers();

  let users: any;
  if (error) {
    const { title, status } = error.response ?? {};
    users = (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Error status={status} title={title} />;
      </Space>
    );
  } else if (loading) {
    users = arr.map((x) => (
      <Col key={x} xs={24} xl={6} md={8}>
        <SkeletonCard />
      </Col>
    ));
  } else if (!loading && data.length > 0) {
    users = data?.map((user: IUser) => (
      <Col key={user.id} xs={24} xl={6} md={8}>
        <UserCard user={user} />
      </Col>
    ));
  } else if (!loading && !data.length) {
    users = (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Empty />
      </Space>
    );
  }
  return (
    <Layout>
      <Row gutter={[16, 16]}>{users}</Row>
      {data?.length && <PaginationComponent />}
    </Layout>
  );
};

export default HomePage;
