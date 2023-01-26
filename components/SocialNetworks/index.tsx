import cl from "classnames";
import styles from "./style.module.scss";

interface SocialNetworksProps {}

const socialNetworks = [
  {
    id: 1,
    title: "Discord",
    className: "Discord",
    link: "http//facebook.com",
  },
  {
    id: 2,
    title: "Twitter",
    className: "Twitter",
    link: "http//twitter.com",
  },
  {
    id: 3,
    title: "AntDesing",
    className: "AntDesing",
    link: "http//ant.desing.com",
  },
];
export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <ul className={styles.socialNetworks}>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.id} className={styles.socialNetworksItem}>
          <a
            href={socialNetwork.link}
            target="_blank"
            rel="noreferrer"
            className={cl(
              styles.socialNetworksLink,
              styles[`socialNetworks${socialNetwork.className}`]
            )}
          >
            {socialNetwork.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
