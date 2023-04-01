import { useUsers } from "@/data/get/useUsers";
import { useUsersSearch } from "@/data/get/useUsersSearch";
import { IUser } from "@/utils/interface";
import { Col, Empty, Row, Space, Input } from "antd";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Error } from "../UI/Error";
import PaginationComponent from "../UI/Pagination";
import SkeletonCard from "../UI/SkeletonCard";
import UserCard from "../User/userCard";
const { Search } = Input;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [skipValue, setSkipValue] = useState(0);
  const {
    data: usersData,
    limit,
    skip,
    total,
    loading,
    error,
  } = useUsers(pageSize, skipValue);
  const { data: searchData, loading: searchLoad } = useUsersSearch(searchTerm);

  const onSearchHandler = (value: string) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    if (searchTerm.length > 0) {
      setData(searchData);
    } else {
      setData(usersData);
    }
  }, [searchTerm, searchData, usersData]);

  let users: any;
  if (error) {
    const { data, status } = error.response ?? {};
    users = (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Error status={status} title={data} />;
      </Space>
    );
  } else if (loading || searchLoad) {
    users = arr.map((x) => (
      <Col key={x} xs={24} xl={6} md={8}>
        <SkeletonCard />
      </Col>
    ));
  } else if (!loading && data?.length > 0) {
    users = data?.map((user: IUser) => (
      <Col key={user.id} xs={24} xl={6} md={8}>
        <UserCard user={user} />
      </Col>
    ));
  } else if (!loading && !data?.length) {
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
    <Layout breadcrumb={[{ name: "Home", active: true, url: "/" }]}>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 16, offset: 8 }}
          md={{ span: 10, offset: 14 }}
          lg={{ span: 8, offset: 16 }}
          // xl={{ span: 6, offset: 18 }}
        >
          <Search
            onSearch={onSearchHandler}
            placeholder="Search By name"
            allowClear
            loading={searchLoad}
          />
        </Col>
        {users}
      </Row>
      {data?.length ? (
        <PaginationComponent
          onPageSizeChange={setPageSize}
          setSkipValue={setSkipValue}
          offset={skipValue}
          limit={limit}
          total={total}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default HomePage;
