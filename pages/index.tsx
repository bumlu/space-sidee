import styles from "../styles/home.module.scss";
import cl from "classnames";
import { Logo } from "../components/Logo";
import { SocialNetworks } from "../components/SocialNetworks";
import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { Diamond } from "../components/Diamond";
import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <Button onClick={() => {}}>Whitepaper</Button>
        </header>
        <Navigation />
        <div>
          <Title>From dust to&nbsp;dawn</Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>Mint</Button>
            </li>
            <li>
              <Button onClick={() => {}}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">Factions</Title>
        <Menu />
      </section>
      <section className={cl(styles.section, styles.sectionRoadMap)}>
        <Diamond />
      </section>
    </div>
  );
}
