import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "App",
    icon: <AppstoreOutlined />,
    label: "App",
  },
  {
    key: "Login",
    icon: <LoginOutlined />,
    label: "Login",
  },
  {
    key: "Register",
    icon: <UserAddOutlined />,
    label: "Register",
  },
];
const TopNav = () => {
  return (
    <>
      <Menu className="menu" mode="horizontal" items={menuItems} />
    </>
  );
};

export default TopNav;
