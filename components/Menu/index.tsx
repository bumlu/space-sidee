import Link from "next/link";
import cl from "classnames";
import styles from "./style.module.scss";
import { Fragment } from "react";
import { CardsForMenu } from "../CardsForMenu";

interface MenuProps {}

const links = [
  {
    id: 1,
    title: "Blighted badlands",
    href: "/",
    image: "/public/images/blighted_badlands.jpg",
    active: true,
  },
  {
    id: 2,
    title: "Glacial frontier",
    href: "/",
    image: "/public/images/glacial_frontier.jpg",
    active: false,
  },
  {
    id: 3,
    title: "Sky citadel",
    href: "/",
    image: "/public/images/sky_citadel.jpg",
    active: false,
  },
  {
    id: 4,
    title: "Sundered grove",
    href: "/",
    image: "/public/images/sundered_grove.jpg",
    active: false,
  },
];
export const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={styles.menu}>
      {links.map((link) => (
        <Fragment key={link.id}>
          <Link
            href={link.href}
            key={link.id}
            onClick={(event) => {
              event.preventDefault();
            }}
            className={cl(
              styles.menuLink,
              link.active && styles.menuLinkActive
            )}
          >
            {link.title}
            <CardsForMenu
              src={link.image}
              description={link.title}
              onClick={() => {}}
            />
          </Link>
        </Fragment>
      ))}
    </div>
  );
};
