import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Skeleton } from "antd";
const { Meta } = Card;
type Props = {};

export default function SkeletonCard({}: Props) {
  return (
    <Card
      style={{ width: "100%", marginTop: 16 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={true} avatar active>
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
}
