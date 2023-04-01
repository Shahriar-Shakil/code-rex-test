import { IUserPost } from "@/utils/interface";
import { Card, Typography } from "antd";
import React from "react";

type Props = {
  post: IUserPost;
};
const { Paragraph } = Typography;

export default function PostCard({ post }: Props) {
  return (
    <Card title={post?.title} bordered={true}>
      <Card.Meta
        description={
          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: true,
            }}
          >
            {post.body}
          </Paragraph>
        }
      ></Card.Meta>
    </Card>
  );
}
