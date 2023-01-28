import Link from "next/link";
import styles from "./style.module.scss";

interface NavigationProps {}

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Factions",
    href: "/",
  },
  {
    id: 3,
    title: "Roadmap",
    href: "/",
  },
];
export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {links.map((link) => (
          <li key={link.id} className={styles.navigationItem}>
            <Link href={link.href} className={styles.navigationLink}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
