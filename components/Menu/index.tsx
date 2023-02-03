import Link from "next/link";
import cl from "classnames";
import styles from "./style.module.scss";
import { Fragment } from "react";

interface MenuProps {}

const links = [
  {
    id: 1,
    title: "Blighted badlands",
    href: "/",
    active: true,
  },
  {
    id: 2,
    title: "Glacial frontier",
    href: "/",
    active: false,
  },
  {
    id: 3,
    title: "Sky citadel",
    href: "/",
    active: false,
  },
  {
    id: 4,
    title: "Sundered grove",
    href: "/",
    active: false,
  },
];
export const Menu: React.FC<MenuProps> = () => {
  return <span />;
};
