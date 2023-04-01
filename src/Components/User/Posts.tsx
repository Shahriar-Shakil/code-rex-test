import { useUserPosts } from "@/data/get/useUserPosts";
import { IUserPost } from "@/utils/interface";
import { Col, Empty, Row, Space } from "antd";
import { Error } from "../UI/Error";
import SkeletonCard from "../UI/SkeletonCard";
import PostCard from "./PostCard";

type Props = {
  userID: number;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Posts({ userID }: Props) {
  const {
    data: posts,
    loading: postLoad,
    error: postError,
  } = useUserPosts(userID);

  let usersPosts: any;
  if (postError) {
    const { data, status } = postError.response ?? {};
    usersPosts = (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Error status={status} title={data} />;
      </Space>
    );
  } else if (postLoad) {
    usersPosts = arr.map((x) => (
      <Col key={x} xs={24} xl={6} md={8}>
        <SkeletonCard />
      </Col>
    ));
  } else if (!postLoad && posts.length > 0) {
    usersPosts = posts?.map((post: IUserPost) => (
      <Col key={post.id} xs={24} xl={6} md={8}>
        <PostCard post={post} />
      </Col>
    ));
  } else if (!postLoad && !posts.length) {
    usersPosts = (
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
      >
        <Empty />
      </Space>
    );
  }
  return <Row gutter={[16, 16]}>{usersPosts}</Row>;
}
