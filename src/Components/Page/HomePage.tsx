import Layout from "../Layout/Layout";
import { Col, Row } from "antd";
import UserCard from "../UI/Card";
import PaginationComponent from "../UI/Pagination";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const HomePage: React.FC = () => {
  return (
    <Layout>
      <Row gutter={[16, 16]}>
        {arr?.map((x) => {
          return (
            <Col key={x} xs={24} xl={6} md={8}>
              <UserCard />
            </Col>
          );
        })}
      </Row>
      <PaginationComponent />
    </Layout>
  );
};

export default HomePage;
