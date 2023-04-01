import { Layout as AntLayout } from "antd";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
const { Header: AntHeader } = AntLayout;
type Props = {};

export default function Header({}: Props) {
  return (
    <AntHeader>
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
    </AntHeader>
  );
}
